(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[40150],{40150:(e,t,a)=>{a.r(t),a.d(t,{ExampleTuiArcChartModule:()=>N});var n=a(86568),o=a(35856),i=a(82312),u=a(49120),r=a(63528),c=a(59130),m=a(91009),l=a(6528),d=a(13220),s=a(13692),p=a(96808),h=a(95356),y=a(56616),I=a(34496),v=a(37288),x=a(83480),C=a(34684),g=a(89872),P=a(7287);let f=(()=>{var e;class t{constructor(){this.value=[40,30,20,10],this.activeItemIndex=NaN}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-arc-chart-example-1"]],decls:13,vars:9,consts:[["decimal","never",1,"b-form",3,"step","ngModel","ngModelChange"],[1,"wrapper"],["size","m",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","l",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","xl",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],[3,"value"]],template:function(e,t){1&e&&(l.I0R(0,"tui-input-number",0),l.qCj("ngModelChange",(function(e){return t.activeItemIndex=e})),l.OEk(1," activeItemIndex\n"),l.C$Y(),l.I0R(2,"div",1)(3,"tui-arc-chart",2),l.qCj("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),l.OEk(4," Total value "),l.C$Y(),l.I0R(5,"tui-arc-chart",3),l.qCj("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),l.OEk(6," Total value "),l.I0R(7,"div"),l.OEk(8,"Label"),l.C$Y()(),l.I0R(9,"tui-arc-chart",4),l.qCj("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),l.wR5(10,"tui-money",5),l.I0R(11,"div"),l.OEk(12,"Not bad!"),l.C$Y()()()),2&e&&(l.E7m("step",1)("ngModel",t.activeItemIndex),l.yG2(3),l.E7m("value",t.value)("activeItemIndex",t.activeItemIndex),l.yG2(2),l.E7m("value",t.value)("activeItemIndex",t.activeItemIndex),l.yG2(4),l.E7m("value",t.value)("activeItemIndex",t.activeItemIndex),l.yG2(1),l.E7m("value",123456))},dependencies:[o.ue,o._G,d.q,C.s,g.m,P.Q],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem;--tui-chart-0: var(--tui-support-12);--tui-chart-1: var(--tui-support-01);--tui-chart-2: var(--tui-support-03);--tui-chart-3: var(--tui-support-09)}"],changeDetection:0}),t})();var b=a(18917);const V=function(){return[40]},E=function(){return[20]};let G=(()=>{var e;class t{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.sum=(0,b.tuiSum)(...this.value)}getValue(e){return Number.isNaN(e)?this.sum:this.value[e]}getLabel(e){return Number.isNaN(e)?"Total":this.labels[e]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-arc-chart-example-2"]],decls:6,vars:4,consts:[[1,"wrapper"],["size","l",3,"value"],["maxLabel","","minLabel","","size","l",1,"stacked",3,"value"]],template:function(e,t){1&e&&(l.I0R(0,"div",0),l.wR5(1,"tui-arc-chart",1),l.I0R(2,"tui-arc-chart",2),l.OEk(3," +20% "),l.I0R(4,"div"),l.OEk(5,"For filling in last name"),l.C$Y()()()),2&e&&(l.yG2(1),l.E7m("value",l.q4q(2,V)),l.yG2(1),l.E7m("value",l.q4q(3,E)))},dependencies:[d.q],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;--tui-chart-0: var(--tui-support-03)}.stacked[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;--tui-secondary: transparent;--tui-chart-0: var(--tui-support-04)}"],changeDetection:0}),t})();function O(e,t){if(1&e&&(l.I0R(0,"tui-doc-example",2),l.wR5(1,"tui-arc-chart-example-1"),l.C$Y(),l.I0R(2,"tui-doc-example",3),l.wR5(3,"tui-arc-chart-example-2"),l.C$Y()),2&e){const e=l.GaO();l.E7m("content",e.example1),l.yG2(2),l.E7m("content",e.example2)}}function T(e,t){1&e&&l.OEk(0," Maximum value ")}function k(e,t){1&e&&l.OEk(0," Label for maximum value ")}function M(e,t){1&e&&l.OEk(0," Label for minimum value ")}function L(e,t){1&e&&l.OEk(0," Size ")}function R(e,t){1&e&&l.OEk(0," Value ")}function Y(e,t){1&e&&l.OEk(0," Index of selected arc ")}function q(e,t){if(1&e){const e=l.KQA();l.I0R(0,"tui-doc-demo")(1,"tui-arc-chart",4),l.qCj("activeItemIndexChange",(function(t){l.usT(e);const a=l.GaO();return l.CGJ(a.activeItemIndex=t)})),l.C$Y()(),l.I0R(2,"tui-doc-documentation"),l.yuY(3,T,1,0,"ng-template",5),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const a=l.GaO();return l.CGJ(a.max=t)})),l.yuY(4,k,1,0,"ng-template",6),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const a=l.GaO();return l.CGJ(a.maxLabel=t)})),l.yuY(5,M,1,0,"ng-template",7),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const a=l.GaO();return l.CGJ(a.minLabel=t)})),l.yuY(6,L,1,0,"ng-template",8),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const a=l.GaO();return l.CGJ(a.size=t)})),l.yuY(7,R,1,0,"ng-template",9),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const a=l.GaO();return l.CGJ(a.value=t)})),l.yuY(8,Y,1,0,"ng-template",10),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const a=l.GaO();return l.CGJ(a.activeItemIndex=t)})),l.C$Y()}if(2&e){const e=l.GaO();l.yG2(1),l.E7m("max",e.max)("maxLabel",e.maxLabel)("minLabel",e.minLabel)("size",e.size)("value",e.value)("activeItemIndex",e.activeItemIndex),l.yG2(2),l.E7m("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),l.yG2(1),l.E7m("documentationPropertyValue",e.maxLabel),l.yG2(1),l.E7m("documentationPropertyValue",e.minLabel),l.yG2(1),l.E7m("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),l.yG2(1),l.E7m("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),l.yG2(1),l.E7m("documentationPropertyValue",e.activeItemIndex)}}function w(e,t){if(1&e&&(l.I0R(0,"ol",11)(1,"li")(2,"p"),l.OEk(3," Import "),l.I0R(4,"code"),l.OEk(5,"TuiArcChartModule"),l.C$Y(),l.OEk(6," into a module where you want to use our component "),l.C$Y(),l.wR5(7,"tui-doc-code",12),l.C$Y(),l.I0R(8,"li")(9,"p"),l.OEk(10,"Add to the template:"),l.C$Y(),l.wR5(11,"tui-doc-code",13),l.C$Y()()),2&e){const e=l.GaO();l.yG2(7),l.E7m("code",e.exampleModule),l.yG2(4),l.E7m("code",e.exampleHtml)}}let z=(()=>{var e;class t{constructor(){this.exampleModule=a.e(64803).then(a.t.bind(a,64803,17)),this.exampleHtml=a.e(98892).then(a.t.bind(a,98892,17)),this.example1={TypeScript:a.e(99592).then(a.t.bind(a,99592,17)),HTML:a.e(19544).then(a.t.bind(a,19544,17)),LESS:a.e(20376).then(a.t.bind(a,20376,17))},this.example2={TypeScript:a.e(70788).then(a.t.bind(a,70788,17)),HTML:a.e(88096).then(a.t.bind(a,88096,17)),LESS:a.e(14692).then(a.t.bind(a,14692,17))},this.valueVariants=[[42],[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.maxVariants=[100,1e4,5e4],this.max=this.maxVariants[0],this.sizeVariants=["m","l","xl"],this.size=this.sizeVariants[0],this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["example-tui-arc-chart"]],decls:4,vars:0,consts:[["header","ArcChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading","Sizes",3,"content"],["id","stacked","heading","Stacked",3,"content"],[1,"chart",3,"max","maxLabel","minLabel","size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLabel","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minLabel","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","activeItemIndex","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.I0R(0,"tui-doc-page",0),l.yuY(1,O,4,2,"ng-template",1),l.yuY(2,q,9,15,"ng-template",1),l.yuY(3,w,12,2,"ng-template",1),l.C$Y())},dependencies:[d.q,s.u,p.m,h.I,y.S,I.E,v.u,x.I,f,G],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),t})(),N=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=l.a4G({type:e}),e.ɵinj=l.s3X({imports:[n.MD,i.qQ,o.y,u.TuiArcChartModule,r.TuiMoneyModule,c.kx,i.qQ.forChild((0,c._A)(z)),m.TuiInputNumberModule]}),t})()}}]);