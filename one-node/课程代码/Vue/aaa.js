function  Compile(el,vm) {
    this.vm=vm;
    this.el = document.querySelector(el);
   this.fragment=null;
   this.init()
}
Compile.prototype={
    init:function () {
        if(this.el){
            this.fragment=this.nodeToFragment(this.el)
            this.CompleElement(this.fragment)}
            },
    nodeToFragment:function (el) {
        var frament=document.createDocumentFragment();
        var child=el.firstChild;
        while(child)
        {
               frament.appendChild(child);
               child=el.firstChild
        }
        return frament
    },
    CompleElement:function (el) {
      var childNodes=el.childNodes;
      var self=this;
           [].slice.call(childNodes).forEach(node=>{

               var res = /\{\{(.*)\}\}/;
               var text=node.textContent;
               if(this.IsElement(node)){
                   this.Complie(node)
               }
               else if(this.IsText(node)&&res.test(text)){
                   this.ComplieText(node,res.exec(text)[1])}
               if(node.childNodes&&node.childNodes.length){
                   this.CompleElement(node)
               }
           })
    },
    Complie:function(node){
        var nodeAttrs=node.attributes;
        var self=this
        Array.prototype.forEach.call(nodeAttrs,function (attr) {
            var attrName=attr.name;
            if(self.IsVection(attrName)){
             var exp=attr.value;
             var dir=attrName.substring(2)// model  on:click
                if(self.IsEventType(dir)){
                    self.ComplieEvent(node,self.vm,exp,dir)
                }
                else{
                    self.ComplieModel(node,self.vm,exp,dir)
                }
                node.removeAttribute(attrName)

            }
        })
    },
    ComplieText:function(node,exp){
           var self=this;
           var value=this.vm[exp];
           this.TextUpdate(node,value);
           new Watcher(this.vm,exp,function (value) {
               self.TextUpdate(node,value)
           })

           },
    ComplieEvent:function(node,vm,exp,dir){
      var eventType=dir.split(':')[1];
      var cb=vm.methods&&vm.methods[exp]
        if(cb&&eventType){
            addEventListener(eventType,cb.bind(vm),false)
        }


    },
    ComplieModel:function(node,vm,exp,dir){
        var val=this.vm[exp];
        this.ModelUpdate(node,val);
        var self=this
        node.addEventListener('input',function (e) {
            var newValue=e.target.value;

                 self.vm[exp]=newValue

        },false)
        new Watcher(this.vm, exp, function (value) {

            self.ModelUpdate(node, value);
        });

    },

    IsElement:function (node) {
        return node.nodeType==1
    },
    IsText:function (node) {
        return node.nodetype==3
    },
    IsVection:function (node) {
        return node.indexOf('v-')==0;


    },
    IsEventType:function (attr) {
        return attr.indexOf('on')==0;
    },
    ModelUpdate:function (node,val) {
       return node.value=typeof val=="undefined"? '':val
    },
    TextUpdate:function(node,val){
        return node.textContent=typeof val=="undefined"? '':val
    }
}