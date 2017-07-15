public StyleSheet {
	getRule (selector: String): String;
	// gets compiled css string
	// example: .getRule("div")
	// if you added rule for example fontSize it will give you something like this:
	// font-size: ...;
	getSheet (selector: String): Object;
	// will get sheet of all attributes of given selector
	// example: .getSheet("div") will gain CSSStyleDeclaration object
	addRule (selector: String, context: Object): boolean
	editRule (selector: String, context: Object): boolean
	// addRule and editRule ARE THE SAME:
	// example for both:
	// .addRule ("div", { fontSize: "16pt" })
	// WARNING: addRule will skip if selector exists in your StyleSheet ruler instance
	// .editRule ("div", { fontSize: "16pt" })
	cloneRule (sel: String, newSel: String): boolean
	// will fully copy rules from previous selector to new one
	// example: .cloneRule("div", "b")
	removeRule (selector: String): boolean;
	// will remove whole style for selector
	// example: .removeRule("div")
	// and all styles for "div" will be lost
	renameRules (oldSel: String, newSel: String): boolean
	// will replace all selectors to another selector:
	// example: .renameRules("div", "a")
	prop (sel: String, prop: String [, val: String]): false | String
	// example: .prop("div", "fontSize")
	// to set: .prop("div", "fontSize", "17pt")
	compile (loc: Element [, isEdit: boolean]): void
	// example: .compile(null, false) or .compile(document.body, false)
	// loc:Element default value: document.head
	attr (name: String [, value: String]): String
	atr (name: String [, value: String]): String
	// example: .atr("type") or .atr("type", "text/plain")
	moveTo (newLoc: Element): boolean
	// example: .moveTo(document.body)
};
