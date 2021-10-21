/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/**
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function(e,n){var o=e();e.fn.dropdownHover=function(t){return"ontouchstart"in document?this:(o=o.add(this.parent()),this.each(function(){function r(){d.parents(".navbar").find(".navbar-toggle").is(":visible")||(n.clearTimeout(a),n.clearTimeout(i),i=n.setTimeout(function(){o.find(":focus").blur(),v.instantlyCloseOthers===!0&&o.removeClass("open"),n.clearTimeout(i),d.attr("aria-expanded","true"),s.addClass("open"),d.trigger(h)},v.hoverDelay))}var a,i,d=e(this),s=d.parent(),u={delay:500,hoverDelay:0,instantlyCloseOthers:!0},l={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},h="show.bs.dropdown",c="hide.bs.dropdown",v=e.extend(!0,{},u,t,l);s.hover(function(e){return s.hasClass("open")||d.is(e.target)?void r(e):!0},function(){n.clearTimeout(i),a=n.setTimeout(function(){d.attr("aria-expanded","false"),s.removeClass("open"),d.trigger(c)},v.delay)}),d.hover(function(e){return s.hasClass("open")||s.is(e.target)?void r(e):!0}),s.find(".dropdown-submenu").each(function(){var o,t=e(this);t.hover(function(){n.clearTimeout(o),t.children(".dropdown-menu").show(),t.siblings().children(".dropdown-menu").hide()},function(){var e=t.children(".dropdown-menu");o=n.setTimeout(function(){e.hide()},v.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);


// https://github.com/nakupanda/bootstrap3-dialog/blob/master/dist/js/bootstrap-dialog.min.js
!function(t,e){"use strict";if("undefined"!=typeof module&&module.exports){var n="undefined"!=typeof process,o=n&&"electron"in process.versions;o?t.BootstrapDialog=e(t.jQuery):module.exports=e(require("jquery"),require("bootstrap"))}else"function"==typeof define&&define.amd?define("bootstrap-dialog",["jquery","bootstrap"],function(t){return e(t)}):t.BootstrapDialog=e(t.jQuery)}(this,function(t){"use strict";var e=t.fn.modal.Constructor,n=function(t,n){e.call(this,t,n)};n.getModalVersion=function(){var e=null;return e="undefined"==typeof t.fn.modal.Constructor.VERSION?"v3.1":/3\.2\.\d+/.test(t.fn.modal.Constructor.VERSION)?"v3.2":/3\.3\.[1,2]/.test(t.fn.modal.Constructor.VERSION)?"v3.3":"v3.3.4"},n.ORIGINAL_BODY_PADDING=parseInt(t("body").css("padding-right")||0,10),n.METHODS_TO_OVERRIDE={},n.METHODS_TO_OVERRIDE["v3.1"]={},n.METHODS_TO_OVERRIDE["v3.2"]={hide:function(e){if(e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()){this.isShown=!1;var n=this.getGlobalOpenedDialogs();0===n.length&&this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}}},n.METHODS_TO_OVERRIDE["v3.3"]={setScrollbar:function(){var t=n.ORIGINAL_BODY_PADDING;this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},resetScrollbar:function(){var t=this.getGlobalOpenedDialogs();0===t.length&&this.$body.css("padding-right",n.ORIGINAL_BODY_PADDING)},hideModal:function(){this.$element.hide(),this.backdrop(t.proxy(function(){var t=this.getGlobalOpenedDialogs();0===t.length&&this.$body.removeClass("modal-open"),this.resetAdjustments(),this.resetScrollbar(),this.$element.trigger("hidden.bs.modal")},this))}},n.METHODS_TO_OVERRIDE["v3.3.4"]=t.extend({},n.METHODS_TO_OVERRIDE["v3.3"]),n.prototype={constructor:n,getGlobalOpenedDialogs:function(){var e=[];return t.each(o.dialogs,function(t,n){n.isRealized()&&n.isOpened()&&e.push(n)}),e}},n.prototype=t.extend(n.prototype,e.prototype,n.METHODS_TO_OVERRIDE[n.getModalVersion()]);var o=function(e){this.defaultOptions=t.extend(!0,{id:o.newGuid(),buttons:[],data:{},onshow:null,onshown:null,onhide:null,onhidden:null},o.defaultOptions),this.indexedButtons={},this.registeredButtonHotkeys={},this.draggableData={isMouseDown:!1,mouseOffset:{}},this.realized=!1,this.opened=!1,this.initOptions(e),this.holdThisInstance()};return o.BootstrapDialogModal=n,o.NAMESPACE="bootstrap-dialog",o.TYPE_DEFAULT="type-default",o.TYPE_INFO="type-info",o.TYPE_PRIMARY="type-primary",o.TYPE_SUCCESS="type-success",o.TYPE_WARNING="type-warning",o.TYPE_DANGER="type-danger",o.DEFAULT_TEXTS={},o.DEFAULT_TEXTS[o.TYPE_DEFAULT]="Information",o.DEFAULT_TEXTS[o.TYPE_INFO]="Information",o.DEFAULT_TEXTS[o.TYPE_PRIMARY]="Information",o.DEFAULT_TEXTS[o.TYPE_SUCCESS]="Success",o.DEFAULT_TEXTS[o.TYPE_WARNING]="Warning",o.DEFAULT_TEXTS[o.TYPE_DANGER]="Danger",o.DEFAULT_TEXTS.OK="OK",o.DEFAULT_TEXTS.CANCEL="Cancel",o.DEFAULT_TEXTS.CONFIRM="Confirmation",o.SIZE_NORMAL="size-normal",o.SIZE_SMALL="size-small",o.SIZE_WIDE="size-wide",o.SIZE_LARGE="size-large",o.BUTTON_SIZES={},o.BUTTON_SIZES[o.SIZE_NORMAL]="",o.BUTTON_SIZES[o.SIZE_SMALL]="",o.BUTTON_SIZES[o.SIZE_WIDE]="",o.BUTTON_SIZES[o.SIZE_LARGE]="btn-lg",o.ICON_SPINNER="glyphicon glyphicon-asterisk",o.defaultOptions={type:o.TYPE_PRIMARY,size:o.SIZE_NORMAL,cssClass:"",title:null,message:null,nl2br:!0,closable:!0,closeByBackdrop:!0,closeByKeyboard:!0,closeIcon:"&#215;",spinicon:o.ICON_SPINNER,autodestroy:!0,draggable:!1,animate:!0,description:"",tabindex:-1},o.configDefaultOptions=function(e){o.defaultOptions=t.extend(!0,o.defaultOptions,e)},o.dialogs={},o.openAll=function(){t.each(o.dialogs,function(t,e){e.open()})},o.closeAll=function(){t.each(o.dialogs,function(t,e){e.close()})},o.getDialog=function(t){var e=null;return"undefined"!=typeof o.dialogs[t]&&(e=o.dialogs[t]),e},o.setDialog=function(t){return o.dialogs[t.getId()]=t,t},o.addDialog=function(t){return o.setDialog(t)},o.moveFocus=function(){var e=null;t.each(o.dialogs,function(t,n){n.isRealized()&&n.isOpened()&&(e=n)}),null!==e&&e.getModal().focus()},o.METHODS_TO_OVERRIDE={},o.METHODS_TO_OVERRIDE["v3.1"]={handleModalBackdropEvent:function(){return this.getModal().on("click",{dialog:this},function(t){t.target===this&&t.data.dialog.isClosable()&&t.data.dialog.canCloseByBackdrop()&&t.data.dialog.close()}),this},updateZIndex:function(){if(this.isOpened()){var e=1040,n=1050,i=0;t.each(o.dialogs,function(t,e){e.isRealized()&&e.isOpened()&&i++});var s=this.getModal(),a=s.data("bs.modal").$backdrop;s.css("z-index",n+20*(i-1)),a.css("z-index",e+20*(i-1))}return this},open:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("show"),this.updateZIndex(),this}},o.METHODS_TO_OVERRIDE["v3.2"]={handleModalBackdropEvent:o.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,updateZIndex:o.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,open:o.METHODS_TO_OVERRIDE["v3.1"].open},o.METHODS_TO_OVERRIDE["v3.3"]={},o.METHODS_TO_OVERRIDE["v3.3.4"]=t.extend({},o.METHODS_TO_OVERRIDE["v3.1"]),o.prototype={constructor:o,initOptions:function(e){return this.options=t.extend(!0,this.defaultOptions,e),this},holdThisInstance:function(){return o.addDialog(this),this},initModalStuff:function(){return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()),this.getModal().append(this.getModalDialog()),this.getModalDialog().append(this.getModalContent()),this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()),this},createModal:function(){var e=t('<div class="modal" role="dialog" aria-hidden="true"></div>');return e.prop("id",this.getId()),e.attr("aria-labelledby",this.getId()+"_title"),e},getModal:function(){return this.$modal},setModal:function(t){return this.$modal=t,this},createModalDialog:function(){return t('<div class="modal-dialog"></div>')},getModalDialog:function(){return this.$modalDialog},setModalDialog:function(t){return this.$modalDialog=t,this},createModalContent:function(){return t('<div class="modal-content"></div>')},getModalContent:function(){return this.$modalContent},setModalContent:function(t){return this.$modalContent=t,this},createModalHeader:function(){return t('<div class="modal-header"></div>')},getModalHeader:function(){return this.$modalHeader},setModalHeader:function(t){return this.$modalHeader=t,this},createModalBody:function(){return t('<div class="modal-body"></div>')},getModalBody:function(){return this.$modalBody},setModalBody:function(t){return this.$modalBody=t,this},createModalFooter:function(){return t('<div class="modal-footer"></div>')},getModalFooter:function(){return this.$modalFooter},setModalFooter:function(t){return this.$modalFooter=t,this},createDynamicContent:function(t){var e=null;return e="function"==typeof t?t.call(t,this):t,"string"==typeof e&&(e=this.formatStringContent(e)),e},formatStringContent:function(t){return this.options.nl2br?t.replace(/\r\n/g,"<br />").replace(/[\r\n]/g,"<br />"):t},setData:function(t,e){return this.options.data[t]=e,this},getData:function(t){return this.options.data[t]},setId:function(t){return this.options.id=t,this},getId:function(){return this.options.id},getType:function(){return this.options.type},setType:function(t){return this.options.type=t,this.updateType(),this},updateType:function(){if(this.isRealized()){var t=[o.TYPE_DEFAULT,o.TYPE_INFO,o.TYPE_PRIMARY,o.TYPE_SUCCESS,o.TYPE_WARNING,o.TYPE_DANGER];this.getModal().removeClass(t.join(" ")).addClass(this.getType())}return this},getSize:function(){return this.options.size},setSize:function(t){return this.options.size=t,this.updateSize(),this},updateSize:function(){if(this.isRealized()){var e=this;this.getModal().removeClass(o.SIZE_NORMAL).removeClass(o.SIZE_SMALL).removeClass(o.SIZE_WIDE).removeClass(o.SIZE_LARGE),this.getModal().addClass(this.getSize()),this.getModalDialog().removeClass("modal-sm"),this.getSize()===o.SIZE_SMALL&&this.getModalDialog().addClass("modal-sm"),this.getModalDialog().removeClass("modal-lg"),this.getSize()===o.SIZE_WIDE&&this.getModalDialog().addClass("modal-lg"),t.each(this.options.buttons,function(n,o){var i=e.getButton(o.id),s=["btn-lg","btn-sm","btn-xs"],a=!1;if("string"==typeof o.cssClass){var d=o.cssClass.split(" ");t.each(d,function(e,n){-1!==t.inArray(n,s)&&(a=!0)})}a||(i.removeClass(s.join(" ")),i.addClass(e.getButtonSize()))})}return this},getCssClass:function(){return this.options.cssClass},setCssClass:function(t){return this.options.cssClass=t,this},getTitle:function(){return this.options.title},setTitle:function(t){return this.options.title=t,this.updateTitle(),this},updateTitle:function(){if(this.isRealized()){var t=null!==this.getTitle()?this.createDynamicContent(this.getTitle()):this.getDefaultText();this.getModalHeader().find("."+this.getNamespace("title")).html("").append(t).prop("id",this.getId()+"_title")}return this},getMessage:function(){return this.options.message},setMessage:function(t){return this.options.message=t,this.updateMessage(),this},updateMessage:function(){if(this.isRealized()){var t=this.createDynamicContent(this.getMessage());this.getModalBody().find("."+this.getNamespace("message")).html("").append(t)}return this},isClosable:function(){return this.options.closable},setClosable:function(t){return this.options.closable=t,this.updateClosable(),this},setCloseByBackdrop:function(t){return this.options.closeByBackdrop=t,this},canCloseByBackdrop:function(){return this.options.closeByBackdrop},setCloseByKeyboard:function(t){return this.options.closeByKeyboard=t,this},canCloseByKeyboard:function(){return this.options.closeByKeyboard},isAnimate:function(){return this.options.animate},setAnimate:function(t){return this.options.animate=t,this},updateAnimate:function(){return this.isRealized()&&this.getModal().toggleClass("fade",this.isAnimate()),this},getSpinicon:function(){return this.options.spinicon},setSpinicon:function(t){return this.options.spinicon=t,this},addButton:function(t){return this.options.buttons.push(t),this},addButtons:function(e){var n=this;return t.each(e,function(t,e){n.addButton(e)}),this},getButtons:function(){return this.options.buttons},setButtons:function(t){return this.options.buttons=t,this.updateButtons(),this},getButton:function(t){return"undefined"!=typeof this.indexedButtons[t]?this.indexedButtons[t]:null},getButtonSize:function(){return"undefined"!=typeof o.BUTTON_SIZES[this.getSize()]?o.BUTTON_SIZES[this.getSize()]:""},updateButtons:function(){return this.isRealized()&&(0===this.getButtons().length?this.getModalFooter().hide():this.getModalFooter().show().find("."+this.getNamespace("footer")).html("").append(this.createFooterButtons())),this},isAutodestroy:function(){return this.options.autodestroy},setAutodestroy:function(t){this.options.autodestroy=t},getDescription:function(){return this.options.description},setDescription:function(t){return this.options.description=t,this},setTabindex:function(t){return this.options.tabindex=t,this},getTabindex:function(){return this.options.tabindex},updateTabindex:function(){return this.isRealized()&&this.getModal().attr("tabindex",this.getTabindex()),this},getDefaultText:function(){return o.DEFAULT_TEXTS[this.getType()]},getNamespace:function(t){return o.NAMESPACE+"-"+t},createHeaderContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("header")),e.append(this.createTitleContent()),e.prepend(this.createCloseButton()),e},createTitleContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("title")),e},createCloseButton:function(){var e=t("<div></div>");e.addClass(this.getNamespace("close-button"));var n=t('<button class="close"></button>');return n.append(this.options.closeIcon),e.append(n),e.on("click",{dialog:this},function(t){t.data.dialog.close()}),e},createBodyContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("body")),e.append(this.createMessageContent()),e},createMessageContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("message")),e},createFooterContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("footer")),e},createFooterButtons:function(){var e=this,n=t("<div></div>");return n.addClass(this.getNamespace("footer-buttons")),this.indexedButtons={},t.each(this.options.buttons,function(t,i){i.id||(i.id=o.newGuid());var s=e.createButton(i);e.indexedButtons[i.id]=s,n.append(s)}),n},createButton:function(e){var n=t('<button class="btn"></button>');return n.prop("id",e.id),n.data("button",e),"undefined"!=typeof e.icon&&""!==t.trim(e.icon)&&n.append(this.createButtonIcon(e.icon)),"undefined"!=typeof e.label&&n.append(e.label),n.addClass("undefined"!=typeof e.cssClass&&""!==t.trim(e.cssClass)?e.cssClass:"btn-default"),"undefined"!=typeof e.hotkey&&(this.registeredButtonHotkeys[e.hotkey]=n),n.on("click",{dialog:this,$button:n,button:e},function(t){var e=t.data.dialog,n=t.data.$button,o=n.data("button");return o.autospin&&n.toggleSpin(!0),"function"==typeof o.action?o.action.call(n,e,t):void 0}),this.enhanceButton(n),"undefined"!=typeof e.enabled&&n.toggleEnable(e.enabled),n},enhanceButton:function(t){return t.dialog=this,t.toggleEnable=function(t){var e=this;return"undefined"!=typeof t?e.prop("disabled",!t).toggleClass("disabled",!t):e.prop("disabled",!e.prop("disabled")),e},t.enable=function(){var t=this;return t.toggleEnable(!0),t},t.disable=function(){var t=this;return t.toggleEnable(!1),t},t.toggleSpin=function(e){var n=this,o=n.dialog,i=n.find("."+o.getNamespace("button-icon"));return"undefined"==typeof e&&(e=!(t.find(".icon-spin").length>0)),e?(i.hide(),t.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))):(i.show(),t.find(".icon-spin").remove()),n},t.spin=function(){var t=this;return t.toggleSpin(!0),t},t.stopSpin=function(){var t=this;return t.toggleSpin(!1),t},this},createButtonIcon:function(e){var n=t("<span></span>");return n.addClass(this.getNamespace("button-icon")).addClass(e),n},enableButtons:function(e){return t.each(this.indexedButtons,function(t,n){n.toggleEnable(e)}),this},updateClosable:function(){return this.isRealized()&&this.getModalHeader().find("."+this.getNamespace("close-button")).toggle(this.isClosable()),this},onShow:function(t){return this.options.onshow=t,this},onShown:function(t){return this.options.onshown=t,this},onHide:function(t){return this.options.onhide=t,this},onHidden:function(t){return this.options.onhidden=t,this},isRealized:function(){return this.realized},setRealized:function(t){return this.realized=t,this},isOpened:function(){return this.opened},setOpened:function(t){return this.opened=t,this},handleModalEvents:function(){return this.getModal().on("show.bs.modal",{dialog:this},function(t){var e=t.data.dialog;if(e.setOpened(!0),e.isModalEvent(t)&&"function"==typeof e.options.onshow){var n=e.options.onshow(e);return n===!1&&e.setOpened(!1),n}}),this.getModal().on("shown.bs.modal",{dialog:this},function(t){var e=t.data.dialog;e.isModalEvent(t)&&"function"==typeof e.options.onshown&&e.options.onshown(e)}),this.getModal().on("hide.bs.modal",{dialog:this},function(t){var e=t.data.dialog;if(e.setOpened(!1),e.isModalEvent(t)&&"function"==typeof e.options.onhide){var n=e.options.onhide(e);return n===!1&&e.setOpened(!0),n}}),this.getModal().on("hidden.bs.modal",{dialog:this},function(e){var n=e.data.dialog;n.isModalEvent(e)&&"function"==typeof n.options.onhidden&&n.options.onhidden(n),n.isAutodestroy()&&(n.setRealized(!1),delete o.dialogs[n.getId()],t(this).remove()),o.moveFocus()}),this.handleModalBackdropEvent(),this.getModal().on("keyup",{dialog:this},function(t){27===t.which&&t.data.dialog.isClosable()&&t.data.dialog.canCloseByKeyboard()&&t.data.dialog.close()}),this.getModal().on("keyup",{dialog:this},function(e){var n=e.data.dialog;if("undefined"!=typeof n.registeredButtonHotkeys[e.which]){var o=t(n.registeredButtonHotkeys[e.which]);!o.prop("disabled")&&o.focus().trigger("click")}}),this},handleModalBackdropEvent:function(){return this.getModal().on("click",{dialog:this},function(e){t(e.target).hasClass("modal-backdrop")&&e.data.dialog.isClosable()&&e.data.dialog.canCloseByBackdrop()&&e.data.dialog.close()}),this},isModalEvent:function(t){return"undefined"!=typeof t.namespace&&"bs.modal"===t.namespace},makeModalDraggable:function(){return this.options.draggable&&(this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown",{dialog:this},function(t){var e=t.data.dialog;e.draggableData.isMouseDown=!0;var n=e.getModalDialog().offset();e.draggableData.mouseOffset={top:t.clientY-n.top,left:t.clientX-n.left}}),this.getModal().on("mouseup mouseleave",{dialog:this},function(t){t.data.dialog.draggableData.isMouseDown=!1}),t("body").on("mousemove",{dialog:this},function(t){var e=t.data.dialog;e.draggableData.isMouseDown&&e.getModalDialog().offset({top:t.clientY-e.draggableData.mouseOffset.top,left:t.clientX-e.draggableData.mouseOffset.left})})),this},realize:function(){return this.initModalStuff(),this.getModal().addClass(o.NAMESPACE).addClass(this.getCssClass()),this.updateSize(),this.getDescription()&&this.getModal().attr("aria-describedby",this.getDescription()),this.getModalFooter().append(this.createFooterContent()),this.getModalHeader().append(this.createHeaderContent()),this.getModalBody().append(this.createBodyContent()),this.getModal().data("bs.modal",new n(this.getModal(),{backdrop:"static",keyboard:!1,show:!1})),this.makeModalDraggable(),this.handleModalEvents(),this.setRealized(!0),this.updateButtons(),this.updateType(),this.updateTitle(),this.updateMessage(),this.updateClosable(),this.updateAnimate(),this.updateSize(),this.updateTabindex(),this},open:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("show"),this},close:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("hide"),this}},o.prototype=t.extend(o.prototype,o.METHODS_TO_OVERRIDE[n.getModalVersion()]),o.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})},o.show=function(t){return new o(t).open()},o.alert=function(){var e={},n={type:o.TYPE_PRIMARY,title:null,message:null,closable:!1,draggable:!1,buttonLabel:o.DEFAULT_TEXTS.OK,callback:null};e="object"==typeof arguments[0]&&arguments[0].constructor==={}.constructor?t.extend(!0,n,arguments[0]):t.extend(!0,n,{message:arguments[0],callback:"undefined"!=typeof arguments[1]?arguments[1]:null});var i=new o(e);return i.setData("callback",e.callback),i.addButton({label:e.buttonLabel,action:function(t){return"function"==typeof t.getData("callback")&&t.getData("callback").call(this,!0)===!1?!1:(t.setData("btnClicked",!0),t.close())}}),i.onHide("function"==typeof i.options.onhide?function(t){var e=!0;return!t.getData("btnClicked")&&t.isClosable()&&"function"==typeof t.getData("callback")&&(e=t.getData("callback")(!1)),e===!1?!1:e=this.onhide(t)}.bind({onhide:i.options.onhide}):function(t){var e=!0;return!t.getData("btnClicked")&&t.isClosable()&&"function"==typeof t.getData("callback")&&(e=t.getData("callback")(!1)),e}),i.open()},o.confirm=function(){var e={},n={type:o.TYPE_PRIMARY,title:null,message:null,closable:!1,draggable:!1,btnCancelLabel:o.DEFAULT_TEXTS.CANCEL,btnCancelClass:null,btnOKLabel:o.DEFAULT_TEXTS.OK,btnOKClass:null,callback:null};e="object"==typeof arguments[0]&&arguments[0].constructor==={}.constructor?t.extend(!0,n,arguments[0]):t.extend(!0,n,{message:arguments[0],callback:"undefined"!=typeof arguments[1]?arguments[1]:null}),null===e.btnOKClass&&(e.btnOKClass=["btn",e.type.split("-")[1]].join("-"));var i=new o(e);return i.setData("callback",e.callback),i.addButton({label:e.btnCancelLabel,cssClass:e.btnCancelClass,action:function(t){return"function"==typeof t.getData("callback")&&t.getData("callback").call(this,!1)===!1?!1:t.close()}}),i.addButton({label:e.btnOKLabel,cssClass:e.btnOKClass,action:function(t){return"function"==typeof t.getData("callback")&&t.getData("callback").call(this,!0)===!1?!1:t.close()}}),i.open()},o.warning=function(t,e){return new o({type:o.TYPE_WARNING,message:t}).open()},o.danger=function(t,e){return new o({type:o.TYPE_DANGER,message:t}).open()},o.success=function(t,e){return new o({type:o.TYPE_SUCCESS,message:t}).open()},o});


/*
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 https://github.com/posabsolute/jQuery-Validation-Engine
 */
 (function($) {

	"use strict";

	var methods = {

		/**
		* Kind of the constructor, called before any action
		* @param {Map} user options
		*/
		init: function(options) {
			var form = this;
			if (!form.data('jqv') || form.data('jqv') == null ) {
				options = methods._saveOptions(form, options);
				// bind all formError elements to close on click
				$(document).on("click", ".formError", function() {
					$(this).fadeOut(150, function() {
						// remove prompt once invisible
						$(this).closest('.formError').remove();
					});
				});
			}
			return this;
		 },
		/**
		* Attachs jQuery.validationEngine to form.submit and field.blur events
		* Takes an optional params: a list of options
		* ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
		*/
		attach: function(userOptions) {

			var form = this;
			var options;

			if(userOptions)
				options = methods._saveOptions(form, userOptions);
			else
				options = form.data('jqv');

			options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
			if (options.binded) {

				// delegate fields
				form.on(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
				form.on("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
				form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", {"delay": 300}, methods._onFieldEvent);
			}
			if (options.autoPositionUpdate) {
				$(window).bind("resize", {
					"noAnimation": true,
					"formElem": form
				}, methods.updatePromptsPosition);
			}
			form.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			// bind form.submit
			form.on("submit", methods._onSubmitEvent);
			return this;
		},
		/**
		* Unregisters any bindings that may point to jQuery.validaitonEngine
		*/
		detach: function() {

			var form = this;
			var options = form.data('jqv');

			// unbind fields
			form.off(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
			form.off("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
			form.off(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", methods._onFieldEvent);

			// unbind form.submit
			form.off("submit", methods._onSubmitEvent);
			form.removeData('jqv');

			form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			if (options.autoPositionUpdate)
				$(window).off("resize", methods.updatePromptsPosition);

			return this;
		},
		/**
		* Validates either a form or a list of fields, shows prompts accordingly.
		* Note: There is no ajax form validation with this method, only field ajax validation are evaluated
		*
		* @return true if the form validates, false if it fails
		*/
		validate: function(userOptions) {
			var element = $(this);
			var valid = null;
			var options;

			if (element.is("form") || element.hasClass("validationEngineContainer")) {
				if (element.hasClass('validating')) {
					// form is already validating.
					// Should abort old validation and start new one. I don't know how to implement it.
					return false;
				} else {
					element.addClass('validating');
					if(userOptions)
						options = methods._saveOptions(element, userOptions);
					else
						options = element.data('jqv');
					var valid = methods._validateFields(this);

					// If the form doesn't validate, clear the 'validating' class before the user has a chance to submit again
					setTimeout(function(){
						element.removeClass('validating');
					}, 100);
					if (valid && options.onSuccess) {
						options.onSuccess();
					} else if (!valid && options.onFailure) {
						options.onFailure();
					}
				}
			} else if (element.is('form') || element.hasClass('validationEngineContainer')) {
				element.removeClass('validating');
			} else {
				// field validation
		                var form = element.closest('form, .validationEngineContainer');
		                options = (form.data('jqv')) ? form.data('jqv') : $.validationEngine.defaults;
		                valid = methods._validateField(element, options);
		
		                if (valid && options.onFieldSuccess)
		                    options.onFieldSuccess();
		                else if (options.onFieldFailure && options.InvalidFields.length > 0) {
		                    options.onFieldFailure();
		                }
		
		                return !valid;
			}
			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, valid);
			}
			return valid;
		},
		/**
		*  Redraw prompts position, useful when you change the DOM state when validating
		*/
		updatePromptsPosition: function(event) {

			if (event && this == window) {
				var form = event.data.formElem;
				var noAnimation = event.data.noAnimation;
			}
			else
				var form = $(this.closest('form, .validationEngineContainer'));

			var options = form.data('jqv');
			// No option, take default one
			if (!options)
				options = methods._saveOptions(form, options);
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){
				var field = $(this);
				if (options.prettySelect && field.is(":hidden"))
				  field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
				var prompt = methods._getPrompt(field);
				var promptText = $(prompt).find(".formErrorContent").html();

				if(prompt)
					methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
			});
			return this;
		},
		/**
		* Displays a prompt on a element.
		* Note that the element needs an id!
		*
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
		*/
		showPrompt: function(promptText, type, promptPosition, showArrow) {
			var form = this.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			// No option, take default one
			if(!options)
				options = methods._saveOptions(this, options);
			if(promptPosition)
				options.promptPosition=promptPosition;
			options.showArrow = showArrow==true;

			methods._showPrompt(this, promptText, type, false, options);
			return this;
		},
		/**
		* Closes form error prompts, CAN be invidual
		*/
		hide: function() {
			 var form = $(this).closest('form, .validationEngineContainer');
			 var options = form.data('jqv');
			 // No option, take default one
			 if (!options)
				options = methods._saveOptions(form, options);
			 var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
			 var closingtag;

			 if(form.is("form") || form.hasClass("validationEngineContainer")) {
				 closingtag = "parentForm"+methods._getClassName($(form).attr("id"));
			 } else {
				 closingtag = methods._getClassName($(form).attr("id")) +"formError";
			 }
			 $('.'+closingtag).fadeTo(fadeDuration, 0, function() {
				 $(this).closest('.formError').remove();
			 });
			 return this;
		 },
		 /**
		 * Closes all error prompts on the page
		 */
		 hideAll: function() {             
			 var form = this;
			 var options = form.data('jqv');
			 var duration = options ? options.fadeDuration:300;
			 $('.formError').fadeTo(duration, 0, function() {                 
				 $(this).closest('.formError').remove();
			 });
			 return this;
		 },
		/**
		* Typically called when user exists a field using tab or a mouse click, triggers a field
		* validation
		*/
		_onFieldEvent: function(event) {
			var field = $(this);
			var form = field.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			// No option, take default one
			if (!options)
				options = methods._saveOptions(form, options);
			options.eventTrigger = "field";

            if (options.notEmpty == true){

                if(field.val().length > 0){
                    // validate the current field
                    window.setTimeout(function() {
                        methods._validateField(field, options);
                    }, (event.data) ? event.data.delay : 0);

                }

            }else{

                // validate the current field
                window.setTimeout(function() {
                    methods._validateField(field, options);
                }, (event.data) ? event.data.delay : 0);

            }




		},
		/**
		* Called when the form is submited, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @return false if form submission needs to be cancelled
		*/
		_onSubmitEvent: function() {
			var form = $(this);
			var options = form.data('jqv');

			//check if it is trigger from skipped button
			if (form.data("jqv_submitButton")){
				var submitButton = $("#" + form.data("jqv_submitButton"));
				if (submitButton){
					if (submitButton.length > 0){
						if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true")
							return true;
					}
				}
			}

			options.eventTrigger = "submit";

			// validate each field
			// (- skip field ajax validation, not necessary IF we will perform an ajax form validation)
			var r=methods._validateFields(form);

			if (r && options.ajaxFormValidation) {
				methods._validateFormWithAjax(form, options);
				// cancel form auto-submission - process with async call onAjaxFormComplete
				return false;
			}

			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, r);
			}
			return r;
		},
		/**
		* Return true if the ajax field validations passed so far
		* @param {Object} options
		* @return true, is all ajax validation passed so far (remember ajax is async)
		*/
		_checkAjaxStatus: function(options) {
			var status = true;
			$.each(options.ajaxValidCache, function(key, value) {
				if (!value) {
					status = false;
					// break the each
					return false;
				}
			});
			return status;
		},

		/**
		* Return true if the ajax field is validated
		* @param {String} fieldid
		* @param {Object} options
		* @return true, if validation passed, false if false or doesn't exist
		*/
		_checkAjaxFieldStatus: function(fieldid, options) {
			return options.ajaxValidCache[fieldid] == true;
		},
		/**
		* Validates form fields, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @param {skipAjaxFieldValidation}
		*            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
		*
		* @return true if form is valid, false if not, undefined if ajax form validation is done
		*/
		_validateFields: function(form) {
			var options = form.data('jqv');

			// this variable is set to true if an error is found
			var errorFound = false;

			// Trigger hook, start validation
			form.trigger("jqv.form.validating");
			// first, evaluate status of non ajax fields
			var first_err=null;
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each( function() {
				var field = $(this);
				var names = [];
				if ($.inArray(field.attr('name'), names) < 0) {
					errorFound |= methods._validateField(field, options);
					if (errorFound && first_err==null)
						if (field.is(":hidden") && options.prettySelect)
							first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
						else {

							//Check if we need to adjust what element to show the prompt on
							//and and such scroll to instead
							if(field.data('jqv-prompt-at') instanceof jQuery ){
								field = field.data('jqv-prompt-at');
							} else if(field.data('jqv-prompt-at')) {
								field = $(field.data('jqv-prompt-at'));
							}
							first_err=field;
						}
					if (options.doNotShowAllErrosOnSubmit)
						return false;
					names.push(field.attr('name'));

					//if option set, stop checking validation rules after one error is found
					if(options.showOneMessage == true && errorFound){
						return false;
					}
				}
			});

			// second, check to see if all ajax calls completed ok
			// errorFound |= !methods._checkAjaxStatus(options);

			// third, check status and scroll the container accordingly
			form.trigger("jqv.form.result", [errorFound]);

			if (errorFound) {
				if (options.scroll) {
					var destination=first_err.offset().top;
					var fixleft = first_err.offset().left;

					//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
					var positionType=options.promptPosition;
					if (typeof(positionType)=='string' && positionType.indexOf(":")!=-1)
						positionType=positionType.substring(0,positionType.indexOf(":"));

					if (positionType!="bottomRight" && positionType!="bottomLeft") {
						var prompt_err= methods._getPrompt(first_err);
						if (prompt_err) {
							destination=prompt_err.offset().top;
						}
					}

					// Offset the amount the page scrolls by an amount in px to accomodate fixed elements at top of page
					if (options.scrollOffset) {
						destination -= options.scrollOffset;
					}

					// get the position of the first error, there should be at least one, no need to check this
					//var destination = form.find(".formError:not('.greenPopup'):first").offset().top;
					if (options.isOverflown) {
						var overflowDIV = $(options.overflownDIV);
						if(!overflowDIV.length) return false;
						var scrollContainerScroll = overflowDIV.scrollTop();
						var scrollContainerPos = -parseInt(overflowDIV.offset().top);

						destination += scrollContainerScroll + scrollContainerPos - 5;
						var scrollContainer = $(options.overflownDIV).filter(":not(:animated)");

						scrollContainer.animate({ scrollTop: destination }, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});

					} else {
						$("html, body").animate({
							scrollTop: destination
						}, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});
						$("html, body").animate({scrollLeft: fixleft},1100)
					}

				} else if(options.focusFirstField)
					first_err.focus();
				return false;
			}
			return true;
		},
		/**
		* This method is called to perform an ajax form validation.
		* During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
		*
		* @param {jqObject} form
		* @param {Map} options
		*/
		_validateFormWithAjax: function(form, options) {

			var data = form.serialize();
									var type = (options.ajaxFormValidationMethod) ? options.ajaxFormValidationMethod : "GET";
			var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
									var dataType = (options.dataType) ? options.dataType : "json";
			$.ajax({
				type: type,
				url: url,
				cache: false,
				dataType: dataType,
				data: data,
				form: form,
				methods: methods,
				options: options,
				beforeSend: function() {
					return options.onBeforeAjaxFormValidation(form, options);
				},
				error: function(data, transport) {
					if (options.onFailure) {
						options.onFailure(data, transport);
					} else {
						methods._ajaxError(data, transport);
					}
				},
				success: function(json) {
					if ((dataType == "json") && (json !== true)) {
						// getting to this case doesn't necessary means that the form is invalid
						// the server may return green or closing prompt actions
						// this flag helps figuring it out
						var errorInForm=false;
						for (var i = 0; i < json.length; i++) {
							var value = json[i];

							var errorFieldId = value[0];
							var errorField = $($("#" + errorFieldId)[0]);

							// make sure we found the element
							if (errorField.length == 1) {

								// promptText or selector
								var msg = value[2];
								// if the field is valid
								if (value[1] == true) {

									if (msg == ""  || !msg){
										// if for some reason, status==true and error="", just close the prompt
										methods._closePrompt(errorField);
									} else {
										// the field is valid, but we are displaying a green prompt
										if (options.allrules[msg]) {
											var txt = options.allrules[msg].alertTextOk;
											if (txt)
												msg = txt;
										}
										if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
									}
								} else {
									// the field is invalid, show the red error prompt
									errorInForm|=true;
									if (options.allrules[msg]) {
										var txt = options.allrules[msg].alertText;
										if (txt)
											msg = txt;
									}
									if(options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
								}
							}
						}
						options.onAjaxFormComplete(!errorInForm, form, json, options);
					} else
						options.onAjaxFormComplete(true, form, json, options);

				}
			});

		},
		/**
		* Validates field, shows prompts accordingly
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules
		* @param {Map}
		*            user options
		* @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
		*/
		_validateField: function(field, options, skipAjaxValidation) {
			if (!field.attr("id")) {
				field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
				++$.validationEngine.fieldIdCounter;
			}

			if(field.hasClass(options.ignoreFieldsWithClass))
				return false;

           if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden")))
				return false;

			var rulesParsing = field.attr(options.validateAttribute);
			var getRules = /validate\[(.*)\]/.exec(rulesParsing);

			if (!getRules)
				return false;
			var str = getRules[1];
			var rules = str.split(/\[|,|\]/);

			// true if we ran the ajax validation, tells the logic to stop messing with prompts
			var isAjaxValidator = false;
			var fieldName = field.attr("name");
			var promptText = "";
			var promptType = "";
			var required = false;
			var limitErrors = false;
			options.isError = false;
			options.showArrow = true;

			// If the programmer wants to limit the amount of error messages per field,
			if (options.maxErrorsPerField > 0) {
				limitErrors = true;
			}

			var form = $(field.closest("form, .validationEngineContainer"));
			// Fix for adding spaces in the rules
			for (var i = 0; i < rules.length; i++) {
				rules[i] = rules[i].replace(" ", "");
				// Remove any parsing errors
				if (rules[i] === '') {
					delete rules[i];
				}
			}

			for (var i = 0, field_errors = 0; i < rules.length; i++) {

				// If we are limiting errors, and have hit the max, break
				if (limitErrors && field_errors >= options.maxErrorsPerField) {
					// If we haven't hit a required yet, check to see if there is one in the validation rules for this
					// field and that it's index is greater or equal to our current index
					if (!required) {
						var have_required = $.inArray('required', rules);
						required = (have_required != -1 &&  have_required >= i);
					}
					break;
				}


				var errorMsg = undefined;
				switch (rules[i]) {

					case "required":
						required = true;
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
						break;
					case "custom":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
						break;
					case "groupRequired":
						// Check is its the first of group, if not, reload validation with first field
						// AND continue normal validation on present field
						var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
						var firstOfGroup = form.find(classGroup).eq(0);
						if(firstOfGroup[0] != field[0]){

							methods._validateField(firstOfGroup, options, skipAjaxValidation);
							options.showArrow = true;

						}
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
						if(errorMsg)  required = true;
						options.showArrow = false;
						break;
					case "ajax":
						// AJAX defaults to returning it's loading message
						errorMsg = methods._ajax(field, rules, i, options);
						if (errorMsg) {
							promptType = "load";
						}
						break;
					case "minSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
						break;
					case "maxSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
						break;
					case "min":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
						break;
					case "max":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
						break;
					case "past":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._past);
						break;
					case "future":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._future);
						break;
					case "dateRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;

					case "dateTimeRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateTimeRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;
					case "maxCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
						break;
					case "minCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
						break;
					case "equals":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
						break;
					case "funcCall":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
						break;
					case "creditCard":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
						break;
					case "condRequired":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
						if (errorMsg !== undefined) {
							required = true;
						}
						break;
					case "funcCallRequired":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCallRequired);
						if (errorMsg !== undefined) {
							required = true;
						}
						break;

					default:
				}

				var end_validation = false;

				// If we were passed back an message object, check what the status was to determine what to do
				if (typeof errorMsg == "object") {
					switch (errorMsg.status) {
						case "_break":
							end_validation = true;
							break;
						// If we have an error message, set errorMsg to the error message
						case "_error":
							errorMsg = errorMsg.message;
							break;
						// If we want to throw an error, but not show a prompt, return early with true
						case "_error_no_prompt":
							return true;
							break;
						// Anything else we continue on
						default:
							break;
					}
				}

				//funcCallRequired, first in rules, and has error, skip anything else
				if( i==0 && str.indexOf('funcCallRequired')==0 && errorMsg !== undefined ){
					promptText += errorMsg + "<br/>";
					options.isError=true;
					field_errors++;
					end_validation=true;
				}

				// If it has been specified that validation should end now, break
				if (end_validation) {
					break;
				}

				// If we have a string, that means that we have an error, so add it to the error message.
				if (typeof errorMsg == 'string') {
					promptText += errorMsg + "<br/>";
					options.isError = true;
					field_errors++;
				}
			}
			// If the rules required is not added, an empty field is not validated
			//the 3rd condition is added so that even empty password fields should be equal
			//otherwise if one is filled and another left empty, the "equal" condition would fail
			//which does not make any sense
			if(!required && !(field.val()) && field.val().length < 1 && $.inArray('equals', rules) < 0) options.isError = false;

			// Hack for radio/checkbox group button, the validation go into the
			// first radio/checkbox of the group
			var fieldType = field.prop("type");
			var positionType=field.data("promptPosition") || options.promptPosition;

			if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
				if(positionType === 'inline') {
					field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
				} else {
				field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
				}
				options.showArrow = options.showArrowOnRadioAndCheckbox;
			}

			if(field.is(":hidden") && options.prettySelect) {
				field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
			}

			if (options.isError && options.showPrompts){
				methods._showPrompt(field, promptText, promptType, false, options);
			}else{
				if (!isAjaxValidator) methods._closePrompt(field);
			}

			if (!isAjaxValidator) {
				field.trigger("jqv.field.result", [field, options.isError, promptText]);
			}

			/* Record error */
			var errindex = $.inArray(field[0], options.InvalidFields);
			if (errindex == -1) {
				if (options.isError)
				options.InvalidFields.push(field[0]);
			} else if (!options.isError) {
				options.InvalidFields.splice(errindex, 1);
			}

			methods._handleStatusCssClasses(field, options);

			/* run callback function for each field */
			if (options.isError && options.onFieldFailure)
				options.onFieldFailure(field);

			if (!options.isError && options.onFieldSuccess)
				options.onFieldSuccess(field);

			return options.isError;
		},
		/**
		* Handling css classes of fields indicating result of validation
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules
		* @private
		*/
		_handleStatusCssClasses: function(field, options) {
			/* remove all classes */
			if(options.addSuccessCssClassToField)
				field.removeClass(options.addSuccessCssClassToField);

			if(options.addFailureCssClassToField)
				field.removeClass(options.addFailureCssClassToField);

			/* Add classes */
			if (options.addSuccessCssClassToField && !options.isError)
				field.addClass(options.addSuccessCssClassToField);

			if (options.addFailureCssClassToField && options.isError)
				field.addClass(options.addFailureCssClassToField);
		},

		 /********************
		  * _getErrorMessage
		  *
		  * @param form
		  * @param field
		  * @param rule
		  * @param rules
		  * @param i
		  * @param options
		  * @param originalValidationMethod
		  * @return {*}
		  * @private
		  */
		 _getErrorMessage:function (form, field, rule, rules, i, options, originalValidationMethod) {
			 // If we are using the custon validation type, build the index for the rule.
			 // Otherwise if we are doing a function call, make the call and return the object
			 // that is passed back.
	 		 var rule_index = jQuery.inArray(rule, rules);
			 if (rule === "custom" || rule === "funcCall" || rule === "funcCallRequired") {
				 var custom_validation_type = rules[rule_index + 1];
				 rule = rule + "[" + custom_validation_type + "]";
				 // Delete the rule from the rules array so that it doesn't try to call the
			    // same rule over again
			    delete(rules[rule_index]);
			 }
			 // Change the rule to the composite rule, if it was different from the original
			 var alteredRule = rule;


			 var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
			 var element_classes_array = element_classes.split(" ");

			 // Call the original validation method. If we are dealing with dates or checkboxes, also pass the form
			 var errorMsg;
			 if (rule == "future" || rule == "past"  || rule == "maxCheckbox" || rule == "minCheckbox") {
				 errorMsg = originalValidationMethod(form, field, rules, i, options);
			 } else {
				 errorMsg = originalValidationMethod(field, rules, i, options);
			 }

			 // If the original validation method returned an error and we have a custom error message,
			 // return the custom message instead. Otherwise return the original error message.
			 if (errorMsg != undefined) {
				 var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);
				 if (custom_message) errorMsg = custom_message;
			 }
			 return errorMsg;

		 },
		 _getCustomErrorMessage:function (field, classes, rule, options) {
			var custom_message = false;
			var validityProp = /^custom\[.*\]$/.test(rule) ? methods._validityProp["custom"] : methods._validityProp[rule];
			 // If there is a validityProp for this rule, check to see if the field has an attribute for it
			if (validityProp != undefined) {
				custom_message = field.attr("data-errormessage-"+validityProp);
				// If there was an error message for it, return the message
				if (custom_message != undefined)
					return custom_message;
			}
			custom_message = field.attr("data-errormessage");
			 // If there is an inline custom error message, return it
			if (custom_message != undefined)
				return custom_message;
			var id = '#' + field.attr("id");
			// If we have custom messages for the element's id, get the message for the rule from the id.
			// Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.
			if (typeof options.custom_error_messages[id] != "undefined" &&
				typeof options.custom_error_messages[id][rule] != "undefined" ) {
						  custom_message = options.custom_error_messages[id][rule]['message'];
			} else if (classes.length > 0) {
				for (var i = 0; i < classes.length && classes.length > 0; i++) {
					 var element_class = "." + classes[i];
					if (typeof options.custom_error_messages[element_class] != "undefined" &&
						typeof options.custom_error_messages[element_class][rule] != "undefined") {
							custom_message = options.custom_error_messages[element_class][rule]['message'];
							break;
					}
				}
			}
			if (!custom_message &&
				typeof options.custom_error_messages[rule] != "undefined" &&
				typeof options.custom_error_messages[rule]['message'] != "undefined"){
					 custom_message = options.custom_error_messages[rule]['message'];
			 }
			 return custom_message;
		 },
		 _validityProp: {
			 "required": "value-missing",
			 "custom": "custom-error",
			 "groupRequired": "value-missing",
			 "ajax": "custom-error",
			 "minSize": "range-underflow",
			 "maxSize": "range-overflow",
			 "min": "range-underflow",
			 "max": "range-overflow",
			 "past": "type-mismatch",
			 "future": "type-mismatch",
			 "dateRange": "type-mismatch",
			 "dateTimeRange": "type-mismatch",
			 "maxCheckbox": "range-overflow",
			 "minCheckbox": "range-underflow",
			 "equals": "pattern-mismatch",
			 "funcCall": "custom-error",
			 "funcCallRequired": "custom-error",
			 "creditCard": "pattern-mismatch",
			 "condRequired": "value-missing"
		 },
		/**
		* Required validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @param {bool} condRequired flag when method is used for internal purpose in condRequired check
		* @return an error string if validation failed
		*/
		_required: function(field, rules, i, options, condRequired) {
			switch (field.prop("type")) {
				case "radio":
				case "checkbox":
					// new validation style to only check dependent field
					if (condRequired) {
						if (!field.prop('checked')) {
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
						}
						break;
					}
					// old validation style
					var form = field.closest("form, .validationEngineContainer");
					var name = field.attr("name");
					if (form.find("input[name='" + name + "']:checked").size() == 0) {
						if (form.find("input[name='" + name + "']:visible").size() == 1)
							return options.allrules[rules[i]].alertTextCheckboxe;
						else
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
					}
					break;
				case "text":
				case "password":
				case "textarea":
				case "file":
				case "select-one":
				case "select-multiple":
				default:
					var field_val      = $.trim( field.val()                               );
					var dv_placeholder = $.trim( field.attr("data-validation-placeholder") );
					var placeholder    = $.trim( field.attr("placeholder")                 );
					if (
						   ( !field_val                                    )
						|| ( dv_placeholder && field_val == dv_placeholder )
						|| ( placeholder    && field_val == placeholder    )
					) {
						return options.allrules[rules[i]].alertText;
					}
					break;
			}
		},
		/**
		* Validate that 1 from the group field is required
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_groupRequired: function(field, rules, i, options) {
			var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
			var isValid = false;
			// Check all fields from the group
			field.closest("form, .validationEngineContainer").find(classGroup).each(function(){
				if(!methods._required($(this), rules, i, options)){
					isValid = true;
					return false;
				}
			});

			if(!isValid) {
		  return options.allrules[rules[i]].alertText;
		}
		},
		/**
		* Validate rules
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_custom: function(field, rules, i, options) {
			var customRule = rules[i + 1];
			var rule = options.allrules[customRule];
			var fn;
			if(!rule) {
				alert("jqv:custom rule not found - "+customRule);
				return;
			}

			if(rule["regex"]) {
				 var ex=rule.regex;
					if(!ex) {
						alert("jqv:custom regex not found - "+customRule);
						return;
					}
					var pattern = new RegExp(ex);

					if (!pattern.test(field.val())) return options.allrules[customRule].alertText;

			} else if(rule["func"]) {
				fn = rule["func"];

				if (typeof(fn) !== "function") {
					alert("jqv:custom parameter 'function' is no function - "+customRule);
						return;
				}

				if (!fn(field, rules, i, options))
					return options.allrules[customRule].alertText;
			} else {
				alert("jqv:custom type not allowed "+customRule);
					return;
			}
		},
		/**
		* Validate custom function outside of the engine scope
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_funcCall: function(field, rules, i, options) {
			var functionName = rules[i + 1];
			var fn;
			if(functionName.indexOf('.') >-1)
			{
				var namespaces = functionName.split('.');
				var scope = window;
				while(namespaces.length)
				{
					scope = scope[namespaces.shift()];
				}
				fn = scope;
			}
			else
				fn = window[functionName] || options.customFunctions[functionName];
			if (typeof(fn) == 'function')
				return fn(field, rules, i, options);

		},
		_funcCallRequired: function(field, rules, i, options) {
			return methods._funcCall(field,rules,i,options);
		},
		/**
		* Field match
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_equals: function(field, rules, i, options) {
			var equalsField = rules[i + 1];

			if (field.val() != $("#" + equalsField).val())
				return options.allrules.equals.alertText;
		},
		/**
		* Check the maximum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxSize: function(field, rules, i, options) {
			var max = rules[i + 1];
			var len = field.val().length;

			if (len > max) {
				var rule = options.allrules.maxSize;
				return rule.alertText + max + rule.alertText2;
			}
		},
		/**
		* Check the minimum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minSize: function(field, rules, i, options) {
			var min = rules[i + 1];
			var len = field.val().length;

			if (len < min) {
				var rule = options.allrules.minSize;
				return rule.alertText + min + rule.alertText2;
			}
		},
		/**
		* Check number minimum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_min: function(field, rules, i, options) {
			var min = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len < min) {
				var rule = options.allrules.min;
				if (rule.alertText2) return rule.alertText + min + rule.alertText2;
				return rule.alertText + min;
			}
		},
		/**
		* Check number maximum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_max: function(field, rules, i, options) {
			var max = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len >max ) {
				var rule = options.allrules.max;
				if (rule.alertText2) return rule.alertText + max + rule.alertText2;
				//orefalo: to review, also do the translations
				return rule.alertText + max;
			}
		},
		/**
		* Checks date is in the past
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_past: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate > pdate ) {
				var rule = options.allrules.past;
				if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks date is in the future
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_future: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate < pdate ) {
				var rule = options.allrules.future;
				if (rule.alertText2)
					return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks if valid date
		*
		* @param {string} date string
		* @return a bool based on determination of valid date
		*/
		_isDate: function (value) {
			var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
			return dateRegEx.test(value);
		},
		/**
		* Checks if valid date time
		*
		* @param {string} date string
		* @return a bool based on determination of valid date time
		*/
		_isDateTime: function (value){
			var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
			return dateTimeRegEx.test(value);
		},
		//Checks if the start date is before the end date
		//returns true if end is later than start
		_dateCompare: function (start, end) {
			return (new Date(start.toString()) < new Date(end.toString()));
		},
		/**
		* Checks date range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are not both dates
			if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Checks date time range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateTimeRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are not both dates
			if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Max number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize > nbCheck) {
				options.showArrow = false;
				if (options.allrules.maxCheckbox.alertText2)
					 return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
				return options.allrules.maxCheckbox.alertText;
			}
		},
		/**
		* Min number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize < nbCheck) {
				options.showArrow = false;
				return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
			}
		},
		/**
		* Checks that it is a valid credit card number according to the
		* Luhn checksum algorithm.
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_creditCard: function(field, rules, i, options) {
			//spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
			var valid = false, cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');

			var numDigits = cardNumber.length;
			if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {

				var sum = 0, i = numDigits - 1, pos = 1, digit, luhn = new String();
				do {
					digit = parseInt(cardNumber.charAt(i));
					luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
				} while (--i >= 0)

				for (i = 0; i < luhn.length; i++) {
					sum += parseInt(luhn.charAt(i));
				}
				valid = sum % 10 == 0;
			}
			if (!valid) return options.allrules.creditCard.alertText;
		},
		/**
		* Ajax field validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return nothing! the ajax validator handles the prompts itself
		*/
		 _ajax: function(field, rules, i, options) {

			 var errorSelector = rules[i + 1];
			 var rule = options.allrules[errorSelector];
			 var extraData = rule.extraData;
			 var extraDataDynamic = rule.extraDataDynamic;
			 var data = {
				"fieldId" : field.attr("id"),
				"fieldValue" : field.val()
			 };

			 if (typeof extraData === "object") {
				$.extend(data, extraData);
			 } else if (typeof extraData === "string") {
				var tempData = extraData.split("&");
				for(var i = 0; i < tempData.length; i++) {
					var values = tempData[i].split("=");
					if (values[0] && values[0]) {
						data[values[0]] = values[1];
					}
				}
			 }

			 if (extraDataDynamic) {
				 var tmpData = [];
				 var domIds = String(extraDataDynamic).split(",");
				 for (var i = 0; i < domIds.length; i++) {
					 var id = domIds[i];
					 if ($(id).length) {
						 var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
						 var keyValue = id.replace('#', '') + '=' + escape(inputValue);
						 data[id.replace('#', '')] = inputValue;
					 }
				 }
			 }

			 // If a field change event triggered this we want to clear the cache for this ID
			 if (options.eventTrigger == "field") {
				delete(options.ajaxValidCache[field.attr("id")]);
			 }

			 // If there is an error or if the the field is already validated, do not re-execute AJAX
			 if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
				 $.ajax({
					 type: options.ajaxFormValidationMethod,
					 url: rule.url,
					 cache: false,
					 dataType: "json",
					 data: data,
					 field: field,
					 rule: rule,
					 methods: methods,
					 options: options,
					 beforeSend: function() {},
					 error: function(data, transport) {
						if (options.onFailure) {
							options.onFailure(data, transport);
						} else {
							methods._ajaxError(data, transport);
						}
					 },
					 success: function(json) {

						 // asynchronously called on success, data is the json answer from the server
						 var errorFieldId = json[0];
						 //var errorField = $($("#" + errorFieldId)[0]);
						 var errorField = $("#"+ errorFieldId).eq(0);

						 // make sure we found the element
						 if (errorField.length == 1) {
							 var status = json[1];
							 // read the optional msg from the server
							 var msg = json[2];
							 if (!status) {
								 // Houston we got a problem - display an red prompt
								 options.ajaxValidCache[errorFieldId] = false;
								 options.isError = true;

								 // resolve the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertText;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
									msg = rule.alertText;

								 if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
							 } else {
								 options.ajaxValidCache[errorFieldId] = true;

								 // resolves the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertTextOk;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
								 msg = rule.alertTextOk;

								 if (options.showPrompts) {
									 // see if we should display a green prompt
									 if (msg)
										methods._showPrompt(errorField, msg, "pass", true, options);
									 else
										methods._closePrompt(errorField);
								}

								 // If a submit form triggered this, we want to re-submit the form
								 if (options.eventTrigger == "submit")
									field.closest("form").submit();
							 }
						 }
						 errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
					 }
				 });

				 return rule.alertTextLoad;
			 }
		 },
		/**
		* Common method to handle ajax errors
		*
		* @param {Object} data
		* @param {Object} transport
		*/
		_ajaxError: function(data, transport) {
			if(data.status == 0 && transport == null)
				alert("The page is not served from a server! ajax call failed");
			else if(typeof console != "undefined")
				console.log("Ajax error: " + data.status + " " + transport);
		},
		/**
		* date -> string
		*
		* @param {Object} date
		*/
		_dateToString: function(date) {
			return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
		},
		/**
		* Parses an ISO date
		* @param {String} d
		*/
		_parseDate: function(d) {

			var dateParts = d.split("-");
			if(dateParts==d)
				dateParts = d.split("/");
			if(dateParts==d) {
				dateParts = d.split(".");
				return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
			}
			return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
		},
		/**
		* Builds or updates a prompt with the given information
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		 _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
		 	//Check if we need to adjust what element to show the prompt on
			if(field.data('jqv-prompt-at') instanceof jQuery ){
				field = field.data('jqv-prompt-at');
			} else if(field.data('jqv-prompt-at')) {
				field = $(field.data('jqv-prompt-at'));
			}

			 var prompt = methods._getPrompt(field);
			 // The ajax submit errors are not see has an error in the form,
			 // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
			 // Because no error was found befor submitting
			 if(ajaxform) prompt = false;
			 // Check that there is indded text
			 if($.trim(promptText)){
				 if (prompt)
					methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
				 else
					methods._buildPrompt(field, promptText, type, ajaxed, options);
			}
		 },
		/**
		* Builds and shades a prompt for the given field.
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_buildPrompt: function(field, promptText, type, ajaxed, options) {

			// create the prompt
			var prompt = $('<div>');
			prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
			// add a class name to identify the parent form of the prompt
			prompt.addClass("parentForm"+methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
			prompt.addClass("formError");

			switch (type) {
				case "pass":
					prompt.addClass("greenPopup");
					break;
				case "load":
					prompt.addClass("blackPopup");
					break;
				default:
					/* it has error  */
					//alert("unknown popup type:"+type);
			}
			if (ajaxed)
				prompt.addClass("ajaxed");

			// create the prompt content
			var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);

			// determine position type
			var positionType=field.data("promptPosition") || options.promptPosition;

			// create the css arrow pointing at the field
			// note that there is no triangle on max-checkbox and radio
			if (options.showArrow) {
				var arrow = $('<div>').addClass("formErrorArrow");

				//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
				if (typeof(positionType)=='string')
				{
					var pos=positionType.indexOf(":");
					if(pos!=-1)
						positionType=positionType.substring(0,pos);
				}

				switch (positionType) {
					case "bottomLeft":
					case "bottomRight":
						prompt.find(".formErrorContent").before(arrow);
						arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
						break;
					case "topLeft":
					case "topRight":
						arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
						prompt.append(arrow);
						break;
				}
			}
			// Add custom prompt class
			if (options.addPromptClass)
				prompt.addClass(options.addPromptClass);

            // Add custom prompt class defined in element
            var requiredOverride = field.attr('data-required-class');
            if(requiredOverride !== undefined) {
                prompt.addClass(requiredOverride);
            } else {
                if(options.prettySelect) {
                    if($('#' + field.attr('id')).next().is('select')) {
                        var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');
                        if(prettyOverrideClass !== undefined) {
                            prompt.addClass(prettyOverrideClass);
                        }
                    }
                }
            }

			prompt.css({
				"opacity": 0
			});
			if(positionType === 'inline') {
				prompt.addClass("inline");
				if(typeof field.attr('data-prompt-target') !== 'undefined' && $('#'+field.attr('data-prompt-target')).length > 0) {
					prompt.appendTo($('#'+field.attr('data-prompt-target')));
				} else {
					field.after(prompt);
				}
			} else {
				field.before(prompt);
			}

			var pos = methods._calculatePosition(field, prompt, options);
			prompt.css({
				'position': positionType === 'inline' ? 'relative' : 'absolute',
				"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize,
				"opacity": 0
			}).data("callerField", field);


			if (options.autoHidePrompt) {
				setTimeout(function(){
					prompt.animate({
						"opacity": 0
					},function(){
						prompt.closest('.formError').remove();
					});
				}, options.autoHideDelay);
			}
			return prompt.animate({
				"opacity": 0.87
			});
		},
		/**
		* Updates the prompt text field - the field for which the prompt
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {

			if (prompt) {
				if (typeof type !== "undefined") {
					if (type == "pass")
						prompt.addClass("greenPopup");
					else
						prompt.removeClass("greenPopup");

					if (type == "load")
						prompt.addClass("blackPopup");
					else
						prompt.removeClass("blackPopup");
				}
				if (ajaxed)
					prompt.addClass("ajaxed");
				else
					prompt.removeClass("ajaxed");

				prompt.find(".formErrorContent").html(promptText);

				var pos = methods._calculatePosition(field, prompt, options);
				var css = {"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize,
				"opacity": 0.87};

                prompt.css({
                    "opacity": 0,
                    "display": "block"
                });
                
				if (noAnimation)
					prompt.css(css);
				else
					prompt.animate(css);
			}
		},
		/**
		* Closes the prompt associated with the given field
		*
		* @param {jqObject}
		*            field
		*/
		 _closePrompt: function(field) {
			 var prompt = methods._getPrompt(field);
			 if (prompt)
				 prompt.fadeTo("fast", 0, function() {
					 prompt.closest('.formError').remove();
				 });
		 },
		 closePrompt: function(field) {
			 return methods._closePrompt(field);
		 },
		/**
		* Returns the error prompt matching the field if any
		*
		* @param {jqObject}
		*            field
		* @return undefined or the error prompt (jqObject)
		*/
		_getPrompt: function(field) {
				var formId = $(field).closest('form, .validationEngineContainer').attr('id');
			var className = methods._getClassName(field.attr("id")) + "formError";
				var match = $("." + methods._escapeExpression(className) + '.parentForm' + methods._getClassName(formId))[0];
			if (match)
			return $(match);
		},
		/**
		  * Returns the escapade classname
		  *
		  * @param {selector}
		  *            className
		  */
		  _escapeExpression: function (selector) {
			  return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
		  },
		/**
		 * returns true if we are in a RTLed document
		 *
		 * @param {jqObject} field
		 */
		isRTL: function(field)
		{
			var $document = $(document);
			var $body = $('body');
			var rtl =
				(field && field.hasClass('rtl')) ||
				(field && (field.attr('dir') || '').toLowerCase()==='rtl') ||
				$document.hasClass('rtl') ||
				($document.attr('dir') || '').toLowerCase()==='rtl' ||
				$body.hasClass('rtl') ||
				($body.attr('dir') || '').toLowerCase()==='rtl';
			return Boolean(rtl);
		},
		/**
		* Calculates prompt position
		*
		* @param {jqObject}
		*            field
		* @param {jqObject}
		*            the prompt
		* @param {Map}
		*            options
		* @return positions
		*/
		_calculatePosition: function (field, promptElmt, options) {

			var promptTopPosition, promptleftPosition, marginTopSize;
			var fieldWidth 	= field.width();
			var fieldLeft 	= field.position().left;
			var fieldTop 	=  field.position().top;
			var fieldHeight 	=  field.height();
			var promptHeight = promptElmt.height();


			// is the form contained in an overflown container?
			promptTopPosition = promptleftPosition = 0;
			// compensation for the arrow
			marginTopSize = -promptHeight;


			//prompt positioning adjustment support
			//now you can adjust prompt position
			//usage: positionType:Xshift,Yshift
			//for example:
			//   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
			//   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
			//You can use +pixels, - pixels. If no sign is provided than + is default.
			var positionType=field.data("promptPosition") || options.promptPosition;
			var shift1="";
			var shift2="";
			var shiftX=0;
			var shiftY=0;
			if (typeof(positionType)=='string') {
				//do we have any position adjustments ?
				if (positionType.indexOf(":")!=-1) {
					shift1=positionType.substring(positionType.indexOf(":")+1);
					positionType=positionType.substring(0,positionType.indexOf(":"));

					//if any advanced positioning will be needed (percents or something else) - parser should be added here
					//for now we use simple parseInt()

					//do we have second parameter?
					if (shift1.indexOf(",") !=-1) {
						shift2=shift1.substring(shift1.indexOf(",") +1);
						shift1=shift1.substring(0,shift1.indexOf(","));
						shiftY=parseInt(shift2);
						if (isNaN(shiftY)) shiftY=0;
					};

					shiftX=parseInt(shift1);
					if (isNaN(shift1)) shift1=0;

				};
			};


			switch (positionType) {
				default:
				case "topRight":
					promptleftPosition +=  fieldLeft + fieldWidth - 27;
					promptTopPosition +=  fieldTop;
					break;

				case "topLeft":
					promptTopPosition +=  fieldTop;
					promptleftPosition += fieldLeft;
					break;

				case "centerRight":
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;
					promptleftPosition= fieldLeft + field.outerWidth(true)+5;
					break;
				case "centerLeft":
					promptleftPosition = fieldLeft - (promptElmt.width() + 2);
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;

					break;

				case "bottomLeft":
					promptTopPosition = fieldTop + field.height() + 5;
					marginTopSize = 0;
					promptleftPosition = fieldLeft;
					break;
				case "bottomRight":
					promptleftPosition = fieldLeft + fieldWidth - 27;
					promptTopPosition =  fieldTop +  field.height() + 5;
					marginTopSize = 0;
					break;
				case "inline":
					promptleftPosition = 0;
					promptTopPosition = 0;
					marginTopSize = 0;
			};



			//apply adjusments if any
			promptleftPosition += shiftX;
			promptTopPosition  += shiftY;

			return {
				"callerTopPosition": promptTopPosition + "px",
				"callerleftPosition": promptleftPosition + "px",
				"marginTopSize": marginTopSize + "px"
			};
		},
		/**
		* Saves the user options and variables in the form.data
		*
		* @param {jqObject}
		*            form - the form where the user option should be saved
		* @param {Map}
		*            options - the user options
		* @return the user options (extended from the defaults)
		*/
		 _saveOptions: function(form, options) {

			 // is there a language localisation ?
			 if ($.validationEngineLanguage)
			 var allRules = $.validationEngineLanguage.allRules;
			 else
			 $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
			 // --- Internals DO NOT TOUCH or OVERLOAD ---
			 // validation rules and i18
			 $.validationEngine.defaults.allrules = allRules;

			 var userOptions = $.extend(true,{},$.validationEngine.defaults,options);

			 form.data('jqv', userOptions);
			 return userOptions;
		 },

		 /**
		 * Removes forbidden characters from class name
		 * @param {String} className
		 */
		 _getClassName: function(className) {
			 if(className)
				 return className.replace(/:/g, "_").replace(/\./g, "_");
					  },
		/**
		 * Escape special character for jQuery selector
		 * http://totaldev.com/content/escaping-characters-get-valid-jquery-id
		 * @param {String} selector
		 */
		 _jqSelector: function(str){
			return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
		},
		/**
		* Conditionally required field
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		* user options
		* @return an error string if validation failed
		*/
		_condRequired: function(field, rules, i, options) {
			var idx, dependingField;

			for(idx = (i + 1); idx < rules.length; idx++) {
				dependingField = jQuery("#" + rules[idx]).first();

				/* Use _required for determining wether dependingField has a value.
				 * There is logic there for handling all field types, and default value; so we won't replicate that here
				 * Indicate this special use by setting the last parameter to true so we only validate the dependingField on chackboxes and radio buttons (#462)
				 */
				if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
					/* We now know any of the depending fields has a value,
					 * so we can validate this field as per normal required code
					 */
					return methods._required(field, ["required"], 0, options);
				}
			}
		},

	    _submitButtonClick: function(event) {
	        var button = $(this);
	        var form = button.closest('form, .validationEngineContainer');
	        form.data("jqv_submitButton", button.attr("id"));
	    }
		  };

	 /**
	 * Plugin entry point.
	 * You may pass an action as a parameter or a list of options.
	 * if none, the init and attach methods are being called.
	 * Remember: if you pass options, the attached method is NOT called automatically
	 *
	 * @param {String}
	 *            method (optional) action
	 */
	 $.fn.validationEngine = function(method) {

		 var form = $(this);
		 if(!form[0]) return form;  // stop here if the form does not exist

		 if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

			 // make sure init is called once
			 if(method != "showPrompt" && method != "hide" && method != "hideAll")
			 methods.init.apply(form);

			 return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
		 } else if (typeof method == 'object' || !method) {

			 // default constructor with or without arguments
			 methods.init.apply(form, arguments);
			 return methods.attach.apply(form);
		 } else {
			 $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
		 }
	};



	// LEAK GLOBAL OPTIONS
	$.validationEngine= {fieldIdCounter: 0,defaults:{

		// Name of the event triggering field validation
		validationEventTrigger: "blur",
		// Automatically scroll viewport to the first error
		scroll: true,
		// Focus on the first input
		focusFirstField:true,
		// Show prompts, set to false to disable prompts
		showPrompts: true,
		// Should we attempt to validate non-visible input fields contained in the form? (Useful in cases of tabbed containers, e.g. jQuery-UI tabs)
		validateNonVisibleFields: false,
		// ignore the validation for fields with this specific class (Useful in cases of tabbed containers AND hidden fields we don't want to validate)
		ignoreFieldsWithClass: 'ignoreMe',
		// Opening box position, possible locations are: topLeft,
		// topRight, bottomLeft, centerRight, bottomRight, inline
		// inline gets inserted after the validated field or into an element specified in data-prompt-target
		promptPosition: "topRight",
		bindMethod:"bind",
		// internal, automatically set to true when it parse a _ajax rule
		inlineAjax: false,
		// if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
		ajaxFormValidation: false,
		// The url to send the submit ajax validation (default to action)
		ajaxFormValidationURL: false,
		// HTTP method used for ajax validation
		ajaxFormValidationMethod: 'get',
		// Ajax form validation callback method: boolean onComplete(form, status, errors, options)
		// retuns false if the form.submit event needs to be canceled.
		onAjaxFormComplete: $.noop,
		// called right before the ajax call, may return false to cancel
		onBeforeAjaxFormValidation: $.noop,
		// Stops form from submitting and execute function assiciated with it
		onValidationComplete: false,

		// Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
		doNotShowAllErrosOnSubmit: false,
		// Object where you store custom messages to override the default error messages
		custom_error_messages:{},
		// true if you want to validate the input fields on blur event
		binded: true,
		// set to true if you want to validate the input fields on blur only if the field it's not empty
		notEmpty: false,
		// set to true, when the prompt arrow needs to be displayed
		showArrow: true,
		// set to false, determines if the prompt arrow should be displayed when validating
		// checkboxes and radio buttons
		showArrowOnRadioAndCheckbox: false,
		// did one of the validation fail ? kept global to stop further ajax validations
		isError: false,
		// Limit how many displayed errors a field can have
		maxErrorsPerField: false,

		// Caches field validation status, typically only bad status are created.
		// the array is used during ajax form validation to detect issues early and prevent an expensive submit
		ajaxValidCache: {},
		// Auto update prompt position after window resize
		autoPositionUpdate: false,

		InvalidFields: [],
		onFieldSuccess: false,
		onFieldFailure: false,
		onSuccess: false,
		onFailure: false,
		validateAttribute: "class",
		addSuccessCssClassToField: "",
		addFailureCssClassToField: "",

		// Auto-hide prompt
		autoHidePrompt: false,
		// Delay before auto-hide
		autoHideDelay: 10000,
		// Fade out duration while hiding the validations
		fadeDuration: 300,
	 // Use Prettify select library
	 prettySelect: false,
	 // Add css class on prompt
	 addPromptClass : "",
	 // Custom ID uses prefix
	 usePrefix: "",
	 // Custom ID uses suffix
	 useSuffix: "",
	 // Only show one message per error prompt
	 showOneMessage: false
	}};
	$(function(){$.validationEngine.defaults.promptPosition = methods.isRTL()?'topLeft':"topRight"});
})(jQuery);
(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required",
                    "alertTextDateRange": "* Both date range fields are required"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Range"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Time Range"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters required"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* You must fill one of the following fields",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Invalid credit card number"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Invalid phone number"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Invalid email address"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* Must be first and last name"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* Invalid zip format"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {                    
                    //	Check if date is valid by leap year
			"func": function (field) {
					var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					var match = pattern.exec(field.val());
					if (match == null)
					   return false;
	
					var year = match[1];
					var month = match[2]*1;
					var day = match[3]*1;					
					var date = new Date(year, month - 1, day); // because months starts from 0.
	
					return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				},                		
			 "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* Letters only (accents allowed)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* This name is already taken",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);

// Limit scope pollution from any deprecated API
(function() {

    var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };

    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};

    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

// Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }

    jQuery.browser = browser;

    jQuery.sub = function() {
        function jQuerySub( selector, context ) {
            return new jQuerySub.fn.init( selector, context );
        }
        jQuery.extend( true, jQuerySub, this );
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init( selector, context ) {
            if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
                context = jQuerySub( context );
            }

            return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        return jQuerySub;
    };

})();

/**
 * Bridget makes jQuery widgets
 * v2.0.0
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  'use strict';
  /* globals define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {
  'use strict';

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',[],function() {
      return factory();
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See http://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );

  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
  body.removeChild( div );

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.1
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.2
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;

    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    callback();
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('layoutname')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  // convert percent to pixels
  var layoutSize = this.layout.size;
  var x = xValue.indexOf('%') != -1 ?
    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
  var y = yValue.indexOf('%') != -1 ?
    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/**
 * Isotope Item
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/item',[
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer
    );
  }

}( window, function factory( Outlayer ) {
'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var _create = proto._create;
proto._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};

proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = proto.destroy;
proto.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}));

/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/layout-mode',[
        'get-size/get-size',
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer
    );
  }

}( window, function factory( getSize, Outlayer ) {
  'use strict';

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };

  return LayoutMode;

}));

/*!
 * Masonry v4.1.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'masonry/masonry',[
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = colGroup.indexOf( minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/layout-modes/masonry',[
        '../layout-mode',
        'masonry/masonry'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Masonry
    );
  }

}( window, function factory( LayoutMode, Masonry ) {
'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for ( var method in Masonry.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return MasonryMode;

}));

/**
 * fitRows layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/layout-modes/fit-rows',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var FitRows = LayoutMode.create('fitRows');

var proto = FitRows.prototype;

proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

proto._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}));

/**
 * vertical layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope/js/layout-modes/vertical',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

var proto = Vertical.prototype;

proto._resetLayout = function() {
  this.y = 0;
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

proto._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}));

/*!
 * Isotope v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'desandro-matches-selector/matches-selector',
        'fizzy-ui-utils/utils',
        'isotope/js/item',
        'isotope/js/layout-mode',
        // include default layout modes
        'isotope/js/layout-modes/masonry',
        'isotope/js/layout-modes/fit-rows',
        'isotope/js/layout-modes/vertical'
      ],
      function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope/js/item'),
      require('isotope/js/layout-mode'),
      // include default layout modes
      require('isotope/js/layout-modes/masonry'),
      require('isotope/js/layout-modes/fit-rows'),
      require('isotope/js/layout-modes/vertical')
    );
  } else {
    // browser global
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {



// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

// -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  proto.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  proto.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function() {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function() {
    var sortByOpt = this.options.sortBy;
    if ( !sortByOpt ) {
      return;
    }
    // concat all sortBy and sortHistory
    var sortBys = [].concat.apply( sortByOpt, this.sortHistory );
    // sort magic
    var itemSorter = getItemSorter( sortBys, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
    // keep track of sortBy History
    if ( sortByOpt != this.sortHistory[0] ) {
      // add to front, oldest goes in last
      this.sortHistory.unshift( sortByOpt );
    }
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  proto._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( this.filteredItems );
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };

  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    // reveal all new items
    this.reveal( filtered.matches );
    // layout new items, no transition
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    var filteredInsertItems = this._filter( items ).matches;
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom( this.filteredItems, item );
    }
  };

  proto.shuffle = function() {
    // update random sortData
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply( this, args );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));



// ----------------------------------------------------------------------------------------
/*
* Autocomplete - jQuery plugin 1.1pre
*
* Copyright (c) 2007 Dylan Verheul, Dan G. Switzer, Anjesh Tuladhar, Jörn Zaefferer
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
* Revision: $Id: jquery.autocomplete.js 5785 2008-07-12 10:37:33Z joern.zaefferer $
*
*/

; (function ($) {

    $.fn.extend({
        autocomplete: function (urlOrData, options) {
            var isUrl = typeof urlOrData == "string";
            options = $.extend({}, $.Autocompleter.defaults, {
                url: isUrl ? urlOrData : null,
                data: isUrl ? null : urlOrData,
                delay: isUrl ? $.Autocompleter.defaults.delay : 10,
                max: options && !options.scroll ? 15 : 50
            }, options);

            // if highlight is set to false, replace it with a do-nothing function
            options.highlight = options.highlight || function (value) { return value; };

            // if the formatMatch option is not specified, then use formatItem for backwards compatibility
            options.formatMatch = options.formatMatch || options.formatItem;

            return this.each(function () {
                new $.Autocompleter(this, options);
            });
        },
        result: function (handler) {
            return this.bind("result", handler);
        },
        search: function (handler) {
            return this.trigger("search", [handler]);
        },
        flushCache: function () {
            return this.trigger("flushCache");
        },
        setOptions: function (options) {
            return this.trigger("setOptions", [options]);
        },
        unautocomplete: function () {
            return this.trigger("unautocomplete");
        }
    });

    $.Autocompleter = function (input, options) {

        var KEY = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        };

        // Create $ object for input element
        var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);

        var timeout;
        var previousValue = "";
        var cache = $.Autocompleter.Cache(options);
        var hasFocus = 0;
        var lastKeyPressCode;
        var config = {
            mouseDownOnSelect: false
        };
        var select = $.Autocompleter.Select(options, input, selectCurrent, config);

        var blockSubmit;

        // prevent form submit in opera when selecting with return key
        $.browser.opera && $(input.form).bind("submit.autocomplete", function () {
            if (blockSubmit) {
                blockSubmit = false;
                return false;
            }
        });

        // only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
        $input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function (event) {
            // track last key pressed
            lastKeyPressCode = event.keyCode;
            switch (event.keyCode) {

                case KEY.UP:
                    event.preventDefault();
                    if (select.visible()) {
                        select.prev();
                    } else {
                        onChange(0, true);
                    }
                    break;

                case KEY.DOWN:
                    event.preventDefault();
                    if (select.visible()) {
                        select.next();
                    } else {
                        onChange(0, true);
                    }
                    break;

                case KEY.PAGEUP:
                    event.preventDefault();
                    if (select.visible()) {
                        select.pageUp();
                    } else {
                        onChange(0, true);
                    }
                    break;

                case KEY.PAGEDOWN:
                    event.preventDefault();
                    if (select.visible()) {
                        select.pageDown();
                    } else {
                        onChange(0, true);
                    }
                    break;

                // matches also semicolon 
                case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
                case KEY.TAB:
                case KEY.RETURN:
                    if (selectCurrent()) {
                        // stop default to prevent a form submit, Opera needs special handling
                        event.preventDefault();
                        blockSubmit = true;
                        return false;
                    }
                    break;

                case KEY.ESC:
                    select.hide();
                    break;

                default:
                    clearTimeout(timeout);
                    timeout = setTimeout(onChange, options.delay);
                    break;
            }
        }).focus(function () {
            // track whether the field has focus, we shouldn't process any
            // results if the field no longer has focus
            hasFocus++;
        }).blur(function () {
            hasFocus = 0;
            if (!config.mouseDownOnSelect) {
                hideResults();
            }
        }).click(function () {
            // show select when clicking in a focused field
            if (hasFocus++ > 1 && !select.visible()) {
                onChange(0, true);
            }
        }).bind("search", function () {
            // TODO why not just specifying both arguments?
            var fn = (arguments.length > 1) ? arguments[1] : null;
            function findValueCallback(q, data) {
                var result;
                if (data && data.length) {
                    for (var i = 0; i < data.length; i++) {
                        var _a = trimWords(data[i].result);
                        var _b = trimWords(q);
                        if (_a.length == 1 && _b.length == 1)
                        if (_a[0].toLowerCase() == _b[0].toLowerCase()) {
                            result = data[i];
                            break;
                        }
                        if (trimWords(data[i].result) == q) {
                            result = data[i];
                            break;
                        }
                    }
                }
                if (typeof fn == "function") fn(result);
                else $input.trigger("result", result && [result.data, result.value]);
            }
            $.each(trimWords($input.val()), function (i, value) {
                request(value, findValueCallback, findValueCallback);
            });
        }).bind("flushCache", function () {
            cache.flush();
        }).bind("setOptions", function () {
            $.extend(options, arguments[1]);
            // if we've updated the data, repopulate
            if ("data" in arguments[1])
                cache.populate();
        }).bind("unautocomplete", function () {
            select.unbind();
            $input.unbind();
            $(input.form).unbind(".autocomplete");
        });


        function selectCurrent() {
            var selected = select.selected();
            if (!selected)
                return false;

            var v = selected.result;
            previousValue = v;

            if (options.multiple) {
                var words = trimWords($input.val());
                if (words.length > 1) {
                    v = words.slice(0, words.length - 1).join(options.multipleSeparator) + options.multipleSeparator + v;
                }
                v += options.multipleSeparator;
            }

            $input.val(v);
            hideResultsNow();
            $input.trigger("result", [selected.data, selected.value]);
            return true;
        }

        function onChange(crap, skipPrevCheck) {
            if (lastKeyPressCode == KEY.DEL) {
                select.hide();
                return;
            }

            var currentValue = $input.val();

            if (!skipPrevCheck && currentValue == previousValue)
                return;

            previousValue = currentValue;

            currentValue = lastWord(currentValue);
            if (currentValue.length >= options.minChars) {
                $input.addClass(options.loadingClass);
                if (!options.matchCase)
                    currentValue = currentValue.toLowerCase();
                request(currentValue, receiveData, hideResultsNow);
            } else {
                stopLoading();
                select.hide();
            }
        };

        function trimWords(value) {
            if (!value) {
                return [""];
            }
            var words = value.split(options.multipleSeparator);
            var result = [];
            $.each(words, function (i, value) {
                if ($.trim(value))
                    result[i] = $.trim(value);
            });
            return result;
        }

        function lastWord(value) {
            if (!options.multiple)
                return value;
            var words = trimWords(value);
            return words[words.length - 1];
        }

        // fills in the input box w/the first match (assumed to be the best match)
        // q: the term entered
        // sValue: the first matching result
        function autoFill(q, sValue) {
            // autofill in the complete box w/the first match as long as the user hasn't entered in more data
            // if the last user key pressed was backspace, don't autofill
            if (options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE) {
                // fill in the value (keep the case the user has typed)
                $input.val($input.val() + sValue.substring(lastWord(previousValue).length));
                // select the portion of the value not typed by the user (so the next character will erase)
                $.Autocompleter.Selection(input, previousValue.length, previousValue.length + sValue.length);
            }
        };

        function hideResults() {
            clearTimeout(timeout);
            timeout = setTimeout(hideResultsNow, 200);
        };

        function hideResultsNow() {
            var wasVisible = select.visible();
            select.hide();
            clearTimeout(timeout);
            stopLoading();
            $input.removeClass("autoerror");
            if (options.mustMatch) {
                // call search and run callback
                $input.search(
				function (result) {
				    // if no value found, clear the input box
				    if (!result) {
				        if (options.multiple) {
				            var words = trimWords($input.val()).slice(0, -1);
				            $input.val(words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : ""));
				        }
				        else{
                            $input.val("");
                            $input.addClass("autoerror");
                        }
				    }
				}
			);
            }
            if (wasVisible)
            // position cursor at end of input field
                $.Autocompleter.Selection(input, input.value.length, input.value.length);
        };

        function receiveData(q, data) {
            if (data && data.length && hasFocus) {
                stopLoading();
                select.display(data, q);
                autoFill(q, data[0].value);
                select.show();
            } else {
                hideResultsNow();
            }
        };

        function request(term, success, failure) {
            if (!options.matchCase)
                term = term.toLowerCase();
            var data = cache.load(term);
            // recieve the cached data
            if (data && data.length) {
                success(term, data);
                // if an AJAX url has been supplied, try loading the data now
            } else if ((typeof options.url == "string") && (options.url.length > 0)) {

                var extraParams = {
                    timestamp: +new Date()
                };
                $.each(options.extraParams, function (key, param) {
                    extraParams[key] = typeof param == "function" ? param() : param;
                });

                $.ajax({
                    // try to leverage ajaxQueue plugin to abort previous requests
                    mode: "abort",
                    // limit abortion to this input
                    port: "autocomplete" + input.name,
                    dataType: options.dataType,
                    url: options.url,
                    data: $.extend({
                        q: lastWord(term),
                        limit: options.max
                    }, extraParams),
                    success: function (data) {
                        var parsed = options.parse && options.parse(data) || parse(data);
                        cache.add(term, parsed);
                        success(term, parsed);
                    }
                });
            } else {
                // if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
                select.emptyList();
                failure(term);
            }
        };

        function parse(data) {
            var parsed = [];
            var rows = data.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var row = $.trim(rows[i]);
                if (row) {
                    row = row.split("|");
                    parsed[parsed.length] = {
                        data: row,
                        value: row[0],
                        result: options.formatResult && options.formatResult(row, row[0]) || row[0]
                    };
                }
            }
            return parsed;
        };

        function stopLoading() {
            $input.removeClass(options.loadingClass);
        };

    };

    $.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: false,
        matchSubset: true,
        matchContains: false,
        cacheLength: 10,
        max: 100,
        mustMatch: false,
        extraParams: {},
        selectFirst: true,
        formatItem: function (row) { return row[0]; },
        formatMatch: null,
        autoFill: false,
        width: 0,
        multiple: false,
        multipleSeparator: "::_ ",
        highlight: function (value, term) {
            return value; //.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
        },
        scroll: true,
        scrollHeight: 180
    };

    $.Autocompleter.Cache = function (options) {

        var data = {};
        var length = 0;

        function matchSubset(s, sub) {
            if (!options.matchCase)
                s = s.toLowerCase();
            var i = s.indexOf(sub);
            if (options.matchContains == "word") {
                i = s.toLowerCase().search("\\b" + sub.toLowerCase());
            }
            if (i == -1) return false;
            return i == 0 || options.matchContains;
        };

        function add(q, value) {
            if (length > options.cacheLength) {
                flush();
            }
            if (!data[q]) {
                length++;
            }
            data[q] = value;
        }

        function populate() {
            if (!options.data) return false;
            // track the matches
            var stMatchSets = {},
			nullData = 0;

            // no url was specified, we need to adjust the cache length to make sure it fits the local data store
            if (!options.url) options.cacheLength = 1;

            // track all options for minChars = 0
            stMatchSets[""] = [];

            // loop through the array and create a lookup structure
            for (var i = 0, ol = options.data.length; i < ol; i++) {
                var rawValue = options.data[i];
                // if rawValue is a string, make an array otherwise just reference the array
                rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;

                var value = options.formatMatch(rawValue, i + 1, options.data.length);
                if (value === false)
                    continue;

                var firstChar = value.charAt(0).toLowerCase();
                // if no lookup array for this character exists, look it up now
                if (!stMatchSets[firstChar])
                    stMatchSets[firstChar] = [];

                // if the match is a string
                var row = {
                    value: value,
                    data: rawValue,
                    result: options.formatResult && options.formatResult(rawValue) || value
                };

                // push the current match into the set list
                stMatchSets[firstChar].push(row);

                // keep track of minChars zero items
                if (nullData++ < options.max) {
                    stMatchSets[""].push(row);
                }
            };

            // add the data items to the cache
            $.each(stMatchSets, function (i, value) {
                // increase the cache size
                options.cacheLength++;
                // add to the cache
                add(i, value);
            });
        }

        // populate any existing data
        setTimeout(populate, 25);

        function flush() {
            data = {};
            length = 0;
        }

        return {
            flush: flush,
            add: add,
            populate: populate,
            load: function (q) {
                if (!options.cacheLength || !length)
                    return null;
                /* 
                * if dealing w/local data and matchContains than we must make sure
                * to loop through all the data collections looking for matches
                */
                if (!options.url && options.matchContains) {
                    // track all matches
                    var csub = [];
                    // loop through all the data grids for matches
                    for (var k in data) {
                        // don't search through the stMatchSets[""] (minChars: 0) cache
                        // this prevents duplicates
                        if (k.length > 0) {
                            var c = data[k];
                            $.each(c, function (i, x) {
                                // if we've got a match, add it to the array
                                if (matchSubset(x.value, q)) {
                                    csub.push(x);
                                }
                            });
                        }
                    }
                    return csub;
                } else
                // if the exact item exists, use it
                    if (data[q]) {
                        return data[q];
                    } else
                        if (options.matchSubset) {
                            for (var i = q.length - 1; i >= options.minChars; i--) {
                                var c = data[q.substr(0, i)];
                                if (c) {
                                    var csub = [];
                                    $.each(c, function (i, x) {
                                        if (matchSubset(x.value, q)) {
                                            csub[csub.length] = x;
                                        }
                                    });
                                    return csub;
                                }
                            }
                        }
                return null;
            }
        };
    };

    $.Autocompleter.Select = function (options, input, select, config) {
        var CLASSES = {
            ACTIVE: "ac_over"
        };

        var listItems,
		active = -1,
		data,
		term = "",
		needsInit = true,
		element,
		list;

        // Create results
        function init() {
            if (!needsInit)
                return;
            element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		.css("position", "absolute")
		.appendTo(document.body);

            list = $("<ul/>").appendTo(element).mouseover(function (event) {
                if (target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
                    active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
                    $(target(event)).addClass(CLASSES.ACTIVE);
                }
            }).click(function (event) {
                $(target(event)).addClass(CLASSES.ACTIVE);
                select();
                // TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
                input.focus();
                return false;
            }).mousedown(function () {
                config.mouseDownOnSelect = true;
            }).mouseup(function () {
                config.mouseDownOnSelect = false;
            });

            if (options.width > 0)
                element.css("width", options.width);

            needsInit = false;
        }

        function target(event) {
            var element = event.target;
            while (element && element.tagName != "LI")
                element = element.parentNode;
            // more fun with IE, sometimes event.target is empty, just ignore it then
            if (!element)
                return [];
            return element;
        }

        function moveSelect(step) {
            listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
            movePosition(step);
            var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
            if (options.scroll) {
                var offset = 0;
                listItems.slice(0, active).each(function () {
                    offset += this.offsetHeight;
                });
                if ((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                    list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
                } else if (offset < list.scrollTop()) {
                    list.scrollTop(offset);
                }
            }
        };

        function movePosition(step) {
            active += step;
            if (active < 0) {
                active = listItems.size() - 1;
            } else if (active >= listItems.size()) {
                active = 0;
            }
        }

        function limitNumberOfItems(available) {
            return options.max && options.max < available
			? options.max
			: available;
        }

        function fillList() {
            list.empty();
            var max = limitNumberOfItems(data.length);
            for (var i = 0; i < max; i++) {
                if (!data[i])
                    continue;
                var formatted = options.formatItem(data[i].data, i + 1, max, data[i].value, term);
                if (formatted === false)
                    continue;
                var li = $("<li/>").html(options.highlight(formatted, term)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
                $.data(li, "ac_data", data[i]);
            }
            listItems = list.find("li");
            if (options.selectFirst) {
                listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
                active = 0;
            }
            // apply bgiframe if available
            if ($.fn.bgiframe)
                list.bgiframe();
        }

        return {
            display: function (d, q) {
                init();
                data = d;
                term = q;
                fillList();
            },
            next: function () {
                moveSelect(1);
            },
            prev: function () {
                moveSelect(-1);
            },
            pageUp: function () {
                if (active != 0 && active - 8 < 0) {
                    moveSelect(-active);
                } else {
                    moveSelect(-8);
                }
            },
            pageDown: function () {
                if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
                    moveSelect(listItems.size() - 1 - active);
                } else {
                    moveSelect(8);
                }
            },
            hide: function () {
                element && element.hide();
                listItems && listItems.removeClass(CLASSES.ACTIVE);
                active = -1;
            },
            visible: function () {
                return element && element.is(":visible");
            },
            current: function () {
                return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
            },
            show: function () {
                var offset = $(input).offset();
                var w = typeof options.width == "string" || options.width > 0 ? options.width : $(input).width();
                element.css({
                    width: w,
                    top: offset.top + input.offsetHeight,
                    left: offset.left + $(input).width() - w
                }).show();
                if (options.scroll) {
                    list.scrollTop(0);
                    list.css({
                        maxHeight: options.scrollHeight,
                        overflow: 'auto'
                    });

                    if ($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
                        var listHeight = 0;
                        listItems.each(function () {
                            listHeight += this.offsetHeight;
                        });
                        var scrollbarsVisible = listHeight > options.scrollHeight;
                        list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight);
                        if (!scrollbarsVisible) {
                            // IE doesn't recalculate width when scrollbar disappears
                            listItems.width(list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")));
                        }
                    }

                }
            },
            selected: function () {
                var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
                return selected && selected.length && $.data(selected[0], "ac_data");
            },
            emptyList: function () {
                list && list.empty();
            },
            unbind: function () {
                element && element.remove();
            }
        };
    };

    $.Autocompleter.Selection = function (field, start, end) {
        if (field.createTextRange) {
            var selRange = field.createTextRange();
            selRange.collapse(true);
            selRange.moveStart("character", start);
            selRange.moveEnd("character", end);
            selRange.select();
        } else if (field.setSelectionRange) {
            field.setSelectionRange(start, end);
        } else {
            if (field.selectionStart) {
                field.selectionStart = start;
                field.selectionEnd = end;
            }
        }
        field.focus();
    };

})(jQuery);

function appendTime() {
    return "&time=" + (new Date().valueOf());
}

function autoCompleteFree(qd, textInput, hiddenInput, postback, formatItem, formatResult, more, _autourl, _width, moreQS) {
    _autourl = _autourl || 'get.php?op=auto&qd=' + qd + appendTime();
    if (more)
        _autourl += '&more=' + encodeURIComponent(more);
    if (moreQS)
        _autourl += '&' + moreQS;
    //_width = _width || 300;
    $(textInput).autocomplete(_autourl, {
        width: _width,
        minChars: 0,
        matchContains: true,
        mustMatch: false,
        cache: false,
        formatItem: formatItem || function (data, i, n, value) {
            $(hiddenInput).val('');
            return data[1];
        },
        formatResult: formatResult || function (data, value) {
            return data[1];
        }
    });
    $(textInput).result(function (event, data, formatted) {
        var hidden = $(hiddenInput);
        hidden.val(data[0]);
        if (postback)
            postback(event, data, formatted, textInput, hiddenInput);
    });

    function autoCompleteBlur() {
        if ($(textInput).val() == '')
            $(hiddenInput).val('');
    }
    $(textInput).unbind('blur', autoCompleteBlur);
    $(textInput).blur(autoCompleteBlur);
}
function autoComplete(qd, textInput, hiddenInput, postback, formatItem, formatResult, more, _autourl, _width, moreQS) {
    _autourl = _autourl || 'get.php?op=auto&qd=' + qd + appendTime();
    if (more)
        _autourl += '&more=' + encodeURIComponent(more);
    if (moreQS)
        _autourl += '&' + moreQS;
    //_width = _width || 300;
    $(textInput).autocomplete(_autourl, {
        width: _width,
        minChars: 0,
        matchContains: true,
        mustMatch: true,
        cache: false,
        formatItem: formatItem || function (data, i, n, value) {
            $(hiddenInput).val('');
            return data[1];
        },
        formatResult: formatResult || function (data, value) {
            return data[1];
        }
    });
    $(textInput).result(function (event, data, formatted) {
        var hidden = $(hiddenInput);
        hidden.val(data[0]);
        if (postback)
            postback(event, data, formatted, textInput, hiddenInput);
    });

    function autoCompleteBlur() {
        if ($(textInput).val() == '')
            $(hiddenInput).val('');
    }
    $(textInput).unbind('blur', autoCompleteBlur);
    $(textInput).blur(autoCompleteBlur);
}


/*
 *  Bootstrap TouchSpin - v3.1.2
 *  A mobile and touch friendly input spinner component for Bootstrap 3.
 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by Istvأ،n Ujj-Mأ©szأ،ros
 *  Under Apache License v2.0 License
 */
!function(a){"use strict";function b(a,b){return a+".touchspin_"+b}function c(c,d){return a.map(c,function(a){return b(a,d)})}var d=0;a.fn.TouchSpin=function(b){if("destroy"===b)return void this.each(function(){var b=a(this),d=b.data();a(document).off(c(["mouseup","touchend","touchcancel","mousemove","touchmove","scroll","scrollstart"],d.spinnerid).join(" "))});var e={min:0,max:100,initval:"",replacementval:"",step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalupclass:"glyphicon glyphicon-chevron-up",verticaldownclass:"glyphicon glyphicon-chevron-down",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-default",buttonup_class:"btn btn-default",buttondown_txt:"-",buttonup_txt:"+"},f={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each(function(){function g(){if(!J.data("alreadyinitialized")){if(J.data("alreadyinitialized",!0),d+=1,J.data("spinnerid",d),!J.is("input"))return void console.log("Must be an input.");j(),h(),u(),m(),p(),q(),r(),s(),D.input.css("display","block")}}function h(){""!==B.initval&&""===J.val()&&J.val(B.initval)}function i(a){l(a),u();var b=D.input.val();""!==b&&(b=Number(D.input.val()),D.input.val(b.toFixed(B.decimals)))}function j(){B=a.extend({},e,K,k(),b)}function k(){var b={};return a.each(f,function(a,c){var d="bts-"+c;J.is("[data-"+d+"]")&&(b[a]=J.data(d))}),b}function l(b){B=a.extend({},B,b),b.postfix&&J.parent().find(".bootstrap-touchspin-postfix").text(b.postfix),b.prefix&&J.parent().find(".bootstrap-touchspin-prefix").text(b.prefix)}function m(){var a=J.val(),b=J.parent();""!==a&&(a=Number(a).toFixed(B.decimals)),J.data("initvalue",a).val(a),J.addClass("form-control"),b.hasClass("input-group")?n(b):o()}function n(b){b.addClass("bootstrap-touchspin");var c,d,e=J.prev(),f=J.next(),g='<span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+"</span>",h='<span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+"</span>";e.hasClass("input-group-btn")?(c='<button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+"</button>",e.append(c)):(c='<span class="input-group-btn"><button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+"</button></span>",a(c).insertBefore(J)),f.hasClass("input-group-btn")?(d='<button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button>",f.prepend(d)):(d='<span class="input-group-btn"><button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button></span>",a(d).insertAfter(J)),a(g).insertBefore(J),a(h).insertAfter(J),C=b}function o(){var b;b=B.verticalbuttons?'<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+'</span><span class="input-group-btn-vertical"><button class="'+B.buttondown_class+' bootstrap-touchspin-up" type="button"><i class="'+B.verticalupclass+'"></i></button><button class="'+B.buttonup_class+' bootstrap-touchspin-down" type="button"><i class="'+B.verticaldownclass+'"></i></button></span></div>':'<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+'</span><span class="input-group-btn"><button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button></span></div>",C=a(b).insertBefore(J),a(".bootstrap-touchspin-prefix",C).after(J),J.hasClass("input-sm")?C.addClass("input-group-sm"):J.hasClass("input-lg")&&C.addClass("input-group-lg")}function p(){D={down:a(".bootstrap-touchspin-down",C),up:a(".bootstrap-touchspin-up",C),input:a("input",C),prefix:a(".bootstrap-touchspin-prefix",C).addClass(B.prefix_extraclass),postfix:a(".bootstrap-touchspin-postfix",C).addClass(B.postfix_extraclass)}}function q(){""===B.prefix&&D.prefix.hide(),""===B.postfix&&D.postfix.hide()}function r(){J.on("keydown",function(a){var b=a.keyCode||a.which;38===b?("up"!==M&&(w(),z()),a.preventDefault()):40===b&&("down"!==M&&(x(),y()),a.preventDefault())}),J.on("keyup",function(a){var b=a.keyCode||a.which;38===b?A():40===b&&A()}),J.on("blur",function(){u()}),D.down.on("keydown",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&("down"!==M&&(x(),y()),a.preventDefault())}),D.down.on("keyup",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&A()}),D.up.on("keydown",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&("up"!==M&&(w(),z()),a.preventDefault())}),D.up.on("keyup",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&A()}),D.down.on("mousedown.touchspin",function(a){D.down.off("touchstart.touchspin"),J.is(":disabled")||(x(),y(),a.preventDefault(),a.stopPropagation())}),D.down.on("touchstart.touchspin",function(a){D.down.off("mousedown.touchspin"),J.is(":disabled")||(x(),y(),a.preventDefault(),a.stopPropagation())}),D.up.on("mousedown.touchspin",function(a){D.up.off("touchstart.touchspin"),J.is(":disabled")||(w(),z(),a.preventDefault(),a.stopPropagation())}),D.up.on("touchstart.touchspin",function(a){D.up.off("mousedown.touchspin"),J.is(":disabled")||(w(),z(),a.preventDefault(),a.stopPropagation())}),D.up.on("mouseout touchleave touchend touchcancel",function(a){M&&(a.stopPropagation(),A())}),D.down.on("mouseout touchleave touchend touchcancel",function(a){M&&(a.stopPropagation(),A())}),D.down.on("mousemove touchmove",function(a){M&&(a.stopPropagation(),a.preventDefault())}),D.up.on("mousemove touchmove",function(a){M&&(a.stopPropagation(),a.preventDefault())}),a(document).on(c(["mouseup","touchend","touchcancel"],d).join(" "),function(a){M&&(a.preventDefault(),A())}),a(document).on(c(["mousemove","touchmove","scroll","scrollstart"],d).join(" "),function(a){M&&(a.preventDefault(),A())}),J.on("mousewheel DOMMouseScroll",function(a){if(B.mousewheel&&J.is(":focus")){var b=a.originalEvent.wheelDelta||-a.originalEvent.deltaY||-a.originalEvent.detail;a.stopPropagation(),a.preventDefault(),0>b?x():w()}})}function s(){J.on("touchspin.uponce",function(){A(),w()}),J.on("touchspin.downonce",function(){A(),x()}),J.on("touchspin.startupspin",function(){z()}),J.on("touchspin.startdownspin",function(){y()}),J.on("touchspin.stopspin",function(){A()}),J.on("touchspin.updatesettings",function(a,b){i(b)})}function t(a){switch(B.forcestepdivisibility){case"round":return(Math.round(a/B.step)*B.step).toFixed(B.decimals);case"floor":return(Math.floor(a/B.step)*B.step).toFixed(B.decimals);case"ceil":return(Math.ceil(a/B.step)*B.step).toFixed(B.decimals);default:return a}}function u(){var a,b,c;return a=J.val(),""===a?void(""!==B.replacementval&&(J.val(B.replacementval),J.trigger("change"))):void(B.decimals>0&&"."===a||(b=parseFloat(a),isNaN(b)&&(b=""!==B.replacementval?B.replacementval:0),c=b,b.toString()!==a&&(c=b),b<B.min&&(c=B.min),b>B.max&&(c=B.max),c=t(c),Number(a).toString()!==c.toString()&&(J.val(c),J.trigger("change"))))}function v(){if(B.booster){var a=Math.pow(2,Math.floor(L/B.boostat))*B.step;return B.maxboostedstep&&a>B.maxboostedstep&&(a=B.maxboostedstep,E=Math.round(E/a)*a),Math.max(B.step,a)}return B.step}function w(){u(),E=parseFloat(D.input.val()),isNaN(E)&&(E=0);var a=E,b=v();E+=b,E>B.max&&(E=B.max,J.trigger("touchspin.on.max"),A()),D.input.val(Number(E).toFixed(B.decimals)),a!==E&&J.trigger("change")}function x(){u(),E=parseFloat(D.input.val()),isNaN(E)&&(E=0);var a=E,b=v();E-=b,E<B.min&&(E=B.min,J.trigger("touchspin.on.min"),A()),D.input.val(E.toFixed(B.decimals)),a!==E&&J.trigger("change")}function y(){A(),L=0,M="down",J.trigger("touchspin.on.startspin"),J.trigger("touchspin.on.startdownspin"),H=setTimeout(function(){F=setInterval(function(){L++,x()},B.stepinterval)},B.stepintervaldelay)}function z(){A(),L=0,M="up",J.trigger("touchspin.on.startspin"),J.trigger("touchspin.on.startupspin"),I=setTimeout(function(){G=setInterval(function(){L++,w()},B.stepinterval)},B.stepintervaldelay)}function A(){switch(clearTimeout(H),clearTimeout(I),clearInterval(F),clearInterval(G),M){case"up":J.trigger("touchspin.on.stopupspin"),J.trigger("touchspin.on.stopspin");break;case"down":J.trigger("touchspin.on.stopdownspin"),J.trigger("touchspin.on.stopspin")}L=0,M=!1}var B,C,D,E,F,G,H,I,J=a(this),K=J.data(),L=0,M=!1;g()})}}(jQuery);



// https://sweetalert2.github.io/#download
/*!
* sweetalert2 v7.18.0
* Released under the MIT License.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var consolePrefix = 'SweetAlert2:';

/**
 * Filter the unique values into a new array
 * @param arr
 */
var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];
  if (inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
var previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};

var isThenable = function isThenable(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.then === 'function';
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var version = "7.18.0";

var argsToParams = function argsToParams(args) {
  var params = {};
  switch (_typeof(args[0])) {
    case 'string':
      ['title', 'html', 'type'].forEach(function (name, index) {
        if (args[index] !== undefined) {
          params[name] = args[index];
        }
      });
      break;

    case 'object':
      _extends(params, args[0]);
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }
  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'has-input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousActiveElement: null,
  previousBodyPadding: null
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};

var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jquery $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};

var getIcons = function getIcons() {
  var popup = getPopup();
  return popup.querySelectorAll('.' + swalClasses.icon);
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce('swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead');
  return elementByClass(swalClasses.actions);
};

var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};

var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.prototype.slice.call(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  // https://github.com/jkup/focusable/blob/master/index.js
  var otherFocusableElements = Array.prototype.slice.call(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var isModal = function isModal() {
  return !document.body.classList.contains(swalClasses['toast-shown']);
};

var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};

var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = ('\n <div aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.popup + '" tabindex="-1">\n   <div class="' + swalClasses.header + '">\n     <ul class="' + swalClasses.progresssteps + '"></ul>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">\n       <span class="' + swalClasses['icon-text'] + '">?</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">\n       <span class="' + swalClasses['icon-text'] + '">!</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">\n       <span class="' + swalClasses['icon-text'] + '">i</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + swalClasses.image + '" />\n     <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n     <button type="button" class="' + swalClasses.close + '">\xD7</button>\n   </div>\n   <div class="' + swalClasses.content + '">\n     <div id="' + swalClasses.content + '"></div>\n     <input class="' + swalClasses.input + '" />\n     <input type="file" class="' + swalClasses.file + '" />\n     <div class="' + swalClasses.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + swalClasses.select + '"></select>\n     <div class="' + swalClasses.radio + '"></div>\n     <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + swalClasses.textarea + '"></textarea>\n     <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   </div>\n   <div class="' + swalClasses.actions + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <div class="' + swalClasses.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, '');

/*
 * Add modal + backdrop to DOM
 */
var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = content.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(content, swalClasses.textarea);

  // a11y
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }

  var resetValidationError = function resetValidationError() {
    SweetAlert.isVisible() && SweetAlert.resetValidationError();
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function () {
    resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    resetValidationError();
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  }

  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object') {
    target.innerHTML = '';
    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  } else {}
  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};

var deprecatedParams = ['useRejections', 'expectRejections'];

/**
 * Is valid parameter
 * @param {String} paramName
 */
var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
    if (isDeprecatedParameter(param)) {
      warnOnce('The parameter "' + param + '" is deprecated and will be removed in the next major release.');
    }
  }
};

var globalState = {
  popupParams: _extends({}, defaultParams)
};

/*
 * Global function to close sweetAlert
 */
var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();
  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);
  clearTimeout(popup.timeout);

  if (!isToast()) {
    resetPrevState();
    window.onkeydown = globalState.previousWindowKeyDown;
    globalState.windowOnkeydownOverridden = false;
  }

  var removePopupAndResetState = function removePopupAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
    }

    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      setTimeout(function () {
        onAfterClose();
      });
    }
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */
var isVisible$1 = function isVisible() {
  return !!getPopup();
};

/*
 * Global function to click 'Confirm' button
 */
var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt.fire('What is your first name?')
 * const {value: lastName} = await TextPrompt.fire('What is your last name?')
 *
 * @param params
 */
function mixin(mixinParams) {
  var Swal = this;
  return function (_Swal) {
    inherits(MixinSwal, _Swal);

    function MixinSwal() {
      classCallCheck(this, MixinSwal);
      return possibleConstructorReturn(this, (MixinSwal.__proto__ || Object.getPrototypeOf(MixinSwal)).apply(this, arguments));
    }

    createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return get(MixinSwal.prototype.__proto__ || Object.getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);
    return MixinSwal;
  }(Swal);
}

// private global state for the queue feature
var currentSteps = [];

/*
 * Global function for chaining sweetAlert popups
 */
var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;
  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({ dismiss: result.dismiss });
          }
        });
      } else {
        resetQueue();
        resolve({ value: queueResult });
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current popup in queue
 */
var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a popup to the queue
 */
var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }
  return currentSteps.push(step);
};

/*
 * Global function for deleting a popup from the queue
 */
var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Set default params for each popup
 * @param {Object} userParams
 */
var setDefaults = function setDefaults(userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  showWarningsForParams(userParams);

  // assign valid params from userParams to popupParams
  for (var param in userParams) {
    if (isValidParameter(param)) {
      globalState.popupParams[param] = userParams[param];
    }
  }
};

/**
 * Reset default params for each popup
 */
var resetDefaults = function resetDefaults() {
  globalState.popupParams = _extends({}, defaultParams);
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
var showLoading = function showLoading() {
  var popup = getPopup();
  if (!popup) {
    SweetAlert('');
  }
  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Swal, [null].concat(args)))();
}



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	isLoading: isLoading,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	setDefaults: setDefaults,
	resetDefaults: resetDefaults,
	showLoading: showLoading,
	enableLoading: showLoading,
	fire: fire
});

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
function hideLoading() {
  var domCache = this._domCache;
  if (!this.params.showConfirmButton) {
    hide(domCache.confirmButton);
    if (!this.params.showCancelButton) {
      hide(domCache.actions);
    }
  }
  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

// Get input element by specified type or, if type isn't specified, by params.input
function getInput(inputType) {
  var domCache = this._domCache;
  inputType = inputType || this.params.input;
  if (!inputType) {
    return null;
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);
    case 'checkbox':
      return domCache.popup.querySelector('.' + swalClasses.checkbox + ' input');
    case 'radio':
      return domCache.popup.querySelector('.' + swalClasses.radio + ' input:checked') || domCache.popup.querySelector('.' + swalClasses.radio + ' input:first-child');
    case 'range':
      return domCache.popup.querySelector('.' + swalClasses.range + ' input');
    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  this._domCache.confirmButton.disabled = false;
  this._domCache.cancelButton.disabled = false;
}

function disableButtons() {
  this._domCache.confirmButton.disabled = true;
  this._domCache.cancelButton.disabled = true;
}

function enableConfirmButton() {
  this._domCache.confirmButton.disabled = false;
}

function disableConfirmButton() {
  this._domCache.confirmButton.disabled = true;
}

function enableInput() {
  var input = this.getInput();
  if (!input) {
    return false;
  }
  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}

function disableInput() {
  var input = this.getInput();
  if (!input) {
    return false;
  }
  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

// Show block with validation error
function showValidationError(error) {
  var domCache = this._domCache;
  domCache.validationError.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationError.style.marginLeft = '-' + popupComputedStyle.getPropertyValue('padding-left');
  domCache.validationError.style.marginRight = '-' + popupComputedStyle.getPropertyValue('padding-right');
  show(domCache.validationError);

  var input = this.getInput();
  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses.validationerror);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
}

// Hide block with validation error
function resetValidationError() {
  var domCache = this._domCache;
  if (domCache.validationError) {
    hide(domCache.validationError);
  }

  var input = this.getInput();
  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

var defaultInputValidators = {
  email: function email(string) {
    return (/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject('Invalid email address')
    );
  },
  url: function url(string) {
    // taken from https://stackoverflow.com/a/3809435/1331425
    return (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject('Invalid URL')
    );
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : SweetAlert.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  }

  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup = void 0;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  }

  // Set popup width
  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  }

  // Set popup padding
  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  }

  // Set popup background
  if (params.background) {
    popup.style.background = params.background;
  }
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var title = getTitle();
  var content = getContent().querySelector('#' + swalClasses.content);
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();
  var footer = getFooter();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  // Content as HTML
  if (params.html) {
    parseHtmlToContainer(params.html, content);

    // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }

  // Position
  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }

  // Animation
  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Default Class
  popup.className = swalClasses.popup;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom Class
  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? SweetAlert.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i = 0; _i < icons.length; _i++) {
    hide(icons[_i]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = popup.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      addClass(icon, 'swal2-animate-' + params.type + '-icon');
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }

    // Loading state
    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // Footer
  parseHtmlToContainer(params.footer, footer);

  // CSS animation
  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Animations
 *
 * @param animation
 * @param onBeforeOpen
 * @param onComplete
 */
var openPopup = function openPopup(animation, onBeforeOpen, onOpen) {
  var container = getContainer();
  var popup = getPopup();

  if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
    onBeforeOpen(popup);
  }

  if (animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }
  show(popup);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);
  if (isModal()) {
    fixScrollbar();
    iOSfix();
  }
  states.previousActiveElement = document.activeElement;
  if (onOpen !== null && typeof onOpen === 'function') {
    setTimeout(function () {
      onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var params = this.params = _extends({}, globalState.popupParams, userParams);
  setParameters(params);
  Object.freeze(params);

  var domCache = this._domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationError: getValidationError(),
    progressSteps: getProgressSteps()
  };

  var constructor = this.constructor;

  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(params.onClose, params.onAfterClose); // TODO: make closePopup an *instance* method
      if (params.useRejections) {
        resolve(value);
      } else {
        resolve({ value: value });
      }
    };
    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(params.onClose, params.onAfterClose);
      if (params.useRejections) {
        reject(dismiss);
      } else {
        resolve({ dismiss: dismiss });
      }
    };
    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(params.onClose, params.onAfterClose);
      reject(error$$1);
    };

    // Close on timer
    if (params.timer) {
      domCache.popup.timeout = setTimeout(function () {
        return dismissWith('timer');
      }, params.timer);
    }

    // Get the value of the popup input
    var getInputValue = function getInputValue() {
      var input = _this.getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = _this.getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (params.preConfirm) {
        _this.resetValidationError();
        var preConfirmPromise = Promise.resolve().then(function () {
          return params.preConfirm(value, params.extraParams);
        });
        if (params.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            _this.hideLoading();
            if (validationError) {
              _this.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationError) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;

      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                _this.disableInput();
                var validationPromise = Promise.resolve().then(function () {
                  return params.inputValidator(inputValue, params.extraParams);
                });
                if (params.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();
                    _this.enableInput();
                    confirm(inputValue);
                  }, function (validationError) {
                    _this.enableButtons();
                    _this.enableInput();
                    if (validationError) {
                      _this.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    _this.enableButtons();
                    _this.enableInput();
                    if (validationError) {
                      _this.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();
            dismissWith(constructor.DismissReason.cancel);
          }
          break;
        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing popup by close button
    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (params.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function (e) {
        if (params.showConfirmButton || params.showCancelButton || params.showCloseButton || params.input) {
          return;
        }
        constructor.closePopup(params.onClose, params.onAfterClose);
        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false;

      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined;
          // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup
          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      };

      // Ignore click events that had mousedown on the container but mouseup on the popup
      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined;
          // We also need to check if the mouseup target is a child of the popup
          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }
        if (e.target !== domCache.container) {
          return;
        }
        if (callIfFunction(params.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    }

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target === _this.getInput()) {
          if (['textarea', 'file'].indexOf(params.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(params.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(params.allowEscapeKey) === true) {
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (params.toast && globalState.windowOnkeydownOverridden) {
      window.onkeydown = globalState.previousWindowKeyDown;
      globalState.windowOnkeydownOverridden = false;
    }

    if (!params.toast && !globalState.windowOnkeydownOverridden) {
      globalState.previousWindowKeyDown = window.onkeydown;
      globalState.windowOnkeydownOverridden = true;
      window.onkeydown = handleKeyDown;
    }

    _this.enableButtons();
    _this.hideLoading();
    _this.resetValidationError();

    if (params.input) {
      addClass(document.body, swalClasses['has-input']);
    }

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(domCache.content, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(domCache.content, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(domCache.content, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(domCache.content, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions.forEach(function (_ref) {
            var _ref2 = slicedToArray(_ref, 2),
                optionValue = _ref2[0],
                optionLabel = _ref2[1];

            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = optionLabel;
            if (params.inputValue.toString() === optionValue.toString()) {
              option.selected = true;
            }
            select.appendChild(option);
          });
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(domCache.content, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions.forEach(function (_ref3) {
            var _ref4 = slicedToArray(_ref3, 2),
                radioValue = _ref4[0],
                radioLabel = _ref4[1];

            var radioInput = document.createElement('input');
            var radioLabelElement = document.createElement('label');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue.toString() === radioValue.toString()) {
              radioInput.checked = true;
            }
            radioLabelElement.innerHTML = radioLabel;
            radioLabelElement.insertBefore(radioInput, radioLabelElement.firstChild);
            radio.appendChild(radioLabelElement);
          });
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);
        var checkboxInput = _this.getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(domCache.content, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };
      if (isThenable(params.inputOptions)) {
        constructor.showLoading();
        params.inputOptions.then(function (inputOptions) {
          _this.hideLoading();
          processInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        processInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object, Map or Promise, got ' + _typeof(params.inputOptions));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isThenable(params.inputValue)) {
      constructor.showLoading();
      hide(input);
      params.inputValue.then(function (inputValue) {
        input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        _this.hideLoading();
      });
    }

    openPopup(params.animation, params.onBeforeOpen, params.onOpen);

    if (!params.toast) {
      if (!callIfFunction(params.allowEnterKey)) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (params.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (params.focusConfirm && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } else {
            setFocus(-1, 1);
            domCache.confirmButton.blur();
            domCache.cancelButton.blur();
      }
    }

    // fix scroll
    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationError: showValidationError,
	resetValidationError: resetValidationError,
	_main: _main
});

var currentInstance = void 0;

// SweetAlert constructor
function SweetAlert() {
  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  }

  // Check for the existence of Promise
  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0] === 'undefined') {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  // handle things when constructor is invoked without the `new` keyword
  if (!(this instanceof SweetAlert)) {
    return new (Function.prototype.bind.apply(SweetAlert, [null].concat(args)))();
  }

  currentInstance = this;

  this._promise = this._main(this.constructor.argsToParams(args));
}

// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  return this._promise.then(onFulfilled, onRejected);
};
SweetAlert.prototype.catch = function (onRejected) {
  return this._promise.catch(onRejected);
};
SweetAlert.prototype.finally = function (onFinally) {
  return this._promise.finally(onFinally);
};

// Assign instance methods from src/instanceMethods/*.js to prototype
_extends(SweetAlert.prototype, instanceMethods);

// Assign static methods from src/staticMethods/*.js to constructor
_extends(SweetAlert, staticMethods);

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});

SweetAlert.DismissReason = DismissReason;

SweetAlert.noop = function () {};

SweetAlert.version = version;

SweetAlert.default = SweetAlert;

/**
 * Set default params if `window._swalDefaults` is an object
 */
if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
  SweetAlert.setDefaults(window._swalDefaults);
}

return SweetAlert;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@keyframes swal2-show {\n" +
"  0% {\n" +
"    -webkit-transform: scale(0.7);\n" +
"            transform: scale(0.7); }\n" +
"  45% {\n" +
"    -webkit-transform: scale(1.05);\n" +
"            transform: scale(1.05); }\n" +
"  80% {\n" +
"    -webkit-transform: scale(0.95);\n" +
"            transform: scale(0.95); }\n" +
"  100% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1); } }\n" +
"\n" +
"@-webkit-keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes swal2-hide {\n" +
"  0% {\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; }\n" +
"  100% {\n" +
"    -webkit-transform: scale(0.5);\n" +
"            transform: scale(0.5);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-tip {\n" +
"  0% {\n" +
"    top: 1.1875em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: 1.0625em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: 2.1875em;\n" +
"    left: -.375em;\n" +
"    width: 3.125em; }\n" +
"  84% {\n" +
"    top: 3em;\n" +
"    left: 1.3125em;\n" +
"    width: 1.0625em; }\n" +
"  100% {\n" +
"    top: 2.8125em;\n" +
"    left: .875em;\n" +
"    width: 1.5625em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@keyframes swal2-animate-success-line-long {\n" +
"  0% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 3.375em;\n" +
"    right: 2.875em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: 2.1875em;\n" +
"    right: 0;\n" +
"    width: 3.4375em; }\n" +
"  100% {\n" +
"    top: 2.375em;\n" +
"    right: .5em;\n" +
"    width: 2.9375em; } }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-success-circular-line {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  5% {\n" +
"    -webkit-transform: rotate(-45deg);\n" +
"            transform: rotate(-45deg); }\n" +
"  12% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(-405deg);\n" +
"            transform: rotate(-405deg); } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-x-mark {\n" +
"  0% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  50% {\n" +
"    margin-top: 1.625em;\n" +
"    -webkit-transform: scale(0.4);\n" +
"            transform: scale(0.4);\n" +
"    opacity: 0; }\n" +
"  80% {\n" +
"    margin-top: -.375em;\n" +
"    -webkit-transform: scale(1.15);\n" +
"            transform: scale(1.15); }\n" +
"  100% {\n" +
"    margin-top: 0;\n" +
"    -webkit-transform: scale(1);\n" +
"            transform: scale(1);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes swal2-animate-error-icon {\n" +
"  0% {\n" +
"    -webkit-transform: rotateX(100deg);\n" +
"            transform: rotateX(100deg);\n" +
"    opacity: 0; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateX(0deg);\n" +
"            transform: rotateX(0deg);\n" +
"    opacity: 1; } }\n" +
"\n" +
"body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n" +
"  flex-direction: column;\n" +
"  align-items: stretch; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    justify-content: flex-end;\n" +
"    height: 2.2em; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n" +
"    justify-content: center; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n" +
"    height: 2em;\n" +
"    margin: .3125em auto;\n" +
"    font-size: 1em; }\n" +
"  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n" +
"    font-size: 1em; }\n" +
"\n" +
"body.swal2-toast-shown > .swal2-container {\n" +
"  position: fixed;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-shown {\n" +
"    background-color: transparent; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n" +
"    top: 0;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center {\n" +
"    top: 50%;\n" +
"    right: auto;\n" +
"    bottom: auto;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    bottom: auto;\n" +
"    left: auto;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n" +
"    top: auto;\n" +
"    right: auto;\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n" +
"    top: auto;\n" +
"    right: 0;\n" +
"    bottom: 0;\n" +
"    left: auto; }\n" +
"\n" +
".swal2-popup.swal2-toast {\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  width: auto;\n" +
"  padding: 0.625em;\n" +
"  box-shadow: 0 0 0.625em #d9d9d9;\n" +
"  overflow-y: hidden; }\n" +
"  .swal2-popup.swal2-toast .swal2-header {\n" +
"    flex-direction: row; }\n" +
"  .swal2-popup.swal2-toast .swal2-title {\n" +
"    justify-content: flex-start;\n" +
"    margin: 0 .6em;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-close {\n" +
"    position: initial; }\n" +
"  .swal2-popup.swal2-toast .swal2-content {\n" +
"    justify-content: flex-start;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup.swal2-toast .swal2-icon {\n" +
"    width: 2em;\n" +
"    min-width: 2em;\n" +
"    height: 2em;\n" +
"    margin: 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon-text {\n" +
"      font-size: 2em;\n" +
"      font-weight: bold;\n" +
"      line-height: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      top: .875em;\n" +
"      width: 1.375em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-actions {\n" +
"    height: auto;\n" +
"    margin: 0 .3125em; }\n" +
"  .swal2-popup.swal2-toast .swal2-styled {\n" +
"    margin: 0 .3125em;\n" +
"    padding: .3125em .625em;\n" +
"    font-size: 1em; }\n" +
"    .swal2-popup.swal2-toast .swal2-styled:focus {\n" +
"      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n" +
"  .swal2-popup.swal2-toast .swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 2em;\n" +
"      height: 2.8125em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.25em;\n" +
"        left: -.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 2em 2em;\n" +
"                transform-origin: 2em 2em;\n" +
"        border-radius: 4em 0 0 4em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.25em;\n" +
"        left: .9375em;\n" +
"        -webkit-transform-origin: 0 2em;\n" +
"                transform-origin: 0 2em;\n" +
"        border-radius: 0 4em 4em 0; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n" +
"      width: 2em;\n" +
"      height: 2em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n" +
"      top: 0;\n" +
"      left: .4375em;\n" +
"      width: .4375em;\n" +
"      height: 2.6875em; }\n" +
"    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n" +
"      height: .3125em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 1.125em;\n" +
"        left: .1875em;\n" +
"        width: .75em; }\n" +
"      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: .9375em;\n" +
"        right: .1875em;\n" +
"        width: 1.375em; }\n" +
"  .swal2-popup.swal2-toast.swal2-show {\n" +
"    -webkit-animation: showSweetToast .5s;\n" +
"            animation: showSweetToast .5s; }\n" +
"  .swal2-popup.swal2-toast.swal2-hide {\n" +
"    -webkit-animation: hideSweetToast .2s forwards;\n" +
"            animation: hideSweetToast .2s forwards; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n" +
"    -webkit-animation: animate-toast-success-tip .75s;\n" +
"            animation: animate-toast-success-tip .75s; }\n" +
"  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n" +
"    -webkit-animation: animate-toast-success-long .75s;\n" +
"            animation: animate-toast-success-long .75s; }\n" +
"\n" +
"@-webkit-keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@keyframes showSweetToast {\n" +
"  0% {\n" +
"    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n" +
"            transform: translateY(-0.625em) rotateZ(2deg);\n" +
"    opacity: 0; }\n" +
"  33% {\n" +
"    -webkit-transform: translateY(0) rotateZ(-2deg);\n" +
"            transform: translateY(0) rotateZ(-2deg);\n" +
"    opacity: .5; }\n" +
"  66% {\n" +
"    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n" +
"            transform: translateY(0.3125em) rotateZ(2deg);\n" +
"    opacity: .7; }\n" +
"  100% {\n" +
"    -webkit-transform: translateY(0) rotateZ(0);\n" +
"            transform: translateY(0) rotateZ(0);\n" +
"    opacity: 1; } }\n" +
"\n" +
"@-webkit-keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@keyframes hideSweetToast {\n" +
"  0% {\n" +
"    opacity: 1; }\n" +
"  33% {\n" +
"    opacity: .5; }\n" +
"  100% {\n" +
"    -webkit-transform: rotateZ(1deg);\n" +
"            transform: rotateZ(1deg);\n" +
"    opacity: 0; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@keyframes animate-toast-success-tip {\n" +
"  0% {\n" +
"    top: .5625em;\n" +
"    left: .0625em;\n" +
"    width: 0; }\n" +
"  54% {\n" +
"    top: .125em;\n" +
"    left: .125em;\n" +
"    width: 0; }\n" +
"  70% {\n" +
"    top: .625em;\n" +
"    left: -.25em;\n" +
"    width: 1.625em; }\n" +
"  84% {\n" +
"    top: 1.0625em;\n" +
"    left: .75em;\n" +
"    width: .5em; }\n" +
"  100% {\n" +
"    top: 1.125em;\n" +
"    left: .1875em;\n" +
"    width: .75em; } }\n" +
"\n" +
"@-webkit-keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"@keyframes animate-toast-success-long {\n" +
"  0% {\n" +
"    top: 1.625em;\n" +
"    right: 1.375em;\n" +
"    width: 0; }\n" +
"  65% {\n" +
"    top: 1.25em;\n" +
"    right: .9375em;\n" +
"    width: 0; }\n" +
"  84% {\n" +
"    top: .9375em;\n" +
"    right: 0;\n" +
"    width: 1.125em; }\n" +
"  100% {\n" +
"    top: .9375em;\n" +
"    right: .1875em;\n" +
"    width: 1.375em; } }\n" +
"\n" +
"html.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),\n" +
"body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n" +
"  height: auto;\n" +
"  overflow-y: hidden; }\n" +
"\n" +
"body.swal2-no-backdrop .swal2-shown {\n" +
"  top: auto;\n" +
"  right: auto;\n" +
"  bottom: auto;\n" +
"  left: auto;\n" +
"  background-color: transparent; }\n" +
"  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n" +
"    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top {\n" +
"    top: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n" +
"    top: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n" +
"    top: 0;\n" +
"    right: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center {\n" +
"    top: 50%;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translate(-50%, -50%);\n" +
"            transform: translate(-50%, -50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n" +
"    top: 50%;\n" +
"    left: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n" +
"    top: 50%;\n" +
"    right: 0;\n" +
"    -webkit-transform: translateY(-50%);\n" +
"            transform: translateY(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n" +
"    bottom: 0;\n" +
"    left: 50%;\n" +
"    -webkit-transform: translateX(-50%);\n" +
"            transform: translateX(-50%); }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n" +
"    bottom: 0;\n" +
"    left: 0; }\n" +
"  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n" +
"    right: 0;\n" +
"    bottom: 0; }\n" +
"\n" +
".swal2-container {\n" +
"  display: flex;\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  flex-direction: row;\n" +
"  align-items: center;\n" +
"  justify-content: center;\n" +
"  padding: 10px;\n" +
"  background-color: transparent;\n" +
"  z-index: 1060;\n" +
"  overflow-x: hidden;\n" +
"  -webkit-overflow-scrolling: touch; }\n" +
"  .swal2-container.swal2-top {\n" +
"    align-items: flex-start; }\n" +
"  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n" +
"    align-items: flex-start;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-center {\n" +
"    align-items: center; }\n" +
"  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n" +
"    align-items: center;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n" +
"    align-items: center;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-bottom {\n" +
"    align-items: flex-end; }\n" +
"  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-start; }\n" +
"  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n" +
"    align-items: flex-end;\n" +
"    justify-content: flex-end; }\n" +
"  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-self: stretch;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-row > .swal2-modal {\n" +
"    display: flex !important;\n" +
"    flex: 1;\n" +
"    align-content: center;\n" +
"    justify-content: center; }\n" +
"  .swal2-container.swal2-grow-column {\n" +
"    flex: 1;\n" +
"    flex-direction: column; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n" +
"      align-items: center; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n" +
"      align-items: flex-start; }\n" +
"    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n" +
"      align-items: flex-end; }\n" +
"    .swal2-container.swal2-grow-column > .swal2-modal {\n" +
"      display: flex !important;\n" +
"      flex: 1;\n" +
"      align-content: center;\n" +
"      justify-content: center; }\n" +
"  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n" +
"    margin: auto; }\n" +
"  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"    .swal2-container .swal2-modal {\n" +
"      margin: 0 !important; } }\n" +
"  .swal2-container.swal2-fade {\n" +
"    transition: background-color .1s; }\n" +
"  .swal2-container.swal2-shown {\n" +
"    background-color: rgba(0, 0, 0, 0.4); }\n" +
"\n" +
".swal2-popup {\n" +
"  display: none;\n" +
"  position: relative;\n" +
"  flex-direction: column;\n" +
"  justify-content: center;\n" +
"  width: 32em;\n" +
"  max-width: 100%;\n" +
"  padding: 1.25em;\n" +
"  border-radius: 0.3125em;\n" +
"  background: #fff;\n" +
"  font-family: inherit;\n" +
"  font-size: 1rem;\n" +
"  box-sizing: border-box; }\n" +
"  .swal2-popup:focus {\n" +
"    outline: none; }\n" +
"  .swal2-popup.swal2-loading {\n" +
"    overflow-y: hidden; }\n" +
"  .swal2-popup .swal2-header {\n" +
"    display: flex;\n" +
"    flex-direction: column;\n" +
"    align-items: center; }\n" +
"  .swal2-popup .swal2-title {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    max-width: 100%;\n" +
"    margin: 0 0 0.4em;\n" +
"    padding: 0;\n" +
"    color: #595959;\n" +
"    font-size: 1.875em;\n" +
"    font-weight: 600;\n" +
"    text-align: center;\n" +
"    text-transform: none;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup .swal2-actions {\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    margin: 1.25em auto 0; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n" +
"      opacity: .4; }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n" +
"    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n" +
"      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n" +
"      width: 2.5em;\n" +
"      height: 2.5em;\n" +
"      margin: .46875em;\n" +
"      padding: 0;\n" +
"      border: .25em solid transparent;\n" +
"      border-radius: 100%;\n" +
"      border-color: transparent;\n" +
"      background-color: transparent !important;\n" +
"      color: transparent;\n" +
"      cursor: default;\n" +
"      box-sizing: border-box;\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"      -webkit-user-select: none;\n" +
"         -moz-user-select: none;\n" +
"          -ms-user-select: none;\n" +
"              user-select: none; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n" +
"      margin-right: 30px;\n" +
"      margin-left: 30px; }\n" +
"    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n" +
"      display: inline-block;\n" +
"      width: 15px;\n" +
"      height: 15px;\n" +
"      margin-left: 5px;\n" +
"      border: 3px solid #999999;\n" +
"      border-radius: 50%;\n" +
"      border-right-color: transparent;\n" +
"      box-shadow: 1px 1px 1px #fff;\n" +
"      content: '';\n" +
"      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n" +
"              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n" +
"  .swal2-popup .swal2-styled {\n" +
"    margin: 0 .3125em;\n" +
"    padding: .625em 2em;\n" +
"    font-weight: 500;\n" +
"    box-shadow: none; }\n" +
"    .swal2-popup .swal2-styled:not([disabled]) {\n" +
"      cursor: pointer; }\n" +
"    .swal2-popup .swal2-styled.swal2-confirm {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #3085d6;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled.swal2-cancel {\n" +
"      border: 0;\n" +
"      border-radius: 0.25em;\n" +
"      background: initial;\n" +
"      background-color: #aaa;\n" +
"      color: #fff;\n" +
"      font-size: 1.0625em; }\n" +
"    .swal2-popup .swal2-styled:focus {\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n" +
"    .swal2-popup .swal2-styled::-moz-focus-inner {\n" +
"      border: 0; }\n" +
"  .swal2-popup .swal2-footer {\n" +
"    justify-content: center;\n" +
"    margin: 1.25em 0 0;\n" +
"    padding-top: 1em;\n" +
"    border-top: 1px solid #eee;\n" +
"    color: #545454;\n" +
"    font-size: 1em; }\n" +
"  .swal2-popup .swal2-image {\n" +
"    max-width: 100%;\n" +
"    margin: 1.25em auto; }\n" +
"  .swal2-popup .swal2-close {\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    right: 0;\n" +
"    justify-content: center;\n" +
"    width: 1.2em;\n" +
"    min-width: 1.2em;\n" +
"    height: 1.2em;\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    transition: color 0.1s ease-out;\n" +
"    border: none;\n" +
"    border-radius: 0;\n" +
"    background: transparent;\n" +
"    color: #cccccc;\n" +
"    font-family: serif;\n" +
"    font-size: calc(2.5em - 0.25em);\n" +
"    line-height: 1.2em;\n" +
"    cursor: pointer; }\n" +
"    .swal2-popup .swal2-close:hover {\n" +
"      -webkit-transform: none;\n" +
"              transform: none;\n" +
"      color: #f27474; }\n" +
"  .swal2-popup > .swal2-input,\n" +
"  .swal2-popup > .swal2-file,\n" +
"  .swal2-popup > .swal2-textarea,\n" +
"  .swal2-popup > .swal2-select,\n" +
"  .swal2-popup > .swal2-radio,\n" +
"  .swal2-popup > .swal2-checkbox {\n" +
"    display: none; }\n" +
"  .swal2-popup .swal2-content {\n" +
"    justify-content: center;\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em;\n" +
"    font-weight: 300;\n" +
"    line-height: normal;\n" +
"    word-wrap: break-word; }\n" +
"  .swal2-popup #swal2-content {\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea,\n" +
"  .swal2-popup .swal2-select,\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    margin: 1em auto; }\n" +
"  .swal2-popup .swal2-input,\n" +
"  .swal2-popup .swal2-file,\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    width: 100%;\n" +
"    transition: border-color .3s, box-shadow .3s;\n" +
"    border: 1px solid #d9d9d9;\n" +
"    border-radius: 0.1875em;\n" +
"    font-size: 1.125em;\n" +
"    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n" +
"    box-sizing: border-box; }\n" +
"    .swal2-popup .swal2-input.swal2-inputerror,\n" +
"    .swal2-popup .swal2-file.swal2-inputerror,\n" +
"    .swal2-popup .swal2-textarea.swal2-inputerror {\n" +
"      border-color: #f27474 !important;\n" +
"      box-shadow: 0 0 2px #f27474 !important; }\n" +
"    .swal2-popup .swal2-input:focus,\n" +
"    .swal2-popup .swal2-file:focus,\n" +
"    .swal2-popup .swal2-textarea:focus {\n" +
"      border: 1px solid #b4dbed;\n" +
"      outline: none;\n" +
"      box-shadow: 0 0 3px #c4e6f5; }\n" +
"    .swal2-popup .swal2-input::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-webkit-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file:-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-file::-ms-input-placeholder,\n" +
"    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n" +
"      color: #cccccc; }\n" +
"    .swal2-popup .swal2-input::placeholder,\n" +
"    .swal2-popup .swal2-file::placeholder,\n" +
"    .swal2-popup .swal2-textarea::placeholder {\n" +
"      color: #cccccc; }\n" +
"  .swal2-popup .swal2-range input {\n" +
"    width: 80%; }\n" +
"  .swal2-popup .swal2-range output {\n" +
"    width: 20%;\n" +
"    font-weight: 600;\n" +
"    text-align: center; }\n" +
"  .swal2-popup .swal2-range input,\n" +
"  .swal2-popup .swal2-range output {\n" +
"    height: 2.625em;\n" +
"    margin: 1em auto;\n" +
"    padding: 0;\n" +
"    font-size: 1.125em;\n" +
"    line-height: 2.625em; }\n" +
"  .swal2-popup .swal2-input {\n" +
"    height: 2.625em;\n" +
"    padding: 0.75em; }\n" +
"    .swal2-popup .swal2-input[type='number'] {\n" +
"      max-width: 10em; }\n" +
"  .swal2-popup .swal2-file {\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-textarea {\n" +
"    height: 6.75em;\n" +
"    padding: 0.75em; }\n" +
"  .swal2-popup .swal2-select {\n" +
"    min-width: 50%;\n" +
"    max-width: 100%;\n" +
"    padding: .375em .625em;\n" +
"    color: #545454;\n" +
"    font-size: 1.125em; }\n" +
"  .swal2-popup .swal2-radio,\n" +
"  .swal2-popup .swal2-checkbox {\n" +
"    align-items: center;\n" +
"    justify-content: center; }\n" +
"    .swal2-popup .swal2-radio label,\n" +
"    .swal2-popup .swal2-checkbox label {\n" +
"      margin: 0 .6em;\n" +
"      font-size: 1.125em; }\n" +
"    .swal2-popup .swal2-radio input,\n" +
"    .swal2-popup .swal2-checkbox input {\n" +
"      margin: 0 .4em; }\n" +
"  .swal2-popup .swal2-validationerror {\n" +
"    display: none;\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"    padding: 0.625em;\n" +
"    background: #f0f0f0;\n" +
"    color: #666666;\n" +
"    font-size: 1em;\n" +
"    font-weight: 300;\n" +
"    overflow: hidden; }\n" +
"    .swal2-popup .swal2-validationerror::before {\n" +
"      display: inline-block;\n" +
"      width: 1.5em;\n" +
"      height: 1.5em;\n" +
"      margin: 0 .625em;\n" +
"      border-radius: 50%;\n" +
"      background-color: #f27474;\n" +
"      color: #fff;\n" +
"      font-weight: 600;\n" +
"      line-height: 1.5em;\n" +
"      text-align: center;\n" +
"      content: '!';\n" +
"      zoom: normal; }\n" +
"\n" +
"@supports (-ms-accelerator: true) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
"@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n" +
"  .swal2-range input {\n" +
"    width: 100% !important; }\n" +
"  .swal2-range output {\n" +
"    display: none; } }\n" +
"\n" +
".swal2-icon {\n" +
"  position: relative;\n" +
"  justify-content: center;\n" +
"  width: 5em;\n" +
"  height: 5em;\n" +
"  margin: 1.25em auto 1.875em;\n" +
"  border: .25em solid transparent;\n" +
"  border-radius: 50%;\n" +
"  line-height: 5em;\n" +
"  cursor: default;\n" +
"  box-sizing: content-box;\n" +
"  -webkit-user-select: none;\n" +
"     -moz-user-select: none;\n" +
"      -ms-user-select: none;\n" +
"          user-select: none;\n" +
"  zoom: normal; }\n" +
"  .swal2-icon-text {\n" +
"    font-size: 3.75em; }\n" +
"  .swal2-icon.swal2-error {\n" +
"    border-color: #f27474; }\n" +
"    .swal2-icon.swal2-error .swal2-x-mark {\n" +
"      position: relative;\n" +
"      flex-grow: 1; }\n" +
"    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      top: 2.3125em;\n" +
"      width: 2.9375em;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #f27474; }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n" +
"        left: 1.0625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n" +
"        right: 1em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"  .swal2-icon.swal2-warning {\n" +
"    border-color: #facea8;\n" +
"    color: #f8bb86; }\n" +
"  .swal2-icon.swal2-info {\n" +
"    border-color: #9de0f6;\n" +
"    color: #3fc3ee; }\n" +
"  .swal2-icon.swal2-question {\n" +
"    border-color: #c9dae1;\n" +
"    color: #87adbd; }\n" +
"  .swal2-icon.swal2-success {\n" +
"    border-color: #a5dc86; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n" +
"      position: absolute;\n" +
"      width: 3.75em;\n" +
"      height: 7.5em;\n" +
"      -webkit-transform: rotate(45deg);\n" +
"              transform: rotate(45deg);\n" +
"      border-radius: 50%; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n" +
"        top: -.4375em;\n" +
"        left: -2.0635em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 3.75em 3.75em;\n" +
"                transform-origin: 3.75em 3.75em;\n" +
"        border-radius: 7.5em 0 0 7.5em; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n" +
"        top: -.6875em;\n" +
"        left: 1.875em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg);\n" +
"        -webkit-transform-origin: 0 3.75em;\n" +
"                transform-origin: 0 3.75em;\n" +
"        border-radius: 0 7.5em 7.5em 0; }\n" +
"    .swal2-icon.swal2-success .swal2-success-ring {\n" +
"      position: absolute;\n" +
"      top: -.25em;\n" +
"      left: -.25em;\n" +
"      width: 100%;\n" +
"      height: 100%;\n" +
"      border: 0.25em solid rgba(165, 220, 134, 0.3);\n" +
"      border-radius: 50%;\n" +
"      z-index: 2;\n" +
"      box-sizing: content-box; }\n" +
"    .swal2-icon.swal2-success .swal2-success-fix {\n" +
"      position: absolute;\n" +
"      top: .5em;\n" +
"      left: 1.625em;\n" +
"      width: .4375em;\n" +
"      height: 5.625em;\n" +
"      -webkit-transform: rotate(-45deg);\n" +
"              transform: rotate(-45deg);\n" +
"      z-index: 1; }\n" +
"    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n" +
"      display: block;\n" +
"      position: absolute;\n" +
"      height: .3125em;\n" +
"      border-radius: .125em;\n" +
"      background-color: #a5dc86;\n" +
"      z-index: 2; }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n" +
"        top: 2.875em;\n" +
"        left: .875em;\n" +
"        width: 1.5625em;\n" +
"        -webkit-transform: rotate(45deg);\n" +
"                transform: rotate(45deg); }\n" +
"      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n" +
"        top: 2.375em;\n" +
"        right: .5em;\n" +
"        width: 2.9375em;\n" +
"        -webkit-transform: rotate(-45deg);\n" +
"                transform: rotate(-45deg); }\n" +
"\n" +
".swal2-progresssteps {\n" +
"  align-items: center;\n" +
"  margin: 0 0 1.25em;\n" +
"  padding: 0;\n" +
"  font-weight: 600; }\n" +
"  .swal2-progresssteps li {\n" +
"    display: inline-block;\n" +
"    position: relative; }\n" +
"  .swal2-progresssteps .swal2-progresscircle {\n" +
"    width: 2em;\n" +
"    height: 2em;\n" +
"    border-radius: 2em;\n" +
"    background: #3085d6;\n" +
"    color: #fff;\n" +
"    line-height: 2em;\n" +
"    text-align: center;\n" +
"    z-index: 20; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:first-child {\n" +
"      margin-left: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle:last-child {\n" +
"      margin-right: 0; }\n" +
"    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n" +
"      background: #3085d6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n" +
"        background: #add8e6; }\n" +
"      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n" +
"        background: #add8e6; }\n" +
"  .swal2-progresssteps .swal2-progressline {\n" +
"    width: 2.5em;\n" +
"    height: .4em;\n" +
"    margin: 0 -1px;\n" +
"    background: #3085d6;\n" +
"    z-index: 10; }\n" +
"\n" +
"[class^='swal2'] {\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"\n" +
".swal2-show {\n" +
"  -webkit-animation: swal2-show 0.3s;\n" +
"          animation: swal2-show 0.3s; }\n" +
"  .swal2-show.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
".swal2-hide {\n" +
"  -webkit-animation: swal2-hide 0.15s forwards;\n" +
"          animation: swal2-hide 0.15s forwards; }\n" +
"  .swal2-hide.swal2-noanimation {\n" +
"    -webkit-animation: none;\n" +
"            animation: none; }\n" +
"\n" +
"[dir='rtl'] .swal2-close {\n" +
"  right: auto;\n" +
"  left: 0; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-tip {\n" +
"  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n" +
"          animation: swal2-animate-success-line-tip 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-line-long {\n" +
"  -webkit-animation: swal2-animate-success-line-long 0.75s;\n" +
"          animation: swal2-animate-success-line-long 0.75s; }\n" +
"\n" +
".swal2-animate-success-icon .swal2-success-circular-line-right {\n" +
"  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n" +
"          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n" +
"\n" +
".swal2-animate-error-icon {\n" +
"  -webkit-animation: swal2-animate-error-icon 0.5s;\n" +
"          animation: swal2-animate-error-icon 0.5s; }\n" +
"  .swal2-animate-error-icon .swal2-x-mark {\n" +
"    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n" +
"            animation: swal2-animate-error-x-mark 0.5s; }\n" +
"\n" +
"@-webkit-keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }\n" +
"\n" +
"@keyframes swal2-rotate-loading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate(0deg);\n" +
"            transform: rotate(0deg); }\n" +
"  100% {\n" +
"    -webkit-transform: rotate(360deg);\n" +
"            transform: rotate(360deg); } }");

/*!
http://github.com/VinceG/twitter-bootstrap-wizard
 */
;(function($) {
var bootstrapWizardCreate = function(element, options) {
	var element = $(element);
	var obj = this;

	// selector skips any 'li' elements that do not contain a child with a tab data-toggle
	var baseItemSelector = 'li:has([data-toggle="tab"])';
	var historyStack = [];

	// Merge options with defaults
	var $settings = $.extend({}, $.fn.bootstrapWizard.defaults, options);
	var $activeTab = null;
	var $navigation = null;

	this.rebindClick = function(selector, fn)
	{
		selector.unbind('click', fn).bind('click', fn);
	}

	this.fixNavigationButtons = function() {
		// Get the current active tab
		if(!$activeTab.length) {
			// Select first one
			$navigation.find('a:first').tab('show');
			$activeTab = $navigation.find(baseItemSelector + ':first');
		}

		// See if we're currently in the first/last then disable the previous and last buttons
		$($settings.previousSelector, element).toggleClass('disabled', (obj.firstIndex() >= obj.currentIndex()));
		$($settings.nextSelector, element).toggleClass('disabled', (obj.currentIndex() >= obj.navigationLength()));
		$($settings.nextSelector, element).toggleClass('hidden', (obj.currentIndex() >= obj.navigationLength() && $($settings.finishSelector, element).length > 0));
		$($settings.lastSelector, element).toggleClass('hidden', (obj.currentIndex() >= obj.navigationLength() && $($settings.finishSelector, element).length > 0));
		$($settings.finishSelector, element).toggleClass('hidden', (obj.currentIndex() < obj.navigationLength()));
		$($settings.backSelector, element).toggleClass('disabled', (historyStack.length == 0));
		$($settings.backSelector, element).toggleClass('hidden', (obj.currentIndex() >= obj.navigationLength() && $($settings.finishSelector, element).length > 0));

		// We are unbinding and rebinding to ensure single firing and no double-click errors
		obj.rebindClick($($settings.nextSelector, element), obj.next);
		obj.rebindClick($($settings.previousSelector, element), obj.previous);
		obj.rebindClick($($settings.lastSelector, element), obj.last);
		obj.rebindClick($($settings.firstSelector, element), obj.first);
		obj.rebindClick($($settings.finishSelector, element), obj.finish);
		obj.rebindClick($($settings.backSelector, element), obj.back);

		if($settings.onTabShow && typeof $settings.onTabShow === 'function' && $settings.onTabShow($activeTab, $navigation, obj.currentIndex())===false){
			return false;
		}
	};

	this.next = function(e) {
		// If we clicked the last then dont activate this
		if(element.hasClass('last')) {
			return false;
		}

		if($settings.onNext && typeof $settings.onNext === 'function' && $settings.onNext($activeTab, $navigation, obj.nextIndex())===false){
			return false;
		}

		var formerIndex = obj.currentIndex();
		var $index = obj.nextIndex();

	  // Did we click the last button
		if($index > obj.navigationLength()) {
		} else {
		  historyStack.push(formerIndex);
		  $navigation.find(baseItemSelector + ($settings.withVisible ? ':visible' : '') + ':eq(' + $index + ') a').tab('show');
		}
	};

	this.previous = function(e) {
		// If we clicked the first then dont activate this
		if(element.hasClass('first')) {
			return false;
		}

		if($settings.onPrevious && typeof $settings.onPrevious === 'function' && $settings.onPrevious($activeTab, $navigation, obj.previousIndex())===false){
			return false;
		}

		var formerIndex = obj.currentIndex();
		var $index = obj.previousIndex();

		if($index < 0) {
		} else {
		  historyStack.push(formerIndex);
		  $navigation.find(baseItemSelector + ($settings.withVisible ? ':visible' : '') + ':eq(' + $index + ') a').tab('show');
		}
	};

	this.first = function (e) {
		if($settings.onFirst && typeof $settings.onFirst === 'function' && $settings.onFirst($activeTab, $navigation, obj.firstIndex())===false){
			return false;
		}

		// If the element is disabled then we won't do anything
		if(element.hasClass('disabled')) {
			return false;
		}

        
		historyStack.push(obj.currentIndex());
		$navigation.find(baseItemSelector + ':eq(0) a').tab('show');
	};

	this.last = function(e) {
		if($settings.onLast && typeof $settings.onLast === 'function' && $settings.onLast($activeTab, $navigation, obj.lastIndex())===false){
			return false;
		}

		// If the element is disabled then we won't do anything
		if(element.hasClass('disabled')) {
			return false;
		}

		historyStack.push(obj.currentIndex());
		$navigation.find(baseItemSelector + ':eq(' + obj.navigationLength() + ') a').tab('show');
	};

	this.finish = function (e) {
	  if ($settings.onFinish && typeof $settings.onFinish === 'function') {
	    $settings.onFinish($activeTab, $navigation, obj.lastIndex());
	  }
	};

	this.back = function () {
	  if (historyStack.length == 0) {
	    return null;
	  }

	  var formerIndex = historyStack.pop();
	  if ($settings.onBack && typeof $settings.onBack === 'function' && $settings.onBack($activeTab, $navigation, formerIndex) === false) {
	    historyStack.push(formerIndex);
	    return false;
	  }

	  element.find(baseItemSelector + ':eq(' + formerIndex + ') a').tab('show');
	};

	this.currentIndex = function() {
		return $navigation.find(baseItemSelector + ($settings.withVisible ? ':visible' : '')).index($activeTab);
	};

	this.firstIndex = function() {
		return 0;
	};

	this.lastIndex = function() {
		return obj.navigationLength();
	};
	
	this.getIndex = function(e) {
		return $navigation.find(baseItemSelector + ($settings.withVisible ? ':visible' : '')).index(e);
	};
	
	this.nextIndex = function() {
		var nextIndexCandidate=this.currentIndex();
		var nextTabCandidate=null;
		do {
			nextIndexCandidate++;
			nextTabCandidate = $navigation.find(baseItemSelector + ($settings.withVisible ? ':visible' : '') + ":eq(" + nextIndexCandidate + ")");
		} while ((nextTabCandidate)&&(nextTabCandidate.hasClass("disabled")));
		return nextIndexCandidate;
	};
	this.previousIndex = function() {
		var prevIndexCandidate=this.currentIndex();
		var prevTabCandidate=null;
		do {
			prevIndexCandidate--;
			prevTabCandidate = $navigation.find(baseItemSelector + ($settings.withVisible ? ':visible' : '') + ":eq(" + prevIndexCandidate + ")");
		} while ((prevTabCandidate)&&(prevTabCandidate.hasClass("disabled")));
		return prevIndexCandidate;
	};	
	this.navigationLength = function() {
		return $navigation.find(baseItemSelector + ($settings.withVisible ? ':visible' : '')).length - 1;
	};
	this.activeTab = function() {
		return $activeTab;
	};
	this.nextTab = function() {
		return $navigation.find(baseItemSelector + ':eq('+(obj.currentIndex()+1)+')').length ? $navigation.find(baseItemSelector + ':eq('+(obj.currentIndex()+1)+')') : null;
	};
	this.previousTab = function() {
		if(obj.currentIndex() <= 0) {
			return null;
		}
		return $navigation.find(baseItemSelector + ':eq('+parseInt(obj.currentIndex()-1)+')');
	};
	this.show = function(index) {
	  var tabToShow = isNaN(index) ?
      element.find(baseItemSelector + ' a[href="#' + index + '"]') :
      element.find(baseItemSelector + ':eq(' + index + ') a');
	  if (tabToShow.length > 0) {
	    historyStack.push(obj.currentIndex());
	    tabToShow.tab('show');
	  }
	};
	this.disable = function (index) {
		$navigation.find(baseItemSelector + ':eq('+index+')').addClass('disabled');
	};
	this.enable = function(index) {
		$navigation.find(baseItemSelector + ':eq('+index+')').removeClass('disabled');
	};
	this.hide = function(index) {
		$navigation.find(baseItemSelector + ':eq('+index+')').hide();
	};
	this.display = function(index) {
		$navigation.find(baseItemSelector + ':eq('+index+')').show();
	};
	this.remove = function(args) {
		var $index = args[0];
		var $removeTabPane = typeof args[1] != 'undefined' ? args[1] : false;
		var $item = $navigation.find(baseItemSelector + ':eq('+$index+')');

		// Remove the tab pane first if needed
		if($removeTabPane) {
			var $href = $item.find('a').attr('href');
			$($href).remove();
		}

		// Remove menu item
		$item.remove();
	};

	var innerTabClick = function (e) {
		// Get the index of the clicked tab
		var $ul = $navigation.find(baseItemSelector);
		var clickedIndex = $ul.index($(e.currentTarget).parent(baseItemSelector));
		var $clickedTab = $( $ul[clickedIndex] );
		if($settings.onTabClick && typeof $settings.onTabClick === 'function' && $settings.onTabClick($activeTab, $navigation, obj.currentIndex(), clickedIndex, $clickedTab)===false){
		    return false;
		}
	};

	var innerTabShown = function (e) {  
		var $element = $(e.target).parent();
		var nextTab = $navigation.find(baseItemSelector).index($element);

		// If it's disabled then do not change
		if($element.hasClass('disabled')) {
			return false;
		}

		if($settings.onTabChange && typeof $settings.onTabChange === 'function' && $settings.onTabChange($activeTab, $navigation, obj.currentIndex(), nextTab)===false){
				return false;
		}

		$activeTab = $element; // activated tab
		obj.fixNavigationButtons();
	};

	this.resetWizard = function() {

		// remove the existing handlers
		$('a[data-toggle="tab"]', $navigation).off('click', innerTabClick);
		$('a[data-toggle="tab"]', $navigation).off('show show.bs.tab', innerTabShown);

		// reset elements based on current state of the DOM
		$navigation = element.find('ul:first', element);
		$activeTab = $navigation.find(baseItemSelector + '.active', element);

		// re-add handlers
		$('a[data-toggle="tab"]', $navigation).on('click', innerTabClick);
		$('a[data-toggle="tab"]', $navigation).on('show show.bs.tab', innerTabShown);

		obj.fixNavigationButtons();
	};

	$navigation = element.find('ul:first', element);
	$activeTab = $navigation.find(baseItemSelector + '.active', element);

	if(!$navigation.hasClass($settings.tabClass)) {
		$navigation.addClass($settings.tabClass);
	}

	// Load onInit
	if($settings.onInit && typeof $settings.onInit === 'function'){
		$settings.onInit($activeTab, $navigation, 0);
	}

	// Load onShow
	if($settings.onShow && typeof $settings.onShow === 'function'){
		$settings.onShow($activeTab, $navigation, obj.nextIndex());
	}

	$('a[data-toggle="tab"]', $navigation).on('click', innerTabClick);

	// attach to both show and show.bs.tab to support Bootstrap versions 2.3.2 and 3.0.0
	$('a[data-toggle="tab"]', $navigation).on('show show.bs.tab', innerTabShown);
};
$.fn.bootstrapWizard = function(options) {
	//expose methods
	if (typeof options == 'string') {
		var args = Array.prototype.slice.call(arguments, 1)
		if(args.length === 1) {
			args.toString();
		}
		return this.data('bootstrapWizard')[options](args);
	}
	return this.each(function(index){
		var element = $(this);
		// Return early if this element already has a plugin instance
		if (element.data('bootstrapWizard')) return;
		// pass options to plugin constructor
		var wizard = new bootstrapWizardCreate(element, options);
		// Store plugin object in this element's data
		element.data('bootstrapWizard', wizard);
		// and then trigger initial change
		wizard.fixNavigationButtons();
	});
};

// expose options
$.fn.bootstrapWizard.defaults = {
	withVisible:      true,
	tabClass:         'nav nav-pills',
	nextSelector:     '.wizard li.next',
	previousSelector: '.wizard li.previous',
	firstSelector:    '.wizard li.first',
	lastSelector:     '.wizard li.last',
  finishSelector:   '.wizard li.finish',
	backSelector:     '.wizard li.back',
	onShow:           null,
	onInit:           null,
	onNext:           null,
	onPrevious:       null,
	onLast:           null,
	onFirst:          null,
  onFinish:         null,
  onBack:           null,
	onTabChange:      null,
	onTabClick:       null,
	onTabShow:        null
};

})(jQuery);


(function(){var aa=this;function k(a){return"string"==typeof a}function m(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function n(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var p=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(k(a))return k(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function q(a,b){a.sort(b||ba)}function ba(a,b){return a>b?1:a<b?-1:0};function ca(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function da(a,b){this.a=a;this.h=!!b.i;this.c=b.b;this.m=b.type;this.l=!1;switch(this.c){case ea:case fa:case ha:case ia:case ja:case ka:case la:this.l=!0}this.g=b.defaultValue}var la=1,ka=2,ea=3,fa=4,ha=6,ia=16,ja=18;function ma(a,b){this.c=a;this.a={};for(a=0;a<b.length;a++){var c=b[a];this.a[c.a]=c}}function na(a){a=ca(a.a);q(a,function(a,c){return a.a-c.a});return a};function r(){this.a={};this.g=this.f().a;this.c=this.h=null}r.prototype.has=function(a){return null!=this.a[a.a]};r.prototype.get=function(a,b){return t(this,a.a,b)};r.prototype.set=function(a,b){u(this,a.a,b)};r.prototype.add=function(a,b){v(this,a.a,b)};
function oa(a,b){for(var c=na(a.f()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(null!=b.a[f]){a.c&&delete a.c[e.a];var g=11==e.c||10==e.c;if(e.h){e=w(b,f);for(var h=0;h<e.length;h++)v(a,f,g?e[h].clone():e[h])}else e=x(b,f),g?(g=x(a,f))?oa(g,e):u(a,f,e.clone()):u(a,f,e)}}}r.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.a={},a.c&&(a.c={}),oa(a,this));return a};
function x(a,b){var c=a.a[b];if(null==c)return null;if(a.h){if(!(b in a.c)){var d=a.h,e=a.g[b];if(null!=c)if(e.h){for(var f=[],g=0;g<c.length;g++)f[g]=d.c(e,c[g]);c=f}else c=d.c(e,c);return a.c[b]=c}return a.c[b]}return c}function t(a,b,c){var d=x(a,b);return a.g[b].h?d[c||0]:d}function y(a,b){if(null!=a.a[b])a=t(a,b,void 0);else a:{a=a.g[b];if(void 0===a.g)if(b=a.m,b===Boolean)a.g=!1;else if(b===Number)a.g=0;else if(b===String)a.g=a.l?"0":"";else{a=new b;break a}a=a.g}return a}
function w(a,b){return x(a,b)||[]}function A(a,b){return a.g[b].h?null!=a.a[b]?a.a[b].length:0:null!=a.a[b]?1:0}function u(a,b,c){a.a[b]=c;a.c&&(a.c[b]=c)}function v(a,b,c){a.a[b]||(a.a[b]=[]);a.a[b].push(c);a.c&&delete a.c[b]}function B(a,b){var c=[],d;for(d in b)0!=d&&c.push(new da(d,b[d]));return new ma(a,c)};function C(){}C.prototype.a=function(a){new a.c;throw Error("Unimplemented");};C.prototype.c=function(a,b){if(11==a.c||10==a.c)return b instanceof r?b:this.a(a.m.prototype.f(),b);if(14==a.c)return k(b)&&pa.test(b)&&(a=Number(b),0<a)?a:b;if(!a.l)return b;a=a.m;if(a===String){if("number"==typeof b)return String(b)}else if(a===Number&&k(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||pa.test(b)))return Number(b);return b};var pa=/^-?[0-9]+$/;function D(){}n(D,C);D.prototype.a=function(a,b){a=new a.c;a.h=this;a.a=b;a.c={};return a};function E(){}n(E,D);E.prototype.c=function(a,b){return 8==a.c?!!b:C.prototype.c.apply(this,arguments)};E.prototype.a=function(a,b){return E.o.a.call(this,a,b)};function F(a,b){null!=a&&this.a.apply(this,arguments)}F.prototype.c="";F.prototype.set=function(a){this.c=""+a};F.prototype.a=function(a,b,c){this.c+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.c+=arguments[d];return this};F.prototype.toString=function(){return this.c};

function G(){r.call(this)}n(G,r);var qa=null;function H(){r.call(this)}n(H,r);var ra=null;function I(){r.call(this)}n(I,r);var sa=null;
G.prototype.f=function(){var a=qa;a||(qa=a=B(G,{0:{name:"NumberFormat",j:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,b:9,type:String},2:{name:"format",required:!0,b:9,type:String},3:{name:"leading_digits_pattern",i:!0,b:9,type:String},4:{name:"national_prefix_formatting_rule",b:9,type:String},6:{name:"national_prefix_optional_when_formatting",b:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",b:9,type:String}}));return a};G.f=G.prototype.f;
H.prototype.f=function(){var a=ra;a||(ra=a=B(H,{0:{name:"PhoneNumberDesc",j:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",b:9,type:String},9:{name:"possible_length",i:!0,b:5,type:Number},10:{name:"possible_length_local_only",i:!0,b:5,type:Number},6:{name:"example_number",b:9,type:String}}));return a};H.f=H.prototype.f;
I.prototype.f=function(){var a=sa;a||(sa=a=B(I,{0:{name:"PhoneMetadata",j:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",b:11,type:H},2:{name:"fixed_line",b:11,type:H},3:{name:"mobile",b:11,type:H},4:{name:"toll_free",b:11,type:H},5:{name:"premium_rate",b:11,type:H},6:{name:"shared_cost",b:11,type:H},7:{name:"personal_number",b:11,type:H},8:{name:"voip",b:11,type:H},21:{name:"pager",b:11,type:H},25:{name:"uan",b:11,type:H},27:{name:"emergency",b:11,type:H},28:{name:"voicemail",b:11,type:H},
29:{name:"short_code",b:11,type:H},30:{name:"standard_rate",b:11,type:H},31:{name:"carrier_specific",b:11,type:H},33:{name:"sms_services",b:11,type:H},24:{name:"no_international_dialling",b:11,type:H},9:{name:"id",required:!0,b:9,type:String},10:{name:"country_code",b:5,type:Number},11:{name:"international_prefix",b:9,type:String},17:{name:"preferred_international_prefix",b:9,type:String},12:{name:"national_prefix",b:9,type:String},13:{name:"preferred_extn_prefix",b:9,type:String},15:{name:"national_prefix_for_parsing",
b:9,type:String},16:{name:"national_prefix_transform_rule",b:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",b:8,defaultValue:!1,type:Boolean},19:{name:"number_format",i:!0,b:11,type:G},20:{name:"intl_number_format",i:!0,b:11,type:G},22:{name:"main_country_for_code",b:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",b:9,type:String},26:{name:"leading_zero_possible",b:8,defaultValue:!1,type:Boolean}}));return a};I.f=I.prototype.f;function J(){r.call(this)}n(J,r);var ta=null,ua={$:0,w:1,v:5,u:10,s:20};
J.prototype.f=function(){var a=ta;a||(ta=a=B(J,{0:{name:"PhoneNumber",j:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,b:5,type:Number},2:{name:"national_number",required:!0,b:4,type:Number},3:{name:"extension",b:9,type:String},4:{name:"italian_leading_zero",b:8,type:Boolean},8:{name:"number_of_leading_zeros",b:5,defaultValue:1,type:Number},5:{name:"raw_input",b:9,type:String},6:{name:"country_code_source",b:14,defaultValue:0,type:ua},7:{name:"preferred_domestic_carrier_code",
b:9,type:String}}));return a};J.ctor=J;J.ctor.f=J.prototype.f;


var K={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],
86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],
253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],
386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],
691:["FM"],692:["MH"],800:["001"],808:["001"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],870:["001"],878:["001"],880:["BD"],881:["001"],882:["001"],883:["001"],886:["TW"],888:["001"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],979:["001"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},wa={AC:[,[,,"(?:[01589]\\d|[46])\\d{4}",
,,,,,,[5,6]],[,,"6[2-467]\\d{3}",,,,"62889",,,[5]],[,,"4\\d{4}",,,,"40123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AC",247,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[01589]\\d{5}",,,,"542011",,,[6]],,,[,,,,,,,,,[-1]]],AD:[,[,,"(?:1|6\\d)\\d{7}|[136-9]\\d{5}",,,,,,,[6,8,9]],[,,"[78]\\d{5}",,,,"712345",,,[6]],[,,"(?:3\\d|6(?:[0-8]|9(?:0\\d{2})?))\\d{4}",,,,"312345",,,[6,9]],[,,"180[02]\\d{4}",,,,"18001234",,,[8]],[,,"[19]\\d{5}",,,,"912345",
,,[6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AD",376,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[136-9]"]],[,"(\\d{4})(\\d{4})","$1 $2",["180","180[02]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["690"]]],,[,,,,,,,,,[-1]],,,[,,"1800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AE:[,[,,"(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"[2-4679][2-8]\\d{6}",,,,"22345678",,,[8],[7]],[,,"5[024-68]\\d{7}",,,,"501234567",,,[9]],[,,"400\\d{6}|800\\d{2,9}",
,,,"800123456"],[,,"900[02]\\d{5}",,,,"900234567",,,[9]],[,,"700[05]\\d{5}",,,,"700012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AE",971,"00","0",,,"0",,,,[[,"([2-4679])(\\d{3})(\\d{4})","$1 $2 $3",["[2-4679][2-8]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"([479]00)(\\d)(\\d{5})","$1 $2 $3",["[479]00"],"$1"],[,"([68]00)(\\d{2,9})","$1 $2",["[68]00"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"600[25]\\d{5}",,,,"600212345",,,[9]],,,[,,,,,,,,,[-1]]],AF:[,[,,"[2-7]\\d{8}",,,,
,,,[9],[7]],[,,"(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",,,,"234567890",,,,[7]],[,,"7(?:[014-9]\\d|2[89]|3[01])\\d{6}",,,,"701234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AF",93,"00","0",,,"0",,,,[[,"([2-7]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AG:[,[,,"(?:268|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",,,,"2684601234",,,,[7]],[,,"268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}",
,,,"2684641234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"26848[01]\\d{4}",,,,"2684801234",,,,[7]],"AG",1,"011","1",,,"1",,,,,,[,,"26840[69]\\d{4}",,,,"2684061234",,,,[7]],,"268",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AI:[,[,,"(?:264|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"2644(?:6[12]|9[78])\\d{4}",,,,"2644612345",,,,[7]],[,,"264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",
,,,"2642351234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AI",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"264",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AL:[,[,,"(?:(?:[2-58]|6\\d)\\d\\d|700)\\d{5}|(?:8\\d{2,3}|900)\\d{3}",,,,,,,[6,7,8,9],[5]],[,,"(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]\\d|6\\d{2}))\\d{4}",,,,"22345678",
,,[8],[5,6,7]],[,,"6(?:[689][2-9]|7[2-6])\\d{6}",,,,"662123456",,,[9]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"900[1-9]\\d{2}",,,,"900123",,,[6]],[,,"808[1-9]\\d{2}",,,,"808123",,,[6]],[,,"700[2-9]\\d{4}",,,,"70021234",,,[8]],[,,,,,,,,,[-1]],"AL",355,"00","0",,,"0",,,,[[,"(4)(\\d{3})(\\d{4})","$1 $2 $3",["4[0-6]"],"0$1"],[,"(6\\d)(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4[7-9]"],"0$1"],[,"(\\d{3})(\\d{3,5})","$1 $2",["[235][16-9]|[79]|8[016-9]"],
"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AM:[,[,,"(?:[1-489]\\d|55|60|77)\\d{6}",,,,,,,[8],[5,6]],[,,"(?:1[0-2]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}",,,,"10123456",,,,[5,6]],[,,"(?:4[1349]|55|77|88|9[13-9])\\d{6}",,,,"77123456"],[,,"800\\d{5}",,,,"80012345"],[,,"90[016]\\d{5}",,,,"90012345"],[,,"80[1-4]\\d{5}",,,,"80112345"],[,,,,,,,,,[-1]],[,,"60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}",,,,"60271234"],"AM",374,"00",
"0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["4[1349]|[5-7]|88|9[1-9]"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[23]"],"(0$1)"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8|90"],"0 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AO:[,[,,"[29]\\d{8}",,,,,,,[9]],[,,"2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}",,,,"222123456"],[,,"9[1-49]\\d{7}",,,,"923123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
"AO",244,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AR:[,[,,"(?:11|(?:[2368]|9\\d)\\d)\\d{8}",,,,,,,[10,11],[6,7,8]],[,,"11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:[07]\\d|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|6[013-9])|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[012789]\\d|3[1-6]|4[02-9]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:0[0124-9]|[1-357]\\d|4[24-7]|6[02-9]|8[0-79]|9[1236-8])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[069]\\d|1[1568]|2[013-9]|3[145]|4[0-35-9]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[01578]\\d|2[15-7]|3[0-24-9]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}",
,,,"1123456789",,,[10],[6,7,8]],[,,"675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})",,,,"91123456789",,,,[6,7,8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"60[04579]\\d{7}",,,,"6001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AR",54,"00","0",,,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?",
"9$1",,,[[,"([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d{2})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(\\d{3})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(\\d{4})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(9)(11)(\\d{4})(\\d{4})","$2 15-$3-$4",["911"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9(?:2[2-4689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))",
"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"],"0$1"],[,"(9)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9[23]"],"0$1"],[,"(11)(\\d{4})(\\d{4})","$1 $2-$3",["11"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))",
"2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],"0$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d{3})","$1",["1[0-2]|911"],"$1"]],[[,"([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(9)(11)(\\d{4})(\\d{4})","$1 $2 $3-$4",["911"]],[,"(9)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3-$4",["9(?:2[2-4689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))",
"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"]],[,"(9)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3-$4",["9[23]"]],[,"(11)(\\d{4})(\\d{4})","$1 $2-$3",["11"],"0$1",
,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],
"0$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"810\\d{7}",,,,,,,[10]],[,,"810\\d{7}",,,,"8101234567",,,[10]],,,[,,,,,,,,,[-1]]],AS:[,[,,"(?:[58]\\d\\d|684|900)\\d{7}",,,,,,,[10],[7]],[,,"6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,,"6846221234",,,,[7]],[,,"684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}",,,,"6847331234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
,,,"5002345678"],[,,,,,,,,,[-1]],"AS",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"684",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AT:[,[,,"[1-35-9]\\d{8,12}|4(?:[0-24-9]\\d{4,11}|3(?:[05]\\d{3,10}|[2-467]\\d{3,4}|8\\d{3,6}|9\\d{3,7}))|[1-35-8]\\d{7}|[1-35-7]\\d{5,6}|[15]\\d{4}|1\\d{3}",,,,,,,[4,5,6,7,8,9,10,11,12,13],[3]],[,,"1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}",
,,,"1234567890",,,,[3]],[,,"6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,,"664123456",,,[7,8,9,10,11,12,13]],[,,"800\\d{6,10}",,,,"800123456",,,[9,10,11,12,13]],[,,"9(?:0[01]|3[019])\\d{6,10}",,,,"900123456",,,[9,10,11,12,13]],[,,"8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}",,,,"810123456",,,[8,9,10,11,12,13]],[,,,,,,,,,[-1]],[,,"5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|7[28]0\\d{6,10}",,,,"780123456",,,[5,6,7,8,9,10,11,12,13]],"AT",43,"00","0",,,"0",,,,[[,"(116\\d{3})","$1",["116"],"$1"],[,"(1)(\\d{3,12})",
"$1 $2",["1"],"0$1"],[,"(5\\d)(\\d{3,5})","$1 $2",["5[079]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["5[079]"],"0$1"],[,"(5\\d)(\\d{4})(\\d{4,7})","$1 $2 $3",["5[079]"],"0$1"],[,"(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"],"0$1"],[,"(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
,,[,,,,,,,,,[-1]]],AU:[,[,,"1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}",,,,,,,[5,6,7,8,9,10]],[,,"[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}",,,,"212345678",,,[9],[8]],[,,"4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"19(?:0[0126]\\d|[679])\\d{5}",,,,"1900123456",,,[8,10]],
[,,"13(?:00\\d{3}|45[0-4]|\\d)\\d{3}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5\\d|71)|550\\d)\\d{5}",,,,"550123456",,,[9]],"AU",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011)|001[14-689]","0",,,"0",,"0011",,[[,"([2378])(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],[,"(16)(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(16)(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(1[389]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],
[,"(180)(2\\d{3})","$1 $2",["180","1802"]],[,"(19\\d)(\\d{3})","$1 $2",["19[13]"]],[,"(19\\d{2})(\\d{4})","$1 $2",["19[679]"]],[,"(13)(\\d{2})(\\d{2})","$1 $2 $3",["13[1-9]"]]],,[,,"16\\d{3,7}",,,,"1612345",,,[5,6,7,8,9]],1,,[,,"1(?:3(?:00\\d{3}|45[0-4]|\\d)\\d{3}|80(?:0\\d{6}|2\\d{3}))",,,,,,,[6,7,8,10]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AW:[,[,,"(?:[25-79]\\d\\d|800)\\d{4}",,,,,,,[7]],[,,"5(?:2\\d|8[1-9])\\d{4}",,,,"5212345"],[,,"(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}",
,,,"5601234"],[,,"800\\d{4}",,,,"8001234"],[,,"900\\d{4}",,,,"9001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"28\\d{5}|501\\d{4}",,,,"5011234"],"AW",297,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AX:[,[,,"1\\d{5,11}|(?:[27]|4\\d)\\d{4,9}|[356]0\\d{6,8}|800\\d{4,7}|[35]0\\d{4,5}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"18[1-8]\\d{3,9}",,,,"181234567",,,[6,7,8,9,10,11,12]],[,,"4\\d{5,10}|50\\d{4,8}",,,,"412345678",,,[6,7,8,9,10,11]],[,,"800\\d{4,7}",
,,,"8001234567",,,[7,8,9,10]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AX",358,"00|99(?:[01469]|5(?:11|3[23]|41|5[59]|77|88|9[09]))","0",,,"0",,"00",,,,[,,,,,,,,,[-1]],,,[,,"[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})",,,,,,,[5,6,7,8,9,10]],[,,"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
,,,"10112345",,,[5,6,7,8,9,10]],,,[,,,,,,,,,[-1]]],AZ:[,[,,"(?:(?:(?:[12457]\\d|60|88)\\d|365)\\d{3}|900200)\\d{3}",,,,,,,[9],[7]],[,,"(?:1[28]\\d{3}|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])\\d{2}|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}",,,,"123123456",,,,[7]],[,,"(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}",,,,"401234567"],[,,"88\\d{7}",,,,"881234567"],[,,"900200\\d{3}",,,,"900200123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AZ",994,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",
["1[28]|2(?:[0-36]|[45]2)|365"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[4-8]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BA:[,[,,"(?:[3589]\\d|49|6\\d\\d?|70)\\d{6}",,,,,,,[8,9],[6]],[,,"(?:3(?:[05679][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",,,,"30212345",,,[8],[6]],[,,"6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}",
,,,"61123456"],[,,"8[08]\\d{6}",,,,"80123456",,,[8]],[,,"9[0246]\\d{6}",,,,"90123456",,,[8]],[,,"8[12]\\d{6}",,,,"82123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BA",387,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6[047]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70(?:3[0146]|[56]0)\\d{4}",,,,"70341234",,,[8]],,,[,,,,,,,,,[-1]]],BB:[,[,,"(?:246|[58]\\d\\d|900)\\d{7}",
,,,,,,[10],[7]],[,,"246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}",,,,"2464123456",,,,[7]],[,,"246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}",,,,"2462501234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}|246976\\d{4}",,,,"9002123456",,,,[7]],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"24631\\d{5}",,,,"2463101234",,,,
[7]],"BB",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"246",[,,,,,,,,,[-1]],[,,"246(?:292|367|4(?:1[7-9]|3[01]|44|67)|736)\\d{4}",,,,"2464301234",,,,[7]],,,[,,,,,,,,,[-1]]],BD:[,[,,"[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}",,,,,,,[6,7,8,9,10]],[,,"2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|90)|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[0146-9]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8)|62\\d{2})|71\\d{2}|8(?:[18]|23|54)\\d{2}|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}",
,,,"27111234",,,[6,7,8,9]],[,,"(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}",,,,"1812345678",,,[10]],[,,"80[03]\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"96(?:0[469]|1[0-4]|3[389]|6[69]|7[78])\\d{6}",,,,"9604123456",,,[10]],"BD",880,"00","0",,,"0",,,,[[,"(2)(\\d{7,8})","$1-$2",["2"],"0$1"],[,"(\\d{2})(\\d{4,6})","$1-$2",["[3-79]1"],"0$1"],[,"(\\d{4})(\\d{3,6})","$1-$2",["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[01367])"],
"0$1"],[,"(\\d{3})(\\d{3,7})","$1-$2",["[3-79][2-9]|8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BE:[,[,,"4\\d{8}|[1-9]\\d{7}",,,,,,,[8,9]],[,,"(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}",,,,"12345678",,,[8]],[,,"4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}",,,,"470123456",,,[9]],[,,"800[1-9]\\d{4}",,,,"80012345",,,[8]],[,,"(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}",
,,,"90012345",,,[8]],[,,"7879\\d{4}",,,,"78791234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BE",32,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[5-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4[23]|9[2-4]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[156]|7[018]|8(?:0[1-9]|[1-79])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"78(?:0[57]|1[0458]|2[25]|3[5678]|48|[56]0|7[078])\\d{4}",
,,,"78102345",,,[8]],,,[,,,,,,,,,[-1]]],BF:[,[,,"[25-7]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",,,,"20491234"],[,,"(?:5[124-8]|[67]\\d)\\d{6}",,,,"70123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BF",226,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BG:[,[,,"[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
,,,,,,[6,7,8,9],[4,5]],[,,"2\\d{5,7}|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}",,,,"2123456",,,[6,7,8],[4,5]],[,,"(?:8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}|4(?:3[0789]|8\\d)\\d{5}",,,,"48123456",,,[8,9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"BG",359,"00","0",,,"0",,,,[[,"(2)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(2)(\\d{3})(\\d{3,4})",
"$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["43[124-7]|70[1-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[124-7]|70[1-9]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[78]00"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["99[69]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["48|8[7-9]|9[08]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BH:[,
[,,"[136-9]\\d{7}",,,,,,,[8]],[,,"(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d{2}))\\d{4}",,,,"17001234"],[,,"(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9]|7[0-6])))\\d{4}",,,,"36001234"],[,,"80\\d{6}",,,,"80123456"],[,,"(?:87|9[014578])\\d{6}",,,,"90123456"],[,,"84\\d{6}",,,,"84123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BH",973,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,
,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BI:[,[,,"(?:[267]\\d|31)\\d{6}",,,,,,,[8]],[,,"22\\d{6}",,,,"22201234"],[,,"(?:29|31|6[189]|7[125-9])\\d{6}",,,,"79561234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BI",257,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BJ:[,[,,"[2689]\\d{7}",,,,,,,[8]],[,,"2(?:02|1[037]|2[45]|3[68])\\d{5}",,,,"20211234"],[,,"(?:6\\d|9[03-9])\\d{6}",
,,,"90011234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"857[58]\\d{4}",,,,"85751234"],"BJ",229,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"81\\d{6}",,,,"81123456"],,,[,,,,,,,,,[-1]]],BL:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:2[7-9]|5[12]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,
,,,,,[-1]],"BL",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BM:[,[,,"(?:441|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}",,,,"4412345678",,,,[7]],[,,"441(?:[37]\\d|5[0-39])\\d{5}",,,,"4413701234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,
,,[-1]],"BM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"441",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BN:[,[,,"[2-578]\\d{6}",,,,,,,[7]],[,,"2(?:[013-9]\\d|2[0-7])\\d{4}|[3-5]\\d{6}",,,,"2345678"],[,,"22[89]\\d{4}|[78]\\d{6}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BN",673,"00",,,,,,,,[[,"([2-578]\\d{2})(\\d{4})","$1 $2",["[2-578]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BO:[,[,,"(?:[2-467]\\d{3}|80017)\\d{4}",
,,,,,,[8,9],[7]],[,,"(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}",,,,"22123456",,,[8],[7]],[,,"[67]\\d{7}",,,,"71234567",,,[8]],[,,"80017\\d{4}",,,,"800171234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BO",591,"00(1\\d)?","0",,,"0(1\\d)?",,,,[[,"([234])(\\d{7})","$1 $2",["[2-4]"],,"0$CC $1"],[,"([67]\\d{7})",
"$1",["[67]"],,"0$CC $1"],[,"(800)(\\d{2})(\\d{4})","$1 $2 $3",["800"],,"0$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BQ:[,[,,"(?:[34]1|7\\d)\\d{5}",,,,,,,[7]],[,,"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}",,,,"7151234"],[,,"(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,,"3181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BQ",599,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,
,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BR:[,[,,"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",,,,,,,[8,9,10,11]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,,"1123456789",,,[10],[8]],[,,"(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-9]|9\\d)\\d{7}",,,,"11961234567",,,[10,11],[8]],[,,"800\\d{6,7}",,,,"800123456",,,[9,10]],[,,"(?:300|[59]00\\d?)\\d{6}",,,,"300123456",,,[9,10]],[,,"(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}",
,,,"40041234",,,[8,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",,,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",,,[[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],[,"([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],[,"(\\d{3,5})","$1",["1[125689]"]],[,"(\\d{4})(\\d{4})","$1-$2",["[2-9](?:0[1-9]|[1-9])"]],[,"(\\d{5})(\\d{4})","$1-$2",["9(?:0[1-9]|[1-9])"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],
"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)","0 $CC ($1)"]],[[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],[,"([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)","0 $CC ($1)"]],[,,,,,,,,,[-1]],,,[,,"(?:300\\d|40(?:0\\d|20))\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BS:[,[,
,"(?:242|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",,,,"2423456789",,,,[7]],[,,"242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}",,,,"2423591234",,,,[7]],[,,"242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456",,,,[7]],[,,"900[2-9]\\d{6}",
,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"BS",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"242",[,,,,,,,,,[-1]],[,,"242225[0-46-9]\\d{3}",,,,"2422250123"],,,[,,,,,,,,,[-1]]],BT:[,[,,"[17]\\d{7}|[2-8]\\d{6}",,,,,,,[7,8],[6]],[,,"(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,,"2345678",,,[7],[6]],[,,"(?:1[67]|77)\\d{6}",,,,"17123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BT",
975,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1|77"]],[,"([2-8])(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BW:[,[,,"(?:(?:[2-6]|7\\d)\\d|90)\\d{5}",,,,,,,[7,8]],[,,"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",,,,"2401234",,,[7]],[,,"7(?:[1-6]\\d|7[014-8])\\d{5}",,,,"71123456",,,[8]],
[,,,,,,,,,[-1]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"79[12][01]\\d{4}",,,,"79101234",,,[8]],"BW",267,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-6]"]],[,"(7\\d)(\\d{3})(\\d{3})","$1 $2 $3",["7"]],[,"(90)(\\d{5})","$1 $2",["90"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BY:[,[,,"(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",,,,,,,[6,7,8,9,10,11],[5]],
[,,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",,,,"152450911",,,[9],[5,6,7]],[,,"(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}",,,,"294911911",,,[9]],[,,"8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}",,,,"8011234567"],[,,"(?:810|902)\\d{7}",,,,"9021234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"249\\d{6}",,,,"249123456",,,[9]],"BY",375,"810","8",,,"8?0?",,"8~10",,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
"$1 $2-$3-$4",["17[0-3589]|2[4-9]|[34]","17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"8 0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])","1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],"8 0$1"],[,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],[,"([89]\\d{2})(\\d{3})(\\d{4})",
"$1 $2 $3",["8[01]|9"],"8 $1"],[,"(82\\d)(\\d{4})(\\d{4})","$1 $2 $3",["82"],"8 $1"],[,"(800)(\\d{3})","$1 $2",["800"],"8 $1"],[,"(800)(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,"8(?:0[13]|10|20\\d)\\d{7}|800\\d{3,7}|902\\d{7}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BZ:[,[,,"(?:0800\\d|[2-8])\\d{6}",,,,,,,[7,11]],[,,"(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}",,,,"2221234",,,[7]],[,,"6[0-35-7]\\d{5}",,,,"6221234",,,[7]],[,,"0800\\d{7}",,,,"08001234123",,,[11]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BZ",501,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],[,"(0)(800)(\\d{4})(\\d{3})","$1-$2-$3-$4",["080","0800"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CA:[,[,,"(?:[2-8]\\d|90)\\d{8}",,,,,,,[10],[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,,"5062345678",,,,[7]],[,
,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,,"2042345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}",,,,"5002345678"],[,,"600[2-9]\\d{6}",,,,"6002012345"],"CA",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,
,,[-1]]],CC:[,[,,"1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}",,,,,,,[6,7,8,9,10]],[,,"8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}",,,,"891621234",,,[9],[8]],[,,"4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2547-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"19(?:0[0126]\\d|[679])\\d{5}",,,,"1900123456",,,[8,10]],[,,"13(?:00\\d{3}|45[0-4]|\\d)\\d{3}",,,,"1300123456",,,[6,
8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5\\d|71)|550\\d)\\d{5}",,,,"550123456",,,[9]],"CC",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CD:[,[,,"[189]\\d{8}|[1-68]\\d{6}",,,,,,,[7,9]],[,,"1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}",,,,"1234567"],[,,"8(?:[0-2459]\\d{2}|8)\\d{5}|9[017-9]\\d{7}",,,,"991234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CD",243,"00","0",,,"0",,
,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["12"],"0$1"],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[0-2459]|9"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CF:[,[,,"(?:[27]\\d{3}|8776)\\d{4}",,,,,,,[8]],[,,"2[12]\\d{6}",,,,"21612345"],[,,"7[0257]\\d{6}",,,,"70012345"],[,,,,,,,,,[-1]],[,,"8776\\d{4}",,,,"87761234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
"CF",236,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CG:[,[,,"(?:(?:0\\d|80)\\d|222)\\d{6}",,,,,,,[9]],[,,"222[1-589]\\d{5}",,,,"222123456"],[,,"0[14-6]\\d{7}",,,,"061234567"],[,,,,,,,,,[-1]],[,,"80(?:0\\d{2}|11[0-4])\\d{4}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CG",242,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["801"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",
["[02]"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["800"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CH:[,[,,"8\\d{11}|[2-9]\\d{8}",,,,,,,[9,12]],[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",,,,"212345678",,,[9]],[,,"7[5-9]\\d{7}",,,,"781234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[016]\\d{6}",,,,"900123456",,,[9]],[,,"84[0248]\\d{6}",,,,"840123456",,,[9]],[,,"878\\d{6}",,,,"878123456",,,[9]],[,,,,,,,,,[-1]],"CH",41,"00","0",,,"0",,,,[[,"([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[2-7]|[89]1"],"0$1"],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["860"],"0$1"]],,[,,"74[0248]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,"5[18]\\d{7}",,,,"581234567",,,[9]],,,[,,"860\\d{9}",,,,"860123456789",,,[12]]],CI:[,[,,"[02-8]\\d{7}",,,,,,,[8]],[,,"(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}",,,,"21234567"],[,,"(?:[07][1-9]|[45]\\d|6[014-9]|8[4-9])\\d{6}",
,,,"01234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CI",225,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CK:[,[,,"[2-8]\\d{4}",,,,,,,[5]],[,,"(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,,"21234"],[,,"[5-8]\\d{4}",,,,"71234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CK",682,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2"]],,[,,,,,,,,,[-1]],,,
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CL:[,[,,"(?:1230|[2-57-9]\\d|6\\d{1,3})\\d{7}",,,,,,,[9,10,11]],[,,"2(?:1962\\d{4}|2\\d{7}|32[0-46-8]\\d{5})|(?:3[2-5]\\d|[47][1-35]\\d|5[1-3578]\\d|6[13-57]\\d|8(?:0[1-9]|[1-9]\\d)|9[3-9]\\d)\\d{6}",,,,"221234567",,,[9]],[,,"2(?:1962\\d{4}|2\\d{7}|32[0-46-8]\\d{5})|(?:3[2-5]\\d|[47][1-35]\\d|5[1-3578]\\d|6[13-57]\\d|8(?:0[1-9]|[1-9]\\d)|9[3-9]\\d)\\d{6}",,,,"961234567",,,[9]],[,,"800\\d{6}|1230\\d{7}",,,,"800123456",,,[9,11]],[,,,,,,,,,[-1]],[,,
"600\\d{7,8}",,,,"6001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,"44\\d{7}",,,,"441234567",,,[9]],"CL",56,"(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0",,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],[,"(9)(\\d{4})(\\d{4})","$1 $2 $3",["9"]],[,"(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["[68]00"]],[,"(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",
["600"]],[,"(1230)(\\d{3})(\\d{4})","$1 $2 $3",["123","1230"]],[,"(\\d{5})(\\d{4})","$1 $2",["219"],"($1)"],[,"(\\d{4,5})","$1",["[1-9]"],"$1"]],[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],[,"(9)(\\d{4})(\\d{4})","$1 $2 $3",["9"]],[,"(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["[68]00"]],[,"(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["600"]],[,"(1230)(\\d{3})(\\d{4})",
"$1 $2 $3",["123","1230"]],[,"(\\d{5})(\\d{4})","$1 $2",["219"],"($1)"]],[,,,,,,,,,[-1]],,,[,,"600\\d{7,8}",,,,,,,[10,11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CM:[,[,,"(?:[26]\\d\\d|88)\\d{6}",,,,,,,[8,9]],[,,"2(?:22|33|4[23])\\d{6}",,,,"222123456",,,[9]],[,,"6[5-9]\\d{7}",,,,"671234567",,,[9]],[,,"88\\d{6}",,,,"88012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CM",237,"00",,,,,,,,[[,"([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[23]|88"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CN:[,[,,"(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})",
,,,"1012345678",,,,[5,6]],[,,"1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|66\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[89]\\d{2})\\d{6}",,,,"13123456789",,,[11]],[,,"(?:10)?800\\d{7}",,,,"8001234567",,,[10,12]],[,,"16[08]\\d{5}",,,,"16812345",,,[8]],[,,"400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
,,,"4001234567",,,[7,8,9,10,11],[5,6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CN",86,"(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00","0",,,"(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))|0",,"00",,[[,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[,"(\\d{5,6})","$1",["100|95"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d\\d[19]","[3-9]\\d\\d(?:10|9[56])"],"0$1","$CC $1"],[,"(\\d{3,4})(\\d{4})",
"$1 $2",["[2-9]"]],[,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"],"0$1","$CC $1",1],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1(?:[3-57-9]|66)"],,"$CC $1"],[,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[[,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[,"(\\d{2})(\\d{5,6})",
"$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d\\d[19]","[3-9]\\d\\d(?:10|9[56])"],"0$1","$CC $1"],[,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"],"0$1","$CC $1",1],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1(?:[3-57-9]|66)"],,"$CC $1"],[,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[,,,,,,,,,[-1]],,,[,,"(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}",,,,,,
,[10,11,12]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CO:[,[,,"(?:1\\d|3)\\d{9}|[124-8]\\d{7}",,,,,,,[8,10,11],[7]],[,,"[124-8][2-9]\\d{6}",,,,"12345678",,,[8],[7]],[,,"3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}",,,,"3211234567",,,[10]],[,,"1800\\d{7}",,,,"18001234567",,,[11]],[,,"19(?:0[01]|4[78])\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CO",57,"00(?:4(?:[14]4|56)|[579])","0",,,"0([3579]|4(?:44|56))?",,,,[[,"(\\d)(\\d{7})","$1 $2",["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]","1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"],
"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(1)(\\d{3})(\\d{7})","$1-$2-$3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"],"0$1"]],[[,"(\\d)(\\d{7})","$1 $2",["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]","1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(1)(\\d{3})(\\d{7})","$1 $2 $3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CR:[,[,,"(?:8\\d|90)\\d{8}|[24-8]\\d{7}",
,,,,,,[8,10]],[,,"2(?:[024-7]\\d{2}|1(?:0[7-9]|[1-9]\\d))\\d{4}",,,,"22123456",,,[8]],[,,"5(?:0[01]|7[0-3])\\d{5}|6(?:[0-4]\\d{3}|500[01])\\d{3}|(?:7[0-3]|8[3-9])\\d{6}",,,,"83123456",,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"90[059]\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"210[0-6]\\d{4}|4\\d{7}|5100\\d{4}",,,,"40001234",,,[8]],"CR",506,"00",,,,"(19(?:0[012468]|1[09]|20|66|77|99))",,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[24-7]|8[3-9]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})",
"$1-$2-$3",["[89]0"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CU:[,[,,"[2-57]\\d{7}|[2-47]\\d{6}|[34]\\d{5}",,,,,,,[6,7,8],[4,5]],[,,"2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}",,,,"71234567",,,,[4,5]],[,,"5\\d{7}",,,,"51234567",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CU",53,"119","0",,,"0",,,,[[,"(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],[,"(\\d{2})(\\d{4,6})",
"$1 $2",["[2-4]"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["5"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CV:[,[,,"[2-59]\\d{6}",,,,,,,[7]],[,,"2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,,"2211234"],[,,"(?:[34][36]|5[1-389]|9\\d)\\d{5}",,,,"9911234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CV",238,"0",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,
,,,,,[-1]]],CW:[,[,,"(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",,,,,,,[7,8]],[,,"9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}",,,,"94151234",,,[8]],[,,"9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}",,,,"95181234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"60[0-2]\\d{4}",,,,"6001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CW",599,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[13-7]"]],[,"(9)(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],,[,,"955\\d{5}",,,,"95581234",,,[8]],1,,[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CX:[,[,,"1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}",,,,,,,[6,7,8,9,10]],[,,"8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",,,,"891641234",,,[9],[8]],[,,"4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2547-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"19(?:0[0126]\\d|[679])\\d{5}",,,,"1900123456",,,[8,10]],[,,"13(?:00\\d{3}|45[0-4]|\\d)\\d{3}",
,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5\\d|71)|550\\d)\\d{5}",,,,"550123456",,,[9]],"CX",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CY:[,[,,"(?:[279]\\d|[58]0)\\d{6}",,,,,,,[8]],[,,"2[2-6]\\d{6}",,,,"22345678"],[,,"9[4-79]\\d{6}",,,,"96123456"],[,,"800\\d{5}",,,,"80001234"],[,,"90[09]\\d{5}",,,,"90012345"],[,,"80[1-9]\\d{5}",,,,"80112345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,
,,,[-1]],"CY",357,"00",,,,,,,,[[,"(\\d{2})(\\d{6})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:50|77)\\d{6}",,,,"77123456"],,,[,,,,,,,,,[-1]]],CZ:[,[,,"(?:[2-578]\\d|60|9\\d{1,4})\\d{7}",,,,,,,[9,10,11,12]],[,,"2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,,"212345678",,,[9]],[,,"(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",,,,"601123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:0[05689]|76)\\d{6}",,,,"900123456",,,[9]],[,,"8[134]\\d{7}",,,,"811234567",,,[9]],[,,"70[01]\\d{6}",,,
,"700123456",,,[9]],[,,"9[17]0\\d{6}",,,,"910123456",,,[9]],"CZ",420,"00",,,,,,,,[[,"([2-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],[,"(96\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["96"]],[,"(9\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9[36]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"9(?:5\\d|7[2-4])\\d{6}",,,,"972123456",,,[9]],,,[,,"9(?:3\\d{9}|6\\d{7,10})",,,,"93123456789"]],DE:[,[,,"(?:1|[358]\\d{11})\\d{3}|[1-35689]\\d{13}|4(?:[0-8]\\d{5,12}|9(?:[05]\\d|44|6[1-8])\\d{9})|[1-35-9]\\d{6,12}|49(?:[0-357]\\d|[46][1-8])\\d{4,8}|49(?:[0-3579]\\d|4[1-9]|6[0-8])\\d{3}|[1-9]\\d{5}|[13-68]\\d{4}",
,,,,,,[4,5,6,7,8,9,10,11,12,13,14,15],[3]],[,,"2\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|4(?:0\\d{3,12}|[1-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|6(?:\\d{5,13}|9\\d{3,12})|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-8]\\d|9\\d?)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})",,,,"30123456",,,[5,6,7,8,9,10,11,12,13,14,15],[3,4]],[,,"1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7\\d{8,9})",,,,"15123456789",
,,[10,11]],[,,"800\\d{7,12}",,,,"8001234567890",,,[10,11,12,13,14,15]],[,,"137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})",,,,"9001234567",,,[10,11]],[,,"1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})",,,,"18012345",,,[7,8,9,10,11,12,13,14]],[,,"700\\d{8}",,,,"70012345678",,,[11]],[,,,,,,,,,[-1]],"DE",49,"00","0",,,"0",,,,[[,"(1\\d{2})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],[,"(15\\d{3})(\\d{6})","$1 $2",["15[0568]"],"0$1"],[,"(1\\d{3})(\\d{7})","$1 $2",["15"],"0$1"],[,"(\\d{2})(\\d{3,11})","$1 $2",["3[02]|40|[68]9"],
"0$1"],[,"(\\d{3})(\\d{3,11})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)","2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"],"0$1"],[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"],
"0$1"],[,"(3\\d{4})(\\d{1,10})","$1 $2",["3"],"0$1"],[,"(800)(\\d{7,12})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:37|80)|900","1(?:37|80)|900[1359]"],"0$1"],[,"(1\\d{2})(\\d{5,11})","$1 $2",["181"],"0$1"],[,"(18\\d{3})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],[,"(18\\d{2})(\\d{7})","$1 $2",["18[68]"],"0$1"],[,"(18\\d)(\\d{8})","$1 $2",["18[2-579]"],"0$1"],[,"(700)(\\d{4})(\\d{4})","$1 $2 $3",["700"],"0$1"],[,"(138)(\\d{4})","$1 $2",["138"],"0$1"],[,"(15[013-68])(\\d{2})(\\d{8})",
"$1 $2 $3",["15[013-68]"],"0$1"],[,"(15[279]\\d)(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],[,"(1[67]\\d)(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})",,,,"16412345",,,[4,5,6,7,8,9,10,11,12,13,14]],,,[,,,,,,,,,[-1]],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})",,,,"18500123456",,,[8,9,10,11,12,13,14]],,,[,,"1(?:5(?:(?:2\\d55|7\\d99|9\\d33)\\d{7}|(?:[034568]00|113)\\d{8})|6(?:013|255|399)\\d{7,8}|7(?:[015]13|[234]55|[69]33|[78]99)\\d{7,8})",,,,"177991234567",
,,[12,13]]],DJ:[,[,,"(?:2\\d|77)\\d{6}",,,,,,,[8]],[,,"2(?:1[2-5]|7[45])\\d{5}",,,,"21360003"],[,,"77\\d{6}",,,,"77831001"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DJ",253,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DK:[,[,,"[2-9]\\d{7}",,,,,,,[8]],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",,,,"32123456"],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",,,,"20123456"],[,,
"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DK",45,"00",,,,,,,1,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DM:[,[,,"(?:[58]\\d\\d|767|900)\\d{7}",,,,,,,[10],[7]],[,,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}",,,,"7674201234",,,,[7]],[,,"767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}",,,,"7672251234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"767",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DO:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})",
,,,"8092345678",,,,[7]],[,,"8[024]9[2-9]\\d{6}",,,,"8092345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DO",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"8[024]9",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DZ:[,[,,"(?:[1-4]|[5-79]\\d|80)\\d{7}",,,,,,,[8,9]],[,,"(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}",,,,"12345678"],[,,"(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-6])\\d{6}",
,,,"551234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"80[3-689]1\\d{5}",,,,"808123456",,,[9]],[,,"80[12]1\\d{5}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,"98[23]\\d{6}",,,,"983123456",,,[9]],"DZ",213,"00","0",,,"0",,,,[[,"([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],[,"([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"],[,"(9\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
EC:[,[,,"1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}",,,,,,,[8,9,10,11],[7]],[,,"[2-7][2-7]\\d{6}",,,,"22123456",,,[8],[7]],[,,"9(?:(?:39|[57][89]|[89]\\d)\\d|6(?:[0-27-9]\\d|30))\\d{5}",,,,"991234567",,,[9]],[,,"1800\\d{6,7}",,,,"18001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[2-7]890\\d{4}",,,,"28901234",,,[8]],"EC",593,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[247]|[356][2-8]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(1800)(\\d{3})(\\d{3,4})",
"$1 $2 $3",["180","1800"],"$1"]],[[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[247]|[356][2-8]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(1800)(\\d{3})(\\d{3,4})","$1 $2 $3",["180","1800"],"$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EE:[,[,,"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}",,,,,,,[7,8,10]],[,,"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",,,,"3212345",,,[7]],[,,"(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}",
,,,"51234567",,,[7,8]],[,,"800(?:0\\d{3}|1\\d|[2-9])\\d{3}",,,,"80012345"],[,,"(?:40\\d{2}|900)\\d{4}",,,,"9001234",,,[7,8]],[,,,,,,,,,[-1]],[,,"70[0-2]\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"EE",372,"00",,,,,,,,[[,"([3-79]\\d{2})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],[,"(70)(\\d{2})(\\d{4})","$1 $2 $3",["70"]],[,"(8000)(\\d{3})(\\d{3})","$1 $2 $3",["800","8000"]],[,"([458]\\d{3})(\\d{3,4})",
"$1 $2",["40|5|8(?:00|[1-5])","40|5|8(?:00[1-9]|[1-5])"]]],,[,,,,,,,,,[-1]],,,[,,"800[2-9]\\d{3}",,,,,,,[7]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EG:[,[,,"(?:[189]\\d?|[24-6])\\d{8}|[13]\\d{7}",,,,,,,[8,9,10],[7]],[,,"(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|5\\d|7[23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}",,,,"234567890",,,[8,9],[7]],[,,"1[0125]\\d{8}",,,,"1001234567",,,[10]],[,,"800\\d{7}",
,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"EG",20,"00","0",,,"0",,,,[[,"(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],[,"(\\d{2})(\\d{6,7})","$1 $2",["1(?:3|5[239])|[4-6]|[89][2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1[0-25]|[89]00"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EH:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"528[89]\\d{5}",,,,"528812345"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}",
,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5924[01]\\d{4}",,,,"592401234"],"EH",212,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"528[89]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ER:[,[,,"[178]\\d{6}",,,,,,,[7],[6]],[,,"1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}",,,,"8370362",,,,[6]],[,,"17[1-3]\\d{4}|7\\d{6}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ER",291,"00","0",,,"0",
,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ES:[,[,,"(?:51|[6-9]\\d)\\d{7}",,,,,,,[9]],[,,"8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{6}|9(?:[135]\\d{7}|[28][0-8]\\d{6}|4[1-9]\\d{6}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})",,,,"810123456"],[,,"(?:6\\d{6}|7[1-48]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}",,,,"612345678"],[,,"[89]00\\d{6}",
,,,"800123456"],[,,"80[367]\\d{6}",,,,"803123456"],[,,"90[12]\\d{6}",,,,"901123456"],[,,"70\\d{7}",,,,"701234567"],[,,,,,,,,,[-1]],"ES",34,"00",,,,,,,,[[,"([89]00)(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[568]|[79][0-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"51\\d{7}",,,,"511234567"],,,[,,,,,,,,,[-1]]],ET:[,[,,"(?:11|[2-59]\\d)\\d{7}",,,,,,,[9],[7]],[,,"(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
,,,"111112345",,,,[7]],[,,"9\\d{8}",,,,"911234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ET",251,"00","0",,,"0",,,,[[,"([1-59]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[1-59]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FI:[,[,,"(?:1\\d|[2-689])\\d{4,10}|7\\d{4,9}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}",,,,"1312345678"],[,,"4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}",
,,,"412345678",,,[6,7,8,9,10,11]],[,,"800\\d{4,7}",,,,"8001234567",,,[7,8,9,10]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FI",358,"00|99(?:[01469]|5(?:11|3[23]|41|5[59]|77|88|9[09]))","0",,,"0",,"00",,[[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"],"0$1"],[,"(75\\d{3})","$1",["75[12]"],"0$1"],[,"(116\\d{3})","$1",["116"],"$1"],[,"(\\d{2})(\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],[,"(\\d)(\\d{4,11})","$1 $2",["[25689][1-8]|3"],"0$1"]],
,[,,,,,,,,,[-1]],1,,[,,"[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})",,,,,,,[5,6,7,8,9,10]],[,,"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})",,,,"10112345",,,[5,6,7,8,9,10]],,,[,,,,,,,,,[-1]]],FJ:[,[,,"(?:(?:0800\\d|[235-9])\\d|45)\\d{5}",,,,,,,[7,11]],[,,"(?:3[0-5]\\d|6(?:03|[25-7]\\d)|8[58]\\d)\\d{4}",,,,"3212345",,,[7]],[,,"(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",
,,,"7012345",,,[7]],[,,"0800\\d{7}",,,,"08001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FJ",679,"0(?:0|52)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FK:[,[,,"[2-7]\\d{4}",,,,,,,[5]],[,,"[2-47]\\d{4}",,,,"31234"],[,,"[56]\\d{4}",,,,"51234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FK",500,"00",
,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FM:[,[,,"[39]\\d{6}",,,,,,,[7]],[,,"3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}",,,,"3201234"],[,,"3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}",,,,"3501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FM",691,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FO:[,[,,"(?:[2-8]\\d|90)\\d{4}",,,,,,,[6]],[,,"(?:20|[3-4]\\d|8[19])\\d{4}",,,,"201234"],
[,,"(?:[27][1-9]|5\\d)\\d{4}",,,,"211234"],[,,"80[257-9]\\d{3}",,,,"802123"],[,,"90(?:[1345][15-7]|2[125-7]|99)\\d{2}",,,,"901123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:6[0-36]|88)\\d{4}",,,,"601234"],"FO",298,"00",,,,"(10(?:01|[12]0|88))",,,,[[,"(\\d{6})","$1",,,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FR:[,[,,"[1-9]\\d{8}",,,,,,,[9]],[,,"[1-5]\\d{8}",,,,"123456789"],[,,"(?:6\\d{2}|7(?:00|[3-9]\\d))\\d{6}",,,,"612345678"],[,,"80[0-5]\\d{6}",,,,"801234567"],
[,,"8[129]\\d{7}",,,,"891123456"],[,,"884\\d{6}",,,,"884012345"],[,,,,,,,,,[-1]],[,,"9\\d{8}",,,,"912345678"],"FR",33,"00","0",,,"0",,,,[[,"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"],[,"(1\\d{2})(\\d{3})","$1 $2",["11"],"$1"],[,"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],[[,"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"],[,"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],[,,,,,,,,,[-1]],,,[,,,,,,,
,,[-1]],[,,"80[6-9]\\d{6}",,,,"806123456"],,,[,,,,,,,,,[-1]]],GA:[,[,,"(?:0\\d|[2-7])\\d{6}",,,,,,,[7,8]],[,,"01\\d{6}",,,,"01441234",,,[8]],[,,"0?[2-7]\\d{6}",,,,"06031234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GA",241,"00",,,,,,,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GB:[,[,,"[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
,,,,,,[7,9,10],[4,5,6,8]],[,,"2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}",
,,,"1212345678",,,[9,10],[4,5,6,7,8]],[,,"7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}",,,,"7400123456",,,[10]],[,,"80(?:0(?:1111|\\d{6,7})|8\\d{7})",,,,"8001234567"],[,,"(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}",,,,"9012345678",,,[10]],[,,"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",,,,"8431234567",,,[7,
10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GB",44,"00","0"," x",,"0",,,,[[,"(7\\d{3})(\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2|5[56]|7[06]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],[,"(1\\d{3})(\\d{5,6})",
"$1 $2",["1"],"0$1"],[,"(800)(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],[,"(845)(46)(4\\d)","$1 $2 $3",["845","8454","84546","845464"],"0$1"],[,"(8\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"],"0$1"],[,"(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1"],[,"(800)(\\d{6})","$1 $2",["800"],"0$1"]],,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],1,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,
,,,[-1]]],GD:[,[,,"(?:473|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",,,,"4732691234",,,,[7]],[,,"473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}",,,,"4734031234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GD",1,"011",
"1",,,"1",,,,,,[,,,,,,,,,[-1]],,"473",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GE:[,[,,"(?:[3-57]\\d\\d|800)\\d{6}",,,,,,,[9],[6]],[,,"(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",,,,"322123456",,,,[6]],[,,"(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}",,,,"555123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"706\\d{6}",,,,"706123456"],"GE",995,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[348]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5|790"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"706\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GF:[,[,,"[56]94\\d{6}",,,,,,,[9]],[,,"594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}",,,,"594101234"],[,,"694(?:[0-249]\\d|3[0-48])\\d{4}",,,,"694201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GF",594,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GG:[,[,,"(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",,,,,,,[7,9,10],[6]],[,,"1481[25-9]\\d{5}",,,,"1481256789",,,[10],[6]],[,,"7(?:781\\d|839\\d|911[17])\\d{5}",,,,"7781123456",,,[10]],[,,"80(?:0(?:1111|\\d{6,7})|8\\d{7})",,,,"8001234567"],[,,"(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}",,,,"9012345678",,,[10]],[,,"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",,,,"8431234567",,,[7,10]],[,,"70\\d{8}",,,,"7012345678",
,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GG",44,"00","0",,,"0",,,,,,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GH:[,[,,"(?:[235]\\d{3}|800)\\d{5}",,,,,,,[8,9],[7]],[,,"3(?:0(?:[237]\\d|80)|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}",,,,"302345678",,
,[9],[7]],[,,"(?:2[034678]\\d|5(?:[0457]\\d|6[01]))\\d{6}",,,,"231234567",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GH",233,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"800\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GI:[,[,,"(?:[25]\\d\\d|629)\\d{5}",,,,,,,[8]],[,,"2(?:00\\d{2}|1(?:6[24-7]\\d|90[0-2])|2(?:2[2457]|50)\\d)\\d{3}",
,,,"20012345"],[,,"(?:5[46-8]\\d|629)\\d{5}",,,,"57123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GI",350,"00",,,,,,,,[[,"(\\d{3})(\\d{5})","$1 $2",["2"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GL:[,[,,"(?:19|[2-689]\\d)\\d{4}",,,,,,,[6]],[,,"(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}",,,,"321000"],[,,"(?:[25][1-9]|4[2-9])\\d{4}",,,,"221234"],[,,"80\\d{4}",,,,"801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[89]\\d{4}",
,,,"381234"],"GL",299,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GM:[,[,,"[2-9]\\d{6}",,,,,,,[7]],[,,"(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,,"5661234"],[,,"[23679]\\d{6}",,,,"3012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GM",220,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,
,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GN:[,[,,"(?:30|6\\d\\d|722)\\d{6}",,,,,,,[8,9]],[,,"30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}",,,,"30241234",,,[8]],[,,"6[02356]\\d{7}",,,,"601123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"722\\d{6}",,,,"722123456",,,[9]],"GN",224,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,
,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GP:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}",,,,"590201234"],[,,"69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GP",590,"00","0",,,"0",,,,[[,"([56]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["590|69[01]"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GQ:[,
[,,"(?:222|(?:3\\d|55|[89]0)\\d)\\d{6}",,,,,,,[9]],[,,"3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}",,,,"333091234"],[,,"(?:222|55[15])\\d{6}",,,,"222123456"],[,,"80\\d[1-9]\\d{5}",,,,"800123456"],[,,"90\\d[1-9]\\d{5}",,,,"900123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GQ",240,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],[,"(\\d{3})(\\d{6})","$1 $2",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GR:[,[,,"(?:[268]\\d|[79]0)\\d{8}",
,,,,,,[10]],[,,"2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",,,,"2123456789"],[,,"6(?:8[57-9]|9\\d)\\d{7}",,,,"6912345678"],[,,"800\\d{7}",,,,"8001234567"],[,,"90[19]\\d{7}",
,,,"9091234567"],[,,"8(?:0[16]|12|25)\\d{7}",,,,"8011234567"],[,,"70\\d{8}",,,,"7012345678"],[,,,,,,,,,[-1]],"GR",30,"00",,,,,,,,[[,"([27]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["2[2-9]1|[689]"]],[,"(2\\d{3})(\\d{6})","$1 $2",["2[2-9][02-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GT:[,[,,"(?:1\\d{3}|[2-7])\\d{7}",,,,,,,[8,11]],[,,"[267][2-9]\\d{6}",,,,"22456789",,,[8]],[,,"[345]\\d{7}",,,,"51234567",,,[8]],[,,"18[01]\\d{8}",
,,,"18001112222",,,[11]],[,,"19\\d{9}",,,,"19001112222",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GT",502,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GU:[,[,,"(?:[58]\\d\\d|671|900)\\d{7}",,,,,,,[10],[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[079]7|2[0167]|3[45]|47|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
,,,"6713001234",,,,[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[079]7|2[0167]|3[45]|47|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,,"6713001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GU",1,"011","1",,,"1",,,1,,,[,,,,
,,,,,[-1]],,"671",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GW:[,[,,"[49]\\d{8}|4\\d{6}",,,,,,,[7,9]],[,,"443\\d{6}",,,,"443201234",,,[9]],[,,"9(?:5\\d|6[569]|77)\\d{6}",,,,"955012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"40\\d{5}",,,,"4012345",,,[7]],"GW",245,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["44|9[5-7]"]],[,"(\\d{3})(\\d{4})","$1 $2",["40"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GY:[,[,,"(?:(?:(?:[2-46]\\d|77)\\d|862)\\d|9008)\\d{3}",
,,,,,,[7]],[,,"(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",,,,"2201234"],[,,"6\\d{6}",,,,"6091234"],[,,"(?:289|862)\\d{4}",,,,"2891234"],[,,"9008\\d{3}",,,,"9008123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GY",592,"001",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HK:[,[,,"8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",,,,,,,[5,
6,7,8,9,11]],[,,"(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])\\d|3(?:[1569][0-24-9]\\d|4[0-246-9]\\d|7[0-24-69]\\d|8(?:4[04]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}",,,,"21234567",,,[8]],[,,"(?:46(?:0[0-6]|10|4[0-57-9])|5(?:[1-59][0-46-9]\\d|6[0-4689]\\d|7(?:[0-2469]\\d|30))|6(?:0[1-9]\\d|[13-59]\\d{2}|2(?:[0-57-9]\\d|6[01])|[68][0-57-9]\\d|7[0-79]\\d)|707[1-5]|8480|9(?:0[1-9]\\d|1[02-9]\\d|2(?:[0-8]\\d|9[03-9])|[358][0-8]\\d|[467]\\d{2}))\\d{4}",,,,"51234567",,,[8]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900(?:[0-24-9]\\d{7}|3\\d{1,4})",
,,,"90012345678",,,[5,6,7,8,11]],[,,,,,,,,,[-1]],[,,"8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",,,,"81123456",,,[8]],[,,,,,,,,,[-1]],"HK",852,"00(?:[126-9]|30|5[09])?",,,,,,"00",,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]|[89](?:0[1-9]|[1-9])"]],[,"(800)(\\d{3})(\\d{3})","$1 $2 $3",["800"]],[,"(900)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["900"]],[,"(900)(\\d{2,5})","$1 $2",["900"]]],,[,,"7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
,,,"71123456",,,[8]],,,[,,,,,,,,,[-1]],[,,"30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",,,,"30161234",,,[8]],,,[,,,,,,,,,[-1]]],HN:[,[,,"[237-9]\\d{7}",,,,,,,[8]],[,,"2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|7[013689]|8[0146-9]|9[012])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:16|4[03-5]|5\\d|6[4-6]|74)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}",,,,"22123456"],[,,"[37-9]\\d{7}",,,,"91234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"HN",504,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1-$2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HR:[,[,,"(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",,,,,,,[6,7,8,9]],[,,"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"9(?:01\\d|[1259]\\d{2}|7(?:[0679]\\d|51)|8\\d{1,2})\\d{5}",,,,"921234567",,,[8,9]],[,,"80[01]\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"6(?:[01]\\d{0,2}|[459]\\d{2})\\d{4}",
,,,"611234",,,[6,7,8]],[,,,,,,,,,[-1]],[,,"7[45]\\d{6}",,,,"74123456",,,[8]],[,,,,,,,,,[-1]],"HR",385,"00","0",,,"0",,,,[[,"(1)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"([2-5]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],[,"(9\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(6[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],[,"([67]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],[,"(80[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["80[01]"],"0$1"],[,"(80[01])(\\d{3})(\\d{3})","$1 $2 $3",["80[01]"],
"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:62\\d?|72)\\d{6}",,,,"62123456",,,[8,9]],,,[,,,,,,,,,[-1]]],HT:[,[,,"[2-489]\\d{7}",,,,,,,[8]],[,,"2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,,"22453300"],[,,"[34]\\d{7}",,,,"34101234"],[,,"8\\d{7}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:9(?:[67][0-4]|8[0-3589]|9\\d))\\d{5}",,,,"98901234"],"HT",509,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HU:[,
[,,"[2357]\\d{8}|[1-9]\\d{7}",,,,,,,[8,9],[6]],[,,"(?:1\\d|2[2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|7[2-9]|8[2-57-9]|9[2-69])\\d{6}",,,,"12345678",,,[8],[6]],[,,"(?:[257]0|3[01])\\d{7}",,,,"201234567",,,[9]],[,,"[48]0\\d{6}",,,,"80123456",,,[8]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"21\\d{7}",,,,"211234567",,,[9]],"HU",36,"00","06",,,"06",,,,[[,"(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"($1)"]],,[,,,,,,,,,[-1]],
,,[,,"[48]0\\d{6}",,,,,,,[8]],[,,"38\\d{7}",,,,"381234567",,,[9]],,,[,,,,,,,,,[-1]]],ID:[,[,,"(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"2(?:1(?:14\\d{3}|500\\d{3}|\\d{7,8})|2\\d{6,8}|4\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",
,,,"218350123",,,[7,8,9,10,11],[5,6]],[,,"(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359])|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,10}",,,,"812345678",,,[9,10,11,12]],[,,"177\\d{6,8}|800\\d{5,7}",,,,"8001234567",,,[8,9,10,11]],[,,"809\\d{7}",
,,,"8091234567",,,[10]],[,,"804\\d{7}",,,,"8041234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ID",62,"0(?:0[1789]|10(?:00|1[67]))","0",,,"0",,,,[[,"(\\d{2})(\\d{5,8})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,8})","$1 $2",["2[035-9]|[36][02-9]|[4579]"],"(0$1)"],[,"(8\\d{2})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(8\\d{2})(\\d{4})(\\d{4,5})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(1)(500)(\\d{3})","$1 $2 $3",["150","1500"],"$1"],[,"(177)(\\d{6,8})","$1 $2",["177"],"0$1"],[,
"(800)(\\d{5,7})","$1 $2",["800"],"0$1"],[,"(804)(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(80\\d)(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80[79]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"8071\\d{6}",,,,,,,[10]],[,,"1500\\d{3}|8071\\d{6}",,,,"8071123456",,,[7,10]],,,[,,,,,,,,,[-1]]],IE:[,[,,"[148]\\d{9}|[124-9]\\d{8}|[124-69]\\d{7}|[24-69]\\d{6}",,,,,,,[7,8,9,10],[5,6]],[,,"1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})",
,,,"2212345",,,,[5,6]],[,,"8(?:22\\d{6}|[35-9]\\d{7})",,,,"850123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,,"1520123456",,,[10]],[,,"18[59]0\\d{6}",,,,"1850123456",,,[10]],[,,"700\\d{6}",,,,"700123456",,,[9]],[,,"76\\d{7}",,,,"761234567",,,[9]],"IE",353,"00","0",,,"0",,,,[[,"(1)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],[,"(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["40[24]|50[45]"],"(0$1)"],
[,"(48)(\\d{4})(\\d{4})","$1 $2 $3",["48"],"(0$1)"],[,"(818)(\\d{3})(\\d{3})","$1 $2 $3",["818"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[24-69]|7[14]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["76|8[35-9]"],"0$1"],[,"(8\\d)(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8[35-9]5"],"0$1"],[,"(700)(\\d{3})(\\d{3})","$1 $2 $3",["700"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:5|8[059])","1(?:5|8[059]0)"],"$1"]],,[,,,,,,,,,[-1]],,,[,,"18[59]0\\d{6}",,,,,,,[10]],[,,"818\\d{6}",
,,,"818123456",,,[9]],,,[,,"8[35-9]5\\d{7}",,,,"8551234567",,,[10]]],IL:[,[,,"1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}|[2-689]\\d{3}",,,,,,,[4,7,8,9,10,11,12]],[,,"(?:153\\d{1,2}|[2-489])\\d{7}",,,,"21234567",,,[8,11,12],[7]],[,,"5(?:[0-489][2-9]\\d|5(?:01|2[2-5]|3[23]|4[45]|5[015689]|6[6-8]|7[0-267]|8[7-9]|9[1-9])|6\\d{2})\\d{5}",,,,"502345678",,,[9]],[,,"1(?:80[019]\\d{3}|255)\\d{3}",,,,"1800123456",,,[7,10]],[,,"1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}",,,,"1919123456",,,[8,9,10]],[,,"1700\\d{6}",
,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,"7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6[58]\\d|7\\d{2}|8(?:2\\d|33|55|77|81)|9[2579]\\d)\\d{5}",,,,"771234567",,,[9]],"IL",972,"0(?:0|1[2-9])","0",,,"0",,,,[[,"([2-489])(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],[,"([57]\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],[,"(153)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["153"]],[,"(1)([7-9]\\d{2})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],[,"(1255)(\\d{3})","$1-$2",["125","1255"]],[,"(1200)(\\d{3})(\\d{3})",
"$1-$2-$3",["120","1200"]],[,"(1212)(\\d{2})(\\d{2})","$1-$2-$3",["121","1212"]],[,"(1599)(\\d{6})","$1-$2",["159","1599"]],[,"(151)(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["151"]],[,"(\\d{4})","*$1",["[2-689]"]]],,[,,,,,,,,,[-1]],,,[,,"1700\\d{6}|[2-689]\\d{3}",,,,,,,[4,10]],[,,"[2-689]\\d{3}|1599\\d{6}",,,,"1599123456",,,[4,10]],,,[,,"151\\d{8,9}",,,,"15112340000",,,[11,12]]],IM:[,[,,"(?:1624|(?:[3578]\\d|90)\\d\\d)\\d{6}",,,,,,,[10],[6]],[,,"1624[5-8]\\d{5}",,,,"1624756789",,,,[6]],[,,"7(?:4576|[59]24\\d|624[0-4689])\\d{5}",
,,,"7924123456"],[,,"808162\\d{4}",,,,"8081624567"],[,,"(?:872299|90[0167]624)\\d{4}",,,,"9016247890"],[,,"8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}",,,,"8456247890"],[,,"70\\d{8}",,,,"7012345678"],[,,"56\\d{8}",,,,"5612345678"],"IM",44,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],IN:[,[,,"(?:00800|1\\d{0,5}|[2-9]\\d\\d)\\d{7}",,,,,,,[8,9,10,11,12,13],[6,7]],[,,"(?:11|2[02]|33|4[04]|79|80)[2-7]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}",
,,,"7410410123",,,[10],[6,7,8]],[,,"(?:6(?:0(?:0[0-3569]|26|33)\\d|1279|2(?:[06]\\d|3[02589]|8[0-479]|9[0-6])\\d|3(?:0[0-469]\\d|5(?:0[0-6]|[1-9]\\d)|6[0-49]\\d|7[015-9]\\d|[89]\\d{2})|9(?:0[019]|13)\\d)|7(?:0\\d{3}|19[0-5]\\d|2(?:[0235679]\\d{2}|[14][017-9]\\d|8(?:[0-59]\\d|[678][089]))|3(?:[05-8]\\d{2}|1(?:[089]\\d|11|7[02-8])|2(?:[0-49][089]|[5-8]\\d)|3[017-9]\\d|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d{2}|1(?:[015-9]\\d|[23][089]|4[089])|2(?:0[089]|[1-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|4(?:[089]\\d|11|7[02-8])|[56]\\d[089]|7(?:[089]\\d|11|7[02-8])|8(?:[0-24-7][089]|[389]\\d)|9(?:[0-6][089]|7[089]|[89]\\d))|5(?:[0346-8]\\d{2}|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[123][089])|5[017-9]\\d|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-7][089]|[289]\\d)|[1-9]\\d{2})|8(?:[0-79]\\d{2}|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d{2}|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:[01589]\\d{2}|6[67]\\d|7(?:[02-8]\\d|9[04-9]))|1(?:[0-57-9]\\d{2}|6(?:[089]\\d|7[02-8]))|2(?:0(?:[089]\\d|7[02-8])|[14](?:[089]\\d|7[02-8])|[235-9]\\d{2})|3(?:[0357-9]\\d{2}|1(?:[089]\\d|7[02-8])|2(?:[089]\\d|7[02-8])|4\\d{2}|6(?:[089]\\d|7[02-8]))|[45]\\d{3}|6(?:[02457-9]\\d{2}|1(?:[089]\\d|7[02-8])|3(?:[089]\\d|7[02-8])|6(?:[08]\\d|7[02-8]|9\\d))|7(?:0[07-9]\\d|[1-69]\\d{2}|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d{2}|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-8]))|9(?:[02-9]\\d{2}|1(?:[0289]\\d|7[02-8])))|9\\d{4})\\d{5}",
,,,"8123456789",,,[10]],[,,"00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))",,,,"1800123456"],[,,"186[12]\\d{9}",,,,"1861123456789",,,[13]],[,,"1860\\d{7}",,,,"18603451234",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IN",91,"00","0",,,"0",,,,[[,"(\\d{8})","$1",["561","5616","56161"],"$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["6(?:0[023]|12|2[03689]|3[05-9]|9[019])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9","6(?:0(?:0|26|33)|127|2(?:[06]|3[02589]|8[0-379]|9[0-46])|3(?:0[0-469]|5[0-46-9]|6[0-49]|7[015-9]|[89])|9[019])|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9",
"6(?:0(?:0|26|33)|1279|2(?:[06]|3[02589]|8[0-379]|9[0-46])|3(?:0[0-469]|5[0-46-9]|6[0-49]|7[015-9]|[89])|9[019])|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[02-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[04-9]))|1(?:[0-57-9]|6(?:[089]|7[02-8]))|2(?:[014](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|[126](?:[089]|7[02-8]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-8]))|9(?:[02-9]|1(?:[0289]|7[02-8])))|9"],
"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-9]|80[2-46]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"],
"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[23579]|[468][1-9])|[2-8]"],"0$1",,1],[,"(\\d{2})(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3 $4",["008"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],"$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["160","1600"],"$1",,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],"$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["180","1800"],"$1",,1],[,"(\\d{4})(\\d{3,4})(\\d{4})","$1 $2 $3",["186","1860"],"$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
"$1 $2 $3 $4",["18[06]"],"$1",,1]],,[,,,,,,,,,[-1]],,,[,,"00800\\d{7}|1(?:600\\d{6}|8(?:0(?:0\\d{4,9}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))"],[,,"140\\d{7}",,,,"1409305260",,,[10]],,,[,,,,,,,,,[-1]]],IO:[,[,,"3\\d{6}",,,,,,,[7]],[,,"37\\d{5}",,,,"3709100"],[,,"38\\d{5}",,,,"3801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IO",246,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IQ:[,[,,"(?:1|[2-6]\\d?|7\\d\\d)\\d{7}",
,,,,,,[8,9,10],[6,7]],[,,"1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"7[3-9]\\d{8}",,,,"7912345678",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IQ",964,"00","0",,,"0",,,,[[,"(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"([2-6]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IR:[,
[,,"[1-9]\\d{9}|[1-8]\\d{5,6}",,,,,,,[6,7,10],[4,5,8]],[,,"(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:\\d{8}|(?:[16]|[289]\\d?)\\d{3}))|94(?:000|11[0-7]|2\\d{2}|30[01]|4(?:11|40))\\d{5}",,,,"2123456789",,,,[4,5,8]],[,,"9(?:0(?:[1-35]\\d{2}|44\\d)|[13]\\d{3}|2[0-2]\\d{2}|9(?:[01]\\d{2}|44\\d|8(?:10|88)|9(?:0[013]|1[134]|21|9[89])))\\d{5}",,,,"9123456789",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"993\\d{7}",,,,"9932123456",,,[10]],"IR",98,
"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"],[,"(\\d{2})(\\d{4,5})","$1 $2",["[1-8]"],"0$1"],[,"(\\d{4,5})","$1",["96"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"(?:9411[1-7]|94440)\\d{5}",,,,,,,[10]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IS:[,[,,"(?:38\\d|[4-9])\\d{6}",,,,,,,[7,9]],[,,"(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}",
,,,"4101234",,,[7]],[,,"38[589]\\d{6}|(?:6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}",,,,"6111234"],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"90\\d{5}",,,,"9011234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"49\\d{5}",,,,"4921234",,,[7]],"IS",354,"1(?:0(?:01|10|20)|100)|00",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],[,"(3\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
[,,"809\\d{4}",,,,"8091234",,,[7]],,,[,,"(?:689|8(?:7[0189]|80)|95[48])\\d{4}",,,,"6891234",,,[7]]],IT:[,[,,"0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?",,,,,,,[6,7,8,9,10,11]],[,,"0(?:2\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])\\d|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)\\d|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])\\d|6(?:[0-57-9]\\d{2}|6(?:[0-8]\\d|9[0-79]))|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])\\d|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])\\d|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6])\\d)\\d{1,6})",
,,,"0212345678"],[,,"3(?:1\\d{8}|[245-9]\\d{7,8}|3\\d{7,9})",,,,"3123456789",,,[9,10,11]],[,,"80(?:0\\d{6}|3\\d{3})",,,,"800123456",,,[6,9]],[,,"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{6}|[17]\\d{3})",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"IT",39,"00",,,,,,,,[[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|55"]],
[,"(0[26])(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(0[26])(\\d{4,6})","$1 $2",["0[26]"]],[,"(0\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],[,"(0\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],[,"(0\\d{3})(\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],
[,"(\\d{4})(\\d{4})","$1 $2",["894","894[5-9]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3"]]],,[,,,,,,,,,[-1]],1,,[,,"848\\d{6}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],JE:[,[,,"(?:1534|(?:[3578]\\d|90)\\d\\d)\\d{6}",,,,,,,[10],[6]],[,,"1534[0-24-8]\\d{5}",,,,"1534456789",,,,[6]],[,,"7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}",,,,"7797712345"],[,,"80(?:07(?:35|81)|8901)\\d{4}",,,,"8007354567"],[,,"(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}",,,,"9018105678"],[,,"8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}",
,,,"8447034567"],[,,"701511\\d{4}",,,,"7015115678"],[,,"56\\d{8}",,,,"5612345678"],"JE",44,"00","0",,,"0",,,,,,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456"],,,[,,,,,,,,,[-1]],[,,"3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],JM:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}",
,,,"8765230123",,,,[7]],[,,"876(?:2[14-9]\\d|[348]\\d{2}|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}",,,,"8762101234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"JM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"876",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],JO:[,[,,"(?:(?:(?:[268]|7\\d)\\d|32|53)\\d|900)\\d{5}",
,,,,,,[8,9]],[,,"(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|3(?:00|33)|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|90))\\d{4}",,,,"62001234",,,[8]],[,,
"7(?:55[0-49]|7[025-9]\\d|8[0-25-9]\\d|9[0-25-9]\\d)\\d{5}",,,,"790123456",,,[9]],[,,"80\\d{6}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,"85\\d{6}",,,,"85012345",,,[8]],[,,"70\\d{7}",,,,"700123456",,,[9]],[,,,,,,,,,[-1]],"JO",962,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],[,"(7)(\\d{4})(\\d{4})","$1 $2 $3",["7[457-9]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["8[0158]|9"],"0$1"]],,[,,"74(?:66|77)\\d{5}",
,,,"746612345",,,[9]],,,[,,,,,,,,,[-1]],[,,"8(?:10|8\\d)\\d{5}",,,,"88101234",,,[8]],,,[,,,,,,,,,[-1]]],JP:[,[,,"00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",,,,,,,[8,9,10,11,12,13,14,15,16,17]],[,,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}",,,,"312345678",,,[9]],[,,"[7-9]0[1-9]\\d{7}",
,,,"9012345678",,,[10]],[,,"120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})",,,,"120123456"],[,,"990\\d{6}",,,,"990123456",,,[9]],[,,,,,,,,,[-1]],[,,"60\\d{7}",,,,"601234567",,,[9]],[,,"50[1-9]\\d{7}",,,,"5012345678",,,[10]],"JP",81,"010","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{4})(\\d{4})","$1-$2",["007","0077"],"$1"],[,"(\\d{4})(\\d{2})(\\d{3,4})",
"$1-$2-$3",["007","0077"],"$1"],[,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["008","0088"],"$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1-$2-$3",["00[36]","00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",["00[36]","00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["00[36]","00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",["00[36]","00(?:37|66)"],"$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])",
"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],
"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})",
"$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"],"0$1"]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])",
"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],
"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})",
"$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"],"0$1"]],[,,"20\\d{8}",,,,"2012345678",,,[10]],,,[,,"00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})"],[,,"570\\d{6}",,,,"570123456",,,[9]],,,[,,,,,,,,,[-1]]],KE:[,[,,"(?:(?:2|80)0\\d?|[4-7]\\d\\d|900)\\d{6}|[4-6]\\d{6,7}",,,,,,,[7,8,9,10]],[,,"20\\d{6,7}|4(?:0\\d{6,7}|[136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|2\\d{7}|6\\d{6,7})",
,,,"202012345",,,[7,8,9]],[,,"7\\d{8}",,,,"712123456",,,[9]],[,,"800[24-8]\\d{5,6}",,,,"800223456",,,[9,10]],[,,"900[02-9]\\d{5}",,,,"900223456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KE",254,"000","0",,,"005|0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KG:[,[,,"(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}",,,
,,,,[9,10],[5,6]],[,,"(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,,"312123456",,,[9],[5,6]],[,,"(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[69])\\d{6}",,,,"700123456",,,[9]],[,,"800\\d{6,7}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KG",996,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",
["[25-79]|31[25]"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["3(?:1[36]|[2-9])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d)(\\d{3})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KH:[,[,,"1\\d{9}|[1-9]\\d{7,8}",,,,,,,[8,9,10],[6,7]],[,,"(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}",,,,"23756789",,,[8,9],[6,7]],[,,"(?:1(?:[013-79]\\d|[28]\\d{1,2})|2[3-6]48|3(?:[18]\\d{2}|[2-6]48)|4[2-4]48|5[2-5]48|6(?:[016-9]\\d|[2-5]48)|7(?:[07-9]\\d|[16]\\d{2}|[2-5]48)|8(?:[013-79]\\d|8\\d{2})|9(?:6\\d{2}|7\\d{1,2}|[0-589]\\d))\\d{5}",
,,,"91234567",,,[8,9]],[,,"1800(?:1\\d|2[019])\\d{4}",,,,"1800123456",,,[10]],[,,"1900(?:1\\d|2[09])\\d{4}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KH",855,"00[14-9]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["1\\d[1-9]|[2-9]"],"0$1"],[,"(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[89]0","1[89]00"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KI:[,[,,"(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",,,,,,,[5,8]],[,,"(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}|(?:65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d{2}|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500)))\\d{3}",
,,,"31234"],[,,"(?:6(?:200[01]|30[01]\\d)|7(?:200[01]|3(?:0[0-5]\\d|140)))\\d{3}",,,,"72001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"30(?:0[01]\\d{2}|12(?:11|20))\\d{2}",,,,"30010000",,,[8]],"KI",686,"00",,,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KM:[,[,,"[3478]\\d{6}",,,,,,,[7]],[,,"7[4-7]\\d{5}",,,,"7712345"],[,,"[34]\\d{6}",,,,"3212345"],[,,,,,,,,,[-1]],[,,"8\\d{6}",,,,"8001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,
,,,,[-1]],"KM",269,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KN:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",,,,"8692361234",,,,[7]],[,,"869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",,,,"8697652917",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
,,,"5002345678"],[,,,,,,,,,[-1]],"KN",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"869",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KP:[,[,,"(?:(?:19\\d|2)\\d|85)\\d{6}",,,,,,,[8,10],[6,7]],[,,"2\\d{7}|85\\d{6}",,,,"21234567",,,[8],[6,7]],[,,"19[123]\\d{7}",,,,"1921234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KP",850,"00|99","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,
"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KR:[,[,,"(?:00[1-9]\\d{2,4}|[12]|5\\d{3})\\d{7}|(?:(?:00|[13-6])\\d|70)\\d{8}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}",,,,,,,[5,6,8,9,10,11,12,13,14],[3,7]],[,,"2[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})",,,,"22123456",,,[5,6,8,9,10],[3,7]],[,,"1[0-26-9]\\d{7,8}",,,,"1000000000",,,[9,10]],[,,"(?:00(?:3(?:08|68\\d)|798\\d{1,3})|80\\d)\\d{6}",
,,,"801234567",,,[9,11,12,13,14]],[,,"60[2-9]\\d{6}",,,,"602345678",,,[9]],[,,,,,,,,,[-1]],[,,"50\\d{8,9}",,,,"5012345678",,,[10,11]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"KR",82,"00(?:[1259]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","0",,,"0(8[1-46-8]|85\\d{2})?",,,,[[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[046-8]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"],"$1","0$CC-$1"],
[,"(\\d{5})","$1",["1[016-9]1","1[016-9]11","1[016-9]114"],"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2[1-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60[2-9]|80"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]0"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["50"],"0$1","0$CC-$1"],[,"(\\d{5})(\\d{3})(\\d{3})","$1 $2 $3",["003","0030",
"00308"],"$1","0$CC-$1"],[,"(\\d{5})(\\d{3,4})(\\d{4})","$1 $2 $3",["00[37]","00(?:36|79)","00(?:36|79)8"],"$1","0$CC-$1"],[,"(\\d{5})(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["007","0079","00798"],"$1","0$CC-$1"]],[[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[046-8]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"],"$1","0$CC-$1"],[,"(\\d{5})","$1",["1[016-9]1","1[016-9]11","1[016-9]114"],
"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2[1-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60[2-9]|80"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]0"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["50"],"0$1","0$CC-$1"]],[,,"15\\d{7,8}",,,,"1523456789",,,[9,10]],,,[,,"00(?:3(?:08|68\\d)|798\\d{1,3})\\d{6}",,,,,,,[11,12,13,14]],
[,,"1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))\\d{4}",,,,"15441234",,,[8]],,,[,,,,,,,,,[-1]]],KW:[,[,,"(?:18|[2569]\\d\\d)\\d{5}",,,,,,,[7,8]],[,,"(?:2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}",,,,"22345678",,,[8]],[,,"(?:5(?:[05]\\d{2}|1[0-7]\\d|2(?:22|5[25])|6[56]\\d)|6(?:0[034679]\\d|222|5[015-9]\\d|6\\d{2}|7(?:0[013-9]|[67]\\d)|9(?:[069]\\d|3[039]))|9(?:0[09]\\d|11[01]|22\\d|4[01479]\\d|55\\d|6[0679]\\d|7(?:02|[1-9]\\d)|8[057-9]\\d|9\\d{2}))\\d{4}",
,,,"50012345",,,[8]],[,,"18\\d{5}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KW",965,"00",,,,,,,,[[,"(\\d{4})(\\d{3,4})","$1 $2",["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[0-24-9]"]],[,"(\\d{3})(\\d{5})","$1 $2",["244|5(?:[015]|6[56])"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KY:[,[,,"(?:345|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",
,,,"3452221234",,,,[7]],[,,"345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}",,,,"3453231234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}|345976\\d{4}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"KY",1,"011","1",,,"1",,,,,,[,,"345849\\d{4}",,,,"3458491234"],,"345",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KZ:[,[,,"(?:33622|(?:7\\d|80)\\d{3})\\d{5}",
,,,,,,[10]],[,,"33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}",,,,"7123456789"],
[,,"7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}",,,,"7710009998"],[,,"800\\d{7}",,,,"8001234567"],[,,"809\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567"],[,,"751\\d{7}",,,,"7511234567"],"KZ",7,"810","8",,,"8",,"8~10",,,,[,,,,,,,,,[-1]],,,[,,"751\\d{7}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LA:[,[,,"(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}",,,,,,,[8,9,10],[6]],[,,"(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}",,,,"21212862",,,[8,9],[6]],[,,"20(?:2[2389]|5[24-689]|7[6-8]|9[1-35-9])\\d{6}",
,,,"2023123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LA",856,"00","0",,,"0",,,,[[,"(20)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["20"],"0$1"],[,"([2-8]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],[,"(30)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LB:[,[,,"[7-9]\\d{7}|[13-9]\\d{6}",,,,,,,[7,8]],[,,"(?:[14-6]\\d{2}|7(?:[2-57]\\d|62|8[0-7]|9[04-9])|8[02-9]\\d|9\\d{2})\\d{4}",
,,,"1123456",,,[7]],[,,"(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3])|81\\d)\\d{5}",,,,"71123456"],[,,,,,,,,,[-1]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,"80\\d{6}",,,,"80123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LB",961,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],[,"([7-9]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LC:[,
[,,"(?:[58]\\d\\d|758|900)\\d{7}",,,,,,,[10],[7]],[,,"758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}",,,,"7584305678",,,,[7]],[,,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}",,,,"7582845678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"LC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"758",[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LI:[,[,,"(?:(?:[2378]|6\\d\\d)\\d|90)\\d{5}",,,,,,,[7,9]],[,,"(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}",,,,"2345678",,,[7]],[,,"6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d{5}|7(?:[37-9]\\d|42|56)\\d{4}",,,,"660234567"],[,,"80(?:02[28]|9\\d{2})\\d{2}",,,,"8002222",,,[7]],[,,"90(?:02[258]|1(?:23|3[14])|66[136])\\d{2}",,,,"9002222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LI",423,"00","0",,,"0|10(?:01|20|66)",,,,[[,
"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[237-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[56]"]],[,"(69)(7\\d{2})(\\d{4})","$1 $2 $3",["697"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"870(?:28|87)\\d{2}",,,,"8702812",,,[7]],,,[,,"697(?:42|56|[78]\\d)\\d{4}",,,,"697861234",,,[9]]],LK:[,[,,"(?:[1-7]\\d|[89]1)\\d{7}",,,,,,,[9],[7]],[,,"1(?:1[2-57]\\d{6}|973\\d{5})|(?:2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7]|[89]1)[2-57]\\d{6}",,,,"112345678",,,,[7]],[,,"7[0125-8]\\d{7}",,,,"712345678"],[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LK",94,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LR:[,[,,"(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[45])\\d{6}",,,,,,,[7,8,9]],[,,"(?:2\\d{3}|33333)\\d{4}",,,,"21234567",,,[8,9]],[,,"(?:20\\d{2}|330\\d|4[67]|5(?:55)?\\d|77\\d{2}|88\\d{2})\\d{5}",,,,"770123456",,,[7,9]],[,,,,,,,,,[-1]],
[,,"332(?:02|[2-5]\\d)\\d{4}",,,,"332021234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LR",231,"00","0",,,"0",,,,[[,"(2\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"([4-5])(\\d{3})(\\d{3})","$1 $2 $3",["[45]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LS:[,[,,"(?:[256]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"2\\d{7}",,,,"22123456"],[,,"[56]\\d{7}",,,,"50123456"],[,,"800[256]\\d{4}",,,,"80021234"],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LS",266,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LT:[,[,,"(?:[3469]\\d|52|[78]0)\\d{6}",,,,,,,[8]],[,,"(?:3[1478]|4[124-6]|52)\\d{6}",,,,"31234567"],[,,"6\\d{7}",,,,"61234567"],[,,"800\\d{5}",,,,"80012345"],[,,"9(?:0[0239]|10)\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,,,,[-1]],"LT",370,"00","8",,,"[08]",,,,[[,"([34]\\d)(\\d{6})",
"$1 $2",["37|4(?:1|5[45]|6[2-4])"],"(8-$1)",,1],[,"([3-6]\\d{2})(\\d{5})","$1 $2",["3[148]|4(?:[24]|6[09])|528|6"],"(8-$1)",,1],[,"([7-9]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",,1],[,"(5)(2\\d{2})(\\d{4})","$1 $2 $3",["52[0-79]"],"(8-$1)",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70[67]\\d{5}",,,,"70712345"],,,[,,,,,,,,,[-1]]],LU:[,[,,"[2457-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5(?:[013-9]\\d{1,8}|2\\d{1,3}))|6\\d{8}",,,,,,,[4,5,6,7,8,9,10,11]],[,,"2[2-9]\\d{2,9}|(?:3(?:[0-46-9]\\d|5[013-9])|[457]\\d{2}|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8}",
,,,"27123456"],[,,"6(?:[269][18]|5[158]|7[189]|81)\\d{6}",,,,"628123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90[015]\\d{5}",,,,"90012345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,,,,,,,,[-1]],[,,"20(?:1\\d{5}|[2-689]\\d{1,7})",,,,"20201234",,,[4,5,6,7,8,9,10]],"LU",352,"00",,,,"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)",,,,[[,"(\\d{2})(\\d{3})","$1 $2",["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"],
,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})","$1 $2 $3 $4",["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"],,"$CC $1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",
["70|80[01]|90[015]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LV:[,[,,"(?:[268]\\d|90)\\d{6}",,,,,,,[8]],[,,"6\\d{7}",,,,"63123456"],[,,"2\\d{7}",,,,"21234567"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,"81\\d{6}",,,,"81123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LV",371,"00",,,,,,,,[[,"([2689]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,
,[-1]],,,[,,,,,,,,,[-1]]],LY:[,[,,"(?:[2569]\\d|71)\\d{7}",,,,,,,[9],[7]],[,,"(?:2[1345]|5[1347]|6[123479]|71)\\d{7}",,,,"212345678",,,,[7]],[,,"9[1-6]\\d{7}",,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LY",218,"00","0",,,"0",,,,[[,"([25-79]\\d)(\\d{7})","$1-$2",["[25-79]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MA:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}",
,,,"520123456"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5924[01]\\d{4}",,,,"592401234"],"MA",212,"00","0",,,"0",,,,[[,"([5-7]\\d{2})(\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"],"0$1"],[,"([58]\\d{3})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"],"0$1"],[,"(5\\d{4})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"],
"0$1"],[,"([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"],"0$1"],[,"(8[09])(\\d{7})","$1-$2",["8(?:0|9[013-9])"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MC:[,[,,"(?:(?:[349]|6\\d)\\d\\d|870)\\d{5}",,,,,,,[8,9]],[,,"870\\d{5}|9[2-47-9]\\d{6}",,,,"99123456",,,[8]],[,,"3\\d{7}|4(?:4\\d|5[1-9])\\d{5}|6\\d{8}",,,,"612345678"],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MC",377,"00","0",
,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"],"$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["8"],"$1"]],,[,,,,,,,,,[-1]],,,[,,"870\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MD:[,[,,"(?:[235-7]\\d|[89]0)\\d{6}",,,,,,,[8]],[,,"(?:2[1-9]\\d|3[1-79]\\d|5(?:33|5[257]))\\d{5}",,,,"22212345"],[,,"(?:562|6\\d{2}|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}",
,,,"62112345"],[,,"800\\d{5}",,,,"80012345"],[,,"90[056]\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,,,,,,,,[-1]],[,,"3[08]\\d{6}",,,,"30123456"],"MD",373,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],[,"([25-7]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["2[13-9]|[5-7]"],"0$1"],[,"([89]\\d{2})(\\d{5})","$1 $2",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"803\\d{5}",,,,"80312345"],,,[,,,,,,,,,[-1]]],ME:[,[,,"(?:20|[3-79]\\d|80\\d?)\\d{6}",,,,,,,[8,9],[6]],
[,,"(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}",,,,"30234567",,,[8],[6]],[,,"6(?:00\\d|3[024]\\d|6[0-25]\\d|[7-9]\\d{2})\\d{4}",,,,"67622901",,,[8]],[,,"80(?:[0-2578]|9\\d)\\d{5}",,,,"80080002"],[,,"(?:9(?:4[1568]|5[178]))\\d{5}",,,,"94515151",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"78[1-49]\\d{5}",,,,"78108780",,,[8]],"ME",382,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57-9]|6[036-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
[,,"77[1-9]\\d{5}",,,,"77273012",,,[8]],,,[,,,,,,,,,[-1]]],MF:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MF",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MG:[,[,,"[23]\\d{8}",,,,,,,[9],[7]],[,,"20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}",
,,,"202123456",,,,[7]],[,,"3[2-49]\\d{7}",,,,"321234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"22\\d{7}",,,,"221234567"],"MG",261,"00","0",,,"0",,,,[[,"([23]\\d)(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MH:[,[,,"(?:(?:[256]\\d|45)\\d|329)\\d{4}",,,,,,,[7]],[,,"(?:247|528|625)\\d{4}",,,,"2471234"],[,,"(?:235|329|45[56]|545)\\d{4}",,,,"2351234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,
,,,[-1]],[,,,,,,,,,[-1]],[,,"635\\d{4}",,,,"6351234"],"MH",692,"011","1",,,"1",,,,[[,"(\\d{3})(\\d{4})","$1-$2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MK:[,[,,"[2-578]\\d{7}",,,,,,,[8],[6,7]],[,,"(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}",,,,"22012345",,,,[6,7]],[,,"7(?:[0-25-8]\\d{2}|3[2-4]\\d|421|9[23]\\d)\\d{4}",,,,"72345678"],[,,"800\\d{5}",,,,"80012345"],[,,"5[02-9]\\d{6}",
,,,"50012345"],[,,"8(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"80123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MK",389,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"([347]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],[,"([58]\\d{2})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ML:[,[,,"(?:[246-9]\\d|50)\\d{6}",,,,,,,[8]],[,,"(?:2(?:0(?:2\\d|7[0-8])|1(?:2[67]|[4-689]\\d))|4(?:0[0-4]|4[1-39])\\d)\\d{4}",,,,"20212345"],
[,,"(?:2(?:079|17\\d)|50\\d{2}|[679]\\d{3}|8[239]\\d{2})\\d{4}",,,,"65012345"],[,,"80\\d{6}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ML",223,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]],[,"(\\d{4})","$1",["67|74"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[,,,,,,,,,[-1]],,,[,,"80\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MM:[,[,,"(?:1|[24-7]\\d)\\d{5,7}|8\\d{6,9}|9(?:[0-46-9]\\d{6,8}|5\\d{6})|2\\d{5}",
,,,,,,[6,7,8,9,10],[5]],[,,"1(?:2\\d{1,2}|[35]\\d|4(?:\\d|2[2-469]|39|6[25]|70)|6\\d?|[89][0-6]\\d)\\d{4}|2(?:2(?:000\\d{3}|\\d{4})|3\\d{4}|4(?:0\\d{5}|2[246]\\d{4}|39\\d{4}|62\\d{4}|70\\d{4}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5})|[6-9]\\d{4})|4(?:2(?:[25-8]|4(?:80)?)|3(?:2(?:02)?|[36]|4(?:70)?|56?)|[46][2-6]|5(?:[35]|4(?:70)?))\\d{4}|5(?:2(?:2(?:\\d{1,2})?|[35-8]|4(?:70)?)|3[2-68]|4(?:21?|4(?:70)?|[5-8])|5[23]|6[2-4]|7(?:[235-8]|4(?:80)?)|8(?:[25-7]|4(?:70)?)|9(?:[235-7]|4(?:70)?))\\d{4}|6(?:0[23]|1(?:2(?:0|4\\d)?|[356])|2[2-6]|3(?:[25-6]|4(?:70)?)|4(?:2(?:4\\d)?|[3-6])|5[2-4]|6[2-8]|7(?:[2367]|4(?:\\d|39|[67]0)|5\\d?|8[145]\\d)|8[245]|9(?:20?|4))\\d{4}|7(?:[04](?:[25-8]|4(?:70)?)|1(?:20?|[35-7]|4(?:70)?)|22|3[2-4]|5(?:[235-7]|4(?:70)?))\\d{4}|8(?:1(?:2\\d{1,2}|[35689]\\d|4(?:70)?\\d)|2(?:2\\d|3(?:\\d|20)|[4-8]\\d)|3(?:2|4(?:70)?)\\d|4[24-7]\\d|5[245]\\d|6[23]\\d)\\d{3}",
,,,"1234567",,,[6,7,8,9],[5]],[,,"17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2}|6[0-5]\\d)|3(?:[0-36]|4[069])\\d|4(?:0[0-4]\\d|[1379]\\d|2\\d{2}|4[0-589]\\d|5\\d{2}|88)|5[0-6]|6(?:1\\d|9\\d{2}|\\d)|7(?:3|5[0-2]|[6-9]\\d)\\d|8(?:\\d|9\\d{2})|9(?:1\\d|[5-7]\\d{2}|[089]))\\d{5}",,,,"92123456",,,[7,8,9,10]],[,,"80080[01][1-9]\\d{3}",,,,"8008001234",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:1(?:333|468)|2468)\\d{4}",,,,"13331234",,,[8]],"MM",95,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})",
"$1 $2 $3",["1|2[245]"],"0$1"],[,"(2)(\\d{4})(\\d{4})","$1 $2 $3",["251"],"0$1"],[,"(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[4-8]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-8]"],"0$1"],[,"(9)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],[,"(9)([34]\\d{4})(\\d{4})","$1 $2 $3",["9(?:3[0-36]|4[0-57-9])"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92[56]"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",
["93"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MN:[,[,,"[12]\\d{8,9}|[1257-9]\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}",,,,"50123456",,,,[6,7]],[,,"(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}",,,,"88123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"7[05-8]\\d{6}",,,,"75123456",,,[8]],"MN",976,"001","0",,,"0",,,,[[,"([12]\\d)(\\d{2})(\\d{4})",
"$1 $2 $3",["[12]1"],"0$1"],[,"([12]2\\d)(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],[,"([12]\\d{3})(\\d{5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)2"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[57-9]"],"$1"],[,"([12]\\d{4})(\\d{4,5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)[4-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MO:[,[,,"(?:28|[68]\\d)\\d{6}",,,,,,,[8]],[,,"(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}",,,,"28212345"],[,,"6(?:[2356]\\d{2}|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}",
,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MO",853,"00",,,,,,,,[[,"([268]\\d{3})(\\d{4})","$1 $2",["[268]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MP:[,[,,"(?:[58]\\d\\d|(?:67|90)0)\\d{7}",,,,,,,[10],[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
,,,"6702345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"MP",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"670",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MQ:[,[,,"(?:596|69\\d)\\d{6}",,,,,,,[9]],[,,"596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}",,,,"596301234"],[,,"69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}",
,,,"696201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MQ",596,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MR:[,[,,"(?:[2-4]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}",,,,"35123456"],[,,"[234][0-46-9]\\d{6}",,,,"22123456"],[,,"800\\d{5}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MR",222,"00",
,,,,,,,[[,"([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MS:[,[,,"(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}",,,,,,,[10],[7]],[,,"664491\\d{4}",,,,"6644912345",,,,[7]],[,,"66449[2-6]\\d{4}",,,,"6644923456",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"MS",1,"011",
"1",,,"1",,,,,,[,,,,,,,,,[-1]],,"664",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MT:[,[,,"(?:(?:[2579]\\d\\d|800)\\d|3550)\\d{4}",,,,,,,[8]],[,,"2(?:0(?:[169]\\d|3[1-4])|[1-357]\\d{2})\\d{4}",,,,"21001234"],[,,"(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}",,,,"96961234"],[,,"800[3467]\\d{4}",,,,"80071234"],[,,"5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168]\\d)|[12]\\d0[1-5])\\d{3}",,,,"50037123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3550\\d{4}",,,,"35501234"],
"MT",356,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,"7117\\d{4}",,,,"71171234"],,,[,,,,,,,,,[-1]],[,,"501\\d{5}",,,,"50112345"],,,[,,,,,,,,,[-1]]],MU:[,[,,"(?:[2-468]|5\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:2(?:[03478]\\d|1[0-7]|6[1-79])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}",,,,"54480123"],[,,"5(?:2[589]\\d|4(?:2[1-389]|[489]\\d|7[1-9])|7\\d{2}|8(?:[0-689]\\d|7[15-8])|9[0-8]\\d)\\d{4}",,,,"52512345",,,[8]],[,,"80[012]\\d{4}",,,,"8001234",,,[7]],[,,"30\\d{5}",,,,"3012345",
,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3(?:20|9\\d)\\d{4}",,,,"3201234",,,[7]],"MU",230,"0(?:0|[2-7]0|33)",,,,,,"020",,[[,"([2-46-9]\\d{2})(\\d{4})","$1 $2",["[2-46-9]"]],[,"(5\\d{3})(\\d{4})","$1 $2",["5"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MV:[,[,,"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",,,,,,,[7,10]],[,,"(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024568]|8[024689]))\\d{4}",,,,"6701234",,,[7]],[,,"(?:46[46]|7[2-9]\\d|9[14-9]\\d)\\d{4}",,,,"7712345",,,[7]],
[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MV",960,"0(?:0|19)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1-$2",["[3467]|9(?:0[1-9]|[1-9])"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]00"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"4[05]0\\d{4}",,,,"4001234",,,[7]],,,[,,,,,,,,,[-1]]],MW:[,[,,"1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",,,,,,,[7,9]],[,,"(?:1[2-9]|21\\d{2})\\d{5}",,,,"1234567"],[,,"(?:111|77\\d|88\\d|99\\d)\\d{6}",
,,,"991234567",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"31\\d{7}",,,,"310123456",,,[9]],"MW",265,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[17-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["31"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MX:[,[,,"(?:1\\d|[2-9])\\d{9}",,,,,,,[10,11],[7,8]],[,
,"(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-9]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,,"2221234567",,,[10],[7,8]],[,,"1(?:(?:33|55|81)\\d{8}|(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-9]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})",
,,,"12221234567",,,[11]],[,,"8(?:00|88)\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"300\\d{7}",,,,"3001234567",,,[10]],[,,"500\\d{7}",,,,"5001234567",,,[10]],[,,,,,,,,,[-1]],"MX",52,"0[09]","01",,,"0[12]|04[45](\\d{10})","1$1",,,[[,"([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"],"01 $1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"],"01 $1",,1],[,"(1)([358]\\d)(\\d{4})(\\d{4})","044 $2 $3 $4",["1(?:33|55|81)"],"$1",,1],
[,"(1)(\\d{3})(\\d{3})(\\d{4})","044 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"],"$1",,1]],[[,"([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"],"01 $1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"],"01 $1",,1],[,"(1)([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3 $4",["1(?:33|55|81)"]],[,"(1)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,
,,,,,[-1]]],MY:[,[,,"(?:1\\d\\d?|3\\d|[4-9])\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"(?:3(?:2(?:0(?:11|2[0-8]|3[0-24-79]|[579]\\d|8[0-57-9])|1(?:0[6-9]|1[03-9]|[467]\\d|8[0-2]|9[13])|2(?:0[1-3]|2[2-4]|4[0-25-7]|6[0-8]|7[02-689]|8\\d|9[5-9])|3(?:0[0-3]|3[0-36]|8[0-35-9]|9[1-3])|6(?:0[0-5]|[139]\\d|8[15-8])|7(?:1\\d|2[0-7]|3[0-3]|42|7[0-3568]|8[0-35-8])|8(?:00|4[78]|5[6-9])|93[58])|3(?:0(?:0[0-35-9]|10|5[01]|8[0-6]|9[39])|1(?:0[1-39]|10|2[02-469]|3[245]|4[0-3589]|6[0-35-9]|7[067]|8[0-57]|9[0-278])|2(?:1[3467]|2[45]|4[1-3]|5[0689]|6[04589]|7[0-3579]|8[0-489]|9[0-27])|3(?:1[7-9]|2[1-6]|4[1-689]|5[89]|6[1-3]|7\\d|8[125]|9[236])|6(?:[12]0|3[01]|5[0-256]|6[08]|8[45]))|4(?:0(?:09|[14]\\d|2[0-8]|3[12]|5[01]|65)|1(?:0[0-8]|31|4\\d|6[12])|2(?:17|5[0-35-9]|6[024-6]|7[0189]|8[057-9]|9\\d)|770|8(?:0[0-2]|1[0-3569]|2[01]))|5(?:0(?:2[0-2]|3[0-35-9])|1(?:0[1-3]|1[05]|2[0-6]|31|6[1-7]|9[1258])|270|48[0-5]|5(?:1\\d|2[0-6]|4[0-589]|6[125-9]|9[01])|6(?:1[1-4]|2[0-589]|3\\d|5[0-3])|7(?:21|40)|8(?:7[06-9]|8[025-9]|9[12]))|6(?:0(?:2[0-28]|3[24-9]|4[246-9]|5[57]|6[13-6]|7[358]|8[1247]|9[0-59])|1(?:[04][0-58]|15|2[02-8]|3[015-9]|5[016-8]|7[7-9]|8[14-9]|9[1-356])|2(?:[05]\\d|11|[46][1-3]|7[02-79]|8[015-7])|303|4(?:1[129]|2[01]|3[36]|6[0-2])|690|7(?:3\\d|89))|7(?:118|2(?:0[02]|6[01])|4(?:[59]\\d|8[01])|6(?:1[01]|2\\d|5[0-2]|6[0-69])|7(?:1[0-37-9]|[28]\\d|3[1-5]|7[0-3])|8(?:[04]\\d|3[129]|59|6[1-356]|7[02-79]|8[02-7]|90)|9(?:10|3[1-3]|4[016-9]|[56]\\d|7[12]|8\\d))|8(?:0(?:0[08]|11|2[0-7]|5[12]|6\\d|7[013-69]|8[0-24]|9[0-5])|100|21[0-36]|3(?:08|1\\d|2[0-589]|31)|408|5(?:2[0-35-79]|88)|6(?:0[0-259]|5[5-79]|6[01]|8[46-9]|9[019])|7(?:0[35-8]|2[3-7]|3\\d|4[0149]|5[0-2]|6[016-9]|7[5-9]|8[037]|90)|8(?:00|61|7[0-3]|8\\d|9[0-4])|9(?:1[1-3]|[2-5]\\d|6[1-4689]|8[89]|9[0-689]))|9(?:0(?:1[0-289]|2[15]|5[014-9]|7[04-68]|8[0-256])|1(?:0[0-3568]|3[0-49]|4[015]|7[0-59]|9[15])|2(?:0[0-25-7]|12|2[1-6]|3[1256]|7[14]|8\\d)|3[68]8|41[01]|5(?:14|2[01]|4[03-9]|6[5-79]|7[0-2569])))\\d|4(?:2(?:0[01]|1[07-9]|2[02-46-9]|38|4[0-28]|5[0-589]|6[0-47-9]|8[0-389]|9[0-38])\\d|3(?:0[5-9]|[12][034]|3[0-37]|47|5[168]|6[7-9]|7[0135-8]|8\\d|9[0-27-9])\\d|4(?:[02-9]\\d{2}|1(?:[02-9]\\d|10))|5(?:[07]\\d{2}|1[0-358]\\d|2[1246]\\d|3[06-9]\\d|4[0589]\\d|5[12457-9]\\d|6[0-689]\\d|8(?:[0-57-9]\\d|60)|9(?:[2-57-9]\\d|60))|6(?:0[79]|1[0-689]|2[0135-9]|[3-5]\\d|6[07-9]|7[23]|8[03-9]|99)\\d|7(?:0[0-59]\\d|1[04679]\\d|2(?:[02-9]\\d|10)|[37]\\d{2}|4(?:[0178]\\d|5[0-6])|5(?:[0-57-9]\\d|60)|6[024-689]\\d|8[0-79]\\d|9(?:[0479]\\d|3[01]))|8(?:1[0189]\\d|2[046-9]\\d|3[058]\\d|5[029]\\d|6(?:[0689]\\d|40)|8[14568]\\d|9[0-389]\\d)|9(?:0[1368]\\d|1[13-9]\\d|[27]\\d{2}|3(?:[0-368]\\d|7[0-3])|4[013-79]\\d|5[0-35689]\\d|6[0-46-9]\\d|8[0-24-9]\\d|97\\d))|5(?:2(?:0[13589]\\d|1[0-2]\\d|2[056]\\d|3(?:[067]\\d|2[01])|4[0-69]\\d|5[3-6]\\d|8[0-25-9]\\d|9[0-469]\\d)|3(?:[12][0-38]|3[0-37]|4[89]|5[01346-9]|[67]\\d|8[01589]|95)\\d|4(?:0[1346]\\d|1[02-35-9]\\d|2[1379]\\d|3[0-46-9]\\d|4[013689]\\d|[59]\\d{2}|6(?:[15-9]\\d|20)|7[036-9]\\d|8[015-8]\\d)|5(?:0[167]\\d|17\\d|2[025-9]\\d|3[035-7]\\d|4[0-35-9]\\d|8[13]\\d|9(?:[124-9]\\d|31))|6(?:0[89]\\d|1[02-46-8]\\d|2[0-69]\\d|3(?:[1-367]\\d|40)|4[0-689]\\d|5(?:[0-24-9]\\d|30)|6[1457-9]\\d|7\\d{2}|8[0-57-9]\\d|9[0-389]\\d)|7(?:1(?:[024679]\\d|80)|2[0-35-8]\\d|3[23]\\d|4[34]\\d|5[0-36-9]\\d|6[356-9]\\d|7\\d{2}|8(?:[23]\\d|[01]1)|9(?:[1-689]\\d|70))|8(?:0[145-9]\\d|1[0-2]\\d|2[09]\\d|3(?:[058]\\d|0[017])|4[016-9]\\d|5[02-9]\\d|7(?:10|2\\d)|8[013589]\\d|9[0-57-9]\\d)|9[23]0\\d)|6(?:2(?:2[1246-9]\\d|3[0-5]\\d|4[02]\\d|5[1-3]\\d|[68]\\d{2}|7(?:[04-8]\\d|10)|9[2-5]\\d)|3(?:1(?:[125-9]\\d|3[01])|3[0-7]\\d|5[0-478]\\d|79\\d|8[3-578]\\d|9[018]\\d)|4(?:1[015]|[2-689]\\d|7[1-79])\\d|5(?:09\\d|1(?:10|[2479]\\d)|2[1-579]\\d|3(?:[0-467]\\d|50)|4[0-24-9]\\d|5\\d{2}|60\\d)|6(?:0[13]\\d|1[0-57]\\d|2[03]\\d|3[0-478]\\d|4[0-8]\\d|5[013-689]\\d|6[0-467]\\d|[78]\\d{2}|9(?:[13-9]\\d|20))|7(?:01|2[06-9]|3[367]|5[7-9]|6\\d|7[0156]|8[12]|9[0-57-9])\\d|85[0-26]\\d|9(?:0[167]|10|[57]\\d|6[02-9]|8[013-9])\\d)|7(?:2(?:0[7-9]|1[016-9]|2[0-8]|[39]\\d|4[014]|5[0-79]|6[125-8]|7[1246-9]|8[37-9])\\d|3(?:0[0-5]|[35]\\d|40|5[0-478]|6[0-5]|8[0-26-8])\\d|4(?:0[07-9]|[1-35]\\d|6[7-9]|7[57]|8[1-68])\\d|5(?:0[04-9]|1[0-68]|2[0-378]|3[0-3]|5\\d|6[0-2]|7[018]|8[5-7]|9[05-9])\\d|6(?:5[0-24-9]|6[0-3568]|7[0457-9]|8[02-9]|9\\d)\\d|7(?:0[25-8]\\d|1(?:[01]\\d|20)|2[0-2]\\d|3[489]\\d|[457-9]\\d{2}|6(?:[0-8]\\d|90))|8(?:01[01]|10\\d|[289]\\d{2}|3(?:[028]\\d|10)|50\\d|6[0-357-9]\\d|7(?:[0235-9]\\d|[14]0))|9(?:0(?:[0246-8]\\d|10)|[1-4]\\d{2}|50\\d|6[014589]\\d|[7-9]0\\d))|8(?:2(?:2(?:[013-5]\\d|[28][0-8]|6[016]|7[0-589]|9[0-49])|3(?:[02][0-689]|1[1-59]|[3-7]\\d|8[0-389]|9[13])|4(?:0[1-3]|[1-8]\\d|9[1-359])|5(?:0[1-7]|[17]\\d|20|3[0-26-9]|4[1-9]|5[0-35]|8[0-689]|9[02367])|6(?:[147]\\d|2[0-25-9]|39|5[014-9]|6[1-9]|8[1-8]|9[089])|7(?:0[017-9]|1[1-356]|20|3[01457-9]|4[15]|5[0-25]|6[0-6]|70|8[0-2]|9[01378])|8(?:0[3-57-9]|[15]0|2[124-9]|3[01]|4[02-6]|6[02-578]|7\\d|8[25-8]|9[04-689]))|3(?:220|3(?:0[089]|10|2[0-7]|3[7-9]|4[0-48])|4(?:0[68]|1[0-478]|2[5-79]|3[024-9]|50|6\\d|7[0-57]|8[05]|96)|5(?:4[4578]|55|6[2-9]|70|8[459]|92))|4(?:2(?:[15]\\d|2[0-489]|3[124-9])|3(?:0[1-8]|[1-4]\\d|5[0-3]|6[1-7]|7[56]|8[0-4]|9[1-578])|4(?:05|80)|555|6(?:1[0-3]|20|3[1-4]|4[0-24-7]|5\\d|6[0-2]|71|8[0-47-9]|9[0-689])|7(02|1[79]|21|3[0-2468]|5[0-5]|6[0256]|7[0-8]|8[01589]|9[026-9])|8(?:0[1-9]|1[0-3568]|2[0138]|3[0-4]|4[046-9]|5[06]|6\\d|7[0-579]|80|9[0-8]))|5(?:2(?:0[0-26]|1\\d|2[0-5]|3[18]|4[0-2]|6[3-68]|70|8[025-9]|9[05-9])|3(?:10|2\\d|31|95)|4(?:0[1-7]|[1-4]\\d|5[02-6]|6[0-3]|7[0-245]|8[125]|9[1-6])|5(?:40|55)|6(?:0[1459]|1[0-8]|2[0-36-8]|3[0-35-8]|[45]\\d|6[0-8]|80)|7(?:1[07-9]|20|3[3-9]|4[02-4]|5[05689]|6[015-9]|7\\d|8[045]|9[0-6]))|6(?:2(?:01|3[12]|5[1-7]|60|8[1-6]|9[0-8])|3(?:0[0137]|[134]\\d|2[0-8]|[59][01]|60|[78]1)|4(?:2[2-4]|49|5[17]|6\\d|7[0-46-9]|8[0-689])|5(?:0[6-8]|55|8[0149]|90)|8(?:5\\d|[68]0)|9(?:5[12]|81))|7(?:2(?:0[189]|[12][1-9]|3[0-47]|50)|3(?:[01][1-9]|3\\d|4[0-245]|6[4-9]|7[237-9]|9[12])|4(?:[0-2]\\d|3[167-9]|[45][0-3]|6[0-8]|7[25-9]|8[0-6]|90)|5(?:0[1-9]|[89]\\d)|7(?:1[89]|[27]\\d|3[013-9]|4[0-8]|50|6[01568]|82)|8(?:[03][1-3]|1[0-28]|2[0-38]|48|5[0-4]|6[1-3]|7[124]|8[013-57-9]|9[07]))|8(?:2(?:0[13-7]|[1-9]\\d)|3(?:0[1-47-9]|[128]\\d|3[0-4]|4[1-9]|5[0-35-7]|6[0-46-9]|9[3-7])|4(?:0[1-58]|1[1-5]|[2-57-9]\\d|69)|5(?:1[1-35-9]|2\\d|3[2-8]|52)|6(?:0[2-9]|1[1-8]|[23]\\d|41|5[12367]|6[1-9]|7[14-9]|8[02-8]|9[05])|7(?:0[1-589]|[1-35-8]\\d|4[0-7]|9[0-46-9])|8(?:01|30|5[0-48]|6[13]|7\\d|8[013-689]|9[24-9])|9(?:0[2-4689]|1\\d|2[08]|3[18]|4[03]|59|6[0-36-9]|7[0-35-79]|8[1235]))|9(?:2(?:[057][1-9]|[1-3]\\d|4[0-8]|6[1-5]|8[015-9]|9[04-6])|300|4(?:01|36|6[1-6]|[89][12])|5(?:0[25689]|1\\d|2[0134]|3[1-8]|5[17]|6[0-35-9]|7[0-7]|91)|6(?:1[1-9]|2[23]|3[0-4]|6[03-9]|7[0-7])|7(?:0[1-68]|1[1-8]|2[25-9]|3[056]|4[4-9]|[5-8]\\d|9[0-46-9])|8(?:0[1-7]|[189]\\d|2[1-46]|4[1-689]|5[0-79]|6[1-9]|71)|9(?:0[1-3]|1\\d|2[0-35-7]|3[67]|4[12]|5[0-249]|6[5-9]|75|8[1-6])))|9(?:0(?:5[79]|75)\\d|132\\d|2(?:0[4-68]\\d|1[2-57]\\d|2[0-589]\\d|[39]\\d{2}|4(?:[02-9]\\d|10)|5(?:[024-6]\\d|[7-9]0)|6(?:[03-9]\\d|20)|7[0-26-9]\\d|8(?:[0-24-68]\\d|7[01]))|3(?:0[0-2689]\\d|1(?:[0235]\\d|1[0-2]|4[01])|2(?:0[01]|[1-57-9]\\d|6[0-2])|3(?:00|1[0-4]|2\\d)|4[05]\\d|5[0-3568]\\d|6(?:[1-357-9]\\d|60)|[78]0\\d)|4(?:0[24578]\\d|1[02-57-9]\\d|2\\d{2}|3(?:[0278]\\d|1[01]|60)|4[013579]\\d|5[0-8]\\d|6[0678]\\d|7[013-9]\\d|8[01569]\\d)|5(0(?:[589]\\d|7[01])|1\\d{2}|2[0159]\\d|3[14689]\\d|4[0-46-9]\\d|5[0-35-9]\\d|6[0156-8]\\d|7[0-35]\\d|8[0-7]\\d|9[0-3589]\\d)|6(?:0[269]\\d|[12]\\d{2}|3[0-57-9]\\d|44[0-2]|5[01379]\\d|6[02-9]\\d|7[69]\\d|8(?:[0-24-8]\\d|30)|9(?:[0-24-9]\\d|3[01]))|7(?:0[0136-8]|1[02-4]|2[156]|3[258]|[489]\\d|5[0-589]|6[024-9]|7[0-689])\\d|8(?:0(?:0[01]|1\\d)|1[3-9]\\d|[23]\\d{2}|4[0-24-689]\\d|5[0-689]\\d|6[02-9]\\d|7(?:[01]0|[2-4]\\d)|888)|9(?:00\\d|1[2-57-9]\\d|2(?:00|1[01]|[238]\\d)|3(?:[2-467]\\d|50)|4[4-9]\\d|5(?:[0-2457-9]\\d|60)|6[0156]\\d|7[04-9]\\d|8[01]\\d)))\\d{3}",
,,,"323856789",,,[8,9],[6,7]],[,,"1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])\\d|1(?:[1-5]\\d{2}|6(?:0[5-9]|[1-9]\\d))\\d|[23679][2-9]\\d{2}|4(?:[235-9]\\d{2}|400)|59\\d{3}|8(?:1[23]\\d|[236]\\d{2}|4(?:[06]\\d|7[0-4])|5[7-9]\\d|7[016-9]\\d|8(?:[01]\\d|[27][0-4])|9[0-8]\\d))\\d{4}",,,,"123456789",,,[9,10]],[,,"1[378]00\\d{6}",,,,"1300123456",,,[10]],[,,"1600\\d{6}",,,,"1600123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}",,,,"1546012345",
,,[10]],"MY",60,"00","0",,,"0",,,,[[,"([4-79])(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],[,"(3)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],[,"([18]\\d)(\\d{3})(\\d{3,4})","$1-$2 $3",["1[02-46-9][1-9]|8"],"0$1"],[,"(1)([36-8]00)(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]0","1[36-8]00"]],[,"(11)(\\d{4})(\\d{4})","$1-$2 $3",["11"],"0$1"],[,"(15[49])(\\d{3})(\\d{4})","$1-$2 $3",["15[49]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MZ:[,[,,"(?:2|8\\d)\\d{7}",,,,,,,[8,
9]],[,,"2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",,,,"21123456",,,[8]],[,,"8[2-7]\\d{7}",,,,"821234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MZ",258,"00",,,,,,,,[[,"([28]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],[,"(80\\d)(\\d{3})(\\d{3})","$1 $2 $3",["80"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NA:[,[,,"[68]\\d{7,8}",,,,,,,[8,9]],[,,"6(?:1(?:0\\d{2}|17|2(?:[0189]\\d|[2-7]\\d?)|3(?:[01378]\\d?|[24-69]\\d)|4(?:[0-4]\\d?|[5-9]\\d)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7\\d?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|6[89]|7[01]))\\d{4}",
,,,"61221234"],[,,"(?:60|8[1245])\\d{7}",,,,"811234567",,,[9]],[,,"80\\d{7}",,,,"800123456",,,[9]],[,,"8701\\d{5}",,,,"870123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8(?:3\\d{2}|86)\\d{5}",,,,"88612345"],"NA",264,"00","0",,,"0",,,,[[,"(8\\d)(\\d{3})(\\d{4})","$1 $2 $3",["8[0-5]"],"0$1"],[,"(6\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],[,"(88)(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(870)(\\d{3})(\\d{3})","$1 $2 $3",["870"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
,,[,,,,,,,,,[-1]]],NC:[,[,,"[2-57-9]\\d{5}",,,,,,,[6]],[,,"(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,,"201234"],[,,"(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,,"751234"],[,,,,,,,,,[-1]],[,,"36\\d{4}",,,,"366711"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NC",687,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-46-9]|5[0-4]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NE:[,[,,"[0289]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",
,,,"20201234"],[,,"(?:8[04589]|9\\d)\\d{6}",,,,"93123456"],[,,"08\\d{6}",,,,"08123456"],[,,"09\\d{6}",,,,"09123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NE",227,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["09|[289]"]],[,"(08)(\\d{3})(\\d{3})","$1 $2 $3",["08"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NF:[,[,,"[13]\\d{5}",,,,,,,[6],[5]],[,,"(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}",,,,"106609",,,,[5]],[,,"3[58]\\d{4}",,,,"381234",,,,[5]],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NF",672,"00",,,,,,,,[[,"(\\d{2})(\\d{4})","$1 $2",["1"]],[,"(\\d)(\\d{5})","$1 $2",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NG:[,[,,"[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}",,,,,,,[7,8,10,11,12,13,14],[5,6]],[,,"[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}",
,,,"18040123",,,[7,8],[5,6]],[,,"(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70(?:[1-689]\\d|7[0-3])|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[235-9]\\d)\\d{6}",
,,,"8021234567",,,[8,10]],[,,"800\\d{7,11}",,,,"80017591759",,,[10,11,12,13,14]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NG",234,"009","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["70|8[01]|90[235-9]"],"0$1"],[,"([78]00)(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]00"],"0$1"],[,"([78]00)(\\d{5})(\\d{5,6})","$1 $2 $3",
["[78]00"],"0$1"],[,"(78)(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"700\\d{7,11}",,,,"7001234567",,,[10,11,12,13,14]],,,[,,,,,,,,,[-1]]],NI:[,[,,"(?:1800|[25-8]\\d{3})\\d{4}",,,,,,,[8]],[,,"2\\d{7}",,,,"21234567"],[,,"(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|7[5-8]\\d|8\\d{2})\\d{5}",,,,"81234567"],[,,"1800\\d{4}",,,,"18001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NI",505,"00",,,,,,,,[[,"(\\d{4})(\\d{4})",
"$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NL:[,[,,"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8])|[89]\\d{0,3})\\d{6}|1\\d{4,5}",,,,,,,[5,6,7,8,9,10]],[,,"(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d{2})\\d{6}",,,,"101234567",,,[9]],[,,"6[1-58]\\d{7}",,,,"612345678",,,[9]],[,,"800\\d{4,7}",
,,,"8001234",,,[7,8,9,10]],[,,"90[069]\\d{4,7}",,,,"9061234",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:85|91)\\d{7}",,,,"851234567",,,[9]],"NL",31,"00","0",,,"0",,,,[[,"([1-57-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]|91"],"0$1"],[,"([1-5]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],[,"(6)(\\d{8})","$1 $2",["6[0-57-9]"],"0$1"],[,"(66)(\\d{7})","$1 $2",["66"],"0$1"],[,"(14)(\\d{3,4})","$1 $2",["14"],"$1"],
[,"([89]0\\d)(\\d{4,7})","$1 $2",["[89]0"],"0$1"]],,[,,"66\\d{7}",,,,"662345678",,,[9]],,,[,,"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])",,,,,,,[5,6]],[,,"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])|8[478]\\d{7}",,,,"14020",,,[5,6,9]],,,[,,,,,,,,,[-1]]],NO:[,[,,"(?:0|[2-9]\\d{3})\\d{4}",,,,,,,[5,8]],[,,"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",
,,,"21234567",,,[8]],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}",,,,"40612345",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"NO",47,"00",,,,,,,,[[,"([489]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"]],[,"([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",
,,,"01234"],,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],NP:[,[,,"9\\d{9}|[1-9]\\d{7}",,,,,,,[8,10],[6,7]],[,,"(?:1[0-6]\\d|2[13-79][2-6]|3[135-8][2-6]|4[146-9][2-6]|5[135-7][2-6]|6[13-9][2-6]|7[15-9][2-6]|8[1-46-9][2-6]|9[1-79][2-6])\\d{5}",,,,"14567890",,,[8],[6,7]],[,,"9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}",,,,"9841234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NP",977,"00","0",,,"0",,,,[[,"(1)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})",
"$1-$2",["1[01]|[2-8]|9(?:[1-69]|7[15-9])"],"0$1"],[,"(9\\d{2})(\\d{7})","$1-$2",["9(?:6[013]|7[245]|8)"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NR:[,[,,"(?:444|55\\d|888)\\d{4}",,,,,,,[7]],[,,"(?:444|888)\\d{4}",,,,"4441234"],[,,"55[4-9]\\d{4}",,,,"5551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NR",674,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
NU:[,[,,"(?:[47]|888\\d)\\d{3}",,,,,,,[4,7]],[,,"[47]\\d{3}",,,,"7012",,,[4]],[,,"888[4-9]\\d{3}",,,,"8884012",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NU",683,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["888"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NZ:[,[,,"[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}",,,,,,,[8,9,10],[7]],[,,"(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}",,,,"32345678",,,[8],[7]],[,,"2(?:[028]\\d{7,8}|1\\d{6,8}|[79]\\d{7})",
,,,"211234567"],[,,"508\\d{6,7}|80\\d{6,8}",,,,"800123456"],[,,"90\\d{6,7}",,,,"900123456",,,[8,9]],[,,,,,,,,,[-1]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,,,,,,,,[-1]],"NZ",64,"0(?:0|161)","0",,,"0",,"00",,[[,"(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["240|[346]|7[2-57-9]|9[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:1[1-9]|[69]|7[0-35-9])|70|86"],"0$1"],[,"(2\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["2[028]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})",
"$1 $2 $3",["90"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|5|[89]0"],"0$1"]],,[,,"[28]6\\d{6,7}",,,,"26123456",,,[8,9]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],OM:[,[,,"(?:[279]\\d{3}|500|8007\\d?)\\d{4}",,,,,,,[7,8,9]],[,,"2[2-6]\\d{6}",,,,"23123456",,,[8]],[,,"7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"92123456",,,[8]],[,,"8007\\d{4,5}|500\\d{4}",,,,"80071234"],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"OM",968,"00",,,
,,,,,[[,"(2\\d)(\\d{6})","$1 $2",["2"]],[,"([79]\\d{3})(\\d{4})","$1 $2",["[79]"]],[,"([58]00)(\\d{4,6})","$1 $2",["[58]00"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PA:[,[,,"(?:[1-57-9]|6\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",
,,,"2001234",,,[7]],[,,"(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[02-9]\\d|1[0-5])\\d{5}",,,,"61234567"],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}",,,,"8601234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PA",507,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],[,"(\\d{4})(\\d{4})","$1-$2",["6"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PE:[,[,,"(?:[14-8]|9\\d)\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}",
,,,"11234567",,,[8],[6,7]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"805\\d{5}",,,,"80512345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"80[24]\\d{5}",,,,"80212345",,,[8]],[,,,,,,,,,[-1]],"PE",51,"19(?:1[124]|77|90)00","0"," Anexo ",,"0",,,,[[,"(1)(\\d{7})","$1 $2",["1"],"(0$1)"],[,"([4-8]\\d)(\\d{6})","$1 $2",["[4-7]|8[2-4]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],[,"(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,
,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PF:[,[,,"[48]\\d{7}|4\\d{5}",,,,,,,[6,8]],[,,"4(?:[09][45689]\\d|4)\\d{4}",,,,"40412345"],[,,"8[79]\\d{6}",,,,"87123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PF",689,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[09]|8[79]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]]],,[,,,,,,,,,[-1]],,,[,,"44\\d{4}",,,,,,,[6]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PG:[,[,,"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
,,,,,,[7,8]],[,,"(?:3[0-2]\\d|4[257]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}",,,,"3123456",,,[7]],[,,"(?:7(?:[0-689]\\d|75)|81\\d)\\d{5}",,,,"70123456",,,[8]],[,,"180\\d{4}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"2(?:0[0-47]|7[568])\\d{4}",,,,"2751234",,,[7]],"PG",675,"140[1-3]|00",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[13-689]|27"]],[,"(\\d{4})(\\d{4})","$1 $2",["20|[78]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,
,,,,,,[-1]]],PH:[,[,,"(?:1800\\d{2,4}|2|[89]\\d{4})\\d{5}|[3-8]\\d{8}|[28]\\d{7}",,,,,,,[6,8,9,10,11,12,13],[5,7]],[,,"2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})",,,,"21234567",,,[6,8,9,10],[5,7]],[,,"(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[34-79]|89|9[4-9]))\\d{7}",,,,"9051234567",,,[10]],[,,"1800\\d{7,9}",,,,"180012345678",,,[11,12,13]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PH",63,
"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(2)(\\d{5})","$1 $2",["2"],"(0$1)"],[,"(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],[,"(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],[,"([3-8]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[3-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{4})",
"$1 $2 $3",["81|9"],"0$1"],[,"(1800)(\\d{3})(\\d{4})","$1 $2 $3",["180","1800"]],[,"(1800)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["180","1800"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PK:[,[,,"(?:122|[24-8]\\d{4,5}|9(?:[013-9]\\d{2,4}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d))\\d{6}|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",,,,,,,[8,9,10,11,12],[6,7]],[,,"(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}",
,,,"2123456789",,,[9,10],[6,7,8]],[,,"3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",,,,"3012345678",,,[10]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,"122\\d{6}",,,,"122044444",,,[9]],[,,,,,,,,,[-1]],"PK",92,"00","0",,,"0",,,,[[,"([89]00)(\\d{3})(\\d{2})","$1 $2 $3",["[89]00"],"0$1"],[,"(1\\d{3})(\\d{5})","$1 $2",["1"],"$1"],[,"(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],[,"(\\d{3})(\\d{6,7})","$1 $2",
["2[349]|45|54|60|72|8[2-5]|9[2-469]","(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"],"(0$1)"],[,"(58\\d{3})(\\d{5})","$1 $2",["58[126]"],"(0$1)"],[,"(3\\d{2})(\\d{7})","$1 $2",["3"],"0$1"],[,"(\\d{2})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"],"(0$1)"],[,"(\\d{3})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[349]|45|54|60|72|8[2-5]|9[2-9]",
"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",,,,"21111825888",,,[11,12]],,,[,,,,,,,,,[-1]]],PL:[,[,,"[1-9]\\d{6}(?:\\d{2})?|6\\d{5}(?:\\d{2})?",,,,,,,[6,
7,8,9]],[,,"(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:\\d{7}|19\\d{3})",,,,"123456789",,,[7,9]],[,,"(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",,,,"512345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"70[01346-8]\\d{6}",,,,"701234567",,,[9]],[,,"801\\d{6}",,,,"801234567",,,[9]],[,,,,,,,,,[-1]],[,,"39\\d{7}",,,,"391234567",,,[9]],"PL",48,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["11[68]|64"]],[,"(\\d{5})","$1",["19"]],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",
["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]],,[,,"64\\d{4,7}",,,,"641234567"],,,[,,,,,,,,,[-1]],[,,"804\\d{6}",,,,"804123456",,,[9]],,,[,,,,,,,,,[-1]]],PM:[,[,,"[45]\\d{5}",,,,,,,[6]],[,,"(?:4[1-3]|50)\\d{4}",,
,,"430123"],[,,"(?:4[02-4]|5[05])\\d{4}",,,,"551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PM",508,"00","0",,,"0",,,,[[,"([45]\\d)(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PR:[,[,,"(?:[589]\\d\\d|787)\\d{7}",,,,,,,[10],[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],
[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"PR",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"787|939",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PS:[,[,,"(?:(?:1\\d|5)\\d\\d|[2489]2)\\d{6}",,,,,,,[8,9,10],[7]],[,,"(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}",,,,"22234567",,,[8],[7]],[,,"5[69]\\d{7}",,,,"599123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,,,,,,,,[-1]],[,,"1700\\d{6}",,,,"1700123456",
,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PS",970,"00","0",,,"0",,,,[[,"([2489])(2\\d{2})(\\d{4})","$1 $2 $3",["[2489]2"],"0$1"],[,"(5[69]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["5[69]"],"0$1"],[,"(1[78]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[78]0","1[78]00"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PT:[,[,,"(?:[26-9]\\d|30)\\d{7}",,,,,,,[9]],[,,"2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",,,,"212345678"],[,,"9(?:[1236]\\d{2}|480)\\d{5}",,,,"912345678"],
[,,"80[02]\\d{6}",,,,"800123456"],[,,"6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}",,,,"760123456"],[,,"80(?:8\\d|9[1579])\\d{5}",,,,"808123456"],[,,"884[0-4689]\\d{5}",,,,"884123456"],[,,"30\\d{7}",,,,"301234567"],"PT",351,"00",,,,,,,,[[,"(2\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],[,"([2-46-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[3-9]|[346-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7(?:0(?:7\\d|8[17]))\\d{5}",,,,"707123456"],,,[,,"600\\d{6}",,,,"600110000"]],PW:[,[,,"(?:[25-8]\\d\\d|345|488|900)\\d{4}",
,,,,,,[7]],[,,"(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}",,,,"2771234"],[,,"(?:6[234689]0|77\\d|88[0-4])\\d{4}",,,,"6201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PW",680,"01[12]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PY:[,[,,"(?:[2-46-9]\\d|5[0-8])\\d{7}|[2-9]\\d{5,7}",,,,,,,[6,7,8,9],[5]],[,,"(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}",
,,,"212345678",,,[7,8,9],[5,6]],[,,"9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}",,,,"961456789",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8700[0-4]\\d{4}",,,,"870012345",,,[9]],"PY",595,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],[,"(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["9[1-9]"],"0$1"],
[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["870","8700"]],[,"(\\d{3})(\\d{4,5})","$1 $2",["[2-8][1-9]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8][1-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[2-9]0\\d{4,7}",,,,"201234567"],,,[,,,,,,,,,[-1]]],QA:[,[,,"(?:(?:2|[3-7]\\d)\\d\\d|800)\\d{4}",,,,,,,[7,8]],[,,"4[04]\\d{6}",,,,"44123456",,,[8]],[,,"[3567]\\d{7}",,,,"33123456",,,[8]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"QA",
974,"00",,,,,,,,[[,"([28]\\d{2})(\\d{4})","$1 $2",["[28]"]],[,"([3-7]\\d{3})(\\d{4})","$1 $2",["[3-7]"]]],,[,,"2(?:[12]\\d|61)\\d{4}",,,,"2123456",,,[7]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RE:[,[,,"(?:26|[68]\\d)\\d{7}",,,,,,,[9]],[,,"262\\d{6}",,,,"262161234"],[,,"69(?:2\\d{2}|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}",,,,"692123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}",
,,,"810123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RE",262,"00","0",,,"0",,,,[[,"([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[268]"],"0$1"]],,[,,,,,,,,,[-1]],1,"262|69|8",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RO:[,[,,"(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",,,,,,,[6,9]],[,,"2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3(?:1\\d{4}(?:\\d{3})?|[3-6]\\d{7})",,,,"211234567"],[,,"7(?:[02-7]\\d{2}|1(?:[01]\\d|20)|8[03-8]\\d|99\\d)\\d{5}",,,,"712034567",,,[9]],[,,"800\\d{6}",,,,
"800123456",,,[9]],[,,"90[036]\\d{6}",,,,"900123456",,,[9]],[,,"801\\d{6}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RO",40,"00","0"," int ",,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],[,"(\\d{2})(\\d{4})","$1 $2",["[23]1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23][3-7]|[7-9]"],"0$1"],[,"(2\\d{2})(\\d{3})","$1 $2",["2[3-6]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"37\\d{7}",,,,"372123456",,,[9]],,,[,,,,,,,,,[-1]]],RS:[,[,,"[127]\\d{6,11}|3(?:[0-79]\\d{5,10}|8(?:[02-9]\\d{4,9}|1\\d{4,5}))|6\\d{7,9}|800\\d{3,9}|90\\d{4,8}|7\\d{5}",
,,,,,,[6,7,8,9,10,11,12],[5]],[,,"(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}",,,,"10234567",,,[7,8,9,10,11,12],[5,6]],[,,"6(?:[0-689]|7\\d)\\d{6,7}",,,,"601234567",,,[8,9,10]],[,,"800\\d{3,9}",,,,"80012345"],[,,"(?:90[0169]|78\\d)\\d{3,7}",,,,"90012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RS",381,"00","0",,,"0",,,,[[,"([23]\\d{2})(\\d{4,9})","$1 $2",["(?:2[389]|39)0"],"0$1"],[,"([1-3]\\d)(\\d{5,10})",
"$1 $2",["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"],"0$1"],[,"(6\\d)(\\d{6,8})","$1 $2",["6"],"0$1"],[,"([89]\\d{2})(\\d{3,9})","$1 $2",["[89]"],"0$1"],[,"(7[26])(\\d{4,9})","$1 $2",["7[26]"],"0$1"],[,"(7[08]\\d)(\\d{4,9})","$1 $2",["7[08]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7[06]\\d{4,10}",,,,"700123456"],,,[,,,,,,,,,[-1]]],RU:[,[,,"[347-9]\\d{9}",,,,,,,[10]],[,,"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
,,,"3011234567"],[,,"9\\d{9}",,,,"9123456789"],[,,"80[04]\\d{7}",,,,"8001234567"],[,,"80[39]\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567"],[,,,,,,,,,[-1]],"RU",7,"810","8",,,"8",,"8~10",,[[,"(\\d{3})(\\d{2})(\\d{2})","$1-$2-$3",["[1-79]"],"$1",,1],[,"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",,1],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1]],[[,"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",,1],[,"(7\\d{2})(\\d{3})(\\d{4})",
"$1 $2 $3",["7"],"8 ($1)",,1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RW:[,[,,"(?:06|[27]\\d\\d|[89]00)\\d{6}",,,,,,,[8,9]],[,,"2[258]\\d{7}|06\\d{6}",,,,"250123456"],[,,"7[238]\\d{7}",,,,"720123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900\\d{6}",,,,"900123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RW",250,"00","0",,,"0",,,,[[,"(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],[,"([7-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],[,"(0\\d)(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SA:[,[,,"(?:(?:[15]|8\\d)\\d|92)\\d{7}",,,,,,,[9,10],[7]],[,,"1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,,"112345678",,,[9],[7]],[,,"5(?:[013-689]\\d|7[0-36-8])\\d{6}",,,,"512345678",,,[9]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"925\\d{6}",,,,"925012345",,,[9]],[,,"920\\d{6}",,,,"920012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SA",966,"00","0",,,"0",,,,[[,"(1\\d)(\\d{3})(\\d{4})","$1 $2 $3",
["1[1-467]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"(92\\d{2})(\\d{5})","$1 $2",["92"],"$1"],[,"(800)(\\d{3})(\\d{4})","$1 $2 $3",["800"],"$1"],[,"(811)(\\d{3})(\\d{3,4})","$1 $2 $3",["811"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"811\\d{7}",,,,"8110123456"],,,[,,,,,,,,,[-1]]],SB:[,[,,"(?:[1-6]|[7-9]\\d\\d)\\d{4}",,,,,,,[5,7]],[,,"(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",,,,"40123",,,[5]],[,,"48\\d{3}|7(?:30|[46-8]\\d|5[025-9]|9[0-5])\\d{4}|8[4-9]\\d{5}|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}",
,,,"7421234"],[,,"1[38]\\d{3}",,,,"18123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[12]\\d{3}",,,,"51123",,,[5]],"SB",677,"0[01]",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["[7-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SC:[,[,,"(?:(?:(?:[24]\\d|64)\\d|971)\\d|8000)\\d{3}",,,,,,,[7]],[,,"4[2-46]\\d{5}",,,,"4217123"],[,,"2[5-8]\\d{5}",,,,"2510123"],[,,"8000\\d{3}",,,,"8000000"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:64\\d|971)\\d{4}",
,,,"6412345"],"SC",248,"0(?:[02]|10?)",,,,,,"00",,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SD:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"1(?:5\\d|8[3567])\\d{6}",,,,"151231234"],[,,"(?:1[0-2]|9[0-3569])\\d{7}",,,,"911231234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SD",249,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
,,[,,,,,,,,,[-1]]],SE:[,[,,"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|[27]\\d{5}",,,,,,,[6,7,8,9,10,12]],[,,"1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})",
,,,"8123456",,,[7,8,9]],[,,"7[02369]\\d{7}",,,,"701234567",,,[9]],[,,"20\\d{4,7}",,,,"20123456",,,[6,7,8,9]],[,,"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,,"9001234567",,,[7,8,9,10]],[,,"77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})",,,,"771234567",,,[6,9]],[,,"75[1-8]\\d{6}",,,,"751234567",,,[9]],[,,,,,,,,,[-1]],"SE",46,"00","0",,,"0",,,,[[,"([1-469]\\d)(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1"],[,"(9[034]\\d)(\\d{4})","$1-$2",["9(?:00|39|44)"],"0$1"],[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})",
"$1-$2 $3 $4",["8"],"0$1"],[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],"0$1"],[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})",
"$1-$2 $3 $4",["7"],"0$1"],[,"(77)(\\d{2})(\\d{2})","$1-$2$3",["77"],"0$1"],[,"(20)(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1"],[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9[034]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["25[245]|67[3-6]"],"0$1"]],[[,"([1-469]\\d)(\\d{3})(\\d{2})","$1 $2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],[,"(9[034]\\d)(\\d{4})","$1 $2",["9(?:00|39|44)"]],[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1 $2 $3 $4",["8"]],[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7"]],[,"(77)(\\d{2})(\\d{2})","$1 $2 $3",["77"]],[,"(20)(\\d{2,3})(\\d{2})",
"$1 $2 $3",["20"]],[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["9[034]"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["25[245]|67[3-6]"]]],[,,"74[02-9]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"(?:25[245]|67[3-6])\\d{9}",,,,"254123456789",,,[12]]],SG:[,[,,"(?:1\\d{3}|[369]|7000|8(?:\\d{2})?)\\d{7}",,,,,,,[8,10,11]],[,,"6[1-9]\\d{6}",,,,"61234567",,,[8]],[,,"(?:8[1-8]|9[0-8])\\d{6}",,,,"81234567",,,[8]],[,,"1?800\\d{7}",,,,"18001234567",,,[10,
11]],[,,"1900\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[12]\\d{6}",,,,"31234567",,,[8]],"SG",65,"0[0-3]\\d",,,,,,,,[[,"([3689]\\d{3})(\\d{4})","$1 $2",["[369]|8[1-9]"]],[,"(1[89]00)(\\d{3})(\\d{4})","$1 $2 $3",["1[89]0","1[89]00"]],[,"(7000)(\\d{4})(\\d{3})","$1 $2 $3",["700","7000"]],[,"(800)(\\d{3})(\\d{4})","$1 $2 $3",["800"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7000\\d{7}",,,,"70001234567",,,[11]],,,[,,,,,,,,,[-1]]],SH:[,[,,"(?:[256]\\d|8)\\d{3}",,,,,,,[4,5]],[,
,"2(?:[0-57-9]\\d|6[4-9])\\d{2}",,,,"22158"],[,,"[56]\\d{4}",,,,"51234",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"262\\d{2}",,,,"26212",,,[5]],"SH",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SI:[,[,,"[1-8]\\d{7}|90\\d{4,6}|8\\d{4,6}",,,,,,,[5,6,7,8]],[,,"(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}",,,,"11234567",,,[8],[7]],[,,"(?:[37][01]\\d|4[0139]\\d|51\\d|6(?:[48]\\d|5[15-7]|9[69]))\\d{5}",,,,"31234567",,,[8]],[,
,"80\\d{4,6}",,,,"80123456",,,[6,7,8]],[,,"90\\d{4,6}|89[1-3]\\d{2,5}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:59|8[1-3])\\d{6}",,,,"59012345",,,[8]],"SI",386,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|[34][24-8]|5[2-8]|7[3-8]"],"(0$1)"],[,"([3-7]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],[,"([89][09])(\\d{3,6})","$1 $2",["[89][09]"],"0$1"],[,"([58]\\d{2})(\\d{5})","$1 $2",["59|8[1-3]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SJ:[,[,,"(?:0|(?:[4589]\\d|79)\\d\\d)\\d{4}",,,,,,,[5,8]],[,,"79\\d{6}",,,,"79123456",,,[8]],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}",,,,"41234567",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"SJ",47,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",,,
,"01234"],,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],SK:[,[,,"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",,,,,,,[6,7,9]],[,,"2(?:1(?:6\\d{3,4}|7\\d{3})|[2-9]\\d{7})|[3-5][1-8](?:1(?:6\\d{2,3}|7\\d{3})|\\d{7})",,,,"221234567"],[,,"9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}",,,,"912123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:[78]\\d{7}|00\\d{6})",,,,"900123456",,,[9]],[,,"8[5-9]\\d{7}",,,,"850123456",,,[9]],[,,,,,,,,,[-1]],[,,"6(?:02|5[0-4]|9[0-6])\\d{6}",,,,"690123456",,,[9]],
"SK",421,"00","0",,,"0",,,,[[,"(2)(1[67])(\\d{3,4})","$1 $2 $3",["21[67]"],"0$1"],[,"([3-5]\\d)(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5]"],"0$1"],[,"(2)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"],[,"([689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(9090)(\\d{3})","$1 $2",["909","9090"],"0$1"]],,[,,"9090\\d{3}",,,,"9090123",,,[7]],,,[,,"(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}|9090\\d{3}",,,,,,,[7,9]],[,
,"96\\d{7}",,,,"961234567",,,[9]],,,[,,,,,,,,,[-1]]],SL:[,[,,"(?:[2-578]\\d|66|99)\\d{6}",,,,,,,[8],[6]],[,,"[235]2[2-4][2-9]\\d{4}",,,,"22221234",,,,[6]],[,,"(?:2[15]|3[013-5]|4[04]|5[05]|66|7[5-9]|8[08]|99)\\d{6}",,,,"25123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SL",232,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",,"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SM:[,[,,"(?:0549|[5-7]\\d)\\d{6}",,,,,,,[8,10],[6]],
[,,"0549(?:8[0157-9]|9\\d)\\d{4}",,,,"0549886377",,,[10],[6]],[,,"6[16]\\d{6}",,,,"66661212",,,[8]],[,,,,,,,,,[-1]],[,,"7[178]\\d{6}",,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[158]\\d{6}",,,,"58001110",,,[8]],"SM",378,"00",,,,"([89]\\d{5})","0549$1",,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(0549)(\\d{6})","$1 $2",["054","0549"]],[,"(\\d{6})","0549 $1",["[89]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(0549)(\\d{6})","($1) $2",
["054","0549"]],[,"(\\d{6})","(0549) $1",["[89]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SN:[,[,,"(?:[378]\\d{4}|93330)\\d{4}",,,,,,,[9]],[,,"3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,,"301012345"],[,,"7(?:[06-8]\\d|21|90)\\d{6}",,,,"701234567"],[,,"800\\d{6}",,,,"800123456"],[,,"88[4689]\\d{6}",,,,"884123456"],[,,"81[02468]\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,"39[01]\\d{6}|3392\\d{5}|93330\\d{4}",,,,"933301234"],"SN",221,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[379]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SO:[,[,,"[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}",,,,,,,[6,7,8,9]],[,,"(?:1\\d{1,2}|2[0-79]\\d|3[0-46-8]?\\d|4[0-7]?\\d|59\\d|8[125])\\d{4}",,,,"4012345",,,[6,7]],[,,"(?:15\\d|2(?:4\\d|8)|3[59]\\d{2}|4[89]\\d{2}|6[1-9]?\\d{2}|7(?:[1-8]\\d|9\\d{1,2})|8[08]\\d{2}|9(?:0[67]|[2-9])\\d)\\d{5}",,,,"71123456",,,[7,8,9]],[,,,,,,,,
,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SO",252,"00","0",,,"0",,,,[[,"(\\d{6})","$1",["[134]"]],[,"(\\d)(\\d{6})","$1 $2",["[13-5]|2[0-79]"]],[,"(\\d)(\\d{7})","$1 $2",["24|[67]"]],[,"(\\d{2})(\\d{4})","$1 $2",["8[125]"]],[,"(\\d{2})(\\d{5,7})","$1 $2",["15|28|6[1-35-9]|799|9[2-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3[59]|4[89]|6[24-6]|79|8[08]|90"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SR:[,[,,"(?:[2-5]|68|[78]\\d)\\d{5}",
,,,,,,[6,7]],[,,"(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}",,,,"211234"],[,,"(?:7[124-7]|8[125-9])\\d{5}",,,,"7412345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"56\\d{4}",,,,"561234",,,[6]],"SR",597,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1-$2",["[2-4]|5[2-58]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],[,"(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SS:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"18\\d{7}",,,
,"181234567"],[,,"(?:12|9[1257])\\d{7}",,,,"977123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SS",211,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ST:[,[,,"(?:22|9\\d)\\d{5}",,,,,,,[7]],[,,"22\\d{5}",,,,"2221234"],[,,"9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d{2})\\d{3}",,,,"9812345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ST",239,
"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SV:[,[,,"[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",,,,,,,[7,8,11]],[,,"2[1-6]\\d{6}",,,,"21234567",,,[8]],[,,"[67]\\d{7}",,,,"70123456",,,[8]],[,,"800\\d{4}(?:\\d{4})?",,,,"8001234",,,[7,11]],[,,"900\\d{4}(?:\\d{4})?",,,,"9001234",,,[7,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SV",503,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[267]"]],[,"(\\d{3})(\\d{4})","$1 $2",["[89]"]],[,
"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SX:[,[,,"(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}",,,,,,,[10],[7]],[,,"7215(?:4[2-8]|8[239]|9[056])\\d{4}",,,,"7215425678",,,,[7]],[,,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,,"7215205678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,
,,[-1]],"SX",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"721",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SY:[,[,,"[1-39]\\d{8}|[1-5]\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}",,,,"112345678",,,,[6,7]],[,,"9(?:22|[3-589]\\d|6[024-9])\\d{6}",,,,"944567890",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SY",963,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",,1],
[,"(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SZ:[,[,,"(?:0800|(?:[237]\\d|900)\\d\\d)\\d{4}",,,,,,,[8,9]],[,,"[23][2-5]\\d{6}",,,,"22171234",,,[8]],[,,"7[6-9]\\d{6}",,,,"76123456",,,[8]],[,,"0800\\d{4}",,,,"08001234",,,[8]],[,,"900\\d{6}",,,,"900012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"70\\d{6}",,,,"70012345",,,[8]],"SZ",268,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[0237]"]],[,"(\\d{5})(\\d{4})","$1 $2",
["900"]]],,[,,,,,,,,,[-1]],,,[,,"0800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TA:[,[,,"8\\d{3}",,,,,,,[4]],[,,"8\\d{3}",,,,"8999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TA",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TC:[,[,,"(?:[58]\\d\\d|649|900)\\d{7}",,,,,,,[10],[7]],[,,"649(?:712|9(?:4\\d|50))\\d{4}",,,,"6497121234",,,,[7]],[,,"649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}",
,,,"6492311234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"64971[01]\\d{4}",,,,"6497101234",,,,[7]],"TC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"649",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TD:[,[,,"(?:22|[69]\\d|77)\\d{6}",,,,,,,[8]],[,,"22(?:[3789]0|5[0-5]|6[89])\\d{4}",,,,"22501234"],[,,"(?:6[023568]\\d|77\\d|9\\d{2})\\d{5}",,,,"63012345"],[,
,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TD",235,"00|16",,,,,,"00",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TG:[,[,,"[279]\\d{7}",,,,,,,[8]],[,,"2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}",,,,"22212345"],[,,"(?:7[09]|9[0-36-9])\\d{6}",,,,"90112345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TG",228,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["[279]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TH:[,[,,"(?:1\\d\\d?|[2-57]|[689]\\d)\\d{7}",,,,,,,[8,9,10]],[,,"(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,,"21234567",,,[8]],[,,"(?:14|6[1-6]|[89]\\d)\\d{7}",,,,"812345678",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"1900\\d{6}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"6[08]\\d{7}",,,,"601234567",,,[9]],"TH",66,"00[1-9]","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],
"0$1"],[,"([13-9]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["14|[3-9]"],"0$1"],[,"(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[89]0","1[89]00"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TJ:[,[,,"(?:[3-59]\\d|77|88)\\d{7}",,,,,,,[9],[3,5,7]],[,,"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",,,,"372123456",,,,[3,5,7]],[,,"(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}",,,,"917123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,
,,,,[-1]],"TJ",992,"810","8",,,"8",,"8~10",,[[,"([349]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],,,1],[,"([457-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[148]|[578]|9(?:[0235-9]|1[59])"],,,1],[,"(331700)(\\d)(\\d{2})","$1 $2 $3",["331","3317","33170","331700"],,,1],[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]","3(?:[1245]|3(?:[02-9]|1[0-589]))"],,,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TK:[,[,,"[2-47]\\d{3,6}",,,,,,,[4,5,6,7]],[,,"(?:2[2-4]|[34]\\d)\\d{2,5}",
,,,"3101"],[,,"7[2-4]\\d{2,5}",,,,"7290"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TK",690,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TL:[,[,,"(?:[2-4]\\d|7\\d\\d?|[89]0)\\d{5}",,,,,,,[7,8]],[,,"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,,"2112345",,,[7]],[,,"7[3-8]\\d{6}",,,,"77212345",,,[8]],[,,"80\\d{5}",,,,"8012345",,,[7]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,"70\\d{5}",,,,"7012345",,,[7]],[,,,,,,,,,[-1]],"TL",
670,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],[,"(\\d{4})(\\d{4})","$1 $2",["7[3-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TM:[,[,,"[1-6]\\d{7}",,,,,,,[8]],[,,"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,,"12345678"],[,,"6[1-9]\\d{6}",,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TM",993,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2-$3-$4",["12"],"(8 $1)"],[,"(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["13|[2-5]"],"(8 $1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TN:[,[,,"[2-57-9]\\d{7}",,,,,,,[8]],[,,"(?:3[0-2]\\d{3}|7\\d{4}|81200)\\d{3}",,,,"30010123"],[,,"(?:[259]\\d{3}|3(?:001|1(?:[1-35]\\d|40)|240|6[0-4]\\d|91\\d)|4[0-6]\\d{2})\\d{4}",,,,"20123456"],[,,"8010\\d{4}",,,,"80101234"],[,,"88\\d{6}",,,,"88123456"],[,,"8[12]10\\d{4}",,,,"81101234"],
[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TN",216,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TO:[,[,,"(?:(?:080|[56])0|[2-4]\\d|[78]\\d(?:\\d{2})?)\\d{3}",,,,,,,[5,7]],[,,"(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}",,,,"20123",,,[5]],[,,"(?:7[578]|8[46-9])\\d{5}",,,,"7715123",,,[7]],[,,"0800\\d{3}",,,,"0800222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TO",676,"00",,,,,,,,[[,"(\\d{2})(\\d{3})",
"$1-$2",["[1-6]|7[0-4]|8[05]"]],[,"(\\d{3})(\\d{4})","$1 $2",["7[5-9]|8[46-9]"]],[,"(\\d{4})(\\d{3})","$1 $2",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TR:[,[,,"(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}",,,,,,,[7,10]],[,,"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",,,,"2123456789",,,[10]],[,,"5(?:(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{2}|6161)\\d{5}",,,,"5012345678",,,[10]],
[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"(?:8[89]8|900)\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,"592(?:21[12]|461)\\d{4}",,,,"5922121234",,,[10]],[,,,,,,,,,[-1]],"TR",90,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4(?:[0-35-9]|4[0-35-9])"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[02-69]|1[06])"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["51|[89]"],"0$1",,1],[,"(444)(\\d{1})(\\d{3})","$1 $2 $3",["444"],,,1]],,[,,"512\\d{7}",
,,,"5123456789",,,[10]],,,[,,"444\\d{4}",,,,,,,[7]],[,,"444\\d{4}|850\\d{7}",,,,"4441444"],,,[,,,,,,,,,[-1]]],TT:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"868(?:2(?:01|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,,"8682211234",,,,[7]],[,,"868(?:2(?:6[6-9]|[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",,,,"8682911234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,
"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"TT",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"868",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"868619\\d{4}",,,,"8686191234",,,,[7]]],TV:[,[,,"(?:2|7\\d\\d|90)\\d{4}",,,,,,,[5,6,7]],[,,"2[02-9]\\d{3}",,,,"20123",,,[5]],[,,"(?:7[01]\\d|90)\\d{4}",,,,"901234",,,[6,7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TV",688,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TW:[,[,,"(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}",,,,,,,[7,8,9,10]],[,,"(?:2(?:[235-8]\\d{3}|4\\d{2,3})|3[2-9]\\d{2}|4(?:[239]\\d|[78])\\d{2}|5[2-8]\\d{2}|6[235-79]\\d{2}|7[1-9]\\d{2}|8(?:2(?:3\\d|66)|[7-9]\\d{2}))\\d{4}",,,,"221234567",,,[8,9]],[,,"9[0-8]\\d{7}",,,,"912345678",,,[9]],[,,"80[0-79]\\d{6}",,,,"800123456",,,[9]],[,,"20(?:2|[013-9]\\d{2})\\d{4}",,,,"203123456",,,[7,9]],[,,,,,,,,,[-1]],[,,"99\\d{7}",,,,"990123456",,,[9]],[,,"70\\d{8}",,,,"7012345678",
,,[10]],"TW",886,"0(?:0[25679]|19)","0","#",,"0",,,,[[,"(20)(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],[,"([258]0)(\\d{3})(\\d{4})","$1 $2 $3",["20[013-9]|50[0-46-9]|80[0-79]"],"0$1"],[,"([2-8])(\\d{3,4})(\\d{4})","$1 $2 $3",["[25][2-8]|[346]|[78][1-9]"],"0$1"],[,"(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],[,"(70)(\\d{4})(\\d{4})","$1 $2 $3",["70"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"50[0-46-9]\\d{6}",,,,"500123456",,,[9]],,,[,,,,,,,,,[-1]]],TZ:[,[,,"(?:[26-8]\\d|41|90)\\d{7}",,,
,,,,[9]],[,,"2[2-8]\\d{7}",,,,"222345678"],[,,"(?:6[2-9]|7[13-9])\\d{7}",,,,"621234567"],[,,"80[08]\\d{6}",,,,"800123456"],[,,"90\\d{7}",,,,"900123456"],[,,"8(?:40|6[01])\\d{6}",,,,"840123456"],[,,,,,,,,,[-1]],[,,"41\\d{7}",,,,"412345678"],"TZ",255,"00[056]","0",,,"0",,,,[[,"([24]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],[,"([67]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"],[,"([89]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],
[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UA:[,[,,"[3-9]\\d{8}",,,,,,,[9],[5,6,7]],[,,"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",,,,"311234567",,,,[5,6,7]],[,,"(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}",,,,"391234567"],[,,"800\\d{6}",,,,"800123456"],[,,"900[2-49]\\d{5}",,,,"900212345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"89[1-579]\\d{6}",,,,"891234567"],"UA",380,"00","0",,,"0",,"0~0",,[[,"([3-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]","[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"],
"0$1"],[,"([3-689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90","3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"],"0$1"],[,"([3-6]\\d{3})(\\d{5})","$1 $2",["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])","3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"],
"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UG:[,[,,"(?:(?:[29]0|[347]\\d)\\d|800)\\d{6}",,,,,,,[9],[5,6,7]],[,,"20(?:[0147]\\d{3}|2(?:40|[5-9]\\d)\\d|3(?:0[0-4]|[2367]\\d)\\d|5[0-4]\\d{2}|6(?:00[0-2]|30[0-4]|[5-9]\\d{2})|8[0-2]\\d{2})\\d{3}|[34]\\d{8}",,,,"312345678",,,,[5,6,7]],[,,"7(?:[09][0-7]\\d|[1578]\\d{2}|2(?:[03]\\d|60)|30\\d|4[0-4]\\d)\\d{5}",,,,"712345678"],[,,"800[123]\\d{5}",,,,"800123456"],[,,"90[123]\\d{6}",,,,"901123456"],[,,,,,,,,,[-1]],[,,,,,,,,
,[-1]],[,,,,,,,,,[-1]],"UG",256,"00[057]","0",,,"0",,,,[[,"(\\d{3})(\\d{6})","$1 $2",["20[0-8]|4(?:6[45]|[7-9])|[7-9]","20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["3|4(?:[1-5]|6[0-36-9])"],"0$1"],[,"(2024)(\\d{5})","$1 $2",["202","2024"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],US:[,[,,"[2-9]\\d{9}",,,,,,,[10],[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
,,,"2015550123",,,,[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
,,,"2015550123",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"US",1,"011","1",,,"1",,,1,[[,"(\\d{3})(\\d{4})","$1-$2",,,,1],[,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",,,,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3"]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,"710[2-9]\\d{6}",,,,"7102123456"],,,[,,,,,,,,,[-1]]],UY:[,[,,"(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",
,,,,,,[7,8]],[,,"2\\d{7}|4[2-7]\\d{6}",,,,"21231234",,,[8],[7]],[,,"9[1-9]\\d{6}",,,,"94231234",,,[8]],[,,"80[05]\\d{4}",,,,"8001234",,,[7]],[,,"90[0-8]\\d{4}",,,,"9001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UY",598,"0(?:1[3-9]\\d|0)","0"," int. ",,"0",,"00",,[[,"(\\d{4})(\\d{4})","$1 $2",["[24]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9[1-9]"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["[89]0"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UZ:[,
[,,"[679]\\d{8}",,,,,,,[9],[7]],[,,"(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}",,,,"669050123",,,,[7]],[,,"6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}",
,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UZ",998,"810","8",,,"8",,"8~10",,[[,"([679]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[679]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VA:[,[,,"0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?",,,,,,,[6,7,8,9,10,11]],[,,"06698\\d{1,6}",,,,"0669812345"],[,,"3(?:1\\d{8}|[245-9]\\d{7,8}|3\\d{7,9})",,,,"3123456789",,,[9,10,11]],[,,"80(?:0\\d{6}|3\\d{3})",
,,,"800123456",,,[6,9]],[,,"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{6}|[17]\\d{3})",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"VA",39,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,"848\\d{6}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VC:[,[,,"(?:[58]\\d\\d|784|900)\\d{7}",,,,,,,[10],[7]],[,,"784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",
,,,"7842661234",,,,[7]],[,,"784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}",,,,"7844301234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"784",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VE:[,[,,"(?:(?:[24]\\d|50)\\d|[89]00)\\d{7}",,,,,,,[10],[7]],[,,"(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}",
,,,"2121234567",,,,[7]],[,,"4(?:1[24-8]|2[46])\\d{7}",,,,"4121234567"],[,,"800\\d{7}",,,,"8001234567"],[,,"900\\d{7}",,,,"9001234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"VE",58,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{7})","$1-$2",,"0$1","$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VG:[,[,,"(?:284|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})",,,,"2842291234",,,,[7]],[,,"284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})",
,,,"2843001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VG",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"284",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VI:[,[,,"(?:(?:34|90)0|[58]\\d\\d)\\d{7}",,,,,,,[10],[7]],[,,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",
,,,"3406421234",,,,[7]],[,,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VI",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"340",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VN:[,[,,"[12]\\d{9}|[135-9]\\d{8}|(?:[16]\\d?|[78])\\d{6}",
,,,,,,[7,8,9,10]],[,,"2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}",,,,"2101234567",,,[9,10]],[,,"(?:1(?:2\\d|6[2-9]|8[68]|99)\\d|3\\d{2}|5(?:2[23]|[689]\\d)|7[06-9]\\d|8(?:[1-58]\\d|[69][689])|9(?:[0-8]\\d|9[013-9]))\\d{6}",,,,"912345678",,,[9,10]],[,,"1800\\d{4,6}",,,,"1800123456",,,[8,9,10]],[,,"1900\\d{4,6}",,,,"1900123456",,,[8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:672|992)\\d{6}",,,,"992012345",,,[9]],"VN",84,"00","0",,,"0",,,,[[,"([17]99)(\\d{4})",
"$1 $2",["[17]99"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",,1],[,"(80)(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(69\\d)(\\d{4,5})","$1 $2",["69"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2[0-35-79]"],"0$1",,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["672|9"],"0$1",,1],[,"(1[2689]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[26]|8[68]|99)"],"0$1",,1],[,"([3578]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[357]|8[1-9]"],"0$1",,1],[,"(1[89]00)(\\d{4,6})","$1 $2",["1[89]0",
"1[89]00"],"$1",,1]],,[,,,,,,,,,[-1]],,,[,,"[17]99\\d{4}|69\\d{5,6}",,,,,,,[7,8]],[,,"[17]99\\d{4}|69\\d{5,6}|80\\d{5}",,,,"1992000",,,[7,8]],,,[,,,,,,,,,[-1]]],VU:[,[,,"(?:(?:[23]|[57]\\d\\d|900)\\d|[48]8)\\d{3}",,,,,,,[5,7]],[,,"(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}",,,,"22123",,,[5]],[,,"(?:5(?:7[2-5]|[0-689]\\d)|7[013-7]\\d)\\d{4}",,,,"5912345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"VU",678,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",
["[579]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"3[03]\\d{3}|900\\d{4}",,,,"30123"],,,[,,,,,,,,,[-1]]],WF:[,[,,"(?:[45]0|68|72|8\\d)\\d{4}",,,,,,,[6]],[,,"(?:50|68|72)\\d{4}",,,,"501234"],[,,"(?:50|68|72|8[23])\\d{4}",,,,"501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WF",681,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"[48]0\\d{4}",,,,"401234"]],WS:[,[,,"(?:[2-6]|8\\d(?:\\d{4})?)\\d{4}|[78]\\d{6}",
,,,,,,[5,6,7,10]],[,,"(?:[2-5]\\d|6[1-9])\\d{3}",,,,"22123",,,[5]],[,,"(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}",,,,"7212345",,,[7,10]],[,,"800\\d{3}",,,,"800123",,,[6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WS",685,"0",,,,,,,,[[,"(8\\d{2})(\\d{3,7})","$1 $2",["8"]],[,"(7\\d)(\\d{5})","$1 $2",["7"]],[,"(\\d{5})","$1",["[2-6]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],XK:[,[,,"(?:[23]\\d{2,3}|4\\d\\d|[89]00)\\d{5}",,,,,,,[8,9]],[,,"(?:2[89]0?|3(?:8|90?))\\d{6}",
,,,"28012345"],[,,"4[3-79]\\d{6}",,,,"43201234",,,[8]],[,,"800\\d{5}",,,,"80001234",,,[8]],[,,"900\\d{5}",,,,"90001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"XK",383,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[23][89]|4[3-79]"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[89]00"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YE:[,[,,"(?:1|7\\d)\\d{7}|[1-7]\\d{6}",,,,,,,[7,8,9],[6]],[,,"(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}",
,,,"1234567",,,[7,8],[6]],[,,"7[0137]\\d{7}",,,,"712345678",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YE",967,"00","0",,,"0",,,,[[,"([1-7])(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],[,"(7\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7[0137]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YT:[,[,,"(?:(?:26|63)9|80\\d)\\d{6}",,,,,,,[9]],[,,"269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}",,,,"269601234"],[,,"639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}",
,,,"639012345"],[,,"80\\d{7}",,,,"801234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YT",262,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"269|63",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZA:[,[,,"[1-9]\\d{8}|8\\d{4,7}",,,,,,,[5,6,7,8,9]],[,,"(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,,"101234567",,,[9]],[,,"(?:6\\d|7[0-46-9])\\d{7}|8(?:[1-4]\\d{1,5}|5\\d{5})\\d{2}",,,,"711234567"],[,,"80\\d{7}",,,,"801234567",,,[9]],[,,"86[2-9]\\d{6}|9[0-2]\\d{7}",,,,"862345678",
,,[9]],[,,"860\\d{6}",,,,"860123456",,,[9]],[,,,,,,,,,[-1]],[,,"87\\d{7}",,,,"871234567",,,[9]],"ZA",27,"00","0",,,"0",,,,[[,"(860)(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],[,"(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-79]|8(?:[0-57]|6[1-9])"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"861\\d{6}",,,,"861123456",,,[9]],,,[,,,,,,,,,[-1]]],ZM:[,[,,"(?:(?:21|9\\d)\\d|800)\\d{6}",,,,,,,[9],
[6,7]],[,,"21[1-8]\\d{6}",,,,"211234567",,,,[6,7]],[,,"9[4-9]\\d{7}",,,,"955123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ZM",260,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4})","$1 $2",,"$1"],[,"([1-8])(\\d{2})(\\d{4})","$1 $2 $3",["[1-8]"],"$1"],[,"([29]\\d)(\\d{7})","$1 $2",["[29]"],"0$1"],[,"(800)(\\d{3})(\\d{3})","$1 $2 $3",["800"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZW:[,[,,"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{7})|(?:[38]\\d|7)\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
,,,,,,[5,6,7,8,9,10],[3,4]],[,,"(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|37|6[78]|75\\d|98|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|[4-8]|9\\d)|2(?:0\\d{2}|12|292|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|1[2-4]|26|[37]2|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83\\d|2582\\d{2}|65[2-8])\\d{2}|(?:4\\d{6,7}|9[2-9]\\d{4,5})",
,,,"1312345",,,,[3,4]],[,,"(?:7(?:1\\d|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}",,,,"712345678",,,[9,10]],[,,"80(?:[01]\\d|20|8[0-8])\\d{3}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"86(?:1[12]|30|55|77|8[368])\\d{6}",,,,"8686123456",,,[10]],"ZW",263,"00","0",,,"0",,,,[[,"([49])(\\d{3})(\\d{2,4})","$1 $2 $3",["4|9[2-9]"],"0$1"],[,"(7\\d)(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(86\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["86[24]"],"0$1"],[,"([2356]\\d{2})(\\d{3,5})","$1 $2",
["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"],"0$1"],[,"([1-356]\\d)(\\d{3,5})","$1 $2",["1[3-9]|2[02569]|3[0-69]|5[05689]|6"],"0$1"],[,"([235]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[23]9|54"],"0$1"],[,"([25]\\d{3})(\\d{3,5})","$1 $2",["(?:25|54)8","258[23]|5483"],"0$1"],[,"(8\\d{3})(\\d{6})","$1 $2",["86"],"0$1"],[,"(80\\d)(\\d{4})","$1 $2",["80"],
"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],800:[,[,,"\\d{8}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",800,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],808:[,[,,"\\d{8}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
"001",808,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],870:[,[,,"[35-7]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"(?:[356]\\d|7[6-8])\\d{7}",,,,"301234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",870,,,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],878:[,[,,"10\\d{10}",,,,,,,[12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,
,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"10\\d{10}",,,,"101234567890"],"001",878,,,,,,,,1,[[,"(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],881:[,[,,"[67]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"[67]\\d{8}",,,,"612345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",881,,,,,,,,,[[,"(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
,,[,,,,,,,,,[-1]]],882:[,[,,"[13]\\d{6}(?:\\d{2,5})?|1\\d{7}",,,,,,,[7,8,9,10,11,12]],[,,,,,,,,,[-1]],[,,"3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}",,,,"3421234",,,[7,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|3(?:45|9\\d{3})\\d{7}",,,,"390123456789"],"001",882,,,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],[,"(\\d{2})(\\d{5})","$1 $2",["16|342"]],[,"(\\d{2})(\\d{4})(\\d{4})",
"$1 $2 $3",["34[57]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["348"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],[,"(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["16|39"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"348[57]\\d{7}",,,,"34851234567",,,[11]]],883:[,[,,"51\\d{7}(?:\\d{3})?",,,,,,,[9,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})",
,,,"510012345"],"001",883,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"]],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],888:[,[,,"\\d{11}",,,,,,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",888,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,
,[-1]],[,,"\\d{11}",,,,"12345678901"],,,[,,,,,,,,,[-1]]],979:[,[,,"\\d{9}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{9}",,,,"123456789"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",979,,,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]]};

function M(){this.a={}}M.c=void 0;M.a=function(){return M.c?M.c:M.c=new M};
var xa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},ya={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},N=/^[+\uff0b]+/,za=/([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,Aa=/[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,Ba=/[\\\/] *x/,Ca=/[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,Da=/(?:.*?[A-Za-z]){3}.*/,Ea=/(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
Fa=/^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
Ga=/(\$\d)/;function Ha(a){var b=a.search(Aa);0<=b?(a=a.substring(b),a=a.replace(Ca,""),b=a.search(Ba),0<=b&&(a=a.substring(0,b))):a="";return a}function Ia(a){return 2>a.length?!1:O(Fa,a)}function Ja(a){return O(Da,a)?P(a,ya):P(a,xa)}function Ka(a){var b=Ja(a.toString());a.c="";a.a(b)}function La(a){return null!=a&&(1!=A(a,9)||-1!=w(a,9)[0])}function P(a,b){for(var c=new F,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}
function Q(a){return null!=a&&isNaN(a)&&a.toUpperCase()in wa}
function Ma(a,b,c){if(0==t(b,2)&&null!=b.a[5]){var d=y(b,5);if(0<d.length)return d}d=y(b,1);var e=R(b);if(0==c)return Na(d,0,e,"");if(!(d in K))return e;a=S(a,d,T(d));b=null!=b.a[3]&&0!=t(b,3).length?3==c?";ext="+t(b,3):null!=a.a[13]?t(a,13)+y(b,3):" ext. "+y(b,3):"";a:{a=0==w(a,20).length||2==c?w(a,19):w(a,20);for(var f,g=a.length,h=0;h<g;++h){f=a[h];var l=A(f,3);if(0==l||0==e.search(t(f,3,l-1)))if(l=new RegExp(t(f,1)),O(l,e)){a=f;break a}}a=null}null!=a&&(g=a,a=y(g,2),f=new RegExp(t(g,1)),y(g,5),
g=y(g,4),e=2==c&&null!=g&&0<g.length?e.replace(f,a.replace(Ga,g)):e.replace(f,a),3==c&&(e=e.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/,""),e=e.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g,"-")));return Na(d,c,e,b)}function S(a,b,c){return"001"==c?U(a,""+b):U(a,c)}
function R(a){if(null==a.a[2])return"";var b=""+t(a,2);return null!=a.a[4]&&t(a,4)&&0<y(a,8)?Array(y(a,8)+1).join("0")+b:b}function Na(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}
function V(a,b){switch(b){case 4:return t(a,5);case 3:return t(a,4);case 1:return t(a,3);case 0:case 2:return t(a,2);case 5:return t(a,6);case 6:return t(a,8);case 7:return t(a,7);case 8:return t(a,21);case 9:return t(a,25);case 10:return t(a,28);default:return t(a,1)}}function W(a,b){return X(a,t(b,1))?X(a,t(b,5))?4:X(a,t(b,4))?3:X(a,t(b,6))?5:X(a,t(b,8))?6:X(a,t(b,7))?7:X(a,t(b,21))?8:X(a,t(b,25))?9:X(a,t(b,28))?10:X(a,t(b,2))?t(b,18)||X(a,t(b,3))?2:0:!t(b,18)&&X(a,t(b,3))?1:-1:-1}
function U(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(null==c){c=wa[b];if(null==c)return null;c=(new E).a(I.f(),c);a.a[b]=c}return c}function X(a,b){var c=a.length;return 0<A(b,9)&&-1==p(w(b,9),c)?!1:O(y(b,2),a)}
function Oa(a,b){if(null==b)return null;var c=y(b,1);c=K[c];if(null==c)a=null;else if(1==c.length)a=c[0];else a:{b=R(b);for(var d,e=c.length,f=0;f<e;f++){d=c[f];var g=U(a,d);if(null!=g.a[23]){if(0==b.search(t(g,23))){a=d;break a}}else if(-1!=W(b,g)){a=d;break a}}a=null}return a}function T(a){a=K[a];return null==a?"ZZ":a[0]}
function Y(a,b,c,d){var e=V(c,d),f=0==A(e,9)?w(t(c,1),9):w(e,9);e=w(e,10);if(2==d)if(La(V(c,0)))a=V(c,1),La(a)&&(f=f.concat(0==A(a,9)?w(t(c,1),9):w(a,9)),q(f),0==e.length?e=w(a,10):(e=e.concat(w(a,10)),q(e)));else return Y(a,b,c,1);if(-1==f[0])return 5;b=b.length;if(-1<p(e,b))return 4;c=f[0];return c==b?0:c>b?2:f[f.length-1]<b?3:-1<p(f,b,1)?0:5}function Pa(a,b){var c=R(b);b=y(b,1);if(!(b in K))return 1;b=S(a,b,T(b));return Y(a,c,b,-1)}
function Qa(a,b,c,d,e,f){if(0==b.length)return 0;b=new F(b);var g;null!=c&&(g=t(c,11));null==g&&(g="NonMatch");var h=b.toString();if(0==h.length)g=20;else if(N.test(h))h=h.replace(N,""),b.c="",b.a(Ja(h)),g=1;else{h=new RegExp(g);Ka(b);g=b.toString();if(0==g.search(h)){h=g.match(h)[0].length;var l=g.substring(h).match(za);l&&null!=l[1]&&0<l[1].length&&"0"==P(l[1],xa)?g=!1:(b.c="",b.a(g.substring(h)),g=!0)}else g=!1;g=g?5:20}e&&u(f,6,g);if(20!=g){if(2>=b.c.length)throw Error("Phone number too short after IDD");
a:{a=b.toString();if(0!=a.length&&"0"!=a.charAt(0))for(e=a.length,b=1;3>=b&&b<=e;++b)if(c=parseInt(a.substring(0,b),10),c in K){d.a(a.substring(b));d=c;break a}d=0}if(0!=d)return u(f,1,d),d;throw Error("Invalid country calling code");}if(null!=c&&(g=y(c,10),h=""+g,l=b.toString(),0==l.lastIndexOf(h,0)&&(h=new F(l.substring(h.length)),l=t(c,1),l=new RegExp(y(l,2)),Ra(h,c,null),h=h.toString(),!O(l,b.toString())&&O(l,h)||3==Y(a,b.toString(),c,-1))))return d.a(h),e&&u(f,6,10),u(f,1,g),g;u(f,1,0);return 0}
function Ra(a,b,c){var d=a.toString(),e=d.length,f=t(b,15);if(0!=e&&null!=f&&0!=f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){f=new RegExp(y(t(b,1),2));var h=O(f,d),l=e.length-1;b=t(b,16);if(null==b||0==b.length||null==e[l]||0==e[l].length){if(!h||O(f,d.substring(e[0].length)))null!=c&&0<l&&null!=e[l]&&c.a(e[1]),a.set(d.substring(e[0].length))}else if(d=d.replace(g,b),!h||O(f,d))null!=c&&0<l&&c.a(e[1]),a.set(d)}}}
function Z(a,b,c){if(!Q(c)&&0<b.length&&"+"!=b.charAt(0))throw Error("Invalid country calling code");return Sa(a,b,c,!0)}
function Sa(a,b,c,d){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var e=new F,f=b.indexOf(";phone-context=");if(0<=f){var g=f+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?e.a(b.substring(g,h)):e.a(b.substring(g))}g=b.indexOf("tel:");e.a(b.substring(0<=g?g+4:0,f))}else e.a(Ha(b));f=e.toString();g=f.indexOf(";isub=");0<g&&(e.c="",e.a(f.substring(0,g)));if(!Ia(e.toString()))throw Error("The string supplied did not seem to be a phone number");
f=e.toString();if(!(Q(c)||null!=f&&0<f.length&&N.test(f)))throw Error("Invalid country calling code");f=new J;d&&u(f,5,b);a:{b=e.toString();g=b.search(Ea);if(0<=g&&Ia(b.substring(0,g))){h=b.match(Ea);for(var l=h.length,z=1;z<l;++z)if(null!=h[z]&&0<h[z].length){e.c="";e.a(b.substring(0,g));b=h[z];break a}}b=""}0<b.length&&u(f,3,b);g=U(a,c);b=new F;h=0;l=e.toString();try{h=Qa(a,l,g,b,d,f)}catch(L){if("Invalid country calling code"==L.message&&N.test(l)){if(l=l.replace(N,""),h=Qa(a,l,g,b,d,f),0==h)throw L;
}else throw L;}0!=h?(e=T(h),e!=c&&(g=S(a,h,e))):(Ka(e),b.a(e.toString()),null!=c?(h=y(g,10),u(f,1,h)):d&&(delete f.a[6],f.c&&delete f.c[6]));if(2>b.c.length)throw Error("The string supplied is too short to be a phone number");null!=g&&(c=new F,e=new F(b.toString()),Ra(e,g,c),a=Y(a,e.toString(),g,-1),2!=a&&4!=a&&5!=a&&(b=e,d&&0<c.toString().length&&u(f,7,c.toString())));d=b.toString();a=d.length;if(2>a)throw Error("The string supplied is too short to be a phone number");if(17<a)throw Error("The string supplied is too long to be a phone number");
if(1<d.length&&"0"==d.charAt(0)){u(f,4,!0);for(a=1;a<d.length-1&&"0"==d.charAt(a);)a++;1!=a&&u(f,8,a)}u(f,2,parseInt(d,10));return f}function O(a,b){return(a="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a))&&a[0].length==b.length?!0:!1};m("intlTelInputUtils",{});m("intlTelInputUtils.formatNumber",function(a,b,c){try{var d=M.a(),e=Z(d,a,b),f=Pa(d,e);return 0==f||4==f?Ma(d,e,"undefined"==typeof c?0:c):a}catch(g){return a}});m("intlTelInputUtils.getExampleNumber",function(a,b,c){try{var d=M.a();a:{if(Q(a)){var e=V(U(d,a),c);try{if(null!=e.a[6]){var f=t(e,6);var g=Sa(d,f,a,!1);break a}}catch(h){}}g=null}return Ma(d,g,b?2:1)}catch(h){return""}});m("intlTelInputUtils.getExtension",function(a,b){try{return t(Z(M.a(),a,b),3)}catch(c){return""}});
m("intlTelInputUtils.getNumberType",function(a,b){try{var c=M.a();var d=Z(c,a,b),e=Oa(c,d),f=S(c,y(d,1),e);if(null==f)var g=-1;else{var h=R(d);g=W(h,f)}return g}catch(l){return-99}});
m("intlTelInputUtils.getValidationError",function(a,b){try{var c=M.a(),d=Z(c,a,b);return Pa(c,d)}catch(e){return"Invalid country calling code"==e.message?1:"The string supplied did not seem to be a phone number"==e.message?4:"Phone number too short after IDD"==e.message||"The string supplied is too short to be a phone number"==e?2:"The string supplied is too long to be a phone number"==e.message?3:-99}});
m("intlTelInputUtils.isValidNumber",function(a,b){try{var c=M.a(),d=Z(c,a,b);var e=Oa(c,d),f=y(d,1),g=S(c,f,e),h;if(!(h=null==g)){var l;if(l="001"!=e){var z=U(c,e);if(null==z)throw Error("Invalid region code: "+e);var L=y(z,10);l=f!=L}h=l}if(h)var va=!1;else{var Ta=R(d);va=-1!=W(Ta,g)}return va}catch(Ua){return!1}});m("intlTelInputUtils.numberFormat",{E164:0,INTERNATIONAL:1,NATIONAL:2,RFC3966:3});
m("intlTelInputUtils.numberType",{FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10,UNKNOWN:-1});m("intlTelInputUtils.validationError",{IS_POSSIBLE:0,INVALID_COUNTRY_CODE:1,TOO_SHORT:2,TOO_LONG:3,NOT_A_NUMBER:4});})();

/*
 * International Telephone Input v14.0.0
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

!function(a){var b=function(a,b,c){"use strict";return function(){for(var c=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],d=0;d<c.length;d++){var e=c[d];c[d]={name:e[0],iso2:e[1],dialCode:e[2],priority:e[3]||0,areaCodes:e[4]||null}}a.intlTelInputGlobals={instances:{}};var f=0,g={allowDropdown:!0,autoHideDialCode:!0,autoPlaceholder:"polite",customPlaceholder:null,dropdownContainer:null,excludeCountries:[],formatOnDisplay:!0,geoIpLookup:null,hiddenInput:"",initialCountry:"",localizedCountries:null,nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:!1,utilsScript:""},h=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"];a.addEventListener("load",function(){a.intlTelInputGlobals.windowLoaded=!0});var i=function(a,b){for(var c=Object.keys(a),d=0;d<c.length;d++)b(c[d],a[c[d]])},j=function(b){i(a.intlTelInputGlobals.instances,function(c,d){a.intlTelInputGlobals.instances[c][b]()})},k=function(a,b){var c=this;this.id=f++,this.a=a;var d=b||{};this.b={},i(g,function(a,b){c.b[a]=d.hasOwnProperty(a)?d[a]:b}),this.e=Boolean(a.getAttribute("placeholder"))};k.prototype={_a:function(){var a=this;if(this.b.nationalMode&&(this.b.autoHideDialCode=!1),this.b.separateDialCode&&(this.b.autoHideDialCode=this.b.nationalMode=!1),this.g=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.g&&(b.body.classList.add("iti-mobile"),this.b.dropdownContainer||(this.b.dropdownContainer=b.body)),"undefined"!=typeof Promise){var c=new Promise(function(b,c){a.h=b,a.rejectAutoCountryPromise=c}),d=new Promise(function(b,c){a.i=b,a.rejectUtilsScriptPromise=c});this.promise=Promise.all([c,d])}else this.h=this.rejectAutoCountryPromise=this.i=this.rejectUtilsScriptPromise=function(){};this.s={},this._b(),this._f(),this._h(),this._i(),this._i2()},_b:function(){this._d(),this._d2(),this._e(),this.b.localizedCountries&&this._translateCountriesByLocale(),(this.b.onlyCountries.length||this.b.localizedCountries)&&this.p.sort(this._countryNameSort)},_c:function(a,b,c){this.q.hasOwnProperty(b)||(this.q[b]=[]);var d=c||0;this.q[b][d]=a},_d:function(){if(this.b.onlyCountries.length){var a=this.b.onlyCountries.map(function(a){return a.toLowerCase()});this.p=c.filter(function(b){return a.indexOf(b.iso2)>-1})}else if(this.b.excludeCountries.length){var b=this.b.excludeCountries.map(function(a){return a.toLowerCase()});this.p=c.filter(function(a){return-1===b.indexOf(a.iso2)})}else this.p=c},_translateCountriesByLocale:function(){for(var a=0;a<this.p.length;a++){var b=this.p[a].iso2.toLowerCase();this.b.localizedCountries.hasOwnProperty(b)&&(this.p[a].name=this.b.localizedCountries[b])}},_countryNameSort:function(a,b){return a.name.localeCompare(b.name)},_d2:function(){this.q={};for(var a=0;a<this.p.length;a++){var b=this.p[a];if(this._c(b.iso2,b.dialCode,b.priority),b.areaCodes)for(var c=0;c<b.areaCodes.length;c++)this._c(b.iso2,b.dialCode+b.areaCodes[c])}},_e:function(){this.preferredCountries=[];for(var a=0;a<this.b.preferredCountries.length;a++){var b=this.b.preferredCountries[a].toLowerCase(),c=this._y(b,!1,!0);c&&this.preferredCountries.push(c)}},_createEl:function(a,c,d){var e=b.createElement(a);return c&&i(c,function(a,b){e.setAttribute(a,b)}),d&&d.appendChild(e),e},_f:function(){this.a.setAttribute("autocomplete","off");var a="intl-tel-input";this.b.allowDropdown&&(a+=" allow-dropdown"),this.b.separateDialCode&&(a+=" separate-dial-code");var b=this._createEl("div",{"class":a});if(this.a.parentNode.insertBefore(b,this.a),this.k=this._createEl("div",{"class":"flag-container"},b),b.appendChild(this.a),this.selectedFlag=this._createEl("div",{"class":"selected-flag",role:"combobox","aria-owns":"country-listbox"},this.k),this.l=this._createEl("div",{"class":"iti-flag"},this.selectedFlag),this.b.separateDialCode&&(this.t=this._createEl("div",{"class":"selected-dial-code"},this.selectedFlag)),this.b.allowDropdown&&(this.selectedFlag.setAttribute("tabindex","0"),this.dropdownArrow=this._createEl("div",{"class":"iti-arrow"},this.selectedFlag),this.m=this._createEl("ul",{"class":"country-list hide",id:"country-listbox","aria-expanded":"false",role:"listbox"}),this.preferredCountries.length&&(this._g(this.preferredCountries,"preferred"),this._createEl("li",{"class":"divider",role:"separator","aria-disabled":"true"},this.m)),this._g(this.p,"standard"),this.b.dropdownContainer?(this.dropdown=this._createEl("div",{"class":"intl-tel-input iti-container"}),this.dropdown.appendChild(this.m)):this.k.appendChild(this.m)),this.b.hiddenInput){var c=this.b.hiddenInput,d=this.a.getAttribute("name");if(d){var e=d.lastIndexOf("[");-1!==e&&(c=d.substr(0,e)+"["+c+"]")}this.hiddenInput=this._createEl("input",{type:"hidden",name:c}),b.appendChild(this.hiddenInput)}},_g:function(a,b){for(var c="",d=0;d<a.length;d++){var e=a[d];c+="<li class='country "+b+"' id='iti-item-"+e.iso2+"' role='option' data-dial-code='"+e.dialCode+"' data-country-code='"+e.iso2+"'>",c+="<div class='flag-box'><div class='iti-flag "+e.iso2+"'></div></div>",c+="<span class='country-name'>"+e.name+"</span>",c+="<span class='dial-code'>+"+e.dialCode+"</span>",c+="</li>"}this.m.insertAdjacentHTML("beforeend",c)},_h:function(){var a=this.a.value,b=this._af(a),c=this._isRegionlessNanp(a);b&&!c?this._v(a):"auto"!==this.b.initialCountry&&(this.b.initialCountry?this._z(this.b.initialCountry.toLowerCase()):b&&c?this._z("us"):(this.j=this.preferredCountries.length?this.preferredCountries[0].iso2:this.p[0].iso2,a||this._z(this.j)),a||this.b.nationalMode||this.b.autoHideDialCode||this.b.separateDialCode||(this.a.value="+"+this.s.dialCode)),a&&this._u(a)},_i:function(){this._j(),this.b.autoHideDialCode&&this._l(),this.b.allowDropdown&&this._i1(),this.hiddenInput&&this._initHiddenInputListener()},_initHiddenInputListener:function(){var a=this;this._handleHiddenInputSubmit=function(){a.hiddenInput.value=a.getNumber()};var b=this.a.form;b&&b.addEventListener("submit",this._handleHiddenInputSubmit)},_getClosestLabel:function(){for(var a=this.a;a&&"LABEL"!==a.tagName;)a=a.parentNode;return a},_i1:function(){var a=this;this._handleLabelClick=function(b){a.m.classList.contains("hide")?a.a.focus():b.preventDefault()};var b=this._getClosestLabel();b&&b.addEventListener("click",this._handleLabelClick),this._handleClickSelectedFlag=function(){!a.m.classList.contains("hide")||a.a.disabled||a.a.readOnly||a._n()},this.selectedFlag.addEventListener("click",this._handleClickSelectedFlag),this._handleFlagsContainerKeydown=function(b){a.m.classList.contains("hide")&&-1!==["ArrowUp","ArrowDown"," ","Enter"].indexOf(b.key)&&(b.preventDefault(),b.stopPropagation(),a._n()),"Tab"===b.key&&a._ac()},this.k.addEventListener("keydown",this._handleFlagsContainerKeydown)},_i2:function(){var b=this;this.b.utilsScript&&!a.intlTelInputUtils?a.intlTelInputGlobals.windowLoaded?a.intlTelInputGlobals.loadUtils(this.b.utilsScript):a.addEventListener("load",function(){a.intlTelInputGlobals.loadUtils(b.b.utilsScript)}):this.i(),"auto"===this.b.initialCountry?this._i3():this.h()},_i3:function(){a.intlTelInputGlobals.autoCountry?this.handleAutoCountry():a.intlTelInputGlobals.startedLoadingAutoCountry||(a.intlTelInputGlobals.startedLoadingAutoCountry=!0,"function"==typeof this.b.geoIpLookup&&this.b.geoIpLookup(function(b){a.intlTelInputGlobals.autoCountry=b.toLowerCase(),setTimeout(function(){j("handleAutoCountry")})},function(){j("rejectAutoCountryPromise")}))},_j:function(){var a=this;this._handleKeyupEvent=function(){a._v(a.a.value)&&a._triggerCountryChange()},this.a.addEventListener("keyup",this._handleKeyupEvent),this._handleClipboardEvent=function(){setTimeout(a._handleKeyupEvent)},this.a.addEventListener("cut",this._handleClipboardEvent),this.a.addEventListener("paste",this._handleClipboardEvent)},_j2:function(a){var b=this.a.getAttribute("maxlength");return b&&a.length>b?a.substr(0,b):a},_l:function(){var a=this;this._handleMousedownFocusEvent=function(c){a.a===b.activeElement||a.a.value||(c.preventDefault(),a.a.focus())},this.a.addEventListener("mousedown",this._handleMousedownFocusEvent),this._handleKeypressPlusEvent=function(b){"+"===b.key&&(a.a.value="")},this._handleFocusEvent=function(b){a.a.value||a.a.readOnly||!a.s.dialCode||(a.a.value="+"+a.s.dialCode,a.a.addEventListener("keypress",a._handleKeypressPlusEvent),setTimeout(function(){var b=a.a.value.length;a.a.setSelectionRange(b,b)}))},this.a.addEventListener("focus",this._handleFocusEvent),this._handleSubmitOrBlurEvent=function(){a._removeEmptyDialCode()};var c=this.a.form;c&&c.addEventListener("submit",this._handleSubmitOrBlurEvent),this.a.addEventListener("blur",this._handleSubmitOrBlurEvent)},_removeEmptyDialCode:function(){if("+"===this.a.value.charAt(0)){var a=this._m(this.a.value);a&&this.s.dialCode!=a||(this.a.value="")}this.a.removeEventListener("keypress",this._handleKeypressPlusEvent)},_m:function(a){return a.replace(/\D/g,"")},_trigger:function(a){var c=b.createEvent("Event");c.initEvent(a,!0,!0),this.a.dispatchEvent(c)},_n:function(){this.m.classList.remove("hide"),this.m.setAttribute("aria-expanded","true"),this._o();var a=this.m.querySelector(".active");a&&(this._x(a),this._ad(a)),this._p(),this.dropdownArrow.classList.add("up"),this._trigger("open:countrydropdown")},_toggleClass:function(a,b,c){c&&!a.classList.contains(b)?a.classList.add(b):!c&&a.classList.contains(b)&&a.classList.remove(b)},_o:function(){var c=this;if(this.b.dropdownContainer&&this.b.dropdownContainer.appendChild(this.dropdown),!this.g){var d=this.a.getBoundingClientRect(),e=a.pageYOffset||b.documentElement.scrollTop,f=d.top+e,g=this.m.offsetHeight,h=f+this.a.offsetHeight+g<e+a.innerHeight,i=f-g>e;if(this._toggleClass(this.m,"dropup",!h&&i),this.b.dropdownContainer){var j=!h&&i?0:this.a.offsetHeight;this.dropdown.style.top=f+j+"px",this.dropdown.style.left=d.left+b.body.scrollLeft+"px",this._handleWindowScroll=function(){c._ac()},a.addEventListener("scroll",this._handleWindowScroll)}}},_getClosestListItem:function(a){for(var b=a;b&&b!==this.m&&!b.classList.contains("country");)b=b.parentNode;return b===this.m?null:b},_p:function(){var a=this;this._handleMouseoverCountryList=function(b){var c=a._getClosestListItem(b.target);c&&a._x(c)},this.m.addEventListener("mouseover",this._handleMouseoverCountryList),this._handleClickCountryList=function(b){var c=a._getClosestListItem(b.target);c&&a._ab(c)},this.m.addEventListener("click",this._handleClickCountryList);var c=!0;this._handleClickOffToClose=function(){c||a._ac(),c=!1},b.documentElement.addEventListener("click",this._handleClickOffToClose);var d="",e=null;this._handleKeydownOnDropdown=function(b){b.preventDefault(),"ArrowUp"===b.key||"ArrowDown"===b.key?a._q(b.key):"Enter"===b.key?a._r():"Escape"===b.key?a._ac():/^[a-zA-ZÀ-ÿ ]$/.test(b.key)&&(e&&clearTimeout(e),d+=b.key.toLowerCase(),a._s(d),e=setTimeout(function(){d=""},1e3))},b.addEventListener("keydown",this._handleKeydownOnDropdown)},_q:function(a){var b=this.m.querySelector(".country.highlight"),c="ArrowUp"===a?b.previousElementSibling:b.nextElementSibling;c&&(c.classList.contains("divider")&&(c="ArrowUp"===a?c.previousElementSibling:c.nextElementSibling),this._x(c),this._ad(c))},_r:function(){var a=this.m.querySelector(".country.highlight");a&&this._ab(a)},_s:function(a){for(var b=0;b<this.p.length;b++)if(this._t(this.p[b].name,a)){var c=this.m.querySelector("#iti-item-"+this.p[b].iso2);this._x(c),this._ad(c,!0);break}},_t:function(a,b){return a.substr(0,b.length).toLowerCase()==b},_u:function(b){if(this.b.formatOnDisplay&&a.intlTelInputUtils&&this.s){var c=this.b.separateDialCode||!this.b.nationalMode&&"+"==b.charAt(0)?intlTelInputUtils.numberFormat.INTERNATIONAL:intlTelInputUtils.numberFormat.NATIONAL;b=intlTelInputUtils.formatNumber(b,this.s.iso2,c)}b=this._ah(b),this.a.value=b},_v:function(a){a&&this.b.nationalMode&&"1"==this.s.dialCode&&"+"!=a.charAt(0)&&("1"!=a.charAt(0)&&(a="1"+a),a="+"+a);var b=this._af(a),c=null,d=this._m(a);if(b){var e=this.q[this._m(b)],f=-1!==e.indexOf(this.s.iso2),g="+1"==b&&d.length>=4;if((!("1"==this.s.dialCode)||!this._isRegionlessNanp(d))&&(!f||g))for(var h=0;h<e.length;h++)if(e[h]){c=e[h];break}}else"+"==a.charAt(0)&&d.length?c="":a&&"+"!=a||(c=this.j);return null!==c&&this._z(c)},_isRegionlessNanp:function(a){var b=this._m(a);if("1"==b.charAt(0)){var c=b.substr(1,3);return-1!==h.indexOf(c)}return!1},_x:function(a){var b=this.m.querySelector(".country.highlight");b&&b.classList.remove("highlight"),a.classList.add("highlight")},_y:function(a,b,d){for(var e=b?c:this.p,f=0;f<e.length;f++)if(e[f].iso2==a)return e[f];if(d)return null;throw new Error("No country data for '"+a+"'")},_z:function(a){var c=this.s.iso2?this.s:{};this.s=a?this._y(a,!1,!1):{},this.s.iso2&&(this.j=this.s.iso2),this.l.setAttribute("class","iti-flag "+a);var d=a?this.s.name+": +"+this.s.dialCode:"Unknown";if(this.selectedFlag.setAttribute("title",d),this.b.separateDialCode){var e=this.s.dialCode?"+"+this.s.dialCode:"",f=this.a.parentNode;c.dialCode&&f.classList.remove("iti-sdc-"+(c.dialCode.length+1)),e&&f.classList.add("iti-sdc-"+e.length);var g=b.createTextNode(e);this.t.appendChild(g)}if(this._aa(),this.b.allowDropdown){var h=this.m.querySelector(".country.active");if(h&&(h.classList.remove("active"),h.setAttribute("aria-selected","false")),a){var i=this.m.querySelector("#iti-item-"+a);i.classList.add("active"),i.setAttribute("aria-selected","true"),this.m.setAttribute("aria-activedescendant",i.getAttribute("id"))}}return c.iso2!==a},_aa:function(){var b="aggressive"===this.b.autoPlaceholder||!this.e&&"polite"===this.b.autoPlaceholder;if(a.intlTelInputUtils&&b){var c=intlTelInputUtils.numberType[this.b.placeholderNumberType],d=this.s.iso2?intlTelInputUtils.getExampleNumber(this.s.iso2,this.b.nationalMode,c):"";d=this._ah(d),"function"==typeof this.b.customPlaceholder&&(d=this.b.customPlaceholder(d,this.s)),this.a.setAttribute("placeholder",d)}},_ab:function(a){var b=this._z(a.getAttribute("data-country-code"));this._ac(),this._ae(a.getAttribute("data-dial-code"),!0),this.a.focus();var c=this.a.value.length;this.a.setSelectionRange(c,c),b&&this._triggerCountryChange()},_ac:function(){this.m.classList.add("hide"),this.m.setAttribute("aria-expanded","false"),this.dropdownArrow.classList.remove("up"),b.removeEventListener("keydown",this._handleKeydownOnDropdown),b.documentElement.removeEventListener("click",this._handleClickOffToClose),this.m.removeEventListener("mouseover",this._handleMouseoverCountryList),this.m.removeEventListener("click",this._handleClickCountryList),this.b.dropdownContainer&&(this.g||a.removeEventListener("scroll",this._handleWindowScroll),this.dropdown.parentNode&&this.dropdown.parentNode.removeChild(this.dropdown)),this._trigger("close:countrydropdown")},_ad:function(c,d){var e=this.m,f=a.pageYOffset||b.documentElement.scrollTop,g=e.offsetHeight,h=e.getBoundingClientRect().top+f,i=h+g,j=c.offsetHeight,k=c.getBoundingClientRect().top+f,l=k+j,m=k-h+e.scrollTop,n=g/2-j/2;if(k<h)d&&(m-=n),e.scrollTop=m;else if(l>i){d&&(m+=n);var o=g-j;e.scrollTop=m-o}},_ae:function(a,b){var c,d=this.a.value;if(a="+"+a,"+"==d.charAt(0)){var e=this._af(d);c=e?d.replace(e,a):a}else{if(this.b.nationalMode||this.b.separateDialCode)return;if(d)c=a+d;else{if(!b&&this.b.autoHideDialCode)return;c=a}}this.a.value=c},_af:function(a){var b="";if("+"==a.charAt(0))for(var c="",d=0;d<a.length;d++){var e=a.charAt(d);if(!isNaN(parseInt(e,10))&&(c+=e,this.q[c]&&(b=a.substr(0,d+1)),4==c.length))break}return b},_ag:function(){var a=this.a.value.trim(),b=this.s.dialCode,c=this._m(a),d="1"==c.charAt(0)?c:"1"+c;return(this.b.separateDialCode?"+"+b:a&&"+"!=a.charAt(0)&&"1"!=a.charAt(0)&&b&&"1"==b.charAt(0)&&4==b.length&&b!=d.substr(0,4)?b.substr(1):"")+a},_ah:function(a){if(this.b.separateDialCode){var b=this._af(a);if(b){null!==this.s.areaCodes&&(b="+"+this.s.dialCode);var c=" "===a[b.length]||"-"===a[b.length]?b.length+1:b.length;a=a.substr(c)}}return this._j2(a)},_triggerCountryChange:function(){this._trigger("countrychange")},handleAutoCountry:function(){"auto"===this.b.initialCountry&&(this.j=a.intlTelInputGlobals.autoCountry,this.a.value||this.setCountry(this.j),this.h())},handleUtils:function(){a.intlTelInputUtils&&(this.a.value&&this._u(this.a.value),this._aa()),this.i()},destroy:function(){var b=this.a.form;if(this.b.allowDropdown){this._ac(),this.selectedFlag.removeEventListener("click",this._handleClickSelectedFlag),this.k.removeEventListener("keydown",this._handleFlagsContainerKeydown);var c=this._getClosestLabel();c&&c.removeEventListener("click",this._handleLabelClick)}this.hiddenInput&&b&&b.removeEventListener("submit",this._handleHiddenInputSubmit),this.b.autoHideDialCode&&(this.a.removeEventListener("mousedown",this._handleMousedownFocusEvent),this.a.removeEventListener("focus",this._handleFocusEvent),b&&b.removeEventListener("submit",this._handleSubmitOrBlurEvent),this.a.removeEventListener("blur",this._handleSubmitOrBlurEvent)),this.a.removeEventListener("keyup",this._handleKeyupEvent),this.a.removeEventListener("cut",this._handleClipboardEvent),this.a.removeEventListener("paste",this._handleClipboardEvent);var d=this.a.parentNode;d.parentNode.insertBefore(this.a,d),d.parentNode.removeChild(d),delete a.intlTelInputGlobals.instances[this.id]},getExtension:function(){return a.intlTelInputUtils?intlTelInputUtils.getExtension(this._ag(),this.s.iso2):""},getNumber:function(b){return a.intlTelInputUtils?intlTelInputUtils.formatNumber(this._ag(),this.s.iso2,b):""},getNumberType:function(){return a.intlTelInputUtils?intlTelInputUtils.getNumberType(this._ag(),this.s.iso2):-99},getSelectedCountryData:function(){return this.s},getValidationError:function(){return a.intlTelInputUtils?intlTelInputUtils.getValidationError(this._ag(),this.s.iso2):-99},isValidNumber:function(){var b=this._ag().trim(),c=this.b.nationalMode?this.s.iso2:"";return a.intlTelInputUtils?intlTelInputUtils.isValidNumber(b,c):null},setCountry:function(a){a=a.toLowerCase(),this.l.classList.contains(a)||(this._z(a),this._ae(this.s.dialCode,!1),this._triggerCountryChange())},setNumber:function(a){var b=this._v(a);this._u(a),b&&this._triggerCountryChange()},setPlaceholderNumberType:function(a){this.b.placeholderNumberType=a,this._aa()}},a.intlTelInputGlobals.getCountryData=function(){return c};var l=function(a,c,d){var e=b.createElement("script");e.onload=function(){j("handleUtils"),c&&c()},e.onerror=function(){j("rejectUtilsScriptPromise"),d&&d()},e.className="iti-load-utils",e.async=!0,e.src=a,b.body.appendChild(e)};return a.intlTelInputGlobals.loadUtils=function(b){if(!a.intlTelInputUtils&&!a.intlTelInputGlobals.startedLoadingUtilsScript){if(a.intlTelInputGlobals.startedLoadingUtilsScript=!0,"undefined"!=typeof Promise)return new Promise(function(a,c){l(b,a,c)});l(b)}return null},a.intlTelInputGlobals.defaults=g,a.intlTelInputGlobals.version="14.0.0",function(b,c){var d=new k(b,c);return d._a(),a.intlTelInputGlobals.instances[d.id]=d,d}}()}(window,document);"object"==typeof module&&module.exports?module.exports=b:window.intlTelInput=b}();

// site
(function ( $ ) {
$.fn.MySideMenu = function( options ) {
var oldCode, nc, side;
nc = "";
var settings = $.extend({
side:"left",
autoClose:true
}, options );
side = settings.side;
autoClose = settings.autoClose;
this.addClass("container sidebar");
if(side=="left"){
this.addClass("sidebar-left");
}else if(side=="right"){
this.addClass("sidebar-right");
}else{
this.addClass("sidebar-left");
}
this.addClass("hidden");
oldCode = this.html();
nc += "<div class=\"row\">\n";
nc += "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg1-12\" data-side=\""+side+"\">\n"+ oldCode+" </div>\n";
nc += "</div>";
this.html(nc);
if(autoClose){
$(this).find(".closer").trigger("click");
}
var me = this;
setTimeout(function(){me.removeClass("hidden");}, 1000);
};

$(document).on('click','.opener', function(){
var opener = $(this);
opener.hide();
var container = $(opener.attr('dest'));
if (container.length == 0)
container = opener.parent();
var listaClassi = container[0].classList;
var side = getSide(listaClassi);
var containerWidth = container.width();
var status = container.attr('data-status');
if(!status){
status = "opened";
}
doAnimation(container, containerWidth, side, status);
});
$(document).on('click','.closer', function(){
var closer = $(this);
$('.opener').show();
var container = $(closer.attr('dest'));
if (container.length == 0)
container = closer.parent();
var listaClassi = container[0].classList;
var side = getSide(listaClassi);
var containerWidth = container.width();
var status = container.attr('data-status');
if(!status){
status = "opened";
}
doAnimation(container, containerWidth, side, status);
});
function getSide(listaClassi){
var side;
for(var i = 0; i<listaClassi.length; i++){
if(listaClassi[i]=='sidebar-left'){
side = "left";
break;
}else if(listaClassi[i]=='sidebar-right'){
side = "right";
break;
}else{
side = null;
}
}
return side;
}
function doAnimation(container, containerWidth, sidebarSide, sidebarStatus){
var toggler = container.children()[1];
if(sidebarStatus=="opened"){
if(sidebarSide=="left"){
container.animate({
left:-(containerWidth+2)
});
toggleArrow(toggler, "left");
}else if(sidebarSide=="right"){
container.animate({
right:- (containerWidth +2)
});
toggleArrow(toggler, "right");
}
container.attr('data-status', 'closed');
}else{
if(sidebarSide=="left"){
container.animate({
left:0
});
toggleArrow(toggler, "right");
}else if(sidebarSide=="right"){
container.animate({
right:0
});
toggleArrow(toggler, "left");
}
container.attr('data-status', 'opened');

}
}

function toggleArrow(toggler, side){
if(side=="left"){
$(toggler).children(".glyphicon-chevron-right").css('display', 'block');
$(toggler).children(".glyphicon-chevron-left").css('display', 'none');
}else if(side=="right"){
$(toggler).children(".glyphicon-chevron-left").css('display', 'block');
$(toggler).children(".glyphicon-chevron-right").css('display', 'none');
}
}
}( jQuery));
function sv(cs, lid, baseUrl)
{
if (!lid)
return;
cs = cs || '.vd';
if ($(cs).length == 0)
return;
var _url = baseUrl + 'get.php?op=gvl&lid=' + lid + appendTime();
$.ajax({
url: _url,
type: 'GET',
async: true,
success: function (html) {
if (html)
{
$(cs + ' source').attr('src', html);
if ($(cs).length > 0)
$(cs)[0].load();
}
}
});
}