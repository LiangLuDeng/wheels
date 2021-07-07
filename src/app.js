
import Vue from "vue"
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'


// console.log(Button)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)


new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      message: ''
    }
  },
  methods: {
    inputChange(e) {
      console.log(e)
    }
  }
})

// import chai from 'chai'
// import chaispies from 'chai-spies'
// chai.use(chaispies)
// const expect = chai.expect;
// /**单元测试 */
// {
//   // 测试button 的 icon属性
//   const ButtonConstructor = Vue.extend(Button);
//   const vm =  new ButtonConstructor({
//     propsData: {
//       icon:'bad'
//     },
//   })
//   vm.$mount('#test')
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#icon-bad')
// }
// {
//   // 测试button 的 order css属性 默认应该是‘1’
//   const ButtonConstructor = Vue.extend(Button);
//   const newdiv = document.createElement('div');
//   document.body.appendChild(newdiv)
//   const vm =  new ButtonConstructor({
//     propsData: {
//       icon:'set',
//     }
//   })
//   vm.$mount(newdiv)
//   let svg = vm.$el.querySelector('svg')
//   let { order } = window.getComputedStyle(svg);
//   expect(order).to.eq('1')
//   vm.$el.remove()
//   vm.$destroy()
// }

// {
//   // 测试button 的 click方法，引入chai-spies插件，插入间谍函数！
//   const ButtonConstructor = Vue.extend(Button);
//   const newdiv = document.createElement('div');
//   document.body.appendChild(newdiv)
//   const vm =  new ButtonConstructor({
//     propsData: {
//       icon:'set',
//     }
//   })
//   vm.$mount(newdiv)
//   let spyfn = chai.spy(function(){
//     console.log('嗨！我有点击哦')
//   })
//   vm.$on('click',spyfn)
//   vm.$el.click()
//   // 期待被调用
//   expect(spyfn).to.have.been.called()
//   vm.$el.remove()
//   vm.$destroy()
// }