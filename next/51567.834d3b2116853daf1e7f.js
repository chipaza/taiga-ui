(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[51567],{51567:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiFormatPhoneModule:()=>k});var n=o(12057),i=o(24751),u=o(33982),a=o(73961),r=o(74950),p=o(58770),c=o(74788),d=o(43560),s=o(93525),m=o(33772),l=o(3520);let h=(()=>{class e{constructor(){this.phone="+78005557778"}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-format-phone-example-1"]],decls:6,vars:8,template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1),c.ALo(2,"tuiFormatPhone"),c.qZA(),c.TgZ(3,"p"),c._uU(4),c.ALo(5,"tuiFormatPhone"),c.qZA()),2&e&&(c.xp6(1),c.hij("Formatted number by default: ",c.lcZ(2,2,t.phone),""),c.xp6(3),c.hij(" Formatted number with custom params: ",c.Dn7(5,4,t.phone,void 0,"###-###-##-##"),"\n"))},pipes:[l.r],encapsulation:2,changeDetection:0}),e})();var g=o(77027),f=o(41360),y=o(10200),x=o(68874),Z=o(51192),C=o(60404),P=o(83074);function T(e,t){if(1&e&&(c.TgZ(0,"p"),c._uU(1,"Pipe to format phone number"),c.qZA(),c.TgZ(2,"tui-doc-example",2),c._UZ(3,"tui-format-phone-example-1"),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Q6J("content",e.example1)}}function M(e,t){1&e&&c._uU(0," Country code ")}function _(e,t){1&e&&c._uU(0," Phone number mask ")}function b(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"p",3),c._uU(1),c.ALo(2,"tuiFormatPhone"),c.qZA(),c.TgZ(3,"tui-input",4),c.NdJ("ngModelChange",(function(t){return c.CHM(e),c.oxw().index=t})),c.qZA(),c.TgZ(4,"tui-doc-documentation"),c.YNc(5,M,1,0,"ng-template",5),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().countryCode=t})),c.YNc(6,_,1,0,"ng-template",6),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().phoneMask=t})),c.qZA()}if(2&e){const e=c.oxw();c.xp6(1),c.hij(" Formatted phone number: ",c.Dn7(2,7,e.index,e.countryCode,e.phoneMask)," "),c.xp6(2),c.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",e.index),c.xp6(2),c.Q6J("documentationPropertyValues",e.countryCodes)("documentationPropertyValue",e.countryCode),c.xp6(1),c.Q6J("documentationPropertyValues",e.phoneMasks)("documentationPropertyValue",e.phoneMask)}}function w(e,t){if(1&e&&(c.TgZ(0,"ol",7),c.TgZ(1,"li"),c.TgZ(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiFormatPhonePipeModule"),c.qZA(),c._uU(6," into a module where you want to use the pipe "),c.qZA(),c._UZ(7,"tui-doc-code",8),c.qZA(),c.TgZ(8,"li"),c.TgZ(9,"p"),c._uU(10,"Use pipe in template with function and its arguments:"),c.qZA(),c._UZ(11,"tui-doc-code",9),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(7),c.Q6J("code",e.exampleModule),c.xp6(4),c.Q6J("code",e.exampleHtml)}}let A=(()=>{class e{constructor(){this.exampleModule=o.e(14203).then(o.t.bind(o,14203,17)),this.exampleHtml=o.e(66398).then(o.t.bind(o,66398,17)),this.example1={TypeScript:o.e(37904).then(o.t.bind(o,37904,17)),HTML:o.e(99280).then(o.t.bind(o,99280,17))},this.index="+78005557778",this.countryCodes=[void 0,"+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasks=[void 0,"####-#############","### ###-####","### ###-####"],this.phoneMask=this.phoneMasks[0]}get maxLength(){return this.countryCode&&this.phoneMask?this.countryCode.length+this.phoneMask.length-2:12}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["example-tui-format-phone"]],decls:4,vars:0,consts:[["header","FormatPhone","package","CORE","type","pipes"],["pageTab",""],["id","base","heading","Basic",3,"content"],[1,"text","b-full-width"],["tuiTextfieldSize","m",1,"slider",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["documentationPropertyName","countryCode","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","phoneMask","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,T,4,1,"ng-template",1),c.YNc(2,b,7,11,"ng-template",1),c.YNc(3,w,12,2,"ng-template",1),c.qZA())},directives:[d.q,s.n,m.f,h,g.K,f.w,y.s,x.x,i.JJ,i.On,Z.z,C.B,P.c],pipes:[l.r],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],changeDetection:0}),e})(),k=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[[r.TuiFormatPhonePipeModule,p.TuiInputModule,i.UX,i.u5,n.ez,p.TuiRadioListModule,r.TuiTextfieldControllerModule,a.fV,u.Bz.forChild((0,a.Ve)(A))]]}),e})()}}]);