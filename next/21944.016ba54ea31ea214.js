(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[21944],{42336:(t,e,o)=>{o.d(e,{b:()=>u});var n=o(6642),r=o(56424),i=o(9911);const a="Bell";class u extends i.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=n.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","dark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.inputModeVariants=["text","numeric"],this.customContentVariants=["",a,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0],this.inputMode=this.inputModeVariants[0],this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.filler="",this.minHeight=null,this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPieChartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownOpen=new r.X(!1),this.dropdownAlignVariants=["left","right","center"],this.dropdownAlign=n.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=n.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=n.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.prefixVariants=["","$","GBP","Very long text"],this.prefix=this.prefixVariants[0],this.postfix=this.prefixVariants[0],this.dropdownOffset=n.TUI_DROPDOWN_DEFAULT_OPTIONS.offset}get customContent(){return this.customContentSelected===a?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}},2605:(t,e,o)=>{o.d(e,{X:()=>g});var n=o(20755),r=o(87695),i=o(42932),a=o(38404),u=o(65004),d=o(62825),c=o(76733);function p(t,e){1&t&&n._uU(0," Manual control/monitor for the dropdown being visible ")}function m(t,e){1&t&&(n._uU(0," Align of dropdown (does not work together with "),n.TgZ(1,"code"),n._uU(2,"limitWidth === 'fixed'"),n.qZA(),n._uU(3," ) "))}function s(t,e){1&t&&n._uU(0," Set a vertical direction of dropdown ")}function l(t,e){1&t&&n._uU(0," Limit width of dropdown ")}function y(t,e){1&t&&(n._uU(0," Minimum height to calculate that dropdown fits to set "),n.TgZ(1,"code"),n._uU(2,"tuiDropdownDirection"),n.qZA())}function P(t,e){1&t&&n._uU(0," Maximum height of dropdown ")}function h(t,e){1&t&&n._uU(0," Dropdown offset ")}let g=(()=>{var t;class e{constructor(){this.documentedComponent=(0,n.f3M)(r.x)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["dropdown-documentation"]],decls:17,vars:12,consts:[[1,"tui-text_h6"],["routerLink","/directives/dropdown","target","_blank","tuiLink",""],["documentationPropertyMode","input-output","documentationPropertyName","tuiDropdownOpen","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownAlign","documentationPropertyType","TuiDropdownAlign",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownDirection","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyType","TuiDropdownWidth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMinHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownOffset","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(n.TgZ(0,"h6",0),n._uU(1," Can be expanded with "),n.TgZ(2,"a",1),n._uU(3," TuiDropdown "),n.qZA()(),n.TgZ(4,"p"),n._uU(5," Requires you to import "),n.TgZ(6,"code"),n._uU(7,"TuiDropdownModule"),n.qZA()(),n.TgZ(8,"tui-doc-documentation"),n.YNc(9,p,1,0,"ng-template",2),n.ALo(10,"async"),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownOpen.next(t)})),n.YNc(11,m,4,0,"ng-template",3),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownAlign=t})),n.YNc(12,s,1,0,"ng-template",4),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownDirection=t})),n.YNc(13,l,1,0,"ng-template",5),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownLimitWidth=t})),n.YNc(14,y,3,0,"ng-template",6),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMinHeight=t})),n.YNc(15,P,1,0,"ng-template",7),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownMaxHeight=t})),n.YNc(16,h,1,0,"ng-template",8),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.dropdownOffset=t})),n.qZA()),2&t&&(n.xp6(9),n.Q6J("documentationPropertyValue",n.lcZ(10,10,e.documentedComponent.dropdownOpen)),n.xp6(2),n.Q6J("documentationPropertyValues",e.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",e.documentedComponent.dropdownAlign),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",e.documentedComponent.dropdownDirection),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",e.documentedComponent.dropdownLimitWidth),n.xp6(1),n.Q6J("documentationPropertyValue",e.documentedComponent.dropdownMinHeight),n.xp6(1),n.Q6J("documentationPropertyValue",e.documentedComponent.dropdownMaxHeight),n.xp6(1),n.Q6J("documentationPropertyValue",e.documentedComponent.dropdownOffset))},dependencies:[i.rH,a.z,u.B,d.D,c.Ov],encapsulation:2,changeDetection:0}),e})()},59634:(t,e,o)=>{o.d(e,{F:()=>u});var n=o(76733),r=o(42932),i=o(87253),a=o(20755);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[n.ez,r.Bz,i.Lx]}),e})()},86162:(t,e,o)=>{o.d(e,{F:()=>s});var n=o(20755),r=o(87695),i=o(42932),a=o(38404),u=o(65004),d=o(62825);function c(t,e){1&t&&n._uU(0," Content of a hint ")}function p(t,e){1&t&&n._uU(0," Hint direction ")}function m(t,e){1&t&&n._uU(0," Hint mode ")}let s=(()=>{var t;class e{constructor(){this.documentedComponent=(0,n.f3M)(r.x)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["hint-controller-documentation"]],decls:12,vars:6,consts:[[1,"tui-text_h6"],["routerLink","/directives/hint","target","_blank","tuiLink",""],["documentationPropertyMode","input","documentationPropertyName","tuiHintContent","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiHintDirection","documentationPropertyType","TuiHintDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiHintAppearance","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(n.TgZ(0,"h6",0),n._uU(1," Can be expanded with "),n.TgZ(2,"a",1),n._uU(3," TuiHint "),n.qZA()(),n.TgZ(4,"p"),n._uU(5," Requires you to import "),n.TgZ(6,"code"),n._uU(7,"TuiHintModule"),n.qZA()(),n.TgZ(8,"tui-doc-documentation"),n.YNc(9,c,1,0,"ng-template",2),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.hintContent=t})),n.YNc(10,p,1,0,"ng-template",3),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.hintDirection=t})),n.YNc(11,m,1,0,"ng-template",4),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.hintAppearance=t})),n.qZA()),2&t&&(n.xp6(9),n.Q6J("documentationPropertyValues",e.documentedComponent.hintContentVariants)("documentationPropertyValue",e.documentedComponent.hintContent),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.hintDirectionVariants)("documentationPropertyValue",e.documentedComponent.hintDirection),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.hintAppearanceVariants)("documentationPropertyValue",e.documentedComponent.hintAppearance))},dependencies:[i.rH,a.z,u.B,d.D],encapsulation:2,changeDetection:0}),e})()},54208:(t,e,o)=>{o.d(e,{I:()=>u});var n=o(76733),r=o(42932),i=o(87253),a=o(20755);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[n.ez,r.Bz,i.Lx]}),e})()},73286:(t,e,o)=>{o.d(e,{l:()=>r});var n=o(6642);class r{constructor(){this.appearanceVariants=["","error","dark"],this.appearance=this.appearanceVariants[0],this.directionVariants=n.TUI_HINT_DIRECTIONS,this.direction=this.directionVariants[0]}}},87695:(t,e,o)=>{o.d(e,{x:()=>n});const n=new(o(20755).OlP)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},89453:(t,e,o)=>{o.d(e,{w:()=>I});var n=o(20755),r=o(6642),i=o(42336),a=o(73286),u=o(9911),d=o(37197),c=o(87695),p=o(76733),m=o(38404),s=o(65004),l=o(2605),y=o(86162),P=o(91427),h=o(65622);function g(t,e){1&t&&n._UZ(0,"dropdown-documentation")}function V(t,e){1&t&&n._UZ(0,"number-format-documentation")}function f(t,e){1&t&&n._UZ(0,"hint-controller-documentation")}function C(t,e){1&t&&n._UZ(0,"textfield-controller-documentation")}function T(t,e){1&t&&n._uU(0," Component is read only ")}function x(t,e){1&t&&n._uU(0," Set invalid state regardless of control ")}function N(t,e){if(1&t){const t=n.EpF();n.ynx(0),n.YNc(1,f,1,0,"hint-controller-documentation",0),n.YNc(2,C,1,0,"textfield-controller-documentation",0),n.TgZ(3,"h6",1),n._uU(4," Inherited from "),n.TgZ(5,"code"),n._uU(6,"TuiReactiveControl"),n.qZA()(),n.TgZ(7,"tui-doc-documentation"),n.YNc(8,T,1,0,"ng-template",2),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.documentedComponent.readOnly=e)})),n.YNc(9,x,1,0,"ng-template",3),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.documentedComponent.pseudoInvalid=e)})),n.qZA(),n.BQk()}if(2&t){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.withHint),n.xp6(1),n.Q6J("ngIf",t.withTextFieldController),n.xp6(6),n.Q6J("documentationPropertyValue",t.documentedComponent.readOnly),n.xp6(1),n.Q6J("documentationPropertyValues",t.booleanVariants)("documentationPropertyValue",t.documentedComponent.pseudoInvalid)}}function _(t,e){1&t&&n._uU(0," Element can be focused ")}function U(t,e){1&t&&n._uU(0," Native ID attribute for element. It helps users with Screen Readers to use a page ")}function w(t,e){1&t&&n._uU(0," Visual hovered state ")}function Z(t,e){1&t&&n._uU(0," Visual focused state ")}function M(t,e){1&t&&n._uU(0," Visual pressed state ")}function A(t,e){1&t&&n._uU(0," Emits on focus and blur ")}function v(t,e){if(1&t){const t=n.EpF();n.ynx(0),n.TgZ(1,"h6",1),n._uU(2," Inherited from "),n.TgZ(3,"code"),n._uU(4,"TuiInteractive"),n.qZA()(),n.TgZ(5,"tui-doc-documentation"),n.YNc(6,_,1,0,"ng-template",4),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.documentedComponent.focusable=e)})),n.YNc(7,U,1,0,"ng-template",5),n.YNc(8,w,1,0,"ng-template",6),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.documentedComponent.pseudoHovered=e)})),n.YNc(9,Z,1,0,"ng-template",7),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.documentedComponent.pseudoFocused=e)})),n.YNc(10,M,1,0,"ng-template",8),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.documentedComponent.pseudoPressed=e)})),n.YNc(11,A,1,0,"ng-template",9),n.qZA(),n.BQk()}if(2&t){const t=n.oxw();n.xp6(6),n.Q6J("documentationPropertyValue",t.documentedComponent.focusable),n.xp6(2),n.Q6J("documentationPropertyValues",t.booleanVariants)("documentationPropertyValue",t.documentedComponent.pseudoHovered),n.xp6(1),n.Q6J("documentationPropertyValues",t.booleanVariants)("documentationPropertyValue",t.documentedComponent.pseudoFocused),n.xp6(1),n.Q6J("documentationPropertyValues",t.booleanVariants)("documentationPropertyValue",t.documentedComponent.pseudoPressed)}}function b(t,e){1&t&&n._uU(0," Hint direction ")}function J(t,e){1&t&&n._uU(0," Hint mode ")}function D(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"tui-doc-documentation"),n.YNc(1,b,1,0,"ng-template",10),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.documentedComponent.direction=e)})),n.YNc(2,J,1,0,"ng-template",11),n.NdJ("documentationPropertyValueChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.documentedComponent.appearance=e)})),n.qZA()}if(2&t){const t=n.oxw();n.xp6(1),n.Q6J("documentationPropertyValues",t.directionVariants)("documentationPropertyValue",t.documentedComponent.direction),n.xp6(1),n.Q6J("documentationPropertyValues",t.appearanceVariants)("documentationPropertyValue",t.documentedComponent.appearance)}}let I=(()=>{var t;class e{constructor(){this.dropdown=!1,this.withHint=!0,this.withTextFieldController=!0,this.booleanVariants=[!1,!0],this.directionVariants=r.TUI_HINT_DIRECTIONS,this.appearanceVariants=["","error","dark"],this.documentedComponent=(0,n.f3M)(c.x)}isTuiReactiveControl(t){return t instanceof i.b}isTuiInteractive(t){return t instanceof u.O}isTuiHint(t){return t instanceof a.l}isTuiFormatNumber(t){return t instanceof d.p}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["inherited-documentation"]],inputs:{dropdown:"dropdown",withHint:"withHint",withTextFieldController:"withTextFieldController"},decls:5,vars:5,consts:[[4,"ngIf"],[1,"tui-text_h6"],["documentationPropertyMode","input","documentationPropertyName","readOnly","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","pseudoInvalid","documentationPropertyType","boolean | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","focusable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","nativeId","documentationPropertyType","string"],["documentationPropertyMode","input","documentationPropertyName","pseudoHover","documentationPropertyType","boolean | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","pseudoFocus","documentationPropertyType","boolean | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","pseudoActive","documentationPropertyType","boolean | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","focusedChange","documentationPropertyType","boolean"],["documentationPropertyMode","input","documentationPropertyName","tuiHintDirection","documentationPropertyType","TuiHintDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiHintAppearance","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(n.YNc(0,g,1,0,"dropdown-documentation",0),n.YNc(1,V,1,0,"number-format-documentation",0),n.YNc(2,N,10,5,"ng-container",0),n.YNc(3,v,12,7,"ng-container",0),n.YNc(4,D,3,4,"tui-doc-documentation",0)),2&t&&(n.Q6J("ngIf",e.dropdown),n.xp6(1),n.Q6J("ngIf",e.isTuiFormatNumber(e.documentedComponent)),n.xp6(1),n.Q6J("ngIf",e.isTuiReactiveControl(e.documentedComponent)),n.xp6(1),n.Q6J("ngIf",e.isTuiInteractive(e.documentedComponent)),n.xp6(1),n.Q6J("ngIf",e.isTuiHint(e.documentedComponent)))},dependencies:[p.O5,m.z,s.B,l.X,y.F,P.O,h.h],encapsulation:2,changeDetection:0}),e})()},79184:(t,e,o)=>{o.d(e,{f:()=>p});var n=o(76733),r=o(87253),i=o(59634),a=o(54208),u=o(68508),d=o(43400),c=o(20755);let p=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({imports:[n.ez,r.Lx,i.F,a.I,d.J,u.T]}),e})()},9911:(t,e,o)=>{o.d(e,{O:()=>n});class n{constructor(){this.pseudoVariants=[!1,!0],this.textAlignVariants=["left","right"],this.textAlign=this.textAlignVariants[0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},65622:(t,e,o)=>{o.d(e,{h:()=>y});var n=o(20755),r=o(87695),i=o(42932),a=o(38404),u=o(65004),d=o(62825);function c(t,e){1&t&&(n.TgZ(0,"dl")(1,"dt")(2,"code"),n._uU(3,"always"),n.qZA()(),n.TgZ(4,"dd"),n._uU(5," number of digits after "),n.TgZ(6,"code"),n._uU(7,"decimalSeparator"),n.qZA(),n._uU(8," is "),n.TgZ(9,"b"),n._uU(10,"always"),n.qZA(),n._uU(11," equal to the precision. "),n.qZA(),n.TgZ(12,"dt")(13,"code"),n._uU(14,"pad"),n.qZA()(),n.TgZ(15,"dd"),n._uU(16,"pads trailing zeroes up to precision, if the number is fractional"),n.qZA(),n.TgZ(17,"dt")(18,"code"),n._uU(19,"not-zero"),n.qZA()(),n.TgZ(20,"dd"),n._uU(21,"drops trailing zeroes"),n.qZA()())}function p(t,e){1&t&&n._uU(0," Rounding ")}function m(t,e){1&t&&(n._uU(0," A number of digits after comma ( "),n.TgZ(1,"code"),n._uU(2,"Infinity"),n.qZA(),n._uU(3," for an untouched decimal part) "))}function s(t,e){1&t&&n._uU(0," Symbol for separating thousands ")}function l(t,e){1&t&&n._uU(0," Symbol for separating fraction ")}let y=(()=>{var t;class e{constructor(){this.documentedComponent=(0,n.f3M)(r.x)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["number-format-documentation"]],decls:19,vars:7,consts:[[1,"tui-text_h6"],["routerLink","/directives/number-format","target","_blank","tuiLink",""],["documentationPropertyMode","input","documentationPropertyName","decimalMode","documentationPropertyType","TuiDecimalMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","rounding","documentationPropertyType","TuiRounding",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","precision","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","thousandSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","decimalSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(t,e){1&t&&(n.TgZ(0,"h6",0),n._uU(1," Can be expanded with "),n.TgZ(2,"a",1),n._uU(3," TuiNumberFormat "),n.qZA()(),n.TgZ(4,"p"),n._uU(5," Usage example: "),n.TgZ(6,"code"),n._uU(7," [tuiNumberFormat]='{decimalMode, precision, rounding, zeroPadding, thousandSeparator, decimalSeparator}' "),n.qZA()(),n.TgZ(8,"p"),n._uU(9," Requires you to import "),n.TgZ(10,"code"),n._uU(11,"TuiNumberFormatDirective"),n.qZA(),n._uU(12," .\n"),n.qZA(),n.TgZ(13,"tui-doc-documentation"),n.YNc(14,c,22,0,"ng-template",2),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.decimalMode=t})),n.YNc(15,p,1,0,"ng-template",3),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.rounding=t})),n.YNc(16,m,4,0,"ng-template",4),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.precision=t})),n.YNc(17,s,1,0,"ng-template",5),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.thousandSeparator=t})),n.YNc(18,l,1,0,"ng-template",6),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.decimalSeparator=t})),n.qZA()),2&t&&(n.xp6(14),n.Q6J("documentationPropertyValues",e.documentedComponent.decimalVariants)("documentationPropertyValue",e.documentedComponent.decimalMode),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.roundingVariants)("documentationPropertyValue",e.documentedComponent.rounding),n.xp6(1),n.Q6J("documentationPropertyValue",e.documentedComponent.precision),n.xp6(1),n.Q6J("documentationPropertyValue",e.documentedComponent.thousandSeparator),n.xp6(1),n.Q6J("documentationPropertyValue",e.documentedComponent.decimalSeparator))},dependencies:[i.rH,a.z,u.B,d.D],encapsulation:2,changeDetection:0}),e})()},68508:(t,e,o)=>{o.d(e,{T:()=>u});var n=o(76733),r=o(42932),i=o(87253),a=o(20755);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[n.ez,r.Bz,i.Lx]}),e})()},37197:(t,e,o)=>{o.d(e,{p:()=>i});var n=o(6642),r=o(42336);class i extends r.b{constructor(){super(...arguments),this.precision=n.TUI_DEFAULT_NUMBER_FORMAT.precision,this.decimalVariants=["always","pad","not-zero"],this.decimalMode=n.TUI_DEFAULT_NUMBER_FORMAT.decimalMode,this.roundingVariants=["truncate","round","ceil","floor"],this.rounding=n.TUI_DEFAULT_NUMBER_FORMAT.rounding,this.decimalSeparator=n.TUI_DEFAULT_NUMBER_FORMAT.decimalSeparator,this.thousandSeparator=n.TUI_DEFAULT_NUMBER_FORMAT.thousandSeparator}}},91427:(t,e,o)=>{o.d(e,{O:()=>g});var n=o(20755),r=o(87695),i=o(42932),a=o(38404),u=o(65004),d=o(62825);function c(t,e){1&t&&n._uU(0," Shows a cross to reset a value ")}function p(t,e){1&t&&(n._uU(0," Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as "),n.TgZ(1,"code"),n._uU(2,"src"),n.qZA(),n._uU(3," or as icon name into "),n.TgZ(4,"a",10),n._uU(5," tui-svg "),n.qZA())}function m(t,e){1&t&&(n._uU(0," Label is outside a component and made with "),n.TgZ(1,"a",11)(2,"code"),n._uU(3,"Label"),n.qZA()(),n.TgZ(4,"p"),n._uU(5," ( "),n.TgZ(6,"code"),n._uU(7,"labelOutside = false"),n.qZA(),n._uU(8," does not work together with "),n.TgZ(9,"code"),n._uU(10,"size === 's'"),n.qZA(),n._uU(11," : for s-size inputs use only outside labels) "),n.qZA())}function s(t,e){1&t&&n._uU(0," Size ")}function l(t,e){1&t&&(n._uU(0," A left icon. It can be stringified svg or a name of icon registered in "),n.TgZ(1,"a",12)(2,"code"),n._uU(3,"SvgService"),n.qZA()())}function y(t,e){1&t&&n._uU(0," Pale text suggestion for input (e.g. HH:MM:SS for time) ")}function P(t,e){1&t&&n._uU(0," Uneditable text before value ")}function h(t,e){1&t&&n._uU(0," Uneditable text after value ")}let g=(()=>{var t;class e{constructor(){this.documentedComponent=(0,n.f3M)(r.x)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["textfield-controller-documentation"]],decls:17,vars:13,consts:[[1,"tui-text_h6"],["routerLink","/directives/textfield-controller","target","_blank","tuiLink",""],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldCleaner","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldCustomContent","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldLabelOutside","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldSize","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldIconLeft","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldFiller","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldPrefix","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldPostfix","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["routerLink","/icons/overview","tuiLink",""],["routerLink","/components/label","tuiLink",""],["routerLink","/services/svg-service","tuiLink",""]],template:function(t,e){1&t&&(n.TgZ(0,"h6",0),n._uU(1," Can be expanded with "),n.TgZ(2,"a",1),n._uU(3," TuiTextfieldController "),n.qZA()(),n.TgZ(4,"p"),n._uU(5," Requires you to import "),n.TgZ(6,"code"),n._uU(7,"TuiTextfieldControllerModule"),n.qZA()(),n.TgZ(8,"tui-doc-documentation"),n.YNc(9,c,1,0,"ng-template",2),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.cleaner=t})),n.YNc(10,p,6,0,"ng-template",3),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.customContentSelected=t})),n.YNc(11,m,12,0,"ng-template",4),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.labelOutside=t})),n.YNc(12,s,1,0,"ng-template",5),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.size=t})),n.YNc(13,l,4,0,"ng-template",6),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.iconLeft=t})),n.YNc(14,y,1,0,"ng-template",7),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.filler=t})),n.YNc(15,P,1,0,"ng-template",8),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.prefix=t})),n.YNc(16,h,1,0,"ng-template",9),n.NdJ("documentationPropertyValueChange",(function(t){return e.documentedComponent.postfix=t})),n.qZA()),2&t&&(n.xp6(9),n.Q6J("documentationPropertyValue",e.documentedComponent.cleaner),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.customContentVariants)("documentationPropertyValue",e.documentedComponent.customContentSelected),n.xp6(1),n.Q6J("documentationPropertyValue",e.documentedComponent.labelOutside),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.sizeVariants)("documentationPropertyValue",e.documentedComponent.size),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.iconLeftVariants)("documentationPropertyValue",e.documentedComponent.iconLeft),n.xp6(1),n.Q6J("documentationPropertyValue",e.documentedComponent.filler),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.prefixVariants)("documentationPropertyValue",e.documentedComponent.prefix),n.xp6(1),n.Q6J("documentationPropertyValues",e.documentedComponent.prefixVariants)("documentationPropertyValue",e.documentedComponent.postfix))},dependencies:[i.rH,a.z,u.B,d.D],encapsulation:2,changeDetection:0}),e})()},43400:(t,e,o)=>{o.d(e,{J:()=>u});var n=o(76733),r=o(42932),i=o(87253),a=o(20755);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[n.ez,r.Bz,i.Lx]}),e})()}}]);