(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35989],{35989:(e,t,r)=>{r.r(t),r.d(t,{ExampleTuiFieldErrorModule:()=>Ee});var o=r(76733),n=r(72133),i=r(42932),u=r(59611),l=r(87253),a=r(90860),s=r(38631),c=r(66698),d=r(39854),p=r(6254),m=r(20755),f=r(36877),h=r(43894),g=r(17894),Z=r(97967),x=r(27146),T=r(18004),b=r(91734),A=r(59915),_=r(11537),L=r(15925),C=r(13117),y=r(93815),q=r(72037);const U=function(){return[]},w=/^[a-zA-Z]+$/;function v(e){return e.value&&w.test(e.value)?null:{other:"Only latin letters are allowed"}}function V(e){return"42"===e.value?null:{other:"Wrong"}}let M=(()=>{var e;class t{constructor(){this.testValue1=new n.NI("",[n.kI.required,v]),this.testValue3=new n.NI("",[n.kI.required,v]),this.testForm=new n.cw({testValue1:this.testValue1,testValue2:new n.NI("",[n.kI.required,V])},(e=>Object.values(e.controls).every((({valid:e})=>e))?null:{other:"Form is invalid"})),this.testValue1.valueChanges.pipe((0,T.x)()).subscribe((()=>{this.testValue1.markAsTouched()}))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-field-error-pipe-example-1"]],decls:36,vars:21,consts:[[3,"formGroup"],["tuiLabel","Type the ultimate answer",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel","Set a password"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1",3,"error"],["fragment","mark-control-as-touched-and-validate","href","/utils/miscellaneous#mark-control-as-touched-and-validate","routerLink","/utils/miscellaneous","tuiLink",""],["href","https://angular.io/api/forms/NgControl","rel","noreferrer","target","_blank","tuiLink",""],["href","https://angular.io/api/forms/ControlContainer","rel","noreferrer","target","_blank","tuiLink",""],[3,"error"]],template:function(e,t){1&e&&(m.TgZ(0,"form",0)(1,"label",1)(2,"tui-input",2),m._uU(3," to the Question of Life, the Universe, and Everything "),m.qZA(),m._UZ(4,"tui-error",3),m.ALo(5,"async"),m.ALo(6,"tuiFieldError"),m.qZA(),m.TgZ(7,"label",4)(8,"tui-input",5),m._uU(9," Latin letters only "),m.qZA(),m._UZ(10,"tui-error",6),m.ALo(11,"async"),m.ALo(12,"tuiFieldError"),m.qZA(),m.TgZ(13,"p"),m._uU(14," If you want to show a validation message as soon as a user starts typing, subscribe on form value changes and call markAsTouched on control on first value change. You can also use "),m.TgZ(15,"a",7)(16,"code"),m._uU(17,"tuiMarkControlAsTouchedAndValidate"),m.qZA()()(),m.TgZ(18,"p")(19,"code"),m._uU(20,"tuiFieldError"),m.qZA(),m._uU(21," pipe can be used inside your controls to show error messages for parent "),m.TgZ(22,"a",8),m._uU(23," NgControl "),m.qZA(),m._uU(24," or "),m.TgZ(25,"a",9),m._uU(26," ControlContainer "),m.qZA(),m._uU(27," through DI without explicit directive on "),m.TgZ(28,"code"),m._uU(29,"tui-error"),m.qZA(),m._uU(30," . "),m.qZA(),m.TgZ(31,"p"),m._uU(32,"Below is an error for the entire form:"),m.qZA(),m._UZ(33,"tui-error",10),m.ALo(34,"async"),m.ALo(35,"tuiFieldError"),m.qZA()),2&e&&(m.Q6J("formGroup",t.testForm),m.xp6(2),m.Q6J("tuiTextfieldLabelOutside",!0),m.xp6(2),m.Q6J("error",m.lcZ(5,6,m.lcZ(6,8,m.DdM(18,U)))),m.xp6(4),m.Q6J("tuiTextfieldLabelOutside",!0),m.xp6(2),m.Q6J("error",m.lcZ(11,10,m.lcZ(12,12,m.DdM(19,U)))),m.xp6(23),m.Q6J("error",m.lcZ(34,14,m.lcZ(35,16,m.DdM(20,U)))))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,b.x,A.s,_.v,L.A,C.K,y.w,x.V,i.rH,o.Ov,q.A],encapsulation:2,changeDetection:0}),t})();var J=r(58733),E=r(71209),N=r(16188),I=r(27795),k=r(92425),F=r(73843),Q=r(90096),O=r(52891);const D=function(){return[]};let S=(()=>{var e;class t{constructor(){this.testValue1=new n.NI("",[n.kI.minLength(4),n.kI.maxLength(4)]),this.testValue2=new n.NI("",[n.kI.required,n.kI.email]),this.testValue3=new n.NI(2,[n.kI.min(3)]),this.testForm=new n.cw({testValue1:this.testValue1,testValue2:this.testValue2,testValue3:this.testValue3}),this.testValue1.valueChanges.subscribe((()=>{this.testValue1.markAsTouched()}))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-field-error-pipe-example-2"]],features:[m._Bn([{provide:d.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:({requiredLength:e})=>`Maximum length — ${e}`,minlength:({requiredLength:e})=>(0,E.of)(`Minimum length — ${e}`),min:(0,N.F)(2e3).pipe((0,I.R)(J.tuiIsFalsy,!1),(0,k.U)((e=>e?"Fix please":"Min number 3")),(0,F.O)("Min number 3"))}}])],decls:19,vars:21,consts:[[3,"formGroup"],["tuiLabel","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel","Minimum and maximum length",1,"tui-space_bottom-4"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1",3,"error"],["tuiLabel","Minimum number"],["decimal","never","formControlName","testValue3","tuiTextfieldSize","m",3,"step"],["formControlName","testValue3",3,"error"]],template:function(e,t){1&e&&(m.TgZ(0,"form",0)(1,"label",1)(2,"tui-input",2),m._uU(3," Required "),m.qZA(),m._UZ(4,"tui-error",3),m.ALo(5,"async"),m.ALo(6,"tuiFieldError"),m.qZA(),m.TgZ(7,"label",4)(8,"tui-input",5),m._uU(9," 4 letters word... "),m.qZA(),m._UZ(10,"tui-error",6),m.ALo(11,"async"),m.ALo(12,"tuiFieldError"),m.qZA(),m.TgZ(13,"label",7)(14,"tui-input-number",8),m._uU(15," number "),m.qZA(),m._UZ(16,"tui-error",9),m.ALo(17,"async"),m.ALo(18,"tuiFieldError"),m.qZA()()),2&e&&(m.Q6J("formGroup",t.testForm),m.xp6(2),m.Q6J("tuiTextfieldLabelOutside",!0),m.xp6(2),m.Q6J("error",m.lcZ(5,6,m.lcZ(6,8,m.DdM(18,D)))),m.xp6(6),m.Q6J("error",m.lcZ(11,10,m.lcZ(12,12,m.DdM(19,D)))),m.xp6(4),m.Q6J("step",1),m.xp6(2),m.Q6J("error",m.lcZ(17,14,m.lcZ(18,16,m.DdM(20,D)))))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,b.x,A.s,_.v,L.A,C.K,y.w,Q.q,O.g,o.Ov,q.A],encapsulation:2,changeDetection:0}),t})();var P=r(47880),H=r(37419);const z=["errorContent"],G=["bigErrorContent"];function Y(e,t){1&e&&(m._uU(0," Secret number must contain "),m.TgZ(1,"strong"),m._uU(2,"10 or 12 digits"),m.qZA(),m._uU(3," . "))}function B(e,t){1&e&&(m._uU(0," This company is already registered "),m.TgZ(1,"button",13),m._uU(2," It is mine "),m.qZA())}const R=function(){return["required","inn"]},X=function(){return[]},W=/^\d{10}$/,$=/^\d{12}$/;let K=(()=>{var e;class t{constructor(){this.testValue2=new n.NI(""),this.testForm=new n.cw({testValue1:new n.NI("",[n.kI.required,this.getSecretValidator()]),testValue2:this.testValue2,testValue3:new n.NI(!1,[n.kI.requiredTrue])}),this.companyValidator=e=>e.value?{inn:new J.TuiValidationError(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([n.kI.required,this.companyValidator])}onSubmit(){(0,J.tuiMarkControlAsTouchedAndValidate)(this.testForm)}getSecretValidator(){return e=>e.value&&(W.test(e.value)||$.test(e.value))?null:{secret:new J.TuiValidationError(this.errorContent)}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-field-error-pipe-example-3"]],viewQuery:function(e,t){if(1&e&&(m.Gf(z,5),m.Gf(G,5)),2&e){let e;m.iGM(e=m.CRH())&&(t.errorContent=e.first),m.iGM(e=m.CRH())&&(t.bigErrorContent=e.first)}},decls:24,vars:21,consts:[[3,"formGroup","submit"],["tuiLabel","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"error"],["tuiLabel","Enter company name",1,"tui-space_top-4","tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2",3,"error"],[1,"checkbox"],["formControlName","testValue3","size","s","tuiCheckbox","","type","checkbox"],["formControlName","testValue3",3,"error"],["size","m","tuiButton","","type","submit",1,"tui-space_top-4"],["tuiButton","","type","button",1,"tui-space_top-2"]],template:function(e,t){1&e&&(m.TgZ(0,"form",0),m.NdJ("submit",(function(){return t.onSubmit()})),m.TgZ(1,"label",1),m._UZ(2,"tui-input",2),m.YNc(3,Y,4,0,"ng-template",null,3,m.W1O),m._UZ(5,"tui-error",4),m.ALo(6,"async"),m.ALo(7,"tuiFieldError"),m.qZA(),m.TgZ(8,"label",5),m._UZ(9,"tui-input",6),m.YNc(10,B,3,0,"ng-template",null,7,m.W1O),m._UZ(12,"tui-error",8),m.ALo(13,"async"),m.ALo(14,"tuiFieldError"),m.qZA(),m.TgZ(15,"label")(16,"div",9),m._UZ(17,"input",10),m._uU(18," I agree on the conditions "),m.qZA(),m._UZ(19,"tui-error",11),m.ALo(20,"async"),m.ALo(21,"tuiFieldError"),m.qZA(),m.TgZ(22,"button",12),m._uU(23," Submit "),m.qZA()()),2&e&&(m.Q6J("formGroup",t.testForm),m.xp6(2),m.Q6J("tuiTextfieldLabelOutside",!0),m.xp6(3),m.Q6J("error",m.lcZ(6,6,m.lcZ(7,8,m.DdM(18,R)))),m.xp6(4),m.Q6J("tuiTextfieldLabelOutside",!0),m.xp6(3),m.Q6J("error",m.lcZ(13,10,m.lcZ(14,12,m.DdM(19,X)))),m.xp6(7),m.Q6J("error",m.lcZ(20,14,m.lcZ(21,16,m.DdM(20,X)))))},dependencies:[n._Y,n.Wl,n.JJ,n.JL,n.sg,n.u,b.x,A.s,_.v,L.A,C.K,y.w,P.v,H.f,o.Ov,q.A],styles:[".checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}"],changeDetection:0}),t})();var j=r(18026),ee=r(31809),te=r(30999);const re=["phoneErrorContent"];function oe(e,t){1&e&&m._uU(0,"Invalid phone number length")}const ne=function(){return[]};function ie(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"label",4)(1,"span",5)(2,"tui-input-phone",6),m._UZ(3,"input",7),m.qZA(),m.TgZ(4,"button",8),m.NdJ("click",(function(){const t=m.CHM(e).index,r=m.oxw();return m.KtG(r.removePhone(t))})),m.qZA()(),m.YNc(5,oe,1,0,"ng-template",null,9,m.W1O),m._UZ(7,"tui-error",10),m.ALo(8,"async"),m.ALo(9,"tuiFieldError"),m.qZA()}if(2&e){const e=t.index;m.MGl("tuiLabel","Phone number ",e+1,""),m.xp6(2),m.s9C("formControlName",e),m.Q6J("tuiTextfieldLabelOutside",!0),m.xp6(5),m.s9C("formControlName",e),m.Q6J("error",m.lcZ(8,5,m.lcZ(9,7,m.DdM(9,ne))))}}let ue=(()=>{var e;class t{constructor(){this.testForm=new n.cw({phones:new n.Oe([new n.NI("",[n.kI.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new n.NI("",this.addValidators()))}removePhone(e){this.formData.removeAt(e);let t=0;for(;t<=1&&this.formData.controls[t];)this.formData.controls[t].setValidators([n.kI.required,this.getPhoneLengthValidator()]),t++}addValidators(){return this.formData.controls.length<2?[n.kI.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return e=>12!==e.value.length?{length:new J.TuiValidationError(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return e=>e.controls.length<2||e.controls.filter((e=>e.errors)).length&&e.controls.length?{length:new J.TuiValidationError("You should add at least 2 phone number")}:null}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-field-error-pipe-example-4"]],viewQuery:function(e,t){if(1&e&&m.Gf(re,5),2&e){let e;m.iGM(e=m.CRH())&&(t.phoneErrorContent=e.first)}},decls:7,vars:8,consts:[[3,"formGroup"],["formArrayName","phones","class","tui-space_bottom-4",3,"tuiLabel",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error",3,"error"],["size","s","tuiButton","","type","button",1,"tui-space_top-4",3,"click"],["formArrayName","phones",1,"tui-space_bottom-4",3,"tuiLabel"],[1,"row"],["tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["autocomplete","new-password","tuiTextfield",""],["appearance","icon","icon","tuiIconTrash","size","m","title","Delete phone number","tuiIconButton","","type","button",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName","error"]],template:function(e,t){1&e&&(m.TgZ(0,"form",0),m.YNc(1,ie,10,10,"label",1),m._UZ(2,"tui-error",2),m.ALo(3,"async"),m.ALo(4,"tuiFieldError"),m.TgZ(5,"button",3),m.NdJ("click",(function(){return t.addPhone()})),m._uU(6," Add a phone number "),m.qZA()()),2&e&&(m.Q6J("formGroup",t.testForm),m.xp6(1),m.Q6J("ngForOf",t.formData.controls),m.xp6(1),m.Q6J("error",m.lcZ(3,3,m.lcZ(4,5,m.DdM(7,ne)))))},dependencies:[o.sg,n._Y,n.JJ,n.JL,n.sg,n.u,n.CE,b.x,A.s,_.v,L.A,j.M,P.v,ee.y,te.X,o.Ov,q.A],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),t})();var le=r(24900);const ae=function(){return[]},se=/^[a-zA-Z]+$/;let ce=(()=>{var e;class t{constructor(){var e;this.fb=(0,m.f3M)(n.QS),this.form=this.fb.group({text:["русский текст",n.kI.required]}),this.form.controls.text.setAsyncValidators((e=(0,m.f3M)(J.TUI_IS_E2E),t=>t.value&&se.test(t.value)?(0,E.of)(null):(0,E.of)({error:new J.TuiValidationError("Only latin letters allowed")}).pipe(e?(0,le.g)(0):(0,le.g)(5e3)))),this.form.controls.text.markAsTouched()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-field-error-pipe-example-5"]],decls:7,vars:7,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text",3,"error"]],template:function(e,t){1&e&&(m.TgZ(0,"form",0)(1,"div",1)(2,"tui-input",2),m._uU(3," Enter some text "),m.qZA(),m._UZ(4,"tui-error",3),m.ALo(5,"async"),m.ALo(6,"tuiFieldError"),m.qZA()()),2&e&&(m.Q6J("formGroup",t.form),m.xp6(4),m.Q6J("error",m.lcZ(5,2,m.lcZ(6,4,m.DdM(6,ae)))))},dependencies:[n._Y,n.JJ,n.JL,n.sg,n.u,_.v,C.K,y.w,o.Ov,q.A],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),t})();var de=r(77441),pe=r(77355),me=r(42463),fe=r(96954),he=r(17085),ge=r(5330),Ze=r(22250),xe=r(92437),Te=r(45991),be=r(87294),Ae=r(62601),_e=r(8127),Le=r(90357),Ce=r(16601);function ye(e,t){if(1&e&&(m.TgZ(0,"td",8),m._uU(1),m.qZA()),2&e){const e=m.oxw().$implicit;m.xp6(1),m.hij(" ",e.name," ")}}const qe=function(){return[]};function Ue(e,t){if(1&e&&(m.TgZ(0,"td",8)(1,"tui-input-number",9),m.ALo(2,"tuiFieldErrorContent"),m.ALo(3,"tuiCurrency"),m._uU(4," Price "),m.qZA()()),2&e){const e=m.oxw().index,t=m.oxw();m.xp6(1),m.Q6J("formControl",t.controls[e])("tuiHint",m.lcZ(2,3,m.DdM(7,qe)))("tuiTextfieldPostfix",m.lcZ(3,5,"UGX"))}}function we(e,t){1&e&&(m.TgZ(0,"tr",6),m.YNc(1,ye,2,1,"td",7),m.YNc(2,Ue,5,8,"td",7),m.qZA()),2&e&&(m.xp6(1),m.Q6J("tuiCell","name"),m.xp6(1),m.Q6J("tuiCell","price"))}let ve=(()=>{var e;class t{constructor(){this.data=[{name:"Latte"},{name:"Cappuccino"}],this.latteControl=new n.NI(null,[n.kI.required,n.kI.max(6)]),this.cappuccinoControl=new n.NI(null,[n.kI.required,n.kI.max(5)]),this.controls=[this.latteControl,this.cappuccinoControl],this.columns=["name","price"]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-field-error-content-pipe-example-6"]],features:[m._Bn([{provide:d.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",max:e=>`Too expensive, max ${e.max}`}}])],decls:9,vars:4,consts:[["tuiTable","",1,"table",3,"columns"],["tuiThGroup",""],["tuiTh","",3,"resizable"],["tuiTh",""],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],["tuiHintDirection","right",3,"formControl","tuiHint","tuiTextfieldPostfix"]],template:function(e,t){1&e&&(m.TgZ(0,"table",0)(1,"thead")(2,"tr",1)(3,"th",2),m._uU(4," Name "),m.qZA(),m.TgZ(5,"th",3),m._uU(6,"Price"),m.qZA()()(),m.TgZ(7,"tbody",4),m.YNc(8,we,3,2,"tr",5),m.qZA()()),2&e&&(m.Q6J("columns",t.columns),m.xp6(3),m.Q6J("resizable",!0),m.xp6(4),m.Q6J("data",t.data),m.xp6(1),m.Q6J("ngForOf",t.data))},dependencies:[o.sg,n.JJ,n.oH,de.T,pe.D,me.x,fe.t,he.D,Q.q,O.g,ge.c,Ze.j,xe.E,Te.W,be.K,Ae.f,_e.B,Le.y,Ce.i],styles:[".table[_ngcontent-%COMP%]{width:100%;table-layout:fixed}.error[_ngcontent-%COMP%]{color:#fff}"],changeDetection:0}),t})();function Ve(e,t){if(1&e&&(m.TgZ(0,"p"),m._uU(1," FieldErrorPipe takes order of errors as array and transform it to "),m.TgZ(2,"code"),m._uU(3,"TuiValidationError"),m.qZA(),m._uU(4," . Can be used with "),m.TgZ(5,"code"),m._uU(6,"TuiError"),m.qZA()(),m.TgZ(7,"p"),m._uU(8," You can also use "),m.TgZ(9,"code"),m._uU(10,"tuiFieldErrorContentPipe"),m.qZA(),m._uU(11," with "),m.TgZ(12,"code"),m._uU(13,"TuiHint"),m.qZA(),m._uU(14," (see "),m.TgZ(15,"a",3),m._uU(16," tuiFieldErrorContentPipe example "),m.qZA(),m._uU(17," ). It returns a content of the TuiValidationError. "),m.qZA(),m.TgZ(18,"tui-doc-example",4),m._UZ(19,"tui-field-error-pipe-example-1"),m.qZA(),m.TgZ(20,"tui-doc-example",5),m._UZ(21,"tui-field-error-pipe-example-2"),m.qZA(),m.TgZ(22,"tui-doc-example",6),m._UZ(23,"tui-field-error-pipe-example-3"),m.qZA(),m.TgZ(24,"tui-doc-example",7),m._UZ(25,"tui-field-error-pipe-example-4"),m.qZA(),m.TgZ(26,"tui-doc-example",8),m._UZ(27,"tui-field-error-pipe-example-5"),m.qZA(),m.TgZ(28,"tui-doc-example",9),m._UZ(29,"tui-field-error-content-pipe-example-6"),m.qZA()),2&e){const e=m.oxw();m.xp6(18),m.Q6J("content",e.example1),m.xp6(2),m.Q6J("content",e.example2),m.xp6(2),m.Q6J("content",e.example3),m.xp6(2),m.Q6J("content",e.example4),m.xp6(2),m.Q6J("content",e.example5),m.xp6(2),m.Q6J("content",e.example6)}}function Me(e,t){if(1&e&&(m.TgZ(0,"ol",10)(1,"li")(2,"p"),m._uU(3," Import "),m.TgZ(4,"code"),m._uU(5,"TuiFieldErrorPipeModule"),m.qZA(),m._uU(6," into a module where you want to use our component "),m.qZA(),m._UZ(7,"tui-doc-code",11),m.qZA(),m.TgZ(8,"li")(9,"p"),m._uU(10,"Use pipe in template:"),m.qZA(),m._UZ(11,"tui-doc-code",12),m.qZA()()),2&e){const e=m.oxw();m.xp6(7),m.Q6J("code",e.exampleModule),m.xp6(4),m.Q6J("code",e.exampleHtml)}}let Je=(()=>{var e;class t{constructor(){this.exampleModule=r.e(97011).then(r.t.bind(r,97011,17)),this.exampleHtml=r.e(85093).then(r.t.bind(r,85093,17)),this.example1={TypeScript:r.e(98695).then(r.t.bind(r,98695,17)),HTML:r.e(72178).then(r.t.bind(r,72178,17))},this.example2={TypeScript:r.e(14720).then(r.t.bind(r,14720,17)),HTML:r.e(93850).then(r.t.bind(r,93850,17))},this.example3={TypeScript:r.e(4697).then(r.t.bind(r,4697,17)),HTML:r.e(18777).then(r.t.bind(r,18777,17))},this.example4={TypeScript:r.e(79147).then(r.t.bind(r,79147,17)),HTML:r.e(39218).then(r.t.bind(r,39218,17)),LESS:r.e(37605).then(r.t.bind(r,37605,17))},this.example5={TypeScript:r.e(19684).then(r.t.bind(r,19684,17)),HTML:r.e(52261).then(r.t.bind(r,52261,17)),LESS:r.e(74547).then(r.t.bind(r,74547,17))},this.example6={TypeScript:r.e(52108).then(r.t.bind(r,52108,17)),HTML:r.e(91072).then(r.t.bind(r,91072,17)),LESS:r.e(67129).then(r.t.bind(r,67129,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["example-field-error-pipe"]],decls:3,vars:0,consts:[["header","FieldError","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],["fragment","content","routerLink",".","tuiLink",""],["id","base","heading","Basic",3,"content"],["id","custom-messages","heading","With custom messages for validators",3,"content"],["id","patterns","heading","with a template",3,"content"],["id","form-array","heading","With adding new controls (FormArray)",3,"content"],["id","async","heading","async validator",3,"content"],["id","content","heading","tuiFieldErrorContentPipe",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,Ve,30,6,"ng-template",1),m.YNc(2,Me,12,2,"ng-template",2),m.qZA())},dependencies:[f.c,h.q,g.n,Z.f,x.V,i.rH,M,S,K,ue,ce,ve],encapsulation:2,changeDetection:0}),t})(),Ee=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=m.oAB({type:e}),e.ɵinj=m.cJS({imports:[o.ez,n.UX,l.fV,s.TuiTextfieldControllerModule,s.TuiErrorModule,d.TuiFieldErrorPipeModule,s.TuiLabelModule,s.TuiHintModule,d.TuiInputModule,s.TuiButtonModule,d.TuiInputPhoneModule,d.TuiInputNumberModule,s.TuiLinkModule,a.TuiTableModule,s.TuiHintModule,d.TuiInputNumberModule,u.TuiCurrencyPipeModule,p.wq,c.xl,i.Bz.forChild((0,l.Ve)(Je))]}),t})()}}]);