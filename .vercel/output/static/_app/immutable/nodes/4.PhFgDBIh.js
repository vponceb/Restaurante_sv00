import{s as Bt,n as Se,b as Z,i as tt,j as Vh}from"../chunks/scheduler.x38HN0Fw.js";import{S as jt,i as qt,g as B,m as Pr,h as j,j as Y,n as Cr,f as D,k as _,a as Ct,x as T,o as Rs,s as R,c as S,y as es,H as bh,A as Dh,r as k,u as M,l as Et,v as L,B as kt,z as Le,d as x,t as F,w as U,C as Xa,D as Ya,E as Ja,F as et,G as Nh}from"../chunks/index.e1rW_ejX.js";function ir(e){return e?.length!==void 0?e:Array.from(e)}var ea={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Oh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(f=64)),r.push(n[c],n[h],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Za(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Oh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new kh;const f=s<<2|a>>4;if(r.push(f),u!==64){const d=a<<4&240|u>>2;if(r.push(d),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class kh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mh=function(e){const t=Za(e);return tl.encodeByteArray(t,!0)},sr=function(e){return Mh(e).replace(/\./g,"")},Lh=function(e){try{return tl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=()=>xh().__FIREBASE_DEFAULTS__,Uh=()=>{if(typeof process>"u"||typeof ea>"u")return;const e=ea.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$h=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Lh(e[1]);return t&&JSON.parse(t)},el=()=>{try{return Fh()||Uh()||$h()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Bh=e=>{var t,n;return(n=(t=el())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jh=e=>{const t=Bh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},nl=()=>{var e;return(e=el())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[sr(JSON.stringify(n)),sr(JSON.stringify(o)),""].join(".")}function zh(){try{return typeof indexedDB=="object"}catch{return!1}}function Gh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="FirebaseError";class Je extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Kh,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rl.prototype.create)}}class rl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Qh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Je(i,a,r)}}function Qh(e,t){return e.replace(Wh,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Wh=/\{\$([^}]+)}/g;function ns(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(na(s)&&na(o)){if(!ns(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function na(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e){return e&&e._delegate?e._delegate:e}class _n{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new qh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Jh(t))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=we){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=we){return this.instances.has(t)}getOptions(t=we){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=we){return this.component?this.component.multipleInstances?t:we:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yh(e){return e===we?void 0:e}function Jh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Xh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const tc={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},ec=$.INFO,nc={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},rc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=nc[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class il{constructor(t){this.name=t,this._logLevel=ec,this._logHandler=rc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const ic=(e,t)=>t.some(n=>e instanceof n);let ra,ia;function sc(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oc(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sl=new WeakMap,rs=new WeakMap,ol=new WeakMap,xi=new WeakMap,Ss=new WeakMap;function ac(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(de(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&sl.set(n,e)}).catch(()=>{}),Ss.set(t,e),t}function lc(e){if(rs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});rs.set(e,t)}let is={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return rs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ol.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return de(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function uc(e){is=e(is)}function hc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fi(this),t,...n);return ol.set(r,t.sort?t.sort():[t]),de(r)}:oc().includes(e)?function(...t){return e.apply(Fi(this),t),de(sl.get(this))}:function(...t){return de(e.apply(Fi(this),t))}}function cc(e){return typeof e=="function"?hc(e):(e instanceof IDBTransaction&&lc(e),ic(e,sc())?new Proxy(e,is):e)}function de(e){if(e instanceof IDBRequest)return ac(e);if(xi.has(e))return xi.get(e);const t=cc(e);return t!==e&&(xi.set(e,t),Ss.set(t,e)),t}const Fi=e=>Ss.get(e);function fc(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=de(o);return r&&o.addEventListener("upgradeneeded",l=>{r(de(o.result),l.oldVersion,l.newVersion,de(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dc=["get","getKey","getAll","getAllKeys","count"],mc=["put","add","delete","clear"],Ui=new Map;function sa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ui.get(t))return Ui.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=mc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dc.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ui.set(t,s),s}uc(e=>({...e,get:(t,n,r)=>sa(t,n)||e.get(t,n,r),has:(t,n)=>!!sa(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pc(e){const t=e.getComponent();return t?.type==="VERSION"}const ss="@firebase/app",oa="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new il("@firebase/app"),_c="@firebase/app-compat",yc="@firebase/analytics-compat",Ec="@firebase/analytics",vc="@firebase/app-check-compat",Tc="@firebase/app-check",Ic="@firebase/auth",Ac="@firebase/auth-compat",wc="@firebase/database",Pc="@firebase/database-compat",Cc="@firebase/functions",Rc="@firebase/functions-compat",Sc="@firebase/installations",Vc="@firebase/installations-compat",bc="@firebase/messaging",Dc="@firebase/messaging-compat",Nc="@firebase/performance",Oc="@firebase/performance-compat",kc="@firebase/remote-config",Mc="@firebase/remote-config-compat",Lc="@firebase/storage",xc="@firebase/storage-compat",Fc="@firebase/firestore",Uc="@firebase/firestore-compat",$c="firebase",Bc="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]",jc={[ss]:"fire-core",[_c]:"fire-core-compat",[Ec]:"fire-analytics",[yc]:"fire-analytics-compat",[Tc]:"fire-app-check",[vc]:"fire-app-check-compat",[Ic]:"fire-auth",[Ac]:"fire-auth-compat",[wc]:"fire-rtdb",[Pc]:"fire-rtdb-compat",[Cc]:"fire-fn",[Rc]:"fire-fn-compat",[Sc]:"fire-iid",[Vc]:"fire-iid-compat",[bc]:"fire-fcm",[Dc]:"fire-fcm-compat",[Nc]:"fire-perf",[Oc]:"fire-perf-compat",[kc]:"fire-rc",[Mc]:"fire-rc-compat",[Lc]:"fire-gcs",[xc]:"fire-gcs-compat",[Fc]:"fire-fst",[Uc]:"fire-fst-compat","fire-js":"fire-js",[$c]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Map,as=new Map;function qc(e,t){try{e.container.addComponent(t)}catch(n){Ne.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function lr(e){const t=e.name;if(as.has(t))return Ne.debug(`There were multiple attempts to register component ${t}.`),!1;as.set(t,e);for(const n of ar.values())qc(n,e);return!0}function Hc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new rl("app","Firebase",zc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=Bc;function al(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:os,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw me.create("bad-app-name",{appName:String(i)});if(n||(n=nl()),!n)throw me.create("no-options");const s=ar.get(i);if(s){if(ns(n,s.options)&&ns(r,s.config))return s;throw me.create("duplicate-app",{appName:i})}const o=new Zh(i);for(const l of as.values())o.addComponent(l);const a=new Gc(n,r,o);return ar.set(i,a),a}function Qc(e=os){const t=ar.get(e);if(!t&&e===os&&nl())return al();if(!t)throw me.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=jc[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ne.warn(a.join(" "));return}lr(new _n(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="firebase-heartbeat-database",Xc=1,yn="firebase-heartbeat-store";let $i=null;function ll(){return $i||($i=fc(Wc,Xc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(yn)}}}).catch(e=>{throw me.create("idb-open",{originalErrorMessage:e.message})})),$i}async function Yc(e){try{return await(await ll()).transaction(yn).objectStore(yn).get(ul(e))}catch(t){if(t instanceof Je)Ne.warn(t.message);else{const n=me.create("idb-get",{originalErrorMessage:t?.message});Ne.warn(n.message)}}}async function aa(e,t){try{const r=(await ll()).transaction(yn,"readwrite");await r.objectStore(yn).put(t,ul(e)),await r.done}catch(n){if(n instanceof Je)Ne.warn(n.message);else{const r=me.create("idb-set",{originalErrorMessage:n?.message});Ne.warn(r.message)}}}function ul(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=1024,Zc=30*24*60*60*1e3;class tf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=la();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Zc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=la(),{heartbeatsToSend:r,unsentEntries:i}=ef(this._heartbeatsCache.heartbeats),s=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function la(){return new Date().toISOString().substring(0,10)}function ef(e,t=Jc){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ua(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ua(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zh()?Gh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yc(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return aa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return aa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ua(e){return sr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(e){lr(new _n("platform-logger",t=>new gc(t),"PRIVATE")),lr(new _n("heartbeat",t=>new tf(t),"PRIVATE")),qe(ss,oa,e),qe(ss,oa,"esm2017"),qe("fire-js","")}rf("");var sf="firebase",of="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(sf,of,"app");var af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Vs=Vs||{},P=af||self;function Rr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function kn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function lf(e){return Object.prototype.hasOwnProperty.call(e,Bi)&&e[Bi]||(e[Bi]=++uf)}var Bi="closure_uid_"+(1e9*Math.random()>>>0),uf=0;function hf(e,t,n){return e.call.apply(e.bind,arguments)}function cf(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function vt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=hf:vt=cf,vt.apply(null,arguments)}function Kn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ut(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function ye(){this.s=this.s,this.o=this.o}var ff=0;ye.prototype.s=!1;ye.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ff!=0)&&lf(this)};ye.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hl=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function bs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ha(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Rr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var df=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};P.addEventListener("test",n,t),P.removeEventListener("test",n,t)}catch{}return e}();function En(e){return/^[\s\xa0]*$/.test(e)}function Sr(){var e=P.navigator;return e&&(e=e.userAgent)?e:""}function Lt(e){return Sr().indexOf(e)!=-1}function Ds(e){return Ds[" "](e),e}Ds[" "]=function(){};function mf(e,t){var n=od;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var gf=Lt("Opera"),Ge=Lt("Trident")||Lt("MSIE"),cl=Lt("Edge"),ls=cl||Ge,fl=Lt("Gecko")&&!(Sr().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),pf=Sr().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function dl(){var e=P.document;return e?e.documentMode:void 0}var us;t:{var ji="",qi=function(){var e=Sr();if(fl)return/rv:([^\);]+)(\)|;)/.exec(e);if(cl)return/Edge\/([\d\.]+)/.exec(e);if(Ge)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(pf)return/WebKit\/(\S+)/.exec(e);if(gf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(qi&&(ji=qi?qi[1]:""),Ge){var Hi=dl();if(Hi!=null&&Hi>parseFloat(ji)){us=String(Hi);break t}}us=ji}var hs;if(P.document&&Ge){var ca=dl();hs=ca||parseInt(us,10)||void 0}else hs=void 0;var _f=hs;function vn(e,t){if(Tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(fl){t:{try{Ds(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:yf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&vn.$.h.call(this)}}ut(vn,Tt);var yf={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),Ef=0;function vf(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Ef,this.fa=this.ia=!1}function Vr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ns(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Tf(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ml(e){const t={};for(const n in e)t[n]=e[n];return t}const fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gl(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<fa.length;s++)n=fa[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function br(e){this.src=e,this.g={},this.h=0}br.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=fs(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new vf(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function cs(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=hl(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function fs(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Os="closure_lm_"+(1e6*Math.random()|0),zi={};function pl(e,t,n,r,i){if(r&&r.once)return yl(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pl(e,t[s],n,r,i);return null}return n=Ls(n),e&&e[Mn]?e.O(t,n,kn(r)?!!r.capture:!!r,i):_l(e,t,n,!1,r,i)}function _l(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=kn(i)?!!i.capture:!!i,a=Ms(e);if(a||(e[Os]=a=new br(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=If(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)df||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(vl(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function If(){function e(n){return t.call(e.src,e.listener,n)}const t=Af;return e}function yl(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)yl(e,t[s],n,r,i);return null}return n=Ls(n),e&&e[Mn]?e.P(t,n,kn(r)?!!r.capture:!!r,i):_l(e,t,n,!0,r,i)}function El(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)El(e,t[s],n,r,i);else r=kn(r)?!!r.capture:!!r,n=Ls(n),e&&e[Mn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=fs(s,n,r,i),-1<n&&(Vr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ms(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fs(t,n,r,i)),(n=-1<e?t[e]:null)&&ks(n))}function ks(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Mn])cs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(vl(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ms(t))?(cs(n,e),n.h==0&&(n.src=null,t[Os]=null)):Vr(e)}}}function vl(e){return e in zi?zi[e]:zi[e]="on"+e}function Af(e,t){if(e.fa)e=!0;else{t=new vn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ks(e),e=n.call(r,t)}return e}function Ms(e){return e=e[Os],e instanceof br?e:null}var Gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ls(e){return typeof e=="function"?e:(e[Gi]||(e[Gi]=function(t){return e.handleEvent(t)}),e[Gi])}function at(){ye.call(this),this.i=new br(this),this.S=this,this.J=null}ut(at,ye);at.prototype[Mn]=!0;at.prototype.removeEventListener=function(e,t,n,r){El(this,e,t,n,r)};function gt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Tt(t,e);else if(t instanceof Tt)t.target=t.target||e;else{var i=t;t=new Tt(r,e),gl(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Qn(o,r,!0,t)&&i}if(o=t.g=e,i=Qn(o,r,!0,t)&&i,i=Qn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Qn(o,r,!1,t)&&i}at.prototype.N=function(){if(at.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Vr(n[r]);delete e.g[t],e.h--}}this.J=null};at.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};at.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Qn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&cs(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var xs=P.JSON.stringify;class wf{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Pf(){var e=Fs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Cf{constructor(){this.h=this.g=null}add(t,n){const r=Tl.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Tl=new wf(()=>new Rf,e=>e.reset());class Rf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sf(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Vf(e){P.setTimeout(()=>{throw e},0)}let Tn,In=!1,Fs=new Cf,Il=()=>{const e=P.Promise.resolve(void 0);Tn=()=>{e.then(bf)}};var bf=()=>{for(var e;e=Pf();){try{e.h.call(e.g)}catch(n){Vf(n)}var t=Tl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}In=!1};function Dr(e,t){at.call(this),this.h=e||1,this.g=t||P,this.j=vt(this.qb,this),this.l=Date.now()}ut(Dr,at);y=Dr.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),gt(this,"tick"),this.ga&&(Us(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Us(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}y.N=function(){Dr.$.N.call(this),Us(this),delete this.g};function $s(e,t,n){if(typeof e=="function")n&&(e=vt(e,n));else if(e&&typeof e.handleEvent=="function")e=vt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:P.setTimeout(e,t||0)}function Al(e){e.g=$s(()=>{e.g=null,e.i&&(e.i=!1,Al(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Df extends ye{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Al(this)}N(){super.N(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(e){ye.call(this),this.h=e,this.g={}}ut(An,ye);var da=[];function wl(e,t,n,r){Array.isArray(n)||(n&&(da[0]=n.toString()),n=da);for(var i=0;i<n.length;i++){var s=pl(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Pl(e){Ns(e.g,function(t,n){this.g.hasOwnProperty(n)&&ks(t)},e),e.g={}}An.prototype.N=function(){An.$.N.call(this),Pl(this)};An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nr(){this.g=!0}Nr.prototype.Ea=function(){this.g=!1};function Nf(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Of(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function je(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Mf(e,n)+(r?" "+r:"")})}function kf(e,t){e.info(function(){return"TIMEOUT: "+t})}Nr.prototype.info=function(){};function Mf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xs(n)}catch{return t}}var xe={},ma=null;function Or(){return ma=ma||new at}xe.Ta="serverreachability";function Cl(e){Tt.call(this,xe.Ta,e)}ut(Cl,Tt);function wn(e){const t=Or();gt(t,new Cl(t))}xe.STAT_EVENT="statevent";function Rl(e,t){Tt.call(this,xe.STAT_EVENT,e),this.stat=t}ut(Rl,Tt);function wt(e){const t=Or();gt(t,new Rl(t,e))}xe.Ua="timingevent";function Sl(e,t){Tt.call(this,xe.Ua,e),this.size=t}ut(Sl,Tt);function Ln(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){e()},t)}var kr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bs(){}Bs.prototype.h=null;function ga(e){return e.h||(e.h=e.i())}function bl(){}var xn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function js(){Tt.call(this,"d")}ut(js,Tt);function qs(){Tt.call(this,"c")}ut(qs,Tt);var ds;function Mr(){}ut(Mr,Bs);Mr.prototype.g=function(){return new XMLHttpRequest};Mr.prototype.i=function(){return{}};ds=new Mr;function Fn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new An(this),this.P=Lf,e=ls?125:void 0,this.V=new Dr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Dl}function Dl(){this.i=null,this.g="",this.h=!1}var Lf=45e3,Nl={},ms={};y=Fn.prototype;y.setTimeout=function(e){this.P=e};function gs(e,t,n){e.L=1,e.A=xr(ue(t)),e.u=n,e.S=!0,Ol(e,null)}function Ol(e,t){e.G=Date.now(),Un(e),e.B=ue(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Bl(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Dl,e.g=lu(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Df(vt(e.Pa,e,e.g),e.O)),wl(e.U,e.g,"readystatechange",e.nb),t=e.I?ml(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),wn(),Nf(e.j,e.v,e.B,e.m,e.W,e.u)}y.nb=function(e){e=e.target;const t=this.M;t&&xt(e)==3?t.l():this.Pa(e)};y.Pa=function(e){try{if(e==this.g)t:{const c=xt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||ls||this.g&&(this.h.h||this.g.ja()||Ea(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?wn(3):wn(2)),Lr(this);var n=this.g.da();this.ca=n;e:if(kl(this)){var r=Ea(this.g);e="";var i=r.length,s=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pe(this),fn(this);var o="";break e}this.h.i=new P.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Of(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!En(a)){var u=a;break e}}u=null}if(n=u)je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,n);else{this.i=!1,this.s=3,wt(12),Pe(this),fn(this);break t}}this.S?(Ml(this,c,o),ls&&this.i&&c==3&&(wl(this.U,this.V,"tick",this.mb),this.V.start())):(je(this.j,this.m,o,null),ps(this,o)),c==4&&Pe(this),this.i&&!this.J&&(c==4?iu(this.l,this):(this.i=!1,Un(this)))}else rd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Pe(this),fn(this)}}}catch{}finally{}};function kl(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Ml(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=xf(e,n),i==ms){t==4&&(e.s=4,wt(14),r=!1),je(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Nl){e.s=4,wt(15),je(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else je(e.j,e.m,i,null),ps(e,i);kl(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,wt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ws(t),t.M=!0,wt(11))):(je(e.j,e.m,n,"[Invalid Chunked Response]"),Pe(e),fn(e))}y.mb=function(){if(this.g){var e=xt(this.g),t=this.g.ja();this.o<t.length&&(Lr(this),Ml(this,e,t),this.i&&e!=4&&Un(this))}};function xf(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ms:(n=Number(t.substring(n,r)),isNaN(n)?Nl:(r+=1,r+n>t.length?ms:(t=t.slice(r,r+n),e.o=r+n,t)))}y.cancel=function(){this.J=!0,Pe(this)};function Un(e){e.Y=Date.now()+e.P,Ll(e,e.P)}function Ll(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Ln(vt(e.lb,e),t)}function Lr(e){e.C&&(P.clearTimeout(e.C),e.C=null)}y.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(kf(this.j,this.B),this.L!=2&&(wn(),wt(17)),Pe(this),this.s=2,fn(this)):Ll(this,this.Y-e)};function fn(e){e.l.H==0||e.J||iu(e.l,e)}function Pe(e){Lr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Us(e.V),Pl(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ps(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||_s(n.i,e))){if(!e.K&&_s(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)cr(n),Br(n);else break t;Qs(n),wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ln(vt(n.ib,n),6e3));if(1>=Hl(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ce(n,11)}else if((e.K||n.g==e)&&cr(n),!En(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Hs(s,s.h),s.h=null))}if(r.F){const w=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,K(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=au(r,r.J?r.pa:null,r.Y),o.K){zl(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Lr(a),Un(a)),r.g=o}else nu(r);0<n.j.length&&jr(n)}else u[0]!="stop"&&u[0]!="close"||Ce(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ce(n,7):Ks(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}wn(4)}catch{}}function Ff(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Rr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Uf(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Rr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function xl(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Rr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Uf(e),r=Ff(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $f(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ve(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ve){this.h=e.h,ur(this,e.j),this.s=e.s,this.g=e.g,hr(this,e.m),this.l=e.l;var t=e.i,n=new Pn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),pa(this,n),this.o=e.o}else e&&(t=String(e).match(Fl))?(this.h=!1,ur(this,t[1]||"",!0),this.s=hn(t[2]||""),this.g=hn(t[3]||"",!0),hr(this,t[4]),this.l=hn(t[5]||"",!0),pa(this,t[6]||"",!0),this.o=hn(t[7]||"")):(this.h=!1,this.i=new Pn(null,this.h))}Ve.prototype.toString=function(){var e=[],t=this.j;t&&e.push(cn(t,_a,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(cn(t,_a,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(cn(n,n.charAt(0)=="/"?qf:jf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",cn(n,zf)),e.join("")};function ue(e){return new Ve(e)}function ur(e,t,n){e.j=n?hn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function hr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function pa(e,t,n){t instanceof Pn?(e.i=t,Gf(e.i,e.h)):(n||(t=cn(t,Hf)),e.i=new Pn(t,e.h))}function K(e,t,n){e.i.set(t,n)}function xr(e){return K(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function hn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function cn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Bf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Bf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var _a=/[#\/\?@]/g,jf=/[#\?:]/g,qf=/[#\?]/g,Hf=/[#\?@]/g,zf=/#/g;function Pn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ee(e){e.g||(e.g=new Map,e.h=0,e.i&&$f(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Pn.prototype;y.add=function(e,t){Ee(this),this.i=null,e=Ze(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ul(e,t){Ee(e),t=Ze(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $l(e,t){return Ee(e),t=Ze(e,t),e.g.has(t)}y.forEach=function(e,t){Ee(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};y.ta=function(){Ee(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};y.Z=function(e){Ee(this);let t=[];if(typeof e=="string")$l(this,e)&&(t=t.concat(this.g.get(Ze(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return Ee(this),this.i=null,e=Ze(this,e),$l(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Bl(e,t,n){Ul(e,t),0<n.length&&(e.i=null,e.g.set(Ze(e,t),bs(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ze(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Gf(e,t){t&&!e.j&&(Ee(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ul(this,r),Bl(this,i,n))},e)),e.j=t}var Kf=class{constructor(e,t){this.g=e,this.map=t}};function jl(e){this.l=e||Qf,P.PerformanceNavigationTiming?(e=P.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(P.g&&P.g.Ka&&P.g.Ka()&&P.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qf=10;function ql(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Hl(e){return e.h?1:e.g?e.g.size:0}function _s(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Hs(e,t){e.g?e.g.add(t):e.h=t}function zl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}jl.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Gl(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return bs(e.i)}var Wf=class{stringify(e){return P.JSON.stringify(e,void 0)}parse(e){return P.JSON.parse(e,void 0)}};function Xf(){this.g=new Wf}function Yf(e,t,n){const r=n||"";try{xl(e,function(i,s){let o=i;kn(i)&&(o=xs(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Jf(e,t){const n=new Nr;if(P.Image){const r=new Image;r.onload=Kn(Wn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Kn(Wn,n,r,"TestLoadImage: error",!1,t),r.onabort=Kn(Wn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Kn(Wn,n,r,"TestLoadImage: timeout",!1,t),P.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Wn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Fr(e){this.l=e.ec||null,this.j=e.ob||!1}ut(Fr,Bs);Fr.prototype.g=function(){return new Ur(this.l,this.j)};Fr.prototype.i=function(e){return function(){return e}}({});function Ur(e,t){at.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=zs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(Ur,at);var zs=0;y=Ur.prototype;y.open=function(e,t){if(this.readyState!=zs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||P).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=zs};y.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kl(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Kl(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}y.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$n(this):Cn(this),this.readyState==3&&Kl(this)}};y.Za=function(e){this.g&&(this.response=this.responseText=e,$n(this))};y.Ya=function(e){this.g&&(this.response=e,$n(this))};y.ka=function(){this.g&&$n(this)};function $n(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Zf=P.JSON.parse;function J(e){at.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ql,this.L=this.M=!1}ut(J,at);var Ql="",td=/^https?$/i,ed=["POST","PUT"];y=J.prototype;y.Oa=function(e){this.M=e};y.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ds.g(),this.C=this.u?ga(this.u):ga(ds),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){ya(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=P.FormData&&e instanceof P.FormData,!(0<=hl(ed,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yl(this),0<this.B&&((this.L=nd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=$s(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ya(this,s)}};function nd(e){return Ge&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.ua=function(){typeof Vs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gt(this,"timeout"),this.abort(8))};function ya(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wl(e),$r(e)}function Wl(e){e.F||(e.F=!0,gt(e,"complete"),gt(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,gt(this,"complete"),gt(this,"abort"),$r(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$r(this,!0)),J.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Xl(this):this.kb())};y.kb=function(){Xl(this)};function Xl(e){if(e.h&&typeof Vs<"u"&&(!e.C[1]||xt(e)!=4||e.da()!=2)){if(e.v&&xt(e)==4)$s(e.La,0,e);else if(gt(e,"readystatechange"),xt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Fl)[1]||null;!i&&P.self&&P.self.location&&(i=P.self.location.protocol.slice(0,-1)),r=!td.test(i?i.toLowerCase():"")}n=r}if(n)gt(e,"complete"),gt(e,"success");else{e.m=6;try{var s=2<xt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Wl(e)}}finally{$r(e)}}}}function $r(e,t){if(e.g){Yl(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||gt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Yl(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(P.clearTimeout(e.A),e.A=null)}y.isActive=function(){return!!this.g};function xt(e){return e.g?e.g.readyState:0}y.da=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Zf(t)}};function Ea(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ql:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function rd(e){const t={};e=(e.g&&2<=xt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(En(e[r]))continue;var n=Sf(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Tf(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jl(e){let t="";return Ns(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Gs(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Jl(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):K(e,t,n))}function sn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zl(e){this.Ga=0,this.j=[],this.l=new Nr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=sn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=sn("baseRetryDelayMs",5e3,e),this.hb=sn("retryDelaySeedMs",1e4,e),this.eb=sn("forwardChannelMaxRetries",2,e),this.xa=sn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new jl(e&&e.concurrentRequestLimit),this.Ja=new Xf,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Zl.prototype;y.ra=8;y.H=1;function Ks(e){if(tu(e),e.H==3){var t=e.W++,n=ue(e.I);if(K(n,"SID",e.K),K(n,"RID",t),K(n,"TYPE","terminate"),Bn(e,n),t=new Fn(e,e.l,t),t.L=2,t.A=xr(ue(n)),n=!1,P.navigator&&P.navigator.sendBeacon)try{n=P.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&P.Image&&(new Image().src=t.A,n=!0),n||(t.g=lu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Un(t)}ou(e)}function Br(e){e.g&&(Ws(e),e.g.cancel(),e.g=null)}function tu(e){Br(e),e.u&&(P.clearTimeout(e.u),e.u=null),cr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&P.clearTimeout(e.m),e.m=null)}function jr(e){if(!ql(e.i)&&!e.m){e.m=!0;var t=e.Na;Tn||Il(),In||(Tn(),In=!0),Fs.add(t,e),e.C=0}}function id(e,t){return Hl(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ln(vt(e.Na,e,t),su(e,e.C)),e.C++,!0)}y.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Fn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ml(s),gl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=eu(this,i,t),n=ue(this.I),K(n,"RID",e),K(n,"CVER",22),this.F&&K(n,"X-HTTP-Session-Id",this.F),Bn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Jl(s)))+"&"+t:this.o&&Gs(n,this.o,s)),Hs(this.i,i),this.bb&&K(n,"TYPE","init"),this.P?(K(n,"$req",t),K(n,"SID","null"),i.aa=!0,gs(i,n,null)):gs(i,n,t),this.H=2}}else this.H==3&&(e?va(this,e):this.j.length==0||ql(this.i)||va(this))};function va(e,t){var n;t?n=t.m:n=e.W++;const r=ue(e.I);K(r,"SID",e.K),K(r,"RID",n),K(r,"AID",e.V),Bn(e,r),e.o&&e.s&&Gs(r,e.o,e.s),n=new Fn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=eu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Hs(e.i,n),gs(n,r,t)}function Bn(e,t){e.na&&Ns(e.na,function(n,r){K(t,r,n)}),e.h&&xl({},function(n,r){K(t,r,n)})}function eu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?vt(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Yf(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function nu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Tn||Il(),In||(Tn(),In=!0),Fs.add(t,e),e.A=0}}function Qs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ln(vt(e.Ma,e),su(e,e.A)),e.A++,!0)}y.Ma=function(){if(this.u=null,ru(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ln(vt(this.jb,this),e)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Br(this),ru(this))};function Ws(e){e.B!=null&&(P.clearTimeout(e.B),e.B=null)}function ru(e){e.g=new Fn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ue(e.wa);K(t,"RID","rpc"),K(t,"SID",e.K),K(t,"AID",e.V),K(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&K(t,"TO",e.qa),K(t,"TYPE","xmlhttp"),Bn(e,t),e.o&&e.s&&Gs(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=xr(ue(t)),n.u=null,n.S=!0,Ol(n,e)}y.ib=function(){this.v!=null&&(this.v=null,Br(this),Qs(this),wt(19))};function cr(e){e.v!=null&&(P.clearTimeout(e.v),e.v=null)}function iu(e,t){var n=null;if(e.g==t){cr(e),Ws(e),e.g=null;var r=2}else if(_s(e.i,t))n=t.F,zl(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Or(),gt(r,new Sl(r,n)),jr(e)}else nu(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&id(e,t)||r==2&&Qs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ce(e,5);break;case 4:Ce(e,10);break;case 3:Ce(e,6);break;default:Ce(e,2)}}}function su(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ce(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=vt(e.pb,e);n||(n=new Ve("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||ur(n,"https"),xr(n)),Jf(n.toString(),r)}else wt(2);e.H=0,e.h&&e.h.za(t),ou(e),tu(e)}y.pb=function(e){e?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function ou(e){if(e.H=0,e.ma=[],e.h){const t=Gl(e.i);(t.length!=0||e.j.length!=0)&&(ha(e.ma,t),ha(e.ma,e.j),e.i.i.length=0,bs(e.j),e.j.length=0),e.h.ya()}}function au(e,t,n){var r=n instanceof Ve?ue(n):new Ve(n);if(r.g!="")t&&(r.g=t+"."+r.g),hr(r,r.m);else{var i=P.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ve(null);r&&ur(s,r),t&&(s.g=t),i&&hr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&K(r,n,t),K(r,"VER",e.ra),Bn(e,r),r}function lu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new J(new Fr({ob:n})):new J(e.va),t.Oa(e.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function uu(){}y=uu.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function fr(){if(Ge&&!(10<=Number(_f)))throw Error("Environmental error: no available transport.")}fr.prototype.g=function(e,t){return new Vt(e,t)};function Vt(e,t){at.call(this),this.g=new Zl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!En(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!En(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new tn(this)}ut(Vt,at);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;wt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=au(e,null,e.Y),jr(e)};Vt.prototype.close=function(){Ks(this.g)};Vt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xs(e),e=n);t.j.push(new Kf(t.fb++,e)),t.H==3&&jr(t)};Vt.prototype.N=function(){this.g.h=null,delete this.j,Ks(this.g),delete this.g,Vt.$.N.call(this)};function hu(e){js.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ut(hu,js);function cu(){qs.call(this),this.status=1}ut(cu,qs);function tn(e){this.g=e}ut(tn,uu);tn.prototype.Ba=function(){gt(this.g,"a")};tn.prototype.Aa=function(e){gt(this.g,new hu(e))};tn.prototype.za=function(e){gt(this.g,new cu)};tn.prototype.ya=function(){gt(this.g,"b")};function sd(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ut(Ut,sd);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ki(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Ut.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ki(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ki(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ki(this,r),i=0;break}}this.h=i,this.i+=t};Ut.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function z(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var od={};function Xs(e){return-128<=e&&128>e?mf(e,function(t){return new z([t|0],0>t?-1:0)}):new z([e|0],0>e?-1:0)}function Ft(e){if(isNaN(e)||!isFinite(e))return He;if(0>e)return dt(Ft(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ys;return new z(t,0)}function fu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return dt(fu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ft(Math.pow(t,8)),r=He,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Ft(Math.pow(t,s)),r=r.R(s).add(Ft(o))):(r=r.R(n),r=r.add(Ft(o)))}return r}var ys=4294967296,He=Xs(0),Es=Xs(1),Ta=Xs(16777216);y=z.prototype;y.ea=function(){if(bt(this))return-dt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ys+r)*t,t*=ys}return e};y.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(oe(this))return"0";if(bt(this))return"-"+dt(this).toString(e);for(var t=Ft(Math.pow(e,6)),n=this,r="";;){var i=mr(n,t).g;n=dr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,oe(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};y.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function oe(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function bt(e){return e.h==-1}y.X=function(e){return e=dr(this,e),bt(e)?-1:oe(e)?0:1};function dt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new z(n,~e.h).add(Es)}y.abs=function(){return bt(this)?dt(this):this};y.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new z(n,n[n.length-1]&-2147483648?-1:0)};function dr(e,t){return e.add(dt(t))}y.R=function(e){if(oe(this)||oe(e))return He;if(bt(this))return bt(e)?dt(this).R(dt(e)):dt(dt(this).R(e));if(bt(e))return dt(this.R(dt(e)));if(0>this.X(Ta)&&0>e.X(Ta))return Ft(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Xn(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Xn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Xn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Xn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new z(n,0)};function Xn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function on(e,t){this.g=e,this.h=t}function mr(e,t){if(oe(t))throw Error("division by zero");if(oe(e))return new on(He,He);if(bt(e))return t=mr(dt(e),t),new on(dt(t.g),dt(t.h));if(bt(t))return t=mr(e,dt(t)),new on(dt(t.g),t.h);if(30<e.g.length){if(bt(e)||bt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Es,r=t;0>=r.X(e);)n=Ia(n),r=Ia(r);var i=$e(n,1),s=$e(r,1);for(r=$e(r,2),n=$e(n,2);!oe(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=$e(r,1),n=$e(n,1)}return t=dr(e,i.R(t)),new on(i,t)}for(i=He;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ft(n),o=s.R(t);bt(o)||0<o.X(e);)n-=r,s=Ft(n),o=s.R(t);oe(s)&&(s=Es),i=i.add(s),e=dr(e,o)}return new on(i,e)}y.gb=function(e){return mr(this,e).h};y.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new z(n,this.h&e.h)};y.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new z(n,this.h|e.h)};y.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new z(n,this.h^e.h)};function Ia(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new z(n,e.h)}function $e(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new z(i,e.h)}fr.prototype.createWebChannel=fr.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;kr.NO_ERROR=0;kr.TIMEOUT=8;kr.HTTP_ERROR=6;Vl.COMPLETE="complete";bl.EventType=xn;xn.OPEN="a";xn.CLOSE="b";xn.ERROR="c";xn.MESSAGE="d";at.prototype.listen=at.prototype.O;J.prototype.listenOnce=J.prototype.P;J.prototype.getLastError=J.prototype.Sa;J.prototype.getLastErrorCode=J.prototype.Ia;J.prototype.getStatus=J.prototype.da;J.prototype.getResponseJson=J.prototype.Wa;J.prototype.getResponseText=J.prototype.ja;J.prototype.send=J.prototype.ha;J.prototype.setWithCredentials=J.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;z.prototype.add=z.prototype.add;z.prototype.multiply=z.prototype.R;z.prototype.modulo=z.prototype.gb;z.prototype.compare=z.prototype.X;z.prototype.toNumber=z.prototype.ea;z.prototype.toString=z.prototype.toString;z.prototype.getBits=z.prototype.D;z.fromNumber=Ft;z.fromString=fu;var ad=function(){return new fr},ld=function(){return Or()},Qi=kr,ud=Vl,hd=xe,Aa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Yn=bl,cd=J,fd=z;const wa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new il("@firebase/firestore");function an(){return Oe.logLevel}function A(e,...t){if(Oe.logLevel<=$.DEBUG){const n=t.map(Ys);Oe.debug(`Firestore (${en}): ${e}`,...n)}}function ke(e,...t){if(Oe.logLevel<=$.ERROR){const n=t.map(Ys);Oe.error(`Firestore (${en}): ${e}`,...n)}}function gr(e,...t){if(Oe.logLevel<=$.WARN){const n=t.map(Ys);Oe.warn(`Firestore (${en}): ${e}`,...n)}}function Ys(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e="Unexpected state"){const t=`FIRESTORE (${en}) INTERNAL ASSERTION FAILED: `+e;throw ke(t),new Error(t)}function lt(e,t){e||N()}function Q(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Je{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class md{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gd{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new be;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new be,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new be)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string"),new du(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return lt(t===null||typeof t=="string"),new _t(t)}}class pd{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _d{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new pd(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ed{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(lt(typeof n.token=="string"),this.R=n.token,new yd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=vd(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function G(e,t){return e<t?-1:e>t?1:0}function Ke(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new C(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new C(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new ot(0,0))}static max(){return new W(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,n,r){n===void 0?n=0:n>t.length&&N(),r===void 0?r=t.length-n:r>t.length-n&&N(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Rn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Rn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class rt extends Rn{construct(t,n,r){return new rt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new C(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const Td=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Rn{construct(t,n,r){return new mt(t,n,r)}static isValidIdentifier(t){return Td.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new C(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.path=t}static fromPath(t){return new b(rt.fromString(t))}static fromName(t){return new b(rt.fromString(t).popFirst(5))}static empty(){return new b(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return rt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new b(new rt(t.slice()))}}function Id(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new ge(i,b.empty(),t)}function Ad(e){return new ge(e.readTime,e.key,-1)}class ge{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new ge(W.min(),b.empty(),-1)}static max(){return new ge(W.max(),b.empty(),-1)}}function wd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=b.comparator(e.documentKey,t.documentKey),n!==0?n:G(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Pd)throw e;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(i=>i?g.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new g((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function qr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}pu._e=-1;function Js(e){return e==null}function pr(e){return e===0&&1/e==-1/0}function Rd(e){return typeof e=="number"&&Number.isInteger(e)&&!pr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function jn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _u(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,n){this.comparator=t,this.root=n||ct.EMPTY}insert(t,n){return new Rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Jn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Jn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Jn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Jn(this.root,t,this.comparator,!0)}}class Jn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new ct(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw N();const t=this.left.check();if(t!==this.right.check())throw N();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw N()}get value(){throw N()}get color(){throw N()}get left(){throw N()}get right(){throw N()}copy(t,n,r,i,s){return this}insert(t,n,r){return new ct(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(t){return new Ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof It)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new It(this.comparator);return n.data=t,n}}class Ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new Ot([])}unionWith(t){let n=new It(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ke(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sd("Invalid base64 string: "+s):s}}(t);return new he(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new he(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Vd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Me(e){if(lt(!!e),typeof e=="string"){let t=0;const n=Vd.exec(e);if(lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ft(e.seconds),nanos:ft(e.nanos)}}function ft(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Sn(e){return typeof e=="string"?he.fromBase64String(e):he.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yu(e){const t=e.mapValue.fields.__previous_value__;return Zs(t)?yu(t):t}function _r(e){const t=Me(e.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class yr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Zs(e)?4:Dd(e)?9007199254740991:10:N()}function $t(e,t){if(e===t)return!0;const n=Qe(e);if(n!==Qe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _r(e).isEqual(_r(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Me(i.timestampValue),a=Me(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Sn(i.bytesValue).isEqual(Sn(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return ft(i.geoPointValue.latitude)===ft(s.geoPointValue.latitude)&&ft(i.geoPointValue.longitude)===ft(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ft(i.integerValue)===ft(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ft(i.doubleValue),a=ft(s.doubleValue);return o===a?pr(o)===pr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ke(e.arrayValue.values||[],t.arrayValue.values||[],$t);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Pa(o)!==Pa(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$t(o[l],a[l])))return!1;return!0}(e,t);default:return N()}}function Vn(e,t){return(e.values||[]).find(n=>$t(n,t))!==void 0}function We(e,t){if(e===t)return 0;const n=Qe(e),r=Qe(t);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=ft(s.integerValue||s.doubleValue),l=ft(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Ra(e.timestampValue,t.timestampValue);case 4:return Ra(_r(e),_r(t));case 5:return G(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Sn(s),l=Sn(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=G(a[u],l[u]);if(c!==0)return c}return G(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=G(ft(s.latitude),ft(o.latitude));return a!==0?a:G(ft(s.longitude),ft(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=We(a[u],l[u]);if(c)return c}return G(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Zn.mapValue&&o===Zn.mapValue)return 0;if(s===Zn.mapValue)return 1;if(o===Zn.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=G(l[h],c[h]);if(f!==0)return f;const d=We(a[l[h]],u[c[h]]);if(d!==0)return d}return G(l.length,c.length)}(e.mapValue,t.mapValue);default:throw N()}}function Ra(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return G(e,t);const n=Me(e),r=Me(t),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function Xe(e){return vs(e)}function vs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Me(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Sn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return b.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vs(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vs(n.fields[o])}`;return i+"}"}(e.mapValue):N()}function Ts(e){return!!e&&"integerValue"in e}function to(e){return!!e&&"arrayValue"in e}function nr(e){return!!e&&"mapValue"in e}function dn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return jn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=dn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=dn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Dd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!nr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=dn(n)}setAll(t){let n=mt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());nr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];nr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){jn(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Nt(dn(this.value))}}function Eu(e){const t=[];return jn(e.fields,(n,r)=>{const i=new mt([n]);if(nr(r)){const s=Eu(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Dt(t,0,W.min(),W.min(),W.min(),Nt.empty(),0)}static newFoundDocument(t,n,r,i){return new Dt(t,1,n,W.min(),r,i,0)}static newNoDocument(t,n){return new Dt(t,2,n,W.min(),W.min(),Nt.empty(),0)}static newUnknownDocument(t,n){return new Dt(t,3,n,W.min(),W.min(),Nt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,n){this.position=t,this.inclusive=n}}function Sa(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=We(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Va(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!$t(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,n="asc"){this.field=t,this.dir=n}}function Nd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{}class st extends vu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new kd(t,n,r):n==="array-contains"?new xd(t,r):n==="in"?new Fd(t,r):n==="not-in"?new Ud(t,r):n==="array-contains-any"?new $d(t,r):new st(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Md(t,r):new Ld(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(We(n,this.value)):n!==null&&Qe(this.value)===Qe(n)&&this.matchesComparison(We(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return N()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends vu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new pe(t,n)}matches(t){return Tu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Tu(e){return e.op==="and"}function Iu(e){return Od(e)&&Tu(e)}function Od(e){for(const t of e.filters)if(t instanceof pe)return!1;return!0}function Is(e){if(e instanceof st)return e.field.canonicalString()+e.op.toString()+Xe(e.value);if(Iu(e))return e.filters.map(t=>Is(t)).join(",");{const t=e.filters.map(n=>Is(n)).join(",");return`${e.op}(${t})`}}function Au(e,t){return e instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&$t(r.value,i.value)}(e,t):e instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Au(o,i.filters[a]),!0):!1}(e,t):void N()}function wu(e){return e instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${Xe(n.value)}`}(e):e instanceof pe?function(n){return n.op.toString()+" {"+n.getFilters().map(wu).join(" ,")+"}"}(e):"Filter"}class kd extends st{constructor(t,n,r){super(t,n,r),this.key=b.fromName(r.referenceValue)}matches(t){const n=b.comparator(t.key,this.key);return this.matchesComparison(n)}}class Md extends st{constructor(t,n){super(t,"in",n),this.keys=Pu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ld extends st{constructor(t,n){super(t,"not-in",n),this.keys=Pu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Pu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}class xd extends st{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return to(n)&&Vn(n.arrayValue,this.value)}}class Fd extends st{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Vn(this.value.arrayValue,n)}}class Ud extends st{constructor(t,n){super(t,"not-in",n)}matches(t){if(Vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Vn(this.value.arrayValue,n)}}class $d extends st{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!to(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function ba(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Bd(e,t,n,r,i,s,o)}function eo(e){const t=Q(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Is(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Js(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Xe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Xe(r)).join(",")),t.ce=n}return t.ce}function no(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Nd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Au(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Va(e.startAt,t.startAt)&&Va(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function jd(e,t,n,r,i,s,o,a){return new Hr(e,t,n,r,i,s,o,a)}function qd(e){return new Hr(e)}function Da(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Hd(e){return e.collectionGroup!==null}function mn(e){const t=Q(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new It(mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new vr(s,r))}),n.has(mt.keyField().canonicalString())||t.le.push(new vr(mt.keyField(),r))}return t.le}function De(e){const t=Q(e);return t.he||(t.he=zd(t,mn(e))),t.he}function zd(e,t){if(e.limitType==="F")return ba(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vr(i.field,s)});const n=e.endAt?new Er(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Er(e.startAt.position,e.startAt.inclusive):null;return ba(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function As(e,t,n){return new Hr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Cu(e,t){return no(De(e),De(t))&&e.limitType===t.limitType}function Ru(e){return`${eo(De(e))}|lt:${e.limitType}`}function ln(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wu(i)).join(", ")}]`),Js(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xe(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xe(i)).join(",")),`Target(${r})`}(De(e))}; limitType=${e.limitType})`}function ro(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):b.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of mn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Sa(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,mn(r),i)||r.endAt&&!function(o,a,l){const u=Sa(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,mn(r),i))}(e,t)}function Gd(e){return(t,n)=>{let r=!1;for(const i of mn(e)){const s=Kd(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Kd(e,t,n){const r=e.field.isKeyField()?b.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?We(l,u):N()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return N()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){jn(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return _u(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=new Rt(b.comparator);function Tr(){return Qd}const Su=new Rt(b.comparator);function tr(...e){let t=Su;for(const n of e)t=t.insert(n.key,n);return t}function Vu(e){let t=Su;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Re(){return gn()}function bu(){return gn()}function gn(){return new nn(e=>e.toString(),(e,t)=>e.isEqual(t))}const Wd=new Rt(b.comparator),Xd=new It(b.comparator);function yt(...e){let t=Xd;for(const n of e)t=t.add(n);return t}const Yd=new It(G);function Jd(){return Yd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(t)?"-0":t}}function Nu(e){return{integerValue:""+e}}function Zd(e,t){return Rd(t)?Nu(t):Du(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this._=void 0}}function tm(e,t,n){return e instanceof Ir?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zs(s)&&(s=yu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof bn?ku(e,t):e instanceof Dn?Mu(e,t):function(i,s){const o=Ou(i,s),a=Na(o)+Na(i.Ie);return Ts(o)&&Ts(i.Ie)?Nu(a):Du(i.serializer,a)}(e,t)}function em(e,t,n){return e instanceof bn?ku(e,t):e instanceof Dn?Mu(e,t):n}function Ou(e,t){return e instanceof Ar?function(r){return Ts(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Ir extends zr{}class bn extends zr{constructor(t){super(),this.elements=t}}function ku(e,t){const n=Lu(t);for(const r of e.elements)n.some(i=>$t(i,r))||n.push(r);return{arrayValue:{values:n}}}class Dn extends zr{constructor(t){super(),this.elements=t}}function Mu(e,t){let n=Lu(t);for(const r of e.elements)n=n.filter(i=>!$t(i,r));return{arrayValue:{values:n}}}class Ar extends zr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Na(e){return ft(e.integerValue||e.doubleValue)}function Lu(e){return to(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function nm(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof bn&&i instanceof bn||r instanceof Dn&&i instanceof Dn?Ke(r.elements,i.elements,$t):r instanceof Ar&&i instanceof Ar?$t(r.Ie,i.Ie):r instanceof Ir&&i instanceof Ir}(e.transform,t.transform)}class rm{constructor(t,n){this.version=t,this.transformResults=n}}class ae{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ae}static exists(t){return new ae(void 0,t)}static updateTime(t){return new ae(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Gr{}function xu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Uu(e.key,ae.none()):new qn(e.key,e.data,ae.none());{const n=e.data,r=Nt.empty();let i=new It(mt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fe(e.key,r,new Ot(i.toArray()),ae.none())}}function im(e,t,n){e instanceof qn?function(i,s,o){const a=i.value.clone(),l=ka(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Fe?function(i,s,o){if(!rr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ka(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Fu(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function pn(e,t,n,r){return e instanceof qn?function(s,o,a,l){if(!rr(s.precondition,o))return a;const u=s.value.clone(),c=Ma(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Fe?function(s,o,a,l){if(!rr(s.precondition,o))return a;const u=Ma(s.fieldTransforms,l,o),c=o.data;return c.setAll(Fu(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return rr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function sm(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Ou(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function Oa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ke(r,i,(s,o)=>nm(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qn extends Gr{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fe extends Gr{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Fu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ka(e,t,n){const r=new Map;lt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,em(o,a,n[i]))}return r}function Ma(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tm(s,o,t))}return r}class Uu extends Gr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class om extends Gr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&im(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=pn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=pn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=bu();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=xu(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),yt())}isEqual(t){return this.batchId===t.batchId&&Ke(this.mutations,t.mutations,(n,r)=>Oa(n,r))&&Ke(this.baseMutations,t.baseMutations,(n,r)=>Oa(n,r))}}class io{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){lt(t.mutations.length===r.length);let i=function(){return Wd}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new io(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,O;function um(e){switch(e){default:return N();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function hm(e){if(e===void 0)return ke("GRPC error has no .code"),p.UNKNOWN;switch(e){case nt.OK:return p.OK;case nt.CANCELLED:return p.CANCELLED;case nt.UNKNOWN:return p.UNKNOWN;case nt.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case nt.INTERNAL:return p.INTERNAL;case nt.UNAVAILABLE:return p.UNAVAILABLE;case nt.UNAUTHENTICATED:return p.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case nt.NOT_FOUND:return p.NOT_FOUND;case nt.ALREADY_EXISTS:return p.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return p.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case nt.ABORTED:return p.ABORTED;case nt.OUT_OF_RANGE:return p.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return p.UNIMPLEMENTED;case nt.DATA_LOSS:return p.DATA_LOSS;default:return N()}}(O=nt||(nt={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new fd([4294967295,4294967295],0);class cm{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ws(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function dm(e,t){return ws(e,t.toTimestamp())}function ze(e){return lt(!!e),W.fromTimestamp(function(n){const r=Me(n);return new ot(r.seconds,r.nanos)}(e))}function $u(e,t){return function(r){return new rt(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function mm(e){const t=rt.fromString(e);return lt(Im(t)),t}function Ps(e,t){return $u(e.databaseId,t.path)}function gm(e){const t=mm(e);return t.length===4?rt.emptyPath():_m(t)}function pm(e){return new rt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _m(e){return lt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function La(e,t,n){return{name:Ps(e,t),fields:n.value.mapValue.fields}}function ym(e,t){let n;if(t instanceof qn)n={update:La(e,t.key,t.value)};else if(t instanceof Uu)n={delete:Ps(e,t.key)};else if(t instanceof Fe)n={update:La(e,t.key,t.data),updateMask:Tm(t.fieldMask)};else{if(!(t instanceof om))return N();n={verify:Ps(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ir)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Dn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ar)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw N()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:N()}(e,t.precondition)),n}function Em(e,t){return e&&e.length>0?(lt(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?ze(i.updateTime):ze(s);return o.isEqual(W.min())&&(o=ze(s)),new rm(o,i.transformResults||[])}(n,t))):[]}function vm(e){let t=gm(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lt(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=Bu(h);return f instanceof pe&&Iu(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new vr(Be(v.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Js(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Er(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,d=h.values||[];return new Er(d,f)}(n.endAt)),jd(t,i,o,s,a,"F",l,u)}function Bu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Be(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Be(n.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Be(n.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Be(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(e):e.fieldFilter!==void 0?function(n){return st.create(Be(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return pe.create(n.compositeFilter.filters.map(r=>Bu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return N()}}(n.compositeFilter.op))}(e):N()}function Be(e){return mt.fromServerFormat(e.fieldPath)}function Tm(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Im(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t){this.ut=t}}function wm(e){const t=vm({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?As(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.on=new Cm}addToCollectionParentIndex(t,n){return this.on.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(ge.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(ge.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Cm{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new It(rt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new It(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Ye(0)}static Nn(){return new Ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.changes=new nn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Dt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&pn(r.mutation,i,Ot.empty(),ot.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,yt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=yt()){const i=Re();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=tr();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Re();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,yt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Tr();const o=gn(),a=function(){return gn()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Fe)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),pn(c.mutation,u,c.mutation.getFieldMask(),ot.now())):o.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Sm(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=gn();let i=new Rt((o,a)=>o-a),s=yt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ot.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||yt()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=bu();c.forEach(f=>{if(!s.has(f)){const d=xu(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return b.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Hd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):g.resolve(Re());let a=-1,l=s;return o.next(u=>g.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?g.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,yt())).next(c=>({batchId:a,changes:Vu(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new b(n)).next(r=>{let i=tr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=tr();return this.indexManager.getCollectionParents(t,s).next(a=>g.forEach(a,l=>{const u=function(h,f){return new Hr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Dt.newInvalidDocument(c)))});let a=tr();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&pn(c.mutation,u,Ot.empty(),ot.now()),ro(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return g.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:wm(i.bundledQuery),readTime:ze(i.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.overlays=new Rt(b.comparator),this.lr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Re();return g.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const i=Re(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Rt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Re(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Re(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return g.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lm(n,r));let s=this.lr.get(n);s===void 0&&(s=yt(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.hr=new It(it.Pr),this.Ir=new It(it.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new it(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new it(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new b(new rt([])),r=new it(n,t),i=new it(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new b(new rt([])),r=new it(n,t),i=new it(n,t+1);let s=yt();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new it(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return b.comparator(t.key,n.key)||G(t.gr,n.gr)}static Tr(t,n){return G(t.gr,n.gr)||b.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new It(it.Pr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new am(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new It(G);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),g.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;b.isDocumentKey(s)||(s=s.child(""));const o=new it(new b(s),0);let a=new It(G);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),g.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){lt(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return g.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new it(n,0),i=this.yr.firstAfterOrEqual(r);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t){this.Cr=t,this.docs=function(){return new Rt(b.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(t,n){let r=Tr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Dt.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Tr();const o=n.path,a=new b(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wd(Ad(c),r)<=0||(i.has(c.key)||ro(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,n,r,i){N()}vr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new km(this)}getSize(t){return g.resolve(this.size)}}class km extends Rm{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t){this.persistence=t,this.Fr=new nn(n=>eo(n),no),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Mr=0,this.Or=new so,this.targetCount=0,this.Nr=Ye.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),g.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Ye(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.kn(n),g.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,n){this.Br={},this.overlays={},this.Lr=new pu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Mm(this),this.indexManager=new Pm,this.remoteDocumentCache=function(i){return new Om(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Am(n),this.Kr=new bm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Dm,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Nm(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){A("MemoryPersistence","Starting transaction:",t);const i=new xm(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return g.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class xm extends Cd{constructor(t){super(),this.currentSequenceNumber=t}}class oo{constructor(t){this.persistence=t,this.Gr=new so,this.zr=null}static jr(t){return new oo(t)}get Hr(){if(this.zr)return this.zr;throw N()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),g.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Hr,r=>{const i=b.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return g.or([()=>g.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=yt(),i=yt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ao(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Fm;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(an()<=$.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",ln(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),g.resolve()):(an()<=$.DEBUG&&A("QueryEngine","Query:",ln(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(an()<=$.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",ln(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,De(n))):g.resolve())}zi(t,n){if(Da(n))return g.resolve(null);let r=De(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=As(n,null,"F"),r=De(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=yt(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(t,As(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return Da(n)||i.isEqual(W.min())?g.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?g.resolve(null):(an()<=$.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ln(n)),this.Xi(t,o,n,Id(i,-1)).next(a=>a))})}Yi(t,n){let r=new It(Gd(t));return n.forEach((i,s)=>{ro(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return an()<=$.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",ln(n)),this.Gi.getDocumentsMatchingQuery(t,n,ge.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new Rt(G),this.ns=new nn(s=>eo(s),no),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vm(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function Bm(e,t,n,r){return new $m(e,t,n,r)}async function ju(e,t){const n=Q(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=yt();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function jm(e,t){const n=Q(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let d=g.resolve();return f.forEach(v=>{d=d.next(()=>c.getEntry(l,v)).next(w=>{const V=u.docVersions.get(v);lt(V!==null),w.version.compareTo(V)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=yt();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function qm(e){const t=Q(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function Hm(e,t){const n=Q(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class xa{constructor(){this.activeTargetIds=Jd()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zm{constructor(){this.eo=new xa,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new xa,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er=null;function Wi(){return er===null?er=function(){return 268435456+Math.round(2147483648*Math.random())}():er++,"0x"+er.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Wm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Wi(),l=this.So(n,r);A("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(A("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw gr("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+en}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=Km[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=Wi();return new Promise((o,a)=>{const l=new cd;l.setWithCredentials(!0),l.listenOnce(ud.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qi.NO_ERROR:const c=l.getResponseJson();A(pt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Qi.TIMEOUT:A(pt,`RPC '${t}' ${s} timed out`),a(new C(p.DEADLINE_EXCEEDED,"Request time out"));break;case Qi.HTTP_ERROR:const h=l.getStatus();if(A(pt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f?.error;if(d&&d.status&&d.message){const v=function(V){const q=V.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(q)>=0?q:p.UNKNOWN}(d.status);a(new C(v,d.message))}else a(new C(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new C(p.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{A(pt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);A(pt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=Wi(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ad(),a=ld(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");A(pt,`Creating RPC '${t}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,d=!1;const v=new Qm({co:V=>{d?A(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(f||(A(pt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),A(pt,`RPC '${t}' stream ${i} sending:`,V),h.send(V))},lo:()=>h.close()}),w=(V,q,X)=>{V.listen(q,Pt=>{try{X(Pt)}catch(ht){setTimeout(()=>{throw ht},0)}})};return w(h,Yn.EventType.OPEN,()=>{d||A(pt,`RPC '${t}' stream ${i} transport opened.`)}),w(h,Yn.EventType.CLOSE,()=>{d||(d=!0,A(pt,`RPC '${t}' stream ${i} transport closed`),v.Ro())}),w(h,Yn.EventType.ERROR,V=>{d||(d=!0,gr(pt,`RPC '${t}' stream ${i} transport errored:`,V),v.Ro(new C(p.UNAVAILABLE,"The operation could not be completed")))}),w(h,Yn.EventType.MESSAGE,V=>{var q;if(!d){const X=V.data[0];lt(!!X);const Pt=X,ht=Pt.error||((q=Pt[0])===null||q===void 0?void 0:q.error);if(ht){A(pt,`RPC '${t}' stream ${i} received error:`,ht);const ce=ht.status;let At=function(St){const E=nt[St];if(E!==void 0)return hm(E)}(ce),fe=ht.message;At===void 0&&(At=p.INTERNAL,fe="Unknown error status: "+ce+" with message "+ht.message),d=!0,v.Ro(new C(At,fe)),h.close()}else A(pt,`RPC '${t}' stream ${i} received:`,X),v.Vo(X)}}),w(a,hd.STAT_EVENT,V=>{V.stat===Aa.PROXY?A(pt,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===Aa.NOPROXY&&A(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function Xi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e){return new cm(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new qu(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(ke(n.toString()),ke("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new C(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return A("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ym extends Xm{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(lt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=Em(t.writeResults,t.commitTime),r=ze(t.commitTime);return this.listener.I_(r,n)}return lt(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=pm(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>ym(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new C(p.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(p.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(p.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class Zm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ke(n),this.f_=!1):A("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{zn(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Q(l);u.C_.add(4),await Hn(u),u.M_.set("Unknown"),u.C_.delete(4),await Qr(u)}(this))})}),this.M_=new Zm(r,i)}}async function Qr(e){if(zn(e))for(const t of e.v_)await t(!0)}async function Hn(e){for(const t of e.v_)await t(!1)}function zn(e){return Q(e).C_.size===0}async function Hu(e,t,n){if(!qr(t))throw t;e.C_.add(1),await Hn(e),e.M_.set("Offline"),n||(n=()=>qm(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Qr(e)})}function zu(e,t){return t().catch(n=>Hu(e,n,t))}async function Wr(e){const t=Q(e),n=_e(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;eg(t);)try{const i=await Hm(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,ng(t,i)}catch(i){await Hu(t,i)}Gu(t)&&Ku(t)}function eg(e){return zn(e)&&e.b_.length<10}function ng(e,t){e.b_.push(t);const n=_e(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function Gu(e){return zn(e)&&!_e(e).jo()&&e.b_.length>0}function Ku(e){_e(e).start()}async function rg(e){_e(e).E_()}async function ig(e){const t=_e(e);for(const n of e.b_)t.P_(n.mutations)}async function sg(e,t,n){const r=e.b_.shift(),i=io.from(r,t,n);await zu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Wr(e)}async function og(e,t){t&&_e(e).h_&&await async function(r,i){if(function(o){return um(o)&&o!==p.ABORTED}(i.code)){const s=r.b_.shift();_e(r).Yo(),await zu(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wr(r)}}(e,t),Gu(e)&&Ku(e)}async function Ua(e,t){const n=Q(e);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=zn(n);n.C_.add(3),await Hn(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Qr(n)}async function ag(e,t){const n=Q(e);t?(n.C_.delete(2),await Qr(n)):t||(n.C_.add(2),await Hn(n),n.M_.set("Unknown"))}function _e(e){return e.N_||(e.N_=function(n,r,i){const s=Q(n);return s.A_(),new Ym(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:rg.bind(null,e),Io:og.bind(null,e),T_:ig.bind(null,e),I_:sg.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Wr(e)):(await e.N_.stop(),e.b_.length>0&&(A("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new lo(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(e,t){if(ke("AsyncQueue",`${t}: ${e}`),qr(e))return new C(p.UNAVAILABLE,`${t}: ${e}`);throw e}class lg{constructor(){this.queries=new nn(t=>Ru(t),Cu),this.onlineState="Unknown",this.q_=new Set}}function ug(e){e.q_.forEach(t=>{t.next()})}class hg{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new nn(a=>Ru(a),Cu),this.fa=new Map,this.ga=new Set,this.pa=new Rt(b.comparator),this.ya=new Map,this.wa=new so,this.Sa={},this.ba=new Map,this.Da=Ye.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function cg(e,t,n){const r=gg(e);try{const i=await function(o,a){const l=Q(o),u=ot.now(),c=a.reduce((d,v)=>d.add(v.key),yt());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let v=Tr(),w=yt();return l.ss.getEntries(d,c).next(V=>{v=V,v.forEach((q,X)=>{X.isValidDocument()||(w=w.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,v)).next(V=>{h=V;const q=[];for(const X of a){const Pt=sm(X,h.get(X.key).overlayedDocument);Pt!=null&&q.push(new Fe(X.key,Pt,Eu(Pt.value.mapValue),ae.exists(!0)))}return l.mutationQueue.addMutationBatch(d,u,q,a)}).next(V=>{f=V;const q=V.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(d,V.batchId,q)})}).then(()=>({batchId:f.batchId,changes:Vu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Rt(G)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Xr(r,i.changes),await Wr(r.remoteStore)}catch(i){const s=Qu(i,"Failed to persist write");n.reject(s)}}function $a(e,t,n){const r=Q(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Q(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&ug(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fg(e,t){const n=Q(e),r=t.batch.batchId;try{const i=await jm(n.localStore,t);Xu(n,r,null),Wu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xr(n,i)}catch(i){await gu(i)}}async function dg(e,t,n){const r=Q(e);try{const i=await function(o,a){const l=Q(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(lt(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);Xu(r,t,n),Wu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Xr(r,i)}catch(i){await gu(i)}}function Wu(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function Xu(e,t,n){const r=Q(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}async function Xr(e,t,n){const r=Q(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u?.fromCache?"not-current":"current"),u){i.push(u);const c=ao.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=Q(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,f=>g.forEach(f.ki,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>g.forEach(f.qi,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!qr(h))throw h;A("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const d=c.ts.get(f),v=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(f,w)}}}(r.localStore,s))}async function mg(e,t){const n=Q(e);if(!n.currentUser.isEqual(t)){A("SyncEngine","User change. New user:",t.toKey());const r=await ju(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new C(p.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Xr(n,r._s)}}function gg(e){const t=Q(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dg.bind(null,t),t}class Ba{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Kr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Bm(this.persistence,new Um,t.initialUser,this.serializer)}createPersistence(t){return new Lm(oo.jr,this.serializer)}createSharedClientState(t){return new zm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$a(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mg.bind(null,this.syncEngine),await ag(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new lg}()}createDatastore(t){const n=Kr(t.databaseInfo.databaseId),r=function(s){return new Wm(s)}(t.databaseInfo);return function(s,o,a,l){return new Jm(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new tg(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>$a(this.syncEngine,n,0),function(){return Fa.D()?new Fa:new Gm}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,c){const h=new hg(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Q(n);A("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Hn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=mu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Qu(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Yi(e,t){e.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ju(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ja(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Eg(e);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Ua(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Ua(t.remoteStore,s)),e._onlineComponents=t}function yg(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Eg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!yg(n))throw n;gr("Error using user provided cache. Falling back to memory cache: "+n),await Yi(e,new Ba)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await Yi(e,new Ba);return e._offlineComponents}async function vg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await ja(e,e._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await ja(e,new pg))),e._onlineComponents}function Tg(e){return vg(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(e,t,n){if(!n)throw new C(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ag(e,t,n,r){if(t===!0&&r===!0)throw new C(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ha(e){if(!b.isDocumentKey(e))throw new C(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function uo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":N()}function Cs(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uo(e);throw new C(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new C(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new C(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ag("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new C(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ho{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new za({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new C(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new za(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dd;switch(r.type){case"firstParty":return new _d(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new C(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qa.get(n);r&&(A("ComponentProvider","Removing Datastore"),qa.delete(n),r.terminate())}(this),Promise.resolve()}}function wg(e,t,n,r={}){var i;const s=(e=Cs(e,ho))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=Hh(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new C(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(u)}e._authCredentials=new md(new du(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new co(this.firestore,t,this._query)}}class le{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new le(this.firestore,t,this._key)}}class Nn extends co{constructor(t,n,r){super(t,n,qd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new le(this.firestore,null,new b(t))}withConverter(t){return new Nn(this.firestore,t,this._path)}}function Pg(e,t,...n){if(e=or(e),arguments.length===1&&(t=mu.newId()),Ig("doc","path",t),e instanceof ho){const r=rt.fromString(t,...n);return Ha(r),new le(e,null,new b(r))}{if(!(e instanceof le||e instanceof Nn))throw new C(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(rt.fromString(t,...n));return Ha(r),new le(e.firestore,e instanceof Nn?e.converter:null,new b(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new qu(this,"async_queue_retry"),this.iu=()=>{const n=Xi();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Xi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Xi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new be;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!qr(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=lo.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&N()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class Ju extends ho{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Cg}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zu(this),this._firestoreClient.terminate()}}function Rg(e,t){const n=typeof e=="object"?e:Qc(),r=typeof e=="string"?e:t||"(default)",i=Hc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jh("firestore");s&&wg(i,...s)}return i}function Sg(e){return e._firestoreClient||Zu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Zu(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new bd(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Yu(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new _g(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this._byteString=t}static fromBase64String(t){try{return new On(he.fromBase64String(t))}catch(n){throw new C(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new On(he.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new C(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new C(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new C(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=/^__.*__$/;class bg{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Fe(t,this.data,this.fieldMask,n,this.fieldTransforms):new qn(t,this.data,n,this.fieldTransforms)}}function rh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}class fo{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new fo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return wr(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(rh(this.Iu)&&Vg.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Dg{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Kr(t)}pu(t,n,r,i=!1){return new fo({Iu:t,methodName:n,gu:r,path:mt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ng(e){const t=e._freezeSettings(),n=Kr(e._databaseId);return new Dg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Og(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);ah("Data must be an object, but it was:",o,r);const a=sh(r,o);let l,u;if(s.merge)l=new Ot(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=kg(t,h,n);if(!o.contains(f))throw new C(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);xg(c,f)||c.push(f)}l=new Ot(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new bg(new Nt(a),l,u)}function ih(e,t){if(oh(e=or(e)))return ah("Unsupported field value:",t,e),sh(e,t);if(e instanceof eh)return function(r,i){if(!rh(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ih(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=or(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ot.fromDate(r);return{timestampValue:ws(i.serializer,s)}}if(r instanceof ot){const s=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ws(i.serializer,s)}}if(r instanceof nh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof On)return{bytesValue:fm(i.serializer,r._byteString)};if(r instanceof le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$u(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${uo(r)}`)}(e,t)}function sh(e,t){const n={};return _u(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):jn(e,(r,i)=>{const s=ih(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function oh(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ot||e instanceof nh||e instanceof On||e instanceof le||e instanceof eh)}function ah(e,t,n){if(!oh(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=uo(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function kg(e,t,n){if((t=or(t))instanceof th)return t._internalPath;if(typeof t=="string")return Lg(e,t);throw wr("Field path arguments must be of type string or ",e,!1,void 0,n)}const Mg=new RegExp("[~\\*/\\[\\]]");function Lg(e,t,n){if(t.search(Mg)>=0)throw wr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new th(...t.split("."))._internalPath}catch{throw wr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function wr(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new C(p.INVALID_ARGUMENT,a+e+l)}function xg(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function Ug(e,t,n){e=Cs(e,le);const r=Cs(e.firestore,Ju),i=Fg(e.converter,t,n);return $g(r,[Og(Ng(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,ae.none())])}function $g(e,t){return function(r,i){const s=new be;return r.asyncQueue.enqueueAndForget(async()=>cg(await Tg(r),i,s)),s.promise}(Sg(e),t)}(function(t,n=!0){(function(i){en=i})(Kc),lr(new _n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ju(new gd(r.getProvider("auth-internal")),new Ed(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new C(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qe(wa,"4.4.0",t),qe(wa,"4.4.0","esm2017")})();const Bg={apiKey:"AIzaSyBAfx7iG-t1vLVBIDNeF8yNxWCHLOKc49k",authDomain:"restaurante0a1.firebaseapp.com",projectId:"restaurante0a1",storageBucket:"restaurante0a1.appspot.com",messagingSenderId:"829796485637",appId:"1:829796485637:web:a4d7825e55f4dc838a2a6c",measurementId:"G-3C2NQYS3JV"},jg=al(Bg),qg=Rg(jg);async function Hg(e){try{const t=new Date().toLocaleString("sv-SE");await Ug(Pg(qg,"Estudio",""+t),e),document.cookie="Respondida=SI; max-age=60; path=/",localStorage.setItem("Respondio","SI")}catch(t){console.error(t)}finally{alert("- RESPUESTAS GRABADAS -, GRACIAS POR PARTICIPAR, Su opinion es muy importante para nosotros "),location.replace("https://restaurante0a1.web.app/")}}const Yr="rgb(8, 22, 27)",Jr="rgb(255, 102, 0) ";function zg(){return{Validar_Columnas:t=>{let n=!1;for(let r in t)if(r!="FechaRegistro"){let s=document.getElementsByName(r)[0],o=t[r],a=s.type,l=Xg(s);if(l.style.display!="none")switch(a){case"text":{if(n=Gg(r,o,s,l),!n)return!1;break}case"radio":{if(n=Kg(r,o,s,l),!n)return!1;break}case"number":{if(n=Qg(r,o,s,l),!n)return!1;break}case"checkbox":{if(n=Wg(r,o,s,l),!n)return!1;break}default:n=!0}}Hg(t)}}}function Gg(e,t,n,r){return t.length<2?(r.style.backgroundColor=Jr,alert("Favor, responda correctamente la pregunta "+e),n.focus(),!1):(r.style.backgroundColor=Yr,!0)}function Kg(e,t,n,r){return t==""?(r.style.backgroundColor=Jr,n.scrollIntoView({block:"center"}),alert("Favor, responda correctamente la pregunta "+e),!1):(r.style.backgroundColor=Yr,!0)}function Qg(e,t,n,r){return t<1?(r.style.backgroundColor=Jr,alert("Favor, responda correctamente la pregunta "+e),n.focus(),!1):(r.style.backgroundColor=Yr,!0)}function Wg(e,t,n,r){return t.length<1?(r.style.backgroundColor=Jr,alert("Favor, responda correctamente la pregunta "+e),n.focus(),!1):(r.style.backgroundColor=Yr,!0)}function Xg(e){let t=e.parentElement;if(t.nodeName=="ARTICLE"||(t=e.parentElement.parentElement,t.nodeName=="ARTICLE")||(t=e.parentElement.parentElement.parentElement,t.nodeName=="ARTICLE")||(t=e.parentElement.parentElement.parentElement.parentElement,t.nodeName=="ARTICLE")||(t=e.parentElement.parentElement.parentElement.parentElement.parentElement,t.nodeName=="ARTICLE"))return t}const Yg=""+new URL("../assets/Logo.T1negyr0.png",import.meta.url).href,Jg=""+new URL("../assets/Escala_Likert._wg0BwOB.png",import.meta.url).href;function Zg(e){let t,n;return{c(){t=B("div"),n=Pr(e[0]),this.h()},l(r){t=j(r,"DIV",{class:!0});var i=Y(t);n=Cr(i,e[0]),i.forEach(D),this.h()},h(){_(t,"class","Titulo_Segmento svelte-q24z1s")},m(r,i){Ct(r,t,i),T(t,n)},p(r,[i]){i&1&&Rs(n,r[0])},i:Se,o:Se,d(r){r&&D(t)}}}function tp(e,t,n){let{Texto:r}=t;return e.$$set=i=>{"Texto"in i&&n(0,r=i.Texto)},[r]}class un extends jt{constructor(t){super(),qt(this,t,tp,Zg,Bt,{Texto:0})}}function ep(e){let t,n,r,i="© 2023 Analistas y Consultores - All Rights Reserved";return{c(){t=B("input"),n=R(),r=B("p"),r.textContent=i,this.h()},l(s){t=j(s,"INPUT",{class:!0,type:!0}),n=S(s),r=j(s,"P",{class:!0,"data-svelte-h":!0}),es(r)!=="svelte-vro59b"&&(r.textContent=i),this.h()},h(){_(t,"class","btn-enviar svelte-1v4hn7w"),_(t,"type","submit"),t.value="Enviar Respuestas",_(r,"class","pie-pagina svelte-1v4hn7w")},m(s,o){Ct(s,t,o),Ct(s,n,o),Ct(s,r,o)},p:Se,i:Se,o:Se,d(s){s&&(D(t),D(n),D(r))}}}class np extends jt{constructor(t){super(),qt(this,t,null,ep,Bt,{})}}function rp(e){let t,n,r=e[0].substring(0,e[0].indexOf(".-"))+"",i,s,o,a=e[0].substring(e[0].indexOf(".-"),e[0].length)+"";return{c(){t=B("div"),n=B("b"),i=Pr(r),s=R(),o=new bh(!1),this.h()},l(l){t=j(l,"DIV",{class:!0});var u=Y(t);n=j(u,"B",{});var c=Y(n);i=Cr(c,r),c.forEach(D),s=S(u),o=Dh(u,!1),u.forEach(D),this.h()},h(){o.a=null,_(t,"class","Pregunta svelte-1nl29yw")},m(l,u){Ct(l,t,u),T(t,n),T(n,i),T(t,s),o.m(a,t)},p(l,[u]){u&1&&r!==(r=l[0].substring(0,l[0].indexOf(".-"))+"")&&Rs(i,r),u&1&&a!==(a=l[0].substring(l[0].indexOf(".-"),l[0].length)+"")&&o.p(a)},i:Se,o:Se,d(l){l&&D(t)}}}function ip(e,t,n){let{Texto:r}=t;return e.$$set=i=>{"Texto"in i&&n(0,r=i.Texto)},[r]}class rn extends jt{constructor(t){super(),qt(this,t,ip,rp,Bt,{Texto:0})}}function sp(e){let t,n,r,i,s,o,a,l,u,c;return n=new rn({props:{Texto:e[1]}}),{c(){t=B("article"),k(n.$$.fragment),r=R(),i=B("div"),s=B("input"),this.h()},l(h){t=j(h,"ARTICLE",{id:!0,class:!0});var f=Y(t);M(n.$$.fragment,f),r=S(f),i=j(f,"DIV",{class:!0});var d=Y(i);s=j(d,"INPUT",{type:!0,name:!0,min:!0,max:!0,pattern:!0,class:!0}),d.forEach(D),f.forEach(D),this.h()},h(){_(s,"type","date"),_(s,"name",o=e[1].substring(0,e[1].indexOf(".-"))),_(s,"min",e[3]),_(s,"max",e[4]),_(s,"pattern","\\d4-\\d2-\\d2"),s.required=!0,_(s,"class","svelte-bmfjqm"),_(i,"class","Date"),_(t,"id",a=e[1].substring(0,e[1].indexOf(".-"))),_(t,"class","svelte-bmfjqm"),Et(t,"display",e[2]?"flex":"none")},m(h,f){Ct(h,t,f),L(n,t,null),T(t,r),T(t,i),T(i,s),kt(s,e[0]),l=!0,u||(c=Le(s,"input",e[5]),u=!0)},p(h,[f]){const d={};f&2&&(d.Texto=h[1]),n.$set(d),(!l||f&2&&o!==(o=h[1].substring(0,h[1].indexOf(".-"))))&&_(s,"name",o),(!l||f&8)&&_(s,"min",h[3]),(!l||f&16)&&_(s,"max",h[4]),f&1&&kt(s,h[0]),(!l||f&2&&a!==(a=h[1].substring(0,h[1].indexOf(".-"))))&&_(t,"id",a),f&4&&Et(t,"display",h[2]?"flex":"none")},i(h){l||(x(n.$$.fragment,h),l=!0)},o(h){F(n.$$.fragment,h),l=!1},d(h){h&&D(t),U(n),u=!1,c()}}}function op(e,t,n){let{Pregunta_Texto:r}=t,{Visible:i=!0}=t,{Columna:s}=t,{Fecha_Minima:o="01/01/1900"}=t,{Fecha_Maxima:a=new Date().toLocaleDateString("fr-CA",{day:"2-digit",month:"2-digit",year:"numeric"})}=t;function l(){s=this.value,n(0,s)}return e.$$set=u=>{"Pregunta_Texto"in u&&n(1,r=u.Pregunta_Texto),"Visible"in u&&n(2,i=u.Visible),"Columna"in u&&n(0,s=u.Columna),"Fecha_Minima"in u&&n(3,o=u.Fecha_Minima),"Fecha_Maxima"in u&&n(4,a=u.Fecha_Maxima)},[s,r,i,o,a,l]}class ap extends jt{constructor(t){super(),qt(this,t,op,sp,Bt,{Pregunta_Texto:1,Visible:2,Columna:0,Fecha_Minima:3,Fecha_Maxima:4})}}function Ga(e,t,n){const r=e.slice();return r[6]=t[n],r}function Ka(e){let t,n,r,i,s=e[6].substring(0,e[6].indexOf(". "))+"",o,a,l,u,c;return l=Ya(e[5][0]),{c(){t=B("label"),n=B("input"),i=R(),o=Pr(s),a=R(),this.h()},l(h){t=j(h,"LABEL",{class:!0});var f=Y(t);n=j(f,"INPUT",{type:!0,name:!0,class:!0}),i=S(f),o=Cr(f,s),a=S(f),f.forEach(D),this.h()},h(){_(n,"type","radio"),_(n,"name",r=e[1].substring(0,e[1].indexOf(".-"))),n.__value=e[6],kt(n,n.__value),_(n,"class","svelte-c4bw7y"),_(t,"class","svelte-c4bw7y"),l.p(n)},m(h,f){Ct(h,t,f),T(t,n),n.checked=n.__value===e[0],T(t,i),T(t,o),T(t,a),u||(c=Le(n,"change",e[4]),u=!0)},p(h,f){f&2&&r!==(r=h[1].substring(0,h[1].indexOf(".-")))&&_(n,"name",r),f&1&&(n.checked=n.__value===h[0])},d(h){h&&D(t),l.r(),u=!1,c()}}}function lp(e){let t,n,r,i,s,o,a,l,u;s=new rn({props:{Texto:e[1]}});let c=ir(e[3]),h=[];for(let f=0;f<c.length;f+=1)h[f]=Ka(Ga(e,c,f));return{c(){t=B("article"),n=B("div"),r=B("div"),i=B("div"),k(s.$$.fragment),o=R(),a=B("div");for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){t=j(f,"ARTICLE",{id:!0,class:!0});var d=Y(t);n=j(d,"DIV",{class:!0});var v=Y(n);r=j(v,"DIV",{class:!0});var w=Y(r);i=j(w,"DIV",{class:!0});var V=Y(i);M(s.$$.fragment,V),V.forEach(D),o=S(w),a=j(w,"DIV",{class:!0});var q=Y(a);for(let X=0;X<h.length;X+=1)h[X].l(q);q.forEach(D),w.forEach(D),v.forEach(D),d.forEach(D),this.h()},h(){_(i,"class","Pregunta_Item svelte-c4bw7y"),_(a,"class","Input_Radio svelte-c4bw7y"),_(r,"class","Bloque svelte-c4bw7y"),_(n,"class","Pregunta_Malla svelte-c4bw7y"),_(t,"id",l=e[1].substring(0,e[1].indexOf(".-"))),_(t,"class","svelte-c4bw7y"),Et(t,"display",e[2]?"":"none")},m(f,d){Ct(f,t,d),T(t,n),T(n,r),T(r,i),L(s,i,null),T(r,o),T(r,a);for(let v=0;v<h.length;v+=1)h[v]&&h[v].m(a,null);u=!0},p(f,[d]){const v={};if(d&2&&(v.Texto=f[1]),s.$set(v),d&11){c=ir(f[3]);let w;for(w=0;w<c.length;w+=1){const V=Ga(f,c,w);h[w]?h[w].p(V,d):(h[w]=Ka(V),h[w].c(),h[w].m(a,null))}for(;w<h.length;w+=1)h[w].d(1);h.length=c.length}(!u||d&2&&l!==(l=f[1].substring(0,f[1].indexOf(".-"))))&&_(t,"id",l),d&4&&Et(t,"display",f[2]?"":"none")},i(f){u||(x(s.$$.fragment,f),u=!0)},o(f){F(s.$$.fragment,f),u=!1},d(f){f&&D(t),U(s),Xa(h,f)}}}function up(e,t,n){let{Pregunta_Texto:r="ERROR .- ( No se definio - Pregunta_Texto - )"}=t,{Columna:i}=t,{Visible:s=!0}=t,o=["5. Muy Satisfecho","4. Satisfecho","3. Ni Satisfecho / Ni Insatisfecho","2. Insatisfecho","1. Muy Insatisfecho"];const a=[[]];function l(){i=this.__value,n(0,i)}return e.$$set=u=>{"Pregunta_Texto"in u&&n(1,r=u.Pregunta_Texto),"Columna"in u&&n(0,i=u.Columna),"Visible"in u&&n(2,s=u.Visible)},[i,r,s,o,l,a]}class Mt extends jt{constructor(t){super(),qt(this,t,up,lp,Bt,{Pregunta_Texto:1,Columna:0,Visible:2})}}function hp(e){let t,n,r,i,s,o,a,l,u,c;return n=new rn({props:{Texto:e[1]}}),{c(){t=B("article"),k(n.$$.fragment),r=R(),i=B("div"),s=B("input"),this.h()},l(h){t=j(h,"ARTICLE",{id:!0,class:!0});var f=Y(t);M(n.$$.fragment,f),r=S(f),i=j(f,"DIV",{class:!0});var d=Y(i);s=j(d,"INPUT",{type:!0,name:!0,style:!0,min:!0,max:!0,step:!0,class:!0}),d.forEach(D),f.forEach(D),this.h()},h(){_(s,"type","number"),_(s,"name",o=e[1].substring(0,e[1].indexOf(".-"))),Et(s,"text-transform","uppercase"),_(s,"min",e[3]),_(s,"max",e[4]),_(s,"step","1"),_(s,"class","svelte-n4i31d"),_(i,"class","Input_Number svelte-n4i31d"),_(t,"id",a=e[1].substring(0,e[1].indexOf(".-"))),_(t,"class","svelte-n4i31d"),Et(t,"display",e[2]?"flex":"none")},m(h,f){Ct(h,t,f),L(n,t,null),T(t,r),T(t,i),T(i,s),kt(s,e[0]),l=!0,u||(c=Le(s,"input",e[5]),u=!0)},p(h,[f]){const d={};f&2&&(d.Texto=h[1]),n.$set(d),(!l||f&2&&o!==(o=h[1].substring(0,h[1].indexOf(".-"))))&&_(s,"name",o),(!l||f&8)&&_(s,"min",h[3]),(!l||f&16)&&_(s,"max",h[4]),f&1&&Ja(s.value)!==h[0]&&kt(s,h[0]),(!l||f&2&&a!==(a=h[1].substring(0,h[1].indexOf(".-"))))&&_(t,"id",a),f&4&&Et(t,"display",h[2]?"flex":"none")},i(h){l||(x(n.$$.fragment,h),l=!0)},o(h){F(n.$$.fragment,h),l=!1},d(h){h&&D(t),U(n),u=!1,c()}}}function cp(e,t,n){let{Pregunta_Texto:r="ERROR .- ( No se definio - Pregunta_Texto - )"}=t,{Columna:i}=t,{Visible:s=!0}=t,{Valor_Minimo:o}=t,{Valor_Maximo:a}=t;function l(){i=Ja(this.value),n(0,i)}return e.$$set=u=>{"Pregunta_Texto"in u&&n(1,r=u.Pregunta_Texto),"Columna"in u&&n(0,i=u.Columna),"Visible"in u&&n(2,s=u.Visible),"Valor_Minimo"in u&&n(3,o=u.Valor_Minimo),"Valor_Maximo"in u&&n(4,a=u.Valor_Maximo)},[i,r,s,o,a,l]}class Ji extends jt{constructor(t){super(),qt(this,t,cp,hp,Bt,{Pregunta_Texto:1,Columna:0,Visible:2,Valor_Minimo:3,Valor_Maximo:4})}}function Qa(e,t,n){const r=e.slice();return r[7]=t[n],r}function Wa(e){let t,n,r,i,s=!1,o,a=e[7]+"",l,u,c,h,f;return c=Ya(e[6][0]),{c(){t=B("label"),n=B("input"),o=R(),l=Pr(a),u=R(),this.h()},l(d){t=j(d,"LABEL",{class:!0});var v=Y(t);n=j(v,"INPUT",{type:!0,name:!0,class:!0}),o=S(v),l=Cr(v,a),u=S(v),v.forEach(D),this.h()},h(){_(n,"type","radio"),_(n,"name",r=e[1].substring(0,e[1].indexOf(".-"))),n.__value=i=e[7],kt(n,n.__value),_(n,"class","svelte-11g1of"),_(t,"class","svelte-11g1of"),c.p(n)},m(d,v){Ct(d,t,v),T(t,n),n.checked=n.__value===e[0],T(t,o),T(t,l),T(t,u),h||(f=Le(n,"change",e[5]),h=!0)},p(d,v){v&2&&r!==(r=d[1].substring(0,d[1].indexOf(".-")))&&_(n,"name",r),v&16&&i!==(i=d[7])&&(n.__value=i,kt(n,n.__value),s=!0),(s||v&17)&&(n.checked=n.__value===d[0]),v&16&&a!==(a=d[7]+"")&&Rs(l,a)},d(d){d&&D(t),c.r(),h=!1,f()}}}function fp(e){let t,n,r,i,s,o;n=new rn({props:{Texto:e[1]}});let a=ir(e[4]),l=[];for(let u=0;u<a.length;u+=1)l[u]=Wa(Qa(e,a,u));return{c(){t=B("article"),k(n.$$.fragment),r=R(),i=B("div");for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){t=j(u,"ARTICLE",{id:!0,class:!0});var c=Y(t);M(n.$$.fragment,c),r=S(c),i=j(c,"DIV",{class:!0});var h=Y(i);for(let f=0;f<l.length;f+=1)l[f].l(h);h.forEach(D),c.forEach(D),this.h()},h(){_(i,"class","Input_Radio svelte-11g1of"),Et(i,"flex-flow",e[3].toUpperCase()==="VERTICAL"?"column wrap":"row wrap"),_(t,"id",s=e[1].substring(0,e[1].indexOf(".-"))),_(t,"class","svelte-11g1of"),Et(t,"display",e[2]?"flex":"none")},m(u,c){Ct(u,t,c),L(n,t,null),T(t,r),T(t,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);o=!0},p(u,[c]){const h={};if(c&2&&(h.Texto=u[1]),n.$set(h),c&19){a=ir(u[4]);let f;for(f=0;f<a.length;f+=1){const d=Qa(u,a,f);l[f]?l[f].p(d,c):(l[f]=Wa(d),l[f].c(),l[f].m(i,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=a.length}c&8&&Et(i,"flex-flow",u[3].toUpperCase()==="VERTICAL"?"column wrap":"row wrap"),(!o||c&2&&s!==(s=u[1].substring(0,u[1].indexOf(".-"))))&&_(t,"id",s),c&4&&Et(t,"display",u[2]?"flex":"none")},i(u){o||(x(n.$$.fragment,u),o=!0)},o(u){F(n.$$.fragment,u),o=!1},d(u){u&&D(t),U(n),Xa(l,u)}}}function dp(e,t,n){let{Pregunta_Texto:r="ERROR .- ( No se definio - Pregunta_Texto - )"}=t,{Columna:i}=t,{Visible:s=!0}=t,{Orientacion:o="vertical"}=t,{Opciones:a=["Error - no definido variable - Opciones -"]}=t;const l=[[]];function u(){i=this.__value,n(0,i)}return e.$$set=c=>{"Pregunta_Texto"in c&&n(1,r=c.Pregunta_Texto),"Columna"in c&&n(0,i=c.Columna),"Visible"in c&&n(2,s=c.Visible),"Orientacion"in c&&n(3,o=c.Orientacion),"Opciones"in c&&n(4,a=c.Opciones)},[i,r,s,o,a,u,l]}class Zi extends jt{constructor(t){super(),qt(this,t,dp,fp,Bt,{Pregunta_Texto:1,Columna:0,Visible:2,Orientacion:3,Opciones:4})}}function mp(e){let t,n,r,i,s,o,a,l,u,c;return n=new rn({props:{Texto:e[1]}}),{c(){t=B("article"),k(n.$$.fragment),r=R(),i=B("div"),s=B("input"),this.h()},l(h){t=j(h,"ARTICLE",{id:!0,class:!0});var f=Y(t);M(n.$$.fragment,f),r=S(f),i=j(f,"DIV",{class:!0});var d=Y(i);s=j(d,"INPUT",{type:!0,name:!0,style:!0,class:!0}),d.forEach(D),f.forEach(D),this.h()},h(){_(s,"type","text"),_(s,"name",o=e[1].substring(0,e[1].indexOf(".-"))),Et(s,"text-transform","uppercase"),_(s,"class","svelte-3w6pcc"),_(i,"class","Input_Text svelte-3w6pcc"),_(t,"id",a=e[1].substring(0,e[1].indexOf(".-"))),_(t,"class","svelte-3w6pcc"),Et(t,"display",e[2]?"flex":"none")},m(h,f){Ct(h,t,f),L(n,t,null),T(t,r),T(t,i),T(i,s),kt(s,e[0]),l=!0,u||(c=Le(s,"input",e[3]),u=!0)},p(h,[f]){const d={};f&2&&(d.Texto=h[1]),n.$set(d),(!l||f&2&&o!==(o=h[1].substring(0,h[1].indexOf(".-"))))&&_(s,"name",o),f&1&&s.value!==h[0]&&kt(s,h[0]),(!l||f&2&&a!==(a=h[1].substring(0,h[1].indexOf(".-"))))&&_(t,"id",a),f&4&&Et(t,"display",h[2]?"flex":"none")},i(h){l||(x(n.$$.fragment,h),l=!0)},o(h){F(n.$$.fragment,h),l=!1},d(h){h&&D(t),U(n),u=!1,c()}}}function gp(e,t,n){let{Pregunta_Texto:r="ERROR .- ( No se definio - Pregunta_Texto - )"}=t,{Columna:i}=t,{Visible:s=!0}=t;function o(){i=this.value,n(0,i)}return e.$$set=a=>{"Pregunta_Texto"in a&&n(1,r=a.Pregunta_Texto),"Columna"in a&&n(0,i=a.Columna),"Visible"in a&&n(2,s=a.Visible)},[i,r,s,o]}class ts extends jt{constructor(t){super(),qt(this,t,gp,mp,Bt,{Pregunta_Texto:1,Columna:0,Visible:2})}}function pp(e){let t,n,r,i,s,o,a,l,u,c;return n=new rn({props:{Texto:e[1]}}),{c(){t=B("article"),k(n.$$.fragment),r=R(),i=B("div"),s=B("input"),this.h()},l(h){t=j(h,"ARTICLE",{id:!0,class:!0});var f=Y(t);M(n.$$.fragment,f),r=S(f),i=j(f,"DIV",{class:!0});var d=Y(i);s=j(d,"INPUT",{type:!0,min:!0,max:!0,name:!0,class:!0}),d.forEach(D),f.forEach(D),this.h()},h(){_(s,"type","time"),_(s,"min",e[3]),_(s,"max",e[4]),_(s,"name",o=e[1].substring(0,e[1].indexOf(".-"))),s.required=!0,_(s,"class","svelte-yy95u0"),_(i,"class","Input_Time"),_(t,"id",a=e[1].substring(0,e[1].indexOf(".-"))),_(t,"class","svelte-yy95u0"),Et(t,"display",e[2]?"flex":"none")},m(h,f){Ct(h,t,f),L(n,t,null),T(t,r),T(t,i),T(i,s),kt(s,e[0]),l=!0,u||(c=Le(s,"input",e[5]),u=!0)},p(h,[f]){const d={};f&2&&(d.Texto=h[1]),n.$set(d),(!l||f&8)&&_(s,"min",h[3]),(!l||f&16)&&_(s,"max",h[4]),(!l||f&2&&o!==(o=h[1].substring(0,h[1].indexOf(".-"))))&&_(s,"name",o),f&1&&kt(s,h[0]),(!l||f&2&&a!==(a=h[1].substring(0,h[1].indexOf(".-"))))&&_(t,"id",a),f&4&&Et(t,"display",h[2]?"flex":"none")},i(h){l||(x(n.$$.fragment,h),l=!0)},o(h){F(n.$$.fragment,h),l=!1},d(h){h&&D(t),U(n),u=!1,c()}}}function _p(e,t,n){let{Pregunta_Texto:r="ERROR .- ( No se definio - Pregunta_Texto - )"}=t,{Visible:i=!0}=t,{Columna:s}=t,{Hora_Minima:o="00:00"}=t,{Hora_Maxima:a="22:00"}=t;function l(){s=this.value,n(0,s)}return e.$$set=u=>{"Pregunta_Texto"in u&&n(1,r=u.Pregunta_Texto),"Visible"in u&&n(2,i=u.Visible),"Columna"in u&&n(0,s=u.Columna),"Hora_Minima"in u&&n(3,o=u.Hora_Minima),"Hora_Maxima"in u&&n(4,a=u.Hora_Maxima)},[s,r,i,o,a,l]}class yp extends jt{constructor(t){super(),qt(this,t,_p,pp,Bt,{Pregunta_Texto:1,Visible:2,Columna:0,Hora_Minima:3,Hora_Maxima:4})}}function Ep(e){let t,n,r=`<div class="Titulo svelte-1otukrf"><div class="Titulo_Principal svelte-1otukrf"><b>Estudio de Satisfacción del Cliente</b></div> <div class="Titulo_Segundario svelte-1otukrf">( AÑO: 2023 )</div></div> <div class="LogoTipo"><img src="${Yg}" alt="" class="svelte-1otukrf"/></div>`,i,s,o,a=`La siguiente encuesta es completamente anónima y es realizada por la empresa <b>Analistas y Consultores</b>, tiene como finalidad mejorar los servicios y productos de <b>EL RESTAURANTE</b>.
			Agradecemos su gentil colaboración. <br/> <br/>

			Tomando en cuenta la escala de 1 a 500, donde:<br/> <div class="Escala svelte-1otukrf"><img src="${Jg}" alt="" class="svelte-1otukrf"/></div>`,l,u,c,h,f,d,v,w,V,q,X,Pt,ht,ce,At,fe,Ue,St,E,Zr,Ht,ti,ei,zt,ni,ri,ve,ii,Gt,si,oi,Kt,ai,li,Qt,ui,hi,Te,ci,Wt,fi,di,Xt,mi,gi,Yt,pi,_i,Jt,yi,Ei,Ie,vi,Zt,Ti,Ii,te,Ai,wi,ee,Pi,Ci,ne,Ri,Si,re,Vi,bi,ie,Di,Ni,se,Oi,ki,Ae,Gn,Mi,mo;u=new un({props:{Texto:"LA COMIDA"}});function lh(m){e[2](m)}let go={Pregunta_Texto:"P01.- El sabor de la comida"};e[0].P01!==void 0&&(go.Columna=e[0].P01),h=new Mt({props:go}),Z.push(()=>et(h,"Columna",lh));function uh(m){e[3](m)}let po={Pregunta_Texto:"P02.- La presentación de la comida"};e[0].P02!==void 0&&(po.Columna=e[0].P02),v=new Mt({props:po}),Z.push(()=>et(v,"Columna",uh));function hh(m){e[4](m)}let _o={Pregunta_Texto:"P03.- La variedad del menú que ofrece <b> EL RESTAURANTE </b>"};e[0].P03!==void 0&&(_o.Columna=e[0].P03),q=new Mt({props:_o}),Z.push(()=>et(q,"Columna",hh)),ht=new un({props:{Texto:"SERVICIO AL CLIENTE"}});function ch(m){e[5](m)}let yo={Pregunta_Texto:"P04.- La atención del personal de <b> EL RESTAURANTE </b>"};e[0].P04!==void 0&&(yo.Columna=e[0].P04),At=new Mt({props:yo}),Z.push(()=>et(At,"Columna",ch));function fh(m){e[6](m)}let Eo={Pregunta_Texto:"P05.- El tiempo que esperó hasta recibir su pedido"};e[0].P05!==void 0&&(Eo.Columna=e[0].P05),St=new Mt({props:Eo}),Z.push(()=>et(St,"Columna",fh));function dh(m){e[7](m)}let vo={Pregunta_Texto:"P06.- La facilidad del proceso de pago"};e[0].P06!==void 0&&(vo.Columna=e[0].P06),Ht=new Mt({props:vo}),Z.push(()=>et(Ht,"Columna",dh));function mh(m){e[8](m)}let To={Pregunta_Texto:"P07.- Los precios"};e[0].P07!==void 0&&(To.Columna=e[0].P07),zt=new Mt({props:To}),Z.push(()=>et(zt,"Columna",mh)),ve=new un({props:{Texto:"AMBIENTE DEL RESTAURANTE"}});function gh(m){e[9](m)}let Io={Pregunta_Texto:"P08.- La limpieza de EL RESTAURANTE"};e[0].P08!==void 0&&(Io.Columna=e[0].P08),Gt=new Mt({props:Io}),Z.push(()=>et(Gt,"Columna",gh));function ph(m){e[10](m)}let Ao={Pregunta_Texto:"P09.- La decoración de EL RESTAURANTE"};e[0].P09!==void 0&&(Ao.Columna=e[0].P09),Kt=new Mt({props:Ao}),Z.push(()=>et(Kt,"Columna",ph));function _h(m){e[11](m)}let wo={Pregunta_Texto:"P10.- La limpieza del baño de EL RESTAURANTE"};e[0].P10!==void 0&&(wo.Columna=e[0].P10),Qt=new Mt({props:wo}),Z.push(()=>et(Qt,"Columna",_h)),Te=new un({props:{Texto:"OPINIONES GENERALES"}});function yh(m){e[12](m)}let Po={Pregunta_Texto:"P11.- En general, ¿Qué tan satisfecho se encuentra con EL RESTAURANTE?",Opciones:["5. Muy Satisfecho","4. Satisfecho","3. Ni Satisfecho / Ni Insatisfecho","2. Insatisfecho","1. Muy Insatisfecho"]};e[0].P11!==void 0&&(Po.Columna=e[0].P11),Wt=new Zi({props:Po}),Z.push(()=>et(Wt,"Columna",yh));function Eh(m){e[13](m)}let Co={Pregunta_Texto:"P12.- ¿Qué le hace falta a EL RESTAURANTE para que usted se encuentre Muy Satisfecho?",Visible:e[0].P11!="5. Muy Satisfecho"};e[0].P12!==void 0&&(Co.Columna=e[0].P12),Xt=new ts({props:Co}),Z.push(()=>et(Xt,"Columna",Eh));function vh(m){e[14](m)}let Ro={Pregunta_Texto:"P13.- ¿Cuál es la principal fortaleza qué está haciendo bien EL RESTAURANTE?"};e[0].P13!==void 0&&(Ro.Columna=e[0].P13),Yt=new ts({props:Ro}),Z.push(()=>et(Yt,"Columna",vh));function Th(m){e[15](m)}let So={Pregunta_Texto:"P14.- ¿Qué sugerencia le haría a EL RESTAURANTE para mejorar?"};e[0].P14!==void 0&&(So.Columna=e[0].P14),Jt=new ts({props:So}),Z.push(()=>et(Jt,"Columna",Th)),Ie=new un({props:{Texto:"DATOS DEL ENTREVISTADO"}});function Ih(m){e[16](m)}let Vo={Pregunta_Texto:"P15.- ¿Sexo?",Orientacion:"Horizontal",Opciones:["Hombre","Mujer"]};e[0].P15!==void 0&&(Vo.Columna=e[0].P15),Zt=new Zi({props:Vo}),Z.push(()=>et(Zt,"Columna",Ih));function Ah(m){e[17](m)}let bo={Pregunta_Texto:"P16.- ¿Cuantos años tiene?",Valor_Minimo:"10",Valor_Maximo:"105"};e[0].P16!==void 0&&(bo.Columna=e[0].P16),te=new Ji({props:bo}),Z.push(()=>et(te,"Columna",Ah));function wh(m){e[18](m)}let Do={Pregunta_Texto:"P17.- ¿Como se enteró de la existencia de EL RESTAURANTE?",Orientacion:"Vertical",Opciones:["Pase por el lugar y lo vi","Lo vi en Internet","Por una publicidad impresa","Me recomendo un conocido","De otra forma"]};e[0].P17!==void 0&&(Do.Columna=e[0].P17),ee=new Zi({props:Do}),Z.push(()=>et(ee,"Columna",wh));function Ph(m){e[19](m)}let No={Pregunta_Texto:"P18.- Aproximadamente ¿Cuantás veces visitó EL RESTAURANTE?",Valor_Minimo:"1",Valor_Maximo:"900"};e[0].P18!==void 0&&(No.Columna=e[0].P18),ne=new Ji({props:No}),Z.push(()=>et(ne,"Columna",Ph));function Ch(m){e[20](m)}let Oo={Pregunta_Texto:"P19.- ¿Qué fecha fue la última visita a EL RESTAURANTE?",Fecha_Minima:"2021-12-22"};e[0].P19!==void 0&&(Oo.Columna=e[0].P19),re=new ap({props:Oo}),Z.push(()=>et(re,"Columna",Ch));function Rh(m){e[21](m)}let ko={Pregunta_Texto:"P20.- ¿Y a qué hora aproximada fue la última visita a EL RESTAURANTE?",Hora_Minima:"06:00",Hora_Maxima:"23:00"};e[0].P20!==void 0&&(ko.Columna=e[0].P20),ie=new yp({props:ko}),Z.push(()=>et(ie,"Columna",Rh));function Sh(m){e[22](m)}let Mo={Pregunta_Texto:"P21.- Aproximadamente ¿Cuantas cuadras te movilizaste para poder llegar a EL RESTAURANTE?",Valor_Minimo:"1",Valor_Maximo:"900"};return e[0].P21!==void 0&&(Mo.Columna=e[0].P21),se=new Ji({props:Mo}),Z.push(()=>et(se,"Columna",Sh)),Ae=new np({}),{c(){t=B("body"),n=B("header"),n.innerHTML=r,i=R(),s=B("form"),o=B("div"),o.innerHTML=a,l=R(),k(u.$$.fragment),c=R(),k(h.$$.fragment),d=R(),k(v.$$.fragment),V=R(),k(q.$$.fragment),Pt=R(),k(ht.$$.fragment),ce=R(),k(At.$$.fragment),Ue=R(),k(St.$$.fragment),Zr=R(),k(Ht.$$.fragment),ei=R(),k(zt.$$.fragment),ri=R(),k(ve.$$.fragment),ii=R(),k(Gt.$$.fragment),oi=R(),k(Kt.$$.fragment),li=R(),k(Qt.$$.fragment),hi=R(),k(Te.$$.fragment),ci=R(),k(Wt.$$.fragment),di=R(),k(Xt.$$.fragment),gi=R(),k(Yt.$$.fragment),_i=R(),k(Jt.$$.fragment),Ei=R(),k(Ie.$$.fragment),vi=R(),k(Zt.$$.fragment),Ii=R(),k(te.$$.fragment),wi=R(),k(ee.$$.fragment),Ci=R(),k(ne.$$.fragment),Si=R(),k(re.$$.fragment),bi=R(),k(ie.$$.fragment),Ni=R(),k(se.$$.fragment),ki=R(),k(Ae.$$.fragment),this.h()},l(m){t=j(m,"BODY",{class:!0});var H=Y(t);n=j(H,"HEADER",{class:!0,"data-svelte-h":!0}),es(n)!=="svelte-173pn5j"&&(n.innerHTML=r),i=S(H),s=j(H,"FORM",{class:!0,method:!0,action:!0});var I=Y(s);o=j(I,"DIV",{"data-svelte-h":!0}),es(o)!=="svelte-89olfe"&&(o.innerHTML=a),l=S(I),M(u.$$.fragment,I),c=S(I),M(h.$$.fragment,I),d=S(I),M(v.$$.fragment,I),V=S(I),M(q.$$.fragment,I),Pt=S(I),M(ht.$$.fragment,I),ce=S(I),M(At.$$.fragment,I),Ue=S(I),M(St.$$.fragment,I),Zr=S(I),M(Ht.$$.fragment,I),ei=S(I),M(zt.$$.fragment,I),ri=S(I),M(ve.$$.fragment,I),ii=S(I),M(Gt.$$.fragment,I),oi=S(I),M(Kt.$$.fragment,I),li=S(I),M(Qt.$$.fragment,I),hi=S(I),M(Te.$$.fragment,I),ci=S(I),M(Wt.$$.fragment,I),di=S(I),M(Xt.$$.fragment,I),gi=S(I),M(Yt.$$.fragment,I),_i=S(I),M(Jt.$$.fragment,I),Ei=S(I),M(Ie.$$.fragment,I),vi=S(I),M(Zt.$$.fragment,I),Ii=S(I),M(te.$$.fragment,I),wi=S(I),M(ee.$$.fragment,I),Ci=S(I),M(ne.$$.fragment,I),Si=S(I),M(re.$$.fragment,I),bi=S(I),M(ie.$$.fragment,I),Ni=S(I),M(se.$$.fragment,I),ki=S(I),M(Ae.$$.fragment,I),I.forEach(D),H.forEach(D),this.h()},h(){_(n,"class","Header Ancho_Limitado svelte-1otukrf"),_(s,"class","Formulario Ancho_Limitado svelte-1otukrf"),_(s,"method","post"),_(s,"action",""),_(t,"class","svelte-1otukrf")},m(m,H){Ct(m,t,H),T(t,n),T(t,i),T(t,s),T(s,o),T(s,l),L(u,s,null),T(s,c),L(h,s,null),T(s,d),L(v,s,null),T(s,V),L(q,s,null),T(s,Pt),L(ht,s,null),T(s,ce),L(At,s,null),T(s,Ue),L(St,s,null),T(s,Zr),L(Ht,s,null),T(s,ei),L(zt,s,null),T(s,ri),L(ve,s,null),T(s,ii),L(Gt,s,null),T(s,oi),L(Kt,s,null),T(s,li),L(Qt,s,null),T(s,hi),L(Te,s,null),T(s,ci),L(Wt,s,null),T(s,di),L(Xt,s,null),T(s,gi),L(Yt,s,null),T(s,_i),L(Jt,s,null),T(s,Ei),L(Ie,s,null),T(s,vi),L(Zt,s,null),T(s,Ii),L(te,s,null),T(s,wi),L(ee,s,null),T(s,Ci),L(ne,s,null),T(s,Si),L(re,s,null),T(s,bi),L(ie,s,null),T(s,Ni),L(se,s,null),T(s,ki),L(Ae,s,null),Gn=!0,Mi||(mo=Le(s,"submit",Nh(function(){Vh(e[1](e[0]))&&e[1](e[0]).apply(this,arguments)})),Mi=!0)},p(m,[H]){e=m;const I={};!f&&H&1&&(f=!0,I.Columna=e[0].P01,tt(()=>f=!1)),h.$set(I);const Lo={};!w&&H&1&&(w=!0,Lo.Columna=e[0].P02,tt(()=>w=!1)),v.$set(Lo);const xo={};!X&&H&1&&(X=!0,xo.Columna=e[0].P03,tt(()=>X=!1)),q.$set(xo);const Fo={};!fe&&H&1&&(fe=!0,Fo.Columna=e[0].P04,tt(()=>fe=!1)),At.$set(Fo);const Uo={};!E&&H&1&&(E=!0,Uo.Columna=e[0].P05,tt(()=>E=!1)),St.$set(Uo);const $o={};!ti&&H&1&&(ti=!0,$o.Columna=e[0].P06,tt(()=>ti=!1)),Ht.$set($o);const Bo={};!ni&&H&1&&(ni=!0,Bo.Columna=e[0].P07,tt(()=>ni=!1)),zt.$set(Bo);const jo={};!si&&H&1&&(si=!0,jo.Columna=e[0].P08,tt(()=>si=!1)),Gt.$set(jo);const qo={};!ai&&H&1&&(ai=!0,qo.Columna=e[0].P09,tt(()=>ai=!1)),Kt.$set(qo);const Ho={};!ui&&H&1&&(ui=!0,Ho.Columna=e[0].P10,tt(()=>ui=!1)),Qt.$set(Ho);const zo={};!fi&&H&1&&(fi=!0,zo.Columna=e[0].P11,tt(()=>fi=!1)),Wt.$set(zo);const Li={};H&1&&(Li.Visible=e[0].P11!="5. Muy Satisfecho"),!mi&&H&1&&(mi=!0,Li.Columna=e[0].P12,tt(()=>mi=!1)),Xt.$set(Li);const Go={};!pi&&H&1&&(pi=!0,Go.Columna=e[0].P13,tt(()=>pi=!1)),Yt.$set(Go);const Ko={};!yi&&H&1&&(yi=!0,Ko.Columna=e[0].P14,tt(()=>yi=!1)),Jt.$set(Ko);const Qo={};!Ti&&H&1&&(Ti=!0,Qo.Columna=e[0].P15,tt(()=>Ti=!1)),Zt.$set(Qo);const Wo={};!Ai&&H&1&&(Ai=!0,Wo.Columna=e[0].P16,tt(()=>Ai=!1)),te.$set(Wo);const Xo={};!Pi&&H&1&&(Pi=!0,Xo.Columna=e[0].P17,tt(()=>Pi=!1)),ee.$set(Xo);const Yo={};!Ri&&H&1&&(Ri=!0,Yo.Columna=e[0].P18,tt(()=>Ri=!1)),ne.$set(Yo);const Jo={};!Vi&&H&1&&(Vi=!0,Jo.Columna=e[0].P19,tt(()=>Vi=!1)),re.$set(Jo);const Zo={};!Di&&H&1&&(Di=!0,Zo.Columna=e[0].P20,tt(()=>Di=!1)),ie.$set(Zo);const ta={};!Oi&&H&1&&(Oi=!0,ta.Columna=e[0].P21,tt(()=>Oi=!1)),se.$set(ta)},i(m){Gn||(x(u.$$.fragment,m),x(h.$$.fragment,m),x(v.$$.fragment,m),x(q.$$.fragment,m),x(ht.$$.fragment,m),x(At.$$.fragment,m),x(St.$$.fragment,m),x(Ht.$$.fragment,m),x(zt.$$.fragment,m),x(ve.$$.fragment,m),x(Gt.$$.fragment,m),x(Kt.$$.fragment,m),x(Qt.$$.fragment,m),x(Te.$$.fragment,m),x(Wt.$$.fragment,m),x(Xt.$$.fragment,m),x(Yt.$$.fragment,m),x(Jt.$$.fragment,m),x(Ie.$$.fragment,m),x(Zt.$$.fragment,m),x(te.$$.fragment,m),x(ee.$$.fragment,m),x(ne.$$.fragment,m),x(re.$$.fragment,m),x(ie.$$.fragment,m),x(se.$$.fragment,m),x(Ae.$$.fragment,m),Gn=!0)},o(m){F(u.$$.fragment,m),F(h.$$.fragment,m),F(v.$$.fragment,m),F(q.$$.fragment,m),F(ht.$$.fragment,m),F(At.$$.fragment,m),F(St.$$.fragment,m),F(Ht.$$.fragment,m),F(zt.$$.fragment,m),F(ve.$$.fragment,m),F(Gt.$$.fragment,m),F(Kt.$$.fragment,m),F(Qt.$$.fragment,m),F(Te.$$.fragment,m),F(Wt.$$.fragment,m),F(Xt.$$.fragment,m),F(Yt.$$.fragment,m),F(Jt.$$.fragment,m),F(Ie.$$.fragment,m),F(Zt.$$.fragment,m),F(te.$$.fragment,m),F(ee.$$.fragment,m),F(ne.$$.fragment,m),F(re.$$.fragment,m),F(ie.$$.fragment,m),F(se.$$.fragment,m),F(Ae.$$.fragment,m),Gn=!1},d(m){m&&D(t),U(u),U(h),U(v),U(q),U(ht),U(At),U(St),U(Ht),U(zt),U(ve),U(Gt),U(Kt),U(Qt),U(Te),U(Wt),U(Xt),U(Yt),U(Jt),U(Ie),U(Zt),U(te),U(ee),U(ne),U(re),U(ie),U(se),U(Ae),Mi=!1,mo()}}}function vp(e,t,n){const{Validar_Columnas:r}=zg(),i={FechaRegistro:new Date,P01:"",P02:"",P03:"",P04:"",P05:"",P06:"",P07:"",P08:"",P09:"",P10:"",P11:"",P12:"",P13:"",P14:"",P15:"",P16:"",P17:"",P18:"",P19:"",P20:"",P21:""};function s(E){e.$$.not_equal(i.P01,E)&&(i.P01=E,n(0,i))}function o(E){e.$$.not_equal(i.P02,E)&&(i.P02=E,n(0,i))}function a(E){e.$$.not_equal(i.P03,E)&&(i.P03=E,n(0,i))}function l(E){e.$$.not_equal(i.P04,E)&&(i.P04=E,n(0,i))}function u(E){e.$$.not_equal(i.P05,E)&&(i.P05=E,n(0,i))}function c(E){e.$$.not_equal(i.P06,E)&&(i.P06=E,n(0,i))}function h(E){e.$$.not_equal(i.P07,E)&&(i.P07=E,n(0,i))}function f(E){e.$$.not_equal(i.P08,E)&&(i.P08=E,n(0,i))}function d(E){e.$$.not_equal(i.P09,E)&&(i.P09=E,n(0,i))}function v(E){e.$$.not_equal(i.P10,E)&&(i.P10=E,n(0,i))}function w(E){e.$$.not_equal(i.P11,E)&&(i.P11=E,n(0,i))}function V(E){e.$$.not_equal(i.P12,E)&&(i.P12=E,n(0,i))}function q(E){e.$$.not_equal(i.P13,E)&&(i.P13=E,n(0,i))}function X(E){e.$$.not_equal(i.P14,E)&&(i.P14=E,n(0,i))}function Pt(E){e.$$.not_equal(i.P15,E)&&(i.P15=E,n(0,i))}function ht(E){e.$$.not_equal(i.P16,E)&&(i.P16=E,n(0,i))}function ce(E){e.$$.not_equal(i.P17,E)&&(i.P17=E,n(0,i))}function At(E){e.$$.not_equal(i.P18,E)&&(i.P18=E,n(0,i))}function fe(E){e.$$.not_equal(i.P19,E)&&(i.P19=E,n(0,i))}function Ue(E){e.$$.not_equal(i.P20,E)&&(i.P20=E,n(0,i))}function St(E){e.$$.not_equal(i.P21,E)&&(i.P21=E,n(0,i))}return[i,r,s,o,a,l,u,c,h,f,d,v,w,V,q,X,Pt,ht,ce,At,fe,Ue,St]}class Cp extends jt{constructor(t){super(),qt(this,t,vp,Ep,Bt,{})}}export{Cp as component};
