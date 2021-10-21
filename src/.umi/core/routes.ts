// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/codes/uni-sdk/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('D:/codes/uni-sdk/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('D:/codes/uni-sdk/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('D:/codes/uni-sdk/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('D:/codes/uni-sdk/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('D:/codes/uni-sdk/docs/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/README.md",
          "updatedTime": 1634661490000,
          "hero": {
            "image": "https://img.alicdn.com/imgextra/i3/O1CN01lt5FH71VubB3j3Okd_!!6000000002713-2-tps-412-412.png",
            "title": "Uni API",
            "desc": "<div class=\"markdown\"><p>小程序容器和 Web 容器的跨端 API 解决方案</p></div>",
            "actions": [
              {
                "text": "快速开始",
                "link": "/packages"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/b3e102cd-5dad-4046-a02a-be33241d1cc7/kj9t8oji_w144_h144.png",
              "title": "多端统一",
              "desc": "<div class=\"markdown\"><p>支持<code>web、微信小程序、头条小程序、阿里小程序、百度小程序、快手小程序</code>应用</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>简易使用，快速接入</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/f093e060-726e-471c-a53e-e988ed3f560c/kj9t9sk7_w144_h144.png",
              "title": "API丰富",
              "desc": "<div class=\"markdown\"><p>提供丰富完善的<code>API</code></p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png",
              "title": "文档完善",
              "desc": "<div class=\"markdown\"><p>详尽的 API 文档及示例</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "按环境拆包",
              "desc": "<div class=\"markdown\"><p>极致代码体积，体验升级</p></div>"
            }
          ],
          "slugs": [
            {
              "depth": 1,
              "value": "Uni API",
              "heading": "uni-api"
            },
            {
              "depth": 1,
              "value": "示例",
              "heading": "示例"
            }
          ],
          "title": "Uni API"
        },
        "title": "Uni API"
      },
      {
        "path": "/packages/base/can-iuse",
        "component": require('D:/codes/uni-sdk/docs/packages/base/canIUse/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/base/canIUse/README.md",
          "updatedTime": 1634830503949,
          "slugs": [
            {
              "depth": 1,
              "value": "canIUse",
              "heading": "caniuse"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "方法",
              "heading": "方法"
            },
            {
              "depth": 3,
              "value": "canIUse(options)",
              "heading": "caniuseoptions"
            },
            {
              "depth": 4,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 4,
              "value": "返回",
              "heading": "返回"
            }
          ],
          "title": "canIUse",
          "nav": {
            "path": "/packages",
            "title": "Packages"
          },
          "group": {
            "path": "/packages/base",
            "title": "基础功能"
          }
        },
        "title": "canIUse"
      },
      {
        "path": "/packages/base/env",
        "component": require('D:/codes/uni-sdk/docs/packages/base/env/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/base/env/README.md",
          "updatedTime": 1634661490000,
          "group": {
            "title": "基础功能",
            "path": "/packages/base"
          },
          "title": "env",
          "slugs": [
            {
              "depth": 1,
              "value": "env",
              "heading": "env"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "APIS",
              "heading": "apis"
            },
            {
              "depth": 3,
              "value": "isWeb: boolean",
              "heading": "isweb-boolean"
            },
            {
              "depth": 3,
              "value": "isAliMiniProgram: boolean",
              "heading": "isaliminiprogram-boolean"
            },
            {
              "depth": 3,
              "value": "isWeChatMiniProgram: boolean",
              "heading": "iswechatminiprogram-boolean"
            },
            {
              "depth": 3,
              "value": "isByteDanceMiniProgram: boolean",
              "heading": "isbytedanceminiprogram-boolean"
            },
            {
              "depth": 3,
              "value": "isBaiduMiniProgram: boolean",
              "heading": "isbaiduminiprogram-boolean"
            },
            {
              "depth": 3,
              "value": "isKuaiShouMiniProgram: boolean",
              "heading": "iskuaishouminiprogram-boolean"
            },
            {
              "depth": 3,
              "value": "isNode: boolean",
              "heading": "isnode-boolean"
            },
            {
              "depth": 2,
              "value": "各容器内返回结果",
              "heading": "各容器内返回结果"
            }
          ],
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "env"
      },
      {
        "path": "/packages/navigate/back",
        "component": require('D:/codes/uni-sdk/docs/packages/navigate/back/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/navigate/back/README.md",
          "updatedTime": 1634830420686,
          "group": {
            "title": "路由",
            "path": "/packages/navigate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "navigate.back",
              "heading": "navigateback"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "Install",
              "heading": "install"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 2,
              "value": "参数",
              "heading": "参数"
            }
          ],
          "title": "navigate.back",
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "navigate.back"
      },
      {
        "path": "/packages/navigate/go",
        "component": require('D:/codes/uni-sdk/docs/packages/navigate/go/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/navigate/go/README.md",
          "updatedTime": 1634830420689,
          "group": {
            "title": "路由",
            "path": "/packages/navigate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "navigate.go",
              "heading": "navigatego"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "Install",
              "heading": "install"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 2,
              "value": "参数",
              "heading": "参数"
            }
          ],
          "title": "navigate.go",
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "navigate.go"
      },
      {
        "path": "/packages/navigate/push",
        "component": require('D:/codes/uni-sdk/docs/packages/navigate/push/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/navigate/push/README.md",
          "updatedTime": 1634830420691,
          "group": {
            "title": "路由",
            "path": "/packages/navigate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "navigate.push",
              "heading": "navigatepush"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 2,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 2,
              "value": "web 中使用",
              "heading": "web-中使用"
            }
          ],
          "title": "navigate.push",
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "navigate.push"
      },
      {
        "path": "/packages/navigate/re-launch",
        "component": require('D:/codes/uni-sdk/docs/packages/navigate/reLaunch/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/navigate/reLaunch/README.md",
          "updatedTime": 1634830420693,
          "group": {
            "title": "路由",
            "path": "/packages/navigate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "navigate.reLaunch",
              "heading": "navigaterelaunch"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "Install",
              "heading": "install"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 2,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 2,
              "value": "web 中使用",
              "heading": "web-中使用"
            }
          ],
          "title": "navigate.reLaunch",
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "navigate.reLaunch"
      },
      {
        "path": "/packages/navigate/replace",
        "component": require('D:/codes/uni-sdk/docs/packages/navigate/replace/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/navigate/replace/README.md",
          "updatedTime": 1634830420694,
          "group": {
            "title": "路由",
            "path": "/packages/navigate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "navigate.replace",
              "heading": "navigatereplace"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "Install",
              "heading": "install"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 2,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 2,
              "value": "web 中使用",
              "heading": "web-中使用"
            }
          ],
          "title": "navigate.replace",
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "navigate.replace"
      },
      {
        "path": "/packages/navigate/switch-tab",
        "component": require('D:/codes/uni-sdk/docs/packages/navigate/switchTab/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/navigate/switchTab/README.md",
          "updatedTime": 1634830420696,
          "group": {
            "title": "路由",
            "path": "/packages/navigate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "navigate.switchTab",
              "heading": "navigateswitchtab"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "参数",
              "heading": "参数"
            }
          ],
          "title": "navigate.switchTab",
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "navigate.switchTab"
      },
      {
        "path": "/packages/quick-start",
        "component": require('D:/codes/uni-sdk/docs/packages/quickStart/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/quickStart/README.md",
          "updatedTime": 1634661490000,
          "group": {
            "title": "介绍",
            "order": 0,
            "__fallback": true,
            "path": "/packages/quick-start"
          },
          "title": "快速开始",
          "slugs": [
            {
              "depth": 1,
              "value": "快速开始",
              "heading": "快速开始"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 3,
              "value": "小包（推荐）",
              "heading": "小包推荐"
            },
            {
              "depth": 3,
              "value": "大包",
              "heading": "大包"
            }
          ],
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "快速开始"
      },
      {
        "path": "/packages/quick-start/plugin",
        "component": require('D:/codes/uni-sdk/docs/packages/quickStart/plugin/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/packages/quickStart/plugin/README.md",
          "updatedTime": 1634661490000,
          "group": {
            "title": "介绍",
            "order": 0,
            "path": "/packages/quick-start"
          },
          "title": "分端构建",
          "slugs": [
            {
              "depth": 1,
              "value": "分端构建",
              "heading": "分端构建"
            },
            {
              "depth": 2,
              "value": "支持",
              "heading": "支持"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 3,
              "value": "Rax",
              "heading": "rax"
            },
            {
              "depth": 4,
              "value": "安装：",
              "heading": "安装-1"
            },
            {
              "depth": 4,
              "value": "使用：",
              "heading": "使用-1"
            }
          ],
          "nav": {
            "path": "/packages",
            "title": "Packages"
          }
        },
        "title": "分端构建"
      },
      {
        "path": "/packages/base",
        "meta": {},
        "exact": true,
        "redirect": "/packages/base/can-iuse"
      },
      {
        "path": "/packages",
        "meta": {},
        "exact": true,
        "redirect": "/packages/quick-start"
      },
      {
        "path": "/packages/navigate",
        "meta": {},
        "exact": true,
        "redirect": "/packages/navigate/back"
      }
    ],
    "title": "Uni SDK",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
