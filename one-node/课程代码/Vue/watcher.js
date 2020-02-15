/*
function Watcher(vm, exp, cb) {
    this.cb = cb;  //callback
    this.vm = vm;   //new object
    this.exp = exp;//key
    this.value = this.get(); //value // 将自己添加到订阅器的操作


}
Watcher.prototype = {
    update: function() {
        this.run();
       /!* console.log(this.vm)
       console.log(this.cb)
        console.log(this.exp)
       console.log(this.value)*!/
       },
    run: function() {
        var value = this.vm.data[this.exp];//new value
        // console.log(value)
        var oldVal = this.value;
        if (value !== oldVal) {
           this.value = value;
           //console.log(this.value)
            this.cb.call(this.vm, value, oldVal);
        }
    },
    get: function() {
        Dep.target = this;  // 缓存自己


        var value = this.vm.data[this.exp];  // 强制执行监听器里的get函数
        //Dep.target = null;  // 释放自己
       //console.log(value)



        return value;

    }
};*/
function Watcher(vm,exp,cb) {
    this.cb = cb;
    this.vm=vm;
    this.exp=exp;
    this.oldvalue = this.get();
}
Watcher.prototype={
    update:function () {
        value=this.vm.data[this.exp]
            var oldValue=this.oldvalue
        this.cb.call(this.vm, value, oldValue);
        },
    get:function () {
        Dep.target=this;
            var value=this.vm.data[this.exp]
        return value

    }


}