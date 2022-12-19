"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[88708],{88708:(ue,E,o)=>{o.r(E),o.d(E,{ExampleTuiFilterModule:()=>re});var d=o(12057),l=o(24751),y=o(33982),F=o(29851),g=o(76040),C=o(418),x=o(89570),p=o(68339),e=o(74788),$=o(88331),A=o(37159),v=o(57068),T=o(16166);let Z=(()=>{class n{constructor(){this.form=new l.cw({filters:new l.NI(["Food"])}),this.items=["News","Food","Clothes","Popular","Goods","Furniture","Tech","Building materials"],this.disabledItemHandler=t=>t.length<7}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-filter-example-1"]],decls:6,vars:6,consts:[[3,"formGroup"],["formControlName","filters","size","s",3,"disabledItemHandler","items"]],template:function(t,a){1&t&&(e.TgZ(0,"form",0),e._UZ(1,"tui-filter",1),e.qZA(),e.TgZ(2,"div"),e.TgZ(3,"pre"),e._uU(4),e.ALo(5,"json"),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("disabledItemHandler",a.disabledItemHandler)("items",a.items),e.xp6(3),e.hij("Form value: ",e.lcZ(5,4,a.form.value),""))},directives:[l._Y,l.JL,l.sg,T.x,l.JJ,l.u],pipes:[d.Ts],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),n})();function b(n,i){1&n&&e._uU(0),2&n&&e.hij(" ",i.$implicit.title,"\n")}const J={title:"Done",operations:[{amount:100},{amount:200}]};let U=(()=>{class n{constructor(){this.form=new l.cw({filters:new l.NI([{title:"Drafts"}])}),this.items=[J,{title:"Drafts",operations:[{amount:100},{amount:200},{amount:100},{amount:100}]},{title:"For sign",operations:[]},{title:"Queue",operations:[{amount:100},{amount:200},{amount:100},{amount:200},{amount:100},{amount:200}]}],this.identityMatcher=(t,a)=>t.title===a.title,this.badgeHandler=t=>t.operations.length}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-filter-example-2"]],decls:8,vars:8,consts:[[3,"formGroup"],["formControlName","filters",3,"identityMatcher","content","badgeHandler","items"],["content",""]],template:function(t,a){if(1&t&&(e.TgZ(0,"form",0),e._UZ(1,"tui-filter",1),e.qZA(),e.YNc(2,b,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"div"),e.TgZ(5,"pre"),e._uU(6),e.ALo(7,"json"),e.qZA(),e.qZA()),2&t){const s=e.MAs(3);e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("identityMatcher",a.identityMatcher)("content",s)("badgeHandler",a.badgeHandler)("items",a.items),e.xp6(5),e.hij("Form value: ",e.lcZ(7,6,a.form.value),"")}},directives:[l._Y,l.JL,l.sg,T.x,l.JJ,l.u],pipes:[d.Ts],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),n})();var G=o(34880);function H(n,i){if(1&n&&(e._uU(0),e._UZ(1,"tui-svg",3)),2&n){const t=i.$implicit,a=e.oxw();e.hij(" ",t," "),e.xp6(1),e.Q6J("src",a.getItemIcon(t))}}const V={Calendar:"tuiIconCalendarLarge",Favorite:"tuiIconStarLarge",Messages:"tuiIconCommentLarge",FAQ:"tuiIconHelpCircleLarge",Settings:"tuiIconSettingsLarge"};let X=(()=>{class n{constructor(){this.items=["Calendar","Favorite","Messages","FAQ","Settings"],this.form=new l.cw({filters:new l.NI([])})}getItemIcon(t){return V[t]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-filter-example-3"]],decls:8,vars:6,consts:[[3,"formGroup"],["formControlName","filters",3,"content","items"],["content",""],[1,"tui-space_left-2",3,"src"]],template:function(t,a){if(1&t&&(e.TgZ(0,"form",0),e._UZ(1,"tui-filter",1),e.qZA(),e.YNc(2,H,2,2,"ng-template",null,2,e.W1O),e.TgZ(4,"div"),e.TgZ(5,"pre"),e._uU(6),e.ALo(7,"json"),e.qZA(),e.qZA()),2&t){const s=e.MAs(3);e.Q6J("formGroup",a.form),e.xp6(1),e.Q6J("content",s)("items",a.items),e.xp6(5),e.hij("Form value: ",e.lcZ(7,4,a.form.value),"")}},directives:[l._Y,l.JL,l.sg,T.x,l.JJ,l.u,G.P],pipes:[d.Ts],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),n})();var M=o(64762),z=o(26215),f=o(88002),Q=o(76189),c=(()=>{return(n=c||(c={})).IT="IT",n.HR="HR",n.HeadOffice="Heads",n.Delivery="Delivery",c;var n})();class m{constructor(){this.items=Object.values(c),this.filters$=new z.X([])}get model$(){return this.filters$.pipe((0,f.U)(i=>i.length===this.items.length?[]:i))}get buttonAppearance$(){return this.filters$.pipe((0,f.U)(i=>i.length===this.items.length?"whiteblock-active":"whiteblock"))}onModelChange(i){this.filters$.next(i)}toggleAll(){this.filters$.next(this.items.length===this.filters$.value.length?[]:[...this.items])}}m.\u0275fac=function(i){return new(i||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["tui-filter-example-4"]],decls:8,vars:7,consts:[[1,"tui-space_bottom-4"],[1,"filters-with-all"],["tuiButton","","type","button","size","m",1,"tui-space_right-1",3,"appearance","click"],[3,"items","ngModel","ngModelChange"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e._uU(1,"Choose a department:"),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"button",2),e.NdJ("click",function(){return t.toggleAll()}),e.ALo(4,"async"),e._uU(5," All "),e.qZA(),e.TgZ(6,"tui-filter",3),e.NdJ("ngModelChange",function(s){return t.onModelChange(s)}),e.ALo(7,"async"),e.qZA(),e.qZA()),2&i&&(e.xp6(3),e.Q6J("appearance",e.lcZ(4,3,t.buttonAppearance$)||""),e.xp6(3),e.Q6J("items",t.items)("ngModel",e.lcZ(7,5,t.model$)))},directives:[Q.v,T.x,l.JJ,l.On],pipes:[d.Ov],styles:[".filters-with-all[_ngcontent-%COMP%]{display:inline-flex}"],changeDetection:0}),(0,M.gn)([p.tuiPure],m.prototype,"model$",null),(0,M.gn)([p.tuiPure],m.prototype,"buttonAppearance$",null);var Y=o(31823),j=o(54476),W=o(17023),B=o(76349);function K(n,i){if(1&n&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-filter-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",4),e._UZ(5,"tui-filter-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",5),e._UZ(7,"tui-filter-example-3"),e.qZA(),e.TgZ(8,"tui-doc-example",6),e._UZ(9,"tui-filter-example-4"),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3),e.xp6(2),e.Q6J("content",t.example4)}}function w(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"tui-filter",15),e.NdJ("toggledItem",function(s){return e.CHM(t),e.oxw(2).onToggledItemChange(s)}),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("formControl",t.control)("badgeHandler",t.badgeHandler)("disabledItemHandler",t.disabledItemHandler)("items",t.items)("size",t.size)}}function q(n,i){1&n&&(e.tHW(0,16),e._UZ(1,"code"),e.N_p())}function k(n,i){1&n&&e.SDv(0,17)}function ee(n,i){1&n&&(e.tHW(0,18),e._UZ(1,"div"),e._UZ(2,"strong"),e.N_p())}function te(n,i){1&n&&(e.tHW(0,19),e._UZ(1,"code"),e._UZ(2,"strong"),e.N_p())}function ne(n,i){1&n&&(e.tHW(0,20),e._UZ(1,"code"),e.N_p())}function oe(n,i){1&n&&e.SDv(0,21)}function ie(n,i){1&n&&e.SDv(0,22)}function ae(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo",7),e.YNc(1,w,1,5,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,q,2,0,"ng-template",8),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().badgeHandler=s}),e.YNc(4,k,1,0,"ng-template",9),e.YNc(5,ee,3,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().disabledItemHandler=s}),e.YNc(6,te,3,0,"ng-template",11),e.YNc(7,ne,2,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().items=s}),e.YNc(8,oe,1,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(s){return e.CHM(t),e.oxw().size=s}),e.YNc(9,ie,1,0,"ng-template",14),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValues",t.badgeHandlerVariants)("documentationPropertyValue",t.badgeHandler),e.xp6(2),e.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.xp6(2),e.Q6J("documentationPropertyValues",t.itemsVariants)("documentationPropertyValue",t.items),e.xp6(1),e.Q6J("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size)}}function le(n,i){if(1&n&&(e.TgZ(0,"ol",23),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,24),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",25),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,26),e.qZA(),e._UZ(9,"tui-doc-code",27),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml)}}class _{constructor(i,t){this.text=i,this.badgeValue=t}toString(){return this.text}valueOf(){return this.badgeValue?this.badgeValue:null}}let se=(()=>{class n{constructor(t){this.alertService=t,this.exampleModule=o.e(56726).then(o.t.bind(o,56726,17)),this.exampleHtml=o.e(82089).then(o.t.bind(o,82089,17)),this.example1={TypeScript:o.e(46528).then(o.t.bind(o,46528,17)),HTML:o.e(87577).then(o.t.bind(o,87577,17))},this.example2={TypeScript:o.e(96022).then(o.t.bind(o,96022,17)),HTML:o.e(70685).then(o.t.bind(o,70685,17))},this.example3={TypeScript:o.e(81715).then(o.t.bind(o,81715,17)),HTML:o.e(2447).then(o.t.bind(o,2447,17))},this.example4={TypeScript:o.e(24946).then(o.t.bind(o,24946,17)),HTML:o.e(29475).then(o.t.bind(o,29475,17)),LESS:o.e(2067).then(o.t.bind(o,2067,17))},this.initialItems=["Alex Inkin","Roman Sedov"],this.itemsVariants=[["Alex Inkin","Roman Sedov"],[new _("Focused Zone",10),new _("Dropdown",100),new _("Menu Items",30),new _("Accordion")]],this.badgeHandlerVariants=[a=>Number(a),a=>String(a).length],this.badgeHandler=this.badgeHandlerVariants[0],this.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,a=>"Roman Sedov"===a,a=>(a.valueOf()||0)>=30],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.items=this.itemsVariants[0],this.control=new l.NI(this.initialItems),this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[1]}onToggledItemChange(t){this.alertService.open(String(t)).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.TuiAlertService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-filters"]],decls:4,vars:0,consts:function(){let i,t,a,s,u,O,S,N,h,R,P,D,L,I;return i=$localize`:␟9919bf787bc7c0a8e71a9e457491487af5a0a81c␟6973195341614832335: Components shows separated items that can be used to filter content on the page. There are also an option with badges. `,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟555c6fe50ef4fae4068cfa5e1e739a164cbd1f39␟1282387873164068840:With badges`,s=$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`,u=$localize`:␟5a776544392d038f30f735cea42d6e409b3e9915␟6633556289912992409:With all button`,O=$localize`:␟cd98273289fb99517690cbce1b1d0d11f8d0d0c8␟5781311404027237254: Function that gets and item and returns a badge value. Uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:valueOf${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: to get a number to show by default `,S=$localize`:␟3e711c8b413963d30140ff282746aa85e58af981␟9103376824632144211: Template for custom content in filter `,N=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,h=$localize`:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:===${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,R=$localize`:␟81389767cdcd4e6282691e8eecc5bd1cdf2a1307␟7860704213160462565: Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:toString${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: for view `,P=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,D=$localize`:␟0ff47041d2860cb4d3a45fbce5b410bdabb3aabf␟4387032186612939582: toggled event of item `,L=$localize`:␟1ab787c2eb6660c931fda91647e7159854cb6941␟8315740496990906089: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFilterModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,I=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Filter","package","KIT","type","components"],["pageTab",""],i,["id","base","heading",t,3,"content"],["id","badge","heading",a,3,"content"],["id","custom","heading",s,3,"content"],["id","all","heading",u,3,"content"],[3,"control"],["documentationPropertyName","badgeHandler","documentationPropertyMode","input","documentationPropertyType","TuiHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","T[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","toggledItem","documentationPropertyMode","output","documentationPropertyType","T"],[3,"formControl","badgeHandler","disabledItemHandler","items","size","toggledItem"],O,S,N,h,R,P,D,[1,"b-demo-steps"],L,["filename","myComponent.module.ts",3,"code"],I,["filename","myComponent.template.html",3,"code"]]},template:function(t,a){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,K,10,4,"ng-template",1),e.YNc(2,ae,10,9,"ng-template",1),e.YNc(3,le,10,2,"ng-template",1),e.qZA())},directives:[$.q,A.n,v.f,Z,U,X,m,Y.F,j.z,W.B,T.x,l.JJ,l.oH,B.c],encapsulation:2,changeDetection:0}),n})(),re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[x.wq,C.TuiFilterModule,g.TuiButtonModule,C.TuiTagModule,g.TuiSvgModule,d.ez,l.u5,l.UX,F.fV,y.Bz.forChild((0,F.Ve)(se))]]}),n})()}}]);