

function SelfVue (options) {
    var self = this;
    //console.log(options)
    this.data = options.data;


    this.methods = options.methods;
    //console.log(this)
//console.log(this.data)

    //console.log(options.data) //SelfVue 的实列

    //index 中的data Object { title: "hello world", name: "canfoo", age: "doctor" }
    //console.log(Object.keys(this.data))
    //Array(3) [ "title", "name", "age" ]


    Object.keys(this.data).forEach(function(key) {

        self.proxyKeys(key);
    });
    //console.log(this.data)
    observe(this.data);
   console.log(this.data)

    new Compile(options.el, this);
    options.mounted.call(this);

    return this;
}
SelfVue.prototype = {
    proxyKeys: function (key) {
        var self = this;


 //console.log(key)


        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function getter () {

                /!*console.log(self.data[key])*!/
                 //console.log(self.data)

       //console.log(self.data[key])
              //  console.log(key)
                return self.data[key];
                },

            set: function setter (newVal) {
                self.data[key] = newVal;

               //console.log(self.data[key]+'------')
            }
        });
    }
}


/*
function SelfVue1(options) {
    this.data=options.data

    Object.keys()
    
}
SelfVue1.prototype={

    proxyKeys:function (key) {
        var self=this;
       Object.defineProperty(this,key,{
           configurable:true;
           enumerable:true;
           get:function(){
               return self.data[key]
           },

            set:function(newValue){

               newValue=self.data[key]
           }


       })
    }

}

*/
