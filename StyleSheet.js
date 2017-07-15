function StyleSheet(){
		function cE(n){return document.createElement(n)}
		var base = this, compiled, out = "", rules = [], css = cE("style");
		base.getRule = getRule;
		base.getSheet = getRuleSheet;
		base.addRule = addRule;
		base.editRule = editRule;
		base.cloneRule = cloneRule;
		base.removeRule = removeRule;
		base.renameRules = replaceRule;
		base.prop = prop;
		base.compile = compile;
		base.attr = attr;
		base.atr = attr;
		base.moveTo = moveTo;
		function newCfg(n, v){return new Function("return {" + n + ": " + v + "}")();}
		function lcase(x){return x.toLowerCase()}
		function T(c){return lcase(Object.prototype.toString.call(c).replace(/\[(.+) (.+)\]/, "$2"));}
		function getCompiledRules(){
			out = "";
			for (var i in rules)
				out += rules[i].selector + "{" + rules[i].context + "}";
			return out;
		}
		function compile(loc, isEdit){
			loc = loc || document.head;
			css.type = "text/css";
			css.innerHTML = getCompiledRules();
			if (!isEdit && loc instanceof Element)
				if (compiled == null)
					loc.appendChild(css), compiled = 1;
		}
		function cloneRule(sel, newSel){
			if ("string" != typeof sel || "string" != typeof newSel)
				return !1;
			if (!sel.trim() || !newSel.trim()) return !1;
			for (var i in rules)
				if (rules[i].selector == sel && newSel.trim())
				{
					var n = rules[i];
					n.selector = newSel;
					rules.push(n);
					return !0;
				}
			return !1;
		}
		function addRule(selector, context){
			if ("object" != T(context) || "string" != typeof selector)
				return !1;
			if (!selector.trim())
				return !1;
			for (var i in rules)
				if (rules[i].selector == selector)
					return !1;
			var vH = cE("div");
			castOTR(context, vH);
			rules.push({ selector: selector, context: vH.getAttribute("style") });
			return !0;
		}
		function array_skip(arr, index){
			var r = [];
			for (var i in arr)
				if (i != index)
					r.push(arr[i]);
			return r;
		}
		function getRule(selector){
			if ("string" != typeof selector)
				return !1;
			for (var i in rules)
				if (rules[i].selector == selector)
					return rules[i].context;
			return "";
		}
		function getRuleSheet(selector){
			for (var i in rules)
				if (rules[i].selector == selector)
				{
					var vH = cE("div");
					vH.style = rules[i].context;
					return vH.style;
				}
			return !1;
		}
		function prop(sel, prop, val){
			var rS = getRuleSheet(sel);
			if (rS && prop && val)
				editRule(sel, newCfg("\"" + prop + "\"", "\"" + val + "\""));
			else if (rS && prop)
				return rS[prop];
			return !1;
		}
		function castOTR(obj, vH){
			vH = vH instanceof Element ? vH : cE("div");
			for (var n in obj)
				vH.style[n] = obj[n];
			return vH.style;
		}
		function replaceRule(oldSel, newSel){
			if ("string" != typeof oldSel || "string" != typeof newSel)
				return !1;
			if (!oldSel.trim() || !newSel.trim())
				return !1;
			for (var i in rules)
				if (rules[i].selector == oldSel)
				{
					rules[i].selector = newSel;
					base.compile(null, 1);
					return !0;
				}
			return !1;
		}
		function removeRule(selector){
			if ("string" == typeof selector)
				for (var i in rules)
					if (selector == rules[i].selector)
					{
						rules = array_skip(rules, i);
						base.compile(null, 1);
						return !0;
					}
			return !1;
		}
		function editRule(selector, context){
			if ("object" != T(context) || "string" != typeof selector)
				return !1;
			var vH = cE("div");
			for (var i in rules)
				if (selector == rules[i].selector)
				{
					var oldRules, ovH = cE("div");
					ovH.setAttribute("style", rules[i].context);
					oldRules = ovH.style;
					castOTR(oldRules, vH);
					castOTR(context, vH);
					rules[i].context = vH.getAttribute("style");
					base.compile(null, 1);
					return !0;
				}
			return !1;
		}
		function attr(n, v){
			if ("string" == typeof n && v != undefined)
				css.setAttribute(n, v);
			else if ("string" == typeof n && n != undefined)
				return css.getAttribute(n);
		}
		function moveTo(loc){
			if (loc instanceof Element)
			{
				if (css instanceof Element)
					css.remove();
				css = cE("style");
				compiled = null;
				base.compile(loc);
				return !0;
			}
			else return !1;
		}
	}
