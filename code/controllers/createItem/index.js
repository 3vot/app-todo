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