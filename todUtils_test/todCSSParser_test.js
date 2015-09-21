/**
 * @properties={typeid:24,uuid:"781E7B73-E639-4A1B-A43D-39792D16EF30"}
 */
function test() {
	var cssParser = new scopes.todCSSParser.CSSParser()
	var retval = cssParser.parseCSS('.someSelecto:hover {background-color: red}')
	//[{selector:.someSelecto:hover,rules:[{directive:background-color,value:red}]}]
	
	//retval.
}