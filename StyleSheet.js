/* StyleShit v1.0-beta
 * - A small Library for yunz (you guys)
 * - yunz shouldn't read how it's written
 * - because yunz wilt get confused
 * - WARNING: If you findest buggy bugs, smash 'em!
 */
// Localization; used for creating my perfect class
(function(my) {
  // well... I'm doing 'impossible' to prove my skills
  // so.. I'm not fan of renaming 100 vars
  // ... fn will be used instead, isn't it a tricky language?
  var fn = "StyleSheet";
  // Self-Execution with Pre-Definition
  (my[fn] = function(loc) {
    function ce(x) {
      return document.createElement(x);
    }
    var sm = my[fn],
      base = this,
      css = ce("style"),
      rules = [];
    css.type = "text/css";

    function setS(x, y) {
      x.setAttribute("style", y);
    }

    function s2sheet(s, r) {
      r = ce("a");
      setS(r, s);
      return r.style;
    }

    function sheet2s(s, r) {
      r = ce("a");
      for (var n in s)
        r.style[n] = s[n];
      return r.style.cssText;
    }

    function compile() {
      var o = "";
      for (var i in rules)
        o += rules[i].sel + "{" + sheet2s(rules[i].css) + "}";
      css.innerHTML = o;
      if (loc instanceof Element)
        loc.appendChild(css);
      else document.head.appendChild(css);
    }

    function hasRule(sel, gi) {
      for (var i in rules)
        if (sel == rules[i].sel)
          return gi ? i : !0;
      return !1;
    }

    function renameRule(sel, New, comp, r) {
      r = hasRule(sel, 1), rules[r] && (rules[r].sel = New);
      comp && compile();
    }

    function cloneRule(sel, New, comp, r) {
      r = getRulesFor(sel), r && (r = {
        sel: New,
        css: r
      }) && rules.push(r);
      comp && compile();
    }

    function prop(sel, n, v, comp, r) {
      r = rules[hasRule(sel, 1)];
      r = r && (n && v ? (r.css[n] = v) : n && r.css[n]) || !1;
      return comp && compile(), r;
    }

    function removeRule(sel, comp) {
      var r = [];
      for (var i in rules)
        if (sel != rules[i].sel)
          r.push(rules[i]);
      rules = r;
      comp && compile();
    }

    function getAllRules(sel) {
      return rules;
    }

    function getRulesFor(sel, a) {
      return ((a = rules[hasRule(sel, 1)]) && a.css) || !1;
    }

    function setRules(sel, sheet, comp) {
      var i, s = sheet2s(sheet),
        S = s2sheet(s);
      if (false === (i = hasRule(sel, 1)))
        rules.push({
          sel: sel,
          css: S
        });
      else if (!isNaN(parseInt(i)))
        for (var n in S)
          rules[i].css[n] = S[n];
      comp && compile();
    }
    base.prop = prop;
    base.renameRule = renameRule;
    base.removeRule = removeRule;
    base.cloneRule = cloneRule;
    base.getAllRules = getAllRules;
    base.getRules = getRulesFor;
    base.setRules = setRules;
    base.hasRule = hasRule;
    sm.css2sheet = s2sheet;
    sm.sheet2css = sheet2s;
  })();
})(this);
