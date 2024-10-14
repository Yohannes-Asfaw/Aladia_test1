/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../.cache/Cypress/13.15.0/Cypress/resources/app/node_modules/process/browser.js":
/*!******************************************************************************************!*\
  !*** ../../.cache/Cypress/13.15.0/Cypress/resources/app/node_modules/process/browser.js ***!
  \******************************************************************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/@chromatic-com/cypress/dist/support.js":
/*!*************************************************************!*\
  !*** ./node_modules/@chromatic-com/cypress/dist/support.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var rrwebSnapshot = __webpack_require__(/*! @chromaui/rrweb-snapshot */ "./node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.umd.cjs");

Cypress.Commands.add("takeSnapshot",e=>{Cypress.config("isTextTerminal")&&cy.document().then(s=>{let r=rrwebSnapshot.snapshot(s);cy.get("@manualSnapshots").then(o=>[...o,{name:e,snapshot:r}]).as("manualSnapshots");});});beforeEach(()=>{Cypress.config("isTextTerminal")&&(cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener",payload:{allowedDomains:Cypress.env("assetDomains")}}));});afterEach(()=>{Cypress.config("isTextTerminal")&&cy.document().then(e=>{let s=Cypress.env("disableAutoSnapshot")?[]:[{snapshot:rrwebSnapshot.snapshot(e)}];cy.get("@manualSnapshots").then((r=[])=>{cy.url().then(o=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitlePath:[Cypress.spec.relativeToCommonRoot,...Cypress.currentTest.titlePath],domSnapshots:[...r,...s],chromaticStorybookParams:{...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("delay")&&{delay:Cypress.env("delay")},...Cypress.env("diffIncludeAntiAliasing")&&{diffIncludeAntiAliasing:Cypress.env("diffIncludeAntiAliasing")},...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("forcedColors")&&{forcedColors:Cypress.env("forcedColors")},...Cypress.env("pauseAnimationAtEnd")&&{pauseAnimationAtEnd:Cypress.env("pauseAnimationAtEnd")},...Cypress.env("prefersReducedMotion")&&{prefersReducedMotion:Cypress.env("prefersReducedMotion")},...Cypress.env("cropToViewport")&&{cropToViewport:Cypress.env("cropToViewport")},...Cypress.env("ignoreSelectors")&&{ignoreSelectors:Cypress.env("ignoreSelectors")}},pageUrl:o,viewport:{height:Cypress.config("viewportHeight"),width:Cypress.config("viewportWidth")},outputDir:Cypress.config("downloadsFolder")}});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.js.map

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.umd.cjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.umd.cjs ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var process = __webpack_require__(/*! ../../.cache/Cypress/13.15.0/Cypress/resources/app/node_modules/process/browser.js */ "../../.cache/Cypress/13.15.0/Cypress/resources/app/node_modules/process/browser.js");
(function (g, f) {
    if (true) {
      module.exports = f();
    } else {}
  }(this, () => {
var exports = {};
var module = { exports };
"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var NodeType = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType || {});
const testableAccessors = {
  Node: ["childNodes", "parentNode", "parentElement", "textContent"],
  ShadowRoot: ["host", "styleSheets"],
  Element: ["shadowRoot", "querySelector", "querySelectorAll"],
  MutationObserver: []
};
const testableMethods = {
  Node: ["contains", "getRootNode"],
  ShadowRoot: ["getSelection"],
  Element: [],
  MutationObserver: ["constructor"]
};
const untaintedBasePrototype = {};
function getUntaintedPrototype(key) {
  if (untaintedBasePrototype[key])
    return untaintedBasePrototype[key];
  const defaultObj = globalThis[key];
  const defaultPrototype = defaultObj.prototype;
  const accessorNames = key in testableAccessors ? testableAccessors[key] : void 0;
  const isUntaintedAccessors = Boolean(
    accessorNames && // @ts-expect-error 2345
    accessorNames.every(
      (accessor) => {
        var _a, _b;
        return Boolean(
          (_b = (_a = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a.get) == null ? void 0 : _b.toString().includes("[native code]")
        );
      }
    )
  );
  const methodNames = key in testableMethods ? testableMethods[key] : void 0;
  const isUntaintedMethods = Boolean(
    methodNames && methodNames.every(
      // @ts-expect-error 2345
      (method) => {
        var _a;
        return typeof defaultPrototype[method] === "function" && ((_a = defaultPrototype[method]) == null ? void 0 : _a.toString().includes("[native code]"));
      }
    )
  );
  if (isUntaintedAccessors && isUntaintedMethods) {
    untaintedBasePrototype[key] = defaultObj.prototype;
    return defaultObj.prototype;
  }
  try {
    const iframeEl = document.createElement("iframe");
    document.body.appendChild(iframeEl);
    const win = iframeEl.contentWindow;
    if (!win) return defaultObj.prototype;
    const untaintedObject = win[key].prototype;
    document.body.removeChild(iframeEl);
    if (!untaintedObject) return defaultPrototype;
    return untaintedBasePrototype[key] = untaintedObject;
  } catch (e) {
    return defaultPrototype;
  }
}
const untaintedAccessorCache = {};
function getUntaintedAccessor(key, instance, accessor) {
  var _a;
  const cacheKey = `${key}.${String(accessor)}`;
  if (untaintedAccessorCache[cacheKey])
    return untaintedAccessorCache[cacheKey].call(
      instance
    );
  const untaintedPrototype = getUntaintedPrototype(key);
  const untaintedAccessor = (_a = Object.getOwnPropertyDescriptor(
    untaintedPrototype,
    accessor
  )) == null ? void 0 : _a.get;
  if (!untaintedAccessor) return instance[accessor];
  untaintedAccessorCache[cacheKey] = untaintedAccessor;
  return untaintedAccessor.call(instance);
}
const untaintedMethodCache = {};
function getUntaintedMethod(key, instance, method) {
  const cacheKey = `${key}.${String(method)}`;
  if (untaintedMethodCache[cacheKey])
    return untaintedMethodCache[cacheKey].bind(
      instance
    );
  const untaintedPrototype = getUntaintedPrototype(key);
  const untaintedMethod = untaintedPrototype[method];
  if (typeof untaintedMethod !== "function") return instance[method];
  untaintedMethodCache[cacheKey] = untaintedMethod;
  return untaintedMethod.bind(instance);
}
function childNodes(n) {
  return getUntaintedAccessor("Node", n, "childNodes");
}
function parentNode(n) {
  return getUntaintedAccessor("Node", n, "parentNode");
}
function parentElement(n) {
  return getUntaintedAccessor("Node", n, "parentElement");
}
function textContent(n) {
  return getUntaintedAccessor("Node", n, "textContent");
}
function contains(n, other) {
  return getUntaintedMethod("Node", n, "contains")(other);
}
function getRootNode(n) {
  return getUntaintedMethod("Node", n, "getRootNode")();
}
function host(n) {
  if (!n || !("host" in n)) return null;
  return getUntaintedAccessor("ShadowRoot", n, "host");
}
function styleSheets(n) {
  return n.styleSheets;
}
function shadowRoot(n) {
  if (!n || !("shadowRoot" in n)) return null;
  return getUntaintedAccessor("Element", n, "shadowRoot");
}
function querySelector(n, selectors) {
  return getUntaintedAccessor("Element", n, "querySelector")(selectors);
}
function querySelectorAll(n, selectors) {
  return getUntaintedAccessor("Element", n, "querySelectorAll")(selectors);
}
function mutationObserverCtor() {
  return getUntaintedPrototype("MutationObserver").constructor;
}
const index = {
  childNodes,
  parentNode,
  parentElement,
  textContent,
  contains,
  getRootNode,
  host,
  styleSheets,
  shadowRoot,
  querySelector,
  querySelectorAll,
  mutationObserver: mutationObserverCtor
};
function isElement(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
  const hostEl = (
    // anchor and textarea elements also have a `host` property
    // but only shadow roots have a `mode` property
    n && "host" in n && "mode" in n && index.host(n) || null
  );
  return Boolean(
    hostEl && "shadowRoot" in hostEl && index.shadowRoot(hostEl) === n
  );
}
function isNativeShadowDom(shadowRoot2) {
  return Object.prototype.toString.call(shadowRoot2) === "[object ShadowRoot]";
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
  if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) {
    cssText = cssText.replace(
      /\sbackground-clip:\s*text;/g,
      " -webkit-background-clip: text; background-clip: text;"
    );
  }
  return cssText;
}
function escapeImportStatement(rule2) {
  const { cssText } = rule2;
  if (cssText.split('"').length < 3) return cssText;
  const statement = ["@import", `url(${JSON.stringify(rule2.href)})`];
  if (rule2.layerName === "") {
    statement.push(`layer`);
  } else if (rule2.layerName) {
    statement.push(`layer(${rule2.layerName})`);
  }
  if (rule2.supportsText) {
    statement.push(`supports(${rule2.supportsText})`);
  }
  if (rule2.media.length) {
    statement.push(rule2.media.mediaText);
  }
  return statement.join(" ") + ";";
}
function stringifyStylesheet(s) {
  try {
    const rules = s.rules || s.cssRules;
    if (!rules) {
      return null;
    }
    let sheetHref = s.href;
    if (!sheetHref && s.ownerNode && s.ownerNode.ownerDocument) {
      sheetHref = s.ownerNode.ownerDocument.location.href;
    }
    const stringifiedRules = Array.from(
      rules,
      (rule2) => stringifyRule(rule2, sheetHref)
    ).join("");
    return fixBrowserCompatibilityIssuesInCSS(stringifiedRules);
  } catch (error) {
    return null;
  }
}
function stringifyRule(rule2, sheetHref) {
  if (isCSSImportRule(rule2)) {
    let importStringified;
    try {
      importStringified = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      stringifyStylesheet(rule2.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      escapeImportStatement(rule2);
    } catch (error) {
      importStringified = rule2.cssText;
    }
    if (rule2.styleSheet.href) {
      return absolutifyURLs(importStringified, rule2.styleSheet.href);
    }
    return importStringified;
  } else {
    let ruleStringified = rule2.cssText;
    if (isCSSStyleRule(rule2) && rule2.selectorText.includes(":")) {
      ruleStringified = fixSafariColons(ruleStringified);
    }
    if (sheetHref) {
      return absolutifyURLs(ruleStringified, sheetHref);
    }
    return ruleStringified;
  }
}
function fixSafariColons(cssStringified) {
  const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return cssStringified.replace(regex, "$1\\$2");
}
function isCSSImportRule(rule2) {
  return "styleSheet" in rule2;
}
function isCSSStyleRule(rule2) {
  return "selectorText" in rule2;
}
class Mirror {
  constructor() {
    __publicField(this, "idNodeMap", /* @__PURE__ */ new Map());
    __publicField(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(n) {
    var _a;
    if (!n) return -1;
    const id = (_a = this.getMeta(n)) == null ? void 0 : _a.id;
    return id != null ? id : -1;
  }
  getNode(id) {
    return this.idNodeMap.get(id) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(n) {
    return this.nodeMetaMap.get(n) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(n) {
    const id = this.getId(n);
    this.idNodeMap.delete(id);
    if (n.childNodes) {
      n.childNodes.forEach(
        (childNode) => this.removeNodeFromMap(childNode)
      );
    }
  }
  has(id) {
    return this.idNodeMap.has(id);
  }
  hasNode(node2) {
    return this.nodeMetaMap.has(node2);
  }
  add(n, meta) {
    const id = meta.id;
    this.idNodeMap.set(id, n);
    this.nodeMetaMap.set(n, meta);
  }
  replace(id, n) {
    const oldNode = this.getNode(id);
    if (oldNode) {
      const meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n, meta);
    }
    this.idNodeMap.set(id, n);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map();
    this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
}
function createMirror() {
  return new Mirror();
}
function maskInputValue({
  element,
  maskInputOptions,
  tagName,
  type,
  value,
  maskInputFn
}) {
  let text = value || "";
  const actualType = type && toLowerCase(type);
  if (maskInputOptions[tagName.toLowerCase()] || actualType && maskInputOptions[actualType]) {
    if (maskInputFn) {
      text = maskInputFn(text, element);
    } else {
      text = "*".repeat(text.length);
    }
  }
  return text;
}
function toLowerCase(str) {
  return str.toLowerCase();
}
const ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
function is2DCanvasBlank(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  const chunkSize = 50;
  for (let x2 = 0; x2 < canvas.width; x2 += chunkSize) {
    for (let y = 0; y < canvas.height; y += chunkSize) {
      const getImageData = ctx.getImageData;
      const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      const pixelBuffer = new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        originalGetImageData.call(
          ctx,
          x2,
          y,
          Math.min(chunkSize, canvas.width - x2),
          Math.min(chunkSize, canvas.height - y)
        ).data.buffer
      );
      if (pixelBuffer.some((pixel) => pixel !== 0)) return false;
    }
  }
  return true;
}
function isNodeMetaEqual(a, b) {
  if (!a || !b || a.type !== b.type) return false;
  if (a.type === NodeType.Document)
    return a.compatMode === b.compatMode;
  else if (a.type === NodeType.DocumentType)
    return a.name === b.name && a.publicId === b.publicId && a.systemId === b.systemId;
  else if (a.type === NodeType.Comment || a.type === NodeType.Text || a.type === NodeType.CDATA)
    return a.textContent === b.textContent;
  else if (a.type === NodeType.Element)
    return a.tagName === b.tagName && JSON.stringify(a.attributes) === JSON.stringify(b.attributes) && a.isSVG === b.isSVG && a.needBlock === b.needBlock;
  return false;
}
function getInputType(element) {
  const type = element.type;
  return element.hasAttribute("data-rr-is-password") ? "password" : type ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    toLowerCase(type)
  ) : null;
}
function extractFileExtension(path, baseURL) {
  var _a;
  let url;
  try {
    url = new URL(path, baseURL != null ? baseURL : window.location.href);
  } catch (err) {
    return null;
  }
  const regex = /\.([0-9a-z]+)(?:$)/i;
  const match = url.pathname.match(regex);
  return (_a = match == null ? void 0 : match[1]) != null ? _a : null;
}
function extractOrigin(url) {
  let origin = "";
  if (url.indexOf("//") > -1) {
    origin = url.split("/").slice(0, 3).join("/");
  } else {
    origin = url.split("/")[0];
  }
  origin = origin.split("?")[0];
  return origin;
}
const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
const URL_WWW_MATCH = /^www\..*/i;
const DATA_URI = /^(data:)([^,]*),(.*)/i;
function absolutifyURLs(cssText, href) {
  return (cssText || "").replace(
    URL_IN_CSS_REF,
    (origin, quote1, path1, quote2, path2, path3) => {
      const filePath = path1 || path2 || path3;
      const maybeQuote = quote1 || quote2 || "";
      if (!filePath) {
        return origin;
      }
      if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (DATA_URI.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (filePath[0] === "/") {
        return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
      }
      const stack = href.split("/");
      const parts = filePath.split("/");
      stack.pop();
      for (const part of parts) {
        if (part === ".") {
          continue;
        } else if (part === "..") {
          stack.pop();
        } else {
          stack.push(part);
        }
      }
      return `url(${maybeQuote}${stack.join("/")}${maybeQuote})`;
    }
  );
}
function normalizeCssString(cssText) {
  return cssText.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
}
function splitCssText(cssText, style) {
  const childNodes2 = Array.from(style.childNodes);
  const splits = [];
  if (childNodes2.length > 1 && cssText && typeof cssText === "string") {
    const cssTextNorm = normalizeCssString(cssText);
    for (let i = 1; i < childNodes2.length; i++) {
      if (childNodes2[i].textContent && typeof childNodes2[i].textContent === "string") {
        const textContentNorm = normalizeCssString(childNodes2[i].textContent);
        for (let j = 3; j < textContentNorm.length; j++) {
          const bit = textContentNorm.substring(0, j);
          if (cssTextNorm.split(bit).length === 2) {
            const splitNorm = cssTextNorm.indexOf(bit);
            for (let k = splitNorm; k < cssText.length; k++) {
              if (normalizeCssString(cssText.substring(0, k)).length === splitNorm) {
                splits.push(cssText.substring(0, k));
                cssText = cssText.substring(k);
                break;
              }
            }
            break;
          }
        }
      }
    }
  }
  splits.push(cssText);
  return splits;
}
function markCssSplits(cssText, style) {
  return splitCssText(cssText, style).join("/* rr_split */");
}
let _id = 1;
const tagNameRegex = new RegExp("[^a-z0-9-_:]");
const IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return "form";
  }
  const processedTagName = toLowerCase(element.tagName);
  if (tagNameRegex.test(processedTagName)) {
    return "div";
  }
  return processedTagName;
}
let canvasService;
let canvasCtx;
const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === "") {
    return attributeValue;
  }
  let pos = 0;
  function collectCharacters(regEx) {
    let chars;
    const match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars = match[0];
      pos += chars.length;
      return chars;
    }
    return "";
  }
  const output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    let url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ",") {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      let descriptorsStr = "";
      url = absoluteToDoc(doc, url);
      let inParens = false;
      while (true) {
        const c = attributeValue.charAt(pos);
        if (c === "") {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c === ",") {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c === "(") {
            inParens = true;
          }
        } else {
          if (c === ")") {
            inParens = false;
          }
        }
        descriptorsStr += c;
        pos += 1;
      }
    }
  }
  return output.join(", ");
}
const cachedDocument = /* @__PURE__ */ new WeakMap();
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === "") {
    return attributeValue;
  }
  return getHref(doc, attributeValue);
}
function isSVGElement(el) {
  return Boolean(el.tagName === "svg" || el.ownerSVGElement);
}
function getHref(doc, customHref) {
  let a = cachedDocument.get(doc);
  if (!a) {
    a = doc.createElement("a");
    cachedDocument.set(doc, a);
  }
  if (!customHref) {
    customHref = "";
  } else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) {
    return customHref;
  }
  a.setAttribute("href", customHref);
  return a.href;
}
function transformAttribute(doc, tagName, name, value) {
  if (!value) {
    return value;
  }
  if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) {
    return absoluteToDoc(doc, value);
  } else if (name === "xlink:href" && value[0] !== "#") {
    return absoluteToDoc(doc, value);
  } else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) {
    return absoluteToDoc(doc, value);
  } else if (name === "srcset") {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === "style") {
    return absolutifyURLs(value, getHref(doc));
  } else if (tagName === "object" && name === "data") {
    return absoluteToDoc(doc, value);
  }
  return value;
}
function ignoreAttribute(tagName, name, _value) {
  return (tagName === "video" || tagName === "audio") && name === "autoplay";
}
function _isBlockedElement(element, blockClass, blockSelector) {
  try {
    if (typeof blockClass === "string") {
      if (element.classList.contains(blockClass)) {
        return true;
      }
    } else {
      for (let eIndex = element.classList.length; eIndex--; ) {
        const className = element.classList[eIndex];
        if (blockClass.test(className)) {
          return true;
        }
      }
    }
    if (blockSelector) {
      return element.matches(blockSelector);
    }
  } catch (e) {
  }
  return false;
}
function classMatchesRegex(node2, regex, checkAncestors) {
  if (!node2) return false;
  if (node2.nodeType !== node2.ELEMENT_NODE) {
    if (!checkAncestors) return false;
    return classMatchesRegex(index.parentNode(node2), regex, checkAncestors);
  }
  for (let eIndex = node2.classList.length; eIndex--; ) {
    const className = node2.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  if (!checkAncestors) return false;
  return classMatchesRegex(index.parentNode(node2), regex, checkAncestors);
}
function needMaskingText(node2, maskTextClass, maskTextSelector, checkAncestors) {
  let el;
  if (isElement(node2)) {
    el = node2;
    if (!index.childNodes(el).length) {
      return false;
    }
  } else if (index.parentElement(node2) === null) {
    return false;
  } else {
    el = index.parentElement(node2);
  }
  try {
    if (typeof maskTextClass === "string") {
      if (checkAncestors) {
        if (el.closest(`.${maskTextClass}`)) return true;
      } else {
        if (el.classList.contains(maskTextClass)) return true;
      }
    } else {
      if (classMatchesRegex(el, maskTextClass, checkAncestors)) return true;
    }
    if (maskTextSelector) {
      if (checkAncestors) {
        if (el.closest(maskTextSelector)) return true;
      } else {
        if (el.matches(maskTextSelector)) return true;
      }
    }
  } catch (e) {
  }
  return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  const win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  let fired = false;
  let readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== "complete") {
    const timer = setTimeout(() => {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener("load", () => {
      clearTimeout(timer);
      fired = true;
      listener();
    });
    return;
  }
  const blankUrl = "about:blank";
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
    setTimeout(listener, 0);
    return iframeEl.addEventListener("load", listener);
  }
  iframeEl.addEventListener("load", listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
  let fired = false;
  let styleSheetLoaded;
  try {
    styleSheetLoaded = link.sheet;
  } catch (error) {
    return;
  }
  if (styleSheetLoaded) return;
  const timer = setTimeout(() => {
    if (!fired) {
      listener();
      fired = true;
    }
  }, styleSheetLoadTimeout);
  link.addEventListener("load", () => {
    clearTimeout(timer);
    fired = true;
    listener();
  });
}
function serializeNode(n, options) {
  const {
    doc,
    mirror,
    blockClass,
    blockSelector,
    needsMask,
    inlineStylesheet,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    cssCaptured = false
  } = options;
  const rootId = getRootId(doc, mirror);
  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      if (n.compatMode !== "CSS1Compat") {
        return {
          type: NodeType.Document,
          childNodes: [],
          compatMode: n.compatMode
          // probably "BackCompat"
        };
      } else {
        return {
          type: NodeType.Document,
          childNodes: []
        };
      }
    case n.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId,
        rootId
      };
    case n.ELEMENT_NODE:
      return serializeElementNode(n, {
        doc,
        blockClass,
        blockSelector,
        inlineStylesheet,
        maskInputOptions,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
        rootId
      });
    case n.TEXT_NODE:
      return serializeTextNode(n, {
        doc,
        needsMask,
        maskTextFn,
        rootId,
        cssCaptured
      });
    case n.CDATA_SECTION_NODE:
      return {
        type: NodeType.CDATA,
        textContent: "",
        rootId
      };
    case n.COMMENT_NODE:
      return {
        type: NodeType.Comment,
        textContent: index.textContent(n) || "",
        rootId
      };
    default:
      return false;
  }
}
function getRootId(doc, mirror) {
  if (!mirror.hasNode(doc)) return void 0;
  const docId = mirror.getId(doc);
  return docId === 1 ? void 0 : docId;
}
function serializeTextNode(n, options) {
  const { needsMask, maskTextFn, rootId, cssCaptured } = options;
  const parent = index.parentNode(n);
  const parentTagName = parent && parent.tagName;
  let textContent2 = "";
  const isStyle = parentTagName === "STYLE" ? true : void 0;
  const isScript = parentTagName === "SCRIPT" ? true : void 0;
  if (isScript) {
    textContent2 = "SCRIPT_PLACEHOLDER";
  } else if (!cssCaptured) {
    textContent2 = index.textContent(n);
    if (isStyle && textContent2) {
      textContent2 = absolutifyURLs(textContent2, getHref(options.doc));
    }
  }
  if (!isStyle && !isScript && textContent2 && needsMask) {
    textContent2 = maskTextFn ? maskTextFn(textContent2, index.parentElement(n)) : textContent2.replace(/[\S]/g, "*");
  }
  return {
    type: NodeType.Text,
    textContent: textContent2 || "",
    rootId
  };
}
function serializeElementNode(n, options) {
  const {
    doc,
    blockClass,
    blockSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    rootId
  } = options;
  const needBlock = _isBlockedElement(n, blockClass, blockSelector);
  const tagName = getValidTagName(n);
  let attributes = {};
  const len = n.attributes.length;
  for (let i = 0; i < len; i++) {
    const attr = n.attributes[i];
    if (!ignoreAttribute(tagName, attr.name, attr.value)) {
      attributes[attr.name] = transformAttribute(
        doc,
        tagName,
        toLowerCase(attr.name),
        attr.value
      );
    }
  }
  if (tagName === "link" && inlineStylesheet) {
    const stylesheet = Array.from(doc.styleSheets).find((s) => {
      return s.href === n.href;
    });
    let cssText = null;
    if (stylesheet) {
      cssText = stringifyStylesheet(stylesheet);
    }
    if (cssText) {
      delete attributes.rel;
      delete attributes.href;
      attributes._cssText = cssText;
    }
  }
  if (tagName === "style" && n.sheet) {
    let cssText = stringifyStylesheet(
      n.sheet
    );
    if (cssText) {
      if (n.childNodes.length > 1) {
        cssText = markCssSplits(cssText, n);
      }
      attributes._cssText = cssText;
    }
  }
  if (tagName === "input" || tagName === "textarea" || tagName === "select") {
    const value = n.value;
    const checked = n.checked;
    if (attributes.type !== "radio" && attributes.type !== "checkbox" && attributes.type !== "submit" && attributes.type !== "button" && value) {
      attributes.value = maskInputValue({
        element: n,
        type: getInputType(n),
        tagName,
        value,
        maskInputOptions,
        maskInputFn
      });
    } else if (checked) {
      attributes.checked = checked;
    }
  }
  if (tagName === "option") {
    if (n.selected && !maskInputOptions["select"]) {
      attributes.selected = true;
    } else {
      delete attributes.selected;
    }
  }
  if (tagName === "dialog" && n.open) {
    attributes.rr_open_mode = n.matches("dialog:modal") ? "modal" : "non-modal";
  }
  if (tagName === "canvas" && recordCanvas) {
    if (n.__context === "2d") {
      if (!is2DCanvasBlank(n)) {
        attributes.rr_dataURL = n.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      }
    } else if (!("__context" in n)) {
      const canvasDataURL = n.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      const blankCanvas = doc.createElement("canvas");
      blankCanvas.width = n.width;
      blankCanvas.height = n.height;
      const blankCanvasDataURL = blankCanvas.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      if (canvasDataURL !== blankCanvasDataURL) {
        attributes.rr_dataURL = canvasDataURL;
      }
    }
  }
  if (tagName === "img" && inlineImages) {
    if (!canvasService) {
      canvasService = doc.createElement("canvas");
      canvasCtx = canvasService.getContext("2d");
    }
    const image = n;
    const imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
    const priorCrossOrigin = image.crossOrigin;
    const recordInlineImage = () => {
      image.removeEventListener("load", recordInlineImage);
      try {
        canvasService.width = image.naturalWidth;
        canvasService.height = image.naturalHeight;
        canvasCtx.drawImage(image, 0, 0);
        attributes.rr_dataURL = canvasService.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      } catch (err) {
        if (image.crossOrigin !== "anonymous") {
          image.crossOrigin = "anonymous";
          if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
          else image.addEventListener("load", recordInlineImage);
          return;
        } else {
          console.warn(
            `Cannot inline img src=${imageSrc}! Error: ${err}`
          );
        }
      }
      if (image.crossOrigin === "anonymous") {
        priorCrossOrigin ? attributes.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
      }
    };
    if (image.complete && image.naturalWidth !== 0) recordInlineImage();
    else image.addEventListener("load", recordInlineImage);
  }
  if (tagName === "audio" || tagName === "video") {
    const mediaAttributes = attributes;
    mediaAttributes.rr_mediaState = n.paused ? "paused" : "played";
    mediaAttributes.rr_mediaCurrentTime = n.currentTime;
    mediaAttributes.rr_mediaPlaybackRate = n.playbackRate;
    mediaAttributes.rr_mediaMuted = n.muted;
    mediaAttributes.rr_mediaLoop = n.loop;
    mediaAttributes.rr_mediaVolume = n.volume;
  }
  if (!newlyAddedElement) {
    if (n.scrollLeft) {
      attributes.rr_scrollLeft = n.scrollLeft;
    }
    if (n.scrollTop) {
      attributes.rr_scrollTop = n.scrollTop;
    }
  }
  if (needBlock) {
    const { width, height } = n.getBoundingClientRect();
    attributes = {
      class: attributes.class,
      rr_width: `${width}px`,
      rr_height: `${height}px`
    };
  }
  if (tagName === "iframe" && !keepIframeSrcFn(attributes.src)) {
    if (!n.contentDocument) {
      attributes.rr_src = attributes.src;
    }
    delete attributes.src;
  }
  let isCustomElement;
  try {
    if (customElements.get(tagName)) isCustomElement = true;
  } catch (e) {
  }
  return {
    type: NodeType.Element,
    tagName,
    attributes,
    childNodes: [],
    isSVG: isSVGElement(n) || void 0,
    needBlock,
    rootId,
    isCustom: isCustomElement
  };
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === void 0 || maybeAttr === null) {
    return "";
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
    return true;
  } else if (sn.type === NodeType.Element) {
    if (slimDOMOptions.script && // script tag
    (sn.tagName === "script" || // (module)preload link
    sn.tagName === "link" && (sn.attributes.rel === "preload" || sn.attributes.rel === "modulepreload") && sn.attributes.as === "script" || // prefetch link
    sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(
      /^msapplication-tile(image|color)$/
    ) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) {
      return true;
    } else if (sn.tagName === "meta") {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== void 0) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n, options) {
  const {
    doc,
    mirror,
    blockClass,
    blockSelector,
    maskTextClass,
    maskTextSelector,
    skipChild = false,
    inlineStylesheet = true,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions = {},
    inlineImages = false,
    recordCanvas = false,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout = 5e3,
    onStylesheetLoad,
    stylesheetLoadTimeout = 5e3,
    keepIframeSrcFn = () => false,
    newlyAddedElement = false,
    cssCaptured = false
  } = options;
  let { needsMask } = options;
  let { preserveWhiteSpace = true } = options;
  if (!needsMask) {
    const checkAncestors = needsMask === void 0;
    needsMask = needMaskingText(
      n,
      maskTextClass,
      maskTextSelector,
      checkAncestors
    );
  }
  const _serializedNode = serializeNode(n, {
    doc,
    mirror,
    blockClass,
    blockSelector,
    needsMask,
    inlineStylesheet,
    maskInputOptions,
    maskTextFn,
    maskInputFn,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement,
    cssCaptured
  });
  if (!_serializedNode) {
    console.warn(n, "not serialized");
    return null;
  }
  let id;
  if (mirror.hasNode(n)) {
    id = mirror.getId(n);
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType.Text && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, "").length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  const serializedNode = Object.assign(_serializedNode, { id });
  mirror.add(n, serializedNode);
  if (id === IGNORED_NODE) {
    return null;
  }
  if (onSerialize) {
    onSerialize(n);
  }
  let recordChild = !skipChild;
  if (serializedNode.type === NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock;
    delete serializedNode.needBlock;
    const shadowRootEl = index.shadowRoot(n);
    if (shadowRootEl && isNativeShadowDom(shadowRootEl)) {
      serializedNode.isShadowHost = true;
      if (shadowRootEl.adoptedStyleSheets.length > 0) {
        serializedNode.chromaticAdoptedStylesheets = shadowRootEl.adoptedStyleSheets.map(
          (stylesheet) => stringifyStylesheet(stylesheet)
        );
      }
    }
  }
  if ((serializedNode.type === NodeType.Document || serializedNode.type === NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && serializedNode.type === NodeType.Element && serializedNode.tagName === "head") {
      preserveWhiteSpace = false;
    }
    const bypassOptions = {
      doc,
      mirror,
      blockClass,
      blockSelector,
      needsMask,
      maskTextClass,
      maskTextSelector,
      skipChild,
      inlineStylesheet,
      maskInputOptions,
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn,
      cssCaptured: false
    };
    if (serializedNode.type === NodeType.Element && serializedNode.tagName === "textarea" && serializedNode.attributes.value !== void 0) ;
    else {
      if (serializedNode.type === NodeType.Element && serializedNode.attributes._cssText !== void 0 && typeof serializedNode.attributes._cssText === "string") {
        bypassOptions.cssCaptured = true;
      }
      for (const childN of Array.from(index.childNodes(n))) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
    let shadowRootEl = null;
    if (isElement(n) && (shadowRootEl = index.shadowRoot(n))) {
      for (const childN of Array.from(index.childNodes(shadowRootEl))) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          isNativeShadowDom(shadowRootEl) && (serializedChildNode.isShadow = true);
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  const parent = index.parentNode(n);
  if (parent && isShadowRoot(parent) && isNativeShadowDom(parent)) {
    serializedNode.isShadow = true;
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === "iframe") {
    onceIframeLoaded(
      n,
      () => {
        const iframeDoc = n.contentDocument;
        if (iframeDoc && onIframeLoad) {
          const serializedIframeNode = serializeNodeWithId(iframeDoc, {
            doc: iframeDoc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedIframeNode) {
            onIframeLoad(
              n,
              serializedIframeNode
            );
          }
        }
      },
      iframeLoadTimeout
    );
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === "link" && typeof serializedNode.attributes.rel === "string" && (serializedNode.attributes.rel === "stylesheet" || serializedNode.attributes.rel === "preload" && typeof serializedNode.attributes.href === "string" && extractFileExtension(serializedNode.attributes.href) === "css")) {
    onceStylesheetLoaded(
      n,
      () => {
        if (onStylesheetLoad) {
          const serializedLinkNode = serializeNodeWithId(n, {
            doc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedLinkNode) {
            onStylesheetLoad(
              n,
              serializedLinkNode
            );
          }
        }
      },
      stylesheetLoadTimeout
    );
  }
  return serializedNode;
}
function snapshot(n, options) {
  const {
    mirror = new Mirror(),
    blockClass = "rr-block",
    blockSelector = null,
    maskTextClass = "rr-mask",
    maskTextSelector = null,
    inlineStylesheet = true,
    inlineImages = false,
    recordCanvas = false,
    maskAllInputs = false,
    maskTextFn,
    maskInputFn,
    slimDOM = false,
    dataURLOptions,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn = () => false
  } = options || {};
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : maskAllInputs === false ? {
    password: true
  } : maskAllInputs;
  const slimDOMOptions = slimDOM === true || slimDOM === "all" ? (
    // if true: set of sensible options that should not throw away any information
    {
      script: true,
      comment: true,
      headFavicon: true,
      headWhitespace: true,
      headMetaDescKeywords: slimDOM === "all",
      // destructive
      headMetaSocial: true,
      headMetaRobots: true,
      headMetaHttpEquiv: true,
      headMetaAuthorship: true,
      headMetaVerification: true
    }
  ) : slimDOM === false ? {} : slimDOM;
  return serializeNodeWithId(n, {
    doc: n,
    mirror,
    blockClass,
    blockSelector,
    maskTextClass,
    maskTextSelector,
    skipChild: false,
    inlineStylesheet,
    maskInputOptions,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn,
    newlyAddedElement: false
  });
}
function visitSnapshot(node2, onVisit) {
  function walk(current) {
    onVisit(current);
    if (current.type === NodeType.Document || current.type === NodeType.Element) {
      current.childNodes.forEach(walk);
    }
  }
  walk(node2);
}
function cleanupSnapshot() {
  _id = 1;
}
const MEDIA_SELECTOR = /(max|min)-device-(width|height)/;
const MEDIA_SELECTOR_GLOBAL = new RegExp(MEDIA_SELECTOR.source, "g");
const mediaSelectorPlugin = {
  postcssPlugin: "postcss-custom-selectors",
  prepare() {
    return {
      postcssPlugin: "postcss-custom-selectors",
      AtRule: function(atrule) {
        if (atrule.params.match(MEDIA_SELECTOR_GLOBAL)) {
          atrule.params = atrule.params.replace(MEDIA_SELECTOR_GLOBAL, "$1-$2");
        }
      }
    };
  }
};
const pseudoClassPlugin = {
  postcssPlugin: "postcss-hover-classes",
  prepare: function() {
    const fixed = [];
    return {
      Rule: function(rule2) {
        if (fixed.indexOf(rule2) !== -1) {
          return;
        }
        fixed.push(rule2);
        rule2.selectors.forEach(function(selector) {
          if (!selector.includes(":")) {
            return;
          }
          const selectorParts = selector.replace(/\n/g, " ").split(" ");
          const pseudoedSelectorParts = [];
          selectorParts.forEach(function(selectorPart) {
            const pseudos = selectorPart.match(/::?([^:]+)/g);
            if (!pseudos) {
              pseudoedSelectorParts.push(selectorPart);
              return;
            }
            const baseSelector = selectorPart.substr(
              0,
              selectorPart.length - pseudos.join("").length
            );
            const classPseudos = pseudos.map(function(pseudo) {
              const pseudoToCheck = pseudo.replace(/\(.*/g, "");
              if (pseudoToCheck !== ":hover") {
                return pseudo;
              }
              if (pseudo.match(/^::/)) {
                return pseudo;
              }
              pseudo = pseudo.substr(1);
              pseudo = pseudo.replace(/\(/g, "\\(");
              pseudo = pseudo.replace(/\)/g, "\\)");
              return ".\\:" + pseudo;
            });
            pseudoedSelectorParts.push(baseSelector + classPseudos.join(""));
          });
          addSelector(pseudoedSelectorParts.join(" "));
          function addSelector(newSelector) {
            if (newSelector && newSelector !== selector) {
              rule2.selector += ",\n" + newSelector;
            }
          }
        });
      }
    };
  }
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var picocolors_browser = { exports: {} };
var x = String;
var create = function() {
  return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var picocolors_browserExports = picocolors_browser.exports;
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
let pico = picocolors_browserExports;
let terminalHighlight$1 = require$$2;
let CssSyntaxError$3 = class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin2) {
    super(message);
    this.name = "CssSyntaxError";
    this.reason = message;
    if (file) {
      this.file = file;
    }
    if (source) {
      this.source = source;
    }
    if (plugin2) {
      this.plugin = plugin2;
    }
    if (typeof line !== "undefined" && typeof column !== "undefined") {
      if (typeof line === "number") {
        this.line = line;
        this.column = column;
      } else {
        this.line = line.line;
        this.column = line.column;
        this.endLine = column.line;
        this.endColumn = column.column;
      }
    }
    this.setMessage();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError);
    }
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "";
    this.message += this.file ? this.file : "<css input>";
    if (typeof this.line !== "undefined") {
      this.message += ":" + this.line + ":" + this.column;
    }
    this.message += ": " + this.reason;
  }
  showSourceCode(color) {
    if (!this.source) return "";
    let css = this.source;
    if (color == null) color = pico.isColorSupported;
    if (terminalHighlight$1) {
      if (color) css = terminalHighlight$1(css);
    }
    let lines = css.split(/\r?\n/);
    let start = Math.max(this.line - 3, 0);
    let end = Math.min(this.line + 2, lines.length);
    let maxWidth = String(end).length;
    let mark, aside;
    if (color) {
      let { bold, gray, red } = pico.createColors(true);
      mark = (text) => bold(red(text));
      aside = (text) => gray(text);
    } else {
      mark = aside = (str) => str;
    }
    return lines.slice(start, end).map((line, index2) => {
      let number = start + 1 + index2;
      let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
      if (number === this.line) {
        let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
      }
      return " " + aside(gutter) + line;
    }).join("\n");
  }
  toString() {
    let code = this.showSourceCode();
    if (code) {
      code = "\n\n" + code + "\n";
    }
    return this.name + ": " + this.message + code;
  }
};
var cssSyntaxError = CssSyntaxError$3;
CssSyntaxError$3.default = CssSyntaxError$3;
var symbols = {};
symbols.isClean = Symbol("isClean");
symbols.my = Symbol("my");
const DEFAULT_RAW = {
  after: "\n",
  beforeClose: "\n",
  beforeComment: "\n",
  beforeDecl: "\n",
  beforeOpen: " ",
  beforeRule: "\n",
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: false
};
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
let Stringifier$2 = class Stringifier {
  constructor(builder) {
    this.builder = builder;
  }
  atrule(node2, semicolon) {
    let name = "@" + node2.name;
    let params = node2.params ? this.rawValue(node2, "params") : "";
    if (typeof node2.raws.afterName !== "undefined") {
      name += node2.raws.afterName;
    } else if (params) {
      name += " ";
    }
    if (node2.nodes) {
      this.block(node2, name + params);
    } else {
      let end = (node2.raws.between || "") + (semicolon ? ";" : "");
      this.builder(name + params + end, node2);
    }
  }
  beforeAfter(node2, detect) {
    let value;
    if (node2.type === "decl") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (node2.type === "comment") {
      value = this.raw(node2, null, "beforeComment");
    } else if (detect === "before") {
      value = this.raw(node2, null, "beforeRule");
    } else {
      value = this.raw(node2, null, "beforeClose");
    }
    let buf = node2.parent;
    let depth = 0;
    while (buf && buf.type !== "root") {
      depth += 1;
      buf = buf.parent;
    }
    if (value.includes("\n")) {
      let indent = this.raw(node2, null, "indent");
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent;
      }
    }
    return value;
  }
  block(node2, start) {
    let between = this.raw(node2, "between", "beforeOpen");
    this.builder(start + between + "{", node2, "start");
    let after;
    if (node2.nodes && node2.nodes.length) {
      this.body(node2);
      after = this.raw(node2, "after");
    } else {
      after = this.raw(node2, "after", "emptyBody");
    }
    if (after) this.builder(after);
    this.builder("}", node2, "end");
  }
  body(node2) {
    let last = node2.nodes.length - 1;
    while (last > 0) {
      if (node2.nodes[last].type !== "comment") break;
      last -= 1;
    }
    let semicolon = this.raw(node2, "semicolon");
    for (let i = 0; i < node2.nodes.length; i++) {
      let child = node2.nodes[i];
      let before = this.raw(child, "before");
      if (before) this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  }
  comment(node2) {
    let left = this.raw(node2, "left", "commentLeft");
    let right = this.raw(node2, "right", "commentRight");
    this.builder("/*" + left + node2.text + right + "*/", node2);
  }
  decl(node2, semicolon) {
    let between = this.raw(node2, "between", "colon");
    let string = node2.prop + between + this.rawValue(node2, "value");
    if (node2.important) {
      string += node2.raws.important || " !important";
    }
    if (semicolon) string += ";";
    this.builder(string, node2);
  }
  document(node2) {
    this.body(node2);
  }
  raw(node2, own, detect) {
    let value;
    if (!detect) detect = own;
    if (own) {
      value = node2.raws[own];
      if (typeof value !== "undefined") return value;
    }
    let parent = node2.parent;
    if (detect === "before") {
      if (!parent || parent.type === "root" && parent.first === node2) {
        return "";
      }
      if (parent && parent.type === "document") {
        return "";
      }
    }
    if (!parent) return DEFAULT_RAW[detect];
    let root2 = node2.root();
    if (!root2.rawCache) root2.rawCache = {};
    if (typeof root2.rawCache[detect] !== "undefined") {
      return root2.rawCache[detect];
    }
    if (detect === "before" || detect === "after") {
      return this.beforeAfter(node2, detect);
    } else {
      let method = "raw" + capitalize(detect);
      if (this[method]) {
        value = this[method](root2, node2);
      } else {
        root2.walk((i) => {
          value = i.raws[own];
          if (typeof value !== "undefined") return false;
        });
      }
    }
    if (typeof value === "undefined") value = DEFAULT_RAW[detect];
    root2.rawCache[detect] = value;
    return value;
  }
  rawBeforeClose(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== "undefined") {
          value = i.raws.after;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value) value = value.replace(/\S/g, "");
    return value;
  }
  rawBeforeComment(root2, node2) {
    let value;
    root2.walkComments((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeDecl(root2, node2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeRule");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeOpen(root2) {
    let value;
    root2.walk((i) => {
      if (i.type !== "decl") {
        value = i.raws.between;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawBeforeRule(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
        if (typeof i.raws.before !== "undefined") {
          value = i.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value) value = value.replace(/\S/g, "");
    return value;
  }
  rawColon(root2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.between !== "undefined") {
        value = i.raws.between.replace(/[^\s:]/g, "");
        return false;
      }
    });
    return value;
  }
  rawEmptyBody(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawIndent(root2) {
    if (root2.raws.indent) return root2.raws.indent;
    let value;
    root2.walk((i) => {
      let p = i.parent;
      if (p && p !== root2 && p.parent && p.parent === root2) {
        if (typeof i.raws.before !== "undefined") {
          let parts = i.raws.before.split("\n");
          value = parts[parts.length - 1];
          value = value.replace(/\S/g, "");
          return false;
        }
      }
    });
    return value;
  }
  rawSemicolon(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length && i.last.type === "decl") {
        value = i.raws.semicolon;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawValue(node2, prop) {
    let value = node2[prop];
    let raw = node2.raws[prop];
    if (raw && raw.value === value) {
      return raw.raw;
    }
    return value;
  }
  root(node2) {
    this.body(node2);
    if (node2.raws.after) this.builder(node2.raws.after);
  }
  rule(node2) {
    this.block(node2, this.rawValue(node2, "selector"));
    if (node2.raws.ownSemicolon) {
      this.builder(node2.raws.ownSemicolon, node2, "end");
    }
  }
  stringify(node2, semicolon) {
    if (!this[node2.type]) {
      throw new Error(
        "Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier."
      );
    }
    this[node2.type](node2, semicolon);
  }
};
var stringifier = Stringifier$2;
Stringifier$2.default = Stringifier$2;
let Stringifier$1 = stringifier;
function stringify$4(node2, builder) {
  let str = new Stringifier$1(builder);
  str.stringify(node2);
}
var stringify_1 = stringify$4;
stringify$4.default = stringify$4;
let { isClean: isClean$2, my: my$2 } = symbols;
let CssSyntaxError$2 = cssSyntaxError;
let Stringifier2 = stringifier;
let stringify$3 = stringify_1;
function cloneNode(obj, parent) {
  let cloned = new obj.constructor();
  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    if (i === "proxyCache") continue;
    let value = obj[i];
    let type = typeof value;
    if (i === "parent" && type === "object") {
      if (parent) cloned[i] = parent;
    } else if (i === "source") {
      cloned[i] = value;
    } else if (Array.isArray(value)) {
      cloned[i] = value.map((j) => cloneNode(j, cloned));
    } else {
      if (type === "object" && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }
  return cloned;
}
let Node$4 = class Node {
  constructor(defaults = {}) {
    this.raws = {};
    this[isClean$2] = false;
    this[my$2] = true;
    for (let name in defaults) {
      if (name === "nodes") {
        this.nodes = [];
        for (let node2 of defaults[name]) {
          if (typeof node2.clone === "function") {
            this.append(node2.clone());
          } else {
            this.append(node2);
          }
        }
      } else {
        this[name] = defaults[name];
      }
    }
  }
  addToError(error) {
    error.postcssNode = this;
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source;
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      );
    }
    return error;
  }
  after(add) {
    this.parent.insertAfter(this, add);
    return this;
  }
  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name];
    }
    return this;
  }
  before(add) {
    this.parent.insertBefore(this, add);
    return this;
  }
  cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween) delete this.raws.between;
  }
  clone(overrides = {}) {
    let cloned = cloneNode(this);
    for (let name in overrides) {
      cloned[name] = overrides[name];
    }
    return cloned;
  }
  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  }
  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  }
  error(message, opts = {}) {
    if (this.source) {
      let { end, start } = this.rangeBy(opts);
      return this.source.input.error(
        message,
        { column: start.column, line: start.line },
        { column: end.column, line: end.line },
        opts
      );
    }
    return new CssSyntaxError$2(message);
  }
  getProxyProcessor() {
    return {
      get(node2, prop) {
        if (prop === "proxyOf") {
          return node2;
        } else if (prop === "root") {
          return () => node2.root().toProxy();
        } else {
          return node2[prop];
        }
      },
      set(node2, prop, value) {
        if (node2[prop] === value) return true;
        node2[prop] = value;
        if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
        prop === "text") {
          node2.markDirty();
        }
        return true;
      }
    };
  }
  markDirty() {
    if (this[isClean$2]) {
      this[isClean$2] = false;
      let next = this;
      while (next = next.parent) {
        next[isClean$2] = false;
      }
    }
  }
  next() {
    if (!this.parent) return void 0;
    let index2 = this.parent.index(this);
    return this.parent.nodes[index2 + 1];
  }
  positionBy(opts, stringRepresentation) {
    let pos = this.source.start;
    if (opts.index) {
      pos = this.positionInside(opts.index, stringRepresentation);
    } else if (opts.word) {
      stringRepresentation = this.toString();
      let index2 = stringRepresentation.indexOf(opts.word);
      if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
    }
    return pos;
  }
  positionInside(index2, stringRepresentation) {
    let string = stringRepresentation || this.toString();
    let column = this.source.start.column;
    let line = this.source.start.line;
    for (let i = 0; i < index2; i++) {
      if (string[i] === "\n") {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }
    return { column, line };
  }
  prev() {
    if (!this.parent) return void 0;
    let index2 = this.parent.index(this);
    return this.parent.nodes[index2 - 1];
  }
  rangeBy(opts) {
    let start = {
      column: this.source.start.column,
      line: this.source.start.line
    };
    let end = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: start.column + 1,
      line: start.line
    };
    if (opts.word) {
      let stringRepresentation = this.toString();
      let index2 = stringRepresentation.indexOf(opts.word);
      if (index2 !== -1) {
        start = this.positionInside(index2, stringRepresentation);
        end = this.positionInside(index2 + opts.word.length, stringRepresentation);
      }
    } else {
      if (opts.start) {
        start = {
          column: opts.start.column,
          line: opts.start.line
        };
      } else if (opts.index) {
        start = this.positionInside(opts.index);
      }
      if (opts.end) {
        end = {
          column: opts.end.column,
          line: opts.end.line
        };
      } else if (typeof opts.endIndex === "number") {
        end = this.positionInside(opts.endIndex);
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1);
      }
    }
    if (end.line < start.line || end.line === start.line && end.column <= start.column) {
      end = { column: start.column + 1, line: start.line };
    }
    return { end, start };
  }
  raw(prop, defaultType) {
    let str = new Stringifier2();
    return str.raw(this, prop, defaultType);
  }
  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
    this.parent = void 0;
    return this;
  }
  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this;
      let foundSelf = false;
      for (let node2 of nodes) {
        if (node2 === this) {
          foundSelf = true;
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node2);
          bookmark = node2;
        } else {
          this.parent.insertBefore(bookmark, node2);
        }
      }
      if (!foundSelf) {
        this.remove();
      }
    }
    return this;
  }
  root() {
    let result2 = this;
    while (result2.parent && result2.parent.type !== "document") {
      result2 = result2.parent;
    }
    return result2;
  }
  toJSON(_, inputs) {
    let fixed = {};
    let emitInputs = inputs == null;
    inputs = inputs || /* @__PURE__ */ new Map();
    let inputsNextIndex = 0;
    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        continue;
      }
      if (name === "parent" || name === "proxyCache") continue;
      let value = this[name];
      if (Array.isArray(value)) {
        fixed[name] = value.map((i) => {
          if (typeof i === "object" && i.toJSON) {
            return i.toJSON(null, inputs);
          } else {
            return i;
          }
        });
      } else if (typeof value === "object" && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs);
      } else if (name === "source") {
        let inputId = inputs.get(value.input);
        if (inputId == null) {
          inputId = inputsNextIndex;
          inputs.set(value.input, inputsNextIndex);
          inputsNextIndex++;
        }
        fixed[name] = {
          end: value.end,
          inputId,
          start: value.start
        };
      } else {
        fixed[name] = value;
      }
    }
    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
    }
    return fixed;
  }
  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor());
    }
    return this.proxyCache;
  }
  toString(stringifier2 = stringify$3) {
    if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
    let result2 = "";
    stringifier2(this, (i) => {
      result2 += i;
    });
    return result2;
  }
  warn(result2, text, opts) {
    let data = { node: this };
    for (let i in opts) data[i] = opts[i];
    return result2.warn(text, data);
  }
  get proxyOf() {
    return this;
  }
};
var node = Node$4;
Node$4.default = Node$4;
let Node$3 = node;
let Declaration$4 = class Declaration extends Node$3 {
  constructor(defaults) {
    if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
      defaults = __spreadProps(__spreadValues({}, defaults), { value: String(defaults.value) });
    }
    super(defaults);
    this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var declaration = Declaration$4;
Declaration$4.default = Declaration$4;
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
let nanoid$1 = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var nonSecure = { nanoid: nanoid$1, customAlphabet };
let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
let { existsSync, readFileSync } = require$$2;
let { dirname: dirname$1, join } = require$$2;
function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, "base64").toString();
  } else {
    return window.atob(str);
  }
}
let PreviousMap$2 = class PreviousMap {
  constructor(css, opts) {
    if (opts.map === false) return;
    this.loadAnnotation(css);
    this.inline = this.startWith(this.annotation, "data:");
    let prev = opts.map ? opts.map.prev : void 0;
    let text = this.loadMap(opts.from, prev);
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from;
    }
    if (this.mapFile) this.root = dirname$1(this.mapFile);
    if (text) this.text = text;
  }
  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer$2(this.text);
    }
    return this.consumerCache;
  }
  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
    let baseUri = /^data:application\/json;base64,/;
    let charsetUri = /^data:application\/json;charset=utf-?8,/;
    let uri = /^data:application\/json,/;
    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length));
    }
    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length));
    }
    let encoding = text.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + encoding);
  }
  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(map) {
    if (typeof map !== "object") return false;
    return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
  }
  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!comments) return;
    let start = css.lastIndexOf(comments.pop());
    let end = css.indexOf("*/", start);
    if (start > -1 && end > -1) {
      this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
  }
  loadFile(path) {
    this.root = dirname$1(path);
    if (existsSync(path)) {
      this.mapFile = path;
      return readFileSync(path, "utf-8").toString().trim();
    }
  }
  loadMap(file, prev) {
    if (prev === false) return false;
    if (prev) {
      if (typeof prev === "string") {
        return prev;
      } else if (typeof prev === "function") {
        let prevPath = prev(file);
        if (prevPath) {
          let map = this.loadFile(prevPath);
          if (!map) {
            throw new Error(
              "Unable to load previous source map: " + prevPath.toString()
            );
          }
          return map;
        }
      } else if (prev instanceof SourceMapConsumer$2) {
        return SourceMapGenerator$2.fromSourceMap(prev).toString();
      } else if (prev instanceof SourceMapGenerator$2) {
        return prev.toString();
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev);
      } else {
        throw new Error(
          "Unsupported previous source map format: " + prev.toString()
        );
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation);
    } else if (this.annotation) {
      let map = this.annotation;
      if (file) map = join(dirname$1(file), map);
      return this.loadFile(map);
    }
  }
  startWith(string, start) {
    if (!string) return false;
    return string.substr(0, start.length) === start;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var previousMap = PreviousMap$2;
PreviousMap$2.default = PreviousMap$2;
let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
let { isAbsolute, resolve: resolve$1 } = require$$2;
let { nanoid } = nonSecure;
let terminalHighlight = require$$2;
let CssSyntaxError$1 = cssSyntaxError;
let PreviousMap$1 = previousMap;
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
let Input$4 = class Input {
  constructor(css, opts = {}) {
    if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
      throw new Error(`PostCSS received ${css} instead of CSS string`);
    }
    this.css = css.toString();
    if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
      this.hasBOM = true;
      this.css = this.css.slice(1);
    } else {
      this.hasBOM = false;
    }
    if (opts.from) {
      if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
        this.file = opts.from;
      } else {
        this.file = resolve$1(opts.from);
      }
    }
    if (pathAvailable$1 && sourceMapAvailable$1) {
      let map = new PreviousMap$1(this.css, opts);
      if (map.text) {
        this.map = map;
        let file = map.consumer().file;
        if (!this.file && file) this.file = this.mapResolve(file);
      }
    }
    if (!this.file) {
      this.id = "<input css " + nanoid(6) + ">";
    }
    if (this.map) this.map.file = this.from;
  }
  error(message, line, column, opts = {}) {
    let result2, endLine, endColumn;
    if (line && typeof line === "object") {
      let start = line;
      let end = column;
      if (typeof start.offset === "number") {
        let pos = this.fromOffset(start.offset);
        line = pos.line;
        column = pos.col;
      } else {
        line = start.line;
        column = start.column;
      }
      if (typeof end.offset === "number") {
        let pos = this.fromOffset(end.offset);
        endLine = pos.line;
        endColumn = pos.col;
      } else {
        endLine = end.line;
        endColumn = end.column;
      }
    } else if (!column) {
      let pos = this.fromOffset(line);
      line = pos.line;
      column = pos.col;
    }
    let origin = this.origin(line, column, endLine, endColumn);
    if (origin) {
      result2 = new CssSyntaxError$1(
        message,
        origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line },
        origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine },
        origin.source,
        origin.file,
        opts.plugin
      );
    } else {
      result2 = new CssSyntaxError$1(
        message,
        endLine === void 0 ? line : { column, line },
        endLine === void 0 ? column : { column: endColumn, line: endLine },
        this.css,
        this.file,
        opts.plugin
      );
    }
    result2.input = { column, endColumn, endLine, line, source: this.css };
    if (this.file) {
      if (pathToFileURL$1) {
        result2.input.url = pathToFileURL$1(this.file).toString();
      }
      result2.input.file = this.file;
    }
    return result2;
  }
  fromOffset(offset) {
    let lastLine, lineToIndex;
    if (!this[fromOffsetCache]) {
      let lines = this.css.split("\n");
      lineToIndex = new Array(lines.length);
      let prevIndex = 0;
      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex;
        prevIndex += lines[i].length + 1;
      }
      this[fromOffsetCache] = lineToIndex;
    } else {
      lineToIndex = this[fromOffsetCache];
    }
    lastLine = lineToIndex[lineToIndex.length - 1];
    let min = 0;
    if (offset >= lastLine) {
      min = lineToIndex.length - 1;
    } else {
      let max = lineToIndex.length - 2;
      let mid;
      while (min < max) {
        mid = min + (max - min >> 1);
        if (offset < lineToIndex[mid]) {
          max = mid - 1;
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1;
        } else {
          min = mid;
          break;
        }
      }
    }
    return {
      col: offset - lineToIndex[min] + 1,
      line: min + 1
    };
  }
  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    }
    return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
  }
  origin(line, column, endLine, endColumn) {
    if (!this.map) return false;
    let consumer = this.map.consumer();
    let from = consumer.originalPositionFor({ column, line });
    if (!from.source) return false;
    let to;
    if (typeof endLine === "number") {
      to = consumer.originalPositionFor({ column: endColumn, line: endLine });
    }
    let fromUrl;
    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL$1(from.source);
    } else {
      fromUrl = new URL(
        from.source,
        this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile)
      );
    }
    let result2 = {
      column: from.column,
      endColumn: to && to.column,
      endLine: to && to.line,
      line: from.line,
      url: fromUrl.toString()
    };
    if (fromUrl.protocol === "file:") {
      if (fileURLToPath) {
        result2.file = fileURLToPath(fromUrl);
      } else {
        throw new Error(`file: protocol is not available in this PostCSS build`);
      }
    }
    let source = consumer.sourceContentFor(from.source);
    if (source) result2.source = source;
    return result2;
  }
  toJSON() {
    let json = {};
    for (let name of ["hasBOM", "css", "file", "id"]) {
      if (this[name] != null) {
        json[name] = this[name];
      }
    }
    if (this.map) {
      json.map = __spreadValues({}, this.map);
      if (json.map.consumerCache) {
        json.map.consumerCache = void 0;
      }
    }
    return json;
  }
  get from() {
    return this.file || this.id;
  }
};
var input = Input$4;
Input$4.default = Input$4;
if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input$4);
}
let { SourceMapConsumer, SourceMapGenerator } = require$$2;
let { dirname, relative, resolve, sep } = require$$2;
let { pathToFileURL } = require$$2;
let Input$3 = input;
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
let MapGenerator$2 = class MapGenerator {
  constructor(stringify2, root2, opts, cssString) {
    this.stringify = stringify2;
    this.mapOpts = opts.map || {};
    this.root = root2;
    this.opts = opts;
    this.css = cssString;
    this.originalCSS = cssString;
    this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
    this.memoizedFileURLs = /* @__PURE__ */ new Map();
    this.memoizedPaths = /* @__PURE__ */ new Map();
    this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let content;
    if (this.isInline()) {
      content = "data:application/json;base64," + this.toBase64(this.map.toString());
    } else if (typeof this.mapOpts.annotation === "string") {
      content = this.mapOpts.annotation;
    } else if (typeof this.mapOpts.annotation === "function") {
      content = this.mapOpts.annotation(this.opts.to, this.root);
    } else {
      content = this.outputFile() + ".map";
    }
    let eol = "\n";
    if (this.css.includes("\r\n")) eol = "\r\n";
    this.css += eol + "/*# sourceMappingURL=" + content + " */";
  }
  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file));
      let root2 = prev.root || dirname(prev.file);
      let map;
      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text);
        if (map.sourcesContent) {
          map.sourcesContent = null;
        }
      } else {
        map = prev.consumer();
      }
      this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation === false) return;
    if (this.root) {
      let node2;
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node2 = this.root.nodes[i];
        if (node2.type !== "comment") continue;
        if (node2.text.indexOf("# sourceMappingURL=") === 0) {
          this.root.removeChild(i);
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
    }
  }
  generate() {
    this.clearAnnotation();
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap();
    } else {
      let result2 = "";
      this.stringify(this.root, (i) => {
        result2 += i;
      });
      return [result2];
    }
  }
  generateMap() {
    if (this.root) {
      this.generateString();
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer();
      prev.file = this.outputFile();
      this.map = SourceMapGenerator.fromSourceMap(prev, {
        ignoreInvalidMapping: true
      });
    } else {
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      });
      this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    }
    if (this.isSourcesContent()) this.setSourcesContent();
    if (this.root && this.previous().length > 0) this.applyPrevMaps();
    if (this.isAnnotation()) this.addAnnotation();
    if (this.isInline()) {
      return [this.css];
    } else {
      return [this.css, this.map];
    }
  }
  generateString() {
    this.css = "";
    this.map = new SourceMapGenerator({
      file: this.outputFile(),
      ignoreInvalidMapping: true
    });
    let line = 1;
    let column = 1;
    let noSource = "<no source>";
    let mapping = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    };
    let lines, last;
    this.stringify(this.root, (str, node2, type) => {
      this.css += str;
      if (node2 && type !== "end") {
        mapping.generated.line = line;
        mapping.generated.column = column - 1;
        if (node2.source && node2.source.start) {
          mapping.source = this.sourcePath(node2);
          mapping.original.line = node2.source.start.line;
          mapping.original.column = node2.source.start.column - 1;
          this.map.addMapping(mapping);
        } else {
          mapping.source = noSource;
          mapping.original.line = 1;
          mapping.original.column = 0;
          this.map.addMapping(mapping);
        }
      }
      lines = str.match(/\n/g);
      if (lines) {
        line += lines.length;
        last = str.lastIndexOf("\n");
        column = str.length - last;
      } else {
        column += str.length;
      }
      if (node2 && type !== "start") {
        let p = node2.parent || { raws: {} };
        let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
        if (!childless || node2 !== p.last || p.raws.semicolon) {
          if (node2.source && node2.source.end) {
            mapping.source = this.sourcePath(node2);
            mapping.original.line = node2.source.end.line;
            mapping.original.column = node2.source.end.column - 1;
            mapping.generated.line = line;
            mapping.generated.column = column - 2;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            mapping.generated.line = line;
            mapping.generated.column = column - 1;
            this.map.addMapping(mapping);
          }
        }
      }
    });
  }
  isAnnotation() {
    if (this.isInline()) {
      return true;
    }
    if (typeof this.mapOpts.annotation !== "undefined") {
      return this.mapOpts.annotation;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.annotation);
    }
    return true;
  }
  isInline() {
    if (typeof this.mapOpts.inline !== "undefined") {
      return this.mapOpts.inline;
    }
    let annotation = this.mapOpts.annotation;
    if (typeof annotation !== "undefined" && annotation !== true) {
      return false;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.inline);
    }
    return true;
  }
  isMap() {
    if (typeof this.opts.map !== "undefined") {
      return !!this.opts.map;
    }
    return this.previous().length > 0;
  }
  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== "undefined") {
      return this.mapOpts.sourcesContent;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.withContent());
    }
    return true;
  }
  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to);
    } else if (this.opts.from) {
      return this.path(this.opts.from);
    } else {
      return "to.css";
    }
  }
  path(file) {
    if (this.mapOpts.absolute) return file;
    if (file.charCodeAt(0) === 60) return file;
    if (/^\w+:\/\//.test(file)) return file;
    let cached = this.memoizedPaths.get(file);
    if (cached) return cached;
    let from = this.opts.to ? dirname(this.opts.to) : ".";
    if (typeof this.mapOpts.annotation === "string") {
      from = dirname(resolve(from, this.mapOpts.annotation));
    }
    let path = relative(from, file);
    this.memoizedPaths.set(file, path);
    return path;
  }
  previous() {
    if (!this.previousMaps) {
      this.previousMaps = [];
      if (this.root) {
        this.root.walk((node2) => {
          if (node2.source && node2.source.input.map) {
            let map = node2.source.input.map;
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map);
            }
          }
        });
      } else {
        let input2 = new Input$3(this.originalCSS, this.opts);
        if (input2.map) this.previousMaps.push(input2.map);
      }
    }
    return this.previousMaps;
  }
  setSourcesContent() {
    let already = {};
    if (this.root) {
      this.root.walk((node2) => {
        if (node2.source) {
          let from = node2.source.input.from;
          if (from && !already[from]) {
            already[from] = true;
            let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
            this.map.setSourceContent(fromUrl, node2.source.input.css);
          }
        }
      });
    } else if (this.css) {
      let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(from, this.css);
    }
  }
  sourcePath(node2) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from);
    } else if (this.usesFileUrls) {
      return this.toFileUrl(node2.source.input.from);
    } else {
      return this.toUrl(this.path(node2.source.input.from));
    }
  }
  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString("base64");
    } else {
      return window.btoa(unescape(encodeURIComponent(str)));
    }
  }
  toFileUrl(path) {
    let cached = this.memoizedFileURLs.get(path);
    if (cached) return cached;
    if (pathToFileURL) {
      let fileURL = pathToFileURL(path).toString();
      this.memoizedFileURLs.set(path, fileURL);
      return fileURL;
    } else {
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
    }
  }
  toUrl(path) {
    let cached = this.memoizedURLs.get(path);
    if (cached) return cached;
    if (sep === "\\") {
      path = path.replace(/\\/g, "/");
    }
    let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
    this.memoizedURLs.set(path, url);
    return url;
  }
};
var mapGenerator = MapGenerator$2;
let Node$2 = node;
let Comment$4 = class Comment extends Node$2 {
  constructor(defaults) {
    super(defaults);
    this.type = "comment";
  }
};
var comment = Comment$4;
Comment$4.default = Comment$4;
let { isClean: isClean$1, my: my$1 } = symbols;
let Declaration$3 = declaration;
let Comment$3 = comment;
let Node$1 = node;
let parse$4;
let Rule$4;
let AtRule$4;
let Root$6;
function cleanSource(nodes) {
  return nodes.map((i) => {
    if (i.nodes) i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
function markDirtyUp(node2) {
  node2[isClean$1] = false;
  if (node2.proxyOf.nodes) {
    for (let i of node2.proxyOf.nodes) {
      markDirtyUp(i);
    }
  }
}
let Container$7 = class Container extends Node$1 {
  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last);
      for (let node2 of nodes) this.proxyOf.nodes.push(node2);
    }
    this.markDirty();
    return this;
  }
  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween);
    if (this.nodes) {
      for (let node2 of this.nodes) node2.cleanRaws(keepBetween);
    }
  }
  each(callback) {
    if (!this.proxyOf.nodes) return void 0;
    let iterator = this.getIterator();
    let index2, result2;
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index2 = this.indexes[iterator];
      result2 = callback(this.proxyOf.nodes[index2], index2);
      if (result2 === false) break;
      this.indexes[iterator] += 1;
    }
    delete this.indexes[iterator];
    return result2;
  }
  every(condition) {
    return this.nodes.every(condition);
  }
  getIterator() {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = {};
    this.lastEach += 1;
    let iterator = this.lastEach;
    this.indexes[iterator] = 0;
    return iterator;
  }
  getProxyProcessor() {
    return {
      get(node2, prop) {
        if (prop === "proxyOf") {
          return node2;
        } else if (!node2[prop]) {
          return node2[prop];
        } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
          return (...args) => {
            return node2[prop](
              ...args.map((i) => {
                if (typeof i === "function") {
                  return (child, index2) => i(child.toProxy(), index2);
                } else {
                  return i;
                }
              })
            );
          };
        } else if (prop === "every" || prop === "some") {
          return (cb) => {
            return node2[prop](
              (child, ...other) => cb(child.toProxy(), ...other)
            );
          };
        } else if (prop === "root") {
          return () => node2.root().toProxy();
        } else if (prop === "nodes") {
          return node2.nodes.map((i) => i.toProxy());
        } else if (prop === "first" || prop === "last") {
          return node2[prop].toProxy();
        } else {
          return node2[prop];
        }
      },
      set(node2, prop, value) {
        if (node2[prop] === value) return true;
        node2[prop] = value;
        if (prop === "name" || prop === "params" || prop === "selector") {
          node2.markDirty();
        }
        return true;
      }
    };
  }
  index(child) {
    if (typeof child === "number") return child;
    if (child.proxyOf) child = child.proxyOf;
    return this.proxyOf.nodes.indexOf(child);
  }
  insertAfter(exist, add) {
    let existIndex = this.index(exist);
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
    existIndex = this.index(exist);
    for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (existIndex < index2) {
        this.indexes[id] = index2 + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  insertBefore(exist, add) {
    let existIndex = this.index(exist);
    let type = existIndex === 0 ? "prepend" : false;
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
    existIndex = this.index(exist);
    for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex, 0, node2);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (existIndex <= index2) {
        this.indexes[id] = index2 + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  normalize(nodes, sample) {
    if (typeof nodes === "string") {
      nodes = cleanSource(parse$4(nodes).nodes);
    } else if (typeof nodes === "undefined") {
      nodes = [];
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0);
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type === "root" && this.type !== "document") {
      nodes = nodes.nodes.slice(0);
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type) {
      nodes = [nodes];
    } else if (nodes.prop) {
      if (typeof nodes.value === "undefined") {
        throw new Error("Value field is missed in node creation");
      } else if (typeof nodes.value !== "string") {
        nodes.value = String(nodes.value);
      }
      nodes = [new Declaration$3(nodes)];
    } else if (nodes.selector) {
      nodes = [new Rule$4(nodes)];
    } else if (nodes.name) {
      nodes = [new AtRule$4(nodes)];
    } else if (nodes.text) {
      nodes = [new Comment$3(nodes)];
    } else {
      throw new Error("Unknown node type in node creation");
    }
    let processed = nodes.map((i) => {
      if (!i[my$1]) Container.rebuild(i);
      i = i.proxyOf;
      if (i.parent) i.parent.removeChild(i);
      if (i[isClean$1]) markDirtyUp(i);
      if (typeof i.raws.before === "undefined") {
        if (sample && typeof sample.raws.before !== "undefined") {
          i.raws.before = sample.raws.before.replace(/\S/g, "");
        }
      }
      i.parent = this.proxyOf;
      return i;
    });
    return processed;
  }
  prepend(...children) {
    children = children.reverse();
    for (let child of children) {
      let nodes = this.normalize(child, this.first, "prepend").reverse();
      for (let node2 of nodes) this.proxyOf.nodes.unshift(node2);
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  push(child) {
    child.parent = this;
    this.proxyOf.nodes.push(child);
    return this;
  }
  removeAll() {
    for (let node2 of this.proxyOf.nodes) node2.parent = void 0;
    this.proxyOf.nodes = [];
    this.markDirty();
    return this;
  }
  removeChild(child) {
    child = this.index(child);
    this.proxyOf.nodes[child].parent = void 0;
    this.proxyOf.nodes.splice(child, 1);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (index2 >= child) {
        this.indexes[id] = index2 - 1;
      }
    }
    this.markDirty();
    return this;
  }
  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }
    this.walkDecls((decl) => {
      if (opts.props && !opts.props.includes(decl.prop)) return;
      if (opts.fast && !decl.value.includes(opts.fast)) return;
      decl.value = decl.value.replace(pattern, callback);
    });
    this.markDirty();
    return this;
  }
  some(condition) {
    return this.nodes.some(condition);
  }
  walk(callback) {
    return this.each((child, i) => {
      let result2;
      try {
        result2 = callback(child, i);
      } catch (e) {
        throw child.addToError(e);
      }
      if (result2 !== false && child.walk) {
        result2 = child.walk(callback);
      }
      return result2;
    });
  }
  walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk((child, i) => {
        if (child.type === "atrule") {
          return callback(child, i);
        }
      });
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "atrule" && name.test(child.name)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "atrule" && child.name === name) {
        return callback(child, i);
      }
    });
  }
  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === "comment") {
        return callback(child, i);
      }
    });
  }
  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk((child, i) => {
        if (child.type === "decl") {
          return callback(child, i);
        }
      });
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "decl" && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "decl" && child.prop === prop) {
        return callback(child, i);
      }
    });
  }
  walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk((child, i) => {
        if (child.type === "rule") {
          return callback(child, i);
        }
      });
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "rule" && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "rule" && child.selector === selector) {
        return callback(child, i);
      }
    });
  }
  get first() {
    if (!this.proxyOf.nodes) return void 0;
    return this.proxyOf.nodes[0];
  }
  get last() {
    if (!this.proxyOf.nodes) return void 0;
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Container$7.registerParse = (dependant) => {
  parse$4 = dependant;
};
Container$7.registerRule = (dependant) => {
  Rule$4 = dependant;
};
Container$7.registerAtRule = (dependant) => {
  AtRule$4 = dependant;
};
Container$7.registerRoot = (dependant) => {
  Root$6 = dependant;
};
var container = Container$7;
Container$7.default = Container$7;
Container$7.rebuild = (node2) => {
  if (node2.type === "atrule") {
    Object.setPrototypeOf(node2, AtRule$4.prototype);
  } else if (node2.type === "rule") {
    Object.setPrototypeOf(node2, Rule$4.prototype);
  } else if (node2.type === "decl") {
    Object.setPrototypeOf(node2, Declaration$3.prototype);
  } else if (node2.type === "comment") {
    Object.setPrototypeOf(node2, Comment$3.prototype);
  } else if (node2.type === "root") {
    Object.setPrototypeOf(node2, Root$6.prototype);
  }
  node2[my$1] = true;
  if (node2.nodes) {
    node2.nodes.forEach((child) => {
      Container$7.rebuild(child);
    });
  }
};
let Container$6 = container;
let LazyResult$4;
let Processor$3;
let Document$3 = class Document extends Container$6 {
  constructor(defaults) {
    super(__spreadValues({ type: "document" }, defaults));
    if (!this.nodes) {
      this.nodes = [];
    }
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$4(new Processor$3(), this, opts);
    return lazy.stringify();
  }
};
Document$3.registerLazyResult = (dependant) => {
  LazyResult$4 = dependant;
};
Document$3.registerProcessor = (dependant) => {
  Processor$3 = dependant;
};
var document$1 = Document$3;
Document$3.default = Document$3;
let printed = {};
var warnOnce$2 = function warnOnce(message) {
  if (printed[message]) return;
  printed[message] = true;
  if (typeof console !== "undefined" && console.warn) {
    console.warn(message);
  }
};
let Warning$2 = class Warning {
  constructor(text, opts = {}) {
    this.type = "warning";
    this.text = text;
    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts);
      this.line = range.start.line;
      this.column = range.start.column;
      this.endLine = range.end.line;
      this.endColumn = range.end.column;
    }
    for (let opt in opts) this[opt] = opts[opt];
  }
  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message;
    }
    if (this.plugin) {
      return this.plugin + ": " + this.text;
    }
    return this.text;
  }
};
var warning = Warning$2;
Warning$2.default = Warning$2;
let Warning$1 = warning;
let Result$3 = class Result {
  constructor(processor2, root2, opts) {
    this.processor = processor2;
    this.messages = [];
    this.root = root2;
    this.opts = opts;
    this.css = void 0;
    this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }
    let warning2 = new Warning$1(text, opts);
    this.messages.push(warning2);
    return warning2;
  }
  warnings() {
    return this.messages.filter((i) => i.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var result = Result$3;
Result$3.default = Result$3;
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
var tokenize = function tokenizer(input2, options = {}) {
  let css = input2.css.valueOf();
  let ignore = options.ignoreErrors;
  let code, next, quote, content, escape;
  let escaped, escapePos, prev, n, currentToken;
  let length = css.length;
  let pos = 0;
  let buffer = [];
  let returned = [];
  function position() {
    return pos;
  }
  function unclosed(what) {
    throw input2.error("Unclosed " + what, pos);
  }
  function endOfFile() {
    return returned.length === 0 && pos >= length;
  }
  function nextToken(opts) {
    if (returned.length) return returned.pop();
    if (pos >= length) return;
    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
    code = css.charCodeAt(pos);
    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos;
        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
        currentToken = ["space", css.slice(pos, next)];
        pos = next - 1;
        break;
      }
      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code);
        currentToken = [controlChar, controlChar, pos];
        break;
      }
      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : "";
        n = css.charCodeAt(pos + 1);
        if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(")", next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos;
                break;
              } else {
                unclosed("bracket");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          next = css.indexOf(")", pos + 1);
          content = css.slice(pos, next + 1);
          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ["(", "(", pos];
          } else {
            currentToken = ["brackets", content, pos, next];
            pos = next;
          }
        }
        break;
      }
      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"';
        next = pos;
        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1;
              break;
            } else {
              unclosed("string");
            }
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);
        currentToken = ["string", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case AT: {
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }
        currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case BACKSLASH: {
        next = pos;
        escape = true;
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }
        code = css.charCodeAt(next + 1);
        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1;
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1;
            }
          }
        }
        currentToken = ["word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf("*/", pos + 2) + 1;
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length;
            } else {
              unclosed("comment");
            }
          }
          currentToken = ["comment", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          buffer.push(currentToken);
          pos = next;
        }
        break;
      }
    }
    pos++;
    return currentToken;
  }
  function back(token) {
    returned.push(token);
  }
  return {
    back,
    endOfFile,
    nextToken,
    position
  };
};
let Container$5 = container;
let AtRule$3 = class AtRule extends Container$5 {
  constructor(defaults) {
    super(defaults);
    this.type = "atrule";
  }
  append(...children) {
    if (!this.proxyOf.nodes) this.nodes = [];
    return super.append(...children);
  }
  prepend(...children) {
    if (!this.proxyOf.nodes) this.nodes = [];
    return super.prepend(...children);
  }
};
var atRule = AtRule$3;
AtRule$3.default = AtRule$3;
Container$5.registerAtRule(AtRule$3);
let Container$4 = container;
let LazyResult$3;
let Processor$2;
let Root$5 = class Root extends Container$4 {
  constructor(defaults) {
    super(defaults);
    this.type = "root";
    if (!this.nodes) this.nodes = [];
  }
  normalize(child, sample, type) {
    let nodes = super.normalize(child);
    if (sample) {
      if (type === "prepend") {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        for (let node2 of nodes) {
          node2.raws.before = sample.raws.before;
        }
      }
    }
    return nodes;
  }
  removeChild(child, ignore) {
    let index2 = this.index(child);
    if (!ignore && index2 === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index2].raws.before;
    }
    return super.removeChild(child);
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$3(new Processor$2(), this, opts);
    return lazy.stringify();
  }
};
Root$5.registerLazyResult = (dependant) => {
  LazyResult$3 = dependant;
};
Root$5.registerProcessor = (dependant) => {
  Processor$2 = dependant;
};
var root = Root$5;
Root$5.default = Root$5;
Container$4.registerRoot(Root$5);
let list$2 = {
  comma(string) {
    return list$2.split(string, [","], true);
  },
  space(string) {
    let spaces = [" ", "\n", "	"];
    return list$2.split(string, spaces);
  },
  split(string, separators, last) {
    let array = [];
    let current = "";
    let split = false;
    let func = 0;
    let inQuote = false;
    let prevQuote = "";
    let escape = false;
    for (let letter of string) {
      if (escape) {
        escape = false;
      } else if (letter === "\\") {
        escape = true;
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false;
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true;
        prevQuote = letter;
      } else if (letter === "(") {
        func += 1;
      } else if (letter === ")") {
        if (func > 0) func -= 1;
      } else if (func === 0) {
        if (separators.includes(letter)) split = true;
      }
      if (split) {
        if (current !== "") array.push(current.trim());
        current = "";
        split = false;
      } else {
        current += letter;
      }
    }
    if (last || current !== "") array.push(current.trim());
    return array;
  }
};
var list_1 = list$2;
list$2.default = list$2;
let Container$3 = container;
let list$1 = list_1;
let Rule$3 = class Rule extends Container$3 {
  constructor(defaults) {
    super(defaults);
    this.type = "rule";
    if (!this.nodes) this.nodes = [];
  }
  get selectors() {
    return list$1.comma(this.selector);
  }
  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null;
    let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
    this.selector = values.join(sep2);
  }
};
var rule = Rule$3;
Rule$3.default = Rule$3;
Container$3.registerRule(Rule$3);
let Declaration$2 = declaration;
let tokenizer2 = tokenize;
let Comment$2 = comment;
let AtRule$2 = atRule;
let Root$4 = root;
let Rule$2 = rule;
const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
};
function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i];
    let pos = token[3] || token[2];
    if (pos) return pos;
  }
}
let Parser$1 = class Parser {
  constructor(input2) {
    this.input = input2;
    this.root = new Root$4();
    this.current = this.root;
    this.spaces = "";
    this.semicolon = false;
    this.createTokenizer();
    this.root.source = { input: input2, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(token) {
    let node2 = new AtRule$2();
    node2.name = token[1].slice(1);
    if (node2.name === "") {
      this.unnamedAtrule(node2, token);
    }
    this.init(node2, token[2]);
    let type;
    let prev;
    let shift;
    let last = false;
    let open = false;
    let params = [];
    let brackets = [];
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      type = token[0];
      if (type === "(" || type === "[") {
        brackets.push(type === "(" ? ")" : "]");
      } else if (type === "{" && brackets.length > 0) {
        brackets.push("}");
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
      }
      if (brackets.length === 0) {
        if (type === ";") {
          node2.source.end = this.getPosition(token[2]);
          node2.source.end.offset++;
          this.semicolon = true;
          break;
        } else if (type === "{") {
          open = true;
          break;
        } else if (type === "}") {
          if (params.length > 0) {
            shift = params.length - 1;
            prev = params[shift];
            while (prev && prev[0] === "space") {
              prev = params[--shift];
            }
            if (prev) {
              node2.source.end = this.getPosition(prev[3] || prev[2]);
              node2.source.end.offset++;
            }
          }
          this.end(token);
          break;
        } else {
          params.push(token);
        }
      } else {
        params.push(token);
      }
      if (this.tokenizer.endOfFile()) {
        last = true;
        break;
      }
    }
    node2.raws.between = this.spacesAndCommentsFromEnd(params);
    if (params.length) {
      node2.raws.afterName = this.spacesAndCommentsFromStart(params);
      this.raw(node2, "params", params);
      if (last) {
        token = params[params.length - 1];
        node2.source.end = this.getPosition(token[3] || token[2]);
        node2.source.end.offset++;
        this.spaces = node2.raws.between;
        node2.raws.between = "";
      }
    } else {
      node2.raws.afterName = "";
      node2.params = "";
    }
    if (open) {
      node2.nodes = [];
      this.current = node2;
    }
  }
  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens);
    if (colon === false) return;
    let founded = 0;
    let token;
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j];
      if (token[0] !== "space") {
        founded += 1;
        if (founded === 2) break;
      }
    }
    throw this.input.error(
      "Missed semicolon",
      token[0] === "word" ? token[3] + 1 : token[2]
    );
  }
  colon(tokens) {
    let brackets = 0;
    let token, type, prev;
    for (let [i, element] of tokens.entries()) {
      token = element;
      type = token[0];
      if (type === "(") {
        brackets += 1;
      }
      if (type === ")") {
        brackets -= 1;
      }
      if (brackets === 0 && type === ":") {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === "word" && prev[1] === "progid") {
          continue;
        } else {
          return i;
        }
      }
      prev = token;
    }
    return false;
  }
  comment(token) {
    let node2 = new Comment$2();
    this.init(node2, token[2]);
    node2.source.end = this.getPosition(token[3] || token[2]);
    node2.source.end.offset++;
    let text = token[1].slice(2, -2);
    if (/^\s*$/.test(text)) {
      node2.text = "";
      node2.raws.left = text;
      node2.raws.right = "";
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
      node2.text = match[2];
      node2.raws.left = match[1];
      node2.raws.right = match[3];
    }
  }
  createTokenizer() {
    this.tokenizer = tokenizer2(this.input);
  }
  decl(tokens, customProperty) {
    let node2 = new Declaration$2();
    this.init(node2, tokens[0][2]);
    let last = tokens[tokens.length - 1];
    if (last[0] === ";") {
      this.semicolon = true;
      tokens.pop();
    }
    node2.source.end = this.getPosition(
      last[3] || last[2] || findLastWithPosition(tokens)
    );
    node2.source.end.offset++;
    while (tokens[0][0] !== "word") {
      if (tokens.length === 1) this.unknownWord(tokens);
      node2.raws.before += tokens.shift()[1];
    }
    node2.source.start = this.getPosition(tokens[0][2]);
    node2.prop = "";
    while (tokens.length) {
      let type = tokens[0][0];
      if (type === ":" || type === "space" || type === "comment") {
        break;
      }
      node2.prop += tokens.shift()[1];
    }
    node2.raws.between = "";
    let token;
    while (tokens.length) {
      token = tokens.shift();
      if (token[0] === ":") {
        node2.raws.between += token[1];
        break;
      } else {
        if (token[0] === "word" && /\w/.test(token[1])) {
          this.unknownWord([token]);
        }
        node2.raws.between += token[1];
      }
    }
    if (node2.prop[0] === "_" || node2.prop[0] === "*") {
      node2.raws.before += node2.prop[0];
      node2.prop = node2.prop.slice(1);
    }
    let firstSpaces = [];
    let next;
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment") break;
      firstSpaces.push(tokens.shift());
    }
    this.precheckMissedSemicolon(tokens);
    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token[1].toLowerCase() === "!important") {
        node2.important = true;
        let string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== " !important") node2.raws.important = string;
        break;
      } else if (token[1].toLowerCase() === "important") {
        let cache = tokens.slice(0);
        let str = "";
        for (let j = i; j > 0; j--) {
          let type = cache[j][0];
          if (str.trim().indexOf("!") === 0 && type !== "space") {
            break;
          }
          str = cache.pop()[1] + str;
        }
        if (str.trim().indexOf("!") === 0) {
          node2.important = true;
          node2.raws.important = str;
          tokens = cache;
        }
      }
      if (token[0] !== "space" && token[0] !== "comment") {
        break;
      }
    }
    let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
    if (hasWord) {
      node2.raws.between += firstSpaces.map((i) => i[1]).join("");
      firstSpaces = [];
    }
    this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
    if (node2.value.includes(":") && !customProperty) {
      this.checkMissedSemicolon(tokens);
    }
  }
  doubleColon(token) {
    throw this.input.error(
      "Double colon",
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    );
  }
  emptyRule(token) {
    let node2 = new Rule$2();
    this.init(node2, token[2]);
    node2.selector = "";
    node2.raws.between = "";
    this.current = node2;
  }
  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.spaces = "";
    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2]);
      this.current.source.end.offset++;
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  }
  endFile() {
    if (this.current.parent) this.unclosedBlock();
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(token) {
    this.spaces += token[1];
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1];
      if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces;
        this.spaces = "";
      }
    }
  }
  // Helpers
  getPosition(offset) {
    let pos = this.input.fromOffset(offset);
    return {
      column: pos.col,
      line: pos.line,
      offset
    };
  }
  init(node2, offset) {
    this.current.push(node2);
    node2.source = {
      input: this.input,
      start: this.getPosition(offset)
    };
    node2.raws.before = this.spaces;
    this.spaces = "";
    if (node2.type !== "comment") this.semicolon = false;
  }
  other(start) {
    let end = false;
    let type = null;
    let colon = false;
    let bracket = null;
    let brackets = [];
    let customProperty = start[1].startsWith("--");
    let tokens = [];
    let token = start;
    while (token) {
      type = token[0];
      tokens.push(token);
      if (type === "(" || type === "[") {
        if (!bracket) bracket = token;
        brackets.push(type === "(" ? ")" : "]");
      } else if (customProperty && colon && type === "{") {
        if (!bracket) bracket = token;
        brackets.push("}");
      } else if (brackets.length === 0) {
        if (type === ";") {
          if (colon) {
            this.decl(tokens, customProperty);
            return;
          } else {
            break;
          }
        } else if (type === "{") {
          this.rule(tokens);
          return;
        } else if (type === "}") {
          this.tokenizer.back(tokens.pop());
          end = true;
          break;
        } else if (type === ":") {
          colon = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0) bracket = null;
      }
      token = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile()) end = true;
    if (brackets.length > 0) this.unclosedBracket(bracket);
    if (end && colon) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0];
          if (token !== "space" && token !== "comment") break;
          this.tokenizer.back(tokens.pop());
        }
      }
      this.decl(tokens, customProperty);
    } else {
      this.unknownWord(tokens);
    }
  }
  parse() {
    let token;
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      switch (token[0]) {
        case "space":
          this.spaces += token[1];
          break;
        case ";":
          this.freeSemicolon(token);
          break;
        case "}":
          this.end(token);
          break;
        case "comment":
          this.comment(token);
          break;
        case "at-word":
          this.atrule(token);
          break;
        case "{":
          this.emptyRule(token);
          break;
        default:
          this.other(token);
          break;
      }
    }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(node2, prop, tokens, customProperty) {
    let token, type;
    let length = tokens.length;
    let value = "";
    let clean = true;
    let next, prev;
    for (let i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];
      if (type === "space" && i === length - 1 && !customProperty) {
        clean = false;
      } else if (type === "comment") {
        prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
        next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ",") {
            clean = false;
          } else {
            value += token[1];
          }
        } else {
          clean = false;
        }
      } else {
        value += token[1];
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], "");
      node2.raws[prop] = { raw, value };
    }
    node2[prop] = value;
  }
  rule(tokens) {
    tokens.pop();
    let node2 = new Rule$2();
    this.init(node2, tokens[0][2]);
    node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
    this.raw(node2, "selector", tokens);
    this.current = node2;
  }
  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space" && lastTokenType !== "comment") break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  // Errors
  spacesAndCommentsFromStart(tokens) {
    let next;
    let spaces = "";
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment") break;
      spaces += tokens.shift()[1];
    }
    return spaces;
  }
  spacesFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space") break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  stringFrom(tokens, from) {
    let result2 = "";
    for (let i = from; i < tokens.length; i++) {
      result2 += tokens[i][1];
    }
    tokens.splice(from, tokens.length - from);
    return result2;
  }
  unclosedBlock() {
    let pos = this.current.source.start;
    throw this.input.error("Unclosed block", pos.line, pos.column);
  }
  unclosedBracket(bracket) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: bracket[2] },
      { offset: bracket[2] + 1 }
    );
  }
  unexpectedClose(token) {
    throw this.input.error(
      "Unexpected }",
      { offset: token[2] },
      { offset: token[2] + 1 }
    );
  }
  unknownWord(tokens) {
    throw this.input.error(
      "Unknown word",
      { offset: tokens[0][2] },
      { offset: tokens[0][2] + tokens[0][1].length }
    );
  }
  unnamedAtrule(node2, token) {
    throw this.input.error(
      "At-rule without name",
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    );
  }
};
var parser = Parser$1;
let Container$2 = container;
let Parser2 = parser;
let Input$2 = input;
function parse$3(css, opts) {
  let input2 = new Input$2(css, opts);
  let parser2 = new Parser2(input2);
  try {
    parser2.parse();
  } catch (e) {
    if (true) {
      if (e.name === "CssSyntaxError" && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
        } else if (/\.sass/i.test(opts.from)) {
          e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
        } else if (/\.less$/i.test(opts.from)) {
          e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
      }
    }
    throw e;
  }
  return parser2.root;
}
var parse_1 = parse$3;
parse$3.default = parse$3;
Container$2.registerParse(parse$3);
let { isClean, my } = symbols;
let MapGenerator$1 = mapGenerator;
let stringify$2 = stringify_1;
let Container$1 = container;
let Document$2 = document$1;
let warnOnce$1 = warnOnce$2;
let Result$2 = result;
let parse$2 = parse_1;
let Root$3 = root;
const TYPE_TO_CLASS_NAME = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
};
const PLUGIN_PROPS = {
  AtRule: true,
  AtRuleExit: true,
  Comment: true,
  CommentExit: true,
  Declaration: true,
  DeclarationExit: true,
  Document: true,
  DocumentExit: true,
  Once: true,
  OnceExit: true,
  postcssPlugin: true,
  prepare: true,
  Root: true,
  RootExit: true,
  Rule: true,
  RuleExit: true
};
const NOT_VISITORS = {
  Once: true,
  postcssPlugin: true,
  prepare: true
};
const CHILDREN = 0;
function isPromise(obj) {
  return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node2) {
  let key = false;
  let type = TYPE_TO_CLASS_NAME[node2.type];
  if (node2.type === "decl") {
    key = node2.prop.toLowerCase();
  } else if (node2.type === "atrule") {
    key = node2.name.toLowerCase();
  }
  if (key && node2.append) {
    return [
      type,
      type + "-" + key,
      CHILDREN,
      type + "Exit",
      type + "Exit-" + key
    ];
  } else if (key) {
    return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
  } else if (node2.append) {
    return [type, CHILDREN, type + "Exit"];
  } else {
    return [type, type + "Exit"];
  }
}
function toStack(node2) {
  let events;
  if (node2.type === "document") {
    events = ["Document", CHILDREN, "DocumentExit"];
  } else if (node2.type === "root") {
    events = ["Root", CHILDREN, "RootExit"];
  } else {
    events = getEvents(node2);
  }
  return {
    eventIndex: 0,
    events,
    iterator: 0,
    node: node2,
    visitorIndex: 0,
    visitors: []
  };
}
function cleanMarks(node2) {
  node2[isClean] = false;
  if (node2.nodes) node2.nodes.forEach((i) => cleanMarks(i));
  return node2;
}
let postcss$2 = {};
let LazyResult$2 = class LazyResult {
  constructor(processor2, css, opts) {
    this.stringified = false;
    this.processed = false;
    let root2;
    if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
      root2 = cleanMarks(css);
    } else if (css instanceof LazyResult || css instanceof Result$2) {
      root2 = cleanMarks(css.root);
      if (css.map) {
        if (typeof opts.map === "undefined") opts.map = {};
        if (!opts.map.inline) opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      let parser2 = parse$2;
      if (opts.syntax) parser2 = opts.syntax.parse;
      if (opts.parser) parser2 = opts.parser;
      if (parser2.parse) parser2 = parser2.parse;
      try {
        root2 = parser2(css, opts);
      } catch (error) {
        this.processed = true;
        this.error = error;
      }
      if (root2 && !root2[my]) {
        Container$1.rebuild(root2);
      }
    }
    this.result = new Result$2(processor2, root2, opts);
    this.helpers = __spreadProps(__spreadValues({}, postcss$2), { postcss: postcss$2, result: this.result });
    this.plugins = this.processor.plugins.map((plugin2) => {
      if (typeof plugin2 === "object" && plugin2.prepare) {
        return __spreadValues(__spreadValues({}, plugin2), plugin2.prepare(this.result));
      } else {
        return plugin2;
      }
    });
  }
  async() {
    if (this.error) return Promise.reject(this.error);
    if (this.processed) return Promise.resolve(this.result);
    if (!this.processing) {
      this.processing = this.runAsync();
    }
    return this.processing;
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(error, node2) {
    let plugin2 = this.result.lastPlugin;
    try {
      if (node2) node2.addToError(error);
      this.error = error;
      if (error.name === "CssSyntaxError" && !error.plugin) {
        error.plugin = plugin2.postcssPlugin;
        error.setMessage();
      } else if (plugin2.postcssVersion) {
        if (true) {
          let pluginName = plugin2.postcssPlugin;
          let pluginVer = plugin2.postcssVersion;
          let runtimeVer = this.result.processor.version;
          let a = pluginVer.split(".");
          let b = runtimeVer.split(".");
          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            console.error(
              "Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below."
            );
          }
        }
      }
    } catch (err) {
      if (console && console.error) console.error(err);
    }
    return error;
  }
  prepareVisitors() {
    this.listeners = {};
    let add = (plugin2, type, cb) => {
      if (!this.listeners[type]) this.listeners[type] = [];
      this.listeners[type].push([plugin2, cb]);
    };
    for (let plugin2 of this.plugins) {
      if (typeof plugin2 === "object") {
        for (let event in plugin2) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(
              `Unknown event ${event} in ${plugin2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin2[event] === "object") {
              for (let filter in plugin2[event]) {
                if (filter === "*") {
                  add(plugin2, event, plugin2[event][filter]);
                } else {
                  add(
                    plugin2,
                    event + "-" + filter.toLowerCase(),
                    plugin2[event][filter]
                  );
                }
              }
            } else if (typeof plugin2[event] === "function") {
              add(plugin2, event, plugin2[event]);
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin2 = this.plugins[i];
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        try {
          await promise;
        } catch (error) {
          throw this.handleError(error);
        }
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        let stack = [toStack(root2)];
        while (stack.length > 0) {
          let promise = this.visitTick(stack);
          if (isPromise(promise)) {
            try {
              await promise;
            } catch (e) {
              let node2 = stack[stack.length - 1].node;
              throw this.handleError(e, node2);
            }
          }
        }
      }
      if (this.listeners.OnceExit) {
        for (let [plugin2, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin2;
          try {
            if (root2.type === "document") {
              let roots = root2.nodes.map(
                (subRoot) => visitor(subRoot, this.helpers)
              );
              await Promise.all(roots);
            } else {
              await visitor(root2, this.helpers);
            }
          } catch (e) {
            throw this.handleError(e);
          }
        }
      }
    }
    this.processed = true;
    return this.stringify();
  }
  runOnRoot(plugin2) {
    this.result.lastPlugin = plugin2;
    try {
      if (typeof plugin2 === "object" && plugin2.Once) {
        if (this.result.root.type === "document") {
          let roots = this.result.root.nodes.map(
            (root2) => plugin2.Once(root2, this.helpers)
          );
          if (isPromise(roots[0])) {
            return Promise.all(roots);
          }
          return roots;
        }
        return plugin2.Once(this.result.root, this.helpers);
      } else if (typeof plugin2 === "function") {
        return plugin2(this.result.root, this.result);
      }
    } catch (error) {
      throw this.handleError(error);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = true;
    this.sync();
    let opts = this.result.opts;
    let str = stringify$2;
    if (opts.syntax) str = opts.syntax.stringify;
    if (opts.stringifier) str = opts.stringifier;
    if (str.stringify) str = str.stringify;
    let map = new MapGenerator$1(str, this.result.root, this.result.opts);
    let data = map.generate();
    this.result.css = data[0];
    this.result.map = data[1];
    return this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    this.processed = true;
    if (this.processing) {
      throw this.getAsyncError();
    }
    for (let plugin2 of this.plugins) {
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        this.walkSync(root2);
      }
      if (this.listeners.OnceExit) {
        if (root2.type === "document") {
          for (let subRoot of root2.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot);
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root2);
        }
      }
    }
    return this.result;
  }
  then(onFulfilled, onRejected) {
    if (true) {
      if (!("from" in this.opts)) {
        warnOnce$1(
          "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
        );
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  toString() {
    return this.css;
  }
  visitSync(visitors, node2) {
    for (let [plugin2, visitor] of visitors) {
      this.result.lastPlugin = plugin2;
      let promise;
      try {
        promise = visitor(node2, this.helpers);
      } catch (e) {
        throw this.handleError(e, node2.proxyOf);
      }
      if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
        return true;
      }
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
  }
  visitTick(stack) {
    let visit2 = stack[stack.length - 1];
    let { node: node2, visitors } = visit2;
    if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
      stack.pop();
      return;
    }
    if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
      let [plugin2, visitor] = visitors[visit2.visitorIndex];
      visit2.visitorIndex += 1;
      if (visit2.visitorIndex === visitors.length) {
        visit2.visitors = [];
        visit2.visitorIndex = 0;
      }
      this.result.lastPlugin = plugin2;
      try {
        return visitor(node2.toProxy(), this.helpers);
      } catch (e) {
        throw this.handleError(e, node2);
      }
    }
    if (visit2.iterator !== 0) {
      let iterator = visit2.iterator;
      let child;
      while (child = node2.nodes[node2.indexes[iterator]]) {
        node2.indexes[iterator] += 1;
        if (!child[isClean]) {
          child[isClean] = true;
          stack.push(toStack(child));
          return;
        }
      }
      visit2.iterator = 0;
      delete node2.indexes[iterator];
    }
    let events = visit2.events;
    while (visit2.eventIndex < events.length) {
      let event = events[visit2.eventIndex];
      visit2.eventIndex += 1;
      if (event === CHILDREN) {
        if (node2.nodes && node2.nodes.length) {
          node2[isClean] = true;
          visit2.iterator = node2.getIterator();
        }
        return;
      } else if (this.listeners[event]) {
        visit2.visitors = this.listeners[event];
        return;
      }
    }
    stack.pop();
  }
  walkSync(node2) {
    node2[isClean] = true;
    let events = getEvents(node2);
    for (let event of events) {
      if (event === CHILDREN) {
        if (node2.nodes) {
          node2.each((child) => {
            if (!child[isClean]) this.walkSync(child);
          });
        }
      } else {
        let visitors = this.listeners[event];
        if (visitors) {
          if (this.visitSync(visitors, node2.toProxy())) return;
        }
      }
    }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
LazyResult$2.registerPostcss = (dependant) => {
  postcss$2 = dependant;
};
var lazyResult = LazyResult$2;
LazyResult$2.default = LazyResult$2;
Root$3.registerLazyResult(LazyResult$2);
Document$2.registerLazyResult(LazyResult$2);
let MapGenerator2 = mapGenerator;
let stringify$1 = stringify_1;
let warnOnce2 = warnOnce$2;
let parse$1 = parse_1;
const Result$1 = result;
let NoWorkResult$1 = class NoWorkResult {
  constructor(processor2, css, opts) {
    css = css.toString();
    this.stringified = false;
    this._processor = processor2;
    this._css = css;
    this._opts = opts;
    this._map = void 0;
    let root2;
    let str = stringify$1;
    this.result = new Result$1(this._processor, root2, this._opts);
    this.result.css = css;
    let self = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return self.root;
      }
    });
    let map = new MapGenerator2(str, root2, this._opts, css);
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate();
      if (generatedCSS) {
        this.result.css = generatedCSS;
      }
      if (generatedMap) {
        this.result.map = generatedMap;
      }
    } else {
      map.clearAnnotation();
      this.result.css = map.css;
    }
  }
  async() {
    if (this.error) return Promise.reject(this.error);
    return Promise.resolve(this.result);
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(onFulfilled, onRejected) {
    if (true) {
      if (!("from" in this._opts)) {
        warnOnce2(
          "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
        );
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root) {
      return this._root;
    }
    let root2;
    let parser2 = parse$1;
    try {
      root2 = parser2(this._css, this._opts);
    } catch (error) {
      this.error = error;
    }
    if (this.error) {
      throw this.error;
    } else {
      this._root = root2;
      return root2;
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var noWorkResult = NoWorkResult$1;
NoWorkResult$1.default = NoWorkResult$1;
let NoWorkResult2 = noWorkResult;
let LazyResult$1 = lazyResult;
let Document$1 = document$1;
let Root$2 = root;
let Processor$1 = class Processor {
  constructor(plugins = []) {
    this.version = "8.4.38";
    this.plugins = this.normalize(plugins);
  }
  normalize(plugins) {
    let normalized = [];
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i();
      } else if (i.postcss) {
        i = i.postcss;
      }
      if (typeof i === "object" && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === "object" && i.postcssPlugin) {
        normalized.push(i);
      } else if (typeof i === "function") {
        normalized.push(i);
      } else if (typeof i === "object" && (i.parse || i.stringify)) {
        if (true) {
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
        }
      } else {
        throw new Error(i + " is not a PostCSS plugin");
      }
    }
    return normalized;
  }
  process(css, opts = {}) {
    if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
      return new NoWorkResult2(this, css, opts);
    } else {
      return new LazyResult$1(this, css, opts);
    }
  }
  use(plugin2) {
    this.plugins = this.plugins.concat(this.normalize([plugin2]));
    return this;
  }
};
var processor = Processor$1;
Processor$1.default = Processor$1;
Root$2.registerProcessor(Processor$1);
Document$1.registerProcessor(Processor$1);
let Declaration$1 = declaration;
let PreviousMap2 = previousMap;
let Comment$1 = comment;
let AtRule$1 = atRule;
let Input$1 = input;
let Root$1 = root;
let Rule$1 = rule;
function fromJSON$1(json, inputs) {
  if (Array.isArray(json)) return json.map((n) => fromJSON$1(n));
  let _a = json, { inputs: ownInputs } = _a, defaults = __objRest(_a, ["inputs"]);
  if (ownInputs) {
    inputs = [];
    for (let input2 of ownInputs) {
      let inputHydrated = __spreadProps(__spreadValues({}, input2), { __proto__: Input$1.prototype });
      if (inputHydrated.map) {
        inputHydrated.map = __spreadProps(__spreadValues({}, inputHydrated.map), {
          __proto__: PreviousMap2.prototype
        });
      }
      inputs.push(inputHydrated);
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map((n) => fromJSON$1(n, inputs));
  }
  if (defaults.source) {
    let _b = defaults.source, { inputId } = _b, source = __objRest(_b, ["inputId"]);
    defaults.source = source;
    if (inputId != null) {
      defaults.source.input = inputs[inputId];
    }
  }
  if (defaults.type === "root") {
    return new Root$1(defaults);
  } else if (defaults.type === "decl") {
    return new Declaration$1(defaults);
  } else if (defaults.type === "rule") {
    return new Rule$1(defaults);
  } else if (defaults.type === "comment") {
    return new Comment$1(defaults);
  } else if (defaults.type === "atrule") {
    return new AtRule$1(defaults);
  } else {
    throw new Error("Unknown node type: " + json.type);
  }
}
var fromJSON_1 = fromJSON$1;
fromJSON$1.default = fromJSON$1;
let CssSyntaxError2 = cssSyntaxError;
let Declaration2 = declaration;
let LazyResult2 = lazyResult;
let Container2 = container;
let Processor2 = processor;
let stringify = stringify_1;
let fromJSON = fromJSON_1;
let Document2 = document$1;
let Warning2 = warning;
let Comment2 = comment;
let AtRule2 = atRule;
let Result2 = result;
let Input2 = input;
let parse = parse_1;
let list = list_1;
let Rule2 = rule;
let Root2 = root;
let Node2 = node;
function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0];
  }
  return new Processor2(plugins);
}
postcss.plugin = function plugin(name, initializer) {
  let warningPrinted = false;
  function creator(...args) {
    if (console && console.warn && !warningPrinted) {
      warningPrinted = true;
      console.warn(
        name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"
      );
      if (process.env.LANG && process.env.LANG.startsWith("cn")) {
        console.warn(
          name + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"
        );
      }
    }
    let transformer = initializer(...args);
    transformer.postcssPlugin = name;
    transformer.postcssVersion = new Processor2().version;
    return transformer;
  }
  let cache;
  Object.defineProperty(creator, "postcss", {
    get() {
      if (!cache) cache = creator();
      return cache;
    }
  });
  creator.process = function(css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts);
  };
  return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults) => new Comment2(defaults);
postcss.atRule = (defaults) => new AtRule2(defaults);
postcss.decl = (defaults) => new Declaration2(defaults);
postcss.rule = (defaults) => new Rule2(defaults);
postcss.root = (defaults) => new Root2(defaults);
postcss.document = (defaults) => new Document2(defaults);
postcss.CssSyntaxError = CssSyntaxError2;
postcss.Declaration = Declaration2;
postcss.Container = Container2;
postcss.Processor = Processor2;
postcss.Document = Document2;
postcss.Comment = Comment2;
postcss.Warning = Warning2;
postcss.AtRule = AtRule2;
postcss.Result = Result2;
postcss.Input = Input2;
postcss.Rule = Rule2;
postcss.Root = Root2;
postcss.Node = Node2;
LazyResult2.registerPostcss(postcss);
var postcss_1 = postcss;
postcss.default = postcss;
const postcss$1 = /* @__PURE__ */ getDefaultExportFromCjs(postcss_1);
postcss$1.stringify;
postcss$1.fromJSON;
postcss$1.plugin;
postcss$1.parse;
postcss$1.list;
postcss$1.document;
postcss$1.comment;
postcss$1.atRule;
postcss$1.rule;
postcss$1.decl;
postcss$1.root;
postcss$1.CssSyntaxError;
postcss$1.Declaration;
postcss$1.Container;
postcss$1.Processor;
postcss$1.Document;
postcss$1.Comment;
postcss$1.Warning;
postcss$1.AtRule;
postcss$1.Result;
postcss$1.Input;
postcss$1.Rule;
postcss$1.Root;
postcss$1.Node;
const tagMap = {
  script: "noscript",
  // camel case svg element tag names
  altglyph: "altGlyph",
  altglyphdef: "altGlyphDef",
  altglyphitem: "altGlyphItem",
  animatecolor: "animateColor",
  animatemotion: "animateMotion",
  animatetransform: "animateTransform",
  clippath: "clipPath",
  feblend: "feBlend",
  fecolormatrix: "feColorMatrix",
  fecomponenttransfer: "feComponentTransfer",
  fecomposite: "feComposite",
  feconvolvematrix: "feConvolveMatrix",
  fediffuselighting: "feDiffuseLighting",
  fedisplacementmap: "feDisplacementMap",
  fedistantlight: "feDistantLight",
  fedropshadow: "feDropShadow",
  feflood: "feFlood",
  fefunca: "feFuncA",
  fefuncb: "feFuncB",
  fefuncg: "feFuncG",
  fefuncr: "feFuncR",
  fegaussianblur: "feGaussianBlur",
  feimage: "feImage",
  femerge: "feMerge",
  femergenode: "feMergeNode",
  femorphology: "feMorphology",
  feoffset: "feOffset",
  fepointlight: "fePointLight",
  fespecularlighting: "feSpecularLighting",
  fespotlight: "feSpotLight",
  fetile: "feTile",
  feturbulence: "feTurbulence",
  foreignobject: "foreignObject",
  glyphref: "glyphRef",
  lineargradient: "linearGradient",
  radialgradient: "radialGradient"
};
function getTagName(n) {
  let tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
  if (tagName === "link" && n.attributes._cssText) {
    tagName = "style";
  }
  return tagName;
}
function adaptCssForReplay(cssText, cache) {
  const cachedStyle = cache == null ? void 0 : cache.stylesWithHoverClass.get(cssText);
  if (cachedStyle) return cachedStyle;
  const ast = postcss$1([
    mediaSelectorPlugin,
    pseudoClassPlugin
  ]).process(cssText);
  const result2 = ast.css;
  cache == null ? void 0 : cache.stylesWithHoverClass.set(cssText, result2);
  return result2;
}
function createCache() {
  const stylesWithHoverClass = /* @__PURE__ */ new Map();
  return {
    stylesWithHoverClass
  };
}
function applyCssSplits(n, cssText, hackCss, cache) {
  const childTextNodes = [];
  for (const scn of n.childNodes) {
    if (scn.type === NodeType.Text) {
      childTextNodes.push(scn);
    }
  }
  const cssTextSplits = cssText.split("/* rr_split */");
  while (cssTextSplits.length > 1 && cssTextSplits.length > childTextNodes.length) {
    cssTextSplits.splice(-2, 2, cssTextSplits.slice(-2).join(""));
  }
  for (let i = 0; i < childTextNodes.length; i++) {
    const childTextNode = childTextNodes[i];
    const cssTextSection = cssTextSplits[i];
    if (childTextNode && cssTextSection) {
      childTextNode.textContent = hackCss ? adaptCssForReplay(cssTextSection, cache) : cssTextSection;
    }
  }
}
function buildStyleNode(n, styleEl, cssText, options) {
  const { doc, hackCss, cache } = options;
  if (n.childNodes.length) {
    applyCssSplits(n, cssText, hackCss, cache);
  } else {
    if (hackCss) {
      cssText = adaptCssForReplay(cssText, cache);
    }
    styleEl.appendChild(doc.createTextNode(cssText));
  }
}
function buildNode(n, options) {
  var _a, _b;
  const { doc, hackCss, cache } = options;
  switch (n.type) {
    case NodeType.Document:
      return doc.implementation.createDocument(null, "", null);
    case NodeType.DocumentType:
      return doc.implementation.createDocumentType(
        n.name || "html",
        n.publicId,
        n.systemId
      );
    case NodeType.Element: {
      const tagName = getTagName(n);
      let node2;
      if (n.isSVG) {
        node2 = doc.createElementNS("http://www.w3.org/2000/svg", tagName);
      } else {
        if (
          // If the tag name is a custom element name
          n.isCustom && // If the browser supports custom elements
          ((_a = doc.defaultView) == null ? void 0 : _a.customElements) && // If the custom element hasn't been defined yet
          !doc.defaultView.customElements.get(n.tagName)
        )
          doc.defaultView.customElements.define(
            n.tagName,
            class extends doc.defaultView.HTMLElement {
            }
          );
        node2 = doc.createElement(tagName);
      }
      const specialAttributes = {};
      for (const name in n.attributes) {
        if (!Object.prototype.hasOwnProperty.call(n.attributes, name)) {
          continue;
        }
        let value = n.attributes[name];
        if (tagName === "option" && name === "selected" && value === false) {
          continue;
        }
        if (value === null) {
          continue;
        }
        if (value === true) value = "";
        if (name.startsWith("rr_")) {
          specialAttributes[name] = value;
          continue;
        }
        if (typeof value !== "string") ;
        else if (tagName === "style" && name === "_cssText") {
          buildStyleNode(n, node2, value, options);
          continue;
        } else if (tagName === "textarea" && name === "value") {
          node2.appendChild(doc.createTextNode(value));
          n.childNodes = [];
          continue;
        }
        try {
          if (n.isSVG && name === "xlink:href") {
            node2.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              name,
              value.toString()
            );
          } else if (name === "onload" || name === "onclick" || name.substring(0, 7) === "onmouse") {
            node2.setAttribute("_" + name, value.toString());
          } else if (tagName === "meta" && n.attributes["http-equiv"] === "Content-Security-Policy" && name === "content") {
            node2.setAttribute("csp-content", value.toString());
            continue;
          } else if (tagName === "link" && (n.attributes.rel === "preload" || n.attributes.rel === "modulepreload") && n.attributes.as === "script") {
          } else if (tagName === "link" && n.attributes.rel === "prefetch" && typeof n.attributes.href === "string" && n.attributes.href.endsWith(".js")) {
          } else if (tagName === "img" && n.attributes.srcset && n.attributes.rr_dataURL) {
            node2.setAttribute(
              "rrweb-original-srcset",
              n.attributes.srcset
            );
          } else {
            node2.setAttribute(name, value.toString());
          }
        } catch (error) {
        }
      }
      for (const name in specialAttributes) {
        const value = specialAttributes[name];
        if (tagName === "canvas" && name === "rr_dataURL") {
          const image = doc.createElement("img");
          image.onload = () => {
            const ctx = node2.getContext("2d");
            if (ctx) {
              ctx.drawImage(image, 0, 0, image.width, image.height);
            }
          };
          image.src = value.toString();
          if (node2.RRNodeType)
            node2.rr_dataURL = value.toString();
        } else if (tagName === "img" && name === "rr_dataURL") {
          const image = node2;
          if (!image.currentSrc.startsWith("data:")) {
            image.setAttribute(
              "rrweb-original-src",
              n.attributes.src
            );
            image.src = value.toString();
          }
        }
        if (name === "rr_width") {
          node2.style.width = value.toString();
        } else if (name === "rr_height") {
          node2.style.height = value.toString();
        } else if (name === "rr_mediaCurrentTime" && typeof value === "number") {
          node2.currentTime = value;
        } else if (name === "rr_mediaState") {
          switch (value) {
            case "played":
              node2.play().catch((e) => console.warn("media playback error", e));
              break;
            case "paused":
              node2.pause();
              break;
          }
        } else if (name === "rr_mediaPlaybackRate" && typeof value === "number") {
          node2.playbackRate = value;
        } else if (name === "rr_mediaMuted" && typeof value === "boolean") {
          node2.muted = value;
        } else if (name === "rr_mediaLoop" && typeof value === "boolean") {
          node2.loop = value;
        } else if (name === "rr_mediaVolume" && typeof value === "number") {
          node2.volume = value;
        } else if (name === "rr_open_mode") {
          node2.setAttribute(
            "rr_open_mode",
            value
          );
        }
      }
      if (n.isShadowHost) {
        if (!node2.shadowRoot) {
          node2.attachShadow({ mode: "open" });
          (_b = n.chromaticAdoptedStylesheets) == null ? void 0 : _b.forEach(
            (chromaticAdoptedStylesheet) => {
              var _a2;
              const styleSheet = new CSSStyleSheet();
              styleSheet.replaceSync(chromaticAdoptedStylesheet);
              (_a2 = node2.shadowRoot) == null ? void 0 : _a2.adoptedStyleSheets.push(styleSheet);
            }
          );
        } else {
          while (node2.shadowRoot.firstChild) {
            node2.shadowRoot.removeChild(node2.shadowRoot.firstChild);
          }
        }
      }
      return node2;
    }
    case NodeType.Text:
      if (n.isStyle && hackCss) {
        return doc.createTextNode(adaptCssForReplay(n.textContent, cache));
      }
      return doc.createTextNode(n.textContent);
    case NodeType.CDATA:
      return doc.createCDATASection(n.textContent);
    case NodeType.Comment:
      return doc.createComment(n.textContent);
    default:
      return null;
  }
}
function buildNodeWithSN(n, options) {
  const {
    doc,
    mirror,
    skipChild = false,
    hackCss = true,
    afterAppend,
    cache
  } = options;
  if (mirror.has(n.id)) {
    const nodeInMirror = mirror.getNode(n.id);
    const meta = mirror.getMeta(nodeInMirror);
    if (isNodeMetaEqual(meta, n)) return mirror.getNode(n.id);
  }
  let node2 = buildNode(n, { doc, hackCss, cache });
  if (!node2) {
    return null;
  }
  if (n.rootId && mirror.getNode(n.rootId) !== doc) {
    mirror.replace(n.rootId, doc);
  }
  if (n.type === NodeType.Document) {
    doc.close();
    doc.open();
    if (n.compatMode === "BackCompat" && n.childNodes && n.childNodes[0].type !== NodeType.DocumentType) {
      if (n.childNodes[0].type === NodeType.Element && "xmlns" in n.childNodes[0].attributes && n.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml") {
        doc.write(
          '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
        );
      } else {
        doc.write(
          '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
        );
      }
    }
    node2 = doc;
  }
  mirror.add(node2, n);
  if ((n.type === NodeType.Document || n.type === NodeType.Element) && !skipChild) {
    for (const childN of n.childNodes) {
      const childNode = buildNodeWithSN(childN, {
        doc,
        mirror,
        skipChild: false,
        hackCss,
        afterAppend,
        cache
      });
      if (!childNode) {
        console.warn("Failed to rebuild", childN);
        continue;
      }
      if (childN.isShadow && isElement(node2) && node2.shadowRoot) {
        node2.shadowRoot.appendChild(childNode);
      } else if (n.type === NodeType.Document && childN.type == NodeType.Element) {
        const htmlElement = childNode;
        let body = null;
        htmlElement.childNodes.forEach((child) => {
          if (child.nodeName === "BODY") body = child;
        });
        if (body) {
          htmlElement.removeChild(body);
          node2.appendChild(childNode);
          htmlElement.appendChild(body);
        } else {
          node2.appendChild(childNode);
        }
      } else {
        node2.appendChild(childNode);
      }
      if (afterAppend) {
        afterAppend(childNode, childN.id);
      }
    }
  }
  return node2;
}
function visit(mirror, onVisit) {
  function walk(node2) {
    onVisit(node2);
  }
  for (const id of mirror.getIds()) {
    if (mirror.has(id)) {
      walk(mirror.getNode(id));
    }
  }
}
function handleScroll(node2, mirror) {
  const n = mirror.getMeta(node2);
  if ((n == null ? void 0 : n.type) !== NodeType.Element) {
    return;
  }
  const el = node2;
  for (const name in n.attributes) {
    if (!(Object.prototype.hasOwnProperty.call(n.attributes, name) && name.startsWith("rr_"))) {
      continue;
    }
    const value = n.attributes[name];
    if (name === "rr_scrollLeft") {
      el.scrollLeft = value;
    }
    if (name === "rr_scrollTop") {
      el.scrollTop = value;
    }
  }
}
function rebuild(n, options) {
  const {
    doc,
    onVisit,
    hackCss = true,
    afterAppend,
    cache,
    mirror = new Mirror()
  } = options;
  const node2 = buildNodeWithSN(n, {
    doc,
    mirror,
    skipChild: false,
    hackCss,
    afterAppend,
    cache
  });
  visit(mirror, (visitedNode) => {
    if (onVisit) {
      onVisit(visitedNode);
    }
    handleScroll(visitedNode, mirror);
  });
  return node2;
}
exports.IGNORED_NODE = IGNORED_NODE;
exports.Mirror = Mirror;
exports.NodeType = NodeType;
exports.absolutifyURLs = absolutifyURLs;
exports.adaptCssForReplay = adaptCssForReplay;
exports.buildNodeWithSN = buildNodeWithSN;
exports.classMatchesRegex = classMatchesRegex;
exports.cleanupSnapshot = cleanupSnapshot;
exports.createCache = createCache;
exports.createMirror = createMirror;
exports.escapeImportStatement = escapeImportStatement;
exports.extractFileExtension = extractFileExtension;
exports.fixSafariColons = fixSafariColons;
exports.genId = genId;
exports.getInputType = getInputType;
exports.ignoreAttribute = ignoreAttribute;
exports.is2DCanvasBlank = is2DCanvasBlank;
exports.isCSSImportRule = isCSSImportRule;
exports.isCSSStyleRule = isCSSStyleRule;
exports.isElement = isElement;
exports.isNativeShadowDom = isNativeShadowDom;
exports.isNodeMetaEqual = isNodeMetaEqual;
exports.isShadowRoot = isShadowRoot;
exports.markCssSplits = markCssSplits;
exports.maskInputValue = maskInputValue;
exports.needMaskingText = needMaskingText;
exports.normalizeCssString = normalizeCssString;
exports.rebuild = rebuild;
exports.serializeNodeWithId = serializeNodeWithId;
exports.snapshot = snapshot;
exports.splitCssText = splitCssText;
exports.stringifyRule = stringifyRule;
exports.stringifyStylesheet = stringifyStylesheet;
exports.toLowerCase = toLowerCase;
exports.transformAttribute = transformAttribute;
exports.visitSnapshot = visitSnapshot;
if (typeof module.exports == "object" && typeof exports == "object") {
  var __cp = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of Object.getOwnPropertyNames(from)) {
        if (!Object.prototype.hasOwnProperty.call(to, key) && key !== except)
        Object.defineProperty(to, key, {
          get: () => from[key],
          enumerable: !(desc = Object.getOwnPropertyDescriptor(from, key)) || desc.enumerable,
        });
      }
    }
    return to;
  };
  module.exports = __cp(module.exports, exports);
}
return module.exports;
}))
//# sourceMappingURL=rrweb-snapshot.umd.cjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./cypress/e2e/signUp.cy.js ***!
  \**********************************/


__webpack_require__(/*! @chromatic-com/cypress/support */ "./node_modules/@chromatic-com/cypress/dist/support.js");
/* ==== Test Created with Cypress Studio ==== */

it('signupflow', function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/signup');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').clear('y');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').type('yohanes');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').clear('yohannes');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').type('yohannes');
  cy.get(':nth-child(3) > .input-field').clear('a');
  cy.get(':nth-child(3) > .input-field').type('asfaw');
  cy.get(':nth-child(7) > .relative > .input-field').clear('1');
  cy.get(':nth-child(7) > .relative > .input-field').type('12345');
  cy.get(':nth-child(9) > .relative > .input-field').clear('1');
  cy.get(':nth-child(9) > .relative > .input-field').type('12345');
  cy.get(':nth-child(7) > .relative > .input-field').clear('123456');
  cy.get(':nth-child(7) > .relative > .input-field').type('123456');
  cy.get(':nth-child(9) > .relative > .input-field').clear('123456');
  cy.get(':nth-child(9) > .relative > .input-field').type('123456');
  cy.get('.w-50 > .flex').click();
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > .text-white').click();
  cy.get('.z-10 > .flex-col > .relative > :nth-child(1)').clear('1');
  cy.get('.z-10 > .flex-col > .relative > :nth-child(1)').type('1');
  cy.get('.flex-col > .relative > :nth-child(2)').clear('2');
  cy.get('.flex-col > .relative > :nth-child(2)').type('2');
  cy.get('.relative > :nth-child(3)').clear('2');
  cy.get('.relative > :nth-child(3)').type('2');
  cy.get('.relative > :nth-child(4)').clear('4');
  cy.get('.relative > :nth-child(4)').type('4');
  cy.get('.relative > :nth-child(5)').clear('1');
  cy.get('.relative > :nth-child(5)').type('1');
  cy.get('.relative > :nth-child(6)').clear();
  cy.get('.relative > :nth-child(6)').type('1');
  cy.get('.relative > :nth-child(6)').click();
  cy.get('.py-3').click();
  /* ==== End Cypress Studio ==== */
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnblVwLmN5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOzs7Ozs7Ozs7Ozs7QUN2TGhCOztBQUViLG9CQUFvQixtQkFBTyxDQUFDLHFHQUEwQjs7QUFFdEQsd0NBQXdDLHlEQUF5RCxnQ0FBZ0MsMENBQTBDLGtCQUFrQiwwQkFBMEIsR0FBRyxFQUFFLGdCQUFnQixnR0FBZ0cseUNBQXlDLDRDQUE0QyxJQUFJLEVBQUUsZUFBZSx5REFBeUQsOENBQThDLG1DQUFtQyxFQUFFLHlDQUF5QyxrQkFBa0IsMkJBQTJCLGdDQUFnQyxzSUFBc0ksa0NBQWtDLDJDQUEyQywyQkFBMkIsMkJBQTJCLDZDQUE2QywrREFBK0QsbUNBQW1DLDJDQUEyQyxrQ0FBa0MseUNBQXlDLHlDQUF5Qyx1REFBdUQsMENBQTBDLHlEQUF5RCxvQ0FBb0MsNkNBQTZDLHFDQUFxQyxnREFBZ0QscUJBQXFCLDhFQUE4RSw4Q0FBOEMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM1c0Q7QUFDQTs7Ozs7Ozs7Ozs7QUNOWTs7QUFFWixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixlQUFlLG1CQUFPLENBQUMsb0RBQVc7QUFDbEMsZ0JBQWdCLG1CQUFPLENBQUMsZ0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLGtCQUFrQjtBQUNsQix5QkFBeUI7O0FBRXpCO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLHFCQUFxQixXQUFXLEdBQUcsSUFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLGdCQUFnQixXQUFXLEdBQUcsSUFBSSxLQUFLLGFBQWE7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsS0FBSyxtREFBbUQsY0FBYztBQUN6RixHQUFHO0FBQ0g7QUFDQTtBQUNBLCtCQUErQixJQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTSxhQUFhLFNBQVM7QUFDdEQ7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnQkFBZ0I7QUFDekIsY0FBYyxvQkFBb0IsRUFBRSxJQUFJO0FBQ3hDO0FBQ0EsWUFBWSxnQkFBZ0IsRUFBRSxJQUFJO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixHQUFHLFNBQVMsR0FBRyxLQUFLLHFCQUFxQixFQUFFLEVBQUU7QUFDcEUsUUFBUTtBQUNSLHlCQUF5QixHQUFHLEtBQUsseUJBQXlCLEVBQUUsRUFBRTtBQUM5RCxtQkFBbUIseUJBQXlCLEVBQUUsRUFBRTtBQUNoRDtBQUNBLE1BQU07QUFDTixvQkFBb0IsSUFBSSxFQUFFLEdBQUcsU0FBUyxJQUFJLEVBQUUsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsY0FBYyxTQUFTLE9BQU87QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsWUFBWTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6akVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsV0FBVzs7QUFFcEI7QUFDQTtBQUNBLFNBQVMsVUFBVTs7QUFFbkI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBLFFBQVEsSUFBdUQ7QUFDL0Q7QUFDQSxNQUFNLEtBQUssRUFNTjtBQUNMLEdBQUc7QUFDSDtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw2REFBNkQ7QUFDM0k7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRiw2REFBNkQ7QUFDN0k7QUFDQSxxREFBcUQsaUJBQWlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUcsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUcsZUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3REFBd0Q7QUFDdkc7QUFDQSxpQ0FBaUM7QUFDakMsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsdUNBQXVDLDJCQUEyQjtBQUNsRTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEMsb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVztBQUN6RDtBQUNBO0FBQ0Esc0JBQXNCLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVztBQUN6RDtBQUNBO0FBQ0Esc0JBQXNCLFdBQVcsRUFBRSwrQkFBK0IsRUFBRSxXQUFXO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sa0RBQWtELFVBQVU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekMsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2Q0FBNkM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EscUNBQXFDLFNBQVMsV0FBVyxJQUFJO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFFBQVEsWUFBWTtBQUNwQixRQUFRLDRCQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsMERBQTBELElBQUk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwyQ0FBMkMsYUFBYTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdCQUF3QixpQkFBaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtCQUErQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEVBQUU7QUFDOUM7QUFDQTtBQUNBLGNBQWMsRUFBRTtBQUNoQixhQUFhLGFBQWEsR0FBRyxhQUFhLEdBQUcsZUFBZTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQSxVQUFVLHdDQUF3QztBQUNsRCxVQUFVLG9DQUFvQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWUsK0JBQStCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsTUFBTSxtRkFBbUY7QUFDekYsTUFBTSwyQkFBMkI7QUFDakMsTUFBTSwyQkFBMkI7QUFDakM7QUFDQSxNQUFNLE1BQU07QUFDWixXQUFXLE1BQU07QUFDakIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZUFBZTtBQUNqRSwyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1GQUFtRjtBQUN6RixNQUFNLGdEQUFnRDtBQUN0RCxNQUFNLGlDQUFpQztBQUN2QyxNQUFNLFNBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDBDQUEwQyxLQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDBDQUEwQztBQUM5RixzREFBc0QsZ0RBQWdEO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxzQ0FBc0MsY0FBYztBQUNwRCx3Q0FBd0Msa0NBQWtDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxrQ0FBa0M7QUFDeEMsTUFBTSxnQkFBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxNQUFNO0FBQ2QsYUFBYSxNQUFNO0FBQ25CLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0JBQWtCO0FBQzFCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBK0M7QUFDdkQ7QUFDQSx3QkFBd0I7QUFDeEIsUUFBUTtBQUNSLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9CQUFvQjtBQUM1QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsUUFBUSxrQkFBa0I7QUFDMUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNCQUFzQjtBQUM5QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0JBQWtCO0FBQzFCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osUUFBUSxJQUFJO0FBQ1o7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRixVQUFVO0FBQ1YsZ0ZBQWdGO0FBQ2hGLFVBQVU7QUFDVixnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGNBQWM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0JBQWdCLHlDQUF5QztBQUMzRztBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTyxLQUFLLHNCQUFzQiwyQkFBMkIsd0JBQXdCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0JBQXdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSLFlBQVksSUFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSx5REFBeUQsYUFBYSw4QkFBOEI7QUFDcEc7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPLGFBQWEsT0FBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7VUM5MktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQUEsbUJBQUE7QUFEQTs7QUFFQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFXO0VBQzFCO0VBQ0FDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLDhCQUE4QixDQUFDO0VBQ3hDRCxFQUFFLENBQUNFLEdBQUcsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzVGSCxFQUFFLENBQUNFLEdBQUcsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDO0VBQ2pHSixFQUFFLENBQUNFLEdBQUcsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBVSxDQUFDO0VBQ25HSCxFQUFFLENBQUNFLEdBQUcsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQ2xHSixFQUFFLENBQUNFLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2pESCxFQUFFLENBQUNFLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO0VBQ3BESixFQUFFLENBQUNFLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzdESCxFQUFFLENBQUNFLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO0VBQ2hFSixFQUFFLENBQUNFLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzdESCxFQUFFLENBQUNFLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO0VBQ2hFSixFQUFFLENBQUNFLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsUUFBUSxDQUFDO0VBQ2xFSCxFQUFFLENBQUNFLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDO0VBQ2pFSixFQUFFLENBQUNFLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsUUFBUSxDQUFDO0VBQ2xFSCxFQUFFLENBQUNFLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDO0VBQ2pFSixFQUFFLENBQUNFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7RUFDL0JMLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLHdEQUF3RCxDQUFDLENBQUNHLEtBQUssQ0FBQyxDQUFDO0VBQ3hFTCxFQUFFLENBQUNFLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2xFSCxFQUFFLENBQUNFLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2pFSixFQUFFLENBQUNFLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzFESCxFQUFFLENBQUNFLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ3pESixFQUFFLENBQUNFLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzlDSCxFQUFFLENBQUNFLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQzdDSixFQUFFLENBQUNFLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzlDSCxFQUFFLENBQUNFLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQzdDSixFQUFFLENBQUNFLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzlDSCxFQUFFLENBQUNFLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQzdDSixFQUFFLENBQUNFLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztFQUMzQ0gsRUFBRSxDQUFDRSxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUM3Q0osRUFBRSxDQUFDRSxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7RUFDM0NMLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQztFQUN2QjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi4vLi4vLmNhY2hlL0N5cHJlc3MvMTMuMTUuMC9DeXByZXNzL3Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9udXh0LWFwcC8uL25vZGVfbW9kdWxlcy9AY2hyb21hdGljLWNvbS9jeXByZXNzL2Rpc3Qvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9udXh0LWFwcC8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL251eHQtYXBwLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi9ub2RlX21vZHVsZXMvQGNocm9tYXVpL3Jyd2ViLXNuYXBzaG90L2Rpc3QvcnJ3ZWItc25hcHNob3QudW1kLmNqcyIsIndlYnBhY2s6Ly9udXh0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9udXh0LWFwcC8uL2N5cHJlc3MvZTJlL3NpZ25VcC5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcnJ3ZWJTbmFwc2hvdCA9IHJlcXVpcmUoJ0BjaHJvbWF1aS9ycndlYi1zbmFwc2hvdCcpO1xuXG5DeXByZXNzLkNvbW1hbmRzLmFkZChcInRha2VTbmFwc2hvdFwiLGU9PntDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpJiZjeS5kb2N1bWVudCgpLnRoZW4ocz0+e2xldCByPXJyd2ViU25hcHNob3Quc25hcHNob3Qocyk7Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKG89PlsuLi5vLHtuYW1lOmUsc25hcHNob3Q6cn1dKS5hcyhcIm1hbnVhbFNuYXBzaG90c1wiKTt9KTt9KTtiZWZvcmVFYWNoKCgpPT57Q3lwcmVzcy5jb25maWcoXCJpc1RleHRUZXJtaW5hbFwiKSYmKGN5LndyYXAoW10pLmFzKFwibWFudWFsU25hcHNob3RzXCIpLGN5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2V0dXAtbmV0d29yay1saXN0ZW5lclwiLHBheWxvYWQ6e2FsbG93ZWREb21haW5zOkN5cHJlc3MuZW52KFwiYXNzZXREb21haW5zXCIpfX0pKTt9KTthZnRlckVhY2goKCk9PntDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpJiZjeS5kb2N1bWVudCgpLnRoZW4oZT0+e2xldCBzPUN5cHJlc3MuZW52KFwiZGlzYWJsZUF1dG9TbmFwc2hvdFwiKT9bXTpbe3NuYXBzaG90OnJyd2ViU25hcHNob3Quc25hcHNob3QoZSl9XTtjeS5nZXQoXCJAbWFudWFsU25hcHNob3RzXCIpLnRoZW4oKHI9W10pPT57Y3kudXJsKCkudGhlbihvPT57Y3kudGFzayhcInByZXBhcmVBcmNoaXZlc1wiLHthY3Rpb246XCJzYXZlLWFyY2hpdmVzXCIscGF5bG9hZDp7dGVzdFRpdGxlUGF0aDpbQ3lwcmVzcy5zcGVjLnJlbGF0aXZlVG9Db21tb25Sb290LC4uLkN5cHJlc3MuY3VycmVudFRlc3QudGl0bGVQYXRoXSxkb21TbmFwc2hvdHM6Wy4uLnIsLi4uc10sY2hyb21hdGljU3Rvcnlib29rUGFyYW1zOnsuLi5DeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIikmJntkaWZmVGhyZXNob2xkOkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJkZWxheVwiKSYme2RlbGF5OkN5cHJlc3MuZW52KFwiZGVsYXlcIil9LC4uLkN5cHJlc3MuZW52KFwiZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmdcIikmJntkaWZmSW5jbHVkZUFudGlBbGlhc2luZzpDeXByZXNzLmVudihcImRpZmZJbmNsdWRlQW50aUFsaWFzaW5nXCIpfSwuLi5DeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIikmJntkaWZmVGhyZXNob2xkOkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJmb3JjZWRDb2xvcnNcIikmJntmb3JjZWRDb2xvcnM6Q3lwcmVzcy5lbnYoXCJmb3JjZWRDb2xvcnNcIil9LC4uLkN5cHJlc3MuZW52KFwicGF1c2VBbmltYXRpb25BdEVuZFwiKSYme3BhdXNlQW5pbWF0aW9uQXRFbmQ6Q3lwcmVzcy5lbnYoXCJwYXVzZUFuaW1hdGlvbkF0RW5kXCIpfSwuLi5DeXByZXNzLmVudihcInByZWZlcnNSZWR1Y2VkTW90aW9uXCIpJiZ7cHJlZmVyc1JlZHVjZWRNb3Rpb246Q3lwcmVzcy5lbnYoXCJwcmVmZXJzUmVkdWNlZE1vdGlvblwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJjcm9wVG9WaWV3cG9ydFwiKSYme2Nyb3BUb1ZpZXdwb3J0OkN5cHJlc3MuZW52KFwiY3JvcFRvVmlld3BvcnRcIil9LC4uLkN5cHJlc3MuZW52KFwiaWdub3JlU2VsZWN0b3JzXCIpJiZ7aWdub3JlU2VsZWN0b3JzOkN5cHJlc3MuZW52KFwiaWdub3JlU2VsZWN0b3JzXCIpfX0scGFnZVVybDpvLHZpZXdwb3J0OntoZWlnaHQ6Q3lwcmVzcy5jb25maWcoXCJ2aWV3cG9ydEhlaWdodFwiKSx3aWR0aDpDeXByZXNzLmNvbmZpZyhcInZpZXdwb3J0V2lkdGhcIil9LG91dHB1dERpcjpDeXByZXNzLmNvbmZpZyhcImRvd25sb2Fkc0ZvbGRlclwiKX19KTt9KTt9KTt9KTt9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW91dC5qcy5tYXBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1cHBvcnQuanMubWFwIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxuY29uc3QgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuY29uc3QgY3VzdG9tSW5zcGVjdFN5bWJvbCA9XG4gICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2xbJ2ZvciddID09PSAnZnVuY3Rpb24nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgID8gU3ltYm9sWydmb3InXSgnbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIDogbnVsbFxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbmNvbnN0IEtfTUFYX0xFTkdUSCA9IDB4N2ZmZmZmZmZcbmV4cG9ydHMua01heExlbmd0aCA9IEtfTUFYX0xFTkdUSFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBQcmludCB3YXJuaW5nIGFuZCByZWNvbW1lbmQgdXNpbmcgYGJ1ZmZlcmAgdjQueCB3aGljaCBoYXMgYW4gT2JqZWN0XG4gKiAgICAgICAgICAgICAgIGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBXZSByZXBvcnQgdGhhdCB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBpZiB0aGUgYXJlIG5vdCBzdWJjbGFzc2FibGVcbiAqIHVzaW5nIF9fcHJvdG9fXy4gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWBcbiAqIChTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOCkuIElFIDEwIGxhY2tzIHN1cHBvcnRcbiAqIGZvciBfX3Byb3RvX18gYW5kIGhhcyBhIGJ1Z2d5IHR5cGVkIGFycmF5IGltcGxlbWVudGF0aW9uLlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zb2xlLmVycm9yKFxuICAgICdUaGlzIGJyb3dzZXIgbGFja3MgdHlwZWQgYXJyYXkgKFVpbnQ4QXJyYXkpIHN1cHBvcnQgd2hpY2ggaXMgcmVxdWlyZWQgYnkgJyArXG4gICAgJ2BidWZmZXJgIHY1LnguIFVzZSBgYnVmZmVyYCB2NC54IGlmIHlvdSByZXF1aXJlIG9sZCBicm93c2VyIHN1cHBvcnQuJ1xuICApXG59XG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgLy8gQ2FuIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkP1xuICB0cnkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgY29uc3QgcHJvdG8gPSB7IGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfSB9XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3RvLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYXJyLCBwcm90bylcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MlxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdwYXJlbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyXG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAnb2Zmc2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ5dGVPZmZzZXRcbiAgfVxufSlcblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA+IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgbGVuZ3RoICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuICByZXR1cm4gYnVmXG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBzdHJpbmcuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUoYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuZnVuY3Rpb24gZnJvbSAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5Vmlldyh2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgICApXG4gIH1cblxuICBpZiAoaXNJbnN0YW5jZSh2YWx1ZSwgQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIEFycmF5QnVmZmVyKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgKGlzSW5zdGFuY2UodmFsdWUsIFNoYXJlZEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBTaGFyZWRBcnJheUJ1ZmZlcikpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICApXG4gIH1cblxuICBjb25zdCB2YWx1ZU9mID0gdmFsdWUudmFsdWVPZiAmJiB2YWx1ZS52YWx1ZU9mKClcbiAgaWYgKHZhbHVlT2YgIT0gbnVsbCAmJiB2YWx1ZU9mICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZU9mLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBjb25zdCBiID0gZnJvbU9iamVjdCh2YWx1ZSlcbiAgaWYgKGIpIHJldHVybiBiXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1ByaW1pdGl2ZSAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdKCdzdHJpbmcnKSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICApXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20odmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gTm90ZTogQ2hhbmdlIHByb3RvdHlwZSAqYWZ0ZXIqIEJ1ZmZlci5mcm9tIGlzIGRlZmluZWQgdG8gd29ya2Fyb3VuZCBDaHJvbWUgYnVnOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC8xNDhcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIucHJvdG90eXBlLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIsIFVpbnQ4QXJyYXkpXG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBzaXplICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIGxldCBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuXG4gIGNvbnN0IGFjdHVhbCA9IGJ1Zi53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgYnVmID0gYnVmLnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAoYXJyYXkpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIGNvbnN0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidWZbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5VmlldyAoYXJyYXlWaWV3KSB7XG4gIGlmIChpc0luc3RhbmNlKGFycmF5VmlldywgVWludDhBcnJheSkpIHtcbiAgICBjb25zdCBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlWaWV3KVxuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIoY29weS5idWZmZXIsIGNvcHkuYnl0ZU9mZnNldCwgY29weS5ieXRlTGVuZ3RoKVxuICB9XG4gIHJldHVybiBmcm9tQXJyYXlMaWtlKGFycmF5Vmlldylcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyIChhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIm9mZnNldFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wibGVuZ3RoXCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGxldCBidWZcbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0IChvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgY29uc3QgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICBjb25zdCBidWYgPSBjcmVhdGVCdWZmZXIobGVuKVxuXG4gICAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBidWZcbiAgICB9XG5cbiAgICBvYmouY29weShidWYsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gYnVmXG4gIH1cblxuICBpZiAob2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBudW1iZXJJc05hTihvYmoubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcigwKVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmopXG4gIH1cblxuICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIEFycmF5LmlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqLmRhdGEpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyID09PSB0cnVlICYmXG4gICAgYiAhPT0gQnVmZmVyLnByb3RvdHlwZSAvLyBzbyBCdWZmZXIuaXNCdWZmZXIoQnVmZmVyLnByb3RvdHlwZSkgd2lsbCBiZSBmYWxzZVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYSwgVWludDhBcnJheSkpIGEgPSBCdWZmZXIuZnJvbShhLCBhLm9mZnNldCwgYS5ieXRlTGVuZ3RoKVxuICBpZiAoaXNJbnN0YW5jZShiLCBVaW50OEFycmF5KSkgYiA9IEJ1ZmZlci5mcm9tKGIsIGIub2Zmc2V0LCBiLmJ5dGVMZW5ndGgpXG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcImJ1ZjFcIiwgXCJidWYyXCIgYXJndW1lbnRzIG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXknXG4gICAgKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgbGV0IHggPSBhLmxlbmd0aFxuICBsZXQgeSA9IGIubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICBsZXQgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIGxldCBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgbGV0IGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoaXNJbnN0YW5jZShidWYsIFVpbnQ4QXJyYXkpKSB7XG4gICAgICBpZiAocG9zICsgYnVmLmxlbmd0aCA+IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gQnVmZmVyLmZyb20oYnVmKVxuICAgICAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICBidWYsXG4gICAgICAgICAgcG9zXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgfVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IGlzSW5zdGFuY2Uoc3RyaW5nLCBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIG9yIEFycmF5QnVmZmVyLiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2Ygc3RyaW5nXG4gICAgKVxuICB9XG5cbiAgY29uc3QgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBjb25zdCBtdXN0TWF0Y2ggPSAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdID09PSB0cnVlKVxuICBpZiAoIW11c3RNYXRjaCAmJiBsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHtcbiAgICAgICAgICByZXR1cm4gbXVzdE1hdGNoID8gLTEgOiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICB9XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcmNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIChhbmQgdGhlIGBpcy1idWZmZXJgIG5wbSBwYWNrYWdlKVxuLy8gdG8gZGV0ZWN0IGEgQnVmZmVyIGluc3RhbmNlLiBJdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgYGluc3RhbmNlb2YgQnVmZmVyYFxuLy8gcmVsaWFibHkgaW4gYSBicm93c2VyaWZ5IGNvbnRleHQgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBkaWZmZXJlbnRcbi8vIGNvcGllcyBvZiB0aGUgJ2J1ZmZlcicgcGFja2FnZSBpbiB1c2UuIFRoaXMgbWV0aG9kIHdvcmtzIGV2ZW4gZm9yIEJ1ZmZlclxuLy8gaW5zdGFuY2VzIHRoYXQgd2VyZSBjcmVhdGVkIGZyb20gYW5vdGhlciBjb3B5IG9mIHRoZSBgYnVmZmVyYCBwYWNrYWdlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTU0XG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICBjb25zdCBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IEJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmdcblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICBsZXQgc3RyID0gJydcbiAgY29uc3QgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLnJlcGxhY2UoLyguezJ9KS9nLCAnJDEgJykudHJpbSgpXG4gIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cbmlmIChjdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBCdWZmZXIucHJvdG90eXBlLmluc3BlY3Rcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKGlzSW5zdGFuY2UodGFyZ2V0LCBVaW50OEFycmF5KSkge1xuICAgIHRhcmdldCA9IEJ1ZmZlci5mcm9tKHRhcmdldCwgdGFyZ2V0Lm9mZnNldCwgdGFyZ2V0LmJ5dGVMZW5ndGgpXG4gIH1cbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheS4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB0YXJnZXQpXG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgbGV0IHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIGxldCB5ID0gZW5kIC0gc3RhcnRcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICBjb25zdCB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICBjb25zdCB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAobnVtYmVySXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbdmFsXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgbGV0IGluZGV4U2l6ZSA9IDFcbiAgbGV0IGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgbGV0IHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgbGV0IGlcbiAgaWYgKGRpcikge1xuICAgIGxldCBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgY29uc3QgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGxldCBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAobnVtYmVySXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCA+Pj4gMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICBjb25zdCByZXMgPSBbXVxuXG4gIGxldCBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICBjb25zdCBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICBsZXQgY29kZVBvaW50ID0gbnVsbFxuICAgIGxldCBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpXG4gICAgICA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpXG4gICAgICAgICAgPyAzXG4gICAgICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRilcbiAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgbGV0IHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxuY29uc3QgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIGNvbnN0IGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgbGV0IHJlcyA9ICcnXG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBsZXQgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIGxldCBvdXQgPSAnJ1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSBoZXhTbGljZUxvb2t1cFRhYmxlW2J1ZltpXV1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIGxldCByZXMgPSAnJ1xuICAvLyBJZiBieXRlcy5sZW5ndGggaXMgb2RkLCB0aGUgbGFzdCA4IGJpdHMgbXVzdCBiZSBpZ25vcmVkIChzYW1lIGFzIG5vZGUuanMpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyAoYnl0ZXNbaSArIDFdICogMjU2KSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIGNvbnN0IG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5ld0J1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXRdXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgbGV0IG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdVSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnVUludDY0TEUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCBsbyA9IGZpcnN0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjRcblxuICBjb25zdCBoaSA9IHRoaXNbKytvZmZzZXRdICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICBsYXN0ICogMiAqKiAyNFxuXG4gIHJldHVybiBCaWdJbnQobG8pICsgKEJpZ0ludChoaSkgPDwgQmlnSW50KDMyKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ1VJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdVSW50NjRCRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IGhpID0gZmlyc3QgKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XVxuXG4gIGNvbnN0IGxvID0gdGhpc1srK29mZnNldF0gKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICBsYXN0XG5cbiAgcmV0dXJuIChCaWdJbnQoaGkpIDw8IEJpZ0ludCgzMikpICsgQmlnSW50KGxvKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0XVxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aFxuICBsZXQgbXVsID0gMVxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdJbnQ2NExFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXQgKyA0XSArXG4gICAgdGhpc1tvZmZzZXQgKyA1XSAqIDIgKiogOCArXG4gICAgdGhpc1tvZmZzZXQgKyA2XSAqIDIgKiogMTYgK1xuICAgIChsYXN0IDw8IDI0KSAvLyBPdmVyZmxvd1xuXG4gIHJldHVybiAoQmlnSW50KHZhbCkgPDwgQmlnSW50KDMyKSkgK1xuICAgIEJpZ0ludChmaXJzdCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDI0KVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnSW50NjRCRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IHZhbCA9IChmaXJzdCA8PCAyNCkgKyAvLyBPdmVyZmxvd1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdXG5cbiAgcmV0dXJuIChCaWdJbnQodmFsKSA8PCBCaWdJbnQoMzIpKSArXG4gICAgQmlnSW50KHRoaXNbKytvZmZzZXRdICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgbGFzdClcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoIC0gMVxuICBsZXQgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gd3J0QmlnVUludDY0TEUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbWluLCBtYXgpIHtcbiAgY2hlY2tJbnRCSSh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCA3KVxuXG4gIGxldCBsbyA9IE51bWJlcih2YWx1ZSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxldCBoaSA9IE51bWJlcih2YWx1ZSA+PiBCaWdJbnQoMzIpICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgcmV0dXJuIG9mZnNldFxufVxuXG5mdW5jdGlvbiB3cnRCaWdVSW50NjRCRSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBtaW4sIG1heCkge1xuICBjaGVja0ludEJJKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIDcpXG5cbiAgbGV0IGxvID0gTnVtYmVyKHZhbHVlICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0ICsgN10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDZdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA1XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNF0gPSBsb1xuICBsZXQgaGkgPSBOdW1iZXIodmFsdWUgPj4gQmlnSW50KDMyKSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCArIDNdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQgKyAyXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0ICsgMV0gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldF0gPSBoaVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnVUludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdVSW50NjRMRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NExFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIEJpZ0ludCgwKSwgQmlnSW50KCcweGZmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdVSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ1VJbnQ2NEJFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0QkUodGhpcywgdmFsdWUsIG9mZnNldCwgQmlnSW50KDApLCBCaWdJbnQoJzB4ZmZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICBsZXQgaSA9IDBcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICBsZXQgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIGxldCBtdWwgPSAxXG4gIGxldCBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ0ludDY0TEUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRMRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAtQmlnSW50KCcweDgwMDAwMDAwMDAwMDAwMDAnKSwgQmlnSW50KCcweDdmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnSW50NjRCRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NEJFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIC1CaWdJbnQoJzB4ODAwMDAwMDAwMDAwMDAwMCcpLCBCaWdJbnQoJzB4N2ZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc2hvdWxkIGJlIGEgQnVmZmVyJylcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVzZSBidWlsdC1pbiB3aGVuIGF2YWlsYWJsZSwgbWlzc2luZyBmcm9tIElFMTFcbiAgICB0aGlzLmNvcHlXaXRoaW4odGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgJiYgY29kZSA8IDEyOCkgfHxcbiAgICAgICAgICBlbmNvZGluZyA9PT0gJ2xhdGluMScpIHtcbiAgICAgICAgLy8gRmFzdCBwYXRoOiBJZiBgdmFsYCBmaXRzIGludG8gYSBzaW5nbGUgYnl0ZSwgdXNlIHRoYXQgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgIHZhbCA9IE51bWJlcih2YWwpXG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgbGV0IGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICAgIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyB2YWwgK1xuICAgICAgICAnXCIgaXMgaW52YWxpZCBmb3IgYXJndW1lbnQgXCJ2YWx1ZVwiJylcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gQ1VTVE9NIEVSUk9SU1xuLy8gPT09PT09PT09PT09PVxuXG4vLyBTaW1wbGlmaWVkIHZlcnNpb25zIGZyb20gTm9kZSwgY2hhbmdlZCBmb3IgQnVmZmVyLW9ubHkgdXNhZ2VcbmNvbnN0IGVycm9ycyA9IHt9XG5mdW5jdGlvbiBFIChzeW0sIGdldE1lc3NhZ2UsIEJhc2UpIHtcbiAgZXJyb3JzW3N5bV0gPSBjbGFzcyBOb2RlRXJyb3IgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgICAgdmFsdWU6IGdldE1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgLy8gQWRkIHRoZSBlcnJvciBjb2RlIHRvIHRoZSBuYW1lIHRvIGluY2x1ZGUgaXQgaW4gdGhlIHN0YWNrIHRyYWNlLlxuICAgICAgdGhpcy5uYW1lID0gYCR7dGhpcy5uYW1lfSBbJHtzeW19XWBcbiAgICAgIC8vIEFjY2VzcyB0aGUgc3RhY2sgdG8gZ2VuZXJhdGUgdGhlIGVycm9yIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZSBlcnJvciBjb2RlXG4gICAgICAvLyBmcm9tIHRoZSBuYW1lLlxuICAgICAgdGhpcy5zdGFjayAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgLy8gUmVzZXQgdGhlIG5hbWUgdG8gdGhlIGFjdHVhbCBuYW1lLlxuICAgICAgZGVsZXRlIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGdldCBjb2RlICgpIHtcbiAgICAgIHJldHVybiBzeW1cbiAgICB9XG5cbiAgICBzZXQgY29kZSAodmFsdWUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29kZScsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9TdHJpbmcgKCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gWyR7c3ltfV06ICR7dGhpcy5tZXNzYWdlfWBcbiAgICB9XG4gIH1cbn1cblxuRSgnRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTJyxcbiAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9IGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kc2BcbiAgICB9XG5cbiAgICByZXR1cm4gJ0F0dGVtcHQgdG8gYWNjZXNzIG1lbW9yeSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnXG4gIH0sIFJhbmdlRXJyb3IpXG5FKCdFUlJfSU5WQUxJRF9BUkdfVFlQRScsXG4gIGZ1bmN0aW9uIChuYW1lLCBhY3R1YWwpIHtcbiAgICByZXR1cm4gYFRoZSBcIiR7bmFtZX1cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGFjdHVhbH1gXG4gIH0sIFR5cGVFcnJvcilcbkUoJ0VSUl9PVVRfT0ZfUkFOR0UnLFxuICBmdW5jdGlvbiAoc3RyLCByYW5nZSwgaW5wdXQpIHtcbiAgICBsZXQgbXNnID0gYFRoZSB2YWx1ZSBvZiBcIiR7c3RyfVwiIGlzIG91dCBvZiByYW5nZS5gXG4gICAgbGV0IHJlY2VpdmVkID0gaW5wdXRcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihpbnB1dCkgJiYgTWF0aC5hYnMoaW5wdXQpID4gMiAqKiAzMikge1xuICAgICAgcmVjZWl2ZWQgPSBhZGROdW1lcmljYWxTZXBhcmF0b3IoU3RyaW5nKGlucHV0KSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIHJlY2VpdmVkID0gU3RyaW5nKGlucHV0KVxuICAgICAgaWYgKGlucHV0ID4gQmlnSW50KDIpICoqIEJpZ0ludCgzMikgfHwgaW5wdXQgPCAtKEJpZ0ludCgyKSAqKiBCaWdJbnQoMzIpKSkge1xuICAgICAgICByZWNlaXZlZCA9IGFkZE51bWVyaWNhbFNlcGFyYXRvcihyZWNlaXZlZClcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVkICs9ICduJ1xuICAgIH1cbiAgICBtc2cgKz0gYCBJdCBtdXN0IGJlICR7cmFuZ2V9LiBSZWNlaXZlZCAke3JlY2VpdmVkfWBcbiAgICByZXR1cm4gbXNnXG4gIH0sIFJhbmdlRXJyb3IpXG5cbmZ1bmN0aW9uIGFkZE51bWVyaWNhbFNlcGFyYXRvciAodmFsKSB7XG4gIGxldCByZXMgPSAnJ1xuICBsZXQgaSA9IHZhbC5sZW5ndGhcbiAgY29uc3Qgc3RhcnQgPSB2YWxbMF0gPT09ICctJyA/IDEgOiAwXG4gIGZvciAoOyBpID49IHN0YXJ0ICsgNDsgaSAtPSAzKSB7XG4gICAgcmVzID0gYF8ke3ZhbC5zbGljZShpIC0gMywgaSl9JHtyZXN9YFxuICB9XG4gIHJldHVybiBgJHt2YWwuc2xpY2UoMCwgaSl9JHtyZXN9YFxufVxuXG4vLyBDSEVDSyBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBjaGVja0JvdW5kcyAoYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgaWYgKGJ1ZltvZmZzZXRdID09PSB1bmRlZmluZWQgfHwgYnVmW29mZnNldCArIGJ5dGVMZW5ndGhdID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIGJ1Zi5sZW5ndGggLSAoYnl0ZUxlbmd0aCArIDEpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50QkkgKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB7XG4gICAgY29uc3QgbiA9IHR5cGVvZiBtaW4gPT09ICdiaWdpbnQnID8gJ24nIDogJydcbiAgICBsZXQgcmFuZ2VcbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDMpIHtcbiAgICAgIGlmIChtaW4gPT09IDAgfHwgbWluID09PSBCaWdJbnQoMCkpIHtcbiAgICAgICAgcmFuZ2UgPSBgPj0gMCR7bn0gYW5kIDwgMiR7bn0gKiogJHsoYnl0ZUxlbmd0aCArIDEpICogOH0ke259YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2UgPSBgPj0gLSgyJHtufSAqKiAkeyhieXRlTGVuZ3RoICsgMSkgKiA4IC0gMX0ke259KSBhbmQgPCAyICoqIGAgK1xuICAgICAgICAgICAgICAgIGAkeyhieXRlTGVuZ3RoICsgMSkgKiA4IC0gMX0ke259YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZSA9IGA+PSAke21pbn0ke259IGFuZCA8PSAke21heH0ke259YFxuICAgIH1cbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UoJ3ZhbHVlJywgcmFuZ2UsIHZhbHVlKVxuICB9XG4gIGNoZWNrQm91bmRzKGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU51bWJlciAodmFsdWUsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9JTlZBTElEX0FSR19UWVBFKG5hbWUsICdudW1iZXInLCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZHNFcnJvciAodmFsdWUsIGxlbmd0aCwgdHlwZSkge1xuICBpZiAoTWF0aC5mbG9vcih2YWx1ZSkgIT09IHZhbHVlKSB7XG4gICAgdmFsaWRhdGVOdW1iZXIodmFsdWUsIHR5cGUpXG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKHR5cGUgfHwgJ29mZnNldCcsICdhbiBpbnRlZ2VyJywgdmFsdWUpXG4gIH1cblxuICBpZiAobGVuZ3RoIDwgMCkge1xuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTKClcbiAgfVxuXG4gIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSh0eXBlIHx8ICdvZmZzZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYD49ICR7dHlwZSA/IDEgOiAwfSBhbmQgPD0gJHtsZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlKVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmNvbnN0IElOVkFMSURfQkFTRTY0X1JFID0gL1teKy8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgdGFrZXMgZXF1YWwgc2lnbnMgYXMgZW5kIG9mIHRoZSBCYXNlNjQgZW5jb2RpbmdcbiAgc3RyID0gc3RyLnNwbGl0KCc9JylbMF1cbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICBsZXQgY29kZVBvaW50XG4gIGNvbnN0IGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgbGV0IGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIGNvbnN0IGJ5dGVzID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgY29uc3QgYnl0ZUFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICBsZXQgYywgaGksIGxvXG4gIGNvbnN0IGJ5dGVBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgbGV0IGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbi8vIEFycmF5QnVmZmVyIG9yIFVpbnQ4QXJyYXkgb2JqZWN0cyBmcm9tIG90aGVyIGNvbnRleHRzIChpLmUuIGlmcmFtZXMpIGRvIG5vdCBwYXNzXG4vLyB0aGUgYGluc3RhbmNlb2ZgIGNoZWNrIGJ1dCB0aGV5IHNob3VsZCBiZSB0cmVhdGVkIGFzIG9mIHRoYXQgdHlwZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE2NlxuZnVuY3Rpb24gaXNJbnN0YW5jZSAob2JqLCB0eXBlKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiB0eXBlIHx8XG4gICAgKG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9IG51bGwgJiZcbiAgICAgIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSB0eXBlLm5hbWUpXG59XG5mdW5jdGlvbiBudW1iZXJJc05hTiAob2JqKSB7XG4gIC8vIEZvciBJRTExIHN1cHBvcnRcbiAgcmV0dXJuIG9iaiAhPT0gb2JqIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbi8vIENyZWF0ZSBsb29rdXAgdGFibGUgZm9yIGB0b1N0cmluZygnaGV4JylgXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8yMTlcbmNvbnN0IGhleFNsaWNlTG9va3VwVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5YWJjZGVmJ1xuICBjb25zdCB0YWJsZSA9IG5ldyBBcnJheSgyNTYpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgIGNvbnN0IGkxNiA9IGkgKiAxNlxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgdGFibGVbaTE2ICsgal0gPSBhbHBoYWJldFtpXSArIGFscGhhYmV0W2pdXG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZVxufSkoKVxuXG4vLyBSZXR1cm4gbm90IGZ1bmN0aW9uIHdpdGggRXJyb3IgaWYgQmlnSW50IG5vdCBzdXBwb3J0ZWRcbmZ1bmN0aW9uIGRlZmluZUJpZ0ludE1ldGhvZCAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gQnVmZmVyQmlnSW50Tm90RGVmaW5lZCA6IGZuXG59XG5cbmZ1bmN0aW9uIEJ1ZmZlckJpZ0ludE5vdERlZmluZWQgKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0JpZ0ludCBub3Qgc3VwcG9ydGVkJylcbn1cbiIsIi8qISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCIoZnVuY3Rpb24gKGcsIGYpIHtcbiAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZigpO1xuICAgIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKFwicnJ3ZWJTbmFwc2hvdFwiLCBbXSwgZik7XG4gICAgfSBlbHNlIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzKSB7XG4gICAgICBleHBvcnRzW1wicnJ3ZWJTbmFwc2hvdFwiXSA9IGYoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ1tcInJyd2ViU25hcHNob3RcIl0gPSBmKCk7XG4gICAgfVxuICB9KHRoaXMsICgpID0+IHtcbnZhciBleHBvcnRzID0ge307XG52YXIgbW9kdWxlID0geyBleHBvcnRzIH07XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2NzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fc3ByZWFkVmFsdWVzID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcbiAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgaWYgKF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKGIpKSB7XG4gICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbnZhciBfX3NwcmVhZFByb3BzID0gKGEsIGIpID0+IF9fZGVmUHJvcHMoYSwgX19nZXRPd25Qcm9wRGVzY3MoYikpO1xudmFyIF9fb2JqUmVzdCA9IChzb3VyY2UsIGV4Y2x1ZGUpID0+IHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoc291cmNlLCBwcm9wKSAmJiBleGNsdWRlLmluZGV4T2YocHJvcCkgPCAwKVxuICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICBpZiAoc291cmNlICE9IG51bGwgJiYgX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoc291cmNlKSkge1xuICAgICAgaWYgKGV4Y2x1ZGUuaW5kZXhPZihwcm9wKSA8IDAgJiYgX19wcm9wSXNFbnVtLmNhbGwoc291cmNlLCBwcm9wKSlcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG52YXIgX19kZWZQcm9wMiA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AyID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcDIob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBfX2RlZk5vcm1hbFByb3AyKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSk7XG52YXIgTm9kZVR5cGUgPSAvKiBAX19QVVJFX18gKi8gKChOb2RlVHlwZTIpID0+IHtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIkRvY3VtZW50XCJdID0gMF0gPSBcIkRvY3VtZW50XCI7XG4gIE5vZGVUeXBlMltOb2RlVHlwZTJbXCJEb2N1bWVudFR5cGVcIl0gPSAxXSA9IFwiRG9jdW1lbnRUeXBlXCI7XG4gIE5vZGVUeXBlMltOb2RlVHlwZTJbXCJFbGVtZW50XCJdID0gMl0gPSBcIkVsZW1lbnRcIjtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIlRleHRcIl0gPSAzXSA9IFwiVGV4dFwiO1xuICBOb2RlVHlwZTJbTm9kZVR5cGUyW1wiQ0RBVEFcIl0gPSA0XSA9IFwiQ0RBVEFcIjtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIkNvbW1lbnRcIl0gPSA1XSA9IFwiQ29tbWVudFwiO1xuICByZXR1cm4gTm9kZVR5cGUyO1xufSkoTm9kZVR5cGUgfHwge30pO1xuY29uc3QgdGVzdGFibGVBY2Nlc3NvcnMgPSB7XG4gIE5vZGU6IFtcImNoaWxkTm9kZXNcIiwgXCJwYXJlbnROb2RlXCIsIFwicGFyZW50RWxlbWVudFwiLCBcInRleHRDb250ZW50XCJdLFxuICBTaGFkb3dSb290OiBbXCJob3N0XCIsIFwic3R5bGVTaGVldHNcIl0sXG4gIEVsZW1lbnQ6IFtcInNoYWRvd1Jvb3RcIiwgXCJxdWVyeVNlbGVjdG9yXCIsIFwicXVlcnlTZWxlY3RvckFsbFwiXSxcbiAgTXV0YXRpb25PYnNlcnZlcjogW11cbn07XG5jb25zdCB0ZXN0YWJsZU1ldGhvZHMgPSB7XG4gIE5vZGU6IFtcImNvbnRhaW5zXCIsIFwiZ2V0Um9vdE5vZGVcIl0sXG4gIFNoYWRvd1Jvb3Q6IFtcImdldFNlbGVjdGlvblwiXSxcbiAgRWxlbWVudDogW10sXG4gIE11dGF0aW9uT2JzZXJ2ZXI6IFtcImNvbnN0cnVjdG9yXCJdXG59O1xuY29uc3QgdW50YWludGVkQmFzZVByb3RvdHlwZSA9IHt9O1xuZnVuY3Rpb24gZ2V0VW50YWludGVkUHJvdG90eXBlKGtleSkge1xuICBpZiAodW50YWludGVkQmFzZVByb3RvdHlwZVtrZXldKVxuICAgIHJldHVybiB1bnRhaW50ZWRCYXNlUHJvdG90eXBlW2tleV07XG4gIGNvbnN0IGRlZmF1bHRPYmogPSBnbG9iYWxUaGlzW2tleV07XG4gIGNvbnN0IGRlZmF1bHRQcm90b3R5cGUgPSBkZWZhdWx0T2JqLnByb3RvdHlwZTtcbiAgY29uc3QgYWNjZXNzb3JOYW1lcyA9IGtleSBpbiB0ZXN0YWJsZUFjY2Vzc29ycyA/IHRlc3RhYmxlQWNjZXNzb3JzW2tleV0gOiB2b2lkIDA7XG4gIGNvbnN0IGlzVW50YWludGVkQWNjZXNzb3JzID0gQm9vbGVhbihcbiAgICBhY2Nlc3Nvck5hbWVzICYmIC8vIEB0cy1leHBlY3QtZXJyb3IgMjM0NVxuICAgIGFjY2Vzc29yTmFtZXMuZXZlcnkoXG4gICAgICAoYWNjZXNzb3IpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICAgICAgKF9iID0gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0UHJvdG90eXBlLCBhY2Nlc3NvcikpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXQpID09IG51bGwgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpLmluY2x1ZGVzKFwiW25hdGl2ZSBjb2RlXVwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIClcbiAgKTtcbiAgY29uc3QgbWV0aG9kTmFtZXMgPSBrZXkgaW4gdGVzdGFibGVNZXRob2RzID8gdGVzdGFibGVNZXRob2RzW2tleV0gOiB2b2lkIDA7XG4gIGNvbnN0IGlzVW50YWludGVkTWV0aG9kcyA9IEJvb2xlYW4oXG4gICAgbWV0aG9kTmFtZXMgJiYgbWV0aG9kTmFtZXMuZXZlcnkoXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIDIzNDVcbiAgICAgIChtZXRob2QpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRlZmF1bHRQcm90b3R5cGVbbWV0aG9kXSA9PT0gXCJmdW5jdGlvblwiICYmICgoX2EgPSBkZWZhdWx0UHJvdG90eXBlW21ldGhvZF0pID09IG51bGwgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpLmluY2x1ZGVzKFwiW25hdGl2ZSBjb2RlXVwiKSk7XG4gICAgICB9XG4gICAgKVxuICApO1xuICBpZiAoaXNVbnRhaW50ZWRBY2Nlc3NvcnMgJiYgaXNVbnRhaW50ZWRNZXRob2RzKSB7XG4gICAgdW50YWludGVkQmFzZVByb3RvdHlwZVtrZXldID0gZGVmYXVsdE9iai5wcm90b3R5cGU7XG4gICAgcmV0dXJuIGRlZmF1bHRPYmoucHJvdG90eXBlO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgaWZyYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lRWwpO1xuICAgIGNvbnN0IHdpbiA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3c7XG4gICAgaWYgKCF3aW4pIHJldHVybiBkZWZhdWx0T2JqLnByb3RvdHlwZTtcbiAgICBjb25zdCB1bnRhaW50ZWRPYmplY3QgPSB3aW5ba2V5XS5wcm90b3R5cGU7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWVFbCk7XG4gICAgaWYgKCF1bnRhaW50ZWRPYmplY3QpIHJldHVybiBkZWZhdWx0UHJvdG90eXBlO1xuICAgIHJldHVybiB1bnRhaW50ZWRCYXNlUHJvdG90eXBlW2tleV0gPSB1bnRhaW50ZWRPYmplY3Q7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZGVmYXVsdFByb3RvdHlwZTtcbiAgfVxufVxuY29uc3QgdW50YWludGVkQWNjZXNzb3JDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0VW50YWludGVkQWNjZXNzb3Ioa2V5LCBpbnN0YW5jZSwgYWNjZXNzb3IpIHtcbiAgdmFyIF9hO1xuICBjb25zdCBjYWNoZUtleSA9IGAke2tleX0uJHtTdHJpbmcoYWNjZXNzb3IpfWA7XG4gIGlmICh1bnRhaW50ZWRBY2Nlc3NvckNhY2hlW2NhY2hlS2V5XSlcbiAgICByZXR1cm4gdW50YWludGVkQWNjZXNzb3JDYWNoZVtjYWNoZUtleV0uY2FsbChcbiAgICAgIGluc3RhbmNlXG4gICAgKTtcbiAgY29uc3QgdW50YWludGVkUHJvdG90eXBlID0gZ2V0VW50YWludGVkUHJvdG90eXBlKGtleSk7XG4gIGNvbnN0IHVudGFpbnRlZEFjY2Vzc29yID0gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICB1bnRhaW50ZWRQcm90b3R5cGUsXG4gICAgYWNjZXNzb3JcbiAgKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmdldDtcbiAgaWYgKCF1bnRhaW50ZWRBY2Nlc3NvcikgcmV0dXJuIGluc3RhbmNlW2FjY2Vzc29yXTtcbiAgdW50YWludGVkQWNjZXNzb3JDYWNoZVtjYWNoZUtleV0gPSB1bnRhaW50ZWRBY2Nlc3NvcjtcbiAgcmV0dXJuIHVudGFpbnRlZEFjY2Vzc29yLmNhbGwoaW5zdGFuY2UpO1xufVxuY29uc3QgdW50YWludGVkTWV0aG9kQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldFVudGFpbnRlZE1ldGhvZChrZXksIGluc3RhbmNlLCBtZXRob2QpIHtcbiAgY29uc3QgY2FjaGVLZXkgPSBgJHtrZXl9LiR7U3RyaW5nKG1ldGhvZCl9YDtcbiAgaWYgKHVudGFpbnRlZE1ldGhvZENhY2hlW2NhY2hlS2V5XSlcbiAgICByZXR1cm4gdW50YWludGVkTWV0aG9kQ2FjaGVbY2FjaGVLZXldLmJpbmQoXG4gICAgICBpbnN0YW5jZVxuICAgICk7XG4gIGNvbnN0IHVudGFpbnRlZFByb3RvdHlwZSA9IGdldFVudGFpbnRlZFByb3RvdHlwZShrZXkpO1xuICBjb25zdCB1bnRhaW50ZWRNZXRob2QgPSB1bnRhaW50ZWRQcm90b3R5cGVbbWV0aG9kXTtcbiAgaWYgKHR5cGVvZiB1bnRhaW50ZWRNZXRob2QgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGluc3RhbmNlW21ldGhvZF07XG4gIHVudGFpbnRlZE1ldGhvZENhY2hlW2NhY2hlS2V5XSA9IHVudGFpbnRlZE1ldGhvZDtcbiAgcmV0dXJuIHVudGFpbnRlZE1ldGhvZC5iaW5kKGluc3RhbmNlKTtcbn1cbmZ1bmN0aW9uIGNoaWxkTm9kZXMobikge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJOb2RlXCIsIG4sIFwiY2hpbGROb2Rlc1wiKTtcbn1cbmZ1bmN0aW9uIHBhcmVudE5vZGUobikge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJOb2RlXCIsIG4sIFwicGFyZW50Tm9kZVwiKTtcbn1cbmZ1bmN0aW9uIHBhcmVudEVsZW1lbnQobikge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJOb2RlXCIsIG4sIFwicGFyZW50RWxlbWVudFwiKTtcbn1cbmZ1bmN0aW9uIHRleHRDb250ZW50KG4pIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiTm9kZVwiLCBuLCBcInRleHRDb250ZW50XCIpO1xufVxuZnVuY3Rpb24gY29udGFpbnMobiwgb3RoZXIpIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZE1ldGhvZChcIk5vZGVcIiwgbiwgXCJjb250YWluc1wiKShvdGhlcik7XG59XG5mdW5jdGlvbiBnZXRSb290Tm9kZShuKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRNZXRob2QoXCJOb2RlXCIsIG4sIFwiZ2V0Um9vdE5vZGVcIikoKTtcbn1cbmZ1bmN0aW9uIGhvc3Qobikge1xuICBpZiAoIW4gfHwgIShcImhvc3RcIiBpbiBuKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIlNoYWRvd1Jvb3RcIiwgbiwgXCJob3N0XCIpO1xufVxuZnVuY3Rpb24gc3R5bGVTaGVldHMobikge1xuICByZXR1cm4gbi5zdHlsZVNoZWV0cztcbn1cbmZ1bmN0aW9uIHNoYWRvd1Jvb3Qobikge1xuICBpZiAoIW4gfHwgIShcInNoYWRvd1Jvb3RcIiBpbiBuKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIkVsZW1lbnRcIiwgbiwgXCJzaGFkb3dSb290XCIpO1xufVxuZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihuLCBzZWxlY3RvcnMpIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiRWxlbWVudFwiLCBuLCBcInF1ZXJ5U2VsZWN0b3JcIikoc2VsZWN0b3JzKTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3JBbGwobiwgc2VsZWN0b3JzKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIkVsZW1lbnRcIiwgbiwgXCJxdWVyeVNlbGVjdG9yQWxsXCIpKHNlbGVjdG9ycyk7XG59XG5mdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyQ3RvcigpIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZFByb3RvdHlwZShcIk11dGF0aW9uT2JzZXJ2ZXJcIikuY29uc3RydWN0b3I7XG59XG5jb25zdCBpbmRleCA9IHtcbiAgY2hpbGROb2RlcyxcbiAgcGFyZW50Tm9kZSxcbiAgcGFyZW50RWxlbWVudCxcbiAgdGV4dENvbnRlbnQsXG4gIGNvbnRhaW5zLFxuICBnZXRSb290Tm9kZSxcbiAgaG9zdCxcbiAgc3R5bGVTaGVldHMsXG4gIHNoYWRvd1Jvb3QsXG4gIHF1ZXJ5U2VsZWN0b3IsXG4gIHF1ZXJ5U2VsZWN0b3JBbGwsXG4gIG11dGF0aW9uT2JzZXJ2ZXI6IG11dGF0aW9uT2JzZXJ2ZXJDdG9yXG59O1xuZnVuY3Rpb24gaXNFbGVtZW50KG4pIHtcbiAgcmV0dXJuIG4ubm9kZVR5cGUgPT09IG4uRUxFTUVOVF9OT0RFO1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG4pIHtcbiAgY29uc3QgaG9zdEVsID0gKFxuICAgIC8vIGFuY2hvciBhbmQgdGV4dGFyZWEgZWxlbWVudHMgYWxzbyBoYXZlIGEgYGhvc3RgIHByb3BlcnR5XG4gICAgLy8gYnV0IG9ubHkgc2hhZG93IHJvb3RzIGhhdmUgYSBgbW9kZWAgcHJvcGVydHlcbiAgICBuICYmIFwiaG9zdFwiIGluIG4gJiYgXCJtb2RlXCIgaW4gbiAmJiBpbmRleC5ob3N0KG4pIHx8IG51bGxcbiAgKTtcbiAgcmV0dXJuIEJvb2xlYW4oXG4gICAgaG9zdEVsICYmIFwic2hhZG93Um9vdFwiIGluIGhvc3RFbCAmJiBpbmRleC5zaGFkb3dSb290KGhvc3RFbCkgPT09IG5cbiAgKTtcbn1cbmZ1bmN0aW9uIGlzTmF0aXZlU2hhZG93RG9tKHNoYWRvd1Jvb3QyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc2hhZG93Um9vdDIpID09PSBcIltvYmplY3QgU2hhZG93Um9vdF1cIjtcbn1cbmZ1bmN0aW9uIGZpeEJyb3dzZXJDb21wYXRpYmlsaXR5SXNzdWVzSW5DU1MoY3NzVGV4dCkge1xuICBpZiAoY3NzVGV4dC5pbmNsdWRlcyhcIiBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XCIpICYmICFjc3NUZXh0LmluY2x1ZGVzKFwiIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1wiKSkge1xuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoXG4gICAgICAvXFxzYmFja2dyb3VuZC1jbGlwOlxccyp0ZXh0Oy9nLFxuICAgICAgXCIgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7IGJhY2tncm91bmQtY2xpcDogdGV4dDtcIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNzc1RleHQ7XG59XG5mdW5jdGlvbiBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQocnVsZTIpIHtcbiAgY29uc3QgeyBjc3NUZXh0IH0gPSBydWxlMjtcbiAgaWYgKGNzc1RleHQuc3BsaXQoJ1wiJykubGVuZ3RoIDwgMykgcmV0dXJuIGNzc1RleHQ7XG4gIGNvbnN0IHN0YXRlbWVudCA9IFtcIkBpbXBvcnRcIiwgYHVybCgke0pTT04uc3RyaW5naWZ5KHJ1bGUyLmhyZWYpfSlgXTtcbiAgaWYgKHJ1bGUyLmxheWVyTmFtZSA9PT0gXCJcIikge1xuICAgIHN0YXRlbWVudC5wdXNoKGBsYXllcmApO1xuICB9IGVsc2UgaWYgKHJ1bGUyLmxheWVyTmFtZSkge1xuICAgIHN0YXRlbWVudC5wdXNoKGBsYXllcigke3J1bGUyLmxheWVyTmFtZX0pYCk7XG4gIH1cbiAgaWYgKHJ1bGUyLnN1cHBvcnRzVGV4dCkge1xuICAgIHN0YXRlbWVudC5wdXNoKGBzdXBwb3J0cygke3J1bGUyLnN1cHBvcnRzVGV4dH0pYCk7XG4gIH1cbiAgaWYgKHJ1bGUyLm1lZGlhLmxlbmd0aCkge1xuICAgIHN0YXRlbWVudC5wdXNoKHJ1bGUyLm1lZGlhLm1lZGlhVGV4dCk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlbWVudC5qb2luKFwiIFwiKSArIFwiO1wiO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5U3R5bGVzaGVldChzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcnVsZXMgPSBzLnJ1bGVzIHx8IHMuY3NzUnVsZXM7XG4gICAgaWYgKCFydWxlcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBzaGVldEhyZWYgPSBzLmhyZWY7XG4gICAgaWYgKCFzaGVldEhyZWYgJiYgcy5vd25lck5vZGUgJiYgcy5vd25lck5vZGUub3duZXJEb2N1bWVudCkge1xuICAgICAgc2hlZXRIcmVmID0gcy5vd25lck5vZGUub3duZXJEb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdpZmllZFJ1bGVzID0gQXJyYXkuZnJvbShcbiAgICAgIHJ1bGVzLFxuICAgICAgKHJ1bGUyKSA9PiBzdHJpbmdpZnlSdWxlKHJ1bGUyLCBzaGVldEhyZWYpXG4gICAgKS5qb2luKFwiXCIpO1xuICAgIHJldHVybiBmaXhCcm93c2VyQ29tcGF0aWJpbGl0eUlzc3Vlc0luQ1NTKHN0cmluZ2lmaWVkUnVsZXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlSdWxlKHJ1bGUyLCBzaGVldEhyZWYpIHtcbiAgaWYgKGlzQ1NTSW1wb3J0UnVsZShydWxlMikpIHtcbiAgICBsZXQgaW1wb3J0U3RyaW5naWZpZWQ7XG4gICAgdHJ5IHtcbiAgICAgIGltcG9ydFN0cmluZ2lmaWVkID0gLy8gZm9yIHNhbWUtb3JpZ2luIHN0eWxlc2hlZXRzLFxuICAgICAgLy8gd2UgY2FuIGFjY2VzcyB0aGUgaW1wb3J0ZWQgc3R5bGVzaGVldCBydWxlcyBkaXJlY3RseVxuICAgICAgc3RyaW5naWZ5U3R5bGVzaGVldChydWxlMi5zdHlsZVNoZWV0KSB8fCAvLyB3b3JrIGFyb3VuZCBicm93c2VyIGlzc3VlcyB3aXRoIHRoZSByYXcgc3RyaW5nIGBAaW1wb3J0IHVybCguLi4pYCBzdGF0ZW1lbnRcbiAgICAgIGVzY2FwZUltcG9ydFN0YXRlbWVudChydWxlMik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGltcG9ydFN0cmluZ2lmaWVkID0gcnVsZTIuY3NzVGV4dDtcbiAgICB9XG4gICAgaWYgKHJ1bGUyLnN0eWxlU2hlZXQuaHJlZikge1xuICAgICAgcmV0dXJuIGFic29sdXRpZnlVUkxzKGltcG9ydFN0cmluZ2lmaWVkLCBydWxlMi5zdHlsZVNoZWV0LmhyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gaW1wb3J0U3RyaW5naWZpZWQ7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJ1bGVTdHJpbmdpZmllZCA9IHJ1bGUyLmNzc1RleHQ7XG4gICAgaWYgKGlzQ1NTU3R5bGVSdWxlKHJ1bGUyKSAmJiBydWxlMi5zZWxlY3RvclRleHQuaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgICBydWxlU3RyaW5naWZpZWQgPSBmaXhTYWZhcmlDb2xvbnMocnVsZVN0cmluZ2lmaWVkKTtcbiAgICB9XG4gICAgaWYgKHNoZWV0SHJlZikge1xuICAgICAgcmV0dXJuIGFic29sdXRpZnlVUkxzKHJ1bGVTdHJpbmdpZmllZCwgc2hlZXRIcmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVTdHJpbmdpZmllZDtcbiAgfVxufVxuZnVuY3Rpb24gZml4U2FmYXJpQ29sb25zKGNzc1N0cmluZ2lmaWVkKSB7XG4gIGNvbnN0IHJlZ2V4ID0gLyhcXFsoPzpbXFx3LV0rKVteXFxcXF0pKDooPzpbXFx3LV0rKVxcXSkvZ207XG4gIHJldHVybiBjc3NTdHJpbmdpZmllZC5yZXBsYWNlKHJlZ2V4LCBcIiQxXFxcXCQyXCIpO1xufVxuZnVuY3Rpb24gaXNDU1NJbXBvcnRSdWxlKHJ1bGUyKSB7XG4gIHJldHVybiBcInN0eWxlU2hlZXRcIiBpbiBydWxlMjtcbn1cbmZ1bmN0aW9uIGlzQ1NTU3R5bGVSdWxlKHJ1bGUyKSB7XG4gIHJldHVybiBcInNlbGVjdG9yVGV4dFwiIGluIHJ1bGUyO1xufVxuY2xhc3MgTWlycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImlkTm9kZU1hcFwiLCAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibm9kZU1ldGFNYXBcIiwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCkpO1xuICB9XG4gIGdldElkKG4pIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCFuKSByZXR1cm4gLTE7XG4gICAgY29uc3QgaWQgPSAoX2EgPSB0aGlzLmdldE1ldGEobikpID09IG51bGwgPyB2b2lkIDAgOiBfYS5pZDtcbiAgICByZXR1cm4gaWQgIT0gbnVsbCA/IGlkIDogLTE7XG4gIH1cbiAgZ2V0Tm9kZShpZCkge1xuICAgIHJldHVybiB0aGlzLmlkTm9kZU1hcC5nZXQoaWQpIHx8IG51bGw7XG4gIH1cbiAgZ2V0SWRzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuaWROb2RlTWFwLmtleXMoKSk7XG4gIH1cbiAgZ2V0TWV0YShuKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZU1ldGFNYXAuZ2V0KG4pIHx8IG51bGw7XG4gIH1cbiAgLy8gcmVtb3ZlcyB0aGUgbm9kZSBmcm9tIGlkTm9kZU1hcFxuICAvLyBkb2Vzbid0IHJlbW92ZSB0aGUgbm9kZSBmcm9tIG5vZGVNZXRhTWFwXG4gIHJlbW92ZU5vZGVGcm9tTWFwKG4pIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQobik7XG4gICAgdGhpcy5pZE5vZGVNYXAuZGVsZXRlKGlkKTtcbiAgICBpZiAobi5jaGlsZE5vZGVzKSB7XG4gICAgICBuLmNoaWxkTm9kZXMuZm9yRWFjaChcbiAgICAgICAgKGNoaWxkTm9kZSkgPT4gdGhpcy5yZW1vdmVOb2RlRnJvbU1hcChjaGlsZE5vZGUpXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBoYXMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5pZE5vZGVNYXAuaGFzKGlkKTtcbiAgfVxuICBoYXNOb2RlKG5vZGUyKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZU1ldGFNYXAuaGFzKG5vZGUyKTtcbiAgfVxuICBhZGQobiwgbWV0YSkge1xuICAgIGNvbnN0IGlkID0gbWV0YS5pZDtcbiAgICB0aGlzLmlkTm9kZU1hcC5zZXQoaWQsIG4pO1xuICAgIHRoaXMubm9kZU1ldGFNYXAuc2V0KG4sIG1ldGEpO1xuICB9XG4gIHJlcGxhY2UoaWQsIG4pIHtcbiAgICBjb25zdCBvbGROb2RlID0gdGhpcy5nZXROb2RlKGlkKTtcbiAgICBpZiAob2xkTm9kZSkge1xuICAgICAgY29uc3QgbWV0YSA9IHRoaXMubm9kZU1ldGFNYXAuZ2V0KG9sZE5vZGUpO1xuICAgICAgaWYgKG1ldGEpIHRoaXMubm9kZU1ldGFNYXAuc2V0KG4sIG1ldGEpO1xuICAgIH1cbiAgICB0aGlzLmlkTm9kZU1hcC5zZXQoaWQsIG4pO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaWROb2RlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICB0aGlzLm5vZGVNZXRhTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZU1pcnJvcigpIHtcbiAgcmV0dXJuIG5ldyBNaXJyb3IoKTtcbn1cbmZ1bmN0aW9uIG1hc2tJbnB1dFZhbHVlKHtcbiAgZWxlbWVudCxcbiAgbWFza0lucHV0T3B0aW9ucyxcbiAgdGFnTmFtZSxcbiAgdHlwZSxcbiAgdmFsdWUsXG4gIG1hc2tJbnB1dEZuXG59KSB7XG4gIGxldCB0ZXh0ID0gdmFsdWUgfHwgXCJcIjtcbiAgY29uc3QgYWN0dWFsVHlwZSA9IHR5cGUgJiYgdG9Mb3dlckNhc2UodHlwZSk7XG4gIGlmIChtYXNrSW5wdXRPcHRpb25zW3RhZ05hbWUudG9Mb3dlckNhc2UoKV0gfHwgYWN0dWFsVHlwZSAmJiBtYXNrSW5wdXRPcHRpb25zW2FjdHVhbFR5cGVdKSB7XG4gICAgaWYgKG1hc2tJbnB1dEZuKSB7XG4gICAgICB0ZXh0ID0gbWFza0lucHV0Rm4odGV4dCwgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHQgPSBcIipcIi5yZXBlYXQodGV4dC5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGV4dDtcbn1cbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKHN0cikge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG5jb25zdCBPUklHSU5BTF9BVFRSSUJVVEVfTkFNRSA9IFwiX19ycndlYl9vcmlnaW5hbF9fXCI7XG5mdW5jdGlvbiBpczJEQ2FudmFzQmxhbmsoY2FudmFzKSB7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgY2h1bmtTaXplID0gNTA7XG4gIGZvciAobGV0IHgyID0gMDsgeDIgPCBjYW52YXMud2lkdGg7IHgyICs9IGNodW5rU2l6ZSkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2FudmFzLmhlaWdodDsgeSArPSBjaHVua1NpemUpIHtcbiAgICAgIGNvbnN0IGdldEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGE7XG4gICAgICBjb25zdCBvcmlnaW5hbEdldEltYWdlRGF0YSA9IE9SSUdJTkFMX0FUVFJJQlVURV9OQU1FIGluIGdldEltYWdlRGF0YSA/IGdldEltYWdlRGF0YVtPUklHSU5BTF9BVFRSSUJVVEVfTkFNRV0gOiBnZXRJbWFnZURhdGE7XG4gICAgICBjb25zdCBwaXhlbEJ1ZmZlciA9IG5ldyBVaW50MzJBcnJheShcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgICBvcmlnaW5hbEdldEltYWdlRGF0YS5jYWxsKFxuICAgICAgICAgIGN0eCxcbiAgICAgICAgICB4MixcbiAgICAgICAgICB5LFxuICAgICAgICAgIE1hdGgubWluKGNodW5rU2l6ZSwgY2FudmFzLndpZHRoIC0geDIpLFxuICAgICAgICAgIE1hdGgubWluKGNodW5rU2l6ZSwgY2FudmFzLmhlaWdodCAtIHkpXG4gICAgICAgICkuZGF0YS5idWZmZXJcbiAgICAgICk7XG4gICAgICBpZiAocGl4ZWxCdWZmZXIuc29tZSgocGl4ZWwpID0+IHBpeGVsICE9PSAwKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTm9kZU1ldGFFcXVhbChhLCBiKSB7XG4gIGlmICghYSB8fCAhYiB8fCBhLnR5cGUgIT09IGIudHlwZSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudClcbiAgICByZXR1cm4gYS5jb21wYXRNb2RlID09PSBiLmNvbXBhdE1vZGU7XG4gIGVsc2UgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnRUeXBlKVxuICAgIHJldHVybiBhLm5hbWUgPT09IGIubmFtZSAmJiBhLnB1YmxpY0lkID09PSBiLnB1YmxpY0lkICYmIGEuc3lzdGVtSWQgPT09IGIuc3lzdGVtSWQ7XG4gIGVsc2UgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuQ29tbWVudCB8fCBhLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgfHwgYS50eXBlID09PSBOb2RlVHlwZS5DREFUQSlcbiAgICByZXR1cm4gYS50ZXh0Q29udGVudCA9PT0gYi50ZXh0Q29udGVudDtcbiAgZWxzZSBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KVxuICAgIHJldHVybiBhLnRhZ05hbWUgPT09IGIudGFnTmFtZSAmJiBKU09OLnN0cmluZ2lmeShhLmF0dHJpYnV0ZXMpID09PSBKU09OLnN0cmluZ2lmeShiLmF0dHJpYnV0ZXMpICYmIGEuaXNTVkcgPT09IGIuaXNTVkcgJiYgYS5uZWVkQmxvY2sgPT09IGIubmVlZEJsb2NrO1xuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRJbnB1dFR5cGUoZWxlbWVudCkge1xuICBjb25zdCB0eXBlID0gZWxlbWVudC50eXBlO1xuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXJyLWlzLXBhc3N3b3JkXCIpID8gXCJwYXNzd29yZFwiIDogdHlwZSA/IChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uXG4gICAgdG9Mb3dlckNhc2UodHlwZSlcbiAgKSA6IG51bGw7XG59XG5mdW5jdGlvbiBleHRyYWN0RmlsZUV4dGVuc2lvbihwYXRoLCBiYXNlVVJMKSB7XG4gIHZhciBfYTtcbiAgbGV0IHVybDtcbiAgdHJ5IHtcbiAgICB1cmwgPSBuZXcgVVJMKHBhdGgsIGJhc2VVUkwgIT0gbnVsbCA/IGJhc2VVUkwgOiB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlZ2V4ID0gL1xcLihbMC05YS16XSspKD86JCkvaTtcbiAgY29uc3QgbWF0Y2ggPSB1cmwucGF0aG5hbWUubWF0Y2gocmVnZXgpO1xuICByZXR1cm4gKF9hID0gbWF0Y2ggPT0gbnVsbCA/IHZvaWQgMCA6IG1hdGNoWzFdKSAhPSBudWxsID8gX2EgOiBudWxsO1xufVxuZnVuY3Rpb24gZXh0cmFjdE9yaWdpbih1cmwpIHtcbiAgbGV0IG9yaWdpbiA9IFwiXCI7XG4gIGlmICh1cmwuaW5kZXhPZihcIi8vXCIpID4gLTEpIHtcbiAgICBvcmlnaW4gPSB1cmwuc3BsaXQoXCIvXCIpLnNsaWNlKDAsIDMpLmpvaW4oXCIvXCIpO1xuICB9IGVsc2Uge1xuICAgIG9yaWdpbiA9IHVybC5zcGxpdChcIi9cIilbMF07XG4gIH1cbiAgb3JpZ2luID0gb3JpZ2luLnNwbGl0KFwiP1wiKVswXTtcbiAgcmV0dXJuIG9yaWdpbjtcbn1cbmNvbnN0IFVSTF9JTl9DU1NfUkVGID0gL3VybFxcKCg/OignKShbXiddKiknfChcIikoLio/KVwifChbXildKikpXFwpL2dtO1xuY29uc3QgVVJMX1BST1RPQ09MX01BVENIID0gL14oPzpbYS16K10rOik/XFwvXFwvL2k7XG5jb25zdCBVUkxfV1dXX01BVENIID0gL153d3dcXC4uKi9pO1xuY29uc3QgREFUQV9VUkkgPSAvXihkYXRhOikoW14sXSopLCguKikvaTtcbmZ1bmN0aW9uIGFic29sdXRpZnlVUkxzKGNzc1RleHQsIGhyZWYpIHtcbiAgcmV0dXJuIChjc3NUZXh0IHx8IFwiXCIpLnJlcGxhY2UoXG4gICAgVVJMX0lOX0NTU19SRUYsXG4gICAgKG9yaWdpbiwgcXVvdGUxLCBwYXRoMSwgcXVvdGUyLCBwYXRoMiwgcGF0aDMpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aDEgfHwgcGF0aDIgfHwgcGF0aDM7XG4gICAgICBjb25zdCBtYXliZVF1b3RlID0gcXVvdGUxIHx8IHF1b3RlMiB8fCBcIlwiO1xuICAgICAgaWYgKCFmaWxlUGF0aCkge1xuICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgfVxuICAgICAgaWYgKFVSTF9QUk9UT0NPTF9NQVRDSC50ZXN0KGZpbGVQYXRoKSB8fCBVUkxfV1dXX01BVENILnRlc3QoZmlsZVBhdGgpKSB7XG4gICAgICAgIHJldHVybiBgdXJsKCR7bWF5YmVRdW90ZX0ke2ZpbGVQYXRofSR7bWF5YmVRdW90ZX0pYDtcbiAgICAgIH1cbiAgICAgIGlmIChEQVRBX1VSSS50ZXN0KGZpbGVQYXRoKSkge1xuICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtmaWxlUGF0aH0ke21heWJlUXVvdGV9KWA7XG4gICAgICB9XG4gICAgICBpZiAoZmlsZVBhdGhbMF0gPT09IFwiL1wiKSB7XG4gICAgICAgIHJldHVybiBgdXJsKCR7bWF5YmVRdW90ZX0ke2V4dHJhY3RPcmlnaW4oaHJlZikgKyBmaWxlUGF0aH0ke21heWJlUXVvdGV9KWA7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFjayA9IGhyZWYuc3BsaXQoXCIvXCIpO1xuICAgICAgY29uc3QgcGFydHMgPSBmaWxlUGF0aC5zcGxpdChcIi9cIik7XG4gICAgICBzdGFjay5wb3AoKTtcbiAgICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuICAgICAgICBpZiAocGFydCA9PT0gXCIuXCIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSBcIi4uXCIpIHtcbiAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFjay5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtzdGFjay5qb2luKFwiL1wiKX0ke21heWJlUXVvdGV9KWA7XG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplQ3NzU3RyaW5nKGNzc1RleHQpIHtcbiAgcmV0dXJuIGNzc1RleHQucmVwbGFjZSgvKFxcL1xcKlteKl0qXFwqXFwvKXxbXFxzO10vZywgXCJcIik7XG59XG5mdW5jdGlvbiBzcGxpdENzc1RleHQoY3NzVGV4dCwgc3R5bGUpIHtcbiAgY29uc3QgY2hpbGROb2RlczIgPSBBcnJheS5mcm9tKHN0eWxlLmNoaWxkTm9kZXMpO1xuICBjb25zdCBzcGxpdHMgPSBbXTtcbiAgaWYgKGNoaWxkTm9kZXMyLmxlbmd0aCA+IDEgJiYgY3NzVGV4dCAmJiB0eXBlb2YgY3NzVGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IGNzc1RleHROb3JtID0gbm9ybWFsaXplQ3NzU3RyaW5nKGNzc1RleHQpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY2hpbGROb2RlczIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGlsZE5vZGVzMltpXS50ZXh0Q29udGVudCAmJiB0eXBlb2YgY2hpbGROb2RlczJbaV0udGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnROb3JtID0gbm9ybWFsaXplQ3NzU3RyaW5nKGNoaWxkTm9kZXMyW2ldLnRleHRDb250ZW50KTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDM7IGogPCB0ZXh0Q29udGVudE5vcm0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBiaXQgPSB0ZXh0Q29udGVudE5vcm0uc3Vic3RyaW5nKDAsIGopO1xuICAgICAgICAgIGlmIChjc3NUZXh0Tm9ybS5zcGxpdChiaXQpLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXROb3JtID0gY3NzVGV4dE5vcm0uaW5kZXhPZihiaXQpO1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IHNwbGl0Tm9ybTsgayA8IGNzc1RleHQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZUNzc1N0cmluZyhjc3NUZXh0LnN1YnN0cmluZygwLCBrKSkubGVuZ3RoID09PSBzcGxpdE5vcm0pIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMucHVzaChjc3NUZXh0LnN1YnN0cmluZygwLCBrKSk7XG4gICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQuc3Vic3RyaW5nKGspO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3BsaXRzLnB1c2goY3NzVGV4dCk7XG4gIHJldHVybiBzcGxpdHM7XG59XG5mdW5jdGlvbiBtYXJrQ3NzU3BsaXRzKGNzc1RleHQsIHN0eWxlKSB7XG4gIHJldHVybiBzcGxpdENzc1RleHQoY3NzVGV4dCwgc3R5bGUpLmpvaW4oXCIvKiBycl9zcGxpdCAqL1wiKTtcbn1cbmxldCBfaWQgPSAxO1xuY29uc3QgdGFnTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIlteYS16MC05LV86XVwiKTtcbmNvbnN0IElHTk9SRURfTk9ERSA9IC0yO1xuZnVuY3Rpb24gZ2VuSWQoKSB7XG4gIHJldHVybiBfaWQrKztcbn1cbmZ1bmN0aW9uIGdldFZhbGlkVGFnTmFtZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgcmV0dXJuIFwiZm9ybVwiO1xuICB9XG4gIGNvbnN0IHByb2Nlc3NlZFRhZ05hbWUgPSB0b0xvd2VyQ2FzZShlbGVtZW50LnRhZ05hbWUpO1xuICBpZiAodGFnTmFtZVJlZ2V4LnRlc3QocHJvY2Vzc2VkVGFnTmFtZSkpIHtcbiAgICByZXR1cm4gXCJkaXZcIjtcbiAgfVxuICByZXR1cm4gcHJvY2Vzc2VkVGFnTmFtZTtcbn1cbmxldCBjYW52YXNTZXJ2aWNlO1xubGV0IGNhbnZhc0N0eDtcbmNvbnN0IFNSQ1NFVF9OT1RfU1BBQ0VTID0gL15bXiBcXHRcXG5cXHJcXHUwMDBjXSsvO1xuY29uc3QgU1JDU0VUX0NPTU1BU19PUl9TUEFDRVMgPSAvXlssIFxcdFxcblxcclxcdTAwMGNdKy87XG5mdW5jdGlvbiBnZXRBYnNvbHV0ZVNyY3NldFN0cmluZyhkb2MsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gIGlmIChhdHRyaWJ1dGVWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cbiAgbGV0IHBvcyA9IDA7XG4gIGZ1bmN0aW9uIGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ0V4KSB7XG4gICAgbGV0IGNoYXJzO1xuICAgIGNvbnN0IG1hdGNoID0gcmVnRXguZXhlYyhhdHRyaWJ1dGVWYWx1ZS5zdWJzdHJpbmcocG9zKSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjaGFycyA9IG1hdGNoWzBdO1xuICAgICAgcG9zICs9IGNoYXJzLmxlbmd0aDtcbiAgICAgIHJldHVybiBjaGFycztcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29sbGVjdENoYXJhY3RlcnMoU1JDU0VUX0NPTU1BU19PUl9TUEFDRVMpO1xuICAgIGlmIChwb3MgPj0gYXR0cmlidXRlVmFsdWUubGVuZ3RoKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IHVybCA9IGNvbGxlY3RDaGFyYWN0ZXJzKFNSQ1NFVF9OT1RfU1BBQ0VTKTtcbiAgICBpZiAodXJsLnNsaWNlKC0xKSA9PT0gXCIsXCIpIHtcbiAgICAgIHVybCA9IGFic29sdXRlVG9Eb2MoZG9jLCB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKSk7XG4gICAgICBvdXRwdXQucHVzaCh1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGVzY3JpcHRvcnNTdHIgPSBcIlwiO1xuICAgICAgdXJsID0gYWJzb2x1dGVUb0RvYyhkb2MsIHVybCk7XG4gICAgICBsZXQgaW5QYXJlbnMgPSBmYWxzZTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IGMgPSBhdHRyaWJ1dGVWYWx1ZS5jaGFyQXQocG9zKTtcbiAgICAgICAgaWYgKGMgPT09IFwiXCIpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaCgodXJsICsgZGVzY3JpcHRvcnNTdHIpLnRyaW0oKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoIWluUGFyZW5zKSB7XG4gICAgICAgICAgaWYgKGMgPT09IFwiLFwiKSB7XG4gICAgICAgICAgICBwb3MgKz0gMTtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKCh1cmwgKyBkZXNjcmlwdG9yc1N0cikudHJpbSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIGluUGFyZW5zID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGMgPT09IFwiKVwiKSB7XG4gICAgICAgICAgICBpblBhcmVucyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZXNjcmlwdG9yc1N0ciArPSBjO1xuICAgICAgICBwb3MgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKFwiLCBcIik7XG59XG5jb25zdCBjYWNoZWREb2N1bWVudCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gYWJzb2x1dGVUb0RvYyhkb2MsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gIGlmICghYXR0cmlidXRlVmFsdWUgfHwgYXR0cmlidXRlVmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG4gIHJldHVybiBnZXRIcmVmKGRvYywgYXR0cmlidXRlVmFsdWUpO1xufVxuZnVuY3Rpb24gaXNTVkdFbGVtZW50KGVsKSB7XG4gIHJldHVybiBCb29sZWFuKGVsLnRhZ05hbWUgPT09IFwic3ZnXCIgfHwgZWwub3duZXJTVkdFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGdldEhyZWYoZG9jLCBjdXN0b21IcmVmKSB7XG4gIGxldCBhID0gY2FjaGVkRG9jdW1lbnQuZ2V0KGRvYyk7XG4gIGlmICghYSkge1xuICAgIGEgPSBkb2MuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY2FjaGVkRG9jdW1lbnQuc2V0KGRvYywgYSk7XG4gIH1cbiAgaWYgKCFjdXN0b21IcmVmKSB7XG4gICAgY3VzdG9tSHJlZiA9IFwiXCI7XG4gIH0gZWxzZSBpZiAoY3VzdG9tSHJlZi5zdGFydHNXaXRoKFwiYmxvYjpcIikgfHwgY3VzdG9tSHJlZi5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcbiAgICByZXR1cm4gY3VzdG9tSHJlZjtcbiAgfVxuICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgY3VzdG9tSHJlZik7XG4gIHJldHVybiBhLmhyZWY7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1BdHRyaWJ1dGUoZG9jLCB0YWdOYW1lLCBuYW1lLCB2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChuYW1lID09PSBcInNyY1wiIHx8IG5hbWUgPT09IFwiaHJlZlwiICYmICEodGFnTmFtZSA9PT0gXCJ1c2VcIiAmJiB2YWx1ZVswXSA9PT0gXCIjXCIpKSB7XG4gICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJ4bGluazpocmVmXCIgJiYgdmFsdWVbMF0gIT09IFwiI1wiKSB7XG4gICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJiYWNrZ3JvdW5kXCIgJiYgKHRhZ05hbWUgPT09IFwidGFibGVcIiB8fCB0YWdOYW1lID09PSBcInRkXCIgfHwgdGFnTmFtZSA9PT0gXCJ0aFwiKSkge1xuICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3Jjc2V0XCIpIHtcbiAgICByZXR1cm4gZ2V0QWJzb2x1dGVTcmNzZXRTdHJpbmcoZG9jLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgcmV0dXJuIGFic29sdXRpZnlVUkxzKHZhbHVlLCBnZXRIcmVmKGRvYykpO1xuICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwib2JqZWN0XCIgJiYgbmFtZSA9PT0gXCJkYXRhXCIpIHtcbiAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBpZ25vcmVBdHRyaWJ1dGUodGFnTmFtZSwgbmFtZSwgX3ZhbHVlKSB7XG4gIHJldHVybiAodGFnTmFtZSA9PT0gXCJ2aWRlb1wiIHx8IHRhZ05hbWUgPT09IFwiYXVkaW9cIikgJiYgbmFtZSA9PT0gXCJhdXRvcGxheVwiO1xufVxuZnVuY3Rpb24gX2lzQmxvY2tlZEVsZW1lbnQoZWxlbWVudCwgYmxvY2tDbGFzcywgYmxvY2tTZWxlY3Rvcikge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgYmxvY2tDbGFzcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGJsb2NrQ2xhc3MpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBlSW5kZXggPSBlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGVJbmRleC0tOyApIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbZUluZGV4XTtcbiAgICAgICAgaWYgKGJsb2NrQ2xhc3MudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJsb2NrU2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoYmxvY2tTZWxlY3Rvcik7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gY2xhc3NNYXRjaGVzUmVnZXgobm9kZTIsIHJlZ2V4LCBjaGVja0FuY2VzdG9ycykge1xuICBpZiAoIW5vZGUyKSByZXR1cm4gZmFsc2U7XG4gIGlmIChub2RlMi5ub2RlVHlwZSAhPT0gbm9kZTIuRUxFTUVOVF9OT0RFKSB7XG4gICAgaWYgKCFjaGVja0FuY2VzdG9ycykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBjbGFzc01hdGNoZXNSZWdleChpbmRleC5wYXJlbnROb2RlKG5vZGUyKSwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKTtcbiAgfVxuICBmb3IgKGxldCBlSW5kZXggPSBub2RlMi5jbGFzc0xpc3QubGVuZ3RoOyBlSW5kZXgtLTsgKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gbm9kZTIuY2xhc3NMaXN0W2VJbmRleF07XG4gICAgaWYgKHJlZ2V4LnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIGlmICghY2hlY2tBbmNlc3RvcnMpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGNsYXNzTWF0Y2hlc1JlZ2V4KGluZGV4LnBhcmVudE5vZGUobm9kZTIpLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpO1xufVxuZnVuY3Rpb24gbmVlZE1hc2tpbmdUZXh0KG5vZGUyLCBtYXNrVGV4dENsYXNzLCBtYXNrVGV4dFNlbGVjdG9yLCBjaGVja0FuY2VzdG9ycykge1xuICBsZXQgZWw7XG4gIGlmIChpc0VsZW1lbnQobm9kZTIpKSB7XG4gICAgZWwgPSBub2RlMjtcbiAgICBpZiAoIWluZGV4LmNoaWxkTm9kZXMoZWwpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbmRleC5wYXJlbnRFbGVtZW50KG5vZGUyKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBlbCA9IGluZGV4LnBhcmVudEVsZW1lbnQobm9kZTIpO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBtYXNrVGV4dENsYXNzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAoY2hlY2tBbmNlc3RvcnMpIHtcbiAgICAgICAgaWYgKGVsLmNsb3Nlc3QoYC4ke21hc2tUZXh0Q2xhc3N9YCkpIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhtYXNrVGV4dENsYXNzKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjbGFzc01hdGNoZXNSZWdleChlbCwgbWFza1RleHRDbGFzcywgY2hlY2tBbmNlc3RvcnMpKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG1hc2tUZXh0U2VsZWN0b3IpIHtcbiAgICAgIGlmIChjaGVja0FuY2VzdG9ycykge1xuICAgICAgICBpZiAoZWwuY2xvc2VzdChtYXNrVGV4dFNlbGVjdG9yKSkgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWwubWF0Y2hlcyhtYXNrVGV4dFNlbGVjdG9yKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gb25jZUlmcmFtZUxvYWRlZChpZnJhbWVFbCwgbGlzdGVuZXIsIGlmcmFtZUxvYWRUaW1lb3V0KSB7XG4gIGNvbnN0IHdpbiA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3c7XG4gIGlmICghd2luKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBmaXJlZCA9IGZhbHNlO1xuICBsZXQgcmVhZHlTdGF0ZTtcbiAgdHJ5IHtcbiAgICByZWFkeVN0YXRlID0gd2luLmRvY3VtZW50LnJlYWR5U3RhdGU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChyZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIpIHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFmaXJlZCkge1xuICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICBmaXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgaWZyYW1lTG9hZFRpbWVvdXQpO1xuICAgIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBibGFua1VybCA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgaWYgKHdpbi5sb2NhdGlvbi5ocmVmICE9PSBibGFua1VybCB8fCBpZnJhbWVFbC5zcmMgPT09IGJsYW5rVXJsIHx8IGlmcmFtZUVsLnNyYyA9PT0gXCJcIikge1xuICAgIHNldFRpbWVvdXQobGlzdGVuZXIsIDApO1xuICAgIHJldHVybiBpZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsaXN0ZW5lcik7XG4gIH1cbiAgaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbGlzdGVuZXIpO1xufVxuZnVuY3Rpb24gb25jZVN0eWxlc2hlZXRMb2FkZWQobGluaywgbGlzdGVuZXIsIHN0eWxlU2hlZXRMb2FkVGltZW91dCkge1xuICBsZXQgZmlyZWQgPSBmYWxzZTtcbiAgbGV0IHN0eWxlU2hlZXRMb2FkZWQ7XG4gIHRyeSB7XG4gICAgc3R5bGVTaGVldExvYWRlZCA9IGxpbmsuc2hlZXQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzdHlsZVNoZWV0TG9hZGVkKSByZXR1cm47XG4gIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHN0eWxlU2hlZXRMb2FkVGltZW91dCk7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgZmlyZWQgPSB0cnVlO1xuICAgIGxpc3RlbmVyKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZShuLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgbWlycm9yLFxuICAgIGJsb2NrQ2xhc3MsXG4gICAgYmxvY2tTZWxlY3RvcixcbiAgICBuZWVkc01hc2ssXG4gICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICBtYXNrSW5wdXRPcHRpb25zID0ge30sXG4gICAgbWFza1RleHRGbixcbiAgICBtYXNrSW5wdXRGbixcbiAgICBkYXRhVVJMT3B0aW9ucyA9IHt9LFxuICAgIGlubGluZUltYWdlcyxcbiAgICByZWNvcmRDYW52YXMsXG4gICAga2VlcElmcmFtZVNyY0ZuLFxuICAgIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsXG4gICAgY3NzQ2FwdHVyZWQgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgcm9vdElkID0gZ2V0Um9vdElkKGRvYywgbWlycm9yKTtcbiAgc3dpdGNoIChuLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBuLkRPQ1VNRU5UX05PREU6XG4gICAgICBpZiAobi5jb21wYXRNb2RlICE9PSBcIkNTUzFDb21wYXRcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50LFxuICAgICAgICAgIGNoaWxkTm9kZXM6IFtdLFxuICAgICAgICAgIGNvbXBhdE1vZGU6IG4uY29tcGF0TW9kZVxuICAgICAgICAgIC8vIHByb2JhYmx5IFwiQmFja0NvbXBhdFwiXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50LFxuICAgICAgICAgIGNoaWxkTm9kZXM6IFtdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgY2FzZSBuLkRPQ1VNRU5UX1RZUEVfTk9ERTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50VHlwZSxcbiAgICAgICAgbmFtZTogbi5uYW1lLFxuICAgICAgICBwdWJsaWNJZDogbi5wdWJsaWNJZCxcbiAgICAgICAgc3lzdGVtSWQ6IG4uc3lzdGVtSWQsXG4gICAgICAgIHJvb3RJZFxuICAgICAgfTtcbiAgICBjYXNlIG4uRUxFTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnROb2RlKG4sIHtcbiAgICAgICAgZG9jLFxuICAgICAgICBibG9ja0NsYXNzLFxuICAgICAgICBibG9ja1NlbGVjdG9yLFxuICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgICAgICBtYXNrSW5wdXRPcHRpb25zLFxuICAgICAgICBtYXNrSW5wdXRGbixcbiAgICAgICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgICAgIGlubGluZUltYWdlcyxcbiAgICAgICAgcmVjb3JkQ2FudmFzLFxuICAgICAgICBrZWVwSWZyYW1lU3JjRm4sXG4gICAgICAgIG5ld2x5QWRkZWRFbGVtZW50LFxuICAgICAgICByb290SWRcbiAgICAgIH0pO1xuICAgIGNhc2Ugbi5URVhUX05PREU6XG4gICAgICByZXR1cm4gc2VyaWFsaXplVGV4dE5vZGUobiwge1xuICAgICAgICBkb2MsXG4gICAgICAgIG5lZWRzTWFzayxcbiAgICAgICAgbWFza1RleHRGbixcbiAgICAgICAgcm9vdElkLFxuICAgICAgICBjc3NDYXB0dXJlZFxuICAgICAgfSk7XG4gICAgY2FzZSBuLkNEQVRBX1NFQ1RJT05fTk9ERTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IE5vZGVUeXBlLkNEQVRBLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJcIixcbiAgICAgICAgcm9vdElkXG4gICAgICB9O1xuICAgIGNhc2Ugbi5DT01NRU5UX05PREU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBOb2RlVHlwZS5Db21tZW50LFxuICAgICAgICB0ZXh0Q29udGVudDogaW5kZXgudGV4dENvbnRlbnQobikgfHwgXCJcIixcbiAgICAgICAgcm9vdElkXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFJvb3RJZChkb2MsIG1pcnJvcikge1xuICBpZiAoIW1pcnJvci5oYXNOb2RlKGRvYykpIHJldHVybiB2b2lkIDA7XG4gIGNvbnN0IGRvY0lkID0gbWlycm9yLmdldElkKGRvYyk7XG4gIHJldHVybiBkb2NJZCA9PT0gMSA/IHZvaWQgMCA6IGRvY0lkO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplVGV4dE5vZGUobiwgb3B0aW9ucykge1xuICBjb25zdCB7IG5lZWRzTWFzaywgbWFza1RleHRGbiwgcm9vdElkLCBjc3NDYXB0dXJlZCB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGFyZW50ID0gaW5kZXgucGFyZW50Tm9kZShuKTtcbiAgY29uc3QgcGFyZW50VGFnTmFtZSA9IHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZTtcbiAgbGV0IHRleHRDb250ZW50MiA9IFwiXCI7XG4gIGNvbnN0IGlzU3R5bGUgPSBwYXJlbnRUYWdOYW1lID09PSBcIlNUWUxFXCIgPyB0cnVlIDogdm9pZCAwO1xuICBjb25zdCBpc1NjcmlwdCA9IHBhcmVudFRhZ05hbWUgPT09IFwiU0NSSVBUXCIgPyB0cnVlIDogdm9pZCAwO1xuICBpZiAoaXNTY3JpcHQpIHtcbiAgICB0ZXh0Q29udGVudDIgPSBcIlNDUklQVF9QTEFDRUhPTERFUlwiO1xuICB9IGVsc2UgaWYgKCFjc3NDYXB0dXJlZCkge1xuICAgIHRleHRDb250ZW50MiA9IGluZGV4LnRleHRDb250ZW50KG4pO1xuICAgIGlmIChpc1N0eWxlICYmIHRleHRDb250ZW50Mikge1xuICAgICAgdGV4dENvbnRlbnQyID0gYWJzb2x1dGlmeVVSTHModGV4dENvbnRlbnQyLCBnZXRIcmVmKG9wdGlvbnMuZG9jKSk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTdHlsZSAmJiAhaXNTY3JpcHQgJiYgdGV4dENvbnRlbnQyICYmIG5lZWRzTWFzaykge1xuICAgIHRleHRDb250ZW50MiA9IG1hc2tUZXh0Rm4gPyBtYXNrVGV4dEZuKHRleHRDb250ZW50MiwgaW5kZXgucGFyZW50RWxlbWVudChuKSkgOiB0ZXh0Q29udGVudDIucmVwbGFjZSgvW1xcU10vZywgXCIqXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogTm9kZVR5cGUuVGV4dCxcbiAgICB0ZXh0Q29udGVudDogdGV4dENvbnRlbnQyIHx8IFwiXCIsXG4gICAgcm9vdElkXG4gIH07XG59XG5mdW5jdGlvbiBzZXJpYWxpemVFbGVtZW50Tm9kZShuLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgYmxvY2tDbGFzcyxcbiAgICBibG9ja1NlbGVjdG9yLFxuICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgbWFza0lucHV0T3B0aW9ucyA9IHt9LFxuICAgIG1hc2tJbnB1dEZuLFxuICAgIGRhdGFVUkxPcHRpb25zID0ge30sXG4gICAgaW5saW5lSW1hZ2VzLFxuICAgIHJlY29yZENhbnZhcyxcbiAgICBrZWVwSWZyYW1lU3JjRm4sXG4gICAgbmV3bHlBZGRlZEVsZW1lbnQgPSBmYWxzZSxcbiAgICByb290SWRcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IG5lZWRCbG9jayA9IF9pc0Jsb2NrZWRFbGVtZW50KG4sIGJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IpO1xuICBjb25zdCB0YWdOYW1lID0gZ2V0VmFsaWRUYWdOYW1lKG4pO1xuICBsZXQgYXR0cmlidXRlcyA9IHt9O1xuICBjb25zdCBsZW4gPSBuLmF0dHJpYnV0ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYXR0ciA9IG4uYXR0cmlidXRlc1tpXTtcbiAgICBpZiAoIWlnbm9yZUF0dHJpYnV0ZSh0YWdOYW1lLCBhdHRyLm5hbWUsIGF0dHIudmFsdWUpKSB7XG4gICAgICBhdHRyaWJ1dGVzW2F0dHIubmFtZV0gPSB0cmFuc2Zvcm1BdHRyaWJ1dGUoXG4gICAgICAgIGRvYyxcbiAgICAgICAgdGFnTmFtZSxcbiAgICAgICAgdG9Mb3dlckNhc2UoYXR0ci5uYW1lKSxcbiAgICAgICAgYXR0ci52YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwibGlua1wiICYmIGlubGluZVN0eWxlc2hlZXQpIHtcbiAgICBjb25zdCBzdHlsZXNoZWV0ID0gQXJyYXkuZnJvbShkb2Muc3R5bGVTaGVldHMpLmZpbmQoKHMpID0+IHtcbiAgICAgIHJldHVybiBzLmhyZWYgPT09IG4uaHJlZjtcbiAgICB9KTtcbiAgICBsZXQgY3NzVGV4dCA9IG51bGw7XG4gICAgaWYgKHN0eWxlc2hlZXQpIHtcbiAgICAgIGNzc1RleHQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0KHN0eWxlc2hlZXQpO1xuICAgIH1cbiAgICBpZiAoY3NzVGV4dCkge1xuICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMucmVsO1xuICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuaHJlZjtcbiAgICAgIGF0dHJpYnV0ZXMuX2Nzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJzdHlsZVwiICYmIG4uc2hlZXQpIHtcbiAgICBsZXQgY3NzVGV4dCA9IHN0cmluZ2lmeVN0eWxlc2hlZXQoXG4gICAgICBuLnNoZWV0XG4gICAgKTtcbiAgICBpZiAoY3NzVGV4dCkge1xuICAgICAgaWYgKG4uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNzc1RleHQgPSBtYXJrQ3NzU3BsaXRzKGNzc1RleHQsIG4pO1xuICAgICAgfVxuICAgICAgYXR0cmlidXRlcy5fY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImlucHV0XCIgfHwgdGFnTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiIHx8IHRhZ05hbWUgPT09IFwic2VsZWN0XCIpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG4udmFsdWU7XG4gICAgY29uc3QgY2hlY2tlZCA9IG4uY2hlY2tlZDtcbiAgICBpZiAoYXR0cmlidXRlcy50eXBlICE9PSBcInJhZGlvXCIgJiYgYXR0cmlidXRlcy50eXBlICE9PSBcImNoZWNrYm94XCIgJiYgYXR0cmlidXRlcy50eXBlICE9PSBcInN1Ym1pdFwiICYmIGF0dHJpYnV0ZXMudHlwZSAhPT0gXCJidXR0b25cIiAmJiB2YWx1ZSkge1xuICAgICAgYXR0cmlidXRlcy52YWx1ZSA9IG1hc2tJbnB1dFZhbHVlKHtcbiAgICAgICAgZWxlbWVudDogbixcbiAgICAgICAgdHlwZTogZ2V0SW5wdXRUeXBlKG4pLFxuICAgICAgICB0YWdOYW1lLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICAgICAgbWFza0lucHV0Rm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY2hlY2tlZCkge1xuICAgICAgYXR0cmlidXRlcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB9XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwib3B0aW9uXCIpIHtcbiAgICBpZiAobi5zZWxlY3RlZCAmJiAhbWFza0lucHV0T3B0aW9uc1tcInNlbGVjdFwiXSkge1xuICAgICAgYXR0cmlidXRlcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnNlbGVjdGVkO1xuICAgIH1cbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJkaWFsb2dcIiAmJiBuLm9wZW4pIHtcbiAgICBhdHRyaWJ1dGVzLnJyX29wZW5fbW9kZSA9IG4ubWF0Y2hlcyhcImRpYWxvZzptb2RhbFwiKSA/IFwibW9kYWxcIiA6IFwibm9uLW1vZGFsXCI7XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwiY2FudmFzXCIgJiYgcmVjb3JkQ2FudmFzKSB7XG4gICAgaWYgKG4uX19jb250ZXh0ID09PSBcIjJkXCIpIHtcbiAgICAgIGlmICghaXMyRENhbnZhc0JsYW5rKG4pKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMucnJfZGF0YVVSTCA9IG4udG9EYXRhVVJMKFxuICAgICAgICAgIGRhdGFVUkxPcHRpb25zLnR5cGUsXG4gICAgICAgICAgZGF0YVVSTE9wdGlvbnMucXVhbGl0eVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcIl9fY29udGV4dFwiIGluIG4pKSB7XG4gICAgICBjb25zdCBjYW52YXNEYXRhVVJMID0gbi50b0RhdGFVUkwoXG4gICAgICAgIGRhdGFVUkxPcHRpb25zLnR5cGUsXG4gICAgICAgIGRhdGFVUkxPcHRpb25zLnF1YWxpdHlcbiAgICAgICk7XG4gICAgICBjb25zdCBibGFua0NhbnZhcyA9IGRvYy5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgYmxhbmtDYW52YXMud2lkdGggPSBuLndpZHRoO1xuICAgICAgYmxhbmtDYW52YXMuaGVpZ2h0ID0gbi5oZWlnaHQ7XG4gICAgICBjb25zdCBibGFua0NhbnZhc0RhdGFVUkwgPSBibGFua0NhbnZhcy50b0RhdGFVUkwoXG4gICAgICAgIGRhdGFVUkxPcHRpb25zLnR5cGUsXG4gICAgICAgIGRhdGFVUkxPcHRpb25zLnF1YWxpdHlcbiAgICAgICk7XG4gICAgICBpZiAoY2FudmFzRGF0YVVSTCAhPT0gYmxhbmtDYW52YXNEYXRhVVJMKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMucnJfZGF0YVVSTCA9IGNhbnZhc0RhdGFVUkw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImltZ1wiICYmIGlubGluZUltYWdlcykge1xuICAgIGlmICghY2FudmFzU2VydmljZSkge1xuICAgICAgY2FudmFzU2VydmljZSA9IGRvYy5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgY2FudmFzQ3R4ID0gY2FudmFzU2VydmljZS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuICAgIGNvbnN0IGltYWdlID0gbjtcbiAgICBjb25zdCBpbWFnZVNyYyA9IGltYWdlLmN1cnJlbnRTcmMgfHwgaW1hZ2UuZ2V0QXR0cmlidXRlKFwic3JjXCIpIHx8IFwiPHVua25vd24tc3JjPlwiO1xuICAgIGNvbnN0IHByaW9yQ3Jvc3NPcmlnaW4gPSBpbWFnZS5jcm9zc09yaWdpbjtcbiAgICBjb25zdCByZWNvcmRJbmxpbmVJbWFnZSA9ICgpID0+IHtcbiAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlY29yZElubGluZUltYWdlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNhbnZhc1NlcnZpY2Uud2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XG4gICAgICAgIGNhbnZhc1NlcnZpY2UuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcbiAgICAgICAgY2FudmFzQ3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgIGF0dHJpYnV0ZXMucnJfZGF0YVVSTCA9IGNhbnZhc1NlcnZpY2UudG9EYXRhVVJMKFxuICAgICAgICAgIGRhdGFVUkxPcHRpb25zLnR5cGUsXG4gICAgICAgICAgZGF0YVVSTE9wdGlvbnMucXVhbGl0eVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChpbWFnZS5jcm9zc09yaWdpbiAhPT0gXCJhbm9ueW1vdXNcIikge1xuICAgICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgICBpZiAoaW1hZ2UuY29tcGxldGUgJiYgaW1hZ2UubmF0dXJhbFdpZHRoICE9PSAwKVxuICAgICAgICAgICAgcmVjb3JkSW5saW5lSW1hZ2UoKTtcbiAgICAgICAgICBlbHNlIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlY29yZElubGluZUltYWdlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYENhbm5vdCBpbmxpbmUgaW1nIHNyYz0ke2ltYWdlU3JjfSEgRXJyb3I6ICR7ZXJyfWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW1hZ2UuY3Jvc3NPcmlnaW4gPT09IFwiYW5vbnltb3VzXCIpIHtcbiAgICAgICAgcHJpb3JDcm9zc09yaWdpbiA/IGF0dHJpYnV0ZXMuY3Jvc3NPcmlnaW4gPSBwcmlvckNyb3NzT3JpZ2luIDogaW1hZ2UucmVtb3ZlQXR0cmlidXRlKFwiY3Jvc3NvcmlnaW5cIik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1hZ2UuY29tcGxldGUgJiYgaW1hZ2UubmF0dXJhbFdpZHRoICE9PSAwKSByZWNvcmRJbmxpbmVJbWFnZSgpO1xuICAgIGVsc2UgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVjb3JkSW5saW5lSW1hZ2UpO1xuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImF1ZGlvXCIgfHwgdGFnTmFtZSA9PT0gXCJ2aWRlb1wiKSB7XG4gICAgY29uc3QgbWVkaWFBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFTdGF0ZSA9IG4ucGF1c2VkID8gXCJwYXVzZWRcIiA6IFwicGxheWVkXCI7XG4gICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhQ3VycmVudFRpbWUgPSBuLmN1cnJlbnRUaW1lO1xuICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYVBsYXliYWNrUmF0ZSA9IG4ucGxheWJhY2tSYXRlO1xuICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYU11dGVkID0gbi5tdXRlZDtcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFMb29wID0gbi5sb29wO1xuICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYVZvbHVtZSA9IG4udm9sdW1lO1xuICB9XG4gIGlmICghbmV3bHlBZGRlZEVsZW1lbnQpIHtcbiAgICBpZiAobi5zY3JvbGxMZWZ0KSB7XG4gICAgICBhdHRyaWJ1dGVzLnJyX3Njcm9sbExlZnQgPSBuLnNjcm9sbExlZnQ7XG4gICAgfVxuICAgIGlmIChuLnNjcm9sbFRvcCkge1xuICAgICAgYXR0cmlidXRlcy5ycl9zY3JvbGxUb3AgPSBuLnNjcm9sbFRvcDtcbiAgICB9XG4gIH1cbiAgaWYgKG5lZWRCbG9jaykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBhdHRyaWJ1dGVzID0ge1xuICAgICAgY2xhc3M6IGF0dHJpYnV0ZXMuY2xhc3MsXG4gICAgICBycl93aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgcnJfaGVpZ2h0OiBgJHtoZWlnaHR9cHhgXG4gICAgfTtcbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJpZnJhbWVcIiAmJiAha2VlcElmcmFtZVNyY0ZuKGF0dHJpYnV0ZXMuc3JjKSkge1xuICAgIGlmICghbi5jb250ZW50RG9jdW1lbnQpIHtcbiAgICAgIGF0dHJpYnV0ZXMucnJfc3JjID0gYXR0cmlidXRlcy5zcmM7XG4gICAgfVxuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnNyYztcbiAgfVxuICBsZXQgaXNDdXN0b21FbGVtZW50O1xuICB0cnkge1xuICAgIGlmIChjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIGlzQ3VzdG9tRWxlbWVudCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IE5vZGVUeXBlLkVsZW1lbnQsXG4gICAgdGFnTmFtZSxcbiAgICBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkTm9kZXM6IFtdLFxuICAgIGlzU1ZHOiBpc1NWR0VsZW1lbnQobikgfHwgdm9pZCAwLFxuICAgIG5lZWRCbG9jayxcbiAgICByb290SWQsXG4gICAgaXNDdXN0b206IGlzQ3VzdG9tRWxlbWVudFxuICB9O1xufVxuZnVuY3Rpb24gbG93ZXJJZkV4aXN0cyhtYXliZUF0dHIpIHtcbiAgaWYgKG1heWJlQXR0ciA9PT0gdm9pZCAwIHx8IG1heWJlQXR0ciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBtYXliZUF0dHIudG9Mb3dlckNhc2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gc2xpbURPTUV4Y2x1ZGVkKHNuLCBzbGltRE9NT3B0aW9ucykge1xuICBpZiAoc2xpbURPTU9wdGlvbnMuY29tbWVudCAmJiBzbi50eXBlID09PSBOb2RlVHlwZS5Db21tZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoc24udHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgIGlmIChzbGltRE9NT3B0aW9ucy5zY3JpcHQgJiYgLy8gc2NyaXB0IHRhZ1xuICAgIChzbi50YWdOYW1lID09PSBcInNjcmlwdFwiIHx8IC8vIChtb2R1bGUpcHJlbG9hZCBsaW5rXG4gICAgc24udGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgKHNuLmF0dHJpYnV0ZXMucmVsID09PSBcInByZWxvYWRcIiB8fCBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJtb2R1bGVwcmVsb2FkXCIpICYmIHNuLmF0dHJpYnV0ZXMuYXMgPT09IFwic2NyaXB0XCIgfHwgLy8gcHJlZmV0Y2ggbGlua1xuICAgIHNuLnRhZ05hbWUgPT09IFwibGlua1wiICYmIHNuLmF0dHJpYnV0ZXMucmVsID09PSBcInByZWZldGNoXCIgJiYgdHlwZW9mIHNuLmF0dHJpYnV0ZXMuaHJlZiA9PT0gXCJzdHJpbmdcIiAmJiBleHRyYWN0RmlsZUV4dGVuc2lvbihzbi5hdHRyaWJ1dGVzLmhyZWYpID09PSBcImpzXCIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRGYXZpY29uICYmIChzbi50YWdOYW1lID09PSBcImxpbmtcIiAmJiBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJzaG9ydGN1dCBpY29uXCIgfHwgc24udGFnTmFtZSA9PT0gXCJtZXRhXCIgJiYgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaChcbiAgICAgIC9ebXNhcHBsaWNhdGlvbi10aWxlKGltYWdlfGNvbG9yKSQvXG4gICAgKSB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiYXBwbGljYXRpb24tbmFtZVwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSBcImljb25cIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gXCJhcHBsZS10b3VjaC1pY29uXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09IFwic2hvcnRjdXQgaWNvblwiKSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc24udGFnTmFtZSA9PT0gXCJtZXRhXCIpIHtcbiAgICAgIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YURlc2NLZXl3b3JkcyAmJiBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goL15kZXNjcmlwdGlvbnxrZXl3b3JkcyQvKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFTb2NpYWwgJiYgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL14ob2d8dHdpdHRlcnxmYik6LykgfHwgLy8gb2cgPSBvcGVuZ3JhcGggKGZhY2Vib29rKVxuICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpLm1hdGNoKC9eKG9nfHR3aXR0ZXIpOi8pIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJwaW50ZXJlc3RcIikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhUm9ib3RzICYmIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwicm9ib3RzXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImdvb2dsZWJvdFwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJiaW5nYm90XCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YUh0dHBFcXVpdiAmJiBzbi5hdHRyaWJ1dGVzW1wiaHR0cC1lcXVpdlwiXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YUF1dGhvcnNoaXAgJiYgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJhdXRob3JcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiZ2VuZXJhdG9yXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImZyYW1ld29ya1wiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJwdWJsaXNoZXJcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwicHJvZ2lkXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnByb3BlcnR5KS5tYXRjaCgvXmFydGljbGU6LykgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnByb3BlcnR5KS5tYXRjaCgvXnByb2R1Y3Q6LykpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVZlcmlmaWNhdGlvbiAmJiAobG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJ5YW5kZXgtdmVyaWZpY2F0aW9uXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImNzcmYtdG9rZW5cIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwicDpkb21haW5fdmVyaWZ5XCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInZlcmlmeS12MVwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJ2ZXJpZmljYXRpb25cIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwic2hvcGlmeS1jaGVja291dC1hcGktdG9rZW5cIikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGVXaXRoSWQobiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZG9jLFxuICAgIG1pcnJvcixcbiAgICBibG9ja0NsYXNzLFxuICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgbWFza1RleHRDbGFzcyxcbiAgICBtYXNrVGV4dFNlbGVjdG9yLFxuICAgIHNraXBDaGlsZCA9IGZhbHNlLFxuICAgIGlubGluZVN0eWxlc2hlZXQgPSB0cnVlLFxuICAgIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSxcbiAgICBtYXNrVGV4dEZuLFxuICAgIG1hc2tJbnB1dEZuLFxuICAgIHNsaW1ET01PcHRpb25zLFxuICAgIGRhdGFVUkxPcHRpb25zID0ge30sXG4gICAgaW5saW5lSW1hZ2VzID0gZmFsc2UsXG4gICAgcmVjb3JkQ2FudmFzID0gZmFsc2UsXG4gICAgb25TZXJpYWxpemUsXG4gICAgb25JZnJhbWVMb2FkLFxuICAgIGlmcmFtZUxvYWRUaW1lb3V0ID0gNWUzLFxuICAgIG9uU3R5bGVzaGVldExvYWQsXG4gICAgc3R5bGVzaGVldExvYWRUaW1lb3V0ID0gNWUzLFxuICAgIGtlZXBJZnJhbWVTcmNGbiA9ICgpID0+IGZhbHNlLFxuICAgIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsXG4gICAgY3NzQ2FwdHVyZWQgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgbGV0IHsgbmVlZHNNYXNrIH0gPSBvcHRpb25zO1xuICBsZXQgeyBwcmVzZXJ2ZVdoaXRlU3BhY2UgPSB0cnVlIH0gPSBvcHRpb25zO1xuICBpZiAoIW5lZWRzTWFzaykge1xuICAgIGNvbnN0IGNoZWNrQW5jZXN0b3JzID0gbmVlZHNNYXNrID09PSB2b2lkIDA7XG4gICAgbmVlZHNNYXNrID0gbmVlZE1hc2tpbmdUZXh0KFxuICAgICAgbixcbiAgICAgIG1hc2tUZXh0Q2xhc3MsXG4gICAgICBtYXNrVGV4dFNlbGVjdG9yLFxuICAgICAgY2hlY2tBbmNlc3RvcnNcbiAgICApO1xuICB9XG4gIGNvbnN0IF9zZXJpYWxpemVkTm9kZSA9IHNlcmlhbGl6ZU5vZGUobiwge1xuICAgIGRvYyxcbiAgICBtaXJyb3IsXG4gICAgYmxvY2tDbGFzcyxcbiAgICBibG9ja1NlbGVjdG9yLFxuICAgIG5lZWRzTWFzayxcbiAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgbWFza1RleHRGbixcbiAgICBtYXNrSW5wdXRGbixcbiAgICBkYXRhVVJMT3B0aW9ucyxcbiAgICBpbmxpbmVJbWFnZXMsXG4gICAgcmVjb3JkQ2FudmFzLFxuICAgIGtlZXBJZnJhbWVTcmNGbixcbiAgICBuZXdseUFkZGVkRWxlbWVudCxcbiAgICBjc3NDYXB0dXJlZFxuICB9KTtcbiAgaWYgKCFfc2VyaWFsaXplZE5vZGUpIHtcbiAgICBjb25zb2xlLndhcm4obiwgXCJub3Qgc2VyaWFsaXplZFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZXQgaWQ7XG4gIGlmIChtaXJyb3IuaGFzTm9kZShuKSkge1xuICAgIGlkID0gbWlycm9yLmdldElkKG4pO1xuICB9IGVsc2UgaWYgKHNsaW1ET01FeGNsdWRlZChfc2VyaWFsaXplZE5vZGUsIHNsaW1ET01PcHRpb25zKSB8fCAhcHJlc2VydmVXaGl0ZVNwYWNlICYmIF9zZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5UZXh0ICYmICFfc2VyaWFsaXplZE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sIFwiXCIpLmxlbmd0aCkge1xuICAgIGlkID0gSUdOT1JFRF9OT0RFO1xuICB9IGVsc2Uge1xuICAgIGlkID0gZ2VuSWQoKTtcbiAgfVxuICBjb25zdCBzZXJpYWxpemVkTm9kZSA9IE9iamVjdC5hc3NpZ24oX3NlcmlhbGl6ZWROb2RlLCB7IGlkIH0pO1xuICBtaXJyb3IuYWRkKG4sIHNlcmlhbGl6ZWROb2RlKTtcbiAgaWYgKGlkID09PSBJR05PUkVEX05PREUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAob25TZXJpYWxpemUpIHtcbiAgICBvblNlcmlhbGl6ZShuKTtcbiAgfVxuICBsZXQgcmVjb3JkQ2hpbGQgPSAhc2tpcENoaWxkO1xuICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgIHJlY29yZENoaWxkID0gcmVjb3JkQ2hpbGQgJiYgIXNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcbiAgICBkZWxldGUgc2VyaWFsaXplZE5vZGUubmVlZEJsb2NrO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3RFbCA9IGluZGV4LnNoYWRvd1Jvb3Qobik7XG4gICAgaWYgKHNoYWRvd1Jvb3RFbCAmJiBpc05hdGl2ZVNoYWRvd0RvbShzaGFkb3dSb290RWwpKSB7XG4gICAgICBzZXJpYWxpemVkTm9kZS5pc1NoYWRvd0hvc3QgPSB0cnVlO1xuICAgICAgaWYgKHNoYWRvd1Jvb3RFbC5hZG9wdGVkU3R5bGVTaGVldHMubGVuZ3RoID4gMCkge1xuICAgICAgICBzZXJpYWxpemVkTm9kZS5jaHJvbWF0aWNBZG9wdGVkU3R5bGVzaGVldHMgPSBzaGFkb3dSb290RWwuYWRvcHRlZFN0eWxlU2hlZXRzLm1hcChcbiAgICAgICAgICAoc3R5bGVzaGVldCkgPT4gc3RyaW5naWZ5U3R5bGVzaGVldChzdHlsZXNoZWV0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50IHx8IHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmIHJlY29yZENoaWxkKSB7XG4gICAgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRXaGl0ZXNwYWNlICYmIHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gXCJoZWFkXCIpIHtcbiAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBieXBhc3NPcHRpb25zID0ge1xuICAgICAgZG9jLFxuICAgICAgbWlycm9yLFxuICAgICAgYmxvY2tDbGFzcyxcbiAgICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgICBuZWVkc01hc2ssXG4gICAgICBtYXNrVGV4dENsYXNzLFxuICAgICAgbWFza1RleHRTZWxlY3RvcixcbiAgICAgIHNraXBDaGlsZCxcbiAgICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgICBtYXNrSW5wdXRPcHRpb25zLFxuICAgICAgbWFza1RleHRGbixcbiAgICAgIG1hc2tJbnB1dEZuLFxuICAgICAgc2xpbURPTU9wdGlvbnMsXG4gICAgICBkYXRhVVJMT3B0aW9ucyxcbiAgICAgIGlubGluZUltYWdlcyxcbiAgICAgIHJlY29yZENhbnZhcyxcbiAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcbiAgICAgIG9uU2VyaWFsaXplLFxuICAgICAgb25JZnJhbWVMb2FkLFxuICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXG4gICAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgICAgc3R5bGVzaGVldExvYWRUaW1lb3V0LFxuICAgICAga2VlcElmcmFtZVNyY0ZuLFxuICAgICAgY3NzQ2FwdHVyZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJiBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSBcInRleHRhcmVhXCIgJiYgc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy52YWx1ZSAhPT0gdm9pZCAwKSA7XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLl9jc3NUZXh0ICE9PSB2b2lkIDAgJiYgdHlwZW9mIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMuX2Nzc1RleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgYnlwYXNzT3B0aW9ucy5jc3NDYXB0dXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkTiBvZiBBcnJheS5mcm9tKGluZGV4LmNoaWxkTm9kZXMobikpKSB7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRDaGlsZE5vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKGNoaWxkTiwgYnlwYXNzT3B0aW9ucyk7XG4gICAgICAgIGlmIChzZXJpYWxpemVkQ2hpbGROb2RlKSB7XG4gICAgICAgICAgc2VyaWFsaXplZE5vZGUuY2hpbGROb2Rlcy5wdXNoKHNlcmlhbGl6ZWRDaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzaGFkb3dSb290RWwgPSBudWxsO1xuICAgIGlmIChpc0VsZW1lbnQobikgJiYgKHNoYWRvd1Jvb3RFbCA9IGluZGV4LnNoYWRvd1Jvb3QobikpKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkTiBvZiBBcnJheS5mcm9tKGluZGV4LmNoaWxkTm9kZXMoc2hhZG93Um9vdEVsKSkpIHtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZENoaWxkTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQoY2hpbGROLCBieXBhc3NPcHRpb25zKTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUpIHtcbiAgICAgICAgICBpc05hdGl2ZVNoYWRvd0RvbShzaGFkb3dSb290RWwpICYmIChzZXJpYWxpemVkQ2hpbGROb2RlLmlzU2hhZG93ID0gdHJ1ZSk7XG4gICAgICAgICAgc2VyaWFsaXplZE5vZGUuY2hpbGROb2Rlcy5wdXNoKHNlcmlhbGl6ZWRDaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IHBhcmVudCA9IGluZGV4LnBhcmVudE5vZGUobik7XG4gIGlmIChwYXJlbnQgJiYgaXNTaGFkb3dSb290KHBhcmVudCkgJiYgaXNOYXRpdmVTaGFkb3dEb20ocGFyZW50KSkge1xuICAgIHNlcmlhbGl6ZWROb2RlLmlzU2hhZG93ID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJiBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSBcImlmcmFtZVwiKSB7XG4gICAgb25jZUlmcmFtZUxvYWRlZChcbiAgICAgIG4sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlmcmFtZURvYyA9IG4uY29udGVudERvY3VtZW50O1xuICAgICAgICBpZiAoaWZyYW1lRG9jICYmIG9uSWZyYW1lTG9hZCkge1xuICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRJZnJhbWVOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChpZnJhbWVEb2MsIHtcbiAgICAgICAgICAgIGRvYzogaWZyYW1lRG9jLFxuICAgICAgICAgICAgbWlycm9yLFxuICAgICAgICAgICAgYmxvY2tDbGFzcyxcbiAgICAgICAgICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgICAgICAgICBuZWVkc01hc2ssXG4gICAgICAgICAgICBtYXNrVGV4dENsYXNzLFxuICAgICAgICAgICAgbWFza1RleHRTZWxlY3RvcixcbiAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXG4gICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgICAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICAgICAgICAgIG1hc2tUZXh0Rm4sXG4gICAgICAgICAgICBtYXNrSW5wdXRGbixcbiAgICAgICAgICAgIHNsaW1ET01PcHRpb25zLFxuICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgICAgICAgICBpbmxpbmVJbWFnZXMsXG4gICAgICAgICAgICByZWNvcmRDYW52YXMsXG4gICAgICAgICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXG4gICAgICAgICAgICBvblNlcmlhbGl6ZSxcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZCxcbiAgICAgICAgICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxuICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZCxcbiAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChzZXJpYWxpemVkSWZyYW1lTm9kZSkge1xuICAgICAgICAgICAgb25JZnJhbWVMb2FkKFxuICAgICAgICAgICAgICBuLFxuICAgICAgICAgICAgICBzZXJpYWxpemVkSWZyYW1lTm9kZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpZnJhbWVMb2FkVGltZW91dFxuICAgICk7XG4gIH1cbiAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgdHlwZW9mIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSBcInN0cmluZ1wiICYmIChzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgfHwgc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5yZWwgPT09IFwicHJlbG9hZFwiICYmIHR5cGVvZiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLmhyZWYgPT09IFwic3RyaW5nXCIgJiYgZXh0cmFjdEZpbGVFeHRlbnNpb24oc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5ocmVmKSA9PT0gXCJjc3NcIikpIHtcbiAgICBvbmNlU3R5bGVzaGVldExvYWRlZChcbiAgICAgIG4sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmIChvblN0eWxlc2hlZXRMb2FkKSB7XG4gICAgICAgICAgY29uc3Qgc2VyaWFsaXplZExpbmtOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XG4gICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICBtaXJyb3IsXG4gICAgICAgICAgICBibG9ja0NsYXNzLFxuICAgICAgICAgICAgYmxvY2tTZWxlY3RvcixcbiAgICAgICAgICAgIG5lZWRzTWFzayxcbiAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3MsXG4gICAgICAgICAgICBtYXNrVGV4dFNlbGVjdG9yLFxuICAgICAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcbiAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zLFxuICAgICAgICAgICAgbWFza1RleHRGbixcbiAgICAgICAgICAgIG1hc2tJbnB1dEZuLFxuICAgICAgICAgICAgc2xpbURPTU9wdGlvbnMsXG4gICAgICAgICAgICBkYXRhVVJMT3B0aW9ucyxcbiAgICAgICAgICAgIGlubGluZUltYWdlcyxcbiAgICAgICAgICAgIHJlY29yZENhbnZhcyxcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcbiAgICAgICAgICAgIG9uU2VyaWFsaXplLFxuICAgICAgICAgICAgb25JZnJhbWVMb2FkLFxuICAgICAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXG4gICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgICAgICAgICAgc3R5bGVzaGVldExvYWRUaW1lb3V0LFxuICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHNlcmlhbGl6ZWRMaW5rTm9kZSkge1xuICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZChcbiAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgc2VyaWFsaXplZExpbmtOb2RlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHNlcmlhbGl6ZWROb2RlO1xufVxuZnVuY3Rpb24gc25hcHNob3Qobiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgbWlycm9yID0gbmV3IE1pcnJvcigpLFxuICAgIGJsb2NrQ2xhc3MgPSBcInJyLWJsb2NrXCIsXG4gICAgYmxvY2tTZWxlY3RvciA9IG51bGwsXG4gICAgbWFza1RleHRDbGFzcyA9IFwicnItbWFza1wiLFxuICAgIG1hc2tUZXh0U2VsZWN0b3IgPSBudWxsLFxuICAgIGlubGluZVN0eWxlc2hlZXQgPSB0cnVlLFxuICAgIGlubGluZUltYWdlcyA9IGZhbHNlLFxuICAgIHJlY29yZENhbnZhcyA9IGZhbHNlLFxuICAgIG1hc2tBbGxJbnB1dHMgPSBmYWxzZSxcbiAgICBtYXNrVGV4dEZuLFxuICAgIG1hc2tJbnB1dEZuLFxuICAgIHNsaW1ET00gPSBmYWxzZSxcbiAgICBkYXRhVVJMT3B0aW9ucyxcbiAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXG4gICAgb25TZXJpYWxpemUsXG4gICAgb25JZnJhbWVMb2FkLFxuICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxuICAgIG9uU3R5bGVzaGVldExvYWQsXG4gICAgc3R5bGVzaGVldExvYWRUaW1lb3V0LFxuICAgIGtlZXBJZnJhbWVTcmNGbiA9ICgpID0+IGZhbHNlXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBtYXNrSW5wdXRPcHRpb25zID0gbWFza0FsbElucHV0cyA9PT0gdHJ1ZSA/IHtcbiAgICBjb2xvcjogdHJ1ZSxcbiAgICBkYXRlOiB0cnVlLFxuICAgIFwiZGF0ZXRpbWUtbG9jYWxcIjogdHJ1ZSxcbiAgICBlbWFpbDogdHJ1ZSxcbiAgICBtb250aDogdHJ1ZSxcbiAgICBudW1iZXI6IHRydWUsXG4gICAgcmFuZ2U6IHRydWUsXG4gICAgc2VhcmNoOiB0cnVlLFxuICAgIHRlbDogdHJ1ZSxcbiAgICB0ZXh0OiB0cnVlLFxuICAgIHRpbWU6IHRydWUsXG4gICAgdXJsOiB0cnVlLFxuICAgIHdlZWs6IHRydWUsXG4gICAgdGV4dGFyZWE6IHRydWUsXG4gICAgc2VsZWN0OiB0cnVlLFxuICAgIHBhc3N3b3JkOiB0cnVlXG4gIH0gOiBtYXNrQWxsSW5wdXRzID09PSBmYWxzZSA/IHtcbiAgICBwYXNzd29yZDogdHJ1ZVxuICB9IDogbWFza0FsbElucHV0cztcbiAgY29uc3Qgc2xpbURPTU9wdGlvbnMgPSBzbGltRE9NID09PSB0cnVlIHx8IHNsaW1ET00gPT09IFwiYWxsXCIgPyAoXG4gICAgLy8gaWYgdHJ1ZTogc2V0IG9mIHNlbnNpYmxlIG9wdGlvbnMgdGhhdCBzaG91bGQgbm90IHRocm93IGF3YXkgYW55IGluZm9ybWF0aW9uXG4gICAge1xuICAgICAgc2NyaXB0OiB0cnVlLFxuICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgIGhlYWRGYXZpY29uOiB0cnVlLFxuICAgICAgaGVhZFdoaXRlc3BhY2U6IHRydWUsXG4gICAgICBoZWFkTWV0YURlc2NLZXl3b3Jkczogc2xpbURPTSA9PT0gXCJhbGxcIixcbiAgICAgIC8vIGRlc3RydWN0aXZlXG4gICAgICBoZWFkTWV0YVNvY2lhbDogdHJ1ZSxcbiAgICAgIGhlYWRNZXRhUm9ib3RzOiB0cnVlLFxuICAgICAgaGVhZE1ldGFIdHRwRXF1aXY6IHRydWUsXG4gICAgICBoZWFkTWV0YUF1dGhvcnNoaXA6IHRydWUsXG4gICAgICBoZWFkTWV0YVZlcmlmaWNhdGlvbjogdHJ1ZVxuICAgIH1cbiAgKSA6IHNsaW1ET00gPT09IGZhbHNlID8ge30gOiBzbGltRE9NO1xuICByZXR1cm4gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XG4gICAgZG9jOiBuLFxuICAgIG1pcnJvcixcbiAgICBibG9ja0NsYXNzLFxuICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgbWFza1RleHRDbGFzcyxcbiAgICBtYXNrVGV4dFNlbGVjdG9yLFxuICAgIHNraXBDaGlsZDogZmFsc2UsXG4gICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICBtYXNrSW5wdXRPcHRpb25zLFxuICAgIG1hc2tUZXh0Rm4sXG4gICAgbWFza0lucHV0Rm4sXG4gICAgc2xpbURPTU9wdGlvbnMsXG4gICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgaW5saW5lSW1hZ2VzLFxuICAgIHJlY29yZENhbnZhcyxcbiAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXG4gICAgb25TZXJpYWxpemUsXG4gICAgb25JZnJhbWVMb2FkLFxuICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxuICAgIG9uU3R5bGVzaGVldExvYWQsXG4gICAgc3R5bGVzaGVldExvYWRUaW1lb3V0LFxuICAgIGtlZXBJZnJhbWVTcmNGbixcbiAgICBuZXdseUFkZGVkRWxlbWVudDogZmFsc2VcbiAgfSk7XG59XG5mdW5jdGlvbiB2aXNpdFNuYXBzaG90KG5vZGUyLCBvblZpc2l0KSB7XG4gIGZ1bmN0aW9uIHdhbGsoY3VycmVudCkge1xuICAgIG9uVmlzaXQoY3VycmVudCk7XG4gICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHwgY3VycmVudC50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICBjdXJyZW50LmNoaWxkTm9kZXMuZm9yRWFjaCh3YWxrKTtcbiAgICB9XG4gIH1cbiAgd2Fsayhub2RlMik7XG59XG5mdW5jdGlvbiBjbGVhbnVwU25hcHNob3QoKSB7XG4gIF9pZCA9IDE7XG59XG5jb25zdCBNRURJQV9TRUxFQ1RPUiA9IC8obWF4fG1pbiktZGV2aWNlLSh3aWR0aHxoZWlnaHQpLztcbmNvbnN0IE1FRElBX1NFTEVDVE9SX0dMT0JBTCA9IG5ldyBSZWdFeHAoTUVESUFfU0VMRUNUT1Iuc291cmNlLCBcImdcIik7XG5jb25zdCBtZWRpYVNlbGVjdG9yUGx1Z2luID0ge1xuICBwb3N0Y3NzUGx1Z2luOiBcInBvc3Rjc3MtY3VzdG9tLXNlbGVjdG9yc1wiLFxuICBwcmVwYXJlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb3N0Y3NzUGx1Z2luOiBcInBvc3Rjc3MtY3VzdG9tLXNlbGVjdG9yc1wiLFxuICAgICAgQXRSdWxlOiBmdW5jdGlvbihhdHJ1bGUpIHtcbiAgICAgICAgaWYgKGF0cnVsZS5wYXJhbXMubWF0Y2goTUVESUFfU0VMRUNUT1JfR0xPQkFMKSkge1xuICAgICAgICAgIGF0cnVsZS5wYXJhbXMgPSBhdHJ1bGUucGFyYW1zLnJlcGxhY2UoTUVESUFfU0VMRUNUT1JfR0xPQkFMLCBcIiQxLSQyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IHBzZXVkb0NsYXNzUGx1Z2luID0ge1xuICBwb3N0Y3NzUGx1Z2luOiBcInBvc3Rjc3MtaG92ZXItY2xhc3Nlc1wiLFxuICBwcmVwYXJlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmaXhlZCA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICBSdWxlOiBmdW5jdGlvbihydWxlMikge1xuICAgICAgICBpZiAoZml4ZWQuaW5kZXhPZihydWxlMikgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZpeGVkLnB1c2gocnVsZTIpO1xuICAgICAgICBydWxlMi5zZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgICAgIGlmICghc2VsZWN0b3IuaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHNlbGVjdG9yUGFydHMgPSBzZWxlY3Rvci5yZXBsYWNlKC9cXG4vZywgXCIgXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICBjb25zdCBwc2V1ZG9lZFNlbGVjdG9yUGFydHMgPSBbXTtcbiAgICAgICAgICBzZWxlY3RvclBhcnRzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3JQYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwc2V1ZG9zID0gc2VsZWN0b3JQYXJ0Lm1hdGNoKC86Oj8oW146XSspL2cpO1xuICAgICAgICAgICAgaWYgKCFwc2V1ZG9zKSB7XG4gICAgICAgICAgICAgIHBzZXVkb2VkU2VsZWN0b3JQYXJ0cy5wdXNoKHNlbGVjdG9yUGFydCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJhc2VTZWxlY3RvciA9IHNlbGVjdG9yUGFydC5zdWJzdHIoXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIHNlbGVjdG9yUGFydC5sZW5ndGggLSBwc2V1ZG9zLmpvaW4oXCJcIikubGVuZ3RoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY2xhc3NQc2V1ZG9zID0gcHNldWRvcy5tYXAoZnVuY3Rpb24ocHNldWRvKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBzZXVkb1RvQ2hlY2sgPSBwc2V1ZG8ucmVwbGFjZSgvXFwoLiovZywgXCJcIik7XG4gICAgICAgICAgICAgIGlmIChwc2V1ZG9Ub0NoZWNrICE9PSBcIjpob3ZlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBzZXVkbztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHNldWRvLm1hdGNoKC9eOjovKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwc2V1ZG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcHNldWRvID0gcHNldWRvLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgcHNldWRvID0gcHNldWRvLnJlcGxhY2UoL1xcKC9nLCBcIlxcXFwoXCIpO1xuICAgICAgICAgICAgICBwc2V1ZG8gPSBwc2V1ZG8ucmVwbGFjZSgvXFwpL2csIFwiXFxcXClcIik7XG4gICAgICAgICAgICAgIHJldHVybiBcIi5cXFxcOlwiICsgcHNldWRvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwc2V1ZG9lZFNlbGVjdG9yUGFydHMucHVzaChiYXNlU2VsZWN0b3IgKyBjbGFzc1BzZXVkb3Muam9pbihcIlwiKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYWRkU2VsZWN0b3IocHNldWRvZWRTZWxlY3RvclBhcnRzLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgICBmdW5jdGlvbiBhZGRTZWxlY3RvcihuZXdTZWxlY3Rvcikge1xuICAgICAgICAgICAgaWYgKG5ld1NlbGVjdG9yICYmIG5ld1NlbGVjdG9yICE9PSBzZWxlY3Rvcikge1xuICAgICAgICAgICAgICBydWxlMi5zZWxlY3RvciArPSBcIixcXG5cIiArIG5ld1NlbGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldERlZmF1bHRFeHBvcnRGcm9tQ2pzKHgyKSB7XG4gIHJldHVybiB4MiAmJiB4Mi5fX2VzTW9kdWxlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4MiwgXCJkZWZhdWx0XCIpID8geDJbXCJkZWZhdWx0XCJdIDogeDI7XG59XG5mdW5jdGlvbiBnZXRBdWdtZW50ZWROYW1lc3BhY2Uobikge1xuICBpZiAobi5fX2VzTW9kdWxlKSByZXR1cm4gbjtcbiAgdmFyIGYgPSBuLmRlZmF1bHQ7XG4gIGlmICh0eXBlb2YgZiA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYSA9IGZ1bmN0aW9uIGEyKCkge1xuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBhMikge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QoZiwgYXJndW1lbnRzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICBhLnByb3RvdHlwZSA9IGYucHJvdG90eXBlO1xuICB9IGVsc2UgYSA9IHt9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgIHZhciBkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLCBrKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgaywgZC5nZXQgPyBkIDoge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuW2tdO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGE7XG59XG52YXIgcGljb2NvbG9yc19icm93c2VyID0geyBleHBvcnRzOiB7fSB9O1xudmFyIHggPSBTdHJpbmc7XG52YXIgY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7IGlzQ29sb3JTdXBwb3J0ZWQ6IGZhbHNlLCByZXNldDogeCwgYm9sZDogeCwgZGltOiB4LCBpdGFsaWM6IHgsIHVuZGVybGluZTogeCwgaW52ZXJzZTogeCwgaGlkZGVuOiB4LCBzdHJpa2V0aHJvdWdoOiB4LCBibGFjazogeCwgcmVkOiB4LCBncmVlbjogeCwgeWVsbG93OiB4LCBibHVlOiB4LCBtYWdlbnRhOiB4LCBjeWFuOiB4LCB3aGl0ZTogeCwgZ3JheTogeCwgYmdCbGFjazogeCwgYmdSZWQ6IHgsIGJnR3JlZW46IHgsIGJnWWVsbG93OiB4LCBiZ0JsdWU6IHgsIGJnTWFnZW50YTogeCwgYmdDeWFuOiB4LCBiZ1doaXRlOiB4IH07XG59O1xucGljb2NvbG9yc19icm93c2VyLmV4cG9ydHMgPSBjcmVhdGUoKTtcbnBpY29jb2xvcnNfYnJvd3Nlci5leHBvcnRzLmNyZWF0ZUNvbG9ycyA9IGNyZWF0ZTtcbnZhciBwaWNvY29sb3JzX2Jyb3dzZXJFeHBvcnRzID0gcGljb2NvbG9yc19icm93c2VyLmV4cG9ydHM7XG5jb25zdCBfX3ZpdGVCcm93c2VyRXh0ZXJuYWwgPSB7fTtcbmNvbnN0IF9fdml0ZUJyb3dzZXJFeHRlcm5hbCQxID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogX192aXRlQnJvd3NlckV4dGVybmFsXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xuY29uc3QgcmVxdWlyZSQkMiA9IC8qIEBfX1BVUkVfXyAqLyBnZXRBdWdtZW50ZWROYW1lc3BhY2UoX192aXRlQnJvd3NlckV4dGVybmFsJDEpO1xubGV0IHBpY28gPSBwaWNvY29sb3JzX2Jyb3dzZXJFeHBvcnRzO1xubGV0IHRlcm1pbmFsSGlnaGxpZ2h0JDEgPSByZXF1aXJlJCQyO1xubGV0IENzc1N5bnRheEVycm9yJDMgPSBjbGFzcyBDc3NTeW50YXhFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgbGluZSwgY29sdW1uLCBzb3VyY2UsIGZpbGUsIHBsdWdpbjIpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkNzc1N5bnRheEVycm9yXCI7XG4gICAgdGhpcy5yZWFzb24gPSBtZXNzYWdlO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIH1cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbjIpIHtcbiAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luMjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjb2x1bW4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGluZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmUubGluZTtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBsaW5lLmNvbHVtbjtcbiAgICAgICAgdGhpcy5lbmRMaW5lID0gY29sdW1uLmxpbmU7XG4gICAgICAgIHRoaXMuZW5kQ29sdW1uID0gY29sdW1uLmNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRNZXNzYWdlKCk7XG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBDc3NTeW50YXhFcnJvcik7XG4gICAgfVxuICB9XG4gIHNldE1lc3NhZ2UoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5wbHVnaW4gPyB0aGlzLnBsdWdpbiArIFwiOiBcIiA6IFwiXCI7XG4gICAgdGhpcy5tZXNzYWdlICs9IHRoaXMuZmlsZSA/IHRoaXMuZmlsZSA6IFwiPGNzcyBpbnB1dD5cIjtcbiAgICBpZiAodHlwZW9mIHRoaXMubGluZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5tZXNzYWdlICs9IFwiOlwiICsgdGhpcy5saW5lICsgXCI6XCIgKyB0aGlzLmNvbHVtbjtcbiAgICB9XG4gICAgdGhpcy5tZXNzYWdlICs9IFwiOiBcIiArIHRoaXMucmVhc29uO1xuICB9XG4gIHNob3dTb3VyY2VDb2RlKGNvbG9yKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZSkgcmV0dXJuIFwiXCI7XG4gICAgbGV0IGNzcyA9IHRoaXMuc291cmNlO1xuICAgIGlmIChjb2xvciA9PSBudWxsKSBjb2xvciA9IHBpY28uaXNDb2xvclN1cHBvcnRlZDtcbiAgICBpZiAodGVybWluYWxIaWdobGlnaHQkMSkge1xuICAgICAgaWYgKGNvbG9yKSBjc3MgPSB0ZXJtaW5hbEhpZ2hsaWdodCQxKGNzcyk7XG4gICAgfVxuICAgIGxldCBsaW5lcyA9IGNzcy5zcGxpdCgvXFxyP1xcbi8pO1xuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KHRoaXMubGluZSAtIDMsIDApO1xuICAgIGxldCBlbmQgPSBNYXRoLm1pbih0aGlzLmxpbmUgKyAyLCBsaW5lcy5sZW5ndGgpO1xuICAgIGxldCBtYXhXaWR0aCA9IFN0cmluZyhlbmQpLmxlbmd0aDtcbiAgICBsZXQgbWFyaywgYXNpZGU7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBsZXQgeyBib2xkLCBncmF5LCByZWQgfSA9IHBpY28uY3JlYXRlQ29sb3JzKHRydWUpO1xuICAgICAgbWFyayA9ICh0ZXh0KSA9PiBib2xkKHJlZCh0ZXh0KSk7XG4gICAgICBhc2lkZSA9ICh0ZXh0KSA9PiBncmF5KHRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrID0gYXNpZGUgPSAoc3RyKSA9PiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoKGxpbmUsIGluZGV4MikgPT4ge1xuICAgICAgbGV0IG51bWJlciA9IHN0YXJ0ICsgMSArIGluZGV4MjtcbiAgICAgIGxldCBndXR0ZXIgPSBcIiBcIiArIChcIiBcIiArIG51bWJlcikuc2xpY2UoLW1heFdpZHRoKSArIFwiIHwgXCI7XG4gICAgICBpZiAobnVtYmVyID09PSB0aGlzLmxpbmUpIHtcbiAgICAgICAgbGV0IHNwYWNpbmcgPSBhc2lkZShndXR0ZXIucmVwbGFjZSgvXFxkL2csIFwiIFwiKSkgKyBsaW5lLnNsaWNlKDAsIHRoaXMuY29sdW1uIC0gMSkucmVwbGFjZSgvW15cXHRdL2csIFwiIFwiKTtcbiAgICAgICAgcmV0dXJuIG1hcmsoXCI+XCIpICsgYXNpZGUoZ3V0dGVyKSArIGxpbmUgKyBcIlxcbiBcIiArIHNwYWNpbmcgKyBtYXJrKFwiXlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIiBcIiArIGFzaWRlKGd1dHRlcikgKyBsaW5lO1xuICAgIH0pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgbGV0IGNvZGUgPSB0aGlzLnNob3dTb3VyY2VDb2RlKCk7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIGNvZGUgPSBcIlxcblxcblwiICsgY29kZSArIFwiXFxuXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIjogXCIgKyB0aGlzLm1lc3NhZ2UgKyBjb2RlO1xuICB9XG59O1xudmFyIGNzc1N5bnRheEVycm9yID0gQ3NzU3ludGF4RXJyb3IkMztcbkNzc1N5bnRheEVycm9yJDMuZGVmYXVsdCA9IENzc1N5bnRheEVycm9yJDM7XG52YXIgc3ltYm9scyA9IHt9O1xuc3ltYm9scy5pc0NsZWFuID0gU3ltYm9sKFwiaXNDbGVhblwiKTtcbnN5bWJvbHMubXkgPSBTeW1ib2woXCJteVwiKTtcbmNvbnN0IERFRkFVTFRfUkFXID0ge1xuICBhZnRlcjogXCJcXG5cIixcbiAgYmVmb3JlQ2xvc2U6IFwiXFxuXCIsXG4gIGJlZm9yZUNvbW1lbnQ6IFwiXFxuXCIsXG4gIGJlZm9yZURlY2w6IFwiXFxuXCIsXG4gIGJlZm9yZU9wZW46IFwiIFwiLFxuICBiZWZvcmVSdWxlOiBcIlxcblwiLFxuICBjb2xvbjogXCI6IFwiLFxuICBjb21tZW50TGVmdDogXCIgXCIsXG4gIGNvbW1lbnRSaWdodDogXCIgXCIsXG4gIGVtcHR5Qm9keTogXCJcIixcbiAgaW5kZW50OiBcIiAgICBcIixcbiAgc2VtaWNvbG9uOiBmYWxzZVxufTtcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cbmxldCBTdHJpbmdpZmllciQyID0gY2xhc3MgU3RyaW5naWZpZXIge1xuICBjb25zdHJ1Y3RvcihidWlsZGVyKSB7XG4gICAgdGhpcy5idWlsZGVyID0gYnVpbGRlcjtcbiAgfVxuICBhdHJ1bGUobm9kZTIsIHNlbWljb2xvbikge1xuICAgIGxldCBuYW1lID0gXCJAXCIgKyBub2RlMi5uYW1lO1xuICAgIGxldCBwYXJhbXMgPSBub2RlMi5wYXJhbXMgPyB0aGlzLnJhd1ZhbHVlKG5vZGUyLCBcInBhcmFtc1wiKSA6IFwiXCI7XG4gICAgaWYgKHR5cGVvZiBub2RlMi5yYXdzLmFmdGVyTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbmFtZSArPSBub2RlMi5yYXdzLmFmdGVyTmFtZTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcykge1xuICAgICAgbmFtZSArPSBcIiBcIjtcbiAgICB9XG4gICAgaWYgKG5vZGUyLm5vZGVzKSB7XG4gICAgICB0aGlzLmJsb2NrKG5vZGUyLCBuYW1lICsgcGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGVuZCA9IChub2RlMi5yYXdzLmJldHdlZW4gfHwgXCJcIikgKyAoc2VtaWNvbG9uID8gXCI7XCIgOiBcIlwiKTtcbiAgICAgIHRoaXMuYnVpbGRlcihuYW1lICsgcGFyYW1zICsgZW5kLCBub2RlMik7XG4gICAgfVxuICB9XG4gIGJlZm9yZUFmdGVyKG5vZGUyLCBkZXRlY3QpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKG5vZGUyLnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUyLCBudWxsLCBcImJlZm9yZURlY2xcIik7XG4gICAgfSBlbHNlIGlmIChub2RlMi50eXBlID09PSBcImNvbW1lbnRcIikge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJiZWZvcmVDb21tZW50XCIpO1xuICAgIH0gZWxzZSBpZiAoZGV0ZWN0ID09PSBcImJlZm9yZVwiKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUyLCBudWxsLCBcImJlZm9yZVJ1bGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlQ2xvc2VcIik7XG4gICAgfVxuICAgIGxldCBidWYgPSBub2RlMi5wYXJlbnQ7XG4gICAgbGV0IGRlcHRoID0gMDtcbiAgICB3aGlsZSAoYnVmICYmIGJ1Zi50eXBlICE9PSBcInJvb3RcIikge1xuICAgICAgZGVwdGggKz0gMTtcbiAgICAgIGJ1ZiA9IGJ1Zi5wYXJlbnQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgICAgbGV0IGluZGVudCA9IHRoaXMucmF3KG5vZGUyLCBudWxsLCBcImluZGVudFwiKTtcbiAgICAgIGlmIChpbmRlbnQubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgZGVwdGg7IHN0ZXArKykgdmFsdWUgKz0gaW5kZW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgYmxvY2sobm9kZTIsIHN0YXJ0KSB7XG4gICAgbGV0IGJldHdlZW4gPSB0aGlzLnJhdyhub2RlMiwgXCJiZXR3ZWVuXCIsIFwiYmVmb3JlT3BlblwiKTtcbiAgICB0aGlzLmJ1aWxkZXIoc3RhcnQgKyBiZXR3ZWVuICsgXCJ7XCIsIG5vZGUyLCBcInN0YXJ0XCIpO1xuICAgIGxldCBhZnRlcjtcbiAgICBpZiAobm9kZTIubm9kZXMgJiYgbm9kZTIubm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmJvZHkobm9kZTIpO1xuICAgICAgYWZ0ZXIgPSB0aGlzLnJhdyhub2RlMiwgXCJhZnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXIgPSB0aGlzLnJhdyhub2RlMiwgXCJhZnRlclwiLCBcImVtcHR5Qm9keVwiKTtcbiAgICB9XG4gICAgaWYgKGFmdGVyKSB0aGlzLmJ1aWxkZXIoYWZ0ZXIpO1xuICAgIHRoaXMuYnVpbGRlcihcIn1cIiwgbm9kZTIsIFwiZW5kXCIpO1xuICB9XG4gIGJvZHkobm9kZTIpIHtcbiAgICBsZXQgbGFzdCA9IG5vZGUyLm5vZGVzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGxhc3QgPiAwKSB7XG4gICAgICBpZiAobm9kZTIubm9kZXNbbGFzdF0udHlwZSAhPT0gXCJjb21tZW50XCIpIGJyZWFrO1xuICAgICAgbGFzdCAtPSAxO1xuICAgIH1cbiAgICBsZXQgc2VtaWNvbG9uID0gdGhpcy5yYXcobm9kZTIsIFwic2VtaWNvbG9uXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZTIubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IG5vZGUyLm5vZGVzW2ldO1xuICAgICAgbGV0IGJlZm9yZSA9IHRoaXMucmF3KGNoaWxkLCBcImJlZm9yZVwiKTtcbiAgICAgIGlmIChiZWZvcmUpIHRoaXMuYnVpbGRlcihiZWZvcmUpO1xuICAgICAgdGhpcy5zdHJpbmdpZnkoY2hpbGQsIGxhc3QgIT09IGkgfHwgc2VtaWNvbG9uKTtcbiAgICB9XG4gIH1cbiAgY29tbWVudChub2RlMikge1xuICAgIGxldCBsZWZ0ID0gdGhpcy5yYXcobm9kZTIsIFwibGVmdFwiLCBcImNvbW1lbnRMZWZ0XCIpO1xuICAgIGxldCByaWdodCA9IHRoaXMucmF3KG5vZGUyLCBcInJpZ2h0XCIsIFwiY29tbWVudFJpZ2h0XCIpO1xuICAgIHRoaXMuYnVpbGRlcihcIi8qXCIgKyBsZWZ0ICsgbm9kZTIudGV4dCArIHJpZ2h0ICsgXCIqL1wiLCBub2RlMik7XG4gIH1cbiAgZGVjbChub2RlMiwgc2VtaWNvbG9uKSB7XG4gICAgbGV0IGJldHdlZW4gPSB0aGlzLnJhdyhub2RlMiwgXCJiZXR3ZWVuXCIsIFwiY29sb25cIik7XG4gICAgbGV0IHN0cmluZyA9IG5vZGUyLnByb3AgKyBiZXR3ZWVuICsgdGhpcy5yYXdWYWx1ZShub2RlMiwgXCJ2YWx1ZVwiKTtcbiAgICBpZiAobm9kZTIuaW1wb3J0YW50KSB7XG4gICAgICBzdHJpbmcgKz0gbm9kZTIucmF3cy5pbXBvcnRhbnQgfHwgXCIgIWltcG9ydGFudFwiO1xuICAgIH1cbiAgICBpZiAoc2VtaWNvbG9uKSBzdHJpbmcgKz0gXCI7XCI7XG4gICAgdGhpcy5idWlsZGVyKHN0cmluZywgbm9kZTIpO1xuICB9XG4gIGRvY3VtZW50KG5vZGUyKSB7XG4gICAgdGhpcy5ib2R5KG5vZGUyKTtcbiAgfVxuICByYXcobm9kZTIsIG93biwgZGV0ZWN0KSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmICghZGV0ZWN0KSBkZXRlY3QgPSBvd247XG4gICAgaWYgKG93bikge1xuICAgICAgdmFsdWUgPSBub2RlMi5yYXdzW293bl07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCBwYXJlbnQgPSBub2RlMi5wYXJlbnQ7XG4gICAgaWYgKGRldGVjdCA9PT0gXCJiZWZvcmVcIikge1xuICAgICAgaWYgKCFwYXJlbnQgfHwgcGFyZW50LnR5cGUgPT09IFwicm9vdFwiICYmIHBhcmVudC5maXJzdCA9PT0gbm9kZTIpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50ICYmIHBhcmVudC50eXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghcGFyZW50KSByZXR1cm4gREVGQVVMVF9SQVdbZGV0ZWN0XTtcbiAgICBsZXQgcm9vdDIgPSBub2RlMi5yb290KCk7XG4gICAgaWYgKCFyb290Mi5yYXdDYWNoZSkgcm9vdDIucmF3Q2FjaGUgPSB7fTtcbiAgICBpZiAodHlwZW9mIHJvb3QyLnJhd0NhY2hlW2RldGVjdF0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiByb290Mi5yYXdDYWNoZVtkZXRlY3RdO1xuICAgIH1cbiAgICBpZiAoZGV0ZWN0ID09PSBcImJlZm9yZVwiIHx8IGRldGVjdCA9PT0gXCJhZnRlclwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5iZWZvcmVBZnRlcihub2RlMiwgZGV0ZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1ldGhvZCA9IFwicmF3XCIgKyBjYXBpdGFsaXplKGRldGVjdCk7XG4gICAgICBpZiAodGhpc1ttZXRob2RdKSB7XG4gICAgICAgIHZhbHVlID0gdGhpc1ttZXRob2RdKHJvb3QyLCBub2RlMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290Mi53YWxrKChpKSA9PiB7XG4gICAgICAgICAgdmFsdWUgPSBpLnJhd3Nbb3duXTtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB2YWx1ZSA9IERFRkFVTFRfUkFXW2RldGVjdF07XG4gICAgcm9vdDIucmF3Q2FjaGVbZGV0ZWN0XSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdCZWZvcmVDbG9zZShyb290Mikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrKChpKSA9PiB7XG4gICAgICBpZiAoaS5ub2RlcyAmJiBpLm5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYWZ0ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGkucmF3cy5hZnRlcjtcbiAgICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoXCJcXG5cIikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHZhbHVlKSB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCBcIlwiKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3QmVmb3JlQ29tbWVudChyb290Miwgbm9kZTIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2Fsa0NvbW1lbnRzKChpKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmVmb3JlO1xuICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoXCJcXG5cIikpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxuXSskLywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlRGVjbFwiKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCBcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0JlZm9yZURlY2wocm9vdDIsIG5vZGUyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGtEZWNscygoaSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLmJlZm9yZTtcbiAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcbl0rJC8sIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUyLCBudWxsLCBcImJlZm9yZVJ1bGVcIik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFMvZywgXCJcIik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdCZWZvcmVPcGVuKHJvb3QyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGlmIChpLnR5cGUgIT09IFwiZGVjbFwiKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLmJldHdlZW47XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3QmVmb3JlUnVsZShyb290Mikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrKChpKSA9PiB7XG4gICAgICBpZiAoaS5ub2RlcyAmJiAoaS5wYXJlbnQgIT09IHJvb3QyIHx8IHJvb3QyLmZpcnN0ICE9PSBpKSkge1xuICAgICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZWZvcmU7XG4gICAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxuXSskLywgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh2YWx1ZSkgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFMvZywgXCJcIik7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0NvbG9uKHJvb3QyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGtEZWNscygoaSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmV0d2VlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZXR3ZWVuLnJlcGxhY2UoL1teXFxzOl0vZywgXCJcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3RW1wdHlCb2R5KHJvb3QyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLmFmdGVyO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0luZGVudChyb290Mikge1xuICAgIGlmIChyb290Mi5yYXdzLmluZGVudCkgcmV0dXJuIHJvb3QyLnJhd3MuaW5kZW50O1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrKChpKSA9PiB7XG4gICAgICBsZXQgcCA9IGkucGFyZW50O1xuICAgICAgaWYgKHAgJiYgcCAhPT0gcm9vdDIgJiYgcC5wYXJlbnQgJiYgcC5wYXJlbnQgPT09IHJvb3QyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGxldCBwYXJ0cyA9IGkucmF3cy5iZWZvcmUuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgdmFsdWUgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCBcIlwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3U2VtaWNvbG9uKHJvb3QyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoICYmIGkubGFzdC50eXBlID09PSBcImRlY2xcIikge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5zZW1pY29sb247XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3VmFsdWUobm9kZTIsIHByb3ApIHtcbiAgICBsZXQgdmFsdWUgPSBub2RlMltwcm9wXTtcbiAgICBsZXQgcmF3ID0gbm9kZTIucmF3c1twcm9wXTtcbiAgICBpZiAocmF3ICYmIHJhdy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiByYXcucmF3O1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcm9vdChub2RlMikge1xuICAgIHRoaXMuYm9keShub2RlMik7XG4gICAgaWYgKG5vZGUyLnJhd3MuYWZ0ZXIpIHRoaXMuYnVpbGRlcihub2RlMi5yYXdzLmFmdGVyKTtcbiAgfVxuICBydWxlKG5vZGUyKSB7XG4gICAgdGhpcy5ibG9jayhub2RlMiwgdGhpcy5yYXdWYWx1ZShub2RlMiwgXCJzZWxlY3RvclwiKSk7XG4gICAgaWYgKG5vZGUyLnJhd3Mub3duU2VtaWNvbG9uKSB7XG4gICAgICB0aGlzLmJ1aWxkZXIobm9kZTIucmF3cy5vd25TZW1pY29sb24sIG5vZGUyLCBcImVuZFwiKTtcbiAgICB9XG4gIH1cbiAgc3RyaW5naWZ5KG5vZGUyLCBzZW1pY29sb24pIHtcbiAgICBpZiAoIXRoaXNbbm9kZTIudHlwZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJVbmtub3duIEFTVCBub2RlIHR5cGUgXCIgKyBub2RlMi50eXBlICsgXCIuIE1heWJlIHlvdSBuZWVkIHRvIGNoYW5nZSBQb3N0Q1NTIHN0cmluZ2lmaWVyLlwiXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzW25vZGUyLnR5cGVdKG5vZGUyLCBzZW1pY29sb24pO1xuICB9XG59O1xudmFyIHN0cmluZ2lmaWVyID0gU3RyaW5naWZpZXIkMjtcblN0cmluZ2lmaWVyJDIuZGVmYXVsdCA9IFN0cmluZ2lmaWVyJDI7XG5sZXQgU3RyaW5naWZpZXIkMSA9IHN0cmluZ2lmaWVyO1xuZnVuY3Rpb24gc3RyaW5naWZ5JDQobm9kZTIsIGJ1aWxkZXIpIHtcbiAgbGV0IHN0ciA9IG5ldyBTdHJpbmdpZmllciQxKGJ1aWxkZXIpO1xuICBzdHIuc3RyaW5naWZ5KG5vZGUyKTtcbn1cbnZhciBzdHJpbmdpZnlfMSA9IHN0cmluZ2lmeSQ0O1xuc3RyaW5naWZ5JDQuZGVmYXVsdCA9IHN0cmluZ2lmeSQ0O1xubGV0IHsgaXNDbGVhbjogaXNDbGVhbiQyLCBteTogbXkkMiB9ID0gc3ltYm9scztcbmxldCBDc3NTeW50YXhFcnJvciQyID0gY3NzU3ludGF4RXJyb3I7XG5sZXQgU3RyaW5naWZpZXIyID0gc3RyaW5naWZpZXI7XG5sZXQgc3RyaW5naWZ5JDMgPSBzdHJpbmdpZnlfMTtcbmZ1bmN0aW9uIGNsb25lTm9kZShvYmosIHBhcmVudCkge1xuICBsZXQgY2xvbmVkID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xuICBmb3IgKGxldCBpIGluIG9iaikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoaSA9PT0gXCJwcm94eUNhY2hlXCIpIGNvbnRpbnVlO1xuICAgIGxldCB2YWx1ZSA9IG9ialtpXTtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICBpZiAoaSA9PT0gXCJwYXJlbnRcIiAmJiB0eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAocGFyZW50KSBjbG9uZWRbaV0gPSBwYXJlbnQ7XG4gICAgfSBlbHNlIGlmIChpID09PSBcInNvdXJjZVwiKSB7XG4gICAgICBjbG9uZWRbaV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjbG9uZWRbaV0gPSB2YWx1ZS5tYXAoKGopID0+IGNsb25lTm9kZShqLCBjbG9uZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHZhbHVlID0gY2xvbmVOb2RlKHZhbHVlKTtcbiAgICAgIGNsb25lZFtpXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xvbmVkO1xufVxubGV0IE5vZGUkNCA9IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cyA9IHt9KSB7XG4gICAgdGhpcy5yYXdzID0ge307XG4gICAgdGhpc1tpc0NsZWFuJDJdID0gZmFsc2U7XG4gICAgdGhpc1tteSQyXSA9IHRydWU7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKG5hbWUgPT09IFwibm9kZXNcIikge1xuICAgICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgICAgIGZvciAobGV0IG5vZGUyIG9mIGRlZmF1bHRzW25hbWVdKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBub2RlMi5jbG9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZChub2RlMi5jbG9uZSgpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQobm9kZTIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1tuYW1lXSA9IGRlZmF1bHRzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhZGRUb0Vycm9yKGVycm9yKSB7XG4gICAgZXJyb3IucG9zdGNzc05vZGUgPSB0aGlzO1xuICAgIGlmIChlcnJvci5zdGFjayAmJiB0aGlzLnNvdXJjZSAmJiAvXFxuXFxzezR9YXQgLy50ZXN0KGVycm9yLnN0YWNrKSkge1xuICAgICAgbGV0IHMgPSB0aGlzLnNvdXJjZTtcbiAgICAgIGVycm9yLnN0YWNrID0gZXJyb3Iuc3RhY2sucmVwbGFjZShcbiAgICAgICAgL1xcblxcc3s0fWF0IC8sXG4gICAgICAgIGAkJiR7cy5pbnB1dC5mcm9tfToke3Muc3RhcnQubGluZX06JHtzLnN0YXJ0LmNvbHVtbn0kJmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICBhZnRlcihhZGQpIHtcbiAgICB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcih0aGlzLCBhZGQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGFzc2lnbihvdmVycmlkZXMgPSB7fSkge1xuICAgIGZvciAobGV0IG5hbWUgaW4gb3ZlcnJpZGVzKSB7XG4gICAgICB0aGlzW25hbWVdID0gb3ZlcnJpZGVzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBiZWZvcmUoYWRkKSB7XG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIGFkZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY2xlYW5SYXdzKGtlZXBCZXR3ZWVuKSB7XG4gICAgZGVsZXRlIHRoaXMucmF3cy5iZWZvcmU7XG4gICAgZGVsZXRlIHRoaXMucmF3cy5hZnRlcjtcbiAgICBpZiAoIWtlZXBCZXR3ZWVuKSBkZWxldGUgdGhpcy5yYXdzLmJldHdlZW47XG4gIH1cbiAgY2xvbmUob3ZlcnJpZGVzID0ge30pIHtcbiAgICBsZXQgY2xvbmVkID0gY2xvbmVOb2RlKHRoaXMpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gb3ZlcnJpZGVzKSB7XG4gICAgICBjbG9uZWRbbmFtZV0gPSBvdmVycmlkZXNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgY2xvbmVBZnRlcihvdmVycmlkZXMgPSB7fSkge1xuICAgIGxldCBjbG9uZWQgPSB0aGlzLmNsb25lKG92ZXJyaWRlcyk7XG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QWZ0ZXIodGhpcywgY2xvbmVkKTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG4gIGNsb25lQmVmb3JlKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgbGV0IGNsb25lZCA9IHRoaXMuY2xvbmUob3ZlcnJpZGVzKTtcbiAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcywgY2xvbmVkKTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG4gIGVycm9yKG1lc3NhZ2UsIG9wdHMgPSB7fSkge1xuICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgbGV0IHsgZW5kLCBzdGFydCB9ID0gdGhpcy5yYW5nZUJ5KG9wdHMpO1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmlucHV0LmVycm9yKFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICB7IGNvbHVtbjogc3RhcnQuY29sdW1uLCBsaW5lOiBzdGFydC5saW5lIH0sXG4gICAgICAgIHsgY29sdW1uOiBlbmQuY29sdW1uLCBsaW5lOiBlbmQubGluZSB9LFxuICAgICAgICBvcHRzXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENzc1N5bnRheEVycm9yJDIobWVzc2FnZSk7XG4gIH1cbiAgZ2V0UHJveHlQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldChub2RlMiwgcHJvcCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gXCJwcm94eU9mXCIpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICByZXR1cm4gKCkgPT4gbm9kZTIucm9vdCgpLnRvUHJveHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTJbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXQobm9kZTIsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIGlmIChub2RlMltwcm9wXSA9PT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgICBub2RlMltwcm9wXSA9IHZhbHVlO1xuICAgICAgICBpZiAocHJvcCA9PT0gXCJwcm9wXCIgfHwgcHJvcCA9PT0gXCJ2YWx1ZVwiIHx8IHByb3AgPT09IFwibmFtZVwiIHx8IHByb3AgPT09IFwicGFyYW1zXCIgfHwgcHJvcCA9PT0gXCJpbXBvcnRhbnRcIiB8fCAvKiBjOCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBwcm9wID09PSBcInRleHRcIikge1xuICAgICAgICAgIG5vZGUyLm1hcmtEaXJ0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgbWFya0RpcnR5KCkge1xuICAgIGlmICh0aGlzW2lzQ2xlYW4kMl0pIHtcbiAgICAgIHRoaXNbaXNDbGVhbiQyXSA9IGZhbHNlO1xuICAgICAgbGV0IG5leHQgPSB0aGlzO1xuICAgICAgd2hpbGUgKG5leHQgPSBuZXh0LnBhcmVudCkge1xuICAgICAgICBuZXh0W2lzQ2xlYW4kMl0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm4gdm9pZCAwO1xuICAgIGxldCBpbmRleDIgPSB0aGlzLnBhcmVudC5pbmRleCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQubm9kZXNbaW5kZXgyICsgMV07XG4gIH1cbiAgcG9zaXRpb25CeShvcHRzLCBzdHJpbmdSZXByZXNlbnRhdGlvbikge1xuICAgIGxldCBwb3MgPSB0aGlzLnNvdXJjZS5zdGFydDtcbiAgICBpZiAob3B0cy5pbmRleCkge1xuICAgICAgcG9zID0gdGhpcy5wb3NpdGlvbkluc2lkZShvcHRzLmluZGV4LCBzdHJpbmdSZXByZXNlbnRhdGlvbik7XG4gICAgfSBlbHNlIGlmIChvcHRzLndvcmQpIHtcbiAgICAgIHN0cmluZ1JlcHJlc2VudGF0aW9uID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgbGV0IGluZGV4MiA9IHN0cmluZ1JlcHJlc2VudGF0aW9uLmluZGV4T2Yob3B0cy53b3JkKTtcbiAgICAgIGlmIChpbmRleDIgIT09IC0xKSBwb3MgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKGluZGV4Miwgc3RyaW5nUmVwcmVzZW50YXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gcG9zO1xuICB9XG4gIHBvc2l0aW9uSW5zaWRlKGluZGV4Miwgc3RyaW5nUmVwcmVzZW50YXRpb24pIHtcbiAgICBsZXQgc3RyaW5nID0gc3RyaW5nUmVwcmVzZW50YXRpb24gfHwgdGhpcy50b1N0cmluZygpO1xuICAgIGxldCBjb2x1bW4gPSB0aGlzLnNvdXJjZS5zdGFydC5jb2x1bW47XG4gICAgbGV0IGxpbmUgPSB0aGlzLnNvdXJjZS5zdGFydC5saW5lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXgyOyBpKyspIHtcbiAgICAgIGlmIChzdHJpbmdbaV0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgY29sdW1uID0gMTtcbiAgICAgICAgbGluZSArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGNvbHVtbiwgbGluZSB9O1xuICB9XG4gIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuIHZvaWQgMDtcbiAgICBsZXQgaW5kZXgyID0gdGhpcy5wYXJlbnQuaW5kZXgodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm5vZGVzW2luZGV4MiAtIDFdO1xuICB9XG4gIHJhbmdlQnkob3B0cykge1xuICAgIGxldCBzdGFydCA9IHtcbiAgICAgIGNvbHVtbjogdGhpcy5zb3VyY2Uuc3RhcnQuY29sdW1uLFxuICAgICAgbGluZTogdGhpcy5zb3VyY2Uuc3RhcnQubGluZVxuICAgIH07XG4gICAgbGV0IGVuZCA9IHRoaXMuc291cmNlLmVuZCA/IHtcbiAgICAgIGNvbHVtbjogdGhpcy5zb3VyY2UuZW5kLmNvbHVtbiArIDEsXG4gICAgICBsaW5lOiB0aGlzLnNvdXJjZS5lbmQubGluZVxuICAgIH0gOiB7XG4gICAgICBjb2x1bW46IHN0YXJ0LmNvbHVtbiArIDEsXG4gICAgICBsaW5lOiBzdGFydC5saW5lXG4gICAgfTtcbiAgICBpZiAob3B0cy53b3JkKSB7XG4gICAgICBsZXQgc3RyaW5nUmVwcmVzZW50YXRpb24gPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgaW5kZXgyID0gc3RyaW5nUmVwcmVzZW50YXRpb24uaW5kZXhPZihvcHRzLndvcmQpO1xuICAgICAgaWYgKGluZGV4MiAhPT0gLTEpIHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKGluZGV4Miwgc3RyaW5nUmVwcmVzZW50YXRpb24pO1xuICAgICAgICBlbmQgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKGluZGV4MiArIG9wdHMud29yZC5sZW5ndGgsIHN0cmluZ1JlcHJlc2VudGF0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdHMuc3RhcnQpIHtcbiAgICAgICAgc3RhcnQgPSB7XG4gICAgICAgICAgY29sdW1uOiBvcHRzLnN0YXJ0LmNvbHVtbixcbiAgICAgICAgICBsaW5lOiBvcHRzLnN0YXJ0LmxpbmVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5pbmRleCkge1xuICAgICAgICBzdGFydCA9IHRoaXMucG9zaXRpb25JbnNpZGUob3B0cy5pbmRleCk7XG4gICAgICB9XG4gICAgICBpZiAob3B0cy5lbmQpIHtcbiAgICAgICAgZW5kID0ge1xuICAgICAgICAgIGNvbHVtbjogb3B0cy5lbmQuY29sdW1uLFxuICAgICAgICAgIGxpbmU6IG9wdHMuZW5kLmxpbmVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMuZW5kSW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZW5kID0gdGhpcy5wb3NpdGlvbkluc2lkZShvcHRzLmVuZEluZGV4KTtcbiAgICAgIH0gZWxzZSBpZiAob3B0cy5pbmRleCkge1xuICAgICAgICBlbmQgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKG9wdHMuaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZC5saW5lIDwgc3RhcnQubGluZSB8fCBlbmQubGluZSA9PT0gc3RhcnQubGluZSAmJiBlbmQuY29sdW1uIDw9IHN0YXJ0LmNvbHVtbikge1xuICAgICAgZW5kID0geyBjb2x1bW46IHN0YXJ0LmNvbHVtbiArIDEsIGxpbmU6IHN0YXJ0LmxpbmUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZW5kLCBzdGFydCB9O1xuICB9XG4gIHJhdyhwcm9wLCBkZWZhdWx0VHlwZSkge1xuICAgIGxldCBzdHIgPSBuZXcgU3RyaW5naWZpZXIyKCk7XG4gICAgcmV0dXJuIHN0ci5yYXcodGhpcywgcHJvcCwgZGVmYXVsdFR5cGUpO1xuICB9XG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudCA9IHZvaWQgMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZXBsYWNlV2l0aCguLi5ub2Rlcykge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgbGV0IGJvb2ttYXJrID0gdGhpcztcbiAgICAgIGxldCBmb3VuZFNlbGYgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlMiA9PT0gdGhpcykge1xuICAgICAgICAgIGZvdW5kU2VsZiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZm91bmRTZWxmKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuaW5zZXJ0QWZ0ZXIoYm9va21hcmssIG5vZGUyKTtcbiAgICAgICAgICBib29rbWFyayA9IG5vZGUyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZShib29rbWFyaywgbm9kZTIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWZvdW5kU2VsZikge1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByb290KCkge1xuICAgIGxldCByZXN1bHQyID0gdGhpcztcbiAgICB3aGlsZSAocmVzdWx0Mi5wYXJlbnQgJiYgcmVzdWx0Mi5wYXJlbnQudHlwZSAhPT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICByZXN1bHQyID0gcmVzdWx0Mi5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQyO1xuICB9XG4gIHRvSlNPTihfLCBpbnB1dHMpIHtcbiAgICBsZXQgZml4ZWQgPSB7fTtcbiAgICBsZXQgZW1pdElucHV0cyA9IGlucHV0cyA9PSBudWxsO1xuICAgIGlucHV0cyA9IGlucHV0cyB8fCAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIGxldCBpbnB1dHNOZXh0SW5kZXggPSAwO1xuICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcykge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcywgbmFtZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gXCJwYXJlbnRcIiB8fCBuYW1lID09PSBcInByb3h5Q2FjaGVcIikgY29udGludWU7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGZpeGVkW25hbWVdID0gdmFsdWUubWFwKChpKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBpID09PSBcIm9iamVjdFwiICYmIGkudG9KU09OKSB7XG4gICAgICAgICAgICByZXR1cm4gaS50b0pTT04obnVsbCwgaW5wdXRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlLnRvSlNPTikge1xuICAgICAgICBmaXhlZFtuYW1lXSA9IHZhbHVlLnRvSlNPTihudWxsLCBpbnB1dHMpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInNvdXJjZVwiKSB7XG4gICAgICAgIGxldCBpbnB1dElkID0gaW5wdXRzLmdldCh2YWx1ZS5pbnB1dCk7XG4gICAgICAgIGlmIChpbnB1dElkID09IG51bGwpIHtcbiAgICAgICAgICBpbnB1dElkID0gaW5wdXRzTmV4dEluZGV4O1xuICAgICAgICAgIGlucHV0cy5zZXQodmFsdWUuaW5wdXQsIGlucHV0c05leHRJbmRleCk7XG4gICAgICAgICAgaW5wdXRzTmV4dEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZml4ZWRbbmFtZV0gPSB7XG4gICAgICAgICAgZW5kOiB2YWx1ZS5lbmQsXG4gICAgICAgICAgaW5wdXRJZCxcbiAgICAgICAgICBzdGFydDogdmFsdWUuc3RhcnRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpeGVkW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbWl0SW5wdXRzKSB7XG4gICAgICBmaXhlZC5pbnB1dHMgPSBbLi4uaW5wdXRzLmtleXMoKV0ubWFwKChpbnB1dDIpID0+IGlucHV0Mi50b0pTT04oKSk7XG4gICAgfVxuICAgIHJldHVybiBmaXhlZDtcbiAgfVxuICB0b1Byb3h5KCkge1xuICAgIGlmICghdGhpcy5wcm94eUNhY2hlKSB7XG4gICAgICB0aGlzLnByb3h5Q2FjaGUgPSBuZXcgUHJveHkodGhpcywgdGhpcy5nZXRQcm94eVByb2Nlc3NvcigpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJveHlDYWNoZTtcbiAgfVxuICB0b1N0cmluZyhzdHJpbmdpZmllcjIgPSBzdHJpbmdpZnkkMykge1xuICAgIGlmIChzdHJpbmdpZmllcjIuc3RyaW5naWZ5KSBzdHJpbmdpZmllcjIgPSBzdHJpbmdpZmllcjIuc3RyaW5naWZ5O1xuICAgIGxldCByZXN1bHQyID0gXCJcIjtcbiAgICBzdHJpbmdpZmllcjIodGhpcywgKGkpID0+IHtcbiAgICAgIHJlc3VsdDIgKz0gaTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0MjtcbiAgfVxuICB3YXJuKHJlc3VsdDIsIHRleHQsIG9wdHMpIHtcbiAgICBsZXQgZGF0YSA9IHsgbm9kZTogdGhpcyB9O1xuICAgIGZvciAobGV0IGkgaW4gb3B0cykgZGF0YVtpXSA9IG9wdHNbaV07XG4gICAgcmV0dXJuIHJlc3VsdDIud2Fybih0ZXh0LCBkYXRhKTtcbiAgfVxuICBnZXQgcHJveHlPZigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcbnZhciBub2RlID0gTm9kZSQ0O1xuTm9kZSQ0LmRlZmF1bHQgPSBOb2RlJDQ7XG5sZXQgTm9kZSQzID0gbm9kZTtcbmxldCBEZWNsYXJhdGlvbiQ0ID0gY2xhc3MgRGVjbGFyYXRpb24gZXh0ZW5kcyBOb2RlJDMge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIGlmIChkZWZhdWx0cyAmJiB0eXBlb2YgZGVmYXVsdHMudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGRlZmF1bHRzLnZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICBkZWZhdWx0cyA9IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIGRlZmF1bHRzKSwgeyB2YWx1ZTogU3RyaW5nKGRlZmF1bHRzLnZhbHVlKSB9KTtcbiAgICB9XG4gICAgc3VwZXIoZGVmYXVsdHMpO1xuICAgIHRoaXMudHlwZSA9IFwiZGVjbFwiO1xuICB9XG4gIGdldCB2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wLnN0YXJ0c1dpdGgoXCItLVwiKSB8fCB0aGlzLnByb3BbMF0gPT09IFwiJFwiO1xuICB9XG59O1xudmFyIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24kNDtcbkRlY2xhcmF0aW9uJDQuZGVmYXVsdCA9IERlY2xhcmF0aW9uJDQ7XG5sZXQgdXJsQWxwaGFiZXQgPSBcInVzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3RcIjtcbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUgPSAyMSkgPT4ge1xuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgbGV0IGkgPSBzaXplO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlkICs9IGFscGhhYmV0W01hdGgucmFuZG9tKCkgKiBhbHBoYWJldC5sZW5ndGggfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIGlkO1xuICB9O1xufTtcbmxldCBuYW5vaWQkMSA9IChzaXplID0gMjEpID0+IHtcbiAgbGV0IGlkID0gXCJcIjtcbiAgbGV0IGkgPSBzaXplO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIDY0IHwgMF07XG4gIH1cbiAgcmV0dXJuIGlkO1xufTtcbnZhciBub25TZWN1cmUgPSB7IG5hbm9pZDogbmFub2lkJDEsIGN1c3RvbUFscGhhYmV0IH07XG5sZXQgeyBTb3VyY2VNYXBDb25zdW1lcjogU291cmNlTWFwQ29uc3VtZXIkMiwgU291cmNlTWFwR2VuZXJhdG9yOiBTb3VyY2VNYXBHZW5lcmF0b3IkMiB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGV4aXN0c1N5bmMsIHJlYWRGaWxlU3luYyB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGRpcm5hbWU6IGRpcm5hbWUkMSwgam9pbiB9ID0gcmVxdWlyZSQkMjtcbmZ1bmN0aW9uIGZyb21CYXNlNjQoc3RyKSB7XG4gIGlmIChCdWZmZXIpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyLCBcImJhc2U2NFwiKS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB3aW5kb3cuYXRvYihzdHIpO1xuICB9XG59XG5sZXQgUHJldmlvdXNNYXAkMiA9IGNsYXNzIFByZXZpb3VzTWFwIHtcbiAgY29uc3RydWN0b3IoY3NzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMubWFwID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHRoaXMubG9hZEFubm90YXRpb24oY3NzKTtcbiAgICB0aGlzLmlubGluZSA9IHRoaXMuc3RhcnRXaXRoKHRoaXMuYW5ub3RhdGlvbiwgXCJkYXRhOlwiKTtcbiAgICBsZXQgcHJldiA9IG9wdHMubWFwID8gb3B0cy5tYXAucHJldiA6IHZvaWQgMDtcbiAgICBsZXQgdGV4dCA9IHRoaXMubG9hZE1hcChvcHRzLmZyb20sIHByZXYpO1xuICAgIGlmICghdGhpcy5tYXBGaWxlICYmIG9wdHMuZnJvbSkge1xuICAgICAgdGhpcy5tYXBGaWxlID0gb3B0cy5mcm9tO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXBGaWxlKSB0aGlzLnJvb3QgPSBkaXJuYW1lJDEodGhpcy5tYXBGaWxlKTtcbiAgICBpZiAodGV4dCkgdGhpcy50ZXh0ID0gdGV4dDtcbiAgfVxuICBjb25zdW1lcigpIHtcbiAgICBpZiAoIXRoaXMuY29uc3VtZXJDYWNoZSkge1xuICAgICAgdGhpcy5jb25zdW1lckNhY2hlID0gbmV3IFNvdXJjZU1hcENvbnN1bWVyJDIodGhpcy50ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc3VtZXJDYWNoZTtcbiAgfVxuICBkZWNvZGVJbmxpbmUodGV4dCkge1xuICAgIGxldCBiYXNlQ2hhcnNldFVyaSA9IC9eZGF0YTphcHBsaWNhdGlvblxcL2pzb247Y2hhcnNldD11dGYtPzg7YmFzZTY0LC87XG4gICAgbGV0IGJhc2VVcmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uO2Jhc2U2NCwvO1xuICAgIGxldCBjaGFyc2V0VXJpID0gL15kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtjaGFyc2V0PXV0Zi0/OCwvO1xuICAgIGxldCB1cmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uLC87XG4gICAgaWYgKGNoYXJzZXRVcmkudGVzdCh0ZXh0KSB8fCB1cmkudGVzdCh0ZXh0KSkge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh0ZXh0LnN1YnN0cihSZWdFeHAubGFzdE1hdGNoLmxlbmd0aCkpO1xuICAgIH1cbiAgICBpZiAoYmFzZUNoYXJzZXRVcmkudGVzdCh0ZXh0KSB8fCBiYXNlVXJpLnRlc3QodGV4dCkpIHtcbiAgICAgIHJldHVybiBmcm9tQmFzZTY0KHRleHQuc3Vic3RyKFJlZ0V4cC5sYXN0TWF0Y2gubGVuZ3RoKSk7XG4gICAgfVxuICAgIGxldCBlbmNvZGluZyA9IHRleHQubWF0Y2goL2RhdGE6YXBwbGljYXRpb25cXC9qc29uOyhbXixdKyksLylbMV07XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgc291cmNlIG1hcCBlbmNvZGluZyBcIiArIGVuY29kaW5nKTtcbiAgfVxuICBnZXRBbm5vdGF0aW9uVVJMKHNvdXJjZU1hcFN0cmluZykge1xuICAgIHJldHVybiBzb3VyY2VNYXBTdHJpbmcucmVwbGFjZSgvXlxcL1xcKlxccyojIHNvdXJjZU1hcHBpbmdVUkw9LywgXCJcIikudHJpbSgpO1xuICB9XG4gIGlzTWFwKG1hcCkge1xuICAgIGlmICh0eXBlb2YgbWFwICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHR5cGVvZiBtYXAubWFwcGluZ3MgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1hcC5fbWFwcGluZ3MgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShtYXAuc2VjdGlvbnMpO1xuICB9XG4gIGxvYWRBbm5vdGF0aW9uKGNzcykge1xuICAgIGxldCBjb21tZW50cyA9IGNzcy5tYXRjaCgvXFwvXFwqXFxzKiMgc291cmNlTWFwcGluZ1VSTD0vZ20pO1xuICAgIGlmICghY29tbWVudHMpIHJldHVybjtcbiAgICBsZXQgc3RhcnQgPSBjc3MubGFzdEluZGV4T2YoY29tbWVudHMucG9wKCkpO1xuICAgIGxldCBlbmQgPSBjc3MuaW5kZXhPZihcIiovXCIsIHN0YXJ0KTtcbiAgICBpZiAoc3RhcnQgPiAtMSAmJiBlbmQgPiAtMSkge1xuICAgICAgdGhpcy5hbm5vdGF0aW9uID0gdGhpcy5nZXRBbm5vdGF0aW9uVVJMKGNzcy5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xuICAgIH1cbiAgfVxuICBsb2FkRmlsZShwYXRoKSB7XG4gICAgdGhpcy5yb290ID0gZGlybmFtZSQxKHBhdGgpO1xuICAgIGlmIChleGlzdHNTeW5jKHBhdGgpKSB7XG4gICAgICB0aGlzLm1hcEZpbGUgPSBwYXRoO1xuICAgICAgcmV0dXJuIHJlYWRGaWxlU3luYyhwYXRoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIH1cbiAgfVxuICBsb2FkTWFwKGZpbGUsIHByZXYpIHtcbiAgICBpZiAocHJldiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocHJldikge1xuICAgICAgaWYgKHR5cGVvZiBwcmV2ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJldiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGxldCBwcmV2UGF0aCA9IHByZXYoZmlsZSk7XG4gICAgICAgIGlmIChwcmV2UGF0aCkge1xuICAgICAgICAgIGxldCBtYXAgPSB0aGlzLmxvYWRGaWxlKHByZXZQYXRoKTtcbiAgICAgICAgICBpZiAoIW1hcCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlVuYWJsZSB0byBsb2FkIHByZXZpb3VzIHNvdXJjZSBtYXA6IFwiICsgcHJldlBhdGgudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwcmV2IGluc3RhbmNlb2YgU291cmNlTWFwQ29uc3VtZXIkMikge1xuICAgICAgICByZXR1cm4gU291cmNlTWFwR2VuZXJhdG9yJDIuZnJvbVNvdXJjZU1hcChwcmV2KS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2IGluc3RhbmNlb2YgU291cmNlTWFwR2VuZXJhdG9yJDIpIHtcbiAgICAgICAgcmV0dXJuIHByZXYudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc01hcChwcmV2KSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJldik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJVbnN1cHBvcnRlZCBwcmV2aW91cyBzb3VyY2UgbWFwIGZvcm1hdDogXCIgKyBwcmV2LnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5saW5lKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvZGVJbmxpbmUodGhpcy5hbm5vdGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5ub3RhdGlvbikge1xuICAgICAgbGV0IG1hcCA9IHRoaXMuYW5ub3RhdGlvbjtcbiAgICAgIGlmIChmaWxlKSBtYXAgPSBqb2luKGRpcm5hbWUkMShmaWxlKSwgbWFwKTtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRGaWxlKG1hcCk7XG4gICAgfVxuICB9XG4gIHN0YXJ0V2l0aChzdHJpbmcsIHN0YXJ0KSB7XG4gICAgaWYgKCFzdHJpbmcpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cigwLCBzdGFydC5sZW5ndGgpID09PSBzdGFydDtcbiAgfVxuICB3aXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gISEodGhpcy5jb25zdW1lcigpLnNvdXJjZXNDb250ZW50ICYmIHRoaXMuY29uc3VtZXIoKS5zb3VyY2VzQ29udGVudC5sZW5ndGggPiAwKTtcbiAgfVxufTtcbnZhciBwcmV2aW91c01hcCA9IFByZXZpb3VzTWFwJDI7XG5QcmV2aW91c01hcCQyLmRlZmF1bHQgPSBQcmV2aW91c01hcCQyO1xubGV0IHsgU291cmNlTWFwQ29uc3VtZXI6IFNvdXJjZU1hcENvbnN1bWVyJDEsIFNvdXJjZU1hcEdlbmVyYXRvcjogU291cmNlTWFwR2VuZXJhdG9yJDEgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBmaWxlVVJMVG9QYXRoLCBwYXRoVG9GaWxlVVJMOiBwYXRoVG9GaWxlVVJMJDEgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBpc0Fic29sdXRlLCByZXNvbHZlOiByZXNvbHZlJDEgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBuYW5vaWQgfSA9IG5vblNlY3VyZTtcbmxldCB0ZXJtaW5hbEhpZ2hsaWdodCA9IHJlcXVpcmUkJDI7XG5sZXQgQ3NzU3ludGF4RXJyb3IkMSA9IGNzc1N5bnRheEVycm9yO1xubGV0IFByZXZpb3VzTWFwJDEgPSBwcmV2aW91c01hcDtcbmxldCBmcm9tT2Zmc2V0Q2FjaGUgPSBTeW1ib2woXCJmcm9tT2Zmc2V0Q2FjaGVcIik7XG5sZXQgc291cmNlTWFwQXZhaWxhYmxlJDEgPSBCb29sZWFuKFNvdXJjZU1hcENvbnN1bWVyJDEgJiYgU291cmNlTWFwR2VuZXJhdG9yJDEpO1xubGV0IHBhdGhBdmFpbGFibGUkMSA9IEJvb2xlYW4ocmVzb2x2ZSQxICYmIGlzQWJzb2x1dGUpO1xubGV0IElucHV0JDQgPSBjbGFzcyBJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGNzcywgb3B0cyA9IHt9KSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCB8fCB0eXBlb2YgY3NzID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBjc3MgPT09IFwib2JqZWN0XCIgJiYgIWNzcy50b1N0cmluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQb3N0Q1NTIHJlY2VpdmVkICR7Y3NzfSBpbnN0ZWFkIG9mIENTUyBzdHJpbmdgKTtcbiAgICB9XG4gICAgdGhpcy5jc3MgPSBjc3MudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5jc3NbMF0gPT09IFwiXFx1RkVGRlwiIHx8IHRoaXMuY3NzWzBdID09PSBcIlxcdUZGRkVcIikge1xuICAgICAgdGhpcy5oYXNCT00gPSB0cnVlO1xuICAgICAgdGhpcy5jc3MgPSB0aGlzLmNzcy5zbGljZSgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYXNCT00gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9wdHMuZnJvbSkge1xuICAgICAgaWYgKCFwYXRoQXZhaWxhYmxlJDEgfHwgL15cXHcrOlxcL1xcLy8udGVzdChvcHRzLmZyb20pIHx8IGlzQWJzb2x1dGUob3B0cy5mcm9tKSkge1xuICAgICAgICB0aGlzLmZpbGUgPSBvcHRzLmZyb207XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbGUgPSByZXNvbHZlJDEob3B0cy5mcm9tKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGhBdmFpbGFibGUkMSAmJiBzb3VyY2VNYXBBdmFpbGFibGUkMSkge1xuICAgICAgbGV0IG1hcCA9IG5ldyBQcmV2aW91c01hcCQxKHRoaXMuY3NzLCBvcHRzKTtcbiAgICAgIGlmIChtYXAudGV4dCkge1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgbGV0IGZpbGUgPSBtYXAuY29uc3VtZXIoKS5maWxlO1xuICAgICAgICBpZiAoIXRoaXMuZmlsZSAmJiBmaWxlKSB0aGlzLmZpbGUgPSB0aGlzLm1hcFJlc29sdmUoZmlsZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICB0aGlzLmlkID0gXCI8aW5wdXQgY3NzIFwiICsgbmFub2lkKDYpICsgXCI+XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcCkgdGhpcy5tYXAuZmlsZSA9IHRoaXMuZnJvbTtcbiAgfVxuICBlcnJvcihtZXNzYWdlLCBsaW5lLCBjb2x1bW4sIG9wdHMgPSB7fSkge1xuICAgIGxldCByZXN1bHQyLCBlbmRMaW5lLCBlbmRDb2x1bW47XG4gICAgaWYgKGxpbmUgJiYgdHlwZW9mIGxpbmUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGxldCBzdGFydCA9IGxpbmU7XG4gICAgICBsZXQgZW5kID0gY29sdW1uO1xuICAgICAgaWYgKHR5cGVvZiBzdGFydC5vZmZzZXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZnJvbU9mZnNldChzdGFydC5vZmZzZXQpO1xuICAgICAgICBsaW5lID0gcG9zLmxpbmU7XG4gICAgICAgIGNvbHVtbiA9IHBvcy5jb2w7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lID0gc3RhcnQubGluZTtcbiAgICAgICAgY29sdW1uID0gc3RhcnQuY29sdW1uO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlbmQub2Zmc2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmZyb21PZmZzZXQoZW5kLm9mZnNldCk7XG4gICAgICAgIGVuZExpbmUgPSBwb3MubGluZTtcbiAgICAgICAgZW5kQ29sdW1uID0gcG9zLmNvbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZExpbmUgPSBlbmQubGluZTtcbiAgICAgICAgZW5kQ29sdW1uID0gZW5kLmNvbHVtbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFjb2x1bW4pIHtcbiAgICAgIGxldCBwb3MgPSB0aGlzLmZyb21PZmZzZXQobGluZSk7XG4gICAgICBsaW5lID0gcG9zLmxpbmU7XG4gICAgICBjb2x1bW4gPSBwb3MuY29sO1xuICAgIH1cbiAgICBsZXQgb3JpZ2luID0gdGhpcy5vcmlnaW4obGluZSwgY29sdW1uLCBlbmRMaW5lLCBlbmRDb2x1bW4pO1xuICAgIGlmIChvcmlnaW4pIHtcbiAgICAgIHJlc3VsdDIgPSBuZXcgQ3NzU3ludGF4RXJyb3IkMShcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgb3JpZ2luLmVuZExpbmUgPT09IHZvaWQgMCA/IG9yaWdpbi5saW5lIDogeyBjb2x1bW46IG9yaWdpbi5jb2x1bW4sIGxpbmU6IG9yaWdpbi5saW5lIH0sXG4gICAgICAgIG9yaWdpbi5lbmRMaW5lID09PSB2b2lkIDAgPyBvcmlnaW4uY29sdW1uIDogeyBjb2x1bW46IG9yaWdpbi5lbmRDb2x1bW4sIGxpbmU6IG9yaWdpbi5lbmRMaW5lIH0sXG4gICAgICAgIG9yaWdpbi5zb3VyY2UsXG4gICAgICAgIG9yaWdpbi5maWxlLFxuICAgICAgICBvcHRzLnBsdWdpblxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0MiA9IG5ldyBDc3NTeW50YXhFcnJvciQxKFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBlbmRMaW5lID09PSB2b2lkIDAgPyBsaW5lIDogeyBjb2x1bW4sIGxpbmUgfSxcbiAgICAgICAgZW5kTGluZSA9PT0gdm9pZCAwID8gY29sdW1uIDogeyBjb2x1bW46IGVuZENvbHVtbiwgbGluZTogZW5kTGluZSB9LFxuICAgICAgICB0aGlzLmNzcyxcbiAgICAgICAgdGhpcy5maWxlLFxuICAgICAgICBvcHRzLnBsdWdpblxuICAgICAgKTtcbiAgICB9XG4gICAgcmVzdWx0Mi5pbnB1dCA9IHsgY29sdW1uLCBlbmRDb2x1bW4sIGVuZExpbmUsIGxpbmUsIHNvdXJjZTogdGhpcy5jc3MgfTtcbiAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICBpZiAocGF0aFRvRmlsZVVSTCQxKSB7XG4gICAgICAgIHJlc3VsdDIuaW5wdXQudXJsID0gcGF0aFRvRmlsZVVSTCQxKHRoaXMuZmlsZSkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdDIuaW5wdXQuZmlsZSA9IHRoaXMuZmlsZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgZnJvbU9mZnNldChvZmZzZXQpIHtcbiAgICBsZXQgbGFzdExpbmUsIGxpbmVUb0luZGV4O1xuICAgIGlmICghdGhpc1tmcm9tT2Zmc2V0Q2FjaGVdKSB7XG4gICAgICBsZXQgbGluZXMgPSB0aGlzLmNzcy5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxpbmVUb0luZGV4ID0gbmV3IEFycmF5KGxpbmVzLmxlbmd0aCk7XG4gICAgICBsZXQgcHJldkluZGV4ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxpbmVUb0luZGV4W2ldID0gcHJldkluZGV4O1xuICAgICAgICBwcmV2SW5kZXggKz0gbGluZXNbaV0ubGVuZ3RoICsgMTtcbiAgICAgIH1cbiAgICAgIHRoaXNbZnJvbU9mZnNldENhY2hlXSA9IGxpbmVUb0luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lVG9JbmRleCA9IHRoaXNbZnJvbU9mZnNldENhY2hlXTtcbiAgICB9XG4gICAgbGFzdExpbmUgPSBsaW5lVG9JbmRleFtsaW5lVG9JbmRleC5sZW5ndGggLSAxXTtcbiAgICBsZXQgbWluID0gMDtcbiAgICBpZiAob2Zmc2V0ID49IGxhc3RMaW5lKSB7XG4gICAgICBtaW4gPSBsaW5lVG9JbmRleC5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbWF4ID0gbGluZVRvSW5kZXgubGVuZ3RoIC0gMjtcbiAgICAgIGxldCBtaWQ7XG4gICAgICB3aGlsZSAobWluIDwgbWF4KSB7XG4gICAgICAgIG1pZCA9IG1pbiArIChtYXggLSBtaW4gPj4gMSk7XG4gICAgICAgIGlmIChvZmZzZXQgPCBsaW5lVG9JbmRleFttaWRdKSB7XG4gICAgICAgICAgbWF4ID0gbWlkIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPj0gbGluZVRvSW5kZXhbbWlkICsgMV0pIHtcbiAgICAgICAgICBtaW4gPSBtaWQgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pbiA9IG1pZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY29sOiBvZmZzZXQgLSBsaW5lVG9JbmRleFttaW5dICsgMSxcbiAgICAgIGxpbmU6IG1pbiArIDFcbiAgICB9O1xuICB9XG4gIG1hcFJlc29sdmUoZmlsZSkge1xuICAgIGlmICgvXlxcdys6XFwvXFwvLy50ZXN0KGZpbGUpKSB7XG4gICAgICByZXR1cm4gZmlsZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmUkMSh0aGlzLm1hcC5jb25zdW1lcigpLnNvdXJjZVJvb3QgfHwgdGhpcy5tYXAucm9vdCB8fCBcIi5cIiwgZmlsZSk7XG4gIH1cbiAgb3JpZ2luKGxpbmUsIGNvbHVtbiwgZW5kTGluZSwgZW5kQ29sdW1uKSB7XG4gICAgaWYgKCF0aGlzLm1hcCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBjb25zdW1lciA9IHRoaXMubWFwLmNvbnN1bWVyKCk7XG4gICAgbGV0IGZyb20gPSBjb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHsgY29sdW1uLCBsaW5lIH0pO1xuICAgIGlmICghZnJvbS5zb3VyY2UpIHJldHVybiBmYWxzZTtcbiAgICBsZXQgdG87XG4gICAgaWYgKHR5cGVvZiBlbmRMaW5lID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0byA9IGNvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3IoeyBjb2x1bW46IGVuZENvbHVtbiwgbGluZTogZW5kTGluZSB9KTtcbiAgICB9XG4gICAgbGV0IGZyb21Vcmw7XG4gICAgaWYgKGlzQWJzb2x1dGUoZnJvbS5zb3VyY2UpKSB7XG4gICAgICBmcm9tVXJsID0gcGF0aFRvRmlsZVVSTCQxKGZyb20uc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbVVybCA9IG5ldyBVUkwoXG4gICAgICAgIGZyb20uc291cmNlLFxuICAgICAgICB0aGlzLm1hcC5jb25zdW1lcigpLnNvdXJjZVJvb3QgfHwgcGF0aFRvRmlsZVVSTCQxKHRoaXMubWFwLm1hcEZpbGUpXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0MiA9IHtcbiAgICAgIGNvbHVtbjogZnJvbS5jb2x1bW4sXG4gICAgICBlbmRDb2x1bW46IHRvICYmIHRvLmNvbHVtbixcbiAgICAgIGVuZExpbmU6IHRvICYmIHRvLmxpbmUsXG4gICAgICBsaW5lOiBmcm9tLmxpbmUsXG4gICAgICB1cmw6IGZyb21VcmwudG9TdHJpbmcoKVxuICAgIH07XG4gICAgaWYgKGZyb21VcmwucHJvdG9jb2wgPT09IFwiZmlsZTpcIikge1xuICAgICAgaWYgKGZpbGVVUkxUb1BhdGgpIHtcbiAgICAgICAgcmVzdWx0Mi5maWxlID0gZmlsZVVSTFRvUGF0aChmcm9tVXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgZmlsZTogcHJvdG9jb2wgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIFBvc3RDU1MgYnVpbGRgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNvdXJjZSA9IGNvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3IoZnJvbS5zb3VyY2UpO1xuICAgIGlmIChzb3VyY2UpIHJlc3VsdDIuc291cmNlID0gc291cmNlO1xuICAgIHJldHVybiByZXN1bHQyO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IHt9O1xuICAgIGZvciAobGV0IG5hbWUgb2YgW1wiaGFzQk9NXCIsIFwiY3NzXCIsIFwiZmlsZVwiLCBcImlkXCJdKSB7XG4gICAgICBpZiAodGhpc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgIGpzb25bbmFtZV0gPSB0aGlzW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5tYXApIHtcbiAgICAgIGpzb24ubWFwID0gX19zcHJlYWRWYWx1ZXMoe30sIHRoaXMubWFwKTtcbiAgICAgIGlmIChqc29uLm1hcC5jb25zdW1lckNhY2hlKSB7XG4gICAgICAgIGpzb24ubWFwLmNvbnN1bWVyQ2FjaGUgPSB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBqc29uO1xuICB9XG4gIGdldCBmcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUgfHwgdGhpcy5pZDtcbiAgfVxufTtcbnZhciBpbnB1dCA9IElucHV0JDQ7XG5JbnB1dCQ0LmRlZmF1bHQgPSBJbnB1dCQ0O1xuaWYgKHRlcm1pbmFsSGlnaGxpZ2h0ICYmIHRlcm1pbmFsSGlnaGxpZ2h0LnJlZ2lzdGVySW5wdXQpIHtcbiAgdGVybWluYWxIaWdobGlnaHQucmVnaXN0ZXJJbnB1dChJbnB1dCQ0KTtcbn1cbmxldCB7IFNvdXJjZU1hcENvbnN1bWVyLCBTb3VyY2VNYXBHZW5lcmF0b3IgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBkaXJuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSwgc2VwIH0gPSByZXF1aXJlJCQyO1xubGV0IHsgcGF0aFRvRmlsZVVSTCB9ID0gcmVxdWlyZSQkMjtcbmxldCBJbnB1dCQzID0gaW5wdXQ7XG5sZXQgc291cmNlTWFwQXZhaWxhYmxlID0gQm9vbGVhbihTb3VyY2VNYXBDb25zdW1lciAmJiBTb3VyY2VNYXBHZW5lcmF0b3IpO1xubGV0IHBhdGhBdmFpbGFibGUgPSBCb29sZWFuKGRpcm5hbWUgJiYgcmVzb2x2ZSAmJiByZWxhdGl2ZSAmJiBzZXApO1xubGV0IE1hcEdlbmVyYXRvciQyID0gY2xhc3MgTWFwR2VuZXJhdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5naWZ5Miwgcm9vdDIsIG9wdHMsIGNzc1N0cmluZykge1xuICAgIHRoaXMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5MjtcbiAgICB0aGlzLm1hcE9wdHMgPSBvcHRzLm1hcCB8fCB7fTtcbiAgICB0aGlzLnJvb3QgPSByb290MjtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMuY3NzID0gY3NzU3RyaW5nO1xuICAgIHRoaXMub3JpZ2luYWxDU1MgPSBjc3NTdHJpbmc7XG4gICAgdGhpcy51c2VzRmlsZVVybHMgPSAhdGhpcy5tYXBPcHRzLmZyb20gJiYgdGhpcy5tYXBPcHRzLmFic29sdXRlO1xuICAgIHRoaXMubWVtb2l6ZWRGaWxlVVJMcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgdGhpcy5tZW1vaXplZFBhdGhzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICB0aGlzLm1lbW9pemVkVVJMcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIH1cbiAgYWRkQW5ub3RhdGlvbigpIHtcbiAgICBsZXQgY29udGVudDtcbiAgICBpZiAodGhpcy5pc0lubGluZSgpKSB7XG4gICAgICBjb250ZW50ID0gXCJkYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgdGhpcy50b0Jhc2U2NCh0aGlzLm1hcC50b1N0cmluZygpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29udGVudCA9IHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbih0aGlzLm9wdHMudG8sIHRoaXMucm9vdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLm91dHB1dEZpbGUoKSArIFwiLm1hcFwiO1xuICAgIH1cbiAgICBsZXQgZW9sID0gXCJcXG5cIjtcbiAgICBpZiAodGhpcy5jc3MuaW5jbHVkZXMoXCJcXHJcXG5cIikpIGVvbCA9IFwiXFxyXFxuXCI7XG4gICAgdGhpcy5jc3MgKz0gZW9sICsgXCIvKiMgc291cmNlTWFwcGluZ1VSTD1cIiArIGNvbnRlbnQgKyBcIiAqL1wiO1xuICB9XG4gIGFwcGx5UHJldk1hcHMoKSB7XG4gICAgZm9yIChsZXQgcHJldiBvZiB0aGlzLnByZXZpb3VzKCkpIHtcbiAgICAgIGxldCBmcm9tID0gdGhpcy50b1VybCh0aGlzLnBhdGgocHJldi5maWxlKSk7XG4gICAgICBsZXQgcm9vdDIgPSBwcmV2LnJvb3QgfHwgZGlybmFtZShwcmV2LmZpbGUpO1xuICAgICAgbGV0IG1hcDtcbiAgICAgIGlmICh0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIG1hcCA9IG5ldyBTb3VyY2VNYXBDb25zdW1lcihwcmV2LnRleHQpO1xuICAgICAgICBpZiAobWFwLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICAgICAgbWFwLnNvdXJjZXNDb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFwID0gcHJldi5jb25zdW1lcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5tYXAuYXBwbHlTb3VyY2VNYXAobWFwLCBmcm9tLCB0aGlzLnRvVXJsKHRoaXMucGF0aChyb290MikpKTtcbiAgICB9XG4gIH1cbiAgY2xlYXJBbm5vdGF0aW9uKCkge1xuICAgIGlmICh0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICBsZXQgbm9kZTI7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5yb290Lm5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIG5vZGUyID0gdGhpcy5yb290Lm5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZTIudHlwZSAhPT0gXCJjb21tZW50XCIpIGNvbnRpbnVlO1xuICAgICAgICBpZiAobm9kZTIudGV4dC5pbmRleE9mKFwiIyBzb3VyY2VNYXBwaW5nVVJMPVwiKSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucm9vdC5yZW1vdmVDaGlsZChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jc3MpIHtcbiAgICAgIHRoaXMuY3NzID0gdGhpcy5jc3MucmVwbGFjZSgvXFxuKj9cXC9cXCojW1xcU1xcc10qP1xcKlxcLyQvZ20sIFwiXCIpO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZSgpIHtcbiAgICB0aGlzLmNsZWFyQW5ub3RhdGlvbigpO1xuICAgIGlmIChwYXRoQXZhaWxhYmxlICYmIHNvdXJjZU1hcEF2YWlsYWJsZSAmJiB0aGlzLmlzTWFwKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlTWFwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXN1bHQyID0gXCJcIjtcbiAgICAgIHRoaXMuc3RyaW5naWZ5KHRoaXMucm9vdCwgKGkpID0+IHtcbiAgICAgICAgcmVzdWx0MiArPSBpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3Jlc3VsdDJdO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZU1hcCgpIHtcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICB0aGlzLmdlbmVyYXRlU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZXZpb3VzKCkubGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgcHJldiA9IHRoaXMucHJldmlvdXMoKVswXS5jb25zdW1lcigpO1xuICAgICAgcHJldi5maWxlID0gdGhpcy5vdXRwdXRGaWxlKCk7XG4gICAgICB0aGlzLm1hcCA9IFNvdXJjZU1hcEdlbmVyYXRvci5mcm9tU291cmNlTWFwKHByZXYsIHtcbiAgICAgICAgaWdub3JlSW52YWxpZE1hcHBpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcCA9IG5ldyBTb3VyY2VNYXBHZW5lcmF0b3Ioe1xuICAgICAgICBmaWxlOiB0aGlzLm91dHB1dEZpbGUoKSxcbiAgICAgICAgaWdub3JlSW52YWxpZE1hcHBpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyh7XG4gICAgICAgIGdlbmVyYXRlZDogeyBjb2x1bW46IDAsIGxpbmU6IDEgfSxcbiAgICAgICAgb3JpZ2luYWw6IHsgY29sdW1uOiAwLCBsaW5lOiAxIH0sXG4gICAgICAgIHNvdXJjZTogdGhpcy5vcHRzLmZyb20gPyB0aGlzLnRvVXJsKHRoaXMucGF0aCh0aGlzLm9wdHMuZnJvbSkpIDogXCI8bm8gc291cmNlPlwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNTb3VyY2VzQ29udGVudCgpKSB0aGlzLnNldFNvdXJjZXNDb250ZW50KCk7XG4gICAgaWYgKHRoaXMucm9vdCAmJiB0aGlzLnByZXZpb3VzKCkubGVuZ3RoID4gMCkgdGhpcy5hcHBseVByZXZNYXBzKCk7XG4gICAgaWYgKHRoaXMuaXNBbm5vdGF0aW9uKCkpIHRoaXMuYWRkQW5ub3RhdGlvbigpO1xuICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcbiAgICAgIHJldHVybiBbdGhpcy5jc3NdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3RoaXMuY3NzLCB0aGlzLm1hcF07XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlU3RyaW5nKCkge1xuICAgIHRoaXMuY3NzID0gXCJcIjtcbiAgICB0aGlzLm1hcCA9IG5ldyBTb3VyY2VNYXBHZW5lcmF0b3Ioe1xuICAgICAgZmlsZTogdGhpcy5vdXRwdXRGaWxlKCksXG4gICAgICBpZ25vcmVJbnZhbGlkTWFwcGluZzogdHJ1ZVxuICAgIH0pO1xuICAgIGxldCBsaW5lID0gMTtcbiAgICBsZXQgY29sdW1uID0gMTtcbiAgICBsZXQgbm9Tb3VyY2UgPSBcIjxubyBzb3VyY2U+XCI7XG4gICAgbGV0IG1hcHBpbmcgPSB7XG4gICAgICBnZW5lcmF0ZWQ6IHsgY29sdW1uOiAwLCBsaW5lOiAwIH0sXG4gICAgICBvcmlnaW5hbDogeyBjb2x1bW46IDAsIGxpbmU6IDAgfSxcbiAgICAgIHNvdXJjZTogXCJcIlxuICAgIH07XG4gICAgbGV0IGxpbmVzLCBsYXN0O1xuICAgIHRoaXMuc3RyaW5naWZ5KHRoaXMucm9vdCwgKHN0ciwgbm9kZTIsIHR5cGUpID0+IHtcbiAgICAgIHRoaXMuY3NzICs9IHN0cjtcbiAgICAgIGlmIChub2RlMiAmJiB0eXBlICE9PSBcImVuZFwiKSB7XG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmxpbmUgPSBsaW5lO1xuICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5jb2x1bW4gPSBjb2x1bW4gLSAxO1xuICAgICAgICBpZiAobm9kZTIuc291cmNlICYmIG5vZGUyLnNvdXJjZS5zdGFydCkge1xuICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdGhpcy5zb3VyY2VQYXRoKG5vZGUyKTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSBub2RlMi5zb3VyY2Uuc3RhcnQubGluZTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmNvbHVtbiA9IG5vZGUyLnNvdXJjZS5zdGFydC5jb2x1bW4gLSAxO1xuICAgICAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcobWFwcGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBub1NvdXJjZTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSAxO1xuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwuY29sdW1uID0gMDtcbiAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKG1hcHBpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaW5lcyA9IHN0ci5tYXRjaCgvXFxuL2cpO1xuICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgIGxpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICBsYXN0ID0gc3RyLmxhc3RJbmRleE9mKFwiXFxuXCIpO1xuICAgICAgICBjb2x1bW4gPSBzdHIubGVuZ3RoIC0gbGFzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiArPSBzdHIubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUyICYmIHR5cGUgIT09IFwic3RhcnRcIikge1xuICAgICAgICBsZXQgcCA9IG5vZGUyLnBhcmVudCB8fCB7IHJhd3M6IHt9IH07XG4gICAgICAgIGxldCBjaGlsZGxlc3MgPSBub2RlMi50eXBlID09PSBcImRlY2xcIiB8fCBub2RlMi50eXBlID09PSBcImF0cnVsZVwiICYmICFub2RlMi5ub2RlcztcbiAgICAgICAgaWYgKCFjaGlsZGxlc3MgfHwgbm9kZTIgIT09IHAubGFzdCB8fCBwLnJhd3Muc2VtaWNvbG9uKSB7XG4gICAgICAgICAgaWYgKG5vZGUyLnNvdXJjZSAmJiBub2RlMi5zb3VyY2UuZW5kKSB7XG4gICAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHRoaXMuc291cmNlUGF0aChub2RlMik7XG4gICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSBub2RlMi5zb3VyY2UuZW5kLmxpbmU7XG4gICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmNvbHVtbiA9IG5vZGUyLnNvdXJjZS5lbmQuY29sdW1uIC0gMTtcbiAgICAgICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmxpbmUgPSBsaW5lO1xuICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQuY29sdW1uID0gY29sdW1uIC0gMjtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcobWFwcGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gbm9Tb3VyY2U7XG4gICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSAxO1xuICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5jb2x1bW4gPSAwO1xuICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQubGluZSA9IGxpbmU7XG4gICAgICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5jb2x1bW4gPSBjb2x1bW4gLSAxO1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyhtYXBwaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpc0Fubm90YXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLmFubm90YXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkuc29tZSgoaSkgPT4gaS5hbm5vdGF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNJbmxpbmUoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuaW5saW5lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBPcHRzLmlubGluZTtcbiAgICB9XG4gICAgbGV0IGFubm90YXRpb24gPSB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbjtcbiAgICBpZiAodHlwZW9mIGFubm90YXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgYW5ub3RhdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmV2aW91cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5zb21lKChpKSA9PiBpLmlubGluZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlzTWFwKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRzLm1hcCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuICEhdGhpcy5vcHRzLm1hcDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5sZW5ndGggPiAwO1xuICB9XG4gIGlzU291cmNlc0NvbnRlbnQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnByZXZpb3VzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpLnNvbWUoKGkpID0+IGkud2l0aENvbnRlbnQoKSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG91dHB1dEZpbGUoKSB7XG4gICAgaWYgKHRoaXMub3B0cy50bykge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aCh0aGlzLm9wdHMudG8pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLmZyb20pIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdGgodGhpcy5vcHRzLmZyb20pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJ0by5jc3NcIjtcbiAgICB9XG4gIH1cbiAgcGF0aChmaWxlKSB7XG4gICAgaWYgKHRoaXMubWFwT3B0cy5hYnNvbHV0ZSkgcmV0dXJuIGZpbGU7XG4gICAgaWYgKGZpbGUuY2hhckNvZGVBdCgwKSA9PT0gNjApIHJldHVybiBmaWxlO1xuICAgIGlmICgvXlxcdys6XFwvXFwvLy50ZXN0KGZpbGUpKSByZXR1cm4gZmlsZTtcbiAgICBsZXQgY2FjaGVkID0gdGhpcy5tZW1vaXplZFBhdGhzLmdldChmaWxlKTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuICAgIGxldCBmcm9tID0gdGhpcy5vcHRzLnRvID8gZGlybmFtZSh0aGlzLm9wdHMudG8pIDogXCIuXCI7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZnJvbSA9IGRpcm5hbWUocmVzb2x2ZShmcm9tLCB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbikpO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IHJlbGF0aXZlKGZyb20sIGZpbGUpO1xuICAgIHRoaXMubWVtb2l6ZWRQYXRocy5zZXQoZmlsZSwgcGF0aCk7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbiAgcHJldmlvdXMoKSB7XG4gICAgaWYgKCF0aGlzLnByZXZpb3VzTWFwcykge1xuICAgICAgdGhpcy5wcmV2aW91c01hcHMgPSBbXTtcbiAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgdGhpcy5yb290LndhbGsoKG5vZGUyKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGUyLnNvdXJjZSAmJiBub2RlMi5zb3VyY2UuaW5wdXQubWFwKSB7XG4gICAgICAgICAgICBsZXQgbWFwID0gbm9kZTIuc291cmNlLmlucHV0Lm1hcDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcmV2aW91c01hcHMuaW5jbHVkZXMobWFwKSkge1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzTWFwcy5wdXNoKG1hcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbnB1dDIgPSBuZXcgSW5wdXQkMyh0aGlzLm9yaWdpbmFsQ1NTLCB0aGlzLm9wdHMpO1xuICAgICAgICBpZiAoaW5wdXQyLm1hcCkgdGhpcy5wcmV2aW91c01hcHMucHVzaChpbnB1dDIubWFwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNNYXBzO1xuICB9XG4gIHNldFNvdXJjZXNDb250ZW50KCkge1xuICAgIGxldCBhbHJlYWR5ID0ge307XG4gICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgdGhpcy5yb290LndhbGsoKG5vZGUyKSA9PiB7XG4gICAgICAgIGlmIChub2RlMi5zb3VyY2UpIHtcbiAgICAgICAgICBsZXQgZnJvbSA9IG5vZGUyLnNvdXJjZS5pbnB1dC5mcm9tO1xuICAgICAgICAgIGlmIChmcm9tICYmICFhbHJlYWR5W2Zyb21dKSB7XG4gICAgICAgICAgICBhbHJlYWR5W2Zyb21dID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBmcm9tVXJsID0gdGhpcy51c2VzRmlsZVVybHMgPyB0aGlzLnRvRmlsZVVybChmcm9tKSA6IHRoaXMudG9VcmwodGhpcy5wYXRoKGZyb20pKTtcbiAgICAgICAgICAgIHRoaXMubWFwLnNldFNvdXJjZUNvbnRlbnQoZnJvbVVybCwgbm9kZTIuc291cmNlLmlucHV0LmNzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3NzKSB7XG4gICAgICBsZXQgZnJvbSA9IHRoaXMub3B0cy5mcm9tID8gdGhpcy50b1VybCh0aGlzLnBhdGgodGhpcy5vcHRzLmZyb20pKSA6IFwiPG5vIHNvdXJjZT5cIjtcbiAgICAgIHRoaXMubWFwLnNldFNvdXJjZUNvbnRlbnQoZnJvbSwgdGhpcy5jc3MpO1xuICAgIH1cbiAgfVxuICBzb3VyY2VQYXRoKG5vZGUyKSB7XG4gICAgaWYgKHRoaXMubWFwT3B0cy5mcm9tKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1VybCh0aGlzLm1hcE9wdHMuZnJvbSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZXNGaWxlVXJscykge1xuICAgICAgcmV0dXJuIHRoaXMudG9GaWxlVXJsKG5vZGUyLnNvdXJjZS5pbnB1dC5mcm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudG9VcmwodGhpcy5wYXRoKG5vZGUyLnNvdXJjZS5pbnB1dC5mcm9tKSk7XG4gICAgfVxuICB9XG4gIHRvQmFzZTY0KHN0cikge1xuICAgIGlmIChCdWZmZXIpIHtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTtcbiAgICB9XG4gIH1cbiAgdG9GaWxlVXJsKHBhdGgpIHtcbiAgICBsZXQgY2FjaGVkID0gdGhpcy5tZW1vaXplZEZpbGVVUkxzLmdldChwYXRoKTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuICAgIGlmIChwYXRoVG9GaWxlVVJMKSB7XG4gICAgICBsZXQgZmlsZVVSTCA9IHBhdGhUb0ZpbGVVUkwocGF0aCkudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMubWVtb2l6ZWRGaWxlVVJMcy5zZXQocGF0aCwgZmlsZVVSTCk7XG4gICAgICByZXR1cm4gZmlsZVVSTDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImBtYXAuYWJzb2x1dGVgIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgUG9zdENTUyBidWlsZFwiXG4gICAgICApO1xuICAgIH1cbiAgfVxuICB0b1VybChwYXRoKSB7XG4gICAgbGV0IGNhY2hlZCA9IHRoaXMubWVtb2l6ZWRVUkxzLmdldChwYXRoKTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuICAgIGlmIChzZXAgPT09IFwiXFxcXFwiKSB7XG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcbiAgICB9XG4gICAgbGV0IHVybCA9IGVuY29kZVVSSShwYXRoKS5yZXBsYWNlKC9bIz9dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG4gICAgdGhpcy5tZW1vaXplZFVSTHMuc2V0KHBhdGgsIHVybCk7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxufTtcbnZhciBtYXBHZW5lcmF0b3IgPSBNYXBHZW5lcmF0b3IkMjtcbmxldCBOb2RlJDIgPSBub2RlO1xubGV0IENvbW1lbnQkNCA9IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyBOb2RlJDIge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIHN1cGVyKGRlZmF1bHRzKTtcbiAgICB0aGlzLnR5cGUgPSBcImNvbW1lbnRcIjtcbiAgfVxufTtcbnZhciBjb21tZW50ID0gQ29tbWVudCQ0O1xuQ29tbWVudCQ0LmRlZmF1bHQgPSBDb21tZW50JDQ7XG5sZXQgeyBpc0NsZWFuOiBpc0NsZWFuJDEsIG15OiBteSQxIH0gPSBzeW1ib2xzO1xubGV0IERlY2xhcmF0aW9uJDMgPSBkZWNsYXJhdGlvbjtcbmxldCBDb21tZW50JDMgPSBjb21tZW50O1xubGV0IE5vZGUkMSA9IG5vZGU7XG5sZXQgcGFyc2UkNDtcbmxldCBSdWxlJDQ7XG5sZXQgQXRSdWxlJDQ7XG5sZXQgUm9vdCQ2O1xuZnVuY3Rpb24gY2xlYW5Tb3VyY2Uobm9kZXMpIHtcbiAgcmV0dXJuIG5vZGVzLm1hcCgoaSkgPT4ge1xuICAgIGlmIChpLm5vZGVzKSBpLm5vZGVzID0gY2xlYW5Tb3VyY2UoaS5ub2Rlcyk7XG4gICAgZGVsZXRlIGkuc291cmNlO1xuICAgIHJldHVybiBpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG1hcmtEaXJ0eVVwKG5vZGUyKSB7XG4gIG5vZGUyW2lzQ2xlYW4kMV0gPSBmYWxzZTtcbiAgaWYgKG5vZGUyLnByb3h5T2Yubm9kZXMpIHtcbiAgICBmb3IgKGxldCBpIG9mIG5vZGUyLnByb3h5T2Yubm9kZXMpIHtcbiAgICAgIG1hcmtEaXJ0eVVwKGkpO1xuICAgIH1cbiAgfVxufVxubGV0IENvbnRhaW5lciQ3ID0gY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgTm9kZSQxIHtcbiAgYXBwZW5kKC4uLmNoaWxkcmVuKSB7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGNoaWxkLCB0aGlzLmxhc3QpO1xuICAgICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHRoaXMucHJveHlPZi5ub2Rlcy5wdXNoKG5vZGUyKTtcbiAgICB9XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjbGVhblJhd3Moa2VlcEJldHdlZW4pIHtcbiAgICBzdXBlci5jbGVhblJhd3Moa2VlcEJldHdlZW4pO1xuICAgIGlmICh0aGlzLm5vZGVzKSB7XG4gICAgICBmb3IgKGxldCBub2RlMiBvZiB0aGlzLm5vZGVzKSBub2RlMi5jbGVhblJhd3Moa2VlcEJldHdlZW4pO1xuICAgIH1cbiAgfVxuICBlYWNoKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5T2Yubm9kZXMpIHJldHVybiB2b2lkIDA7XG4gICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5nZXRJdGVyYXRvcigpO1xuICAgIGxldCBpbmRleDIsIHJlc3VsdDI7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXhlc1tpdGVyYXRvcl0gPCB0aGlzLnByb3h5T2Yubm9kZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleDIgPSB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdO1xuICAgICAgcmVzdWx0MiA9IGNhbGxiYWNrKHRoaXMucHJveHlPZi5ub2Rlc1tpbmRleDJdLCBpbmRleDIpO1xuICAgICAgaWYgKHJlc3VsdDIgPT09IGZhbHNlKSBicmVhaztcbiAgICAgIHRoaXMuaW5kZXhlc1tpdGVyYXRvcl0gKz0gMTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuaW5kZXhlc1tpdGVyYXRvcl07XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgZXZlcnkoY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMuZXZlcnkoY29uZGl0aW9uKTtcbiAgfVxuICBnZXRJdGVyYXRvcigpIHtcbiAgICBpZiAoIXRoaXMubGFzdEVhY2gpIHRoaXMubGFzdEVhY2ggPSAwO1xuICAgIGlmICghdGhpcy5pbmRleGVzKSB0aGlzLmluZGV4ZXMgPSB7fTtcbiAgICB0aGlzLmxhc3RFYWNoICs9IDE7XG4gICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5sYXN0RWFjaDtcbiAgICB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdID0gMDtcbiAgICByZXR1cm4gaXRlcmF0b3I7XG4gIH1cbiAgZ2V0UHJveHlQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldChub2RlMiwgcHJvcCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gXCJwcm94eU9mXCIpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTI7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5vZGUyW3Byb3BdKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUyW3Byb3BdO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiZWFjaFwiIHx8IHR5cGVvZiBwcm9wID09PSBcInN0cmluZ1wiICYmIHByb3Auc3RhcnRzV2l0aChcIndhbGtcIikpIHtcbiAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXShcbiAgICAgICAgICAgICAgLi4uYXJncy5tYXAoKGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChjaGlsZCwgaW5kZXgyKSA9PiBpKGNoaWxkLnRvUHJveHkoKSwgaW5kZXgyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiZXZlcnlcIiB8fCBwcm9wID09PSBcInNvbWVcIikge1xuICAgICAgICAgIHJldHVybiAoY2IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXShcbiAgICAgICAgICAgICAgKGNoaWxkLCAuLi5vdGhlcikgPT4gY2IoY2hpbGQudG9Qcm94eSgpLCAuLi5vdGhlcilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcInJvb3RcIikge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBub2RlMi5yb290KCkudG9Qcm94eSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwibm9kZXNcIikge1xuICAgICAgICAgIHJldHVybiBub2RlMi5ub2Rlcy5tYXAoKGkpID0+IGkudG9Qcm94eSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcImZpcnN0XCIgfHwgcHJvcCA9PT0gXCJsYXN0XCIpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTJbcHJvcF0udG9Qcm94eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldChub2RlMiwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5vZGUyW3Byb3BdID09PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIG5vZGUyW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIGlmIChwcm9wID09PSBcIm5hbWVcIiB8fCBwcm9wID09PSBcInBhcmFtc1wiIHx8IHByb3AgPT09IFwic2VsZWN0b3JcIikge1xuICAgICAgICAgIG5vZGUyLm1hcmtEaXJ0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgaW5kZXgoY2hpbGQpIHtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSBcIm51bWJlclwiKSByZXR1cm4gY2hpbGQ7XG4gICAgaWYgKGNoaWxkLnByb3h5T2YpIGNoaWxkID0gY2hpbGQucHJveHlPZjtcbiAgICByZXR1cm4gdGhpcy5wcm94eU9mLm5vZGVzLmluZGV4T2YoY2hpbGQpO1xuICB9XG4gIGluc2VydEFmdGVyKGV4aXN0LCBhZGQpIHtcbiAgICBsZXQgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpO1xuICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGFkZCwgdGhpcy5wcm94eU9mLm5vZGVzW2V4aXN0SW5kZXhdKS5yZXZlcnNlKCk7XG4gICAgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpO1xuICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB0aGlzLnByb3h5T2Yubm9kZXMuc3BsaWNlKGV4aXN0SW5kZXggKyAxLCAwLCBub2RlMik7XG4gICAgbGV0IGluZGV4MjtcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgIGluZGV4MiA9IHRoaXMuaW5kZXhlc1tpZF07XG4gICAgICBpZiAoZXhpc3RJbmRleCA8IGluZGV4Mikge1xuICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gaW5kZXgyICsgbm9kZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGluc2VydEJlZm9yZShleGlzdCwgYWRkKSB7XG4gICAgbGV0IGV4aXN0SW5kZXggPSB0aGlzLmluZGV4KGV4aXN0KTtcbiAgICBsZXQgdHlwZSA9IGV4aXN0SW5kZXggPT09IDAgPyBcInByZXBlbmRcIiA6IGZhbHNlO1xuICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGFkZCwgdGhpcy5wcm94eU9mLm5vZGVzW2V4aXN0SW5kZXhdLCB0eXBlKS5yZXZlcnNlKCk7XG4gICAgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpO1xuICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB0aGlzLnByb3h5T2Yubm9kZXMuc3BsaWNlKGV4aXN0SW5kZXgsIDAsIG5vZGUyKTtcbiAgICBsZXQgaW5kZXgyO1xuICAgIGZvciAobGV0IGlkIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgaW5kZXgyID0gdGhpcy5pbmRleGVzW2lkXTtcbiAgICAgIGlmIChleGlzdEluZGV4IDw9IGluZGV4Mikge1xuICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gaW5kZXgyICsgbm9kZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIG5vcm1hbGl6ZShub2Rlcywgc2FtcGxlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbm9kZXMgPSBjbGVhblNvdXJjZShwYXJzZSQ0KG5vZGVzKS5ub2Rlcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIG5vZGVzID0gW107XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuICAgICAgbm9kZXMgPSBub2Rlcy5zbGljZSgwKTtcbiAgICAgIGZvciAobGV0IGkgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKGkucGFyZW50KSBpLnBhcmVudC5yZW1vdmVDaGlsZChpLCBcImlnbm9yZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGVzLnR5cGUgPT09IFwicm9vdFwiICYmIHRoaXMudHlwZSAhPT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICBub2RlcyA9IG5vZGVzLm5vZGVzLnNsaWNlKDApO1xuICAgICAgZm9yIChsZXQgaSBvZiBub2Rlcykge1xuICAgICAgICBpZiAoaS5wYXJlbnQpIGkucGFyZW50LnJlbW92ZUNoaWxkKGksIFwiaWdub3JlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZXMudHlwZSkge1xuICAgICAgbm9kZXMgPSBbbm9kZXNdO1xuICAgIH0gZWxzZSBpZiAobm9kZXMucHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiBub2Rlcy52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBmaWVsZCBpcyBtaXNzZWQgaW4gbm9kZSBjcmVhdGlvblwiKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGVzLnZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5vZGVzLnZhbHVlID0gU3RyaW5nKG5vZGVzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIG5vZGVzID0gW25ldyBEZWNsYXJhdGlvbiQzKG5vZGVzKV07XG4gICAgfSBlbHNlIGlmIChub2Rlcy5zZWxlY3Rvcikge1xuICAgICAgbm9kZXMgPSBbbmV3IFJ1bGUkNChub2RlcyldO1xuICAgIH0gZWxzZSBpZiAobm9kZXMubmFtZSkge1xuICAgICAgbm9kZXMgPSBbbmV3IEF0UnVsZSQ0KG5vZGVzKV07XG4gICAgfSBlbHNlIGlmIChub2Rlcy50ZXh0KSB7XG4gICAgICBub2RlcyA9IFtuZXcgQ29tbWVudCQzKG5vZGVzKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gbm9kZSB0eXBlIGluIG5vZGUgY3JlYXRpb25cIik7XG4gICAgfVxuICAgIGxldCBwcm9jZXNzZWQgPSBub2Rlcy5tYXAoKGkpID0+IHtcbiAgICAgIGlmICghaVtteSQxXSkgQ29udGFpbmVyLnJlYnVpbGQoaSk7XG4gICAgICBpID0gaS5wcm94eU9mO1xuICAgICAgaWYgKGkucGFyZW50KSBpLnBhcmVudC5yZW1vdmVDaGlsZChpKTtcbiAgICAgIGlmIChpW2lzQ2xlYW4kMV0pIG1hcmtEaXJ0eVVwKGkpO1xuICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmIChzYW1wbGUgJiYgdHlwZW9mIHNhbXBsZS5yYXdzLmJlZm9yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGkucmF3cy5iZWZvcmUgPSBzYW1wbGUucmF3cy5iZWZvcmUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpLnBhcmVudCA9IHRoaXMucHJveHlPZjtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH1cbiAgcHJlcGVuZCguLi5jaGlsZHJlbikge1xuICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ucmV2ZXJzZSgpO1xuICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBsZXQgbm9kZXMgPSB0aGlzLm5vcm1hbGl6ZShjaGlsZCwgdGhpcy5maXJzdCwgXCJwcmVwZW5kXCIpLnJldmVyc2UoKTtcbiAgICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB0aGlzLnByb3h5T2Yubm9kZXMudW5zaGlmdChub2RlMik7XG4gICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IHRoaXMuaW5kZXhlc1tpZF0gKyBub2Rlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcHVzaChjaGlsZCkge1xuICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgdGhpcy5wcm94eU9mLm5vZGVzLnB1c2goY2hpbGQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlbW92ZUFsbCgpIHtcbiAgICBmb3IgKGxldCBub2RlMiBvZiB0aGlzLnByb3h5T2Yubm9kZXMpIG5vZGUyLnBhcmVudCA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3h5T2Yubm9kZXMgPSBbXTtcbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgY2hpbGQgPSB0aGlzLmluZGV4KGNoaWxkKTtcbiAgICB0aGlzLnByb3h5T2Yubm9kZXNbY2hpbGRdLnBhcmVudCA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3h5T2Yubm9kZXMuc3BsaWNlKGNoaWxkLCAxKTtcbiAgICBsZXQgaW5kZXgyO1xuICAgIGZvciAobGV0IGlkIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgaW5kZXgyID0gdGhpcy5pbmRleGVzW2lkXTtcbiAgICAgIGlmIChpbmRleDIgPj0gY2hpbGQpIHtcbiAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IGluZGV4MiAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmVwbGFjZVZhbHVlcyhwYXR0ZXJuLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0cztcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy53YWxrRGVjbHMoKGRlY2wpID0+IHtcbiAgICAgIGlmIChvcHRzLnByb3BzICYmICFvcHRzLnByb3BzLmluY2x1ZGVzKGRlY2wucHJvcCkpIHJldHVybjtcbiAgICAgIGlmIChvcHRzLmZhc3QgJiYgIWRlY2wudmFsdWUuaW5jbHVkZXMob3B0cy5mYXN0KSkgcmV0dXJuO1xuICAgICAgZGVjbC52YWx1ZSA9IGRlY2wudmFsdWUucmVwbGFjZShwYXR0ZXJuLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzb21lKGNvbmRpdGlvbikge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLnNvbWUoY29uZGl0aW9uKTtcbiAgfVxuICB3YWxrKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgIGxldCByZXN1bHQyO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0MiA9IGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgY2hpbGQuYWRkVG9FcnJvcihlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQyICE9PSBmYWxzZSAmJiBjaGlsZC53YWxrKSB7XG4gICAgICAgIHJlc3VsdDIgPSBjaGlsZC53YWxrKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQyO1xuICAgIH0pO1xuICB9XG4gIHdhbGtBdFJ1bGVzKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBuYW1lO1xuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiYXRydWxlXCIpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5hbWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImF0cnVsZVwiICYmIG5hbWUudGVzdChjaGlsZC5uYW1lKSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiYXRydWxlXCIgJiYgY2hpbGQubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHdhbGtDb21tZW50cyhjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJjb21tZW50XCIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB3YWxrRGVjbHMocHJvcCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9IHByb3A7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJkZWNsXCIpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHByb3AgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImRlY2xcIiAmJiBwcm9wLnRlc3QoY2hpbGQucHJvcCkpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImRlY2xcIiAmJiBjaGlsZC5wcm9wID09PSBwcm9wKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgd2Fsa1J1bGVzKHNlbGVjdG9yLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gc2VsZWN0b3I7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJydWxlXCIpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJydWxlXCIgJiYgc2VsZWN0b3IudGVzdChjaGlsZC5zZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSBcInJ1bGVcIiAmJiBjaGlsZC5zZWxlY3RvciA9PT0gc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXQgZmlyc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5T2Yubm9kZXMpIHJldHVybiB2b2lkIDA7XG4gICAgcmV0dXJuIHRoaXMucHJveHlPZi5ub2Rlc1swXTtcbiAgfVxuICBnZXQgbGFzdCgpIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgcmV0dXJuIHZvaWQgMDtcbiAgICByZXR1cm4gdGhpcy5wcm94eU9mLm5vZGVzW3RoaXMucHJveHlPZi5ub2Rlcy5sZW5ndGggLSAxXTtcbiAgfVxufTtcbkNvbnRhaW5lciQ3LnJlZ2lzdGVyUGFyc2UgPSAoZGVwZW5kYW50KSA9PiB7XG4gIHBhcnNlJDQgPSBkZXBlbmRhbnQ7XG59O1xuQ29udGFpbmVyJDcucmVnaXN0ZXJSdWxlID0gKGRlcGVuZGFudCkgPT4ge1xuICBSdWxlJDQgPSBkZXBlbmRhbnQ7XG59O1xuQ29udGFpbmVyJDcucmVnaXN0ZXJBdFJ1bGUgPSAoZGVwZW5kYW50KSA9PiB7XG4gIEF0UnVsZSQ0ID0gZGVwZW5kYW50O1xufTtcbkNvbnRhaW5lciQ3LnJlZ2lzdGVyUm9vdCA9IChkZXBlbmRhbnQpID0+IHtcbiAgUm9vdCQ2ID0gZGVwZW5kYW50O1xufTtcbnZhciBjb250YWluZXIgPSBDb250YWluZXIkNztcbkNvbnRhaW5lciQ3LmRlZmF1bHQgPSBDb250YWluZXIkNztcbkNvbnRhaW5lciQ3LnJlYnVpbGQgPSAobm9kZTIpID0+IHtcbiAgaWYgKG5vZGUyLnR5cGUgPT09IFwiYXRydWxlXCIpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZTIsIEF0UnVsZSQ0LnByb3RvdHlwZSk7XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJydWxlXCIpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZTIsIFJ1bGUkNC5wcm90b3R5cGUpO1xuICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vZGUyLCBEZWNsYXJhdGlvbiQzLnByb3RvdHlwZSk7XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJjb21tZW50XCIpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZTIsIENvbW1lbnQkMy5wcm90b3R5cGUpO1xuICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwicm9vdFwiKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vZGUyLCBSb290JDYucHJvdG90eXBlKTtcbiAgfVxuICBub2RlMltteSQxXSA9IHRydWU7XG4gIGlmIChub2RlMi5ub2Rlcykge1xuICAgIG5vZGUyLm5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBDb250YWluZXIkNy5yZWJ1aWxkKGNoaWxkKTtcbiAgICB9KTtcbiAgfVxufTtcbmxldCBDb250YWluZXIkNiA9IGNvbnRhaW5lcjtcbmxldCBMYXp5UmVzdWx0JDQ7XG5sZXQgUHJvY2Vzc29yJDM7XG5sZXQgRG9jdW1lbnQkMyA9IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgQ29udGFpbmVyJDYge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIHN1cGVyKF9fc3ByZWFkVmFsdWVzKHsgdHlwZTogXCJkb2N1bWVudFwiIH0sIGRlZmF1bHRzKSk7XG4gICAgaWYgKCF0aGlzLm5vZGVzKSB7XG4gICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgfVxuICB9XG4gIHRvUmVzdWx0KG9wdHMgPSB7fSkge1xuICAgIGxldCBsYXp5ID0gbmV3IExhenlSZXN1bHQkNChuZXcgUHJvY2Vzc29yJDMoKSwgdGhpcywgb3B0cyk7XG4gICAgcmV0dXJuIGxhenkuc3RyaW5naWZ5KCk7XG4gIH1cbn07XG5Eb2N1bWVudCQzLnJlZ2lzdGVyTGF6eVJlc3VsdCA9IChkZXBlbmRhbnQpID0+IHtcbiAgTGF6eVJlc3VsdCQ0ID0gZGVwZW5kYW50O1xufTtcbkRvY3VtZW50JDMucmVnaXN0ZXJQcm9jZXNzb3IgPSAoZGVwZW5kYW50KSA9PiB7XG4gIFByb2Nlc3NvciQzID0gZGVwZW5kYW50O1xufTtcbnZhciBkb2N1bWVudCQxID0gRG9jdW1lbnQkMztcbkRvY3VtZW50JDMuZGVmYXVsdCA9IERvY3VtZW50JDM7XG5sZXQgcHJpbnRlZCA9IHt9O1xudmFyIHdhcm5PbmNlJDIgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gIGlmIChwcmludGVkW21lc3NhZ2VdKSByZXR1cm47XG4gIHByaW50ZWRbbWVzc2FnZV0gPSB0cnVlO1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKSB7XG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICB9XG59O1xubGV0IFdhcm5pbmckMiA9IGNsYXNzIFdhcm5pbmcge1xuICBjb25zdHJ1Y3Rvcih0ZXh0LCBvcHRzID0ge30pIHtcbiAgICB0aGlzLnR5cGUgPSBcIndhcm5pbmdcIjtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIGlmIChvcHRzLm5vZGUgJiYgb3B0cy5ub2RlLnNvdXJjZSkge1xuICAgICAgbGV0IHJhbmdlID0gb3B0cy5ub2RlLnJhbmdlQnkob3B0cyk7XG4gICAgICB0aGlzLmxpbmUgPSByYW5nZS5zdGFydC5saW5lO1xuICAgICAgdGhpcy5jb2x1bW4gPSByYW5nZS5zdGFydC5jb2x1bW47XG4gICAgICB0aGlzLmVuZExpbmUgPSByYW5nZS5lbmQubGluZTtcbiAgICAgIHRoaXMuZW5kQ29sdW1uID0gcmFuZ2UuZW5kLmNvbHVtbjtcbiAgICB9XG4gICAgZm9yIChsZXQgb3B0IGluIG9wdHMpIHRoaXNbb3B0XSA9IG9wdHNbb3B0XTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLmVycm9yKHRoaXMudGV4dCwge1xuICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgcGx1Z2luOiB0aGlzLnBsdWdpbixcbiAgICAgICAgd29yZDogdGhpcy53b3JkXG4gICAgICB9KS5tZXNzYWdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5wbHVnaW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnBsdWdpbiArIFwiOiBcIiArIHRoaXMudGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGV4dDtcbiAgfVxufTtcbnZhciB3YXJuaW5nID0gV2FybmluZyQyO1xuV2FybmluZyQyLmRlZmF1bHQgPSBXYXJuaW5nJDI7XG5sZXQgV2FybmluZyQxID0gd2FybmluZztcbmxldCBSZXN1bHQkMyA9IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHByb2Nlc3NvcjIsIHJvb3QyLCBvcHRzKSB7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3IyO1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLnJvb3QgPSByb290MjtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMuY3NzID0gdm9pZCAwO1xuICAgIHRoaXMubWFwID0gdm9pZCAwO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNzcztcbiAgfVxuICB3YXJuKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGlmICghb3B0cy5wbHVnaW4pIHtcbiAgICAgIGlmICh0aGlzLmxhc3RQbHVnaW4gJiYgdGhpcy5sYXN0UGx1Z2luLnBvc3Rjc3NQbHVnaW4pIHtcbiAgICAgICAgb3B0cy5wbHVnaW4gPSB0aGlzLmxhc3RQbHVnaW4ucG9zdGNzc1BsdWdpbjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHdhcm5pbmcyID0gbmV3IFdhcm5pbmckMSh0ZXh0LCBvcHRzKTtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2god2FybmluZzIpO1xuICAgIHJldHVybiB3YXJuaW5nMjtcbiAgfVxuICB3YXJuaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcy5maWx0ZXIoKGkpID0+IGkudHlwZSA9PT0gXCJ3YXJuaW5nXCIpO1xuICB9XG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNzcztcbiAgfVxufTtcbnZhciByZXN1bHQgPSBSZXN1bHQkMztcblJlc3VsdCQzLmRlZmF1bHQgPSBSZXN1bHQkMztcbmNvbnN0IFNJTkdMRV9RVU9URSA9IFwiJ1wiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBET1VCTEVfUVVPVEUgPSAnXCInLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBCQUNLU0xBU0ggPSBcIlxcXFxcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgU0xBU0ggPSBcIi9cIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgTkVXTElORSA9IFwiXFxuXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IFNQQUNFID0gXCIgXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IEZFRUQgPSBcIlxcZlwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBUQUIgPSBcIlx0XCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IENSID0gXCJcXHJcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgT1BFTl9TUVVBUkUgPSBcIltcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQ0xPU0VfU1FVQVJFID0gXCJdXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IE9QRU5fUEFSRU5USEVTRVMgPSBcIihcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQ0xPU0VfUEFSRU5USEVTRVMgPSBcIilcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgT1BFTl9DVVJMWSA9IFwie1wiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBDTE9TRV9DVVJMWSA9IFwifVwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBTRU1JQ09MT04gPSBcIjtcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQVNURVJJU0sgPSBcIipcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQ09MT04gPSBcIjpcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQVQgPSBcIkBcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgUkVfQVRfRU5EID0gL1tcXHRcXG5cXGZcXHIgXCIjJygpLztbXFxcXFxcXXt9XS9nO1xuY29uc3QgUkVfV09SRF9FTkQgPSAvW1xcdFxcblxcZlxcciAhXCIjJygpOjtAW1xcXFxcXF17fV18XFwvKD89XFwqKS9nO1xuY29uc3QgUkVfQkFEX0JSQUNLRVQgPSAvLltcXHJcXG5cIicoL1xcXFxdLztcbmNvbnN0IFJFX0hFWF9FU0NBUEUgPSAvW1xcZGEtZl0vaTtcbnZhciB0b2tlbml6ZSA9IGZ1bmN0aW9uIHRva2VuaXplcihpbnB1dDIsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgY3NzID0gaW5wdXQyLmNzcy52YWx1ZU9mKCk7XG4gIGxldCBpZ25vcmUgPSBvcHRpb25zLmlnbm9yZUVycm9ycztcbiAgbGV0IGNvZGUsIG5leHQsIHF1b3RlLCBjb250ZW50LCBlc2NhcGU7XG4gIGxldCBlc2NhcGVkLCBlc2NhcGVQb3MsIHByZXYsIG4sIGN1cnJlbnRUb2tlbjtcbiAgbGV0IGxlbmd0aCA9IGNzcy5sZW5ndGg7XG4gIGxldCBwb3MgPSAwO1xuICBsZXQgYnVmZmVyID0gW107XG4gIGxldCByZXR1cm5lZCA9IFtdO1xuICBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gcG9zO1xuICB9XG4gIGZ1bmN0aW9uIHVuY2xvc2VkKHdoYXQpIHtcbiAgICB0aHJvdyBpbnB1dDIuZXJyb3IoXCJVbmNsb3NlZCBcIiArIHdoYXQsIHBvcyk7XG4gIH1cbiAgZnVuY3Rpb24gZW5kT2ZGaWxlKCkge1xuICAgIHJldHVybiByZXR1cm5lZC5sZW5ndGggPT09IDAgJiYgcG9zID49IGxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBuZXh0VG9rZW4ob3B0cykge1xuICAgIGlmIChyZXR1cm5lZC5sZW5ndGgpIHJldHVybiByZXR1cm5lZC5wb3AoKTtcbiAgICBpZiAocG9zID49IGxlbmd0aCkgcmV0dXJuO1xuICAgIGxldCBpZ25vcmVVbmNsb3NlZCA9IG9wdHMgPyBvcHRzLmlnbm9yZVVuY2xvc2VkIDogZmFsc2U7XG4gICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICBjYXNlIE5FV0xJTkU6XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgY2FzZSBUQUI6XG4gICAgICBjYXNlIENSOlxuICAgICAgY2FzZSBGRUVEOiB7XG4gICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KG5leHQpO1xuICAgICAgICB9IHdoaWxlIChjb2RlID09PSBTUEFDRSB8fCBjb2RlID09PSBORVdMSU5FIHx8IGNvZGUgPT09IFRBQiB8fCBjb2RlID09PSBDUiB8fCBjb2RlID09PSBGRUVEKTtcbiAgICAgICAgY3VycmVudFRva2VuID0gW1wic3BhY2VcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCldO1xuICAgICAgICBwb3MgPSBuZXh0IC0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE9QRU5fU1FVQVJFOlxuICAgICAgY2FzZSBDTE9TRV9TUVVBUkU6XG4gICAgICBjYXNlIE9QRU5fQ1VSTFk6XG4gICAgICBjYXNlIENMT1NFX0NVUkxZOlxuICAgICAgY2FzZSBDT0xPTjpcbiAgICAgIGNhc2UgU0VNSUNPTE9OOlxuICAgICAgY2FzZSBDTE9TRV9QQVJFTlRIRVNFUzoge1xuICAgICAgICBsZXQgY29udHJvbENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICBjdXJyZW50VG9rZW4gPSBbY29udHJvbENoYXIsIGNvbnRyb2xDaGFyLCBwb3NdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgT1BFTl9QQVJFTlRIRVNFUzoge1xuICAgICAgICBwcmV2ID0gYnVmZmVyLmxlbmd0aCA/IGJ1ZmZlci5wb3AoKVsxXSA6IFwiXCI7XG4gICAgICAgIG4gPSBjc3MuY2hhckNvZGVBdChwb3MgKyAxKTtcbiAgICAgICAgaWYgKHByZXYgPT09IFwidXJsXCIgJiYgbiAhPT0gU0lOR0xFX1FVT1RFICYmIG4gIT09IERPVUJMRV9RVU9URSAmJiBuICE9PSBTUEFDRSAmJiBuICE9PSBORVdMSU5FICYmIG4gIT09IFRBQiAmJiBuICE9PSBGRUVEICYmIG4gIT09IENSKSB7XG4gICAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YoXCIpXCIsIG5leHQgKyAxKTtcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgICBpZiAoaWdub3JlIHx8IGlnbm9yZVVuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmNsb3NlZChcImJyYWNrZXRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVzY2FwZVBvcyA9IG5leHQ7XG4gICAgICAgICAgICB3aGlsZSAoY3NzLmNoYXJDb2RlQXQoZXNjYXBlUG9zIC0gMSkgPT09IEJBQ0tTTEFTSCkge1xuICAgICAgICAgICAgICBlc2NhcGVQb3MgLT0gMTtcbiAgICAgICAgICAgICAgZXNjYXBlZCA9ICFlc2NhcGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gd2hpbGUgKGVzY2FwZWQpO1xuICAgICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcImJyYWNrZXRzXCIsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XTtcbiAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZihcIilcIiwgcG9zICsgMSk7XG4gICAgICAgICAgY29udGVudCA9IGNzcy5zbGljZShwb3MsIG5leHQgKyAxKTtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gLTEgfHwgUkVfQkFEX0JSQUNLRVQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgY3VycmVudFRva2VuID0gW1wiKFwiLCBcIihcIiwgcG9zXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFRva2VuID0gW1wiYnJhY2tldHNcIiwgY29udGVudCwgcG9zLCBuZXh0XTtcbiAgICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTSU5HTEVfUVVPVEU6XG4gICAgICBjYXNlIERPVUJMRV9RVU9URToge1xuICAgICAgICBxdW90ZSA9IGNvZGUgPT09IFNJTkdMRV9RVU9URSA/IFwiJ1wiIDogJ1wiJztcbiAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YocXVvdGUsIG5leHQgKyAxKTtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGlmIChpZ25vcmUgfHwgaWdub3JlVW5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgbmV4dCA9IHBvcyArIDE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdW5jbG9zZWQoXCJzdHJpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVzY2FwZVBvcyA9IG5leHQ7XG4gICAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KGVzY2FwZVBvcyAtIDEpID09PSBCQUNLU0xBU0gpIHtcbiAgICAgICAgICAgIGVzY2FwZVBvcyAtPSAxO1xuICAgICAgICAgICAgZXNjYXBlZCA9ICFlc2NhcGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoZXNjYXBlZCk7XG4gICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcInN0cmluZ1wiLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF07XG4gICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBVDoge1xuICAgICAgICBSRV9BVF9FTkQubGFzdEluZGV4ID0gcG9zICsgMTtcbiAgICAgICAgUkVfQVRfRU5ELnRlc3QoY3NzKTtcbiAgICAgICAgaWYgKFJFX0FUX0VORC5sYXN0SW5kZXggPT09IDApIHtcbiAgICAgICAgICBuZXh0ID0gY3NzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCA9IFJFX0FUX0VORC5sYXN0SW5kZXggLSAyO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcImF0LXdvcmRcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdO1xuICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQkFDS1NMQVNIOiB7XG4gICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChjc3MuY2hhckNvZGVBdChuZXh0ICsgMSkgPT09IEJBQ0tTTEFTSCkge1xuICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICBlc2NhcGUgPSAhZXNjYXBlO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUgPSBjc3MuY2hhckNvZGVBdChuZXh0ICsgMSk7XG4gICAgICAgIGlmIChlc2NhcGUgJiYgY29kZSAhPT0gU0xBU0ggJiYgY29kZSAhPT0gU1BBQ0UgJiYgY29kZSAhPT0gTkVXTElORSAmJiBjb2RlICE9PSBUQUIgJiYgY29kZSAhPT0gQ1IgJiYgY29kZSAhPT0gRkVFRCkge1xuICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICBpZiAoUkVfSEVYX0VTQ0FQRS50ZXN0KGNzcy5jaGFyQXQobmV4dCkpKSB7XG4gICAgICAgICAgICB3aGlsZSAoUkVfSEVYX0VTQ0FQRS50ZXN0KGNzcy5jaGFyQXQobmV4dCArIDEpKSkge1xuICAgICAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3NzLmNoYXJDb2RlQXQobmV4dCArIDEpID09PSBTUEFDRSkge1xuICAgICAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcIndvcmRcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdO1xuICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgaWYgKGNvZGUgPT09IFNMQVNIICYmIGNzcy5jaGFyQ29kZUF0KHBvcyArIDEpID09PSBBU1RFUklTSykge1xuICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZihcIiovXCIsIHBvcyArIDIpICsgMTtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGlnbm9yZSB8fCBpZ25vcmVVbmNsb3NlZCkge1xuICAgICAgICAgICAgICBuZXh0ID0gY3NzLmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVuY2xvc2VkKFwiY29tbWVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFRva2VuID0gW1wiY29tbWVudFwiLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF07XG4gICAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBSRV9XT1JEX0VORC5sYXN0SW5kZXggPSBwb3MgKyAxO1xuICAgICAgICAgIFJFX1dPUkRfRU5ELnRlc3QoY3NzKTtcbiAgICAgICAgICBpZiAoUkVfV09SRF9FTkQubGFzdEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBuZXh0ID0gY3NzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQgPSBSRV9XT1JEX0VORC5sYXN0SW5kZXggLSAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJ3b3JkXCIsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XTtcbiAgICAgICAgICBidWZmZXIucHVzaChjdXJyZW50VG9rZW4pO1xuICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHBvcysrO1xuICAgIHJldHVybiBjdXJyZW50VG9rZW47XG4gIH1cbiAgZnVuY3Rpb24gYmFjayh0b2tlbikge1xuICAgIHJldHVybmVkLnB1c2godG9rZW4pO1xuICB9XG4gIHJldHVybiB7XG4gICAgYmFjayxcbiAgICBlbmRPZkZpbGUsXG4gICAgbmV4dFRva2VuLFxuICAgIHBvc2l0aW9uXG4gIH07XG59O1xubGV0IENvbnRhaW5lciQ1ID0gY29udGFpbmVyO1xubGV0IEF0UnVsZSQzID0gY2xhc3MgQXRSdWxlIGV4dGVuZHMgQ29udGFpbmVyJDUge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIHN1cGVyKGRlZmF1bHRzKTtcbiAgICB0aGlzLnR5cGUgPSBcImF0cnVsZVwiO1xuICB9XG4gIGFwcGVuZCguLi5jaGlsZHJlbikge1xuICAgIGlmICghdGhpcy5wcm94eU9mLm5vZGVzKSB0aGlzLm5vZGVzID0gW107XG4gICAgcmV0dXJuIHN1cGVyLmFwcGVuZCguLi5jaGlsZHJlbik7XG4gIH1cbiAgcHJlcGVuZCguLi5jaGlsZHJlbikge1xuICAgIGlmICghdGhpcy5wcm94eU9mLm5vZGVzKSB0aGlzLm5vZGVzID0gW107XG4gICAgcmV0dXJuIHN1cGVyLnByZXBlbmQoLi4uY2hpbGRyZW4pO1xuICB9XG59O1xudmFyIGF0UnVsZSA9IEF0UnVsZSQzO1xuQXRSdWxlJDMuZGVmYXVsdCA9IEF0UnVsZSQzO1xuQ29udGFpbmVyJDUucmVnaXN0ZXJBdFJ1bGUoQXRSdWxlJDMpO1xubGV0IENvbnRhaW5lciQ0ID0gY29udGFpbmVyO1xubGV0IExhenlSZXN1bHQkMztcbmxldCBQcm9jZXNzb3IkMjtcbmxldCBSb290JDUgPSBjbGFzcyBSb290IGV4dGVuZHMgQ29udGFpbmVyJDQge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIHN1cGVyKGRlZmF1bHRzKTtcbiAgICB0aGlzLnR5cGUgPSBcInJvb3RcIjtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHRoaXMubm9kZXMgPSBbXTtcbiAgfVxuICBub3JtYWxpemUoY2hpbGQsIHNhbXBsZSwgdHlwZSkge1xuICAgIGxldCBub2RlcyA9IHN1cGVyLm5vcm1hbGl6ZShjaGlsZCk7XG4gICAgaWYgKHNhbXBsZSkge1xuICAgICAgaWYgKHR5cGUgPT09IFwicHJlcGVuZFwiKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzYW1wbGUucmF3cy5iZWZvcmUgPSB0aGlzLm5vZGVzWzFdLnJhd3MuYmVmb3JlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBzYW1wbGUucmF3cy5iZWZvcmU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maXJzdCAhPT0gc2FtcGxlKSB7XG4gICAgICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB7XG4gICAgICAgICAgbm9kZTIucmF3cy5iZWZvcmUgPSBzYW1wbGUucmF3cy5iZWZvcmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIHJlbW92ZUNoaWxkKGNoaWxkLCBpZ25vcmUpIHtcbiAgICBsZXQgaW5kZXgyID0gdGhpcy5pbmRleChjaGlsZCk7XG4gICAgaWYgKCFpZ25vcmUgJiYgaW5kZXgyID09PSAwICYmIHRoaXMubm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5ub2Rlc1sxXS5yYXdzLmJlZm9yZSA9IHRoaXMubm9kZXNbaW5kZXgyXS5yYXdzLmJlZm9yZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuICB0b1Jlc3VsdChvcHRzID0ge30pIHtcbiAgICBsZXQgbGF6eSA9IG5ldyBMYXp5UmVzdWx0JDMobmV3IFByb2Nlc3NvciQyKCksIHRoaXMsIG9wdHMpO1xuICAgIHJldHVybiBsYXp5LnN0cmluZ2lmeSgpO1xuICB9XG59O1xuUm9vdCQ1LnJlZ2lzdGVyTGF6eVJlc3VsdCA9IChkZXBlbmRhbnQpID0+IHtcbiAgTGF6eVJlc3VsdCQzID0gZGVwZW5kYW50O1xufTtcblJvb3QkNS5yZWdpc3RlclByb2Nlc3NvciA9IChkZXBlbmRhbnQpID0+IHtcbiAgUHJvY2Vzc29yJDIgPSBkZXBlbmRhbnQ7XG59O1xudmFyIHJvb3QgPSBSb290JDU7XG5Sb290JDUuZGVmYXVsdCA9IFJvb3QkNTtcbkNvbnRhaW5lciQ0LnJlZ2lzdGVyUm9vdChSb290JDUpO1xubGV0IGxpc3QkMiA9IHtcbiAgY29tbWEoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGxpc3QkMi5zcGxpdChzdHJpbmcsIFtcIixcIl0sIHRydWUpO1xuICB9LFxuICBzcGFjZShzdHJpbmcpIHtcbiAgICBsZXQgc3BhY2VzID0gW1wiIFwiLCBcIlxcblwiLCBcIlx0XCJdO1xuICAgIHJldHVybiBsaXN0JDIuc3BsaXQoc3RyaW5nLCBzcGFjZXMpO1xuICB9LFxuICBzcGxpdChzdHJpbmcsIHNlcGFyYXRvcnMsIGxhc3QpIHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IFwiXCI7XG4gICAgbGV0IHNwbGl0ID0gZmFsc2U7XG4gICAgbGV0IGZ1bmMgPSAwO1xuICAgIGxldCBpblF1b3RlID0gZmFsc2U7XG4gICAgbGV0IHByZXZRdW90ZSA9IFwiXCI7XG4gICAgbGV0IGVzY2FwZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGxldHRlciBvZiBzdHJpbmcpIHtcbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaW5RdW90ZSkge1xuICAgICAgICBpZiAobGV0dGVyID09PSBwcmV2UXVvdGUpIHtcbiAgICAgICAgICBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnXCInIHx8IGxldHRlciA9PT0gXCInXCIpIHtcbiAgICAgICAgaW5RdW90ZSA9IHRydWU7XG4gICAgICAgIHByZXZRdW90ZSA9IGxldHRlcjtcbiAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSBcIihcIikge1xuICAgICAgICBmdW5jICs9IDE7XG4gICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gXCIpXCIpIHtcbiAgICAgICAgaWYgKGZ1bmMgPiAwKSBmdW5jIC09IDE7XG4gICAgICB9IGVsc2UgaWYgKGZ1bmMgPT09IDApIHtcbiAgICAgICAgaWYgKHNlcGFyYXRvcnMuaW5jbHVkZXMobGV0dGVyKSkgc3BsaXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNwbGl0KSB7XG4gICAgICAgIGlmIChjdXJyZW50ICE9PSBcIlwiKSBhcnJheS5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgIHNwbGl0ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50ICs9IGxldHRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhc3QgfHwgY3VycmVudCAhPT0gXCJcIikgYXJyYXkucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG59O1xudmFyIGxpc3RfMSA9IGxpc3QkMjtcbmxpc3QkMi5kZWZhdWx0ID0gbGlzdCQyO1xubGV0IENvbnRhaW5lciQzID0gY29udGFpbmVyO1xubGV0IGxpc3QkMSA9IGxpc3RfMTtcbmxldCBSdWxlJDMgPSBjbGFzcyBSdWxlIGV4dGVuZHMgQ29udGFpbmVyJDMge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIHN1cGVyKGRlZmF1bHRzKTtcbiAgICB0aGlzLnR5cGUgPSBcInJ1bGVcIjtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHRoaXMubm9kZXMgPSBbXTtcbiAgfVxuICBnZXQgc2VsZWN0b3JzKCkge1xuICAgIHJldHVybiBsaXN0JDEuY29tbWEodGhpcy5zZWxlY3Rvcik7XG4gIH1cbiAgc2V0IHNlbGVjdG9ycyh2YWx1ZXMpIHtcbiAgICBsZXQgbWF0Y2ggPSB0aGlzLnNlbGVjdG9yID8gdGhpcy5zZWxlY3Rvci5tYXRjaCgvLFxccyovKSA6IG51bGw7XG4gICAgbGV0IHNlcDIgPSBtYXRjaCA/IG1hdGNoWzBdIDogXCIsXCIgKyB0aGlzLnJhdyhcImJldHdlZW5cIiwgXCJiZWZvcmVPcGVuXCIpO1xuICAgIHRoaXMuc2VsZWN0b3IgPSB2YWx1ZXMuam9pbihzZXAyKTtcbiAgfVxufTtcbnZhciBydWxlID0gUnVsZSQzO1xuUnVsZSQzLmRlZmF1bHQgPSBSdWxlJDM7XG5Db250YWluZXIkMy5yZWdpc3RlclJ1bGUoUnVsZSQzKTtcbmxldCBEZWNsYXJhdGlvbiQyID0gZGVjbGFyYXRpb247XG5sZXQgdG9rZW5pemVyMiA9IHRva2VuaXplO1xubGV0IENvbW1lbnQkMiA9IGNvbW1lbnQ7XG5sZXQgQXRSdWxlJDIgPSBhdFJ1bGU7XG5sZXQgUm9vdCQ0ID0gcm9vdDtcbmxldCBSdWxlJDIgPSBydWxlO1xuY29uc3QgU0FGRV9DT01NRU5UX05FSUdIQk9SID0ge1xuICBlbXB0eTogdHJ1ZSxcbiAgc3BhY2U6IHRydWVcbn07XG5mdW5jdGlvbiBmaW5kTGFzdFdpdGhQb3NpdGlvbih0b2tlbnMpIHtcbiAgZm9yIChsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBsZXQgcG9zID0gdG9rZW5bM10gfHwgdG9rZW5bMl07XG4gICAgaWYgKHBvcykgcmV0dXJuIHBvcztcbiAgfVxufVxubGV0IFBhcnNlciQxID0gY2xhc3MgUGFyc2VyIHtcbiAgY29uc3RydWN0b3IoaW5wdXQyKSB7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0MjtcbiAgICB0aGlzLnJvb3QgPSBuZXcgUm9vdCQ0KCk7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5yb290O1xuICAgIHRoaXMuc3BhY2VzID0gXCJcIjtcbiAgICB0aGlzLnNlbWljb2xvbiA9IGZhbHNlO1xuICAgIHRoaXMuY3JlYXRlVG9rZW5pemVyKCk7XG4gICAgdGhpcy5yb290LnNvdXJjZSA9IHsgaW5wdXQ6IGlucHV0Miwgc3RhcnQ6IHsgY29sdW1uOiAxLCBsaW5lOiAxLCBvZmZzZXQ6IDAgfSB9O1xuICB9XG4gIGF0cnVsZSh0b2tlbikge1xuICAgIGxldCBub2RlMiA9IG5ldyBBdFJ1bGUkMigpO1xuICAgIG5vZGUyLm5hbWUgPSB0b2tlblsxXS5zbGljZSgxKTtcbiAgICBpZiAobm9kZTIubmFtZSA9PT0gXCJcIikge1xuICAgICAgdGhpcy51bm5hbWVkQXRydWxlKG5vZGUyLCB0b2tlbik7XG4gICAgfVxuICAgIHRoaXMuaW5pdChub2RlMiwgdG9rZW5bMl0pO1xuICAgIGxldCB0eXBlO1xuICAgIGxldCBwcmV2O1xuICAgIGxldCBzaGlmdDtcbiAgICBsZXQgbGFzdCA9IGZhbHNlO1xuICAgIGxldCBvcGVuID0gZmFsc2U7XG4gICAgbGV0IHBhcmFtcyA9IFtdO1xuICAgIGxldCBicmFja2V0cyA9IFtdO1xuICAgIHdoaWxlICghdGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpIHtcbiAgICAgIHRva2VuID0gdGhpcy50b2tlbml6ZXIubmV4dFRva2VuKCk7XG4gICAgICB0eXBlID0gdG9rZW5bMF07XG4gICAgICBpZiAodHlwZSA9PT0gXCIoXCIgfHwgdHlwZSA9PT0gXCJbXCIpIHtcbiAgICAgICAgYnJhY2tldHMucHVzaCh0eXBlID09PSBcIihcIiA/IFwiKVwiIDogXCJdXCIpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIntcIiAmJiBicmFja2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGJyYWNrZXRzLnB1c2goXCJ9XCIpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBicmFja2V0c1ticmFja2V0cy5sZW5ndGggLSAxXSkge1xuICAgICAgICBicmFja2V0cy5wb3AoKTtcbiAgICAgIH1cbiAgICAgIGlmIChicmFja2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiO1wiKSB7XG4gICAgICAgICAgbm9kZTIuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5bMl0pO1xuICAgICAgICAgIG5vZGUyLnNvdXJjZS5lbmQub2Zmc2V0Kys7XG4gICAgICAgICAgdGhpcy5zZW1pY29sb24gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwie1wiKSB7XG4gICAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNoaWZ0ID0gcGFyYW1zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBwcmV2ID0gcGFyYW1zW3NoaWZ0XTtcbiAgICAgICAgICAgIHdoaWxlIChwcmV2ICYmIHByZXZbMF0gPT09IFwic3BhY2VcIikge1xuICAgICAgICAgICAgICBwcmV2ID0gcGFyYW1zWy0tc2hpZnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgbm9kZTIuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24ocHJldlszXSB8fCBwcmV2WzJdKTtcbiAgICAgICAgICAgICAgbm9kZTIuc291cmNlLmVuZC5vZmZzZXQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbmQodG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zLnB1c2godG9rZW4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudG9rZW5pemVyLmVuZE9mRmlsZSgpKSB7XG4gICAgICAgIGxhc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZTIucmF3cy5iZXR3ZWVuID0gdGhpcy5zcGFjZXNBbmRDb21tZW50c0Zyb21FbmQocGFyYW1zKTtcbiAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgICAgbm9kZTIucmF3cy5hZnRlck5hbWUgPSB0aGlzLnNwYWNlc0FuZENvbW1lbnRzRnJvbVN0YXJ0KHBhcmFtcyk7XG4gICAgICB0aGlzLnJhdyhub2RlMiwgXCJwYXJhbXNcIiwgcGFyYW1zKTtcbiAgICAgIGlmIChsYXN0KSB7XG4gICAgICAgIHRva2VuID0gcGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgbm9kZTIuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5bM10gfHwgdG9rZW5bMl0pO1xuICAgICAgICBub2RlMi5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgICAgICB0aGlzLnNwYWNlcyA9IG5vZGUyLnJhd3MuYmV0d2VlbjtcbiAgICAgICAgbm9kZTIucmF3cy5iZXR3ZWVuID0gXCJcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZTIucmF3cy5hZnRlck5hbWUgPSBcIlwiO1xuICAgICAgbm9kZTIucGFyYW1zID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIG5vZGUyLm5vZGVzID0gW107XG4gICAgICB0aGlzLmN1cnJlbnQgPSBub2RlMjtcbiAgICB9XG4gIH1cbiAgY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKSB7XG4gICAgbGV0IGNvbG9uID0gdGhpcy5jb2xvbih0b2tlbnMpO1xuICAgIGlmIChjb2xvbiA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBsZXQgZm91bmRlZCA9IDA7XG4gICAgbGV0IHRva2VuO1xuICAgIGZvciAobGV0IGogPSBjb2xvbiAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tqXTtcbiAgICAgIGlmICh0b2tlblswXSAhPT0gXCJzcGFjZVwiKSB7XG4gICAgICAgIGZvdW5kZWQgKz0gMTtcbiAgICAgICAgaWYgKGZvdW5kZWQgPT09IDIpIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgXCJNaXNzZWQgc2VtaWNvbG9uXCIsXG4gICAgICB0b2tlblswXSA9PT0gXCJ3b3JkXCIgPyB0b2tlblszXSArIDEgOiB0b2tlblsyXVxuICAgICk7XG4gIH1cbiAgY29sb24odG9rZW5zKSB7XG4gICAgbGV0IGJyYWNrZXRzID0gMDtcbiAgICBsZXQgdG9rZW4sIHR5cGUsIHByZXY7XG4gICAgZm9yIChsZXQgW2ksIGVsZW1lbnRdIG9mIHRva2Vucy5lbnRyaWVzKCkpIHtcbiAgICAgIHRva2VuID0gZWxlbWVudDtcbiAgICAgIHR5cGUgPSB0b2tlblswXTtcbiAgICAgIGlmICh0eXBlID09PSBcIihcIikge1xuICAgICAgICBicmFja2V0cyArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09IFwiKVwiKSB7XG4gICAgICAgIGJyYWNrZXRzIC09IDE7XG4gICAgICB9XG4gICAgICBpZiAoYnJhY2tldHMgPT09IDAgJiYgdHlwZSA9PT0gXCI6XCIpIHtcbiAgICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgICAgdGhpcy5kb3VibGVDb2xvbih0b2tlbik7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldlswXSA9PT0gXCJ3b3JkXCIgJiYgcHJldlsxXSA9PT0gXCJwcm9naWRcIikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcmV2ID0gdG9rZW47XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb21tZW50KHRva2VuKSB7XG4gICAgbGV0IG5vZGUyID0gbmV3IENvbW1lbnQkMigpO1xuICAgIHRoaXMuaW5pdChub2RlMiwgdG9rZW5bMl0pO1xuICAgIG5vZGUyLnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHRva2VuWzNdIHx8IHRva2VuWzJdKTtcbiAgICBub2RlMi5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgIGxldCB0ZXh0ID0gdG9rZW5bMV0uc2xpY2UoMiwgLTIpO1xuICAgIGlmICgvXlxccyokLy50ZXN0KHRleHQpKSB7XG4gICAgICBub2RlMi50ZXh0ID0gXCJcIjtcbiAgICAgIG5vZGUyLnJhd3MubGVmdCA9IHRleHQ7XG4gICAgICBub2RlMi5yYXdzLnJpZ2h0ID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1hdGNoID0gdGV4dC5tYXRjaCgvXihcXHMqKShbXl0qXFxTKShcXHMqKSQvKTtcbiAgICAgIG5vZGUyLnRleHQgPSBtYXRjaFsyXTtcbiAgICAgIG5vZGUyLnJhd3MubGVmdCA9IG1hdGNoWzFdO1xuICAgICAgbm9kZTIucmF3cy5yaWdodCA9IG1hdGNoWzNdO1xuICAgIH1cbiAgfVxuICBjcmVhdGVUb2tlbml6ZXIoKSB7XG4gICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXIyKHRoaXMuaW5wdXQpO1xuICB9XG4gIGRlY2wodG9rZW5zLCBjdXN0b21Qcm9wZXJ0eSkge1xuICAgIGxldCBub2RlMiA9IG5ldyBEZWNsYXJhdGlvbiQyKCk7XG4gICAgdGhpcy5pbml0KG5vZGUyLCB0b2tlbnNbMF1bMl0pO1xuICAgIGxldCBsYXN0ID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdFswXSA9PT0gXCI7XCIpIHtcbiAgICAgIHRoaXMuc2VtaWNvbG9uID0gdHJ1ZTtcbiAgICAgIHRva2Vucy5wb3AoKTtcbiAgICB9XG4gICAgbm9kZTIuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24oXG4gICAgICBsYXN0WzNdIHx8IGxhc3RbMl0gfHwgZmluZExhc3RXaXRoUG9zaXRpb24odG9rZW5zKVxuICAgICk7XG4gICAgbm9kZTIuc291cmNlLmVuZC5vZmZzZXQrKztcbiAgICB3aGlsZSAodG9rZW5zWzBdWzBdICE9PSBcIndvcmRcIikge1xuICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT09IDEpIHRoaXMudW5rbm93bldvcmQodG9rZW5zKTtcbiAgICAgIG5vZGUyLnJhd3MuYmVmb3JlICs9IHRva2Vucy5zaGlmdCgpWzFdO1xuICAgIH1cbiAgICBub2RlMi5zb3VyY2Uuc3RhcnQgPSB0aGlzLmdldFBvc2l0aW9uKHRva2Vuc1swXVsyXSk7XG4gICAgbm9kZTIucHJvcCA9IFwiXCI7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGxldCB0eXBlID0gdG9rZW5zWzBdWzBdO1xuICAgICAgaWYgKHR5cGUgPT09IFwiOlwiIHx8IHR5cGUgPT09IFwic3BhY2VcIiB8fCB0eXBlID09PSBcImNvbW1lbnRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG5vZGUyLnByb3AgKz0gdG9rZW5zLnNoaWZ0KClbMV07XG4gICAgfVxuICAgIG5vZGUyLnJhd3MuYmV0d2VlbiA9IFwiXCI7XG4gICAgbGV0IHRva2VuO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICB0b2tlbiA9IHRva2Vucy5zaGlmdCgpO1xuICAgICAgaWYgKHRva2VuWzBdID09PSBcIjpcIikge1xuICAgICAgICBub2RlMi5yYXdzLmJldHdlZW4gKz0gdG9rZW5bMV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRva2VuWzBdID09PSBcIndvcmRcIiAmJiAvXFx3Ly50ZXN0KHRva2VuWzFdKSkge1xuICAgICAgICAgIHRoaXMudW5rbm93bldvcmQoW3Rva2VuXSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZTIucmF3cy5iZXR3ZWVuICs9IHRva2VuWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9kZTIucHJvcFswXSA9PT0gXCJfXCIgfHwgbm9kZTIucHJvcFswXSA9PT0gXCIqXCIpIHtcbiAgICAgIG5vZGUyLnJhd3MuYmVmb3JlICs9IG5vZGUyLnByb3BbMF07XG4gICAgICBub2RlMi5wcm9wID0gbm9kZTIucHJvcC5zbGljZSgxKTtcbiAgICB9XG4gICAgbGV0IGZpcnN0U3BhY2VzID0gW107XG4gICAgbGV0IG5leHQ7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIG5leHQgPSB0b2tlbnNbMF1bMF07XG4gICAgICBpZiAobmV4dCAhPT0gXCJzcGFjZVwiICYmIG5leHQgIT09IFwiY29tbWVudFwiKSBicmVhaztcbiAgICAgIGZpcnN0U3BhY2VzLnB1c2godG9rZW5zLnNoaWZ0KCkpO1xuICAgIH1cbiAgICB0aGlzLnByZWNoZWNrTWlzc2VkU2VtaWNvbG9uKHRva2Vucyk7XG4gICAgZm9yIChsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBpZiAodG9rZW5bMV0udG9Mb3dlckNhc2UoKSA9PT0gXCIhaW1wb3J0YW50XCIpIHtcbiAgICAgICAgbm9kZTIuaW1wb3J0YW50ID0gdHJ1ZTtcbiAgICAgICAgbGV0IHN0cmluZyA9IHRoaXMuc3RyaW5nRnJvbSh0b2tlbnMsIGkpO1xuICAgICAgICBzdHJpbmcgPSB0aGlzLnNwYWNlc0Zyb21FbmQodG9rZW5zKSArIHN0cmluZztcbiAgICAgICAgaWYgKHN0cmluZyAhPT0gXCIgIWltcG9ydGFudFwiKSBub2RlMi5yYXdzLmltcG9ydGFudCA9IHN0cmluZztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuWzFdLnRvTG93ZXJDYXNlKCkgPT09IFwiaW1wb3J0YW50XCIpIHtcbiAgICAgICAgbGV0IGNhY2hlID0gdG9rZW5zLnNsaWNlKDApO1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPiAwOyBqLS0pIHtcbiAgICAgICAgICBsZXQgdHlwZSA9IGNhY2hlW2pdWzBdO1xuICAgICAgICAgIGlmIChzdHIudHJpbSgpLmluZGV4T2YoXCIhXCIpID09PSAwICYmIHR5cGUgIT09IFwic3BhY2VcIikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0ciA9IGNhY2hlLnBvcCgpWzFdICsgc3RyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHIudHJpbSgpLmluZGV4T2YoXCIhXCIpID09PSAwKSB7XG4gICAgICAgICAgbm9kZTIuaW1wb3J0YW50ID0gdHJ1ZTtcbiAgICAgICAgICBub2RlMi5yYXdzLmltcG9ydGFudCA9IHN0cjtcbiAgICAgICAgICB0b2tlbnMgPSBjYWNoZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRva2VuWzBdICE9PSBcInNwYWNlXCIgJiYgdG9rZW5bMF0gIT09IFwiY29tbWVudFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGFzV29yZCA9IHRva2Vucy5zb21lKChpKSA9PiBpWzBdICE9PSBcInNwYWNlXCIgJiYgaVswXSAhPT0gXCJjb21tZW50XCIpO1xuICAgIGlmIChoYXNXb3JkKSB7XG4gICAgICBub2RlMi5yYXdzLmJldHdlZW4gKz0gZmlyc3RTcGFjZXMubWFwKChpKSA9PiBpWzFdKS5qb2luKFwiXCIpO1xuICAgICAgZmlyc3RTcGFjZXMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yYXcobm9kZTIsIFwidmFsdWVcIiwgZmlyc3RTcGFjZXMuY29uY2F0KHRva2VucyksIGN1c3RvbVByb3BlcnR5KTtcbiAgICBpZiAobm9kZTIudmFsdWUuaW5jbHVkZXMoXCI6XCIpICYmICFjdXN0b21Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5jaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpO1xuICAgIH1cbiAgfVxuICBkb3VibGVDb2xvbih0b2tlbikge1xuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICBcIkRvdWJsZSBjb2xvblwiLFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdIH0sXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gKyB0b2tlblsxXS5sZW5ndGggfVxuICAgICk7XG4gIH1cbiAgZW1wdHlSdWxlKHRva2VuKSB7XG4gICAgbGV0IG5vZGUyID0gbmV3IFJ1bGUkMigpO1xuICAgIHRoaXMuaW5pdChub2RlMiwgdG9rZW5bMl0pO1xuICAgIG5vZGUyLnNlbGVjdG9yID0gXCJcIjtcbiAgICBub2RlMi5yYXdzLmJldHdlZW4gPSBcIlwiO1xuICAgIHRoaXMuY3VycmVudCA9IG5vZGUyO1xuICB9XG4gIGVuZCh0b2tlbikge1xuICAgIGlmICh0aGlzLmN1cnJlbnQubm9kZXMgJiYgdGhpcy5jdXJyZW50Lm5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJyZW50LnJhd3Muc2VtaWNvbG9uID0gdGhpcy5zZW1pY29sb247XG4gICAgfVxuICAgIHRoaXMuc2VtaWNvbG9uID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgPSAodGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgfHwgXCJcIikgKyB0aGlzLnNwYWNlcztcbiAgICB0aGlzLnNwYWNlcyA9IFwiXCI7XG4gICAgaWYgKHRoaXMuY3VycmVudC5wYXJlbnQpIHtcbiAgICAgIHRoaXMuY3VycmVudC5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbih0b2tlblsyXSk7XG4gICAgICB0aGlzLmN1cnJlbnQuc291cmNlLmVuZC5vZmZzZXQrKztcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5wYXJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5leHBlY3RlZENsb3NlKHRva2VuKTtcbiAgICB9XG4gIH1cbiAgZW5kRmlsZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50LnBhcmVudCkgdGhpcy51bmNsb3NlZEJsb2NrKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudC5ub2RlcyAmJiB0aGlzLmN1cnJlbnQubm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1cnJlbnQucmF3cy5zZW1pY29sb24gPSB0aGlzLnNlbWljb2xvbjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgPSAodGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgfHwgXCJcIikgKyB0aGlzLnNwYWNlcztcbiAgICB0aGlzLnJvb3Quc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy50b2tlbml6ZXIucG9zaXRpb24oKSk7XG4gIH1cbiAgZnJlZVNlbWljb2xvbih0b2tlbikge1xuICAgIHRoaXMuc3BhY2VzICs9IHRva2VuWzFdO1xuICAgIGlmICh0aGlzLmN1cnJlbnQubm9kZXMpIHtcbiAgICAgIGxldCBwcmV2ID0gdGhpcy5jdXJyZW50Lm5vZGVzW3RoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChwcmV2ICYmIHByZXYudHlwZSA9PT0gXCJydWxlXCIgJiYgIXByZXYucmF3cy5vd25TZW1pY29sb24pIHtcbiAgICAgICAgcHJldi5yYXdzLm93blNlbWljb2xvbiA9IHRoaXMuc3BhY2VzO1xuICAgICAgICB0aGlzLnNwYWNlcyA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIEhlbHBlcnNcbiAgZ2V0UG9zaXRpb24ob2Zmc2V0KSB7XG4gICAgbGV0IHBvcyA9IHRoaXMuaW5wdXQuZnJvbU9mZnNldChvZmZzZXQpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW46IHBvcy5jb2wsXG4gICAgICBsaW5lOiBwb3MubGluZSxcbiAgICAgIG9mZnNldFxuICAgIH07XG4gIH1cbiAgaW5pdChub2RlMiwgb2Zmc2V0KSB7XG4gICAgdGhpcy5jdXJyZW50LnB1c2gobm9kZTIpO1xuICAgIG5vZGUyLnNvdXJjZSA9IHtcbiAgICAgIGlucHV0OiB0aGlzLmlucHV0LFxuICAgICAgc3RhcnQ6IHRoaXMuZ2V0UG9zaXRpb24ob2Zmc2V0KVxuICAgIH07XG4gICAgbm9kZTIucmF3cy5iZWZvcmUgPSB0aGlzLnNwYWNlcztcbiAgICB0aGlzLnNwYWNlcyA9IFwiXCI7XG4gICAgaWYgKG5vZGUyLnR5cGUgIT09IFwiY29tbWVudFwiKSB0aGlzLnNlbWljb2xvbiA9IGZhbHNlO1xuICB9XG4gIG90aGVyKHN0YXJ0KSB7XG4gICAgbGV0IGVuZCA9IGZhbHNlO1xuICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICBsZXQgY29sb24gPSBmYWxzZTtcbiAgICBsZXQgYnJhY2tldCA9IG51bGw7XG4gICAgbGV0IGJyYWNrZXRzID0gW107XG4gICAgbGV0IGN1c3RvbVByb3BlcnR5ID0gc3RhcnRbMV0uc3RhcnRzV2l0aChcIi0tXCIpO1xuICAgIGxldCB0b2tlbnMgPSBbXTtcbiAgICBsZXQgdG9rZW4gPSBzdGFydDtcbiAgICB3aGlsZSAodG9rZW4pIHtcbiAgICAgIHR5cGUgPSB0b2tlblswXTtcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgIGlmICh0eXBlID09PSBcIihcIiB8fCB0eXBlID09PSBcIltcIikge1xuICAgICAgICBpZiAoIWJyYWNrZXQpIGJyYWNrZXQgPSB0b2tlbjtcbiAgICAgICAgYnJhY2tldHMucHVzaCh0eXBlID09PSBcIihcIiA/IFwiKVwiIDogXCJdXCIpO1xuICAgICAgfSBlbHNlIGlmIChjdXN0b21Qcm9wZXJ0eSAmJiBjb2xvbiAmJiB0eXBlID09PSBcIntcIikge1xuICAgICAgICBpZiAoIWJyYWNrZXQpIGJyYWNrZXQgPSB0b2tlbjtcbiAgICAgICAgYnJhY2tldHMucHVzaChcIn1cIik7XG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gXCI7XCIpIHtcbiAgICAgICAgICBpZiAoY29sb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVjbCh0b2tlbnMsIGN1c3RvbVByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwie1wiKSB7XG4gICAgICAgICAgdGhpcy5ydWxlKHRva2Vucyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwifVwiKSB7XG4gICAgICAgICAgdGhpcy50b2tlbml6ZXIuYmFjayh0b2tlbnMucG9wKCkpO1xuICAgICAgICAgIGVuZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCI6XCIpIHtcbiAgICAgICAgICBjb2xvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gYnJhY2tldHNbYnJhY2tldHMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgYnJhY2tldHMucG9wKCk7XG4gICAgICAgIGlmIChicmFja2V0cy5sZW5ndGggPT09IDApIGJyYWNrZXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgdG9rZW4gPSB0aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudG9rZW5pemVyLmVuZE9mRmlsZSgpKSBlbmQgPSB0cnVlO1xuICAgIGlmIChicmFja2V0cy5sZW5ndGggPiAwKSB0aGlzLnVuY2xvc2VkQnJhY2tldChicmFja2V0KTtcbiAgICBpZiAoZW5kICYmIGNvbG9uKSB7XG4gICAgICBpZiAoIWN1c3RvbVByb3BlcnR5KSB7XG4gICAgICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdWzBdO1xuICAgICAgICAgIGlmICh0b2tlbiAhPT0gXCJzcGFjZVwiICYmIHRva2VuICE9PSBcImNvbW1lbnRcIikgYnJlYWs7XG4gICAgICAgICAgdGhpcy50b2tlbml6ZXIuYmFjayh0b2tlbnMucG9wKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRlY2wodG9rZW5zLCBjdXN0b21Qcm9wZXJ0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5rbm93bldvcmQodG9rZW5zKTtcbiAgICB9XG4gIH1cbiAgcGFyc2UoKSB7XG4gICAgbGV0IHRva2VuO1xuICAgIHdoaWxlICghdGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpIHtcbiAgICAgIHRva2VuID0gdGhpcy50b2tlbml6ZXIubmV4dFRva2VuKCk7XG4gICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgIGNhc2UgXCJzcGFjZVwiOlxuICAgICAgICAgIHRoaXMuc3BhY2VzICs9IHRva2VuWzFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiO1wiOlxuICAgICAgICAgIHRoaXMuZnJlZVNlbWljb2xvbih0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ9XCI6XG4gICAgICAgICAgdGhpcy5lbmQodG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY29tbWVudFwiOlxuICAgICAgICAgIHRoaXMuY29tbWVudCh0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdC13b3JkXCI6XG4gICAgICAgICAgdGhpcy5hdHJ1bGUodG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwie1wiOlxuICAgICAgICAgIHRoaXMuZW1wdHlSdWxlKHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLm90aGVyKHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbmRGaWxlKCk7XG4gIH1cbiAgcHJlY2hlY2tNaXNzZWRTZW1pY29sb24oKSB7XG4gIH1cbiAgcmF3KG5vZGUyLCBwcm9wLCB0b2tlbnMsIGN1c3RvbVByb3BlcnR5KSB7XG4gICAgbGV0IHRva2VuLCB0eXBlO1xuICAgIGxldCBsZW5ndGggPSB0b2tlbnMubGVuZ3RoO1xuICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgbGV0IGNsZWFuID0gdHJ1ZTtcbiAgICBsZXQgbmV4dCwgcHJldjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIHR5cGUgPSB0b2tlblswXTtcbiAgICAgIGlmICh0eXBlID09PSBcInNwYWNlXCIgJiYgaSA9PT0gbGVuZ3RoIC0gMSAmJiAhY3VzdG9tUHJvcGVydHkpIHtcbiAgICAgICAgY2xlYW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjb21tZW50XCIpIHtcbiAgICAgICAgcHJldiA9IHRva2Vuc1tpIC0gMV0gPyB0b2tlbnNbaSAtIDFdWzBdIDogXCJlbXB0eVwiO1xuICAgICAgICBuZXh0ID0gdG9rZW5zW2kgKyAxXSA/IHRva2Vuc1tpICsgMV1bMF0gOiBcImVtcHR5XCI7XG4gICAgICAgIGlmICghU0FGRV9DT01NRU5UX05FSUdIQk9SW3ByZXZdICYmICFTQUZFX0NPTU1FTlRfTkVJR0hCT1JbbmV4dF0pIHtcbiAgICAgICAgICBpZiAodmFsdWUuc2xpY2UoLTEpID09PSBcIixcIikge1xuICAgICAgICAgICAgY2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgKz0gdG9rZW5bMV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlICs9IHRva2VuWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNsZWFuKSB7XG4gICAgICBsZXQgcmF3ID0gdG9rZW5zLnJlZHVjZSgoYWxsLCBpKSA9PiBhbGwgKyBpWzFdLCBcIlwiKTtcbiAgICAgIG5vZGUyLnJhd3NbcHJvcF0gPSB7IHJhdywgdmFsdWUgfTtcbiAgICB9XG4gICAgbm9kZTJbcHJvcF0gPSB2YWx1ZTtcbiAgfVxuICBydWxlKHRva2Vucykge1xuICAgIHRva2Vucy5wb3AoKTtcbiAgICBsZXQgbm9kZTIgPSBuZXcgUnVsZSQyKCk7XG4gICAgdGhpcy5pbml0KG5vZGUyLCB0b2tlbnNbMF1bMl0pO1xuICAgIG5vZGUyLnJhd3MuYmV0d2VlbiA9IHRoaXMuc3BhY2VzQW5kQ29tbWVudHNGcm9tRW5kKHRva2Vucyk7XG4gICAgdGhpcy5yYXcobm9kZTIsIFwic2VsZWN0b3JcIiwgdG9rZW5zKTtcbiAgICB0aGlzLmN1cnJlbnQgPSBub2RlMjtcbiAgfVxuICBzcGFjZXNBbmRDb21tZW50c0Zyb21FbmQodG9rZW5zKSB7XG4gICAgbGV0IGxhc3RUb2tlblR5cGU7XG4gICAgbGV0IHNwYWNlcyA9IFwiXCI7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGxhc3RUb2tlblR5cGUgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdWzBdO1xuICAgICAgaWYgKGxhc3RUb2tlblR5cGUgIT09IFwic3BhY2VcIiAmJiBsYXN0VG9rZW5UeXBlICE9PSBcImNvbW1lbnRcIikgYnJlYWs7XG4gICAgICBzcGFjZXMgPSB0b2tlbnMucG9wKClbMV0gKyBzcGFjZXM7XG4gICAgfVxuICAgIHJldHVybiBzcGFjZXM7XG4gIH1cbiAgLy8gRXJyb3JzXG4gIHNwYWNlc0FuZENvbW1lbnRzRnJvbVN0YXJ0KHRva2Vucykge1xuICAgIGxldCBuZXh0O1xuICAgIGxldCBzcGFjZXMgPSBcIlwiO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBuZXh0ID0gdG9rZW5zWzBdWzBdO1xuICAgICAgaWYgKG5leHQgIT09IFwic3BhY2VcIiAmJiBuZXh0ICE9PSBcImNvbW1lbnRcIikgYnJlYWs7XG4gICAgICBzcGFjZXMgKz0gdG9rZW5zLnNoaWZ0KClbMV07XG4gICAgfVxuICAgIHJldHVybiBzcGFjZXM7XG4gIH1cbiAgc3BhY2VzRnJvbUVuZCh0b2tlbnMpIHtcbiAgICBsZXQgbGFzdFRva2VuVHlwZTtcbiAgICBsZXQgc3BhY2VzID0gXCJcIjtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgbGFzdFRva2VuVHlwZSA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1bMF07XG4gICAgICBpZiAobGFzdFRva2VuVHlwZSAhPT0gXCJzcGFjZVwiKSBicmVhaztcbiAgICAgIHNwYWNlcyA9IHRva2Vucy5wb3AoKVsxXSArIHNwYWNlcztcbiAgICB9XG4gICAgcmV0dXJuIHNwYWNlcztcbiAgfVxuICBzdHJpbmdGcm9tKHRva2VucywgZnJvbSkge1xuICAgIGxldCByZXN1bHQyID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0MiArPSB0b2tlbnNbaV1bMV07XG4gICAgfVxuICAgIHRva2Vucy5zcGxpY2UoZnJvbSwgdG9rZW5zLmxlbmd0aCAtIGZyb20pO1xuICAgIHJldHVybiByZXN1bHQyO1xuICB9XG4gIHVuY2xvc2VkQmxvY2soKSB7XG4gICAgbGV0IHBvcyA9IHRoaXMuY3VycmVudC5zb3VyY2Uuc3RhcnQ7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcIlVuY2xvc2VkIGJsb2NrXCIsIHBvcy5saW5lLCBwb3MuY29sdW1uKTtcbiAgfVxuICB1bmNsb3NlZEJyYWNrZXQoYnJhY2tldCkge1xuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICBcIlVuY2xvc2VkIGJyYWNrZXRcIixcbiAgICAgIHsgb2Zmc2V0OiBicmFja2V0WzJdIH0sXG4gICAgICB7IG9mZnNldDogYnJhY2tldFsyXSArIDEgfVxuICAgICk7XG4gIH1cbiAgdW5leHBlY3RlZENsb3NlKHRva2VuKSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiVW5leHBlY3RlZCB9XCIsXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSArIDEgfVxuICAgICk7XG4gIH1cbiAgdW5rbm93bldvcmQodG9rZW5zKSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiVW5rbm93biB3b3JkXCIsXG4gICAgICB7IG9mZnNldDogdG9rZW5zWzBdWzJdIH0sXG4gICAgICB7IG9mZnNldDogdG9rZW5zWzBdWzJdICsgdG9rZW5zWzBdWzFdLmxlbmd0aCB9XG4gICAgKTtcbiAgfVxuICB1bm5hbWVkQXRydWxlKG5vZGUyLCB0b2tlbikge1xuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICBcIkF0LXJ1bGUgd2l0aG91dCBuYW1lXCIsXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSArIHRva2VuWzFdLmxlbmd0aCB9XG4gICAgKTtcbiAgfVxufTtcbnZhciBwYXJzZXIgPSBQYXJzZXIkMTtcbmxldCBDb250YWluZXIkMiA9IGNvbnRhaW5lcjtcbmxldCBQYXJzZXIyID0gcGFyc2VyO1xubGV0IElucHV0JDIgPSBpbnB1dDtcbmZ1bmN0aW9uIHBhcnNlJDMoY3NzLCBvcHRzKSB7XG4gIGxldCBpbnB1dDIgPSBuZXcgSW5wdXQkMihjc3MsIG9wdHMpO1xuICBsZXQgcGFyc2VyMiA9IG5ldyBQYXJzZXIyKGlucHV0Mik7XG4gIHRyeSB7XG4gICAgcGFyc2VyMi5wYXJzZSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT09IFwiQ3NzU3ludGF4RXJyb3JcIiAmJiBvcHRzICYmIG9wdHMuZnJvbSkge1xuICAgICAgICBpZiAoL1xcLnNjc3MkL2kudGVzdChvcHRzLmZyb20pKSB7XG4gICAgICAgICAgZS5tZXNzYWdlICs9IFwiXFxuWW91IHRyaWVkIHRvIHBhcnNlIFNDU1Mgd2l0aCB0aGUgc3RhbmRhcmQgQ1NTIHBhcnNlcjsgdHJ5IGFnYWluIHdpdGggdGhlIHBvc3Rjc3Mtc2NzcyBwYXJzZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmICgvXFwuc2Fzcy9pLnRlc3Qob3B0cy5mcm9tKSkge1xuICAgICAgICAgIGUubWVzc2FnZSArPSBcIlxcbllvdSB0cmllZCB0byBwYXJzZSBTYXNzIHdpdGggdGhlIHN0YW5kYXJkIENTUyBwYXJzZXI7IHRyeSBhZ2FpbiB3aXRoIHRoZSBwb3N0Y3NzLXNhc3MgcGFyc2VyXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoL1xcLmxlc3MkL2kudGVzdChvcHRzLmZyb20pKSB7XG4gICAgICAgICAgZS5tZXNzYWdlICs9IFwiXFxuWW91IHRyaWVkIHRvIHBhcnNlIExlc3Mgd2l0aCB0aGUgc3RhbmRhcmQgQ1NTIHBhcnNlcjsgdHJ5IGFnYWluIHdpdGggdGhlIHBvc3Rjc3MtbGVzcyBwYXJzZXJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG4gIHJldHVybiBwYXJzZXIyLnJvb3Q7XG59XG52YXIgcGFyc2VfMSA9IHBhcnNlJDM7XG5wYXJzZSQzLmRlZmF1bHQgPSBwYXJzZSQzO1xuQ29udGFpbmVyJDIucmVnaXN0ZXJQYXJzZShwYXJzZSQzKTtcbmxldCB7IGlzQ2xlYW4sIG15IH0gPSBzeW1ib2xzO1xubGV0IE1hcEdlbmVyYXRvciQxID0gbWFwR2VuZXJhdG9yO1xubGV0IHN0cmluZ2lmeSQyID0gc3RyaW5naWZ5XzE7XG5sZXQgQ29udGFpbmVyJDEgPSBjb250YWluZXI7XG5sZXQgRG9jdW1lbnQkMiA9IGRvY3VtZW50JDE7XG5sZXQgd2Fybk9uY2UkMSA9IHdhcm5PbmNlJDI7XG5sZXQgUmVzdWx0JDIgPSByZXN1bHQ7XG5sZXQgcGFyc2UkMiA9IHBhcnNlXzE7XG5sZXQgUm9vdCQzID0gcm9vdDtcbmNvbnN0IFRZUEVfVE9fQ0xBU1NfTkFNRSA9IHtcbiAgYXRydWxlOiBcIkF0UnVsZVwiLFxuICBjb21tZW50OiBcIkNvbW1lbnRcIixcbiAgZGVjbDogXCJEZWNsYXJhdGlvblwiLFxuICBkb2N1bWVudDogXCJEb2N1bWVudFwiLFxuICByb290OiBcIlJvb3RcIixcbiAgcnVsZTogXCJSdWxlXCJcbn07XG5jb25zdCBQTFVHSU5fUFJPUFMgPSB7XG4gIEF0UnVsZTogdHJ1ZSxcbiAgQXRSdWxlRXhpdDogdHJ1ZSxcbiAgQ29tbWVudDogdHJ1ZSxcbiAgQ29tbWVudEV4aXQ6IHRydWUsXG4gIERlY2xhcmF0aW9uOiB0cnVlLFxuICBEZWNsYXJhdGlvbkV4aXQ6IHRydWUsXG4gIERvY3VtZW50OiB0cnVlLFxuICBEb2N1bWVudEV4aXQ6IHRydWUsXG4gIE9uY2U6IHRydWUsXG4gIE9uY2VFeGl0OiB0cnVlLFxuICBwb3N0Y3NzUGx1Z2luOiB0cnVlLFxuICBwcmVwYXJlOiB0cnVlLFxuICBSb290OiB0cnVlLFxuICBSb290RXhpdDogdHJ1ZSxcbiAgUnVsZTogdHJ1ZSxcbiAgUnVsZUV4aXQ6IHRydWVcbn07XG5jb25zdCBOT1RfVklTSVRPUlMgPSB7XG4gIE9uY2U6IHRydWUsXG4gIHBvc3Rjc3NQbHVnaW46IHRydWUsXG4gIHByZXBhcmU6IHRydWVcbn07XG5jb25zdCBDSElMRFJFTiA9IDA7XG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gZ2V0RXZlbnRzKG5vZGUyKSB7XG4gIGxldCBrZXkgPSBmYWxzZTtcbiAgbGV0IHR5cGUgPSBUWVBFX1RPX0NMQVNTX05BTUVbbm9kZTIudHlwZV07XG4gIGlmIChub2RlMi50eXBlID09PSBcImRlY2xcIikge1xuICAgIGtleSA9IG5vZGUyLnByb3AudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmIChub2RlMi50eXBlID09PSBcImF0cnVsZVwiKSB7XG4gICAga2V5ID0gbm9kZTIubmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIGlmIChrZXkgJiYgbm9kZTIuYXBwZW5kKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHR5cGUsXG4gICAgICB0eXBlICsgXCItXCIgKyBrZXksXG4gICAgICBDSElMRFJFTixcbiAgICAgIHR5cGUgKyBcIkV4aXRcIixcbiAgICAgIHR5cGUgKyBcIkV4aXQtXCIgKyBrZXlcbiAgICBdO1xuICB9IGVsc2UgaWYgKGtleSkge1xuICAgIHJldHVybiBbdHlwZSwgdHlwZSArIFwiLVwiICsga2V5LCB0eXBlICsgXCJFeGl0XCIsIHR5cGUgKyBcIkV4aXQtXCIgKyBrZXldO1xuICB9IGVsc2UgaWYgKG5vZGUyLmFwcGVuZCkge1xuICAgIHJldHVybiBbdHlwZSwgQ0hJTERSRU4sIHR5cGUgKyBcIkV4aXRcIl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFt0eXBlLCB0eXBlICsgXCJFeGl0XCJdO1xuICB9XG59XG5mdW5jdGlvbiB0b1N0YWNrKG5vZGUyKSB7XG4gIGxldCBldmVudHM7XG4gIGlmIChub2RlMi50eXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICBldmVudHMgPSBbXCJEb2N1bWVudFwiLCBDSElMRFJFTiwgXCJEb2N1bWVudEV4aXRcIl07XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJyb290XCIpIHtcbiAgICBldmVudHMgPSBbXCJSb290XCIsIENISUxEUkVOLCBcIlJvb3RFeGl0XCJdO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50cyA9IGdldEV2ZW50cyhub2RlMik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBldmVudEluZGV4OiAwLFxuICAgIGV2ZW50cyxcbiAgICBpdGVyYXRvcjogMCxcbiAgICBub2RlOiBub2RlMixcbiAgICB2aXNpdG9ySW5kZXg6IDAsXG4gICAgdmlzaXRvcnM6IFtdXG4gIH07XG59XG5mdW5jdGlvbiBjbGVhbk1hcmtzKG5vZGUyKSB7XG4gIG5vZGUyW2lzQ2xlYW5dID0gZmFsc2U7XG4gIGlmIChub2RlMi5ub2Rlcykgbm9kZTIubm9kZXMuZm9yRWFjaCgoaSkgPT4gY2xlYW5NYXJrcyhpKSk7XG4gIHJldHVybiBub2RlMjtcbn1cbmxldCBwb3N0Y3NzJDIgPSB7fTtcbmxldCBMYXp5UmVzdWx0JDIgPSBjbGFzcyBMYXp5UmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHJvY2Vzc29yMiwgY3NzLCBvcHRzKSB7XG4gICAgdGhpcy5zdHJpbmdpZmllZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgbGV0IHJvb3QyO1xuICAgIGlmICh0eXBlb2YgY3NzID09PSBcIm9iamVjdFwiICYmIGNzcyAhPT0gbnVsbCAmJiAoY3NzLnR5cGUgPT09IFwicm9vdFwiIHx8IGNzcy50eXBlID09PSBcImRvY3VtZW50XCIpKSB7XG4gICAgICByb290MiA9IGNsZWFuTWFya3MoY3NzKTtcbiAgICB9IGVsc2UgaWYgKGNzcyBpbnN0YW5jZW9mIExhenlSZXN1bHQgfHwgY3NzIGluc3RhbmNlb2YgUmVzdWx0JDIpIHtcbiAgICAgIHJvb3QyID0gY2xlYW5NYXJrcyhjc3Mucm9vdCk7XG4gICAgICBpZiAoY3NzLm1hcCkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdHMubWFwID09PSBcInVuZGVmaW5lZFwiKSBvcHRzLm1hcCA9IHt9O1xuICAgICAgICBpZiAoIW9wdHMubWFwLmlubGluZSkgb3B0cy5tYXAuaW5saW5lID0gZmFsc2U7XG4gICAgICAgIG9wdHMubWFwLnByZXYgPSBjc3MubWFwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGFyc2VyMiA9IHBhcnNlJDI7XG4gICAgICBpZiAob3B0cy5zeW50YXgpIHBhcnNlcjIgPSBvcHRzLnN5bnRheC5wYXJzZTtcbiAgICAgIGlmIChvcHRzLnBhcnNlcikgcGFyc2VyMiA9IG9wdHMucGFyc2VyO1xuICAgICAgaWYgKHBhcnNlcjIucGFyc2UpIHBhcnNlcjIgPSBwYXJzZXIyLnBhcnNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcm9vdDIgPSBwYXJzZXIyKGNzcywgb3B0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICAgIGlmIChyb290MiAmJiAhcm9vdDJbbXldKSB7XG4gICAgICAgIENvbnRhaW5lciQxLnJlYnVpbGQocm9vdDIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlc3VsdCA9IG5ldyBSZXN1bHQkMihwcm9jZXNzb3IyLCByb290Miwgb3B0cyk7XG4gICAgdGhpcy5oZWxwZXJzID0gX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgcG9zdGNzcyQyKSwgeyBwb3N0Y3NzOiBwb3N0Y3NzJDIsIHJlc3VsdDogdGhpcy5yZXN1bHQgfSk7XG4gICAgdGhpcy5wbHVnaW5zID0gdGhpcy5wcm9jZXNzb3IucGx1Z2lucy5tYXAoKHBsdWdpbjIpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luMiA9PT0gXCJvYmplY3RcIiAmJiBwbHVnaW4yLnByZXBhcmUpIHtcbiAgICAgICAgcmV0dXJuIF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCBwbHVnaW4yKSwgcGx1Z2luMi5wcmVwYXJlKHRoaXMucmVzdWx0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGx1Z2luMjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBhc3luYygpIHtcbiAgICBpZiAodGhpcy5lcnJvcikgcmV0dXJuIFByb21pc2UucmVqZWN0KHRoaXMuZXJyb3IpO1xuICAgIGlmICh0aGlzLnByb2Nlc3NlZCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc3VsdCk7XG4gICAgaWYgKCF0aGlzLnByb2Nlc3NpbmcpIHtcbiAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRoaXMucnVuQXN5bmMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc2luZztcbiAgfVxuICBjYXRjaChvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS5jYXRjaChvblJlamVjdGVkKTtcbiAgfVxuICBmaW5hbGx5KG9uRmluYWxseSkge1xuICAgIHJldHVybiB0aGlzLmFzeW5jKCkudGhlbihvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gIH1cbiAgZ2V0QXN5bmNFcnJvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2UgcHJvY2Vzcyhjc3MpLnRoZW4oY2IpIHRvIHdvcmsgd2l0aCBhc3luYyBwbHVnaW5zXCIpO1xuICB9XG4gIGhhbmRsZUVycm9yKGVycm9yLCBub2RlMikge1xuICAgIGxldCBwbHVnaW4yID0gdGhpcy5yZXN1bHQubGFzdFBsdWdpbjtcbiAgICB0cnkge1xuICAgICAgaWYgKG5vZGUyKSBub2RlMi5hZGRUb0Vycm9yKGVycm9yKTtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIkNzc1N5bnRheEVycm9yXCIgJiYgIWVycm9yLnBsdWdpbikge1xuICAgICAgICBlcnJvci5wbHVnaW4gPSBwbHVnaW4yLnBvc3Rjc3NQbHVnaW47XG4gICAgICAgIGVycm9yLnNldE1lc3NhZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAocGx1Z2luMi5wb3N0Y3NzVmVyc2lvbikge1xuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgIGxldCBwbHVnaW5OYW1lID0gcGx1Z2luMi5wb3N0Y3NzUGx1Z2luO1xuICAgICAgICAgIGxldCBwbHVnaW5WZXIgPSBwbHVnaW4yLnBvc3Rjc3NWZXJzaW9uO1xuICAgICAgICAgIGxldCBydW50aW1lVmVyID0gdGhpcy5yZXN1bHQucHJvY2Vzc29yLnZlcnNpb247XG4gICAgICAgICAgbGV0IGEgPSBwbHVnaW5WZXIuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIGxldCBiID0gcnVudGltZVZlci5zcGxpdChcIi5cIik7XG4gICAgICAgICAgaWYgKGFbMF0gIT09IGJbMF0gfHwgcGFyc2VJbnQoYVsxXSkgPiBwYXJzZUludChiWzFdKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJVbmtub3duIGVycm9yIGZyb20gUG9zdENTUyBwbHVnaW4uIFlvdXIgY3VycmVudCBQb3N0Q1NTIHZlcnNpb24gaXMgXCIgKyBydW50aW1lVmVyICsgXCIsIGJ1dCBcIiArIHBsdWdpbk5hbWUgKyBcIiB1c2VzIFwiICsgcGx1Z2luVmVyICsgXCIuIFBlcmhhcHMgdGhpcyBpcyB0aGUgc291cmNlIG9mIHRoZSBlcnJvciBiZWxvdy5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG4gIHByZXBhcmVWaXNpdG9ycygpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIGxldCBhZGQgPSAocGx1Z2luMiwgdHlwZSwgY2IpID0+IHtcbiAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbdHlwZV0pIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKFtwbHVnaW4yLCBjYl0pO1xuICAgIH07XG4gICAgZm9yIChsZXQgcGx1Z2luMiBvZiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luMiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKGxldCBldmVudCBpbiBwbHVnaW4yKSB7XG4gICAgICAgICAgaWYgKCFQTFVHSU5fUFJPUFNbZXZlbnRdICYmIC9eW0EtWl0vLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBVbmtub3duIGV2ZW50ICR7ZXZlbnR9IGluICR7cGx1Z2luMi5wb3N0Y3NzUGx1Z2lufS4gVHJ5IHRvIHVwZGF0ZSBQb3N0Q1NTICgke3RoaXMucHJvY2Vzc29yLnZlcnNpb259IG5vdykuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFOT1RfVklTSVRPUlNbZXZlbnRdKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBsdWdpbjJbZXZlbnRdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiBwbHVnaW4yW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICBhZGQocGx1Z2luMiwgZXZlbnQsIHBsdWdpbjJbZXZlbnRdW2ZpbHRlcl0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhZGQoXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbjIsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ICsgXCItXCIgKyBmaWx0ZXIudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luMltldmVudF1bZmlsdGVyXVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbjJbZXZlbnRdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgYWRkKHBsdWdpbjIsIGV2ZW50LCBwbHVnaW4yW2V2ZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaGFzTGlzdGVuZXIgPSBPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycykubGVuZ3RoID4gMDtcbiAgfVxuICBhc3luYyBydW5Bc3luYygpIHtcbiAgICB0aGlzLnBsdWdpbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwbHVnaW4yID0gdGhpcy5wbHVnaW5zW2ldO1xuICAgICAgbGV0IHByb21pc2UgPSB0aGlzLnJ1bk9uUm9vdChwbHVnaW4yKTtcbiAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBwcm9taXNlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJlcGFyZVZpc2l0b3JzKCk7XG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXIpIHtcbiAgICAgIGxldCByb290MiA9IHRoaXMucmVzdWx0LnJvb3Q7XG4gICAgICB3aGlsZSAoIXJvb3QyW2lzQ2xlYW5dKSB7XG4gICAgICAgIHJvb3QyW2lzQ2xlYW5dID0gdHJ1ZTtcbiAgICAgICAgbGV0IHN0YWNrID0gW3RvU3RhY2socm9vdDIpXTtcbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMudmlzaXRUaWNrKHN0YWNrKTtcbiAgICAgICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCBwcm9taXNlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBsZXQgbm9kZTIgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXS5ub2RlO1xuICAgICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUsIG5vZGUyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCkge1xuICAgICAgICBmb3IgKGxldCBbcGx1Z2luMiwgdmlzaXRvcl0gb2YgdGhpcy5saXN0ZW5lcnMuT25jZUV4aXQpIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luID0gcGx1Z2luMjtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHJvb3QyLnR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICAgICAgICBsZXQgcm9vdHMgPSByb290Mi5ub2Rlcy5tYXAoXG4gICAgICAgICAgICAgICAgKHN1YlJvb3QpID0+IHZpc2l0b3Ioc3ViUm9vdCwgdGhpcy5oZWxwZXJzKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyb290cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhd2FpdCB2aXNpdG9yKHJvb3QyLCB0aGlzLmhlbHBlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbiAgfVxuICBydW5PblJvb3QocGx1Z2luMikge1xuICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW4yO1xuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbjIgPT09IFwib2JqZWN0XCIgJiYgcGx1Z2luMi5PbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5yb290LnR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICAgIGxldCByb290cyA9IHRoaXMucmVzdWx0LnJvb3Qubm9kZXMubWFwKFxuICAgICAgICAgICAgKHJvb3QyKSA9PiBwbHVnaW4yLk9uY2Uocm9vdDIsIHRoaXMuaGVscGVycylcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpc1Byb21pc2Uocm9vdHNbMF0pKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocm9vdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcm9vdHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBsdWdpbjIuT25jZSh0aGlzLnJlc3VsdC5yb290LCB0aGlzLmhlbHBlcnMpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luMiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4yKHRoaXMucmVzdWx0LnJvb3QsIHRoaXMucmVzdWx0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG4gIHN0cmluZ2lmeSgpIHtcbiAgICBpZiAodGhpcy5lcnJvcikgdGhyb3cgdGhpcy5lcnJvcjtcbiAgICBpZiAodGhpcy5zdHJpbmdpZmllZCkgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIHRoaXMuc3RyaW5naWZpZWQgPSB0cnVlO1xuICAgIHRoaXMuc3luYygpO1xuICAgIGxldCBvcHRzID0gdGhpcy5yZXN1bHQub3B0cztcbiAgICBsZXQgc3RyID0gc3RyaW5naWZ5JDI7XG4gICAgaWYgKG9wdHMuc3ludGF4KSBzdHIgPSBvcHRzLnN5bnRheC5zdHJpbmdpZnk7XG4gICAgaWYgKG9wdHMuc3RyaW5naWZpZXIpIHN0ciA9IG9wdHMuc3RyaW5naWZpZXI7XG4gICAgaWYgKHN0ci5zdHJpbmdpZnkpIHN0ciA9IHN0ci5zdHJpbmdpZnk7XG4gICAgbGV0IG1hcCA9IG5ldyBNYXBHZW5lcmF0b3IkMShzdHIsIHRoaXMucmVzdWx0LnJvb3QsIHRoaXMucmVzdWx0Lm9wdHMpO1xuICAgIGxldCBkYXRhID0gbWFwLmdlbmVyYXRlKCk7XG4gICAgdGhpcy5yZXN1bHQuY3NzID0gZGF0YVswXTtcbiAgICB0aGlzLnJlc3VsdC5tYXAgPSBkYXRhWzFdO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuICBzeW5jKCkge1xuICAgIGlmICh0aGlzLmVycm9yKSB0aHJvdyB0aGlzLmVycm9yO1xuICAgIGlmICh0aGlzLnByb2Nlc3NlZCkgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XG4gICAgICB0aHJvdyB0aGlzLmdldEFzeW5jRXJyb3IoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgcGx1Z2luMiBvZiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy5ydW5PblJvb3QocGx1Z2luMik7XG4gICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIHRocm93IHRoaXMuZ2V0QXN5bmNFcnJvcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByZXBhcmVWaXNpdG9ycygpO1xuICAgIGlmICh0aGlzLmhhc0xpc3RlbmVyKSB7XG4gICAgICBsZXQgcm9vdDIgPSB0aGlzLnJlc3VsdC5yb290O1xuICAgICAgd2hpbGUgKCFyb290Mltpc0NsZWFuXSkge1xuICAgICAgICByb290Mltpc0NsZWFuXSA9IHRydWU7XG4gICAgICAgIHRoaXMud2Fsa1N5bmMocm9vdDIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0KSB7XG4gICAgICAgIGlmIChyb290Mi50eXBlID09PSBcImRvY3VtZW50XCIpIHtcbiAgICAgICAgICBmb3IgKGxldCBzdWJSb290IG9mIHJvb3QyLm5vZGVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0U3luYyh0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCwgc3ViUm9vdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmlzaXRTeW5jKHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0LCByb290Mik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG4gIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgaWYgKCEoXCJmcm9tXCIgaW4gdGhpcy5vcHRzKSkge1xuICAgICAgICB3YXJuT25jZSQxKFxuICAgICAgICAgIFwiV2l0aG91dCBgZnJvbWAgb3B0aW9uIFBvc3RDU1MgY291bGQgZ2VuZXJhdGUgd3Jvbmcgc291cmNlIG1hcCBhbmQgd2lsbCBub3QgZmluZCBCcm93c2Vyc2xpc3QgY29uZmlnLiBTZXQgaXQgdG8gQ1NTIGZpbGUgcGF0aCBvciB0byBgdW5kZWZpbmVkYCB0byBwcmV2ZW50IHRoaXMgd2FybmluZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hc3luYygpLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNzcztcbiAgfVxuICB2aXNpdFN5bmModmlzaXRvcnMsIG5vZGUyKSB7XG4gICAgZm9yIChsZXQgW3BsdWdpbjIsIHZpc2l0b3JdIG9mIHZpc2l0b3JzKSB7XG4gICAgICB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luID0gcGx1Z2luMjtcbiAgICAgIGxldCBwcm9taXNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvbWlzZSA9IHZpc2l0b3Iobm9kZTIsIHRoaXMuaGVscGVycyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSwgbm9kZTIucHJveHlPZik7XG4gICAgICB9XG4gICAgICBpZiAobm9kZTIudHlwZSAhPT0gXCJyb290XCIgJiYgbm9kZTIudHlwZSAhPT0gXCJkb2N1bWVudFwiICYmICFub2RlMi5wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIHRocm93IHRoaXMuZ2V0QXN5bmNFcnJvcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB2aXNpdFRpY2soc3RhY2spIHtcbiAgICBsZXQgdmlzaXQyID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgbGV0IHsgbm9kZTogbm9kZTIsIHZpc2l0b3JzIH0gPSB2aXNpdDI7XG4gICAgaWYgKG5vZGUyLnR5cGUgIT09IFwicm9vdFwiICYmIG5vZGUyLnR5cGUgIT09IFwiZG9jdW1lbnRcIiAmJiAhbm9kZTIucGFyZW50KSB7XG4gICAgICBzdGFjay5wb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZpc2l0b3JzLmxlbmd0aCA+IDAgJiYgdmlzaXQyLnZpc2l0b3JJbmRleCA8IHZpc2l0b3JzLmxlbmd0aCkge1xuICAgICAgbGV0IFtwbHVnaW4yLCB2aXNpdG9yXSA9IHZpc2l0b3JzW3Zpc2l0Mi52aXNpdG9ySW5kZXhdO1xuICAgICAgdmlzaXQyLnZpc2l0b3JJbmRleCArPSAxO1xuICAgICAgaWYgKHZpc2l0Mi52aXNpdG9ySW5kZXggPT09IHZpc2l0b3JzLmxlbmd0aCkge1xuICAgICAgICB2aXNpdDIudmlzaXRvcnMgPSBbXTtcbiAgICAgICAgdmlzaXQyLnZpc2l0b3JJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luID0gcGx1Z2luMjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yKG5vZGUyLnRvUHJveHkoKSwgdGhpcy5oZWxwZXJzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlLCBub2RlMik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2aXNpdDIuaXRlcmF0b3IgIT09IDApIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHZpc2l0Mi5pdGVyYXRvcjtcbiAgICAgIGxldCBjaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCA9IG5vZGUyLm5vZGVzW25vZGUyLmluZGV4ZXNbaXRlcmF0b3JdXSkge1xuICAgICAgICBub2RlMi5pbmRleGVzW2l0ZXJhdG9yXSArPSAxO1xuICAgICAgICBpZiAoIWNoaWxkW2lzQ2xlYW5dKSB7XG4gICAgICAgICAgY2hpbGRbaXNDbGVhbl0gPSB0cnVlO1xuICAgICAgICAgIHN0YWNrLnB1c2godG9TdGFjayhjaGlsZCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmlzaXQyLml0ZXJhdG9yID0gMDtcbiAgICAgIGRlbGV0ZSBub2RlMi5pbmRleGVzW2l0ZXJhdG9yXTtcbiAgICB9XG4gICAgbGV0IGV2ZW50cyA9IHZpc2l0Mi5ldmVudHM7XG4gICAgd2hpbGUgKHZpc2l0Mi5ldmVudEluZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IGV2ZW50ID0gZXZlbnRzW3Zpc2l0Mi5ldmVudEluZGV4XTtcbiAgICAgIHZpc2l0Mi5ldmVudEluZGV4ICs9IDE7XG4gICAgICBpZiAoZXZlbnQgPT09IENISUxEUkVOKSB7XG4gICAgICAgIGlmIChub2RlMi5ub2RlcyAmJiBub2RlMi5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICBub2RlMltpc0NsZWFuXSA9IHRydWU7XG4gICAgICAgICAgdmlzaXQyLml0ZXJhdG9yID0gbm9kZTIuZ2V0SXRlcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICB2aXNpdDIudmlzaXRvcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhY2sucG9wKCk7XG4gIH1cbiAgd2Fsa1N5bmMobm9kZTIpIHtcbiAgICBub2RlMltpc0NsZWFuXSA9IHRydWU7XG4gICAgbGV0IGV2ZW50cyA9IGdldEV2ZW50cyhub2RlMik7XG4gICAgZm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICBpZiAoZXZlbnQgPT09IENISUxEUkVOKSB7XG4gICAgICAgIGlmIChub2RlMi5ub2Rlcykge1xuICAgICAgICAgIG5vZGUyLmVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkW2lzQ2xlYW5dKSB0aGlzLndhbGtTeW5jKGNoaWxkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHZpc2l0b3JzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICBpZiAodmlzaXRvcnMpIHtcbiAgICAgICAgICBpZiAodGhpcy52aXNpdFN5bmModmlzaXRvcnMsIG5vZGUyLnRvUHJveHkoKSkpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB3YXJuaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jKCkud2FybmluZ3MoKTtcbiAgfVxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKS5jb250ZW50O1xuICB9XG4gIGdldCBjc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkuY3NzO1xuICB9XG4gIGdldCBtYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkubWFwO1xuICB9XG4gIGdldCBtZXNzYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jKCkubWVzc2FnZXM7XG4gIH1cbiAgZ2V0IG9wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0Lm9wdHM7XG4gIH1cbiAgZ2V0IHByb2Nlc3NvcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQucHJvY2Vzc29yO1xuICB9XG4gIGdldCByb290KCkge1xuICAgIHJldHVybiB0aGlzLnN5bmMoKS5yb290O1xuICB9XG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gXCJMYXp5UmVzdWx0XCI7XG4gIH1cbn07XG5MYXp5UmVzdWx0JDIucmVnaXN0ZXJQb3N0Y3NzID0gKGRlcGVuZGFudCkgPT4ge1xuICBwb3N0Y3NzJDIgPSBkZXBlbmRhbnQ7XG59O1xudmFyIGxhenlSZXN1bHQgPSBMYXp5UmVzdWx0JDI7XG5MYXp5UmVzdWx0JDIuZGVmYXVsdCA9IExhenlSZXN1bHQkMjtcblJvb3QkMy5yZWdpc3RlckxhenlSZXN1bHQoTGF6eVJlc3VsdCQyKTtcbkRvY3VtZW50JDIucmVnaXN0ZXJMYXp5UmVzdWx0KExhenlSZXN1bHQkMik7XG5sZXQgTWFwR2VuZXJhdG9yMiA9IG1hcEdlbmVyYXRvcjtcbmxldCBzdHJpbmdpZnkkMSA9IHN0cmluZ2lmeV8xO1xubGV0IHdhcm5PbmNlMiA9IHdhcm5PbmNlJDI7XG5sZXQgcGFyc2UkMSA9IHBhcnNlXzE7XG5jb25zdCBSZXN1bHQkMSA9IHJlc3VsdDtcbmxldCBOb1dvcmtSZXN1bHQkMSA9IGNsYXNzIE5vV29ya1Jlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHByb2Nlc3NvcjIsIGNzcywgb3B0cykge1xuICAgIGNzcyA9IGNzcy50b1N0cmluZygpO1xuICAgIHRoaXMuc3RyaW5naWZpZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9wcm9jZXNzb3IgPSBwcm9jZXNzb3IyO1xuICAgIHRoaXMuX2NzcyA9IGNzcztcbiAgICB0aGlzLl9vcHRzID0gb3B0cztcbiAgICB0aGlzLl9tYXAgPSB2b2lkIDA7XG4gICAgbGV0IHJvb3QyO1xuICAgIGxldCBzdHIgPSBzdHJpbmdpZnkkMTtcbiAgICB0aGlzLnJlc3VsdCA9IG5ldyBSZXN1bHQkMSh0aGlzLl9wcm9jZXNzb3IsIHJvb3QyLCB0aGlzLl9vcHRzKTtcbiAgICB0aGlzLnJlc3VsdC5jc3MgPSBjc3M7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnJlc3VsdCwgXCJyb290XCIsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYucm9vdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwID0gbmV3IE1hcEdlbmVyYXRvcjIoc3RyLCByb290MiwgdGhpcy5fb3B0cywgY3NzKTtcbiAgICBpZiAobWFwLmlzTWFwKCkpIHtcbiAgICAgIGxldCBbZ2VuZXJhdGVkQ1NTLCBnZW5lcmF0ZWRNYXBdID0gbWFwLmdlbmVyYXRlKCk7XG4gICAgICBpZiAoZ2VuZXJhdGVkQ1NTKSB7XG4gICAgICAgIHRoaXMucmVzdWx0LmNzcyA9IGdlbmVyYXRlZENTUztcbiAgICAgIH1cbiAgICAgIGlmIChnZW5lcmF0ZWRNYXApIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubWFwID0gZ2VuZXJhdGVkTWFwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAuY2xlYXJBbm5vdGF0aW9uKCk7XG4gICAgICB0aGlzLnJlc3VsdC5jc3MgPSBtYXAuY3NzO1xuICAgIH1cbiAgfVxuICBhc3luYygpIHtcbiAgICBpZiAodGhpcy5lcnJvcikgcmV0dXJuIFByb21pc2UucmVqZWN0KHRoaXMuZXJyb3IpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXN1bHQpO1xuICB9XG4gIGNhdGNoKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luYygpLmNhdGNoKG9uUmVqZWN0ZWQpO1xuICB9XG4gIGZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgfVxuICBzeW5jKCkge1xuICAgIGlmICh0aGlzLmVycm9yKSB0aHJvdyB0aGlzLmVycm9yO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuICB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGlmICghKFwiZnJvbVwiIGluIHRoaXMuX29wdHMpKSB7XG4gICAgICAgIHdhcm5PbmNlMihcbiAgICAgICAgICBcIldpdGhvdXQgYGZyb21gIG9wdGlvbiBQb3N0Q1NTIGNvdWxkIGdlbmVyYXRlIHdyb25nIHNvdXJjZSBtYXAgYW5kIHdpbGwgbm90IGZpbmQgQnJvd3NlcnNsaXN0IGNvbmZpZy4gU2V0IGl0IHRvIENTUyBmaWxlIHBhdGggb3IgdG8gYHVuZGVmaW5lZGAgdG8gcHJldmVudCB0aGlzIHdhcm5pbmcuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3NzO1xuICB9XG4gIHdhcm5pbmdzKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQuY3NzO1xuICB9XG4gIGdldCBjc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LmNzcztcbiAgfVxuICBnZXQgbWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5tYXA7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VzKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBnZXQgb3B0cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQub3B0cztcbiAgfVxuICBnZXQgcHJvY2Vzc29yKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5wcm9jZXNzb3I7XG4gIH1cbiAgZ2V0IHJvb3QoKSB7XG4gICAgaWYgKHRoaXMuX3Jvb3QpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290O1xuICAgIH1cbiAgICBsZXQgcm9vdDI7XG4gICAgbGV0IHBhcnNlcjIgPSBwYXJzZSQxO1xuICAgIHRyeSB7XG4gICAgICByb290MiA9IHBhcnNlcjIodGhpcy5fY3NzLCB0aGlzLl9vcHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgdGhyb3cgdGhpcy5lcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcm9vdCA9IHJvb3QyO1xuICAgICAgcmV0dXJuIHJvb3QyO1xuICAgIH1cbiAgfVxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuIFwiTm9Xb3JrUmVzdWx0XCI7XG4gIH1cbn07XG52YXIgbm9Xb3JrUmVzdWx0ID0gTm9Xb3JrUmVzdWx0JDE7XG5Ob1dvcmtSZXN1bHQkMS5kZWZhdWx0ID0gTm9Xb3JrUmVzdWx0JDE7XG5sZXQgTm9Xb3JrUmVzdWx0MiA9IG5vV29ya1Jlc3VsdDtcbmxldCBMYXp5UmVzdWx0JDEgPSBsYXp5UmVzdWx0O1xubGV0IERvY3VtZW50JDEgPSBkb2N1bWVudCQxO1xubGV0IFJvb3QkMiA9IHJvb3Q7XG5sZXQgUHJvY2Vzc29yJDEgPSBjbGFzcyBQcm9jZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihwbHVnaW5zID0gW10pIHtcbiAgICB0aGlzLnZlcnNpb24gPSBcIjguNC4zOFwiO1xuICAgIHRoaXMucGx1Z2lucyA9IHRoaXMubm9ybWFsaXplKHBsdWdpbnMpO1xuICB9XG4gIG5vcm1hbGl6ZShwbHVnaW5zKSB7XG4gICAgbGV0IG5vcm1hbGl6ZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpIG9mIHBsdWdpbnMpIHtcbiAgICAgIGlmIChpLnBvc3Rjc3MgPT09IHRydWUpIHtcbiAgICAgICAgaSA9IGkoKTtcbiAgICAgIH0gZWxzZSBpZiAoaS5wb3N0Y3NzKSB7XG4gICAgICAgIGkgPSBpLnBvc3Rjc3M7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgQXJyYXkuaXNBcnJheShpLnBsdWdpbnMpKSB7XG4gICAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVkLmNvbmNhdChpLnBsdWdpbnMpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiBpLnBvc3Rjc3NQbHVnaW4pIHtcbiAgICAgICAgbm9ybWFsaXplZC5wdXNoKGkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG5vcm1hbGl6ZWQucHVzaChpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgKGkucGFyc2UgfHwgaS5zdHJpbmdpZnkpKSB7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJQb3N0Q1NTIHN5bnRheGVzIGNhbm5vdCBiZSB1c2VkIGFzIHBsdWdpbnMuIEluc3RlYWQsIHBsZWFzZSB1c2Ugb25lIG9mIHRoZSBzeW50YXgvcGFyc2VyL3N0cmluZ2lmaWVyIG9wdGlvbnMgYXMgb3V0bGluZWQgaW4geW91ciBQb3N0Q1NTIHJ1bm5lciBkb2N1bWVudGF0aW9uLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGkgKyBcIiBpcyBub3QgYSBQb3N0Q1NTIHBsdWdpblwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gIH1cbiAgcHJvY2Vzcyhjc3MsIG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5wbHVnaW5zLmxlbmd0aCAmJiAhb3B0cy5wYXJzZXIgJiYgIW9wdHMuc3RyaW5naWZpZXIgJiYgIW9wdHMuc3ludGF4KSB7XG4gICAgICByZXR1cm4gbmV3IE5vV29ya1Jlc3VsdDIodGhpcywgY3NzLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBMYXp5UmVzdWx0JDEodGhpcywgY3NzLCBvcHRzKTtcbiAgICB9XG4gIH1cbiAgdXNlKHBsdWdpbjIpIHtcbiAgICB0aGlzLnBsdWdpbnMgPSB0aGlzLnBsdWdpbnMuY29uY2F0KHRoaXMubm9ybWFsaXplKFtwbHVnaW4yXSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xudmFyIHByb2Nlc3NvciA9IFByb2Nlc3NvciQxO1xuUHJvY2Vzc29yJDEuZGVmYXVsdCA9IFByb2Nlc3NvciQxO1xuUm9vdCQyLnJlZ2lzdGVyUHJvY2Vzc29yKFByb2Nlc3NvciQxKTtcbkRvY3VtZW50JDEucmVnaXN0ZXJQcm9jZXNzb3IoUHJvY2Vzc29yJDEpO1xubGV0IERlY2xhcmF0aW9uJDEgPSBkZWNsYXJhdGlvbjtcbmxldCBQcmV2aW91c01hcDIgPSBwcmV2aW91c01hcDtcbmxldCBDb21tZW50JDEgPSBjb21tZW50O1xubGV0IEF0UnVsZSQxID0gYXRSdWxlO1xubGV0IElucHV0JDEgPSBpbnB1dDtcbmxldCBSb290JDEgPSByb290O1xubGV0IFJ1bGUkMSA9IHJ1bGU7XG5mdW5jdGlvbiBmcm9tSlNPTiQxKGpzb24sIGlucHV0cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkgcmV0dXJuIGpzb24ubWFwKChuKSA9PiBmcm9tSlNPTiQxKG4pKTtcbiAgbGV0IF9hID0ganNvbiwgeyBpbnB1dHM6IG93bklucHV0cyB9ID0gX2EsIGRlZmF1bHRzID0gX19vYmpSZXN0KF9hLCBbXCJpbnB1dHNcIl0pO1xuICBpZiAob3duSW5wdXRzKSB7XG4gICAgaW5wdXRzID0gW107XG4gICAgZm9yIChsZXQgaW5wdXQyIG9mIG93bklucHV0cykge1xuICAgICAgbGV0IGlucHV0SHlkcmF0ZWQgPSBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBpbnB1dDIpLCB7IF9fcHJvdG9fXzogSW5wdXQkMS5wcm90b3R5cGUgfSk7XG4gICAgICBpZiAoaW5wdXRIeWRyYXRlZC5tYXApIHtcbiAgICAgICAgaW5wdXRIeWRyYXRlZC5tYXAgPSBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBpbnB1dEh5ZHJhdGVkLm1hcCksIHtcbiAgICAgICAgICBfX3Byb3RvX186IFByZXZpb3VzTWFwMi5wcm90b3R5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpbnB1dHMucHVzaChpbnB1dEh5ZHJhdGVkKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlZmF1bHRzLm5vZGVzKSB7XG4gICAgZGVmYXVsdHMubm9kZXMgPSBqc29uLm5vZGVzLm1hcCgobikgPT4gZnJvbUpTT04kMShuLCBpbnB1dHMpKTtcbiAgfVxuICBpZiAoZGVmYXVsdHMuc291cmNlKSB7XG4gICAgbGV0IF9iID0gZGVmYXVsdHMuc291cmNlLCB7IGlucHV0SWQgfSA9IF9iLCBzb3VyY2UgPSBfX29ialJlc3QoX2IsIFtcImlucHV0SWRcIl0pO1xuICAgIGRlZmF1bHRzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICBpZiAoaW5wdXRJZCAhPSBudWxsKSB7XG4gICAgICBkZWZhdWx0cy5zb3VyY2UuaW5wdXQgPSBpbnB1dHNbaW5wdXRJZF07XG4gICAgfVxuICB9XG4gIGlmIChkZWZhdWx0cy50eXBlID09PSBcInJvb3RcIikge1xuICAgIHJldHVybiBuZXcgUm9vdCQxKGRlZmF1bHRzKTtcbiAgfSBlbHNlIGlmIChkZWZhdWx0cy50eXBlID09PSBcImRlY2xcIikge1xuICAgIHJldHVybiBuZXcgRGVjbGFyYXRpb24kMShkZWZhdWx0cyk7XG4gIH0gZWxzZSBpZiAoZGVmYXVsdHMudHlwZSA9PT0gXCJydWxlXCIpIHtcbiAgICByZXR1cm4gbmV3IFJ1bGUkMShkZWZhdWx0cyk7XG4gIH0gZWxzZSBpZiAoZGVmYXVsdHMudHlwZSA9PT0gXCJjb21tZW50XCIpIHtcbiAgICByZXR1cm4gbmV3IENvbW1lbnQkMShkZWZhdWx0cyk7XG4gIH0gZWxzZSBpZiAoZGVmYXVsdHMudHlwZSA9PT0gXCJhdHJ1bGVcIikge1xuICAgIHJldHVybiBuZXcgQXRSdWxlJDEoZGVmYXVsdHMpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gbm9kZSB0eXBlOiBcIiArIGpzb24udHlwZSk7XG4gIH1cbn1cbnZhciBmcm9tSlNPTl8xID0gZnJvbUpTT04kMTtcbmZyb21KU09OJDEuZGVmYXVsdCA9IGZyb21KU09OJDE7XG5sZXQgQ3NzU3ludGF4RXJyb3IyID0gY3NzU3ludGF4RXJyb3I7XG5sZXQgRGVjbGFyYXRpb24yID0gZGVjbGFyYXRpb247XG5sZXQgTGF6eVJlc3VsdDIgPSBsYXp5UmVzdWx0O1xubGV0IENvbnRhaW5lcjIgPSBjb250YWluZXI7XG5sZXQgUHJvY2Vzc29yMiA9IHByb2Nlc3NvcjtcbmxldCBzdHJpbmdpZnkgPSBzdHJpbmdpZnlfMTtcbmxldCBmcm9tSlNPTiA9IGZyb21KU09OXzE7XG5sZXQgRG9jdW1lbnQyID0gZG9jdW1lbnQkMTtcbmxldCBXYXJuaW5nMiA9IHdhcm5pbmc7XG5sZXQgQ29tbWVudDIgPSBjb21tZW50O1xubGV0IEF0UnVsZTIgPSBhdFJ1bGU7XG5sZXQgUmVzdWx0MiA9IHJlc3VsdDtcbmxldCBJbnB1dDIgPSBpbnB1dDtcbmxldCBwYXJzZSA9IHBhcnNlXzE7XG5sZXQgbGlzdCA9IGxpc3RfMTtcbmxldCBSdWxlMiA9IHJ1bGU7XG5sZXQgUm9vdDIgPSByb290O1xubGV0IE5vZGUyID0gbm9kZTtcbmZ1bmN0aW9uIHBvc3Rjc3MoLi4ucGx1Z2lucykge1xuICBpZiAocGx1Z2lucy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShwbHVnaW5zWzBdKSkge1xuICAgIHBsdWdpbnMgPSBwbHVnaW5zWzBdO1xuICB9XG4gIHJldHVybiBuZXcgUHJvY2Vzc29yMihwbHVnaW5zKTtcbn1cbnBvc3Rjc3MucGx1Z2luID0gZnVuY3Rpb24gcGx1Z2luKG5hbWUsIGluaXRpYWxpemVyKSB7XG4gIGxldCB3YXJuaW5nUHJpbnRlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBjcmVhdG9yKC4uLmFyZ3MpIHtcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4gJiYgIXdhcm5pbmdQcmludGVkKSB7XG4gICAgICB3YXJuaW5nUHJpbnRlZCA9IHRydWU7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIG5hbWUgKyBcIjogcG9zdGNzcy5wbHVnaW4gd2FzIGRlcHJlY2F0ZWQuIE1pZ3JhdGlvbiBndWlkZTpcXG5odHRwczovL2V2aWxtYXJ0aWFucy5jb20vY2hyb25pY2xlcy9wb3N0Y3NzLTgtcGx1Z2luLW1pZ3JhdGlvblwiXG4gICAgICApO1xuICAgICAgaWYgKHByb2Nlc3MuZW52LkxBTkcgJiYgcHJvY2Vzcy5lbnYuTEFORy5zdGFydHNXaXRoKFwiY25cIikpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIG5hbWUgKyBcIjogXFx1OTFDQ1xcdTk3NjIgcG9zdGNzcy5wbHVnaW4gXFx1ODhBQlxcdTVGMDNcXHU3NTI4LiBcXHU4RkMxXFx1NzlGQlxcdTYzMDdcXHU1MzU3Olxcbmh0dHBzOi8vd3d3LnczY3RlY2guY29tL3RvcGljLzIyMjZcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdHJhbnNmb3JtZXIgPSBpbml0aWFsaXplciguLi5hcmdzKTtcbiAgICB0cmFuc2Zvcm1lci5wb3N0Y3NzUGx1Z2luID0gbmFtZTtcbiAgICB0cmFuc2Zvcm1lci5wb3N0Y3NzVmVyc2lvbiA9IG5ldyBQcm9jZXNzb3IyKCkudmVyc2lvbjtcbiAgICByZXR1cm4gdHJhbnNmb3JtZXI7XG4gIH1cbiAgbGV0IGNhY2hlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRvciwgXCJwb3N0Y3NzXCIsIHtcbiAgICBnZXQoKSB7XG4gICAgICBpZiAoIWNhY2hlKSBjYWNoZSA9IGNyZWF0b3IoKTtcbiAgICAgIHJldHVybiBjYWNoZTtcbiAgICB9XG4gIH0pO1xuICBjcmVhdG9yLnByb2Nlc3MgPSBmdW5jdGlvbihjc3MsIHByb2Nlc3NPcHRzLCBwbHVnaW5PcHRzKSB7XG4gICAgcmV0dXJuIHBvc3Rjc3MoW2NyZWF0b3IocGx1Z2luT3B0cyldKS5wcm9jZXNzKGNzcywgcHJvY2Vzc09wdHMpO1xuICB9O1xuICByZXR1cm4gY3JlYXRvcjtcbn07XG5wb3N0Y3NzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeTtcbnBvc3Rjc3MucGFyc2UgPSBwYXJzZTtcbnBvc3Rjc3MuZnJvbUpTT04gPSBmcm9tSlNPTjtcbnBvc3Rjc3MubGlzdCA9IGxpc3Q7XG5wb3N0Y3NzLmNvbW1lbnQgPSAoZGVmYXVsdHMpID0+IG5ldyBDb21tZW50MihkZWZhdWx0cyk7XG5wb3N0Y3NzLmF0UnVsZSA9IChkZWZhdWx0cykgPT4gbmV3IEF0UnVsZTIoZGVmYXVsdHMpO1xucG9zdGNzcy5kZWNsID0gKGRlZmF1bHRzKSA9PiBuZXcgRGVjbGFyYXRpb24yKGRlZmF1bHRzKTtcbnBvc3Rjc3MucnVsZSA9IChkZWZhdWx0cykgPT4gbmV3IFJ1bGUyKGRlZmF1bHRzKTtcbnBvc3Rjc3Mucm9vdCA9IChkZWZhdWx0cykgPT4gbmV3IFJvb3QyKGRlZmF1bHRzKTtcbnBvc3Rjc3MuZG9jdW1lbnQgPSAoZGVmYXVsdHMpID0+IG5ldyBEb2N1bWVudDIoZGVmYXVsdHMpO1xucG9zdGNzcy5Dc3NTeW50YXhFcnJvciA9IENzc1N5bnRheEVycm9yMjtcbnBvc3Rjc3MuRGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbjI7XG5wb3N0Y3NzLkNvbnRhaW5lciA9IENvbnRhaW5lcjI7XG5wb3N0Y3NzLlByb2Nlc3NvciA9IFByb2Nlc3NvcjI7XG5wb3N0Y3NzLkRvY3VtZW50ID0gRG9jdW1lbnQyO1xucG9zdGNzcy5Db21tZW50ID0gQ29tbWVudDI7XG5wb3N0Y3NzLldhcm5pbmcgPSBXYXJuaW5nMjtcbnBvc3Rjc3MuQXRSdWxlID0gQXRSdWxlMjtcbnBvc3Rjc3MuUmVzdWx0ID0gUmVzdWx0MjtcbnBvc3Rjc3MuSW5wdXQgPSBJbnB1dDI7XG5wb3N0Y3NzLlJ1bGUgPSBSdWxlMjtcbnBvc3Rjc3MuUm9vdCA9IFJvb3QyO1xucG9zdGNzcy5Ob2RlID0gTm9kZTI7XG5MYXp5UmVzdWx0Mi5yZWdpc3RlclBvc3Rjc3MocG9zdGNzcyk7XG52YXIgcG9zdGNzc18xID0gcG9zdGNzcztcbnBvc3Rjc3MuZGVmYXVsdCA9IHBvc3Rjc3M7XG5jb25zdCBwb3N0Y3NzJDEgPSAvKiBAX19QVVJFX18gKi8gZ2V0RGVmYXVsdEV4cG9ydEZyb21DanMocG9zdGNzc18xKTtcbnBvc3Rjc3MkMS5zdHJpbmdpZnk7XG5wb3N0Y3NzJDEuZnJvbUpTT047XG5wb3N0Y3NzJDEucGx1Z2luO1xucG9zdGNzcyQxLnBhcnNlO1xucG9zdGNzcyQxLmxpc3Q7XG5wb3N0Y3NzJDEuZG9jdW1lbnQ7XG5wb3N0Y3NzJDEuY29tbWVudDtcbnBvc3Rjc3MkMS5hdFJ1bGU7XG5wb3N0Y3NzJDEucnVsZTtcbnBvc3Rjc3MkMS5kZWNsO1xucG9zdGNzcyQxLnJvb3Q7XG5wb3N0Y3NzJDEuQ3NzU3ludGF4RXJyb3I7XG5wb3N0Y3NzJDEuRGVjbGFyYXRpb247XG5wb3N0Y3NzJDEuQ29udGFpbmVyO1xucG9zdGNzcyQxLlByb2Nlc3NvcjtcbnBvc3Rjc3MkMS5Eb2N1bWVudDtcbnBvc3Rjc3MkMS5Db21tZW50O1xucG9zdGNzcyQxLldhcm5pbmc7XG5wb3N0Y3NzJDEuQXRSdWxlO1xucG9zdGNzcyQxLlJlc3VsdDtcbnBvc3Rjc3MkMS5JbnB1dDtcbnBvc3Rjc3MkMS5SdWxlO1xucG9zdGNzcyQxLlJvb3Q7XG5wb3N0Y3NzJDEuTm9kZTtcbmNvbnN0IHRhZ01hcCA9IHtcbiAgc2NyaXB0OiBcIm5vc2NyaXB0XCIsXG4gIC8vIGNhbWVsIGNhc2Ugc3ZnIGVsZW1lbnQgdGFnIG5hbWVzXG4gIGFsdGdseXBoOiBcImFsdEdseXBoXCIsXG4gIGFsdGdseXBoZGVmOiBcImFsdEdseXBoRGVmXCIsXG4gIGFsdGdseXBoaXRlbTogXCJhbHRHbHlwaEl0ZW1cIixcbiAgYW5pbWF0ZWNvbG9yOiBcImFuaW1hdGVDb2xvclwiLFxuICBhbmltYXRlbW90aW9uOiBcImFuaW1hdGVNb3Rpb25cIixcbiAgYW5pbWF0ZXRyYW5zZm9ybTogXCJhbmltYXRlVHJhbnNmb3JtXCIsXG4gIGNsaXBwYXRoOiBcImNsaXBQYXRoXCIsXG4gIGZlYmxlbmQ6IFwiZmVCbGVuZFwiLFxuICBmZWNvbG9ybWF0cml4OiBcImZlQ29sb3JNYXRyaXhcIixcbiAgZmVjb21wb25lbnR0cmFuc2ZlcjogXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsXG4gIGZlY29tcG9zaXRlOiBcImZlQ29tcG9zaXRlXCIsXG4gIGZlY29udm9sdmVtYXRyaXg6IFwiZmVDb252b2x2ZU1hdHJpeFwiLFxuICBmZWRpZmZ1c2VsaWdodGluZzogXCJmZURpZmZ1c2VMaWdodGluZ1wiLFxuICBmZWRpc3BsYWNlbWVudG1hcDogXCJmZURpc3BsYWNlbWVudE1hcFwiLFxuICBmZWRpc3RhbnRsaWdodDogXCJmZURpc3RhbnRMaWdodFwiLFxuICBmZWRyb3BzaGFkb3c6IFwiZmVEcm9wU2hhZG93XCIsXG4gIGZlZmxvb2Q6IFwiZmVGbG9vZFwiLFxuICBmZWZ1bmNhOiBcImZlRnVuY0FcIixcbiAgZmVmdW5jYjogXCJmZUZ1bmNCXCIsXG4gIGZlZnVuY2c6IFwiZmVGdW5jR1wiLFxuICBmZWZ1bmNyOiBcImZlRnVuY1JcIixcbiAgZmVnYXVzc2lhbmJsdXI6IFwiZmVHYXVzc2lhbkJsdXJcIixcbiAgZmVpbWFnZTogXCJmZUltYWdlXCIsXG4gIGZlbWVyZ2U6IFwiZmVNZXJnZVwiLFxuICBmZW1lcmdlbm9kZTogXCJmZU1lcmdlTm9kZVwiLFxuICBmZW1vcnBob2xvZ3k6IFwiZmVNb3JwaG9sb2d5XCIsXG4gIGZlb2Zmc2V0OiBcImZlT2Zmc2V0XCIsXG4gIGZlcG9pbnRsaWdodDogXCJmZVBvaW50TGlnaHRcIixcbiAgZmVzcGVjdWxhcmxpZ2h0aW5nOiBcImZlU3BlY3VsYXJMaWdodGluZ1wiLFxuICBmZXNwb3RsaWdodDogXCJmZVNwb3RMaWdodFwiLFxuICBmZXRpbGU6IFwiZmVUaWxlXCIsXG4gIGZldHVyYnVsZW5jZTogXCJmZVR1cmJ1bGVuY2VcIixcbiAgZm9yZWlnbm9iamVjdDogXCJmb3JlaWduT2JqZWN0XCIsXG4gIGdseXBocmVmOiBcImdseXBoUmVmXCIsXG4gIGxpbmVhcmdyYWRpZW50OiBcImxpbmVhckdyYWRpZW50XCIsXG4gIHJhZGlhbGdyYWRpZW50OiBcInJhZGlhbEdyYWRpZW50XCJcbn07XG5mdW5jdGlvbiBnZXRUYWdOYW1lKG4pIHtcbiAgbGV0IHRhZ05hbWUgPSB0YWdNYXBbbi50YWdOYW1lXSA/IHRhZ01hcFtuLnRhZ05hbWVdIDogbi50YWdOYW1lO1xuICBpZiAodGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgbi5hdHRyaWJ1dGVzLl9jc3NUZXh0KSB7XG4gICAgdGFnTmFtZSA9IFwic3R5bGVcIjtcbiAgfVxuICByZXR1cm4gdGFnTmFtZTtcbn1cbmZ1bmN0aW9uIGFkYXB0Q3NzRm9yUmVwbGF5KGNzc1RleHQsIGNhY2hlKSB7XG4gIGNvbnN0IGNhY2hlZFN0eWxlID0gY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlLnN0eWxlc1dpdGhIb3ZlckNsYXNzLmdldChjc3NUZXh0KTtcbiAgaWYgKGNhY2hlZFN0eWxlKSByZXR1cm4gY2FjaGVkU3R5bGU7XG4gIGNvbnN0IGFzdCA9IHBvc3Rjc3MkMShbXG4gICAgbWVkaWFTZWxlY3RvclBsdWdpbixcbiAgICBwc2V1ZG9DbGFzc1BsdWdpblxuICBdKS5wcm9jZXNzKGNzc1RleHQpO1xuICBjb25zdCByZXN1bHQyID0gYXN0LmNzcztcbiAgY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlLnN0eWxlc1dpdGhIb3ZlckNsYXNzLnNldChjc3NUZXh0LCByZXN1bHQyKTtcbiAgcmV0dXJuIHJlc3VsdDI7XG59XG5mdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcbiAgY29uc3Qgc3R5bGVzV2l0aEhvdmVyQ2xhc3MgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICByZXR1cm4ge1xuICAgIHN0eWxlc1dpdGhIb3ZlckNsYXNzXG4gIH07XG59XG5mdW5jdGlvbiBhcHBseUNzc1NwbGl0cyhuLCBjc3NUZXh0LCBoYWNrQ3NzLCBjYWNoZSkge1xuICBjb25zdCBjaGlsZFRleHROb2RlcyA9IFtdO1xuICBmb3IgKGNvbnN0IHNjbiBvZiBuLmNoaWxkTm9kZXMpIHtcbiAgICBpZiAoc2NuLnR5cGUgPT09IE5vZGVUeXBlLlRleHQpIHtcbiAgICAgIGNoaWxkVGV4dE5vZGVzLnB1c2goc2NuKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY3NzVGV4dFNwbGl0cyA9IGNzc1RleHQuc3BsaXQoXCIvKiBycl9zcGxpdCAqL1wiKTtcbiAgd2hpbGUgKGNzc1RleHRTcGxpdHMubGVuZ3RoID4gMSAmJiBjc3NUZXh0U3BsaXRzLmxlbmd0aCA+IGNoaWxkVGV4dE5vZGVzLmxlbmd0aCkge1xuICAgIGNzc1RleHRTcGxpdHMuc3BsaWNlKC0yLCAyLCBjc3NUZXh0U3BsaXRzLnNsaWNlKC0yKS5qb2luKFwiXCIpKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkVGV4dE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hpbGRUZXh0Tm9kZSA9IGNoaWxkVGV4dE5vZGVzW2ldO1xuICAgIGNvbnN0IGNzc1RleHRTZWN0aW9uID0gY3NzVGV4dFNwbGl0c1tpXTtcbiAgICBpZiAoY2hpbGRUZXh0Tm9kZSAmJiBjc3NUZXh0U2VjdGlvbikge1xuICAgICAgY2hpbGRUZXh0Tm9kZS50ZXh0Q29udGVudCA9IGhhY2tDc3MgPyBhZGFwdENzc0ZvclJlcGxheShjc3NUZXh0U2VjdGlvbiwgY2FjaGUpIDogY3NzVGV4dFNlY3Rpb247XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBidWlsZFN0eWxlTm9kZShuLCBzdHlsZUVsLCBjc3NUZXh0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZG9jLCBoYWNrQ3NzLCBjYWNoZSB9ID0gb3B0aW9ucztcbiAgaWYgKG4uY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICBhcHBseUNzc1NwbGl0cyhuLCBjc3NUZXh0LCBoYWNrQ3NzLCBjYWNoZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGhhY2tDc3MpIHtcbiAgICAgIGNzc1RleHQgPSBhZGFwdENzc0ZvclJlcGxheShjc3NUZXh0LCBjYWNoZSk7XG4gICAgfVxuICAgIHN0eWxlRWwuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGNzc1RleHQpKTtcbiAgfVxufVxuZnVuY3Rpb24gYnVpbGROb2RlKG4sIG9wdGlvbnMpIHtcbiAgdmFyIF9hLCBfYjtcbiAgY29uc3QgeyBkb2MsIGhhY2tDc3MsIGNhY2hlIH0gPSBvcHRpb25zO1xuICBzd2l0Y2ggKG4udHlwZSkge1xuICAgIGNhc2UgTm9kZVR5cGUuRG9jdW1lbnQ6XG4gICAgICByZXR1cm4gZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KG51bGwsIFwiXCIsIG51bGwpO1xuICAgIGNhc2UgTm9kZVR5cGUuRG9jdW1lbnRUeXBlOlxuICAgICAgcmV0dXJuIGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudFR5cGUoXG4gICAgICAgIG4ubmFtZSB8fCBcImh0bWxcIixcbiAgICAgICAgbi5wdWJsaWNJZCxcbiAgICAgICAgbi5zeXN0ZW1JZFxuICAgICAgKTtcbiAgICBjYXNlIE5vZGVUeXBlLkVsZW1lbnQ6IHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBnZXRUYWdOYW1lKG4pO1xuICAgICAgbGV0IG5vZGUyO1xuICAgICAgaWYgKG4uaXNTVkcpIHtcbiAgICAgICAgbm9kZTIgPSBkb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgdGFnTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgLy8gSWYgdGhlIHRhZyBuYW1lIGlzIGEgY3VzdG9tIGVsZW1lbnQgbmFtZVxuICAgICAgICAgIG4uaXNDdXN0b20gJiYgLy8gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgY3VzdG9tIGVsZW1lbnRzXG4gICAgICAgICAgKChfYSA9IGRvYy5kZWZhdWx0VmlldykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmN1c3RvbUVsZW1lbnRzKSAmJiAvLyBJZiB0aGUgY3VzdG9tIGVsZW1lbnQgaGFzbid0IGJlZW4gZGVmaW5lZCB5ZXRcbiAgICAgICAgICAhZG9jLmRlZmF1bHRWaWV3LmN1c3RvbUVsZW1lbnRzLmdldChuLnRhZ05hbWUpXG4gICAgICAgIClcbiAgICAgICAgICBkb2MuZGVmYXVsdFZpZXcuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICAgICAgICAgICAgbi50YWdOYW1lLFxuICAgICAgICAgICAgY2xhc3MgZXh0ZW5kcyBkb2MuZGVmYXVsdFZpZXcuSFRNTEVsZW1lbnQge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIG5vZGUyID0gZG9jLmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBzcGVjaWFsQXR0cmlidXRlcyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBuYW1lIGluIG4uYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLmF0dHJpYnV0ZXMsIG5hbWUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZhbHVlID0gbi5hdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJvcHRpb25cIiAmJiBuYW1lID09PSBcInNlbGVjdGVkXCIgJiYgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJycl9cIikpIHtcbiAgICAgICAgICBzcGVjaWFsQXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIDtcbiAgICAgICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJzdHlsZVwiICYmIG5hbWUgPT09IFwiX2Nzc1RleHRcIikge1xuICAgICAgICAgIGJ1aWxkU3R5bGVOb2RlKG4sIG5vZGUyLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiICYmIG5hbWUgPT09IFwidmFsdWVcIikge1xuICAgICAgICAgIG5vZGUyLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgIG4uY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG4uaXNTVkcgJiYgbmFtZSA9PT0gXCJ4bGluazpocmVmXCIpIHtcbiAgICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZU5TKFxuICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwib25sb2FkXCIgfHwgbmFtZSA9PT0gXCJvbmNsaWNrXCIgfHwgbmFtZS5zdWJzdHJpbmcoMCwgNykgPT09IFwib25tb3VzZVwiKSB7XG4gICAgICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGUoXCJfXCIgKyBuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwibWV0YVwiICYmIG4uYXR0cmlidXRlc1tcImh0dHAtZXF1aXZcIl0gPT09IFwiQ29udGVudC1TZWN1cml0eS1Qb2xpY3lcIiAmJiBuYW1lID09PSBcImNvbnRlbnRcIikge1xuICAgICAgICAgICAgbm9kZTIuc2V0QXR0cmlidXRlKFwiY3NwLWNvbnRlbnRcIiwgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwibGlua1wiICYmIChuLmF0dHJpYnV0ZXMucmVsID09PSBcInByZWxvYWRcIiB8fCBuLmF0dHJpYnV0ZXMucmVsID09PSBcIm1vZHVsZXByZWxvYWRcIikgJiYgbi5hdHRyaWJ1dGVzLmFzID09PSBcInNjcmlwdFwiKSB7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcImxpbmtcIiAmJiBuLmF0dHJpYnV0ZXMucmVsID09PSBcInByZWZldGNoXCIgJiYgdHlwZW9mIG4uYXR0cmlidXRlcy5ocmVmID09PSBcInN0cmluZ1wiICYmIG4uYXR0cmlidXRlcy5ocmVmLmVuZHNXaXRoKFwiLmpzXCIpKSB7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcImltZ1wiICYmIG4uYXR0cmlidXRlcy5zcmNzZXQgJiYgbi5hdHRyaWJ1dGVzLnJyX2RhdGFVUkwpIHtcbiAgICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgXCJycndlYi1vcmlnaW5hbC1zcmNzZXRcIixcbiAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLnNyY3NldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZTIuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBuYW1lIGluIHNwZWNpYWxBdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3BlY2lhbEF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh0YWdOYW1lID09PSBcImNhbnZhc1wiICYmIG5hbWUgPT09IFwicnJfZGF0YVVSTFwiKSB7XG4gICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2MuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBub2RlMi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICBpZiAobm9kZTIuUlJOb2RlVHlwZSlcbiAgICAgICAgICAgIG5vZGUyLnJyX2RhdGFVUkwgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiaW1nXCIgJiYgbmFtZSA9PT0gXCJycl9kYXRhVVJMXCIpIHtcbiAgICAgICAgICBjb25zdCBpbWFnZSA9IG5vZGUyO1xuICAgICAgICAgIGlmICghaW1hZ2UuY3VycmVudFNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgXCJycndlYi1vcmlnaW5hbC1zcmNcIixcbiAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLnNyY1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSBcInJyX3dpZHRoXCIpIHtcbiAgICAgICAgICBub2RlMi5zdHlsZS53aWR0aCA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9oZWlnaHRcIikge1xuICAgICAgICAgIG5vZGUyLnN0eWxlLmhlaWdodCA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9tZWRpYUN1cnJlbnRUaW1lXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgbm9kZTIuY3VycmVudFRpbWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX21lZGlhU3RhdGVcIikge1xuICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwbGF5ZWRcIjpcbiAgICAgICAgICAgICAgbm9kZTIucGxheSgpLmNhdGNoKChlKSA9PiBjb25zb2xlLndhcm4oXCJtZWRpYSBwbGF5YmFjayBlcnJvclwiLCBlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBhdXNlZFwiOlxuICAgICAgICAgICAgICBub2RlMi5wYXVzZSgpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9tZWRpYVBsYXliYWNrUmF0ZVwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIG5vZGUyLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfbWVkaWFNdXRlZFwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICBub2RlMi5tdXRlZCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfbWVkaWFMb29wXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIG5vZGUyLmxvb3AgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX21lZGlhVm9sdW1lXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgbm9kZTIudm9sdW1lID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9vcGVuX21vZGVcIikge1xuICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwicnJfb3Blbl9tb2RlXCIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuLmlzU2hhZG93SG9zdCkge1xuICAgICAgICBpZiAoIW5vZGUyLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBub2RlMi5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgICAoX2IgPSBuLmNocm9tYXRpY0Fkb3B0ZWRTdHlsZXNoZWV0cykgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmZvckVhY2goXG4gICAgICAgICAgICAoY2hyb21hdGljQWRvcHRlZFN0eWxlc2hlZXQpID0+IHtcbiAgICAgICAgICAgICAgdmFyIF9hMjtcbiAgICAgICAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQucmVwbGFjZVN5bmMoY2hyb21hdGljQWRvcHRlZFN0eWxlc2hlZXQpO1xuICAgICAgICAgICAgICAoX2EyID0gbm9kZTIuc2hhZG93Um9vdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZVNoZWV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdoaWxlIChub2RlMi5zaGFkb3dSb290LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUyLnNoYWRvd1Jvb3QucmVtb3ZlQ2hpbGQobm9kZTIuc2hhZG93Um9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlMjtcbiAgICB9XG4gICAgY2FzZSBOb2RlVHlwZS5UZXh0OlxuICAgICAgaWYgKG4uaXNTdHlsZSAmJiBoYWNrQ3NzKSB7XG4gICAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUoYWRhcHRDc3NGb3JSZXBsYXkobi50ZXh0Q29udGVudCwgY2FjaGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUobi50ZXh0Q29udGVudCk7XG4gICAgY2FzZSBOb2RlVHlwZS5DREFUQTpcbiAgICAgIHJldHVybiBkb2MuY3JlYXRlQ0RBVEFTZWN0aW9uKG4udGV4dENvbnRlbnQpO1xuICAgIGNhc2UgTm9kZVR5cGUuQ29tbWVudDpcbiAgICAgIHJldHVybiBkb2MuY3JlYXRlQ29tbWVudChuLnRleHRDb250ZW50KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkTm9kZVdpdGhTTihuLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgbWlycm9yLFxuICAgIHNraXBDaGlsZCA9IGZhbHNlLFxuICAgIGhhY2tDc3MgPSB0cnVlLFxuICAgIGFmdGVyQXBwZW5kLFxuICAgIGNhY2hlXG4gIH0gPSBvcHRpb25zO1xuICBpZiAobWlycm9yLmhhcyhuLmlkKSkge1xuICAgIGNvbnN0IG5vZGVJbk1pcnJvciA9IG1pcnJvci5nZXROb2RlKG4uaWQpO1xuICAgIGNvbnN0IG1ldGEgPSBtaXJyb3IuZ2V0TWV0YShub2RlSW5NaXJyb3IpO1xuICAgIGlmIChpc05vZGVNZXRhRXF1YWwobWV0YSwgbikpIHJldHVybiBtaXJyb3IuZ2V0Tm9kZShuLmlkKTtcbiAgfVxuICBsZXQgbm9kZTIgPSBidWlsZE5vZGUobiwgeyBkb2MsIGhhY2tDc3MsIGNhY2hlIH0pO1xuICBpZiAoIW5vZGUyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKG4ucm9vdElkICYmIG1pcnJvci5nZXROb2RlKG4ucm9vdElkKSAhPT0gZG9jKSB7XG4gICAgbWlycm9yLnJlcGxhY2Uobi5yb290SWQsIGRvYyk7XG4gIH1cbiAgaWYgKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpIHtcbiAgICBkb2MuY2xvc2UoKTtcbiAgICBkb2Mub3BlbigpO1xuICAgIGlmIChuLmNvbXBhdE1vZGUgPT09IFwiQmFja0NvbXBhdFwiICYmIG4uY2hpbGROb2RlcyAmJiBuLmNoaWxkTm9kZXNbMF0udHlwZSAhPT0gTm9kZVR5cGUuRG9jdW1lbnRUeXBlKSB7XG4gICAgICBpZiAobi5jaGlsZE5vZGVzWzBdLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgXCJ4bWxuc1wiIGluIG4uY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzICYmIG4uY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzLnhtbG5zID09PSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIikge1xuICAgICAgICBkb2Mud3JpdGUoXG4gICAgICAgICAgJzwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJcIj4nXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2Mud3JpdGUoXG4gICAgICAgICAgJzwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIEhUTUwgNC4wIFRyYW5zaXRpb25hbC8vRU5cIiBcIlwiPidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZTIgPSBkb2M7XG4gIH1cbiAgbWlycm9yLmFkZChub2RlMiwgbik7XG4gIGlmICgobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fCBuLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmICFza2lwQ2hpbGQpIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkTiBvZiBuLmNoaWxkTm9kZXMpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGJ1aWxkTm9kZVdpdGhTTihjaGlsZE4sIHtcbiAgICAgICAgZG9jLFxuICAgICAgICBtaXJyb3IsXG4gICAgICAgIHNraXBDaGlsZDogZmFsc2UsXG4gICAgICAgIGhhY2tDc3MsXG4gICAgICAgIGFmdGVyQXBwZW5kLFxuICAgICAgICBjYWNoZVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNoaWxkTm9kZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gcmVidWlsZFwiLCBjaGlsZE4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZE4uaXNTaGFkb3cgJiYgaXNFbGVtZW50KG5vZGUyKSAmJiBub2RlMi5zaGFkb3dSb290KSB7XG4gICAgICAgIG5vZGUyLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgIH0gZWxzZSBpZiAobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCAmJiBjaGlsZE4udHlwZSA9PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gY2hpbGROb2RlO1xuICAgICAgICBsZXQgYm9keSA9IG51bGw7XG4gICAgICAgIGh0bWxFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGQubm9kZU5hbWUgPT09IFwiQk9EWVwiKSBib2R5ID0gY2hpbGQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgIGh0bWxFbGVtZW50LnJlbW92ZUNoaWxkKGJvZHkpO1xuICAgICAgICAgIG5vZGUyLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZTIuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZTIuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgIH1cbiAgICAgIGlmIChhZnRlckFwcGVuZCkge1xuICAgICAgICBhZnRlckFwcGVuZChjaGlsZE5vZGUsIGNoaWxkTi5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlMjtcbn1cbmZ1bmN0aW9uIHZpc2l0KG1pcnJvciwgb25WaXNpdCkge1xuICBmdW5jdGlvbiB3YWxrKG5vZGUyKSB7XG4gICAgb25WaXNpdChub2RlMik7XG4gIH1cbiAgZm9yIChjb25zdCBpZCBvZiBtaXJyb3IuZ2V0SWRzKCkpIHtcbiAgICBpZiAobWlycm9yLmhhcyhpZCkpIHtcbiAgICAgIHdhbGsobWlycm9yLmdldE5vZGUoaWQpKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbChub2RlMiwgbWlycm9yKSB7XG4gIGNvbnN0IG4gPSBtaXJyb3IuZ2V0TWV0YShub2RlMik7XG4gIGlmICgobiA9PSBudWxsID8gdm9pZCAwIDogbi50eXBlKSAhPT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBlbCA9IG5vZGUyO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gbi5hdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCEoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4uYXR0cmlidXRlcywgbmFtZSkgJiYgbmFtZS5zdGFydHNXaXRoKFwicnJfXCIpKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gbi5hdHRyaWJ1dGVzW25hbWVdO1xuICAgIGlmIChuYW1lID09PSBcInJyX3Njcm9sbExlZnRcIikge1xuICAgICAgZWwuc2Nyb2xsTGVmdCA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gXCJycl9zY3JvbGxUb3BcIikge1xuICAgICAgZWwuc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiByZWJ1aWxkKG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRvYyxcbiAgICBvblZpc2l0LFxuICAgIGhhY2tDc3MgPSB0cnVlLFxuICAgIGFmdGVyQXBwZW5kLFxuICAgIGNhY2hlLFxuICAgIG1pcnJvciA9IG5ldyBNaXJyb3IoKVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgbm9kZTIgPSBidWlsZE5vZGVXaXRoU04obiwge1xuICAgIGRvYyxcbiAgICBtaXJyb3IsXG4gICAgc2tpcENoaWxkOiBmYWxzZSxcbiAgICBoYWNrQ3NzLFxuICAgIGFmdGVyQXBwZW5kLFxuICAgIGNhY2hlXG4gIH0pO1xuICB2aXNpdChtaXJyb3IsICh2aXNpdGVkTm9kZSkgPT4ge1xuICAgIGlmIChvblZpc2l0KSB7XG4gICAgICBvblZpc2l0KHZpc2l0ZWROb2RlKTtcbiAgICB9XG4gICAgaGFuZGxlU2Nyb2xsKHZpc2l0ZWROb2RlLCBtaXJyb3IpO1xuICB9KTtcbiAgcmV0dXJuIG5vZGUyO1xufVxuZXhwb3J0cy5JR05PUkVEX05PREUgPSBJR05PUkVEX05PREU7XG5leHBvcnRzLk1pcnJvciA9IE1pcnJvcjtcbmV4cG9ydHMuTm9kZVR5cGUgPSBOb2RlVHlwZTtcbmV4cG9ydHMuYWJzb2x1dGlmeVVSTHMgPSBhYnNvbHV0aWZ5VVJMcztcbmV4cG9ydHMuYWRhcHRDc3NGb3JSZXBsYXkgPSBhZGFwdENzc0ZvclJlcGxheTtcbmV4cG9ydHMuYnVpbGROb2RlV2l0aFNOID0gYnVpbGROb2RlV2l0aFNOO1xuZXhwb3J0cy5jbGFzc01hdGNoZXNSZWdleCA9IGNsYXNzTWF0Y2hlc1JlZ2V4O1xuZXhwb3J0cy5jbGVhbnVwU25hcHNob3QgPSBjbGVhbnVwU25hcHNob3Q7XG5leHBvcnRzLmNyZWF0ZUNhY2hlID0gY3JlYXRlQ2FjaGU7XG5leHBvcnRzLmNyZWF0ZU1pcnJvciA9IGNyZWF0ZU1pcnJvcjtcbmV4cG9ydHMuZXNjYXBlSW1wb3J0U3RhdGVtZW50ID0gZXNjYXBlSW1wb3J0U3RhdGVtZW50O1xuZXhwb3J0cy5leHRyYWN0RmlsZUV4dGVuc2lvbiA9IGV4dHJhY3RGaWxlRXh0ZW5zaW9uO1xuZXhwb3J0cy5maXhTYWZhcmlDb2xvbnMgPSBmaXhTYWZhcmlDb2xvbnM7XG5leHBvcnRzLmdlbklkID0gZ2VuSWQ7XG5leHBvcnRzLmdldElucHV0VHlwZSA9IGdldElucHV0VHlwZTtcbmV4cG9ydHMuaWdub3JlQXR0cmlidXRlID0gaWdub3JlQXR0cmlidXRlO1xuZXhwb3J0cy5pczJEQ2FudmFzQmxhbmsgPSBpczJEQ2FudmFzQmxhbms7XG5leHBvcnRzLmlzQ1NTSW1wb3J0UnVsZSA9IGlzQ1NTSW1wb3J0UnVsZTtcbmV4cG9ydHMuaXNDU1NTdHlsZVJ1bGUgPSBpc0NTU1N0eWxlUnVsZTtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc05hdGl2ZVNoYWRvd0RvbSA9IGlzTmF0aXZlU2hhZG93RG9tO1xuZXhwb3J0cy5pc05vZGVNZXRhRXF1YWwgPSBpc05vZGVNZXRhRXF1YWw7XG5leHBvcnRzLmlzU2hhZG93Um9vdCA9IGlzU2hhZG93Um9vdDtcbmV4cG9ydHMubWFya0Nzc1NwbGl0cyA9IG1hcmtDc3NTcGxpdHM7XG5leHBvcnRzLm1hc2tJbnB1dFZhbHVlID0gbWFza0lucHV0VmFsdWU7XG5leHBvcnRzLm5lZWRNYXNraW5nVGV4dCA9IG5lZWRNYXNraW5nVGV4dDtcbmV4cG9ydHMubm9ybWFsaXplQ3NzU3RyaW5nID0gbm9ybWFsaXplQ3NzU3RyaW5nO1xuZXhwb3J0cy5yZWJ1aWxkID0gcmVidWlsZDtcbmV4cG9ydHMuc2VyaWFsaXplTm9kZVdpdGhJZCA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQ7XG5leHBvcnRzLnNuYXBzaG90ID0gc25hcHNob3Q7XG5leHBvcnRzLnNwbGl0Q3NzVGV4dCA9IHNwbGl0Q3NzVGV4dDtcbmV4cG9ydHMuc3RyaW5naWZ5UnVsZSA9IHN0cmluZ2lmeVJ1bGU7XG5leHBvcnRzLnN0cmluZ2lmeVN0eWxlc2hlZXQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0O1xuZXhwb3J0cy50b0xvd2VyQ2FzZSA9IHRvTG93ZXJDYXNlO1xuZXhwb3J0cy50cmFuc2Zvcm1BdHRyaWJ1dGUgPSB0cmFuc2Zvcm1BdHRyaWJ1dGU7XG5leHBvcnRzLnZpc2l0U25hcHNob3QgPSB2aXNpdFNuYXBzaG90O1xuaWYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIpIHtcbiAgdmFyIF9fY3AgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICAgIGlmICgoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIikgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZyb20pKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwge1xuICAgICAgICAgIGdldDogKCkgPT4gZnJvbVtrZXldLFxuICAgICAgICAgIGVudW1lcmFibGU6ICEoZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9fY3AobW9kdWxlLmV4cG9ydHMsIGV4cG9ydHMpO1xufVxucmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufSkpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ycndlYi1zbmFwc2hvdC51bWQuY2pzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qID09PT0gVGVzdCBDcmVhdGVkIHdpdGggQ3lwcmVzcyBTdHVkaW8gPT09PSAqL1xuaW1wb3J0IFwiQGNocm9tYXRpYy1jb20vY3lwcmVzcy9zdXBwb3J0XCI7XG5pdCgnc2lnbnVwZmxvdycsIGZ1bmN0aW9uKCkge1xuICAvKiA9PT09IEdlbmVyYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgY3kudmlzaXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaWdudXAnKTtcbiAgY3kuZ2V0KCdbZGF0YS12LTczOTY0Y2I2PVwiXCJdW2RhdGEtdi1hOWUyMDBmYj1cIlwiXSA+IDpudGgtY2hpbGQoMSkgPiAuaW5wdXQtZmllbGQnKS5jbGVhcigneScpO1xuICBjeS5nZXQoJ1tkYXRhLXYtNzM5NjRjYjY9XCJcIl1bZGF0YS12LWE5ZTIwMGZiPVwiXCJdID4gOm50aC1jaGlsZCgxKSA+IC5pbnB1dC1maWVsZCcpLnR5cGUoJ3lvaGFuZXMnKTtcbiAgY3kuZ2V0KCdbZGF0YS12LTczOTY0Y2I2PVwiXCJdW2RhdGEtdi1hOWUyMDBmYj1cIlwiXSA+IDpudGgtY2hpbGQoMSkgPiAuaW5wdXQtZmllbGQnKS5jbGVhcigneW9oYW5uZXMnKTtcbiAgY3kuZ2V0KCdbZGF0YS12LTczOTY0Y2I2PVwiXCJdW2RhdGEtdi1hOWUyMDBmYj1cIlwiXSA+IDpudGgtY2hpbGQoMSkgPiAuaW5wdXQtZmllbGQnKS50eXBlKCd5b2hhbm5lcycpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoMykgPiAuaW5wdXQtZmllbGQnKS5jbGVhcignYScpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoMykgPiAuaW5wdXQtZmllbGQnKS50eXBlKCdhc2ZhdycpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoNykgPiAucmVsYXRpdmUgPiAuaW5wdXQtZmllbGQnKS5jbGVhcignMScpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoNykgPiAucmVsYXRpdmUgPiAuaW5wdXQtZmllbGQnKS50eXBlKCcxMjM0NScpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoOSkgPiAucmVsYXRpdmUgPiAuaW5wdXQtZmllbGQnKS5jbGVhcignMScpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoOSkgPiAucmVsYXRpdmUgPiAuaW5wdXQtZmllbGQnKS50eXBlKCcxMjM0NScpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoNykgPiAucmVsYXRpdmUgPiAuaW5wdXQtZmllbGQnKS5jbGVhcignMTIzNDU2Jyk7XG4gIGN5LmdldCgnOm50aC1jaGlsZCg3KSA+IC5yZWxhdGl2ZSA+IC5pbnB1dC1maWVsZCcpLnR5cGUoJzEyMzQ1NicpO1xuICBjeS5nZXQoJzpudGgtY2hpbGQoOSkgPiAucmVsYXRpdmUgPiAuaW5wdXQtZmllbGQnKS5jbGVhcignMTIzNDU2Jyk7XG4gIGN5LmdldCgnOm50aC1jaGlsZCg5KSA+IC5yZWxhdGl2ZSA+IC5pbnB1dC1maWVsZCcpLnR5cGUoJzEyMzQ1NicpO1xuICBjeS5nZXQoJy53LTUwID4gLmZsZXgnKS5jbGljaygpO1xuICBjeS5nZXQoJ1tkYXRhLXYtNzM5NjRjYjY9XCJcIl1bZGF0YS12LWE5ZTIwMGZiPVwiXCJdID4gLnRleHQtd2hpdGUnKS5jbGljaygpO1xuICBjeS5nZXQoJy56LTEwID4gLmZsZXgtY29sID4gLnJlbGF0aXZlID4gOm50aC1jaGlsZCgxKScpLmNsZWFyKCcxJyk7XG4gIGN5LmdldCgnLnotMTAgPiAuZmxleC1jb2wgPiAucmVsYXRpdmUgPiA6bnRoLWNoaWxkKDEpJykudHlwZSgnMScpO1xuICBjeS5nZXQoJy5mbGV4LWNvbCA+IC5yZWxhdGl2ZSA+IDpudGgtY2hpbGQoMiknKS5jbGVhcignMicpO1xuICBjeS5nZXQoJy5mbGV4LWNvbCA+IC5yZWxhdGl2ZSA+IDpudGgtY2hpbGQoMiknKS50eXBlKCcyJyk7XG4gIGN5LmdldCgnLnJlbGF0aXZlID4gOm50aC1jaGlsZCgzKScpLmNsZWFyKCcyJyk7XG4gIGN5LmdldCgnLnJlbGF0aXZlID4gOm50aC1jaGlsZCgzKScpLnR5cGUoJzInKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiA6bnRoLWNoaWxkKDQpJykuY2xlYXIoJzQnKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiA6bnRoLWNoaWxkKDQpJykudHlwZSgnNCcpO1xuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IDpudGgtY2hpbGQoNSknKS5jbGVhcignMScpO1xuICBjeS5nZXQoJy5yZWxhdGl2ZSA+IDpudGgtY2hpbGQoNSknKS50eXBlKCcxJyk7XG4gIGN5LmdldCgnLnJlbGF0aXZlID4gOm50aC1jaGlsZCg2KScpLmNsZWFyKCk7XG4gIGN5LmdldCgnLnJlbGF0aXZlID4gOm50aC1jaGlsZCg2KScpLnR5cGUoJzEnKTtcbiAgY3kuZ2V0KCcucmVsYXRpdmUgPiA6bnRoLWNoaWxkKDYpJykuY2xpY2soKTtcbiAgY3kuZ2V0KCcucHktMycpLmNsaWNrKCk7XG4gIC8qID09PT0gRW5kIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbn0pOyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaXQiLCJjeSIsInZpc2l0IiwiZ2V0IiwiY2xlYXIiLCJ0eXBlIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9