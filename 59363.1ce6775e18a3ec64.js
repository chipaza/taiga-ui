(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59363],{81744:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiFilterByInputModule:()=>W});var n=i(86568),a=i(35856),r=i(82312),o=i(59130),u=i(43840),s=i(91009),l=i(6528),m=i(13692),c=i(34496),p=i(37288),d=i(83480),f=i(73148),h=i(61920),y=i(2036),w=i(76004),C=i(5204);function b(e,t){if(1&e&&(l.wR5(0,"tui-data-list-wrapper",3),l.wVc(1,"tuiFilterByInput")),2&e){const e=l.GaO();l.E7m("items",l.kDX(1,1,e.items))}}let E=(()=>{var e;class t{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new a.WC({user:new a.Ku("")})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-filter-by-input-example-1"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(l.I0R(0,"form",0)(1,"tui-input",1),l.OEk(2," User "),l.yuY(3,b,2,3,"tui-data-list-wrapper",2),l.C$Y()()),2&e&&l.E7m("formGroup",t.form)},dependencies:[a.sz,a.ue,a.u,a.uW,a.Wo,f.O,h.c,y.U,w.O,C.E],encapsulation:2,changeDetection:0}),t})();var I=i(5604),g=i(81056),x=i(89616);function T(e,t){if(1&e&&(l.wR5(0,"tui-data-list-wrapper",5),l.wVc(1,"tuiFilterByInput")),2&e){const e=l.GaO();l.E7m("items",l.g7$(1,1,e.items,e.matcherString))}}function G(e,t){if(1&e&&(l.wR5(0,"tui-data-list-wrapper",6),l.wVc(1,"tuiStringifyContent"),l.wVc(2,"tuiFilterByInput")),2&e){const e=l.GaO();l.E7m("itemContent",l.kDX(1,2,e.stringify))("items",l.g7$(2,4,e.users,e.matcherUser))}}let M=(()=>{var e;class t{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.users=[{id:1,name:"John Cleese"},{id:2,name:"Eric Idle"},{id:3,name:"Graham Chapman"},{id:4,name:"Michael Palin"},{id:5,name:"Terry Gilliam"}],this.form=new a.WC({user:new a.Ku(null),user2:new a.Ku(null)}),this.stringify=({name:e})=>e,this.matcherString=(e,t)=>e.split(" ").pop().toLowerCase().startsWith(t.toLowerCase()),this.matcherUser=(e,t)=>e.name.toLowerCase().startsWith(t.toLowerCase())}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-filter-by-input-example-2"]],decls:7,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],["formControlName","user2",1,"tui-space_top-5",3,"stringify"],[3,"itemContent","items",4,"tuiDataList"],[3,"items"],[3,"itemContent","items"]],template:function(e,t){1&e&&(l.I0R(0,"form",0)(1,"tui-combo-box",1),l.OEk(2," Search by last name "),l.yuY(3,T,2,4,"tui-data-list-wrapper",2),l.C$Y(),l.I0R(4,"tui-combo-box",3),l.OEk(5," With ids "),l.yuY(6,G,3,7,"tui-data-list-wrapper",4),l.C$Y()()),2&e&&(l.E7m("formGroup",t.form),l.yG2(4),l.E7m("stringify",t.stringify))},dependencies:[a.sz,a.ue,a.u,a.uW,a.Wo,y.U,w.O,I.i,g.q,C.E,x.M],encapsulation:2,changeDetection:0}),t})();var O=i(96780),k=i(96148),R=i(45788),Y=i(7332);function L(e,t){if(1&e&&(l.wR5(0,"tui-data-list-wrapper",2),l.wVc(1,"tuiFilterByInput")),2&e){const e=l.GaO();l.E7m("items",l.kDX(1,1,e.items))}}let S=(()=>{var e;class t{constructor(){this.items=["Luke Skywalker","Leia Organa Solo","Darth Vader","Han Solo","Obi-Wan Kenobi","Yoda"],this.control=new a.Ku([this.items[0]])}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-filter-by-input-example-3"]],decls:3,vars:2,consts:[["placeholder","Ignored text",1,"b-form",3,"formControl","tuiTextfieldLabelOutside"],["tuiMultiSelectGroup","",3,"items",4,"tuiDataList"],["tuiMultiSelectGroup","",3,"items"]],template:function(e,t){1&e&&(l.I0R(0,"tui-multi-select",0),l.OEk(1," Star Wars persons "),l.yuY(2,L,2,3,"tui-data-list-wrapper",1),l.C$Y()),2&e&&l.E7m("formControl",t.control)("tuiTextfieldLabelOutside",!0)},dependencies:[a.ue,a.ug,y.U,w.O,O.g,k.q,R.E,Y.E,C.E],encapsulation:2,changeDetection:0}),t})();function D(e,t){if(1&e&&(l.OEk(0," Pipe for filtering an array by value entered in a textfield "),l.I0R(1,"tui-doc-example",3),l.wR5(2,"tui-filter-by-input-example-1"),l.C$Y(),l.I0R(3,"tui-doc-example",4),l.wR5(4,"tui-filter-by-input-example-2"),l.C$Y(),l.I0R(5,"tui-doc-example",5),l.wR5(6,"tui-filter-by-input-example-3"),l.C$Y()),2&e){const e=l.GaO();l.yG2(1),l.E7m("content",e.example1),l.yG2(2),l.E7m("content",e.example2),l.yG2(2),l.E7m("content",e.example3)}}function $(e,t){if(1&e&&(l.I0R(0,"ol",6)(1,"li")(2,"p"),l.OEk(3," Import "),l.I0R(4,"code"),l.OEk(5,"TuiFilterByInputPipeModule"),l.C$Y(),l.OEk(6," into a module where you want to use our component "),l.C$Y(),l.wR5(7,"tui-doc-code",7),l.C$Y(),l.I0R(8,"li")(9,"p"),l.OEk(10,"Use pipe in template under Taiga UI control:"),l.C$Y(),l.wR5(11,"tui-doc-code",8),l.C$Y()()),2&e){const e=l.GaO();l.yG2(7),l.E7m("code",e.exampleModule),l.yG2(4),l.E7m("code",e.exampleHtml)}}let v=(()=>{var e;class t{constructor(){this.exampleModule=i.e(6108).then(i.t.bind(i,6108,17)),this.exampleHtml=i.e(29264).then(i.t.bind(i,29264,17)),this.example1={TypeScript:i.e(71764).then(i.t.bind(i,71764,17)),HTML:i.e(54884).then(i.t.bind(i,54884,17))},this.example2={TypeScript:i.e(2276).then(i.t.bind(i,2276,17)),HTML:i.e(98524).then(i.t.bind(i,98524,17))},this.example3={TypeScript:i.e(21040).then(i.t.bind(i,21040,17)),HTML:i.e(14119).then(i.t.bind(i,14119,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["example-tui-filter-by-input"]],decls:3,vars:0,consts:[["header","FilterByInput","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base","heading","Basic",3,"content"],["id","matcher","heading","Custom matcher",3,"content"],["id","multi","heading","Multiselect",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.I0R(0,"tui-doc-page",0),l.yuY(1,D,7,3,"ng-template",1),l.yuY(2,$,12,2,"ng-template",2),l.C$Y())},dependencies:[m.u,c.E,p.u,d.I,E,M,S],encapsulation:2,changeDetection:0}),t})(),W=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=l.a4G({type:e}),e.ɵinj=l.s3X({imports:[n.MD,a.sl,s.TuiFilterByInputPipeModule,o.kx,s.TuiInputModule,u.TuiDataListModule,s.TuiDataListWrapperModule,s.TuiComboBoxModule,s.TuiMultiSelectModule,u.TuiTextfieldControllerModule,s.TuiStringifyContentPipeModule,r.qQ.forChild((0,o._A)(v))]}),t})()}}]);