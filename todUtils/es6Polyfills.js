/**
 * @protected
 * @properties={typeid:35,uuid:"01812750-9D2F-4CFE-9E3A-8425A52E3D20",variableType:-4}
 */
var log = scopes.svyLogManager.getLogger('com.tod.javascript.polyfills.es6')

/**
 * @public
 * @constructor 
 * @param {Iterator} [iterator]
 * @extends {Object}
 * 
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map
 * 
 * TODO implement iterator argument
 * @properties={typeid:24,uuid:"64F7F254-709D-4EEC-8477-4A2B907618F6"}
 */
function Map(iterator) {
	/**
	 * @protected
	 * @type {java.utils.HashMap}
	 */
	this.store = new java.util.HashMap()
}

/**
 * @protected
 * @properties={typeid:35,uuid:"3360D3C3-D7DD-435E-9CF0-4B79E0A1E228",variableType:-4}
 */
var initMap = (function(){
	Object.defineProperty(Set.prototype, 'size', {
		get: function() {
			return this.store.size()
		}
	})
	
	/**
	 * Removes all key/value pairs from the Map object.
	 * @this {Map}
	 */
	Map.prototype.clear = function() {
		this.store.clear()
	}
	
	/**
	 * Removes any value associated to the key and returns the value that Map.prototype.has(value) would have previously returned. Map.prototype.has(key) will return false afterwards.
	 * @param {*} key
	 * @return {Boolean}
	 * @this {Map}
	 */
	Map.prototype.delete = function(key) {
		return this.store.remove(key) ? true : false
	}
	
	/**
	 * Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
	 * @this {Map}
	 */
	Map.prototype.entries = function() {
		var entries = new Array(this.store.size())
		var iter = this.store.entrySet().iterator()
		while (iter.hasNext()) {
			var entry = iter.next()
			entries = [entry.getValue(), entry.getKey()]
		}
		return Iterator(entries)
	}
	
	/**
	 * Calls callback once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
	 * @param {function(*, *, Map)} callback The callback is invoked with three arguments: element value, element key, the Map object being traversed
	 * @param {*} [thisObj]
	 * @this {Map}
	 */
	Map.prototype.forEach = function(callback, thisObj) {
		var iter = this.store.entrySet().iterator()
		while (iter.hasNext()) {
			var entrySet = iter.next()
			callback.apply(thisObj, [entrySet.getValue(), entrySet.getKey(), this])
		}
	}
	
	/**
	 * Returns the value associated to the key, or undefined if there is none.
	 * @param {*} key
	 * @return {*}
	 * @this {Map}
	 */
	Map.prototype.get = function(key) {
		return this.store.get(key)
	}
	
	/**
	 * Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
	 * @this {Map}
	 * @return {Boolean}
	 */
	Map.prototype.has = function(key) {
		return this.store.containsKey(key)
	}
	
	/**
	 * Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
	 * @this {Map}
	 */
	Map.prototype.keys = function() {
		return Iterator(this.store.keySet().toArray())
	}
	
	/**
	 * Sets the value for the key in the Map object. Returns the Map object.
	 * @param {*} key
	 * @param {*} value
	 * @this {Map}
	 */
	Map.prototype.set = function(key, value) {
		this.store.put(key, value)
		return this.store
	}
	
	/**
	 * Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
	 * @this {Map}
	 */
	Map.prototype.values = function() {
		return Iterator(this.store.values().toArray())
	}
}())

/**
 * @public
 * @constructor 
 * @param {Iterator} [iterator]
 * @extends {Object}
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * 
 * TODO implement iterator argument
 * @properties={typeid:24,uuid:"66293DA8-E59B-4339-BD09-0656C8769C28"}
 */
function Set(iterator) {
	/**
	 * @protected
	 * @type {java.util.Set}
	 */
	this.store = new java.util.Set()
}

/**
 * @protected
 * @properties={typeid:35,uuid:"B13AC443-F367-42B2-AB3F-836E64BD9786",variableType:-4}
 */
