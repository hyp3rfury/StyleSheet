# StyleSheet [release delayed due re-coding]
Library to rule over StyleSheet
<script src="https://raw.githubusercontent.com/hyp3rfury/StyleSheet/master/StyleSheet.min.js" type="text/javascript"></script>
# Example
var style = new StyleSheet;
style.setRules("div", {
 background: "red",
 color: "white"
});
style.compile();
# Alternative [forget .compile()] !
var style = new StyleSheet;
style.setRules("div", {
 background: "red",
 color: "white"
}, 1); // 1 = true, choose whatever you like

# WARNING
Library is named: StyleSheet.js or StyleSheet.min.js (61.10% less code) ^_^
