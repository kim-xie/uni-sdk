const path = require('path')
const shell = require('shelljs')
const { initDocs } = require('./buildDocs')
/**
 * 构建文档
 */
initDocs().then(() => {
  // 执行dumi命令
  shell.exec('dumi build', { async: true, silent: false }, (code, stdout, stderr) => {
    if (code) {
      console.log('exec code: ', code)
      return
    }
    console.log(`exec stdout: ${stdout}`)
    console.log(`exec stderr: ${stderr}`)
  })
})