var initSet = (function() {
	/***
	 * The value of the length property is 0.
	 */
	//Set.length
	
	/**
	 * Represents the prototype for the Set constructor. Allows the addition of properties to all Set objects.
	 */
	//Set.prototype
	
	/**
	 * All Set instances inherit from Set.prototype.
	 */
	//Set instances

	/*Properties*/
	/**
	 * Returns the function that created an instance's prototype. This is the Set function by default.
	 */
	//Set.prototype.constructor
	
//	/**
//	 * Returns the number of values in the Set object.
//	 */
//	Object.defineProperty(Set.prototype, 'size', {
//		get: function() {
//			return this.store.size()
//		}
//	})
	
	/*Methods*/
	/**
	 * Appends a new element with the given value to the Set object. Returns the Set object.
	 * @public
	 * @param {*} value
	 * @return {Set}
	 * 
	 * @this {Set}
	 */
	Set.prototype.add = function(value) {
		this.store.add(value)
		return this.store
	}
	
	/**
	 * Removes all elements from the Set object.
	 * @public 
	 * 
	 * @this {Set}
	 */
	Set.prototype.clear = function() {
		this.store.clear()
	}
	
	/**
	 * Removes the element associated to the value and returns the value that Set.prototype.has(value) would have previously returned. Set.prototype.has(value) will return false afterwards.
	 * @public 
	 * @param {*} value
	 * @return {Boolean}
	 * 
	 * @this {Set}
	 */
	Set.prototype.delete = function(value) {
		return this.store.remove(value)
	}
	
	/**
	 * Returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. This is kept similar to the Map object, so that each entry has the same value for its key and value here.
	 * @public
	 * @return {Iterator}
	 * 
	 * @this {Set}
	 */
	Set.prototype.entries = function() {
		var entries = new Array(this.store.size())
		var iter = this.store.iterator()
		while (iter.hasNext()) {
			var entry = iter.next()
			entries = [entry.getValue(), entry.getValue()]
		}
		return Iterator(entries)
	}
	
	/**
	 * Calls callback\ once for each value present in the Set object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
	 * @public
	 * @param {function} callback
	 * @param {*} thisObj
	 * 
	 * @this {Set}
	 */
	Set.prototype.forEach = function(callback, thisObj) {
		var iter = this.store.iterator()
		while (iter.hasNext()) {
			var set = iter.next()
			callback.apply(thisObj, [set.getValue(), set.getValue(), this])
		}
	}
	
	/**
	 * Returns a boolean asserting whether an element is present with the given value in the Set object or not.
	 * @public 
	 * @param {*} value
	 * @return {Boolean}
	 * 
	 * @this {Set}
	 */
	Set.prototype.has = function(value) {
		return this.store.contains(value)
	}
	
	/**
	 * Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
	 * @public
	 * @return {Iterator}
	 * 
	 * @this {Set}
	 */
	Set.prototype.values = function() {
		return  Iterator(this.store.toArray())
	}
	
	/**
	 * Is the same function as the values() function and returns a new Iterator object that contains the values for each element in the Set object in insertion order.
	 * @public 
	 * @return {Iterator}
	 * 
	 * @this {Set}
	 */
	Set.prototype.keys = Set.prototype.values
}())

/**
 * @public
 * @constructor 
 * @param {Iterator} [iterator]
 * @extends {Object}
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 * 
 * TODO implement iterator argument
 * @properties={typeid:24,uuid:"32253CD1-2AA9-46A9-8DB9-D9642219FB77"}
 */
function WeakMap(iterator) {
	/**
	 * @protected
	 * @type {java.util.WeakMap}
	 */
	this.store = new java.util.WeakMap()
}

/**
 * @protected
 * @properties={typeid:35,uuid:"E8154152-808E-4A6A-8DEB-43FA9E29008C",variableType:-4}
 */
