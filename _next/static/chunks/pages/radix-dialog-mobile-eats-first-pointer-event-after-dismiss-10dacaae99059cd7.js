(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{5101:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var n=i(7294),o=i(5002),s=i(9008),r=i(1664),a=i(1452),l=i(9499),d=i(4730),c=(0,i(6744).Th)({theme:{colors:{none:"#00000000",primary:"#000000",transparent:"#00000000"},fontSizes:{},fonts:{},lineHeights:{},letterSpacings:{},sizes:{},space:{dialogPadding:"24px",iconLength:"16px",innerPaddingX:"20px",mobilePadding:"21px",contentWidthDesktop:"704px",contentWidthMid:"796px",contentWidthFull:"888px"},borderWidths:{},borderStyles:{},radii:{},shadows:{},zIndices:{},transitions:{}},media:{desktop:"(min-width: 744px)",mid:"(min-width: 936px)",full:"(min-width: 1128px)"},utils:{marginX:function(e){return{marginLeft:e,marginRight:e}},marginY:function(e){return{marginTop:e,marginBottom:e}},paddingX:function(e){return{paddingLeft:e,paddingRight:e}},paddingY:function(e){return{paddingTop:e,paddingBottom:e}},size:function(e){return{width:e,height:e}}}}),h=(c.config,c.createTheme,c.css,c.getCssText,c.globalCss,c.keyframes),g=c.styled,p=(c.theme,i(5893)),f=["children"],m=["children"];function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){(0,l.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function b(e){var t=e.children,i=(0,d.Z)(e,f);return(0,p.jsxs)(j,u(u({},i),{},{children:[(0,p.jsx)(D,{}),t]}))}var j=g(o.fC,{}),w=h({from:{opacity:"0"},to:{opacity:"1"}}),y=h({from:{opacity:"1"},to:{opacity:"0"}}),D=g(o.aV,{backgroundColor:"rgba(0, 0, 0, 0.5)",bottom:0,left:0,position:"fixed",right:0,top:0,zIndex:"101",'&[data-state="open"]':{animation:"".concat(w," 500ms cubic-bezier(0.22, 1, 0.36, 1)")},'&[data-state="closed"]':{animation:"".concat(y," 500ms cubic-bezier(0.22, 1, 0.36, 1)")}}),v=n.forwardRef((function(e,t){var i=e.children,n=(0,d.Z)(e,m);return(0,p.jsxs)(z,u(u({},n),{},{ref:t,children:[(0,p.jsx)(R,{children:(0,p.jsx)(k,{"aria-label":"close",asChild:!0,children:(0,p.jsx)("button",{type:"button",children:"Dismiss"})})}),(0,p.jsx)($,{children:i})]}))}));v.displayName="DialogContent";var C=h({from:{transform:"translate3d(0%,100%,0)"},to:{transform:"translate3d(0%,0%,0)"}}),P=h({from:{transform:"translate3d(0%,0%,0)"},to:{transform:"translate3d(0%,100%,0)"}}),O=h({from:{transform:"translate3d(-50%,50%,0)"},to:{transform:"translate3d(-50%,-50%,0)"}}),T=h({from:{transform:"translate3d(-50%,-50%,0)"},to:{transform:"translate3d(-50%,50%,0)"}}),z=g(o.VY,{backgroundColor:"#ffffff",borderRadius:"0px",boxShadow:"hsl(187 22% 7% / 35%) 0px 10px 38px -10px,hsl(187 22% 7% / 20%) 0px 10px 20px -15px",height:"100vh",left:"0%",maxWidth:"100vw",minWidth:"200px",position:"fixed",top:"0%",width:"100%",zIndex:"101","&:focus":{outline:"none"},'&[data-state="open"]':{animation:"".concat(C," 500ms cubic-bezier(0.22, 1, 0.36, 1),")+"".concat(w," 500ms cubic-bezier(0.22, 1, 0.36, 1)")},'&[data-state="closed"]':{animation:"".concat(P," 500ms cubic-bezier(0.22, 1, 0.36, 1),")+"".concat(y," 300ms cubic-bezier(0.22, 1, 0.36, 1)")},willChange:"transform","@desktop":{borderRadius:"12px",height:"auto",left:"50%",top:"50%",transform:"translate(-50%, -50%)",maxWidth:"85vw",width:"75%",'&[data-state="open"]':{animation:"".concat(O," 500ms cubic-bezier(0.22, 1, 0.36, 1),")+"".concat(w," 500ms cubic-bezier(0.22, 1, 0.36, 1)")},'&[data-state="closed"]':{animation:"".concat(T," 500ms cubic-bezier(0.22, 1, 0.36, 1),")+"".concat(y," 300ms cubic-bezier(0.22, 1, 0.36, 1)")}}}),R=g("div",{height:"calc($space$iconLength + ($space$dialogPadding * 2))",padding:"$dialogPadding",position:"relative",width:"100%"}),$=g("div",{$$headerHeight:"calc($space$iconLength + ($space$dialogPadding * 2))",maxHeight:"calc(100vh - $$headerHeight)",overflow:"scroll",paddingBottom:"$dialogPadding",paddingX:"$space$dialogPadding",position:"relative",width:"100%","@desktop":{maxHeight:"calc(85vh - $$headerHeight)"}}),k=g(o.x8,{color:"#000000",position:"relative"}),I=(o.x8,o.dk,o.Dx,o.xz);function _(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(s.default,{children:[(0,p.jsx)("title",{children:"Issue: Radix Dialog on Mobile eats first pointer event after dismiss"}),(0,p.jsx)("meta",{name:"description",content:"Issue: Radix Dialog on Mobile eats first pointer event after dismiss"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(r.default,{href:"/",as:"".concat("/minimal-repros","/"),children:(0,p.jsx)("a",{children:"Back to Home"})}),(0,p.jsx)("h2",{children:"Issue: Radix Dialog on Mobile eats first pointer event after dismiss"}),(0,p.jsxs)("ol",{children:[(0,p.jsxs)("li",{children:["View the source code for this page\xa0",(0,p.jsx)("a",{href:"https://github.com/just-learning-1/minimal-repros/blob/master/src/pages/radix-dialog-mobile-eats-first-pointer-event-after-dismiss.page.jsx",children:"here"})]}),(0,p.jsx)("li",{children:"Open this page in a mobile browser or in Firefox with Touch Emulation enabled"}),(0,p.jsx)("li",{children:"Tap the following button to open the Radix UI Dialog:"}),(0,p.jsx)("li",{children:(0,p.jsxs)(b,{children:[(0,p.jsx)(I,{asChild:!0,children:(0,p.jsx)("button",{type:"button",children:"#1: First tap after dismiss is eaten"})}),(0,p.jsx)(v,{children:"Now dismiss this dialog, then try tapping the earlier button again"})]})}),(0,p.jsx)("li",{children:"After dismissing the dialog, try tapping the same (or a different) button again"}),(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:"Result: "}),"The first tap after dismissing the dialog is stolen!"]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:"Investigation: "}),"I discovered the following is still set on the body tag after dismiss until the next tap is received:",(0,p.jsx)("br",{}),(0,p.jsx)("code",{children:'<body style="pointer-events: none;">'})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:"However! "}),"If I change the implementation of",(0,p.jsx)("strong",{children:" DialogContent "}),"from this:"]}),(0,p.jsx)("li",{children:(0,p.jsx)(a.Z,{language:"javascript",children:'// from this page\n<Dialog>\n  <DialogTrigger asChild>\n    <button type="button">\n      Tap Me, then Tap Me Again after dismissing the dialog\n    </button>\n  </DialogTrigger>\n  <DialogContent>\n    Now dismiss this dialog, then try tapping the earlier button again\n  </DialogContent>\n</Dialog>\n\n// from Dialog.jsx\nexport const DialogContent = React.forwardRef(({ children, ...props }, forwardedRef) => (\n  <DialogContentContainer {...props} ref={forwardedRef}>\n    <DialogHeaderBar>\n      <CloseButton aria-label="close" asChild>\n        <button type="button">\n          Dismiss\n        </button>\n      </CloseButton>\n    </DialogHeaderBar>\n    <DialogContentBody>\n      {children}\n    </DialogContentBody>\n  </DialogContentContainer>\n))'})}),(0,p.jsx)("li",{children:"To this:"}),(0,p.jsx)("li",{children:(0,p.jsx)(a.Z,{language:"javascript",children:'// from this page\n<Dialog>\n  <DialogTrigger asChild>\n    <button type="button">\n      Here is a second button whose pointer event also gets eaten\n    </button>\n  </DialogTrigger>\n  <DialogPrimitive.Content style={{ /* ... */ }}>\n    <DialogPrimitive.Close asChild>\n      <button type="button">Dismiss</button>\n    </DialogPrimitive.Close>\n    Now dismiss this dialog, then try tapping the earlier button again\n    </DialogPrimitive.Content>\n</Dialog>'})}),(0,p.jsxs)("li",{children:["Like so:",(0,p.jsx)("br",{}),(0,p.jsxs)(b,{children:[(0,p.jsx)(I,{asChild:!0,children:(0,p.jsx)("button",{type:"button",children:"#2: Stolen tap is fixed! But I do not understand why"})}),(0,p.jsxs)(o.VY,{style:{backgroundColor:"#ffffff",borderRadius:"12px",boxShadow:"hsl(187 22% 7% / 35%) 0px 10px 38px -10px,hsl(187 22% 7% / 20%) 0px 10px 20px -15px",height:"auto",left:"50%",padding:"24px",position:"fixed",top:"50%",transform:"translate(-50%, -50%)",maxWidth:"85vw",width:"75%",zIndex:"101"},children:[(0,p.jsx)(o.x8,{asChild:!0,children:(0,p.jsx)("button",{type:"button",display:"block",children:"Dismiss"})}),(0,p.jsx)("div",{children:"Now dismiss this dialog, then try tapping the earlier button again"})]})]})]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:"The problem goes away! "}),"The first tap after dismiss is not invalidated."]}),(0,p.jsxs)("li",{children:["Only difference is the second version swaps a",(0,p.jsx)("code",{children:" React.forwardRef "}),"styled version of the Dialog Content element with the",(0,p.jsx)("code",{children:" DialogPrimitive.Content "}),"element directly"]}),(0,p.jsxs)("li",{children:["The curious thing is, the implementation of the first dialog is modeled almost identically to the",(0,p.jsx)("strong",{children:" Radix UI Design System Dialog. "}),"Compare the two Dialog implementations:",(0,p.jsxs)("ol",{children:[(0,p.jsx)("ol",{children:(0,p.jsx)("a",{href:"https://github.com/radix-ui/design-system/blob/master/components/Dialog.tsx",children:"radix-ui/design-system/.../Dialog.tsx"})}),(0,p.jsx)("ol",{children:(0,p.jsx)("a",{href:"https://github.com/just-learning-1/minimal-repros/blob/master/src/base/Dialog.jsx",children:"just-learning-1/minimal-repros/.../Dialog.jsx"})})]})]}),(0,p.jsx)("li",{children:"I am new to coding, and I cannot for the life of me figure out why this is happening :("})]})]})]})}},505:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/radix-dialog-mobile-eats-first-pointer-event-after-dismiss",function(){return i(5101)}])}},function(e){e.O(0,[774,442,888,179],(function(){return t=505,e(e.s=t);var t}));var t=e.O();_N_E=t}]);