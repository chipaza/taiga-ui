(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96812],{96812:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiInputTimeModule:()=>R});var o=i(76733),n=i(72133),u=i(42932),a=i(87253),r=i(38631),m=i(39854),s=i(79184),p=i(20755),d=i(58733),l=i(42336),c=i(87695),f=i(4255),x=i(77647),T=i(89453),h=i(96969),g=i(4732),y=i(91734),Z=i(59915),P=i(96669),V=i(77441),_=i(2313),w=i(90189),M=i(36877),H=i(73097),C=i(38404),A=i(65004),J=i(43894),U=i(17894),b=i(97967),N=i(76832);let I=(()=>{var e;class t{constructor(){this.testForm=new n.cw({testValue:new n.NI(new d.TuiTime(12,30))})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-time-example-1"]],decls:12,vars:2,consts:[[3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside"],["formControlName","testValue","tuiUnfinishedValidator",""]],template:function(e,t){1&e&&(p.TgZ(0,"form",0)(1,"tui-input-time",1),p._uU(2," Input time "),p.qZA(),p.TgZ(3,"tui-input-time",2),p._uU(4," Input time "),p.qZA(),p.TgZ(5,"p"),p._uU(6," If field is not required, but you want to mark it invalid if user did not complete it, use "),p.TgZ(7,"code"),p._uU(8,"tuiUnfinishedValidator"),p.qZA(),p._uU(9," directive "),p.qZA(),p.TgZ(10,"tui-input-time",3),p._uU(11," Input time "),p.qZA()()),2&e&&(p.Q6J("formGroup",t.testForm),p.xp6(3),p.Q6J("tuiTextfieldLabelOutside",!0))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,f.G,x.x,y.x,Z.s,N.Q],encapsulation:2,changeDetection:0}),t})(),S=(()=>{var e;class t{constructor(){this.testForm=new n.cw({testValue:new n.NI(null)}),this.items1=(0,m.tuiCreateTimePeriods)(),this.items2=(0,m.tuiCreateTimePeriods)(10,20,[0,15,30,45])}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-time-example-2"]],decls:5,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",3,"items"],["formControlName","testValue",1,"tui-space_top-4",3,"items","strict"]],template:function(e,t){1&e&&(p.TgZ(0,"form",0)(1,"tui-input-time",1),p._uU(2," Input time "),p.qZA(),p.TgZ(3,"tui-input-time",2),p._uU(4," Input time "),p.qZA()()),2&e&&(p.Q6J("formGroup",t.testForm),p.xp6(1),p.Q6J("items",t.items1),p.xp6(2),p.Q6J("items",t.items2)("strict",!0))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,f.G,x.x],encapsulation:2,changeDetection:0}),t})(),q=(()=>{var e;class t{constructor(){this.testForm=new n.cw({testValue:new n.NI(null)}),this.items1=(0,m.tuiCreateTimePeriods)()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-time-example-3"]],features:[p._Bn([(0,m.tuiInputTimeOptionsProvider)({icon:"tuiIconCheckCircleLarge",mode:"HH:MM:SS",itemSize:"s"})])],decls:3,vars:2,consts:[[3,"formGroup"],["formControlName","testValue",3,"items"]],template:function(e,t){1&e&&(p.TgZ(0,"form",0)(1,"tui-input-time",1),p._uU(2," Input time "),p.qZA()()),2&e&&(p.Q6J("formGroup",t.testForm),p.xp6(1),p.Q6J("items",t.items1))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,f.G,x.x],encapsulation:2,changeDetection:0}),t})(),v=(()=>{var e;class t{constructor(){this.testForm=new n.cw({testValue:new n.NI(null)})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-time-example-4"]],features:[p._Bn([(0,m.tuiInputTimeOptionsProvider)({mode:"HH:MM",maxValues:{HH:47,MM:59,SS:59,MS:999}})])],decls:3,vars:1,consts:[["tuiTextfieldPostfix","left",3,"formGroup"],["formControlName","testValue"]],template:function(e,t){1&e&&(p.TgZ(0,"form",0)(1,"tui-input-time",1),p._uU(2,"Max: 47h 59m"),p.qZA()()),2&e&&p.Q6J("formGroup",t.testForm)},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,f.G,x.x,V.T],encapsulation:2,changeDetection:0}),t})();var Q=i(8151);let D=(()=>{var e;class t{constructor(){this.testForm=new n.cw({testValue:new n.NI(null),isPm:new n.NI(!1)})}get postfix(){return this.testForm.value?.isPm?"PM":"AM"}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-time-example-5"]],features:[p._Bn([(0,m.tuiInputTimeOptionsProvider)({mode:"HH:MM",maxValues:{HH:11,MM:59,SS:59,MS:999}})])],decls:4,vars:2,consts:[[3,"formGroup"],["formControlName","testValue",1,"tui-space_bottom-2",3,"tuiTextfieldPostfix"],["formControlName","isPm","size","l"]],template:function(e,t){1&e&&(p.TgZ(0,"form",0)(1,"tui-input-time",1),p._uU(2," 12h time "),p.qZA(),p._UZ(3,"tui-toggle",2),p.qZA()),2&e&&(p.Q6J("formGroup",t.testForm),p.xp6(1),p.Q6J("tuiTextfieldPostfix",t.postfix))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,f.G,x.x,V.T,Q.p],encapsulation:2,changeDetection:0}),t})(),G=(()=>{var e;class t{constructor(){this.testForm=new n.cw({testValue:new n.NI(new d.TuiTime(10,30)),testValue2:new n.NI(new d.TuiTime(10,30,0)),testValue3:new n.NI(new d.TuiTime(14,30)),testValue4:new n.NI(new d.TuiTime(10,30,0))}),this.items=(0,m.tuiCreateTimePeriods)(14,16,[0,30])}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-time-example-6"]],features:[p._Bn([(0,m.tuiInputTimeOptionsProvider)({nativePicker:!0})])],decls:9,vars:7,consts:[[3,"formGroup"],["formControlName","testValue",1,"tui-space_bottom-3",3,"tuiTextfieldCleaner"],["formControlName","testValue2","mode","HH:MM:SS",1,"tui-space_bottom-3",3,"tuiTextfieldCleaner"],["formControlName","testValue3",1,"tui-space_bottom-3",3,"items","tuiTextfieldCleaner"],["formControlName","testValue4","mode","HH:MM:SS",3,"items","tuiTextfieldCleaner"]],template:function(e,t){1&e&&(p.TgZ(0,"form",0)(1,"tui-input-time",1),p._uU(2," Choose a time "),p.qZA(),p.TgZ(3,"tui-input-time",2),p._uU(4," Choose a time "),p.qZA(),p.TgZ(5,"tui-input-time",3),p._uU(6," Choose a time "),p.qZA(),p.TgZ(7,"tui-input-time",4),p._uU(8," Choose a time "),p.qZA()()),2&e&&(p.Q6J("formGroup",t.testForm),p.xp6(1),p.Q6J("tuiTextfieldCleaner",!0),p.xp6(2),p.Q6J("tuiTextfieldCleaner",!0),p.xp6(2),p.Q6J("items",t.items)("tuiTextfieldCleaner",!0),p.xp6(2),p.Q6J("items",t.items)("tuiTextfieldCleaner",!0))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,f.G,x.x,g.b],encapsulation:2,changeDetection:0}),t})();function L(e,t){if(1&e&&(p.TgZ(0,"p")(1,"code"),p._uU(2,"InputTime"),p.qZA(),p._uU(3," allows input time in HH:MM format "),p.qZA(),p.TgZ(4,"tui-doc-example",2),p._UZ(5,"tui-input-time-example-1"),p.qZA(),p.TgZ(6,"tui-doc-example",3),p._UZ(7,"tui-input-time-example-2"),p.qZA(),p.TgZ(8,"tui-doc-example",4),p._UZ(9,"tui-input-time-example-3"),p.qZA(),p.TgZ(10,"tui-doc-example",5),p._UZ(11,"tui-input-time-example-4"),p.qZA(),p.TgZ(12,"tui-doc-example",6),p._UZ(13,"tui-input-time-example-5"),p.qZA(),p.TgZ(14,"tui-doc-example",7)(15,"tui-notification",8),p._uU(16," Please note that iOS Safari doesn't support native picker in modes other than HH:MM "),p.qZA(),p._UZ(17,"tui-input-time-example-6"),p.qZA()),2&e){const e=p.oxw();p.xp6(4),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2),p.xp6(2),p.Q6J("content",e.example3),p.xp6(2),p.Q6J("content",e.example4),p.xp6(2),p.Q6J("content",e.example5),p.xp6(2),p.Q6J("content",e.example6)}}function O(e,t){if(1&e&&(p.TgZ(0,"tui-input-time",18),p._uU(1," Input time "),p.qZA()),2&e){const e=p.oxw(2);p.Udp("text-align",e.textAlign),p.Q6J("disabledItemHandler",e.disabledItemHandler)("focusable",e.focusable)("formControl",e.control)("items",e.items)("itemSize",e.itemSize)("mode",e.mode)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("strict",e.strict)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownOffset",e.dropdownOffset)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldPostfix",e.postfix)("tuiTextfieldPrefix",e.prefix)("tuiTextfieldSize",e.size)}}function z(e,t){1&e&&(p._uU(0," Disabled state (use "),p.TgZ(1,"code"),p._uU(2,"formControl.disable()"),p.qZA(),p._uU(3," ) "))}function F(e,t){1&e&&p._uU(0," Handler to disable some items ")}function Y(e,t){1&e&&p._uU(0," Items to choose ")}function k(e,t){1&e&&p._uU(0," Item size ")}function B(e,t){1&e&&(p._uU(0," Only "),p.TgZ(1,"code"),p._uU(2,"items"),p.qZA(),p._uU(3," are allowed "))}function K(e,t){1&e&&p._uU(0," Modes for seconds and ms support ")}function X(e,t){1&e&&p._uU(0," Custom align content by text-align ")}function E(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo",9),p.YNc(1,O,2,27,"ng-template"),p.qZA(),p.TgZ(2,"tui-doc-documentation"),p.YNc(3,z,4,0,"ng-template",10),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const i=p.oxw();return p.KtG(i.disabled=t)})),p.YNc(4,F,1,0,"ng-template",11),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const i=p.oxw();return p.KtG(i.disabledItemHandler=t)})),p.YNc(5,Y,1,0,"ng-template",12),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const i=p.oxw();return p.KtG(i.items=t)})),p.YNc(6,k,1,0,"ng-template",13),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const i=p.oxw();return p.KtG(i.itemSize=t)})),p.YNc(7,B,4,0,"ng-template",14),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const i=p.oxw();return p.KtG(i.strict=t)})),p.YNc(8,K,1,0,"ng-template",15),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const i=p.oxw();return p.KtG(i.mode=t)})),p.qZA(),p._UZ(9,"inherited-documentation"),p.TgZ(10,"tui-doc-documentation",16),p.YNc(11,X,1,0,"ng-template",17),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const i=p.oxw();return p.KtG(i.textAlign=t)})),p.qZA()}if(2&e){const e=p.oxw();p.Q6J("control",e.control),p.xp6(3),p.Q6J("documentationPropertyValue",e.disabled),p.xp6(1),p.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),p.xp6(1),p.Q6J("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),p.xp6(1),p.Q6J("documentationPropertyValues",e.itemSizeVariants)("documentationPropertyValue",e.itemSize),p.xp6(1),p.Q6J("documentationPropertyValue",e.strict),p.xp6(1),p.Q6J("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode),p.xp6(3),p.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function W(e,t){if(1&e&&(p.TgZ(0,"ol",19)(1,"li")(2,"p"),p._uU(3," Import an Angular module for forms and "),p.TgZ(4,"code"),p._uU(5,"TuiInputTimeModule"),p.qZA(),p._uU(6," in the same module where you want to use our component: "),p.qZA(),p._UZ(7,"tui-doc-code",20),p.qZA(),p.TgZ(8,"li")(9,"p"),p._uU(10," Declare a form ( "),p.TgZ(11,"code"),p._uU(12,"FormGroup"),p.qZA(),p._uU(13," ) or a control ( "),p.TgZ(14,"code"),p._uU(15,"FormControl"),p.qZA(),p._uU(16," ) in your component: "),p.qZA(),p._UZ(17,"tui-doc-code",21),p.qZA(),p.TgZ(18,"li")(19,"p"),p._uU(20,"Add to the template:"),p.qZA(),p._UZ(21,"tui-doc-code",22),p.qZA(),p.TgZ(22,"li")(23,"p"),p._uU(24," Optionally use the "),p.TgZ(25,"code"),p._uU(26,"TUI_INPUT_TIME_OPTIONS"),p.qZA(),p._uU(27," injection token to override the default options for the component. "),p.qZA(),p._UZ(28,"tui-doc-code",20),p.qZA()()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(10),p.Q6J("code",e.exampleForm),p.xp6(4),p.Q6J("code",e.exampleHtml),p.xp6(7),p.Q6J("code",e.exampleOptions)}}let j=(()=>{var e;class t extends l.b{constructor(){super(...arguments),this.cleaner=!1,this.control=new n.NI(d.TuiTime.currentLocal(),n.kI.required),this.exampleModule=i.e(72355).then(i.t.bind(i,72355,17)),this.exampleHtml=i.e(93061).then(i.t.bind(i,93061,17)),this.exampleForm=i.e(55886).then(i.t.bind(i,55886,17)),this.exampleOptions=i.e(74121).then(i.t.bind(i,74121,17)),this.example1={TypeScript:i.e(21210).then(i.t.bind(i,21210,17)),HTML:i.e(53419).then(i.t.bind(i,53419,17))},this.example2={TypeScript:i.e(3679).then(i.t.bind(i,3679,17)),HTML:i.e(15040).then(i.t.bind(i,15040,17))},this.example3={TypeScript:i.e(59021).then(i.t.bind(i,59021,17)),HTML:i.e(61240).then(i.t.bind(i,61240,17))},this.example4={TypeScript:i.e(50704).then(i.t.bind(i,50704,17)),HTML:i.e(37998).then(i.t.bind(i,37998,17))},this.example5={TypeScript:i.e(19707).then(i.t.bind(i,19707,17)),HTML:i.e(87871).then(i.t.bind(i,87871,17))},this.example6={TypeScript:i.e(60268).then(i.t.bind(i,60268,17)),HTML:i.e(16152).then(i.t.bind(i,16152,17))},this.disabledItemHandlerVariants=[d.ALWAYS_FALSE_HANDLER,e=>"06:00"===String(e)||e>d.TuiTime.currentLocal()],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemSizeVariants=["s","m","l"],this.itemSize=this.itemSizeVariants[1],this.itemsVariants=[[],(0,m.tuiCreateTimePeriods)()],this.items=this.itemsVariants[0],this.strict=!1,this.modeVariants=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.mode=this.modeVariants[0]}}return(e=t).ɵfac=function(){let t;return function(i){return(t||(t=p.n5z(e)))(i||e)}}(),e.ɵcmp=p.Xpm({type:e,selectors:[["example-tui-input-time"]],features:[p._Bn([{provide:c.x,useExisting:(0,p.Gpc)((()=>e))},(0,a.PR)(["tuiTextfieldFiller"])]),p.qOj],decls:4,vars:0,consts:[["header","InputTime","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","dropdown","description","You can set items for dropdown","heading","Dropdown",3,"content"],["id","options","heading","Options (icon)",3,"content"],["id","options-max","heading","Options (max values)",3,"content"],["id","options-max-and-postfix","heading","Options (max values and postfix)",3,"content"],["id","native","heading","Native input time",3,"content"],[1,"tui-space_bottom-5"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiTime>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","items","documentationPropertyType","ReadonlyArray<TuiTime>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","itemSize","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","strict","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","mode","documentationPropertyType","TuiTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"disabledItemHandler","focusable","formControl","items","itemSize","mode","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","strict","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,L,18,6,"ng-template",1),p.YNc(2,E,12,13,"ng-template",1),p.YNc(3,W,29,4,"ng-template",1),p.qZA())},dependencies:[n.JJ,n.oH,f.G,x.x,T.w,h.Ek,g.b,y.x,Z.s,P.A,V.T,_.L,w.bZ,M.c,H.F,C.z,A.B,J.q,U.n,b.f,I,S,q,v,D,G],encapsulation:2,changeDetection:0}),t})(),R=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[o.ez,n.u5,n.UX,m.TuiInputTimeModule,r.TuiLinkModule,s.f,r.TuiButtonModule,r.TuiDropdownModule,r.TuiTextfieldControllerModule,r.TuiNotificationModule,r.TuiHintModule,m.TuiToggleModule,a.fV,u.Bz.forChild((0,a.Ve)(j)),m.TuiUnfinishedValidatorModule]}),t})()}}]);