var initWeakMap = (function() {
//	Object.defineProperty(Set.prototype, 'size', {
//		get: function() {
//			return this.store.size()
//		}
//	})
	
	/**
	 * Removes any value associated to the key and returns the value that Map.prototype.has(value) would have previously returned. Map.prototype.has(key) will return false afterwards.
	 * @param {*} key
	 * @return {Boolean}
	 * @this {Map}
	 */
	WeakMap.prototype.delete = function(key) {
		return this.store.remove(key) ? true : false
	}
	
	/**
	 * Returns the value associated to the key, or undefined if there is none.
	 * @param {*} key
	 * @return {*}
	 * @this {Map}
	 */
	WeakMap.prototype.get = function(key) {
		return this.store.get(key)
	}
	
	/**
	 * Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
	 * @this {Map}
	 * @return {Boolean}
	 */
	WeakMap.prototype.has = function(key) {
		return this.store.containsKey(key)
	}
	
	/**
	 * Sets the value for the key in the Map object. Returns the Map object.
	 * @param {Object} key
	 * @param {*} value
	 * @this {Map}
	 */
	WeakMap.prototype.set = function(key, value) {
		this.store.put(key, value)
		return this.store
	}
}())

/**
 * TODO: implement Java side and then mark as public
 * @private
 * @constructor 
 * @param {Iterator} [iterator]
 * @extends {Object}
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 * 
 * TODO implement iterator argument
 * @properties={typeid:24,uuid:"2AC14284-3E1C-45DA-9706-DB634ADA35BF"}
 */
function WeakSet(iterator) {
	/**
	 * @protected
	 * @type {java.util.WeakMap}
	 */
	this.store = '???'
}

/**
 * @protected 
 * @properties={typeid:35,uuid:"E258F1DE-789A-4153-9522-FB4A37077182",variableType:-4}
 */
var initWeakSet = (function() {
	/**
	 * Appends a new element with the given value to the WeakSet object.
	 * @public
	 * @param {*} value
	 * @return {WeakSet}
	 * 
	 * @this {WeakSet}
	 */
	WeakSet.prototype.add = function(value) {
		this.store.add(value)
		return this.store
	}
	
	/**
	 * Removes the element associated to the value. WeakSet.prototype.has(value) will return false afterwards.
	 * @public 
	 * @param {*} value
	 * @return {Boolean}
	 * 
	 * @this {WeakSet}
	 */
	WeakSet.prototype.delete = function(value) {
		return this.store.remove(value)
	}
	
	/**
	 * Returns a boolean asserting whether an element is present with the given value in the WeakSet object or not.
	 * @public 
	 * @param {*} value
	 * @return {Boolean}
	 * 
	 * @this {WeakSet}
	 */
	WeakSet.prototype.has = function(value) {
		return this.store.contains(value)
	}
}())

/**
 * ES6 Reflect API
 * @public
 * @properties={typeid:35,uuid:"97ED43F5-A248-4D40-9453-129DF2A486A8",variableType:-4}
 */
var Reflect = (new function(){
	/**
	 * @param {*} target
	 * @param {String} name
	 * @param {*} [receiver]
	 */
	this.get = function(target, name, receiver) {
		return target[name]
	}
	/**
	 * @param {type} target
	 * @param {type} name
	 * @param {type} value
	 * @param {type} [receiver]
	 */
	this.set = function(target, name, value, receiver) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {*} target
	 * @param {String} name
	 */
	this.has = function(target, name) {
		return name in target
	},
	/**
	 * @param {Function} target
	 * @param {*} receiver
	 * @param {Array<*>} [args]
	 */
	this.apply = function(target, receiver, args) {
		return target.apply(receiver, args||[])
	},
	/**
	 * @param {type} target
	 * @param {type} args
	 * @param {type} [newTarget]
	 */
	this.construct = function(target, args, newTarget) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
		//TODO implement
		//See https://github.com/zloirock/core-js/blob/master/modules/es6.reflect.construct.js for an example implementation
	},
	/**
	 * @param {type} target
	 * @param {type} name
	 */
	this.getOwnPropertyDescriptor = function(target, name) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {type} target
	 * @param {type} name
	 * @param {type} desc
	 */
	this.defineProperty = function(target, name, desc) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {type} target
	 */
	this.getPrototypeOf = function(target) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {type} target
	 * @param {type} newProto
	 */
	this.setPrototypeOf = function(target, newProto) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {type} target
	 * @param {type} name
	 */
	this.deleteProperty = function(target, name) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {type} target
	 */
	this.enumerate = function(target) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {type} target
	 */
	this.preventExtensions = function(target) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {type} target
	 */
	this.isExtensible = function(target) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	},
	/**
	 * @param {type} target
	 */
	this.ownKeys = function(target) {
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	}
})

