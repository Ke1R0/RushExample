"use strict";(self.webpackChunk_infinity_root=self.webpackChunk_infinity_root||[]).push([[47],{544:(e,t,n)=>{n.r(t);var r=n(729),a=n.n(r),l=n(915),c=n(113),i=n(623);const o=e=>({type:"SET_USER_IS_CONNECTED",isConnected:e});var s=n(936);const m=s.ZP.span`
  color: #fff;
  margin-right: 1rem;
  font-size: 20px;
`,u=()=>{const e=(0,i.I0)(),t=(0,i.v9)((e=>e?.user));return a().createElement(a().Fragment,null,!t?.isConnected&&a().createElement("button",{type:"button",onClick:()=>e(o(!0))},"Login"),t?.isConnected&&a().createElement(a().Fragment,null,a().createElement(m,null,t?.name),a().createElement("button",{type:"button",onClick:()=>e(o(!1))},"Sign out")))},E=s.ZP.div`
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
`,d=s.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,p=s.ZP.span`
  color: #fff;
  margin-right: 1rem;
`,f=({sitename:e})=>a().createElement(E,null,a().createElement("div",null,a().createElement(p,null,e)),a().createElement(d,null,a().createElement(u,null))),g=s.ZP.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
  padding: 0 25px;
  margin-top: 7px;

`,v=(0,s.ZP)(l.OL)`
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
`,y=()=>{const e=(0,i.v9)((e=>e?.user));return a().createElement(g,null,a().createElement(v,{exact:!0,activeClassName:"is-active",to:"/"},"Home"),a().createElement(v,{activeClassName:"is-active",to:"/orders/",replace:!0},"Orders"),e?.isConnected&&a().createElement(a().Fragment,null,a().createElement(v,{activeClassName:"is-active",to:"/delivery/"},"Delivery")))};var _=n(386);const h={name:"App User",isConnected:!1},x={user:(e=h,{type:t,...n})=>{switch(t){case"SET_USER_NAME":return{...e,name:n.name};case"SET_USER_IS_CONNECTED":return{...e,isConnected:n.isConnected};default:return e}}};function C(e){return(0,_.UY)({...x,...e})}const S=s.ZP.main`
  margin: 0;
  padding: 25px;
  background-color: #efefef;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
`,b=s.vJ`
  body {
    margin: 0;
    padding: 0;
    border: 0;
  }
`,O=s.ZP.div`
    a {
      color: #da194e;
    }
    
    i{
      color: #666;
    }
`,w=()=>{const e=(0,i.I0)(),t=(0,r.useRef)(),n=(0,i.v9)((e=>e?.user)),l=(0,r.useMemo)((()=>()=>{e({type:"SET_USER_NAME",name:t.current.value})}),[]);return a().createElement(O,null,a().createElement("h1",null,"Root App Home Page"),a().createElement("h2",null,"Logged in user: ",n?.name),a().createElement("input",{type:"text",ref:t}),a().createElement("button",{onClick:l},"Set User"))},N=({storeName:e})=>a().createElement(r.Fragment,null,a().createElement("h1",null,e,": Delivery App"),a().createElement("p",null,"Description here")),k=a().lazy((()=>n.e(428).then(n.t.bind(n,428,23)))),R=({store:e})=>{const t=(0,i.v9)((e=>e?.user));return a().createElement(r.Fragment,null,a().createElement(c.AW,{exact:!0,path:"/"},a().createElement(w,null)),a().createElement(c.AW,{path:"/orders/"},a().createElement(k,{store:e})),t?.isConnected&&a().createElement(c.AW,{path:"/delivery/"},a().createElement(N,{storeName:"Central Store"})))},A=function(){const e=("object"==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):_.qC)(),t=(0,_.MT)(C(),e);return t.asyncReducers={},t.injectReducer=(e,n)=>{t.asyncReducers[e]=n,t.replaceReducer(C(t.asyncReducers))},t}(),P=()=>a().createElement(i.zt,{store:A},a().createElement(b,null),a().createElement(l.VK,null,a().createElement(f,{sitename:"Infinity"}),a().createElement(y,null),a().createElement(S,null,a().createElement(a().Suspense,{fallback:"Loading"},a().createElement(c.rs,null,a().createElement(R,{store:A}))))));var T=n(351);n.n(T)().render(a().createElement(P,null),document.getElementById("root"))}}]);
//# sourceMappingURL=47.js.map