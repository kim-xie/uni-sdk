const chokidar = require('chokidar')
const md5 = require('md5')
const fs = require('fs-extra')
const path = require('path')
const shell = require('shelljs')
const { initDocs, injectFile } = require('./buildDocs')
let preveMd5 = {}

;(async () => {
  const root = process.cwd()
  const filePath = path.resolve(root, './src/packages/**/docs/*.md')
  const filePath2 = path.resolve(root, './src/packages/**/**/docs/*.md')
  const filePath3 = path.resolve(root, './src/packages/**/**/**/docs/*.md')
  await initDocs()

  /**
   * 持久监听文档目录
   */
  const watcher = chokidar.watch([filePath, filePath2, filePath3], {
    ignored: /demo\/.*/, // ignore dotfiles
    persistent: true
  })

  /**
   * MD5后的文档内容变更
   */
  watcher.on('change', filePath => {
    let currentMd5 = md5(fs.readFileSync(filePath, 'utf-8'))
    if (currentMd5 == preveMd5[filePath]) {
      return
    }
    preveMd5[filePath] = currentMd5
    console.log(`File ${filePath} has been changed`)
    const fromPath = filePath
    const toPath = path.join(fromPath.split('docs').join('').replace('src', 'docs'))
    if (fs.pathExistsSync(fromPath)) {
      fs.copySync(fromPath, toPath)
      injectFile(toPath)
    }
  })

  // 执行dumi命令
  shell.exec('dumi dev', { async: true, silent: false }, (code, stdout, stderr) => {
    if (code) {
      console.log('exec code: ', code)
      return
    }
    console.log(`exec stdout: ${stdout}`)
    console.log(`exec stderr: ${stderr}`)
  })
})()
