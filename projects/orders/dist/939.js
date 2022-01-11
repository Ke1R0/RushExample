"use strict";(self.webpackChunk_infinity_orders=self.webpackChunk_infinity_orders||[]).push([[939],{939:(e,t,r)=>{r.r(t);var n=r(729),a=r.n(n),l=r(351),i=r.n(l),o=r(915),c=r(113),s=r(623),d=r(386),m=r(936);const u=m.ZP.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
`,p=(0,m.ZP)(o.OL)`
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
`,E=({increaseCount:e})=>a().createElement(u,{onClick:e},a().createElement(p,{exact:!0,activeClassName:"is-active",to:"/delivered/"},"Delivered"),a().createElement(p,{activeClassName:"is-active",to:"/undelivered/"},"Undelivered"),a().createElement(p,{activeClassName:"is-active",to:"/returns/"},"Returns")),f=((0,m.ZP)(o.rU)`
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
`,m.ZP.main`
  padding: 25px;
  background-color: #fff;
`),v=m.ZP.div`
  padding: 10px 15px;
  background-color: #fff;
`,x=()=>{const e=(0,s.I0)(),t=(0,n.useRef)(),r=(0,s.v9)((e=>e?.user)),l=(0,n.useMemo)((()=>()=>{e({type:"SET_USER_NAME",name:t.current.value})}),[]);return a().createElement(o.VK,null,a().createElement("h1",null,"Orders App"),r?.isConnected?a().createElement(n.Fragment,null,a().createElement("h2",null,"Logged in user: ",r?.name),a().createElement("input",{type:"text",ref:t}),a().createElement("button",{onClick:l},"Set User")):void 0,a().createElement(f,null,a().createElement(E,null),a().createElement(v,null,a().createElement(c.rs,null,a().createElement(c.AW,{exact:!0,path:"/delivered/"},a().createElement("h2",null,"Delivered Orders")),a().createElement(c.AW,{exact:!0,path:"/undelivered/"},a().createElement("h2",null,"Undelivered Orders")),a().createElement(c.AW,{exact:!0,path:"/returns/"},a().createElement("h2",null,"Returned Orders")),a().createElement(c.AW,{exact:!0,path:"/"},a().createElement(c.l_,{to:"/delivered/"}))))))},h=({store:e})=>a().createElement(s.zt,{store:e||(0,d.MT)((()=>{}))},a().createElement(x,null));i().render(a().createElement(h,null),document.getElementById("root"))}}]);
//# sourceMappingURL=939.js.map