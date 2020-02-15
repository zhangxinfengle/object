
/*function Observer(data) {
    this.data = data;
    this.walk(data);

}


Observer.prototype = {
    walk: function(data) {

        var self = this;

        Object.keys(data).forEach(function(key) {
            self.defineReactive(data, key, data[key]);

        });

    },
    defineReactive: function(data, key, val) {
        var dep = new Dep();


        var childObj = observe(val);

        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,

            get: function getter () {
                //console.log(Dep.target)
                if (Dep.target) {
                    dep.addSub(Dep.target);

                    /!*console.log(dep.subs)*!/
                }
                return val;
            },
            set: function setter (newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;

                dep.notify();
            }
        });
    }
};
function observe(value, vm) {
    //console.log(value)
    if (!value || typeof value !== 'object') {
        return;
    }
    return new Observer(value);
};
function Dep () {
    this.subs = [];

}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();


        });
    }
};
Dep.target = null;*/

/*
function Observer(data) {
this.data=data;
this.walk(data);

}

Observer.prototype={
    walk:function (data) {
        //console.log(data)

        Object.keys(data).forEach(key=>{

            this.defineReactive(data,key,data[key])
    })
    },
    defineReactive:function (data,key,value) {
        var dep=new Dep();



        observe(value);
        Object.defineProperty(data,key,{
            enumerable:true,
            configurable:true,
            get:function gettet() {
                if(Dep.target){

                    dep.addsub(Dep.target)
                }
              // console.log(value)
                return value
            },
        set:function setter(newValue) {
            if(newValue==value)
            {
                return;
            }
                else{
                     value=newValue;
                    dep.notify()
            }
        }
        })


    }

};
function observe(value) {


    if(!value||typeof value!="object"){

        return
    }
    return new Observer(value)
}
function Dep() {
    this.subs=[]

}
Dep.prototype={

addsub:function (sub) {

    this.subs.push(sub)
},
    notify:function () {


    this.subs.forEach(function(sub) {
                sub.update();
        })
    }
    
}
Dep.target=null;
*/


function Observer(data){

    this.data=data;
    this.walk(data)



}
Observer.prototype = {


    walk: function (data) {
     Object.keys(data).forEach(key=>{
      this.defineReactive(data,key,data[key])
        })
    },


    defineReactive:function (data,key,value) {
        var dep=new Dep();
           observe(value);
        Object.defineProperty(data,key,{
            enumerable:true,
            configurable:true,

           get:function()
            {
                if(Dep.target){
                    dep.addSub(Dep.target)
                }
                return value
            },

            set:function (newValue){
                if(newValue==value){
                    return
                }
                else{
                    value=newValue;
                    dep.notify()
                }
            }

        })
    }

};

function observe(value){
    if(!value||typeof value!='object')
    {
        return
    }
   // console.log(value)
    return new Observer(value)
}
function Dep() {
    this.subs=[]
}
Dep.prototype={

    addSub:function (sub) {
        this.subs.push(sub)


    },
    notify:function () {
        this.subs.forEach(sub=>{
            //console.log(sub)
            sub.update()
        })
    }
}
Dep.target=null