/**
 * Implements the ES6 Proxy 
 * 
 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 * 
 * @public
 * @constructor 
 * @extends {Object}
 * 
 * @param {*} target
 * @param {function(Object, String)} [handler.has]
 * @param {function(Object, String, Proxy)} [handler.get]
 * @param {function(Object, String, *, Proxy)} [handler.set]
 * @param {function(Object, String)} [handler.deleteProperty]
 * @param {function(Object)} [handler.enumerate]
 * @param {function(Object, Object, Array<Object>)} [handler.apply]
 * @param {function(Object, Array<Object>)} [handler.construct]
 *
 * TODO @param {function(Object)} [handler.getPrototypeOf]
 * TODO @param {function()} [handler.setPrototypeOf]
 * TODO @param {function()} [handler.isExtensible]
 * TODO @param {function()} [handler.preventExtensions]
 * TODO @param {function()} [handler.getOwnPropertyDescriptor]
 * TODO @param {function()} [handler.defineProperty]
 * TODO @param {function()} [handler.ownKeys]
 * 
 * TODO fix what Servoy's CodeCompletion shows on a Proxy instance
 * @properties={typeid:24,uuid:"E645B2F0-3EAD-4F68-BA68-BF6E39454CFC"}
 */
function Proxy(target, handler) {
//	function getPrototypeOf() {
//		if ('getPrototypeOf' in handler) {
//			return handler.getPrototypeOf(target)
//		} else {
//			return target.getPrototypeOf()
//		}
//	}
	
	return new JavaAdapter(Packages.org.mozilla.javascript.NativeObject, Packages.org.mozilla.javascript.Function, {
		getClassName: function() {
			return 'Proxy'
		},
		getDefaultValue: function(typeHint) {
	        return this.toString()
	    },
		put: function(name, start, value) {
			if ('set' in handler) {
				handler.set(target, name, value, this)
			}
			target[name] = value
		},
		get: function(name, start) {
			if ('get' in handler) {
				return handler.get(target, name, this)
			}
			return target[name]
		},
		has: function(name, start) {
			if ('has' in handler) {
				return handler.has(target, name)
			}
			return name in target
		},
		delete: function(name, start) {
			if ('deleteProperty' in handler) {
				return handler.deleteProperty(target, name)
			} 
			return delete target[name]
		},
		getIds: function(getAll) {
			if ('enumerate' in handler) {
				return handler.enumerate(target)
			}
			//CHECKME shouldn't this return prototype properties as well?
			return Object.keys(target)
		},
		getPrototype: function(){
			return target
		},
		call: function(cx, scope, thisObj, args) {
			//TODO what to do if the target isn't a function instance?
			if ('apply' in handler) {
				return handler.apply(target, thisObj, args)
			}
			return target.apply(thisObj, args)
		},
		construct: function(cx, scope, args) {
			throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
//			log.debug('Constructor called on Proxy!')
//			return construct(args) 
		}
	})
}

/**
 * @protected
 * @properties={typeid:35,uuid:"5172D500-D643-4145-90F1-09EA4C717D6C",variableType:-4}
 */
var initProxy = (function(){
	Proxy.revocable = function(){
		//TODO implement
		throw scopes.svyExceptions.UnsupportedOperationException('Not implemented')
	}
})()
