var styleShit = new StyleSheet;
styleShit.addRule("div", {
	color: "red",
	LoL: "yas"
});
styleShit.editRule("div", {
	fontSize: "16pt"
});
// note: prop sets or gets value
var fsVal = styleShit.prop("div", "fontSize");
styleShit.prop("div", "fontSize", "17pt");
// note: renameRules may f*ck all to "b"
styleShit.renameRules("div", "b");
var ruleStr = styleShit.getRule("b");
styleShit.addRule("div", {
	color: "lime",
});
styleShit.removeRule("div");
styleShit.cloneRule("b", "div");
styleShit.compile();
styleShit.moveTo(document.body);
