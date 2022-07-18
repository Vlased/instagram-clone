"use strict";(self.webpackChunkinstagram_clone=self.webpackChunkinstagram_clone||[]).push([[52,213],{8213:function(e,s,t){t.r(s);var n=t(2791),r=t(184),l=n.memo((function(){return(0,r.jsxs)("div",{className:"w-[100vw] h-[100vh] py-8 flex flex-col items-center justify-between",children:[(0,r.jsx)("div",{className:"h-12"}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"../images/loading-logo.jpg",className:"h-28"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"../images/from-meta.jpg",className:"h-16"})})]})}));s.default=l},3052:function(e,s,t){t.r(s),t.d(s,{default:function(){return z}});var n=t(2791),r=t(6871),l=t(1743),a=t(4968),c=t(885),o=t(3504),i=t(7608),u=t(9110),m=t(83),f=t(2972),x=t(2736),d=t(1273),h=t(1413),p=t(5861),g=t(7757),j=t.n(g),w=t(4453),v=t(6724),N=t(9329),b=t(2810),k=t(2015),y=t(184),Z=n.memo((function(e){var s=e.closeEvent,t=(0,l.C)((function(e){return e.signedUser.user})),n=(0,l.T)(),r=function(){var e=(0,p.Z)(j().mark((function e(r){var l,a,c,o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.target.files){e.next=2;break}return e.abrupt("return");case 2:if(n((0,k.ED)(!0)),l=r.target.files[0],""===t.profileImage){e.next=8;break}return a=(0,w.iH)(N.tO,t.profileImage),e.next=8,(0,w.oq)(a);case 8:return c=(0,w.iH)(N.tO,"Images/".concat(l.name+(0,b.Z)())),e.next=11,(0,w.KV)(c,l);case 11:return e.next=13,(0,w.Jt)(c);case 13:return o=e.sent,e.next=16,(0,v.r7)((0,v.JU)(N.db,"users",t.userId),{profileImage:o});case 16:n((0,f.Cp)((0,h.Z)((0,h.Z)({},t),{},{profileImage:o}))),s(),n((0,k.ED)(!1));case 19:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),a=function(){var e=(0,p.Z)(j().mark((function e(t){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,w.iH)(N.tO,t.profileImage),e.next=3,(0,w.oq)(r);case 3:return n((0,k.ED)(!0)),e.next=6,(0,v.r7)((0,v.JU)(N.db,"users",t.userId),{profileImage:""});case 6:n((0,f.Cp)((0,h.Z)((0,h.Z)({},t),{},{profileImage:""}))),s(),n((0,k.ED)(!1));case 9:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{className:"h-full w-full flex flex-col items-center",children:[(0,y.jsx)("div",{className:"w-full h-[50px] flex mt-2 mb-1 items-start justify-center",children:(0,y.jsx)("img",{src:t.profileImage.length?t.profileImage:"../images/default-avatar-image.jpg",className:"rounded-full h-full w-[50px] object-cover"})}),(0,y.jsx)("p",{className:"font-medium text-md",children:"Synced Profile Photo"}),(0,y.jsx)("p",{className:"text-center text-gray-400 text-sm pb-2",children:"Instagram"}),(0,y.jsxs)("label",{className:"w-full h-12 border-t-2 flex items-center justify-center cursor-pointer",children:[(0,y.jsx)("input",{type:"file",accept:"image/png, image/jpg, image/jpeg",className:"hidden",onChange:function(e){return r(e)}}),(0,y.jsx)("p",{className:"text-teal-500 font-medium text-sm",children:"Upload Photo"})]}),(0,y.jsx)("button",{className:"w-full h-12 border-t-2 flex items-center justify-center text-sm",children:"Manage Sync Settings"}),t.profileImage.length?(0,y.jsx)("button",{className:"w-full h-12 border-t-2 flex items-center justify-center text-rose-600 font-medium text-sm",onClick:function(){return a(t)},children:"Remove Current Photo"}):void 0,(0,y.jsx)("button",{className:"w-full h-12 border-t-2 flex items-center justify-center text-sm",onClick:s,children:"Cancel"})]})})),I=Z,C=function(){return(0,y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,y.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})},E=t(7661),O=t(8029),S=n.memo((function(e){var s=e.isUsersPage,t=(0,r.s0)(),l=(0,r.TH)(),a=function(){var e=l.pathname.split("/");switch(e[e.length-1]){case u.Z.SAVED:return 1;case u.Z.TAGGED:return 2;default:return 0}},o=(0,n.useState)(a()),i=(0,c.Z)(o,2),m=i[0],f=i[1];return(0,n.useEffect)((function(){f(a())}),[l.pathname]),(0,y.jsxs)("nav",{className:"flex border-t justify-center items-center border-t-gray-300 gap-12 lg:gap-16 text-[12px] font-medium tracking-widest w-full sm:w-3/4 lg:w-2/3",children:[(0,y.jsxs)("button",{onClick:function(){t(u.Z.POSTS),f(0)},className:"h-12 flex items-center text-gray-400 gap-1 ".concat(0===m&&"border-t border-t-gray-900 text-black"),children:[(0,y.jsx)(C,{}),(0,y.jsx)("p",{children:"POSTS"})]}),s?(0,y.jsxs)("button",{onClick:function(){t(u.Z.SAVED),f(1)},className:"h-12 flex items-center text-gray-400 gap-1  ".concat(1===m&&"border-t border-t-gray-900 text-black"),children:[(0,y.jsx)(O.Z,{styles:"w-4 h-4",includeHovering:!1}),(0,y.jsx)("p",{children:"SAVED"})]}):null,(0,y.jsxs)("button",{onClick:function(){t(u.Z.TAGGED),f(2)},className:"h-12 flex items-center text-gray-400 gap-1 ".concat(2===m&&"border-t border-t-gray-900 text-black"),children:[(0,y.jsx)(E.Z,{styles:"w-4 h-4"}),(0,y.jsx)("p",{children:"TAGGED"})]})]})})),U=n.memo((function(){var e=(0,l.C)((function(e){return e.signedUser})),s=e.user,t=e.status,a=(0,l.T)(),h=(0,r.UO)().uid,p=(0,r.s0)(),g=(0,n.useState)(!1),j=(0,c.Z)(g,2),w=j[0],v=j[1],N=(0,n.useState)(!1),b=(0,c.Z)(N,2),k=b[0],Z=b[1];return(0,n.useEffect)((function(){a((0,f.FQ)(h))}),[h]),(0,n.useEffect)((function(){"rejected"===t&&(a((0,f.b9)()),v(!0))}),[t]),w?(0,y.jsx)(r.Fg,{to:m.Z.NOT_FOUND}):(0,y.jsxs)("div",{className:"min-h-[calc(100vh-60px)] w-screen flex flex-col items-center back",children:[(0,y.jsxs)("div",{className:"flex items-center flex-col sm:flex-row w-full sm:w-3/4 lg:w-5/6 xl:w-4/5 justify-center gap-2 pt-4 pb-3 px-1",children:[(0,y.jsx)("div",{className:"w-full sm:w-2/5 sm:h-60 flex justify-center items-center",children:(0,y.jsx)("img",{src:s.profileImage.length?s.profileImage:"images/default-avatar-gray.jpg",className:"rounded-full w-[170px] h-[170px] object-cover cursor-pointer",onClick:function(){return Z(!0)}})}),(0,y.jsxs)("div",{className:"flex flex-col w-5/6 sm:w-3/5 py-4 gap-6",children:[(0,y.jsxs)("div",{className:"flex gap-4",children:[(0,y.jsx)("p",{className:"text-3xl font-extralight",children:s.username}),(0,y.jsxs)("div",{className:"flex items-center gap-4",children:[(0,y.jsx)(o.rU,{to:m.Z.ACOUNTS+"/"+i.Z.EDIT_PROFILE,className:"p-1 border rounded font-medium text-sm tracking-wide",children:"Edit Profile"}),(0,y.jsx)("button",{children:(0,y.jsx)(x.Z,{styles:"h-7 w-7"})})]})]}),(0,y.jsxs)("div",{className:"flex gap-2 sm:gap-8",children:[(0,y.jsxs)("div",{className:"flex gap-1 items-center flex-col sm:flex-row",children:[(0,y.jsx)("p",{className:"font-medium",children:s.posts.length}),(0,y.jsx)("p",{children:"post".concat(1===s.posts.length?"":"s")})]}),(0,y.jsxs)("button",{onClick:function(e){e.stopPropagation(),p(u.Z.FOLLOWERS)},className:"flex gap-1 items-center flex-col sm:flex-row",children:[(0,y.jsx)("p",{className:"font-medium",children:s.followers.length}),(0,y.jsx)("p",{children:"follower".concat(1===s.followers.length?"":"s")})]}),(0,y.jsxs)("button",{onClick:function(e){e.stopPropagation(),p(u.Z.FOLLOWING)},className:"flex gap-1 items-center flex-col sm:flex-row",children:[(0,y.jsx)("p",{className:"font-medium",children:s.following.length}),(0,y.jsx)("p",{children:"following"})]})]}),(0,y.jsx)("p",{className:"font-medium",children:s.fullName}),(0,y.jsx)("div",{className:"flex"})]})]}),k?(0,y.jsx)(d.Z,{closeEvent:function(){return Z(!1)},styles:"top-[35%] ".concat(s.profileImage.length?"h-72":"h-60"),children:(0,y.jsx)(I,{closeEvent:function(){return Z(!1)}})}):null,(0,y.jsx)(S,{isUsersPage:!0}),(0,y.jsx)(r.j3,{})]})})),P=t(6727),F=t(2695),T=t(4140),D=t(4219),L=t(5910),M=n.memo((function(){var e=(0,l.C)((function(e){return e.userOnPage})),s=e.user,t=e.status,a=(0,l.C)((function(e){return e.signedUser.user})),o=(0,l.T)(),i=(0,r.UO)().uid,f=(0,r.s0)(),x=(0,n.useState)(!1),h=(0,c.Z)(x,2),p=h[0],g=h[1],j=(0,n.useState)(!1),w=(0,c.Z)(j,2),v=w[0],N=w[1],b=(0,P.Z)(s),k=b.addToFollowing,Z=b.removeFromFollowing,I=(0,L.Z)().createChatRoom;return(0,n.useEffect)((function(){o((0,F.rS)(i))}),[i]),(0,n.useEffect)((function(){"rejected"===t&&(o((0,F.b9)()),g(!0))}),[t]),p?(0,y.jsx)(r.Fg,{to:m.Z.NOT_FOUND}):(0,y.jsxs)("div",{className:"min-h-[calc(100vh-60px)] w-screen flex flex-col items-center back",children:[(0,y.jsxs)("div",{className:"flex items-center flex-col sm:flex-row w-full sm:w-3/4 lg:w-5/6 xl:w-4/5 justify-center gap-2 pt-4 pb-3 px-1",children:[(0,y.jsx)("div",{className:"w-full sm:w-2/5 sm:h-60 flex justify-center items-center",children:(0,y.jsx)("img",{src:s.profileImage.length?s.profileImage:"../images/default-avatar-gray.jpg",className:"rounded-full w-[170px] h-[170px] object-cover"})}),(0,y.jsxs)("div",{className:"flex flex-col w-5/6 sm:w-3/5 py-4 gap-6",children:[(0,y.jsxs)("div",{className:"flex gap-4",children:[(0,y.jsx)("p",{className:"text-3xl font-extralight",children:s.username}),(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)("button",{className:"h-7 w-20 rounded border text-sm font-medium cursor-pointer",onClick:function(e){e.stopPropagation(),I({chosenUserId:s.userId})},children:"Message"}),a.username.length?a.following.some((function(e){return e.userId===s.userId}))?(0,y.jsx)("button",{className:"h-7 w-28 rounded border text-sm font-medium cursor-pointer",onClick:function(e){e.stopPropagation(),N(!0)},children:"Following"}):(0,y.jsx)("button",{className:"h-7 w-20 bg-blue-500 font-medium text-white rounded cursor-pointer text-sm tracking-wide",onClick:function(e){e.stopPropagation(),k()},children:"Follow"}):null,(0,y.jsx)("button",{children:(0,y.jsx)(T.Z,{styles:"h-7 w-7"})})]})]}),(0,y.jsxs)("div",{className:"flex gap-2 sm:gap-8",children:[(0,y.jsxs)("div",{className:"flex gap-1 items-center flex-col sm:flex-row",children:[(0,y.jsx)("p",{className:"font-medium",children:s.posts.length}),(0,y.jsx)("p",{children:"post".concat(1===s.posts.length?"":"s")})]}),(0,y.jsxs)("button",{onClick:function(e){e.stopPropagation(),f(u.Z.FOLLOWERS)},className:"flex gap-1 items-center flex-col sm:flex-row",children:[(0,y.jsx)("p",{className:"font-medium",children:s.followers.length}),(0,y.jsx)("p",{children:"follower".concat(1===s.followers.length?"":"s")})]}),(0,y.jsxs)("button",{onClick:function(e){e.stopPropagation(),f(u.Z.FOLLOWING)},className:"flex gap-1 items-center flex-col sm:flex-row",children:[(0,y.jsx)("p",{className:"font-medium",children:s.following.length}),(0,y.jsx)("p",{children:"following"})]})]}),(0,y.jsx)("p",{className:"font-medium",children:s.fullName}),(0,y.jsx)("div",{className:"flex"})]})]}),v?(0,y.jsx)(d.Z,{closeEvent:function(){return N(!1)},styles:"h-72 top-[26.5%]",children:(0,y.jsx)(D.Z,{areYouSureEvent:function(){N(!1),Z()},profileImage:s.profileImage,closeEvent:function(){return N(!1)},questionText:"Unfollow @".concat(s.username),buttonText:"Unfollow"})}):null,(0,y.jsx)(S,{isUsersPage:!1}),(0,y.jsx)(r.j3,{})]})})),G=t(8213),z=n.memo((function(){var e=(0,r.UO)().uid,s=(0,l.C)((function(e){return e.signedUser.user}));return s.userId.length?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{}),s.userId===e?(0,y.jsx)(U,{}):(0,y.jsx)(M,{})]}):(0,y.jsx)(G.default,{})}))},4140:function(e,s,t){t(2791);var n=t(184);s.Z=function(e){var s=e.styles;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})})}}}]);
//# sourceMappingURL=52.165f82c4.chunk.js.map