webpackJsonp([0],{560:function(n,l,u){"use strict";function t(n){return o._30(0,[o._22(0,B.e,[o.u]),(n()(),o._7(0,null,null,10,"div",[["class","text"]],null,null,null,null,null)),o._5(278528,null,0,B.i,[o.s,o.t,o.k,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._23({"sender-background":0}),(n()(),o._28(null,["\n  "])),(n()(),o._7(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o._28(null,["",""])),(n()(),o._28(null,["\n  "])),(n()(),o._7(0,null,null,2,"p",[["class","timestamp"]],null,null,null,null,null)),(n()(),o._28(null,["",""])),o._24(2),(n()(),o._28(null,["\n"])),(n()(),o._28(null,["\n"]))],function(n,l){n(l,2,0,"text",n(l,3,0,l.component.isFromSender))},function(n,l){var u=l.component;n(l,6,0,u.message.text),n(l,9,0,o._29(l,9,0,n(l,10,0,o._21(l,0),u.message.timestamp,"dd/MM/y HH:mm")))})}function e(n){return o._30(0,[(n()(),o._7(0,null,null,1,"message-box",[],[[4,"justify-content",null],[4,"text-align",null]],null,null,t,U)),o._5(49152,null,0,E.a,[],{message:[0,"message"],isFromSender:[1,"isFromSender"]},null)],function(n,l){var u=l.component;n(l,1,0,l.context.$implicit,l.context.$implicit.userId===u.sender.$key)},function(n,l){n(l,0,0,o._21(l,1).isFromSender?"flex-end":"flex-start",o._21(l,1).isFromSender?"right":"left")})}function a(n){return o._30(0,[o._26(402653184,1,{content:0}),(n()(),o._7(0,null,null,5,"ion-header",[],null,null,null,null,null)),o._5(16384,null,0,V.a,[z.a,o.k,o.F,[2,H.a]],null,null),(n()(),o._28(null,["\n\n  "])),(n()(),o._7(0,null,null,1,"custom-logged-header",[],null,null,null,A.b,A.a)),o._5(114688,null,0,K.a,[J.a,c.a,N.a,R.a],{title:[0,"title"],user:[1,"user"]},null),(n()(),o._28(null,["\n\n"])),(n()(),o._28(null,["\n\n"])),(n()(),o._7(0,null,null,6,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],[["window","resize"]],function(n,l,u){var t=!0;return"window:resize"===l&&(t=!1!==o._21(n,9).resize()&&t),t},Z.b,Z.a)),o._5(4374528,[[1,4]],0,q.a,[z.a,G.a,Q.a,o.k,o.F,N.a,W.a,o.y,[2,H.a],[2,X.a]],null,null),(n()(),o._28(1,["\n  "])),(n()(),o._1(16777216,null,1,2,null,e)),o._5(802816,null,0,B.j,[o.P,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),o._22(131072,B.b,[o.g]),(n()(),o._28(1,["\n"])),(n()(),o._28(null,["\n\n"])),(n()(),o._7(0,null,null,27,"ion-footer",[],null,null,null,null,null)),o._5(16384,null,0,Y.a,[z.a,o.k,o.F,[2,H.a]],null,null),(n()(),o._28(null,["\n  "])),(n()(),o._7(0,null,null,23,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,nn.b,nn.a)),o._5(49152,null,0,ln.a,[z.a,o.k,o.F],null,null),(n()(),o._28(3,["\n    "])),(n()(),o._7(0,null,3,19,"ion-item",[["class","item item-block"],["no-lines",""]],null,null,null,un.b,un.a)),o._5(1097728,null,3,tn.a,[en.a,z.a,o.k,o.F,[2,an.a]],null,null),o._26(335544320,2,{contentLabel:0}),o._26(603979776,3,{_buttons:1}),o._26(603979776,4,{_icons:1}),o._5(16384,null,0,on.a,[],null,null),(n()(),o._28(2,["\n      "])),(n()(),o._7(0,null,3,4,"ion-input",[["placeholder","Message..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ngModelChange"]],function(n,l,u){var t=!0,e=n.component;return"keyup.enter"===l&&(e.sendMessage(e.newMessage),t=!1!==(e.newMessage="")&&t),"ngModelChange"===l&&(t=!1!==(e.newMessage=u)&&t),t},sn.b,sn.a)),o._5(671744,null,0,cn.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),o._25(2048,null,cn.j,null,[cn.n]),o._5(16384,null,0,cn.k,[cn.j],null,null),o._5(5423104,null,0,rn.a,[z.a,G.a,en.a,N.a,o.k,o.F,[2,q.a],[2,tn.a],[2,cn.j],Q.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(n()(),o._28(2,["\n      "])),(n()(),o._7(0,null,4,5,"button",[["ion-button",""],["item-right",""]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;return"click"===l&&(e.sendMessage(e.newMessage),t=!1!==(e.newMessage="")&&t),t},_n.b,_n.a)),o._5(1097728,[[3,4]],0,dn.a,[[8,""],z.a,o.k,o.F],null,null),(n()(),o._28(0,["\n        "])),(n()(),o._7(0,null,0,1,"ion-icon",[["name","send"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._5(147456,null,0,pn.a,[z.a,o.k,o.F],{name:[0,"name"]},null),(n()(),o._28(0,["\n      "])),(n()(),o._28(2,["\n    "])),(n()(),o._28(3,["\n  "])),(n()(),o._28(null,["\n"])),(n()(),o._28(null,["\n"]))],function(n,l){var u=l.component;n(l,5,0,u.pageTitle,u.recipient),n(l,12,0,o._29(l,12,0,o._21(l,13).transform(u.messages))),n(l,30,0,u.newMessage);n(l,33,0,"text","Message...");n(l,39,0,"send")},function(n,l){n(l,8,0,o._21(l,9).statusbarPadding,o._21(l,9)._hasRefresher),n(l,19,0,o._21(l,20)._sbPadding),n(l,29,0,o._21(l,32).ngClassUntouched,o._21(l,32).ngClassTouched,o._21(l,32).ngClassPristine,o._21(l,32).ngClassDirty,o._21(l,32).ngClassValid,o._21(l,32).ngClassInvalid,o._21(l,32).ngClassPending),n(l,38,0,o._21(l,39)._hidden)})}Object.defineProperty(l,"__esModule",{value:!0});var o=u(2),s=u(0),i=u(61),c=u(49),r=u(278),_=u(168),d=u(82),p=u(172),g=u(83),b=u.n(g),m=(u(170),function(){function n(n,l,u,t,e,a){this.navCtrl=n,this.navParams=l,this.authService=u,this.userService=t,this.messageService=e,this.chatService=a}return n.prototype.ionViewCanEnter=function(){return this.authService.authenticated},n.prototype.ionViewDidLoad=function(){var n=this;this.recipient=this.navParams.get("recipientUser"),this.pageTitle=this.recipient.name,this.userService.currentUser.first().subscribe(function(l){n.sender=l,n.chat1=n.chatService.getDeepChat(n.sender.$key,n.recipient.$key),n.chat2=n.chatService.getDeepChat(n.recipient.$key,n.sender.$key),n.recipient.photo&&n.chat1.first().subscribe(function(l){n.chatService.updatePhoto(n.chat1,l.photo,n.recipient.photo)});var u=function(){n.messages.subscribe(function(l){n.scrollToBottom()})};n.messages=n.messageService.getMessages(n.sender.$key,n.recipient.$key),n.messages.first().subscribe(function(l){0==l.length?(n.messages=n.messageService.getMessages(n.recipient.$key,n.sender.$key),u()):u()})})},n.prototype.sendMessage=function(n){var l=this;if(n){var u=b.a.database.ServerValue.TIMESTAMP;this.messageService.create(new r.a(this.sender.$key,n,u),this.messages).then(function(){l.chat1.update({lastMessage:n,timestamp:u}),l.chat2.update({lastMessage:n,timestamp:u})})}},n.prototype.scrollToBottom=function(n){var l=this;setTimeout(function(){l.content&&l.content.scrollToBottom(n||300)},50)},n}());Object(s.__decorate)([Object(o.O)(i.c),Object(s.__metadata)("design:type","function"==typeof(f=void 0!==i.c&&i.c)&&f||Object)],m.prototype,"content",void 0),m=Object(s.__decorate)([Object(o.i)({selector:"page-chat",templateUrl:"chat.html"}),Object(s.__metadata)("design:paramtypes",["function"==typeof(k=void 0!==i.j&&i.j)&&k||Object,"function"==typeof(h=void 0!==i.k&&i.k)&&h||Object,"function"==typeof(v=void 0!==c.a&&c.a)&&v||Object,"function"==typeof(y=void 0!==d.a&&d.a)&&y||Object,"function"==typeof(F=void 0!==p.a&&p.a)&&F||Object,"function"==typeof(x=void 0!==_.a&&_.a)&&x||Object])],m);var f,k,h,v,y,F,x,C=u(165),j=function(){return function(){}}();j=Object(s.__decorate)([Object(o.v)({declarations:[m],imports:[i.g.forChild(m),C.a]})],j);var w=u(266),I=u(267),S=u(268),M=u(269),O=u(270),T=u(271),P=u(272),$=u(273),L=u(274),B=u(23),E=u(276),D=[],U=o._4({encapsulation:2,styles:D,data:{}}),V=(o._2("message-box",E.a,function(n){return o._30(0,[(n()(),o._7(0,null,null,1,"message-box",[],[[4,"justify-content",null],[4,"text-align",null]],null,null,t,U)),o._5(49152,null,0,E.a,[],null,null)],null,function(n,l){n(l,0,0,o._21(l,1).isFromSender?"flex-end":"flex-start",o._21(l,1).isFromSender?"right":"left")})},{message:"message",isFromSender:"isFromSender"},{},[]),u(166)),z=u(3),H=u(7),A=u(568),K=u(265),J=u(62),N=u(12),R=u(31),Z=u(275),q=u(30),G=u(6),Q=u(13),W=u(32),X=u(28),Y=u(174),nn=u(569),ln=u(80),un=u(164),tn=u(24),en=u(21),an=u(54),on=u(81),sn=u(567),cn=u(27),rn=u(163),_n=u(59),dn=u(29),pn=u(53),gn=u(15),bn=[],mn=o._4({encapsulation:2,styles:bn,data:{}}),fn=o._2("page-chat",m,function(n){return o._30(0,[(n()(),o._7(0,null,null,1,"page-chat",[],null,null,null,a,mn)),o._5(49152,null,0,m,[X.a,gn.a,c.a,d.a,p.a,_.a],null,null)],null,null)},{},{},[]),kn=u(167),hn=u(55);u.d(l,"ChatPageModuleNgFactory",function(){return vn});var vn=o._3(j,[],function(n){return o._18([o._19(512,o.j,o.Z,[[8,[w.a,I.a,S.a,M.a,O.a,T.a,P.a,$.a,L.a,fn]],[3,o.j],o.w]),o._19(4608,B.m,B.l,[o.u]),o._19(4608,cn.t,cn.t,[]),o._19(4608,cn.d,cn.d,[]),o._19(512,B.c,B.c,[]),o._19(512,cn.r,cn.r,[]),o._19(512,cn.g,cn.g,[]),o._19(512,cn.o,cn.o,[]),o._19(512,kn.a,kn.a,[]),o._19(512,kn.b,kn.b,[]),o._19(512,C.a,C.a,[]),o._19(512,j,j,[]),o._19(256,hn.a,m,[])])})},565:function(n,l,u){"use strict";function t(n){return e._30(0,[(n()(),e._7(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),e._5(278528,null,0,a.i,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),e._7(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var t=!0,e=n.component;return"click"===l&&(t=!1!==e.backButtonClick(u)&&t),t},o.b,o.a)),e._5(278528,null,0,a.i,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._5(1097728,null,0,s.a,[[8,"bar-button"],i.a,e.k,e.F],null,null),(n()(),e._7(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._5(278528,null,0,a.i,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._5(147456,null,0,c.a,[i.a,e.k,e.F],{name:[0,"name"]},null),(n()(),e._7(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),e._5(278528,null,0,a.i,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),e._28(null,["",""])),e._20(null,0),e._20(null,1),e._20(null,2),(n()(),e._7(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),e._5(278528,null,0,a.i,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._20(null,3)],function(n,l){var u=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+u._mode);n(l,3,0,"back-button","back-button-"+u._mode);n(l,6,0,"back-button-icon","back-button-icon-"+u._mode),n(l,7,0,u._bbIcon);n(l,9,0,"back-button-text","back-button-text-"+u._mode);n(l,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(n,l){var u=l.component;n(l,2,0,u._hideBb),n(l,5,0,e._21(l,7)._hidden),n(l,10,0,u._backText)})}u.d(l,"a",function(){return _}),l.b=t;var e=u(2),a=u(23),o=(u(60),u(59)),s=u(29),i=u(3),c=u(53),r=(u(12),u(7),u(28),[]),_=e._4({encapsulation:2,styles:r,data:{}})},566:function(n,l,u){"use strict";function t(n){return e._30(2,[(n()(),e._7(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),e._5(278528,null,0,a.i,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._20(null,0)],function(n,l){n(l,1,0,"toolbar-title","toolbar-title-"+l.component._mode)},null)}u.d(l,"a",function(){return s}),l.b=t;var e=u(2),a=u(23),o=(u(162),u(3),u(80),u(60),[]),s=e._4({encapsulation:2,styles:o,data:{}})},567:function(n,l,u){"use strict";function t(n){return i._30(0,[(n()(),i._7(0,[[1,0],["textInput",1]],null,1,"input",[["class","text-input"]],[[8,"type",0],[1,"aria-labelledby",0],[1,"min",0],[1,"max",0],[1,"step",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(n,l,u){var t=!0,e=n.component;return"input"===l&&(t=!1!==e.onInput(u)&&t),"blur"===l&&(t=!1!==e.onBlur(u)&&t),"focus"===l&&(t=!1!==e.onFocus(u)&&t),"keydown"===l&&(t=!1!==e.onKeydown(u)&&t),t},null,null)),i._5(278528,null,0,c.i,[i.s,i.t,i.k,i.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,l){n(l,1,0,"text-input","text-input-"+l.component._mode)},function(n,l){var u=l.component;n(l,0,0,u._type,u._labelId,u.min,u.max,u.step,u.autocomplete,u.autocorrect,u.placeholder,u._disabled,u._readonly)})}function e(n){return i._30(0,[(n()(),i._7(0,[[1,0],["textInput",1]],null,1,"textarea",[["class","text-input"]],[[1,"aria-labelledby",0],[1,"autocomplete",0],[1,"autocorrect",0],[8,"placeholder",0],[8,"disabled",0],[8,"readOnly",0]],[[null,"input"],[null,"blur"],[null,"focus"],[null,"keydown"]],function(n,l,u){var t=!0,e=n.component;return"input"===l&&(t=!1!==e.onInput(u)&&t),"blur"===l&&(t=!1!==e.onBlur(u)&&t),"focus"===l&&(t=!1!==e.onFocus(u)&&t),"keydown"===l&&(t=!1!==e.onKeydown(u)&&t),t},null,null)),i._5(278528,null,0,c.i,[i.s,i.t,i.k,i.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,l){n(l,1,0,"text-input","text-input-"+l.component._mode)},function(n,l){var u=l.component;n(l,0,0,u._labelId,u.autocomplete,u.autocorrect,u.placeholder,u._disabled,u._readonly)})}function a(n){return i._30(0,[(n()(),i._7(0,null,null,1,"button",[["class","text-input-clear-icon"],["clear",""],["ion-button",""],["tabindex","-1"],["type","button"]],null,[[null,"click"],[null,"mousedown"]],function(n,l,u){var t=!0,e=n.component;return"click"===l&&(t=!1!==e.clearTextInput(u)&&t),"mousedown"===l&&(t=!1!==e.clearTextInput(u)&&t),t},r.b,r.a)),i._5(1097728,null,0,_.a,[[8,""],d.a,i.k,i.F],{clear:[0,"clear"]},null)],function(n,l){n(l,1,0,"")},null)}function o(n){return i._30(0,[(n()(),i._7(0,null,null,0,"div",[["class","input-cover"]],null,[[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,l,u){var t=!0,e=n.component;return"touchstart"===l&&(t=!1!==e._pointerStart(u)&&t),"touchend"===l&&(t=!1!==e._pointerEnd(u)&&t),"mousedown"===l&&(t=!1!==e._pointerStart(u)&&t),"mouseup"===l&&(t=!1!==e._pointerEnd(u)&&t),t},null,null))],null,null)}function s(n){return i._30(2,[i._26(671088640,1,{_native:0}),(n()(),i._1(16777216,null,null,1,null,t)),i._5(16384,null,0,c.k,[i.P,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i._1(16777216,null,null,1,null,e)),i._5(16384,null,0,c.k,[i.P,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i._1(16777216,null,null,1,null,a)),i._5(16384,null,0,c.k,[i.P,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i._1(16777216,null,null,1,null,o)),i._5(16384,null,0,c.k,[i.P,i.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,2,0,!u._isTextarea),n(l,4,0,u._isTextarea),n(l,6,0,u._clearInput),n(l,8,0,u._useAssist)},null)}u.d(l,"a",function(){return g}),l.b=s;var i=u(2),c=u(23),r=u(59),_=u(29),d=u(3),p=(u(163),u(6),u(21),u(12),u(30),u(24),u(27),u(13),[]),g=i._4({encapsulation:2,styles:p,data:{}})},568:function(n,l,u){"use strict";function t(n){return o._30(0,[(n()(),o._7(0,null,null,12,"ion-item",[["class","item item-block"],["color","transparent"],["detail-none",""],["no-lines",""]],null,null,null,s.b,s.a)),o._5(1097728,null,3,i.a,[c.a,r.a,o.k,o.F,[2,_.a]],{color:[0,"color"]},null),o._26(335544320,2,{contentLabel:0}),o._26(603979776,3,{_buttons:1}),o._26(603979776,4,{_icons:1}),o._5(16384,null,0,d.a,[],null,null),(n()(),o._28(2,["\n      "])),(n()(),o._7(0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),o._5(16384,null,0,p.a,[],null,null),(n()(),o._28(null,["\n        "])),(n()(),o._7(0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o._28(null,["\n      "])),(n()(),o._28(2,["\n      ","\n    "]))],function(n,l){n(l,1,0,"transparent")},function(n,l){var u=l.component;n(l,10,0,u.user.photo||"assets/images/no-photo.jpg"),n(l,12,0,u.title)})}function e(n){return o._30(0,[(n()(),o._28(null,["\n      ","\n    "]))],null,function(n,l){n(l,0,0,l.component.title)})}function a(n){return o._30(0,[(n()(),o._7(0,null,null,33,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,g.b,g.a)),o._5(49152,null,0,b.a,[m.a,[2,f.a],[2,k.a],r.a,o.k,o.F],null,null),(n()(),o._28(3,["\n\n  "])),(n()(),o._7(0,null,0,8,"button",[["ion-button",""],["menuToggle","user-menu"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==o._21(n,5).toggle()&&t),t},h.b,h.a)),o._5(1097728,[[1,4]],0,v.a,[[8,""],r.a,o.k,o.F],null,null),o._5(1064960,null,0,y.a,[F.a,[2,f.a],[2,v.a],[2,b.a]],{menuToggle:[0,"menuToggle"]},null),o._5(16384,null,1,x.a,[r.a,o.k,o.F,[2,C.a],[2,b.a]],null,null),o._26(603979776,1,{_buttons:1}),(n()(),o._28(0,["\n    "])),(n()(),o._7(0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._5(147456,null,0,j.a,[r.a,o.k,o.F],{name:[0,"name"]},null),(n()(),o._28(0,["\n  "])),(n()(),o._28(3,["\n\n  "])),(n()(),o._7(0,null,3,7,"ion-title",[],null,null,null,w.b,w.a)),o._5(49152,null,0,I.a,[r.a,o.k,o.F,[2,C.a],[2,b.a]],null,null),(n()(),o._28(0,["\n\n    "])),(n()(),o._1(16777216,null,0,1,null,t)),o._5(16384,null,0,S.k,[o.P,o.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),o._28(0,["\n\n    "])),(n()(),o._1(0,[["titleTemplate",2]],0,0,null,e)),(n()(),o._28(0,["\n\n  "])),(n()(),o._28(3,["\n\n  "])),(n()(),o._7(0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),o._5(16384,null,1,x.a,[r.a,o.k,o.F,[2,C.a],[2,b.a]],null,null),o._26(603979776,5,{_buttons:1}),(n()(),o._28(null,["\n    "])),(n()(),o._7(0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;return"click"===l&&(t=!1!==e.onLogout()&&t),t},h.b,h.a)),o._5(1097728,[[5,4]],0,v.a,[[8,""],r.a,o.k,o.F],null,null),(n()(),o._28(0,["\n      "])),(n()(),o._7(0,null,0,1,"ion-icon",[["name","exit"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._5(147456,null,0,j.a,[r.a,o.k,o.F],{name:[0,"name"]},null),(n()(),o._28(0,["\n    "])),(n()(),o._28(null,["\n  "])),(n()(),o._28(3,["\n"])),(n()(),o._28(null,["\n"]))],function(n,l){var u=l.component;n(l,5,0,"user-menu");n(l,10,0,"menu"),n(l,17,0,u.user,o._21(l,19));n(l,30,0,"exit")},function(n,l){n(l,0,0,o._21(l,1)._hidden,o._21(l,1)._sbPadding),n(l,3,0,o._21(l,5).isHidden),n(l,9,0,o._21(l,10)._hidden),n(l,29,0,o._21(l,30)._hidden)})}u.d(l,"a",function(){return O}),l.b=a;var o=u(2),s=u(164),i=u(24),c=u(21),r=u(3),_=u(54),d=u(81),p=u(115),g=u(565),b=u(60),m=u(12),f=u(7),k=u(28),h=u(59),v=u(29),y=u(169),F=u(31),x=u(171),C=u(80),j=u(53),w=u(566),I=u(162),S=u(23),M=(u(265),u(62),u(49),[]),O=o._4({encapsulation:2,styles:M,data:{}})},569:function(n,l,u){"use strict";function t(n){return e._30(2,[(n()(),e._7(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),e._5(278528,null,0,a.i,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._20(null,0),e._20(null,1),e._20(null,2),(n()(),e._7(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),e._5(278528,null,0,a.i,[e.s,e.t,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._20(null,3)],function(n,l){var u=l.component;n(l,1,0,"toolbar-background","toolbar-background-"+u._mode);n(l,6,0,"toolbar-content","toolbar-content-"+u._mode)},null)}u.d(l,"a",function(){return s}),l.b=t;var e=u(2),a=u(23),o=(u(80),u(3),[]),s=e._4({encapsulation:2,styles:o,data:{}})}});