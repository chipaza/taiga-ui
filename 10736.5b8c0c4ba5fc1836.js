(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[10736],{10736:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiTabBarModule:()=>N});var i=n(88692),o=n(69900),a=n(91795),c=n(64500),r=n(99369),u=n(73588),s=n(61917),l=n(64537),p=n(21481),d=n(79121),m=n(83074),g=n(43560),b=n(93525),x=n(38868),f=n(44495),T=n(22968),h=n(53712),Z=n(37772);function I(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"button",2),l.NdJ("click",(function(){const e=l.CHM(t).$implicit,n=l.oxw();return l.KtG(n.onClick(e))})),l._uU(1),l.qZA()}if(2&t){const t=e.$implicit;l.Q6J("badge",t.badge)("icon",t.icon),l.xp6(1),l.hij(" ",t.text," ")}}let v=(()=>{var t;class e{constructor(){this.alerts=(0,l.f3M)(u.TuiAlertService),this.activeItemIndex=1,this.items=[{text:"Favorites",icon:"tuiIconHeartLarge",badge:3},{text:"Calls",icon:"tuiIconPhoneLarge",badge:1234},{text:"Profile",icon:"tuiIconUserLarge"},{text:"Settings and configuration",icon:"tuiIconSettingsLarge",badge:100},{text:"More",icon:"tuiIconMoreHorizontalLarge"}]}onClick(t){t.badge=0,this.alerts.open(this.activeItemIndex,{label:t.text}).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["tui-tab-bar-example-1"]],decls:2,vars:2,consts:[["tuiTabBar","",1,"tabs",3,"activeItemIndex","activeItemIndexChange"],["tuiTabBarItem","",3,"badge","icon","click",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"badge","icon","click"]],template:function(t,e){1&t&&(l.TgZ(0,"nav",0),l.NdJ("activeItemIndexChange",(function(t){return e.activeItemIndex=t})),l.YNc(1,I,2,3,"button",1),l.qZA()),2&t&&(l.Q6J("activeItemIndex",e.activeItemIndex),l.xp6(1),l.Q6J("ngForOf",e.items))},dependencies:[i.sg,h.M,Z.F],styles:[".tabs[_ngcontent-%COMP%]{padding-bottom:env(safe-area-inset-bottom)}"],changeDetection:0}),e})();var A=n(81998);let L=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["tui-tab-bar-example-2"]],decls:11,vars:0,consts:[["tuiTabBar",""],["icon","tuiIconMoreHorizontalLarge","routerLink","/navigation/breadcrumbs","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconCodeLarge","routerLink","/navigation/pagination","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconTerminalLarge","routerLink","/navigation/stepper","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconHrLarge","routerLink","/navigation/tab-bar","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconMenuLarge","routerLink","/navigation/tabs","routerLinkActive","","tuiTabBarItem",""]],template:function(t,e){1&t&&(l.TgZ(0,"nav",0)(1,"a",1),l._uU(2," Breadcrumbs "),l.qZA(),l.TgZ(3,"a",2),l._uU(4," Pagination "),l.qZA(),l.TgZ(5,"a",3),l._uU(6," Stepper "),l.qZA(),l.TgZ(7,"a",4),l._uU(8," TabBar "),l.qZA(),l.TgZ(9,"a",5),l._uU(10," Tabs "),l.qZA()())},dependencies:[h.M,Z.F,A.Y,a.rH,a.Od],encapsulation:2,changeDetection:0}),e})();function _(t,e){if(1&t&&(l.TgZ(0,"button",2),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.Q6J("icon",t.icon),l.xp6(1),l.hij(" ",t.text," ")}}let U=(()=>{var t;class e{constructor(){this.items=[{text:"Home",icon:"tuiIconHomeLarge"},{text:"Photos",icon:"tuiIconImageLarge"},{text:"Navigation",icon:"tuiIconMapPinLarge"}]}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["tui-tab-bar-example-3"]],decls:2,vars:1,consts:[["tuiTabBar","",1,"tabs"],["tuiTabBarItem","",3,"icon",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon"]],template:function(t,e){1&t&&(l.TgZ(0,"nav",0),l.YNc(1,_,2,2,"button",1),l.qZA()),2&t&&(l.xp6(1),l.Q6J("ngForOf",e.items))},dependencies:[i.sg,h.M,Z.F],styles:[".tabs[_ngcontent-%COMP%]{color:var(--tui-link);--tui-active-color: var(--tui-accent)}"],changeDetection:0}),e})();var k=n(38023),q=n(51927),M=n(61528),B=n(1995),y=n(27969),J=n(76189);function C(t,e){if(1&t&&(l.TgZ(0,"button",3),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.Q6J("icon",t.icon),l.xp6(1),l.hij(" ",t.text," ")}}let w=(()=>{var t;class e{constructor(){this.load$=new k.x,this.items$=this.load$.pipe((0,q.O)(null),(0,M.w)((()=>(0,B.H)(3e3).pipe((0,y.U)((()=>[{text:"Favorites",icon:"tuiIconHeartLarge"},{text:"Calls",icon:"tuiIconPhoneLarge"},{text:"Profile",icon:"tuiIconUserLarge"},{text:"Settings and configuration",icon:"tuiIconSettingsLarge"}])),(0,q.O)([])))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["tui-tab-bar-example-4"]],decls:6,vars:3,consts:[["size","m","tuiButton","",3,"click"],["tuiTabBar",""],["tuiTabBarItem","",3,"icon",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon"]],template:function(t,e){1&t&&(l.TgZ(0,"p")(1,"button",0),l.NdJ("click",(function(){return e.load$.next()})),l._uU(2," Reload "),l.qZA()(),l.TgZ(3,"nav",1),l.YNc(4,C,2,2,"button",2),l.ALo(5,"async"),l.qZA()),2&t&&(l.xp6(4),l.Q6J("ngForOf",l.lcZ(5,1,e.items$)))},dependencies:[i.sg,J.v,h.M,Z.F,i.Ov],encapsulation:2,changeDetection:0}),e})();function F(t,e){1&t&&l._UZ(0,"tui-tab-bar-example-1",10)}function O(t,e){1&t&&l._UZ(0,"tui-tab-bar-example-1",13)}function H(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"p"),l._uU(1,"Component for creating mobile navigation."),l.qZA(),l.TgZ(2,"tui-doc-example",3)(3,"label",4)(4,"input",5),l.NdJ("ngModelChange",(function(e){l.CHM(t);const n=l.oxw();return l.KtG(n.fixed=e)})),l.qZA(),l._uU(5," Fixed "),l.qZA(),l.YNc(6,F,1,0,"tui-tab-bar-example-1",6),l.YNc(7,O,1,0,"tui-tab-bar-example-1",7),l.qZA(),l.TgZ(8,"tui-doc-example",8)(9,"tui-notification",9),l._uU(10," If you use "),l.TgZ(11,"code"),l._uU(12,"routerLink"),l.qZA(),l._uU(13," you must also add "),l.TgZ(14,"code"),l._uU(15,"routerLinkActive"),l.qZA(),l._uU(16," directive. "),l.qZA(),l._UZ(17,"tui-tab-bar-example-2",10),l.qZA(),l.TgZ(18,"tui-doc-example",11),l._UZ(19,"tui-tab-bar-example-3",10),l.qZA(),l.TgZ(20,"tui-doc-example",12)(21,"tui-notification",9),l._uU(22," When there are no "),l.TgZ(23,"code"),l._uU(24,"TabBarItem"),l.qZA(),l._uU(25," children, the component shows skeleton for 4 items "),l.qZA(),l._UZ(26,"tui-tab-bar-example-4",10),l.qZA()}if(2&t){const t=l.oxw();l.xp6(2),l.Q6J("content",t.example1),l.xp6(2),l.Q6J("ngModel",t.fixed),l.xp6(2),l.Q6J("ngIf",!t.fixed),l.xp6(1),l.Q6J("tuiDropdown",t.fixed),l.xp6(1),l.Q6J("content",t.example2),l.xp6(10),l.Q6J("content",t.example3),l.xp6(2),l.Q6J("content",t.example4)}}function S(t,e){if(1&t&&(l.TgZ(0,"ol",14)(1,"li")(2,"p"),l._uU(3," Import "),l.TgZ(4,"code"),l._uU(5,"TuiTabBarModule"),l.qZA(),l._uU(6," into your main module "),l.qZA(),l._UZ(7,"tui-doc-code",15),l.qZA(),l.TgZ(8,"li")(9,"p"),l._uU(10," Add to the template inside "),l.TgZ(11,"code"),l._uU(12,"Root"),l.qZA(),l._uU(13," component at the required layer and position with CSS: "),l.qZA(),l._UZ(14,"tui-doc-code",16),l.qZA()()),2&t){const t=l.oxw();l.xp6(7),l.Q6J("code",t.exampleModule),l.xp6(7),l.Q6J("code",t.exampleHtml)}}let Q=(()=>{var t;class e{constructor(){this.fixed=!1,this.exampleModule=n.e(44170).then(n.t.bind(n,44170,17)),this.exampleHtml=n.e(41133).then(n.t.bind(n,41133,17)),this.example1={TypeScript:n.e(57469).then(n.t.bind(n,57469,17)),HTML:n.e(44819).then(n.t.bind(n,44819,17))},this.example2={TypeScript:n.e(63717).then(n.t.bind(n,63717,17)),HTML:n.e(42944).then(n.t.bind(n,42944,17))},this.example3={TypeScript:n.e(54099).then(n.t.bind(n,54099,17)),HTML:n.e(37887).then(n.t.bind(n,37887,17)),LESS:n.e(81949).then(n.t.bind(n,81949,17))},this.example4={TypeScript:n.e(92925).then(n.t.bind(n,92925,17)),HTML:n.e(2973).then(n.t.bind(n,2973,17))}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["example-tui-tab-bar"]],decls:3,vars:0,consts:[["header","TabBar","package","ADDON-MOBILE","type","components"],["pageTab",""],["pageTab","Setup"],["id","buttons","heading","Buttons",3,"content"],["tuiLabel","",1,"tui-space_bottom-4"],["tuiCheckbox","","type","checkbox",3,"ngModel","ngModelChange"],["class","bar",4,"ngIf"],["class","fixed",4,"tuiDropdown"],["id","links","heading","Links",3,"content"],[1,"bar","tui-space_bottom-4"],[1,"bar"],["id","customization","heading","Customization",3,"content"],["id","skeleton","heading","Skeleton",3,"content"],[1,"fixed"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,H,27,7,"ng-template",1),l.YNc(2,S,15,2,"ng-template",2),l.qZA())},dependencies:[i.O5,o.Wl,o.JJ,o.On,p.d,d.L,m.c,g.q,b.n,x.f,f.X,T.f,v,L,U,w],styles:[".bar[_ngcontent-%COMP%]{display:block;width:25rem}.fixed[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%}"],changeDetection:0}),e})(),N=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=l.oAB({type:t}),t.ɵinj=l.cJS({imports:[i.ez,o.u5,u.TuiDropdownModule,u.TuiButtonModule,u.TuiNotificationModule,r.TuiTabBarModule,c.fV,a.Bz.forChild((0,c.Ve)(Q)),s.xl]}),e})()}}]);