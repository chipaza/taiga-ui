(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17754,61386,99503,50517,11820,61505,99781,50023,11944,61702,98323,1001],{10882:(e,t,n)=>{n.d(t,{Fb:()=>r,UR:()=>a,bM:()=>i});var o=n(81576);const a={currency:null,currencyAlign:"right",sign:"negative-only"},i=(0,o.tuiCreateToken)(a);function r(e){return(0,o.tuiProvideOptions)(i,e,a)}},61386:(e,t,n)=>{n.d(t,{E:()=>m});var o=n(20755),a=n(93517),i=n(81576),r=n(45873),u=n(92425),c=n(10882);let m=(()=>{var e;class t{constructor(){this.options=(0,o.f3M)(c.bM),this.format=(0,o.f3M)(r.TUI_NUMBER_FORMAT)}transform(e,t=this.options.currency,n=this.options.currencyAlign){return this.format.pipe((0,u.U)((o=>{const u=(0,a.$v)(e,this.options.sign),c=(0,a.BP)(t),m=(0,r.tuiFormatNumber)(Math.abs(e),{...o,precision:Number.isNaN(o.precision)?2:o.precision}),p=c?.length>1||"right"===n?i.CHAR_NO_BREAK_SPACE:"";return"right"===n?`${u}${m}${p}${c}`:`${u}${c}${p}${m}`})))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵpipe=o.Yjl({name:"tuiAmount",type:e,pure:!0,standalone:!0}),t})()},98175:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiArcChartModule:()=>L});var o=n(76733),a=n(72133),i=n(42932),r=n(86733),u=n(87253),c=n(42513),m=n(20755),p=n(8109),d=n(36877),l=n(73097),s=n(38404),h=n(65004),y=n(43894),x=n(17894),P=n(97967),g=n(41629),f=n(93229);function V(e,t){if(1&e&&(m.TgZ(0,"tui-doc-example",2),m._UZ(1,"tui-arc-chart-example-1"),m.qZA(),m.TgZ(2,"tui-doc-example",3),m._UZ(3,"tui-arc-chart-example-2"),m.qZA()),2&e){const e=m.oxw();m.Q6J("content",e.example1),m.xp6(2),m.Q6J("content",e.example2)}}function b(e,t){1&e&&m._uU(0," Maximum value ")}function C(e,t){1&e&&m._uU(0," Label for maximum value ")}function v(e,t){1&e&&m._uU(0," Label for minimum value ")}function N(e,t){1&e&&m._uU(0," Size ")}function M(e,t){1&e&&m._uU(0," Value ")}function T(e,t){1&e&&m._uU(0," Index of selected arc ")}function A(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"tui-doc-demo")(1,"tui-arc-chart",4),m.NdJ("activeItemIndexChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.activeItemIndex=t)})),m.qZA()(),m.TgZ(2,"tui-doc-documentation"),m.YNc(3,b,1,0,"ng-template",5),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.max=t)})),m.YNc(4,C,1,0,"ng-template",6),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.maxLabel=t)})),m.YNc(5,v,1,0,"ng-template",7),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.minLabel=t)})),m.YNc(6,N,1,0,"ng-template",8),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.size=t)})),m.YNc(7,M,1,0,"ng-template",9),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.value=t)})),m.YNc(8,T,1,0,"ng-template",10),m.NdJ("documentationPropertyValueChange",(function(t){m.CHM(e);const n=m.oxw();return m.KtG(n.activeItemIndex=t)})),m.qZA()}if(2&e){const e=m.oxw();m.xp6(1),m.Q6J("max",e.max)("maxLabel",e.maxLabel)("minLabel",e.minLabel)("size",e.size)("value",e.value)("activeItemIndex",e.activeItemIndex),m.xp6(2),m.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m.xp6(1),m.Q6J("documentationPropertyValue",e.maxLabel),m.xp6(1),m.Q6J("documentationPropertyValue",e.minLabel),m.xp6(1),m.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),m.xp6(1),m.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),m.xp6(1),m.Q6J("documentationPropertyValue",e.activeItemIndex)}}function I(e,t){if(1&e&&(m.TgZ(0,"ol",11)(1,"li")(2,"p"),m._uU(3," Import "),m.TgZ(4,"code"),m._uU(5,"TuiArcChartModule"),m.qZA(),m._uU(6," into a module where you want to use our component "),m.qZA(),m._UZ(7,"tui-doc-code",12),m.qZA(),m.TgZ(8,"li")(9,"p"),m._uU(10,"Add to the template:"),m.qZA(),m._UZ(11,"tui-doc-code",13),m.qZA()()),2&e){const e=m.oxw();m.xp6(7),m.Q6J("code",e.exampleModule),m.xp6(4),m.Q6J("code",e.exampleHtml)}}let Z=(()=>{var e;class t{constructor(){this.exampleModule=n.e(85776).then(n.t.bind(n,85776,17)),this.exampleHtml=n.e(1557).then(n.t.bind(n,1557,17)),this.example1={TypeScript:n.e(96278).then(n.t.bind(n,96278,17)),HTML:n.e(57749).then(n.t.bind(n,57749,17)),LESS:n.e(63570).then(n.t.bind(n,63570,17))},this.example2={TypeScript:n.e(6726).then(n.t.bind(n,6726,17)),HTML:n.e(35868).then(n.t.bind(n,35868,17)),LESS:n.e(36077).then(n.t.bind(n,36077,17))},this.valueVariants=[[42],[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.maxVariants=[100,1e4,5e4],this.max=this.maxVariants[0],this.sizeVariants=["m","l","xl"],this.size=this.sizeVariants[0],this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["example-tui-arc-chart"]],decls:4,vars:0,consts:[["header","ArcChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading","Sizes",3,"content"],["id","stacked","heading","Stacked",3,"content"],[1,"chart",3,"max","maxLabel","minLabel","size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLabel","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minLabel","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","activeItemIndex","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,V,4,2,"ng-template",1),m.YNc(2,A,9,15,"ng-template",1),m.YNc(3,I,12,2,"ng-template",1),m.qZA())},dependencies:[p.O,d.c,l.F,s.z,h.B,y.q,x.n,P.f,g.TuiArcChartExample1,f.TuiArcChartExample2],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),t})(),L=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=m.oAB({type:e}),e.ɵinj=m.cJS({imports:[o.ez,i.Bz,a.u5,r.TuiArcChartModule,u.fV,i.Bz.forChild((0,u.Ve)(Z)),c.TuiInputNumberModule]}),t})()}}]);