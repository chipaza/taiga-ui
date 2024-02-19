(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95437],{95437:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputMonthRangeModule:()=>K});var o=n(88692),a=n(69900),i=n(91795),u=n(64500),r=n(75526),l=n(42589),d=n(75695),c=n(64537),m=n(59667),s=n(82880),p=n(98204),h=n(83074),g=n(10977),f=n(62840),x=n(60404),T=n(43560),y=n(93525),Z=n(38868),b=n(54218),_=n(12571),A=n(10638),C=n(64374),U=n(68874),V=n(10200),M=n(3729),P=n(84848),H=n(79121),w=n(91030);let I=(()=>{var e;class t{constructor(){this.control=new a.NI(null)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-month-range-example-1"]],decls:3,vars:2,consts:[[1,"b-form",3,"formControl","tuiTextfieldCleaner"],["placeholder","3 months or more","tuiTextfield",""]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input-month-range",0),c._uU(1," Choose a range of months "),c._UZ(2,"input",1),c.qZA()),2&e&&c.Q6J("formControl",t.control)("tuiTextfieldCleaner",!0)},dependencies:[a.JJ,a.oH,_.X,A.K,w.M,C.b],encapsulation:2,changeDetection:0}),t})(),q=(()=>{var e;class t{constructor(){this.testForm=new a.cw({testValue:new a.NI(null)})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-month-range-example-2"]],decls:7,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",1,"tui-space_bottom-2"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_vertical-4"],["formControlName","testValue"]],template:function(e,t){1&e&&(c.TgZ(0,"form",0)(1,"tui-input-month-range",1),c._uU(2," Choose a range of months "),c.qZA(),c.TgZ(3,"tui-input-month-range",2),c._uU(4," Choose a range of months "),c.qZA(),c.TgZ(5,"tui-input-month-range",3),c._uU(6,"Choose a range of months"),c.qZA()()),2&e&&c.Q6J("formGroup",t.testForm)},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,_.X,A.K,V.s],encapsulation:2,changeDetection:0}),t})(),J=(()=>{var e;class t{constructor(){this.testForm=new a.cw({testValue:new a.NI(null)}),this.disabledItemHandler=(e,t)=>!!t&&!!t.value&&t.value instanceof m.TuiMonthRange&&!!t.value.isSingleMonth&&e.month<t.value.from.month+2}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-month-range-example-3"]],decls:8,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue",1,"tui-space_bottom-2",3,"disabledItemHandler"]],template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1," A sample with "),c.TgZ(2,"code"),c._uU(3,"disabledItemHandler"),c.qZA(),c._uU(4," when selecting a left value of range changes available right value: a range no more than one month\n"),c.qZA(),c.TgZ(5,"form",0)(6,"tui-input-month-range",1),c._uU(7," Choose a range of months "),c.qZA()()),2&e&&(c.xp6(5),c.Q6J("formGroup",t.testForm),c.xp6(1),c.Q6J("disabledItemHandler",t.disabledItemHandler))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,_.X,A.K],encapsulation:2,changeDetection:0}),t})();function v(e,t){if(1&e&&(c.TgZ(0,"p"),c._uU(1,"Component to input a range of months"),c.qZA(),c.TgZ(2,"tui-doc-example",2)(3,"tui-notification",3),c._uU(4," If you need to set some attributes or listen to events on native "),c.TgZ(5,"code"),c._uU(6,"input"),c.qZA(),c._uU(7," , you can put it inside with "),c.TgZ(8,"code"),c._uU(9,"Textfield"),c.qZA(),c._uU(10," directive as shown below "),c.qZA(),c._UZ(11,"tui-input-month-range-example-1"),c.qZA(),c.TgZ(12,"tui-doc-example",4),c._UZ(13,"tui-input-month-range-example-2"),c.qZA(),c.TgZ(14,"tui-doc-example",5),c._UZ(15,"tui-input-month-range-example-3"),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Q6J("content",e.example1),c.xp6(10),c.Q6J("content",e.example2),c.xp6(2),c.Q6J("content",e.example3)}}function N(e,t){if(1&e&&(c.TgZ(0,"tui-input-month-range",13),c._uU(1," Months "),c.qZA()),2&e){const e=c.oxw(2);c.Udp("text-align",e.textAlign),c.Q6J("disabledItemHandler",e.disabledItemHandler)("focusable",e.focusable)("formControl",e.control)("max",e.max)("min",e.min)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)}}function Q(e,t){1&e&&(c._uU(0," Disabled state (use "),c.TgZ(1,"code"),c._uU(2,"formControl.disable()"),c.qZA(),c._uU(3," ) "))}function F(e,t){1&e&&(c.TgZ(0,"div"),c._uU(1,"A handler that gets a date and returns true if it is disabled."),c.qZA(),c.TgZ(2,"strong"),c._uU(3,"Must be a pure function"),c.qZA())}function L(e,t){1&e&&c._uU(0," Minimum date ")}function S(e,t){1&e&&c._uU(0," Maximum date ")}function Y(e,t){1&e&&c._uU(0," Custom align content by text-align ")}function D(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-doc-demo",6),c.YNc(1,N,2,19,"ng-template"),c.qZA(),c.TgZ(2,"tui-doc-documentation"),c.YNc(3,Q,4,0,"ng-template",7),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.disabled=t)})),c.YNc(4,F,4,0,"ng-template",8),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.disabledItemHandler=t)})),c.YNc(5,L,1,0,"ng-template",9),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.min=t)})),c.YNc(6,S,1,0,"ng-template",10),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.max=t)})),c.qZA(),c._UZ(7,"inherited-documentation"),c.TgZ(8,"tui-doc-documentation",11),c.YNc(9,Y,1,0,"ng-template",12),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.textAlign=t)})),c.qZA()}if(2&e){const e=c.oxw();c.Q6J("control",e.control),c.xp6(3),c.Q6J("documentationPropertyValue",e.disabled),c.xp6(1),c.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c.xp6(1),c.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),c.xp6(1),c.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),c.xp6(3),c.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function z(e,t){if(1&e&&(c.TgZ(0,"ol",14)(1,"li")(2,"p"),c._uU(3," Import an Angular module for forms and "),c.TgZ(4,"code"),c._uU(5,"TuiInputMonthRangeModule"),c.qZA(),c._uU(6," in the same module where you want to use our component: "),c.qZA(),c._UZ(7,"tui-doc-code",15),c.qZA(),c.TgZ(8,"li")(9,"p"),c._uU(10," Declare a form ( "),c.TgZ(11,"code"),c._uU(12,"FormGroup"),c.qZA(),c._uU(13," ) or a control ( "),c.TgZ(14,"code"),c._uU(15,"FormControl"),c.qZA(),c._uU(16," ) in your component: "),c.qZA(),c._UZ(17,"tui-doc-code",16),c.qZA(),c.TgZ(18,"li"),c._uU(19," Use "),c.TgZ(20,"code"),c._uU(21,"TuiInputMonthComponent"),c.qZA(),c._uU(22," in template: "),c._UZ(23,"tui-doc-code",17),c.qZA()()),2&e){const e=c.oxw();c.xp6(7),c.Q6J("code",e.exampleModule),c.xp6(10),c.Q6J("code",e.exampleForm),c.xp6(6),c.Q6J("code",e.exampleHtml)}}let G=(()=>{var e;class t extends s.b{constructor(){super(...arguments),this.exampleForm=n.e(45722).then(n.t.bind(n,45722,17)),this.exampleModule=n.e(22580).then(n.t.bind(n,22580,17)),this.exampleHtml=n.e(82082).then(n.t.bind(n,82082,17)),this.example1={TypeScript:n.e(11176).then(n.t.bind(n,11176,17)),HTML:n.e(57536).then(n.t.bind(n,57536,17))},this.example2={TypeScript:n.e(46649).then(n.t.bind(n,46649,17)),HTML:n.e(62394).then(n.t.bind(n,62394,17))},this.example3={TypeScript:n.e(59990).then(n.t.bind(n,59990,17)),HTML:n.e(5748).then(n.t.bind(n,5748,17))},this.minVariants=[m.TUI_FIRST_DAY,new m.TuiMonth(2019,2),new m.TuiMonth(2007,0),new m.TuiDay((new Date).getFullYear()+3,1,1)],this.maxVariants=[m.TUI_LAST_DAY,new m.TuiMonth(2017,2),new m.TuiMonth(2020,2),new m.TuiMonth(2023,0)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[m.ALWAYS_FALSE_HANDLER,({month:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.cleaner=!1,this.control=new a.NI(null,a.kI.required)}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=c.n5z(e)))(n||e)}}(),e.ɵcmp=c.Xpm({type:e,selectors:[["example-tui-input-month-range"]],features:[c._Bn([{provide:p.x,useExisting:(0,c.Gpc)((()=>e))}]),c.qOj],decls:4,vars:0,consts:[["header","InputMonthRange","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],[1,"tui-space_bottom-4","b-form"],["id","sizes","heading","sizes",3,"content"],["id","context","heading","With a context usage in disabledItemHandler",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"disabledItemHandler","focusable","formControl","max","min","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,v,16,3,"ng-template",1),c.YNc(2,D,10,10,"ng-template",1),c.YNc(3,z,24,3,"ng-template",1),c.qZA())},dependencies:[h.c,g.F,f.z,x.B,T.q,y.n,Z.f,b.w,a.JJ,a.oH,_.X,A.K,C.b,U.x,V.s,M.a,P.bZ,H.L,I,q,J],encapsulation:2,changeDetection:0}),t})(),K=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[u.fV,d.f,a.UX,a.u5,o.ez,r.TuiLinkModule,r.TuiButtonModule,l.TuiInputMonthRangeModule,r.TuiTextfieldControllerModule,r.TuiHintModule,r.TuiNotificationModule,i.Bz.forChild((0,u.Ve)(G))]}),t})()}}]);