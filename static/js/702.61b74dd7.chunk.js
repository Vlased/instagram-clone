"use strict";(self.webpackChunkinstagram_clone=self.webpackChunkinstagram_clone||[]).push([[702,213],{8213:function(e,n,t){t.r(n);var s=t(2791),r=t(184),l=s.memo((function(){return(0,r.jsxs)("div",{className:"w-[100vw] h-[100vh] py-8 flex flex-col items-center justify-between",children:[(0,r.jsx)("div",{className:"h-12"}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/instagram-clone/images/loading-logo.jpg",className:"h-28"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/instagram-clone/images/from-meta.jpg",className:"h-16"})})]})}));n.default=l},1702:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var s=t(1413),r=t(5861),l=t(885),i=t(7757),a=t.n(i),c=t(4968),o=t(9329),u=t(6724),m=t(8213),f=t(2791),d=t(1743),x=t(6871),h=t(83),g=t(6727),p=t(1273),w=t(4219),j=t(184),v=f.memo((function(e){var n=e.profileImage,t=e.username,s=e.fullName,r=e.userId,i=(0,d.C)((function(e){return e.signedUser.user})),a=(0,x.s0)(),c=(0,f.useState)(!1),o=(0,l.Z)(c,2),u=o[0],m=o[1],v=(0,g.Z)({userId:r}),b=v.addToFollowing,N=v.removeFromFollowing;return(0,j.jsxs)("div",{className:"flex w-full h-13 mb-1 px-2 justify-between items-center my-[4px]",children:[(0,j.jsxs)("button",{className:"w-full h-full py-[0.5px] gap-2 flex items-center",onClick:function(){return a(h.Z.DASHBOARD+r)},children:[(0,j.jsx)("img",{src:n.length?n:"/instagram-clone/images/default-avatar-image.jpg",className:"h-12 w-12 rounded-full object-cover"}),(0,j.jsxs)("div",{className:"flex flex-col items-start",children:[(0,j.jsx)("p",{className:"font-medium text-sm tracking-wide whitespace-nowrap",children:t}),(0,j.jsx)("p",{className:"text-gray-400 text-sm whitespace-nowrap",children:s}),(0,j.jsx)("p",{className:"text-gray-400 text-xs",children:"Popular"})]})]}),r!==i.userId&&i.userId.length?i.following.some((function(e){return e.userId===r}))?(0,j.jsx)("button",{className:"h-7 w-28 rounded border text-sm font-medium cursor-pointer",onClick:function(e){e.stopPropagation(),m(!0)},children:"Following"}):(0,j.jsx)("button",{className:"h-7 w-20 bg-blue-500 font-medium text-white rounded cursor-pointer text-sm tracking-wide",onClick:function(e){e.stopPropagation(),b()},children:"Follow"}):null,u?(0,j.jsx)(p.Z,{closeEvent:function(){return m(!1)},styles:"h-72 top-[26.5%]",children:(0,j.jsx)(w.Z,{areYouSureEvent:function(){m(!1),N()},profileImage:n,closeEvent:function(){return m(!1)},questionText:"Unfollow ".concat(t),buttonText:"Unfollow"})}):null]})})),b=f.memo((function(){var e=(0,d.C)((function(e){return e.signedUser.user})),n=(0,f.useState)([]),t=(0,l.Z)(n,2),i=t[0],x=t[1];(0,f.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t,s,r,l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,u.hJ)(o.db,"users"),s=(0,u.IO)(t,(0,u.ar)("username",">=","")),n.next=4,(0,u.PL)(s);case 4:r=n.sent.docs.map((function(e){return e.data()})),l=r.filter((function(n){return n.userId!==e.userId&&e.following.every((function(e){return e.userId!==n.userId}))})).sort((function(e,n){return.5-Math.random()})).slice(0,30),x(l);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var h=(0,f.useMemo)((function(){return i.map((function(e){return(0,f.createElement)(v,(0,s.Z)((0,s.Z)({},e),{},{key:e.userId}))}))}),[i]);return 0===h.length?(0,j.jsx)(m.default,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"back flex flex-col items-center",children:[(0,j.jsx)(c.Z,{}),(0,j.jsxs)("div",{className:"min-h-[calc(100vh-60px)] w-full max-w-[550px] bg-blue-700 flex flex-col items-center back sm:pt-16 pb-16",children:[(0,j.jsx)("div",{className:"w-full flex justify-start font-medium h-8 flex items-center bg-white sm:bg-inherit px-4",children:"Suggested"}),(0,j.jsx)("div",{className:"w-full flex flex-col bg-white py-2 px-1",children:h})]})]}),(0,j.jsx)("div",{className:"flex w-full fixed bottom-3 justify-center back text-xs text-gray-300 font-medium back",children:"\xa9 2022 INSTAGRAM FROM META"})]})})),N=b}}]);
//# sourceMappingURL=702.61b74dd7.chunk.js.map