"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[16578],{16578:(H,c,n)=>{n.r(c),n.d(c,{ExampleMathModule:()=>$});var S=n(12057),i=n(24751),h=n(33982),T=n(29851),C=n(418),e=n(74788),v=n(88331),O=n(37159),A=n(57068),s=n(68339),p=n(16753),r=n(13735);let x=(()=>{class o{constructor(){this.parametersForm=new i.cw({value:new i.NI(1.005),precision:new i.NI(2)})}get rounded(){const{value:t,precision:a}=this.parametersForm.value;return(0,s.tuiRound)(null!=t?t:1.005,null!=a?a:2)}get floored(){const{value:t,precision:a}=this.parametersForm.value;return(0,s.tuiFloor)(null!=t?t:1.005,null!=a?a:2)}get ceiled(){const{value:t,precision:a}=this.parametersForm.value;return(0,s.tuiCeil)(null!=t?t:1.005,null!=a?a:2)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-math-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"precision"],["formControlName","precision",1,"tui-space_top-2"]],template:function(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA(),e.TgZ(6,"form",0),e.TgZ(7,"div",1),e.TgZ(8,"tui-input-number",2),e._uU(9," value "),e.qZA(),e.TgZ(10,"tui-input-number",3),e._uU(11," precision "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.hij("",a.rounded," = round(value, precision);"),e.xp6(2),e.hij("",a.floored," = floor(value, precision);"),e.xp6(2),e.hij("",a.ceiled," = ceil(value, precision);"),e.xp6(1),e.Q6J("formGroup",a.parametersForm),e.xp6(2),e.Q6J("precision",3))},directives:[i._Y,i.JL,i.sg,p.q,r.g,i.JJ,i.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),o})(),N=(()=>{class o{constructor(){this.parametersForm=new i.cw({value:new i.NI(13),fromInclude:new i.NI(5),toExclude:new i.NI(42)})}get ranged(){const{value:t,fromInclude:a,toExclude:m}=this.parametersForm.value;return(0,s.tuiInRange)(null!=t?t:13,null!=a?a:5,null!=m?m:42)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-math-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","fromInclude",1,"tui-space_top-2"],["formControlName","toExclude",1,"tui-space_top-2"]],template:function(t,a){1&t&&(e._uU(0),e.TgZ(1,"form",0),e.TgZ(2,"div",1),e.TgZ(3,"tui-input-number",2),e._uU(4," value "),e.qZA(),e.TgZ(5,"tui-input-number",3),e._uU(6," fromInclude "),e.qZA(),e.TgZ(7,"tui-input-number",4),e._uU(8," toExclude "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.hij("",a.ranged," = inRange(value, fromInclude, toExclude); "),e.xp6(1),e.Q6J("formGroup",a.parametersForm))},directives:[i._Y,i.JL,i.sg,p.q,r.g,i.JJ,i.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),o})(),Z=(()=>{class o{constructor(){this.parametersForm=new i.cw({value:new i.NI(0),min:new i.NI(5),max:new i.NI(42)})}get normalized(){const{value:t,min:a,max:m}=this.parametersForm.value;return(0,s.tuiNormalizeToIntNumber)(null!=t?t:0,null!=a?a:5,null!=m?m:42)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-math-example-3"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(t,a){1&t&&(e._uU(0),e.TgZ(1,"form",0),e.TgZ(2,"div",1),e.TgZ(3,"tui-input-number",2),e._uU(4," value "),e.qZA(),e.TgZ(5,"tui-input-number",3),e._uU(6," min "),e.qZA(),e.TgZ(7,"tui-input-number",4),e._uU(8," max "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.hij("",a.normalized," = normalizeToIntNumber(value, min, max); "),e.xp6(1),e.Q6J("formGroup",a.parametersForm))},directives:[i._Y,i.JL,i.sg,p.q,r.g,i.JJ,i.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),o})(),L=(()=>{class o{constructor(){this.parametersForm=new i.cw({value:new i.NI(3),quantum:new i.NI(2)})}get quantized(){const{value:t,quantum:a}=this.parametersForm.value;return(0,s.tuiQuantize)(null!=t?t:3,null!=a?a:2)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-math-example-4"]],decls:7,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","quantum",1,"tui-space_top-2"]],template:function(t,a){1&t&&(e._uU(0),e.TgZ(1,"form",0),e.TgZ(2,"div",1),e.TgZ(3,"tui-input-number",2),e._uU(4," value "),e.qZA(),e.TgZ(5,"tui-input-number",3),e._uU(6," quantum "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.hij("",a.quantized," = quantize(value, quantum); "),e.xp6(1),e.Q6J("formGroup",a.parametersForm))},directives:[i._Y,i.JL,i.sg,p.q,r.g,i.JJ,i.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),o})(),U=(()=>{class o{constructor(){this.parametersForm=new i.cw({value:new i.NI(0),min:new i.NI(5),max:new i.NI(42)})}get clamped(){const{value:t,min:a,max:m}=this.parametersForm.value;return(0,s.tuiClamp)(null!=t?t:0,null!=a?a:5,null!=m?m:42)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-math-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(t,a){1&t&&(e._uU(0),e.TgZ(1,"form",0),e.TgZ(2,"div",1),e.TgZ(3,"tui-input-number",2),e._uU(4," value "),e.qZA(),e.TgZ(5,"tui-input-number",3),e._uU(6," min "),e.qZA(),e.TgZ(7,"tui-input-number",4),e._uU(8," max "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.hij("",a.clamped," = clamp(value, min, max); "),e.xp6(1),e.Q6J("formGroup",a.parametersForm))},directives:[i._Y,i.JL,i.sg,p.q,r.g,i.JJ,i.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),o})();var I=n(76349);function R(o,l){if(1&o&&(e.TgZ(0,"p"),e.SDv(1,3),e.qZA(),e.TgZ(2,"tui-doc-example",4),e._UZ(3,"tui-math-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",5),e._UZ(5,"tui-math-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",6),e._UZ(7,"tui-math-example-3"),e.qZA(),e.TgZ(8,"tui-doc-example",7),e._UZ(9,"tui-math-example-4"),e.qZA(),e.TgZ(10,"tui-doc-example",8),e._UZ(11,"tui-math-example-5"),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3),e.xp6(2),e.Q6J("content",t.example4),e.xp6(2),e.Q6J("content",t.example5)}}function J(o,l){if(1&o&&(e.TgZ(0,"ol",9),e.TgZ(1,"li"),e.TgZ(2,"p"),e.SDv(3,10),e.qZA(),e._UZ(4,"tui-doc-code",11),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("code",t.importComponentExample)}}let D=(()=>{class o{constructor(){this.importComponentExample=n.e(85334).then(n.t.bind(n,85334,17)),this.example1={TypeScript:n.e(46189).then(n.t.bind(n,46189,17)),HTML:n.e(74089).then(n.t.bind(n,74089,17)),LESS:n.e(7411).then(n.t.bind(n,7411,17))},this.example2={TypeScript:n.e(42395).then(n.t.bind(n,42395,17)),HTML:n.e(20016).then(n.t.bind(n,20016,17)),LESS:n.e(66757).then(n.t.bind(n,66757,17))},this.example3={TypeScript:n.e(6696).then(n.t.bind(n,6696,17)),HTML:n.e(14652).then(n.t.bind(n,14652,17)),LESS:n.e(17637).then(n.t.bind(n,17637,17))},this.example4={TypeScript:n.e(8018).then(n.t.bind(n,8018,17)),HTML:n.e(32410).then(n.t.bind(n,32410,17)),LESS:n.e(44971).then(n.t.bind(n,44971,17))},this.example5={TypeScript:n.e(63624).then(n.t.bind(n,42829,17)),HTML:n.e(72032).then(n.t.bind(n,72032,17)),LESS:n.e(41220).then(n.t.bind(n,41220,17))}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-math"]],decls:3,vars:0,consts:function(){let l,t,a,m,d,M,f,g,E;return l=$localize`:␟eef2307cf678cdf74d7144079256b7fc344c4950␟5686247209877234159:Math utils`,t=$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`,a=$localize`:␟dd7f17d22638f1551ac688f17563777ddf34163b␟5211598598885509667:A set of utils to calculate math`,m=$localize`:␟49e3fcef24f18647990d6a9fa1ba78c9f3b862ff␟3234087131078550251:round, floor and ceil with fixed common problems of the native implementation`,d=$localize`:␟5fcae35432bf500967c987df7ee13cfd897f95ca␟984110598713888465:Checks if the value is in range`,M=$localize`:␟5756cf697456ca17c1bfcfce7ab2da2a2976bbcb␟6385777968328902844:Normalizes any number to an integer within inclusive range`,f=$localize`:␟1fa93f4bf5540e71f14d1c49c60f0aa77cccd7d9␟7695262008739590886:Rounds a number to the closest value in a fixed discrete series`,g=$localize`:␟3788fc82353479c593b85fecef9b30b97b44c431␟2743889011977351178:Clamps a value between two inclusive limits`,E=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`,[["header",l,"package","CDK","path","cdk/utils/math"],["pageTab",""],["pageTab",t],a,["id","round","heading","round","description",m,3,"content"],["id","in-range","heading","inRange","description",d,3,"content"],["id","normalize-to-int-number","heading","normalizeToIntNumber","description",M,3,"content"],["id","quantize","heading","quantize","description",f,3,"content"],["id","clamp","heading","clamp","description",g,3,"content"],[1,"b-demo-steps"],E,["filename","myComponent.component.ts",3,"code"]]},template:function(t,a){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,R,12,5,"ng-template",1),e.YNc(2,J,5,1,"ng-template",2),e.qZA())},directives:[v.q,O.n,A.f,x,N,Z,L,U,I.c],encapsulation:2,changeDetection:0}),o})(),$=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[S.ez,C.TuiInputNumberModule,i.u5,i.UX,T.fV,h.Bz.forChild((0,T.Ve)(D))]]}),o})()}}]);