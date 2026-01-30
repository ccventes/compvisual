(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Yf={exports:{}},Co={};var x0;function hS(){if(x0)return Co;x0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Co.Fragment=t,Co.jsx=i,Co.jsxs=i,Co}var S0;function pS(){return S0||(S0=1,Yf.exports=hS()),Yf.exports}var Ee=pS(),jf={exports:{}},at={};var y0;function mS(){if(y0)return at;y0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(O,ie,ge){this.props=O,this.context=ie,this.refs=y,this.updater=ge||b}x.prototype.isReactComponent={},x.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function N(O,ie,ge){this.props=O,this.context=ie,this.refs=y,this.updater=ge||b}var U=N.prototype=new D;U.constructor=N,C(U,x.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function A(O,ie,ge){var Ae=ge.ref;return{$$typeof:o,type:O,key:ie,ref:Ae!==void 0?Ae:null,props:ge}}function w(O,ie){return A(O.type,ie,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function $(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ie[ge]})}var re=/\/+/g;function ce(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):ie.toString(36)}function le(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function I(O,ie,ge,Ae,Be){var ne=typeof O;(ne==="undefined"||ne==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(ne){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case o:case t:fe=!0;break;case v:return fe=O._init,I(fe(O._payload),ie,ge,Ae,Be)}}if(fe)return Be=Be(O),fe=Ae===""?"."+ce(O,0):Ae,z(Be)?(ge="",fe!=null&&(ge=fe.replace(re,"$&/")+"/"),I(Be,ie,ge,"",function(He){return He})):Be!=null&&(V(Be)&&(Be=w(Be,ge+(Be.key==null||O&&O.key===Be.key?"":(""+Be.key).replace(re,"$&/")+"/")+fe)),ie.push(Be)),1;fe=0;var De=Ae===""?".":Ae+":";if(z(O))for(var Xe=0;Xe<O.length;Xe++)Ae=O[Xe],ne=De+ce(Ae,Xe),fe+=I(Ae,ie,ge,ne,Be);else if(Xe=M(O),typeof Xe=="function")for(O=Xe.call(O),Xe=0;!(Ae=O.next()).done;)Ae=Ae.value,ne=De+ce(Ae,Xe++),fe+=I(Ae,ie,ge,ne,Be);else if(ne==="object"){if(typeof O.then=="function")return I(le(O),ie,ge,Ae,Be);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return fe}function H(O,ie,ge){if(O==null)return O;var Ae=[],Be=0;return I(O,Ae,"","",function(ne){return ie.call(ge,ne,Be++)}),Ae}function ae(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var ye=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xe={map:H,forEach:function(O,ie,ge){H(O,function(){ie.apply(this,arguments)},ge)},count:function(O){var ie=0;return H(O,function(){ie++}),ie},toArray:function(O){return H(O,function(ie){return ie})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return at.Activity=g,at.Children=xe,at.Component=x,at.Fragment=i,at.Profiler=l,at.PureComponent=N,at.StrictMode=r,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,at.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},at.cache=function(O){return function(){return O.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(O,ie,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ae=C({},O.props),Be=O.key;if(ie!=null)for(ne in ie.key!==void 0&&(Be=""+ie.key),ie)!W.call(ie,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ie.ref===void 0||(Ae[ne]=ie[ne]);var ne=arguments.length-2;if(ne===1)Ae.children=ge;else if(1<ne){for(var fe=Array(ne),De=0;De<ne;De++)fe[De]=arguments[De+2];Ae.children=fe}return A(O.type,Be,Ae)},at.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},at.createElement=function(O,ie,ge){var Ae,Be={},ne=null;if(ie!=null)for(Ae in ie.key!==void 0&&(ne=""+ie.key),ie)W.call(ie,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=ie[Ae]);var fe=arguments.length-2;if(fe===1)Be.children=ge;else if(1<fe){for(var De=Array(fe),Xe=0;Xe<fe;Xe++)De[Xe]=arguments[Xe+2];Be.children=De}if(O&&O.defaultProps)for(Ae in fe=O.defaultProps,fe)Be[Ae]===void 0&&(Be[Ae]=fe[Ae]);return A(O,ne,Be)},at.createRef=function(){return{current:null}},at.forwardRef=function(O){return{$$typeof:h,render:O}},at.isValidElement=V,at.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ae}},at.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},at.startTransition=function(O){var ie=P.T,ge={};P.T=ge;try{var Ae=O(),Be=P.S;Be!==null&&Be(ge,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(F,ye)}catch(ne){ye(ne)}finally{ie!==null&&ge.types!==null&&(ie.types=ge.types),P.T=ie}},at.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},at.use=function(O){return P.H.use(O)},at.useActionState=function(O,ie,ge){return P.H.useActionState(O,ie,ge)},at.useCallback=function(O,ie){return P.H.useCallback(O,ie)},at.useContext=function(O){return P.H.useContext(O)},at.useDebugValue=function(){},at.useDeferredValue=function(O,ie){return P.H.useDeferredValue(O,ie)},at.useEffect=function(O,ie){return P.H.useEffect(O,ie)},at.useEffectEvent=function(O){return P.H.useEffectEvent(O)},at.useId=function(){return P.H.useId()},at.useImperativeHandle=function(O,ie,ge){return P.H.useImperativeHandle(O,ie,ge)},at.useInsertionEffect=function(O,ie){return P.H.useInsertionEffect(O,ie)},at.useLayoutEffect=function(O,ie){return P.H.useLayoutEffect(O,ie)},at.useMemo=function(O,ie){return P.H.useMemo(O,ie)},at.useOptimistic=function(O,ie){return P.H.useOptimistic(O,ie)},at.useReducer=function(O,ie,ge){return P.H.useReducer(O,ie,ge)},at.useRef=function(O){return P.H.useRef(O)},at.useState=function(O){return P.H.useState(O)},at.useSyncExternalStore=function(O,ie,ge){return P.H.useSyncExternalStore(O,ie,ge)},at.useTransition=function(){return P.H.useTransition()},at.version="19.2.4",at}var M0;function Ah(){return M0||(M0=1,jf.exports=mS()),jf.exports}var mi=Ah(),Zf={exports:{}},wo={},Kf={exports:{}},Qf={};var E0;function gS(){return E0||(E0=1,(function(o){function t(I,H){var ae=I.length;I.push(H);e:for(;0<ae;){var ye=ae-1>>>1,xe=I[ye];if(0<l(xe,H))I[ye]=H,I[ae]=xe,ae=ye;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var H=I[0],ae=I.pop();if(ae!==H){I[0]=ae;e:for(var ye=0,xe=I.length,O=xe>>>1;ye<O;){var ie=2*(ye+1)-1,ge=I[ie],Ae=ie+1,Be=I[Ae];if(0>l(ge,ae))Ae<xe&&0>l(Be,ge)?(I[ye]=Be,I[Ae]=ae,ye=Ae):(I[ye]=ge,I[ie]=ae,ye=ie);else if(Ae<xe&&0>l(Be,ae))I[ye]=Be,I[Ae]=ae,ye=Ae;else break e}}return H}function l(I,H){var ae=I.sortIndex-H.sortIndex;return ae!==0?ae:I.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,S=3,M=!1,b=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=I)r(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function z(I){if(C=!1,U(I),!b)if(i(m)!==null)b=!0,F||(F=!0,$());else{var H=i(p);H!==null&&le(z,H.startTime-I)}}var F=!1,P=-1,W=5,A=-1;function w(){return y?!0:!(o.unstable_now()-A<W)}function V(){if(y=!1,F){var I=o.unstable_now();A=I;var H=!0;try{e:{b=!1,C&&(C=!1,D(P),P=-1),M=!0;var ae=S;try{t:{for(U(I),g=i(m);g!==null&&!(g.expirationTime>I&&w());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,S=g.priorityLevel;var xe=ye(g.expirationTime<=I);if(I=o.unstable_now(),typeof xe=="function"){g.callback=xe,U(I),H=!0;break t}g===i(m)&&r(m),U(I)}else r(m);g=i(m)}if(g!==null)H=!0;else{var O=i(p);O!==null&&le(z,O.startTime-I),H=!1}}break e}finally{g=null,S=ae,M=!1}H=void 0}}finally{H?$():F=!1}}}var $;if(typeof N=="function")$=function(){N(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ce=re.port2;re.port1.onmessage=V,$=function(){ce.postMessage(null)}}else $=function(){x(V,0)};function le(I,H){P=x(function(){I(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(I){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var ae=S;S=H;try{return I()}finally{S=ae}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ae=S;S=I;try{return H()}finally{S=ae}},o.unstable_scheduleCallback=function(I,H,ae){var ye=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ye+ae:ye):ae=ye,I){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ae+xe,I={id:v++,callback:H,priorityLevel:I,startTime:ae,expirationTime:xe,sortIndex:-1},ae>ye?(I.sortIndex=ae,t(p,I),i(m)===null&&I===i(p)&&(C?(D(P),P=-1):C=!0,le(z,ae-ye))):(I.sortIndex=xe,t(m,I),b||M||(b=!0,F||(F=!0,$()))),I},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(I){var H=S;return function(){var ae=S;S=H;try{return I.apply(this,arguments)}finally{S=ae}}}})(Qf)),Qf}var b0;function _S(){return b0||(b0=1,Kf.exports=gS()),Kf.exports}var Jf={exports:{}},Dn={};var T0;function vS(){if(T0)return Dn;T0=1;var o=Ah();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Dn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var A0;function xS(){if(A0)return Jf.exports;A0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jf.exports=vS(),Jf.exports}var R0;function SS(){if(R0)return wo;R0=1;var o=_S(),t=Ah(),i=xS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,T=c.child;T;){if(T===a){_=!0,a=c,s=f;break}if(T===s){_=!0,s=c,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,s=c;break}if(T===s){_=!0,s=f,a=c;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ce(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ce(e(n))}catch{}}return null}var le=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ye=[],xe=-1;function O(e){return{current:e}}function ie(e){0>xe||(e.current=ye[xe],ye[xe]=null,xe--)}function ge(e,n){xe++,ye[xe]=e.current,e.current=n}var Ae=O(null),Be=O(null),ne=O(null),fe=O(null);function De(e,n){switch(ge(ne,n),ge(Be,e),ge(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vg(n),e=Xg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ie(Ae),ge(Ae,e)}function Xe(){ie(Ae),ie(Be),ie(ne)}function He(e){e.memoizedState!==null&&ge(fe,e);var n=Ae.current,a=Xg(n,e.type);n!==a&&(ge(Be,e),ge(Ae,a))}function dt(e){Be.current===e&&(ie(Ae),ie(Be)),fe.current===e&&(ie(fe),bo._currentValue=ae)}var Kt,gt;function ht(e){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+e+gt}var Rt=!1;function st(e,n){if(!e||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(oe){var te=oe}Reflect.construct(e,[],me)}else{try{me.call()}catch(oe){te=oe}e.call(me.prototype)}}else{try{throw Error()}catch(oe){te=oe}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(oe){if(oe&&te&&typeof oe.stack=="string")return[oe.stack,te.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var B=_.split(`
`),J=T.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===J.length)for(s=B.length-1,c=J.length-1;1<=s&&0<=c&&B[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==J[c]){var de=`
`+B[s].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=s&&0<=c);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ht(a):""}function Qt(e,n){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return st(e.type,!1);case 11:return st(e.type.render,!1);case 1:return st(e.type,!0);case 31:return ht("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Qt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Yt=Object.prototype.hasOwnProperty,yt=o.unstable_scheduleCallback,Lt=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,ve=o.unstable_UserBlockingPriority,ue=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,ke=o.log,tt=o.unstable_setDisableYieldValue,Me=null,be=null;function Fe(e){if(typeof ke=="function"&&tt(e),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Me,e)}catch{}}var Pe=Math.clz32?Math.clz32:k,we=Math.log,lt=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(we(e)/lt|0)|0}var Ne=256,Te=262144,ze=4194304;function Se(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _e(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Se(s):(_&=T,_!==0?c=Se(_):a||(a=T&~e,a!==0&&(c=Se(a))))):(T=s&~f,T!==0?c=Se(T):_!==0?c=Se(_):a||(a=s&~e,a!==0&&(c=Se(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),e}function Mt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,n,a,s,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Pe(a),me=1<<de;T[de]=0,B[de]=-1;var te=J[de];if(te!==null)for(J[de]=null,de=0;de<te.length;de++){var oe=te[de];oe!==null&&(oe.lane&=-536870913)}a&=~me}s!==0&&Zo(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Zo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pe(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ps(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pe(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Dr(e,n){var a=n&-n;return a=(a&42)!==0?1:zs(a),(a&(e.suspendedLanes|n))!==0?0:a}function zs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fs(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:d0(e.type))}function Di(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var ni=Math.random().toString(36).slice(2),rn="__reactFiber$"+ni,vn="__reactProps$"+ni,Si="__reactContainer$"+ni,Nr="__reactEvents$"+ni,Lr="__reactListeners$"+ni,Ko="__reactHandles$"+ni,Is="__reactResources$"+ni,er="__reactMarker$"+ni;function Bs(e){delete e[rn],delete e[vn],delete e[Nr],delete e[Lr],delete e[Ko]}function xa(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Si]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[rn])return a;e=Kg(e)}return n}e=a,a=e.parentNode}return null}function Sa(e){if(e=e[rn]||e[Si]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function tr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ya(e){var n=e[Is];return n||(n=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[er]=!0}var Y=new Set,se={};function ee(e,n){Z(e,n),Z(e+"Capture",n)}function Z(e,n){for(se[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},Le={};function Ge(e){return Yt.call(Le,e)?!0:Yt.call(Ie,e)?!1:Ue.test(e)?Le[e]=!0:(Ie[e]=!0,!1)}function We(e,n,a){if(Ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Je(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ct(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kt(e){if(!e._valueTracker){var n=Ct(e)?"checked":"value";e._valueTracker=jt(e,n,""+e[n])}}function Ot(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ct(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wt=/[\n"\\]/g;function it(e){return e.replace(wt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(e,n,a,s,c,f,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$e(n)):e.value!==""+$e(n)&&(e.value=""+$e(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,_,$e(n)):a!=null?Sn(e,_,$e(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+$e(T):e.removeAttribute("name")}function Xi(e,n,a,s,c,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){kt(e);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),kt(e)}function Sn(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ii(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function zt(e,n,a){if(n!=null&&(n=""+$e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$e(a):""}function yn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(le(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$e(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),kt(e)}function fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Or(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&En(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return uv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var Xc=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function Gh(e){var n=Sa(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(xn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+it(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[vn]||null;if(!c)throw Error(r(90));xn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ot(s)}break e;case"textarea":zt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ii(e,!!a.multiple,n,!1)}}}var Wc=!1;function Vh(e,n,a){if(Wc)return e(n,a);Wc=!0;try{var s=e(n);return s}finally{if(Wc=!1,(Pr!==null||zr!==null)&&(Il(),Pr&&(n=Pr,e=zr,zr=Pr=null,Gh(n),e)))for(n=0;n<e.length;n++)Gh(e[n])}}function Hs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=!1;if(Wi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){qc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{qc=!1}var Ma=null,Yc=null,Jo=null;function Xh(){if(Jo)return Jo;var e,n=Yc,a=n.length,s,c="value"in Ma?Ma.value:Ma.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return Jo=c.slice(e,1<s?1-s:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function kh(){return!1}function Fn(e){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:kh,this.isPropagationStopped=kh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Fn(nr),Vs=g({},nr,{view:0,detail:0}),fv=Fn(Vs),jc,Zc,Xs,nl=g({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(jc=e.screenX-Xs.screenX,Zc=e.screenY-Xs.screenY):Zc=jc=0,Xs=e),jc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),Wh=Fn(nl),dv=g({},nl,{dataTransfer:0}),hv=Fn(dv),pv=g({},Vs,{relatedTarget:0}),Kc=Fn(pv),mv=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=Fn(mv),_v=g({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vv=Fn(_v),xv=g({},nr,{data:0}),qh=Fn(xv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mv[e])?!!n[e]:!1}function Qc(){return Ev}var bv=g({},Vs,{key:function(e){if(e.key){var n=Sv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tv=Fn(bv),Av=g({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=Fn(Av),Rv=g({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),Cv=Fn(Rv),wv=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dv=Fn(wv),Uv=g({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Fn(Uv),Lv=g({},nr,{newState:0,oldState:0}),Ov=Fn(Lv),Pv=[9,13,27,32],Jc=Wi&&"CompositionEvent"in window,ks=null;Wi&&"documentMode"in document&&(ks=document.documentMode);var zv=Wi&&"TextEvent"in window&&!ks,jh=Wi&&(!Jc||ks&&8<ks&&11>=ks),Zh=" ",Kh=!1;function Qh(e,n){switch(e){case"keyup":return Pv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function Fv(e,n){switch(e){case"compositionend":return Jh(n);case"keypress":return n.which!==32?null:(Kh=!0,Zh);case"textInput":return e=n.data,e===Zh&&Kh?null:e;default:return null}}function Iv(e,n){if(Fr)return e==="compositionend"||!Jc&&Qh(e,n)?(e=Xh(),Jo=Yc=Ma=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jh&&n.locale!=="ko"?null:n.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bv[e.type]:n==="textarea"}function ep(e,n,a,s){Pr?zr?zr.push(s):zr=[s]:Pr=s,n=Wl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ws=null,qs=null;function Hv(e){zg(e,0)}function il(e){var n=tr(e);if(Ot(n))return e}function tp(e,n){if(e==="change")return n}var np=!1;if(Wi){var $c;if(Wi){var eu="oninput"in document;if(!eu){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),eu=typeof ip.oninput=="function"}$c=eu}else $c=!1;np=$c&&(!document.documentMode||9<document.documentMode)}function ap(){Ws&&(Ws.detachEvent("onpropertychange",rp),qs=Ws=null)}function rp(e){if(e.propertyName==="value"&&il(qs)){var n=[];ep(n,qs,e,kc(e)),Vh(Hv,n)}}function Gv(e,n,a){e==="focusin"?(ap(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",rp)):e==="focusout"&&ap()}function Vv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(qs)}function Xv(e,n){if(e==="click")return il(n)}function kv(e,n){if(e==="input"||e==="change")return il(n)}function Wv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Wv;function Ys(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Yt.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function op(e,n){var a=sp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var qv=Wi&&"documentMode"in document&&11>=document.documentMode,Ir=null,nu=null,js=null,iu=!1;function up(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||Ir==null||Ir!==Ke(s)||(s=Ir,"selectionStart"in s&&tu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Ys(js,s)||(js=s,s=Wl(nu,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ir)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Br={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},au={},fp={};Wi&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function ar(e){if(au[e])return au[e];if(!Br[e])return e;var n=Br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fp)return au[e]=n[a];return e}var dp=ar("animationend"),hp=ar("animationiteration"),pp=ar("animationstart"),Yv=ar("transitionrun"),jv=ar("transitionstart"),Zv=ar("transitioncancel"),mp=ar("transitionend"),gp=new Map,ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ru.push("scrollEnd");function Mi(e,n){gp.set(e,n),ee(n,[e])}var al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Hr=0,su=0;function rl(){for(var e=Hr,n=su=Hr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&_p(a,c,f)}}function sl(e,n,a,s){ai[Hr++]=e,ai[Hr++]=n,ai[Hr++]=a,ai[Hr++]=s,su|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function ou(e,n,a,s){return sl(e,n,a,s),ol(e)}function rr(e,n){return sl(e,null,null,n),ol(e)}function _p(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pe(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<_o)throw _o=0,_f=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gr={};function Kv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new Kv(e,n,a,s)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,s,c,f){var _=0;if(s=e,typeof e=="function")lu(e)&&(_=1);else if(typeof e=="string")_=tS(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case A:return e=jn(31,a,n,c),e.elementType=A,e.lanes=f,e;case C:return sr(a.children,c,f,n);case y:_=8,c|=24;break;case x:return e=jn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case z:return e=jn(13,a,n,c),e.elementType=z,e.lanes=f,e;case F:return e=jn(19,a,n,c),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:_=10;break e;case D:_=9;break e;case U:_=11;break e;case P:_=14;break e;case W:_=16,s=null;break e}_=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(_,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function sr(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function cu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function xp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function uu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Sp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Sp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Sp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Vr=[],Xr=0,cl=null,Zs=0,si=[],oi=0,Ea=null,Ui=1,Ni="";function Yi(e,n){Vr[Xr++]=Zs,Vr[Xr++]=cl,cl=e,Zs=n}function yp(e,n,a){si[oi++]=Ui,si[oi++]=Ni,si[oi++]=Ea,Ea=e;var s=Ui;e=Ni;var c=32-Pe(s)-1;s&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Ui=1<<32-Pe(n)+c|a<<c|s,Ni=f+e}else Ui=1<<f|a<<c|s,Ni=e}function fu(e){e.return!==null&&(Yi(e,1),yp(e,1,0))}function du(e){for(;e===cl;)cl=Vr[--Xr],Vr[Xr]=null,Zs=Vr[--Xr],Vr[Xr]=null;for(;e===Ea;)Ea=si[--oi],si[oi]=null,Ni=si[--oi],si[oi]=null,Ui=si[--oi],si[oi]=null}function Mp(e,n){si[oi++]=Ui,si[oi++]=Ni,si[oi++]=Ea,Ui=n.id,Ni=n.overflow,Ea=e}var bn=null,Wt=null,xt=!1,ba=null,li=!1,hu=Error(r(519));function Ta(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ks(ri(n,e)),hu}function Ep(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[vn]=s,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)mt(xo[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Xi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),yn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Hg(n.textContent,a)?(s.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),s.onScroll!=null&&mt("scroll",n),s.onScrollEnd!=null&&mt("scrollend",n),s.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ta(e,!0)}function bp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:bn=bn.return}}function kr(e){if(e!==bn)return!1;if(!xt)return bp(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Nf(e.type,e.memoizedProps)),a=!a),a&&Wt&&Ta(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=Zg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=Zg(e)}else n===27?(n=Wt,Ba(e.type)?(e=Ff,Ff=null,Wt=e):Wt=n):Wt=bn?ui(e.stateNode.nextSibling):null;return!0}function or(){Wt=bn=null,xt=!1}function pu(){var e=ba;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),ba=null),e}function Ks(e){ba===null?ba=[e]:ba.push(e)}var mu=O(null),lr=null,ji=null;function Aa(e,n,a){ge(mu,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=mu.current,ie(mu)}function gu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function _u(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),gu(f.return,a,e),s||(_=null);break e}f=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),gu(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Wr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=c.type;Yn(c.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(c===fe.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}c=c.return}e!==null&&_u(n,e,a,s),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Tp(lr,e)}function fl(e,n){return lr===null&&cr(e),Tp(e,n)}function Tp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var Qv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Jv=o.unstable_scheduleCallback,$v=o.unstable_NormalPriority,sn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new Qv,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&Jv($v,function(){e.controller.abort()})}var Js=null,xu=0,qr=0,Yr=null;function ex(e,n){if(Js===null){var a=Js=[];xu=0,qr=Ef(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xu++,n.then(Ap,Ap),n}function Ap(){if(--xu===0&&Js!==null){Yr!==null&&(Yr.status="fulfilled");var e=Js;Js=null,qr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function tx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Rp=I.S;I.S=function(e,n){ug=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ex(e,n),Rp!==null&&Rp(e,n)};var ur=O(null);function Su(){var e=ur.current;return e!==null?e:Xt.pooledCache}function dl(e,n){n===null?ge(ur,ur.current):ge(ur,n.pool)}function Cp(){var e=Su();return e===null?null:{parent:sn._currentValue,pool:e}}var jr=Error(r(460)),yu=Error(r(474)),hl=Error(r(542)),pl={then:function(){}};function wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw dr=n,jr}}function fr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dr=a,jr):a}}var dr=null;function Up(){if(dr===null)throw Error(r(459));var e=dr;return dr=null,e}function Np(e){if(e===jr||e===hl)throw Error(r(483))}var Zr=null,$s=0;function ml(e){var n=$s;return $s+=1,Zr===null&&(Zr=[]),Dp(Zr,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lp(e){function n(j,X){if(e){var K=j.deletions;K===null?(j.deletions=[X],j.flags|=16):K.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function s(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=qi(j,X),j.index=0,j.sibling=null,j}function f(j,X,K){return j.index=K,e?(K=j.alternate,K!==null?(K=K.index,K<X?(j.flags|=67108866,X):K):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function _(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,X,K,pe){return X===null||X.tag!==6?(X=cu(K,j.mode,pe),X.return=j,X):(X=c(X,K),X.return=j,X)}function B(j,X,K,pe){var Qe=K.type;return Qe===C?de(j,X,K.props.children,pe,K.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===W&&fr(Qe)===X.type)?(X=c(X,K.props),eo(X,K),X.return=j,X):(X=ll(K.type,K.key,K.props,null,j.mode,pe),eo(X,K),X.return=j,X)}function J(j,X,K,pe){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=uu(K,j.mode,pe),X.return=j,X):(X=c(X,K.children||[]),X.return=j,X)}function de(j,X,K,pe,Qe){return X===null||X.tag!==7?(X=sr(K,j.mode,pe,Qe),X.return=j,X):(X=c(X,K),X.return=j,X)}function me(j,X,K){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=cu(""+X,j.mode,K),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return K=ll(X.type,X.key,X.props,null,j.mode,K),eo(K,X),K.return=j,K;case b:return X=uu(X,j.mode,K),X.return=j,X;case W:return X=fr(X),me(j,X,K)}if(le(X)||$(X))return X=sr(X,j.mode,K,null),X.return=j,X;if(typeof X.then=="function")return me(j,ml(X),K);if(X.$$typeof===N)return me(j,fl(j,X),K);gl(j,X)}return null}function te(j,X,K,pe){var Qe=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qe!==null?null:T(j,X,""+K,pe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Qe?B(j,X,K,pe):null;case b:return K.key===Qe?J(j,X,K,pe):null;case W:return K=fr(K),te(j,X,K,pe)}if(le(K)||$(K))return Qe!==null?null:de(j,X,K,pe,null);if(typeof K.then=="function")return te(j,X,ml(K),pe);if(K.$$typeof===N)return te(j,X,fl(j,K),pe);gl(j,K)}return null}function oe(j,X,K,pe,Qe){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return j=j.get(K)||null,T(X,j,""+pe,Qe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case M:return j=j.get(pe.key===null?K:pe.key)||null,B(X,j,pe,Qe);case b:return j=j.get(pe.key===null?K:pe.key)||null,J(X,j,pe,Qe);case W:return pe=fr(pe),oe(j,X,K,pe,Qe)}if(le(pe)||$(pe))return j=j.get(K)||null,de(X,j,pe,Qe,null);if(typeof pe.then=="function")return oe(j,X,K,ml(pe),Qe);if(pe.$$typeof===N)return oe(j,X,K,fl(X,pe),Qe);gl(X,pe)}return null}function Ve(j,X,K,pe){for(var Qe=null,bt=null,je=X,ct=X=0,vt=null;je!==null&&ct<K.length;ct++){je.index>ct?(vt=je,je=null):vt=je.sibling;var Tt=te(j,je,K[ct],pe);if(Tt===null){je===null&&(je=vt);break}e&&je&&Tt.alternate===null&&n(j,je),X=f(Tt,X,ct),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt,je=vt}if(ct===K.length)return a(j,je),xt&&Yi(j,ct),Qe;if(je===null){for(;ct<K.length;ct++)je=me(j,K[ct],pe),je!==null&&(X=f(je,X,ct),bt===null?Qe=je:bt.sibling=je,bt=je);return xt&&Yi(j,ct),Qe}for(je=s(je);ct<K.length;ct++)vt=oe(je,j,ct,K[ct],pe),vt!==null&&(e&&vt.alternate!==null&&je.delete(vt.key===null?ct:vt.key),X=f(vt,X,ct),bt===null?Qe=vt:bt.sibling=vt,bt=vt);return e&&je.forEach(function(ka){return n(j,ka)}),xt&&Yi(j,ct),Qe}function et(j,X,K,pe){if(K==null)throw Error(r(151));for(var Qe=null,bt=null,je=X,ct=X=0,vt=null,Tt=K.next();je!==null&&!Tt.done;ct++,Tt=K.next()){je.index>ct?(vt=je,je=null):vt=je.sibling;var ka=te(j,je,Tt.value,pe);if(ka===null){je===null&&(je=vt);break}e&&je&&ka.alternate===null&&n(j,je),X=f(ka,X,ct),bt===null?Qe=ka:bt.sibling=ka,bt=ka,je=vt}if(Tt.done)return a(j,je),xt&&Yi(j,ct),Qe;if(je===null){for(;!Tt.done;ct++,Tt=K.next())Tt=me(j,Tt.value,pe),Tt!==null&&(X=f(Tt,X,ct),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt);return xt&&Yi(j,ct),Qe}for(je=s(je);!Tt.done;ct++,Tt=K.next())Tt=oe(je,j,ct,Tt.value,pe),Tt!==null&&(e&&Tt.alternate!==null&&je.delete(Tt.key===null?ct:Tt.key),X=f(Tt,X,ct),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt);return e&&je.forEach(function(dS){return n(j,dS)}),xt&&Yi(j,ct),Qe}function Vt(j,X,K,pe){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:e:{for(var Qe=K.key;X!==null;){if(X.key===Qe){if(Qe=K.type,Qe===C){if(X.tag===7){a(j,X.sibling),pe=c(X,K.props.children),pe.return=j,j=pe;break e}}else if(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===W&&fr(Qe)===X.type){a(j,X.sibling),pe=c(X,K.props),eo(pe,K),pe.return=j,j=pe;break e}a(j,X);break}else n(j,X);X=X.sibling}K.type===C?(pe=sr(K.props.children,j.mode,pe,K.key),pe.return=j,j=pe):(pe=ll(K.type,K.key,K.props,null,j.mode,pe),eo(pe,K),pe.return=j,j=pe)}return _(j);case b:e:{for(Qe=K.key;X!==null;){if(X.key===Qe)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){a(j,X.sibling),pe=c(X,K.children||[]),pe.return=j,j=pe;break e}else{a(j,X);break}else n(j,X);X=X.sibling}pe=uu(K,j.mode,pe),pe.return=j,j=pe}return _(j);case W:return K=fr(K),Vt(j,X,K,pe)}if(le(K))return Ve(j,X,K,pe);if($(K)){if(Qe=$(K),typeof Qe!="function")throw Error(r(150));return K=Qe.call(K),et(j,X,K,pe)}if(typeof K.then=="function")return Vt(j,X,ml(K),pe);if(K.$$typeof===N)return Vt(j,X,fl(j,K),pe);gl(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,X!==null&&X.tag===6?(a(j,X.sibling),pe=c(X,K),pe.return=j,j=pe):(a(j,X),pe=cu(K,j.mode,pe),pe.return=j,j=pe),_(j)):a(j,X)}return function(j,X,K,pe){try{$s=0;var Qe=Vt(j,X,K,pe);return Zr=null,Qe}catch(je){if(je===jr||je===hl)throw je;var bt=jn(29,je,null,j.mode);return bt.lanes=pe,bt.return=j,bt}}}var hr=Lp(!0),Op=Lp(!1),Ra=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Dt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ol(e),_p(e,null,a),n}return sl(e,s,n,a),ol(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ps(e,a)}}function bu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Tu=!1;function no(){if(Tu){var e=Yr;if(e!==null)throw e}}function io(e,n,a,s){Tu=!1;var c=e.updateQueue;Ra=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,J=B.next;B.next=null,_===null?f=J:_.next=J,_=B;var de=e.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==_&&(T===null?de.firstBaseUpdate=J:T.next=J,de.lastBaseUpdate=B))}if(f!==null){var me=c.baseState;_=0,de=J=B=null,T=f;do{var te=T.lane&-536870913,oe=te!==T.lane;if(oe?(_t&te)===te:(s&te)===te){te!==0&&te===qr&&(Tu=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ve=e,et=T;te=n;var Vt=a;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){me=Ve.call(Vt,me,te);break e}me=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,te=typeof Ve=="function"?Ve.call(Vt,me,te):Ve,te==null)break e;me=g({},me,te);break e;case 2:Ra=!0}}te=T.callback,te!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=c.callbacks,oe===null?c.callbacks=[te]:oe.push(te))}else oe={lane:te,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?(J=de=oe,B=me):de=de.next=oe,_|=te;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;oe=T,T=oe.next,oe.next=null,c.lastBaseUpdate=oe,c.shared.pending=null}}while(!0);de===null&&(B=me),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Oa|=_,e.lanes=_,e.memoizedState=me}}function Pp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Kr=O(null),_l=O(0);function Fp(e,n){e=aa,ge(_l,e),ge(Kr,n),aa=e|n.baseLanes}function Au(){ge(_l,aa),ge(Kr,Kr.current)}function Ru(){aa=_l.current,ie(Kr),ie(_l)}var Zn=O(null),ci=null;function Da(e){var n=e.alternate;ge(en,en.current&1),ge(Zn,e),ci===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(ci=e)}function Cu(e){ge(en,en.current),ge(Zn,e),ci===null&&(ci=e)}function Ip(e){e.tag===22?(ge(en,en.current),ge(Zn,e),ci===null&&(ci=e)):Ua()}function Ua(){ge(en,en.current),ge(Zn,Zn.current)}function Kn(e){ie(Zn),ci===e&&(ci=null),ie(en)}var en=O(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pf(a)||zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,ot=null,Ht=null,on=null,xl=!1,Qr=!1,pr=!1,Sl=0,ao=0,Jr=null,nx=0;function Jt(){throw Error(r(321))}function wu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Du(e,n,a,s,c,f){return Ki=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?ym:Wu,pr=!1,f=a(s,c),pr=!1,Qr&&(f=Hp(n,a,s,c)),Bp(e),f}function Bp(e){I.H=oo;var n=Ht!==null&&Ht.next!==null;if(Ki=0,on=Ht=ot=null,xl=!1,ao=0,Jr=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&ul(e)&&(ln=!0))}function Hp(e,n,a,s){ot=e;var c=0;do{if(Qr&&(Jr=null),ao=0,Qr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Mm,f=n(a,s)}while(Qr);return f}function ix(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(ot.flags|=1024),n}function Uu(){var e=Sl!==0;return Sl=0,e}function Nu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Lu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}Ki=0,on=Ht=ot=null,Qr=!1,ao=Sl=0,Jr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ot.memoizedState=on=e:on=on.next=e,on}function tn(){if(Ht===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=on===null?ot.memoizedState:on.next;if(n!==null)on=n,Ht=e;else{if(e===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},on===null?ot.memoizedState=on=e:on=on.next=e}return on}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=ao;return ao+=1,Jr===null&&(Jr=[]),e=Dp(Jr,e,n),n=ot,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?ym:Wu),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===N)return Tn(e)}throw Error(r(438,String(e)))}function Ou(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ot.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=w;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function El(e){var n=tn();return Pu(n,Ht,e)}function Pu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=_=null,B=null,J=n,de=!1;do{var me=J.lane&-536870913;if(me!==J.lane?(_t&me)===me:(Ki&me)===me){var te=J.revertLane;if(te===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),me===qr&&(de=!0);else if((Ki&te)===te){J=J.next,te===qr&&(de=!0);continue}else me={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=me,_=f):B=B.next=me,ot.lanes|=te,Oa|=te;me=J.action,pr&&a(f,me),f=J.hasEagerState?J.eagerState:a(f,me)}else te={lane:me,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=te,_=f):B=B.next=te,ot.lanes|=me,Oa|=me;J=J.next}while(J!==null&&J!==n);if(B===null?_=f:B.next=T,!Yn(f,e.memoizedState)&&(ln=!0,de&&(a=Yr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function zu(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);Yn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Gp(e,n,a){var s=ot,c=tn(),f=xt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Yn((Ht||c).memoizedState,a);if(_&&(c.memoizedState=a,ln=!0),c=c.queue,Bu(kp.bind(null,s,c,e),[e]),c.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,$r(9,{destroy:void 0},Xp.bind(null,s,c,a,n),null),Xt===null)throw Error(r(349));f||(Ki&127)!==0||Vp(s,n,a)}return a}function Vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=yl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Xp(e,n,a,s){n.value=a,n.getSnapshot=s,Wp(n)&&qp(e)}function kp(e,n,a){return a(function(){Wp(n)&&qp(e)})}function Wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function qp(e){var n=rr(e,2);n!==null&&Vn(n,e,2)}function Fu(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),pr){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function Yp(e,n,a,s){return e.baseState=a,Pu(e,Ht,typeof s=="function"?s:Qi)}function ax(e,n,a,s,c){if(Al(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};I.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function jp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=I.T,_={};I.T=_;try{var T=a(c,s),B=I.S;B!==null&&B(_,T),Zp(e,n,T)}catch(J){Iu(e,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),I.T=f}}else try{f=a(c,s),Zp(e,n,f)}catch(J){Iu(e,n,J)}}function Zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Kp(e,n,s)},function(s){return Iu(e,n,s)}):Kp(e,n,a)}function Kp(e,n,a){n.status="fulfilled",n.value=a,Qp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,jp(e,a)))}function Iu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==s)}e.action=null}function Qp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jp(e,n){return n}function $p(e,n){if(xt){var a=Xt.formState;if(a!==null){e:{var s=ot;if(xt){if(Wt){t:{for(var c=Wt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Wt=ui(c.nextSibling),s=c.data==="F!";break e}}Ta(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=s,a=vm.bind(null,ot,s),s.dispatch=a,s=Fu(!1),f=ku.bind(null,ot,!1,s.queue),s=On(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=ax.bind(null,ot,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function em(e){var n=tn();return tm(n,Ht,e)}function tm(e,n,a){if(n=Pu(e,n,Jp)[0],e=El(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(_){throw _===jr?hl:_}else s=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,$r(9,{destroy:void 0},rx.bind(null,c,a),null)),[s,f,e]}function rx(e,n){e.action=n}function nm(e){var n=tn(),a=Ht;if(a!==null)return tm(n,a,e);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function $r(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ot.updateQueue,n===null&&(n=yl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function im(){return tn().memoizedState}function bl(e,n,a,s){var c=On();ot.flags|=e,c.memoizedState=$r(1|n,{destroy:void 0},a,s===void 0?null:s)}function Tl(e,n,a,s){var c=tn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ht!==null&&s!==null&&wu(s,Ht.memoizedState.deps)?c.memoizedState=$r(n,f,a,s):(ot.flags|=e,c.memoizedState=$r(1|n,f,a,s))}function am(e,n){bl(8390656,8,e,n)}function Bu(e,n){Tl(2048,8,e,n)}function sx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=yl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function rm(e){var n=tn().memoizedState;return sx({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function sm(e,n){return Tl(4,2,e,n)}function om(e,n){return Tl(4,4,e,n)}function lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cm(e,n,a){a=a!=null?a.concat([e]):null,Tl(4,4,lm.bind(null,n,e),a)}function Hu(){}function um(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&wu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function fm(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&wu(n,s[1]))return s[0];if(s=e(),pr){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[s,n],s}function Gu(e,n,a){return a===void 0||(Ki&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=dg(),ot.lanes|=e,Oa|=e,a)}function dm(e,n,a,s){return Yn(a,n)?a:Kr.current!==null?(e=Gu(e,a,s),Yn(e,n)||(ln=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(_t&261930)===0?(ln=!0,e.memoizedState=a):(e=dg(),ot.lanes|=e,Oa|=e,n)}function hm(e,n,a,s,c){var f=H.p;H.p=f!==0&&8>f?f:8;var _=I.T,T={};I.T=T,ku(e,!1,n,a);try{var B=c(),J=I.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=tx(B,s);so(e,n,de,$n(e))}else so(e,n,s,$n(e))}catch(me){so(e,n,{then:function(){},status:"rejected",reason:me},$n())}finally{H.p=f,_!==null&&T.types!==null&&(_.types=T.types),I.T=_}}function ox(){}function Vu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=pm(e).queue;hm(e,c,n,ae,a===null?ox:function(){return mm(e),a(s)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mm(e){var n=pm(e);n.next===null&&(n=e.alternate.memoizedState),so(e,n.next.queue,{},$n())}function Xu(){return Tn(bo)}function gm(){return tn().memoizedState}function _m(){return tn().memoizedState}function lx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Ca(a);var s=wa(n,e,a);s!==null&&(Vn(s,n,a),to(s,n,a)),n={cache:vu()},e.payload=n;return}n=n.return}}function cx(e,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?xm(n,a):(a=ou(e,n,a,s),a!==null&&(Vn(a,e,s),Sm(a,n,s)))}function vm(e,n,a){var s=$n();so(e,n,a,s)}function so(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))xm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(c.hasEagerState=!0,c.eagerState=T,Yn(T,_))return sl(e,n,c,0),Xt===null&&rl(),!1}catch{}if(a=ou(e,n,c,s),a!==null)return Vn(a,e,s),Sm(a,n,s),!0}return!1}function ku(e,n,a,s){if(s={lane:2,revertLane:Ef(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(n)throw Error(r(479))}else n=ou(e,a,s,2),n!==null&&Vn(n,e,2)}function Al(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function xm(e,n){Qr=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Sm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ps(e,a)}}var oo={readContext:Tn,use:Ml,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};oo.useEffectEvent=Jt;var ym={readContext:Tn,use:Ml,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bl(4194308,4,lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var s=e();if(pr){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=On();if(a!==void 0){var c=a(n);if(pr){Fe(!0);try{a(n)}finally{Fe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=cx.bind(null,ot,e),[s.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Fu(e);var n=e.queue,a=vm.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Hu,useDeferredValue:function(e,n){var a=On();return Gu(a,e,n)},useTransition:function(){var e=Fu(!1);return e=hm.bind(null,ot,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ot,c=On();if(xt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(_t&127)!==0||Vp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,am(kp.bind(null,s,f,e),[e]),s.flags|=2048,$r(9,{destroy:void 0},Xp.bind(null,s,f,a,n),null),a},useId:function(){var e=On(),n=Xt.identifierPrefix;if(xt){var a=Ni,s=Ui;a=(s&~(1<<32-Pe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Xu,useFormState:$p,useActionState:$p,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ou,useCacheRefresh:function(){return On().memoizedState=lx.bind(null,ot)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Wu={readContext:Tn,use:Ml,useCallback:um,useContext:Tn,useEffect:Bu,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:El,useRef:im,useState:function(){return El(Qi)},useDebugValue:Hu,useDeferredValue:function(e,n){var a=tn();return dm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=El(Qi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:Xu,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=tn();return Yp(a,Ht,e,n)},useMemoCache:Ou,useCacheRefresh:_m};Wu.useEffectEvent=rm;var Mm={readContext:Tn,use:Ml,useCallback:um,useContext:Tn,useEffect:Bu,useImperativeHandle:cm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:fm,useReducer:zu,useRef:im,useState:function(){return zu(Qi)},useDebugValue:Hu,useDeferredValue:function(e,n){var a=tn();return Ht===null?Gu(a,e,n):dm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=zu(Qi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:Xu,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=tn();return Ht!==null?Yp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:_m};Mm.useEffectEvent=rm;function qu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=$n(),c=Ca(s);c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,s),n!==null&&(Vn(n,e,s),to(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=$n(),c=Ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,s),n!==null&&(Vn(n,e,s),to(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=wa(e,s,a),n!==null&&(Vn(n,e,a),to(n,e,a))}};function Em(e,n,a,s,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(c,f):!0}function bm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Yu.enqueueReplaceState(n,n.state,null)}function mr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Tm(e){al(e)}function Am(e){console.error(e)}function Rm(e){al(e)}function Rl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Cm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ju(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,n)},a}function wm(e){return e=Ca(e),e.tag=3,e}function Dm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Cm(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Cm(n,a,s),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function ux(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Bl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Sf(e,s,c)),!1;case 22:return a.flags|=65536,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Sf(e,s,c)),!1}throw Error(r(435,a.tag))}return Sf(e,s,c),Bl(),!1}if(xt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==hu&&(e=Error(r(422),{cause:s}),Ks(ri(e,a)))):(s!==hu&&(n=Error(r(423),{cause:s}),Ks(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ri(s,a),c=ju(e.stateNode,s,c),bu(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),go===null?go=[f]:go.push(f),$t!==4&&($t=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ju(a.stateNode,s,e),bu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=wm(c),Dm(c,e,a,s),bu(a,c),!1}a=a.return}while(a!==null);return!1}var Zu=Error(r(461)),ln=!1;function An(e,n,a,s){n.child=e===null?Op(n,null,a,s):hr(n,e.child,a,s)}function Um(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var T in s)T!=="ref"&&(_[T]=s[T])}else _=s;return cr(n),s=Du(e,n,a,_,f,c),T=Uu(),e!==null&&!ln?(Nu(e,n,c),Ji(e,n,c)):(xt&&T&&fu(n),n.flags|=1,An(e,n,s,c),n.child)}function Nm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Lm(e,n,f,s,c)):(e=ll(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!af(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(_,s)&&e.ref===n.ref)return Ji(e,n,c)}return n.flags|=1,e=qi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Lm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ys(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,af(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Ji(e,n,c)}return Ku(e,n,a,s,c)}function Om(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Pm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Fp(n,f):Au(),Ip(n);else return s=n.lanes=536870912,Pm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(dl(n,f.cachePool),Fp(n,f),Ua(),n.memoizedState=null):(e!==null&&dl(n,null),Au(),Ua());return An(e,n,c,a),n.child}function lo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pm(e,n,a,s,c){var f=Su();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&dl(n,null),Au(),Ip(n),e!==null&&Wr(e,n,s,!0),n.childLanes=c,null}function Cl(e,n){return n=Dl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function zm(e,n,a){return hr(n,e.child,null,a),e=Cl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function fx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(s.mode==="hidden")return e=Cl(n,s),n.lanes=536870912,lo(null,e);if(Cu(n),(e=Wt)?(e=jg(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=xp(e),a.return=n,n.child=a,bn=n,Wt=null)):e=null,e===null)throw Ta(n);return n.lanes=536870912,null}return Cl(n,s)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Cu(n),c)if(n.flags&256)n.flags&=-257,n=zm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Wr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=Xt,s!==null&&(_=Dr(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,rr(e,_),Vn(s,e,_),Zu;Bl(),n=zm(e,n,a)}else e=f.treeContext,Wt=ui(_.nextSibling),bn=n,xt=!0,ba=null,li=!1,e!==null&&Mp(n,e),n=Cl(n,s),n.flags|=4096;return n}return e=qi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ku(e,n,a,s,c){return cr(n),a=Du(e,n,a,s,void 0,c),s=Uu(),e!==null&&!ln?(Nu(e,n,c),Ji(e,n,c)):(xt&&s&&fu(n),n.flags|=1,An(e,n,a,c),n.child)}function Fm(e,n,a,s,c,f){return cr(n),n.updateQueue=null,a=Hp(n,s,a,c),Bp(e),s=Uu(),e!==null&&!ln?(Nu(e,n,f),Ji(e,n,f)):(xt&&s&&fu(n),n.flags|=1,An(e,n,a,f),n.child)}function Im(e,n,a,s,c){if(cr(n),n.stateNode===null){var f=Gr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Tn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Mu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Tn(_):Gr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(qu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Yu.enqueueReplaceState(f,f.state,null),io(n,s,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=mr(a,T);f.props=B;var J=f.context,de=a.contextType;_=Gr,typeof de=="object"&&de!==null&&(_=Tn(de));var me=a.getDerivedStateFromProps;de=typeof me=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==_)&&bm(n,f,s,_),Ra=!1;var te=n.memoizedState;f.state=te,io(n,s,f,c),no(),J=n.memoizedState,T||te!==J||Ra?(typeof me=="function"&&(qu(n,a,me,s),J=n.memoizedState),(B=Ra||Em(n,a,B,s,te,J,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=_,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Eu(e,n),_=n.memoizedProps,de=mr(a,_),f.props=de,me=n.pendingProps,te=f.context,J=a.contextType,B=Gr,typeof J=="object"&&J!==null&&(B=Tn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==me||te!==B)&&bm(n,f,s,B),Ra=!1,te=n.memoizedState,f.state=te,io(n,s,f,c),no();var oe=n.memoizedState;_!==me||te!==oe||Ra||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof T=="function"&&(qu(n,a,T,s),oe=n.memoizedState),(de=Ra||Em(n,a,de,s,te,oe,B)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,oe,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,oe,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=oe),f.props=s,f.state=oe,f.context=B,s=de):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,wl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=hr(n,e.child,null,c),n.child=hr(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ji(e,n,c),e}function Bm(e,n,a,s){return or(),n.flags|=256,An(e,n,a,s),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(e){return{baseLanes:e,cachePool:Cp()}}function $u(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Hm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(c?Da(n):Ua(),(e=Wt)?(e=jg(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=xp(e),a.return=n,n.child=a,bn=n,Wt=null)):e=null,e===null)throw Ta(n);return zf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(Ua(),c=n.mode,T=Dl({mode:"hidden",children:T},c),s=sr(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Ju(a),s.childLanes=$u(e,_,a),n.memoizedState=Qu,lo(null,s)):(Da(n),ef(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=tf(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),T=s.fallback,c=n.mode,s=Dl({mode:"visible",children:s.children},c),T=sr(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,hr(n,e.child,null,a),s=n.child,s.memoizedState=Ju(a),s.childLanes=$u(e,_,a),n.memoizedState=Qu,n=lo(null,s));else if(Da(n),zf(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var J=_.dgst;_=J,s=Error(r(419)),s.stack="",s.digest=_,Ks({value:s,source:null,stack:null}),n=tf(e,n,a)}else if(ln||Wr(e,n,a,!1),_=(a&e.childLanes)!==0,ln||_){if(_=Xt,_!==null&&(s=Dr(_,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,rr(e,s),Vn(_,e,s),Zu;Pf(T)||Bl(),n=tf(e,n,a)}else Pf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Wt=ui(T.nextSibling),bn=n,xt=!0,ba=null,li=!1,e!==null&&Mp(n,e),n=ef(n,s.children),n.flags|=4096);return n}return c?(Ua(),T=s.fallback,c=n.mode,B=e.child,J=B.sibling,s=qi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,J!==null?T=qi(J,T):(T=sr(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,lo(null,s),s=n.child,T=e.child.memoizedState,T===null?T=Ju(a):(c=T.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Cp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=$u(e,_,a),n.memoizedState=Qu,lo(e.child,s)):(Da(n),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function ef(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function tf(e,n,a){return hr(n,e.child,null,a),e=ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Gm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),gu(e.return,n,a)}function nf(e,n,a,s,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Vm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=en.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,ge(en,_),An(e,n,s,a),s=xt?Zs:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gm(e,a,n);else if(e.tag===19)Gm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),nf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&vl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}nf(n,!0,a,null,f,s);break;case"together":nf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Wr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function dx(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Aa(n,sn,e.memoizedState.cache),or();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Hm(e,n,a):(Da(n),e=Ji(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Wr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Vm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ge(en,en.current),s)break;return null;case 22:return n.lanes=0,Om(e,n,a,n.pendingProps);case 24:Aa(n,sn,e.memoizedState.cache)}return Ji(e,n,a)}function Xm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!af(e,a)&&(n.flags&128)===0)return ln=!1,dx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,xt&&(n.flags&1048576)!==0&&yp(n,Zs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=fr(n.elementType),n.type=e,typeof e=="function")lu(e)?(s=mr(e,s),n.tag=1,n=Im(null,n,e,s,a)):(n.tag=0,n=Ku(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===U){n.tag=11,n=Um(null,n,e,s,a);break e}else if(c===P){n.tag=14,n=Nm(null,n,e,s,a);break e}}throw n=ce(e)||e,Error(r(306,n,""))}}return n;case 0:return Ku(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=mr(s,n.pendingProps),Im(e,n,s,c,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Eu(e,n),io(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Aa(n,sn,s),s!==f.cache&&_u(n,[sn],a,!0),no(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bm(e,n,s,a);break e}else if(s!==c){c=ri(Error(r(424)),n),Ks(c),n=Bm(e,n,s,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Wt=ui(e.firstChild),bn=n,xt=!0,ba=null,li=!0,a=Op(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(or(),s===c){n=Ji(e,n,a);break e}An(e,n,s,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=e0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,s=ql(ne.current).createElement(a),s[rn]=n,s[vn]=e,Rn(s,a,e),R(s),n.stateNode=s):n.memoizedState=e0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return He(n),e===null&&xt&&(s=n.stateNode=Qg(n.type,n.pendingProps,ne.current),bn=n,li=!0,c=Wt,Ba(n.type)?(Ff=c,Wt=ui(s.firstChild)):Wt=c),An(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((c=s=Wt)&&(s=Vx(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,bn=n,Wt=ui(s.firstChild),li=!1,c=!0):c=!1),c||Ta(n)),He(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,s=f.children,Nf(c,f)?s=null:_!==null&&Nf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Du(e,n,ix,null,null,a),bo._currentValue=c),wl(e,n),An(e,n,s,a),n.child;case 6:return e===null&&xt&&((e=a=Wt)&&(a=Xx(a,n.pendingProps,li),a!==null?(n.stateNode=a,bn=n,Wt=null,e=!0):e=!1),e||Ta(n)),null;case 13:return Hm(e,n,a);case 4:return De(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=hr(n,null,s,a):An(e,n,s,a),n.child;case 11:return Um(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),An(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,cr(n),c=Tn(c),s=s(c),n.flags|=1,An(e,n,s,a),n.child;case 14:return Nm(e,n,n.type,n.pendingProps,a);case 15:return Lm(e,n,n.type,n.pendingProps,a);case 19:return Vm(e,n,a);case 31:return fx(e,n,a);case 22:return Om(e,n,a,n.pendingProps);case 24:return cr(n),s=Tn(sn),e===null?(c=Su(),c===null&&(c=Xt,f=vu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Mu(n),Aa(n,sn,c)):((e.lanes&a)!==0&&(Eu(e,n),io(n,null,null,a),no()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,sn,s)):(s=f.cache,Aa(n,sn,s),s!==c.cache&&_u(n,[sn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(e){e.flags|=4}function rf(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(gg())e.flags|=8192;else throw dr=pl,yu}else e.flags&=-16777217}function km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r0(n))if(gg())e.flags|=8192;else throw dr=pl,yu}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,is|=n)}function co(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function hx(e,n,a){var s=n.pendingProps;switch(du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Zi(sn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kr(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pu())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?($i(n),f!==null?(qt(n),km(n,f)):(qt(n),rf(n,c,null,s,a))):f?f!==e.memoizedState?($i(n),qt(n),km(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&$i(n),qt(n),rf(n,c,e,s,a)),null;case 27:if(dt(n),a=ne.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&$i(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}e=Ae.current,kr(n)?Ep(n):(e=Qg(c,s,a),n.stateNode=e,$i(n))}return qt(n),null;case 5:if(dt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&$i(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(f=Ae.current,kr(n))Ep(n);else{var _=ql(ne.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[rn]=n,f[vn]=s;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&$i(n)}}return qt(n),rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&$i(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ne.current,kr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||Ta(n,!0)}else e=ql(e).createTextNode(s),e[rn]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=kr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=kr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),qt(n),null);case 4:return Xe(),e===null&&Rf(n.stateNode.containerInfo),qt(n),null;case 10:return Zi(n.type),qt(n),null;case 19:if(ie(en),s=n.memoizedState,s===null)return qt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)co(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,co(s,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vp(a,e),a=a.sibling;return ge(en,en.current&1|2),xt&&Yi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>zl&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304)}else{if(!c)if(e=vl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xt)return qt(n),null}else 2*E()-s.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=en.current,ge(en,c?a&1|2:a&1),xt&&Yi(n,s.treeForkCount),e):(qt(n),null);case 22:case 23:return Kn(n),Ru(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ie(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(sn),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function px(e,n){switch(du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(sn),Xe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(en),null;case 4:return Xe(),null;case 10:return Zi(n.type),null;case 22:case 23:return Kn(n),Ru(),e!==null&&ie(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(sn),null;case 25:return null;default:return null}}function Wm(e,n){switch(du(n),n.tag){case 3:Zi(sn),Xe();break;case 26:case 27:case 5:dt(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ie(en);break;case 10:Zi(n.type);break;case 22:case 23:Kn(n),Ru(),e!==null&&ie(ur);break;case 24:Zi(sn)}}function uo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(T){It(n,n.return,T)}}function Na(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var _=s.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var B=a,J=T;try{J()}catch(de){It(c,B,de)}}}s=s.next}while(s!==f)}}catch(de){It(n,n.return,de)}}function qm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{zp(n,a)}catch(s){It(e,e.return,s)}}}function Ym(e,n,a){a.props=mr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){It(e,n,s)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){It(e,n,c)}}function Li(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){It(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){It(e,n,c)}else a.current=null}function jm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){It(e,e.return,c)}}function sf(e,n,a){try{var s=e.stateNode;zx(s,e.type,a,n),s[vn]=n}catch(c){It(e,e.return,c)}}function Zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(s!==4&&(s===27&&Ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(lf(e,n,a),e=e.sibling;e!==null;)lf(e,n,a),e=e.sibling}function Nl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function Km(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[rn]=e,n[vn]=a}catch(f){It(e,e.return,f)}}var ea=!1,cn=!1,cf=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function mx(e,n){if(e=e.containerInfo,Df=$l,e=cp(e),tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,T=-1,B=-1,J=0,de=0,me=e,te=null;t:for(;;){for(var oe;me!==a||c!==0&&me.nodeType!==3||(T=_+c),me!==f||s!==0&&me.nodeType!==3||(B=_+s),me.nodeType===3&&(_+=me.nodeValue.length),(oe=me.firstChild)!==null;)te=me,me=oe;for(;;){if(me===e)break t;if(te===a&&++J===c&&(T=_),te===f&&++de===s&&(B=_),(oe=me.nextSibling)!==null)break;me=te,te=me.parentNode}me=oe}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uf={focusedElem:e,selectionRange:a},$l=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ve=mr(a.type,c);e=s.getSnapshotBeforeUpdate(Ve,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(et){It(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Of(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Of(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function Jm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),s&4&&uo(5,a);break;case 1:if(na(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){It(a,a.return,_)}else{var c=mr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){It(a,a.return,_)}}s&64&&qm(a),s&512&&fo(a,a.return);break;case 3:if(na(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(e,n)}catch(_){It(a,a.return,_)}}break;case 27:n===null&&s&4&&Km(a);case 26:case 5:na(e,a),n===null&&s&4&&jm(a),s&512&&fo(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),s&4&&tg(e,a);break;case 13:na(e,a),s&4&&ng(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bx.bind(null,a),kx(e,a))));break;case 22:if(s=a.memoizedState!==null||ea,!s){n=n!==null&&n.memoizedState!==null||cn,c=ea;var f=cn;ea=s,(cn=n)&&!f?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ea=c,cn=f}break;case 30:break;default:na(e,a)}}function $m(e){var n=e.alternate;n!==null&&(e.alternate=null,$m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Bs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,In=!1;function ta(e,n,a){for(a=a.child;a!==null;)eg(e,n,a),a=a.sibling}function eg(e,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:cn||Li(a,n),ta(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Li(a,n);var s=Zt,c=In;Ba(a.type)&&(Zt=a.stateNode,In=!1),ta(e,n,a),yo(a.stateNode),Zt=s,In=c;break;case 5:cn||Li(a,n);case 6:if(s=Zt,c=In,Zt=null,ta(e,n,a),Zt=s,In=c,Zt!==null)if(In)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:Zt!==null&&(In?(e=Zt,qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fs(e)):qg(Zt,a.stateNode));break;case 4:s=Zt,c=In,Zt=a.stateNode.containerInfo,In=!0,ta(e,n,a),Zt=s,In=c;break;case 0:case 11:case 14:case 15:Na(2,a,n),cn||Na(4,a,n),ta(e,n,a);break;case 1:cn||(Li(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Ym(a,n,s)),ta(e,n,a);break;case 21:ta(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,ta(e,n,a),cn=s;break;default:ta(e,n,a)}}function tg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fs(e)}catch(a){It(n,n.return,a)}}}function ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fs(e)}catch(a){It(n,n.return,a)}}function gx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Qm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Qm),n;default:throw Error(r(435,e.tag))}}function Ll(e,n){var a=gx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Tx.bind(null,e,s);s.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,_=n,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Ba(T.type)){Zt=T.stateNode,In=!1;break e}break;case 5:Zt=T.stateNode,In=!1;break e;case 3:case 4:Zt=T.stateNode.containerInfo,In=!0;break e}T=T.return}if(Zt===null)throw Error(r(160));eg(f,_,c),Zt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ig(n,e),n=n.sibling}var Ei=null;function ig(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Hn(e),s&4&&(Na(3,e,e.return),uo(3,e),Na(5,e,e.return));break;case 1:Bn(n,e),Hn(e),s&512&&(cn||a===null||Li(a,a.return)),s&64&&ea&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Ei;if(Bn(n,e),Hn(e),s&512&&(cn||a===null||Li(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[er]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[rn]=e,R(f),s=f;break e;case"link":var _=i0("link","href",c).get(s+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=i0("meta","content",c).get(s+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,R(f),s=f}e.stateNode=s}else a0(c,e.type,e.stateNode);else e.stateNode=n0(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?a0(c,e.type,e.stateNode):n0(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Hn(e),s&512&&(cn||a===null||Li(a,a.return)),a!==null&&s&4&&sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Hn(e),s&512&&(cn||a===null||Li(a,a.return)),e.flags&32){c=e.stateNode;try{fn(c,"")}catch(Ve){It(e,e.return,Ve)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,sf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(cf=!0);break;case 6:if(Bn(n,e),Hn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ve){It(e,e.return,Ve)}}break;case 3:if(Zl=null,c=Ei,Ei=Yl(n.containerInfo),Bn(n,e),Ei=c,Hn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(Ve){It(e,e.return,Ve)}cf&&(cf=!1,ag(e));break;case 4:s=Ei,Ei=Yl(e.stateNode.containerInfo),Bn(n,e),Hn(e),Ei=s;break;case 12:Bn(n,e),Hn(e);break;case 31:Bn(n,e),Hn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ll(e,s)));break;case 13:Bn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ll(e,s)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=ea,de=cn;if(ea=J||c,cn=de||B,Bn(n,e),cn=de,ea=J,Hn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ea||cn||gr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=B.stateNode;var me=B.memoizedProps.style,te=me!=null&&me.hasOwnProperty("display")?me.display:null;T.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(Ve){It(B,B.return,Ve)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ve){It(B,B.return,Ve)}}}else if(n.tag===18){if(a===null){B=n;try{var oe=B.stateNode;c?Yg(oe,!0):Yg(B.stateNode,!1)}catch(Ve){It(B,B.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ll(e,a))));break;case 19:Bn(n,e),Hn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ll(e,s)));break;case 30:break;case 21:break;default:Bn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Zm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=of(e);Nl(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(fn(_,""),a.flags&=-33);var T=of(e);Nl(e,T,_);break;case 3:case 4:var B=a.stateNode.containerInfo,J=of(e);lf(e,J,B);break;default:throw Error(r(161))}}catch(de){It(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jm(e,n.alternate,n),n=n.sibling}function gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),gr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ym(n,n.return,a),gr(n);break;case 27:yo(n.stateNode);case 26:case 5:Li(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}e=e.sibling}}function ia(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ia(c,f,a),uo(4,f);break;case 1:if(ia(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){It(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Pp(B[c],T)}catch(J){It(s,s.return,J)}}a&&_&64&&qm(f),fo(f,f.return);break;case 27:Km(f);case 26:case 5:ia(c,f,a),a&&s===null&&_&4&&jm(f),fo(f,f.return);break;case 12:ia(c,f,a);break;case 31:ia(c,f,a),a&&_&4&&tg(c,f);break;case 13:ia(c,f,a),a&&_&4&&ng(c,f);break;case 22:f.memoizedState===null&&ia(c,f,a),fo(f,f.return);break;case 30:break;default:ia(c,f,a)}n=n.sibling}}function uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qs(a))}function ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e))}function bi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(e,n,a,s),n=n.sibling}function rg(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,s),c&2048&&uo(9,n);break;case 1:bi(e,n,a,s);break;case 3:bi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qs(e)));break;case 12:if(c&2048){bi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){It(n,n.return,B)}}else bi(e,n,a,s);break;case 31:bi(e,n,a,s);break;case 13:bi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,s):ho(e,n):f._visibility&2?bi(e,n,a,s):(f._visibility|=2,es(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&uf(_,n);break;case 24:bi(e,n,a,s),c&2048&&ff(n.alternate,n);break;default:bi(e,n,a,s)}}function es(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,T=a,B=s,J=_.flags;switch(_.tag){case 0:case 11:case 15:es(f,_,T,B,c),uo(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?es(f,_,T,B,c):ho(f,_):(de._visibility|=2,es(f,_,T,B,c)),c&&J&2048&&uf(_.alternate,_);break;case 24:es(f,_,T,B,c),c&&J&2048&&ff(_.alternate,_);break;default:es(f,_,T,B,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&uf(s.alternate,s);break;case 24:ho(a,s),c&2048&&ff(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function ts(e,n,a){if(e.subtreeFlags&po)for(e=e.child;e!==null;)sg(e,n,a),e=e.sibling}function sg(e,n,a){switch(e.tag){case 26:ts(e,n,a),e.flags&po&&e.memoizedState!==null&&nS(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:ts(e,n,a);break;case 3:case 4:var s=Ei;Ei=Yl(e.stateNode.containerInfo),ts(e,n,a),Ei=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=po,po=16777216,ts(e,n,a),po=s):ts(e,n,a));break;default:ts(e,n,a)}}function og(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,cg(s,e)}og(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Na(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):mo(e);break;default:mo(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,cg(s,e)}og(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function cg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else e:for(a=e;mn!==null;){s=mn;var c=s.sibling,f=s.return;if($m(s),s===a){mn=null;break e}if(c!==null){c.return=f,mn=c;break e}mn=f}}}var _x={getCacheForType:function(e){var n=Tn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(sn).controller.signal}},vx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Xt=null,pt=null,_t=0,Ft=0,Qn=null,La=!1,ns=!1,df=!1,aa=0,$t=0,Oa=0,_r=0,hf=0,Jn=0,is=0,go=null,Gn=null,pf=!1,Pl=0,ug=0,zl=1/0,Fl=null,Pa=null,dn=0,za=null,as=null,ra=0,mf=0,gf=null,fg=null,_o=0,_f=null;function $n(){return(Dt&2)!==0&&_t!==0?_t&-_t:I.T!==null?Ef():Fs()}function dg(){if(Jn===0)if((_t&536870912)===0||xt){var e=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Vn(e,n,a){(e===Xt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Fa(e,_t,Jn,!1)),wn(e,a),((Dt&2)===0||e!==Xt)&&(e===Xt&&((Dt&2)===0&&(_r|=a),$t===4&&Fa(e,_t,Jn,!1)),Oi(e))}function hg(e,n,a){if((Dt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Re(e,n),c=s?yx(e,n):xf(e,n,!0),f=s;do{if(c===0){ns&&!s&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!xx(a)){c=xf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var T=e;c=go;var B=T.current.memoizedState.isDehydrated;if(B&&(rs(T,_).flags|=256),_=xf(T,_,!1),_!==2){if(df&&!B){T.errorRecoveryDisabledLanes|=f,_r|=f,c=4;break e}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){rs(e,0),Fa(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,Jn,!La);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Pl+300-E(),10<c)){if(Fa(s,n,Jn,!La),_e(s,0,!0)!==0)break e;ra=n,s.timeoutHandle=kg(pg.bind(null,s,a,Gn,Fl,pf,n,Jn,_r,is,La,f,"Throttled",-0,0),c);break e}pg(s,a,Gn,Fl,pf,n,Jn,_r,is,La,f,null,-0,0)}}break}while(!0);Oi(e)}function pg(e,n,a,s,c,f,_,T,B,J,de,me,te,oe){if(e.timeoutHandle=-1,me=n.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},sg(n,f,me);var Ve=(f&62914560)===f?Pl-E():(f&4194048)===f?ug-E():0;if(Ve=iS(me,Ve),Ve!==null){ra=f,e.cancelPendingCommit=Ve(Mg.bind(null,e,n,f,a,s,c,_,T,B,de,me,null,te,oe)),Fa(e,f,_,!J);return}}Mg(e,n,f,a,s,c,_,T,B)}function xx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,s){n&=~hf,n&=~_r,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Zo(e,a,n)}function Il(){return(Dt&6)===0?(vo(0),!1):!0}function vf(){if(pt!==null){if(Ft===0)var e=pt.return;else e=pt,ji=lr=null,Lu(e),Zr=null,$s=0,e=pt;for(;e!==null;)Wm(e.alternate,e),e=e.return;pt=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Bx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,vf(),Xt=e,pt=a=qi(e.current,null),_t=n,Ft=0,Qn=null,La=!1,ns=Re(e,n),df=!1,is=Jn=hf=_r=Oa=$t=0,Gn=go=null,pf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pe(s),f=1<<c;n|=e[c],s&=~f}return aa=n,rl(),a}function mg(e,n){ot=null,I.H=oo,n===jr||n===hl?(n=Up(),Ft=3):n===yu?(n=Up(),Ft=4):Ft=n===Zu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,pt===null&&($t=1,Rl(e,ri(n,e.current)))}function gg(){var e=Zn.current;return e===null?!0:(_t&4194048)===_t?ci===null:(_t&62914560)===_t||(_t&536870912)!==0?e===ci:!1}function _g(){var e=I.H;return I.H=oo,e===null?oo:e}function vg(){var e=I.A;return I.A=_x,e}function Bl(){$t=4,La||(_t&4194048)!==_t&&Zn.current!==null||(ns=!0),(Oa&134217727)===0&&(_r&134217727)===0||Xt===null||Fa(Xt,_t,Jn,!1)}function xf(e,n,a){var s=Dt;Dt|=2;var c=_g(),f=vg();(Xt!==e||_t!==n)&&(Fl=null,rs(e,n)),n=!1;var _=$t;e:do try{if(Ft!==0&&pt!==null){var T=pt,B=Qn;switch(Ft){case 8:vf(),_=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var J=Ft;if(Ft=0,Qn=null,ss(e,T,B,J),a&&ns){_=0;break e}break;default:J=Ft,Ft=0,Qn=null,ss(e,T,B,J)}}Sx(),_=$t;break}catch(de){mg(e,de)}while(!0);return n&&e.shellSuspendCounter++,ji=lr=null,Dt=s,I.H=c,I.A=f,pt===null&&(Xt=null,_t=0,rl()),_}function Sx(){for(;pt!==null;)xg(pt)}function yx(e,n){var a=Dt;Dt|=2;var s=_g(),c=vg();Xt!==e||_t!==n?(Fl=null,zl=E()+500,rs(e,n)):ns=Re(e,n);e:do try{if(Ft!==0&&pt!==null){n=pt;var f=Qn;t:switch(Ft){case 1:Ft=0,Qn=null,ss(e,n,f,1);break;case 2:case 9:if(wp(f)){Ft=0,Qn=null,Sg(n);break}n=function(){Ft!==2&&Ft!==9||Xt!==e||(Ft=7),Oi(e)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:wp(f)?(Ft=0,Qn=null,Sg(n)):(Ft=0,Qn=null,ss(e,n,f,7));break;case 5:var _=null;switch(pt.tag){case 26:_=pt.memoizedState;case 5:case 27:var T=pt;if(_?r0(_):T.stateNode.complete){Ft=0,Qn=null;var B=T.sibling;if(B!==null)pt=B;else{var J=T.return;J!==null?(pt=J,Hl(J)):pt=null}break t}}Ft=0,Qn=null,ss(e,n,f,5);break;case 6:Ft=0,Qn=null,ss(e,n,f,6);break;case 8:vf(),$t=6;break e;default:throw Error(r(462))}}Mx();break}catch(de){mg(e,de)}while(!0);return ji=lr=null,I.H=s,I.A=c,Dt=a,pt!==null?0:(Xt=null,_t=0,rl(),$t)}function Mx(){for(;pt!==null&&!Ye();)xg(pt)}function xg(e){var n=Xm(e.alternate,e,aa);e.memoizedProps=e.pendingProps,n===null?Hl(e):pt=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Lu(n);default:Wm(a,n),n=pt=vp(n,aa),n=Xm(a,n,aa)}e.memoizedProps=e.pendingProps,n===null?Hl(e):pt=n}function ss(e,n,a,s){ji=lr=null,Lu(n),Zr=null,$s=0;var c=n.return;try{if(ux(e,c,n,a,_t)){$t=1,Rl(e,ri(a,e.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;$t=1,Rl(e,ri(a,e.current)),pt=null;return}n.flags&32768?(xt||s===1?e=!0:ns||(_t&536870912)!==0?e=!1:(La=e=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),yg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){yg(n,La);return}e=n.return;var a=hx(n.alternate,n,aa);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);$t===0&&($t=5)}function yg(e,n){do{var a=px(e.alternate,e);if(a!==null){a.flags&=32767,pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=a}while(e!==null);$t=6,pt=null}function Mg(e,n,a,s,c,f,_,T,B){e.cancelPendingCommit=null;do Gl();while(dn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=su,xi(e,a,f,_,T,B),e===Xt&&(pt=Xt=null,_t=0),as=n,za=e,ra=a,mf=f,gf=c,fg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ax(ue,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=I.T,I.T=null,c=H.p,H.p=2,_=Dt,Dt|=4;try{mx(e,n,a)}finally{Dt=_,H.p=c,I.T=s}}dn=1,Eg(),bg(),Tg()}}function Eg(){if(dn===1){dn=0;var e=za,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var s=H.p;H.p=2;var c=Dt;Dt|=4;try{ig(n,e);var f=Uf,_=cp(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&lp(T.ownerDocument.documentElement,T)){if(B!==null&&tu(T)){var J=B.start,de=B.end;if(de===void 0&&(de=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(de,T.value.length);else{var me=T.ownerDocument||document,te=me&&me.defaultView||window;if(te.getSelection){var oe=te.getSelection(),Ve=T.textContent.length,et=Math.min(B.start,Ve),Vt=B.end===void 0?et:Math.min(B.end,Ve);!oe.extend&&et>Vt&&(_=Vt,Vt=et,et=_);var j=op(T,et),X=op(T,Vt);if(j&&X&&(oe.rangeCount!==1||oe.anchorNode!==j.node||oe.anchorOffset!==j.offset||oe.focusNode!==X.node||oe.focusOffset!==X.offset)){var K=me.createRange();K.setStart(j.node,j.offset),oe.removeAllRanges(),et>Vt?(oe.addRange(K),oe.extend(X.node,X.offset)):(K.setEnd(X.node,X.offset),oe.addRange(K))}}}}for(me=[],oe=T;oe=oe.parentNode;)oe.nodeType===1&&me.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<me.length;T++){var pe=me[T];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}$l=!!Df,Uf=Df=null}finally{Dt=c,H.p=s,I.T=a}}e.current=n,dn=2}}function bg(){if(dn===2){dn=0;var e=za,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var s=H.p;H.p=2;var c=Dt;Dt|=4;try{Jm(e,n.alternate,n)}finally{Dt=c,H.p=s,I.T=a}}dn=3}}function Tg(){if(dn===4||dn===3){dn=0,L();var e=za,n=as,a=ra,s=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,as=za=null,Ag(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Pa=null),Ur(a),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=I.T,c=H.p,H.p=2,I.T=null;try{for(var f=e.onRecoverableError,_=0;_<s.length;_++){var T=s[_];f(T.value,{componentStack:T.stack})}}finally{I.T=n,H.p=c}}(ra&3)!==0&&Gl(),Oi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===_f?_o++:(_o=0,_f=e):_o=0,vo(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qs(n)))}function Gl(){return Eg(),bg(),Tg(),Rg()}function Rg(){if(dn!==5)return!1;var e=za,n=mf;mf=0;var a=Ur(ra),s=I.T,c=H.p;try{H.p=32>a?32:a,I.T=null,a=gf,gf=null;var f=za,_=ra;if(dn=0,as=za=null,ra=0,(Dt&6)!==0)throw Error(r(331));var T=Dt;if(Dt|=4,lg(f.current),rg(f,f.current,_,a),Dt=T,vo(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{H.p=c,I.T=s,Ag(e,n)}}function Cg(e,n,a){n=ri(a,n),n=ju(e.stateNode,n,2),e=wa(e,n,2),e!==null&&(wn(e,2),Oi(e))}function It(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){e=ri(a,e),a=wm(2),s=wa(n,a,2),s!==null&&(Dm(a,s,n,e),wn(s,2),Oi(s));break}}n=n.return}}function Sf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new vx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(df=!0,c.add(a),e=Ex.bind(null,e,n,a),n.then(e,e))}function Ex(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>E()-Pl?(Dt&2)===0&&rs(e,0):hf|=a,is===_t&&(is=0)),Oi(e)}function wg(e,n){n===0&&(n=Pt()),e=rr(e,n),e!==null&&(wn(e,n),Oi(e))}function bx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function Tx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),wg(e,a)}function Ax(e,n){return yt(e,n)}var Vl=null,os=null,yf=!1,Xl=!1,Mf=!1,Ia=0;function Oi(e){e!==os&&e.next===null&&(os===null?Vl=os=e:os=os.next=e),Xl=!0,yf||(yf=!0,Cx())}function vo(e,n){if(!Mf&&Xl){Mf=!0;do for(var a=!1,s=Vl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=c&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lg(s,f))}else f=_t,f=_e(s,s===Xt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Re(s,f)||(a=!0,Lg(s,f));s=s.next}while(a);Mf=!1}}function Rx(){Dg()}function Dg(){Xl=yf=!1;var e=0;Ia!==0&&Ix()&&(e=Ia);for(var n=E(),a=null,s=Vl;s!==null;){var c=s.next,f=Ug(s,n);f===0?(s.next=null,a===null?Vl=c:a.next=c,c===null&&(os=a)):(a=s,(e!==0||(f&3)!==0)&&(Xl=!0)),s=c}dn!==0&&dn!==5||vo(e),Ia!==0&&(Ia=0)}function Ug(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Pe(f),T=1<<_,B=c[_];B===-1?((T&a)===0||(T&s)!==0)&&(c[_]=nt(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xt,a=_t,a=_e(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Lt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Lt(s),Ur(a)){case 2:case 8:a=ve;break;case 32:a=ue;break;case 268435456:a=Ce;break;default:a=ue}return s=Ng.bind(null,e),a=yt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Lt(s),e.callbackPriority=2,e.callbackNode=null,2}function Ng(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var s=_t;return s=_e(e,e===Xt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(hg(e,s,n),Ug(e,E()),e.callbackNode!=null&&e.callbackNode===a?Ng.bind(null,e):null)}function Lg(e,n){if(Gl())return null;hg(e,n,!0)}function Cx(){Hx(function(){(Dt&6)!==0?yt(he,Rx):Dg()})}function Ef(){if(Ia===0){var e=qr;e===0&&(e=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Ia=e}return Ia}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function wx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Og((c[vn]||null).action),_=s.submitter;_&&(n=(n=_[vn]||null)?Og(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new tl("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ia!==0){var B=_?Pg(c,_):new FormData(c);Vu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=_?Pg(c,_):new FormData(c),Vu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var bf=0;bf<ru.length;bf++){var Tf=ru[bf],Dx=Tf.toLowerCase(),Ux=Tf[0].toUpperCase()+Tf.slice(1);Mi(Dx,"on"+Ux)}Mi(dp,"onAnimationEnd"),Mi(hp,"onAnimationIteration"),Mi(pp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Yv,"onTransitionRun"),Mi(jv,"onTransitionStart"),Mi(Zv,"onTransitionCancel"),Mi(mp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function zg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var T=s[_],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=J;try{f(c)}catch(de){al(de)}c.currentTarget=null,f=B}else for(_=0;_<s.length;_++){if(T=s[_],B=T.instance,J=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=J;try{f(c)}catch(de){al(de)}c.currentTarget=null,f=B}}}}function mt(e,n){var a=n[Nr];a===void 0&&(a=n[Nr]=new Set);var s=e+"__bubble";a.has(s)||(Fg(n,e,2,!1),a.add(s))}function Af(e,n,a){var s=0;n&&(s|=4),Fg(a,e,s,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Rf(e){if(!e[kl]){e[kl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Nx.has(a)||Af(a,!1,e),Af(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Af("selectionchange",!1,n))}}function Fg(e,n,a,s){switch(d0(n)){case 2:var c=sS;break;case 8:c=oS;break;default:c=Vf}a=c.bind(null,n,a,e),c=void 0,!qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Cf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var T=s.stateNode.containerInfo;if(T===c)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;T!==null;){if(_=xa(T),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=f=_;continue e}T=T.parentNode}}s=s.return}Vh(function(){var J=f,de=kc(a),me=[];e:{var te=gp.get(e);if(te!==void 0){var oe=tl,Ve=e;switch(e){case"keypress":if($o(a)===0)break e;case"keydown":case"keyup":oe=Tv;break;case"focusin":Ve="focus",oe=Kc;break;case"focusout":Ve="blur",oe=Kc;break;case"beforeblur":case"afterblur":oe=Kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Cv;break;case dp:case hp:case pp:oe=gv;break;case mp:oe=Dv;break;case"scroll":case"scrollend":oe=fv;break;case"wheel":oe=Nv;break;case"copy":case"cut":case"paste":oe=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Yh;break;case"toggle":case"beforetoggle":oe=Ov}var et=(n&4)!==0,Vt=!et&&(e==="scroll"||e==="scrollend"),j=et?te!==null?te+"Capture":null:te;et=[];for(var X=J,K;X!==null;){var pe=X;if(K=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||K===null||j===null||(pe=Hs(X,j),pe!=null&&et.push(So(X,pe,K))),Vt)break;X=X.return}0<et.length&&(te=new oe(te,Ve,null,a,de),me.push({event:te,listeners:et}))}}if((n&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",te&&a!==Xc&&(Ve=a.relatedTarget||a.fromElement)&&(xa(Ve)||Ve[Si]))break e;if((oe||te)&&(te=de.window===de?de:(te=de.ownerDocument)?te.defaultView||te.parentWindow:window,oe?(Ve=a.relatedTarget||a.toElement,oe=J,Ve=Ve?xa(Ve):null,Ve!==null&&(Vt=u(Ve),et=Ve.tag,Ve!==Vt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(oe=null,Ve=J),oe!==Ve)){if(et=Wh,pe="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(et=Yh,pe="onPointerLeave",j="onPointerEnter",X="pointer"),Vt=oe==null?te:tr(oe),K=Ve==null?te:tr(Ve),te=new et(pe,X+"leave",oe,a,de),te.target=Vt,te.relatedTarget=K,pe=null,xa(de)===J&&(et=new et(j,X+"enter",Ve,a,de),et.target=K,et.relatedTarget=Vt,pe=et),Vt=pe,oe&&Ve)t:{for(et=Lx,j=oe,X=Ve,K=0,pe=j;pe;pe=et(pe))K++;pe=0;for(var Qe=X;Qe;Qe=et(Qe))pe++;for(;0<K-pe;)j=et(j),K--;for(;0<pe-K;)X=et(X),pe--;for(;K--;){if(j===X||X!==null&&j===X.alternate){et=j;break t}j=et(j),X=et(X)}et=null}else et=null;oe!==null&&Ig(me,te,oe,et,!1),Ve!==null&&Vt!==null&&Ig(me,Vt,Ve,et,!0)}}e:{if(te=J?tr(J):window,oe=te.nodeName&&te.nodeName.toLowerCase(),oe==="select"||oe==="input"&&te.type==="file")var bt=tp;else if($h(te))if(np)bt=kv;else{bt=Vv;var je=Gv}else oe=te.nodeName,!oe||oe.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?J&&yi(J.elementType)&&(bt=tp):bt=Xv;if(bt&&(bt=bt(e,J))){ep(me,bt,a,de);break e}je&&je(e,te,J),e==="focusout"&&J&&te.type==="number"&&J.memoizedProps.value!=null&&Sn(te,"number",te.value)}switch(je=J?tr(J):window,e){case"focusin":($h(je)||je.contentEditable==="true")&&(Ir=je,nu=J,js=null);break;case"focusout":js=nu=Ir=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,up(me,a,de);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":up(me,a,de)}var ct;if(Jc)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Fr?Qh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(jh&&a.locale!=="ko"&&(Fr||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Fr&&(ct=Xh()):(Ma=de,Yc="value"in Ma?Ma.value:Ma.textContent,Fr=!0)),je=Wl(J,vt),0<je.length&&(vt=new qh(vt,e,null,a,de),me.push({event:vt,listeners:je}),ct?vt.data=ct:(ct=Jh(a),ct!==null&&(vt.data=ct)))),(ct=zv?Fv(e,a):Iv(e,a))&&(vt=Wl(J,"onBeforeInput"),0<vt.length&&(je=new qh("onBeforeInput","beforeinput",null,a,de),me.push({event:je,listeners:vt}),je.data=ct)),wx(me,e,J,a,de)}zg(me,n)})}function So(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hs(e,a),c!=null&&s.unshift(So(e,c,f)),c=Hs(e,n),c!=null&&s.push(So(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Lx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||J===null||(B=J,c?(J=Hs(a,f),J!=null&&_.unshift(So(a,J,B))):c||(J=Hs(a,f),J!=null&&_.push(So(a,J,B)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Ox=/\r\n?/g,Px=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(Ox,`
`).replace(Px,"")}function Hg(e,n){return n=Bg(n),Bg(e)===n}function Gt(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||fn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&fn(e,""+s);break;case"className":Je(e,"class",s);break;case"tabIndex":Je(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(e,a,s);break;case"style":Or(e,s,f);break;case"data":if(n!=="object"){Je(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Qo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Qo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ki);break;case"onScroll":s!=null&&mt("scroll",e);break;case"onScrollEnd":s!=null&&mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":mt("beforetoggle",e),mt("toggle",e),We(e,"popover",s);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":We(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cv.get(a)||a,We(e,a,s))}}function wf(e,n,a,s,c,f){switch(a){case"style":Or(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?fn(e,s):(typeof s=="number"||typeof s=="bigint")&&fn(e,""+s);break;case"onScroll":s!=null&&mt("scroll",e);break;case"onScrollEnd":s!=null&&mt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):We(e,a,s)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",e),mt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,f,_,a,null)}}c&&Gt(e,n,"srcSet",a.srcSet,a,null),s&&Gt(e,n,"src",a.src,a,null);return;case"input":mt("invalid",e);var T=f=_=c=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var de=a[s];if(de!=null)switch(s){case"name":c=de;break;case"type":_=de;break;case"checked":B=de;break;case"defaultChecked":J=de;break;case"value":f=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Gt(e,n,s,de,a,null)}}Xi(e,f,T,B,J,_,c,!1);return;case"select":mt("invalid",e),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":s=T;default:Gt(e,n,c,T,a,null)}n=f,a=_,e.multiple=!!s,n!=null?ii(e,!!s,n,!1):a!=null&&ii(e,!!s,a,!0);return;case"textarea":mt("invalid",e),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Gt(e,n,_,T,a,null)}yn(e,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Gt(e,n,B,s,a,null));return;case"dialog":mt("beforetoggle",e),mt("toggle",e),mt("cancel",e),mt("close",e);break;case"iframe":case"object":mt("load",e);break;case"video":case"audio":for(s=0;s<xo.length;s++)mt(xo[s],e);break;case"image":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"embed":case"source":case"link":mt("error",e),mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,J,s,a,null)}return;default:if(yi(n)){for(de in a)a.hasOwnProperty(de)&&(s=a[de],s!==void 0&&wf(e,n,de,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Gt(e,n,T,s,a,null))}function zx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,T=null,B=null,J=null,de=null;for(oe in a){var me=a[oe];if(a.hasOwnProperty(oe)&&me!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":B=me;default:s.hasOwnProperty(oe)||Gt(e,n,oe,null,s,me)}}for(var te in s){var oe=s[te];if(me=a[te],s.hasOwnProperty(te)&&(oe!=null||me!=null))switch(te){case"type":f=oe;break;case"name":c=oe;break;case"checked":J=oe;break;case"defaultChecked":de=oe;break;case"value":_=oe;break;case"defaultValue":T=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==me&&Gt(e,n,te,oe,s,me)}}xn(e,_,T,B,J,de,f,c);return;case"select":oe=_=T=te=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":oe=B;default:s.hasOwnProperty(f)||Gt(e,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":te=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==B&&Gt(e,n,c,f,s,B)}n=T,a=_,s=oe,te!=null?ii(e,!!a,te,!1):!!s!=!!a&&(n!=null?ii(e,!!a,n,!0):ii(e,!!a,a?[]:"",!1));return;case"textarea":oe=te=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Gt(e,n,T,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":te=c;break;case"defaultValue":oe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Gt(e,n,_,c,s,f)}zt(e,te,oe);return;case"option":for(var Ve in a)te=a[Ve],a.hasOwnProperty(Ve)&&te!=null&&!s.hasOwnProperty(Ve)&&(Ve==="selected"?e.selected=!1:Gt(e,n,Ve,null,s,te));for(B in s)te=s[B],oe=a[B],s.hasOwnProperty(B)&&te!==oe&&(te!=null||oe!=null)&&(B==="selected"?e.selected=te&&typeof te!="function"&&typeof te!="symbol":Gt(e,n,B,te,s,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)te=a[et],a.hasOwnProperty(et)&&te!=null&&!s.hasOwnProperty(et)&&Gt(e,n,et,null,s,te);for(J in s)if(te=s[J],oe=a[J],s.hasOwnProperty(J)&&te!==oe&&(te!=null||oe!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(r(137,n));break;default:Gt(e,n,J,te,s,oe)}return;default:if(yi(n)){for(var Vt in a)te=a[Vt],a.hasOwnProperty(Vt)&&te!==void 0&&!s.hasOwnProperty(Vt)&&wf(e,n,Vt,void 0,s,te);for(de in s)te=s[de],oe=a[de],!s.hasOwnProperty(de)||te===oe||te===void 0&&oe===void 0||wf(e,n,de,te,s,oe);return}}for(var j in a)te=a[j],a.hasOwnProperty(j)&&te!=null&&!s.hasOwnProperty(j)&&Gt(e,n,j,null,s,te);for(me in s)te=s[me],oe=a[me],!s.hasOwnProperty(me)||te===oe||te==null&&oe==null||Gt(e,n,me,te,s,oe)}function Gg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,T=c.duration;if(f&&T&&Gg(_)){for(_=0,T=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],J=B.startTime;if(J>T)break;var de=B.transferSize,me=B.initiatorType;de&&Gg(me)&&(B=B.responseEnd,_+=de*(B<T?1:(T-J)/(B-J)))}if(--s,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Df=null,Uf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Nf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lf=null;function Ix(){var e=window.event;return e&&e.type==="popstate"?e===Lf?!1:(Lf=e,!0):(Lf=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(e){return Wg.resolve(null).then(e).catch(Gx)}:kg;function Gx(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function qg(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),fs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[er]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&yo(e.ownerDocument.body);a=c}while(a);fs(n)}function Yg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Of(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Of(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Vx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[er])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Xx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function jg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Pf(e){return e.data==="$?"||e.data==="$~"}function zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ff=null;function Zg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Qg(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Bs(e)}var fi=new Map,Jg=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=H.d;H.d={f:Wx,r:qx,D:Yx,C:jx,L:Zx,m:Kx,X:Jx,S:Qx,M:$x};function Wx(){var e=sa.f(),n=Il();return e||n}function qx(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?mm(n):sa.r(e)}var ls=typeof document>"u"?null:document;function $g(e,n,a){var s=ls;if(s&&typeof n=="string"&&n){var c=it(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Jg.has(c)||(Jg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",e),R(n),s.head.appendChild(n)))}}function Yx(e){sa.D(e),$g("dns-prefetch",e,null)}function jx(e,n){sa.C(e,n),$g("preconnect",e,n)}function Zx(e,n,a){sa.L(e,n,a);var s=ls;if(s&&e&&n){var c='link[rel="preload"][as="'+it(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+it(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+it(a.imageSizes)+'"]')):c+='[href="'+it(e)+'"]';var f=c;switch(n){case"style":f=cs(e);break;case"script":f=us(e)}fi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Mo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),Rn(n,"link",e),R(n),s.head.appendChild(n)))}}function Kx(e,n){sa.m(e,n);var a=ls;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+it(s)+'"][href="'+it(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(e)}if(!fi.has(f)&&(e=g({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),Rn(s,"link",e),R(s),a.head.appendChild(s)}}}function Qx(e,n,a){sa.S(e,n,a);var s=ls;if(s&&e){var c=ya(s).hoistableStyles,f=cs(e);n=n||"default";var _=c.get(f);if(!_){var T={loading:0,preload:null};if(_=s.querySelector(Mo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&If(e,a);var B=_=s.createElement("link");R(B),Rn(B,"link",e),B._p=new Promise(function(J,de){B.onload=J,B.onerror=de}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,jl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(f,_)}}}function Jx(e,n){sa.X(e,n);var a=ls;if(a&&e){var s=ya(a).hoistableScripts,c=us(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=g({src:e,async:!0},n),(n=fi.get(c))&&Bf(e,n),f=a.createElement("script"),R(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function $x(e,n){sa.M(e,n);var a=ls;if(a&&e){var s=ya(a).hoistableScripts,c=us(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Bf(e,n),f=a.createElement("script"),R(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function e0(e,n,a,s){var c=(c=ne.current)?Yl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=ya(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cs(a.href);var f=ya(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(Mo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||eS(c,e,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=ya(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function cs(e){return'href="'+it(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function t0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),R(n),e.head.appendChild(n))}function us(e){return'[src="'+it(e)+'"]'}function Eo(e){return"script[async]"+e}function n0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+it(a.href)+'"]');if(s)return n.instance=s,R(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),R(s),Rn(s,"style",c),jl(s,a.precedence,e),n.instance=s;case"stylesheet":c=cs(a.href);var f=e.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,R(f),f;s=t0(a),(c=fi.get(c))&&If(s,c),f=(e.ownerDocument||e).createElement("link"),R(f);var _=f;return _._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),Rn(f,"link",s),n.state.loading|=4,jl(f,a.precedence,e),n.instance=f;case"script":return f=us(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,R(c),c):(s=a,(c=fi.get(f))&&(s=g({},a),Bf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),R(c),Rn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,jl(s,a.precedence,e));return n.instance}function jl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var T=s[_];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function If(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function i0(e,n,a){if(Zl===null){var s=new Map,c=Zl=new Map;c.set(a,s)}else c=Zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[er]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var T=s.get(_);T?T.push(f):s.set(_,[f])}}return s}function a0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function tS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=cs(s.href),f=n.querySelector(Mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,s=t0(s),(c=fi.get(c))&&If(s,c),f=f.createElement("link"),R(f);var _=f;_._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),Rn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hf=0;function iS(e,n){return e.stylesheets&&e.count===0&&Jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Hf===0&&(Hf=62500*Fx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Hf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function Jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach(aS,e),Ql=null,Kl.call(e))}function aS(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var s=a.get(null);else{a=new Map,Ql.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:N,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function rS(e,n,a,s,c,f,_,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function s0(e,n,a,s,c,f,_,T,B,J,de,me){return e=new rS(e,n,a,_,B,J,de,me,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=vu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Mu(f),e}function o0(e){return e?(e=Gr,e):Gr}function l0(e,n,a,s,c,f){c=o0(c),s.context===null?s.context=c:s.pendingContext=c,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=wa(e,s,n),a!==null&&(Vn(a,e,n),to(a,e,n))}function c0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Gf(e,n){c0(e,n),(e=e.alternate)&&c0(e,n)}function u0(e){if(e.tag===13||e.tag===31){var n=rr(e,67108864);n!==null&&Vn(n,e,67108864),Gf(e,67108864)}}function f0(e){if(e.tag===13||e.tag===31){var n=$n();n=zs(n);var a=rr(e,n);a!==null&&Vn(a,e,n),Gf(e,n)}}var $l=!0;function sS(e,n,a,s){var c=I.T;I.T=null;var f=H.p;try{H.p=2,Vf(e,n,a,s)}finally{H.p=f,I.T=c}}function oS(e,n,a,s){var c=I.T;I.T=null;var f=H.p;try{H.p=8,Vf(e,n,a,s)}finally{H.p=f,I.T=c}}function Vf(e,n,a,s){if($l){var c=Xf(s);if(c===null)Cf(e,n,s,ec,a),h0(e,s);else if(cS(c,e,n,a,s))s.stopPropagation();else if(h0(e,s),n&4&&-1<lS.indexOf(e)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Se(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var B=1<<31-Pe(_);T.entanglements[1]|=B,_&=~B}Oi(f),(Dt&6)===0&&(zl=E()+500,vo(0))}}break;case 31:case 13:T=rr(f,2),T!==null&&Vn(T,f,2),Il(),Gf(f,2)}if(f=Xf(s),f===null&&Cf(e,n,s,ec,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Cf(e,n,s,null,a)}}function Xf(e){return e=kc(e),kf(e)}var ec=null;function kf(e){if(ec=null,e=xa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ec=e,null}function d0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case he:return 2;case ve:return 8;case ue:case Ze:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Wf=!1,Ha=null,Ga=null,Va=null,To=new Map,Ao=new Map,Xa=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h0(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&u0(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function cS(e,n,a,s,c){switch(n){case"focusin":return Ha=Ro(Ha,e,n,a,s,c),!0;case"dragenter":return Ga=Ro(Ga,e,n,a,s,c),!0;case"mouseover":return Va=Ro(Va,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ro(To.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,e,n,a,s,c)),!0}return!1}function p0(e){var n=xa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Di(e.priority,function(){f0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Di(e.priority,function(){f0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Xc=s,a.target.dispatchEvent(s),Xc=null}else return n=Sa(a),n!==null&&u0(n),e.blockedOn=a,!1;n.shift()}return!0}function m0(e,n,a){tc(e)&&a.delete(n)}function uS(){Wf=!1,Ha!==null&&tc(Ha)&&(Ha=null),Ga!==null&&tc(Ga)&&(Ga=null),Va!==null&&tc(Va)&&(Va=null),To.forEach(m0),Ao.forEach(m0)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,uS)))}var ic=null;function g0(e){ic!==e&&(ic=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(kf(s||a)===null)continue;break}var f=Sa(a);f!==null&&(e.splice(n,3),n-=3,Vu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function fs(e){function n(B){return nc(B,e)}Ha!==null&&nc(Ha,e),Ga!==null&&nc(Ga,e),Va!==null&&nc(Va,e),To.forEach(n),Ao.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)p0(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[vn]||null;if(typeof f=="function")_||g0(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[vn]||null)T=_.formAction;else if(kf(c)!==null)continue}else T=_.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),g0(a)}}}function _0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function qf(e){this._internalRoot=e}ac.prototype.render=qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();l0(a,s,e,n,null,null)},ac.prototype.unmount=qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l0(e.current,2,null,e,null,null),Il(),n[Si]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&p0(e)}};var v0=t.version;if(v0!=="19.2.4")throw Error(r(527,v0,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var fS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Me=rc.inject(fS),be=rc}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Tm,f=Am,_=Rm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=s0(e,1,!1,null,null,a,s,null,c,f,_,_0),e[Si]=n.current,Rf(e),new qf(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Tm,_=Am,T=Rm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=s0(e,1,!0,n,a??null,s,c,B,f,_,T,_0),n.context=o0(null),a=n.current,s=$n(),s=zs(s),c=Ca(s),c.callback=null,wa(a,c,s),a=s,n.current.lanes=a,wn(n,a),Oi(n),e[Si]=n.current,Rf(e),new ac(n)},wo.version="19.2.4",wo}var C0;function yS(){if(C0)return Zf.exports;C0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zf.exports=SS(),Zf.exports}var MS=yS();const Rh="182",ES=0,w0=1,bS=2,wc=1,TS=2,Fo=3,$a=0,kn=1,da=2,pa=0,As=1,Dd=2,D0=3,U0=4,AS=5,Tr=100,RS=101,CS=102,wS=103,DS=104,US=200,NS=201,LS=202,OS=203,Ud=204,Nd=205,PS=206,zS=207,FS=208,IS=209,BS=210,HS=211,GS=212,VS=213,XS=214,Ld=0,Od=1,Pd=2,Cs=3,zd=4,Fd=5,Id=6,Bd=7,R_=0,kS=1,WS=2,Bi=0,C_=1,w_=2,D_=3,U_=4,N_=5,L_=6,O_=7,P_=300,wr=301,ws=302,Hd=303,Gd=304,Ic=306,Vd=1e3,ha=1001,Xd=1002,Cn=1003,qS=1004,sc=1005,Ln=1006,$f=1007,Rr=1008,gi=1009,z_=1010,F_=1011,Ho=1012,Ch=1013,Gi=1014,Fi=1015,ga=1016,wh=1017,Dh=1018,Go=1020,I_=35902,B_=35899,H_=1021,G_=1022,wi=1023,_a=1026,Cr=1027,V_=1028,Uh=1029,Ds=1030,Nh=1031,Lh=1033,Dc=33776,Uc=33777,Nc=33778,Lc=33779,kd=35840,Wd=35841,qd=35842,Yd=35843,jd=36196,Zd=37492,Kd=37496,Qd=37488,Jd=37489,$d=37490,eh=37491,th=37808,nh=37809,ih=37810,ah=37811,rh=37812,sh=37813,oh=37814,lh=37815,ch=37816,uh=37817,fh=37818,dh=37819,hh=37820,ph=37821,mh=36492,gh=36494,_h=36495,vh=36283,xh=36284,Sh=36285,yh=36286,YS=3200,jS=0,ZS=1,Qa="",hi="srgb",Us="srgb-linear",Pc="linear",Bt="srgb",ds=7680,N0=519,KS=512,QS=513,JS=514,Oh=515,$S=516,ey=517,Ph=518,ty=519,L0=35044,O0="300 es",Ii=2e3,zc=2001;function X_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ny(){const o=Fc("canvas");return o.style.display="block",o}const P0={};function z0(...o){const t="THREE."+o.shift();console.log(t,...o)}function rt(...o){const t="THREE."+o.shift();console.warn(t,...o)}function At(...o){const t="THREE."+o.shift();console.error(t,...o)}function Vo(...o){const t=o.join(" ");t in P0||(P0[t]=!0,rt(...o))}function iy(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,Mh=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function ay(o,t){return(o%t+t)%t}function td(o,t,i){return(1-i)*o+i*t}function Do(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,i=0){Nt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],S=u[d+0],M=u[d+1],b=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(h>=1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=C;return}if(g!==C||m!==S||p!==M||v!==b){let y=m*S+p*M+v*b+g*C;y<0&&(S=-S,M=-M,b=-b,C=-C,y=-y);let x=1-h;if(y<.9995){const D=Math.acos(y),N=Math.sin(D);x=Math.sin(x*D)/N,h=Math.sin(h*D)/N,m=m*x+S*h,p=p*x+M*h,v=v*x+b*h,g=g*x+C*h}else{m=m*x+S*h,p=p*x+M*h,v=v*x+b*h,g=g*x+C*h;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=u[d],S=u[d+1],M=u[d+2],b=u[d+3];return t[i]=h*b+v*g+m*M-p*S,t[i+1]=m*b+v*S+p*g-h*M,t[i+2]=p*b+v*M+h*S-m*g,t[i+3]=v*b-h*g-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(u/2),S=m(r/2),M=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=S*v*g+p*M*b,this._y=p*M*g-S*v*b,this._z=p*v*b+S*M*g,this._w=p*v*g-S*M*b;break;case"YXZ":this._x=S*v*g+p*M*b,this._y=p*M*g-S*v*b,this._z=p*v*b-S*M*g,this._w=p*v*g+S*M*b;break;case"ZXY":this._x=S*v*g-p*M*b,this._y=p*M*g+S*v*b,this._z=p*v*b+S*M*g,this._w=p*v*g-S*M*b;break;case"ZYX":this._x=S*v*g-p*M*b,this._y=p*M*g+S*v*b,this._z=p*v*b-S*M*g,this._w=p*v*g+S*M*b;break;case"YZX":this._x=S*v*g+p*M*b,this._y=p*M*g+S*v*b,this._z=p*v*b-S*M*g,this._w=p*v*g-S*M*b;break;case"XZY":this._x=S*v*g-p*M*b,this._y=p*M*g-S*v*b,this._z=p*v*b+S*M*g,this._w=p*v*g+S*M*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=r+h+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(F0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(F0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),v=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*v,this.y=r+m*v+h*p-u*g,this.z=l+m*g+u*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return nd.copy(this).projectOnVector(t),this.sub(nd)}reflect(t){return this.sub(nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new Q,F0=new Wo;class ut{constructor(t,i,r,l,u,d,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],S=r[2],M=r[5],b=r[8],C=l[0],y=l[3],x=l[6],D=l[1],N=l[4],U=l[7],z=l[2],F=l[5],P=l[8];return u[0]=d*C+h*D+m*z,u[3]=d*y+h*N+m*F,u[6]=d*x+h*U+m*P,u[1]=p*C+v*D+g*z,u[4]=p*y+v*N+g*F,u[7]=p*x+v*U+g*P,u[2]=S*C+M*D+b*z,u[5]=S*y+M*N+b*F,u[8]=S*x+M*U+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*d-h*p,S=h*m-v*u,M=p*u-d*m,b=i*g+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=g*C,t[1]=(l*p-v*r)*C,t[2]=(h*r-l*d)*C,t[3]=S*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=M*C,t[7]=(r*m-p*i)*C,t[8]=(d*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(id.makeScale(t,i)),this}rotate(t){return this.premultiply(id.makeRotation(-t)),this}translate(t,i){return this.premultiply(id.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const id=new ut,I0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ry(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Bt&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Pc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:t,whitePoint:r,transfer:Pc,toXYZ:I0,fromXYZ:B0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:Bt,toXYZ:I0,fromXYZ:B0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Et=ry();function ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hs;class sy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=Fc("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ma(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:t.width,height:t.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oy=0;class zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ad(l[d].image)):u.push(ad(l[d]))}else u=ad(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function ad(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?sy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let ly=0;const rd=new Q;class zn extends Ls{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ha,l=ha,u=Ln,d=Rr,h=wi,m=gi,p=zn.DEFAULT_ANISOTROPY,v=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=ko(),this.name="",this.source=new zh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==P_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vd:t.x=t.x-Math.floor(t.x);break;case ha:t.x=t.x<0?0:1;break;case Xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vd:t.y=t.y-Math.floor(t.y);break;case ha:t.y=t.y<0?0:1;break;case Xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=P_;zn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],v=m[4],g=m[8],S=m[1],M=m[5],b=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+C)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(M+1)/2,z=(x+1)/2,F=(v+S)/4,P=(g+C)/4,W=(b+y)/4;return N>U&&N>z?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=F/r,u=P/r):U>z?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=F/l,u=W/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=P/u,l=W/u),this.set(r,l,u,i),this}let D=Math.sqrt((y-b)*(y-b)+(g-C)*(g-C)+(S-v)*(S-v));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(g-C)/D,this.z=(S-v)/D,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cy extends Ls{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new zn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends cy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class k_ extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uy extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ti):Ti.fromBufferAttribute(u,d),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),lc.subVectors(this.max,Uo),ps.subVectors(t.a,Uo),ms.subVectors(t.b,Uo),gs.subVectors(t.c,Uo),Wa.subVectors(ms,ps),qa.subVectors(gs,ms),vr.subVectors(ps,gs);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vr.z,vr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vr.z,0,-vr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vr.y,vr.x,0];return!sd(i,ps,ms,gs,lc)||(i=[1,0,0,0,1,0,0,0,1],!sd(i,ps,ms,gs,lc))?!1:(cc.crossVectors(Wa,qa),i=[cc.x,cc.y,cc.z],sd(i,ps,ms,gs,lc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ti=new Q,oc=new qo,ps=new Q,ms=new Q,gs=new Q,Wa=new Q,qa=new Q,vr=new Q,Uo=new Q,lc=new Q,cc=new Q,xr=new Q;function sd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){xr.fromArray(o,u);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),v=r.dot(xr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const fy=new qo,No=new Q,od=new Q;class Bc{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):fy.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(od.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(od)),this.expandByPoint(No.copy(t.center).sub(od))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new Q,ld=new Q,uc=new Q,Ya=new Q,cd=new Q,fc=new Q,ud=new Q;class W_{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=la.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ld.copy(t).add(i).multiplyScalar(.5),uc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(ld);const u=t.distanceTo(i)*.5,d=-this.direction.dot(uc),h=Ya.dot(this.direction),m=-Ya.dot(uc),p=Ya.lengthSq(),v=Math.abs(1-d*d);let g,S,M,b;if(v>0)if(g=d*m-h,S=d*h-m,b=u*v,g>=0)if(S>=-b)if(S<=b){const C=1/v;g*=C,S*=C,M=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ld).addScaledVector(uc,S),M}intersectSphere(t,i){la.subVectors(t.center,this.origin);const r=la.dot(this.direction),l=la.dot(la)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(u=(t.min.y-S.y)*v,d=(t.max.y-S.y)*v):(u=(t.max.y-S.y)*v,d=(t.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(h=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,i,r,l,u){cd.subVectors(i,t),fc.subVectors(r,t),ud.crossVectors(cd,fc);let d=this.direction.dot(ud),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,t);const m=h*this.direction.dot(fc.crossVectors(Ya,fc));if(m<0)return null;const p=h*this.direction.dot(cd.cross(Ya));if(p<0||m+p>d)return null;const v=-h*Ya.dot(ud);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,r,l,u,d,h,m,p,v,g,S,M,b,C,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,v,g,S,M,b,C,y)}set(t,i,r,l,u,d,h,m,p,v,g,S,M,b,C,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=S,x[3]=M,x[7]=b,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),u=1/_s.setFromMatrixColumn(t,1).length(),d=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=d*v,M=d*g,b=h*v,C=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=b+M*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*v,M=m*g,b=p*v,C=p*g;i[0]=S+C*h,i[4]=b*h-M,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=M*h-b,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*v,M=m*g,b=p*v,C=p*g;i[0]=S-C*h,i[4]=-d*g,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*v,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*v,M=d*g,b=h*v,C=h*g;i[0]=m*v,i[4]=b*p-M,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,M=d*p,b=h*m,C=h*p;i[0]=m*v,i[4]=C-S*g,i[8]=b*g+M,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*g+b,i[10]=S-C*g}else if(t.order==="XZY"){const S=d*m,M=d*p,b=h*m,C=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+C,i[5]=d*v,i[9]=M*g-b,i[2]=b*g-M,i[6]=h*v,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dy,t,hy)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ja.crossVectors(r,ei),ja.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ja.crossVectors(r,ei)),ja.normalize(),dc.crossVectors(ei,ja),l[0]=ja.x,l[4]=dc.x,l[8]=ei.x,l[1]=ja.y,l[5]=dc.y,l[9]=ei.y,l[2]=ja.z,l[6]=dc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],S=r[9],M=r[13],b=r[2],C=r[6],y=r[10],x=r[14],D=r[3],N=r[7],U=r[11],z=r[15],F=l[0],P=l[4],W=l[8],A=l[12],w=l[1],V=l[5],$=l[9],re=l[13],ce=l[2],le=l[6],I=l[10],H=l[14],ae=l[3],ye=l[7],xe=l[11],O=l[15];return u[0]=d*F+h*w+m*ce+p*ae,u[4]=d*P+h*V+m*le+p*ye,u[8]=d*W+h*$+m*I+p*xe,u[12]=d*A+h*re+m*H+p*O,u[1]=v*F+g*w+S*ce+M*ae,u[5]=v*P+g*V+S*le+M*ye,u[9]=v*W+g*$+S*I+M*xe,u[13]=v*A+g*re+S*H+M*O,u[2]=b*F+C*w+y*ce+x*ae,u[6]=b*P+C*V+y*le+x*ye,u[10]=b*W+C*$+y*I+x*xe,u[14]=b*A+C*re+y*H+x*O,u[3]=D*F+N*w+U*ce+z*ae,u[7]=D*P+N*V+U*le+z*ye,u[11]=D*W+N*$+U*I+z*xe,u[15]=D*A+N*re+U*H+z*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],S=t[10],M=t[14],b=t[3],C=t[7],y=t[11],x=t[15],D=m*M-p*S,N=h*M-p*g,U=h*S-m*g,z=d*M-p*v,F=d*S-m*v,P=d*g-h*v;return i*(C*D-y*N+x*U)-r*(b*D-y*z+x*F)+l*(b*N-C*z+x*P)-u*(b*U-C*F+y*P)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],S=t[10],M=t[11],b=t[12],C=t[13],y=t[14],x=t[15],D=g*y*p-C*S*p+C*m*M-h*y*M-g*m*x+h*S*x,N=b*S*p-v*y*p-b*m*M+d*y*M+v*m*x-d*S*x,U=v*C*p-b*g*p+b*h*M-d*C*M-v*h*x+d*g*x,z=b*g*m-v*C*m-b*h*S+d*C*S+v*h*y-d*g*y,F=i*D+r*N+l*U+u*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return t[0]=D*P,t[1]=(C*S*u-g*y*u-C*l*M+r*y*M+g*l*x-r*S*x)*P,t[2]=(h*y*u-C*m*u+C*l*p-r*y*p-h*l*x+r*m*x)*P,t[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*M-r*m*M)*P,t[4]=N*P,t[5]=(v*y*u-b*S*u+b*l*M-i*y*M-v*l*x+i*S*x)*P,t[6]=(b*m*u-d*y*u-b*l*p+i*y*p+d*l*x-i*m*x)*P,t[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*M+i*m*M)*P,t[8]=U*P,t[9]=(b*g*u-v*C*u-b*r*M+i*C*M+v*r*x-i*g*x)*P,t[10]=(d*C*u-b*h*u+b*r*p-i*C*p-d*r*x+i*h*x)*P,t[11]=(v*h*u-d*g*u-v*r*p+i*g*p+d*r*M-i*h*M)*P,t[12]=z*P,t[13]=(v*C*l-b*g*l+b*r*S-i*C*S-v*r*y+i*g*y)*P,t[14]=(b*h*l-d*C*l-b*r*m+i*C*m+d*r*y-i*h*y)*P,t[15]=(d*g*l-v*h*l+v*r*m-i*g*m-d*r*S+i*h*S)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,g=h+h,S=u*p,M=u*v,b=u*g,C=d*v,y=d*g,x=h*g,D=m*p,N=m*v,U=m*g,z=r.x,F=r.y,P=r.z;return l[0]=(1-(C+x))*z,l[1]=(M+U)*z,l[2]=(b-N)*z,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(S+x))*F,l[6]=(y+D)*F,l[7]=0,l[8]=(b+N)*P,l[9]=(y-D)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=_s.set(l[0],l[1],l[2]).length();const d=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ai.copy(this);const p=1/u,v=1/d,g=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,v=2*u/(i-t),g=2*u/(r-l),S=(i+t)/(i-t),M=(r+l)/(r-l);let b,C;if(m)b=u/(d-u),C=d*u/(d-u);else if(h===Ii)b=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===zc)b=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),S=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,C;if(m)b=1/(d-u),C=d/(d-u);else if(h===Ii)b=-2/(d-u),C=-(d+u)/(d-u);else if(h===zc)b=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new Q,Ai=new an,dy=new Q(0,0,0),hy=new Q(1,1,1),ja=new Q,dc=new Q,ei=new Q,H0=new an,G0=new Wo;class va{constructor(t=0,i=0,r=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return H0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(H0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return G0.setFromEuler(this),this.setFromQuaternion(G0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let py=0;const V0=new Q,vs=new Wo,ca=new an,hc=new Q,Lo=new Q,my=new Q,gy=new Wo,X0=new Q(1,0,0),k0=new Q(0,1,0),W0=new Q(0,0,1),q0={type:"added"},_y={type:"removed"},xs={type:"childadded",child:null},fd={type:"childremoved",child:null};class Wn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new Q,i=new va,r=new Wo,l=new Q(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ut}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(X0,t)}rotateY(t){return this.rotateOnAxis(k0,t)}rotateZ(t){return this.rotateOnAxis(W0,t)}translateOnAxis(t,i){return V0.copy(t).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(X0,t)}translateY(t){return this.translateOnAxis(k0,t)}translateZ(t){return this.translateOnAxis(W0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hc.copy(t):hc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Lo,hc,this.up):ca.lookAt(hc,Lo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ca),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(At("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(q0),xs.child=t,this.dispatchEvent(xs),xs.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_y),fd.child=t,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(q0),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,my),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,gy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),g=d(t.shapes),S=d(t.skeletons),M=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new Q(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new Q,ua=new Q,dd=new Q,fa=new Q,Ss=new Q,ys=new Q,Y0=new Q,hd=new Q,pd=new Q,md=new Q,gd=new nn,_d=new nn,vd=new nn;class Ci{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ri.subVectors(t,i),l.cross(Ri);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ri.subVectors(l,i),ua.subVectors(r,i),dd.subVectors(t,i);const d=Ri.dot(Ri),h=Ri.dot(ua),m=Ri.dot(dd),p=ua.dot(ua),v=ua.dot(dd),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-h*v)*S,b=(d*v-h*m)*S;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(d,fa.y),m.addScaledVector(h,fa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return gd.setScalar(0),_d.setScalar(0),vd.setScalar(0),gd.fromBufferAttribute(t,i),_d.fromBufferAttribute(t,r),vd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(gd,u.x),d.addScaledVector(_d,u.y),d.addScaledVector(vd,u.z),d}static isFrontFacing(t,i,r,l){return Ri.subVectors(r,i),ua.subVectors(t,i),Ri.cross(ua).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ri.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ci.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;Ss.subVectors(l,r),ys.subVectors(u,r),hd.subVectors(t,r);const m=Ss.dot(hd),p=ys.dot(hd);if(m<=0&&p<=0)return i.copy(r);pd.subVectors(t,l);const v=Ss.dot(pd),g=ys.dot(pd);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(Ss,d);md.subVectors(t,u);const M=Ss.dot(md),b=ys.dot(md);if(b>=0&&M<=b)return i.copy(u);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(ys,h);const y=v*b-M*g;if(y<=0&&g-v>=0&&M-b>=0)return Y0.subVectors(u,l),h=(g-v)/(g-v+(M-b)),i.copy(l).addScaledVector(Y0,h);const x=1/(y+C+S);return d=C*x,h=S*x,i.copy(r).addScaledVector(Ss,d).addScaledVector(ys,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},pc={h:0,s:0,l:0};function xd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ut{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Et.workingColorSpace){return this.r=t,this.g=i,this.b=r,Et.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Et.workingColorSpace){if(t=ay(t,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=xd(d,u,t+1/3),this.g=xd(d,u,t),this.b=xd(d,u,t-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:rt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=Y_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Et.workingToColorSpace(Nn.copy(this),t),Math.round(St(Nn.r*255,0,255))*65536+Math.round(St(Nn.g*255,0,255))*256+Math.round(St(Nn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Et.workingColorSpace){Et.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Et.workingColorSpace){return Et.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=hi){Et.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(pc);const r=td(Za.h,pc.h,i),l=td(Za.s,pc.s,i),u=td(Za.l,pc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ut;Ut.NAMES=Y_;let vy=0;class Yo extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=As,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Nd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ud&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bo extends Yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new Q,mc=new Nt;let xy=0;class _i{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=L0,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(t),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==L0&&(t.usage=this.usage),t}}class j_ extends _i{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Z_ extends _i{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class _n extends _i{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Sy=0;const di=new an,Sd=new Wn,Ms=new Q,ti=new qo,Oo=new qo,gn=new Q;class qn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(X_(t)?Z_:j_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Sd.lookAt(t),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _n(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ti.min,Oo.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Oo.max),ti.expandByPoint(gn)):(ti.expandByPoint(Oo.min),ti.expandByPoint(Oo.max))}ti.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)gn.fromBufferAttribute(h,p),m&&(Ms.fromBufferAttribute(t,p),gn.add(Ms)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new Q,m[W]=new Q;const p=new Q,v=new Q,g=new Q,S=new Nt,M=new Nt,b=new Nt,C=new Q,y=new Q;function x(W,A,w){p.fromBufferAttribute(r,W),v.fromBufferAttribute(r,A),g.fromBufferAttribute(r,w),S.fromBufferAttribute(u,W),M.fromBufferAttribute(u,A),b.fromBufferAttribute(u,w),v.sub(p),g.sub(p),M.sub(S),b.sub(S);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(V),h[W].add(C),h[A].add(C),h[w].add(C),m[W].add(y),m[A].add(y),m[w].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let W=0,A=D.length;W<A;++W){const w=D[W],V=w.start,$=w.count;for(let re=V,ce=V+$;re<ce;re+=3)x(t.getX(re+0),t.getX(re+1),t.getX(re+2))}const N=new Q,U=new Q,z=new Q,F=new Q;function P(W){z.fromBufferAttribute(l,W),F.copy(z);const A=h[W];N.copy(A),N.sub(z.multiplyScalar(z.dot(A))).normalize(),U.crossVectors(F,A);const V=U.dot(m[W])<0?-1:1;d.setXYZW(W,N.x,N.y,N.z,V)}for(let W=0,A=D.length;W<A;++W){const w=D[W],V=w.start,$=w.count;for(let re=V,ce=V+$;re<ce;re+=3)P(t.getX(re+0)),P(t.getX(re+1)),P(t.getX(re+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new Q,u=new Q,d=new Q,h=new Q,m=new Q,p=new Q,v=new Q,g=new Q;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,S=new p.constructor(m.length*v);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*v;for(let x=0;x<v;x++)S[b++]=p[M++]}return new _i(S,v,g)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,g=p.length;v<g;v++){const S=p[v],M=t(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],g=u[p];for(let S=0,M=g.length;S<M;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j0=new an,Sr=new W_,gc=new Bc,Z0=new Q,_c=new Q,vc=new Q,xc=new Q,yd=new Q,Sc=new Q,K0=new Q,yc=new Q;class vi extends Wn{constructor(t=new qn,i=new Bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],g=u[m];v!==0&&(yd.fromBufferAttribute(g,t),d?Sc.addScaledVector(yd,v):Sc.addScaledVector(yd.sub(i),v))}i.add(Sc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(u),Sr.copy(t.ray).recast(t.near),!(gc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(gc,Z0)===null||Sr.origin.distanceToSquared(Z0)>(t.far-t.near)**2))&&(j0.copy(u).invert(),Sr.copy(t.ray).applyMatrix4(j0),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Sr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,C=S.length;b<C;b++){const y=S[b],x=d[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let U=D,z=N;U<z;U+=3){const F=h.getX(U),P=h.getX(U+1),W=h.getX(U+2);l=Mc(this,x,t,r,p,v,g,F,P,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=b,x=C;y<x;y+=3){const D=h.getX(y),N=h.getX(y+1),U=h.getX(y+2);l=Mc(this,d,t,r,p,v,g,D,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,C=S.length;b<C;b++){const y=S[b],x=d[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=D,z=N;U<z;U+=3){const F=U,P=U+1,W=U+2;l=Mc(this,x,t,r,p,v,g,F,P,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,x=C;y<x;y+=3){const D=y,N=y+1,U=y+2;l=Mc(this,d,t,r,p,v,g,D,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function yy(o,t,i,r,l,u,d,h){let m;if(t.side===kn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===$a,h),m===null)return null;yc.copy(h),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function Mc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,_c),o.getVertexPosition(m,vc),o.getVertexPosition(p,xc);const v=yy(o,t,i,r,_c,vc,xc,K0);if(v){const g=new Q;Ci.getBarycoord(K0,_c,vc,xc,g),l&&(v.uv=Ci.getInterpolatedAttribute(l,h,m,p,g,new Nt)),u&&(v.uv1=Ci.getInterpolatedAttribute(u,h,m,p,g,new Nt)),d&&(v.normal=Ci.getInterpolatedAttribute(d,h,m,p,g,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new Q,materialIndex:0};Ci.getNormal(_c,vc,xc,S.normal),v.face=S,v.barycoord=g}return v}class jo extends qn{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,t,d,u,0),b("z","y","x",1,-1,r,i,-t,d,u,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(g,2));function b(C,y,x,D,N,U,z,F,P,W,A){const w=U/P,V=z/W,$=U/2,re=z/2,ce=F/2,le=P+1,I=W+1;let H=0,ae=0;const ye=new Q;for(let xe=0;xe<I;xe++){const O=xe*V-re;for(let ie=0;ie<le;ie++){const ge=ie*w-$;ye[C]=ge*D,ye[y]=O*N,ye[x]=ce,p.push(ye.x,ye.y,ye.z),ye[C]=0,ye[y]=0,ye[x]=F>0?1:-1,v.push(ye.x,ye.y,ye.z),g.push(ie/P),g.push(1-xe/W),H+=1}}for(let xe=0;xe<W;xe++)for(let O=0;O<P;O++){const ie=S+O+le*xe,ge=S+O+le*(xe+1),Ae=S+(O+1)+le*(xe+1),Be=S+(O+1)+le*xe;m.push(ie,ge,Be),m.push(ge,Ae,Be),ae+=6}h.addGroup(M,ae,A),M+=ae,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const r=Ns(o[i]);for(const l in r)t[l]=r[l]}return t}function My(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function K_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Et.workingColorSpace}const Ey={clone:Ns,merge:Pn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=My(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Q_ extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new Q,Q0=new Nt,J0=new Nt;class pi extends Q_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,i){return this.getViewBounds(t,Q0,J0),i.subVectors(J0,Q0)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ed*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,bs=1;class Ay extends Wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Es,bs,t,i);l.layers=this.layers,this.add(l);const u=new pi(Es,bs,t,i);u.layers=this.layers,this.add(u);const d=new pi(Es,bs,t,i);d.layers=this.layers,this.add(d);const h=new pi(Es,bs,t,i);h.layers=this.layers,this.add(h);const m=new pi(Es,bs,t,i);m.layers=this.layers,this.add(m);const p=new pi(Es,bs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,S,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class J_ extends zn{constructor(t=[],i=wr,r,l,u,d,h,m,p,v){super(t,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $_ extends Hi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new J_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:pa});u.uniforms.tEquirect.value=i;const d=new vi(l,u),h=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Ln),new Ay(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Ec extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ry={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ec;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Cy extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wy extends zn{constructor(t=null,i=1,r=1,l,u,d,h,m,p=Cn,v=Cn,g,S){super(null,d,h,m,p,v,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new Q,Dy=new Q,Uy=new ut;class br{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ed.subVectors(r,i).cross(Dy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ed),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Uy.getNormalMatrix(t),l=this.coplanarPoint(Ed).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Bc,Ny=new Nt(.5,.5),bc=new Q;class ev{constructor(t=new br,i=new br,r=new br,l=new br,u=new br,d=new br){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],g=u[5],S=u[6],M=u[7],b=u[8],C=u[9],y=u[10],x=u[11],D=u[12],N=u[13],U=u[14],z=u[15];if(l[0].setComponents(p-d,M-v,x-b,z-D).normalize(),l[1].setComponents(p+d,M+v,x+b,z+D).normalize(),l[2].setComponents(p+h,M+g,x+C,z+N).normalize(),l[3].setComponents(p-h,M-g,x-C,z-N).normalize(),r)l[4].setComponents(m,S,y,U).normalize(),l[5].setComponents(p-m,M-S,x-y,z-U).normalize();else if(l[4].setComponents(p-m,M-S,x-y,z-U).normalize(),i===Ii)l[5].setComponents(p+m,M+S,x+y,z+U).normalize();else if(i===zc)l[5].setComponents(m,S,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const i=Ny.distanceTo(t.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tv extends Yo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $0=new an,Eh=new W_,Tc=new Bc,Ac=new Q;class Ly extends Wn{constructor(t=new qn,i=new tv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=u,t.ray.intersectsSphere(Tc)===!1)return;$0.copy(l).invert(),Eh.copy(t.ray).applyMatrix4($0);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let b=S,C=M;b<C;b++){const y=p.getX(b);Ac.fromBufferAttribute(g,y),e_(Ac,y,m,l,t,i,this)}}else{const S=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let b=S,C=M;b<C;b++)Ac.fromBufferAttribute(g,b),e_(Ac,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function e_(o,t,i,r,l,u,d){const h=Eh.distanceSqToPoint(o);if(h<i){const m=new Q;Eh.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Xo extends zn{constructor(t,i,r=Gi,l,u,d,h=Cn,m=Cn,p,v=_a,g=1){if(v!==_a&&v!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Oy extends Xo{constructor(t,i=Gi,r=wr,l,u,d=Cn,h=Cn,m,p=_a){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,r,l,u,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class nv extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fh extends qn{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const u=[],d=[];h(l),p(r),v(),this.setAttribute("position",new _n(u,3)),this.setAttribute("normal",new _n(u.slice(),3)),this.setAttribute("uv",new _n(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const N=new Q,U=new Q,z=new Q;for(let F=0;F<i.length;F+=3)M(i[F+0],N),M(i[F+1],U),M(i[F+2],z),m(N,U,z,D)}function m(D,N,U,z){const F=z+1,P=[];for(let W=0;W<=F;W++){P[W]=[];const A=D.clone().lerp(U,W/F),w=N.clone().lerp(U,W/F),V=F-W;for(let $=0;$<=V;$++)$===0&&W===F?P[W][$]=A:P[W][$]=A.clone().lerp(w,$/V)}for(let W=0;W<F;W++)for(let A=0;A<2*(F-W)-1;A++){const w=Math.floor(A/2);A%2===0?(S(P[W][w+1]),S(P[W+1][w]),S(P[W][w])):(S(P[W][w+1]),S(P[W+1][w+1]),S(P[W+1][w]))}}function p(D){const N=new Q;for(let U=0;U<u.length;U+=3)N.x=u[U+0],N.y=u[U+1],N.z=u[U+2],N.normalize().multiplyScalar(D),u[U+0]=N.x,u[U+1]=N.y,u[U+2]=N.z}function v(){const D=new Q;for(let N=0;N<u.length;N+=3){D.x=u[N+0],D.y=u[N+1],D.z=u[N+2];const U=y(D)/2/Math.PI+.5,z=x(D)/Math.PI+.5;d.push(U,1-z)}b(),g()}function g(){for(let D=0;D<d.length;D+=6){const N=d[D+0],U=d[D+2],z=d[D+4],F=Math.max(N,U,z),P=Math.min(N,U,z);F>.9&&P<.1&&(N<.2&&(d[D+0]+=1),U<.2&&(d[D+2]+=1),z<.2&&(d[D+4]+=1))}}function S(D){u.push(D.x,D.y,D.z)}function M(D,N){const U=D*3;N.x=t[U+0],N.y=t[U+1],N.z=t[U+2]}function b(){const D=new Q,N=new Q,U=new Q,z=new Q,F=new Nt,P=new Nt,W=new Nt;for(let A=0,w=0;A<u.length;A+=9,w+=6){D.set(u[A+0],u[A+1],u[A+2]),N.set(u[A+3],u[A+4],u[A+5]),U.set(u[A+6],u[A+7],u[A+8]),F.set(d[w+0],d[w+1]),P.set(d[w+2],d[w+3]),W.set(d[w+4],d[w+5]),z.copy(D).add(N).add(U).divideScalar(3);const V=y(z);C(F,w+0,D,V),C(P,w+2,N,V),C(W,w+4,U,V)}}function C(D,N,U,z){z<0&&D.x===1&&(d[N]=D.x-1),U.x===0&&U.z===0&&(d[N]=z/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function x(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.vertices,t.indices,t.radius,t.detail)}}class Ih extends Fh{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Ih(t.radius,t.detail)}}class Hc extends qn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=t/h,S=i/m,M=[],b=[],C=[],y=[];for(let x=0;x<v;x++){const D=x*S-d;for(let N=0;N<p;N++){const U=N*g-u;b.push(U,-D,0),C.push(0,0,1),y.push(N/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<h;D++){const N=D+p*x,U=D+p*(x+1),z=D+1+p*(x+1),F=D+1+p*x;M.push(N,U,F),M.push(U,z,F)}this.setIndex(M),this.setAttribute("position",new _n(b,3)),this.setAttribute("normal",new _n(C,3)),this.setAttribute("uv",new _n(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bh extends qn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const v=[],g=new Q,S=new Q,M=[],b=[],C=[],y=[];for(let x=0;x<=r;x++){const D=[],N=x/r;let U=0;x===0&&d===0?U=.5/i:x===r&&m===Math.PI&&(U=-.5/i);for(let z=0;z<=i;z++){const F=z/i;g.x=-t*Math.cos(l+F*u)*Math.sin(d+N*h),g.y=t*Math.cos(d+N*h),g.z=t*Math.sin(l+F*u)*Math.sin(d+N*h),b.push(g.x,g.y,g.z),S.copy(g).normalize(),C.push(S.x,S.y,S.z),y.push(F+U,1-N),D.push(p++)}v.push(D)}for(let x=0;x<r;x++)for(let D=0;D<i;D++){const N=v[x][D+1],U=v[x][D],z=v[x+1][D],F=v[x+1][D+1];(x!==0||d>0)&&M.push(N,U,F),(x!==r-1||m<Math.PI)&&M.push(U,z,F)}this.setIndex(M),this.setAttribute("position",new _n(b,3)),this.setAttribute("normal",new _n(C,3)),this.setAttribute("uv",new _n(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hh extends qn{constructor(t=1,i=.4,r=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:u},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],m=[],p=[],v=new Q,g=new Q,S=new Q;for(let M=0;M<=r;M++)for(let b=0;b<=l;b++){const C=b/l*u,y=M/r*Math.PI*2;g.x=(t+i*Math.cos(y))*Math.cos(C),g.y=(t+i*Math.cos(y))*Math.sin(C),g.z=i*Math.sin(y),h.push(g.x,g.y,g.z),v.x=t*Math.cos(C),v.y=t*Math.sin(C),S.subVectors(g,v).normalize(),m.push(S.x,S.y,S.z),p.push(b/l),p.push(M/r)}for(let M=1;M<=r;M++)for(let b=1;b<=l;b++){const C=(l+1)*M+b-1,y=(l+1)*(M-1)+b-1,x=(l+1)*(M-1)+b,D=(l+1)*M+b;d.push(C,y,D),d.push(y,x,D)}this.setIndex(d),this.setAttribute("position",new _n(h,3)),this.setAttribute("normal",new _n(m,3)),this.setAttribute("uv",new _n(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Py extends Vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zy extends Yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fy extends Yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class iv extends Q_{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Iy extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function t_(o,t,i,r){const l=By(r);switch(i){case H_:return o*t;case V_:return o*t/l.components*l.byteLength;case Uh:return o*t/l.components*l.byteLength;case Ds:return o*t*2/l.components*l.byteLength;case Nh:return o*t*2/l.components*l.byteLength;case G_:return o*t*3/l.components*l.byteLength;case wi:return o*t*4/l.components*l.byteLength;case Lh:return o*t*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wd:case Yd:return Math.max(o,16)*Math.max(t,8)/4;case kd:case qd:return Math.max(o,8)*Math.max(t,8)/2;case jd:case Zd:case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Kd:case $d:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ah:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case sh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ch:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case hh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case mh:case gh:case _h:return Math.ceil(o/4)*Math.ceil(t/4)*16;case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Sh:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function By(o){switch(o){case gi:case z_:return{byteLength:1,components:1};case Ho:case F_:case ga:return{byteLength:2,components:1};case wh:case Dh:return{byteLength:2,components:4};case Gi:case Ch:case Fi:return{byteLength:4,components:1};case I_:case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);function av(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Hy(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],C=g[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,g[S]=C)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const C=g[M];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$y=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ob=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Gy,alphahash_pars_fragment:Vy,alphamap_fragment:Xy,alphamap_pars_fragment:ky,alphatest_fragment:Wy,alphatest_pars_fragment:qy,aomap_fragment:Yy,aomap_pars_fragment:jy,batching_pars_vertex:Zy,batching_vertex:Ky,begin_vertex:Qy,beginnormal_vertex:Jy,bsdfs:$y,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:oM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:dM,displacementmap_pars_vertex:hM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:vM,envmap_fragment:xM,envmap_common_pars_fragment:SM,envmap_pars_fragment:yM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:LM,envmap_vertex:EM,fog_vertex:bM,fog_pars_vertex:TM,fog_fragment:AM,fog_pars_fragment:RM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:wM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:UM,lights_pars_begin:NM,lights_toon_fragment:OM,lights_toon_pars_fragment:PM,lights_phong_fragment:zM,lights_phong_pars_fragment:FM,lights_physical_fragment:IM,lights_physical_pars_fragment:BM,lights_fragment_begin:HM,lights_fragment_maps:GM,lights_fragment_end:VM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:qM,map_fragment:YM,map_pars_fragment:jM,map_particle_fragment:ZM,map_particle_pars_fragment:KM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:JM,morphinstance_vertex:$M,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:aE,normal_fragment_maps:rE,normal_pars_fragment:sE,normal_pars_vertex:oE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:hE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:_E,dithering_fragment:vE,dithering_pars_fragment:xE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:yE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:bE,shadowmask_pars_fragment:TE,skinbase_vertex:AE,skinning_pars_vertex:RE,skinning_vertex:CE,skinnormal_vertex:wE,specularmap_fragment:DE,specularmap_pars_fragment:UE,tonemapping_fragment:NE,tonemapping_pars_fragment:LE,transmission_fragment:OE,transmission_pars_fragment:PE,uv_pars_fragment:zE,uv_pars_vertex:FE,uv_vertex:IE,worldpos_vertex:BE,background_vert:HE,background_frag:GE,backgroundCube_vert:VE,backgroundCube_frag:XE,cube_vert:kE,cube_frag:WE,depth_vert:qE,depth_frag:YE,distance_vert:jE,distance_frag:ZE,equirect_vert:KE,equirect_frag:QE,linedashed_vert:JE,linedashed_frag:$E,meshbasic_vert:eb,meshbasic_frag:tb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:ab,meshmatcap_frag:rb,meshnormal_vert:sb,meshnormal_frag:ob,meshphong_vert:lb,meshphong_frag:cb,meshphysical_vert:ub,meshphysical_frag:fb,meshtoon_vert:db,meshtoon_frag:hb,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:_b,sprite_vert:vb,sprite_frag:xb},Oe={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},zi={basic:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Pn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Pn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Pn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Pn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Pn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Pn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Pn([Oe.common,Oe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Pn([Oe.lights,Oe.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};zi.physical={uniforms:Pn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Rc={r:0,b:0,g:0},Mr=new va,Sb=new an;function yb(o,t,i,r,l,u,d){const h=new Ut(0);let m=u===!0?0:1,p,v,g=null,S=0,M=null;function b(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function C(N){let U=!1;const z=b(N);z===null?x(h,m):z&&z.isColor&&(x(z,1),U=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,U){const z=b(U);z&&(z.isCubeTexture||z.mapping===Ic)?(v===void 0&&(v=new vi(new jo(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Ns(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Mr.copy(U.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(Mr)),v.material.toneMapped=Et.getTransfer(z.colorSpace)!==Bt,(g!==z||S!==z.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,g=z,S=z.version,M=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new vi(new Hc(2,2),new Vi({name:"BackgroundMaterial",uniforms:Ns(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Et.getTransfer(z.colorSpace)!==Bt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||S!==z.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,S=z.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,U){N.getRGB(Rc,K_(o)),r.buffers.color.setClear(Rc.r,Rc.g,Rc.b,U,d)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,U=1){h.set(N),m=U,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(h,m)},render:C,addToRenderList:y,dispose:D}}function Mb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(w,V,$,re,ce){let le=!1;const I=g(re,$,V);u!==I&&(u=I,p(u.object)),le=M(w,re,$,ce),le&&b(w,re,$,ce),ce!==null&&t.update(ce,o.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,U(w,V,$,re),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function g(w,V,$){const re=$.wireframe===!0;let ce=r[w.id];ce===void 0&&(ce={},r[w.id]=ce);let le=ce[V.id];le===void 0&&(le={},ce[V.id]=le);let I=le[re];return I===void 0&&(I=S(m()),le[re]=I),I}function S(w){const V=[],$=[],re=[];for(let ce=0;ce<i;ce++)V[ce]=0,$[ce]=0,re[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:re,object:w,attributes:{},index:null}}function M(w,V,$,re){const ce=u.attributes,le=V.attributes;let I=0;const H=$.getAttributes();for(const ae in H)if(H[ae].location>=0){const xe=ce[ae];let O=le[ae];if(O===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),xe===void 0||xe.attribute!==O||O&&xe.data!==O.data)return!0;I++}return u.attributesNum!==I||u.index!==re}function b(w,V,$,re){const ce={},le=V.attributes;let I=0;const H=$.getAttributes();for(const ae in H)if(H[ae].location>=0){let xe=le[ae];xe===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor));const O={};O.attribute=xe,xe&&xe.data&&(O.data=xe.data),ce[ae]=O,I++}u.attributes=ce,u.attributesNum=I,u.index=re}function C(){const w=u.newAttributes;for(let V=0,$=w.length;V<$;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const $=u.newAttributes,re=u.enabledAttributes,ce=u.attributeDivisors;$[w]=1,re[w]===0&&(o.enableVertexAttribArray(w),re[w]=1),ce[w]!==V&&(o.vertexAttribDivisor(w,V),ce[w]=V)}function D(){const w=u.newAttributes,V=u.enabledAttributes;for(let $=0,re=V.length;$<re;$++)V[$]!==w[$]&&(o.disableVertexAttribArray($),V[$]=0)}function N(w,V,$,re,ce,le,I){I===!0?o.vertexAttribIPointer(w,V,$,ce,le):o.vertexAttribPointer(w,V,$,re,ce,le)}function U(w,V,$,re){C();const ce=re.attributes,le=$.getAttributes(),I=V.defaultAttributeValues;for(const H in le){const ae=le[H];if(ae.location>=0){let ye=ce[H];if(ye===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ye=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ye=w.instanceColor)),ye!==void 0){const xe=ye.normalized,O=ye.itemSize,ie=t.get(ye);if(ie===void 0)continue;const ge=ie.buffer,Ae=ie.type,Be=ie.bytesPerElement,ne=Ae===o.INT||Ae===o.UNSIGNED_INT||ye.gpuType===Ch;if(ye.isInterleavedBufferAttribute){const fe=ye.data,De=fe.stride,Xe=ye.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<ae.locationSize;He++)x(ae.location+He,fe.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<ae.locationSize;He++)y(ae.location+He);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let He=0;He<ae.locationSize;He++)N(ae.location+He,O/ae.locationSize,Ae,xe,De*Be,(Xe+O/ae.locationSize*He)*Be,ne)}else{if(ye.isInstancedBufferAttribute){for(let fe=0;fe<ae.locationSize;fe++)x(ae.location+fe,ye.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let fe=0;fe<ae.locationSize;fe++)y(ae.location+fe);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let fe=0;fe<ae.locationSize;fe++)N(ae.location+fe,O/ae.locationSize,Ae,xe,O*Be,O/ae.locationSize*fe*Be,ne)}}else if(I!==void 0){const xe=I[H];if(xe!==void 0)switch(xe.length){case 2:o.vertexAttrib2fv(ae.location,xe);break;case 3:o.vertexAttrib3fv(ae.location,xe);break;case 4:o.vertexAttrib4fv(ae.location,xe);break;default:o.vertexAttrib1fv(ae.location,xe)}}}}D()}function z(){W();for(const w in r){const V=r[w];for(const $ in V){const re=V[$];for(const ce in re)v(re[ce].object),delete re[ce];delete V[$]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const $ in V){const re=V[$];for(const ce in re)v(re[ce].object),delete re[ce];delete V[$]}delete r[w.id]}function P(w){for(const V in r){const $=r[V];if($[w.id]===void 0)continue;const re=$[w.id];for(const ce in re)v(re[ce].object),delete re[ce];delete $[w.id]}}function W(){A(),d=!0,u!==l&&(u=l,p(u.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:A,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function Eb(o,t,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];i.update(M,r,1)}function m(p,v,g,S){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)d(p[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,g);let b=0;for(let C=0;C<g;C++)b+=v[C]*S[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function bb(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==wi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const W=P===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==gi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fi&&!W)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:U,maxSamples:z,samples:F}}function Tb(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new br,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!l||b===null||b.length===0||u&&!y)u?v(null):p();else{const D=u?0:r,N=D*4;let U=x.clippingState||null;m.value=U,U=v(b,S,N,M);for(let z=0;z!==N;++z)U[z]=i[z];x.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,S,M,b){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const x=M+C*4,D=S.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let N=0,U=M;N!==C;++N,U+=4)d.copy(g[N]).applyMatrix4(D,h),d.normal.toArray(y,U),y[U+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function Ab(o){let t=new WeakMap;function i(d,h){return h===Hd?d.mapping=wr:h===Gd&&(d.mapping=ws),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Hd||h===Gd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new $_(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ja=4,n_=[.125,.215,.35,.446,.526,.582],Ar=20,Rb=256,Po=new iv,i_=new Ut;let bd=null,Td=0,Ad=0,Rd=!1;const Cb=new Q;class a_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Cb}=u;bd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bd,Td,Ad),this._renderer.xr.enabled=Rd,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===wr||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ga,format:wi,colorSpace:Us,depthBuffer:!1},l=r_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wb(u)),this._blurMaterial=Ub(u,t,i),this._ggxMaterial=Db(u,t,i)}return l}_compileMaterial(t){const i=new vi(new qn,t);this._renderer.compile(i,Po)}_sceneToCubeUV(t,i,r,l,u){const m=new pi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(i_),g.toneMapping=Bi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new jo,new Bo({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,x=!0):(y.color.copy(i_),x=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[N],u.y,u.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[N]));const z=this._cubeSize;Ts(l,U*z,N>2?z:0,z,z),g.setRenderTarget(l),x&&g.render(C,m),g.render(t,m)}g.toneMapping=M,g.autoClear=S,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===wr||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=o_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Ts(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Po)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),S=0+p*1.25,M=g*S,{_lodMax:b}=this,C=this._sizeLods[r],y=3*C*(r>b-Ja?r-b+Ja:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Ts(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(h,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Ts(t,y,x,3*C,2*C),l.setRenderTarget(t),l.render(h,Po)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ar-1),C=u/b,y=isFinite(u)?1+Math.floor(v*C):Ar;y>Ar&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const x=[];let D=0;for(let P=0;P<Ar;++P){const W=P/C,A=Math.exp(-W*W/2);x.push(A),P===0?D+=A:P<y&&(D+=2*A)}for(let P=0;P<x.length;P++)x[P]=x[P]/D;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-r;const U=this._sizeLods[l],z=3*U*(l>N-Ja?l-N+Ja:0),F=4*(this._cubeSize-U);Ts(i,z,F,3*U,2*U),m.setRenderTarget(i),m.render(g,Po)}}function wb(o){const t=[],i=[],r=[];let l=o;const u=o-Ja+1+n_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Ja?m=n_[d-o+Ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,C=3,y=2,x=1,D=new Float32Array(C*b*M),N=new Float32Array(y*b*M),U=new Float32Array(x*b*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,W=F>2?0:-1,A=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];D.set(A,C*b*F),N.set(S,y*b*F);const w=[F,F,F,F,F,F];U.set(w,x*b*F)}const z=new qn;z.setAttribute("position",new _i(D,C)),z.setAttribute("uv",new _i(N,y)),z.setAttribute("faceIndex",new _i(U,x)),r.push(new vi(z,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function r_(o,t,i){const r=new Hi(o,t,i);return r.texture.mapping=Ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ts(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function Db(o,t,i){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Ub(o,t,i){const r=new Float32Array(Ar),l=new Q(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function s_(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function o_(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nb(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Hd||m===Gd,v=m===wr||m===ws;if(p||v){let g=t.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new a_(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new a_(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Lb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Vo("WebGLRenderer: "+r+" extension not supported."),l}}}function Ob(o,t,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,b=g.attributes.position;let C=0;if(M!==null){const D=M.array;C=M.version;for(let N=0,U=D.length;N<U;N+=3){const z=D[N+0],F=D[N+1],P=D[N+2];S.push(z,F,F,P,P,z)}}else if(b!==void 0){const D=b.array;C=b.version;for(let N=0,U=D.length/3-1;N<U;N+=3){const z=N+0,F=N+1,P=N+2;S.push(z,F,F,P,P,z)}}else return;const y=new(X_(S)?Z_:j_)(S,1);y.version=C;const x=u.get(g);x&&t.remove(x),u.set(g,y)}function v(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function Pb(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,S*d,b),i.update(M,r,b))}function v(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];i.update(y,r,1)}function g(S,M,b,C){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,C,0,b);let x=0;for(let D=0;D<b;D++)x+=M[D]*C[D];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function zb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Fb(o,t,i){const r=new WeakMap,l=new nn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let w=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let z=h.attributes.position.count*U,F=1;z>t.maxTextureSize&&(F=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*F*4*g),W=new k_(P,z,F,g);W.type=Fi,W.needsUpdate=!0;const A=U*4;for(let V=0;V<g;V++){const $=x[V],re=D[V],ce=N[V],le=z*F*4*V;for(let I=0;I<$.count;I++){const H=I*A;b===!0&&(l.fromBufferAttribute($,I),P[le+H+0]=l.x,P[le+H+1]=l.y,P[le+H+2]=l.z,P[le+H+3]=0),C===!0&&(l.fromBufferAttribute(re,I),P[le+H+4]=l.x,P[le+H+5]=l.y,P[le+H+6]=l.z,P[le+H+7]=0),y===!0&&(l.fromBufferAttribute(ce,I),P[le+H+8]=l.x,P[le+H+9]=l.y,P[le+H+10]=l.z,P[le+H+11]=ce.itemSize===4?l.w:1)}}S={count:g,texture:W,size:new Nt(z,F)},r.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const C=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function Ib(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Bb={[C_]:"LINEAR_TONE_MAPPING",[w_]:"REINHARD_TONE_MAPPING",[D_]:"CINEON_TONE_MAPPING",[U_]:"ACES_FILMIC_TONE_MAPPING",[L_]:"AGX_TONE_MAPPING",[O_]:"NEUTRAL_TONE_MAPPING",[N_]:"CUSTOM_TONE_MAPPING"};function Hb(o,t,i,r,l){const u=new Hi(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Hi(t,i,{type:ga,depthBuffer:!1,stencilBuffer:!1}),h=new qn;h.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _n([0,2,0,0,2,0],2));const m=new Py({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new vi(h,m),v=new iv(-1,1,1,-1,0,1);let g=null,S=null,M=!1,b,C=null,y=[],x=!1;this.setSize=function(D,N){u.setSize(D,N),d.setSize(D,N);for(let U=0;U<y.length;U++){const z=y[U];z.setSize&&z.setSize(D,N)}},this.setEffects=function(D){y=D,x=y.length>0&&y[0].isRenderPass===!0;const N=u.width,U=u.height;for(let z=0;z<y.length;z++){const F=y[z];F.setSize&&F.setSize(N,U)}},this.begin=function(D,N){if(M||D.toneMapping===Bi&&y.length===0)return!1;if(C=N,N!==null){const U=N.width,z=N.height;(u.width!==U||u.height!==z)&&this.setSize(U,z)}return x===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=Bi,!0},this.hasRenderPass=function(){return x},this.end=function(D,N){D.toneMapping=b,M=!0;let U=u,z=d;for(let F=0;F<y.length;F++){const P=y[F];if(P.enabled!==!1&&(P.render(D,z,U,N),P.needsSwap!==!1)){const W=U;U=z,z=W}}if(g!==D.outputColorSpace||S!==D.toneMapping){g=D.outputColorSpace,S=D.toneMapping,m.defines={},Et.getTransfer(g)===Bt&&(m.defines.SRGB_TRANSFER="");const F=Bb[S];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(C),D.render(p,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const rv=new zn,bh=new Xo(1,1),sv=new k_,ov=new uy,lv=new J_,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),d_=new Float32Array(4);function Os(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=l_[l];if(u===void 0&&(u=new Float32Array(l),l_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Vc(o,t){let i=c_[t];i===void 0&&(i=new Int32Array(t),c_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Gb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Vb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function Xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function Wb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;d_.set(r),o.uniformMatrix2fv(this.addr,!1,d_),pn(i,r)}}function qb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;f_.set(r),o.uniformMatrix3fv(this.addr,!1,f_),pn(i,r)}}function Yb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;u_.set(r),o.uniformMatrix4fv(this.addr,!1,u_),pn(i,r)}}function jb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Zb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function Kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function Qb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function Jb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function $b(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function eT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function tT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function nT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(bh.compareFunction=i.isReversedDepthBuffer()?Ph:Oh,u=bh):u=rv,i.setTexture2D(t||u,l)}function iT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||ov,l)}function aT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||lv,l)}function rT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||sv,l)}function sT(o){switch(o){case 5126:return Gb;case 35664:return Vb;case 35665:return Xb;case 35666:return kb;case 35674:return Wb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return jb;case 35667:case 35671:return Zb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return Jb;case 36294:return $b;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(o,t){o.uniform1fv(this.addr,t)}function lT(o,t){const i=Os(t,this.size,2);o.uniform2fv(this.addr,i)}function cT(o,t){const i=Os(t,this.size,3);o.uniform3fv(this.addr,i)}function uT(o,t){const i=Os(t,this.size,4);o.uniform4fv(this.addr,i)}function fT(o,t){const i=Os(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function dT(o,t){const i=Os(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function hT(o,t){const i=Os(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function pT(o,t){o.uniform1iv(this.addr,t)}function mT(o,t){o.uniform2iv(this.addr,t)}function gT(o,t){o.uniform3iv(this.addr,t)}function _T(o,t){o.uniform4iv(this.addr,t)}function vT(o,t){o.uniform1uiv(this.addr,t)}function xT(o,t){o.uniform2uiv(this.addr,t)}function ST(o,t){o.uniform3uiv(this.addr,t)}function yT(o,t){o.uniform4uiv(this.addr,t)}function MT(o,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=bh:d=rv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function ET(o,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||ov,u[d])}function bT(o,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||lv,u[d])}function TT(o,t,i){const r=this.cache,l=t.length,u=Vc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||sv,u[d])}function AT(o){switch(o){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return ST;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return TT}}class RT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=sT(i.type)}}class CT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=AT(i.type)}}class wT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function h_(o,t){o.seq.push(t),o.map[t.id]=t}function DT(o,t,i){const r=o.name,l=r.length;for(Cd.lastIndex=0;;){const u=Cd.exec(r),d=Cd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){h_(i,p===void 0?new RT(h,o,t):new CT(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new wT(h),h_(i,g)),i=g}}}class Oc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);DT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function p_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const UT=37297;let NT=0;function LT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const m_=new ut;function OT(o){Et._getMatrix(m_,Et.workingColorSpace,o);const t=`mat3( ${m_.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(o)){case Pc:return[t,"LinearTransferOETF"];case Bt:return[t,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function g_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+LT(o.getShaderSource(t),h)}else return u}function PT(o,t){const i=OT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const zT={[C_]:"Linear",[w_]:"Reinhard",[D_]:"Cineon",[U_]:"ACESFilmic",[L_]:"AgX",[O_]:"Neutral",[N_]:"Custom"};function FT(o,t){const i=zT[t];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new Q;function IT(){Et.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),t=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function HT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function GT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Io(o){return o!==""}function __(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function v_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const VT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(o){return o.replace(VT,kT)}const XT=new Map;function kT(o,t){let i=ft[t];if(i===void 0){const r=XT.get(t);if(r!==void 0)i=ft[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Th(i)}const WT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(o){return o.replace(WT,qT)}function qT(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function S_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const YT={[wc]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function jT(o){return YT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZT={[wr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Ic]:"ENVMAP_TYPE_CUBE_UV"};function KT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":ZT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const QT={[ws]:"ENVMAP_MODE_REFRACTION"};function JT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":QT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $T={[R_]:"ENVMAP_BLENDING_MULTIPLY",[kS]:"ENVMAP_BLENDING_MIX",[WS]:"ENVMAP_BLENDING_ADD"};function e1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":$T[o.combine]||"ENVMAP_BLENDING_NONE"}function t1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function n1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=jT(i),p=KT(i),v=JT(i),g=e1(i),S=t1(i),M=BT(i),b=HT(u),C=l.createProgram();let y,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Io).join(`
`),x.length>0&&(x+=`
`)):(y=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),x=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Bi?FT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,PT("linearToOutputTexel",i.outputColorSpace),IT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),d=Th(d),d=__(d,i),d=v_(d,i),h=Th(h),h=__(h,i),h=v_(h,i),d=x_(d),h=x_(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===O0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===O0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=D+y+d,U=D+x+h,z=p_(l,l.VERTEX_SHADER,N),F=p_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,z),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(V){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(C)||"",re=l.getShaderInfoLog(z)||"",ce=l.getShaderInfoLog(F)||"",le=$.trim(),I=re.trim(),H=ce.trim();let ae=!0,ye=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,F);else{const xe=g_(l,z,"vertex"),O=g_(l,F,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+xe+`
`+O)}else le!==""?rt("WebGLProgram: Program Info Log:",le):(I===""||H==="")&&(ye=!1);ye&&(V.diagnostics={runnable:ae,programLog:le,vertexShader:{log:I,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(F),W=new Oc(l,C),A=GT(l,C)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,UT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=NT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=F,this}let i1=0;class a1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new r1(t),i.set(t,r)),r}}class r1{constructor(t){this.id=i1++,this.code=t,this.usedTimes=0}}function s1(o,t,i,r,l,u,d){const h=new q_,m=new a1,p=new Set,v=[],g=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,w,V,$,re){const ce=$.fog,le=re.geometry,I=A.isMeshStandardMaterial?$.environment:null,H=(A.isMeshStandardMaterial?i:t).get(A.envMap||I),ae=H&&H.mapping===Ic?H.image.height:null,ye=b[A.type];A.precision!==null&&(M=l.getMaxPrecision(A.precision),M!==A.precision&&rt("WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const xe=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,O=xe!==void 0?xe.length:0;let ie=0;le.morphAttributes.position!==void 0&&(ie=1),le.morphAttributes.normal!==void 0&&(ie=2),le.morphAttributes.color!==void 0&&(ie=3);let ge,Ae,Be,ne;if(ye){const Mt=zi[ye];ge=Mt.vertexShader,Ae=Mt.fragmentShader}else ge=A.vertexShader,Ae=A.fragmentShader,m.update(A),Be=m.getVertexShaderID(A),ne=m.getFragmentShaderID(A);const fe=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),Xe=re.isInstancedMesh===!0,He=re.isBatchedMesh===!0,dt=!!A.map,Kt=!!A.matcap,gt=!!H,ht=!!A.aoMap,Rt=!!A.lightMap,st=!!A.bumpMap,Qt=!!A.normalMap,G=!!A.displacementMap,Yt=!!A.emissiveMap,yt=!!A.metalnessMap,Lt=!!A.roughnessMap,Ye=A.anisotropy>0,L=A.clearcoat>0,E=A.dispersion>0,q=A.iridescence>0,he=A.sheen>0,ve=A.transmission>0,ue=Ye&&!!A.anisotropyMap,Ze=L&&!!A.clearcoatMap,Ce=L&&!!A.clearcoatNormalMap,ke=L&&!!A.clearcoatRoughnessMap,tt=q&&!!A.iridescenceMap,Me=q&&!!A.iridescenceThicknessMap,be=he&&!!A.sheenColorMap,Fe=he&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,we=!!A.specularColorMap,lt=!!A.specularIntensityMap,k=ve&&!!A.transmissionMap,Ne=ve&&!!A.thicknessMap,Te=!!A.gradientMap,ze=!!A.alphaMap,Se=A.alphaTest>0,_e=!!A.alphaHash,Re=!!A.extensions;let nt=Bi;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(nt=o.toneMapping);const Pt={shaderID:ye,shaderType:A.type,shaderName:A.name,vertexShader:ge,fragmentShader:Ae,defines:A.defines,customVertexShaderID:Be,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:He,batchingColor:He&&re._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&re.instanceColor!==null,instancingMorph:Xe&&re.morphTexture!==null,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Us,alphaToCoverage:!!A.alphaToCoverage,map:dt,matcap:Kt,envMap:gt,envMapMode:gt&&H.mapping,envMapCubeUVHeight:ae,aoMap:ht,lightMap:Rt,bumpMap:st,normalMap:Qt,displacementMap:G,emissiveMap:Yt,normalMapObjectSpace:Qt&&A.normalMapType===ZS,normalMapTangentSpace:Qt&&A.normalMapType===jS,metalnessMap:yt,roughnessMap:Lt,anisotropy:Ye,anisotropyMap:ue,clearcoat:L,clearcoatMap:Ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ke,dispersion:E,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:be,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:we,specularIntensityMap:lt,transmission:ve,transmissionMap:k,thicknessMap:Ne,gradientMap:Te,opaque:A.transparent===!1&&A.blending===As&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:Se,alphaHash:_e,combine:A.combine,mapUv:dt&&C(A.map.channel),aoMapUv:ht&&C(A.aoMap.channel),lightMapUv:Rt&&C(A.lightMap.channel),bumpMapUv:st&&C(A.bumpMap.channel),normalMapUv:Qt&&C(A.normalMap.channel),displacementMapUv:G&&C(A.displacementMap.channel),emissiveMapUv:Yt&&C(A.emissiveMap.channel),metalnessMapUv:yt&&C(A.metalnessMap.channel),roughnessMapUv:Lt&&C(A.roughnessMap.channel),anisotropyMapUv:ue&&C(A.anisotropyMap.channel),clearcoatMapUv:Ze&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&C(A.sheenRoughnessMap.channel),specularMapUv:Pe&&C(A.specularMap.channel),specularColorMapUv:we&&C(A.specularColorMap.channel),specularIntensityMapUv:lt&&C(A.specularIntensityMap.channel),transmissionMapUv:k&&C(A.transmissionMap.channel),thicknessMapUv:Ne&&C(A.thicknessMap.channel),alphaMapUv:ze&&C(A.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Qt||Ye),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!le.attributes.uv&&(dt||ze),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:De,skinning:re.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&A.map.isVideoTexture===!0&&Et.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:Yt&&A.emissiveMap.isVideoTexture===!0&&Et.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===da,flipSided:A.side===kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function x(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)w.push(V),w.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(D(w,A),N(w,A),w.push(o.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function D(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function N(A,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),A.push(h.mask)}function U(A){const w=b[A.type];let V;if(w){const $=zi[w];V=Ey.clone($.uniforms)}else V=A.uniforms;return V}function z(A,w){let V=g.get(w);return V!==void 0?++V.usedTimes:(V=new n1(o,w,A,u),v.push(V),g.set(w,V)),V}function F(A){if(--A.usedTimes===0){const w=v.indexOf(A);v[w]=v[v.length-1],v.pop(),g.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:U,acquireProgram:z,releaseProgram:F,releaseShaderCache:P,programs:v,dispose:W}}function o1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function l1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function y_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function M_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(g,S,M,b,C,y){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:C,group:y},o[t]=x):(x.id=g.id,x.object=g,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=C,x.group=y),t++,x}function h(g,S,M,b,C,y){const x=d(g,S,M,b,C,y);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(g,S,M,b,C,y){const x=d(g,S,M,b,C,y);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,S){i.length>1&&i.sort(g||l1),r.length>1&&r.sort(S||y_),l.length>1&&l.sort(S||y_)}function v(){for(let g=t,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function c1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new M_,o.set(r,[d])):l>=u.length?(d=new M_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function u1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new Ut};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[t.id]=i,i}}}function f1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let d1=0;function h1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function p1(o){const t=new u1,i=f1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,u=new an,d=new an;function h(p){let v=0,g=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let M=0,b=0,C=0,y=0,x=0,D=0,N=0,U=0,z=0,F=0,P=0;p.sort(h1);for(let A=0,w=p.length;A<w;A++){const V=p[A],$=V.color,re=V.intensity,ce=V.distance;let le=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ds?le=V.shadow.map.texture:le=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=$.r*re,g+=$.g*re,S+=$.b*re;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],re);P++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,ae=i.get(V);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,r.directionalShadow[M]=ae,r.directionalShadowMap[M]=le,r.directionalShadowMatrix[M]=V.shadow.matrix,D++}r.directional[M]=I,M++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy($).multiplyScalar(re),I.distance=ce,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[C]=I;const H=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,H.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[C]=H.matrix,V.castShadow){const ae=i.get(V);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,r.spotShadow[C]=ae,r.spotShadowMap[C]=le,U++}C++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy($).multiplyScalar(re),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=I,y++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const H=V.shadow,ae=i.get(V);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,ae.shadowCameraNear=H.camera.near,ae.shadowCameraFar=H.camera.far,r.pointShadow[b]=ae,r.pointShadowMap[b]=le,r.pointShadowMatrix[b]=V.shadow.matrix,N++}r.point[b]=I,b++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(re),I.groundColor.copy(V.groundColor).multiplyScalar(re),r.hemi[x]=I,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==M||W.pointLength!==b||W.spotLength!==C||W.rectAreaLength!==y||W.hemiLength!==x||W.numDirectionalShadows!==D||W.numPointShadows!==N||W.numSpotShadows!==U||W.numSpotMaps!==z||W.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+z-F,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,W.directionalLength=M,W.pointLength=b,W.spotLength=C,W.rectAreaLength=y,W.hemiLength=x,W.numDirectionalShadows=D,W.numPointShadows=N,W.numSpotShadows=U,W.numSpotMaps=z,W.numLightProbes=P,r.version=d1++)}function m(p,v){let g=0,S=0,M=0,b=0,C=0;const y=v.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const N=p[x];if(N.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),g++}else if(N.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),d.identity(),u.copy(N.matrixWorld),u.premultiply(y),d.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),b++}else if(N.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function E_(o){const t=new p1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function m1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new E_(o),t.set(l,[h])):u>=d.length?(h=new E_(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v1=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],x1=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],b_=new an,zo=new Q,wd=new Q;function S1(o,t,i){let r=new ev;const l=new Nt,u=new Nt,d=new nn,h=new zy,m=new Fy,p={},v=i.maxTextureSize,g={[$a]:kn,[kn]:$a,[da]:da},S=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:g1,fragmentShader:_1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new qn;b.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new vi(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let x=this.type;this.render=function(F,P,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;F.type===TS&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=wc);const A=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),$=o.state;$.setBlending(pa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const re=x!==this.type;re&&P.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(le=>le.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,le=F.length;ce<le;ce++){const I=F[ce],H=I.shadow;if(H===void 0){rt("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ae=H.getFrameExtents();if(l.multiply(ae),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ae.x),l.x=u.x*ae.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ae.y),l.y=u.y*ae.y,H.mapSize.y=u.y)),H.map===null||re===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fo){if(I.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Hi(l.x,l.y,{format:Ds,type:ga,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new Xo(l.x,l.y,Fi),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=_a,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{I.isPointLight?(H.map=new $_(l.x),H.map.depthTexture=new Oy(l.x,Gi)):(H.map=new Hi(l.x,l.y),H.map.depthTexture=new Xo(l.x,l.y,Gi)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=_a;const xe=o.state.buffers.depth.getReversed();this.type===wc?(H.map.depthTexture.compareFunction=xe?Ph:Oh,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const ye=H.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ye;xe++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xe),o.clear();else{xe===0&&(o.setRenderTarget(H.map),o.clear());const O=H.getViewport(xe);d.set(u.x*O.x,u.y*O.y,u.x*O.z,u.y*O.w),$.viewport(d)}if(I.isPointLight){const O=H.camera,ie=H.matrix,ge=I.distance||O.far;ge!==O.far&&(O.far=ge,O.updateProjectionMatrix()),zo.setFromMatrixPosition(I.matrixWorld),O.position.copy(zo),wd.copy(O.position),wd.add(v1[xe]),O.up.copy(x1[xe]),O.lookAt(wd),O.updateMatrixWorld(),ie.makeTranslation(-zo.x,-zo.y,-zo.z),b_.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H._frustum.setFromProjectionMatrix(b_,O.coordinateSystem,O.reversedDepth)}else H.updateMatrices(I);r=H.getFrustum(),U(P,W,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Fo&&D(H,W),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,w,V)};function D(F,P){const W=t.update(C);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Hi(l.x,l.y,{format:Ds,type:ga})),S.uniforms.shadow_pass.value=F.map.depthTexture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,W,S,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,W,M,C,null)}function N(F,P,W,A){let w=null;const V=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)w=V;else if(w=W.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=w.uuid,re=P.uuid;let ce=p[$];ce===void 0&&(ce={},p[$]=ce);let le=ce[re];le===void 0&&(le=w.clone(),ce[re]=le,P.addEventListener("dispose",z)),w=le}if(w.visible=P.visible,w.wireframe=P.wireframe,A===Fo?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:g[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=o.properties.get(w);$.light=W}return w}function U(F,P,W,A,w){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Fo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const re=t.update(F),ce=F.material;if(Array.isArray(ce)){const le=re.groups;for(let I=0,H=le.length;I<H;I++){const ae=le[I],ye=ce[ae.materialIndex];if(ye&&ye.visible){const xe=N(F,ye,A,w);F.onBeforeShadow(o,F,P,W,re,xe,ae),o.renderBufferDirect(W,null,re,xe,F,ae),F.onAfterShadow(o,F,P,W,re,xe,ae)}}}else if(ce.visible){const le=N(F,ce,A,w);F.onBeforeShadow(o,F,P,W,re,le,null),o.renderBufferDirect(W,null,re,le,F,null),F.onAfterShadow(o,F,P,W,re,le,null)}}const $=F.children;for(let re=0,ce=$.length;re<ce;re++)U($[re],P,W,A,w)}function z(F){F.target.removeEventListener("dispose",z);for(const W in p){const A=p[W],w=F.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const y1={[Ld]:Od,[Pd]:Id,[zd]:Bd,[Cs]:Fd,[Od]:Ld,[Id]:Pd,[Bd]:zd,[Fd]:Cs};function M1(o,t){function i(){let k=!1;const Ne=new nn;let Te=null;const ze=new nn(0,0,0,0);return{setMask:function(Se){Te!==Se&&!k&&(o.colorMask(Se,Se,Se,Se),Te=Se)},setLocked:function(Se){k=Se},setClear:function(Se,_e,Re,nt,Pt){Pt===!0&&(Se*=nt,_e*=nt,Re*=nt),Ne.set(Se,_e,Re,nt),ze.equals(Ne)===!1&&(o.clearColor(Se,_e,Re,nt),ze.copy(Ne))},reset:function(){k=!1,Te=null,ze.set(-1,0,0,0)}}}function r(){let k=!1,Ne=!1,Te=null,ze=null,Se=null;return{setReversed:function(_e){if(Ne!==_e){const Re=t.get("EXT_clip_control");_e?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ne=_e;const nt=Se;Se=null,this.setClear(nt)}},getReversed:function(){return Ne},setTest:function(_e){_e?fe(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!k&&(o.depthMask(_e),Te=_e)},setFunc:function(_e){if(Ne&&(_e=y1[_e]),ze!==_e){switch(_e){case Ld:o.depthFunc(o.NEVER);break;case Od:o.depthFunc(o.ALWAYS);break;case Pd:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case zd:o.depthFunc(o.EQUAL);break;case Fd:o.depthFunc(o.GEQUAL);break;case Id:o.depthFunc(o.GREATER);break;case Bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=_e}},setLocked:function(_e){k=_e},setClear:function(_e){Se!==_e&&(Ne&&(_e=1-_e),o.clearDepth(_e),Se=_e)},reset:function(){k=!1,Te=null,ze=null,Se=null,Ne=!1}}}function l(){let k=!1,Ne=null,Te=null,ze=null,Se=null,_e=null,Re=null,nt=null,Pt=null;return{setTest:function(Mt){k||(Mt?fe(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(Mt){Ne!==Mt&&!k&&(o.stencilMask(Mt),Ne=Mt)},setFunc:function(Mt,wn,xi){(Te!==Mt||ze!==wn||Se!==xi)&&(o.stencilFunc(Mt,wn,xi),Te=Mt,ze=wn,Se=xi)},setOp:function(Mt,wn,xi){(_e!==Mt||Re!==wn||nt!==xi)&&(o.stencilOp(Mt,wn,xi),_e=Mt,Re=wn,nt=xi)},setLocked:function(Mt){k=Mt},setClear:function(Mt){Pt!==Mt&&(o.clearStencil(Mt),Pt=Mt)},reset:function(){k=!1,Ne=null,Te=null,ze=null,Se=null,_e=null,Re=null,nt=null,Pt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,M=[],b=null,C=!1,y=null,x=null,D=null,N=null,U=null,z=null,F=null,P=new Ut(0,0,0),W=0,A=!1,w=null,V=null,$=null,re=null,ce=null;const le=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const ae=o.getParameter(o.VERSION);ae.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ae)[1]),I=H>=1):ae.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),I=H>=2);let ye=null,xe={};const O=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),ge=new nn().fromArray(O),Ae=new nn().fromArray(ie);function Be(k,Ne,Te,ze){const Se=new Uint8Array(4),_e=o.createTexture();o.bindTexture(k,_e),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Te;Re++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,Se):o.texImage2D(Ne+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Se);return _e}const ne={};ne[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),fe(o.DEPTH_TEST),d.setFunc(Cs),st(!1),Qt(w0),fe(o.CULL_FACE),ht(pa);function fe(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function De(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Xe(k,Ne){return g[k]!==Ne?(o.bindFramebuffer(k,Ne),g[k]=Ne,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ne),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function He(k,Ne){let Te=M,ze=!1;if(k){Te=S.get(Ne),Te===void 0&&(Te=[],S.set(Ne,Te));const Se=k.textures;if(Te.length!==Se.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let _e=0,Re=Se.length;_e<Re;_e++)Te[_e]=o.COLOR_ATTACHMENT0+_e;Te.length=Se.length,ze=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,ze=!0);ze&&o.drawBuffers(Te)}function dt(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Kt={[Tr]:o.FUNC_ADD,[RS]:o.FUNC_SUBTRACT,[CS]:o.FUNC_REVERSE_SUBTRACT};Kt[wS]=o.MIN,Kt[DS]=o.MAX;const gt={[US]:o.ZERO,[NS]:o.ONE,[LS]:o.SRC_COLOR,[Ud]:o.SRC_ALPHA,[BS]:o.SRC_ALPHA_SATURATE,[FS]:o.DST_COLOR,[PS]:o.DST_ALPHA,[OS]:o.ONE_MINUS_SRC_COLOR,[Nd]:o.ONE_MINUS_SRC_ALPHA,[IS]:o.ONE_MINUS_DST_COLOR,[zS]:o.ONE_MINUS_DST_ALPHA,[HS]:o.CONSTANT_COLOR,[GS]:o.ONE_MINUS_CONSTANT_COLOR,[VS]:o.CONSTANT_ALPHA,[XS]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(k,Ne,Te,ze,Se,_e,Re,nt,Pt,Mt){if(k===pa){C===!0&&(De(o.BLEND),C=!1);return}if(C===!1&&(fe(o.BLEND),C=!0),k!==AS){if(k!==y||Mt!==A){if((x!==Tr||U!==Tr)&&(o.blendEquation(o.FUNC_ADD),x=Tr,U=Tr),Mt)switch(k){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dd:o.blendFunc(o.ONE,o.ONE);break;case D0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case U0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:At("WebGLState: Invalid blending: ",k);break}else switch(k){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case D0:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case U0:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",k);break}D=null,N=null,z=null,F=null,P.set(0,0,0),W=0,y=k,A=Mt}return}Se=Se||Ne,_e=_e||Te,Re=Re||ze,(Ne!==x||Se!==U)&&(o.blendEquationSeparate(Kt[Ne],Kt[Se]),x=Ne,U=Se),(Te!==D||ze!==N||_e!==z||Re!==F)&&(o.blendFuncSeparate(gt[Te],gt[ze],gt[_e],gt[Re]),D=Te,N=ze,z=_e,F=Re),(nt.equals(P)===!1||Pt!==W)&&(o.blendColor(nt.r,nt.g,nt.b,Pt),P.copy(nt),W=Pt),y=k,A=!1}function Rt(k,Ne){k.side===da?De(o.CULL_FACE):fe(o.CULL_FACE);let Te=k.side===kn;Ne&&(Te=!Te),st(Te),k.blending===As&&k.transparent===!1?ht(pa):ht(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),u.setMask(k.colorWrite);const ze=k.stencilWrite;h.setTest(ze),ze&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function st(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function Qt(k){k!==ES?(fe(o.CULL_FACE),k!==V&&(k===w0?o.cullFace(o.BACK):k===bS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),V=k}function G(k){k!==$&&(I&&o.lineWidth(k),$=k)}function Yt(k,Ne,Te){k?(fe(o.POLYGON_OFFSET_FILL),(re!==Ne||ce!==Te)&&(o.polygonOffset(Ne,Te),re=Ne,ce=Te)):De(o.POLYGON_OFFSET_FILL)}function yt(k){k?fe(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function Lt(k){k===void 0&&(k=o.TEXTURE0+le-1),ye!==k&&(o.activeTexture(k),ye=k)}function Ye(k,Ne,Te){Te===void 0&&(ye===null?Te=o.TEXTURE0+le-1:Te=ye);let ze=xe[Te];ze===void 0&&(ze={type:void 0,texture:void 0},xe[Te]=ze),(ze.type!==k||ze.texture!==Ne)&&(ye!==Te&&(o.activeTexture(Te),ye=Te),o.bindTexture(k,Ne||ne[k]),ze.type=k,ze.texture=Ne)}function L(){const k=xe[ye];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function he(){try{o.texSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function ve(){try{o.texSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Ce(){try{o.texStorage2D(...arguments)}catch(k){At("WebGLState:",k)}}function ke(){try{o.texStorage3D(...arguments)}catch(k){At("WebGLState:",k)}}function tt(){try{o.texImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Me(){try{o.texImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function be(k){ge.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),ge.copy(k))}function Fe(k){Ae.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Ae.copy(k))}function Pe(k,Ne){let Te=p.get(Ne);Te===void 0&&(Te=new WeakMap,p.set(Ne,Te));let ze=Te.get(k);ze===void 0&&(ze=o.getUniformBlockIndex(Ne,k.name),Te.set(k,ze))}function we(k,Ne){const ze=p.get(Ne).get(k);m.get(Ne)!==ze&&(o.uniformBlockBinding(Ne,ze,k.__bindingPointIndex),m.set(Ne,ze))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ye=null,xe={},g={},S=new WeakMap,M=[],b=null,C=!1,y=null,x=null,D=null,N=null,U=null,z=null,F=null,P=new Ut(0,0,0),W=0,A=!1,w=null,V=null,$=null,re=null,ce=null,ge.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:fe,disable:De,bindFramebuffer:Xe,drawBuffers:He,useProgram:dt,setBlending:ht,setMaterial:Rt,setFlipSided:st,setCullFace:Qt,setLineWidth:G,setPolygonOffset:Yt,setScissorTest:yt,activeTexture:Lt,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:tt,texImage3D:Me,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:ke,texSubImage2D:he,texSubImage3D:ve,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ze,scissor:be,viewport:Fe,reset:lt}}function E1(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,v=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Fc("canvas")}function C(L,E,q){let he=1;const ve=Ye(L);if((ve.width>q||ve.height>q)&&(he=q/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(he*ve.width),Ze=Math.floor(he*ve.height);g===void 0&&(g=b(ue,Ze));const Ce=E?b(ue,Ze):g;return Ce.width=ue,Ce.height=Ze,Ce.getContext("2d").drawImage(L,0,0,ue,Ze),rt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ue+"x"+Ze+")."),Ce}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function y(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,E,q,he,ve=!1){if(L!==null){if(o[L]!==void 0)return o[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=E;if(E===o.RED&&(q===o.FLOAT&&(ue=o.R32F),q===o.HALF_FLOAT&&(ue=o.R16F),q===o.UNSIGNED_BYTE&&(ue=o.R8)),E===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ue=o.R8UI),q===o.UNSIGNED_SHORT&&(ue=o.R16UI),q===o.UNSIGNED_INT&&(ue=o.R32UI),q===o.BYTE&&(ue=o.R8I),q===o.SHORT&&(ue=o.R16I),q===o.INT&&(ue=o.R32I)),E===o.RG&&(q===o.FLOAT&&(ue=o.RG32F),q===o.HALF_FLOAT&&(ue=o.RG16F),q===o.UNSIGNED_BYTE&&(ue=o.RG8)),E===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ue=o.RG8UI),q===o.UNSIGNED_SHORT&&(ue=o.RG16UI),q===o.UNSIGNED_INT&&(ue=o.RG32UI),q===o.BYTE&&(ue=o.RG8I),q===o.SHORT&&(ue=o.RG16I),q===o.INT&&(ue=o.RG32I)),E===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),q===o.UNSIGNED_INT&&(ue=o.RGB32UI),q===o.BYTE&&(ue=o.RGB8I),q===o.SHORT&&(ue=o.RGB16I),q===o.INT&&(ue=o.RGB32I)),E===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),q===o.UNSIGNED_INT&&(ue=o.RGBA32UI),q===o.BYTE&&(ue=o.RGBA8I),q===o.SHORT&&(ue=o.RGBA16I),q===o.INT&&(ue=o.RGBA32I)),E===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),E===o.RGBA){const Ze=ve?Pc:Et.getTransfer(he);q===o.FLOAT&&(ue=o.RGBA32F),q===o.HALF_FLOAT&&(ue=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ue=Ze===Bt?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ue}function U(L,E){let q;return L?E===null||E===Gi||E===Go?q=o.DEPTH24_STENCIL8:E===Fi?q=o.DEPTH32F_STENCIL8:E===Ho&&(q=o.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Go?q=o.DEPTH_COMPONENT24:E===Fi?q=o.DEPTH_COMPONENT32F:E===Ho&&(q=o.DEPTH_COMPONENT16),q}function z(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),W(E),E.isVideoTexture&&v.delete(E)}function P(L){const E=L.target;E.removeEventListener("dispose",P),w(E)}function W(L){const E=r.get(L);if(E.__webglInit===void 0)return;const q=L.source,he=S.get(q);if(he){const ve=he[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&A(L),Object.keys(he).length===0&&S.delete(q)}r.remove(L)}function A(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const q=L.source,he=S.get(q);delete he[E.__cacheKey],d.memory.textures--}function w(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ve=0;ve<E.__webglFramebuffer[he].length;ve++)o.deleteFramebuffer(E.__webglFramebuffer[he][ve]);else o.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)o.deleteFramebuffer(E.__webglFramebuffer[he]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let he=0,ve=q.length;he<ve;he++){const ue=r.get(q[he]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),d.memory.textures--),r.remove(q[he])}r.remove(L)}let V=0;function $(){V=0}function re(){const L=V;return L>=l.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function ce(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function le(L,E){const q=r.get(L);if(L.isVideoTexture&&yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const he=L.image;if(he===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+E)}function I(L,E){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ne(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+E)}function H(L,E){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ne(q,L,E);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+E)}function ae(L,E){const q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){fe(q,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+E)}const ye={[Vd]:o.REPEAT,[ha]:o.CLAMP_TO_EDGE,[Xd]:o.MIRRORED_REPEAT},xe={[Cn]:o.NEAREST,[qS]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[Ln]:o.LINEAR,[$f]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},O={[KS]:o.NEVER,[ty]:o.ALWAYS,[QS]:o.LESS,[Oh]:o.LEQUAL,[JS]:o.EQUAL,[Ph]:o.GEQUAL,[$S]:o.GREATER,[ey]:o.NOTEQUAL};function ie(L,E){if(E.type===Fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ln||E.magFilter===$f||E.magFilter===sc||E.magFilter===Rr||E.minFilter===Ln||E.minFilter===$f||E.minFilter===sc||E.minFilter===Rr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ye[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ye[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ye[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,xe[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==sc&&E.minFilter!==Rr||E.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ge(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const he=E.source;let ve=S.get(he);ve===void 0&&(ve={},S.set(he,ve));const ue=ce(E);if(ue!==L.__cacheKey){ve[ue]===void 0&&(ve[ue]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),ve[ue].usedTimes++;const Ze=ve[L.__cacheKey];Ze!==void 0&&(ve[L.__cacheKey].usedTimes--,Ze.usedTimes===0&&A(E)),L.__cacheKey=ue,L.__webglTexture=ve[ue].texture}return q}function Ae(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Be(L,E,q,he){const ue=L.updateRanges;if(ue.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,q,he,E.data);else{ue.sort((Me,be)=>Me.start-be.start);let Ze=0;for(let Me=1;Me<ue.length;Me++){const be=ue[Ze],Fe=ue[Me],Pe=be.start+be.count,we=Ae(Fe.start,E.width,4),lt=Ae(be.start,E.width,4);Fe.start<=Pe+1&&we===lt&&Ae(Fe.start+Fe.count-1,E.width,4)===we?be.count=Math.max(be.count,Fe.start+Fe.count-be.start):(++Ze,ue[Ze]=Fe)}ue.length=Ze+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),ke=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Me=0,be=ue.length;Me<be;Me++){const Fe=ue[Me],Pe=Math.floor(Fe.start/4),we=Math.ceil(Fe.count/4),lt=Pe%E.width,k=Math.floor(Pe/E.width),Ne=we,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,lt,k,Ne,Te,q,he,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function ne(L,E,q){let he=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=o.TEXTURE_3D);const ve=ge(L,E),ue=E.source;i.bindTexture(he,L.__webglTexture,o.TEXTURE0+q);const Ze=r.get(ue);if(ue.version!==Ze.__version||ve===!0){i.activeTexture(o.TEXTURE0+q);const Ce=Et.getPrimaries(Et.workingColorSpace),ke=E.colorSpace===Qa?null:Et.getPrimaries(E.colorSpace),tt=E.colorSpace===Qa||Ce===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Me=C(E.image,!1,l.maxTextureSize);Me=Lt(E,Me);const be=u.convert(E.format,E.colorSpace),Fe=u.convert(E.type);let Pe=N(E.internalFormat,be,Fe,E.colorSpace,E.isVideoTexture);ie(he,E);let we;const lt=E.mipmaps,k=E.isVideoTexture!==!0,Ne=Ze.__version===void 0||ve===!0,Te=ue.dataReady,ze=z(E,Me);if(E.isDepthTexture)Pe=U(E.format===Cr,E.type),Ne&&(k?i.texStorage2D(o.TEXTURE_2D,1,Pe,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,Pe,Me.width,Me.height,0,be,Fe,null));else if(E.isDataTexture)if(lt.length>0){k&&Ne&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let Se=0,_e=lt.length;Se<_e;Se++)we=lt[Se],k?Te&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,we.width,we.height,be,Fe,we.data):i.texImage2D(o.TEXTURE_2D,Se,Pe,we.width,we.height,0,be,Fe,we.data);E.generateMipmaps=!1}else k?(Ne&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,Me.width,Me.height),Te&&Be(E,Me,be,Fe)):i.texImage2D(o.TEXTURE_2D,0,Pe,Me.width,Me.height,0,be,Fe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,lt[0].width,lt[0].height,Me.depth);for(let Se=0,_e=lt.length;Se<_e;Se++)if(we=lt[Se],E.format!==wi)if(be!==null)if(k){if(Te)if(E.layerUpdates.size>0){const Re=t_(we.width,we.height,E.format,E.type);for(const nt of E.layerUpdates){const Pt=we.data.subarray(nt*Re/we.data.BYTES_PER_ELEMENT,(nt+1)*Re/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,nt,we.width,we.height,1,be,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,we.width,we.height,Me.depth,be,we.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,Pe,we.width,we.height,Me.depth,0,we.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Te&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,we.width,we.height,Me.depth,be,Fe,we.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Se,Pe,we.width,we.height,Me.depth,0,be,Fe,we.data)}else{k&&Ne&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let Se=0,_e=lt.length;Se<_e;Se++)we=lt[Se],E.format!==wi?be!==null?k?Te&&i.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,we.width,we.height,be,we.data):i.compressedTexImage2D(o.TEXTURE_2D,Se,Pe,we.width,we.height,0,we.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Te&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,we.width,we.height,be,Fe,we.data):i.texImage2D(o.TEXTURE_2D,Se,Pe,we.width,we.height,0,be,Fe,we.data)}else if(E.isDataArrayTexture)if(k){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,Me.width,Me.height,Me.depth),Te)if(E.layerUpdates.size>0){const Se=t_(Me.width,Me.height,E.format,E.type);for(const _e of E.layerUpdates){const Re=Me.data.subarray(_e*Se/Me.data.BYTES_PER_ELEMENT,(_e+1)*Se/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,be,Fe,Re)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,be,Fe,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,Me.width,Me.height,Me.depth,0,be,Fe,Me.data);else if(E.isData3DTexture)k?(Ne&&i.texStorage3D(o.TEXTURE_3D,ze,Pe,Me.width,Me.height,Me.depth),Te&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,be,Fe,Me.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,Me.width,Me.height,Me.depth,0,be,Fe,Me.data);else if(E.isFramebufferTexture){if(Ne)if(k)i.texStorage2D(o.TEXTURE_2D,ze,Pe,Me.width,Me.height);else{let Se=Me.width,_e=Me.height;for(let Re=0;Re<ze;Re++)i.texImage2D(o.TEXTURE_2D,Re,Pe,Se,_e,0,be,Fe,null),Se>>=1,_e>>=1}}else if(lt.length>0){if(k&&Ne){const Se=Ye(lt[0]);i.texStorage2D(o.TEXTURE_2D,ze,Pe,Se.width,Se.height)}for(let Se=0,_e=lt.length;Se<_e;Se++)we=lt[Se],k?Te&&i.texSubImage2D(o.TEXTURE_2D,Se,0,0,be,Fe,we):i.texImage2D(o.TEXTURE_2D,Se,Pe,be,Fe,we);E.generateMipmaps=!1}else if(k){if(Ne){const Se=Ye(Me);i.texStorage2D(o.TEXTURE_2D,ze,Pe,Se.width,Se.height)}Te&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,be,Fe,Me)}else i.texImage2D(o.TEXTURE_2D,0,Pe,be,Fe,Me);y(E)&&x(he),Ze.__version=ue.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function fe(L,E,q){if(E.image.length!==6)return;const he=ge(L,E),ve=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+q);const ue=r.get(ve);if(ve.version!==ue.__version||he===!0){i.activeTexture(o.TEXTURE0+q);const Ze=Et.getPrimaries(Et.workingColorSpace),Ce=E.colorSpace===Qa?null:Et.getPrimaries(E.colorSpace),ke=E.colorSpace===Qa||Ze===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,be=[];for(let _e=0;_e<6;_e++)!tt&&!Me?be[_e]=C(E.image[_e],!0,l.maxCubemapSize):be[_e]=Me?E.image[_e].image:E.image[_e],be[_e]=Lt(E,be[_e]);const Fe=be[0],Pe=u.convert(E.format,E.colorSpace),we=u.convert(E.type),lt=N(E.internalFormat,Pe,we,E.colorSpace),k=E.isVideoTexture!==!0,Ne=ue.__version===void 0||he===!0,Te=ve.dataReady;let ze=z(E,Fe);ie(o.TEXTURE_CUBE_MAP,E);let Se;if(tt){k&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,Fe.width,Fe.height);for(let _e=0;_e<6;_e++){Se=be[_e].mipmaps;for(let Re=0;Re<Se.length;Re++){const nt=Se[Re];E.format!==wi?Pe!==null?k?Te&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,0,0,nt.width,nt.height,Pe,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,lt,nt.width,nt.height,0,nt.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,0,0,nt.width,nt.height,Pe,we,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,lt,nt.width,nt.height,0,Pe,we,nt.data)}}}else{if(Se=E.mipmaps,k&&Ne){Se.length>0&&ze++;const _e=Ye(be[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){k?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,be[_e].width,be[_e].height,Pe,we,be[_e].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,be[_e].width,be[_e].height,0,Pe,we,be[_e].data);for(let Re=0;Re<Se.length;Re++){const Pt=Se[Re].image[_e].image;k?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,0,0,Pt.width,Pt.height,Pe,we,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,lt,Pt.width,Pt.height,0,Pe,we,Pt.data)}}else{k?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe,we,be[_e]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,lt,Pe,we,be[_e]);for(let Re=0;Re<Se.length;Re++){const nt=Se[Re];k?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,0,0,Pe,we,nt.image[_e]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,lt,Pe,we,nt.image[_e])}}}y(E)&&x(o.TEXTURE_CUBE_MAP),ue.__version=ve.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function De(L,E,q,he,ve,ue){const Ze=u.convert(q.format,q.colorSpace),Ce=u.convert(q.type),ke=N(q.internalFormat,Ze,Ce,q.colorSpace),tt=r.get(E),Me=r.get(q);if(Me.__renderTarget=E,!tt.__hasExternalTextures){const be=Math.max(1,E.width>>ue),Fe=Math.max(1,E.height>>ue);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?i.texImage3D(ve,ue,ke,be,Fe,E.depth,0,Ze,Ce,null):i.texImage2D(ve,ue,ke,be,Fe,0,Ze,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,ve,Me.__webglTexture,0,G(E)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,ve,Me.__webglTexture,ue),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xe(L,E,q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const he=E.depthTexture,ve=he&&he.isDepthTexture?he.type:null,ue=U(E.stencilBuffer,ve),Ze=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Yt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),ue,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),ue,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ue,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,L)}else{const he=E.textures;for(let ve=0;ve<he.length;ve++){const ue=he[ve],Ze=u.convert(ue.format,ue.colorSpace),Ce=u.convert(ue.type),ke=N(ue.internalFormat,Ze,Ce,ue.colorSpace);Yt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),ke,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),ke,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ke,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(L,E,q){const he=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(E.depthTexture);if(ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ve.__webglTexture===void 0){ve.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),ie(o.TEXTURE_CUBE_MAP,E.depthTexture);const tt=u.convert(E.depthTexture.format),Me=u.convert(E.depthTexture.type);let be;E.depthTexture.format===_a?be=o.DEPTH_COMPONENT24:E.depthTexture.format===Cr&&(be=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,be,E.width,E.height,0,tt,Me,null)}}else le(E.depthTexture,0);const ue=ve.__webglTexture,Ze=G(E),Ce=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,ke=E.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===_a)Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ke,Ce,ue,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,ke,Ce,ue,0);else if(E.depthTexture.format===Cr)Yt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ke,Ce,ue,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,ke,Ce,ue,0);else throw new Error("Unknown depthTexture format")}function dt(L){const E=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=he}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)He(E.__webglFramebuffer[he],L,he);else{const he=L.texture.mipmaps;he&&he.length>0?He(E.__webglFramebuffer[0],L,0):He(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=o.createRenderbuffer(),Xe(E.__webglDepthbuffer[he],L,!1);else{const ve=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,ue)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Xe(E.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,ue)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(L,E,q){const he=r.get(L);E!==void 0&&De(he.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&dt(L)}function gt(L){const E=L.texture,q=r.get(L),he=r.get(E);L.addEventListener("dispose",P);const ve=L.textures,ue=L.isWebGLCubeRenderTarget===!0,Ze=ve.length>1;if(Ze||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=E.version,d.memory.textures++),ue){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let ke=0;ke<E.mipmaps.length;ke++)q.__webglFramebuffer[Ce][ke]=o.createFramebuffer()}else q.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let Ce=0,ke=ve.length;Ce<ke;Ce++){const tt=r.get(ve[Ce]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Yt(L)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const ke=ve[Ce];q.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const tt=u.convert(ke.format,ke.colorSpace),Me=u.convert(ke.type),be=N(ke.internalFormat,tt,Me,ke.colorSpace,L.isXRRenderTarget===!0),Fe=G(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,be,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Xe(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){i.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ie(o.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)De(q.__webglFramebuffer[Ce][ke],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else De(q.__webglFramebuffer[Ce],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let Ce=0,ke=ve.length;Ce<ke;Ce++){const tt=ve[Ce],Me=r.get(tt);let be=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(be,Me.__webglTexture),ie(be,tt),De(q.__webglFramebuffer,L,tt,o.COLOR_ATTACHMENT0+Ce,be,0),y(tt)&&x(be)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,he.__webglTexture),ie(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)De(q.__webglFramebuffer[ke],L,E,o.COLOR_ATTACHMENT0,Ce,ke);else De(q.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ce,0);y(E)&&x(Ce),i.unbindTexture()}L.depthBuffer&&dt(L)}function ht(L){const E=L.textures;for(let q=0,he=E.length;q<he;q++){const ve=E[q];if(y(ve)){const ue=D(L),Ze=r.get(ve).__webglTexture;i.bindTexture(ue,Ze),x(ue),i.unbindTexture()}}}const Rt=[],st=[];function Qt(L){if(L.samples>0){if(Yt(L)===!1){const E=L.textures,q=L.width,he=L.height;let ve=o.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=r.get(L),Ce=E.length>1;if(Ce)for(let tt=0;tt<E.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const ke=L.texture.mipmaps;ke&&ke.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const Me=r.get(E[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,q,he,0,0,q,he,ve,o.NEAREST),m===!0&&(Rt.length=0,st.length=0,Rt.push(o.COLOR_ATTACHMENT0+tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Rt.push(ue),st.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,st)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Rt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let tt=0;tt<E.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const Me=r.get(E[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function Yt(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(L){const E=d.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Lt(L,E){const q=L.colorSpace,he=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Us&&q!==Qa&&(Et.getTransfer(q)===Bt?(he!==wi||ve!==gi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",q)),E}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=$,this.setTexture2D=le,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=Kt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function b1(o,t){function i(r,l=Qa){let u;const d=Et.getTransfer(l);if(r===gi)return o.UNSIGNED_BYTE;if(r===wh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Dh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===I_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===B_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===z_)return o.BYTE;if(r===F_)return o.SHORT;if(r===Ho)return o.UNSIGNED_SHORT;if(r===Ch)return o.INT;if(r===Gi)return o.UNSIGNED_INT;if(r===Fi)return o.FLOAT;if(r===ga)return o.HALF_FLOAT;if(r===H_)return o.ALPHA;if(r===G_)return o.RGB;if(r===wi)return o.RGBA;if(r===_a)return o.DEPTH_COMPONENT;if(r===Cr)return o.DEPTH_STENCIL;if(r===V_)return o.RED;if(r===Uh)return o.RED_INTEGER;if(r===Ds)return o.RG;if(r===Nh)return o.RG_INTEGER;if(r===Lh)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===Nc||r===Lc)if(d===Bt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Wd||r===qd||r===Yd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===eh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===jd||r===Zd)return d===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Kd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Qd)return u.COMPRESSED_R11_EAC;if(r===Jd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===$d)return u.COMPRESSED_RG11_EAC;if(r===eh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===th)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ih)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ah)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ch)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ph)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mh||r===gh||r===_h)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===mh)return d===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vh||r===xh||r===Sh||r===yh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===vh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const T1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class R1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new nv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Vi({vertexShader:T1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Hc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C1 extends Ls{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,S=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new R1,x={},D=i.getContextAttributes();let N=null,U=null;const z=[],F=[],P=new Nt;let W=null;const A=new pi;A.viewport=new nn;const w=new pi;w.viewport=new nn;const V=[A,w],$=new Iy;let re=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=z[ne];return fe===void 0&&(fe=new Md,z[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=z[ne];return fe===void 0&&(fe=new Md,z[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=z[ne];return fe===void 0&&(fe=new Md,z[ne]=fe),fe.getHandSpace()};function le(ne){const fe=F.indexOf(ne.inputSource);if(fe===-1)return;const De=z[fe];De!==void 0&&(De.update(ne.inputSource,ne.frame,p||d),De.dispatchEvent({type:ne.type,data:ne.inputSource}))}function I(){l.removeEventListener("select",le),l.removeEventListener("selectstart",le),l.removeEventListener("selectend",le),l.removeEventListener("squeeze",le),l.removeEventListener("squeezestart",le),l.removeEventListener("squeezeend",le),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let ne=0;ne<z.length;ne++){const fe=F[ne];fe!==null&&(F[ne]=null,z[ne].disconnect(fe))}re=null,ce=null,y.reset();for(const ne in x)delete x[ne];t.setRenderTarget(N),M=null,S=null,g=null,l=null,U=null,Be.stop(),r.isPresenting=!1,t.setPixelRatio(W),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",le),l.addEventListener("selectstart",le),l.addEventListener("selectend",le),l.addEventListener("squeeze",le),l.addEventListener("squeezestart",le),l.addEventListener("squeezeend",le),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Xe=null,He=null;D.depth&&(He=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=D.stencil?Cr:_a,Xe=D.stencil?Go:Gi);const dt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(dt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),U=new Hi(S.textureWidth,S.textureHeight,{format:wi,type:gi,depthTexture:new Xo(S.textureWidth,S.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const De={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Hi(M.framebufferWidth,M.framebufferHeight,{format:wi,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Be.setContext(l),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ne){for(let fe=0;fe<ne.removed.length;fe++){const De=ne.removed[fe],Xe=F.indexOf(De);Xe>=0&&(F[Xe]=null,z[Xe].disconnect(De))}for(let fe=0;fe<ne.added.length;fe++){const De=ne.added[fe];let Xe=F.indexOf(De);if(Xe===-1){for(let dt=0;dt<z.length;dt++)if(dt>=F.length){F.push(De),Xe=dt;break}else if(F[dt]===null){F[dt]=De,Xe=dt;break}if(Xe===-1)break}const He=z[Xe];He&&He.connect(De)}}const ae=new Q,ye=new Q;function xe(ne,fe,De){ae.setFromMatrixPosition(fe.matrixWorld),ye.setFromMatrixPosition(De.matrixWorld);const Xe=ae.distanceTo(ye),He=fe.projectionMatrix.elements,dt=De.projectionMatrix.elements,Kt=He[14]/(He[10]-1),gt=He[14]/(He[10]+1),ht=(He[9]+1)/He[5],Rt=(He[9]-1)/He[5],st=(He[8]-1)/He[0],Qt=(dt[8]+1)/dt[0],G=Kt*st,Yt=Kt*Qt,yt=Xe/(-st+Qt),Lt=yt*-st;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Lt),ne.translateZ(yt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),He[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Kt+yt,L=gt+yt,E=G-Lt,q=Yt+(Xe-Lt),he=ht*gt/L*Ye,ve=Rt*gt/L*Ye;ne.projectionMatrix.makePerspective(E,q,he,ve,Ye,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function O(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let fe=ne.near,De=ne.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(De=y.depthFar)),$.near=w.near=A.near=fe,$.far=w.far=A.far=De,(re!==$.near||ce!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),re=$.near,ce=$.far),$.layers.mask=ne.layers.mask|6,A.layers.mask=$.layers.mask&3,w.layers.mask=$.layers.mask&5;const Xe=ne.parent,He=$.cameras;O($,Xe);for(let dt=0;dt<He.length;dt++)O(He[dt],Xe);He.length===2?xe($,A,w):$.projectionMatrix.copy(A.projectionMatrix),ie(ne,$,Xe)};function ie(ne,fe,De){De===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(De.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Mh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(ne){m=ne,S!==null&&(S.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(ne){return x[ne]};let ge=null;function Ae(ne,fe){if(v=fe.getViewerPose(p||d),b=fe,v!==null){const De=v.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Xe=!1;De.length!==$.cameras.length&&($.cameras.length=0,Xe=!0);for(let gt=0;gt<De.length;gt++){const ht=De[gt];let Rt=null;if(M!==null)Rt=M.getViewport(ht);else{const Qt=g.getViewSubImage(S,ht);Rt=Qt.viewport,gt===0&&(t.setRenderTargetTextures(U,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(U))}let st=V[gt];st===void 0&&(st=new pi,st.layers.enable(gt),st.viewport=new nn,V[gt]=st),st.matrix.fromArray(ht.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ht.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),gt===0&&($.matrix.copy(st.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Xe===!0&&$.cameras.push(st)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const gt=g.getDepthInformation(De[0]);gt&&gt.isValid&&gt.texture&&y.init(gt,l.renderState)}if(He&&He.includes("camera-access")&&C){t.state.unbindTexture(),g=r.getBinding();for(let gt=0;gt<De.length;gt++){const ht=De[gt].camera;if(ht){let Rt=x[ht];Rt||(Rt=new nv,x[ht]=Rt);const st=g.getCameraImage(ht);Rt.sourceTexture=st}}}}for(let De=0;De<z.length;De++){const Xe=F[De],He=z[De];Xe!==null&&He!==void 0&&He.update(Xe,fe,p||d)}ge&&ge(ne,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),b=null}const Be=new av;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){ge=ne},this.dispose=function(){}}}const Er=new va,w1=new an;function D1(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,K_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,D,N,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),g(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,U)):x.isMeshMatcapMaterial?(u(y,x),b(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,D,N):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=t.get(x),N=D.envMap,U=D.envMapRotation;N&&(y.envMap.value=N,Er.copy(U),Er.x*=-1,Er.y*=-1,Er.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(w1.makeRotationFromEuler(Er)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,D,N){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=N*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const D=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function U1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const U=N.program;r.uniformBlockBinding(D,U)}function p(D,N){let U=l[D.id];U===void 0&&(b(D),U=v(D),l[D.id]=U,D.addEventListener("dispose",y));const z=N.program;r.updateUBOMapping(D,z);const F=t.render.frame;u[D.id]!==F&&(S(D),u[D.id]=F)}function v(D){const N=g();D.__bindingPointIndex=N;const U=o.createBuffer(),z=D.__size,F=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function g(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const N=l[D.id],U=D.uniforms,z=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let F=0,P=U.length;F<P;F++){const W=Array.isArray(U[F])?U[F]:[U[F]];for(let A=0,w=W.length;A<w;A++){const V=W[A];if(M(V,F,A,z)===!0){const $=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let ce=0;for(let le=0;le<re.length;le++){const I=re[le],H=C(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,$+ce,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,ce),ce+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(D,N,U,z){const F=D.value,P=N+"_"+U;if(z[P]===void 0)return typeof F=="number"||typeof F=="boolean"?z[P]=F:z[P]=F.clone(),!0;{const W=z[P];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return z[P]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function b(D){const N=D.uniforms;let U=0;const z=16;for(let P=0,W=N.length;P<W;P++){const A=Array.isArray(N[P])?N[P]:[N[P]];for(let w=0,V=A.length;w<V;w++){const $=A[w],re=Array.isArray($.value)?$.value:[$.value];for(let ce=0,le=re.length;ce<le;ce++){const I=re[ce],H=C(I),ae=U%z,ye=ae%H.boundary,xe=ae+ye;U+=ye,xe!==0&&z-xe<H.storage&&(U+=z-xe),$.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=U,U+=H.storage}}}const F=U%z;return F>0&&(U+=z-F),D.__size=U,D.__cache={},this}function C(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function x(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const N1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function L1(){return Pi===null&&(Pi=new wy(N1,16,16,Ds,ga),Pi.name="DFG_LUT",Pi.minFilter=Ln,Pi.magFilter=Ln,Pi.wrapS=ha,Pi.wrapT=ha,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class O1{constructor(t={}){const{canvas:i=ny(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:M=gi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const C=M,y=new Set([Lh,Nh,Uh]),x=new Set([gi,Gi,Ho,Go,wh,Dh]),D=new Uint32Array(4),N=new Int32Array(4);let U=null,z=null;const F=[],P=[];let W=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=hi;let V=0,$=0,re=null,ce=-1,le=null;const I=new nn,H=new nn;let ae=null;const ye=new Ut(0);let xe=0,O=i.width,ie=i.height,ge=1,Ae=null,Be=null;const ne=new nn(0,0,O,ie),fe=new nn(0,0,O,ie);let De=!1;const Xe=new ev;let He=!1,dt=!1;const Kt=new an,gt=new Q,ht=new nn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Qt(){return re===null?ge:1}let G=r;function Yt(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rh}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),G===null){const Y="webgl2";if(G=Yt(Y,R),G===null)throw Yt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw At("WebGLRenderer: "+R.message),R}let yt,Lt,Ye,L,E,q,he,ve,ue,Ze,Ce,ke,tt,Me,be,Fe,Pe,we,lt,k,Ne,Te,ze,Se;function _e(){yt=new Lb(G),yt.init(),Te=new b1(G,yt),Lt=new bb(G,yt,t,Te),Ye=new M1(G,yt),Lt.reversedDepthBuffer&&S&&Ye.buffers.depth.setReversed(!0),L=new zb(G),E=new o1,q=new E1(G,yt,Ye,E,Lt,Te,L),he=new Ab(A),ve=new Nb(A),ue=new Hy(G),ze=new Mb(G,ue),Ze=new Ob(G,ue,L,ze),Ce=new Ib(G,Ze,ue,L),lt=new Fb(G,Lt,q),Fe=new Tb(E),ke=new s1(A,he,ve,yt,Lt,ze,Fe),tt=new D1(A,E),Me=new c1,be=new m1(yt),we=new yb(A,he,ve,Ye,Ce,b,m),Pe=new S1(A,Ce,Lt),Se=new U1(G,L,Lt,Ye),k=new Eb(G,yt,L),Ne=new Pb(G,yt,L),L.programs=ke.programs,A.capabilities=Lt,A.extensions=yt,A.properties=E,A.renderLists=Me,A.shadowMap=Pe,A.state=Ye,A.info=L}_e(),C!==gi&&(W=new Hb(C,i.width,i.height,l,u));const Re=new C1(A,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(O,ie,!1))},this.getSize=function(R){return R.set(O,ie)},this.setSize=function(R,Y,se=!0){if(Re.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,ie=Y,i.width=Math.floor(R*ge),i.height=Math.floor(Y*ge),se===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),W!==null&&W.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(O*ge,ie*ge).floor()},this.setDrawingBufferSize=function(R,Y,se){O=R,ie=Y,ge=se,i.width=Math.floor(R*se),i.height=Math.floor(Y*se),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(C===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,Y,se,ee){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,Y,se,ee),Ye.viewport(I.copy(ne).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,Y,se,ee){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,Y,se,ee),Ye.scissor(H.copy(fe).multiplyScalar(ge).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ye.setScissorTest(De=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){Be=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,se=!0){let ee=0;if(R){let Z=!1;if(re!==null){const Ue=re.texture.format;Z=y.has(Ue)}if(Z){const Ue=re.texture.type,Ie=x.has(Ue),Le=we.getClearColor(),Ge=we.getClearAlpha(),We=Le.r,Je=Le.g,qe=Le.b;Ie?(D[0]=We,D[1]=Je,D[2]=qe,D[3]=Ge,G.clearBufferuiv(G.COLOR,0,D)):(N[0]=We,N[1]=Je,N[2]=qe,N[3]=Ge,G.clearBufferiv(G.COLOR,0,N))}else ee|=G.COLOR_BUFFER_BIT}Y&&(ee|=G.DEPTH_BUFFER_BIT),se&&(ee|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),we.dispose(),Me.dispose(),be.dispose(),E.dispose(),he.dispose(),ve.dispose(),Ce.dispose(),ze.dispose(),Se.dispose(),ke.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ur),Re.removeEventListener("sessionend",Fs),Di.stop()};function nt(R){R.preventDefault(),z0("WebGLRenderer: Context Lost."),w=!0}function Pt(){z0("WebGLRenderer: Context Restored."),w=!1;const R=L.autoReset,Y=Pe.enabled,se=Pe.autoUpdate,ee=Pe.needsUpdate,Z=Pe.type;_e(),L.autoReset=R,Pe.enabled=Y,Pe.autoUpdate=se,Pe.needsUpdate=ee,Pe.type=Z}function Mt(R){At("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function wn(R){const Y=R.target;Y.removeEventListener("dispose",wn),xi(Y)}function xi(R){Zo(R),E.remove(R)}function Zo(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(se){ke.releaseProgram(se)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,se,ee,Z,Ue){Y===null&&(Y=Rt);const Ie=Z.isMesh&&Z.matrixWorld.determinant()<0,Le=er(R,Y,se,ee,Z);Ye.setMaterial(ee,Ie);let Ge=se.index,We=1;if(ee.wireframe===!0){if(Ge=Ze.getWireframeAttribute(se),Ge===void 0)return;We=2}const Je=se.drawRange,qe=se.attributes.position;let $e=Je.start*We,Ct=(Je.start+Je.count)*We;Ue!==null&&($e=Math.max($e,Ue.start*We),Ct=Math.min(Ct,(Ue.start+Ue.count)*We)),Ge!==null?($e=Math.max($e,0),Ct=Math.min(Ct,Ge.count)):qe!=null&&($e=Math.max($e,0),Ct=Math.min(Ct,qe.count));const jt=Ct-$e;if(jt<0||jt===1/0)return;ze.setup(Z,ee,Le,se,Ge);let kt,Ot=k;if(Ge!==null&&(kt=ue.get(Ge),Ot=Ne,Ot.setIndex(kt)),Z.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*Qt()),Ot.setMode(G.LINES)):Ot.setMode(G.TRIANGLES);else if(Z.isLine){let Ke=ee.linewidth;Ke===void 0&&(Ke=1),Ye.setLineWidth(Ke*Qt()),Z.isLineSegments?Ot.setMode(G.LINES):Z.isLineLoop?Ot.setMode(G.LINE_LOOP):Ot.setMode(G.LINE_STRIP)}else Z.isPoints?Ot.setMode(G.POINTS):Z.isSprite&&Ot.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,wt=Z._multiDrawCounts,it=Z._multiDrawCount,xn=Ge?ue.get(Ge).bytesPerElement:1,Xi=E.get(ee).currentProgram.getUniforms();for(let Sn=0;Sn<it;Sn++)Xi.setValue(G,"_gl_DrawID",Sn),Ot.render(Ke[Sn]/xn,wt[Sn])}else if(Z.isInstancedMesh)Ot.renderInstances($e,jt,Z.count);else if(se.isInstancedBufferGeometry){const Ke=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,wt=Math.min(se.instanceCount,Ke);Ot.renderInstances($e,jt,wt)}else Ot.render($e,jt)};function Ps(R,Y,se){R.transparent===!0&&R.side===da&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Lr(R,Y,se),R.side=$a,R.needsUpdate=!0,Lr(R,Y,se),R.side=da):Lr(R,Y,se)}this.compile=function(R,Y,se=null){se===null&&(se=R),z=be.get(se),z.init(Y),P.push(z),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),R!==se&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),z.setupLights();const ee=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ue=Z.material;if(Ue)if(Array.isArray(Ue))for(let Ie=0;Ie<Ue.length;Ie++){const Le=Ue[Ie];Ps(Le,se,Z),ee.add(Le)}else Ps(Ue,se,Z),ee.add(Ue)}),z=P.pop(),ee},this.compileAsync=function(R,Y,se=null){const ee=this.compile(R,Y,se);return new Promise(Z=>{function Ue(){if(ee.forEach(function(Ie){E.get(Ie).currentProgram.isReady()&&ee.delete(Ie)}),ee.size===0){Z(R);return}setTimeout(Ue,10)}yt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Dr=null;function zs(R){Dr&&Dr(R)}function Ur(){Di.stop()}function Fs(){Di.start()}const Di=new av;Di.setAnimationLoop(zs),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(R){Dr=R,Re.setAnimationLoop(R),R===null?Di.stop():Di.start()},Re.addEventListener("sessionstart",Ur),Re.addEventListener("sessionend",Fs),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const se=Re.enabled===!0&&Re.isPresenting===!0,ee=W!==null&&(re===null||se)&&W.begin(A,re);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,Y,re),z=be.get(R,P.length),z.init(Y),P.push(z),Kt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xe.setFromProjectionMatrix(Kt,Ii,Y.reversedDepth),dt=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,dt),U=Me.get(R,F.length),U.init(),F.push(U),Re.enabled===!0&&Re.isPresenting===!0){const Ie=A.xr.getDepthSensingMesh();Ie!==null&&ni(Ie,Y,-1/0,A.sortObjects)}ni(R,Y,0,A.sortObjects),U.finish(),A.sortObjects===!0&&U.sort(Ae,Be),st=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,st&&we.addToRenderList(U,R),this.info.render.frame++,He===!0&&Fe.beginShadows();const Z=z.state.shadowsArray;if(Pe.render(Z,R,Y),He===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&W.hasRenderPass())===!1){const Ie=U.opaque,Le=U.transmissive;if(z.setupLights(),Y.isArrayCamera){const Ge=Y.cameras;if(Le.length>0)for(let We=0,Je=Ge.length;We<Je;We++){const qe=Ge[We];vn(Ie,Le,R,qe)}st&&we.render(R);for(let We=0,Je=Ge.length;We<Je;We++){const qe=Ge[We];rn(U,R,qe,qe.viewport)}}else Le.length>0&&vn(Ie,Le,R,Y),st&&we.render(R),rn(U,R,Y)}re!==null&&$===0&&(q.updateMultisampleRenderTarget(re),q.updateRenderTargetMipmap(re)),ee&&W.end(A),R.isScene===!0&&R.onAfterRender(A,R,Y),ze.resetDefaultState(),ce=-1,le=null,P.pop(),P.length>0?(z=P[P.length-1],He===!0&&Fe.setGlobalState(A.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?U=F[F.length-1]:U=null};function ni(R,Y,se,ee){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){ee&&ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Kt);const Ie=Ce.update(R),Le=R.material;Le.visible&&U.push(R,Ie,Le,se,ht.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const Ie=Ce.update(R),Le=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ht.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ht.copy(Ie.boundingSphere.center)),ht.applyMatrix4(R.matrixWorld).applyMatrix4(Kt)),Array.isArray(Le)){const Ge=Ie.groups;for(let We=0,Je=Ge.length;We<Je;We++){const qe=Ge[We],$e=Le[qe.materialIndex];$e&&$e.visible&&U.push(R,Ie,$e,se,ht.z,qe)}}else Le.visible&&U.push(R,Ie,Le,se,ht.z,null)}}const Ue=R.children;for(let Ie=0,Le=Ue.length;Ie<Le;Ie++)ni(Ue[Ie],Y,se,ee)}function rn(R,Y,se,ee){const{opaque:Z,transmissive:Ue,transparent:Ie}=R;z.setupLightsView(se),He===!0&&Fe.setGlobalState(A.clippingPlanes,se),ee&&Ye.viewport(I.copy(ee)),Z.length>0&&Si(Z,Y,se),Ue.length>0&&Si(Ue,Y,se),Ie.length>0&&Si(Ie,Y,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function vn(R,Y,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ee.id]===void 0){const $e=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ee.id]=new Hi(1,1,{generateMipmaps:!0,type:$e?ga:gi,minFilter:Rr,samples:Lt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ue=z.state.transmissionRenderTarget[ee.id],Ie=ee.viewport||I;Ue.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);const Le=A.getRenderTarget(),Ge=A.getActiveCubeFace(),We=A.getActiveMipmapLevel();A.setRenderTarget(Ue),A.getClearColor(ye),xe=A.getClearAlpha(),xe<1&&A.setClearColor(16777215,.5),A.clear(),st&&we.render(se);const Je=A.toneMapping;A.toneMapping=Bi;const qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),z.setupLightsView(ee),He===!0&&Fe.setGlobalState(A.clippingPlanes,ee),Si(R,se,ee),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),yt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ct=0,jt=Y.length;Ct<jt;Ct++){const kt=Y[Ct],{object:Ot,geometry:Ke,material:wt,group:it}=kt;if(wt.side===da&&Ot.layers.test(ee.layers)){const xn=wt.side;wt.side=kn,wt.needsUpdate=!0,Nr(Ot,se,ee,Ke,wt,it),wt.side=xn,wt.needsUpdate=!0,$e=!0}}$e===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}A.setRenderTarget(Le,Ge,We),A.setClearColor(ye,xe),qe!==void 0&&(ee.viewport=qe),A.toneMapping=Je}function Si(R,Y,se){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ue=R.length;Z<Ue;Z++){const Ie=R[Z],{object:Le,geometry:Ge,group:We}=Ie;let Je=Ie.material;Je.allowOverride===!0&&ee!==null&&(Je=ee),Le.layers.test(se.layers)&&Nr(Le,Y,se,Ge,Je,We)}}function Nr(R,Y,se,ee,Z,Ue){R.onBeforeRender(A,Y,se,ee,Z,Ue),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(A,Y,se,ee,R,Ue),Z.transparent===!0&&Z.side===da&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,A.renderBufferDirect(se,Y,ee,Z,R,Ue),Z.side=$a,Z.needsUpdate=!0,A.renderBufferDirect(se,Y,ee,Z,R,Ue),Z.side=da):A.renderBufferDirect(se,Y,ee,Z,R,Ue),R.onAfterRender(A,Y,se,ee,Z,Ue)}function Lr(R,Y,se){Y.isScene!==!0&&(Y=Rt);const ee=E.get(R),Z=z.state.lights,Ue=z.state.shadowsArray,Ie=Z.state.version,Le=ke.getParameters(R,Z.state,Ue,Y,se),Ge=ke.getProgramCacheKey(Le);let We=ee.programs;ee.environment=R.isMeshStandardMaterial?Y.environment:null,ee.fog=Y.fog,ee.envMap=(R.isMeshStandardMaterial?ve:he).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",wn),We=new Map,ee.programs=We);let Je=We.get(Ge);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===Ie)return Is(R,Le),Je}else Le.uniforms=ke.getUniforms(R),R.onBeforeCompile(Le,A),Je=ke.acquireProgram(Le,Ge),We.set(Ge,Je),ee.uniforms=Le.uniforms;const qe=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Fe.uniform),Is(R,Le),ee.needsLights=xa(R),ee.lightsStateVersion=Ie,ee.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=Je,ee.uniformsList=null,Je}function Ko(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Oc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Is(R,Y){const se=E.get(R);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function er(R,Y,se,ee,Z){Y.isScene!==!0&&(Y=Rt),q.resetTextureUnits();const Ue=Y.fog,Ie=ee.isMeshStandardMaterial?Y.environment:null,Le=re===null?A.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Us,Ge=(ee.isMeshStandardMaterial?ve:he).get(ee.envMap||Ie),We=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Je=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!se.morphAttributes.position,$e=!!se.morphAttributes.normal,Ct=!!se.morphAttributes.color;let jt=Bi;ee.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(jt=A.toneMapping);const kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=kt!==void 0?kt.length:0,Ke=E.get(ee),wt=z.state.lights;if(He===!0&&(dt===!0||R!==le)){const Mn=R===le&&ee.id===ce;Fe.setState(ee,R,Mn)}let it=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==wt.state.version||Ke.outputColorSpace!==Le||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Ge||ee.fog===!0&&Ke.fog!==Ue||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Fe.numPlanes||Ke.numIntersection!==Fe.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==Je||Ke.morphTargets!==qe||Ke.morphNormals!==$e||Ke.morphColors!==Ct||Ke.toneMapping!==jt||Ke.morphTargetsCount!==Ot)&&(it=!0):(it=!0,Ke.__version=ee.version);let xn=Ke.currentProgram;it===!0&&(xn=Lr(ee,Y,Z));let Xi=!1,Sn=!1,ii=!1;const zt=xn.getUniforms(),yn=Ke.uniforms;if(Ye.useProgram(xn.program)&&(Xi=!0,Sn=!0,ii=!0),ee.id!==ce&&(ce=ee.id,Sn=!0),Xi||le!==R){Ye.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(G,"projectionMatrix",R.projectionMatrix),zt.setValue(G,"viewMatrix",R.matrixWorldInverse);const En=zt.map.cameraPosition;En!==void 0&&En.setValue(G,gt.setFromMatrixPosition(R.matrixWorld)),Lt.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&zt.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),le!==R&&(le=R,Sn=!0,ii=!0)}if(Ke.needsLights&&(wt.state.directionalShadowMap.length>0&&zt.setValue(G,"directionalShadowMap",wt.state.directionalShadowMap,q),wt.state.spotShadowMap.length>0&&zt.setValue(G,"spotShadowMap",wt.state.spotShadowMap,q),wt.state.pointShadowMap.length>0&&zt.setValue(G,"pointShadowMap",wt.state.pointShadowMap,q)),Z.isSkinnedMesh){zt.setOptional(G,Z,"bindMatrix"),zt.setOptional(G,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),zt.setValue(G,"boneTexture",Mn.boneTexture,q))}Z.isBatchedMesh&&(zt.setOptional(G,Z,"batchingTexture"),zt.setValue(G,"batchingTexture",Z._matricesTexture,q),zt.setOptional(G,Z,"batchingIdTexture"),zt.setValue(G,"batchingIdTexture",Z._indirectTexture,q),zt.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const fn=se.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&lt.update(Z,se,xn),(Sn||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,zt.setValue(G,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(yn.envMap.value=Ge,yn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&Y.environment!==null&&(yn.envMapIntensity.value=Y.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=L1()),Sn&&(zt.setValue(G,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&Bs(yn,ii),Ue&&ee.fog===!0&&tt.refreshFogUniforms(yn,Ue),tt.refreshMaterialUniforms(yn,ee,ge,ie,z.state.transmissionRenderTarget[R.id]),Oc.upload(G,Ko(Ke),yn,q)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Oc.upload(G,Ko(Ke),yn,q),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&zt.setValue(G,"center",Z.center),zt.setValue(G,"modelViewMatrix",Z.modelViewMatrix),zt.setValue(G,"normalMatrix",Z.normalMatrix),zt.setValue(G,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Mn=ee.uniformsGroups;for(let En=0,Or=Mn.length;En<Or;En++){const yi=Mn[En];Se.update(yi,xn),Se.bind(yi,xn)}}return xn}function Bs(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function xa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(R,Y,se){const ee=E.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const se=E.get(R);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,se=0){re=R,V=Y,$=se;let ee=null,Z=!1,Ue=!1;if(R){const Le=E.get(R);if(Le.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,Le.__webglFramebuffer),I.copy(R.viewport),H.copy(R.scissor),ae=R.scissorTest,Ye.viewport(I),Ye.scissor(H),Ye.setScissorTest(ae),ce=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Le.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&E.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ue=!0);const We=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?ee=We[Y][se]:ee=We[Y],Z=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?ee=E.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?ee=We[se]:ee=We,I.copy(R.viewport),H.copy(R.scissor),ae=R.scissorTest}else I.copy(ne).multiplyScalar(ge).floor(),H.copy(fe).multiplyScalar(ge).floor(),ae=De;if(se!==0&&(ee=Sa),Ye.bindFramebuffer(G.FRAMEBUFFER,ee)&&Ye.drawBuffers(R,ee),Ye.viewport(I),Ye.scissor(H),Ye.setScissorTest(ae),Z){const Le=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,se)}else if(Ue){const Le=Y;for(let Ge=0;Ge<R.textures.length;Ge++){const We=E.get(R.textures[Ge]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ge,We.__webglTexture,se,Le)}}else if(R!==null&&se!==0){const Le=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Le.__webglTexture,se)}ce=-1},this.readRenderTargetPixels=function(R,Y,se,ee,Z,Ue,Ie,Le=0){if(!(R&&R.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge){Ye.bindFramebuffer(G.FRAMEBUFFER,Ge);try{const We=R.textures[Le],Je=We.format,qe=We.type;if(!Lt.textureFormatReadable(Je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(qe)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ee&&se>=0&&se<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Le),G.readPixels(Y,se,ee,Z,Te.convert(Je),Te.convert(qe),Ue))}finally{const We=re!==null?E.get(re).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,Y,se,ee,Z,Ue,Ie,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge)if(Y>=0&&Y<=R.width-ee&&se>=0&&se<=R.height-Z){Ye.bindFramebuffer(G.FRAMEBUFFER,Ge);const We=R.textures[Le],Je=We.format,qe=We.type;if(!Lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Le),G.readPixels(Y,se,ee,Z,Te.convert(Je),Te.convert(qe),0);const Ct=re!==null?E.get(re).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Ct);const jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await iy(G,jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer($e),G.deleteSync(jt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,se=0){const ee=Math.pow(2,-se),Z=Math.floor(R.image.width*ee),Ue=Math.floor(R.image.height*ee),Ie=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Ie,Le,Z,Ue),Ye.unbindTexture()};const tr=G.createFramebuffer(),ya=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,se=null,ee=null,Z=0,Ue=null){Ue===null&&(Z!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Z,Z=0):Ue=0);let Ie,Le,Ge,We,Je,qe,$e,Ct,jt;const kt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(se!==null)Ie=se.max.x-se.min.x,Le=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,Je=se.min.y,qe=se.isBox3?se.min.z:0;else{const fn=Math.pow(2,-Z);Ie=Math.floor(kt.width*fn),Le=Math.floor(kt.height*fn),R.isDataArrayTexture?Ge=kt.depth:R.isData3DTexture?Ge=Math.floor(kt.depth*fn):Ge=1,We=0,Je=0,qe=0}ee!==null?($e=ee.x,Ct=ee.y,jt=ee.z):($e=0,Ct=0,jt=0);const Ot=Te.convert(Y.format),Ke=Te.convert(Y.type);let wt;Y.isData3DTexture?(q.setTexture3D(Y,0),wt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),wt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),wt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const it=G.getParameter(G.UNPACK_ROW_LENGTH),xn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Xi=G.getParameter(G.UNPACK_SKIP_PIXELS),Sn=G.getParameter(G.UNPACK_SKIP_ROWS),ii=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,kt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,kt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,We),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qe);const zt=R.isDataArrayTexture||R.isData3DTexture,yn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const fn=E.get(R),Mn=E.get(Y),En=E.get(fn.__renderTarget),Or=E.get(Mn.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let yi=0;yi<Ge;yi++)zt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Z,qe+yi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Ue,jt+yi)),G.blitFramebuffer(We,Je,Ie,Le,$e,Ct,Ie,Le,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||E.has(R)){const fn=E.get(R),Mn=E.get(Y);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,tr),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,ya);for(let En=0;En<Ge;En++)zt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,Z,qe+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,Z),yn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ue,jt+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ue),Z!==0?G.blitFramebuffer(We,Je,Ie,Le,$e,Ct,Ie,Le,G.COLOR_BUFFER_BIT,G.NEAREST):yn?G.copyTexSubImage3D(wt,Ue,$e,Ct,jt+En,We,Je,Ie,Le):G.copyTexSubImage2D(wt,Ue,$e,Ct,We,Je,Ie,Le);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(wt,Ue,$e,Ct,jt,Ie,Le,Ge,Ot,Ke,kt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(wt,Ue,$e,Ct,jt,Ie,Le,Ge,Ot,kt.data):G.texSubImage3D(wt,Ue,$e,Ct,jt,Ie,Le,Ge,Ot,Ke,kt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,$e,Ct,Ie,Le,Ot,Ke,kt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,$e,Ct,kt.width,kt.height,Ot,kt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,$e,Ct,Ie,Le,Ot,Ke,kt);G.pixelStorei(G.UNPACK_ROW_LENGTH,it),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Sn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ii),Ue===0&&Y.generateMipmaps&&G.generateMipmap(wt),Ye.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){V=0,$=0,re=null,Ye.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(t),i.unpackColorSpace=Et._getUnpackColorSpace()}}function P1({onSelectSession:o}){const t=mi.useRef(null),[i,r]=mi.useState(null),l=[{id:1,title:"Sesión 1",enabled:!0},{id:2,title:"Sesión 2",enabled:!1},{id:3,title:"Sesión 3",enabled:!1},{id:4,title:"Sesión 4",enabled:!1},{id:5,title:"Sesión 5",enabled:!1},{id:6,title:"Sesión 6",enabled:!1}];mi.useEffect(()=>{const d=new Cy,h=new pi(75,window.innerWidth/window.innerHeight,.1,1e3),m=new O1({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),m.setClearColor(658983,1),t.current.appendChild(m.domElement);const p=new qn,v=5e3,g=new Float32Array(v*3),S=new Float32Array(v*3);for(let ce=0;ce<v*3;ce+=3){g[ce]=(Math.random()-.5)*100,g[ce+1]=(Math.random()-.5)*100,g[ce+2]=(Math.random()-.5)*100;const le=Math.random()>.5?new Ut(65525):new Ut(16711935);S[ce]=le.r,S[ce+1]=le.g,S[ce+2]=le.b}p.setAttribute("position",new _i(g,3)),p.setAttribute("color",new _i(S,3));const M=new tv({size:.15,vertexColors:!0,transparent:!0,opacity:.8,blending:Dd}),b=new Ly(p,M);d.add(b);const C=[],y=new Hh(10,3,16,100),x=new Bo({color:65525,wireframe:!0,transparent:!0,opacity:.3}),D=new vi(y,x);D.position.set(-20,0,-30),d.add(D),C.push(D);const N=new Ih(8,0),U=new Bo({color:16711935,wireframe:!0,transparent:!0,opacity:.3}),z=new vi(N,U);z.position.set(20,10,-40),d.add(z),C.push(z);const F=new Bh(6,32,32),P=new Bo({color:65525,wireframe:!0,transparent:!0,opacity:.2}),W=new vi(F,P);W.position.set(0,-15,-25),d.add(W),C.push(W),h.position.z=30;let A=0,w=0;const V=ce=>{A=ce.clientX/window.innerWidth*2-1,w=-(ce.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",V);const $=()=>{requestAnimationFrame($),b.rotation.y+=5e-4,b.rotation.x+=2e-4,C.forEach((ce,le)=>{ce.rotation.x+=.003*(le+1),ce.rotation.y+=.005*(le+1)}),h.position.x+=(A*5-h.position.x)*.05,h.position.y+=(w*5-h.position.y)*.05,h.lookAt(d.position),m.render(d,h)};$();const re=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",re),()=>{window.removeEventListener("mousemove",V),window.removeEventListener("resize",re),t.current?.removeChild(m.domElement),p.dispose(),M.dispose(),y.dispose(),x.dispose(),N.dispose(),U.dispose(),F.dispose(),P.dispose()}},[]);const u=d=>{d.enabled&&o(d.id)};return Ee.jsxs("div",{className:"landing-container",children:[Ee.jsx("div",{ref:t,className:"three-background"}),Ee.jsxs("div",{className:"landing-content",children:[Ee.jsxs("div",{className:"landing-header",children:[Ee.jsx("h1",{className:"landing-title",children:"Computación Visual"}),Ee.jsx("h2",{className:"landing-subtitle",children:"y Metaverso"})]}),Ee.jsx("div",{className:"sessions-grid",children:l.map(d=>Ee.jsxs("div",{className:"session-card-wrapper",onMouseEnter:()=>!d.enabled&&r(d.id),onMouseLeave:()=>r(null),children:[Ee.jsxs("button",{className:`session-card ${d.enabled?"enabled":"disabled"}`,onClick:()=>u(d),disabled:!d.enabled,children:[Ee.jsx("span",{className:"session-number",children:String(d.id).padStart(2,"0")}),Ee.jsx("span",{className:"session-title",children:d.title}),d.enabled&&Ee.jsx("span",{className:"session-arrow",children:"→"})]}),!d.enabled&&i===d.id&&Ee.jsx("div",{className:"tooltip",children:"Próximamente..."})]},d.id))})]})]})}function z1(){return Ee.jsxs("header",{className:"header",children:[Ee.jsx("h1",{children:"COMPUTACIÓN VISUAL"}),Ee.jsx("p",{className:"subtitle",children:"CGI · Sesión 1 · Fundamentos"})]})}function F1({items:o}){const[t,i]=mi.useState(0),[r,l]=mi.useState({}),u=()=>{i(g=>(g+1)%o.length)},d=()=>{i(g=>(g-1+o.length)%o.length)},h=g=>{i(g)},m=g=>{l(S=>({...S,[g]:!S[g]}))},p=o[t],v=r[t]||!1;return Ee.jsxs("div",{className:"carousel-container",children:[Ee.jsxs("div",{className:"carousel-wrapper",children:[Ee.jsx("button",{className:"carousel-btn prev",onClick:d,children:"‹"}),Ee.jsxs("div",{className:"carousel-content",children:[p.type==="video"?Ee.jsx("div",{className:"carousel-media",children:Ee.jsx("iframe",{src:p.src,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):p.type==="gif"?Ee.jsxs("div",{className:"carousel-media gif-container",onClick:()=>m(t),children:[Ee.jsx("img",{src:v?p.src:p.thumbnail,alt:p.title,className:"gif-image"}),!v&&Ee.jsxs("div",{className:"gif-play-overlay",children:[Ee.jsx("div",{className:"play-icon",children:"▶"}),Ee.jsx("p",{className:"play-text",children:"Click para reproducir"})]}),v&&Ee.jsx("div",{className:"gif-pause-overlay",children:Ee.jsx("div",{className:"pause-icon",children:"⏸"})})]}):Ee.jsx("div",{className:"carousel-media",children:Ee.jsx("img",{src:p.src,alt:p.title})}),p.showButton&&p.buttonText&&Ee.jsx("a",{href:p.buttonLink,target:"_blank",rel:"noopener noreferrer",className:"carousel-overlay-btn",children:p.buttonText})]}),Ee.jsx("button",{className:"carousel-btn next",onClick:u,children:"›"})]}),Ee.jsx("div",{className:"carousel-indicators",children:o.map((g,S)=>Ee.jsx("button",{className:`indicator ${S===t?"active":""}`,onClick:()=>h(S)},S))}),Ee.jsx("p",{className:"carousel-title",children:p.title})]})}const I1="/compvisual/assets/kispinal-BJK0m-PA.gif",B1="/compvisual/assets/duck-DJYxhUtg.jpg",H1="/compvisual/assets/brunos-01WWNjYJ.png",G1="/compvisual/assets/bmw-C9KVKGmV.jpg",V1="/compvisual/assets/expedition33-D9yIJbnY.jpg",X1="/compvisual/assets/silksong-C8EHR7CK.jpg",k1="/compvisual/assets/starwars-B9B7bqF2.jpg",W1="/compvisual/assets/fotorrealismo-B4jDgd-9.jpg",q1="/compvisual/assets/syd-BavSGYFo.jpg",Y1="/compvisual/assets/pekora-ENjMANXy.jpg",j1="/compvisual/assets/revit-avlfx24x.jpg";function Z1(){const o=[{type:"gif",src:I1,thumbnail:B1,title:"¿Se mueven los personajes a traves de la plataforma? NO!",buttonText:null,showButton:!1},{type:"image",src:G1,title:"3D Graphics en sitios web",buttonText:"Explorar",buttonLink:"https://www.bmwusa.com/build-your-own.html#/studio/fszvh1hc/exterior/color",showButton:!0},{type:"image",src:H1,title:"3D Graphics en sitios web",buttonText:"Explorar",buttonLink:"https://bruno-simon.com/",showButton:!0},{type:"image",src:V1,title:"Videojuegos",buttonText:"Ver mas",buttonLink:"https://www.youtube.com/watch?v=2VaLOc1FpSo",showButton:!0},{type:"image",src:X1,title:"Videojuegos",buttonText:"Ver Más",buttonLink:"https://www.youtube.com/watch?v=yQxwbZsL14Y",showButton:!0},{type:"image",src:k1,title:"Ejemplo de CGI en el Cine",buttonText:"Ver Más",buttonLink:"https://youtu.be/OEch4j4KyoU?t=559",showButton:!0},{type:"image",src:W1,title:"CGI Fotorrealista",buttonText:"",buttonLink:"https://www.imaginar.co.uk/style/cgi-photo-realistic-owl-renderings/",showButton:!0},{type:"image",src:q1,title:"Video Mapping",buttonText:"Ver Mas",buttonLink:"https://youtu.be/snT8psrPxmA?t=32",showButton:!0},{type:"image",src:Y1,title:"Animación Holografica - Realidad Aumentada",buttonText:"Ver Mas",buttonLink:"https://youtu.be/zBuJD-ugT_g?t=7",showButton:!0},{type:"image",src:j1,title:"Simulación - Realidad Aumentada",buttonText:"Ver Mas",buttonLink:"https://youtu.be/r0ZmaljQlW8?t=25",showButton:!0}];return Ee.jsxs("section",{className:"section",children:[Ee.jsx("h2",{children:"¿Qué es CGI?"}),Ee.jsx("p",{children:"La computación visual (CGI, Computer-Generated Imagery) es el conjunto de técnicas y herramientas que permiten crear imágenes, animaciones y efectos visuales mediante el uso de computadoras. Hoy en día, el CGI es un pilar fundamental en cine, publicidad, videojuegos, experiencias inmersivas y diseño digital."}),Ee.jsx("h3",{children:"Algunos ejemplos: "}),Ee.jsx(F1,{items:o})]})}function T_({concept:o,onClick:t}){return Ee.jsxs("div",{className:"concept-card",onClick:t,children:[Ee.jsxs("h4",{children:[Ee.jsx("span",{className:"icon",children:o.icon})," ",o.title]}),Ee.jsx("p",{children:o.description}),Ee.jsx("p",{className:"click-hint",children:"Click para ver ejemplo ›"})]})}const A_={fundamentals:[{id:"pixel",icon:"🔲",title:"Pixel y Resolución",description:"Unidad mínima de información visual",modalTitle:"🔲 Pixel y Resolución",content:`
        <p><strong>Definición:</strong> Un pixel (picture element) es la unidad mínima de información visual en una imagen digital. La resolución determina cuántos pixels existen en un área determinada.</p>
        
        <img src="https://www.researchgate.net/profile/Enrique-Ramon-Balmaseda/publication/277155032/figure/fig8/AS:352191366877202@1460980373891/Figura-28-Matriz-de-una-imagen-Ejemplo-de-descriptor-basado-en-pixeles.png" alt="Resoluciones">
        
        <p><strong>Conceptos clave:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li>Baja resolución (720p): 1280×720 pixels</li>
          <li>Full HD (1080p): 1920×1080 pixels</li>
          <li>4K UHD: 3840×2160 pixels</li>
          <li>A mayor resolución, mayor detalle y calidad</li>
        </ul>

        <p><strong>Modelos de Color</strong></p>
        <img src="http://15462.courses.cs.cmu.edu/fall2017content/article_images/11_1.jpg" alt="Modelos de color">
        

        
        
        
      `},{id:"vectores",icon:"📐",title:"Gráficos Vectoriales",description:"Imágenes basadas en matemáticas",modalTitle:"📐 Gráficos Vectoriales",content:`
        <p><strong>Definición:</strong> Los gráficos vectoriales utilizan fórmulas matemáticas para definir formas, líneas y colores, permitiendo escalado infinito sin pérdida de calidad.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=Vector+vs+Raster:+Escalado+sin+pérdida" alt="Vectores">
        
        <p><strong>Ventajas:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li>Escalabilidad infinita</li>
          <li>Archivos más livianos</li>
          <li>Ideal para logos, tipografía e ilustración</li>
          <li>Editable matemáticamente</li>
        </ul>
        
        <p><strong>Software común:</strong> Adobe Illustrator, Inkscape, Figma</p>
      `},{id:"espacios",icon:"📊",title:"Espacios 2D y 3D",description:"Representación plana vs. tridimensional",modalTitle:"📊 Espacios 2D y 3D",content:`
        <p><strong>2D (Bidimensional):</strong> Utiliza coordenadas X (horizontal) e Y (vertical) para posicionar elementos en un plano.</p>
        
        <p><strong>3D (Tridimensional):</strong> Añade el eje Z (profundidad), permitiendo representar volumen y perspectiva.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/00fff5?text=Sistema+de+Coordenadas+2D+(X,Y)+vs+3D+(X,Y,Z)" alt="Coordenadas">
        
        <p><strong>Aplicaciones:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li>2D: Interfaces, motion graphics, ilustración digital</li>
          <li>3D: Modelado, arquitectura, videojuegos, VFX cinematográficos</li>
        </ul>
      `}],production:[{id:"modelado",icon:"🗿",title:"Modelado",description:"Construcción de figuras en 3D",modalTitle:"🗿 Modelado 3D",content:`
        <p><strong>Definición:</strong> Proceso de crear representaciones tridimensionales de objetos mediante polígonos, superficies o sculpting digital.</p>
        
        <iframe src="https://www.youtube.com/embed/VT5oZndzj68" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        
        <p><strong>Técnicas principales:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Box modeling:</strong> Partir de formas primitivas</li>
          <li><strong>Sculpting:</strong> Modelado orgánico como escultura digital</li>
          <li><strong>NURBS:</strong> Superficies curvas matemáticas</li>
          <li><strong>Procedural:</strong> Geometría generada por algoritmos</li>
        </ul>
        
        <p><strong>Software:</strong> Blender, Maya, 3ds Max, ZBrush</p>
      `},{id:"texturas",icon:"🎨",title:"Materiales y Texturas",description:"Apariencia superficial de objetos",modalTitle:"🎨 Materiales y Texturas",content:`
        <p><strong>Definición:</strong> Las texturas son imágenes aplicadas a modelos 3D para definir color, rugosidad, reflectividad y otros aspectos visuales de la superficie.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=PBR+Textures:+Albedo,+Normal,+Roughness,+Metallic" alt="Texturas">
        
        <p><strong>Mapas comunes:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Albedo/Diffuse:</strong> Color base</li>
          <li><strong>Normal Map:</strong> Detalle de superficie sin geometría adicional</li>
          <li><strong>Roughness:</strong> Qué tan áspera o suave es la superficie</li>
          <li><strong>Metallic:</strong> Propiedades metálicas del material</li>
          <li><strong>Displacement:</strong> Altera la geometría real</li>
        </ul>
      `},{id:"iluminacion",icon:"💡",title:"Iluminación",description:"Interacción de luz con objetos",modalTitle:"💡 Iluminación",content:`
        <p><strong>Definición:</strong> La iluminación simula cómo la luz interactúa con objetos y superficies, creando atmósfera y realismo.</p>
        
        <iframe src="https://www.youtube.com/embed/VnG2gOKV9dw" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        
        <p><strong>Tipos de luz:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Direccional:</strong> Simula luz solar (rayos paralelos)</li>
          <li><strong>Puntual:</strong> Emite desde un punto en todas direcciones</li>
          <li><strong>Spot:</strong> Cono de luz direccional</li>
          <li><strong>Área:</strong> Luz que emite desde una superficie</li>
          
        </ul>
      `},{id:"animacion",icon:"🎬",title:"Animación",description:"Generación de movimiento",modalTitle:"🎬 Animación",content:`
        <p><strong>Definición:</strong> Proceso de crear movimiento mediante fotogramas secuenciales o simulaciones.</p>
        
        <iframe src="https://www.youtube.com/embed/9RyYwv_WRvQ" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        
        <p><strong>Técnicas principales:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Keyframe Animation:</strong> Definir poses clave, el software interpola el resto</li>
          <li><strong>Motion Capture:</strong> Captura de movimiento real</li>
          <li><strong>Procedural:</strong> Movimiento generado por algoritmos</li>
          <li><strong>Rigging:</strong> Esqueleto digital para controlar personajes</li>
        </ul>
      `},{id:"render",icon:"⚡",title:"Renderización",description:"Cálculo de imagen final",modalTitle:"⚡ Renderización",content:`
        <p><strong>Definición:</strong> Proceso computacional que calcula la imagen final considerando geometría, materiales, luces y cámara.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/00fff5?text=Render+Process:+Wireframe+→+Shading+→+Final" alt="Render">
        
        <p><strong>Métodos de renderizado:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Rasterización:</strong> Rápido, usado en videojuegos y tiempo real</li>
          <li><strong>Ray Tracing:</strong> Simula rayos de luz físicamente, ultra realista</li>
          <li><strong>Path Tracing:</strong> Múltiples rebotes de luz, calidad máxima</li>
        </ul>
        
        <p><strong>Engines populares:</strong> V-Ray, Arnold, Octane, Cycles, Unreal Engine</p>
      `}]};function K1({openModal:o}){return Ee.jsxs("section",{className:"section",children:[Ee.jsx("h2",{children:"1. Conceptos Básicos"}),Ee.jsx("h3",{children:"Fundamentos Visuales"}),Ee.jsx("div",{className:"concepts-grid",children:A_.fundamentals.map(t=>Ee.jsx(T_,{concept:t,onClick:()=>o(t)},t.id))}),Ee.jsx("h3",{children:"Elementos de Producción 3D"}),Ee.jsx("div",{className:"concepts-grid",children:A_.production.map(t=>Ee.jsx(T_,{concept:t,onClick:()=>o(t)},t.id))})]})}function Q1({era:o,onClick:t}){return Ee.jsxs("div",{className:"timeline-item",onClick:t,children:[Ee.jsx("h4",{children:o.title}),Ee.jsx("p",{children:o.description}),Ee.jsx("p",{className:"click-hint",children:"Click para ver más ›"})]})}const J1="/compvisual/assets/whir-BHIKBvKm.jpg",$1=[{id:"era1",title:"Primeros Pasos (1950–1960)",description:"Uso inicial en laboratorios militares y universidades. Primeras imágenes generadas por computador.",content:`
      <p>Los inicios de la computación gráfica ocurrieron en laboratorios de investigación militar y universidades.</p>
      <p>El<a 
            href="https://youtu.be/TJYJexFz8kY?t=180"
            target="_blank"
            rel="noopener noreferrer"
           > proyecto Whirlwind (MIT) </a>  introduce pantallas CRT para visualizar datos de radar en 1951</p>
      
      <img src="${J1}" alt="proyecto Whirlwind (MIT)">
      
      <p><strong>Hitos importantes:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>1958:</strong> Primer videojuego gráfico (Tennis for Two)
            <iframe src="https://www.youtube.com/embed/6QYNlPLzj90" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
        
        </li>
        
        
      </ul>
    `},{id:"era2",title:"Década de 1960 – Interactividad y fundamentos",description:" Surgen hitos como Sketchpad, que introduce el dibujo vectorial y la interacción hombre-máquina.Se establecen las bases matemáticas y conceptuales del 3D y el shading moderno.",content:`
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><p><strong>1963:</strong> Ivan Sutherland crea Sketchpad, primer sistema CAD</p>
        
        <p><img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/19236498/image/medium-283795586f992bfd49d125934fafdc1d.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20260129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260129T214657Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f968e93305d402ad8964efec54ae388bb58ab3a23bf493d86415ebe8d1c8903a" alt="proyecto Whirlwind (MIT)"></p>
        
        </li>

        <li><p>1963 <strong>Larry Roberts desarrolla el primer algoritmo efectivo de hidden-line removal.</p>
             <img src="https://docs.imsidesign.com/projects/DesignCAD-2022-Userguide/DesignCAD-2022-User-Guide/Storage/hidden-line-removal-img00032.png" alt="proyecto Whirlwind (MIT)">
        
        
        </li>
        <li><strong>1968:</strong> Primeras animaciones 3D por computadora

            <iframe src="https://www.youtube.com/embed/GBlQb6Me_1k" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
            
        </li>
        
      </ul>
      
      
    `},{id:"era3",title:"Década de 1970 – Shading, visibilidad y cine",description:"En los años 70 la CGI evoluciona de lo experimental a lo teórico, con avances clave en modelos de iluminación y sombreado.",content:`
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><p><strong>1971:</strong> Primeros algoritmos de sombreado (<strong>shading</strong>) (Phong, Gouraud)</p>
        <p>Shading se define como el proceso matemático y computacional que determina el color y la intensidad de cada punto (o píxel) de una superficie en función de la luz, el material y la geometría.</p>
        <img src="https://i.pcmag.com/imagery/encyclopedia-terms/phong-shading-_shading.fit_lim.size_960x.gif" alt="Shading">
        
        
        
        </li>
        <li><strong>1972:</strong> Atari crea Pong

            <iframe src="https://www.youtube.com/embed/uCqIkgFKHr4" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
            
        </li>

        <li><strong>1973:</strong> Westworld usa animación 2D por computadora en cine.

            <iframe src="https://www.youtube.com/embed/MB7YIYER9hk" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
            
        </li>
        <li> EN los 70's se forma Lucas Films y su primer grupo de Graficos por computadora</li>
        <li><p><strong>1975:</strong> Gun Fight  de Midway como el primer videojuego que usó sprites de forma clara.</p>
       
        
        
        
        </li>

        
        
      </ul>
      
     
    `},{id:"era4",title:"Década de 1980 – Realismo y estudios de animación ",description:"En los años 80 la CGI se populariza gracias a los microcomputadores, los videojuegos y el cine experimental.Se consolidan  los sprites y las primeras técnicas de animación y render 3D comercial.",content:`
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>(1980) Turner Whitted formaliza el ray tracing moderno (manejo de luces)
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Recursive_raytrace_of_a_sphere.png" alt="Ray tracing">
        </li>
        
        <li>Dominancia de  Nintendo y Sega en el mundo de los videojuegos, uso del paralax

        <p> <iframe src="https://www.youtube.com/embed/z9tBce8eFqE" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        </p>

        <p> <iframe src="https://www.youtube.com/embed/nn7ihtdIM2s" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        </p>

        
        </li>
        <li><strong>1982</strong> Se funda Sillicon Graphics

        <img src="https://images.theconversation.com/files/527551/original/file-20230522-14905-qwgz75.jpg?ixlib=rb-4.1.0&rect=0%2C204%2C3600%2C1800&q=50&auto=format&w=1336&h=668&fit=crop&dpr=2" alt="Jurassic park">
        
            
        
        </li>
        <li><strong>1982</strong> Tron muestra extensivo uso de CGI 3D en cine.</li>
        <li><strong>1984</strong> The Adventures of André and Wally B., primer corto completamente CGI.</li>
        
      </ul>
    `},{id:"era5",title:" Decada de los 1990 Estandarización y popularización",description:"En los 90 la CGI pasa de experimento a herramienta central en cine y videojuegos.Se logra realismo visual, integración con acción real y el nacimiento del 3D comercial y en tiempo real.En los años 80 la CGI se populariza gracias a los microcomputadores, los videojuegos y el cine experimental.Se consolidan  los sprites y las primeras técnicas de animación y render 3D comercial.",content:`
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        
        
        <li> (1991) Beauty and the Beast combina personajes 2D con escenarios 3D. No es la primera pelicula en hacerlo pero es importante por el uso narrativo de esta

        <p> <iframe src="https://www.youtube.com/embed/iuThvc4Fl9Q" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        </p>

        

        
        </li>
        <li><strong>(1993)</strong> Se funda Nvidia.</li>

        <li> Donkey Kong country / Killer instinct (renderizan en 3D, digitalizan a 2D) 
        </li>
        <li> Comienza la competencia entre Sony, nintendo y sega por el dominio de las consolas

        <img src="https://imagenes.hobbyconsolas.com/files/image_990_auto/uploads/imagenes/2023/04/25/6901b24ad64d4.jpeg" alt="nintendo vs sony">
        
            
        
        </li>
        
        
      </ul>
    `},{id:"era5",title:" Años 2000 - Fotorrealismo",description:"",content:`
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        
        
        <li> 2001 – Final Fantasy: The Spirits Within impulsa el debate del uncanny valley.
        </li>
        
        

        <li> Generación de consolas “Mas famosa” : Play station 2 (2000), dreamcast (1998),  Gamecube 2001,Xbox (2001)
        </li>
        <li> Era de los FPS "¿Can it run Crysis?"
        
        </li>
        
        
      </ul>
    `}];function eA({openModal:o}){return Ee.jsxs("section",{className:"section",children:[Ee.jsx("h2",{children:"2. Historia y Evolución"}),Ee.jsx("div",{className:"timeline",children:$1.map(t=>Ee.jsx(Q1,{era:t,onClick:()=>o(t)},t.id))})]})}function tA({trend:o,onClick:t}){return Ee.jsxs("div",{className:"trend-card",onClick:t,children:[Ee.jsxs("h4",{children:[o.icon," ",o.title]}),Ee.jsx("p",{children:o.description}),Ee.jsx("p",{className:"click-hint",children:"Click para ver más ›"})]})}const nA=[{id:"realtime",icon:"🎮",title:"Render en Tiempo Real",description:"Motores como Unreal Engine y Unity permiten ver resultados instantáneos.",content:`
      <p>Tecnología que permite visualizar escenas 3D complejas instantáneamente, sin espera de renderizado.</p>
      
      <iframe src="https://www.youtube.com/embed/qC5KtatMcUw" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
      <p><strong>Aplicaciones:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>Videojuegos AAA de nueva generación</li>
        <li>Previsualización cinematográfica instantánea</li>
        <li>Producción virtual en sets con LED walls</li>
        <li>Experiencias interactivas y arquitectura</li>
      </ul>
      
      <p><strong>Engines principales:</strong> Unreal Engine 5, Unity, CryEngine</p>
    `},{id:"ia",icon:"🤖",title:"Integración con IA",description:"Generación de texturas y animaciones automatizadas.",content:`
      <p>La Inteligencia Artificial está revolucionando cada etapa del pipeline de CGI.</p>
      
      <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=AI-Generated+Assets+and+Animation" alt="IA">
      
      <p><strong>Aplicaciones actuales:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>Generación de texturas:</strong> Crear materiales fotorrealistas con prompts</li>
        <li><strong>Animación facial:</strong> Transferencia de expresiones automática</li>
        <li><strong>Upscaling:</strong> Aumentar resolución con AI (DLSS, FSR)</li>
        <li><strong>Rotoscopia automática:</strong> Separación de sujetos del fondo</li>
        <li><strong>Generación 3D:</strong> Modelos 3D desde descripciones de texto</li>
      </ul>
      
      <p><strong>Herramientas:</strong> Runway ML, DALL-E, Stable Diffusion, Wonder Dynamics</p>
    `},{id:"virtual",icon:"🎬",title:"Producción Virtual",description:"Entornos 3D proyectados en pantallas LED.",content:`
      <p>Técnica que combina sets físicos con entornos digitales proyectados en pantallas LED gigantes.</p>
      
      <iframe src="https://www.youtube.com/embed/Ufp8weYYDE8" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
      <p><strong>Ventajas:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>Elimina pantallas verdes y su complejo post-proceso</li>
        <li>Iluminación realista del entorno sobre actores</li>
        <li>Feedback inmediato del resultado final</li>
        <li>Mayor flexibilidad creativa en set</li>
        <li>Perspectiva correcta con tracking de cámara</li>
      </ul>
      
      <p><strong>Producciones destacadas:</strong> The Mandalorian, Thor: Love and Thunder, The Batman</p>
    `},{id:"hibrido",icon:"🎨",title:"Hibridación 2D–3D",description:"Combinación de ilustración 2D con geometría 3D.",content:`
      <p>Estilo que mezcla técnicas de ilustración 2D tradicional con geometría y animación 3D.</p>
      
      <img src="https://via.placeholder.com/800x400/0a0e27/00fff5?text=Spider-Verse+Style:+2D+Look+with+3D+Pipeline" alt="Híbrido">
      
      <p><strong>Características:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>Geometría 3D con shading cel/toon</li>
        <li>Líneas dibujadas a mano sobre modelos 3D</li>
        <li>Timing irregular (animación "en doses/treses")</li>
        <li>Efectos visuales estilizados no fotorrealistas</li>
      </ul>
      
      <p><strong>Ejemplos:</strong> Spider-Man: Into/Across the Spider-Verse, The Mitchells vs the Machines, Arcane</p>
    `},{id:"simulacion",icon:"💧",title:"Simulaciones Físicas",description:"Fuego, fluidos, cabello con mayor realismo.",content:`
      <p>Uso de algoritmos que replican comportamientos físicos del mundo real.</p>
      
      <iframe src="https://www.youtube.com/embed/iKAVRgIrUOU" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
      <p><strong>Tipos de simulación:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>Fluidos:</strong> Agua, lava, humo (técnicas SPH, FLIP)</li>
        <li><strong>Rigid body:</strong> Destrucción, colisiones de objetos sólidos</li>
        <li><strong>Cloth/Tela:</strong> Ropa, banderas, cortinas</li>
        <li><strong>Cabello/Fur:</strong> Pelo y pelaje realista</li>
        <li><strong>Partículas:</strong> Fuego, explosiones, polvo, magia</li>
      </ul>
      
      <p><strong>Software especializado:</strong> Houdini, RealFlow, Bifrost, PhoenixFD</p>
    `},{id:"ar",icon:"🥽",title:"Realidad Aumentada",description:"CGI en tiempo real en espacios físicos.",content:`
      <p>Integración de elementos CGI en tiempo real sobre el mundo físico capturado por cámaras.</p>
      
      <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=AR+in+Live+Broadcasting+and+Events" alt="AR">
      
      <p><strong>Aplicaciones comerciales:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>Deportes:</strong> Marcadores, líneas de offside, estadísticas 3D</li>
        <li><strong>Noticias:</strong> Gráficos informativos flotantes</li>
        <li><strong>Conciertos:</strong> Efectos visuales en vivo con artistas</li>
        <li><strong>Publicidad:</strong> Productos virtuales en espacios reales</li>
        <li><strong>Retail:</strong> "Pruébate" ropa y maquillaje virtualmente</li>
      </ul>
      
      <p><strong>Plataformas:</strong> ARKit (Apple), ARCore (Google), Spark AR (Meta)</p>
    `}];function iA({openModal:o}){return Ee.jsxs("section",{className:"section",children:[Ee.jsx("h2",{children:"3. Tendencias Actuales"}),Ee.jsx("div",{className:"trend-grid",children:nA.map(t=>Ee.jsx(tA,{trend:t,onClick:()=>o(t)},t.id))})]})}function aA(){return Ee.jsxs("footer",{className:"footer",children:[Ee.jsx("p",{children:"INTRODUCCIÓN A LA COMPUTACIÓN VISUAL (CGI) – SESIÓN 1"}),Ee.jsx("p",{children:"Este documento sirve como base conceptual para el módulo. En clase se reforzará con ejemplos visuales, ejercicios introductorios y discusiones sobre aplicaciones prácticas en producción audiovisual."})]})}function rA({content:o,onClose:t}){return mi.useEffect(()=>{const i=r=>{r.key==="Escape"&&t()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[t]),Ee.jsx("div",{className:"modal-overlay active",onClick:t,children:Ee.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[Ee.jsxs("div",{className:"modal-header",children:[Ee.jsx("h3",{children:o.modalTitle||o.title}),Ee.jsx("button",{className:"close-btn",onClick:t,children:"✕"})]}),Ee.jsx("div",{className:"modal-body",dangerouslySetInnerHTML:{__html:o.content}})]})})}function sA(){const[o,t]=mi.useState(null),[i,r]=mi.useState(0),[l,u]=mi.useState(null),[d,h]=mi.useState(!0);mi.useEffect(()=>{const g=()=>{const S=document.documentElement.scrollTop,M=document.documentElement.scrollHeight-document.documentElement.clientHeight,b=S/M*100;r(b),b<=5||b>=90?h(!0):h(!1)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const m=g=>{u(g),document.body.style.overflow="hidden"},p=()=>{u(null),document.body.style.overflow="auto"},v=g=>{t(g)};return o?Ee.jsxs("div",{className:"app",children:[Ee.jsx("div",{className:"bg-animation"}),Ee.jsx("div",{className:"bg-grid"}),Ee.jsx("div",{className:"scroll-indicator",style:{width:`${i}%`}}),Ee.jsxs("button",{className:`back-to-menu-btn ${d?"visible":"hidden"}`,onClick:()=>t(null),children:[Ee.jsx("span",{className:"back-arrow",children:"←"}),Ee.jsx("span",{className:"back-text",children:"Volver al Menú"})]}),Ee.jsxs("div",{className:"container",children:[Ee.jsx(z1,{}),Ee.jsx(Z1,{}),Ee.jsx(K1,{openModal:m}),Ee.jsx(eA,{openModal:m}),Ee.jsx(iA,{openModal:m}),Ee.jsx(aA,{})]}),l&&Ee.jsx(rA,{content:l,onClose:p})]}):Ee.jsx(P1,{onSelectSession:v})}MS.createRoot(document.getElementById("root")).render(Ee.jsx(mi.StrictMode,{children:Ee.jsx(sA,{})}));
