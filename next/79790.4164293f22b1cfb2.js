(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79790],{42336:(t,e,n)=>{n.d(e,{b:()=>r});var i=n(6642),o=n(56424),s=n(9911);const a="Bell";class r extends s.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=i.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","dark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.inputModeVariants=["text","numeric"],this.customContentVariants=["",a,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0],this.inputMode=this.inputModeVariants[0],this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.filler="",this.minHeight=null,this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPieChartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownOpen=new o.X(!1),this.dropdownAlignVariants=["left","right","center"],this.dropdownAlign=i.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=i.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.prefixVariants=["","$","GBP","Very long text"],this.prefix=this.prefixVariants[0],this.postfix=this.prefixVariants[0],this.dropdownOffset=i.TUI_DROPDOWN_DEFAULT_OPTIONS.offset}get customContent(){return this.customContentSelected===a?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}},9911:(t,e,n)=>{n.d(e,{O:()=>i});class i{constructor(){this.pseudoVariants=[!1,!0],this.textAlignVariants=["left","right"],this.textAlign=this.textAlignVariants[0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},79790:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiInputInlineModule:()=>D});var i=n(76733),o=n(72133),s=n(42932),a=n(87253),r=n(42513),u=n(42336),c=n(20755),l=n(15165),d=n(36877),p=n(73097),h=n(38404),m=n(65004),g=n(43894),f=n(17894),x=n(97967),y=n(5824);let b=(()=>{var t;class e{constructor(){this.testForm=new o.cw({testValue1:new o.NI("Hello 1"),testValue2:new o.NI("Hello 2"),testValue3:new o.NI("Hello 3"),testValue4:new o.NI("")})}get toggleContent(){return this.testForm.disabled?"enable (allow editing)":"disable"}get input4Empty(){return""===this.testForm.get("testValue4").value}onToggleClick(){this.testForm.disabled?this.testForm.enable():this.testForm.disable()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-input-inline-example-1"]],decls:8,vars:4,consts:[[3,"formGroup"],["formControlName","testValue1",1,"input1"],["formControlName","testValue2",1,"input2"],["formControlName","testValue3",1,"input3"],["formControlName","testValue4",1,"input4"],["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"form",0),c._UZ(1,"tui-input-inline",1)(2,"tui-input-inline",2)(3,"tui-input-inline",3),c.TgZ(4,"tui-input-inline",4),c._uU(5," (Show placeholder if control is empty) "),c.qZA()(),c.TgZ(6,"button",5),c.NdJ("click",(function(){return e.onToggleClick()})),c._uU(7),c.qZA()),2&t&&(c.Q6J("formGroup",e.testForm),c.xp6(4),c.ekj("input4_empty",e.input4Empty),c.xp6(3),c.hij(" ",e.toggleContent,"\n"))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,y.m,l.l],styles:[".input1[_ngcontent-%COMP%], .input2[_ngcontent-%COMP%], .input3[_ngcontent-%COMP%]{margin-right:.625rem}.input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill)}.input2[_ngcontent-%COMP%]{background:var(--tui-base-09);padding:.625rem;color:var(--tui-base-01);letter-spacing:.625rem;font-size:1.25rem}.input3[_ngcontent-%COMP%]{font-family:monospace;font-weight:700;background:var(--tui-base-04)}.input4_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),e})();var C=n(6642),T=n(59590);function V(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tui-input-inline",3),c.NdJ("ngModelChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.heading=e)}))("focusedChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.onFocusedChange(e))}))("keydown.enter.prevent",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.toggle())}))("keydown.esc.prevent",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.toggle())})),c._uU(1," Type a heading "),c.qZA()}if(2&t){const t=c.oxw();c.Q6J("ngModel",t.heading)}}function w(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"span"),c._uU(1),c.qZA(),c.TgZ(2,"button",4),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.toggle())})),c._uU(3," Edit heading "),c.qZA()}if(2&t){const t=c.oxw();c.xp6(1),c.Oqu(t.heading)}}let _=(()=>{var t;class e{constructor(){this.alerts=(0,c.f3M)(C.TuiAlertService),this.heading="Page heading",this.editing=!1}toggle(){this.editing=!this.editing}onFocusedChange(t){t||(this.editing=!1,this.saveHeading(this.heading))}saveHeading(t){this.alerts.open(t,{label:"New heading"}).subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-input-inline-example-2"]],decls:8,vars:4,consts:[[1,"header"],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.enter.prevent","keydown.esc.prevent",4,"ngIf","ngIfElse"],["text",""],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.enter.prevent","keydown.esc.prevent"],["appearance","icon","iconLeft","tuiIconEdit2Large","size","xs","tuiIconButton","","type","button",1,"tui-space_left-1",3,"click"]],template:function(t,e){if(1&t&&(c.TgZ(0,"h2",0),c.YNc(1,V,2,1,"tui-input-inline",1),c.YNc(2,w,4,1,"ng-template",null,2,c.W1O),c.qZA(),c.TgZ(4,"p"),c._uU(5," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates!\n"),c.qZA(),c.TgZ(6,"p"),c._uU(7," Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n"),c.qZA()),2&t){const t=c.MAs(3);c.ekj("header_empty",!e.heading),c.xp6(1),c.Q6J("ngIf",e.editing)("ngIfElse",t)}},dependencies:[i.O5,o.JJ,o.On,y.m,l.l,T.k],styles:[".header[_ngcontent-%COMP%]{height:1.5rem;display:flex;align-items:center;white-space:nowrap;line-height:1.5rem}.header_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),e})();var M=n(81576),Z=n(1925),P=n(81749);let A=(()=>{var t;class e{constructor(){this.cd=(0,c.f3M)(c.sBO),this.destroy$=(0,c.f3M)(M.TuiDestroyService,{self:!0}),this.zone=(0,c.f3M)(c.R0b),this.isE2E=(0,c.f3M)(M.TUI_IS_E2E),this.count="0"}ngOnInit(){this.isE2E||(0,Z.H)(0,3e3).pipe((0,M.tuiZoneOptimized)(this.zone),(0,M.tuiWatch)(this.cd),(0,P.R)(this.destroy$)).subscribe((t=>{this.count=String(t)}))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["tui-input-inline-example-3"]],features:[c._Bn([M.TuiDestroyService])],decls:1,vars:1,consts:[[1,"input1",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(c.TgZ(0,"tui-input-inline",0),c.NdJ("ngModelChange",(function(t){return e.count=t})),c.qZA()),2&t&&c.Q6J("ngModel",e.count)},dependencies:[o.JJ,o.On,l.l],styles:[".input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill);padding:.625rem;font-size:1.25rem;text-align:center}"],changeDetection:0}),e})();function I(t,e){if(1&t&&(c.TgZ(0,"p"),c._uU(1,"Inline field"),c.qZA(),c.TgZ(2,"tui-doc-example",2),c._UZ(3,"tui-input-inline-example-1"),c.qZA(),c.TgZ(4,"tui-doc-example",3),c._UZ(5,"tui-input-inline-example-2"),c.qZA(),c.TgZ(6,"tui-doc-example",4),c._UZ(7,"tui-input-inline-example-3"),c.qZA()),2&t){const t=c.oxw();c.xp6(2),c.Q6J("content",t.example1),c.xp6(2),c.Q6J("content",t.example2),c.xp6(2),c.Q6J("content",t.example3)}}function O(t,e){if(1&t&&(c.TgZ(0,"tui-input-inline",10),c._uU(1," Placeholder "),c.qZA()),2&t){const t=c.oxw(2);c.Udp("float",t.textAlign),c.Q6J("formControl",t.control)("maxLength",t.maxLength)}}function v(t,e){1&t&&(c._uU(0," Disabled state (use "),c.TgZ(1,"code"),c._uU(2,"formControl.disable()"),c.qZA(),c._uU(3," ) "))}function N(t,e){1&t&&c._uU(0," Maximum number of symbols ")}function L(t,e){1&t&&c._uU(0," Custom align content by float ")}function U(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tui-doc-demo",5),c.YNc(1,O,2,4,"ng-template"),c.qZA(),c.TgZ(2,"tui-doc-documentation"),c.YNc(3,v,4,0,"ng-template",6),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.disabled=e)})),c.YNc(4,N,1,0,"ng-template",7),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.maxLength=e)})),c.qZA(),c.TgZ(5,"tui-doc-documentation",8),c.YNc(6,L,1,0,"ng-template",9),c.NdJ("documentationPropertyValueChange",(function(e){c.CHM(t);const n=c.oxw();return c.KtG(n.textAlign=e)})),c.qZA()}if(2&t){const t=c.oxw();c.Q6J("control",t.control),c.xp6(3),c.Q6J("documentationPropertyValue",t.disabled),c.xp6(1),c.Q6J("documentationPropertyValues",t.maxLengthVariants)("documentationPropertyValue",t.maxLength),c.xp6(2),c.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function q(t,e){if(1&t&&(c.TgZ(0,"ol",11)(1,"li")(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiInputInlineModule"),c.qZA(),c._uU(6," into a module where you want to use our component "),c.qZA(),c._UZ(7,"tui-doc-code",12),c.qZA(),c.TgZ(8,"li")(9,"p"),c._uU(10,"Add to the template:"),c.qZA(),c._UZ(11,"tui-doc-code",13),c.qZA()()),2&t){const t=c.oxw();c.xp6(7),c.Q6J("code",t.exampleModule),c.xp6(4),c.Q6J("code",t.exampleHtml)}}let J=(()=>{var t;class e extends u.b{constructor(){super(...arguments),this.control=new o.NI("111",o.kI.required),this.maxLengthVariants=[10],this.maxLength=null,this.exampleModule=n.e(35625).then(n.t.bind(n,35625,17)),this.exampleHtml=n.e(25662).then(n.t.bind(n,25662,17)),this.example1={TypeScript:n.e(42899).then(n.t.bind(n,42899,17)),HTML:n.e(79511).then(n.t.bind(n,79511,17)),LESS:n.e(60995).then(n.t.bind(n,60995,17))},this.example2={TypeScript:n.e(1161).then(n.t.bind(n,1161,17)),HTML:n.e(24460).then(n.t.bind(n,24460,17)),LESS:n.e(47922).then(n.t.bind(n,47922,17))},this.example3={TypeScript:n.e(71416).then(n.t.bind(n,71416,17)),HTML:n.e(95560).then(n.t.bind(n,95560,17)),LESS:n.e(30955).then(n.t.bind(n,30955,17))}}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=c.n5z(t)))(n||t)}}(),t.ɵcmp=c.Xpm({type:t,selectors:[["example-tui-input-inline"]],features:[c.qOj],decls:4,vars:0,consts:[["header","InputInline","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","in-heading","heading","In heading",3,"content"],["id","dynamic-increment","heading","Dynamic counter increment (3 sec)",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.float","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"input",3,"formControl","maxLength"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,I,8,3,"ng-template",1),c.YNc(2,U,7,6,"ng-template",1),c.YNc(3,q,12,2,"ng-template",1),c.qZA())},dependencies:[o.JJ,o.oH,l.l,d.c,p.F,h.z,m.B,g.q,f.n,x.f,b,_,A],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;border-bottom:1px solid var(--tui-base-09)}"],changeDetection:0}),e})(),D=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[i.ez,o.u5,o.UX,r.TuiInputInlineModule,a.fV,s.Bz.forChild((0,a.Ve)(J))]}),e})()}}]);