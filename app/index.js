(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Declaring Item Template
var Layout = require("./layout")

//Declaring Private Variables
var el;
var txtCreateItem;
var btnCreateItem;
var onCreateItemCallback;

//Initialize function, receives a DomElementId string and assigns the Dom Element to el for future use.
function init(domElementId, callback){
	el = document.getElementById(domElementId);

	//Render the Layout in Dom Element el
	el.innerHTML = Layout();

	//Assign DOM Elements
	txtCreateItem = document.getElementById("txt-create-item");
	btnCreateItem = document.getElementById("btn-create-item");
	
	//Register button onclick event
	btnCreateItem.onclick = onCreateItem;

	//
	onCreateItemCallback = callback;
}

function onCreateItem(){
	onCreateItemCallback( txtCreateItem.value );
	txtCreateItem.value = "";
}

module.exports = init;

// NOTES:
// 1. This is the simplest pattern for components that will be instantiated only once.
// 2. Uses a Callback Pattern, a more robust solution would use Events via EventEmmiter.
},{"./layout":2}],2:[function(require,module,exports){
module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('\n<input id="txt-create-item" type="text" class="form-control input-lg" placeholder="New Todo Item" />\n\n<a class="btn btn-primary pull-right btn-lg" id="btn-create-item">Create</a>\n\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
},{}],3:[function(require,module,exports){
//Declaring Item Template
var ItemTemplate = require("../views/todoItem")

var el;

//Object to be Exported. This is what will be assigned to TodoList in var TodoList =  require("./todoList")
var TodoList = {
	items: [{title: "Understand Assets, Templates & Requires"},{title: "Add a Model and Events"}],
	init: init,
	render: render
};

//Initialize function, receives a DomElementId string and assigns the Dom Element to el for future use.
function init(domElementId){
	el = document.getElementById(domElementId)
	//Returns Todo List to simplify Jquery Style Chaining API
	return TodoList;
}

//Renders all objects in TodoList.items using Item Template
function render(){
	var src = ""
	for(i in TodoList.items) src += ItemTemplate(TodoList.items[i]);
	el.innerHTML = src;
}

module.exports = TodoList;

// NOTES:
// 1. This is the simplest pattern for components that will be instantiated only once.
// 2. Using this for-loop only works with array
// 3. Requires manual rendering, an automatic implementation would use Models with EventEmmiters
},{"../views/todoItem":4}],4:[function(require,module,exports){
module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<li class="list-group-item">\n  <span class="badge"><input type="checkbox"/></span>\n  ');
    
      __out.push(__sanitize(this.title));
    
      __out.push('\n</li>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
},{}],5:[function(require,module,exports){
// LESSON 1-A
// We recommend that Lesson 1A is fully understood before looking into Lesson 1-B

	//Declare Components to be Used
	var TodoList = require("./code/controllers/todoList");

	//Initialize Component in Dom Element id=todo-list-controller and rendering items.
	TodoList.init("todo-list-controller").render()

// LESSON 1-B

	var CreateItem = require("./code/controllers/createItem");

	CreateItem("create-item-component", onCreateItem);

	function onCreateItem(itemTitle){
		TodoList.items.push( {title: itemTitle} );
		TodoList.render();
	}
},{"./code/controllers/createItem":1,"./code/controllers/todoList":3}]},{},[5])