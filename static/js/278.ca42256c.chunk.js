"use strict";(self.webpackChunkinstagram_clone=self.webpackChunkinstagram_clone||[]).push([[278],{9431:function(e,s){s.Z=function(e,s){return Math.floor(Math.random()*(s-e))+e}},3278:function(e,s,t){t.r(s),t.d(s,{default:function(){return L}});var n=t(2791),r=t(3073),l=t(1413),a=t(9688),c=t(83),o=t(2982),i=t(5861),u=t(885),d=t(7757),f=t.n(d),m=t(9329),x=t(6724),h=t(9431),p=t(1743),g=function(e){var s=(0,p.C)((function(e){return e.signedUser.user})),t=(0,n.useState)([]),r=(0,u.Z)(t,2),l=r[0],a=r[1];return(0,n.useEffect)((function(){var t=function(){var t=(0,i.Z)(f().mark((function t(){var n,r,l,c,i,u;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,x.hJ)(m.db,"users"),r=(0,x.IO)(n,(0,x.ar)("username",">=","")),t.next=4,(0,x.PL)(r);case 4:l=t.sent,c=[],i=0,u=function(){var t=(0,h.Z)(0,l.docs.length),n=l.docs[t].data(),r=c.some((function(e){return e.userId===n.userId})),u=s.following.some((function(e){return e.userId===n.userId})),d=n.userId===s.userId;if(r||u||d||(a((function(e){return[].concat((0,o.Z)(e),[n])})),c=[].concat((0,o.Z)(c),[n])),i>1e3*e)return"break";i++};case 8:if(c.length===e){t.next=14;break}if("break"!==u()){t.next=12;break}return t.abrupt("break",14);case 12:t.next=8;break;case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),l},j=t(3504),w=t(6871),b=t(1273),v=t(4219),I=t(349),k=t(4285),N=t(184),y=n.memo((function(e){var s=e.profileImage,t=e.username,r=e.fullName,l=e.userId,a=e.isFollowing,o=(0,p.C)((function(e){return e.signedUser.user})),i=(0,p.T)(),d=(0,w.s0)(),f=(0,w.UO)().uid,m=(0,n.useState)(!1),x=(0,u.Z)(m,2),h=x[0],g=x[1],j=(0,n.useCallback)((function(e){e.stopPropagation(),i((0,I.Z)({userId:l,uid:f}))}),[l,f]),y=(0,n.useCallback)((function(e){e.stopPropagation(),g(!0)}),[]),Z=(0,n.useCallback)((function(){g(!1),i((0,k.Z)({userId:l,uid:f}))}),[l,f]),C=(0,n.useCallback)((function(){d(c.Z.DASHBOARD+l)}),[l]),S=(0,n.useCallback)((function(){g(!1)}),[]);return(0,N.jsxs)("div",{className:"flex w-full h-8 mb-1 justify-between items-center my-[4px]",children:[(0,N.jsxs)("button",{className:"w-full h-full py-[0.5px] gap-2 flex items-center",onClick:C,children:[(0,N.jsx)("img",{src:s.length?s:"/instagram-clone/images/default-avatar-gray.jpg",className:"h-8 w-8 rounded-full object-cover"}),(0,N.jsxs)("div",{className:"flex flex-col items-start",children:[(0,N.jsx)("p",{className:"font-medium text-sm tracking-wide whitespace-nowrap",children:t}),(0,N.jsx)("p",{className:"text-gray-400 text-sm whitespace-nowrap",children:a?"Follows you":r})]})]}),o.following.some((function(e){return e.userId===l}))?(0,N.jsx)("button",{className:"rounded text-gray-800 text-sm font-medium cursor-pointer",onClick:y,children:"Following"}):(0,N.jsx)("button",{className:"font-medium text-cyan-500 rounded cursor-pointer text-sm tracking-wide",onClick:j,children:"Follow"}),h?(0,N.jsx)(b.Z,{closeEvent:S,styles:"h-72 top-[26.5%]",children:(0,N.jsx)(v.Z,{areYouSureEvent:Z,profileImage:s,closeEvent:S,questionText:"Unfollow ".concat(t),buttonText:"Unfollow"})}):null]})})),Z=n.memo((function(){var e=(0,p.C)((function(e){return e.signedUser.user})),s=(0,w.s0)(),t=g(5),r=(0,n.useCallback)((function(){for(var e=[],s=0;s<5;s++)e.push((0,N.jsx)(a.Z,{imageStyles:{width:32,height:32,borderRadius:"50%"},firstTextStyles:{width:120,height:7,borderRadius:"10px"},secondTextStyles:{width:80,height:7,borderRadius:"10px"},margin:"ml-[-13px]"},s));return e}),[]),o=(0,n.useMemo)((function(){return t.map((function(s){return(0,n.createElement)(y,(0,l.Z)((0,l.Z)({},s),{},{key:s.userId+"suggestion",isFollowing:s.following.some((function(s){return s.userId===e.userId}))}))}))}),[t]),i=(0,n.useCallback)((function(){s(c.Z.DASHBOARD+e.userId)}),[e.userId]);return(0,N.jsxs)("aside",{className:"flex flex-col gap-4 w-[325px]",children:[(0,N.jsxs)("div",{className:"flex w-full h-13 mb-1 px-3 justify-between items-center my-[4px]",children:[(0,N.jsxs)("button",{className:"w-full h-full py-[0.5px] gap-2 flex items-center",onClick:i,children:[(0,N.jsx)("img",{src:e.profileImage.length?e.profileImage:"/instagram-clone/images/default-avatar-gray.jpg",className:"h-11 w-11 rounded-full object-cover"}),(0,N.jsxs)("div",{className:"flex flex-col items-start",children:[(0,N.jsx)("p",{className:"font-medium text-sm tracking-wide whitespace-nowrap",children:e.username}),(0,N.jsx)("p",{className:"text-gray-400 text-sm whitespace-nowrap",children:e.fullName})]})]}),(0,N.jsx)("button",{className:"h-7 rounded text-cyan-500 text-sm font-medium cursor-pointer",children:"Switch"})]}),(0,N.jsxs)("div",{className:"flex w-full justify-between px-3",children:[(0,N.jsx)("p",{className:"text-gray-500 font-medium text-sm",children:"Suggestions For You"}),(0,N.jsx)(j.rU,{className:"text-sm font-medium",to:c.Z.PEOPLE,children:"See All"})]}),(0,N.jsx)("div",{className:"flex flex-col gap-2 px-3",children:0!==o.length?o:r()}),(0,N.jsxs)("div",{className:"flex flex-col gap-4 text-xs text-gray-300 px-3",children:[(0,N.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,N.jsx)("p",{children:"About"}),(0,N.jsx)("p",{children:"Help"}),(0,N.jsx)("p",{children:"Press"}),(0,N.jsx)("p",{children:"API"}),(0,N.jsx)("p",{children:"Jobs"}),(0,N.jsx)("p",{children:"Privacy"}),(0,N.jsx)("p",{children:"Terms"}),(0,N.jsx)("p",{children:"Location"}),(0,N.jsx)("p",{children:"Language"})]}),(0,N.jsx)("p",{className:"text-xs text-gray-300",children:"\xa9 2022 INSTAGRAM FROM META"})]})]})})),C=t(7018),S=function(e){var s=(0,p.C)((function(e){return e.signedUser.user})),t=(0,n.useState)(null),r=(0,u.Z)(t,2),l=r[0],a=r[1];return(0,n.useEffect)((function(){var t=function(){var t=(0,i.Z)(f().mark((function t(){var n,r,l,c,o,i;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,x.hJ)(m.db,"users"),r=(0,x.IO)(n,(0,x.ar)("userId","in",s.following.map((function(e){return e.userId})))),t.next=4,(0,x.PL)(r);case 4:l=t.sent,c=l.docs.map((function(e){return e.data()})),o=c.reduce((function(e,s){return s.posts.forEach((function(s){return e.push(s)})),e}),[]),i=o.sort((function(e,s){return s.createdAt-e.createdAt})).slice(0,e),a(i);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();s.following.length?t():a([])}),[]),{postsToRender:l,setPostsToRender:a}},A=t(2659),P=t(1518),R=t(5427),T=t(9110),E=t(4965),O=t(4140),U=t(2447),D=n.memo((function(e){var s=e.closeEvent,t=e.post,r=(0,p.T)(),l=(0,w.s0)(),a=(0,w.UO)().uid,o=(0,n.useState)(!1),i=(0,u.Z)(o,2),d=i[0],f=i[1],m=(0,n.useCallback)((function(){r((0,k.Z)({userId:t.fromId,uid:a})),s()}),[t.fromId,a]),x=(0,n.useCallback)((function(){navigator.clipboard.writeText(window.location.origin+"/instagram-clone#"+c.Z.DASHBOARD+t.fromId+"/"+T.Z.POST+t.postId),s()}),[window.location.origin,t.fromId,t.postId]),h=(0,n.useCallback)((function(){l(c.Z.DASHBOARD+t.fromId+"/"+T.Z.POST+t.postId)}),[t.fromId,t.postId]),g=(0,n.useCallback)((function(){f(!0)}),[]),j=(0,n.useCallback)((function(){f(!1)}),[]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"h-full w-full flex flex-col items-center",children:[(0,N.jsx)("button",{className:"w-full active:bg-gray-300 h-12 flex items-center justify-center text-rose-600 font-medium text-sm rounded-t-xl",onClick:m,children:"Unfollow"}),(0,N.jsx)("button",{className:"w-full active:bg-gray-300 h-12 border-t-2 flex items-center justify-center text-sm",onClick:h,children:"Go to post"}),(0,N.jsx)("button",{className:"w-full active:bg-gray-300 h-12 border-t-2 flex items-center justify-center text-sm",onClick:g,children:"Share to"}),(0,N.jsx)("button",{className:"w-full active:bg-gray-300 h-12 border-t-2 flex items-center justify-center text-sm",onClick:x,children:"Copy link"}),(0,N.jsx)("button",{className:"w-full active:bg-gray-300 h-12 border-t-2 flex items-center justify-center text-sm rounded-b-xl",onClick:s,children:"Cancel"})]}),d?(0,N.jsx)(b.Z,{closeEvent:j,styles:"h-[450px] top-[20%]",children:(0,N.jsx)(U.Z,{closeEvent:j,currentPost:t})}):null]})})),M=n.memo((function(e){var s=e.userInfo,t=e.post,r=(0,w.s0)(),l=(0,n.useState)(!1),o=(0,u.Z)(l,2),i=o[0],d=o[1],f=(0,n.useCallback)((function(){r(c.Z.DASHBOARD+s.userId)}),[s.userId]),m=(0,n.useCallback)((function(){d(!0)}),[]),x=(0,n.useCallback)((function(){d(!1)}),[]);return(0,N.jsxs)("div",{className:"w-full flex justify-between border-b items-center",children:[s.userId.length?(0,N.jsxs)("button",{className:"h-14 py-[0.5px] gap-4 flex items-center px-3",onClick:f,children:[(0,N.jsx)("img",{src:s.profileImage.length?s.profileImage:"/instagram-clone/images/default-avatar-image.jpg",className:"h-9 w-9 rounded-full object-cover"}),(0,N.jsx)("p",{className:"font-medium text-[14px] tracking-wide whitespace-nowrap",children:s.username})]}):(0,N.jsx)(a.Z,{imageStyles:{width:36,height:36,borderRadius:"50%"},firstTextStyles:{width:100,height:7,borderRadius:"10px"},secondTextStyles:{width:80,height:7,borderRadius:"10px"},margin:"my-1"}),(0,N.jsx)("button",{className:"mr-4",onClick:m,children:(0,N.jsx)(O.Z,{styles:"h-5 w-5"})}),i?(0,N.jsx)(b.Z,{closeEvent:x,styles:"top-[35%] h-60",children:(0,N.jsx)(D,{closeEvent:x,post:t})}):null]})})),F=n.memo((function(e){var s=e.currentPost,t=e.changePosts,r=(0,p.C)((function(e){return e.signedUser.user})),a=(0,n.useRef)(null),i=(0,n.useState)(""),d=(0,u.Z)(i,2),f=d[0],m=d[1],x=(0,E.Z)(s.fromId),h=(0,n.useCallback)((function(){return t((function(e){return e.map((function(e){return e.postId===s.postId?(0,l.Z)((0,l.Z)({},e),{},{likes:[].concat((0,o.Z)(e.likes),[{userId:r.userId}])}):e}))}))}),[s.postId,r.userId]),g=(0,n.useCallback)((function(){return t((function(e){return e.map((function(e){return e.postId===s.postId?(0,l.Z)((0,l.Z)({},e),{},{likes:e.likes.filter((function(e){return e.userId!==r.userId}))}):e}))}))}),[s.postId,r.userId]),w=(0,n.useCallback)((function(){var e=s.comments.length;return"View all ".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," comment").concat(1===e?"":"s")}),[s.comments.length]);return(0,N.jsxs)("article",{className:"w-full h-full flex flex-col bg-white border rounded-xl",children:[(0,N.jsx)(M,{userInfo:x,post:s}),(0,N.jsx)("div",{className:"w-full bg-black h-[400px] flex items-center justify-center",children:(0,N.jsx)("img",{src:s.postImage,className:"h-full w-full object-contain"})}),(0,N.jsx)(R.Z,{currentPost:s,commentsRef:a,changePostsAdd:h,changePostsRemove:g}),(0,N.jsxs)("div",{className:"w-full flex flex-col px-3 items-start",children:[(0,N.jsxs)("p",{className:"break-words mx-1",children:[(0,N.jsx)(j.rU,{className:"font-medium text-sm",to:c.Z.DASHBOARD+x.userId,children:x.username}),(0,N.jsxs)("span",{className:"text-sm",children:[" ",s.text]})]}),(0,N.jsx)(j.rU,{className:"pl-1",to:c.Z.DASHBOARD+T.Z.POST+s.postId,children:(0,N.jsx)("p",{className:"text-sm text-gray-400 mt-1 tracking-wide",children:w()})})]}),(0,N.jsx)(A.Z,{createdAt:s.createdAt}),(0,N.jsx)(P.Z,{wordEntering:f,setWordEntering:m,commentsRef:a,currentPost:s,changePosts:t})]})})),B=n.memo((function(){var e=(0,C.Z)(),s=S(20),t=s.postsToRender,r=s.setPostsToRender,l=(0,n.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e){return(0,N.jsx)(F,{currentPost:e,changePosts:r},e.postId+e.fromId)}))}),[t]);return(0,N.jsx)("div",{className:"flex ".concat(null!==t&&0===t.length?"hidden":""),children:t?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{children:(0,N.jsxs)("div",{className:"flex flex-col items-center gap-4 ".concat(e>500?"w-[470px]":"w-full"),children:[l,(0,N.jsxs)("div",{className:"w-full flex flex-col items-center mt-8 mb-14",children:[(0,N.jsx)("img",{src:"/instagram-clone/images/done.jpg",className:"w-16"}),(0,N.jsx)("p",{className:"text-lg",children:"You're all caught up"}),(0,N.jsx)("p",{className:"text-sm text-gray-400",children:"You've seen all new posts from the past days"})]})]})}),(0,N.jsx)(w.j3,{context:{posts:(0,o.Z)(t).reverse(),changePosts:r}})]}):(0,N.jsx)("div",{className:"h-32 ".concat(e>500?"w-[470px]":"w-full"," flex items-center justify-center"),children:(0,N.jsx)("div",{style:{borderTopColor:"transparent"},className:"w-16 h-16 border-4 border-gray-700 border-dashed rounded-full animate-spin"})})})})),H=t(8213),L=n.memo((function(){var e=(0,p.C)((function(e){return e.signedUser.user})),s=(0,C.Z)();return m.I8.currentUser?e.userId.length?(0,N.jsxs)("div",{className:"bg-[#f7f7f7] overflow-hidden overflow-y-auto flex flex-col items-center",children:[(0,N.jsx)(r.Z,{}),(0,N.jsxs)("div",{className:"min-h-[calc(100vh-60px)] w-[100%] flex justify-center bg-[#f7f7f7] pt-6 gap-6",children:[(0,N.jsx)(B,{}),s>950?(0,N.jsx)(Z,{}):null]})]}):(0,N.jsx)(H.Z,{}):(0,N.jsx)(w.Fg,{to:c.Z.LOGIN})}))},4140:function(e,s,t){t(2791);var n=t(184);s.Z=function(e){var s=e.styles;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})})}}}]);
//# sourceMappingURL=278.ca42256c.chunk.js.map