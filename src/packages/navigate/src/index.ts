import { isAliMiniProgram, isWeChatMiniProgram, isWeb, isBaiduMiniProgram } from '@/packages/base/env/src'
import aliMiniAppModule from './ali-miniprogram/index'
import weChatModule from './wechat-miniprogram/index'
import webModule from './web/index'
import baiDuModule from './baidu-miniprogram/index'
import { IPushOptions, IGoOptions, IPopOptions, IReplaceOptions, IReLaunchOptions, ISwitchTabOptions } from './types'

export const push = (options: IPushOptions) => {
  if (isWeb) {
    return webModule.push(options)
  } else if (isWeChatMiniProgram) {
    return weChatModule.push(options)
  } else if (isAliMiniProgram) {
    return aliMiniAppModule.push(options)
  } else if (isBaiduMiniProgram) {
    return baiDuModule.push(options)
  } else {
    throw new Error('Uni SDK：navigate.push 暂不支持')
  }
}

export const go = (options: IGoOptions) => {
  if (isWeb) {
    return webModule.go(options)
  } else if (isWeChatMiniProgram) {
    return weChatModule.go(options)
  } else if (isAliMiniProgram) {
    return aliMiniAppModule.go(options)
  } else if (isBaiduMiniProgram) {
    return baiDuModule.go(options)
  } else {
    throw new Error('Uni SDK：navigate.go 暂不支持')
  }
}

export const back = (options?: IPopOptions) => {
  if (isWeb) {
    return webModule.back(options)
  } else if (isWeChatMiniProgram) {
    return weChatModule.back(options)
  } else if (isAliMiniProgram) {
    return aliMiniAppModule.back(options)
  } else if (isBaiduMiniProgram) {
    return baiDuModule.back(options)
  } else {
    throw new Error('Uni SDK：navigate.back 暂不支持')
  }
}

export const replace = (options: IReplaceOptions) => {
  if (isWeb) {
    return webModule.replace(options)
  } else if (isWeChatMiniProgram) {
    return weChatModule.replace(options)
  } else if (isAliMiniProgram) {
    return aliMiniAppModule.replace(options)
  } else if (isBaiduMiniProgram) {
    return baiDuModule.replace(options)
  } else {
    throw new Error('Uni SDK：navigate.replace 暂不支持')
  }
}

export const reLaunch = (options: IReLaunchOptions) => {
  if (isWeb) {
    return webModule.reLaunch(options)
  } else if (isWeChatMiniProgram) {
    return weChatModule.reLaunch(options)
  } else if (isAliMiniProgram) {
    return aliMiniAppModule.reLaunch(options)
  } else if (isBaiduMiniProgram) {
    return baiDuModule.reLaunch(options)
  } else {
    throw new Error('Uni SDK：navigate.reLaunch 暂不支持')
  }
}

export const switchTab = (options: ISwitchTabOptions) => {
  if (isWeb) {
    return webModule.switchTab(options)
  } else if (isWeChatMiniProgram) {
    return weChatModule.switchTab(options)
  } else if (isAliMiniProgram) {
    return aliMiniAppModule.switchTab(options)
  } else if (isBaiduMiniProgram) {
    return baiDuModule.switchTab(options)
  } else {
    throw new Error('Uni SDK：navigate.switchTab 暂不支持')
  }
}

export default {
  push,
  back,
  reLaunch,
  switchTab,
  replace,
  go
}
