//TODO move tests to dedicated module

/**
 * @protected
 * @properties={typeid:35,uuid:"284B5D5A-36E8-4F1F-9886-5383F6FE78E8",variableType:-4}
 */
var log = scopes.svyLogManager.getLogger('com.tod.javascript.polyfills.es6.tests')

/**
 * @properties={typeid:24,uuid:"7B12AC98-E6D0-4FB7-A373-04BDD897FBD2"}
 */
function testReflect() {
	var testObject = {
		testValue: 'test',
		testFunction: function(postfix) {
			return this.testValue + (postfix||'No')
		}
	}
	
	jsunit.assertEquals('test123', scopes.es6Polyfills.Reflect.apply(testObject.testFunction, testObject, ['123']))
	jsunit.assertEquals('rest123', scopes.es6Polyfills.Reflect.apply(testObject.testFunction, {testValue: 'rest'}, ['123']))
	jsunit.assertEquals('restNo', scopes.es6Polyfills.Reflect.apply(testObject.testFunction, {testValue: 'rest'}))
	
}

/**
 * @properties={typeid:24,uuid:"108F778E-F22E-4452-B461-C8C560EB5EC1"}
 */
function testObjectProxy() {
	var target = {
		name: 'Paul',
		getName: function() {
			return this.name
		}
	}
	var handler = {
		get: function(target, name, receiver) {
			if (name in target) {
				return target[name]
			}
			return name + ' is not a property'
		}
	}
	var p = new scopes.es6Polyfills.Proxy(target, handler)
	jsunit.assertEquals('Paul', p.name)
	jsunit.assertEquals('test is not a property', p.test)
	jsunit.assertTrue('name' in p)
	jsunit.assertFalse('test' in p)
	target.test = 10
	jsunit.assertTrue('test' in p)
	jsunit.assertEquals(10, p.test)
	jsunit.assertTrue(delete p.test)
	jsunit.assertFalse('test' in p)
	
	jsunit.assertEquals(2, Object.keys(p).length)
	
	jsunit.assertEquals('Paul', p.getName())
}

/**
 * @properties={typeid:24,uuid:"031951DC-AA60-4053-816A-E85436E9A3CA"}
 */
function testFunctionProxy() {
	var target = function(text){
		return text
	}
	var handler = {
		apply: function(target, thisObj, args) {
			return target.apply(thisObj, ['Text is overwritten by the proxy'])
		}
	}
	var p = new scopes.es6Polyfills.Proxy(target, handler)
	jsunit.assertEquals('Text is overwritten by the proxy', p())
}

/**
 * @properties={typeid:24,uuid:"0C7F56EC-CA59-45D9-A0F0-343E8AC4B94A"}
 */
function testHostObjectFunctionProxy() {
	var fs = datasources.db.example_data.book_nodes.getFoundSet()
	
	var target = fs.find
	var handler = {
		apply: function(target, thisObj, args) {
			return target.apply(thisObj, args)
		}
	}
	var p = new scopes.es6Polyfills.Proxy(target, handler)
	jsunit.assertEquals('boolean', typeof p())
}

/**
 * @properties={typeid:24,uuid:"43A620A4-6FD3-4175-BEAC-6B6CAB115653"}
 * @AllowToRunInFind
 */
function testHostObjectProxy() {
	/**@type {JSFoundSet<db:/example_data/book_nodes>}*/
	var p = new scopes.es6Polyfills.Proxy(datasources.db.example_data.book_nodes.getFoundSet(), {
		get: function(target, name, proxy){
			log.debug('Getting: ' + name)
			switch (name) {
				case 'newRecord':
					return function(position, changeSelection) {
						log.debug('newRecord intercepted')
						return target.newRecord.apply(target, arguments)
					}
					break;
				default:
					return target[name]
			}
		},
		set: function(target, name, value, receiver) {
			
		}
	})
	
	p.alldataproviders
	
	p.find()
	p.node_id = '>1'
	if (p.search()) {
		var size = p.getSize()
		jsunit.assertEquals(1, p.newRecord())
		p.node_id = 99999
		jsunit.assertEquals(true, databaseManager.saveData(p))
		jsunit.assertEquals(size + 1, p.getSize())
		jsunit.assertEquals(true, p.deleteRecord())
		jsunit.assertEquals(size, p.getSize())		
	}
}
