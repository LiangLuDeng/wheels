const expect = chai.expect;
import Vue from "vue";
import Input from "../src/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
  const Constructor = Vue.extend(Input);
  let vm;
  it("存在.", () => {
    expect(Input).to.be.ok;
  });

  it("可以设置etype = error和emsg", () => {
    vm = new Constructor({
      propsData: {
        etype: "error",
        emsg:'错误提示了吗'
      },
    }).$mount();
    let useElement = vm.$el.querySelector("use");
    expect(useElement.getAttribute("xlink:href")).to.equal(`#icon-error`);
    useElement = vm.$el.querySelector("span");
    expect(useElement.innerText).to.equal('错误提示了吗');
    vm.$destroy();
  });
});

describe('事件的测试', () => {
  const Constructor = Vue.extend(Input);
  let vm;
  afterEach(() => {
    vm.$destroy();
  })
  it("可以触发各种事件", () => {
    vm = new Constructor({}).$mount();
    const callback = sinon.fake();
    ['focus', 'blur', 'change', 'input'].forEach(eName => {
      vm.$on(eName, callback)
      // 触发input事件
      let event = new Event(eName)
      Object.defineProperty(event, 'target',{value: {value: `${eName}_event`,enumerable: true}})
      const cElement = vm.$el.querySelector("input");
      cElement.dispatchEvent(event);
      console.log(event.target)
      expect(callback).to.have.been.calledWith(event.target.value);
    })
    
  });
})