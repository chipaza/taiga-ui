(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{Pl1y:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLineClampModule",(function(){return F}));var i=n("An66"),a=n("1VvW"),o=n("SVIu"),l=n("Qq0t"),r=n("dvRg"),c=n("kZht"),m=n("OZlg"),s=n("e0eB"),d=n("iyc4"),p=n("HvLL"),u=n("cwFE");function h(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",3),c["\u0275\u0275text"](1," Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons "),c["\u0275\u0275elementEnd"]())}let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-clamp-example-1"]],decls:4,vars:3,consts:[[1,"island"],[3,"content","lineHeight","linesLimit"],["content",""],[1,"hint"]],template:function(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tui-island",0),c["\u0275\u0275element"](1,"tui-line-clamp",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](2,h,2,0,"ng-template",null,2,c["\u0275\u0275templateRefExtractor"])),2&e){const e=c["\u0275\u0275reference"](3);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("content",e)("lineHeight",20)("linesLimit",2)}},directives:[p.a,u.a],styles:["[_nghost-%COMP%]{display:block}.island[_ngcontent-%COMP%]{width:20rem}.hint[_ngcontent-%COMP%]{font:var(--tui-font-text-s)}"],changeDetection:0}),e})();var g=n("zV1d");let y=(()=>{class e{constructor(){this.linesLimit=2}toggle(){this.linesLimit=this.collpased?10:2}get collpased(){return 2===this.linesLimit}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-clamp-example-2"]],decls:4,vars:1,consts:[["size","l",1,"island"],["content","Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons",1,"clamp",3,"linesLimit"],["tuiButton","",1,"tui-space_top-4",3,"click"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-island",0),c["\u0275\u0275element"](1,"tui-line-clamp",1),c["\u0275\u0275elementStart"](2,"button",2),c["\u0275\u0275listener"]("click",(function(){return t.toggle()})),c["\u0275\u0275text"](3,"Toggle"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("linesLimit",t.linesLimit))},directives:[p.a,u.a,g.a],styles:[".island[_ngcontent-%COMP%]{max-width:20rem}.clamp[_ngcontent-%COMP%]{pointer-events:none}"],changeDetection:0}),e})();var b=n("FTac");function x(e,t){1&e&&c["\u0275\u0275text"](0," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")}let v=(()=>{class e{constructor(e){this.windowRef=e}getDynamicLineHeight(e){return parseInt(this.windowRef.getComputedStyle(e).lineHeight)}getDynamicLineLimit(e){return Math.floor(e.offsetHeight/24)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](b.i))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-clamp-example-3"]],decls:6,vars:3,consts:[[1,"example"],[1,"line-clamp-box"],["parent",""],[1,"line-clamp",3,"lineHeight","linesLimit","content"],["content",""]],template:function(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1,2),c["\u0275\u0275element"](3,"tui-line-clamp",3),c["\u0275\u0275template"](4,x,1,0,"ng-template",null,4,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275reference"](2),n=c["\u0275\u0275reference"](5);c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("lineHeight",t.getDynamicLineHeight(e))("linesLimit",t.getDynamicLineLimit(e))("content",n)}},directives:[u.a],styles:[".example[_ngcontent-%COMP%]{min-height:15rem;max-height:15rem}.line-clamp-box[_ngcontent-%COMP%]{height:5.75rem;min-height:1.5rem;resize:both;overflow:auto;padding:.5rem;border-radius:var(--tui-radius-l);border:1px solid var(--tui-base-03)}"],changeDetection:0}),e})();var L,S=n("EPR0"),C=n("yHor"),w=n("zGJC"),E=n("u8jZ");L=$localize`:␟3250dee96fb81f3ab854192a816604c1971fc225␟878256362583888180: Component cuts overflowed text with "..." and shows it by hover `;const T=["heading",$localize`:␟ad75bb2791c6ac20f42eba727b4d5843bd2e2759␟6390623107955601371:Styles change`],P=["heading",$localize`:␟c3466e18890f12ffac5010471ddf34cd9d873f19␟3142541476125634673:Expanding`],M=["heading",$localize`:␟ea6a9a75f5c4c8b91eb116c27915e88ff3d6b0e6␟7735399201342576360:Resize parent container`];function H(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18n"](1,L),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-example",2),c["\u0275\u0275i18nAttributes"](3,T),c["\u0275\u0275element"](4,"tui-line-clamp-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](6,P),c["\u0275\u0275element"](7,"tui-line-clamp-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"tui-doc-example",4),c["\u0275\u0275i18nAttributes"](9,M),c["\u0275\u0275element"](10,"tui-line-clamp-example-3"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example3)}}function R(e,t){1&e&&(c["\u0275\u0275text"](0," Lorem ipsum "),c["\u0275\u0275element"](1,"br"),c["\u0275\u0275text"](2," Gaudeamus igitur "),c["\u0275\u0275element"](3,"br"),c["\u0275\u0275elementStart"](4,"strong"),c["\u0275\u0275text"](5,"Carpe diem"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](6,"br"),c["\u0275\u0275text"](7," Veni, vidi, vici "))}var O,k,z,I,_;function V(e,t){1&e&&c["\u0275\u0275i18n"](0,O)}function A(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,k),c["\u0275\u0275element"](1,"strong"),c["\u0275\u0275i18nEnd"]())}function D(e,t){1&e&&c["\u0275\u0275i18n"](0,z)}function G(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275element"](1,"tui-line-clamp",5),c["\u0275\u0275template"](2,R,8,0,"ng-template",null,6,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"tui-doc-documentation"),c["\u0275\u0275template"](5,V,1,0,"ng-template",7),c["\u0275\u0275template"](6,A,2,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().lineHeight=t})),c["\u0275\u0275template"](7,D,1,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().linesLimit=t})),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275reference"](3),t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("content",e)("linesLimit",t.linesLimit)("lineHeight",t.lineHeight),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("documentationPropertyValue",t.lineHeight),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",t.linesLimit)}}function $(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",10),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,I),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",11),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,_),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml)}}O=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,k=$localize`:␟f51561790f382f1aec36b58c1fe65bca2c0ec19e␟635658740546569751: Height of single line. It can be computed automatically but you can optimize the component setting it by yourselves and ${"\ufffd#1\ufffd"}:START_TAG_STRONG:to prevent reflow${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG: . `,z=$localize`:␟5350d4ee26589c53830208851ec2ee9ff9c5bb38␟9220644262211067839: Number of visible lines `,I=$localize`:␟7e8642bb2c9a6cd3383644b763b6118025d81967␟2311692943199158011: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLineClampModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,_=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let N=(()=>{class e{constructor(){this.linesLimit=1,this.lineHeight=24,this.exampleModule=n.e(456).then(n.bind(null,"+uGx")),this.exampleHtml=n.e(457).then(n.bind(null,"3npd")),this.example1={TypeScript:n.e(449).then(n.bind(null,"I0nR")),HTML:n.e(447).then(n.bind(null,"67qq")),LESS:n.e(448).then(n.bind(null,"qFFn"))},this.example2={TypeScript:n.e(452).then(n.bind(null,"8/Bk")),HTML:n.e(450).then(n.bind(null,"fyOf")),LESS:n.e(451).then(n.bind(null,"OPgs"))},this.example3={TypeScript:n.e(455).then(n.bind(null,"cxVT")),HTML:n.e(453).then(n.bind(null,"RzIA")),LESS:n.e(454).then(n.bind(null,"vetI"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-line-clamp"]],decls:4,vars:0,consts:[["header","LineClamp","package","KIT","type","components"],["pageTab",""],["id","basic",3,"content",6,"heading"],["id","expand",3,"content",6,"heading"],["id","resize",3,"content",6,"heading"],[3,"content","linesLimit","lineHeight"],["content",""],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","lineHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","linesLimit","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,H,11,3,"ng-template",1),c["\u0275\u0275template"](2,G,8,5,"ng-template",1),c["\u0275\u0275template"](3,$,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[m.a,s.a,d.a,f,y,v,S.a,u.a,C.a,w.a,E.a],styles:[".text[_ngcontent-%COMP%]{max-width:60%}"],changeDetection:0}),e})(),F=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,r.TuiLineClampModule,o.i,a.f.forChild(Object(o.p)(N)),l.TuiButtonModule,r.TuiIslandModule]]}),e})()}}]);