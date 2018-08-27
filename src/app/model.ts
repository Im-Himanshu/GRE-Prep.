export class Model{

		user;
		items;
		constructor(){
		this.user = "Adam";
		this.items = [
					new TodoItems("Buy flowers", false),
					new TodoItems("Get Shoes", false),
					new TodoItems("Collect Tickets", true),
					new TodoItems("Call Joe", false)
				]
		}


export class TodoItems{
	action;
	done;

	constructor(action, done){
		this.action = action
		this.done = done;

	}
}

}