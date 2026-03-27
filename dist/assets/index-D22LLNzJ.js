(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))Z(D);new MutationObserver(D=>{for(const F of D)if(F.type==="childList")for(const ne of F.addedNodes)ne.tagName==="LINK"&&ne.rel==="modulepreload"&&Z(ne)}).observe(document,{childList:!0,subtree:!0});function m(D){const F={};return D.integrity&&(F.integrity=D.integrity),D.referrerPolicy&&(F.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?F.credentials="include":D.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function Z(D){if(D.ep)return;D.ep=!0;const F=m(D);fetch(D.href,F)}})();var Eo={exports:{}},yr={},Co={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu;function Md(){if(Eu)return I;Eu=1;var z=Symbol.for("react.element"),M=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),ne=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ye=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),le=Symbol.iterator;function J(d){return d===null||typeof d!="object"?null:(d=le&&d[le]||d["@@iterator"],typeof d=="function"?d:null)}var Ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},We=Object.assign,q={};function $(d,v,b){this.props=d,this.context=v,this.refs=q,this.updater=b||Ve}$.prototype.isReactComponent={},$.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},$.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function ht(){}ht.prototype=$.prototype;function st(d,v,b){this.props=d,this.context=v,this.refs=q,this.updater=b||Ve}var Je=st.prototype=new ht;Je.constructor=st,We(Je,$.prototype),Je.isPureReactComponent=!0;var we=Array.isArray,qe=Object.prototype.hasOwnProperty,Ce={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Qe(d,v,b){var O,A={},B=null,X=null;if(v!=null)for(O in v.ref!==void 0&&(X=v.ref),v.key!==void 0&&(B=""+v.key),v)qe.call(v,O)&&!Pe.hasOwnProperty(O)&&(A[O]=v[O]);var W=arguments.length-2;if(W===1)A.children=b;else if(1<W){for(var ee=Array(W),Fe=0;Fe<W;Fe++)ee[Fe]=arguments[Fe+2];A.children=ee}if(d&&d.defaultProps)for(O in W=d.defaultProps,W)A[O]===void 0&&(A[O]=W[O]);return{$$typeof:z,type:d,key:B,ref:X,props:A,_owner:Ce.current}}function Ct(d,v){return{$$typeof:z,type:d.type,key:v,ref:d.ref,props:d.props,_owner:d._owner}}function vt(d){return typeof d=="object"&&d!==null&&d.$$typeof===z}function Xt(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(b){return v[b]})}var ut=/\/+/g;function De(d,v){return typeof d=="object"&&d!==null&&d.key!=null?Xt(""+d.key):v.toString(36)}function et(d,v,b,O,A){var B=typeof d;(B==="undefined"||B==="boolean")&&(d=null);var X=!1;if(d===null)X=!0;else switch(B){case"string":case"number":X=!0;break;case"object":switch(d.$$typeof){case z:case M:X=!0}}if(X)return X=d,A=A(X),d=O===""?"."+De(X,0):O,we(A)?(b="",d!=null&&(b=d.replace(ut,"$&/")+"/"),et(A,v,b,"",function(Fe){return Fe})):A!=null&&(vt(A)&&(A=Ct(A,b+(!A.key||X&&X.key===A.key?"":(""+A.key).replace(ut,"$&/")+"/")+d)),v.push(A)),1;if(X=0,O=O===""?".":O+":",we(d))for(var W=0;W<d.length;W++){B=d[W];var ee=O+De(B,W);X+=et(B,v,b,ee,A)}else if(ee=J(d),typeof ee=="function")for(d=ee.call(d),W=0;!(B=d.next()).done;)B=B.value,ee=O+De(B,W++),X+=et(B,v,b,ee,A);else if(B==="object")throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return X}function ct(d,v,b){if(d==null)return d;var O=[],A=0;return et(d,O,"","",function(B){return v.call(b,B,A++)}),O}function Le(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(b){(d._status===0||d._status===-1)&&(d._status=1,d._result=b)},function(b){(d._status===0||d._status===-1)&&(d._status=2,d._result=b)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var ae={current:null},w={transition:null},R={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:w,ReactCurrentOwner:Ce};function N(){throw Error("act(...) is not supported in production builds of React.")}return I.Children={map:ct,forEach:function(d,v,b){ct(d,function(){v.apply(this,arguments)},b)},count:function(d){var v=0;return ct(d,function(){v++}),v},toArray:function(d){return ct(d,function(v){return v})||[]},only:function(d){if(!vt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},I.Component=$,I.Fragment=m,I.Profiler=D,I.PureComponent=st,I.StrictMode=Z,I.Suspense=H,I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,I.act=N,I.cloneElement=function(d,v,b){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var O=We({},d.props),A=d.key,B=d.ref,X=d._owner;if(v!=null){if(v.ref!==void 0&&(B=v.ref,X=Ce.current),v.key!==void 0&&(A=""+v.key),d.type&&d.type.defaultProps)var W=d.type.defaultProps;for(ee in v)qe.call(v,ee)&&!Pe.hasOwnProperty(ee)&&(O[ee]=v[ee]===void 0&&W!==void 0?W[ee]:v[ee])}var ee=arguments.length-2;if(ee===1)O.children=b;else if(1<ee){W=Array(ee);for(var Fe=0;Fe<ee;Fe++)W[Fe]=arguments[Fe+2];O.children=W}return{$$typeof:z,type:d.type,key:A,ref:B,props:O,_owner:X}},I.createContext=function(d){return d={$$typeof:ne,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:F,_context:d},d.Consumer=d},I.createElement=Qe,I.createFactory=function(d){var v=Qe.bind(null,d);return v.type=d,v},I.createRef=function(){return{current:null}},I.forwardRef=function(d){return{$$typeof:re,render:d}},I.isValidElement=vt,I.lazy=function(d){return{$$typeof:ge,_payload:{_status:-1,_result:d},_init:Le}},I.memo=function(d,v){return{$$typeof:ye,type:d,compare:v===void 0?null:v}},I.startTransition=function(d){var v=w.transition;w.transition={};try{d()}finally{w.transition=v}},I.unstable_act=N,I.useCallback=function(d,v){return ae.current.useCallback(d,v)},I.useContext=function(d){return ae.current.useContext(d)},I.useDebugValue=function(){},I.useDeferredValue=function(d){return ae.current.useDeferredValue(d)},I.useEffect=function(d,v){return ae.current.useEffect(d,v)},I.useId=function(){return ae.current.useId()},I.useImperativeHandle=function(d,v,b){return ae.current.useImperativeHandle(d,v,b)},I.useInsertionEffect=function(d,v){return ae.current.useInsertionEffect(d,v)},I.useLayoutEffect=function(d,v){return ae.current.useLayoutEffect(d,v)},I.useMemo=function(d,v){return ae.current.useMemo(d,v)},I.useReducer=function(d,v,b){return ae.current.useReducer(d,v,b)},I.useRef=function(d){return ae.current.useRef(d)},I.useState=function(d){return ae.current.useState(d)},I.useSyncExternalStore=function(d,v,b){return ae.current.useSyncExternalStore(d,v,b)},I.useTransition=function(){return ae.current.useTransition()},I.version="18.3.1",I}var Cu;function Lo(){return Cu||(Cu=1,Co.exports=Md()),Co.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju;function bd(){if(ju)return yr;ju=1;var z=Lo(),M=Symbol.for("react.element"),m=Symbol.for("react.fragment"),Z=Object.prototype.hasOwnProperty,D=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F={key:!0,ref:!0,__self:!0,__source:!0};function ne(re,H,ye){var ge,le={},J=null,Ve=null;ye!==void 0&&(J=""+ye),H.key!==void 0&&(J=""+H.key),H.ref!==void 0&&(Ve=H.ref);for(ge in H)Z.call(H,ge)&&!F.hasOwnProperty(ge)&&(le[ge]=H[ge]);if(re&&re.defaultProps)for(ge in H=re.defaultProps,H)le[ge]===void 0&&(le[ge]=H[ge]);return{$$typeof:M,type:re,key:J,ref:Ve,props:le,_owner:D.current}}return yr.Fragment=m,yr.jsx=ne,yr.jsxs=ne,yr}var zu;function Id(){return zu||(zu=1,Eo.exports=bd()),Eo.exports}var u=Id(),$t=Lo(),Ll={},jo={exports:{}},Oe={},zo={exports:{}},Po={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Od(){return Pu||(Pu=1,(function(z){function M(w,R){var N=w.length;w.push(R);e:for(;0<N;){var d=N-1>>>1,v=w[d];if(0<D(v,R))w[d]=R,w[N]=v,N=d;else break e}}function m(w){return w.length===0?null:w[0]}function Z(w){if(w.length===0)return null;var R=w[0],N=w.pop();if(N!==R){w[0]=N;e:for(var d=0,v=w.length,b=v>>>1;d<b;){var O=2*(d+1)-1,A=w[O],B=O+1,X=w[B];if(0>D(A,N))B<v&&0>D(X,A)?(w[d]=X,w[B]=N,d=B):(w[d]=A,w[O]=N,d=O);else if(B<v&&0>D(X,N))w[d]=X,w[B]=N,d=B;else break e}}return R}function D(w,R){var N=w.sortIndex-R.sortIndex;return N!==0?N:w.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var F=performance;z.unstable_now=function(){return F.now()}}else{var ne=Date,re=ne.now();z.unstable_now=function(){return ne.now()-re}}var H=[],ye=[],ge=1,le=null,J=3,Ve=!1,We=!1,q=!1,$=typeof setTimeout=="function"?setTimeout:null,ht=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Je(w){for(var R=m(ye);R!==null;){if(R.callback===null)Z(ye);else if(R.startTime<=w)Z(ye),R.sortIndex=R.expirationTime,M(H,R);else break;R=m(ye)}}function we(w){if(q=!1,Je(w),!We)if(m(H)!==null)We=!0,Le(qe);else{var R=m(ye);R!==null&&ae(we,R.startTime-w)}}function qe(w,R){We=!1,q&&(q=!1,ht(Qe),Qe=-1),Ve=!0;var N=J;try{for(Je(R),le=m(H);le!==null&&(!(le.expirationTime>R)||w&&!Xt());){var d=le.callback;if(typeof d=="function"){le.callback=null,J=le.priorityLevel;var v=d(le.expirationTime<=R);R=z.unstable_now(),typeof v=="function"?le.callback=v:le===m(H)&&Z(H),Je(R)}else Z(H);le=m(H)}if(le!==null)var b=!0;else{var O=m(ye);O!==null&&ae(we,O.startTime-R),b=!1}return b}finally{le=null,J=N,Ve=!1}}var Ce=!1,Pe=null,Qe=-1,Ct=5,vt=-1;function Xt(){return!(z.unstable_now()-vt<Ct)}function ut(){if(Pe!==null){var w=z.unstable_now();vt=w;var R=!0;try{R=Pe(!0,w)}finally{R?De():(Ce=!1,Pe=null)}}else Ce=!1}var De;if(typeof st=="function")De=function(){st(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,De=function(){ct.postMessage(null)}}else De=function(){$(ut,0)};function Le(w){Pe=w,Ce||(Ce=!0,De())}function ae(w,R){Qe=$(function(){w(z.unstable_now())},R)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(w){w.callback=null},z.unstable_continueExecution=function(){We||Ve||(We=!0,Le(qe))},z.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ct=0<w?Math.floor(1e3/w):5},z.unstable_getCurrentPriorityLevel=function(){return J},z.unstable_getFirstCallbackNode=function(){return m(H)},z.unstable_next=function(w){switch(J){case 1:case 2:case 3:var R=3;break;default:R=J}var N=J;J=R;try{return w()}finally{J=N}},z.unstable_pauseExecution=function(){},z.unstable_requestPaint=function(){},z.unstable_runWithPriority=function(w,R){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var N=J;J=w;try{return R()}finally{J=N}},z.unstable_scheduleCallback=function(w,R,N){var d=z.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?d+N:d):N=d,w){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=N+v,w={id:ge++,callback:R,priorityLevel:w,startTime:N,expirationTime:v,sortIndex:-1},N>d?(w.sortIndex=N,M(ye,w),m(H)===null&&w===m(ye)&&(q?(ht(Qe),Qe=-1):q=!0,ae(we,N-d))):(w.sortIndex=v,M(H,w),We||Ve||(We=!0,Le(qe))),w},z.unstable_shouldYield=Xt,z.unstable_wrapCallback=function(w){var R=J;return function(){var N=J;J=R;try{return w.apply(this,arguments)}finally{J=N}}}})(Po)),Po}var Lu;function Dd(){return Lu||(Lu=1,zo.exports=Od()),zo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Fd(){if(Ru)return Oe;Ru=1;var z=Lo(),M=Dd();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z=new Set,D={};function F(e,t){ne(e,t),ne(e+"Capture",t)}function ne(e,t){for(D[e]=t,e=0;e<t.length;e++)Z.add(t[e])}var re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),H=Object.prototype.hasOwnProperty,ye=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ge={},le={};function J(e){return H.call(le,e)?!0:H.call(ge,e)?!1:ye.test(e)?le[e]=!0:(ge[e]=!0,!1)}function Ve(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function We(e,t,n,r){if(t===null||typeof t>"u"||Ve(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function q(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$[t]=new q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){$[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){$[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){$[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){$[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){$[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var ht=/[\-:]([a-z])/g;function st(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ht,st);$[t]=new q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ht,st);$[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ht,st);$[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){$[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),$.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){$[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function Je(e,t,n,r){var l=$.hasOwnProperty(t)?$[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(We(t,n,l,r)&&(n=null),r||l===null?J(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var we=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Qe=Symbol.for("react.strict_mode"),Ct=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Xt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),w=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var N=Object.assign,d;function v(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var b=!1;function O(e,t){if(!e||b)return"";b=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{b=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function A(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function B(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case Ce:return"Portal";case Ct:return"Profiler";case Qe:return"StrictMode";case De:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:B(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return B(e(t))}catch{}}return null}function X(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===Qe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fe(e){var t=ee(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Fe(e))}function Ro(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ee(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function To(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=W(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mo(e,t){t=t.checked,t!=null&&Je(e,"checked",t,!1)}function Tl(e,t){Mo(e,t);var n=W(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,W(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Io(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(Mn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function Oo(e,t){var n=W(t.value),r=W(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Do(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Uo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Du=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Du.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Ho(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Ao(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ho(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Fu=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(Fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hl=null,un=null,cn=null;function Bo(e){if(e=rr(e)){if(typeof Hl!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Qr(t),Hl(e.stateNode,e.type,t))}}function Vo(e){un?cn?cn.push(e):cn=[e]:un=e}function Wo(){if(un){var e=un,t=cn;if(cn=un=null,Bo(e),t)for(e=0;e<t.length;e++)Bo(t[e])}}function Qo(e,t){return e(t)}function $o(){}var Al=!1;function Xo(e,t,n){if(Al)return e(t,n);Al=!0;try{return Qo(e,t,n)}finally{Al=!1,(un!==null||cn!==null)&&($o(),Wo())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=Qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Bl=!1;if(re)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Bl=!1}function Uu(e,t,n,r,l,i,o,a,s){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(y){this.onError(y)}}var Fn=!1,_r=null,Nr=!1,Vl=null,Hu={onError:function(e){Fn=!0,_r=e}};function Au(e,t,n,r,l,i,o,a,s){Fn=!1,_r=null,Uu.apply(Hu,arguments)}function Bu(e,t,n,r,l,i,o,a,s){if(Au.apply(this,arguments),Fn){if(Fn){var g=_r;Fn=!1,_r=null}else throw Error(m(198));Nr||(Nr=!0,Vl=g)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ko(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yo(e){if(Kt(e)!==e)throw Error(m(188))}function Vu(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Yo(l),e;if(i===r)return Yo(l),t;i=i.sibling}throw Error(m(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Go(e){return e=Vu(e),e!==null?Zo(e):null}function Zo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zo(e);if(t!==null)return t;e=e.sibling}return null}var Jo=M.unstable_scheduleCallback,qo=M.unstable_cancelCallback,Wu=M.unstable_shouldYield,Qu=M.unstable_requestPaint,ue=M.unstable_now,$u=M.unstable_getCurrentPriorityLevel,Wl=M.unstable_ImmediatePriority,ea=M.unstable_UserBlockingPriority,Er=M.unstable_NormalPriority,Xu=M.unstable_LowPriority,ta=M.unstable_IdlePriority,Cr=null,dt=null;function Ku(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Cr,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Zu,Yu=Math.log,Gu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Yu(e)/Gu|0)|0}var jr=64,zr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Un(a):(i&=o,i!==0&&(r=Un(i)))}else o=n&~l,o!==0?r=Un(o):i!==0&&(r=Un(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),l=1<<n,r|=e[n],t&=~l;return r}function Ju(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-tt(i),a=1<<o,s=l[o];s===-1?((a&n)===0||(a&r)!==0)&&(l[o]=Ju(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function na(){var e=jr;return jr<<=1,(jr&4194240)===0&&(jr=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function ec(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-tt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Q=0;function ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var la,Kl,ia,oa,aa,Yl=!1,Lr=[],jt=null,zt=null,Pt=null,An=new Map,Bn=new Map,Lt=[],tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function Vn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=rr(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function nc(e,t,n,r,l){switch(t){case"focusin":return jt=Vn(jt,e,t,n,r,l),!0;case"dragenter":return zt=Vn(zt,e,t,n,r,l),!0;case"mouseover":return Pt=Vn(Pt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return An.set(i,Vn(An.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Bn.set(i,Vn(Bn.get(i)||null,e,t,n,r,l)),!0}return!1}function ua(e){var t=Yt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ko(n),t!==null){e.blockedOn=t,aa(e.priority,function(){ia(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=rr(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){Rr(e)&&n.delete(t)}function rc(){Yl=!1,jt!==null&&Rr(jt)&&(jt=null),zt!==null&&Rr(zt)&&(zt=null),Pt!==null&&Rr(Pt)&&(Pt=null),An.forEach(ca),Bn.forEach(ca)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,rc)))}function Qn(e){function t(l){return Wn(l,e)}if(0<Lr.length){Wn(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&Wn(jt,e),zt!==null&&Wn(zt,e),Pt!==null&&Wn(Pt,e),An.forEach(t),Bn.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)ua(n),n.blockedOn===null&&Lt.shift()}var dn=we.ReactCurrentBatchConfig,Tr=!0;function lc(e,t,n,r){var l=Q,i=dn.transition;dn.transition=null;try{Q=1,Gl(e,t,n,r)}finally{Q=l,dn.transition=i}}function ic(e,t,n,r){var l=Q,i=dn.transition;dn.transition=null;try{Q=4,Gl(e,t,n,r)}finally{Q=l,dn.transition=i}}function Gl(e,t,n,r){if(Tr){var l=Zl(e,t,n,r);if(l===null)gi(e,t,r,Mr,n),sa(e,r);else if(nc(l,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<tc.indexOf(e)){for(;l!==null;){var i=rr(l);if(i!==null&&la(i),i=Zl(e,t,n,r),i===null&&gi(e,t,r,Mr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else gi(e,t,r,null,n)}}var Mr=null;function Zl(e,t,n,r){if(Mr=null,e=Ul(r),e=Yt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ko(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case Wl:return 1;case ea:return 4;case Er:case Xu:return 16;case ta:return 536870912;default:return 16}default:return 16}}var Rt=null,Jl=null,br=null;function fa(){if(br)return br;var e,t=Jl,n=t.length,r,l="value"in Rt?Rt.value:Rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return br=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function pa(){return!1}function Ue(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:pa,this.isPropagationStopped=pa,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Ue(fn),$n=N({},fn,{view:0,detail:0}),oc=Ue($n),ei,ti,Xn,Dr=N({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ei=e.screenX-Xn.screenX,ti=e.screenY-Xn.screenY):ti=ei=0,Xn=e),ei)},movementY:function(e){return"movementY"in e?e.movementY:ti}}),ga=Ue(Dr),ac=N({},Dr,{dataTransfer:0}),sc=Ue(ac),uc=N({},$n,{relatedTarget:0}),ni=Ue(uc),cc=N({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=Ue(cc),fc=N({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Ue(fc),gc=N({},fn,{data:0}),ma=Ue(gc),mc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vc[e])?!!t[e]:!1}function ri(){return yc}var kc=N({},$n,{key:function(e){if(e.key){var t=mc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xc=Ue(kc),wc=N({},Dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ha=Ue(wc),Sc=N({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),_c=Ue(Sc),Nc=N({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=Ue(Nc),Cc=N({},Dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jc=Ue(Cc),zc=[9,13,27,32],li=re&&"CompositionEvent"in window,Kn=null;re&&"documentMode"in document&&(Kn=document.documentMode);var Pc=re&&"TextEvent"in window&&!Kn,va=re&&(!li||Kn&&8<Kn&&11>=Kn),ya=" ",ka=!1;function xa(e,t){switch(e){case"keyup":return zc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Lc(e,t){switch(e){case"compositionend":return wa(t);case"keypress":return t.which!==32?null:(ka=!0,ya);case"textInput":return e=t.data,e===ya&&ka?null:e;default:return null}}function Rc(e,t){if(pn)return e==="compositionend"||!li&&xa(e,t)?(e=fa(),br=Jl=Rt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return va&&t.locale!=="ko"?null:t.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tc[e.type]:t==="textarea"}function _a(e,t,n,r){Vo(r),t=Br(t,"onChange"),0<t.length&&(n=new ql("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Gn=null;function Mc(e){Aa(e,0)}function Fr(e){var t=yn(e);if(Ro(t))return e}function bc(e,t){if(e==="change")return t}var Na=!1;if(re){var ii;if(re){var oi="oninput"in document;if(!oi){var Ea=document.createElement("div");Ea.setAttribute("oninput","return;"),oi=typeof Ea.oninput=="function"}ii=oi}else ii=!1;Na=ii&&(!document.documentMode||9<document.documentMode)}function Ca(){Yn&&(Yn.detachEvent("onpropertychange",ja),Gn=Yn=null)}function ja(e){if(e.propertyName==="value"&&Fr(Gn)){var t=[];_a(t,Gn,e,Ul(e)),Xo(Mc,t)}}function Ic(e,t,n){e==="focusin"?(Ca(),Yn=t,Gn=n,Yn.attachEvent("onpropertychange",ja)):e==="focusout"&&Ca()}function Oc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fr(Gn)}function Dc(e,t){if(e==="click")return Fr(t)}function Fc(e,t){if(e==="input"||e==="change")return Fr(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Uc;function Zn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!H.call(t,l)||!nt(e[l],t[l]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,t){var n=za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=za(n)}}function La(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?La(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ra(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hc(e){var t=Ra(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&La(n.ownerDocument.documentElement,n)){if(r!==null&&ai(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Pa(n,i);var o=Pa(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ac=re&&"documentMode"in document&&11>=document.documentMode,gn=null,si=null,Jn=null,ui=!1;function Ta(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ui||gn==null||gn!==wr(r)||(r=gn,"selectionStart"in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&Zn(Jn,r)||(Jn=r,r=Br(si,"onSelect"),0<r.length&&(t=new ql("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},ci={},Ma={};re&&(Ma=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Hr(e){if(ci[e])return ci[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ma)return ci[e]=t[n];return e}var ba=Hr("animationend"),Ia=Hr("animationiteration"),Oa=Hr("animationstart"),Da=Hr("transitionend"),Fa=new Map,Ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Fa.set(e,t),F(t,[e])}for(var di=0;di<Ua.length;di++){var fi=Ua[di],Bc=fi.toLowerCase(),Vc=fi[0].toUpperCase()+fi.slice(1);Tt(Bc,"on"+Vc)}Tt(ba,"onAnimationEnd"),Tt(Ia,"onAnimationIteration"),Tt(Oa,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(Da,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),F("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),F("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),F("onBeforeInput",["compositionend","keypress","textInput","paste"]),F("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wc=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function Ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bu(r,t,void 0,e),e.currentTarget=null}function Aa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,g=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;Ha(l,a,g),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,g=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;Ha(l,a,g),i=s}}}if(Nr)throw e=Vl,Nr=!1,Vl=null,e}function Y(e,t){var n=t[xi];n===void 0&&(n=t[xi]=new Set);var r=e+"__bubble";n.has(r)||(Ba(t,e,2,!1),n.add(r))}function pi(e,t,n){var r=0;t&&(r|=4),Ba(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Ar]){e[Ar]=!0,Z.forEach(function(n){n!=="selectionchange"&&(Wc.has(n)||pi(n,!1,e),pi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,pi("selectionchange",!1,t))}}function Ba(e,t,n,r){switch(da(t)){case 1:var l=lc;break;case 4:l=ic;break;default:l=Gl}n=l.bind(null,t,n,e),l=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function gi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Yt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Xo(function(){var g=i,y=Ul(n),k=[];e:{var h=Fa.get(e);if(h!==void 0){var S=ql,E=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":S=xc;break;case"focusin":E="focus",S=ni;break;case"focusout":E="blur",S=ni;break;case"beforeblur":case"afterblur":S=ni;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=_c;break;case ba:case Ia:case Oa:S=dc;break;case Da:S=Ec;break;case"scroll":S=oc;break;case"wheel":S=jc;break;case"copy":case"cut":case"paste":S=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ha}var C=(t&4)!==0,ce=!C&&e==="scroll",f=C?h!==null?h+"Capture":null:h;C=[];for(var c=g,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=On(c,f),x!=null&&C.push(tr(c,x,p)))),ce)break;c=c.return}0<C.length&&(h=new S(h,E,null,n,y),k.push({event:h,listeners:C}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==Fl&&(E=n.relatedTarget||n.fromElement)&&(Yt(E)||E[yt]))break e;if((S||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,S?(E=n.relatedTarget||n.toElement,S=g,E=E?Yt(E):null,E!==null&&(ce=Kt(E),E!==ce||E.tag!==5&&E.tag!==6)&&(E=null)):(S=null,E=g),S!==E)){if(C=ga,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=ha,x="onPointerLeave",f="onPointerEnter",c="pointer"),ce=S==null?h:yn(S),p=E==null?h:yn(E),h=new C(x,c+"leave",S,n,y),h.target=ce,h.relatedTarget=p,x=null,Yt(y)===g&&(C=new C(f,c+"enter",E,n,y),C.target=p,C.relatedTarget=ce,x=C),ce=x,S&&E)t:{for(C=S,f=E,c=0,p=C;p;p=hn(p))c++;for(p=0,x=f;x;x=hn(x))p++;for(;0<c-p;)C=hn(C),c--;for(;0<p-c;)f=hn(f),p--;for(;c--;){if(C===f||f!==null&&C===f.alternate)break t;C=hn(C),f=hn(f)}C=null}else C=null;S!==null&&Va(k,h,S,C,!1),E!==null&&ce!==null&&Va(k,ce,E,C,!0)}}e:{if(h=g?yn(g):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var j=bc;else if(Sa(h))if(Na)j=Fc;else{j=Oc;var P=Ic}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Dc);if(j&&(j=j(e,g))){_a(k,j,n,y);break e}P&&P(e,h,g),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ml(h,"number",h.value)}switch(P=g?yn(g):window,e){case"focusin":(Sa(P)||P.contentEditable==="true")&&(gn=P,si=g,Jn=null);break;case"focusout":Jn=si=gn=null;break;case"mousedown":ui=!0;break;case"contextmenu":case"mouseup":case"dragend":ui=!1,Ta(k,n,y);break;case"selectionchange":if(Ac)break;case"keydown":case"keyup":Ta(k,n,y)}var L;if(li)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else pn?xa(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(va&&n.locale!=="ko"&&(pn||T!=="onCompositionStart"?T==="onCompositionEnd"&&pn&&(L=fa()):(Rt=y,Jl="value"in Rt?Rt.value:Rt.textContent,pn=!0)),P=Br(g,T),0<P.length&&(T=new ma(T,e,null,n,y),k.push({event:T,listeners:P}),L?T.data=L:(L=wa(n),L!==null&&(T.data=L)))),(L=Pc?Lc(e,n):Rc(e,n))&&(g=Br(g,"onBeforeInput"),0<g.length&&(y=new ma("onBeforeInput","beforeinput",null,n,y),k.push({event:y,listeners:g}),y.data=L))}Aa(k,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=On(e,n),i!=null&&r.unshift(tr(e,i,l)),i=On(e,t),i!=null&&r.push(tr(e,i,l))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,g=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&g!==null&&(a=g,l?(s=On(n,i),s!=null&&o.unshift(tr(n,s,a))):l||(s=On(n,i),s!=null&&o.push(tr(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qc=/\r\n?/g,$c=/\u0000|\uFFFD/g;function Wa(e){return(typeof e=="string"?e:""+e).replace(Qc,`
`).replace($c,"")}function Vr(e,t,n){if(t=Wa(t),Wa(e)!==t&&n)throw Error(m(425))}function Wr(){}var mi=null,hi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,Xc=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,Kc=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(e){return Qa.resolve(null).then(e).catch(Yc)}:yi;function Yc(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),ft="__reactFiber$"+vn,nr="__reactProps$"+vn,yt="__reactContainer$"+vn,xi="__reactEvents$"+vn,Gc="__reactListeners$"+vn,Zc="__reactHandles$"+vn;function Yt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[ft])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[ft]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Qr(e){return e[nr]||null}var wi=[],kn=-1;function bt(e){return{current:e}}function G(e){0>kn||(e.current=wi[kn],wi[kn]=null,kn--)}function K(e,t){kn++,wi[kn]=e.current,e.current=t}var It={},Se=bt(It),Re=bt(!1),Gt=It;function xn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Te(e){return e=e.childContextTypes,e!=null}function $r(){G(Re),G(Se)}function Xa(e,t,n){if(Se.current!==It)throw Error(m(168));K(Se,t),K(Re,n)}function Ka(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(m(108,X(e)||"Unknown",l));return N({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Gt=Se.current,K(Se,e),K(Re,Re.current),!0}function Ya(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Ka(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,G(Re),G(Se),K(Se,e)):G(Re),K(Re,n)}var kt=null,Kr=!1,Si=!1;function Ga(e){kt===null?kt=[e]:kt.push(e)}function Jc(e){Kr=!0,Ga(e)}function Ot(){if(!Si&&kt!==null){Si=!0;var e=0,t=Q;try{var n=kt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Kr=!1}catch(l){throw kt!==null&&(kt=kt.slice(e+1)),Jo(Wl,Ot),l}finally{Q=t,Si=!1}}return null}var wn=[],Sn=0,Yr=null,Gr=0,$e=[],Xe=0,Zt=null,xt=1,wt="";function Jt(e,t){wn[Sn++]=Gr,wn[Sn++]=Yr,Yr=e,Gr=t}function Za(e,t,n){$e[Xe++]=xt,$e[Xe++]=wt,$e[Xe++]=Zt,Zt=e;var r=xt;e=wt;var l=32-tt(r)-1;r&=~(1<<l),n+=1;var i=32-tt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,xt=1<<32-tt(t)+l|n<<l|r,wt=i+e}else xt=1<<i|n<<l|r,wt=e}function _i(e){e.return!==null&&(Jt(e,1),Za(e,1,0))}function Ni(e){for(;e===Yr;)Yr=wn[--Sn],wn[Sn]=null,Gr=wn[--Sn],wn[Sn]=null;for(;e===Zt;)Zt=$e[--Xe],$e[Xe]=null,wt=$e[--Xe],$e[Xe]=null,xt=$e[--Xe],$e[Xe]=null}var He=null,Ae=null,te=!1,rt=null;function Ja(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ae=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:xt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ae=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(te){var t=Ae;if(t){var n=t;if(!qa(e,t)){if(Ei(e))throw Error(m(418));t=Mt(n.nextSibling);var r=He;t&&qa(e,t)?Ja(r,n):(e.flags=e.flags&-4097|2,te=!1,He=e)}}else{if(Ei(e))throw Error(m(418));e.flags=e.flags&-4097|2,te=!1,He=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Zr(e){if(e!==He)return!1;if(!te)return es(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=Ae)){if(Ei(e))throw ts(),Error(m(418));for(;t;)Ja(e,t),t=Mt(t.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=He?Mt(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=Ae;e;)e=Mt(e.nextSibling)}function _n(){Ae=He=null,te=!1}function ji(e){rt===null?rt=[e]:rt.push(e)}var qc=we.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function Jr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function rs(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Wt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,x){return c===null||c.tag!==6?(c=ko(p,f.mode,x),c.return=f,c):(c=l(c,p),c.return=f,c)}function s(f,c,p,x){var j=p.type;return j===Pe?y(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Le&&ns(j)===c.type)?(x=l(c,p.props),x.ref=lr(f,c,p),x.return=f,x):(x=Sl(p.type,p.key,p.props,null,f.mode,x),x.ref=lr(f,c,p),x.return=f,x)}function g(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=xo(p,f.mode,x),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,x,j){return c===null||c.tag!==7?(c=an(p,f.mode,x,j),c.return=f,c):(c=l(c,p),c.return=f,c)}function k(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ko(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case qe:return p=Sl(c.type,c.key,c.props,null,f.mode,p),p.ref=lr(f,null,c),p.return=f,p;case Ce:return c=xo(c,f.mode,p),c.return=f,c;case Le:var x=c._init;return k(f,x(c._payload),p)}if(Mn(c)||R(c))return c=an(c,f.mode,p,null),c.return=f,c;Jr(f,c)}return null}function h(f,c,p,x){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qe:return p.key===j?s(f,c,p,x):null;case Ce:return p.key===j?g(f,c,p,x):null;case Le:return j=p._init,h(f,c,j(p._payload),x)}if(Mn(p)||R(p))return j!==null?null:y(f,c,p,x,null);Jr(f,p)}return null}function S(f,c,p,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,a(c,f,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qe:return f=f.get(x.key===null?p:x.key)||null,s(c,f,x,j);case Ce:return f=f.get(x.key===null?p:x.key)||null,g(c,f,x,j);case Le:var P=x._init;return S(f,c,p,P(x._payload),j)}if(Mn(x)||R(x))return f=f.get(p)||null,y(c,f,x,j,null);Jr(c,x)}return null}function E(f,c,p,x){for(var j=null,P=null,L=c,T=c=0,ve=null;L!==null&&T<p.length;T++){L.index>T?(ve=L,L=null):ve=L.sibling;var V=h(f,L,p[T],x);if(V===null){L===null&&(L=ve);break}e&&L&&V.alternate===null&&t(f,L),c=i(V,c,T),P===null?j=V:P.sibling=V,P=V,L=ve}if(T===p.length)return n(f,L),te&&Jt(f,T),j;if(L===null){for(;T<p.length;T++)L=k(f,p[T],x),L!==null&&(c=i(L,c,T),P===null?j=L:P.sibling=L,P=L);return te&&Jt(f,T),j}for(L=r(f,L);T<p.length;T++)ve=S(L,f,T,p[T],x),ve!==null&&(e&&ve.alternate!==null&&L.delete(ve.key===null?T:ve.key),c=i(ve,c,T),P===null?j=ve:P.sibling=ve,P=ve);return e&&L.forEach(function(Qt){return t(f,Qt)}),te&&Jt(f,T),j}function C(f,c,p,x){var j=R(p);if(typeof j!="function")throw Error(m(150));if(p=j.call(p),p==null)throw Error(m(151));for(var P=j=null,L=c,T=c=0,ve=null,V=p.next();L!==null&&!V.done;T++,V=p.next()){L.index>T?(ve=L,L=null):ve=L.sibling;var Qt=h(f,L,V.value,x);if(Qt===null){L===null&&(L=ve);break}e&&L&&Qt.alternate===null&&t(f,L),c=i(Qt,c,T),P===null?j=Qt:P.sibling=Qt,P=Qt,L=ve}if(V.done)return n(f,L),te&&Jt(f,T),j;if(L===null){for(;!V.done;T++,V=p.next())V=k(f,V.value,x),V!==null&&(c=i(V,c,T),P===null?j=V:P.sibling=V,P=V);return te&&Jt(f,T),j}for(L=r(f,L);!V.done;T++,V=p.next())V=S(L,f,T,V.value,x),V!==null&&(e&&V.alternate!==null&&L.delete(V.key===null?T:V.key),c=i(V,c,T),P===null?j=V:P.sibling=V,P=V);return e&&L.forEach(function(Td){return t(f,Td)}),te&&Jt(f,T),j}function ce(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Pe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case qe:e:{for(var j=p.key,P=c;P!==null;){if(P.key===j){if(j=p.type,j===Pe){if(P.tag===7){n(f,P.sibling),c=l(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Le&&ns(j)===P.type){n(f,P.sibling),c=l(P,p.props),c.ref=lr(f,P,p),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===Pe?(c=an(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Sl(p.type,p.key,p.props,null,f.mode,x),x.ref=lr(f,c,p),x.return=f,f=x)}return o(f);case Ce:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=xo(p,f.mode,x),c.return=f,f=c}return o(f);case Le:return P=p._init,ce(f,c,P(p._payload),x)}if(Mn(p))return E(f,c,p,x);if(R(p))return C(f,c,p,x);Jr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=ko(p,f.mode,x),c.return=f,f=c),o(f)):n(f,c)}return ce}var Nn=rs(!0),ls=rs(!1),qr=bt(null),el=null,En=null,zi=null;function Pi(){zi=En=el=null}function Li(e){var t=qr.current;G(qr),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){el=e,zi=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Me=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(el===null)throw Error(m(308));En=e,el.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var qt=null;function Ti(e){qt===null?qt=[e]:qt.push(e)}function is(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ti(t)):(n.next=l.next,l.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(U&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,St(e,n)}return l=r.interleaved,l===null?(t.next=t,Ti(r)):(t.next=l.next,l.next=t),r.interleaved=t,St(e,n)}function tl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function as(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,r){var l=e.updateQueue;Dt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,g=s.next;s.next=null,o===null?i=g:o.next=g,o=s;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=g:a.next=g,y.lastBaseUpdate=s))}if(i!==null){var k=l.baseState;o=0,y=g=s=null,a=i;do{var h=a.lane,S=a.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,C=a;switch(h=t,S=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){k=E.call(S,k,h);break e}k=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,h=typeof E=="function"?E.call(S,k,h):E,h==null)break e;k=N({},k,h);break e;case 2:Dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else S={eventTime:S,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(g=y=S,s=k):y=y.next=S,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(y===null&&(s=k),l.baseState=s,l.firstBaseUpdate=g,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);nn|=o,e.lanes=o,e.memoizedState=k}}function ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(m(191,l));l.call(r)}}}var ir={},pt=bt(ir),or=bt(ir),ar=bt(ir);function en(e){if(e===ir)throw Error(m(174));return e}function bi(e,t){switch(K(ar,t),K(or,e),K(pt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}G(pt),K(pt,t)}function jn(){G(pt),G(or),G(ar)}function us(e){en(ar.current);var t=en(pt.current),n=Il(t,e.type);t!==n&&(K(or,e),K(pt,n))}function Ii(e){or.current===e&&(G(pt),G(or))}var ie=bt(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oi=[];function Di(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var ll=we.ReactCurrentDispatcher,Fi=we.ReactCurrentBatchConfig,tn=0,oe=null,fe=null,me=null,il=!1,sr=!1,ur=0,ed=0;function _e(){throw Error(m(321))}function Ui(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Hi(e,t,n,r,l,i){if(tn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ll.current=e===null||e.memoizedState===null?ld:id,e=n(r,l),sr){i=0;do{if(sr=!1,ur=0,25<=i)throw Error(m(301));i+=1,me=fe=null,t.updateQueue=null,ll.current=od,e=n(r,l)}while(sr)}if(ll.current=sl,t=fe!==null&&fe.next!==null,tn=0,me=fe=oe=null,il=!1,t)throw Error(m(300));return e}function Ai(){var e=ur!==0;return ur=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function Ye(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(m(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function cr(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=fe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,g=i;do{var y=g.lane;if((tn&y)===y)s!==null&&(s=s.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var k={lane:y,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};s===null?(a=s=k,o=r):s=s.next=k,oe.lanes|=y,nn|=y}g=g.next}while(g!==null&&g!==i);s===null?o=r:s.next=a,nt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,oe.lanes|=i,nn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vi(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);nt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function cs(){}function ds(e,t){var n=oe,r=Ye(),l=t(),i=!nt(r.memoizedState,l);if(i&&(r.memoizedState=l,Me=!0),r=r.queue,Wi(gs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,dr(9,ps.bind(null,n,r,l,t),void 0,null),he===null)throw Error(m(349));(tn&30)!==0||fs(n,t,l)}return l}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&hs(e)}function gs(e,t,n){return n(function(){ms(t)&&hs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function hs(e){var t=St(e,1);t!==null&&at(t,e,1,-1)}function vs(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=rd.bind(null,oe,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ys(){return Ye().memoizedState}function ol(e,t,n,r){var l=gt();oe.flags|=e,l.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Ye();r=r===void 0?null:r;var i=void 0;if(fe!==null){var o=fe.memoizedState;if(i=o.destroy,r!==null&&Ui(r,o.deps)){l.memoizedState=dr(t,n,i,r);return}}oe.flags|=e,l.memoizedState=dr(1|t,n,i,r)}function ks(e,t){return ol(8390656,8,e,t)}function Wi(e,t){return al(2048,8,e,t)}function xs(e,t){return al(4,2,e,t)}function ws(e,t){return al(4,4,e,t)}function Ss(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,Ss.bind(null,t,e),n)}function Qi(){}function Ns(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Es(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cs(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n):(nt(n,t)||(n=na(),oe.lanes|=n,nn|=n,e.baseState=!0),t)}function td(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Fi.transition;Fi.transition={};try{e(!1),t()}finally{Q=n,Fi.transition=r}}function js(){return Ye().memoizedState}function nd(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e))Ps(t,n);else if(n=is(e,t,n,r),n!==null){var l=ze();at(n,e,r,l),Ls(n,t,r)}}function rd(e,t,n){var r=Bt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Ps(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,nt(a,o)){var s=t.interleaved;s===null?(l.next=l,Ti(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=is(e,t,l,r),n!==null&&(l=ze(),at(n,e,r,l),Ls(n,t,r))}}function zs(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Ps(e,t){sr=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var sl={readContext:Ke,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},ld={readContext:Ke,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ol(4194308,4,Ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return ol(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nd.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:vs,useDebugValue:Qi,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=vs(!1),t=e[0];return e=td.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,l=gt();if(te){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),he===null)throw Error(m(349));(tn&30)!==0||fs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ks(gs.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,ps.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=he.identifierPrefix;if(te){var n=wt,r=xt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ed++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},id={readContext:Ke,useCallback:Ns,useContext:Ke,useEffect:Wi,useImperativeHandle:_s,useInsertionEffect:xs,useLayoutEffect:ws,useMemo:Es,useReducer:Bi,useRef:ys,useState:function(){return Bi(cr)},useDebugValue:Qi,useDeferredValue:function(e){var t=Ye();return Cs(t,fe.memoizedState,e)},useTransition:function(){var e=Bi(cr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:js,unstable_isNewReconciler:!1},od={readContext:Ke,useCallback:Ns,useContext:Ke,useEffect:Wi,useImperativeHandle:_s,useInsertionEffect:xs,useLayoutEffect:ws,useMemo:Es,useReducer:Vi,useRef:ys,useState:function(){return Vi(cr)},useDebugValue:Qi,useDeferredValue:function(e){var t=Ye();return fe===null?t.memoizedState=e:Cs(t,fe.memoizedState,e)},useTransition:function(){var e=Vi(cr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:js,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=N({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),l=Bt(e),i=_t(r,l);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,l),t!==null&&(at(t,e,l,r),tl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),l=Bt(e),i=_t(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,l),t!==null&&(at(t,e,l,r),tl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=Bt(e),l=_t(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ft(e,l,r),t!==null&&(at(t,e,r,n),tl(t,e,r))}};function Rs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(l,i):!0}function Ts(e,t,n){var r=!1,l=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Ke(i):(l=Te(t)?Gt:Se.current,r=t.contextTypes,i=(r=r!=null)?xn(e,l):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ms(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Mi(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ke(i):(i=Te(t)?Gt:Se.current,l.context=xn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($i(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),nl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",r=t;do n+=A(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function bs(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hl||(hl=!0,co=r),Yi(e,t)},n}function Is(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Yi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yi(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=wd.bind(null,e,t,n),t.then(e,e))}function Ds(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fs(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var sd=we.ReactCurrentOwner,Me=!1;function je(e,t,n,r){t.child=e===null?ls(t,null,n,r):Nn(t,e.child,n,r)}function Us(e,t,n,r,l){n=n.render;var i=t.ref;return Cn(t,l),r=Hi(e,t,n,r,i,l),n=Ai(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Nt(e,t,l)):(te&&n&&_i(t),t.flags|=1,je(e,t,r,l),t.child)}function Hs(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!yo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,As(e,t,i,r,l)):(e=Sl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(o,r)&&e.ref===t.ref)return Nt(e,t,l)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function As(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Me=!0);else return t.lanes=e.lanes,Nt(e,t,l)}return Gi(e,t,n,r,l)}function Bs(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Ln,Be),Be|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Ln,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(Ln,Be),Be|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(Ln,Be),Be|=r;return je(e,t,l,n),t.child}function Vs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gi(e,t,n,r,l){var i=Te(n)?Gt:Se.current;return i=xn(t,i),Cn(t,l),n=Hi(e,t,n,r,i,l),r=Ai(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Nt(e,t,l)):(te&&r&&_i(t),t.flags|=1,je(e,t,n,l),t.child)}function Ws(e,t,n,r,l){if(Te(n)){var i=!0;Xr(t)}else i=!1;if(Cn(t,l),t.stateNode===null)dl(e,t),Ts(t,n,r),Xi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,g=n.contextType;typeof g=="object"&&g!==null?g=Ke(g):(g=Te(n)?Gt:Se.current,g=xn(t,g));var y=n.getDerivedStateFromProps,k=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==g)&&Ms(t,o,r,g),Dt=!1;var h=t.memoizedState;o.state=h,nl(t,r,o,l),s=t.memoizedState,a!==r||h!==s||Re.current||Dt?(typeof y=="function"&&($i(t,n,y,r),s=t.memoizedState),(a=Dt||Rs(t,n,a,r,h,s,g))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=g,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,os(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:lt(t.type,a),o.props=g,k=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ke(s):(s=Te(n)?Gt:Se.current,s=xn(t,s));var S=n.getDerivedStateFromProps;(y=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==k||h!==s)&&Ms(t,o,r,s),Dt=!1,h=t.memoizedState,o.state=h,nl(t,r,o,l);var E=t.memoizedState;a!==k||h!==E||Re.current||Dt?(typeof S=="function"&&($i(t,n,S,r),E=t.memoizedState),(g=Dt||Rs(t,n,g,r,h,E,s)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=s,r=g):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Zi(e,t,n,r,i,l)}function Zi(e,t,n,r,l,i){Vs(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ya(t,n,!1),Nt(e,t,i);r=t.stateNode,sd.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Nn(t,e.child,null,i),t.child=Nn(t,null,a,i)):je(e,t,a,i),t.memoizedState=r.state,l&&Ya(t,n,!0),t.child}function Qs(e){var t=e.stateNode;t.pendingContext?Xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xa(e,t.context,!1),bi(e,t.containerInfo)}function $s(e,t,n,r,l){return _n(),ji(l),t.flags|=256,je(e,t,n,r),t.child}var Ji={dehydrated:null,treeContext:null,retryLane:0};function qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xs(e,t,n){var r=t.pendingProps,l=ie.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),K(ie,l&1),e===null)return Ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_l(o,r,0,null),e=an(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=qi(n),t.memoizedState=Ji,e):eo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return ud(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Wt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=Wt(a,i):(i=an(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?qi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ji,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eo(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cl(e,t,n,r){return r!==null&&ji(r),Nn(t,e.child,null,n),e=eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(m(422))),cl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),i=an(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Nn(t,e.child,null,o),t.child.memoizedState=qi(o),t.memoizedState=Ji,i);if((t.mode&1)===0)return cl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(m(419)),r=Ki(i,r,void 0),cl(e,t,o,r)}if(a=(o&e.childLanes)!==0,Me||a){if(r=he,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,St(e,l),at(r,e,l,-1))}return vo(),r=Ki(Error(m(421))),cl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Sd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ae=Mt(l.nextSibling),He=t,te=!0,rt=null,e!==null&&($e[Xe++]=xt,$e[Xe++]=wt,$e[Xe++]=Zt,xt=e.id,wt=e.overflow,Zt=t),t=eo(t,r.children),t.flags|=4096,t)}function Ks(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function to(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ys(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(je(e,t,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ks(e,n,t);else if(e.tag===19)Ks(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ie,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),to(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&rl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}to(t,!0,n,null,i);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function dl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cd(e,t,n){switch(t.tag){case 3:Qs(t),_n();break;case 5:us(t);break;case 1:Te(t.type)&&Xr(t);break;case 4:bi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;K(qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ie,ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Xs(e,t,n):(K(ie,ie.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);K(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ys(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Bs(e,t,n)}return Nt(e,t,n)}var Gs,no,Zs,Js;Gs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},no=function(){},Zs=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,en(pt.current);var i=null;switch(n){case"input":l=Rl(e,l),r=Rl(e,r),i=[];break;case"select":l=N({},l,{value:void 0}),r=N({},r,{value:void 0}),i=[];break;case"textarea":l=bl(e,l),r=bl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}Ol(n,r);var o;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var a=l[g];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(D.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var s=r[g];if(a=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&s!==a&&(s!=null||a!=null))if(g==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(g,n)),n=s;else g==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(g,s)):g==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(g,""+s):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(D.hasOwnProperty(g)?(s!=null&&g==="onScroll"&&Y("scroll",e),i||a===s||(i=[])):(i=i||[]).push(g,s))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}},Js=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Te(t.type)&&$r(),Ne(t),null;case 3:return r=t.stateNode,jn(),G(Re),G(Se),Di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(go(rt),rt=null))),no(e,t),Ne(t),null;case 5:Ii(t);var l=en(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Zs(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return Ne(t),null}if(e=en(pt.current),Zr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ft]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(l=0;l<qn.length;l++)Y(qn[l],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":To(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Io(r,i),Y("invalid",r)}Ol(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),l=["children",""+a]):D.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":xr(r),bo(r,i,!0);break;case"textarea":xr(r),Do(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ft]=t,e[nr]=r,Gs(e,t,!1,!1),t.stateNode=e;e:{switch(o=Dl(n,r),n){case"dialog":Y("cancel",e),Y("close",e),l=r;break;case"iframe":case"object":case"embed":Y("load",e),l=r;break;case"video":case"audio":for(l=0;l<qn.length;l++)Y(qn[l],e);l=r;break;case"source":Y("error",e),l=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),l=r;break;case"details":Y("toggle",e),l=r;break;case"input":To(e,r),l=Rl(e,r),Y("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=N({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Io(e,r),l=bl(e,r),Y("invalid",e);break;default:l=r}Ol(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Ao(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Uo(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&bn(e,s):typeof s=="number"&&bn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(D.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Y("scroll",e):s!=null&&Je(e,i,s,o))}switch(n){case"input":xr(e),bo(e,r,!1);break;case"textarea":xr(e),Do(e);break;case"option":r.value!=null&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Js(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=en(ar.current),en(pt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Ne(t),null;case 13:if(G(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ae!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ts(),_n(),t.flags|=98560,i=!1;else if(i=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[ft]=t}else _n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else rt!==null&&(go(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ie.current&1)!==0?pe===0&&(pe=3):vo())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return jn(),no(e,t),e===null&&er(t.stateNode.containerInfo),Ne(t),null;case 10:return Li(t.type._context),Ne(t),null;case 17:return Te(t.type)&&$r(),Ne(t),null;case 19:if(G(ie),i=t.memoizedState,i===null)return Ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)fr(i,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=rl(e),o!==null){for(t.flags|=128,fr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>Rn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=rl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!te)return Ne(t),null}else 2*ue()-i.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=ie.current,K(ie,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return ho(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Be&1073741824)!==0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function fd(e,t){switch(Ni(t),t.tag){case 1:return Te(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),G(Re),G(Se),Di(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ii(t),null;case 13:if(G(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(ie),null;case 4:return jn(),null;case 10:return Li(t.type._context),null;case 22:case 23:return ho(),null;case 24:return null;default:return null}}var fl=!1,Ee=!1,pd=typeof WeakSet=="function"?WeakSet:Set,_=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function ro(e,t,n){try{n()}catch(r){se(e,t,r)}}var qs=!1;function gd(e,t){if(mi=Tr,e=Ra(),ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,g=0,y=0,k=e,h=null;t:for(;;){for(var S;k!==n||l!==0&&k.nodeType!==3||(a=o+l),k!==i||r!==0&&k.nodeType!==3||(s=o+r),k.nodeType===3&&(o+=k.nodeValue.length),(S=k.firstChild)!==null;)h=k,k=S;for(;;){if(k===e)break t;if(h===n&&++g===l&&(a=o),h===i&&++y===r&&(s=o),(S=k.nextSibling)!==null)break;k=h,h=k.parentNode}k=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},Tr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,ce=E.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:lt(t.type,C),ce);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(x){se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return E=qs,qs=!1,E}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ro(t,n,i)}l=l.next}while(l!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[nr],delete t[xi],delete t[Gc],delete t[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}var ke=null,it=!1;function Ut(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Cr,n)}catch{}switch(n.tag){case 5:Ee||Pn(n,t);case 6:var r=ke,l=it;ke=null,Ut(e,t,n),ke=r,it=l,ke!==null&&(it?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(it?(e=ke,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),Qn(e)):ki(ke,n.stateNode));break;case 4:r=ke,l=it,ke=n.stateNode.containerInfo,it=!0,Ut(e,t,n),ke=r,it=l;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&ro(n,t,o),l=l.next}while(l!==r)}Ut(e,t,n);break;case 1:if(!Ee&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ut(e,t,n),Ee=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pd),t.forEach(function(r){var l=_d.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,it=!1;break e;case 3:ke=a.stateNode.containerInfo,it=!0;break e;case 4:ke=a.stateNode.containerInfo,it=!0;break e}a=a.return}if(ke===null)throw Error(m(160));ru(i,o,l),ke=null,it=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(g){se(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)iu(t,e),t=t.sibling}function iu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),mt(e),r&4){try{pr(3,e,e.return),pl(3,e)}catch(C){se(e,e.return,C)}try{pr(5,e,e.return)}catch(C){se(e,e.return,C)}}break;case 1:ot(t,e),mt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(ot(t,e),mt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var l=e.stateNode;try{bn(l,"")}catch(C){se(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Mo(l,i),Dl(a,o);var g=Dl(a,i);for(o=0;o<s.length;o+=2){var y=s[o],k=s[o+1];y==="style"?Ao(l,k):y==="dangerouslySetInnerHTML"?Uo(l,k):y==="children"?bn(l,k):Je(l,y,k,g)}switch(a){case"input":Tl(l,i);break;case"textarea":Oo(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?sn(l,!!i.multiple,S,!1):h!==!!i.multiple&&(i.defaultValue!=null?sn(l,!!i.multiple,i.defaultValue,!0):sn(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(C){se(e,e.return,C)}}break;case 6:if(ot(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(m(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(C){se(e,e.return,C)}}break;case 3:if(ot(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(C){se(e,e.return,C)}break;case 4:ot(t,e),mt(e);break;case 13:ot(t,e),mt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(uo=ue())),r&4&&lu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(g=Ee)||y,ot(t,e),Ee=g):ot(t,e),mt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!y&&(e.mode&1)!==0)for(_=e,y=e.child;y!==null;){for(k=_=y;_!==null;){switch(h=_,S=h.child,h.tag){case 0:case 11:case 14:case 15:pr(4,h,h.return);break;case 1:Pn(h,h.return);var E=h.stateNode;if(typeof E.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(C){se(r,n,C)}}break;case 5:Pn(h,h.return);break;case 22:if(h.memoizedState!==null){su(k);continue}}S!==null?(S.return=h,_=S):su(k)}y=y.sibling}e:for(y=null,k=e;;){if(k.tag===5){if(y===null){y=k;try{l=k.stateNode,g?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=k.stateNode,s=k.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ho("display",o))}catch(C){se(e,e.return,C)}}}else if(k.tag===6){if(y===null)try{k.stateNode.nodeValue=g?"":k.memoizedProps}catch(C){se(e,e.return,C)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;y===k&&(y=null),k=k.return}y===k&&(y=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:ot(t,e),mt(e),r&4&&lu(e);break;case 21:break;default:ot(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(bn(l,""),r.flags&=-33);var i=nu(e);oo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nu(e);io(e,a,o);break;default:throw Error(m(161))}}catch(s){se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function md(e,t,n){_=e,ou(e)}function ou(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||fl;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||Ee;a=fl;var g=Ee;if(fl=o,(Ee=s)&&!g)for(_=l;_!==null;)o=_,s=o.child,o.tag===22&&o.memoizedState!==null?uu(l):s!==null?(s.return=o,_=s):uu(l);for(;i!==null;)_=i,ou(i),i=i.sibling;_=l,fl=a,Ee=g}au(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,_=i):au(e)}}function au(e){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ee||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ss(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ss(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var y=g.memoizedState;if(y!==null){var k=y.dehydrated;k!==null&&Qn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Ee||t.flags&512&&lo(t)}catch(h){se(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function su(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function uu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(s){se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){se(t,l,s)}}var i=t.return;try{lo(t)}catch(s){se(t,i,s)}break;case 5:var o=t.return;try{lo(t)}catch(s){se(t,o,s)}}}catch(s){se(t,t.return,s)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var hd=Math.ceil,gl=we.ReactCurrentDispatcher,ao=we.ReactCurrentOwner,Ge=we.ReactCurrentBatchConfig,U=0,he=null,de=null,xe=0,Be=0,Ln=bt(0),pe=0,gr=null,nn=0,ml=0,so=0,mr=null,be=null,uo=0,Rn=1/0,Et=null,hl=!1,co=null,Ht=null,vl=!1,At=null,yl=0,hr=0,fo=null,kl=-1,xl=0;function ze(){return(U&6)!==0?ue():kl!==-1?kl:kl=ue()}function Bt(e){return(e.mode&1)===0?1:(U&2)!==0&&xe!==0?xe&-xe:qc.transition!==null?(xl===0&&(xl=na()),xl):(e=Q,e!==0||(e=window.event,e=e===void 0?16:da(e.type)),e)}function at(e,t,n,r){if(50<hr)throw hr=0,fo=null,Error(m(185));Hn(e,n,r),((U&2)===0||e!==he)&&(e===he&&((U&2)===0&&(ml|=n),pe===4&&Vt(e,xe)),Ie(e,r),n===1&&U===0&&(t.mode&1)===0&&(Rn=ue()+500,Kr&&Ot()))}function Ie(e,t){var n=e.callbackNode;qu(e,t);var r=Pr(e,e===he?xe:0);if(r===0)n!==null&&qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qo(n),t===1)e.tag===0?Jc(du.bind(null,e)):Ga(du.bind(null,e)),Kc(function(){(U&6)===0&&Ot()}),n=null;else{switch(ra(r)){case 1:n=Wl;break;case 4:n=ea;break;case 16:n=Er;break;case 536870912:n=ta;break;default:n=Er}n=ku(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(kl=-1,xl=0,(U&6)!==0)throw Error(m(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=Pr(e,e===he?xe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wl(e,r);else{t=r;var l=U;U|=2;var i=pu();(he!==e||xe!==t)&&(Et=null,Rn=ue()+500,ln(e,t));do try{kd();break}catch(a){fu(e,a)}while(!0);Pi(),gl.current=i,U=l,de!==null?t=0:(he=null,xe=0,t=pe)}if(t!==0){if(t===2&&(l=Ql(e),l!==0&&(r=l,t=po(e,l))),t===1)throw n=gr,ln(e,0),Vt(e,r),Ie(e,ue()),n;if(t===6)Vt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!vd(l)&&(t=wl(e,r),t===2&&(i=Ql(e),i!==0&&(r=i,t=po(e,i))),t===1))throw n=gr,ln(e,0),Vt(e,r),Ie(e,ue()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:on(e,be,Et);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=uo+500-ue(),10<t)){if(Pr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yi(on.bind(null,e,be,Et),t);break}on(e,be,Et);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-tt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hd(r/1960))-r,10<r){e.timeoutHandle=yi(on.bind(null,e,be,Et),r);break}on(e,be,Et);break;case 5:on(e,be,Et);break;default:throw Error(m(329))}}}return Ie(e,ue()),e.callbackNode===n?cu.bind(null,e):null}function po(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=wl(e,t),e!==2&&(t=be,be=n,t!==null&&go(t)),e}function go(e){be===null?be=e:be.push.apply(be,e)}function vd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!nt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~so,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((U&6)!==0)throw Error(m(327));Tn();var t=Pr(e,0);if((t&1)===0)return Ie(e,ue()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=po(e,r))}if(n===1)throw n=gr,ln(e,0),Vt(e,t),Ie(e,ue()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,be,Et),Ie(e,ue()),null}function mo(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Rn=ue()+500,Kr&&Ot())}}function rn(e){At!==null&&At.tag===0&&(U&6)===0&&Tn();var t=U;U|=1;var n=Ge.transition,r=Q;try{if(Ge.transition=null,Q=1,e)return e()}finally{Q=r,Ge.transition=n,U=t,(U&6)===0&&Ot()}}function ho(){Be=Ln.current,G(Ln)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xc(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:jn(),G(Re),G(Se),Di();break;case 5:Ii(r);break;case 4:jn();break;case 13:G(ie);break;case 19:G(ie);break;case 10:Li(r.type._context);break;case 22:case 23:ho()}n=n.return}if(he=e,de=e=Wt(e.current,null),xe=Be=t,pe=0,gr=null,so=ml=nn=0,be=mr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}qt=null}return e}function fu(e,t){do{var n=de;try{if(Pi(),ll.current=sl,il){for(var r=oe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}il=!1}if(tn=0,me=fe=oe=null,sr=!1,ur=0,ao.current=null,n===null||n.return===null){pe=1,gr=t,de=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=xe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=s,y=a,k=y.tag;if((y.mode&1)===0&&(k===0||k===11||k===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Ds(o);if(S!==null){S.flags&=-257,Fs(S,o,a,i,t),S.mode&1&&Os(i,g,t),t=S,s=g;var E=t.updateQueue;if(E===null){var C=new Set;C.add(s),t.updateQueue=C}else E.add(s);break e}else{if((t&1)===0){Os(i,g,t),vo();break e}s=Error(m(426))}}else if(te&&a.mode&1){var ce=Ds(o);if(ce!==null){(ce.flags&65536)===0&&(ce.flags|=256),Fs(ce,o,a,i,t),ji(zn(s,a));break e}}i=s=zn(s,a),pe!==4&&(pe=2),mr===null?mr=[i]:mr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=bs(i,s,t);as(i,f);break e;case 1:a=s;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ht===null||!Ht.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Is(i,a,t);as(i,x);break e}}i=i.return}while(i!==null)}mu(n)}catch(j){t=j,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function pu(){var e=gl.current;return gl.current=sl,e===null?sl:e}function vo(){(pe===0||pe===3||pe===2)&&(pe=4),he===null||(nn&268435455)===0&&(ml&268435455)===0||Vt(he,xe)}function wl(e,t){var n=U;U|=2;var r=pu();(he!==e||xe!==t)&&(Et=null,ln(e,t));do try{yd();break}catch(l){fu(e,l)}while(!0);if(Pi(),U=n,gl.current=r,de!==null)throw Error(m(261));return he=null,xe=0,pe}function yd(){for(;de!==null;)gu(de)}function kd(){for(;de!==null&&!Wu();)gu(de)}function gu(e){var t=yu(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?mu(e):de=t,ao.current=null}function mu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=dd(n,t,Be),n!==null){de=n;return}}else{if(n=fd(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);pe===0&&(pe=5)}function on(e,t,n){var r=Q,l=Ge.transition;try{Ge.transition=null,Q=1,xd(e,t,n,r)}finally{Ge.transition=l,Q=r}return null}function xd(e,t,n,r){do Tn();while(At!==null);if((U&6)!==0)throw Error(m(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ec(e,i),e===he&&(de=he=null,xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vl||(vl=!0,ku(Er,function(){return Tn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ge.transition,Ge.transition=null;var o=Q;Q=1;var a=U;U|=4,ao.current=null,gd(e,n),iu(n,e),Hc(hi),Tr=!!mi,hi=mi=null,e.current=n,md(n),Qu(),U=a,Q=o,Ge.transition=i}else e.current=n;if(vl&&(vl=!1,At=e,yl=l),i=e.pendingLanes,i===0&&(Ht=null),Ku(n.stateNode),Ie(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(hl)throw hl=!1,e=co,co=null,e;return(yl&1)!==0&&e.tag!==0&&Tn(),i=e.pendingLanes,(i&1)!==0?e===fo?hr++:(hr=0,fo=e):hr=0,Ot(),null}function Tn(){if(At!==null){var e=ra(yl),t=Ge.transition,n=Q;try{if(Ge.transition=null,Q=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,yl=0,(U&6)!==0)throw Error(m(331));var l=U;for(U|=4,_=e.current;_!==null;){var i=_,o=i.child;if((_.flags&16)!==0){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var g=a[s];for(_=g;_!==null;){var y=_;switch(y.tag){case 0:case 11:case 15:pr(8,y,i)}var k=y.child;if(k!==null)k.return=y,_=k;else for(;_!==null;){y=_;var h=y.sibling,S=y.return;if(eu(y),y===g){_=null;break}if(h!==null){h.return=S,_=h;break}_=S}}}var E=i.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var ce=C.sibling;C.sibling=null,C=ce}while(C!==null)}}_=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var c=e.current;for(_=c;_!==null;){o=_;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,_=p;else e:for(o=c;_!==null;){if(a=_,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(j){se(a,a.return,j)}if(a===o){_=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,_=x;break e}_=a.return}}if(U=l,Ot(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Cr,e)}catch{}r=!0}return r}finally{Q=n,Ge.transition=t}}return!1}function hu(e,t,n){t=zn(n,t),t=bs(e,t,1),e=Ft(e,t,1),t=ze(),e!==null&&(Hn(e,1,t),Ie(e,t))}function se(e,t,n){if(e.tag===3)hu(e,e,n);else for(;t!==null;){if(t.tag===3){hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=zn(n,e),e=Is(t,e,1),t=Ft(t,e,1),e=ze(),t!==null&&(Hn(t,1,e),Ie(t,e));break}}t=t.return}}function wd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(xe&n)===n&&(pe===4||pe===3&&(xe&130023424)===xe&&500>ue()-uo?ln(e,0):so|=n),Ie(e,t)}function vu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=ze();e=St(e,t),e!==null&&(Hn(e,t,n),Ie(e,n))}function Sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vu(e,n)}function _d(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),vu(e,n)}var yu;yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Me=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Me=!1,cd(e,t,n);Me=(e.flags&131072)!==0}else Me=!1,te&&(t.flags&1048576)!==0&&Za(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;dl(e,t),e=t.pendingProps;var l=xn(t,Se.current);Cn(t,n),l=Hi(null,t,r,e,l,n);var i=Ai();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(i=!0,Xr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Mi(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,Xi(t,r,e,n),t=Zi(null,t,r,!0,i,n)):(t.tag=0,te&&i&&_i(t),je(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(dl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ed(r),e=lt(r,e),l){case 0:t=Gi(null,t,r,e,n);break e;case 1:t=Ws(null,t,r,e,n);break e;case 11:t=Us(null,t,r,e,n);break e;case 14:t=Hs(null,t,r,lt(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),Gi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),Ws(e,t,r,l,n);case 3:e:{if(Qs(t),e===null)throw Error(m(387));r=t.pendingProps,i=t.memoizedState,l=i.element,os(e,t),nl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=zn(Error(m(423)),t),t=$s(e,t,r,n,l);break e}else if(r!==l){l=zn(Error(m(424)),t),t=$s(e,t,r,n,l);break e}else for(Ae=Mt(t.stateNode.containerInfo.firstChild),He=t,te=!0,rt=null,n=ls(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===l){t=Nt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return us(t),e===null&&Ci(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,vi(r,l)?o=null:i!==null&&vi(r,i)&&(t.flags|=32),Vs(e,t),je(e,t,o,n),t.child;case 6:return e===null&&Ci(t),null;case 13:return Xs(e,t,n);case 4:return bi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),Us(e,t,r,l,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,K(qr,r._currentValue),r._currentValue=o,i!==null)if(nt(i.value,o)){if(i.children===l.children&&!Re.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=_t(-1,n&-n),s.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var y=g.pending;y===null?s.next=s:(s.next=y.next,y.next=s),g.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ri(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ri(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}je(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Cn(t,n),l=Ke(l),r=r(l),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,l=lt(r,t.pendingProps),l=lt(r.type,l),Hs(e,t,r,l,n);case 15:return As(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),dl(e,t),t.tag=1,Te(r)?(e=!0,Xr(t)):e=!1,Cn(t,n),Ts(t,r,l),Xi(t,r,l,n),Zi(null,t,r,!0,e,n);case 19:return Ys(e,t,n);case 22:return Bs(e,t,n)}throw Error(m(156,t.tag))};function ku(e,t){return Jo(e,t)}function Nd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Nd(e,t,n,r)}function yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ed(e){if(typeof e=="function")return yo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")yo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Pe:return an(n.children,l,i,t);case Qe:o=8,l|=8;break;case Ct:return e=Ze(12,n,t,l|2),e.elementType=Ct,e.lanes=i,e;case De:return e=Ze(13,n,t,l),e.elementType=De,e.lanes=i,e;case et:return e=Ze(19,n,t,l),e.elementType=et,e.lanes=i,e;case ae:return _l(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:o=10;break e;case Xt:o=9;break e;case ut:o=11;break e;case ct:o=14;break e;case Le:o=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=Ze(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function an(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=ae,e.lanes=n,e.stateNode={isHidden:!1},e}function ko(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function xo(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function wo(e,t,n,r,l,i,o,a,s){return e=new Cd(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mi(i),e}function jd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xu(e){if(!e)return It;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(Te(n))return Ka(e,n,t)}return t}function wu(e,t,n,r,l,i,o,a,s){return e=wo(n,r,!0,e,l,i,o,a,s),e.context=xu(null),n=e.current,r=ze(),l=Bt(n),i=_t(r,l),i.callback=t??null,Ft(n,i,l),e.current.lanes=l,Hn(e,l,r),Ie(e,r),e}function Nl(e,t,n,r){var l=t.current,i=ze(),o=Bt(l);return n=xu(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(l,t,o),e!==null&&(at(e,l,o,i),tl(e,l,o)),o}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function So(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function zd(){return null}var _u=typeof reportError=="function"?reportError:function(e){console.error(e)};function _o(e){this._internalRoot=e}Cl.prototype.render=_o.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Nl(e,t,null,null)},Cl.prototype.unmount=_o.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Nl(null,e,null,null)}),t[yt]=null}};function Cl(e){this._internalRoot=e}Cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&ua(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function Pd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var g=El(o);i.call(g)}}var o=wu(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=o,e[yt]=o.current,er(e.nodeType===8?e.parentNode:e),rn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var g=El(s);a.call(g)}}var s=wo(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=s,e[yt]=s.current,er(e.nodeType===8?e.parentNode:e),rn(function(){Nl(t,s,n,r)}),s}function zl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=El(o);a.call(s)}}Nl(t,o,e,l)}else o=Pd(n,t,e,l,r);return El(o)}la=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Xl(t,n|1),Ie(t,ue()),(U&6)===0&&(Rn=ue()+500,Ot()))}break;case 13:rn(function(){var r=St(e,1);if(r!==null){var l=ze();at(r,e,1,l)}}),So(e,1)}},Kl=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=ze();at(t,e,134217728,n)}So(e,134217728)}},ia=function(e){if(e.tag===13){var t=Bt(e),n=St(e,t);if(n!==null){var r=ze();at(n,e,t,r)}So(e,t)}},oa=function(){return Q},aa=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}},Hl=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Qr(r);if(!l)throw Error(m(90));Ro(r),Tl(r,l)}}}break;case"textarea":Oo(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},Qo=mo,$o=rn;var Ld={usingClientEntryPoint:!1,Events:[rr,yn,Qr,Vo,Wo,mo]},vr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Go(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Cr=Pl.inject(Rd),dt=Pl}catch{}}return Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ld,Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(m(200));return jd(e,t,null,n)},Oe.createRoot=function(e,t){if(!No(e))throw Error(m(299));var n=!1,r="",l=_u;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=wo(e,1,!1,null,null,n,!1,r,l),e[yt]=t.current,er(e.nodeType===8?e.parentNode:e),new _o(t)},Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Go(t),e=e===null?null:e.stateNode,e},Oe.flushSync=function(e){return rn(e)},Oe.hydrate=function(e,t,n){if(!jl(t))throw Error(m(200));return zl(null,e,t,!0,n)},Oe.hydrateRoot=function(e,t,n){if(!No(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=_u;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=wu(t,null,e,1,n??null,l,!1,i,o),e[yt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Cl(t)},Oe.render=function(e,t,n){if(!jl(t))throw Error(m(200));return zl(null,e,t,!1,n)},Oe.unmountComponentAtNode=function(e){if(!jl(e))throw Error(m(40));return e._reactRootContainer?(rn(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1},Oe.unstable_batchedUpdates=mo,Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jl(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return zl(e,t,n,!1,r)},Oe.version="18.3.1-next-f1338f8080-20240426",Oe}var Tu;function Ud(){if(Tu)return jo.exports;Tu=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(M){console.error(M)}}return z(),jo.exports=Fd(),jo.exports}var Mu;function Hd(){if(Mu)return Ll;Mu=1;var z=Ud();return Ll.createRoot=z.createRoot,Ll.hydrateRoot=z.hydrateRoot,Ll}var Ad=Hd();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Iu=(...z)=>z.filter((M,m,Z)=>!!M&&M.trim()!==""&&Z.indexOf(M)===m).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=$t.forwardRef(({color:z="currentColor",size:M=24,strokeWidth:m=2,absoluteStrokeWidth:Z,className:D="",children:F,iconNode:ne,...re},H)=>$t.createElement("svg",{ref:H,...Vd,width:M,height:M,stroke:z,strokeWidth:Z?Number(m)*24/Number(M):m,className:Iu("lucide",D),...re},[...ne.map(([ye,ge])=>$t.createElement(ye,ge)),...Array.isArray(F)?F:[F]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=(z,M)=>{const m=$t.forwardRef(({className:Z,...D},F)=>$t.createElement(Wd,{ref:F,iconNode:M,className:Iu(`lucide-${Bd(z)}`,Z),...D}));return m.displayName=`${z}`,m};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=kr("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=kr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=kr("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=kr("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=kr("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Ou="https://fub.krgintel.com",Yd=[{id:"fub",status:"Live now",title:"FUB Intel Center",body:"A sharper reading of the business built from FUB data—designed to surface hidden opportunities, KPI relationships, law-of-averages insight, and performance patterns that standard dashboard views do not clearly expose.",href:Ou,live:!0,Icon:Xd},{id:"marketing",status:"Taking shape",title:"Marketing Intelligence",body:"A developing intelligence layer focused on the relationship between campaigns, traffic quality, engagement, and downstream business outcomes.",Icon:Qd},{id:"search",status:"Forming now",title:"Search Visibility",body:"An emerging view of discoverability, demand signals, and search behavior designed to reveal how visibility connects to momentum and opportunity flow.",Icon:Kd},{id:"network",status:"Ahead",title:"Intelligence Network",body:"A broader operating view in progress—connecting marketing, search, lead flow, and execution into a clearer picture of what is really driving performance.",Icon:$d}];function Gd(){return u.jsxs("svg",{className:"krg-neural-svg krg-neural-svg--from-core pointer-events-none fixed inset-0 z-0 h-full w-full",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":!0,children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"krg-trace",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"rgba(6,182,212,0)"}),u.jsx("stop",{offset:"45%",stopColor:"rgba(34,211,238,0.22)"}),u.jsx("stop",{offset:"100%",stopColor:"rgba(45,212,191,0)"})]}),u.jsxs("linearGradient",{id:"krg-trace-dim",x1:"0%",y1:"100%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"rgba(148,163,184,0)"}),u.jsx("stop",{offset:"50%",stopColor:"rgba(100,116,139,0.12)"}),u.jsx("stop",{offset:"100%",stopColor:"rgba(148,163,184,0)"})]})]}),u.jsxs("g",{fill:"none",stroke:"url(#krg-trace)",strokeWidth:"0.2",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",className:"krg-circuit-lines",children:[u.jsx("path",{d:"M0 14 H32 L40 24 H72 L82 18 L100 22"}),u.jsx("path",{d:"M0 38 H24 L34 48 H58 L68 44 H100"}),u.jsx("path",{d:"M6 62 H46 L54 52 H94"}),u.jsx("path",{d:"M18 88 H52 L62 76 H100"}),u.jsx("path",{d:"M0 28 L18 34 H50 L64 28"}),u.jsx("path",{d:"M12 50 H40 L48 58 H88"})]}),u.jsxs("g",{fill:"none",stroke:"rgba(45,212,191,0.35)",strokeWidth:"0.12",strokeLinecap:"round",strokeDasharray:"2 18",vectorEffect:"non-scaling-stroke",className:"krg-signal-frags",children:[u.jsx("path",{d:"M0 20 H38"}),u.jsx("path",{d:"M62 30 H100"}),u.jsx("path",{d:"M0 55 H28"}),u.jsx("path",{d:"M70 48 H100"}),u.jsx("path",{d:"M25 72 H55"}),u.jsx("path",{d:"M78 82 H100"})]}),u.jsxs("g",{fill:"none",stroke:"url(#krg-trace-dim)",strokeWidth:"0.1",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",className:"krg-substrate-align",children:[u.jsx("path",{d:"M4 8 H96",opacity:"0.32"}),u.jsx("path",{d:"M2 48 H98",opacity:"0.22"}),u.jsx("path",{d:"M6 78 H92",opacity:"0.2"}),u.jsx("path",{d:"M48 0 V100",opacity:"0.12"}),u.jsx("path",{d:"M72 0 V100",opacity:"0.1"})]}),u.jsx("g",{className:"krg-neural-nodes",fill:"rgba(34,211,238,0.45)",children:[[26,20],[34,24],[42,18],[22,32],[48,44],[68,38],[58,62],[18,52]].map(([z,M],m)=>u.jsx("circle",{cx:z,cy:M,r:"0.35",children:u.jsx("animate",{attributeName:"opacity",values:"0.15;0.85;0.2;0.6;0.15",dur:`${4.2+m*.4}s`,repeatCount:"indefinite"})},m))})]})}function Zd(){return u.jsxs("svg",{className:"krg-lower-sub-svg pointer-events-none fixed bottom-0 left-0 right-0 z-0 h-[min(58vh,760px)] w-full",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 52",preserveAspectRatio:"none","aria-hidden":!0,children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"krg-lower-trace",x1:"0%",y1:"50%",x2:"100%",y2:"50%",children:[u.jsx("stop",{offset:"0%",stopColor:"rgba(34,211,238,0)"}),u.jsx("stop",{offset:"35%",stopColor:"rgba(34,211,238,0.11)"}),u.jsx("stop",{offset:"55%",stopColor:"rgba(56,189,248,0.08)"}),u.jsx("stop",{offset:"78%",stopColor:"rgba(124,58,237,0.07)"}),u.jsx("stop",{offset:"100%",stopColor:"rgba(91,33,182,0)"})]}),u.jsxs("linearGradient",{id:"krg-lower-trace-dim",x1:"100%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"rgba(148,163,184,0)"}),u.jsx("stop",{offset:"50%",stopColor:"rgba(100,116,139,0.07)"}),u.jsx("stop",{offset:"100%",stopColor:"rgba(148,163,184,0)"})]})]}),u.jsxs("g",{fill:"none",stroke:"url(#krg-lower-trace)",strokeWidth:"0.14",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",className:"krg-lower-routes",children:[u.jsx("path",{d:"M0 28 C22 24 28 32 46 26 S78 20 100 24"}),u.jsx("path",{d:"M0 36 L24 34 L38 40 L62 33 L100 38"}),u.jsx("path",{d:"M8 44 H42 L52 38 H92"}),u.jsx("path",{d:"M0 20 H32 L44 26 H72 L84 22",opacity:"0.7"})]}),u.jsxs("g",{fill:"none",stroke:"rgba(45,212,191,0.22)",strokeWidth:"0.1",strokeLinecap:"round",strokeDasharray:"1.5 14",vectorEffect:"non-scaling-stroke",className:"krg-lower-frags",children:[u.jsx("path",{d:"M0 31 H36"}),u.jsx("path",{d:"M58 27 H100"}),u.jsx("path",{d:"M18 41 H48"}),u.jsx("path",{d:"M72 35 H100"})]}),u.jsxs("g",{fill:"none",stroke:"url(#krg-lower-trace-dim)",strokeWidth:"0.09",strokeLinecap:"round",vectorEffect:"non-scaling-stroke",opacity:"0.85",children:[u.jsx("path",{d:"M12 18 H88",opacity:"0.5"}),u.jsx("path",{d:"M0 48 Q50 42 100 46",opacity:"0.45"})]}),u.jsx("g",{className:"krg-lower-nodes",fill:"rgba(34,211,238,0.35)",children:[[24,34],[44,26],[62,33],[78,38],[36,40],[88,22]].map(([z,M],m)=>u.jsx("circle",{cx:z,cy:M,r:"0.28",children:u.jsx("animate",{attributeName:"opacity",values:"0.12;0.45;0.18;0.38;0.12",dur:`${5.5+m*.5}s`,repeatCount:"indefinite"})},m))})]})}function Jd(){const[z,M]=$t.useState(!1);return $t.useEffect(()=>{let m;const Z=requestAnimationFrame(()=>{m=window.setTimeout(()=>M(!0),60)});return()=>{cancelAnimationFrame(Z),m&&window.clearTimeout(m)}},[]),u.jsxs("div",{className:`krg-root relative min-h-screen overflow-x-hidden bg-[#020308] text-[#E8ECF4] selection:bg-cyan-500/25 ${z?"krg-page-ready":""}`,children:[u.jsx(Gd,{}),u.jsxs("div",{className:"pointer-events-none fixed inset-0 z-0 overflow-hidden",children:[u.jsx("div",{className:"krg-neural-mesh absolute inset-0 opacity-[0.22]","aria-hidden":!0}),u.jsx("div",{className:"krg-neural-field krg-neural-field-a absolute inset-0","aria-hidden":!0}),u.jsx("div",{className:"krg-neural-field krg-neural-field-b absolute inset-0","aria-hidden":!0}),u.jsx("div",{className:"krg-synapse-pulse krg-synapse-core absolute left-[min(18%,8rem)] top-[min(14%,5rem)] h-[min(36vw,200px)] w-[min(36vw,200px)] rounded-full bg-cyan-400/[0.032] blur-[72px]","aria-hidden":!0}),u.jsx("div",{className:"krg-synapse-pulse krg-synapse-delay absolute left-[28%] top-[20%] h-28 w-28 rounded-full bg-teal-400/[0.022] blur-[56px]","aria-hidden":!0}),u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_18%_16%,rgba(34,211,238,0.04),transparent_50%)]"})]}),u.jsx("div",{className:"pointer-events-none fixed inset-0 z-0",children:u.jsx("div",{className:"krg-substrate-field absolute inset-0","aria-hidden":!0})}),u.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[min(82vh,920px)] overflow-hidden","aria-hidden":!0,children:u.jsx("div",{className:"krg-lower-energy-drift",children:u.jsx("div",{className:"krg-lower-energy"})})}),u.jsx(Zd,{}),u.jsx("div",{className:"krg-scan pointer-events-none fixed inset-x-0 top-0 z-[1] h-full","aria-hidden":!0}),u.jsx("div",{className:"krg-neural-flicker pointer-events-none fixed inset-0 z-[1]","aria-hidden":!0}),u.jsxs("div",{className:"relative z-[2] mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-7 sm:px-5 sm:pb-24 sm:pt-9",children:[u.jsxs("div",{className:"krg-system-field relative mb-9 sm:mb-10",children:[u.jsxs("header",{className:"krg-hero-environment relative mb-8 min-h-0 overflow-hidden rounded-[1.75rem] border border-white/[0.08] sm:mb-10 sm:rounded-[2rem]",children:[u.jsxs("div",{className:"krg-hero-edge-seam pointer-events-none absolute inset-x-0 top-0 z-[6] h-[5px] overflow-hidden rounded-t-[1.75rem] sm:rounded-t-[2rem]","aria-hidden":!0,children:[u.jsx("div",{className:"krg-hero-edge-seam-breathe",children:u.jsx("div",{className:"krg-hero-edge-seam-bloom"})}),u.jsx("div",{className:"krg-hero-edge-seam-core"}),u.jsx("div",{className:"krg-hero-edge-seam-charge"})]}),u.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]","aria-hidden":!0,children:[u.jsx("div",{className:"krg-hero-atmos absolute inset-0 rounded-[inherit]"}),u.jsx("div",{className:"krg-hero-veil-right absolute inset-0 rounded-[inherit]"})]}),u.jsx("div",{className:"krg-boot-surge pointer-events-none absolute inset-0 z-[3] rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"krg-boot-ripple pointer-events-none absolute inset-0 z-[2] rounded-[inherit] opacity-0","aria-hidden":!0}),u.jsxs("div",{className:"relative z-[4] px-5 py-9 sm:px-10 sm:py-9 lg:py-11",children:[u.jsxs("div",{className:"mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4",children:[u.jsxs("span",{className:"flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.38em] text-cyan-400/75",children:[u.jsx("span",{className:"h-1 w-1 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]","aria-hidden":!0}),"Secure channel"]}),u.jsx("span",{className:"hidden font-mono text-[0.55rem] tracking-[0.2em] text-slate-600 sm:inline",children:"SECURE · INTELLIGENCE · CORE"})]}),u.jsxs("div",{className:"grid items-start gap-11 lg:grid-cols-12 lg:gap-12 lg:gap-x-12",children:[u.jsx("div",{className:"krg-wordmark-focal relative flex min-h-[220px] justify-center lg:col-span-6 lg:min-h-[260px] lg:justify-start lg:pl-0",children:u.jsx("div",{className:"krg-wordmark-spotwrap relative mx-auto w-full max-w-[520px] text-center lg:mx-0 lg:text-left",children:u.jsxs("div",{className:"krg-wordmark-lockup relative z-[4] inline-block w-full max-w-full",children:[u.jsxs("div",{className:"krg-wordmark-core relative pb-[1.125rem]",children:[u.jsxs("div",{className:"krg-wordmark-row relative z-[2] flex flex-wrap items-baseline justify-center gap-x-0 gap-y-1 lg:justify-start",children:[u.jsxs("span",{className:"krg-krg-stack relative inline-block",children:[u.jsx("span",{className:"krg-krg-depth","aria-hidden":"true",children:"KRG"}),u.jsx("span",{className:"krg-krg-body",children:"KRG"}),u.jsx("span",{className:"krg-krg-sheen","aria-hidden":"true"})]}),u.jsxs("span",{className:"krg-intel-stack relative inline-block",children:[u.jsx("span",{className:"krg-intel-bloom","aria-hidden":"true",children:"intel"}),u.jsx("span",{className:"krg-intel-core",children:"intel"})]})]}),u.jsxs("div",{className:"krg-laser-track pointer-events-none","aria-hidden":!0,children:[u.jsx("div",{className:"krg-laser-breathe",children:u.jsx("div",{className:"krg-laser-diffuse"})}),u.jsx("div",{className:"krg-laser-coreline"}),u.jsx("div",{className:"krg-laser-charge"})]})]}),u.jsx("p",{className:"krg-wordmark-sub relative z-[2] -mt-1",children:"Kenna Real Estate Group"})]})})}),u.jsxs("div",{className:"min-w-0 lg:col-span-6 lg:pt-1",children:[u.jsx("p",{className:"mb-3.5 text-[0.72rem] font-bold uppercase tracking-[0.32em] text-[#7d8b9e]",children:"Intelligence Center"}),u.jsx("h1",{className:"mb-3 text-[1.65rem] font-bold leading-[1.12] tracking-tight text-white sm:text-3xl lg:text-[2.05rem] lg:leading-tight",children:"Welcome to KRG Intel"}),u.jsx("p",{className:"mb-4 text-base font-medium text-slate-300 sm:text-lg",children:"The intelligence center behind Kenna Real Estate Group."}),u.jsx("p",{className:"max-w-xl text-[0.95rem] leading-relaxed text-[#9dadbf] sm:text-[1rem] sm:leading-[1.65] lg:max-w-md",children:"A custom business intelligence layer built to surface the patterns, blind spots, pressure points, and opportunities that ordinary reporting does not make easy to see."})]})]})]})]}),u.jsxs("section",{className:"mb-9",children:[u.jsxs("div",{className:"mb-5 px-1",children:[u.jsx("p",{className:"mb-2 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-[#7d8a9e]",children:"Portal Modules"}),u.jsx("p",{className:"max-w-2xl text-[0.92rem] leading-relaxed text-[#8b97ab]",children:"Access the live intelligence systems shaping performance now, with additional modules expanding the picture over time."})]}),u.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5",children:Yd.map((m,Z)=>{const D=m.Icon,F=`${.1+Z*.075}s`,ne=m.live?" intel-enter--live":"",re=u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"intel-metal-grain pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.5]","aria-hidden":!0}),u.jsx("div",{className:"intel-chassis-bevel pointer-events-none absolute inset-0 rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"intel-panel-sheen pointer-events-none absolute inset-0 rounded-[inherit]","aria-hidden":!0}),m.live&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"intel-live-shimmer pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"intel-live-mesh pointer-events-none absolute inset-0 rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"intel-live-core-well pointer-events-none absolute inset-[2px] rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"intel-live-rim pointer-events-none absolute -inset-px rounded-[inherit]","aria-hidden":!0})]}),u.jsx("div",{className:"intel-edge-trace pointer-events-none absolute inset-0 rounded-[inherit]","aria-hidden":!0}),u.jsxs("div",{className:"relative z-[2] mb-4 flex items-start justify-between gap-3",children:[u.jsxs("div",{className:"relative rounded-xl border border-white/[0.1] bg-[linear-gradient(165deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.35)_100%)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-2px_6px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:border-cyan-400/25 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.14),inset_0_1px_0_rgba(255,255,255,0.1)]",children:[m.live&&u.jsx("div",{className:"intel-icon-bloom pointer-events-none absolute inset-[-40%] rounded-full bg-cyan-400/10 blur-xl","aria-hidden":!0}),u.jsx(D,{className:`relative z-[1] h-5 w-5 transition-all duration-500 ${m.live?"text-cyan-200/95 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)] group-hover:text-cyan-100":"text-slate-500 group-hover:text-slate-400"}`,strokeWidth:1.75})]}),u.jsxs("span",{className:`relative inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] ${m.live?"intel-live-chip border-teal-400/35 bg-teal-500/[0.1] text-teal-100/95 shadow-[0_0_16px_rgba(45,212,191,0.12)]":"border-white/[0.08] bg-black/25 text-[#8b97ab] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"}`,children:[m.live&&u.jsx("span",{className:"intel-live-dot h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.85)]"}),m.status]})]}),u.jsx("h3",{className:"relative z-[2] mb-3 text-[1.02rem] font-bold tracking-tight text-white transition-colors duration-300",children:m.title}),u.jsx("p",{className:"relative z-[2] flex-1 text-[0.84rem] leading-relaxed text-[#8b97ab] transition-colors duration-300 group-hover:text-[#b8c4d4]",children:m.body}),m.href?u.jsxs("div",{className:"relative z-[2] mt-5 flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/95 transition-transform duration-300 group-hover:text-cyan-100",children:[u.jsx("span",{children:"Open FUB Intel Center"}),u.jsx(bu,{className:"h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"})]}):u.jsx("div",{className:"relative z-[2] mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"})]}),H="intel-panel intel-panel-translucent intel-enter group relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.25rem] border p-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/40 sm:min-h-[300px]";return m.href?u.jsx("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:`${H} intel-panel--live${ne}`,style:{animationDelay:F},children:u.jsx("div",{className:"relative flex h-full min-h-0 flex-col rounded-[1.2rem] px-5 py-[1.125rem] sm:p-6",children:re})},m.id):u.jsx("article",{className:`${H}${ne}`,style:{animationDelay:F},children:u.jsx("div",{className:"relative flex h-full min-h-0 flex-col rounded-[1.2rem] px-5 py-[1.125rem] sm:p-6",children:re})},m.id)})})]})]}),u.jsx("section",{className:"mb-9",children:u.jsxs("div",{className:"intel-panel intel-panel-translucent intel-enter intel-panel--wide relative overflow-hidden rounded-[1.35rem] border p-[1px] sm:rounded-[1.75rem]",style:{animationDelay:"0.52s"},children:[u.jsx("div",{className:"intel-metal-grain pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.45]","aria-hidden":!0}),u.jsx("div",{className:"intel-chassis-bevel pointer-events-none absolute inset-0 rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"intel-panel-sheen pointer-events-none absolute inset-0 rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"relative z-[2] rounded-[1.3rem] p-7 sm:rounded-[1.7rem] sm:p-9",children:u.jsxs("div",{className:"grid gap-8 md:grid-cols-[1fr_1.35fr] md:items-start md:gap-12",children:[u.jsxs("div",{children:[u.jsx("p",{className:"mb-3 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-teal-500/90",children:"Friction Analysis"}),u.jsx("h2",{className:"text-xl font-bold leading-snug text-white sm:text-2xl",children:"Most teams feel the drag before they can explain it."})]}),u.jsx("p",{className:"text-[0.95rem] md:border-l md:border-cyan-500/[0.1] md:pl-10",children:"Missed follow-up. Uneven source quality. Pipeline drag. Behavioral patterns that never fully show up in standard reporting. KRG Intel was built to make those buried signals easier to see, interpret, and act on."})]})})]})}),u.jsx("section",{className:"krg-lower-system-anchor mb-9",children:u.jsxs("div",{className:"intel-panel intel-panel-translucent intel-enter relative overflow-hidden rounded-[1.35rem] border border-cyan-500/18 p-[1px] sm:rounded-[1.75rem]",style:{animationDelay:"0.6s"},children:[u.jsx("div",{className:"intel-metal-grain pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.4]","aria-hidden":!0}),u.jsx("div",{className:"intel-chassis-bevel pointer-events-none absolute inset-0 rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"intel-panel-sheen pointer-events-none absolute inset-0 rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"relative z-[2] rounded-[1.3rem] bg-[linear-gradient(168deg,rgba(20,28,38,0.78)_0%,rgba(10,14,20,0.72)_55%,rgba(5,7,12,0.88)_100%)] px-8 py-9 text-center shadow-[inset_0_-12px_32px_rgba(0,0,0,0.35)] sm:rounded-[1.7rem] sm:px-10 sm:py-10",children:u.jsxs("div",{className:"relative z-[2] mx-auto max-w-2xl",children:[u.jsx("p",{className:"mb-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-cyan-400/80",children:"Access Portal"}),u.jsx("h2",{className:"mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl",children:"Built for clearer growth."}),u.jsx("p",{className:"mb-8 text-[1.02rem]",children:"KRG Intel gives Kenna Real Estate Group a clearer view of what is happening, where momentum is slipping, and where the next gains are likely to come from."}),u.jsxs("a",{href:Ou,target:"_blank",rel:"noopener noreferrer",className:"intel-cta-btn group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-400/25 bg-[linear-gradient(135deg,rgba(45,212,191,0.95)_0%,rgba(34,211,238,0.88)_45%,rgba(56,189,248,0.85)_100%)] px-10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#03050a] shadow-[0_0_40px_rgba(34,211,238,0.25),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:shadow-[0_0_52px_rgba(34,211,238,0.38),inset_0_1px_0_rgba(255,255,255,0.35)] active:translate-y-0",children:[u.jsx("span",{className:"relative z-[2]",children:"Open FUB Intel Center"}),u.jsx(bu,{className:"relative z-[2] h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"}),u.jsx("span",{className:"intel-cta-glint pointer-events-none absolute inset-0 z-[1] opacity-0 group-hover/btn:opacity-100","aria-hidden":!0})]})]})})]})}),u.jsx("section",{className:"krg-lower-system-anchor mb-10",children:u.jsxs("div",{className:"intel-panel intel-panel-translucent omnishun-signature-shell relative overflow-hidden rounded-[1.25rem] border border-white/[0.065] p-[1px] sm:rounded-2xl",children:[u.jsx("div",{className:"omnishun-chassis-atmos pointer-events-none absolute inset-0 z-0 rounded-[inherit]","aria-hidden":!0}),u.jsx("div",{className:"intel-metal-grain pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-[0.35]","aria-hidden":!0}),u.jsxs("div",{className:"omnishun-edge-seam pointer-events-none absolute inset-x-0 top-0 z-[4] h-[4px] overflow-hidden rounded-t-[1.25rem] sm:rounded-t-2xl","aria-hidden":!0,children:[u.jsx("div",{className:"omnishun-edge-seam-breathe",children:u.jsx("div",{className:"omnishun-edge-seam-bloom"})}),u.jsx("div",{className:"omnishun-edge-seam-core"}),u.jsx("div",{className:"omnishun-edge-seam-charge"})]}),u.jsxs("div",{className:"relative z-[2] rounded-[1.15rem] bg-[linear-gradient(168deg,rgba(12,15,20,0.82)_0%,rgba(7,9,13,0.88)_100%)] px-7 py-8 sm:rounded-2xl sm:px-9 sm:py-9",children:[u.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent","aria-hidden":!0}),u.jsxs("div",{className:"relative z-[2] max-w-3xl",children:[u.jsx("p",{className:"mb-2.5 text-[0.64rem] font-bold uppercase tracking-[0.26em]",children:"Omnishun Intelligence Centers"}),u.jsxs("h2",{className:"mb-3.5 text-xl font-bold leading-snug sm:text-2xl",children:["You knew something was missing."," ",u.jsx("span",{children:"Now you know what."})]}),u.jsx("p",{className:"text-[0.9rem]",children:"Omnishun builds intelligence centers for businesses that need more than surface-level reporting. The goal is to turn scattered signals into clearer decisions by revealing the patterns, weak points, and leverage moments that ordinary dashboards rarely connect clearly enough to act on."})]})]})]})}),u.jsx("footer",{className:"krg-lower-system-anchor mt-auto border-t border-white/[0.045] pt-9",children:u.jsxs("div",{className:"krg-builder-footer-face rounded-2xl border border-white/[0.06] bg-[linear-gradient(180deg,#080a0e_0%,#050608_100%)] px-7 py-9 shadow-[0_-10px_40px_rgba(124,58,237,0.035)] sm:px-8 sm:py-9",children:[u.jsxs("p",{className:"mb-2 text-lg font-semibold tracking-tight",children:["Built by ",u.jsx("span",{className:"text-cyan-400/55",children:"Omnishun"})]}),u.jsx("p",{className:"mb-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#717c8d]",children:"Omnishun — Growth Intelligence"}),u.jsx("p",{className:"max-w-md text-[0.85rem] text-[#7d8899]",children:"Custom growth systems, digital marketing insight, and operational clarity."})]})})]}),u.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes krg-boot-surge {
          0% { opacity: 0; transform: scaleX(0.02) scaleY(0.4); filter: brightness(2); }
          15% { opacity: 0.85; transform: scaleX(1) scaleY(1); filter: brightness(1.4); }
          45% { opacity: 0.35; transform: scaleX(1) scaleY(1); filter: brightness(1); }
          100% { opacity: 0; transform: scaleX(1) scaleY(1); filter: brightness(1); }
        }
        @keyframes krg-boot-ripple {
          0% { opacity: 0; box-shadow: 0 0 0 0 rgba(34,211,238,0.35); }
          20% { opacity: 1; }
          100% { opacity: 0; box-shadow: 0 0 0 28px rgba(34,211,238,0); }
        }
        @keyframes krg-neural-mesh-shift {
          0%, 100% { opacity: 0.18; }
          50% { opacity: 0.26; }
        }
        @keyframes krg-neural-field-a {
          0%, 100% { opacity: 0.12; transform: translate(0,0) scale(1); }
          33% { opacity: 0.2; transform: translate(1.5%, -1%) scale(1.02); }
          66% { opacity: 0.15; transform: translate(-1%, 1.2%) scale(0.99); }
        }
        @keyframes krg-neural-field-b {
          0%, 100% { opacity: 0.08; transform: translate(-50%, 0) rotate(0deg); }
          50% { opacity: 0.16; transform: translate(-48%, -0.5%) rotate(0.3deg); }
        }
        @keyframes krg-synapse-glow {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.85; }
        }
        @keyframes krg-circuit-flow {
          0% { stroke-dashoffset: 140; opacity: 0.12; }
          50% { opacity: 0.32; }
          100% { stroke-dashoffset: 0; opacity: 0.12; }
        }
        @keyframes krg-signal-surge {
          0% { stroke-dashoffset: 48; opacity: 0; }
          15% { opacity: 0.55; }
          50% { opacity: 0.35; }
          100% { stroke-dashoffset: 0; opacity: 0.08; }
        }
        @keyframes krg-scan-pass {
          0%, 96%, 100% { opacity: 0; transform: translateY(-8%); }
          2% { opacity: 0.05; }
          8% { opacity: 0.09; transform: translateY(108%); }
          12% { opacity: 0; transform: translateY(108%); }
        }
        @keyframes krg-flicker {
          0%, 92%, 100% { opacity: 0; }
          93% { opacity: 0.03; }
          94% { opacity: 0; }
          96% { opacity: 0.06; }
          97% { opacity: 0; }
        }
        @keyframes intel-sheen-drift {
          0%, 100% { opacity: 0.2; transform: translateX(-8%) skewX(-8deg); }
          50% { opacity: 0.32; transform: translateX(8%) skewX(-8deg); }
        }
        @keyframes intel-shimmer-sweep {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          4% { opacity: 1; }
          20% { transform: translateX(120%) skewX(-12deg); opacity: 0.45; }
          24%, 100% { opacity: 0; transform: translateX(120%) skewX(-12deg); }
        }
        @keyframes intel-live-border {
          0%, 100% {
            box-shadow:
              0 22px 64px rgba(0,0,0,0.72),
              inset 0 2px 0 rgba(255,255,255,0.07),
              inset 0 -14px 28px rgba(0,0,0,0.5),
              0 0 0 1px rgba(34,211,238,0.15),
              0 0 20px rgba(34,211,238,0.055);
          }
          50% {
            box-shadow:
              0 24px 66px rgba(0,0,0,0.74),
              inset 0 2px 0 rgba(255,255,255,0.085),
              inset 0 -15px 30px rgba(0,0,0,0.52),
              0 0 0 1px rgba(45,212,191,0.2),
              0 0 24px rgba(34,211,238,0.075);
          }
        }
        @keyframes intel-live-mesh {
          0%, 100% { opacity: 0.26; background-position: 0% 50%; }
          50% { opacity: 0.4; background-position: 100% 50%; }
        }
        @keyframes intel-live-rim {
          0%, 100% { opacity: 0.32; }
          50% { opacity: 0.62; }
        }
        @keyframes intel-live-dot {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 12px rgba(45,212,191,0.75); }
          50% { opacity: 0.6; transform: scale(0.9); box-shadow: 0 0 18px rgba(45,212,191,1); }
        }
        @keyframes intel-edge-trace {
          0%, 100% {
            opacity: 0.4;
            box-shadow: inset 0 0 0 0 rgba(34,211,238,0);
          }
          45% {
            opacity: 0.9;
            box-shadow: inset 0 0 0 1px rgba(34,211,238,0.14);
          }
          55% {
            opacity: 0.55;
            box-shadow: inset 0 0 0 1px rgba(45,212,191,0.1);
          }
        }
        @keyframes intel-card-enter {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
            filter: blur(7px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes intel-live-activate {
          0% { filter: brightness(1) saturate(1); }
          40% { filter: brightness(1.06) saturate(1.1); }
          100% { filter: brightness(1) saturate(1); }
        }
        @keyframes intel-cta-glint {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        .krg-neural-svg { opacity: 0.26; }
        .krg-neural-svg--from-core {
          opacity: 0.32;
          mask-image: radial-gradient(
            ellipse 95% 85% at 24% 22%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.85) 38%,
            rgba(0,0,0,0.35) 62%,
            rgba(0,0,0,0.08) 100%
          );
          -webkit-mask-image: radial-gradient(
            ellipse 95% 85% at 24% 22%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.85) 38%,
            rgba(0,0,0,0.35) 62%,
            rgba(0,0,0,0.08) 100%
          );
        }

        .krg-hero-environment {
          background: linear-gradient(165deg, rgba(10,14,20,0.55) 0%, rgba(4,6,10,0.65) 100%);
          box-shadow:
            0 24px 72px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .krg-hero-atmos {
          background: linear-gradient(165deg, rgba(10,13,18,0.5) 0%, rgba(5,7,10,0.65) 100%);
        }
        .krg-hero-veil-right {
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 34%,
            rgba(2,3,8,0.22) 52%,
            rgba(2,3,8,0.42) 100%
          );
          mix-blend-mode: multiply;
        }
        @supports not (mix-blend-mode: multiply) {
          .krg-hero-veil-right {
            mix-blend-mode: normal;
            opacity: 0.85;
            background: linear-gradient(
              90deg,
              transparent 0%,
              transparent 32%,
              rgba(2,3,8,0.35) 55%,
              rgba(2,3,8,0.55) 100%
            );
          }
        }

        /* Hero: top chassis edge-light (cyan seam on shell, not internal band) */
        .krg-hero-edge-seam {
          isolation: isolate;
        }
        .krg-hero-edge-seam-breathe {
          position: absolute;
          inset: 0;
          animation: krg-hero-edge-seam-breathe 6.5s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }
        @keyframes krg-hero-edge-seam-breathe {
          0%, 100% { opacity: 0.88; }
          50% { opacity: 0.98; }
        }
        .krg-hero-edge-seam-bloom {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 5px;
          background:
            linear-gradient(to bottom, rgba(207, 250, 254, 0.5) 0%, rgba(34, 211, 238, 0.14) 42%, transparent 100%),
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(45, 212, 191, 0.42) 20%,
              rgba(255, 255, 255, 0.65) 40%,
              rgba(34, 211, 238, 0.52) 52%,
              rgba(56, 189, 248, 0.28) 72%,
              transparent 100%
            );
          filter: blur(2px);
          mix-blend-mode: screen;
        }
        .krg-hero-edge-seam-core {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 1%,
            rgba(45, 212, 191, 0.65) 20%,
            rgba(255, 255, 255, 0.98) 38%,
            rgba(224, 242, 254, 0.9) 46%,
            rgba(34, 211, 238, 0.88) 54%,
            rgba(56, 189, 248, 0.5) 68%,
            transparent 99%
          );
          box-shadow:
            0 0 2px rgba(255, 255, 255, 0.48),
            0 0 5px rgba(34, 211, 238, 0.32),
            0 1px 3px rgba(45, 212, 191, 0.18);
          mix-blend-mode: screen;
        }
        .krg-hero-edge-seam-charge {
          position: absolute;
          top: 0;
          left: 0;
          width: 15%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.95),
            rgba(224, 242, 254, 0.55),
            transparent
          );
          opacity: 0;
          mix-blend-mode: screen;
          animation: krg-hero-edge-seam-charge 13s cubic-bezier(0.42, 0, 0.2, 1) infinite;
        }
        @keyframes krg-hero-edge-seam-charge {
          0%, 8%, 100% {
            opacity: 0;
            transform: translateX(-8%);
          }
          12% {
            opacity: 0.92;
          }
          46% {
            opacity: 0.48;
            transform: translateX(300%);
          }
          56% {
            opacity: 0;
            transform: translateX(360%);
          }
        }

        .krg-wordmark-spotwrap::before {
          content: '';
          position: absolute;
          inset: -8% -6% 0 -6%;
          z-index: 0;
          background:
            radial-gradient(ellipse 44% 40% at 28% 44%, rgba(34, 211, 238, 0.032) 0%, transparent 58%),
            radial-gradient(ellipse 34% 26% at 58% 50%, rgba(56, 189, 248, 0.012) 0%, transparent 55%);
          pointer-events: none;
        }
        @media (min-width: 1024px) {
          .krg-wordmark-spotwrap::before {
            background:
              radial-gradient(ellipse 38% 38% at 18% 46%, rgba(34, 211, 238, 0.028) 0%, transparent 56%),
              radial-gradient(ellipse 30% 24% at 46% 52%, rgba(56, 189, 248, 0.01) 0%, transparent 52%);
          }
        }

        .krg-wordmark-lockup {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .krg-wordmark-core {
          position: relative;
          line-height: 0.82;
        }
        .krg-wordmark-row {
          line-height: 0.82;
        }

        /* Signal rail: crisp core + tight spill — not an underline */
        .krg-laser-track {
          position: absolute;
          z-index: 1;
          left: -2%;
          right: -5%;
          bottom: 0.18rem;
          height: 16px;
          overflow: visible;
        }
        .krg-laser-breathe {
          position: absolute;
          inset: 0;
          animation: krg-laser-breathe 6.5s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }
        @keyframes krg-laser-breathe {
          0%, 100% { opacity: 0.88; }
          50% { opacity: 0.96; }
        }
        .krg-laser-diffuse {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 7px;
          transform: translateY(-50%);
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(34, 211, 238, 0.045) 6%,
            rgba(125, 211, 252, 0.2) 14%,
            rgba(186, 230, 253, 0.14) 20%,
            rgba(34, 211, 238, 0.11) 30%,
            rgba(56, 189, 248, 0.055) 46%,
            rgba(34, 211, 238, 0.028) 62%,
            transparent 90%
          );
          filter: blur(4px);
          mix-blend-mode: screen;
        }
        .krg-laser-coreline {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          transform: translateY(-50%);
          background: linear-gradient(
            90deg,
            rgba(56, 189, 248, 0.06) 0%,
            rgba(160, 240, 255, 0.55) 10%,
            rgba(255, 255, 255, 0.9) 18%,
            rgba(224, 242, 254, 0.72) 24%,
            rgba(34, 211, 238, 0.52) 36%,
            rgba(56, 189, 248, 0.22) 54%,
            rgba(34, 211, 238, 0.06) 72%,
            transparent 96%
          );
          box-shadow:
            0 0 2px rgba(224, 242, 254, 0.32),
            0 0 7px rgba(34, 211, 238, 0.14);
          mix-blend-mode: plus-lighter;
          opacity: 0.9;
        }
        @supports not (mix-blend-mode: plus-lighter) {
          .krg-laser-coreline {
            mix-blend-mode: screen;
            opacity: 0.88;
          }
        }
        .krg-laser-charge {
          position: absolute;
          top: 50%;
          left: 0;
          width: 18%;
          height: 2px;
          transform: translateY(-50%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.9),
            rgba(186, 230, 253, 0.65),
            transparent
          );
          filter: blur(0.5px);
          opacity: 0;
          mix-blend-mode: screen;
          animation: krg-laser-charge-travel 9.5s cubic-bezier(0.42, 0, 0.22, 1) infinite;
        }
        @keyframes krg-laser-charge-travel {
          0%, 8%, 100% {
            opacity: 0;
            transform: translateY(-50%) translateX(-15%);
          }
          12% {
            opacity: 1;
          }
          48% {
            opacity: 0.88;
            transform: translateY(-50%) translateX(320%);
          }
          58% {
            opacity: 0.25;
            transform: translateY(-50%) translateX(380%);
          }
          68%, 100% {
            opacity: 0;
            transform: translateY(-50%) translateX(420%);
          }
        }

        .omnishun-signature-shell {
          isolation: isolate;
          -webkit-backdrop-filter: blur(8px) saturate(1.12);
          backdrop-filter: blur(8px) saturate(1.12);
        }

        /* Omnishun: top chassis seam — quieter violet edge than hero */
        .omnishun-edge-seam {
          isolation: isolate;
        }
        .omnishun-edge-seam-breathe {
          position: absolute;
          inset: 0;
          animation: omnishun-edge-seam-breathe 14s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }
        @keyframes omnishun-edge-seam-breathe {
          0%, 100% { opacity: 0.82; }
          50% { opacity: 0.94; }
        }
        .omnishun-edge-seam-bloom {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 4px;
          background:
            linear-gradient(to bottom, rgba(196, 181, 253, 0.2) 0%, rgba(91, 33, 182, 0.06) 48%, transparent 100%),
            linear-gradient(
              90deg,
              transparent 4%,
              rgba(76, 29, 149, 0.22) 30%,
              rgba(167, 139, 250, 0.26) 50%,
              rgba(109, 40, 217, 0.18) 68%,
              transparent 96%
            );
          filter: blur(1.75px);
          mix-blend-mode: screen;
          opacity: 0.45;
        }
        .omnishun-edge-seam-core {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 5%,
            rgba(88, 28, 135, 0.5) 30%,
            rgba(196, 181, 253, 0.38) 50%,
            rgba(124, 58, 237, 0.42) 64%,
            transparent 97%
          );
          box-shadow: 0 0 2px rgba(139, 92, 246, 0.1);
          mix-blend-mode: screen;
          opacity: 0.38;
        }
        .omnishun-edge-seam-charge {
          position: absolute;
          top: 0;
          left: 0;
          width: 20%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(221, 214, 254, 0.4),
            rgba(167, 139, 250, 0.2),
            transparent
          );
          opacity: 0;
          mix-blend-mode: screen;
          animation: omnishun-edge-seam-charge 24s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes omnishun-edge-seam-charge {
          0%, 14%, 100% {
            opacity: 0;
            transform: translateX(-5%);
          }
          20% {
            opacity: 0.48;
          }
          52% {
            opacity: 0.2;
            transform: translateX(270%);
          }
          64% {
            opacity: 0;
            transform: translateX(330%);
          }
        }

        /* KRG — gunmetal authority (type + material; intel owns signal hue) */
        .krg-krg-stack {
          font-family: 'IBM Plex Sans Condensed', 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(3.75rem, 13.4vw, 6.75rem);
          letter-spacing: 0.022em;
          line-height: 0.84;
          text-transform: uppercase;
          filter: drop-shadow(0 2px 5px rgba(0, 2, 12, 0.52))
            drop-shadow(0 -1px 0 rgba(0, 8, 18, 0.34))
            drop-shadow(0 1px 0 rgba(165, 198, 228, 0.12))
            drop-shadow(0 0 16px rgba(25, 52, 88, 0.12));
        }
        .krg-krg-depth {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          color: #010910;
          transform: translate(0.014em, 0.034em);
          text-shadow: none;
          user-select: none;
        }
        .krg-krg-body {
          position: relative;
          z-index: 2;
          background: linear-gradient(
            172deg,
            #6a7d90 0%,
            #4a5d72 10%,
            #354a62 24%,
            #243449 42%,
            #1a283c 62%,
            #121f30 82%,
            #0a1422 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #1a2838;
        }
        @supports not (background-clip: text) {
          .krg-krg-body {
            background: none;
            -webkit-text-fill-color: unset;
            color: #243449;
            text-shadow:
              0 1px 0 rgba(140, 170, 200, 0.16),
              0 -1px 0 rgba(0, 8, 18, 0.9),
              0 2px 12px rgba(0, 0, 0, 0.48);
          }
          .krg-krg-stack {
            filter: none;
          }
        }
        .krg-krg-sheen {
          position: absolute;
          inset: -8% -12%;
          z-index: 4;
          overflow: hidden;
          pointer-events: none;
        }
        .krg-krg-sheen::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 32%;
          background: linear-gradient(90deg, transparent, rgba(176, 205, 228, 0.038), transparent);
          transform: translateX(-140%) skewX(-8deg);
          animation: krg-krg-specular 22s ease-in-out infinite;
          mix-blend-mode: overlay;
        }
        @keyframes krg-krg-specular {
          0%, 12%, 88%, 100% {
            transform: translateX(-160%) skewX(-8deg);
            opacity: 0;
          }
          18% {
            opacity: 0.38;
          }
          42% {
            transform: translateX(200%) skewX(-8deg);
            opacity: 0.18;
          }
          52% {
            opacity: 0;
            transform: translateX(260%) skewX(-8deg);
          }
        }

        /* intel — slightly brighter signal vs KRG; still disciplined */
        .krg-intel-stack {
          font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
          font-size: clamp(2.05rem, 7.5vw, 4.28rem);
          letter-spacing: 0.021em;
          line-height: 0.9;
          margin-left: 0.026em;
          padding-bottom: 0.035em;
          text-transform: lowercase;
          filter:
            drop-shadow(0 1px 2px rgba(0, 4, 12, 0.36))
            drop-shadow(0 0 12px rgba(56, 189, 248, 0.07));
        }
        .krg-intel-bloom {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 0;
          background: linear-gradient(
            180deg,
            #d2f6fc 0%,
            #7ee8f8 35%,
            #45c8f0 70%,
            #1f7eb8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: rgba(56, 189, 248, 0.14);
          filter: blur(3.5px);
          opacity: 0.88;
          user-select: none;
          pointer-events: none;
        }
        .krg-intel-core {
          position: relative;
          z-index: 2;
          background: linear-gradient(
            180deg,
            #dff8ff 0%,
            #9aefff 22%,
            #52d0f2 56%,
            #2488c9 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #7aa8be;
        }
        @supports not (background-clip: text) {
          .krg-intel-core {
            background: none;
            -webkit-text-fill-color: unset;
            color: #93c5dc;
            text-shadow:
              0 1px 0 rgba(255, 255, 255, 0.07),
              0 1px 3px rgba(0, 0, 0, 0.38),
              0 0 10px rgba(56, 189, 248, 0.1);
          }
          .krg-intel-bloom {
            background: none;
            -webkit-text-fill-color: unset;
            color: rgba(56, 189, 248, 0.16);
          }
          .krg-intel-stack {
            filter: none;
          }
        }

        .krg-wordmark-sub {
          margin-top: 1.15rem;
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(0.56rem, 1.55vw, 0.68rem);
          font-weight: 600;
          letter-spacing: 0.48em;
          text-transform: uppercase;
          color: rgba(120, 132, 152, 0.92);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.9);
        }
        .krg-circuit-lines path {
          stroke-dasharray: 10 130;
          animation: krg-circuit-flow 16s ease-in-out infinite;
        }
        .krg-circuit-lines path:nth-child(2) { animation-delay: -4s; animation-duration: 19s; }
        .krg-circuit-lines path:nth-child(3) { animation-delay: -7s; animation-duration: 17s; }
        .krg-circuit-lines path:nth-child(4) { animation-delay: -2s; animation-duration: 21s; }
        .krg-circuit-lines path:nth-child(5) { animation-delay: -9s; animation-duration: 18s; }
        .krg-circuit-lines path:nth-child(6) { animation-delay: -5s; animation-duration: 20s; }

        .krg-signal-frags path {
          animation: krg-signal-surge 2.8s ease-in-out infinite;
        }
        .krg-signal-frags path:nth-child(2) { animation-delay: -0.6s; animation-duration: 3.4s; }
        .krg-signal-frags path:nth-child(3) { animation-delay: -1.2s; animation-duration: 2.5s; }
        .krg-signal-frags path:nth-child(4) { animation-delay: -0.3s; animation-duration: 3.1s; }
        .krg-signal-frags path:nth-child(5) { animation-delay: -1.8s; animation-duration: 2.9s; }
        .krg-signal-frags path:nth-child(6) { animation-delay: -0.9s; animation-duration: 3.6s; }

        .krg-neural-mesh {
          background-image:
            linear-gradient(106deg, transparent 42%, rgba(34, 211, 238, 0.016) 50%, transparent 58%),
            linear-gradient(72deg, transparent 46%, rgba(45, 212, 191, 0.012) 52%, transparent 58%),
            radial-gradient(ellipse 90% 65% at 28% 55%, rgba(30, 58, 95, 0.07) 0%, transparent 52%),
            radial-gradient(ellipse 70% 50% at 72% 40%, rgba(34, 211, 238, 0.04) 0%, transparent 48%);
          background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;
          animation: krg-neural-mesh-shift 22s ease-in-out infinite;
        }

        .krg-substrate-field {
          opacity: 0.85;
          background:
            linear-gradient(98deg, transparent 36%, rgba(34, 211, 238, 0.025) 50%, transparent 64%),
            linear-gradient(168deg, rgba(15, 23, 42, 0.12) 0%, transparent 42%),
            radial-gradient(ellipse 85% 60% at 50% 72%, rgba(30, 41, 59, 0.14) 0%, transparent 55%);
          -webkit-mask-image: radial-gradient(ellipse 72% 58% at 50% 42%, #000 0%, transparent 78%);
          mask-image: radial-gradient(ellipse 72% 58% at 50% 42%, #000 0%, transparent 78%);
        }

        /* Lower system zone: drift wrapper + blurred field (cohesive, not a hard shape) */
        .krg-lower-energy-drift {
          position: absolute;
          inset: 0;
          animation: krg-lower-energy-drift 44s cubic-bezier(0.42, 0, 0.28, 1) infinite;
        }
        @keyframes krg-lower-energy-drift {
          0%, 100% {
            opacity: 0.84;
            transform: translateY(0);
          }
          50% {
            opacity: 0.91;
            transform: translateY(-0.5%);
          }
        }
        .krg-lower-energy {
          position: absolute;
          left: -5%;
          right: -5%;
          top: -8%;
          bottom: -3%;
          transform: scale(1.035);
          filter: blur(22px);
          opacity: 0.92;
          background:
            radial-gradient(ellipse 130% 40% at 42% 100%, rgba(34, 211, 238, 0.072) 0%, transparent 58%),
            radial-gradient(ellipse 105% 34% at 36% 97%, rgba(56, 189, 248, 0.05) 0%, transparent 54%),
            radial-gradient(ellipse 110% 36% at 54% 93%, rgba(45, 212, 191, 0.03) 0%, rgba(56, 189, 248, 0.026) 28%, rgba(91, 33, 182, 0.02) 55%, transparent 72%),
            radial-gradient(ellipse 92% 30% at 62% 99%, rgba(34, 211, 238, 0.026) 0%, transparent 50%),
            radial-gradient(ellipse 74% 28% at 78% 99%, rgba(124, 58, 237, 0.05) 0%, transparent 52%),
            radial-gradient(ellipse 52% 20% at 50% 100%, rgba(30, 58, 95, 0.052) 0%, transparent 44%);
          mix-blend-mode: screen;
        }

        .krg-lower-sub-svg {
          opacity: 0.22;
          mix-blend-mode: screen;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 14%,
            rgba(0, 0, 0, 0.75) 32%,
            #000 52%,
            #000 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 14%,
            rgba(0, 0, 0, 0.75) 32%,
            #000 52%,
            #000 100%
          );
        }
        .krg-lower-routes path {
          stroke-dasharray: 32 140;
          animation: krg-lower-route-flow 44s linear infinite;
        }
        .krg-lower-routes path:nth-child(2) {
          animation-delay: -8s;
          animation-duration: 50s;
        }
        .krg-lower-routes path:nth-child(3) {
          animation-delay: -14s;
          animation-duration: 38s;
        }
        .krg-lower-routes path:nth-child(4) {
          animation-delay: -4s;
          animation-duration: 46s;
        }
        @keyframes krg-lower-route-flow {
          to {
            stroke-dashoffset: -172;
          }
        }
        .krg-lower-frags path {
          stroke-dasharray: 2 16;
          animation: krg-lower-frag-drift 28s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }
        .krg-lower-frags path:nth-child(2) {
          animation-delay: -5s;
          animation-duration: 32s;
        }
        .krg-lower-frags path:nth-child(3) {
          animation-delay: -11s;
        }
        .krg-lower-frags path:nth-child(4) {
          animation-delay: -3s;
          animation-duration: 34s;
        }
        @keyframes krg-lower-frag-drift {
          0%, 100% {
            opacity: 0.28;
          }
          50% {
            opacity: 0.42;
          }
        }

        .krg-lower-sub-svg .krg-lower-routes {
          opacity: 0.5;
        }
        .krg-lower-sub-svg .krg-lower-frags {
          opacity: 0.42;
        }
        .krg-lower-sub-svg .krg-lower-nodes {
          opacity: 0.4;
        }

        .krg-lower-system-anchor {
          position: relative;
          z-index: 1;
        }

        /* final lower-zone readability / typography polish */
        .intel-panel--wide .grid > p {
          color: #94a0b2;
          line-height: 1.72;
        }
        .krg-lower-system-anchor p {
          color: #94a0b2;
          line-height: 1.72;
        }
        .krg-lower-system-anchor .max-w-2xl > p:first-of-type {
          color: rgb(34 211 238 / 0.8);
          line-height: normal;
        }
        .omnishun-signature-shell h2 {
          color: #e5ebf3;
        }
        .omnishun-signature-shell h2 span {
          color: rgba(56, 189, 248, 0.68);
        }
        .omnishun-signature-shell p {
          color: #97a3b4;
          line-height: 1.72;
        }
        .krg-builder-footer-face p:first-child {
          color: #a6b1c1;
        }
        .krg-builder-footer-face .text-\\[\\#717c8d\\],
        .krg-builder-footer-face .text-\\[\\#7d8899\\] {
          color: #8c98aa !important;
        }

        .omnishun-chassis-atmos {
          background:
            radial-gradient(ellipse 100% 48% at 50% -8%, rgba(139, 92, 246, 0.07) 0%, transparent 52%),
            radial-gradient(ellipse 108% 92% at 50% 122%, rgba(76, 29, 149, 0.11) 0%, transparent 56%),
            radial-gradient(ellipse 52% 42% at 94% 2%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);
          mix-blend-mode: screen;
          opacity: 0.58;
        }

        .krg-neural-field {
          background: radial-gradient(ellipse 42% 36% at 22% 18%, rgba(34,211,238,0.045) 0%, transparent 58%);
          mix-blend-mode: screen;
        }
        .krg-neural-field-a { animation: krg-neural-field-a 14s ease-in-out infinite; }
        .krg-neural-field-b {
          background: radial-gradient(ellipse 32% 28% at 26% 20%, rgba(45,212,191,0.032) 0%, transparent 55%);
          animation: krg-neural-field-b 22s ease-in-out infinite -3s;
        }
        .krg-synapse-pulse { animation: krg-synapse-glow 5.5s ease-in-out infinite; }
        .krg-synapse-delay { animation-delay: -2s; }

        .krg-neural-flicker {
          background: linear-gradient(100deg, transparent 48%, rgba(34,211,238,0.04) 50%, transparent 52%);
          background-size: 200% 200%;
          animation: krg-flicker 11s ease-in-out infinite;
        }

        .krg-scan {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(56,189,248,0.035) 48%,
            rgba(45,212,191,0.045) 50%,
            transparent 52%
          );
          animation: krg-scan-pass 16s ease-in-out infinite;
        }

        .krg-boot-surge {
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(34,211,238,0.14) 35%,
            rgba(45,212,191,0.2) 50%,
            rgba(56,189,248,0.12) 65%,
            transparent 100%
          );
          mix-blend-mode: screen;
          animation: krg-boot-surge 1.15s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .krg-boot-ripple {
          animation: krg-boot-ripple 1.25s ease-out 0.08s forwards;
        }
        .intel-metal-grain {
          background-image:
            repeating-linear-gradient(
              -18deg,
              transparent,
              transparent 3px,
              rgba(255,255,255,0.012) 3px,
              rgba(255,255,255,0.012) 4px
            ),
            repeating-linear-gradient(
              12deg,
              transparent,
              transparent 4px,
              rgba(0,0,0,0.032) 4px,
              rgba(0,0,0,0.032) 5px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(255,255,255,0.006) 1px,
              rgba(255,255,255,0.006) 2px
            ),
            linear-gradient(175deg, rgba(255,255,255,0.028) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.12) 100%);
          mix-blend-mode: soft-light;
          opacity: 0.85;
          pointer-events: none;
        }
        .intel-chassis-bevel {
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.05),
            inset 0 -10px 26px rgba(0,0,0,0.52),
            inset 0 0 0 1px rgba(0,0,0,0.25);
          border-radius: inherit;
          pointer-events: none;
        }

        .intel-panel {
          background:
            linear-gradient(178deg, rgba(255,255,255,0.045) 0%, transparent 28%),
            linear-gradient(168deg, rgba(22,26,34,0.94) 0%, rgba(14,17,24,0.9) 22%, rgba(10,12,18,0.88) 48%, rgba(6,7,11,0.92) 72%, rgba(3,4,7,0.96) 100%);
          box-shadow:
            0 18px 48px rgba(0,0,0,0.62),
            0 6px 18px rgba(0,0,0,0.42),
            inset 0 1px 0 rgba(255,255,255,0.055),
            inset 0 -16px 36px rgba(0,0,0,0.48),
            inset 0 0 0 1px rgba(255,255,255,0.022);
          border-color: rgba(255,255,255,0.065);
          transition:
            transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 240ms ease,
            background 240ms ease;
        }
        .intel-panel-translucent {
          background:
            linear-gradient(178deg, rgba(255,255,255,0.038) 0%, transparent 26%),
            linear-gradient(168deg, rgba(20,24,32,0.78) 0%, rgba(12,15,22,0.76) 24%, rgba(8,10,16,0.74) 52%, rgba(4,5,9,0.84) 100%);
          box-shadow:
            0 20px 52px rgba(0,0,0,0.52),
            0 8px 22px rgba(0,0,0,0.36),
            inset 0 1px 0 rgba(255,255,255,0.048),
            inset 0 -18px 38px rgba(0,0,0,0.42),
            inset 0 0 0 1px rgba(255,255,255,0.018);
        }
        .intel-panel-sheen {
          background: linear-gradient(
            122deg,
            rgba(255,255,255,0.05) 0%,
            rgba(255,255,255,0.018) 14%,
            transparent 32%,
            transparent 100%
          );
          animation: intel-sheen-drift 28s cubic-bezier(0.45, 0, 0.35, 1) infinite;
          pointer-events: none;
        }

        .intel-panel--live {
          animation: intel-live-border 5.5s cubic-bezier(0.45, 0, 0.35, 1) infinite;
          border-color: rgba(34,211,238,0.2);
          background:
            linear-gradient(175deg, rgba(34,211,238,0.06) 0%, transparent 26%),
            linear-gradient(168deg, rgba(24,30,40,0.9) 0%, rgba(14,18,26,0.88) 24%, rgba(8,11,18,0.86) 52%, rgba(3,4,9,0.92) 100%);
        }
        .intel-panel--live > div {
          background: linear-gradient(180deg, rgba(255,255,255,0.022) 0%, transparent 26%);
        }
        .intel-panel--live:hover {
          transform: translateY(-5px) scale(1.008);
          border-color: rgba(45,212,191,0.3);
          box-shadow:
            0 26px 68px rgba(0,0,0,0.66),
            inset 0 1px 0 rgba(255,255,255,0.085),
            inset 0 -18px 38px rgba(0,0,0,0.48),
            0 0 0 1px rgba(34,211,238,0.2),
            0 0 26px rgba(34,211,238,0.09);
        }

        .intel-live-core-well {
          box-shadow:
            inset 0 0 40px rgba(34,211,238,0.035),
            inset 0 -18px 36px rgba(0,0,0,0.58);
          pointer-events: none;
        }
        .intel-live-rim {
          box-shadow:
            0 0 0 1px rgba(45,212,191,0.09),
            0 0 16px rgba(34,211,238,0.05);
          animation: intel-live-rim 4.8s cubic-bezier(0.45, 0, 0.35, 1) infinite;
          pointer-events: none;
        }

        .intel-live-shimmer::after {
          content: '';
          position: absolute;
          inset: -25% -45%;
          background: linear-gradient(
            100deg,
            transparent 32%,
            rgba(255,255,255,0.065) 50%,
            transparent 68%
          );
          animation: intel-shimmer-sweep 11s cubic-bezier(0.42, 0, 0.28, 1) infinite;
        }
        .intel-live-mesh {
          background: linear-gradient(
            125deg,
            rgba(34,211,238,0.065) 0%,
            transparent 38%,
            rgba(45,212,191,0.04) 68%,
            transparent 100%
          );
          background-size: 220% 220%;
          animation: intel-live-mesh 12s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }

        .intel-live-dot {
          animation: intel-live-dot 2.6s cubic-bezier(0.45, 0, 0.35, 1) infinite;
        }

        .intel-edge-trace {
          box-shadow: inset 0 0 0 1px rgba(34,211,238,0);
          animation: intel-edge-trace 5.5s ease-in-out infinite;
        }
        .intel-panel:not(.intel-panel--live) .intel-edge-trace {
          animation-duration: 10s;
        }
        .intel-panel:not(.intel-panel--live):hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.14);
          box-shadow:
            0 24px 60px rgba(0,0,0,0.54),
            inset 0 1px 0 rgba(255,255,255,0.095),
            inset 0 -14px 30px rgba(0,0,0,0.32),
            0 0 0 1px rgba(56,189,248,0.11),
            0 0 28px rgba(34,211,238,0.06);
        }

        .krg-page-ready .intel-enter {
          animation: intel-card-enter 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .krg-page-ready .intel-enter--live {
          animation:
            intel-card-enter 0.75s cubic-bezier(0.16, 1, 0.3, 1) both,
            intel-live-activate 0.9s ease-out 0.82s both;
        }

        .intel-cta-glint {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.32),
            transparent
          );
          animation: intel-cta-glint 2.4s cubic-bezier(0.42, 0, 0.28, 1) infinite;
        }
        .intel-cta-btn:hover .intel-cta-glint {
          animation-duration: 1.05s;
        }

        @media (prefers-reduced-motion: reduce) {
          .krg-boot-surge, .krg-boot-ripple,
          .krg-laser-breathe,
          .krg-laser-charge,
          .krg-hero-edge-seam-breathe,
          .krg-hero-edge-seam-charge,
          .omnishun-edge-seam-breathe,
          .omnishun-edge-seam-charge,
          .krg-lower-energy-drift,
          .krg-lower-energy,
          .krg-lower-routes path,
          .krg-lower-frags path,
          .krg-krg-sheen::after,
          .krg-neural-mesh, .krg-neural-field, .krg-synapse-pulse,
          .krg-circuit-lines path, .krg-signal-frags path,
          .krg-scan, .krg-neural-flicker,
          .intel-panel-sheen, .intel-live-shimmer::after, .intel-live-mesh,
          .intel-live-dot, .intel-edge-trace, .intel-live-rim, .intel-cta-glint {
            animation: none !important;
          }
          .intel-panel--live {
            animation: none !important;
            box-shadow: 0 20px 56px rgba(0,0,0,0.68), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(34,211,238,0.18);
          }
          .krg-page-ready .intel-enter,
          .krg-page-ready .intel-enter--live {
            animation: none !important;
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        body {
          background-color: #020308;
          margin: 0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
      `}})]})}Ad.createRoot(document.getElementById("root")).render(u.jsx($t.StrictMode,{children:u.jsx(Jd,{})}));
