(function (w) {
  const mine = {}
  mine.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
      console.log('myGlobalMethod()-----')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', (el,bind)=>{
      el.innerText = bind.value.toUpperCase()
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      console.log('$myMethod()-----')
    }
  }
  w.mine = mine
})(window)