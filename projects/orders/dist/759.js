"use strict";(self.webpackChunk_infinity_orders=self.webpackChunk_infinity_orders||[]).push([[759],{759:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(729),a=r.n(n),l=r(915),i=r(113),o=r(623),c=r(386),s=r(776),d=r(157);const m=()=>{const e=(0,o.I0)(),t=(0,n.useRef)(),r=(0,o.v9)((e=>e?.user)),c=(0,n.useMemo)((()=>()=>{e({type:"SET_USER_NAME",name:t.current.value})}),[]);return a().createElement(l.VK,null,a().createElement("h1",null,"Orders App"),r?.isConnected?a().createElement(n.Fragment,null,a().createElement("h2",null,"Logged in user: ",r?.name),a().createElement("input",{type:"text",ref:t}),a().createElement("button",{onClick:c},"Set User")):void 0,a().createElement(d.kd,null,a().createElement(s.Z,null),a().createElement(d.Ly,null,a().createElement(i.rs,null,a().createElement(i.AW,{exact:!0,path:"/delivered/"},a().createElement("h2",null,"Delivered Orders")),a().createElement(i.AW,{exact:!0,path:"/undelivered/"},a().createElement("h2",null,"Undelivered Orders")),a().createElement(i.AW,{exact:!0,path:"/returns/"},a().createElement("h2",null,"Returned Orders")),a().createElement(i.AW,{exact:!0,path:"/"},a().createElement(i.l_,{to:"/delivered/"}))))))},u=({store:e})=>a().createElement(o.zt,{store:e||(0,c.MT)((()=>{}))},a().createElement(m,null))},776:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(729),a=r.n(n),l=r(292);const i=({increaseCount:e})=>a().createElement(l.k,{onClick:e},a().createElement(l._,{exact:!0,activeClassName:"is-active",to:"/delivered/"},"Delivered"),a().createElement(l._,{activeClassName:"is-active",to:"/undelivered/"},"Undelivered"),a().createElement(l._,{activeClassName:"is-active",to:"/returns/"},"Returns"))},292:(e,t,r)=>{r.d(t,{k:()=>l,_:()=>i});var n=r(936),a=r(915);const l=n.ZP.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
`,i=(0,n.ZP)(a.OL)`
  text-decoration: none;
  margin: 5px 15px 3px;
  padding: 5px 15px;
  color: #da194e;
  transition: opacity 0.3s ease;
  position: relative;
  
  &:after {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #da194e;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &.is-active{
   transition: background-color .3s ease;
   background-color: #da194e;
   color: #fff;
  }

  &:hover{
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`},157:(e,t,r)=>{r.d(t,{kd:()=>l,Ly:()=>i});var n=r(936),a=r(915);(0,n.ZP)(a.rU)`
  text-decoration: none;
  padding-right: 10px;
  height: 50px;
  line-height: 50px;
  
  &:visited {
    color: #000;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;const l=n.ZP.main`
  padding: 25px;
  background-color: #fff;
`,i=n.ZP.div`
  padding: 10px 15px;
  background-color: #fff;
`}}]);