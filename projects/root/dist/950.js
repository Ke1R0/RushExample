/*! For license information please see 950.js.LICENSE.txt */
(self.webpackChunk_infinity_root=self.webpackChunk_infinity_root||[]).push([[950],{335:()=>{(()=>{"use strict";var e={954:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var c,i,l=o(e),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))n.call(c,u)&&(l[u]=c[u]);if(t){i=t(c);for(var p=0;p<i.length;p++)r.call(c,i[p])&&(l[i[p]]=c[i[p]])}}return l}},956:(e,t,n)=>{var r=n(954);if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;o("react.element"),o("react.portal"),o("react.fragment"),o("react.strict_mode"),o("react.profiler"),o("react.provider"),o("react.context"),o("react.forward_ref"),o("react.suspense"),o("react.memo"),o("react.lazy")}"function"==typeof Symbol&&Symbol.iterator;var a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c={};function i(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||a}function l(){}function s(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||a}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(function(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}(85));this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},l.prototype=i.prototype;var u=s.prototype=new l;u.constructor=s,r(u,i.prototype),u.isPureReactComponent=!0,Object.prototype.hasOwnProperty},393:(e,t,n)=>{n(956)}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(393)})()},665:(e,t,n)=>{"use strict";n.r(t);var r=n(729),o=n.n(r),a=n(915),c=n(113),i=n(623);const l=e=>({type:"SET_USER_IS_CONNECTED",isConnected:e});var s=n(936);const u=s.ZP.span`
  color: #fff;
  margin-right: 1rem;
  font-size: 20px;
`,p=()=>{const e=(0,i.I0)(),t=(0,i.v9)((e=>e?.user));return o().createElement(o().Fragment,null,!t?.isConnected&&o().createElement("button",{type:"button",onClick:()=>e(l(!0))},"Login"),t?.isConnected&&o().createElement(o().Fragment,null,o().createElement(u,null,t?.name),o().createElement("button",{type:"button",onClick:()=>e(l(!1))},"Sign out")))},f=s.ZP.div`
  height: 70px;
  background-color: #0242d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  margin: 0;
  font-size: 2rem;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
  box-shadow: 0 5px 7px -3px rgba(0,0,0,0.2);
`,m=s.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,d=s.ZP.span`
  color: #fff;
  margin-right: 1rem;
`,E=({sitename:e})=>o().createElement(f,null,o().createElement("div",null,o().createElement(d,null,e)),o().createElement(m,null,o().createElement(p,null))),y=s.ZP.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
  padding: 0 25px;
  margin-top: 7px;

`,g=(0,s.ZP)(a.OL)`
  text-decoration: none;
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  &:visited {
    color: #000;
  }
  &:hover {
    background-color: #f6f6f6;
  }
  &.is-active{
    transition: background-color .3s ease;
    background-color: #efefef;
   }
`,h=()=>{const e=(0,i.v9)((e=>e?.user));return o().createElement(y,null,o().createElement(g,{exact:!0,activeClassName:"is-active",to:"/"},"Home"),o().createElement(g,{activeClassName:"is-active",to:"/orders/",replace:!0},"Orders"),e?.isConnected&&o().createElement(o().Fragment,null,o().createElement(g,{activeClassName:"is-active",to:"/delivery/"},"Delivery")))};var v=n(386);const b={name:"App User",isConnected:!1},S={user:(e=b,{type:t,...n})=>{switch(t){case"SET_USER_NAME":return{...e,name:n.name};case"SET_USER_IS_CONNECTED":return{...e,isConnected:n.isConnected};default:return e}}};function O(e){return(0,v.UY)({...S,...e})}const x=s.ZP.main`
  margin: 0;
  padding: 25px;
  background-color: #efefef;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
`,_=s.vJ`
  body {
    margin: 0;
    padding: 0;
    border: 0;
  }
`,w=s.ZP.div`
    a {
      color: #da194e;
    }
    
    i{
      color: #666;
    }
`,C=()=>{const e=(0,i.I0)(),t=(0,r.useRef)(),n=(0,i.v9)((e=>e?.user)),a=(0,r.useMemo)((()=>()=>{e({type:"SET_USER_NAME",name:t.current.value})}),[]);return o().createElement(w,null,o().createElement("h1",null,"Root App Home Page"),o().createElement("h2",null,"Logged in user: ",n?.name),o().createElement("input",{type:"text",ref:t}),o().createElement("button",{onClick:a},"Set User"))};var j=n(335);const R=o().lazy((()=>n.e(428).then(n.t.bind(n,428,23)))),P=({store:e})=>{const t=(0,i.v9)((e=>e?.user));return o().createElement(r.Fragment,null,o().createElement(c.AW,{exact:!0,path:"/"},o().createElement(C,null)),o().createElement(c.AW,{path:"/orders/"},o().createElement(R,{store:e})),t?.isConnected&&o().createElement(c.AW,{path:"/delivery/"},o().createElement(j.App,{storeName:"Global Store"})))},k=function(){const e=("object"==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):v.qC)(),t=(0,v.MT)(O(),e);return t.asyncReducers={},t.injectReducer=(e,n)=>{t.asyncReducers[e]=n,t.replaceReducer(O(t.asyncReducers))},t}(),N=()=>o().createElement(i.zt,{store:k},o().createElement(_,null),o().createElement(a.VK,null,o().createElement(E,{sitename:"Infinity"}),o().createElement(h,null),o().createElement(x,null,o().createElement(o().Suspense,{fallback:"Loading"},o().createElement(c.rs,null,o().createElement(P,{store:k}))))));var U=n(351);n.n(U)().render(o().createElement(N,null),document.getElementById("root"))}}]);