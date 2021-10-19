const chokidar = require('chokidar')
const md5 = require('md5')
const fs = require('fs-extra')
const path = require('path')
const { initDocs, injectFile } = require('./buildDocs')
const { spawn } = require('child_process')
let preveMd5 = {}

const root = process.cwd()
const filePath = path.resolve(root, './src/packages/**/docs/*.md')
const filePath2 = path.resolve(root, './src/packages/**/**/docs/*.md')
const filePath3 = path.resolve(root, './src/packages/**/**/**/docs/*.md')
console.log(`开始构建docs`, filePath, filePath2, filePath3)
initDocs()

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
  const toPath = fromPath.replace(/\/docs\//, '/').replace(/\/src\/packages/, '/docs/packages')
  if (fs.pathExistsSync(fromPath)) {
    fs.copySync(fromPath, toPath)
    injectFile(toPath)
  }
  initDocs()
})

// 执行dumi命令
spawn('dumi', ['dev'], {
  stdio: 'inherit',
  cwd: path.resolve(root, `./`)
})
