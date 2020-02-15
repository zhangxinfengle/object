
function Compile(el, vm) {
    this.vm = vm;
   // console.log(this.vm)
    this.el = document.querySelector(el);
  // console.log(this.vm)
    //console.log(this.el);
    this.fragment = null;
    this.init();
    //console.log(this.el)

}


Compile.prototype = {
    init: function () {


        if (this.el) {
            //console.log(this.el)

            this.fragment = this.nodeToFragment(this.el);
         // console.log(this.fragment.childNodes);

            this.compileElement(this.fragment);

            this.el.appendChild(this.fragment);

        } else {
            console.log('Dom元素不存在');
        }
    },

    nodeToFragment: function (el) {

        var fragment = document.createDocumentFragment();

        var child = el.firstChild;
        while (child) {
            // 将Dom元素移入fragment中
             //console.log(child)
            fragment.appendChild(child);
            //console.log(child)
            child = el.firstChild
        // console.log(child);
        }
        //console.log(fragment)
        //console.log(child)
        return fragment;
        },


    compileElement: function (el) {
        var childNodes = el.childNodes;
  //console.log(childNodes)

        var self = this;
        [].slice.call(childNodes).forEach(function(node) {

            var reg = /\{\{(.*)\}\}/;
         //console.log(node)
            var text = node.textContent;
        // console.log(text)

            if (self.isElementNode(node)) {

                self.compile(node);
            } else if (self.isTextNode(node) && reg.test(text)) {
              //console.log(node);
                //console.log(node.nodeValue)
            //console.log(reg.exec(text)[1])
                self.compileText(node, reg.exec(text)[1]);
            }
            if (node.childNodes && node.childNodes.length) {
                self.compileElement(node);
            }
        });
    },
    compile: function(node) {
        var nodeAttrs = node.attributes;
        var self = this;
        Array.prototype.forEach.call(nodeAttrs, function(attr) {
            var attrName = attr.name;
            if (self.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                if (self.isEventDirective(dir)) {  // 事件指令
                    self.compileEvent(node, self.vm, exp, dir);
                } else {  // v-model 指令
                    self.compileModel(node, self.vm, exp, dir);
                }
                node.removeAttribute(attrName);
            }
        });
    },
    compileText: function(node, exp) {
        var self = this;
        var initText = this.vm[exp];
        this.updateText(node, initText);
        new Watcher(this.vm, exp, function (value) {
            self.updateText(node, value);
        });},
    compileEvent: function (node, vm, exp, dir) {

        var eventType = dir.split(':')[1];


        var cb = vm.methods && vm.methods[exp];

        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm), false);
        }
    },
    compileModel: function (node, vm, exp, dir) {
        var self = this;


        var val = this.vm[exp];
        this.modelUpdater(node, val);

        new Watcher(this.vm, exp, function (value) {
            self.modelUpdater(node, value);
        });
        node.addEventListener('input', function(e) {

            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }
            self.vm[exp] = newValue;
            //val = newValue;
        });
        },

    updateText: function (node, value) {

        node.textContent = typeof value == 'undefined' ? '' : value;
    },
    modelUpdater: function(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    },
    isDirective: function(attr) {

        return attr.indexOf('v-') == 0;
    },
    isEventDirective: function(dir) {
        return dir.indexOf('on') === 0;
    },
    isElementNode: function (node) {
        return node.nodeType == 1;
    },
    isTextNode: function(node) {

        return node.nodeType == 3;
    }

}

