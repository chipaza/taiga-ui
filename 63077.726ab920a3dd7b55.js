(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63077],{63077:(e,t,o)=>{o.r(t),o.d(t,{FormModule:()=>le});var i=o(88692),n=o(69900),u=o(24007),r=o(64500),l=o(73588),a=o(61917),s=o(84479),c=o(40241),m=o(64537),d=o(83315),_=o(43560),p=o(93525),Z=o(38868),g=o(53222),f=o(48758),h=o(72817),b=o(62047),T=o(40813),A=o(91030),U=o(29462),x=o(92078),w=o(44056),q=o(76189),C=o(36951),v=o(52721),M=o(21991),N=o(96895),k=o(45303),I=o(77027),y=o(41360),V=o(16753),O=o(13735),P=o(50170),L=o(1414),J=o(39607),Q=o(50672),F=o(68874),D=o(89437),S=o(84848),E=o(52219),B=o(50020),H=o(96479),R=o(22968),W=o(44495),Y=o(10650),j=o(7114),G=o(99886);function X(e,t){if(1&e&&m._UZ(0,"tui-data-list-wrapper",57),2&e){const e=m.oxw();m.Q6J("items",e.persons)}}function $(e,t){if(1&e&&(m.TgZ(0,"div",58),m._uU(1),m.qZA()),2&e){const e=t.$implicit;m.xp6(1),m.AsE("",e.firstName," ",e.lastName,"")}}function z(e,t){if(1&e&&m._UZ(0,"tui-data-list-wrapper",59),2&e){const e=m.oxw(),t=m.MAs(129);m.Q6J("itemContent",t)("items",e.accounts)}}function K(e,t){if(1&e&&m._UZ(0,"tui-data-list-wrapper",59),2&e){const e=m.oxw(),t=m.MAs(129);m.Q6J("itemContent",t)("items",e.accounts)}}function ee(e,t){if(1&e&&(m.TgZ(0,"span",60),m._uU(1),m.TgZ(2,"span"),m._uU(3),m.ALo(4,"async"),m.ALo(5,"tuiAmount"),m.qZA()()),2&e){const e=t.$implicit;m.xp6(1),m.hij(" ",e.name," "),m.xp6(2),m.Oqu(m.lcZ(4,2,m.xi3(5,4,e.amount,"RUB")))}}const te=function(){return[]};class oe{constructor(e,t){this.firstName=e,this.lastName=t}toString(){return`${this.firstName} ${this.lastName}`}}class ie{constructor(e,t,o,i,n){this.id=e,this.name=t,this.amount=o,this.currency=i,this.cardSvg=n}}let ne=(()=>{var e;class t{constructor(){this.svgIcons={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.persons=[new oe("Roman","Sedov"),new oe("Alex","Inkin")],this.accounts=[new ie("1","Common",24876.55,u.TuiCurrency.Ruble,this.svgIcons.common),new ie("2","Universal",335,u.TuiCurrency.Dollar,this.svgIcons.universal),new ie("3","Intersection",1e4,u.TuiCurrency.Euro,this.svgIcons.intersection),new ie("4","Mutation",100,u.TuiCurrency.Pound,this.svgIcons.mutation)],this.testForm=new n.cw({nameValue:new n.NI("",n.kI.required),textValue:new n.NI("",n.kI.required),passwordValue:new n.NI("",n.kI.required),phoneValue:new n.NI("",n.kI.required),moneyValue:new n.NI("100",n.kI.required),periodValue:new n.NI(new g.TuiDay(2017,2,15),n.kI.required),timeValue:new n.NI(new g.TuiTime(12,30),n.kI.required),personValue:new n.NI(this.persons[0]),quantityValue:new n.NI(5e4,n.kI.required),radioValue:new n.NI("with-commission"),accountWherefrom:new n.NI(null),accountWhere:new n.NI(null),checkboxValue:new n.NI(!1),osnoValue:new n.NI(!0),usnValue:new n.NI(!1),eshnValue:new n.NI(!1),envdValue:new n.NI(!1)})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-form-example-1"]],decls:130,vars:63,consts:[[1,"tui-container"],[1,"stepper"],[3,"activeItemIndex"],["tuiStep",""],["tuiStep","",3,"disabled"],[3,"formGroup"],[1,"tui-row","tui-row_sme"],[1,"tui-col_8"],[1,"tui-form__header","tui-form__header_margin-top_none"],[1,"tui-form__row"],["formControlName","nameValue","tuiHintContent","A tooltip"],["placeholder","Field placeholder","tuiTextfield",""],[1,"tui-required"],["formControlName","nameValue",3,"error"],["formControlName","periodValue"],["placeholder","Placeholder","tuiTextfield",""],["formControlName","periodValue",3,"error"],[1,"tui-form__row","tui-form__row_multi-fields"],[1,"tui-form__multi-field"],["formControlName","passwordValue"],["formControlName","passwordValue",3,"error"],["formControlName","moneyValue",3,"tuiTextfieldPostfix"],["formControlName","moneyValue",3,"error"],["formControlName","quantityValue","tuiTextfieldPostfix","₽",3,"max","min","segments"],[1,"ticks-labels"],[1,"tui-form__field-note"],["formControlName","quantityValue",3,"error"],["formControlName","personValue",3,"valueContent"],[3,"items",4,"tuiDataList"],["personValueContent",""],["formControlName","personValue",3,"error"],["formControlName","phoneValue"],["formControlName","phoneValue",3,"error"],[1,"tui-form__header"],["tuiGroup","",1,"tui-form__row",3,"collapsed"],["tuiBlock",""],["formControlName","radioValue","tuiRadio","","type","radio","value","with-commission"],["formControlName","radioValue","tuiRadio","","type","radio","value","without-commission"],[1,"tui-form__row","tui-form__row_half-width"],["formControlName","timeValue"],[1,"tui-form__row","tui-form__row_checkboxes"],["tuiLabel","",1,"tui-form__checkbox"],["formControlName","osnoValue","tuiCheckbox","","type","checkbox"],["formControlName","usnValue","tuiCheckbox","","type","checkbox"],["formControlName","eshnValue","tuiCheckbox","","type","checkbox"],["formControlName","envdValue","tuiCheckbox","","type","checkbox"],[1,"tui-form__header","tui-form__header_margin-bottom_small"],["formControlName","accountWherefrom",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],[3,"itemContent","items",4,"tuiDataList"],["formControlName","accountWhere",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],["formControlName","textValue","tuiHintContent","A tooltip"],["tuiLabel","",1,"tui-form__field-checkbox"],["formControlName","checkboxValue","tuiCheckbox","","type","checkbox"],[1,"tui-form__buttons"],["size","l","tuiButton","","type","submit",1,"tui-form__button"],["appearance","flat","size","l","tuiButton","","type","button",1,"tui-form__button"],["accountContent",""],[3,"items"],[1,"uppercase-name"],[3,"itemContent","items"],[1,"account"]],template:function(e,t){if(1&e&&(m.TgZ(0,"div",0)(1,"div",1)(2,"tui-stepper",2)(3,"button",3),m._uU(4,"First step"),m.qZA(),m.TgZ(5,"button",4),m._uU(6," Second step "),m.qZA(),m.TgZ(7,"button",4),m._uU(8," Third step "),m.qZA(),m.TgZ(9,"button",4),m._uU(10," Fourth step "),m.qZA()()(),m.TgZ(11,"form",5)(12,"div",6)(13,"div",7)(14,"h3",8),m._uU(15,"A header"),m.qZA(),m.TgZ(16,"div",9)(17,"tui-input",10),m._uU(18," Textfield "),m._UZ(19,"input",11)(20,"span",12),m.qZA(),m._UZ(21,"tui-error",13),m.ALo(22,"async"),m.ALo(23,"tuiFieldError"),m.qZA(),m.TgZ(24,"div",9)(25,"tui-input-date",14),m._uU(26," Input date "),m._UZ(27,"input",15)(28,"span",12),m.qZA(),m._UZ(29,"tui-error",16),m.ALo(30,"async"),m.ALo(31,"tuiFieldError"),m.qZA(),m.TgZ(32,"div",17)(33,"div",18)(34,"tui-input-password",19),m._uU(35,"Input password"),m.qZA(),m._UZ(36,"tui-error",20),m.ALo(37,"async"),m.ALo(38,"tuiFieldError"),m.qZA(),m.TgZ(39,"div",18)(40,"tui-input-number",21),m.ALo(41,"tuiCurrency"),m._uU(42," Input money "),m.qZA(),m._UZ(43,"tui-error",22),m.ALo(44,"async"),m.ALo(45,"tuiFieldError"),m.qZA()(),m.TgZ(46,"div",9)(47,"tui-input-slider",23),m._uU(48," Some slider "),m.qZA(),m.TgZ(49,"div",24)(50,"span"),m._uU(51,"from 50 000 ₽"),m.qZA(),m.TgZ(52,"span"),m._uU(53,"to 3 000 000 ₽"),m.qZA()(),m.TgZ(54,"div",25),m._uU(55,"Some additional text"),m.qZA(),m._UZ(56,"tui-error",26),m.ALo(57,"async"),m.ALo(58,"tuiFieldError"),m.qZA(),m.TgZ(59,"div",17)(60,"div",18)(61,"tui-select",27),m._uU(62," Choose a person "),m.YNc(63,X,1,1,"tui-data-list-wrapper",28),m.qZA(),m.YNc(64,$,2,2,"ng-template",null,29,m.W1O),m._UZ(66,"tui-error",30),m.ALo(67,"async"),m.ALo(68,"tuiFieldError"),m.qZA(),m.TgZ(69,"div",18)(70,"tui-input-phone",31),m._uU(71,"Input phone"),m.qZA(),m._UZ(72,"tui-error",32),m.ALo(73,"async"),m.ALo(74,"tuiFieldError"),m.qZA()(),m.TgZ(75,"h3",33),m._uU(76,"Header"),m.qZA(),m.TgZ(77,"div",34)(78,"label",35),m._uU(79," One option "),m._UZ(80,"input",36),m.qZA(),m.TgZ(81,"label",35),m._uU(82," An alternative one "),m._UZ(83,"input",37),m.qZA()(),m.TgZ(84,"div",38)(85,"tui-input-time",39),m._uU(86,"Input time"),m.qZA()(),m.TgZ(87,"div",40)(88,"label",41),m._UZ(89,"input",42),m._uU(90," First option "),m.qZA(),m.TgZ(91,"label",41),m._UZ(92,"input",43),m._uU(93," Cool option "),m.qZA(),m.TgZ(94,"label",41),m._UZ(95,"input",44),m._uU(96," Boring option "),m.qZA(),m.TgZ(97,"label",41),m._UZ(98,"input",45),m._uU(99," Interesting option "),m.qZA()(),m.TgZ(100,"h3",46),m._uU(101,"Header"),m.qZA(),m.TgZ(102,"div",9)(103,"label"),m._uU(104," From "),m.TgZ(105,"tui-select",47),m._uU(106," Choose an account "),m.YNc(107,z,1,2,"tui-data-list-wrapper",48),m.qZA()()(),m.TgZ(108,"div",9)(109,"label"),m._uU(110," To "),m.TgZ(111,"tui-select",49),m._uU(112," Choose an account "),m.YNc(113,K,1,2,"tui-data-list-wrapper",48),m.qZA()()(),m.TgZ(114,"h3",33),m._uU(115,"Header"),m.qZA(),m.TgZ(116,"div",9)(117,"tui-input",50),m._uU(118," Textfield "),m._UZ(119,"input",15),m.qZA(),m.TgZ(120,"label",51),m._UZ(121,"input",52),m._uU(122," Try this "),m.qZA()(),m.TgZ(123,"div",53)(124,"button",54),m._uU(125," Submit "),m.qZA(),m.TgZ(126,"button",55),m._uU(127," Cancel "),m.qZA()()()(),m.YNc(128,ee,6,7,"ng-template",null,56,m.W1O),m.qZA()()),2&e){const e=m.MAs(65),o=m.MAs(129);m.xp6(2),m.Q6J("activeItemIndex",0),m.xp6(3),m.Q6J("disabled",!0),m.xp6(2),m.Q6J("disabled",!0),m.xp6(2),m.Q6J("disabled",!0),m.xp6(2),m.Q6J("formGroup",t.testForm),m.xp6(10),m.Q6J("error",m.lcZ(22,26,m.lcZ(23,28,m.DdM(56,te)))),m.xp6(8),m.Q6J("error",m.lcZ(30,30,m.lcZ(31,32,m.DdM(57,te)))),m.xp6(7),m.Q6J("error",m.lcZ(37,34,m.lcZ(38,36,m.DdM(58,te)))),m.xp6(4),m.Q6J("tuiTextfieldPostfix",m.lcZ(41,38,"RUB")),m.xp6(3),m.Q6J("error",m.lcZ(44,40,m.lcZ(45,42,m.DdM(59,te)))),m.xp6(4),m.Q6J("max",3e6)("min",5e4)("segments",1),m.xp6(9),m.Q6J("error",m.lcZ(57,44,m.lcZ(58,46,m.DdM(60,te)))),m.xp6(5),m.Q6J("valueContent",e),m.xp6(5),m.Q6J("error",m.lcZ(67,48,m.lcZ(68,50,m.DdM(61,te)))),m.xp6(6),m.Q6J("error",m.lcZ(73,52,m.lcZ(74,54,m.DdM(62,te)))),m.xp6(5),m.Q6J("collapsed",!0),m.xp6(3),m.Udp("margin-left","auto"),m.xp6(3),m.Udp("margin-left","auto"),m.xp6(22),m.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",o),m.xp6(6),m.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",o)}},dependencies:[n._Y,n.Fj,n.Wl,n._,n.JJ,n.JL,n.sg,n.u,f.H,h.Q,b.j,T.k,A.M,U.G,x.x,w.h,q.v,C.v,v.V,M.F,N.y,k.X,I.K,y.w,V.q,O.g,P.u,L.O,J.g,Q.v,F.x,D.T,S.bZ,E.g,B.e,H._,R.f,W.X,i.Ov,Y.E,j.A,G.i],styles:["[_nghost-%COMP%]{display:block}.stepper[_ngcontent-%COMP%]{margin-bottom:2rem}.uppercase-name[_ngcontent-%COMP%]{text-transform:uppercase}.account[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:space-between}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .375rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.375rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.375rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .375rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:.75rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.75rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.75rem}"],changeDetection:0}),t})();function ue(e,t){if(1&e&&(m._UZ(0,"tui-styles-info"),m.TgZ(1,"div",2),m._uU(2," Use global "),m.TgZ(3,"strong"),m._uU(4,".tui-form"),m.qZA(),m._uU(5," class and its modifications: "),m.qZA(),m.TgZ(6,"ul",3)(7,"li",4)(8,"code"),m._uU(9,".tui-form__header"),m.qZA(),m._uU(10," : form header. Margins: 32px top and 20px bottom. "),m.TgZ(11,"ul",5)(12,"li",4)(13,"code"),m._uU(14,".tui-form__header_margin-top_none"),m.qZA(),m._uU(15," : nullifies "),m.TgZ(16,"code"),m._uU(17,"margin-top"),m.qZA()(),m.TgZ(18,"li",4)(19,"code"),m._uU(20,".tui-form__header_margin-bottom_none"),m.qZA(),m._uU(21," : nullifies "),m.TgZ(22,"code"),m._uU(23,"margin-bottom"),m.qZA()(),m.TgZ(24,"li",4)(25,"code"),m._uU(26,".tui-form__header_margin-bottom_small"),m.qZA(),m._uU(27," : reduced margin bottom (16px) "),m.TgZ(28,"code"),m._uU(29,"margin-bottom"),m.qZA()()()(),m.TgZ(30,"li",4)(31,"code"),m._uU(32,".tui-form__row"),m.qZA(),m._uU(33," : form row. Margin between rows is 20px. "),m.TgZ(34,"ul",5)(35,"li",4)(36,"code"),m._uU(37,".tui-form__row_multi-fields"),m.qZA(),m._uU(38," : row with several inputs with 20px margin between them "),m.qZA(),m.TgZ(39,"li",4)(40,"code"),m._uU(41,".tui-form__row_half-width"),m.qZA(),m._uU(42," : a half width row "),m.qZA(),m.TgZ(43,"li",4)(44,"code"),m._uU(45,".tui-form__row_checkboxes"),m.qZA(),m._uU(46," : a row with two columns for checkboxes "),m.qZA()()(),m.TgZ(47,"li",4)(48,"code"),m._uU(49,".tui-form__multi-field"),m.qZA(),m._uU(50," : field in a row "),m.TgZ(51,"code"),m._uU(52,"tui-form__row_multi-fields"),m.qZA(),m._uU(53," . fields with 20px margin between "),m.qZA(),m.TgZ(54,"li",4)(55,"code"),m._uU(56,".tui-form__checkbox"),m.qZA(),m._uU(57," : checkbox with a label for two column case "),m.qZA(),m.TgZ(58,"li",4)(59,"code"),m._uU(60,".tui-form__field-note"),m.qZA(),m._uU(61," : a secondary text under field "),m.qZA(),m.TgZ(62,"li",4)(63,"code"),m._uU(64,".tui-form__field-checkbox"),m.qZA(),m._uU(65," : checkbox under a field "),m.qZA(),m.TgZ(66,"li",4)(67,"code"),m._uU(68,".tui-form__buttons"),m.qZA(),m._uU(69," : a block with buttons and margin top 32px "),m.TgZ(70,"ul",5)(71,"li",4)(72,"code"),m._uU(73,".tui-form__buttons_align_end"),m.qZA(),m._uU(74," : align buttons right "),m.qZA(),m.TgZ(75,"li",4)(76,"code"),m._uU(77,".tui-form__buttons_align_center"),m.qZA(),m._uU(78," : align buttons center "),m.qZA()()(),m.TgZ(79,"li",4)(80,"code"),m._uU(81,".tui-form__button"),m.qZA(),m._uU(82," : a button of buttons block "),m.qZA()(),m.TgZ(83,"tui-doc-example",6),m._UZ(84,"tui-form-example-1"),m.qZA()),2&e){const e=m.oxw();m.xp6(83),m.Q6J("content",e.example1)}}let re=(()=>{var e;class t{constructor(){this.example1={TypeScript:o.e(94598).then(o.t.bind(o,94598,17)),HTML:o.e(95871).then(o.t.bind(o,95871,17)),LESS:o.e(1674).then(o.t.bind(o,1674,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["example-form"]],decls:2,vars:0,consts:[["header","Form"],["pageTab",""],[1,"tui-space_bottom-3"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],[1,"tui-list","tui-list_linear","tui-list_nested","tui-list_extra-small"],["id","form","heading","Basic",3,"content"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,ue,85,1,"ng-template",1),m.qZA())},dependencies:[d.q,_.q,p.n,Z.f,ne],encapsulation:2,changeDetection:0}),t})();o(41841);let le=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=m.oAB({type:e}),e.ɵinj=m.cJS({imports:[i.ez,n.u5,n.UX,c.e,s.TuiStepperModule,s.TuiInputDateModule,s.TuiInputTimeModule,s.TuiTextareaModule,s.TuiInputSliderModule,s.TuiInputRangeModule,s.TuiRadioListModule,l.TuiButtonModule,l.TuiErrorModule,s.TuiFieldErrorPipeModule,s.TuiInputPasswordModule,s.TuiInputPhoneModule,s.TuiInputModule,s.TuiInputNumberModule,u.TuiCurrencyPipeModule,s.TuiInputTagModule,s.TuiSelectModule,l.TuiTextfieldControllerModule,l.TuiHintModule,l.TuiDataListModule,s.TuiDataListWrapperModule,a._M,(0,r.bG)(re),a.xl]}),t})()}}]);