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