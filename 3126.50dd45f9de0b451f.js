(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3126],{3126:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiTreeModule:()=>de});var o=n(86568),i=n(35856),r=n(82312),l=n(59130),a=n(18917),c=n(43840),u=n(91009),s=n(6528),d=n(55412),p=n(13692),m=n(95356),h=n(56616),g=n(34496),T=n(37288),y=n(83480),x=n(21252),f=n(82220);let v=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-tree-example-1"]],decls:17,vars:1,consts:[[3,"tuiTreeController"]],template:function(e,t){1&e&&(s.SAx(0,0),s.I0R(1,"tui-tree-item"),s.OEk(2," Fruits "),s.I0R(3,"tui-tree-item"),s.OEk(4," Apples "),s.I0R(5,"tui-tree-item"),s.OEk(6,"Granny Smith"),s.C$Y(),s.I0R(7,"tui-tree-item"),s.OEk(8,"Red Delicious"),s.C$Y()(),s.I0R(9,"tui-tree-item"),s.OEk(10,"Oranges"),s.C$Y()(),s.I0R(11,"tui-tree-item"),s.OEk(12," Animals "),s.I0R(13,"tui-tree-item"),s.OEk(14,"Cats"),s.C$Y(),s.I0R(15,"tui-tree-item"),s.OEk(16,"Dogs"),s.C$Y()(),s.k70()),2&e&&s.E7m("tuiTreeController",!0)},dependencies:[x.g,f.s],encapsulation:2,changeDetection:0}),t})();var E=n(66192);let C=(()=>{var e;class t{constructor(){this.data=["Top level 1",["Second level item",["Third level 1","Third level 2","Third level 3"]],"Top level 2","Top level 3",["Second 1","Second 2"]]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-tree-example-2"]],decls:1,vars:1,consts:[[3,"value"]],template:function(e,t){1&e&&s.wR5(0,"tui-tree",0),2&e&&s.E7m("value",t.data)},dependencies:[E.w],styles:["tui-tree[_ngcontent-%COMP%]{margin-left:-3.5rem}"],changeDetection:0}),t})();var R=n(53148),k=n(79848);function O(e,t){if(1&e&&s.wR5(0,"tui-svg",4),2&e){const e=s.GaO().$implicit;s.E7m("src",e.icon)}}function I(e,t){if(1&e&&(s.I0R(0,"div",2),s.yuY(1,O,1,1,"tui-svg",3),s.OEk(2),s.C$Y()),2&e){const e=t.node,n=t.$implicit;s.m4B("opacity",1/e.level),s.yG2(1),s.E7m("ngIf",n.icon),s.yG2(1),s.oRS(" ",n.text," ")}}let w=(()=>{var e;class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",icon:"tuiIconHeart",children:[{text:"Another item",children:[{text:"Next level 1",icon:"tuiIconHeart"},{text:"Next level 2",icon:"tuiIconHeart"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2",icon:"tuiIconHeart"}]}]},this.handler=e=>e.children||a.EMPTY_ARRAY}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-tree-example-3"]],decls:3,vars:4,consts:[[3,"childrenHandler","content","tuiTreeController","value"],["content",""],[1,"wrapper"],[3,"src",4,"ngIf"],[3,"src"]],template:function(e,t){if(1&e&&(s.wR5(0,"tui-tree",0),s.yuY(1,I,3,4,"ng-template",null,1,s.gJz)),2&e){const e=s.Gew(2);s.E7m("childrenHandler",t.handler)("content",e)("tuiTreeController",!0)("value",t.data)}},dependencies:[E.w,R._,f.s,k.W,o.u_],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),t})();var Y=n(84804),b=n(8673);function M(e,t){if(1&e&&s.OEk(0),2&e){const e=t.$implicit;s.oRS(" ",e.text,"\n")}}let $=(()=>{var e;class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.map=new Map,this.handler=e=>e.children||a.EMPTY_ARRAY}toggleTopmost(){this.map.set(this.data,!this.map.get(this.data))}toggleLevel(e){const t=this.data.children||[];this.map.set(t[e],!this.map.get(t[e]))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-tree-example-4"]],decls:11,vars:5,consts:[[3,"childrenHandler","content","map","tuiTreeController","value"],["content",""],["size","s","tuiButton","","type","button",1,"programmatic","tui-space_right-2",3,"click"],["size","s","tuiButton","","type","button",1,"programmatic",3,"click"]],template:function(e,t){if(1&e&&(s.wR5(0,"tui-tree",0),s.yuY(1,M,1,1,"ng-template",null,1,s.gJz),s.I0R(3,"p")(4,"button",2),s.qCj("click",(function(){return t.toggleTopmost()})),s.OEk(5," Toggle Topmost "),s.C$Y()(),s.I0R(6,"p")(7,"button",3),s.qCj("click",(function(){return t.toggleLevel(0)})),s.OEk(8," Toggle Top level 1 "),s.C$Y()(),s.I0R(9,"button",3),s.qCj("click",(function(){return t.toggleLevel(2)})),s.OEk(10," Toggle Top level 3\n"),s.C$Y()),2&e){const e=s.Gew(2);s.E7m("childrenHandler",t.handler)("content",e)("map",t.map)("tuiTreeController",!1)("value",t.data)}},dependencies:[E.w,R._,Y.w,b.K],encapsulation:2,changeDetection:0}),t})();var P=n(58200);let _=(()=>{var e;class t extends u.TuiTreeItemContentComponent{get icon(){return this.isExpandable?"tuiIconFolderLarge":"tuiIconFileLarge"}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.otF(e)))(n||e)}}(),e.ɵcmp=s.In1({type:e,selectors:[["folders"]],hostBindings:function(e,t){1&e&&s.qCj("click",(function(){return t.onClick()}))},features:[s.eg9],decls:2,vars:2,consts:[[1,"tui-space_right-2",3,"src"],[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&(s.wR5(0,"tui-svg",0),s.C_f(1,1)),2&e&&(s.E7m("src",t.icon),s.yG2(1),s.E7m("ngTemplateOutlet",t.context.template))},dependencies:[k.W,o.XV],styles:['[_nghost-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;height:var(--tui-height-s);display:flex;align-items:center;padding:0 .5rem;border-radius:var(--tui-radius-xs);background:var(--tui-base-01)}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:"";position:absolute;left:-.75rem;z-index:-1}[_nghost-%COMP%]:before{width:1rem;border-bottom:1px solid var(--tui-base-04)}[_nghost-%COMP%]:after{top:-1rem;bottom:1rem;border-left:1px solid var(--tui-base-04)}._expandable[_nghost-%COMP%]:hover{cursor:pointer;background:var(--tui-base-02)}tui-svg[_ngcontent-%COMP%]{position:relative;background:inherit;z-index:1}']}),t})();function G(e,t){if(1&e&&s.wR5(0,"tui-tree",2),2&e){const e=t.$implicit,n=s.GaO(),o=s.Gew(2);s.E7m("childrenHandler",n.handler)("content",o)("tuiTreeController",!0)("value",e)}}function S(e,t){if(1&e&&s.OEk(0),2&e){const e=t.$implicit;s.oRS(" ",e.text,"\n")}}let H=(()=>{var e;class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||a.EMPTY_ARRAY}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-tree-example-5"]],features:[s.M5G([{provide:u.TUI_TREE_CONTENT,useValue:new P.WO(_)}])],decls:3,vars:1,consts:[[3,"childrenHandler","content","tuiTreeController","value",4,"ngFor","ngForOf"],["content",""],[3,"childrenHandler","content","tuiTreeController","value"]],template:function(e,t){1&e&&(s.yuY(0,G,1,4,"tui-tree",0),s.yuY(1,S,1,1,"ng-template",null,1,s.gJz)),2&e&&s.E7m("ngForOf",t.data.children)},dependencies:[E.w,R._,f.s,o.ay],styles:["tui-tree[_ngcontent-%COMP%]{overflow:hidden}"],changeDetection:0}),t})();var N=n(12772),A=n(89936);function L(e,t){if(1&e&&s.wR5(0,"tui-tree",2),2&e){const e=t.$implicit,n=s.GaO(),o=s.Gew(2);s.E7m("childrenHandler",n.handler)("content",o)("tuiTreeController",!0)("value",e)}}function D(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-checkbox-labeled",3),s.qCj("ngModelChange",(function(t){const n=s.usT(e).$implicit,o=s.GaO();return s.CGJ(o.onChecked(n,t))})),s.wVc(1,"tuiMapper"),s.OEk(2),s.C$Y()}if(2&e){const e=t.$implicit,n=s.GaO();s.E7m("ngModel",s.I7O(1,2,e,n.getValue,n.map)),s.yG2(2),s.oRS(" ",e.text," ")}}function F(e){return e.children?e.children.map(F).reduce(((e,t)=>[...e,...t]),[]):[e]}let V=(()=>{var e;class t{constructor(){this.map=new Map,this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||a.EMPTY_ARRAY,this.getValue=(e,t)=>{const n=F(e),o=!!t.get(n[0]);for(const e of n)if(o!==!!t.get(e))return null;return o}}onChecked(e,t){F(e).forEach((e=>this.map.set(e,t))),this.map=new Map(this.map.entries())}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-tree-example-6"]],decls:3,vars:1,consts:[[3,"childrenHandler","content","tuiTreeController","value",4,"ngFor","ngForOf"],["content",""],[3,"childrenHandler","content","tuiTreeController","value"],[1,"tui-space_vertical-2","tui-space_left-1",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.yuY(0,L,1,4,"tui-tree",0),s.yuY(1,D,3,6,"ng-template",null,1,s.gJz)),2&e&&s.E7m("ngForOf",t.data.children)},dependencies:[E.w,R._,f.s,N.a,i.ue,i._G,o.ay,A.M],encapsulation:2,changeDetection:0}),t})();var z=n(76468),B=n(14184);let j=(()=>{var e;class t{loadChildren({text:e}){return(0,z.k)(3e3).pipe((0,B.k)((()=>[{text:`${e} 1`,children:Math.random()>.5},{text:`${e} 2`,children:Math.random()>.5},{text:`${e} 3`,children:Math.random()>.5}])))}hasChildren({children:e}){return!!e}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵprov=s.wxM({token:e,factory:e.ɵfac}),t})();var q=n(18692);function J(e,t){1&e&&s.wR5(0,"tui-loader",4)}function U(e,t){if(1&e&&s.OEk(0),2&e){const e=s.GaO().$implicit;s.cNF(e.text)}}function K(e,t){if(1&e&&(s.yuY(0,J,1,0,"tui-loader",2),s.yuY(1,U,1,1,"ng-template",null,3,s.gJz)),2&e){const e=t.$implicit,n=s.Gew(2),o=s.GaO();s.E7m("ngIf",e===o.loading)("ngIfElse",n)}}let W=(()=>{var e;class t{constructor(e,t){this.loading=e,this.service=t,this.map=new Map,this.childrenHandler=e=>this.service.getChildren(e)}onToggled(e){this.service.loadChildren(e)}}return(e=t).ɵfac=function(t){return new(t||e)(s.GI1(u.TUI_TREE_LOADING),s.GI1(u.TuiTreeService))},e.ɵcmp=s.In1({type:e,selectors:[["tui-tree-example-7"]],features:[s.M5G([u.TuiTreeService,{provide:u.TUI_TREE_START,useValue:{text:"Topmost"}},{provide:u.TUI_TREE_LOADER,useClass:j}])],decls:4,vars:7,consts:[[3,"childrenHandler","content","map","tuiTreeController","value","toggled"],["content",""],["class","loader",4,"ngIf","ngIfElse"],["text",""],[1,"loader"]],template:function(e,t){if(1&e&&(s.I0R(0,"tui-tree",0),s.qCj("toggled",(function(e){return t.onToggled(e)})),s.wVc(1,"async"),s.C$Y(),s.yuY(2,K,3,2,"ng-template",null,1,s.gJz)),2&e){const e=s.Gew(3);s.E7m("childrenHandler",t.childrenHandler)("content",e)("map",t.map)("tuiTreeController",!1)("value",s.kDX(1,5,t.service.data$))}},dependencies:[E.w,R._,Y.w,q.C,o.u_,o.a],styles:[".loader[_ngcontent-%COMP%]{width:2rem;margin:1rem 0}"],changeDetection:0}),t})();function X(e,t){if(1&e&&(s.I0R(0,"p"),s.OEk(1,"Component to display tree-like data structure"),s.C$Y(),s.I0R(2,"tui-doc-example",2),s.wR5(3,"tui-tree-example-1"),s.C$Y(),s.I0R(4,"tui-doc-example",3),s.wR5(5,"tui-tree-example-2"),s.C$Y(),s.I0R(6,"tui-doc-example",4),s.wR5(7,"tui-tree-example-3"),s.C$Y(),s.I0R(8,"tui-doc-example",5),s.wR5(9,"tui-tree-example-4"),s.C$Y(),s.I0R(10,"tui-doc-example",6),s.wR5(11,"tui-tree-example-5"),s.C$Y(),s.I0R(12,"tui-doc-example",7),s.wR5(13,"tui-tree-example-6"),s.C$Y(),s.I0R(14,"tui-doc-example",8),s.wR5(15,"tui-tree-example-7"),s.C$Y()),2&e){const e=s.GaO();s.yG2(2),s.E7m("content",e.example1),s.yG2(2),s.E7m("content",e.example2),s.yG2(2),s.E7m("content",e.example3),s.yG2(2),s.E7m("content",e.example4),s.yG2(2),s.E7m("content",e.example5),s.yG2(2),s.E7m("content",e.example6),s.yG2(2),s.E7m("content",e.example7)}}function Q(e,t){1&e&&(s.OEk(0," Directive used to enable opening/closing of nodes with children. "),s.I0R(1,"code"),s.OEk(2,"Boolean"),s.C$Y(),s.OEk(3," input is the default state. "))}function Z(e,t){}function ee(e,t){}function te(e,t){}function ne(e,t){1&e&&(s.OEk(0," Directive used to enable opening/closing of nodes with children. "),s.I0R(1,"code"),s.OEk(2,"Boolean"),s.C$Y(),s.OEk(3," input is the default state. "))}function oe(e,t){1&e&&s.OEk(0," A map used with controller directive for manual programmatic toggling. ")}function ie(e,t){1&e&&(s.OEk(0," Function used by "),s.I0R(1,"code"),s.OEk(2,"*ngFor"),s.C$Y(),s.OEk(3," directive to render nested tree items. "))}function re(e,t){1&e&&(s.OEk(0," Provide your own component used internally to display node content (see "),s.I0R(1,"a",21),s.OEk(2," this example "),s.C$Y(),s.OEk(3," ) "))}function le(e,t){1&e&&s.OEk(0," Provide your own open/closed controlling mechanism ")}function ae(e,t){1&e&&(s.OEk(0," Provide your own tracker for value/node pairs (so you can match "),s.I0R(1,"code"),s.OEk(2,"TreeItem"),s.C$Y(),s.OEk(3," instances to their corresponding "),s.I0R(4,"code"),s.OEk(5,"data: T"),s.C$Y(),s.OEk(6," when using "),s.I0R(7,"code"),s.OEk(8,"Tree"),s.C$Y(),s.OEk(9," component with custom open/closed controller) "))}function ce(e,t){1&e&&(s.I0R(0,"tui-doc-documentation",9),s.yuY(1,Q,4,0,"ng-template",10),s.C$Y(),s.I0R(2,"tui-doc-documentation",11),s.yuY(3,Z,0,0,"ng-template",12),s.yuY(4,ee,0,0,"ng-template",13),s.yuY(5,te,0,0,"ng-template",14),s.yuY(6,ne,4,0,"ng-template",10),s.yuY(7,oe,1,0,"ng-template",15),s.yuY(8,ie,4,0,"ng-template",16),s.C$Y(),s.I0R(9,"tui-doc-documentation",17),s.yuY(10,re,4,0,"ng-template",18),s.yuY(11,le,1,0,"ng-template",19),s.yuY(12,ae,10,0,"ng-template",20),s.C$Y()),2&e&&(s.E7m("showValues",!1),s.yG2(2),s.E7m("showValues",!1),s.yG2(7),s.E7m("showValues",!1))}function ue(e,t){if(1&e&&(s.I0R(0,"ol",22)(1,"li")(2,"p"),s.OEk(3," Import "),s.I0R(4,"code"),s.OEk(5,"TuiTreeModule"),s.C$Y(),s.OEk(6," into a module where you want to use our component "),s.C$Y(),s.wR5(7,"tui-doc-code",23),s.C$Y(),s.I0R(8,"li")(9,"p"),s.OEk(10,"Add to the template:"),s.C$Y(),s.wR5(11,"tui-doc-code",24),s.C$Y()()),2&e){const e=s.GaO();s.yG2(7),s.E7m("code",e.exampleModule),s.yG2(4),s.E7m("code",e.exampleHtml)}}let se=(()=>{var e;class t{constructor(){this.exampleModule=n.e(97675).then(n.t.bind(n,97675,17)),this.exampleHtml=n.e(32184).then(n.t.bind(n,32184,17)),this.example1={TypeScript:n.e(15288).then(n.t.bind(n,15288,17)),HTML:n.e(77508).then(n.t.bind(n,77508,17))},this.example2={TypeScript:n.e(50243).then(n.t.bind(n,50243,17)),HTML:n.e(3192).then(n.t.bind(n,3192,17)),LESS:n.e(20440).then(n.t.bind(n,20440,17))},this.example3={TypeScript:n.e(62880).then(n.t.bind(n,62880,17)),HTML:n.e(41888).then(n.t.bind(n,41888,17)),LESS:n.e(40732).then(n.t.bind(n,40732,17))},this.example4={TypeScript:n.e(800).then(n.t.bind(n,800,17)),HTML:n.e(31466).then(n.t.bind(n,31466,17))},this.example5={TypeScript:n.e(28280).then(n.t.bind(n,28280,17)),HTML:n.e(62232).then(n.t.bind(n,62232,17)),LESS:n.e(51824).then(n.t.bind(n,7060,17)),"content.ts":n.e(3420).then(n.t.bind(n,3420,17)),"content.less":n.e(10648).then(n.t.bind(n,10648,17))},this.example6={TypeScript:n.e(89944).then(n.t.bind(n,89944,17)),HTML:n.e(42796).then(n.t.bind(n,42796,17))},this.example7={TypeScript:n.e(83576).then(n.t.bind(n,83576,17)),HTML:n.e(28624).then(n.t.bind(n,28624,17)),LESS:n.e(52587).then(n.t.bind(n,52587,17)),"service.ts":n.e(40420).then(n.t.bind(n,40420,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["example-tree"]],decls:4,vars:0,consts:[["header","Tree","package","KIT","type","components"],["pageTab",""],["id","manual","heading","Manual",3,"content"],["id","array","heading","Array",3,"content"],["id","template","heading","Template",3,"content"],["id","programmatic","heading","Programmatic control",3,"content"],["id","custom","heading","Custom",3,"content"],["id","checkbox","heading","Checkbox",3,"content"],["id","async","heading","Asynchronous",3,"content"],["heading","TreeItem",3,"showValues"],["documentationPropertyMode","input","documentationPropertyName","tuiTreeController","documentationPropertyType","boolean"],["heading","Tree",3,"showValues"],["documentationPropertyMode","input","documentationPropertyName","childrenHandler","documentationPropertyType","TuiHandler<T, readonly T[]>"],["documentationPropertyMode","input","documentationPropertyName","content","documentationPropertyType","PolymorpheusContent<TuiTreeContext>"],["documentationPropertyMode","input","documentationPropertyName","data","documentationPropertyType","T"],["documentationPropertyMode","input","documentationPropertyName","map","documentationPropertyType","Map<T, boolean>"],["documentationPropertyMode","input","documentationPropertyName","trackBy","documentationPropertyType","TrackByFunction<T>"],["heading","Tokens",3,"showValues"],["documentationPropertyName","TUI_TREE_CONTENT","documentationPropertyType","PolymorpheusContent<TuiTreeItemContext>"],["documentationPropertyName","TUI_TREE_CONTROLLER","documentationPropertyType","TuiTreeController"],["documentationPropertyName","TUI_TREE_ACCESSOR","documentationPropertyType","TuiTreeAccessor<T>"],["fragment","custom","routerLink","/components/tree","tuiLink",""],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(s.I0R(0,"tui-doc-page",0),s.yuY(1,X,16,7,"ng-template",1),s.yuY(2,ce,13,3,"ng-template",1),s.yuY(3,ue,12,2,"ng-template",1),s.C$Y())},dependencies:[d.C,p.u,m.I,h.S,g.E,T.u,y.I,r.ER,v,C,w,$,H,V,W],encapsulation:2,changeDetection:0}),t})(),de=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=s.a4G({type:e}),e.ɵinj=s.s3X({imports:[u.TuiTreeModule,c.TuiSvgModule,c.TuiButtonModule,c.TuiLinkModule,u.TuiCheckboxLabeledModule,a.TuiMapperPipeModule,c.TuiLoaderModule,i.y,o.MD,l.kx,r.qQ.forChild((0,l._A)(se))]}),t})()}}]);