(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44751],{72188:(t,e,o)=>{o.d(e,{K:()=>y});var n=o(11307),i=o(6528),r=o(82312),u=o(95356),d=o(56616),a=o(55412),p=o(86568);function c(t,e){1&t&&i.OEk(0," Manual control/monitor for the dropdown being visible ")}function m(t,e){1&t&&(i.OEk(0," Align of dropdown (does not work together with "),i.I0R(1,"code"),i.OEk(2,"limitWidth === 'fixed'"),i.C$Y(),i.OEk(3," ) "))}function l(t,e){1&t&&i.OEk(0," Set a vertical direction of dropdown ")}function s(t,e){1&t&&i.OEk(0," Limit width of dropdown ")}function w(t,e){1&t&&(i.OEk(0," Minimum height to calculate that dropdown fits to set "),i.I0R(1,"code"),i.OEk(2,"tuiDropdownDirection"),i.C$Y())}function h(t,e){1&t&&i.OEk(0," Maximum height of dropdown ")}function g(t,e){1&t&&i.OEk(0," Dropdown offset ")}o(97448);let y=(()=>{var t;class e{constructor(t){this.documentedComponent=t}}return(t=e).ɵfac=function(e){return new(e||t)(i.GI1(n.m))},t.ɵcmp=i.In1({type:t,selectors:[["dropdown-documentation"]],decls:17,vars:12,consts:[[1,"tui-text_h6"],["routerLink","/directives/dropdown","target","_blank","tuiLink",""],["documentationPropertyMode","input-output","documentationPropertyName","tuiDropdownOpen","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownAlign","documentationPropertyType","TuiDropdownAlign",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownDirection","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyType","TuiDropdownWidth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMinHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownOffset","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(i.I0R(0,"h6",0),i.OEk(1," Can be expanded with "),i.I0R(2,"a",1),i.OEk(3," TuiDropdown "),i.C$Y()(),i.I0R(4,"p"),i.OEk(5," Requires you to import "),i.I0R(6,"code"),i.OEk(7,"TuiDropdownModule"),i.C$Y()(),i.I0R(8,"tui-doc-documentation"),i.yuY(9,c,1,0,"ng-template",2),i.wVc(10,"async"),i.qCj("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownOpen.next(t)})),i.yuY(11,m,4,0,"ng-template",3),i.qCj("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownAlign=t})),i.yuY(12,l,1,0,"ng-template",4),i.qCj("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownDirection=t})),i.yuY(13,s,1,0,"ng-template",5),i.qCj("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownLimitWidth=t})),i.yuY(14,w,3,0,"ng-template",6),i.qCj("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMinHeight=t})),i.yuY(15,h,1,0,"ng-template",7),i.qCj("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMaxHeight=t})),i.yuY(16,g,1,0,"ng-template",8),i.qCj("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownOffset=t})),i.C$Y()),2&t&&(i.yG2(9),i.E7m("documentationPropertyValue",i.kDX(10,10,e.documentedComponent.dropdownOpen)),i.yG2(2),i.E7m("documentationPropertyValues",e.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",e.documentedComponent.dropdownAlign),i.yG2(1),i.E7m("documentationPropertyValues",e.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",e.documentedComponent.dropdownDirection),i.yG2(1),i.E7m("documentationPropertyValues",e.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",e.documentedComponent.dropdownLimitWidth),i.yG2(1),i.E7m("documentationPropertyValue",e.documentedComponent.dropdownMinHeight),i.yG2(1),i.E7m("documentationPropertyValue",e.documentedComponent.dropdownMaxHeight),i.yG2(1),i.E7m("documentationPropertyValue",e.documentedComponent.dropdownOffset))},dependencies:[r.ER,u.I,d.S,a.C,p.a],encapsulation:2,changeDetection:0}),e})()},63960:(t,e,o)=>{o.d(e,{Y:()=>a});var n=o(86568),i=o(82312),r=o(59130),u=o(43840),d=o(6528);let a=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=d.a4G({type:t}),t.ɵinj=d.s3X({imports:[n.MD,i.qQ,r.uS,u.TuiLinkModule]}),e})()},97448:(t,e,o)=>{o.d(e,{o:()=>r});var n=o(43840),i=o(86112);class r{constructor(){this.dropdownAlignVariants=["left","right","center"],this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownDirectionVariants=["bottom","top"],this.dropdownAlign=n.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownDirection=n.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownLimitWidth=n.TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth,this.dropdownMinHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.dropdownOffset=n.TUI_DROPDOWN_DEFAULT_OPTIONS.offset,this.dropdownOpen=new i.g(!1)}}},11307:(t,e,o)=>{o.d(e,{m:()=>n});const n=new(o(6528).UbH)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},44751:(t,e,o)=>{o.r(e),o.d(e,{ExampleTuiDropdownModule:()=>it});var n=o(86568),i=o(35856),r=o(82312),u=o(59130),d=o(18917),a=o(43840),p=o(91009),c=o(58200),m=o(63960),l=o(6528),s=o(97448),w=o(11307),h=o(55412),g=o(8673),y=o(35137),C=o(32612),f=o(68588),O=o(73580),D=o(30420),E=o(62224),M=o(13692),P=o(96808),k=o(95356),I=o(56616),v=o(34496),x=o(37288),T=o(83480),R=o(72188);function Y(t,e){1&t&&(l.I0R(0,"div",2),l.OEk(1,"But there is nothing to choose..."),l.C$Y())}let b=(()=>{var t;class e{constructor(){this.open=!1}onClick(){this.open=!this.open}onObscured(t){t&&(this.open=!1)}onActiveZone(t){this.open=t&&this.open}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.In1({type:t,selectors:[["tui-dropdown-example-1"]],decls:4,vars:2,consts:[["iconRight","tuiIconChevronDown","tuiButton","","type","button",3,"tuiDropdown","tuiDropdownManual","click","tuiActiveZoneChange","tuiObscured"],["dropdownContent",""],[1,"dropdown"]],template:function(t,e){if(1&t&&(l.I0R(0,"button",0),l.qCj("click",(function(){return e.onClick()}))("tuiActiveZoneChange",(function(t){return e.onActiveZone(t)}))("tuiObscured",(function(t){return e.onObscured(t)})),l.OEk(1," Choose "),l.yuY(2,Y,2,0,"ng-template",null,1,l.gJz),l.C$Y()),2&t){const t=l.Gew(3);l.E7m("tuiDropdown",t)("tuiDropdownManual",e.open)}},dependencies:[g.K,y.K,f.y,O.U,D.M],styles:[".dropdown[_ngcontent-%COMP%]{font-size:.8125rem;line-height:1.25rem;text-transform:uppercase;letter-spacing:.075em;padding:.25rem .75rem}"],changeDetection:0}),e})();var G=o(47819),V=o(34600),$=o(9544);let A,_=t=>t;function L(t,e){if(1&t&&(l.I0R(0,"div",5),l.wR5(1,"tui-avatar",6),l.I0R(2,"div",7)(3,"div",8),l.OEk(4,"Taiga UI developer"),l.C$Y(),l.I0R(5,"div",9),l.OEk(6,"Alex Inkin"),l.C$Y(),l.I0R(7,"div",10),l.OEk(8,"a.inkin"),l.C$Y()()()),2&t){const t=l.GaO();l.yG2(1),l.E7m("avatarUrl",t.avatarUrl)("rounded",!0)}}let S=(()=>{var t;class e{constructor(){this.open=!1,this.avatarUrl=(0,G._)(A||(A=_`/images/avatar.jpg`))}onMouseEnter(){this.open=!0}onMouseLeave(){this.open=!1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.In1({type:t,selectors:[["tui-dropdown-example-2"]],decls:12,vars:5,consts:[[1,"toggle"],["size","l",3,"ngModel","ngModelChange"],["tuiDropdown","A directive to show content in a dropdown","tuiDropdownDirection","bottom",3,"textContent","tuiDropdownManual"],["tuiDropdownDirection","top","tuiLink","","type","button",3,"tuiDropdown","tuiDropdownManual"],["dropdownContent",""],[1,"dropdown"],["size","l",3,"avatarUrl","rounded"],[1,"text"],[1,"label"],[1,"name"],[1,"account"]],template:function(t,e){if(1&t&&(l.I0R(0,"p")(1,"label",0)(2,"tui-toggle",1),l.qCj("ngModelChange",(function(t){return e.open=t})),l.C$Y(),l.OEk(3," Show help "),l.C$Y()(),l.OEk(4,"\nYou can ask any questions about\n"),l.wR5(5,"code",2),l.OEk(6,"\nand\n"),l.I0R(7,"button",3),l.OEk(8," Alex\n"),l.C$Y(),l.OEk(9,"\nwill gladly answer! "),l.yuY(10,L,9,2,"ng-template",null,4,l.gJz)),2&t){const t=l.Gew(11);l.yG2(2),l.E7m("ngModel",e.open),l.yG2(3),l.E7m("textContent","tuiDropdown")("tuiDropdownManual",e.open),l.yG2(2),l.E7m("tuiDropdown",t)("tuiDropdownManual",e.open)}},dependencies:[i.ue,i._G,h.C,V.I,y.K,C.oF,f.y,$.y],styles:[".dropdown[_ngcontent-%COMP%]{display:flex;width:14rem;padding:.375rem .75rem}.toggle[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center}.text[_ngcontent-%COMP%]{padding:0 .75rem}.label[_ngcontent-%COMP%]{font:var(--tui-font-text-m);color:var(--tui-text-03)}.name[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.account[_ngcontent-%COMP%]{font:var(--tui-font-text-s);margin-top:.25rem;color:var(--tui-text-02)}"],changeDetection:0}),e})();var q=o(13052),H=o(12436),U=o(73148),N=o(61920);function j(t,e){1&t&&(l.I0R(0,"p"),l.OEk(1," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae? "),l.C$Y())}function W(t,e){if(1&t){const t=l.KQA();l.I0R(0,"div",4)(1,"tui-input",0),l.qCj("ngModelChange",(function(e){l.usT(t);const o=l.GaO();return l.CGJ(o.value=e)})),l.OEk(2,"Changes propagate both ways"),l.C$Y(),l.I0R(3,"p"),l.OEk(4," Use "),l.I0R(5,"code"),l.OEk(6,"polymorpheus"),l.C$Y(),l.OEk(7," directive on the template to make changes propagate both ways "),l.C$Y(),l.yuY(8,j,2,0,"p",5),l.C$Y()}if(2&t){const t=l.GaO();l.yG2(1),l.E7m("ngModel",t.value),l.yG2(7),l.E7m("ngIf",t.showBigText)}}let z=(()=>{var t;class e{constructor(t,e){this.open=!1,this.value="some data",this.showBigText=!1,(0,q.I)(3e3).pipe((0,d.tuiWatch)(e),(0,H.a)(t)).subscribe((()=>{this.showBigText=!this.showBigText}))}}return(t=e).ɵfac=function(e){return new(e||t)(l.GI1(d.TuiDestroyService,2),l.GI1(l.kD9))},t.ɵcmp=l.In1({type:t,selectors:[["tui-dropdown-example-3"]],features:[l.M5G([d.TuiDestroyService])],decls:7,vars:5,consts:[[3,"ngModel","ngModelChange"],[1,"flex",3,"tuiDropdown","tuiDropdownManual"],[3,"polymorpheus"],["dropdownContent","polymorpheus"],[1,"dropdown"],[4,"ngIf"]],template:function(t,e){if(1&t&&(l.I0R(0,"tui-input",0),l.qCj("ngModelChange",(function(t){return e.value=t})),l.OEk(1,"Changes propagate both ways"),l.C$Y(),l.I0R(2,"label",1)(3,"tui-toggle",0),l.qCj("ngModelChange",(function(t){return e.open=t})),l.C$Y(),l.OEk(4," Open dropdown\n"),l.C$Y(),l.yuY(5,W,9,2,"ng-template",2,3,l.gJz)),2&t){const t=l.Gew(6);l.E7m("ngModel",e.value),l.yG2(2),l.E7m("tuiDropdown",t)("tuiDropdownManual",e.open),l.yG2(1),l.E7m("ngModel",e.open),l.yG2(2),l.E7m("polymorpheus","")}},dependencies:[n.u_,i.ue,i._G,c.sv,y.K,f.y,$.y,U.O,N.c],styles:[".flex[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-top:1rem}.dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:1rem}"],changeDetection:0}),e})();function B(t,e){1&t&&(l.I0R(0,"blockquote"),l.OEk(1,"I'm a customized dropdown!"),l.C$Y())}let K=(()=>{var t;class e{constructor(){this.open=!1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.In1({type:t,selectors:[["tui-dropdown-example-4"]],decls:5,vars:3,consts:[["tuiDropdownAlign","center","tuiDropdownAppearance","round","tuiDropdownDirection","top",3,"tuiDropdown","tuiDropdownManual"],["size","l",1,"tui-space_right-2",3,"ngModel","ngModelChange"],["content",""]],template:function(t,e){if(1&t&&(l.I0R(0,"label",0)(1,"tui-toggle",1),l.qCj("ngModelChange",(function(t){return e.open=t})),l.C$Y(),l.OEk(2," Show dropdown "),l.yuY(3,B,2,0,"ng-template",null,2,l.gJz),l.C$Y()),2&t){const t=l.Gew(4);l.E7m("tuiDropdown",t)("tuiDropdownManual",e.open),l.yG2(1),l.E7m("ngModel",e.open)}},dependencies:[i.ue,i._G,y.K,C.oF,f.y,$.y],styles:["tui-dropdown[data-appearance=round]{border-radius:10rem}\n"],encapsulation:2,changeDetection:0}),e})();const F=function(){return["/directives/active-zone"]},J=function(){return["/components/hosted-dropdown"]};function Z(t,e){if(1&t&&(l.I0R(0,"div",2)(1,"code"),l.OEk(2,"tuiDropdown"),l.C$Y(),l.OEk(3," shows a dropdown with custom template. Use "),l.I0R(4,"a",3),l.OEk(5," ActiveZone "),l.C$Y(),l.OEk(6," directive to hide dropdown. "),l.C$Y(),l.I0R(7,"p"),l.OEk(8," See also "),l.I0R(9,"a",3),l.OEk(10," HostedDropdown "),l.C$Y()(),l.I0R(11,"tui-doc-example",4),l.wR5(12,"tui-dropdown-example-1"),l.C$Y(),l.I0R(13,"tui-doc-example",5),l.wR5(14,"tui-dropdown-example-2"),l.C$Y(),l.I0R(15,"tui-doc-example",6),l.wR5(16,"tui-dropdown-example-3"),l.C$Y(),l.I0R(17,"tui-doc-example",7)(18,"tui-notification",2),l.OEk(19," Use unencapsulated styles to customize dropdown appearance "),l.C$Y(),l.wR5(20,"tui-dropdown-example-4"),l.C$Y()),2&t){const t=l.GaO();l.yG2(4),l.E7m("routerLink",l.q4q(6,F)),l.yG2(5),l.E7m("routerLink",l.q4q(7,J)),l.yG2(2),l.E7m("content",t.example1),l.yG2(2),l.E7m("content",t.example2),l.yG2(2),l.E7m("content",t.example3),l.yG2(2),l.E7m("content",t.example4)}}function Q(t,e){1&t&&(l.I0R(0,"div",13),l.OEk(1," Here can be any content "),l.I0R(2,"p"),l.OEk(3,"You can even insert other components:"),l.C$Y(),l.I0R(4,"button",14),l.OEk(5," Do not touch! "),l.C$Y(),l.I0R(6,"p"),l.OEk(7,"Everything you want... *"),l.C$Y(),l.I0R(8,"sub"),l.OEk(9,"* except cases of human rights violation"),l.C$Y()())}function X(t,e){1&t&&l.OEk(0," Show dropdown (basic manual implementation, see related pages for other options) ")}function tt(t,e){1&t&&l.OEk(0," Content ")}function et(t,e){if(1&t){const t=l.KQA();l.I0R(0,"tui-doc-demo")(1,"span",8),l.qCj("tuiActiveZoneChange",(function(e){l.usT(t);const o=l.GaO();return l.CGJ(o.onActiveZone(e))})),l.I0R(2,"button",9),l.qCj("click",(function(){l.usT(t);const e=l.GaO();return l.CGJ(e.onClick())}))("tuiObscured",(function(e){l.usT(t);const o=l.GaO();return l.CGJ(o.onObscured(e))})),l.OEk(3," PRESS! "),l.I0R(4,"i"),l.OEk(5,"* There is also a pretty long text to check its width limitations"),l.C$Y()(),l.yuY(6,Q,10,0,"ng-template",null,10,l.gJz),l.C$Y()(),l.I0R(8,"tui-doc-documentation"),l.yuY(9,X,1,0,"ng-template",11),l.qCj("documentationPropertyValueChange",(function(e){l.usT(t);const o=l.GaO();return l.CGJ(o.open=e)})),l.yuY(10,tt,1,0,"ng-template",12),l.wR5(11,"dropdown-documentation"),l.C$Y()}if(2&t){const t=l.Gew(7),e=l.GaO();l.yG2(2),l.E7m("tuiDropdown",t)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownManual",e.open)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownOffset",e.dropdownOffset),l.yG2(7),l.E7m("documentationPropertyValue",e.open)}}function ot(t,e){if(1&t&&(l.I0R(0,"ol",15)(1,"li")(2,"p"),l.OEk(3," Import "),l.I0R(4,"code"),l.OEk(5,"TuiDropdownModule"),l.C$Y(),l.OEk(6," into a module where you want to use our component "),l.C$Y(),l.wR5(7,"tui-doc-code",16),l.C$Y(),l.I0R(8,"li")(9,"p"),l.OEk(10,"Add to the template:"),l.C$Y(),l.wR5(11,"tui-doc-code",17),l.C$Y()()),2&t){const t=l.GaO();l.yG2(7),l.E7m("code",t.exampleModule),l.yG2(4),l.E7m("code",t.exampleHtml)}}let nt=(()=>{var t;class e extends s.o{constructor(){super(...arguments),this.exampleModule=o.e(2012).then(o.t.bind(o,2012,17)),this.exampleHtml=o.e(70556).then(o.t.bind(o,70556,17)),this.example1={TypeScript:o.e(94027).then(o.t.bind(o,94027,17)),HTML:o.e(21800).then(o.t.bind(o,99420,17))},this.example2={TypeScript:o.e(63772).then(o.t.bind(o,63772,17)),HTML:o.e(19596).then(o.t.bind(o,19596,17))},this.example3={TypeScript:o.e(40604).then(o.t.bind(o,40604,17)),HTML:o.e(74300).then(o.t.bind(o,74300,17))},this.example4={TypeScript:o.e(7528).then(o.t.bind(o,7528,17)),HTML:o.e(29232).then(o.t.bind(o,29232,17)),LESS:o.e(13152).then(o.t.bind(o,13152,17))},this.open=!1}onClick(){this.open=!this.open}onObscured(t){t&&(this.open=!1)}onActiveZone(t){this.open=t&&this.open}}return(t=e).ɵfac=function(){let e;return function(o){return(e||(e=l.otF(t)))(o||t)}}(),t.ɵcmp=l.In1({type:t,selectors:[["example-tui-dropdown"]],features:[l.M5G([{provide:w.m,useExisting:(0,l.wd)((()=>t))}]),l.eg9],decls:4,vars:0,consts:[["header","Dropdown","package","CORE","type","directives"],["pageTab",""],[1,"tui-space_bottom-3"],["tuiLink","",3,"routerLink"],["id","base","heading","Basic",3,"content"],["id","full-featured","heading","Interesting one",3,"content"],["id","change-detection","heading","Change detection",3,"content"],["id","appearance","heading","Appearance",3,"content"],[3,"tuiActiveZoneChange"],["tuiButton","","type","button",3,"tuiDropdown","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownManual","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","click","tuiObscured"],["dropdownContent",""],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownManual","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdown","documentationPropertyType","PolymorpheusContent"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(l.I0R(0,"tui-doc-page",0),l.yuY(1,Z,21,8,"ng-template",1),l.yuY(2,et,12,9,"ng-template",1),l.yuY(3,ot,12,2,"ng-template",1),l.C$Y())},dependencies:[h.C,g.K,y.K,C.oF,f.y,O.U,D.M,E.e,M.u,P.m,k.I,I.S,v.E,x.u,T.I,R.K,r.ER,b,S,z,K],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),e})(),it=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=l.a4G({type:t}),t.ɵinj=l.s3X({imports:[n.MD,i.y,c.Ux,a.TuiLinkModule,p.TuiAvatarModule,a.TuiButtonModule,a.TuiDropdownModule,p.TuiSelectModule,d.TuiActiveZoneModule,p.TuiToggleModule,p.TuiInputModule,a.TuiNotificationModule,u.kx,m.Y,r.qQ.forChild((0,u._A)(nt))]}),e})()}}]);