module.exports = {
  // base
  env: {
    path: 'src/packages/base/env/src/index.ts',
    unNeedSplit: true,
    // 是否需要公共utils
    needCommonUtil: false,
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/env',
        exports: ''
      }
    ]
  },
  canIUse: {
    path: 'src/packages/base/canIUse/src/index.ts',
    unNeedSplit: true,
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/caniuse',
        exports: ''
      }
    ]
  },

  // navigate
  navigate: {
    path: 'src/packages/navigate/src/index.ts',
    pkgInfo: [
      {
        version: '1.0.0',
        name: '@uni/navigate'
      }
    ]
  }
}
