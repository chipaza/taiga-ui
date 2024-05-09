(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44098],{44098:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiPieChartModule:()=>H});var i=n(76733),a=n(30925),o=n(33898),u=n(86733),r=n(87253),c=n(17628),m=n(6254),p=n(52085),s=n(2054),d=n(20755),l=n(20332),h=n(73097),x=n(38404),y=n(65004),P=n(43894),v=n(17894),g=n(97967),V=n(2313),f=n(62825),C=n(25530),I=n(18462),T=n(16538);function b(e,t){if(1&e&&(d.TgZ(0,"tui-doc-example",2),d._UZ(1,"tui-pie-chart-example-1"),d.qZA(),d.TgZ(2,"tui-doc-example",3)(3,"tui-notification",4),d._uU(4," Use "),d.TgZ(5,"a",5)(6,"code"),d._uU(7,"Hint"),d.qZA()(),d._uU(8," directive to enable hints with "),d.TgZ(9,"code"),d._uU(10,"tuiHintContent"),d.qZA()(),d._UZ(11,"tui-pie-chart-example-2"),d.qZA()),2&e){const e=d.oxw();d.Q6J("content",e.example1),d.xp6(2),d.Q6J("content",e.example2)}}function z(e,t){1&e&&d._uU(0," Active fragment ")}function N(e,t){1&e&&d._uU(0," Size ")}function Z(e,t){1&e&&d._uU(0," Value ")}function M(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-doc-demo")(1,"tui-pie-chart",6),d.NdJ("activeItemIndexChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.activeItemIndex=t)})),d.qZA()(),d.TgZ(2,"tui-doc-documentation"),d.YNc(3,z,1,0,"ng-template",7),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.activeItemIndex=t)})),d.YNc(4,N,1,0,"ng-template",8),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.size=t)})),d.YNc(5,Z,1,0,"ng-template",9),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.value=t)})),d.qZA()}if(2&e){const e=d.oxw();d.xp6(1),d.Q6J("size",e.size)("value",e.value)("activeItemIndex",e.activeItemIndex),d.xp6(2),d.Q6J("documentationPropertyValues",e.activeItemIndexVariants)("documentationPropertyValue",e.activeItemIndex),d.xp6(1),d.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),d.xp6(1),d.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function S(e,t){if(1&e&&d._UZ(0,"tui-setup",10),2&e){const e=d.oxw();d.Q6J("import",e.exampleModule)("template",e.exampleHtml)}}let w=(()=>{var e;class t{constructor(){this.exampleModule=n.e(92959).then(n.t.bind(n,92959,17)),this.exampleHtml=n.e(41181).then(n.t.bind(n,41181,17)),this.example1={TypeScript:n.e(18594).then(n.t.bind(n,18594,17)),HTML:n.e(25394).then(n.t.bind(n,25394,17)),LESS:n.e(45484).then(n.t.bind(n,45484,17))},this.example2={TypeScript:n.e(85193).then(n.t.bind(n,85193,17)),HTML:n.e(82584).then(n.t.bind(n,82584,17)),LESS:n.e(87187).then(n.t.bind(n,87187,17))},this.valueVariants=[[0,30,20,10],[40,30,20,10],[13769,12367,10172,3018,2592]],this.value=this.valueVariants[0],this.activeItemIndexVariants=[NaN,0,1,2],this.activeItemIndex=this.activeItemIndexVariants[0],this.sizeVariants=["xs","s","m","l","xl"],this.size=this.sizeVariants[2],this.contentVariants=["",({$implicit:e})=>this.getPercent(e),({$implicit:e})=>this.format(e)],this.hintContent=this.contentVariants[0]}getPercent(e){return`${(0,s.tuiRound)(100*this.value[e]/(0,s.tuiSum)(...this.value),2)} %`}format(e){return`${(0,c.tuiFormatNumber)(this.value[e])} ${(0,p.tuiGetCurrencySymbol)(p.TuiCurrency.Ruble)}`}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["example-tui-pie-chart"]],decls:4,vars:0,consts:[["header","PieChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading","sizes",3,"content"],["id","labels","heading","With labels",3,"content"],[1,"tui-space_bottom-6"],["routerLink","/directives/hint","tuiLink",""],[1,"chart",3,"size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyMode","input-output","documentationPropertyName","activeItemIndex","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeS | TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"import","template"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,b,12,2,"ng-template",1),d.YNc(2,M,6,9,"ng-template",1),d.YNc(3,S,1,2,"ng-template",1),d.qZA())},dependencies:[a.rH,l.W,h.F,x.z,y.B,P.q,v.n,g.f,V.L,f.D,C.U,I.TuiPieChartExample1,T.TuiPieChartExample2],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),t})(),H=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[i.ez,a.Bz,u.TuiPieChartModule,m.wq,r.fV,c.TuiHintModule,c.TuiNotificationModule,a.Bz.forChild((0,r.Ve)(w)),o.UY]}),t})()}}]);