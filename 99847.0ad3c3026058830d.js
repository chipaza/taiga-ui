(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[99847],{38057:(e,t,n)=>{n.d(t,{c:()=>r});var i,s=n(84911),o=n(20755),u=n(93517),a=n(2054);class r extends a.AbstractTuiNullableControl{constructor(e){super(),this.options=e,this.autocompleteEnabled=this.options.autocompleteEnabled,this.binChange=new o.vpe,this.paymentIcons=(0,o.f3M)(u.gb)}get autocompleteCard(){return this.autocomplete}get bin(){return this.card.length<6?null:this.card.slice(0,6)}get defaultIcon(){const e=this.getPaymentSystem(this.card);return e&&this.paymentIcons[e]}get paymentSystem(){return this.getPaymentSystem(this.card)}get icon(){return this.cardSrc||this.defaultIcon}get autocomplete(){return this.autocompleteEnabled?"cc-number":"off"}getPaymentSystem(e){return this.options.paymentSystemHandler(e)}}(i=r).ɵfac=function(e){o.$Z()},i.ɵdir=o.lG2({type:i,inputs:{cardSrc:"cardSrc",autocompleteEnabled:"autocompleteEnabled"},outputs:{binChange:"binChange"},features:[o.qOj]}),(0,s.gn)([a.tuiPure],r.prototype,"getPaymentSystem",null)},85397:(e,t,n)=>{n.d(t,{z:()=>g});var i=n(20755),s=n(11074),o=n(2054),u=n(17628),a=n(38057),r=n(96816),l=n(28858),c=n(39047),d=n(53339),p=n(7871),h=n(89713),m=n(62998);function f(e,t){if(1&e&&i._UZ(0,"tui-svg",2),2&e){const e=i.oxw();i.Q6J("src",e.defaultIcon)}}const I=["*",[["input"]]],v=["*","input"];let g=(()=>{var e;class t extends a.c{constructor(){super((0,i.f3M)(r.cL)),this.textfieldSize=(0,i.f3M)(u.TUI_TEXTFIELD_SIZE),this.maskOptions={mask:s.Aj}}get card(){return this.value??""}get nativeFocusableElement(){return this.input?.nativeFocusableElement??null}get focused(){return!!this.input&&this.input.focused}onValueChange(e){const t=e.split(" ").join(""),n=this.bin;this.value=t;const i=this.bin;n!==i&&this.binChange.emit(i)}onFocused(e){this.updateFocused(e)}writeValue(e){const t=this.bin;super.writeValue(e);const n=this.bin;t!==n&&this.binChange.emit(n)}get size(){return this.textfieldSize.size}getFallbackValue(){return""}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=i.Xpm({type:e,selectors:[["tui-input-card"]],viewQuery:function(e,t){if(1&e&&i.Gf(u.TuiPrimitiveTextfieldComponent,5),2&e){let e;i.iGM(e=i.CRH())&&(t.input=e.first)}},hostVars:1,hostBindings:function(e,t){2&e&&i.uIk("data-size",t.size)},features:[i._Bn([(0,o.tuiAsFocusableItemAccessor)(e),(0,o.tuiAsControl)(e)]),i.qOj],ngContentSelectors:v,decls:6,vars:14,consts:[["tuiValueAccessor","",1,"t-input",3,"disabled","focusable","invalid","maskito","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldCustomContent","value","focusedChange","valueChange"],["logo",""],[1,"t-payment-system",3,"src"]],template:function(e,t){if(1&e&&(i.F$t(I),i.TgZ(0,"tui-primitive-textfield",0),i.NdJ("focusedChange",(function(e){return t.onFocused(e)}))("valueChange",(function(e){return t.onValueChange(e)})),i.ALo(1,"maskito"),i.Hsn(2),i.Hsn(3,1,["ngProjectAs","input",5,["input"]]),i.qZA(),i.YNc(4,f,1,1,"ng-template",null,1,i.W1O)),2&e){const e=i.MAs(5);i.Q6J("disabled",t.disabled)("focusable",t.focusable)("invalid",t.computedInvalid)("maskito",t.maskOptions)("nativeId",t.nativeId)("pseudoActive",t.pseudoActive)("pseudoFocus",t.pseudoFocus)("pseudoHover",t.pseudoHover)("readOnly",t.readOnly)("tuiTextfieldCustomContent",t.cardSrc||t.defaultIcon&&e)("value",i.xi3(1,11,t.card,t.maskOptions))}},dependencies:[l.ro,c.y,d.B,p.B,h.n,m.P,l.cl],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-payment-system[_ngcontent-%COMP%]{width:2rem;height:2rem;color:#1434cb}"],changeDetection:0}),t})()},88197:(e,t,n)=>{n.d(t,{a:()=>o});var i=n(17628),s=n(20755);let o=(()=>{var e;class t extends i.AbstractTuiTextfieldHost{onValueChange(e){this.host.onValueChange(e)}ngAfterViewInit(){const{nativeFocusableElement:e}=this.host;e&&(e.inputMode="numeric",e.placeholder=e.placeholder||"0000 0000 0000 0000")}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵdir=s.lG2({type:e,selectors:[["tui-input-card"]],features:[s._Bn([(0,i.tuiAsTextfieldHost)(e)]),s.qOj]}),t})()},96816:(e,t,n)=>{n.d(t,{Nd:()=>o,Xt:()=>a,cL:()=>u});var i=n(93517),s=n(2054);const o={cardSrc:"",paymentSystemHandler:i.Vn,autocompleteEnabled:!1},u=(0,s.tuiCreateToken)(o);function a(e){return(0,s.tuiProvideOptions)(u,e,o)}},36802:(e,t,n)=>{n.d(t,{U:()=>p});var i=n(20755),s=n(2054),o=n(17628),u=n(28858),a=n(39047),r=n(53339),l=n(18026),c=n(89713);const d=["*"];let p=(()=>{var e;class t extends s.AbstractTuiControl{constructor(){super(...arguments),this.textfieldLabelOutside=(0,i.f3M)(o.TUI_TEXTFIELD_LABEL_OUTSIDE),this.textfieldSize=(0,i.f3M)(o.TUI_TEXTFIELD_SIZE),this.autocompleteEnabled=!1,this.hidden=!0,this.exampleText="000",this.maskOptions={mask:new Array(3).fill(o.TUI_DIGIT_REGEXP)}}set length(e){this.exampleText="0".repeat(e),this.maskOptions={mask:new Array(e).fill(o.TUI_DIGIT_REGEXP)}}get nativeFocusableElement(){return this.input?.nativeFocusableElement??null}get focused(){return!!this.input&&this.input.focused}get size(){return this.textfieldSize.size}get autocomplete(){return this.autocompleteEnabled?"cc-csc":"off"}get computedPlaceholder(){return this.textfieldLabelOutside.labelOutside?"":this.exampleText}onFocused(e){this.updateFocused(e)}onValueChange(e){this.value=e}getFallbackValue(){return""}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=i.n5z(e)))(n||e)}}(),e.ɵcmp=i.Xpm({type:e,selectors:[["tui-input-cvc"]],viewQuery:function(e,t){if(1&e&&i.Gf(o.TuiPrimitiveTextfieldComponent,5),2&e){let e;i.iGM(e=i.CRH())&&(t.input=e.first)}},hostVars:1,hostBindings:function(e,t){2&e&&i.uIk("data-size",t.size)},inputs:{autocompleteEnabled:"autocompleteEnabled",hidden:"hidden",length:"length"},features:[i._Bn([(0,s.tuiAsFocusableItemAccessor)(e),(0,s.tuiAsControl)(e)]),i.qOj],ngContentSelectors:d,decls:3,vars:14,consts:[["tuiValueAccessor","",1,"t-input",3,"disabled","focusable","invalid","maskito","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","value","valueChange","copy.prevent","focusedChange"],["inputmode","numeric","tuiTextfield","",3,"autocomplete","placeholder"]],template:function(e,t){1&e&&(i.F$t(),i.TgZ(0,"tui-primitive-textfield",0),i.NdJ("valueChange",(function(e){return t.value=e}))("copy.prevent",(function(){return 0}))("focusedChange",(function(e){return t.onFocused(e)})),i.Hsn(1),i._UZ(2,"input",1),i.qZA()),2&e&&(i.Q6J("disabled",t.disabled)("focusable",t.focusable)("invalid",t.computedInvalid)("maskito",t.maskOptions)("nativeId",t.nativeId)("pseudoActive",t.pseudoActive)("pseudoFocus",t.pseudoFocus)("pseudoHover",t.pseudoHover)("readOnly",t.readOnly)("value",t.value),i.xp6(2),i.ekj("t-input_hidden",t.hidden),i.Q6J("autocomplete",t.autocomplete)("placeholder",t.computedPlaceholder))},dependencies:[u.ro,a.y,r.B,l.M,c.n],styles:["[_nghost-%COMP%]{display:block;max-width:11rem;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-input_hidden[_ngcontent-%COMP%]{-webkit-text-security:disc}"],changeDetection:0}),t})()},17925:(e,t,n)=>{n.d(t,{h:()=>h});var i=n(20755),s=n(11262),o=n(2054),u=n(17628),a=n(28858),r=n(39047),l=n(53339),c=n(18026),d=n(89713);const p=["*"];let h=(()=>{var e;class t extends o.AbstractTuiControl{constructor(){super(...arguments),this.textfieldSize=(0,i.f3M)(u.TUI_TEXTFIELD_SIZE),this.autocompleteEnabled=!1,this.maskOptions=(0,s.tr)({mode:"mm/yy",separator:"/"})}get nativeFocusableElement(){return this.input?.nativeFocusableElement??null}get focused(){return!!this.input&&this.input.focused}get size(){return this.textfieldSize.size}get autocomplete(){return this.autocompleteEnabled?"cc-exp":"off"}onFocused(e){this.updateFocused(e)}getFallbackValue(){return""}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=i.n5z(e)))(n||e)}}(),e.ɵcmp=i.Xpm({type:e,selectors:[["tui-input-expire"]],viewQuery:function(e,t){if(1&e&&i.Gf(u.TuiPrimitiveTextfieldComponent,5),2&e){let e;i.iGM(e=i.CRH())&&(t.input=e.first)}},hostVars:1,hostBindings:function(e,t){2&e&&i.uIk("data-size",t.size)},inputs:{autocompleteEnabled:"autocompleteEnabled"},features:[i._Bn([(0,o.tuiAsFocusableItemAccessor)(e),(0,o.tuiAsControl)(e)]),i.qOj],ngContentSelectors:p,decls:3,vars:10,consts:[["tuiValueAccessor","",1,"t-input",3,"disabled","invalid","maskito","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","value","valueChange","focusedChange"],["inputmode","numeric","placeholder","00/00","translate","no","tuiTextfield","","type",""]],template:function(e,t){1&e&&(i.F$t(),i.TgZ(0,"tui-primitive-textfield",0),i.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),i._UZ(1,"input",1),i.Hsn(2),i.qZA()),2&e&&(i.Q6J("disabled",t.disabled)("invalid",t.computedInvalid)("maskito",t.maskOptions)("nativeId",t.nativeId)("pseudoActive",t.pseudoActive)("pseudoFocus",t.pseudoFocus)("pseudoHover",t.pseudoHover)("readOnly",t.readOnly)("value",t.value),i.xp6(1),i.uIk("autocomplete",t.autocomplete))},dependencies:[a.ro,r.y,l.B,c.M,d.n],styles:["[_nghost-%COMP%]{display:block;max-width:11rem;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),t})()},11074:(e,t,n)=>{n.d(t,{xz:()=>o,Aj:()=>a,sV:()=>l});const i={А:"F",В:"D",Г:"U",Д:"L",Е:"T",З:"P",И:"B",Й:"Q",К:"R",Л:"K",М:"V",Н:"Y",О:"J",П:"G",Р:"H",С:"C",Т:"N",У:"E",Ф:"A",Ц:"W",Ч:"X",Ш:"I",Щ:"O",Ы:"S",Ь:"M",Я:"Z"};function s(e){return e.toUpperCase().split("").map((e=>i[e]||e)).join("")}const o={mask:/^[a-z\s]+$/i,preprocessors:[({elementState:e,data:t})=>{const{value:n,selection:i}=e;return{elementState:{selection:i,value:s(n)},data:s(t)}}]};var u=n(17628);const a=[u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP," ",u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP," ",u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP," ",u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP," ",u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP,u.TUI_DIGIT_REGEXP];var r=n(93517);const l=e=>e.length>11&&(0,r.ul)(e)&&(0,r.Tb)(e)}}]);