const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

  it('存在.', () => {
    expect(Col).to.exist
  })
  
  it('接收 span 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1,
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-1')).to.be.true
    div.remove()
    vm.$destroy()
  })
  it('接收 offset 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 2,
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-2')).to.be.true
    div.remove()
    vm.$destroy()
  })
  it('接收 ipad,narrowPc,pc, widePc等 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    ['ipad','narrowPc','pc','widePc'].forEach(deviceName => {
      let propsData = {};
      propsData[deviceName] = {
        span: 2,
        offset: 10,
      }
      const vm = new Constructor({
        propsData,
      }).$mount(div)
      const deName = deviceName.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase();
      expect(vm.$el.classList.contains(`offset-${deName}-10`)).to.be.true
      expect(vm.$el.classList.contains(`col-${deName}-2`)).to.be.true
      div.remove()
      vm.$destroy()
    })
  })
})