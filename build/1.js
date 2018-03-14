webpackJsonp([1],{399:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),o=(u(4),u(97),u(157)),a=function(){function l(l,n,u,t,o){this.navParams=l,this.toastCtrl=n,this.modalCtrl=u,this._TodoListProvider=t,this.alertCtrl=o}return l.prototype.ngOnInit=function(){this.todoList=this.navParams.get("details")},l.prototype.getItem=function(){var l=this;this._TodoListProvider.getOneList(this.todoList.id).subscribe(function(n){l.todoList=n})},l.prototype.addItem=function(){var l=this,n=this.modalCtrl.create("ItemDetailsPage",{addOrEdit:!0,todoList:this.todoList});n.onDidDismiss(function(n){n||l.getItem()}),n.present()},l.prototype.deleteItem=function(l){var n=this;this.alertCtrl.create({title:"Delete List",message:"Are you sure you want to delete this task?",buttons:[{text:"Cancel",handler:function(l){}},{text:"Yes",handler:function(u){return n._TodoListProvider.deleteItem(n.todoList,l).then(function(l){n.getItem(),n.presentToast("Task succesfuly deleted")}).catch(function(l){return n.presentToast("Something wrong happened")})}}]}).present()},l.prototype.updateItem=function(l){var n=this,u=this.modalCtrl.create("ItemDetailsPage",{addOrEdit:!1,todoList:this.todoList,item:l});u.onDidDismiss(function(l){l||n.getItem()}),u.present()},l.prototype.presentToast=function(l){this.toastCtrl.create({message:l,duration:3e3,cssClass:"text-center"}).present()},l}(),e=u(403),i=function(){return function(){}}(),r=u(277),c=u(278),s=u(279),d=u(280),_=u(281),f=u(282),m=u(283),b=u(284),p=u(285),g=u(54),h=u(2),Z=u(167),v=u(164),Y=u(165),k=u(169),j=u(160),y=u(159),x=u(52),C=u(26),z=u(171),I=u(17),L=u(404),P=u(407),D=u(163),w=u(6),O=u(405),T=u(53),A=u(11),F=u(27),q=u(406),X=u(156),$=u(68),B=u(402),E=u(29),M=u(5),U=u(12),S=u(47),G=u(409),J=u(158),N=u(410),R=u(69),V=u(14),W=u(100),H=u(102),K=u(101),Q=t.X({encapsulation:2,styles:[],data:{}});function ll(l){return t._22(0,[(l()(),t.Z(0,0,null,null,14,"div",[["padding",""],["text-center",""]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(2,0,null,null,1,"ion-icon",[["color","gray"],["name","notifications"],["role","img"],["style","font-size: 200px;"]],[[2,"hide",null]],null,null,null,null)),t.Y(3,147456,null,0,g.a,[h.a,t.j,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(5,0,null,null,2,"h1",[["color","gray"],["ion-text",""],["text-center",""]],null,null,null,null,null)),t.Y(6,16384,null,0,Z.a,[h.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,null,["OMG!"])),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(9,0,null,null,4,"h3",[["color","gray"],["ion-text",""],["text-center",""]],null,null,null,null,null)),t.Y(10,16384,null,0,Z.a,[h.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,null,["You have no tasks."])),(l()(),t.Z(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Let's change that!"])),(l()(),t._20(-1,null,["\n  "]))],function(l,n){l(n,3,0,"gray","notifications");l(n,6,0,"gray");l(n,10,0,"gray")},function(l,n){l(n,2,0,t._13(n,3)._hidden)})}function nl(l){return t._22(0,[(l()(),t.Z(0,0,null,null,71,"ion-card",[],null,null,null,null,null)),t.Y(1,16384,null,0,v.a,[h.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(3,0,null,null,27,"ion-card-content",[],null,null,null,null,null)),t.Y(4,16384,null,0,Y.a,[h.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(6,0,null,null,20,"ion-card-title",[],null,null,null,null,null)),t.Y(7,16384,null,0,k.a,[h.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(9,0,null,null,16,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(10,16384,null,0,j.a,[],null,null),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(12,0,null,null,2,"ion-col",[["class","col"],["col-9",""]],null,null,null,null,null)),t.Y(13,16384,null,0,y.a,[],null,null),(l()(),t._20(14,null,[" "," "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t.Z(16,0,null,null,8,"ion-col",[["align-self-start",""],["class","col"],["col-3",""]],null,null,null,null,null)),t.Y(17,16384,null,0,y.a,[],null,null),(l()(),t._20(-1,null,["\n              "])),(l()(),t.Z(19,0,null,null,4,"p",[["ion-text",""],["text-right",""]],null,null,null,null,null)),t.Y(20,16384,null,0,Z.a,[h.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t.Z(21,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),t._20(22,null,["",""])),t._16(23,1),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(28,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._20(29,null,[" ",""])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(32,0,null,null,38,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(33,16384,null,0,j.a,[],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(35,0,null,null,12,"ion-col",[["align-self-center",""],["class","col"],["text-center",""]],null,null,null,null,null)),t.Y(36,16384,null,0,y.a,[],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(38,0,null,null,8,"button",[["clear",""],["color","danger"],["icon-start",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.deleteItem(l.context.$implicit)&&t);return t},x.b,x.a)),t.Y(39,1097728,null,0,C.a,[[8,""],h.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(41,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(42,147456,null,0,g.a,[h.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(44,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Delete"])),(l()(),t._20(-1,0,["\n          "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(49,0,null,null,12,"ion-col",[["align-self-center",""],["class","col"],["text-center",""]],null,null,null,null,null)),t.Y(50,16384,null,0,y.a,[],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(52,0,null,null,8,"button",[["clear",""],["color","warning"],["icon-start",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.updateItem(l.context.$implicit)&&t);return t},x.b,x.a)),t.Y(53,1097728,null,0,C.a,[[8,""],h.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(55,0,null,0,1,"ion-icon",[["name","create"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(56,147456,null,0,g.a,[h.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n            "])),(l()(),t.Z(58,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["Edit"])),(l()(),t._20(-1,0,["\n          "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(63,0,null,null,6,"ion-col",[["align-self-center",""],["class","col"],["text-center",""]],null,null,null,null,null)),t.Y(64,16384,null,0,y.a,[],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Z(66,0,null,null,2,"ion-note",[],null,null,null,null,null)),t.Y(67,16384,null,0,z.a,[h.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n            11h ago\n          "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n    "]))],function(l,n){l(n,20,0,t._2(1,"",n.context.$implicit.state?"secondary":"danger",""));l(n,39,0,"danger","","");l(n,42,0,"trash");l(n,53,0,"warning","","");l(n,56,0,"create")},function(l,n){l(n,14,0,n.context.$implicit.name),l(n,22,0,t._21(n,22,0,l(n,23,0,t._13(n.parent.parent,1),n.context.$implicit.state))),l(n,29,0,n.context.$implicit.description),l(n,41,0,t._13(n,42)._hidden),l(n,55,0,t._13(n,56)._hidden)})}function ul(l){return t._22(0,[(l()(),t.Z(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,2,null,nl)),t.Y(3,802816,null,0,I.i,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),t._16(4,1),(l()(),t._20(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,3,0,t._21(n,3,0,l(n,4,0,t._13(n.parent,0),u.todoList.items)))},null)}function tl(l){return t._22(0,[t._14(0,L.a,[]),t._14(0,P.a,[]),(l()(),t._20(-1,null,["\n"])),(l()(),t.Z(3,0,null,null,10,"ion-header",[],null,null,null,null,null)),t.Y(4,16384,null,0,D.a,[h.a,t.j,t.z,[2,w.a]],null,null),(l()(),t._20(-1,null,["\n\n  "])),(l()(),t.Z(6,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,O.b,O.a)),t.Y(7,49152,null,0,T.a,[A.a,[2,w.a],[2,F.a],h.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(9,0,null,3,2,"ion-title",[],null,null,null,q.b,q.a)),t.Y(10,49152,null,0,X.a,[h.a,t.j,t.z,[2,$.a],[2,T.a]],null,null),(l()(),t._20(11,0,["",""])),(l()(),t._20(-1,3,["\n  "])),(l()(),t._20(-1,null,["\n\n"])),(l()(),t._20(-1,null,["\n\n\n"])),(l()(),t.Z(15,0,null,null,21,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,B.b,B.a)),t.Y(16,4374528,null,0,E.a,[h.a,M.a,U.a,t.j,t.z,A.a,S.a,t.u,[2,w.a],[2,F.a]],null,null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.U(16777216,null,1,1,null,ll)),t.Y(19,16384,null,0,I.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.U(16777216,null,1,1,null,ul)),t.Y(22,16384,null,0,I.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(24,0,null,0,11,"ion-fab",[["bottom",""],["right",""]],null,null,null,G.b,G.a)),t.Y(25,1228800,null,2,J.a,[M.a],null,null),t._18(335544320,1,{_mainButton:0}),t._18(603979776,2,{_fabLists:1}),(l()(),t._20(-1,0,["\n    "])),(l()(),t.Z(29,0,null,0,5,"button",[["color","secondary"],["ion-fab",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.addItem()&&t);return t},N.b,N.a)),t.Y(30,49152,[[1,4]],0,R.a,[h.a,t.j,t.z],{color:[0,"color"]},null),(l()(),t._20(-1,0,["\n      "])),(l()(),t.Z(32,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(33,147456,null,0,g.a,[h.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n    "])),(l()(),t._20(-1,0,["\n  "])),(l()(),t._20(-1,1,["\n"])),(l()(),t._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,7,0,"primary"),l(n,19,0,!u.todoList.items),l(n,22,0,!!u.todoList.items);l(n,30,0,"secondary");l(n,33,0,"add")},function(l,n){var u=n.component;l(n,6,0,t._13(n,7)._hidden,t._13(n,7)._sbPadding),l(n,11,0,u.todoList.name),l(n,15,0,t._13(n,16).statusbarPadding,t._13(n,16)._hasRefresher),l(n,32,0,t._13(n,33)._hidden)})}var ol=t.V("page-details",a,function(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"page-details",[],null,null,null,tl,Q)),t.Y(1,114688,null,0,a,[V.a,W.a,H.a,o.a,K.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),al=u(21),el=u(162),il=u(48);u.d(n,"DetailsPageModuleNgFactory",function(){return rl});var rl=t.W(i,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[r.a,c.a,s.a,d.a,_.a,f.a,m.a,b.a,p.a,ol]],[3,t.i],t.s]),t._11(4608,I.l,I.k,[t.r,[2,I.t]]),t._11(4608,al.o,al.o,[]),t._11(4608,al.d,al.d,[]),t._11(512,I.c,I.c,[]),t._11(512,al.m,al.m,[]),t._11(512,al.e,al.e,[]),t._11(512,al.l,al.l,[]),t._11(512,el.a,el.a,[]),t._11(512,el.b,el.b,[]),t._11(512,e.a,e.a,[]),t._11(512,i,i,[]),t._11(256,il.a,a,[])])})},402:function(l,n,u){"use strict";u.d(n,"a",function(){return o}),n.b=a;var t=u(0),o=(u(2),u(5),u(12),u(47),u(6),u(27),t.X({encapsulation:2,styles:[],data:{}}));function a(l){return t._22(2,[t._18(402653184,1,{_fixedContent:0}),t._18(402653184,2,{_scrollContent:0}),(l()(),t.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),t._12(null,0),(l()(),t.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),t._12(null,1),t._12(null,2)],null,null)}},403:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(4),u(404),u(407);var t=function(){return function(){}}()},404:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(4);var t=function(){function l(){}return l.prototype.transform=function(l,n){return l&&null!==l?Object.values(l):[]},l}()},405:function(l,n,u){"use strict";u.d(n,"a",function(){return c}),n.b=s;var t=u(0),o=u(17),a=u(52),e=u(26),i=u(2),r=u(54),c=(u(6),u(27),t.X({encapsulation:2,styles:[],data:{}}));function s(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t.Y(1,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.backButtonClick(u)&&t);return t},a.b,a.a)),t.Y(3,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(4,1097728,null,0,e.a,[[8,"bar-button"],i.a,t.j,t.z],null,null),(l()(),t.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(6,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(7,147456,null,0,r.a,[i.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t.Y(9,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._20(10,null,["",""])),t._12(null,0),t._12(null,1),t._12(null,2),(l()(),t.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t.Y(15,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode),l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb),l(n,5,0,t._13(n,7)._hidden),l(n,10,0,u._backText)})}},406:function(l,n,u){"use strict";u.d(n,"a",function(){return a}),n.b=e;var t=u(0),o=u(17),a=(u(2),t.X({encapsulation:2,styles:[],data:{}}));function e(l){return t._22(2,[(l()(),t.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t.Y(1,278528,null,0,o.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}},407:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(4);var t=function(){function l(){}return l.prototype.transform=function(l){return l?"Finished":"Doing"},l}()},409:function(l,n,u){"use strict";u.d(n,"a",function(){return o}),n.b=a;var t=u(0),o=(u(5),t.X({encapsulation:2,styles:[],data:{}}));function a(l){return t._22(0,[t._12(null,0)],null,null)}},410:function(l,n,u){"use strict";u.d(n,"a",function(){return e}),n.b=i;var t=u(0),o=u(54),a=u(2),e=t.X({encapsulation:2,styles:[],data:{}});function i(l){return t._22(2,[(l()(),t.Z(0,0,null,null,1,"ion-icon",[["class","fab-close-icon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(1,147456,null,0,o.a,[a.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(2,0,null,null,1,"span",[["class","button-inner"]],null,null,null,null,null)),t._12(null,0),(l()(),t.Z(4,0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(l,n){l(n,1,0,"close")},function(l,n){l(n,0,0,t._13(n,1)._hidden)})}}});