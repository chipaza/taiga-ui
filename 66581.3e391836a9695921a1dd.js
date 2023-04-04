"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[66581],{66581:(Ht,v,e)=>{e.r(v),e.d(v,{ExampleTuiFieldErrorModule:()=>zt});var u=e(12057),n=e(24751),A=e(33982),I=e(23121),C=e(29851),N=e(38072),s=e(3497),m=e(55908),Q=e(89570),t=e(74788),O=e(88331),S=e(37159),F=e(66596),D=e(57068),f=e(88135),T=e(77027),h=e(41360),x=e(10200),g=e(68874),p=e(36951),c=e(7114);const Z=function(){return[]},b=/^[a-zA-Z]+$/;function y(o){return o.value&&b.test(o.value)?null:{other:"Only latin letters are allowed"}}function z(o){return"42"===o.value?null:{other:"Wrong"}}let G=(()=>{class o{constructor(){this.testValue1=new n.NI("",[n.kI.required,y]),this.testValue3=new n.NI("",[n.kI.required,y]),this.testForm=new n.cw({testValue1:this.testValue1,testValue2:new n.NI("",[n.kI.required,z])},r=>Object.values(r.controls).every(({valid:l})=>l)?null:{other:"Form is invalid"}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-field-error-pipe-example-1"]],decls:33,vars:21,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","Type the ultimate answer",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel","Set a password"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1",3,"error"],["tuiLink","","href","https://angular.io/api/forms/NgControl","rel","noreferrer","target","_blank"],["tuiLink","","href","https://angular.io/api/forms/ControlContainer","rel","noreferrer","target","_blank"],[3,"error"]],template:function(r,l){1&r&&(t.TgZ(0,"form",0),t.TgZ(1,"label",1),t.TgZ(2,"tui-input",2),t._uU(3," to the Question of Life, the Universe, and Everything "),t.qZA(),t._UZ(4,"tui-error",3),t.ALo(5,"async"),t.ALo(6,"tuiFieldError"),t.qZA(),t.TgZ(7,"label",4),t.TgZ(8,"tui-input",5),t._uU(9," Latin letters only "),t.qZA(),t._UZ(10,"tui-error",6),t.ALo(11,"async"),t.ALo(12,"tuiFieldError"),t.qZA(),t.TgZ(13,"p"),t._uU(14," If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change "),t.qZA(),t.TgZ(15,"p"),t.TgZ(16,"code"),t._uU(17,"tuiFieldError"),t.qZA(),t._uU(18," pipe can be used inside your controls to show error messages for parent "),t.TgZ(19,"a",7),t._uU(20," NgControl "),t.qZA(),t._uU(21," or "),t.TgZ(22,"a",8),t._uU(23," ControlContainer "),t.qZA(),t._uU(24," through DI without explicit directive on "),t.TgZ(25,"code"),t._uU(26,"tui-error"),t.qZA(),t._uU(27," . "),t.qZA(),t.TgZ(28,"p"),t._uU(29,"Below is an error for the entire form:"),t.qZA(),t._UZ(30,"tui-error",9),t.ALo(31,"async"),t.ALo(32,"tuiFieldError"),t.qZA()),2&r&&(t.Q6J("formGroup",l.testForm),t.xp6(2),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(2),t.Q6J("error",t.lcZ(5,6,t.lcZ(6,8,t.DdM(18,Z)))),t.xp6(4),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(2),t.Q6J("error",t.lcZ(11,10,t.lcZ(12,12,t.DdM(19,Z)))),t.xp6(20),t.Q6J("error",t.lcZ(31,14,t.lcZ(32,16,t.DdM(20,Z)))))},directives:[n._Y,n.JL,n.sg,f.A,T.K,h.w,n.JJ,n.u,x.s,g.x,p.v,F.V],pipes:[u.Ov,c.A],encapsulation:2,changeDetection:0}),o})();var d=e(73879),H=e(20945),Y=e(42145),R=e(88002),B=e(39761),X=e(65009),W=e(10383);const E=function(){return[]};function $(o){return`Maximum length \u2014 ${o.requiredLength}`}function K(o){return`Minimum length \u2014 ${o.requiredLength}`}let j=(()=>{class o{constructor(){this.testValue1=new n.NI("",[n.kI.minLength(4),n.kI.maxLength(4)]),this.testValue2=new n.NI("",[n.kI.required,n.kI.email]),this.testValue3=new n.NI(2,[n.kI.min(3)]),this.testForm=new n.cw({testValue1:this.testValue1,testValue2:this.testValue2,testValue3:this.testValue3}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-field-error-pipe-example-2"]],features:[t._Bn([{provide:m.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:$,minlength:K,min:(0,H.F)(2e3).pipe((0,Y.R)(d.tuiIsFalsy,!1),(0,R.U)(i=>i?"Fix please":"Min number 3"),(0,B.O)("Min number 3"))}}])],decls:19,vars:20,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel","Minimum and maximum length",1,"tui-space_bottom-4"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1",3,"error"],["tuiLabel","Minimum number"],["formControlName","testValue3","tuiTextfieldSize","m"],["formControlName","testValue3",3,"error"]],template:function(r,l){1&r&&(t.TgZ(0,"form",0),t.TgZ(1,"label",1),t.TgZ(2,"tui-input",2),t._uU(3," Required "),t.qZA(),t._UZ(4,"tui-error",3),t.ALo(5,"async"),t.ALo(6,"tuiFieldError"),t.qZA(),t.TgZ(7,"label",4),t.TgZ(8,"tui-input",5),t._uU(9," 4 letters word... "),t.qZA(),t._UZ(10,"tui-error",6),t.ALo(11,"async"),t.ALo(12,"tuiFieldError"),t.qZA(),t.TgZ(13,"label",7),t.TgZ(14,"tui-input-count",8),t._uU(15," number "),t.qZA(),t._UZ(16,"tui-error",9),t.ALo(17,"async"),t.ALo(18,"tuiFieldError"),t.qZA(),t.qZA()),2&r&&(t.Q6J("formGroup",l.testForm),t.xp6(2),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(2),t.Q6J("error",t.lcZ(5,5,t.lcZ(6,7,t.DdM(17,E)))),t.xp6(6),t.Q6J("error",t.lcZ(11,9,t.lcZ(12,11,t.DdM(18,E)))),t.xp6(6),t.Q6J("error",t.lcZ(17,13,t.lcZ(18,15,t.DdM(19,E)))))},directives:[n._Y,n.JL,n.sg,f.A,T.K,h.w,n.JJ,n.u,x.s,g.x,p.v,X.E,W.a],pipes:[u.Ov,c.A],encapsulation:2,changeDetection:0}),o})();var L=e(76189);const q=["errorContent"],w=["bigErrorContent"];function k(o,i){1&o&&(t._uU(0," Secret number must contain "),t.TgZ(1,"strong"),t._uU(2,"10 or 12 digits"),t.qZA(),t._uU(3," . "))}function _(o,i){1&o&&(t._uU(0," This company is already registered "),t.TgZ(1,"button",9),t._uU(2," It is mine "),t.qZA())}const tt=function(){return["required","inn"]},et=function(){return[]},V=/^\d{10}$/,P=/^\d{12}$/;let ot=(()=>{class o{constructor(){this.errorContent="",this.bigErrorContent="",this.testValue2=new n.NI(""),this.testForm=new n.cw({testValue1:new n.NI("",[n.kI.required,this.getSecretValidator()]),testValue2:this.testValue2}),this.companyValidator=r=>r.value?{inn:new d.TuiValidationError(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([n.kI.required,this.companyValidator])}getSecretValidator(){return r=>r.value&&(V.test(r.value)||P.test(r.value))?null:{secret:new d.TuiValidationError(this.errorContent)}}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-field-error-pipe-example-3"]],viewQuery:function(r,l){if(1&r&&(t.Gf(q,5),t.Gf(w,5)),2&r){let a;t.iGM(a=t.CRH())&&(l.errorContent=a.first),t.iGM(a=t.CRH())&&(l.bigErrorContent=a.first)}},decls:15,vars:15,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"error"],["tuiLabel","Enter company name",1,"tui-space_top-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2",3,"error"],["tuiButton","","type","button",1,"tui-space_top-2"]],template:function(r,l){1&r&&(t.TgZ(0,"form",0),t.TgZ(1,"label",1),t._UZ(2,"tui-input",2),t.YNc(3,k,4,0,"ng-template",null,3,t.W1O),t._UZ(5,"tui-error",4),t.ALo(6,"async"),t.ALo(7,"tuiFieldError"),t.qZA(),t.TgZ(8,"label",5),t._UZ(9,"tui-input",6),t.YNc(10,_,3,0,"ng-template",null,7,t.W1O),t._UZ(12,"tui-error",8),t.ALo(13,"async"),t.ALo(14,"tuiFieldError"),t.qZA(),t.qZA()),2&r&&(t.Q6J("formGroup",l.testForm),t.xp6(2),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(3),t.Q6J("error",t.lcZ(6,5,t.lcZ(7,7,t.DdM(13,tt)))),t.xp6(4),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(3),t.Q6J("error",t.lcZ(13,9,t.lcZ(14,11,t.DdM(14,et)))))},directives:[n._Y,n.JL,n.sg,f.A,T.K,h.w,n.JJ,n.u,x.s,g.x,p.v,L.v],pipes:[u.Ov,c.A],encapsulation:2,changeDetection:0}),o})();var rt=e(78750),nt=e(45303),it=e(91030);const lt=["phoneErrorContent"];function at(o,i){1&o&&t._uU(0,"Invalid phone number length")}const U=function(){return[]};function ut(o,i){if(1&o){const r=t.EpF();t.TgZ(0,"label",4),t.TgZ(1,"span",5),t.TgZ(2,"tui-input-phone",6),t._UZ(3,"input",7),t.qZA(),t.TgZ(4,"button",8),t.NdJ("click",function(){const Gt=t.CHM(r).index;return t.oxw().removePhone(Gt)}),t.qZA(),t.qZA(),t.YNc(5,at,1,0,"ng-template",null,9,t.W1O),t._UZ(7,"tui-error",10),t.ALo(8,"async"),t.ALo(9,"tuiFieldError"),t.qZA()}if(2&o){const r=i.index;t.MGl("tuiLabel","Phone number ",r+1,""),t.xp6(2),t.s9C("formControlName",r),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(5),t.s9C("formControlName",r),t.Q6J("error",t.lcZ(8,5,t.lcZ(9,7,t.DdM(9,U))))}}let st=(()=>{class o{constructor(){this.phoneErrorContent="",this.testForm=new n.cw({phones:new n.Oe([new n.NI("",[n.kI.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new n.NI("",this.addValidators()))}removePhone(r){this.formData.removeAt(r);let l=0;for(;l<=1&&this.formData.controls[l];)this.formData.controls[l].setValidators([n.kI.required,this.getPhoneLengthValidator()]),l++}addValidators(){return this.formData.controls.length<2?[n.kI.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return r=>12!==r.value.length?{length:new d.TuiValidationError(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return r=>r.controls.length<2||r.controls.filter(l=>l.errors).length&&r.controls.length?{length:new d.TuiValidationError("You should add at least 2 phone number")}:null}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-field-error-pipe-example-4"]],viewQuery:function(r,l){if(1&r&&t.Gf(lt,5),2&r){let a;t.iGM(a=t.CRH())&&(l.phoneErrorContent=a.first)}},decls:7,vars:8,consts:[[3,"formGroup"],["formArrayName","phones","class","tui-space_bottom-4",3,"tuiLabel",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error",3,"error"],["tuiButton","","type","button","size","s",1,"tui-space_top-4",3,"click"],["formArrayName","phones",1,"tui-space_bottom-4",3,"tuiLabel"],[1,"row"],["tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["tuiTextfield","","autocomplete","new-password"],["tuiIconButton","","type","button","size","m","title","Delete phone number","appearance","icon","icon","tuiIconTrash",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName","error"]],template:function(r,l){1&r&&(t.TgZ(0,"form",0),t.YNc(1,ut,10,10,"label",1),t._UZ(2,"tui-error",2),t.ALo(3,"async"),t.ALo(4,"tuiFieldError"),t.TgZ(5,"button",3),t.NdJ("click",function(){return l.addPhone()}),t._uU(6," Add a phone number "),t.qZA(),t.qZA()),2&r&&(t.Q6J("formGroup",l.testForm),t.xp6(1),t.Q6J("ngForOf",l.formData.controls),t.xp6(1),t.Q6J("error",t.lcZ(3,3,t.lcZ(4,5,t.DdM(7,U)))))},directives:[n._Y,n.JL,n.sg,u.sg,p.v,n.CE,L.v,f.A,rt.y,nt.X,x.s,n.JJ,n.u,g.x,it.M],pipes:[u.Ov,c.A],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),o})();var M=e(25917),J=e(71289);const mt=function(){return[]},dt=/^[a-zA-Z]+$/;let ct=(()=>{class o{constructor(r,l){this.fb=r,this.form=this.fb.group({text:["\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",n.kI.required]}),this.form.controls.text.setAsyncValidators(function(o){return i=>i.value&&dt.test(i.value)?(0,M.of)(null):(0,M.of)({error:new d.TuiValidationError("Only latin letters allowed")}).pipe((0,J.g)(o?0:5e3))}(l)),this.form.controls.text.markAsTouched()}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(n.qu),t.Y36(d.TUI_IS_CYPRESS))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-field-error-pipe-example-5"]],decls:7,vars:7,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text",3,"error"]],template:function(r,l){1&r&&(t.TgZ(0,"form",0),t.TgZ(1,"div",1),t.TgZ(2,"tui-input",2),t._uU(3," Enter some text "),t.qZA(),t._UZ(4,"tui-error",3),t.ALo(5,"async"),t.ALo(6,"tuiFieldError"),t.qZA(),t.qZA()),2&r&&(t.Q6J("formGroup",l.form),t.xp6(4),t.Q6J("error",t.lcZ(5,2,t.lcZ(6,4,t.DdM(6,mt)))))},directives:[n._Y,n.JL,n.sg,T.K,h.w,n.JJ,n.u,p.v],pipes:[u.Ov,c.A],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),o})();var ft=e(19582),Tt=e(222),ht=e(96408),xt=e(57681),gt=e(84190),Zt=e(62818),Et=e(48598),vt=e(16753),At=e(13735),Ct=e(89437),Ft=e(67446),yt=e(29070),Lt=e(54255),Vt=e(15491),Pt=e(99886),Ut=e(44457);function Mt(o,i){if(1&o&&(t.TgZ(0,"td",8),t._uU(1),t.qZA()),2&o){const r=t.oxw().$implicit;t.xp6(1),t.hij(" ",r.name," ")}}const Jt=function(){return[]};function It(o,i){if(1&o&&(t.TgZ(0,"td",8),t.TgZ(1,"tui-input-number",9),t.ALo(2,"tuiCurrency"),t.ALo(3,"tuiFieldErrorContent"),t._uU(4," Price "),t.qZA(),t.qZA()),2&o){const r=t.oxw().index,l=t.oxw();t.xp6(1),t.Q6J("tuiTextfieldPostfix",t.lcZ(2,3,"UGX"))("formControl",l.controls[r])("tuiHint",t.lcZ(3,5,t.DdM(7,Jt)))}}function Nt(o,i){1&o&&(t.TgZ(0,"tr",6),t.YNc(1,Mt,2,1,"td",7),t.YNc(2,It,5,8,"td",7),t.qZA()),2&o&&(t.xp6(1),t.Q6J("tuiCell","name"),t.xp6(1),t.Q6J("tuiCell","price"))}let Qt=(()=>{class o{constructor(){this.data=[{name:"Latte"},{name:"Cappuccino"}],this.latteControl=new n.NI(null,[n.kI.required,n.kI.max(6)]),this.cappuccinoControl=new n.NI(null,[n.kI.required,n.kI.max(5)]),this.controls=[this.latteControl,this.cappuccinoControl],this.columns=["name","price"]}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-field-error-content-pipe-example-6"]],features:[t._Bn([{provide:m.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",max:i=>`Too expensive, max ${i.max}`}}])],decls:9,vars:4,consts:[["tuiTable","",1,"table",3,"columns"],["tuiThGroup",""],["tuiTh","",3,"resizable"],["tuiTh",""],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],["tuiHintDirection","right",3,"tuiTextfieldPostfix","formControl","tuiHint"]],template:function(r,l){1&r&&(t.TgZ(0,"table",0),t.TgZ(1,"thead"),t.TgZ(2,"tr",1),t.TgZ(3,"th",2),t._uU(4," Name "),t.qZA(),t.TgZ(5,"th",3),t._uU(6,"Price"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"tbody",4),t.YNc(8,Nt,3,2,"tr",5),t.qZA(),t.qZA()),2&r&&(t.Q6J("columns",l.columns),t.xp6(3),t.Q6J("resizable",!0),t.xp6(4),t.Q6J("data",l.data),t.xp6(1),t.Q6J("ngForOf",l.data))},directives:[ft.c,Tt.E,ht.W,xt.j,u.sg,gt.f,Zt.B,Et.K,vt.q,At.g,Ct.T,n.JJ,n.oH,Ft.D,yt.x,Lt.t,Vt.D],pipes:[Pt.i,Ut.y],styles:[".table[_ngcontent-%COMP%]{width:100%;table-layout:fixed}.error[_ngcontent-%COMP%]{color:#fff}"],changeDetection:0}),o})();var Ot=e(76349);function St(o,i){if(1&o&&(t.TgZ(0,"p"),t._uU(1," FieldErrorPipe takes order of errors as array and transform it to "),t.TgZ(2,"code"),t._uU(3,"TuiValidationError"),t.qZA(),t._uU(4," . Can be used with "),t.TgZ(5,"code"),t._uU(6,"TuiError"),t.qZA(),t.qZA(),t.TgZ(7,"p"),t._uU(8," You can also use "),t.TgZ(9,"code"),t._uU(10,"tuiFieldErrorContentPipe"),t.qZA(),t._uU(11," with "),t.TgZ(12,"code"),t._uU(13,"TuiHint"),t.qZA(),t._uU(14," (see "),t.TgZ(15,"a",3),t._uU(16," tuiFieldErrorContentPipe example "),t.qZA(),t._uU(17," ). It returns a content of the TuiValidationError. "),t.qZA(),t.TgZ(18,"tui-doc-example",4),t._UZ(19,"tui-field-error-pipe-example-1"),t.qZA(),t.TgZ(20,"tui-doc-example",5),t._UZ(21,"tui-field-error-pipe-example-2"),t.qZA(),t.TgZ(22,"tui-doc-example",6),t._UZ(23,"tui-field-error-pipe-example-3"),t.qZA(),t.TgZ(24,"tui-doc-example",7),t._UZ(25,"tui-field-error-pipe-example-4"),t.qZA(),t.TgZ(26,"tui-doc-example",8),t._UZ(27,"tui-field-error-pipe-example-5"),t.qZA(),t.TgZ(28,"tui-doc-example",9),t._UZ(29,"tui-field-error-content-pipe-example-6"),t.qZA()),2&o){const r=t.oxw();t.xp6(18),t.Q6J("content",r.example1),t.xp6(2),t.Q6J("content",r.example2),t.xp6(2),t.Q6J("content",r.example3),t.xp6(2),t.Q6J("content",r.example4),t.xp6(2),t.Q6J("content",r.example5),t.xp6(2),t.Q6J("content",r.example6)}}function Dt(o,i){if(1&o&&(t.TgZ(0,"ol",10),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiFieldErrorPipeModule"),t.qZA(),t._uU(6," into a module where you want to use our component "),t.qZA(),t._UZ(7,"tui-doc-code",11),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Use pipe in template:"),t.qZA(),t._UZ(11,"tui-doc-code",12),t.qZA(),t.qZA()),2&o){const r=t.oxw();t.xp6(7),t.Q6J("code",r.exampleModule),t.xp6(4),t.Q6J("code",r.exampleHtml)}}let bt=(()=>{class o{constructor(){this.exampleModule=e.e(97011).then(e.t.bind(e,97011,17)),this.exampleHtml=e.e(85093).then(e.t.bind(e,85093,17)),this.example1={TypeScript:e.e(98695).then(e.t.bind(e,98695,17)),HTML:e.e(72178).then(e.t.bind(e,72178,17))},this.example2={TypeScript:e.e(14720).then(e.t.bind(e,14720,17)),HTML:e.e(93850).then(e.t.bind(e,93850,17))},this.example3={TypeScript:e.e(4697).then(e.t.bind(e,4697,17)),HTML:e.e(18777).then(e.t.bind(e,18777,17))},this.example4={TypeScript:e.e(79147).then(e.t.bind(e,79147,17)),HTML:e.e(39218).then(e.t.bind(e,39218,17)),LESS:e.e(37605).then(e.t.bind(e,37605,17))},this.example5={TypeScript:e.e(19684).then(e.t.bind(e,19684,17)),HTML:e.e(52261).then(e.t.bind(e,52261,17)),LESS:e.e(74547).then(e.t.bind(e,74547,17))},this.example6={TypeScript:e.e(52108).then(e.t.bind(e,52108,17)),HTML:e.e(91072).then(e.t.bind(e,91072,17)),LESS:e.e(67129).then(e.t.bind(e,67129,17))}}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["example-field-error-pipe"]],decls:3,vars:0,consts:[["header","FieldError","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],["tuiLink","","routerLink",".","fragment","content"],["id","base","heading","Basic",3,"content"],["id","custom-messages","heading","With custom messages for validators",3,"content"],["id","patterns","heading","with a template",3,"content"],["id","form-array","heading","With adding new controls (FormArray)",3,"content"],["id","async","heading","async validator",3,"content"],["id","content","heading","tuiFieldErrorContentPipe",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(r,l){1&r&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,St,30,6,"ng-template",1),t.YNc(2,Dt,12,2,"ng-template",2),t.qZA())},directives:[O.q,S.n,F.V,A.yS,D.f,G,j,ot,st,ct,Qt,Ot.c],encapsulation:2,changeDetection:0}),o})(),zt=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,n.UX,C.fV,s.TuiTextfieldControllerModule,s.TuiErrorModule,m.TuiFieldErrorPipeModule,s.TuiLabelModule,s.TuiHintModule,m.TuiInputModule,s.TuiButtonModule,m.TuiInputPhoneModule,m.TuiInputCountModule,s.TuiLinkModule,N.TuiTableModule,s.TuiHintModule,m.TuiInputNumberModule,I.TuiCurrencyPipeModule,Q.wq,A.Bz.forChild((0,C.Ve)(bt))]]}),o})()}}]);