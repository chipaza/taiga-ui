(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76429],{84730:()=>{!function(e){const t=e.performance;function n(e){t&&t.mark&&t.mark(e)}function o(e,n){t&&t.measure&&t.measure(e,n)}n("Zone");const r=e.__Zone_symbol_prefix||"__zone_symbol__";function s(e){return r+e}const i=!0===e[s("forceDuplicateZoneCheck")];if(e.Zone){if(i||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let a=(()=>{class t{static assertZonePatched(){if(e.Promise!==C.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=t.current;for(;e.parent;)e=e.parent;return e}static get current(){return j.zone}static get currentTask(){return I}static __load_patch(r,s,a=!1){if(C.hasOwnProperty(r)){if(!a&&i)throw Error("Already loaded patch: "+r)}else if(!e["__Zone_disable_"+r]){const i="Zone:"+r;n(i),C[r]=s(e,t,z),o(i,i)}}get parent(){return this._parent}get name(){return this._name}constructor(e,t){this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,t)}get(e){const t=this.getZoneWith(e);if(t)return t._properties[e]}getZoneWith(e){let t=this;for(;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const n=this._zoneDelegate.intercept(this,e,t),o=this;return function(){return o.runGuarded(n,this,arguments,t)}}run(e,t,n,o){j={parent:j,zone:this};try{return this._zoneDelegate.invoke(this,e,t,n,o)}finally{j=j.parent}}runGuarded(e,t=null,n,o){j={parent:j,zone:this};try{try{return this._zoneDelegate.invoke(this,e,t,n,o)}catch(e){if(this._zoneDelegate.handleError(this,e))throw e}}finally{j=j.parent}}runTask(e,t,n){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||m).name+"; Execution: "+this.name+")");if(e.state===v&&(e.type===O||e.type===P))return;const o=e.state!=w;o&&e._transitionTo(w,E),e.runCount++;const r=I;I=e,j={parent:j,zone:this};try{e.type==P&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(e){if(this._zoneDelegate.handleError(this,e))throw e}}finally{e.state!==v&&e.state!==S&&(e.type==O||e.data&&e.data.isPeriodic?o&&e._transitionTo(E,w):(e.runCount=0,this._updateTaskCount(e,-1),o&&e._transitionTo(v,w,v))),j=j.parent,I=r}}scheduleTask(e){if(e.zone&&e.zone!==this){let t=this;for(;t;){if(t===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);t=t.parent}}e._transitionTo(b,v);const t=[];e._zoneDelegates=t,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(t){throw e._transitionTo(S,b,v),this._zoneDelegate.handleError(this,t),t}return e._zoneDelegates===t&&this._updateTaskCount(e,1),e.state==b&&e._transitionTo(E,b),e}scheduleMicroTask(e,t,n,o){return this.scheduleTask(new u(D,e,t,n,o,void 0))}scheduleMacroTask(e,t,n,o,r){return this.scheduleTask(new u(P,e,t,n,o,r))}scheduleEventTask(e,t,n,o,r){return this.scheduleTask(new u(O,e,t,n,o,r))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||m).name+"; Execution: "+this.name+")");if(e.state===E||e.state===w){e._transitionTo(Z,E,w);try{this._zoneDelegate.cancelTask(this,e)}catch(t){throw e._transitionTo(S,Z),this._zoneDelegate.handleError(this,t),t}return this._updateTaskCount(e,-1),e._transitionTo(v,Z),e.runCount=0,e}}_updateTaskCount(e,t){const n=e._zoneDelegates;-1==t&&(e._zoneDelegates=null);for(let o=0;o<n.length;o++)n[o]._updateTaskCount(e.type,t)}}return t.__symbol__=s,t})();const c={name:"",onHasTask:(e,t,n,o)=>e.hasTask(n,o),onScheduleTask:(e,t,n,o)=>e.scheduleTask(n,o),onInvokeTask:(e,t,n,o,r,s)=>e.invokeTask(n,o,r,s),onCancelTask:(e,t,n,o)=>e.cancelTask(n,o)};class l{constructor(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._forkCurrZone=n&&(n.onFork?this.zone:t._forkCurrZone),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=n&&(n.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=n&&(n.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=n&&(n.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=n&&(n.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=n&&(n.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=n&&(n.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const o=n&&n.onHasTask,r=t&&t._hasTaskZS;(o||r)&&(this._hasTaskZS=o?n:c,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=e,n.onScheduleTask||(this._scheduleTaskZS=c,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),n.onInvokeTask||(this._invokeTaskZS=c,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),n.onCancelTask||(this._cancelTaskZS=c,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new a(e,t)}intercept(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,e,t,n):t}invoke(e,t,n,o,r){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,e,t,n,o,r):t.apply(n,o)}handleError(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,e,t)}scheduleTask(e,t){let n=t;if(this._scheduleTaskZS)this._hasTaskZS&&n._zoneDelegates.push(this._hasTaskDlgtOwner),n=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,e,t),n||(n=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=D)throw new Error("Task is missing scheduleFn.");y(t)}return n}invokeTask(e,t,n,o){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,e,t,n,o):t.callback.apply(n,o)}cancelTask(e,t){let n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,e,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");n=t.cancelFn(t)}return n}hasTask(e,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,e,t)}catch(t){this.handleError(e,t)}}_updateTaskCount(e,t){const n=this._taskCounts,o=n[e],r=n[e]=o+t;if(r<0)throw new Error("More tasks executed then were scheduled.");if(0==o||0==r){const t={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};this.hasTask(this.zone,t)}}}class u{constructor(t,n,o,r,s,i){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=t,this.source=n,this.data=r,this.scheduleFn=s,this.cancelFn=i,!o)throw new Error("callback is not defined");this.callback=o;const a=this;t===O&&r&&r.useG?this.invoke=u.invokeTask:this.invoke=function(){return u.invokeTask.call(e,a,this,arguments)}}static invokeTask(e,t,n){e||(e=this),R++;try{return e.runCount++,e.zone.runTask(e,t,n)}finally{1==R&&T(),R--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(v,b)}_transitionTo(e,t,n){if(this._state!==t&&this._state!==n)throw new Error(`${this.type} '${this.source}': can not transition to '${e}', expecting state '${t}'${n?" or '"+n+"'":""}, was '${this._state}'.`);this._state=e,e==v&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const h=s("setTimeout"),f=s("Promise"),p=s("then");let d,_=[],k=!1;function g(t){if(d||e[f]&&(d=e[f].resolve(0)),d){let e=d[p];e||(e=d.then),e.call(d,t)}else e[h](t,0)}function y(e){0===R&&0===_.length&&g(T),e&&_.push(e)}function T(){if(!k){for(k=!0;_.length;){const e=_;_=[];for(let t=0;t<e.length;t++){const n=e[t];try{n.zone.runTask(n,null,null)}catch(e){z.onUnhandledError(e)}}}z.microtaskDrainDone(),k=!1}}const m={name:"NO ZONE"},v="notScheduled",b="scheduling",E="scheduled",w="running",Z="canceling",S="unknown",D="microTask",P="macroTask",O="eventTask",C={},z={symbol:s,currentZoneFrame:()=>j,onUnhandledError:M,microtaskDrainDone:M,scheduleMicroTask:y,showUncaughtError:()=>!a[s("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:M,patchMethod:()=>M,bindArguments:()=>[],patchThen:()=>M,patchMacroTask:()=>M,patchEventPrototype:()=>M,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>M,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>M,wrapWithCurrentZone:()=>M,filterProperties:()=>[],attachOriginToPatched:()=>M,_redefineProperty:()=>M,patchCallbacks:()=>M,nativeScheduleMicroTask:g};let j={parent:null,zone:new a(null,null)},I=null,R=0;function M(){}o("Zone","Zone"),e.Zone=a}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const e=Object.getOwnPropertyDescriptor,t=Object.defineProperty,n=Object.getPrototypeOf,o=Object.create,r=Array.prototype.slice,s="addEventListener",i="removeEventListener",a=Zone.__symbol__(s),c=Zone.__symbol__(i),l="true",u="false",h=Zone.__symbol__("");function f(e,t){return Zone.current.wrap(e,t)}function p(e,t,n,o,r){return Zone.current.scheduleMacroTask(e,t,n,o,r)}const d=Zone.__symbol__,_="undefined"!=typeof window,k=_?window:void 0,g=_&&k||"object"==typeof self&&self||global,y="removeAttribute";function T(e,t){for(let n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=f(e[n],t+"_"+n));return e}function m(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}const v="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,b=!("nw"in g)&&void 0!==g.process&&"[object process]"==={}.toString.call(g.process),E=!b&&!v&&!(!_||!k.HTMLElement),w=void 0!==g.process&&"[object process]"==={}.toString.call(g.process)&&!v&&!(!_||!k.HTMLElement),Z={},S=function(e){if(!(e=e||g.event))return;let t=Z[e.type];t||(t=Z[e.type]=d("ON_PROPERTY"+e.type));const n=this||e.target||g,o=n[t];let r;if(E&&n===k&&"error"===e.type){const t=e;r=o&&o.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===r&&e.preventDefault()}else r=o&&o.apply(this,arguments),null==r||r||e.preventDefault();return r};function D(n,o,r){let s=e(n,o);if(!s&&r&&e(r,o)&&(s={enumerable:!0,configurable:!0}),!s||!s.configurable)return;const i=d("on"+o+"patched");if(n.hasOwnProperty(i)&&n[i])return;delete s.writable,delete s.value;const a=s.get,c=s.set,l=o.slice(2);let u=Z[l];u||(u=Z[l]=d("ON_PROPERTY"+l)),s.set=function(e){let t=this;t||n!==g||(t=g),t&&("function"==typeof t[u]&&t.removeEventListener(l,S),c&&c.call(t,null),t[u]=e,"function"==typeof e&&t.addEventListener(l,S,!1))},s.get=function(){let e=this;if(e||n!==g||(e=g),!e)return null;const t=e[u];if(t)return t;if(a){let t=a.call(this);if(t)return s.set.call(this,t),"function"==typeof e[y]&&e.removeAttribute(o),t}return null},t(n,o,s),n[i]=!0}function P(e,t,n){if(t)for(let o=0;o<t.length;o++)D(e,"on"+t[o],n);else{const t=[];for(const n in e)"on"==n.slice(0,2)&&t.push(n);for(let o=0;o<t.length;o++)D(e,t[o],n)}}const O=d("originalInstance");function C(e){const n=g[e];if(!n)return;g[d(e)]=n,g[e]=function(){const t=T(arguments,e);switch(t.length){case 0:this[O]=new n;break;case 1:this[O]=new n(t[0]);break;case 2:this[O]=new n(t[0],t[1]);break;case 3:this[O]=new n(t[0],t[1],t[2]);break;case 4:this[O]=new n(t[0],t[1],t[2],t[3]);break;default:throw new Error("Arg list too long.")}},I(g[e],n);const o=new n((function(){}));let r;for(r in o)"XMLHttpRequest"===e&&"responseBlob"===r||function(n){"function"==typeof o[n]?g[e].prototype[n]=function(){return this[O][n].apply(this[O],arguments)}:t(g[e].prototype,n,{set:function(t){"function"==typeof t?(this[O][n]=f(t,e+"."+n),I(this[O][n],t)):this[O][n]=t},get:function(){return this[O][n]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(g[e][r]=n[r])}function z(t,o,r){let s=t;for(;s&&!s.hasOwnProperty(o);)s=n(s);!s&&t[o]&&(s=t);const i=d(o);let a=null;if(s&&(!(a=s[i])||!s.hasOwnProperty(i))&&(a=s[i]=s[o],m(s&&e(s,o)))){const e=r(a,i,o);s[o]=function(){return e(this,arguments)},I(s[o],a)}return a}function j(e,t,n){let o=null;function r(e){const t=e.data;return t.args[t.cbIdx]=function(){e.invoke.apply(this,arguments)},o.apply(t.target,t.args),e}o=z(e,t,(e=>function(t,o){const s=n(t,o);return s.cbIdx>=0&&"function"==typeof o[s.cbIdx]?p(s.name,o[s.cbIdx],s,r):e.apply(t,o)}))}function I(e,t){e[d("OriginalDelegate")]=t}let R=!1,M=!1;function N(){try{const e=k.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch(e){}return!1}function A(){if(R)return M;R=!0;try{const e=k.navigator.userAgent;-1===e.indexOf("MSIE ")&&-1===e.indexOf("Trident/")&&-1===e.indexOf("Edge/")||(M=!0)}catch(e){}return M}Zone.__load_patch("ZoneAwarePromise",((e,t,n)=>{const o=Object.getOwnPropertyDescriptor,r=Object.defineProperty,s=n.symbol,i=[],a=!0===e[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],c=s("Promise"),l=s("then"),u="__creationTrace__";n.onUnhandledError=e=>{if(n.showUncaughtError()){const t=e&&e.rejection;t?console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0):console.error(e)}},n.microtaskDrainDone=()=>{for(;i.length;){const e=i.shift();try{e.zone.runGuarded((()=>{if(e.throwOriginal)throw e.rejection;throw e}))}catch(e){f(e)}}};const h=s("unhandledPromiseRejectionHandler");function f(e){n.onUnhandledError(e);try{const n=t[h];"function"==typeof n&&n.call(this,e)}catch(e){}}function p(e){return e&&e.then}function d(e){return e}function _(e){return A.reject(e)}const k=s("state"),g=s("value"),y=s("finally"),T=s("parentPromiseValue"),m=s("parentPromiseState"),v="Promise.then",b=null,E=!0,w=!1,Z=0;function S(e,t){return n=>{try{C(e,t,n)}catch(t){C(e,!1,t)}}}const D=function(){let e=!1;return function(t){return function(){e||(e=!0,t.apply(null,arguments))}}},P="Promise resolved with itself",O=s("currentTaskTrace");function C(e,o,s){const c=D();if(e===s)throw new TypeError(P);if(e[k]===b){let h=null;try{"object"!=typeof s&&"function"!=typeof s||(h=s&&s.then)}catch(t){return c((()=>{C(e,!1,t)}))(),e}if(o!==w&&s instanceof A&&s.hasOwnProperty(k)&&s.hasOwnProperty(g)&&s[k]!==b)I(s),C(e,s[k],s[g]);else if(o!==w&&"function"==typeof h)try{h.call(s,c(S(e,o)),c(S(e,!1)))}catch(t){c((()=>{C(e,!1,t)}))()}else{e[k]=o;const c=e[g];if(e[g]=s,e[y]===y&&o===E&&(e[k]=e[m],e[g]=e[T]),o===w&&s instanceof Error){const e=t.currentTask&&t.currentTask.data&&t.currentTask.data[u];e&&r(s,O,{configurable:!0,enumerable:!1,writable:!0,value:e})}for(let t=0;t<c.length;)R(e,c[t++],c[t++],c[t++],c[t++]);if(0==c.length&&o==w){e[k]=Z;let o=s;try{throw new Error("Uncaught (in promise): "+((l=s)&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l))+(s&&s.stack?"\n"+s.stack:""))}catch(e){o=e}a&&(o.throwOriginal=!0),o.rejection=s,o.promise=e,o.zone=t.current,o.task=t.currentTask,i.push(o),n.scheduleMicroTask()}}}var l;return e}const j=s("rejectionHandledHandler");function I(e){if(e[k]===Z){try{const n=t[j];n&&"function"==typeof n&&n.call(this,{rejection:e[g],promise:e})}catch(e){}e[k]=w;for(let t=0;t<i.length;t++)e===i[t].promise&&i.splice(t,1)}}function R(e,t,n,o,r){I(e);const s=e[k],i=s?"function"==typeof o?o:d:"function"==typeof r?r:_;t.scheduleMicroTask(v,(()=>{try{const o=e[g],r=!!n&&y===n[y];r&&(n[T]=o,n[m]=s);const a=t.run(i,void 0,r&&i!==_&&i!==d?[]:[o]);C(n,!0,a)}catch(e){C(n,!1,e)}}),n)}const M=function(){},N=e.AggregateError;class A{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(e){return C(new this(null),E,e)}static reject(e){return C(new this(null),w,e)}static any(e){if(!e||"function"!=typeof e[Symbol.iterator])return Promise.reject(new N([],"All promises were rejected"));const t=[];let n=0;try{for(let o of e)n++,t.push(A.resolve(o))}catch(e){return Promise.reject(new N([],"All promises were rejected"))}if(0===n)return Promise.reject(new N([],"All promises were rejected"));let o=!1;const r=[];return new A(((e,s)=>{for(let i=0;i<t.length;i++)t[i].then((t=>{o||(o=!0,e(t))}),(e=>{r.push(e),n--,0===n&&(o=!0,s(new N(r,"All promises were rejected")))}))}))}static race(e){let t,n,o=new this(((e,o)=>{t=e,n=o}));function r(e){t(e)}function s(e){n(e)}for(let t of e)p(t)||(t=this.resolve(t)),t.then(r,s);return o}static all(e){return A.allWithCallback(e)}static allSettled(e){return(this&&this.prototype instanceof A?this:A).allWithCallback(e,{thenCallback:e=>({status:"fulfilled",value:e}),errorCallback:e=>({status:"rejected",reason:e})})}static allWithCallback(e,t){let n,o,r=new this(((e,t)=>{n=e,o=t})),s=2,i=0;const a=[];for(let r of e){p(r)||(r=this.resolve(r));const e=i;try{r.then((o=>{a[e]=t?t.thenCallback(o):o,s--,0===s&&n(a)}),(r=>{t?(a[e]=t.errorCallback(r),s--,0===s&&n(a)):o(r)}))}catch(e){o(e)}s++,i++}return s-=2,0===s&&n(a),r}constructor(e){const t=this;if(!(t instanceof A))throw new Error("Must be an instanceof Promise.");t[k]=b,t[g]=[];try{const n=D();e&&e(n(S(t,E)),n(S(t,w)))}catch(e){C(t,!1,e)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return A}then(e,n){let o=this.constructor?.[Symbol.species];o&&"function"==typeof o||(o=this.constructor||A);const r=new o(M),s=t.current;return this[k]==b?this[g].push(s,r,e,n):R(this,s,r,e,n),r}catch(e){return this.then(null,e)}finally(e){let n=this.constructor?.[Symbol.species];n&&"function"==typeof n||(n=A);const o=new n(M);o[y]=y;const r=t.current;return this[k]==b?this[g].push(r,o,e,e):R(this,r,o,e,e),o}}A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;const L=e[c]=e.Promise;e.Promise=A;const H=s("thenPatched");function x(e){const t=e.prototype,n=o(t,"then");if(n&&(!1===n.writable||!n.configurable))return;const r=t.then;t[l]=r,e.prototype.then=function(e,t){return new A(((e,t)=>{r.call(this,e,t)})).then(e,t)},e[H]=!0}return n.patchThen=x,L&&(x(L),z(e,"fetch",(e=>{return t=e,function(e,n){let o=t.apply(e,n);if(o instanceof A)return o;let r=o.constructor;return r[H]||x(r),o};var t}))),Promise[t.__symbol__("uncaughtPromiseErrors")]=i,A})),Zone.__load_patch("toString",(e=>{const t=Function.prototype.toString,n=d("OriginalDelegate"),o=d("Promise"),r=d("Error"),s=function(){if("function"==typeof this){const s=this[n];if(s)return"function"==typeof s?t.call(s):Object.prototype.toString.call(s);if(this===Promise){const n=e[o];if(n)return t.call(n)}if(this===Error){const n=e[r];if(n)return t.call(n)}}return t.call(this)};s[n]=t,Function.prototype.toString=s;const i=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":i.call(this)}}));let L=!1;if("undefined"!=typeof window)try{const e=Object.defineProperty({},"passive",{get:function(){L=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){L=!1}const H={useG:!0},x={},F={},q=new RegExp("^"+h+"(\\w+)(true|false)$"),G=d("propagationStopped");function W(e,t){const n=(t?t(e):e)+u,o=(t?t(e):e)+l,r=h+n,s=h+o;x[e]={},x[e][u]=r,x[e][l]=s}function B(e,t,o,r){const a=r&&r.add||s,c=r&&r.rm||i,f=r&&r.listeners||"eventListeners",p=r&&r.rmAll||"removeAllListeners",_=d(a),k="."+a+":",g="prependListener",y="."+g+":",T=function(e,t,n){if(e.isRemoved)return;const o=e.callback;let r;"object"==typeof o&&o.handleEvent&&(e.callback=e=>o.handleEvent(e),e.originalDelegate=o);try{e.invoke(e,t,[n])}catch(e){r=e}const s=e.options;if(s&&"object"==typeof s&&s.once){const o=e.originalDelegate?e.originalDelegate:e.callback;t[c].call(t,n.type,o,s)}return r};function m(n,o,r){if(!(o=o||e.event))return;const s=n||o.target||e,i=s[x[o.type][r?l:u]];if(i){const e=[];if(1===i.length){const t=T(i[0],s,o);t&&e.push(t)}else{const t=i.slice();for(let n=0;n<t.length&&(!o||!0!==o[G]);n++){const r=T(t[n],s,o);r&&e.push(r)}}if(1===e.length)throw e[0];for(let n=0;n<e.length;n++){const o=e[n];t.nativeScheduleMicroTask((()=>{throw o}))}}}const v=function(e){return m(this,e,!1)},E=function(e){return m(this,e,!0)};function w(t,o){if(!t)return!1;let r=!0;o&&void 0!==o.useG&&(r=o.useG);const s=o&&o.vh;let i=!0;o&&void 0!==o.chkDup&&(i=o.chkDup);let T=!1;o&&void 0!==o.rt&&(T=o.rt);let m=t;for(;m&&!m.hasOwnProperty(a);)m=n(m);if(!m&&t[a]&&(m=t),!m)return!1;if(m[_])return!1;const w=o&&o.eventNameToString,Z={},S=m[_]=m[a],D=m[d(c)]=m[c],P=m[d(f)]=m[f],O=m[d(p)]=m[p];let C;o&&o.prepend&&(C=m[d(o.prepend)]=m[o.prepend]);const z=r?function(e){if(!Z.isExisting)return S.call(Z.target,Z.eventName,Z.capture?E:v,Z.options)}:function(e){return S.call(Z.target,Z.eventName,e.invoke,Z.options)},j=r?function(e){if(!e.isRemoved){const t=x[e.eventName];let n;t&&(n=t[e.capture?l:u]);const o=n&&e.target[n];if(o)for(let t=0;t<o.length;t++)if(o[t]===e){o.splice(t,1),e.isRemoved=!0,0===o.length&&(e.allRemoved=!0,e.target[n]=null);break}}if(e.allRemoved)return D.call(e.target,e.eventName,e.capture?E:v,e.options)}:function(e){return D.call(e.target,e.eventName,e.invoke,e.options)},R=o&&o.diff?o.diff:function(e,t){const n=typeof t;return"function"===n&&e.callback===t||"object"===n&&e.originalDelegate===t},M=Zone[d("UNPATCHED_EVENTS")],N=e[d("PASSIVE_EVENTS")],A=function(t,n,a,c,h=!1,f=!1){return function(){const p=this||e;let d=arguments[0];o&&o.transferEventName&&(d=o.transferEventName(d));let _=arguments[1];if(!_)return t.apply(this,arguments);if(b&&"uncaughtException"===d)return t.apply(this,arguments);let k=!1;if("function"!=typeof _){if(!_.handleEvent)return t.apply(this,arguments);k=!0}if(s&&!s(t,_,p,arguments))return;const g=L&&!!N&&-1!==N.indexOf(d),y=function(e,t){return!L&&"object"==typeof e&&e?!!e.capture:L&&t?"boolean"==typeof e?{capture:e,passive:!0}:e?"object"==typeof e&&!1!==e.passive?{...e,passive:!0}:e:{passive:!0}:e}(arguments[2],g);if(M)for(let e=0;e<M.length;e++)if(d===M[e])return g?t.call(p,d,_,y):t.apply(this,arguments);const T=!!y&&("boolean"==typeof y||y.capture),m=!(!y||"object"!=typeof y)&&y.once,v=Zone.current;let E=x[d];E||(W(d,w),E=x[d]);const S=E[T?l:u];let D,P=p[S],O=!1;if(P){if(O=!0,i)for(let e=0;e<P.length;e++)if(R(P[e],_))return}else P=p[S]=[];const C=p.constructor.name,z=F[C];z&&(D=z[d]),D||(D=C+n+(w?w(d):d)),Z.options=y,m&&(Z.options.once=!1),Z.target=p,Z.capture=T,Z.eventName=d,Z.isExisting=O;const j=r?H:void 0;j&&(j.taskData=Z);const I=v.scheduleEventTask(D,_,j,a,c);return Z.target=null,j&&(j.taskData=null),m&&(y.once=!0),(L||"boolean"!=typeof I.options)&&(I.options=y),I.target=p,I.capture=T,I.eventName=d,k&&(I.originalDelegate=_),f?P.unshift(I):P.push(I),h?p:void 0}};return m[a]=A(S,k,z,j,T),C&&(m[g]=A(C,y,(function(e){return C.call(Z.target,Z.eventName,e.invoke,Z.options)}),j,T,!0)),m[c]=function(){const t=this||e;let n=arguments[0];o&&o.transferEventName&&(n=o.transferEventName(n));const r=arguments[2],i=!!r&&("boolean"==typeof r||r.capture),a=arguments[1];if(!a)return D.apply(this,arguments);if(s&&!s(D,a,t,arguments))return;const c=x[n];let f;c&&(f=c[i?l:u]);const p=f&&t[f];if(p)for(let e=0;e<p.length;e++){const o=p[e];if(R(o,a))return p.splice(e,1),o.isRemoved=!0,0===p.length&&(o.allRemoved=!0,t[f]=null,"string"==typeof n)&&(t[h+"ON_PROPERTY"+n]=null),o.zone.cancelTask(o),T?t:void 0}return D.apply(this,arguments)},m[f]=function(){const t=this||e;let n=arguments[0];o&&o.transferEventName&&(n=o.transferEventName(n));const r=[],s=U(t,w?w(n):n);for(let e=0;e<s.length;e++){const t=s[e];let n=t.originalDelegate?t.originalDelegate:t.callback;r.push(n)}return r},m[p]=function(){const t=this||e;let n=arguments[0];if(n){o&&o.transferEventName&&(n=o.transferEventName(n));const e=x[n];if(e){const o=e[u],r=e[l],s=t[o],i=t[r];if(s){const e=s.slice();for(let t=0;t<e.length;t++){const o=e[t];let r=o.originalDelegate?o.originalDelegate:o.callback;this[c].call(this,n,r,o.options)}}if(i){const e=i.slice();for(let t=0;t<e.length;t++){const o=e[t];let r=o.originalDelegate?o.originalDelegate:o.callback;this[c].call(this,n,r,o.options)}}}}else{const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t],o=q.exec(n);let r=o&&o[1];r&&"removeListener"!==r&&this[p].call(this,r)}this[p].call(this,"removeListener")}if(T)return this},I(m[a],S),I(m[c],D),O&&I(m[p],O),P&&I(m[f],P),!0}let Z=[];for(let e=0;e<o.length;e++)Z[e]=w(o[e],r);return Z}function U(e,t){if(!t){const n=[];for(let o in e){const r=q.exec(o);let s=r&&r[1];if(s&&(!t||s===t)){const t=e[o];if(t)for(let e=0;e<t.length;e++)n.push(t[e])}}return n}let n=x[t];n||(W(t),n=x[t]);const o=e[n[u]],r=e[n[l]];return o?r?o.concat(r):o.slice():r?r.slice():[]}function V(e,t){const n=e.Event;n&&n.prototype&&t.patchMethod(n.prototype,"stopImmediatePropagation",(e=>function(t,n){t[G]=!0,e&&e.apply(t,n)}))}function $(e,t,n,o,r){const s=Zone.__symbol__(o);if(t[s])return;const i=t[s]=t[o];t[o]=function(s,a,c){return a&&a.prototype&&r.forEach((function(t){const r=`${n}.${o}::`+t,s=a.prototype;try{if(s.hasOwnProperty(t)){const n=e.ObjectGetOwnPropertyDescriptor(s,t);n&&n.value?(n.value=e.wrapWithCurrentZone(n.value,r),e._redefineProperty(a.prototype,t,n)):s[t]&&(s[t]=e.wrapWithCurrentZone(s[t],r))}else s[t]&&(s[t]=e.wrapWithCurrentZone(s[t],r))}catch{}})),i.call(t,s,a,c)},e.attachOriginToPatched(t[o],i)}function X(e,t,n){if(!n||0===n.length)return t;const o=n.filter((t=>t.target===e));if(!o||0===o.length)return t;const r=o[0].ignoreProperties;return t.filter((e=>-1===r.indexOf(e)))}function Y(e,t,n,o){e&&P(e,X(e,t,n),o)}function J(e){return Object.getOwnPropertyNames(e).filter((e=>e.startsWith("on")&&e.length>2)).map((e=>e.substring(2)))}function K(e,t){if(b&&!w)return;if(Zone[e.symbol("patchEvents")])return;const o=t.__Zone_ignore_on_properties;let r=[];if(E){const e=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const t=N()?[{target:e,ignoreProperties:["error"]}]:[];Y(e,J(e),o?o.concat(t):o,n(e))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let e=0;e<r.length;e++){const n=t[r[e]];n&&n.prototype&&Y(n.prototype,J(n.prototype),o)}}function Q(e,t){t.patchMethod(e,"queueMicrotask",(e=>function(e,t){Zone.current.scheduleMicroTask("queueMicrotask",t[0])}))}Zone.__load_patch("util",((n,a,c)=>{const p=J(n);c.patchOnProperties=P,c.patchMethod=z,c.bindArguments=T,c.patchMacroTask=j;const d=a.__symbol__("BLACK_LISTED_EVENTS"),_=a.__symbol__("UNPATCHED_EVENTS");n[_]&&(n[d]=n[_]),n[d]&&(a[d]=a[_]=n[d]),c.patchEventPrototype=V,c.patchEventTarget=B,c.isIEOrEdge=A,c.ObjectDefineProperty=t,c.ObjectGetOwnPropertyDescriptor=e,c.ObjectCreate=o,c.ArraySlice=r,c.patchClass=C,c.wrapWithCurrentZone=f,c.filterProperties=X,c.attachOriginToPatched=I,c._redefineProperty=Object.defineProperty,c.patchCallbacks=$,c.getGlobalObjects=()=>({globalSources:F,zoneSymbolEventNames:x,eventNames:p,isBrowser:E,isMix:w,isNode:b,TRUE_STR:l,FALSE_STR:u,ZONE_SYMBOL_PREFIX:h,ADD_EVENT_LISTENER_STR:s,REMOVE_EVENT_LISTENER_STR:i})}));const ee=d("zoneTask");function te(e,t,n,o){let r=null,s=null;n+=o;const i={};function a(t){const n=t.data;return n.args[0]=function(){return t.invoke.apply(this,arguments)},n.handleId=r.apply(e,n.args),t}function c(t){return s.call(e,t.data.handleId)}r=z(e,t+=o,(n=>function(r,s){if("function"==typeof s[0]){const e={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?s[1]||0:void 0,args:s},n=s[0];s[0]=function(){try{return n.apply(this,arguments)}finally{e.isPeriodic||("number"==typeof e.handleId?delete i[e.handleId]:e.handleId&&(e.handleId[ee]=null))}};const r=p(t,s[0],e,a,c);if(!r)return r;const l=r.data.handleId;return"number"==typeof l?i[l]=r:l&&(l[ee]=r),l&&l.ref&&l.unref&&"function"==typeof l.ref&&"function"==typeof l.unref&&(r.ref=l.ref.bind(l),r.unref=l.unref.bind(l)),"number"==typeof l||l?l:r}return n.apply(e,s)})),s=z(e,n,(t=>function(n,o){const r=o[0];let s;"number"==typeof r?s=i[r]:(s=r&&r[ee],s||(s=r)),s&&"string"==typeof s.type?"notScheduled"!==s.state&&(s.cancelFn&&s.data.isPeriodic||0===s.runCount)&&("number"==typeof r?delete i[r]:r&&(r[ee]=null),s.zone.cancelTask(s)):t.apply(e,o)}))}function ne(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:n,zoneSymbolEventNames:o,TRUE_STR:r,FALSE_STR:s,ZONE_SYMBOL_PREFIX:i}=t.getGlobalObjects();for(let e=0;e<n.length;e++){const t=n[e],a=i+(t+s),c=i+(t+r);o[t]={},o[t][s]=a,o[t][r]=c}const a=e.EventTarget;return a&&a.prototype?(t.patchEventTarget(e,t,[a&&a.prototype]),!0):void 0}Zone.__load_patch("legacy",(e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()})),Zone.__load_patch("timers",(e=>{const t="set",n="clear";te(e,t,n,"Timeout"),te(e,t,n,"Interval"),te(e,t,n,"Immediate")})),Zone.__load_patch("requestAnimationFrame",(e=>{te(e,"request","cancel","AnimationFrame"),te(e,"mozRequest","mozCancel","AnimationFrame"),te(e,"webkitRequest","webkitCancel","AnimationFrame")})),Zone.__load_patch("blocking",((e,t)=>{const n=["alert","prompt","confirm"];for(let o=0;o<n.length;o++)z(e,n[o],((n,o,r)=>function(o,s){return t.current.run(n,e,s,r)}))})),Zone.__load_patch("EventTarget",((e,t,n)=>{!function(e,t){t.patchEventPrototype(e,t)}(e,n),ne(e,n);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&n.patchEventTarget(e,n,[o.prototype])})),Zone.__load_patch("MutationObserver",((e,t,n)=>{C("MutationObserver"),C("WebKitMutationObserver")})),Zone.__load_patch("IntersectionObserver",((e,t,n)=>{C("IntersectionObserver")})),Zone.__load_patch("FileReader",((e,t,n)=>{C("FileReader")})),Zone.__load_patch("on_property",((e,t,n)=>{K(n,e)})),Zone.__load_patch("customElements",((e,t,n)=>{!function(e,t){const{isBrowser:n,isMix:o}=t.getGlobalObjects();(n||o)&&e.customElements&&"customElements"in e&&t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,n)})),Zone.__load_patch("XHR",((e,t)=>{!function(e){const u=e.XMLHttpRequest;if(!u)return;const h=u.prototype;let f=h[a],_=h[c];if(!f){const t=e.XMLHttpRequestEventTarget;if(t){const e=t.prototype;f=e[a],_=e[c]}}const k="readystatechange",g="scheduled";function y(e){const o=e.data,i=o.target;i[s]=!1,i[l]=!1;const u=i[r];f||(f=i[a],_=i[c]),u&&_.call(i,k,u);const h=i[r]=()=>{if(i.readyState===i.DONE)if(!o.aborted&&i[s]&&e.state===g){const n=i[t.__symbol__("loadfalse")];if(0!==i.status&&n&&n.length>0){const r=e.invoke;e.invoke=function(){const n=i[t.__symbol__("loadfalse")];for(let t=0;t<n.length;t++)n[t]===e&&n.splice(t,1);o.aborted||e.state!==g||r.call(e)},n.push(e)}else e.invoke()}else o.aborted||!1!==i[s]||(i[l]=!0)};return f.call(i,k,h),i[n]||(i[n]=e),w.apply(i,o.args),i[s]=!0,e}function T(){}function m(e){const t=e.data;return t.aborted=!0,Z.apply(t.target,t.args)}const v=z(h,"open",(()=>function(e,t){return e[o]=0==t[2],e[i]=t[1],v.apply(e,t)})),b=d("fetchTaskAborting"),E=d("fetchTaskScheduling"),w=z(h,"send",(()=>function(e,n){if(!0===t.current[E])return w.apply(e,n);if(e[o])return w.apply(e,n);{const t={target:e,url:e[i],isPeriodic:!1,args:n,aborted:!1},o=p("XMLHttpRequest.send",T,t,y,m);e&&!0===e[l]&&!t.aborted&&o.state===g&&o.invoke()}})),Z=z(h,"abort",(()=>function(e,o){const r=e[n];if(r&&"string"==typeof r.type){if(null==r.cancelFn||r.data&&r.data.aborted)return;r.zone.cancelTask(r)}else if(!0===t.current[b])return Z.apply(e,o)}))}(e);const n=d("xhrTask"),o=d("xhrSync"),r=d("xhrListener"),s=d("xhrScheduled"),i=d("xhrURL"),l=d("xhrErrorBeforeScheduled")})),Zone.__load_patch("geolocation",(t=>{t.navigator&&t.navigator.geolocation&&function(t,n){const o=t.constructor.name;for(let r=0;r<n.length;r++){const s=n[r],i=t[s];if(i){if(!m(e(t,s)))continue;t[s]=(e=>{const t=function(){return e.apply(this,T(arguments,o+"."+s))};return I(t,e),t})(i)}}}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])})),Zone.__load_patch("PromiseRejectionEvent",((e,t)=>{function n(t){return function(n){U(e,t).forEach((o=>{const r=e.PromiseRejectionEvent;if(r){const e=new r(t,{promise:n.promise,reason:n.rejection});o.invoke(e)}}))}}e.PromiseRejectionEvent&&(t[d("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),t[d("rejectionHandledHandler")]=n("rejectionhandled"))})),Zone.__load_patch("queueMicrotask",((e,t,n)=>{Q(e,n)}))},80533:(e,t,n)=>{n(84730)}},e=>{e(e.s=80533)}]);