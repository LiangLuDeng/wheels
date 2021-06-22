# dengll-wheels 自定义的 vue UI组件库
[![Build Status](https://travis-ci.com/LiangLuDeng/wheels.svg?branch=master)](https://travis-ci.com/LiangLuDeng/wheels)
## 介绍
#### 有哪些轮子
<!-- - 简单轮子：按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴（代码已完成）
- 进阶轮子：级联选择、无缝轮播、响应式导航条、分页、表单验证、Table、图片上传、Sticky、Tree、Suggestion、Datepicker（代码未完成）
其他：路由、状态管理（代码未完成）
注意：这只是目前的计划，具体要完成的轮子可能与上面有出入。 -->

#### 项目特点
- 使用 Travis CI 进行持续集成
- 有丰富的单元测试，项目完成时，期望测试覆盖率超过 90%
- 初期使用 parcel 构建方便新人上手，后期改为 Vue Cli 3 以实现更多功能

## 开始使用
### 安装
```
npm i --save zdengll-0-1
```

### 引入
```vue
  <template>
    <div id="app">
      <Button>我是g-button</Button>
    </div>
  </template>

  <script>
  import 'zdengll-0-1/dist/index.css'
  import {Button} from 'zdengll-0-1'

  export default {
    name: 'App',
    components: {
      Button,
    }
  }
  </script>
```

