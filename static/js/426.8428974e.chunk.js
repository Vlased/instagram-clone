"use strict";(self.webpackChunkinstagram_clone=self.webpackChunkinstagram_clone||[]).push([[426],{5018:function(e,s,t){t.d(s,{Z:function(){return u}});var l=t(885),n=t(2791),a=t(6871),c=t(9110),r=t(184),i=function(e){var s=e.styles;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})},o=t(6302),u=n.memo((function(e){var s=e.postImage,t=e.postId,u=e.likes,m=e.comments,x=(0,n.useState)(!1),d=(0,l.Z)(x,2),h=d[0],f=d[1],g=(0,a.s0)(),v=(0,n.useCallback)((function(){f(!0)}),[]),p=(0,n.useCallback)((function(){f(!1)}),[]),w=(0,n.useCallback)((function(){g(c.Z.POST+t)}),[t]);return(0,r.jsxs)("div",{className:"relative z-10 w-full h-full aspect-square cursor-pointer rounded-sm",onMouseEnter:v,onMouseLeave:p,onClick:w,children:[(0,r.jsx)("img",{src:s,className:"w-full h-full object-cover rounded-sm ".concat(h&&"brightness-75")}),h?(0,r.jsxs)("div",{className:"absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex gap-4",children:[(0,r.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,r.jsx)(o.Z,{styles:"h-6 w-6 text-white"}),(0,r.jsx)("p",{className:"text-lg font-medium text-white",children:u.length})]}),(0,r.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,r.jsx)(i,{styles:"h-6 w-6 text-white"}),(0,r.jsx)("p",{className:"text-lg font-medium text-white",children:m.length})]})]}):null]})}))},6426:function(e,s,t){t.r(s);var l=t(1413),n=t(2982),a=t(2791),c=t(6871),r=t(5018),i=t(184),o=a.memo((function(e){var s=e.posts,t=e.changePosts,o=(0,a.useMemo)((function(){return(0,n.Z)(s).reverse().map((function(e){return(0,a.createElement)(r.Z,(0,l.Z)((0,l.Z)({},e),{},{key:e.postId}))}))}),[s]);return(0,i.jsxs)(i.Fragment,{children:[0===s.length?(0,i.jsx)("div",{className:"w-full h-full flex items-center justify-center mt-8",children:(0,i.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,i.jsx)("img",{src:"/instagram-clone/images/camera.jpg",className:"w-8"}),(0,i.jsx)("p",{className:"text-3xl font-extralight",children:"No Posts Yet"})]})}):(0,i.jsx)("div",{className:"w-full grid grid-cols-3 auto-rows-fr gap-1 sm:gap-6 sm:w-3/4 lg:w-2/3 mt-2 max-w-[1000px]",children:o}),(0,i.jsx)(c.j3,{context:{posts:s,changePosts:t}})]})}));s.default=o},6302:function(e,s,t){t(2791);var l=t(184);s.Z=function(e){var s=e.styles;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})})}}}]);
//# sourceMappingURL=426.8428974e.chunk.js.map