# 自定义form表单
  - 高阶组件封装api

## 参考
- [rc-form](https://github.com/react-component/form)
- [stroybook](https://github.com/storybookjs/storybook)
  - 代码开发完成之后，需要预览、调试、说明相关组件库的配置项，可以使用这个
- [learn](https://github.com/learn/learn)
- learn解决一下几个问题:
  - 自动解决packages之间的依赖关系
  - 通过git检测问价你该懂，自动发布
  - 根据git提交记录，自动生成changelog

- learn bootstrap 使learn初始化整个项目，
- learn pushlish 使learn 来发布所有被索引的所有模块

- 本地大包之后的，运行看效果
  - npm install -g serve
  - serve -s build

## 变更引入方式
```
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [ // 添加这些配置之后，不用再引入 import 'antd/dist/antd.css';
      ["import", { // 对应插件 babel-plugin-import
        "libraryName": "antd",
        "style": "css"
      }]
    ]
  },

```