import{$ as IC,$r as ry,An as b,Cn as _b,D as Db,Dn as ai$1,En as _x,Fi as zv,G as GS,Ii as l,In as bw,J as Ha,Jr as qb,L as Et,Li as m$1,Ln as by,N as Eb,Oi as ym,On as am,Pi as zd,Q as Hr,Qt as TC,Rr as oi$1,Sn as _a,Ti as y4,Tn as _n,Tr as lD,U as GG,Ut as Re,V as Fe,Wn as dc,Y as Hb,Zr as ro,_t as MS,an as Ud,ci as uo,cn as Vb,d as AS,dn as WS,ei as sm,er as gU,gi as vw,gn as ZS,hr as it,i as $b,jn as bD,jr as mi$1,kr as m,lt as LS,mn as Yt$1,ni as to,nt as In,or as hC,p as Af,r as $a,tn as US,ur as hi$1,ut as La,v as Bd,vn as _C,vt as Mb,wi as xs,x as Cb,xt as N4,yr as jt$1,z as Fa,zn as ce}from"./chunk-D3sqZ3gc.js";import"./chunk-CmPPawFK.js";import{s as yt}from"./chunk-DUzk7iVh.js";import{A as fo,D as co,H as po,I as lo,L as mr,N as go,P as ho,_ as Ri,a as Dr,b as X,i as Ce,j as fr,l as It$1,u as Ji,y as Wn}from"./chunk-EzVJzvVV.js";import"./chunk-Lk3TBCYC.js";import{c as ht,d as ut,f as vt,s as de,u as se}from"./chunk-DilUS_UY.js";import{a as le,c as g,d as xt,f as at,i as V,p as At$1}from"./main-FX6IMLZ2.js";import{t as K$1}from"./chunk-j39JyFvb.js";import{t as Ne}from"./chunk-GklgKXRN.js";import{t as o}from"./chunk-BICRZYee.js";import{a as Pe,i as Ne$1,n as Be,o as Re$1,r as Mt,s as qt$1,t as A}from"./chunk-x4wQNbaA.js";import{n as G,r as P,t as Dt}from"./chunk-VG-poO2c.js";import"./chunk-D2Qu9Utn.js";import{t as _e}from"./chunk-DgIrDzOP.js";import{t as x}from"./chunk-D_SrxRoO.js";import{t as C}from"./chunk-D5OizD5y.js";import{t as Z}from"./chunk-C3U8Hg07.js";import{n as rt,t as it$1}from"./chunk-2FALtt76.js";import{t as b$1}from"./chunk-Cb3FyUtU.js";import{n as o$1,r as u,t as m$2}from"./chunk-DoQLqNjk.js";import{n as c,r as d,t as a}from"./chunk-CmqHrGDb.js";import{t as a$1}from"./chunk-DoyInDJu.js";var Lt=new b(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var ke=class{source;checked;constructor(t,e){this.source=t,this.checked=e}};var Me=(()=>{class a{_elementRef=m(ce);_focusMonitor=m(dc);_changeDetectorRef=m(by);defaults=m(Lt);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new ke(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=uo();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new Re;toggleChange=new Re;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(Yt$1).load(zv);let e=m(new Ha(`tabindex`),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||`accent`,this.id=this._uniqueId=m(Af).getId(`mat-mdc-slide-toggle-`),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new ke(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(i){return new(i||a)};static ɵcmp=(function(){let e=[`switch`],i=[`*`];function n(c,w){c&1&&(_a(0,`span`,11),ym(),_a(1,`svg`,13),_b(2,`path`,14),Bd(),_a(3,`svg`,15),_b(4,`path`,16),Bd()())}return Fe({type:a,selectors:[[`mat-slide-toggle`]],viewQuery:function(w,m){if(w&1&&Mb(e,5),w&2){let z;GS(z=WS())&&(m._switchElement=z.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(w,m){w&2&&(Ud(`id`,m.id),Fa(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),La(m.color?`mat-`+m.color:``),_n(`mat-mdc-slide-toggle-focused`,m._focused)(`mat-mdc-slide-toggle-checked`,m.checked)(`mat-slide-toggle-full-width`,m.fullWidth)(`_mat-animation-noopable`,m._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,it],color:`color`,disabled:[2,`disabled`,`disabled`,it],fullWidth:[2,`fullWidth`,`fullWidth`,it],disableRipple:[2,`disableRipple`,`disableRipple`,it],tabIndex:[2,`tabIndex`,`tabIndex`,c=>c==null?0:$a(c)],checked:[2,`checked`,`checked`,it],hideIcon:[2,`hideIcon`,`hideIcon`,it],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,it]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[TC([{provide:Ce,useExisting:xs(()=>a),multi:!0},{provide:X,useExisting:a,multi:!0}]),oi$1],ngContentSelectors:i,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(w,m){if(w&1&&(to(),_a(0,`div`,1)(1,`button`,2,0),Cb(`click`,function(){return m._handleClick()}),_b(3,`div`,3)(4,`span`,4),_a(5,`span`,5)(6,`span`,6)(7,`span`,7),_b(8,`span`,8),Bd(),_a(9,`span`,9),_b(10,`span`,10),Bd(),mi$1(11,n,5,0,`span`,11),Bd()()(),_a(12,`label`,12),Cb(`click`,function(zt){return zt.stopPropagation()}),Et(13),Bd()()),w&2){let z=ZS(2);Eb(`labelPosition`,m.labelPosition),ai$1(),_n(`mdc-switch--selected`,m.checked)(`mdc-switch--unselected`,!m.checked)(`mdc-switch--checked`,m.checked)(`mdc-switch--disabled`,m.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,m.disabledInteractive),Eb(`tabIndex`,m.disabled&&!m.disabledInteractive?-1:m.tabIndex)(`disabled`,m.disabled&&!m.disabledInteractive),Fa(`id`,m.buttonId)(`name`,m.name)(`aria-label`,m.ariaLabel)(`aria-labelledby`,m._getAriaLabelledBy())(`aria-describedby`,m.ariaDescribedby)(`aria-required`,m.required||null)(`aria-checked`,m.checked)(`aria-disabled`,m.disabled&&m.disabledInteractive?`true`:null),ai$1(9),Eb(`matRippleTrigger`,z)(`matRippleDisabled`,m.disableRipple||m.disabled)(`matRippleCentered`,!0),ai$1(),hi$1(m.hideIcon?-1:11),ai$1(),Eb(`for`,m.buttonId),Fa(`id`,m._labelId)}},dependencies:[GG,g],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return a})();function At(a,t){if(a&1&&(_a(0,`p`,3),hC(1),Bd()),a&2){let e=US();ai$1(),Vb(e.erreur())}}function Vt(a,t){a&1&&(_a(0,`mat-error`),hC(1,`Le code est obligatoire.`),Bd())}function Ft(a,t){a&1&&(_a(0,`mat-error`),hC(1,`Commencez par une lettre ; utilisez seulement des majuscules, chiffres et « _ ».`),Bd())}function Rt(a,t){a&1&&_b(0,`mat-progress-spinner`,10)}var Bt=/^[A-Z][A-Z0-9_]*$/;var De=class a{profilService=m(a$1);fenetre=m(A);donnees=m(qt$1);formulaire=m(po).nonNullable.group({action:[this.donnees.droit?.action??``,[It$1.required,It$1.pattern(Bt),It$1.maxLength(60)]],description:[this.donnees.droit?.description??``,It$1.maxLength(255)]});enCours=jt$1(!1);erreur=jt$1(``);normaliserCode(){let t=this.formulaire.controls.action,e=t.value.toUpperCase().replace(/[\s-]+/g,`_`);e!==t.value&&t.setValue(e)}enregistrer(){if(this.formulaire.invalid){this.formulaire.markAllAsTouched();return}this.enCours.set(!0),this.erreur.set(``);let t=this.formulaire.getRawValue(),e={action:t.action,description:t.description.trim()||void 0},i=this.donnees.droit;(i?this.profilService.modifierDroit(i.id,e):this.profilService.creerDroit(e)).subscribe({next:c=>this.fenetre.close(c),error:c=>{this.enCours.set(!1),this.erreur.set(o(c,`Impossible d'enregistrer le droit.`))}})}static ɵfac=function(e){return new(e||a)};static ɵcmp=Fe({type:a,selectors:[[`app-droit-dialog`]],decls:27,vars:7,consts:[[`mat-dialog-title`,``],[`novalidate`,``,1,`formulaire`,3,`ngSubmit`,`formGroup`],[1,`intro`],[`role`,`alert`,1,`erreur`],[1,`champ`],[`matInput`,``,`formControlName`,`action`,`maxlength`,`60`,`cdkFocusInitial`,``,1,`code`,3,`input`],[`matInput`,``,`formControlName`,`description`,`rows`,`3`,`maxlength`,`255`],[`align`,`end`],[`matButton`,`outlined`,`type`,`button`,`mat-dialog-close`,``],[`matButton`,`filled`,`type`,`submit`,3,`disabled`],[`mode`,`indeterminate`,`diameter`,`18`,`aria-hidden`,`true`]],template:function(e,i){e&1&&(_a(0,`h2`,0),hC(1),Bd(),_a(2,`form`,1),Cb(`ngSubmit`,function(){return i.enregistrer()}),_a(3,`mat-dialog-content`)(4,`p`,2),hC(5,` Un droit autorise une action précise. Son code est utilisé par l'application pour vérifier les accès. `),Bd(),mi$1(6,At,2,1,`p`,3),_a(7,`mat-form-field`,4)(8,`mat-label`),hC(9,`Code du droit`),Bd(),_a(10,`input`,5),bw(),Cb(`input`,function(){return i.normaliserCode()}),Bd(),_a(11,`mat-hint`),hC(12,`Ex. RECETTE_VALIDER · majuscules, chiffres et « _ »`),Bd(),mi$1(13,Vt,2,0,`mat-error`)(14,Ft,2,0,`mat-error`),Bd(),_a(15,`mat-form-field`,4)(16,`mat-label`),hC(17,`Description`),Bd(),_a(18,`textarea`,6),bw(),Bd(),_a(19,`mat-hint`),hC(20,`Facultatif · en langage clair, ex. « Publier ou rejeter une recette »`),Bd()()(),_a(21,`mat-dialog-actions`,7)(22,`button`,8),hC(23,`Annuler`),Bd(),_a(24,`button`,9),mi$1(25,Rt,1,0,`mat-progress-spinner`,10),hC(26),Bd()()()),e&2&&(ai$1(),Vb(i.donnees.droit?`Modifier le droit`:`Nouveau droit`),ai$1(),Eb(`formGroup`,i.formulaire),ai$1(4),hi$1(i.erreur()?6:-1),ai$1(4),vw(),ai$1(3),hi$1(i.formulaire.controls.action.hasError(`required`)?13:i.formulaire.controls.action.hasError(`pattern`)?14:-1),ai$1(5),vw(),ai$1(6),Eb(`disabled`,i.enCours()),ai$1(),hi$1(i.enCours()?25:-1),ai$1(),zd(` `,i.donnees.droit?`Enregistrer`:`Créer le droit`,` `))},dependencies:[go,ho,Wn,lo,co,Ji,fr,Dr,Pe,Re$1,Be,Ne$1,y4,vt,de,Ne,se,ut,K$1],styles:[`.formulaire[_ngcontent-%COMP%]{display:contents}.intro[_ngcontent-%COMP%]{margin-bottom:var(--%NS%gw-espace-5);color:var(--%NS%gw-texte-doux)}.erreur[_ngcontent-%COMP%]{margin-bottom:var(--%NS%gw-espace-4);padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-4);border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-danger-fond);color:var(--%NS%gw-danger)}.champ[_ngcontent-%COMP%]{width:100%;margin-bottom:var(--%NS%gw-espace-2)}.code[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.02em}`]})};var K=(a,t)=>t.id;var It=(a,t)=>t.cle;function $t(a,t){a&1&&_b(0,`div`,13)}function qt(a,t){if(a&1&&(_a(0,`p`,14),hC(1),Bd()),a&2){let e=US();ai$1(),zd(`Aucun droit ne correspond à « `,e.recherche(),` ».`)}}function jt(a,t){a&1&&hC(0,` · désactivé `)}function Gt(a,t){if(a&1&&(_a(0,`th`,22)(1,`span`,23),hC(2),Bd(),_a(3,`span`,24),hC(4),mi$1(5,jt,1,0),Bd()()),a&2){let e=t.$implicit;_n(`profil-inactif`,!e.actif),ai$1(2),Vb(e.nom),ai$1(2),Hb(` `,e.nbUtilisateurs,` membre`,e.nbUtilisateurs>1?`s`:``,` `),ai$1(),hi$1(e.actif?-1:5)}}function Ut(a,t){a&1&&_b(0,`ng-icon`,44)}function Xt(a,t){a&1&&_b(0,`ng-icon`,45)}function Wt(a,t){if(a&1){let e=LS();_a(0,`td`,32)(1,`button`,43),Cb(`click`,function(){let n=sm(e).$implicit,c=US().$implicit,w=US(3);return am(w.basculer(n,c))}),mi$1(2,Ut,1,0,`ng-icon`,44)(3,Xt,1,0,`ng-icon`,45),Bd()()}if(a&2){let e=t.$implicit,i=US().$implicit,n=US(3);ai$1(),_n(`case-oui`,n.possede(e,i))(`case-verrou`,n.verrouille(e,i))(`case-occupee`,n.occupe(e,i)),Eb(`matTooltip`,n.verrouille(e,i)?`Indispensable pour administrer Gwaso`:``),Fa(`aria-pressed`,n.possede(e,i))(`aria-label`,n.libelleCase(e,i))(`aria-disabled`,n.verrouille(e,i)||null),ai$1(),hi$1(n.verrouille(e,i)?2:n.possede(e,i)?3:-1)}}function Ht(a,t){if(a&1){let e=LS();_a(0,`tr`)(1,`th`,29)(2,`span`,30),hC(3),Bd(),_a(4,`span`,31),hC(5),Bd()(),MS(6,Wt,4,11,`td`,32,K),_a(8,`td`,33)(9,`mat-slide-toggle`,34),Cb(`change`,function(){let n=sm(e).$implicit,c=US(3);return am(c.basculerActivation.emit(n))}),Bd()(),_a(10,`td`,35)(11,`button`,36),_b(12,`ng-icon`,37),Bd(),_a(13,`mat-menu`,38,0)(15,`button`,39),Cb(`click`,function(){let n=sm(e).$implicit,c=US(3);return am(c.modifierDroit.emit(n))}),_b(16,`ng-icon`,40),hC(17,` Modifier `),Bd(),_a(18,`button`,41),Cb(`click`,function(){let n=sm(e).$implicit,c=US(3);return am(c.supprimerDroit.emit(n))}),_b(19,`ng-icon`,42),hC(20,` Supprimer `),Bd()()()()}if(a&2){let e=t.$implicit,i=ZS(14),n=US(3);_n(`droit-inactif`,!e.actif),ai$1(3),Vb(n.libelleDroit(e)),ai$1(2),Vb(e.action),ai$1(),AS(n.colonnes()),ai$1(3),Eb(`checked`,e.actif)(`disabled`,n.indispensable(e)),Db(`aria-label`,(e.actif?`Désactiver`:`Activer`)+` le droit `+n.libelleDroit(e)),Eb(`matTooltip`,n.indispensable(e)?`Indispensable : toujours actif`:e.actif?`Donné aux profils cochés`:`Désactivé : donné à personne`),ai$1(2),Eb(`matMenuTriggerFor`,i),Fa(`aria-label`,`Actions sur le droit `+n.libelleDroit(e)),ai$1(7),Eb(`disabled`,n.indispensable(e))}}function Zt(a,t){if(a&1&&(_a(0,`tbody`)(1,`tr`,25)(2,`th`,26),_b(3,`ng-icon`,27),hC(4),Bd()(),MS(5,Ht,21,11,`tr`,28,K),Bd()),a&2){let e=t.$implicit,i=US(2);ai$1(2),Fa(`colspan`,i.colonnes().length+3),ai$1(),Eb(`name`,e.icone),ai$1(),zd(` `,e.libelle,` `),ai$1(),AS(e.droits)}}function Qt(a,t){if(a&1&&(_a(0,`div`,15)(1,`table`,17)(2,`caption`,5),hC(3,`Droits accordés à chaque profil`),Bd(),_a(4,`thead`)(5,`tr`)(6,`th`,18),hC(7,`Droit`),Bd(),MS(8,Gt,6,6,`th`,19,K),_a(10,`th`,20),hC(11,`Actif`),Bd(),_a(12,`th`,21)(13,`span`,5),hC(14,`Actions`),Bd()()()(),MS(15,Zt,7,3,`tbody`,null,It),Bd()()),a&2){let e=US();ai$1(8),AS(e.colonnes()),ai$1(7),AS(e.groupes())}}function Jt(a,t){a&1&&_b(0,`ng-icon`,44)}function Yt(a,t){a&1&&_b(0,`ng-icon`,57)}function Kt(a,t){if(a&1){let e=LS();_a(0,`button`,56),Cb(`click`,function(){let n=sm(e).$implicit,c=US().$implicit,w=US(3);return am(w.basculer(n,c))}),mi$1(1,Jt,1,0,`ng-icon`,44)(2,Yt,1,0,`ng-icon`,57),hC(3),Bd()}if(a&2){let e=t.$implicit,i=US().$implicit,n=US(3);_n(`puce-oui`,n.possede(e,i))(`case-occupee`,n.occupe(e,i)),Fa(`aria-pressed`,n.possede(e,i))(`aria-label`,n.libelleCase(e,i))(`aria-disabled`,n.verrouille(e,i)||null),ai$1(),hi$1(n.verrouille(e,i)?1:n.possede(e,i)?2:-1),ai$1(2),zd(` `,e.nom,` `)}}function ei(a,t){if(a&1){let e=LS();_a(0,`article`,49)(1,`div`,50)(2,`div`,51)(3,`span`,30),hC(4),Bd(),_a(5,`span`,31),hC(6),Bd()(),_a(7,`mat-slide-toggle`,52),Cb(`change`,function(){let n=sm(e).$implicit,c=US(3);return am(c.basculerActivation.emit(n))}),Bd(),_a(8,`button`,36),_b(9,`ng-icon`,37),Bd(),_a(10,`mat-menu`,38,1)(12,`button`,39),Cb(`click`,function(){let n=sm(e).$implicit,c=US(3);return am(c.modifierDroit.emit(n))}),hC(13,`Modifier`),Bd(),_a(14,`button`,41),Cb(`click`,function(){let n=sm(e).$implicit,c=US(3);return am(c.supprimerDroit.emit(n))}),hC(15,` Supprimer `),Bd()()(),_a(16,`p`,53),hC(17),Bd(),_a(18,`div`,54),MS(19,Kt,4,9,`button`,55,K),Bd()()}if(a&2){let e=t.$implicit,i=ZS(11),n=US(3);_n(`droit-inactif`,!e.actif),ai$1(4),Vb(n.libelleDroit(e)),ai$1(2),Vb(e.action),ai$1(),Eb(`checked`,e.actif)(`disabled`,n.indispensable(e)),Db(`aria-label`,(e.actif?`Désactiver`:`Activer`)+` le droit `+n.libelleDroit(e)),ai$1(),Eb(`matMenuTriggerFor`,i),Fa(`aria-label`,`Actions sur le droit `+n.libelleDroit(e)),ai$1(6),Eb(`disabled`,n.indispensable(e)),ai$1(3),Hb(`Accordé à `,n.nbProfils(e),` profil`,n.nbProfils(e)>1?`s`:``,` :`),ai$1(2),AS(n.colonnes())}}function ti(a,t){if(a&1&&(_a(0,`section`,46)(1,`h3`,47),_b(2,`ng-icon`,27),hC(3),Bd(),MS(4,ei,21,12,`article`,48,K),Bd()),a&2){let e=t.$implicit;Fa(`aria-labelledby`,`groupe-`+e.cle),ai$1(),Eb(`id`,`groupe-`+e.cle),ai$1(),Eb(`name`,e.icone),ai$1(),zd(` `,e.libelle,` `),ai$1(),AS(e.droits)}}function ii(a,t){if(a&1&&MS(0,ti,6,4,`section`,46,It),a&2){let e=US();AS(e.groupes())}}function ni(a,t){if(a&1){let e=LS();_a(0,`mat-paginator`,58),Cb(`page`,function(n){sm(e);let c=US();return am(c.changerPage(n))}),Bd()}if(a&2){let e=US();Eb(`length`,e.total())(`pageIndex`,e.pageCourante())(`pageSize`,e.taillePage())(`pageSizeOptions`,e.taillesPage)(`hidePageSize`,e.ecran.mobile())}}var Ee=class a$2{profilService=m(a$1);notification=m(Ri);ecran=m(b$1);profils=In.required();droits=In.required();profilModifie=gU();modifierDroit=gU();supprimerDroit=gU();basculerActivation=gU();libelleDroit=c;attributions=jt$1(new Map);chargement=jt$1(!0);enCours=jt$1(new Set);recherche=jt$1(``);colonnes=ry(()=>[...this.profils()].sort((t,e)=>Number(e.systeme)-Number(t.systeme)||Number(e.actif)-Number(t.actif)||t.nom.localeCompare(e.nom,`fr`)));taillesPage=u;page=jt$1(0);taillePage=jt$1(u[0]);droitsFiltres=ry(()=>{let t=this.recherche().trim().toLowerCase(),e=t?this.droits().filter(i=>i.action.toLowerCase().includes(t)||c(i).toLowerCase().includes(t)):this.droits();return a(e).flatMap(i=>i.droits.map(n=>this.droits().find(c=>c.id===n.id)))});total=ry(()=>this.droitsFiltres().length);pageCourante=ry(()=>o$1(this.page(),this.taillePage(),this.total()));groupes=ry(()=>{let t=m$2(this.droitsFiltres(),this.pageCourante(),this.taillePage());return a(t).map(e=>m$1(l({},e),{droits:e.droits.map(i=>t.find(n=>n.id===i.id))}))});rechercher(t){this.recherche.set(t),this.page.set(0)}changerPage(t){this.page.set(t.pageIndex),this.taillePage.set(t.pageSize)}constructor(){Hr(()=>{let t=this.profils();ro(()=>this.charger(t))})}charger(t){if(t.length===0){this.chargement.set(!1);return}this.chargement.set(!0),bD(t.map(e=>this.profilService.getDroitsDuProfil(e.id))).subscribe({next:e=>{let i=new Map;t.forEach((n,c)=>i.set(n.id,new Set(e[c].map(w=>w.droitId)))),this.attributions.set(i),this.chargement.set(!1)},error:()=>this.chargement.set(!1)})}possede(t,e){return this.attributions().get(t.id)?.has(e.id)??!1}verrouille(t,e){return t.systeme&&d.includes(e.action)}indispensable(t){return d.includes(t.action)}occupe(t,e){return this.enCours().has(`${t.id}|${e.id}`)}nbProfils(t){return this.colonnes().filter(e=>this.possede(e,t)).length}libelleCase(t,e){let i=this.possede(t,e)?`accordé`:`non accordé`;return`${c(e)} \u2014 profil ${t.nom} : ${i}`}basculer(t,e){if(this.verrouille(t,e)||this.occupe(t,e))return;let i=new Set(this.attributions().get(t.id)??[]),n=new Set(i),c$1=!i.has(e.id);c$1?n.add(e.id):n.delete(e.id),this.majProfil(t.id,n);let w=`${t.id}|${e.id}`;this.enCours.update(m=>new Set(m).add(w)),this.profilService.modifierDroitsDuProfil(t.id,[...n]).subscribe({next:m=>{this.majProfil(t.id,new Set(m.map(z=>z.droitId))),this.finir(w),this.profilModifie.emit({profilId:t.id,nbDroits:m.length}),this.notification.succes(c$1?`\xAB ${c(e)} \xBB est accord\xE9 au profil ${t.nom}.`:`\xAB ${c(e)} \xBB est retir\xE9 du profil ${t.nom}.`)},error:()=>{this.majProfil(t.id,i),this.finir(w)}})}majProfil(t,e){this.attributions.update(i=>new Map(i).set(t,e))}finir(t){this.enCours.update(e=>{let i=new Set(e);return i.delete(t),i})}static ɵfac=function(e){return new(e||a$2)};static ɵcmp=Fe({type:a$2,selectors:[[`app-matrice-droits`]],inputs:{profils:[1,`profils`],droits:[1,`droits`]},outputs:{profilModifie:`profilModifie`,modifierDroit:`modifierDroit`,supprimerDroit:`supprimerDroit`,basculerActivation:`basculerActivation`},decls:23,vars:3,consts:[[`menu`,`matMenu`],[`menuMobile`,`matMenu`],[1,`outils`],[1,`recherche`],[`name`,`lucideSearch`,`size`,`1.125rem`,`aria-hidden`,`true`],[1,`sr-only`],[`type`,`search`,`placeholder`,`Rechercher un droit…`,3,`input`,`value`],[`aria-label`,`Légende`,1,`legende`],[`aria-hidden`,`true`,1,`case`,`case-oui`],[`name`,`lucideCheck`,`size`,`0.875rem`],[`aria-hidden`,`true`,1,`case`],[`aria-hidden`,`true`,1,`case`,`case-oui`,`case-verrou`],[`name`,`lucideLock`,`size`,`0.75rem`],[`aria-busy`,`true`,`aria-label`,`Chargement des droits des profils`,1,`gw-squelette`,`sq-matrice`],[1,`vide`],[1,`conteneur-matrice`],[`aria-label`,`Pagination du catalogue des droits`,1,`gw-pagination`,3,`length`,`pageIndex`,`pageSize`,`pageSizeOptions`,`hidePageSize`],[1,`matrice`],[`scope`,`col`,1,`col-droit`],[`scope`,`col`,1,`col-profil`,3,`profil-inactif`],[`scope`,`col`,1,`col-actif`],[`scope`,`col`,1,`col-actions`],[`scope`,`col`,1,`col-profil`],[1,`profil-nom`],[1,`profil-info`],[1,`ligne-groupe`],[`scope`,`colgroup`],[`size`,`1rem`,`aria-hidden`,`true`,3,`name`],[3,`droit-inactif`],[`scope`,`row`,1,`col-droit`],[1,`droit-libelle`],[1,`droit-code`],[1,`cellule`],[1,`col-actif`],[`hideIcon`,``,3,`change`,`checked`,`disabled`,`aria-label`,`matTooltip`],[1,`col-actions`],[`matIconButton`,``,`type`,`button`,3,`matMenuTriggerFor`],[`name`,`lucideEllipsis`,`size`,`1.125rem`,`aria-hidden`,`true`],[`xPosition`,`before`],[`mat-menu-item`,``,`type`,`button`,3,`click`],[`name`,`lucidePencil`,`size`,`1rem`,`aria-hidden`,`true`],[`mat-menu-item`,``,`type`,`button`,1,`item-danger`,3,`click`,`disabled`],[`name`,`lucideTrash2`,`size`,`1rem`,`aria-hidden`,`true`],[`type`,`button`,1,`case`,3,`click`,`matTooltip`],[`name`,`lucideLock`,`size`,`0.875rem`,`aria-hidden`,`true`],[`name`,`lucideCheck`,`size`,`1rem`,`aria-hidden`,`true`],[1,`groupe-mobile`],[3,`id`],[1,`carte-droit`,3,`droit-inactif`],[1,`carte-droit`],[1,`carte-entete`],[1,`carte-textes`],[`hideIcon`,``,3,`change`,`checked`,`disabled`,`aria-label`],[1,`carte-aide`],[1,`puces`],[`type`,`button`,1,`puce`,3,`puce-oui`,`case-occupee`],[`type`,`button`,1,`puce`,3,`click`],[`name`,`lucideCheck`,`size`,`0.875rem`,`aria-hidden`,`true`],[`aria-label`,`Pagination du catalogue des droits`,1,`gw-pagination`,3,`page`,`length`,`pageIndex`,`pageSize`,`pageSizeOptions`,`hidePageSize`]],template:function(e,i){e&1&&(_a(0,`div`,2)(1,`label`,3),_b(2,`ng-icon`,4),_a(3,`span`,5),hC(4,`Rechercher un droit`),Bd(),_a(5,`input`,6),Cb(`input`,function(c){return i.rechercher(c.target.value)}),Bd()(),_a(6,`ul`,7)(7,`li`)(8,`span`,8),_b(9,`ng-icon`,9),Bd(),hC(10,` Accordé`),Bd(),_a(11,`li`),_b(12,`span`,10),hC(13,` Non accordé`),Bd(),_a(14,`li`)(15,`span`,11),_b(16,`ng-icon`,12),Bd(),hC(17,` Indispensable `),Bd()()(),mi$1(18,$t,1,0,`div`,13)(19,qt,2,1,`p`,14)(20,Qt,17,0,`div`,15)(21,ii,2,0),mi$1(22,ni,1,5,`mat-paginator`,16)),e&2&&(ai$1(5),Eb(`value`,i.recherche()),ai$1(13),hi$1(i.chargement()?18:i.groupes().length===0?19:i.ecran.mobile()?21:20),ai$1(4),hi$1(!i.chargement()&&i.total()>i.taillesPage[0]?22:-1))},dependencies:[N4,_x,P,G,Dt,xt,Me,at],styles:[`[_nghost-%COMP%]{display:block}.outils[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--%NS%gw-espace-3) var(--%NS%gw-espace-6);padding:var(--%NS%gw-espace-5);border-bottom:1px solid var(--%NS%gw-bordure)}@media(max-width:767.98px){.outils[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-4)}}.recherche[_ngcontent-%COMP%]{display:flex;flex:1 1 260px;align-items:center;gap:var(--%NS%gw-espace-2);max-width:380px;height:44px;padding:0 var(--%NS%gw-espace-3);border:1px solid var(--%NS%gw-contour-champ);border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-surface);color:var(--%NS%gw-texte-doux)}.recherche[_ngcontent-%COMP%]:focus-within{border-color:var(--%NS%gw-action);outline:2px solid color-mix(in srgb,var(--%NS%gw-action) 25%,transparent)}.recherche[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;min-width:0;border:0;outline:none;background:none;color:var(--%NS%gw-texte);font:inherit}.legende[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%gw-espace-2) var(--%NS%gw-espace-5);margin:0;padding:0;list-style:none;color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit)}.legende[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--%NS%gw-espace-2)}.legende[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]{width:20px;height:20px;cursor:default}.vide[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-8);color:var(--%NS%gw-texte-doux);text-align:center}.sq-matrice[_ngcontent-%COMP%]{height:360px;margin:var(--%NS%gw-espace-5);border-radius:var(--%NS%gw-rayon-lg)}.conteneur-matrice[_ngcontent-%COMP%]{overflow-x:auto}.matrice[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0}.matrice[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .matrice[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid var(--%NS%gw-bordure);text-align:center;vertical-align:middle}.matrice[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2;padding:var(--%NS%gw-espace-4) var(--%NS%gw-espace-2);background:var(--%NS%gw-surface);color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit);font-weight:600}.col-droit[_ngcontent-%COMP%]{position:sticky;left:0;z-index:1;min-width:260px;padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-5)!important;background:var(--%NS%gw-surface);text-align:left!important}thead[_ngcontent-%COMP%]   .col-droit[_ngcontent-%COMP%]{z-index:3}.col-profil[_ngcontent-%COMP%]{min-width:120px}.profil-nom[_ngcontent-%COMP%]{display:block;color:var(--%NS%gw-cacao);font-size:var(--%NS%gw-taille-texte);font-weight:700}.profil-info[_ngcontent-%COMP%]{display:block;margin-top:2px;font-weight:500}.profil-inactif[_ngcontent-%COMP%]   .profil-nom[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux)}.col-actif[_ngcontent-%COMP%]{width:80px}.col-actions[_ngcontent-%COMP%]{width:56px;padding-right:var(--%NS%gw-espace-3)!important}.ligne-groupe[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;left:0;padding:var(--%NS%gw-espace-5) var(--%NS%gw-espace-5) var(--%NS%gw-espace-2)!important;border-bottom:0;background:var(--%NS%gw-surface);color:var(--%NS%gw-action);font-size:var(--%NS%gw-taille-petit);font-weight:700;letter-spacing:.06em;text-align:left!important;text-transform:uppercase}.ligne-groupe[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%]{margin-right:var(--%NS%gw-espace-2);vertical-align:-3px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(.ligne-groupe):hover   td[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(.ligne-groupe):hover   th[_ngcontent-%COMP%]{background:var(--%NS%gw-surface-2)}.droit-libelle[_ngcontent-%COMP%]{display:block;color:var(--%NS%gw-texte);font-weight:600}.droit-code[_ngcontent-%COMP%]{display:block;margin-top:2px;color:var(--%NS%gw-texte-doux);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.75rem}.droit-inactif[_ngcontent-%COMP%]   .droit-libelle[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);text-decoration:line-through}.cellule[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-2)}.case[_ngcontent-%COMP%]{display:inline-grid;place-items:center;width:32px;height:32px;padding:0;border:2px solid var(--%NS%gw-contour-champ);border-radius:var(--%NS%gw-rayon-sm);background:var(--%NS%gw-surface);color:var(--%NS%gw-blanc);cursor:pointer;transition:background-color var(--%NS%gw-duree) var(--%NS%gw-courbe),border-color var(--%NS%gw-duree) var(--%NS%gw-courbe),transform var(--%NS%gw-duree) var(--%NS%gw-courbe)}.case[_ngcontent-%COMP%]:hover{border-color:var(--%NS%gw-action)}.case[_ngcontent-%COMP%]:active{transform:scale(.92)}.case[_ngcontent-%COMP%]:focus-visible{outline:3px solid var(--%NS%gw-action);outline-offset:2px}.case-oui[_ngcontent-%COMP%]{border-color:var(--%NS%gw-cacao);background:var(--%NS%gw-cacao)}.case-verrou[_ngcontent-%COMP%]{border-color:var(--%NS%gw-karite);background:var(--%NS%gw-karite);cursor:not-allowed}.case-verrou[_ngcontent-%COMP%]:hover{border-color:var(--%NS%gw-karite)}.case-occupee[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.item-danger[_ngcontent-%COMP%]{color:var(--%NS%gw-danger)}.groupe-mobile[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-4) var(--%NS%gw-espace-4) 0}.groupe-mobile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-2);margin-bottom:var(--%NS%gw-espace-2);color:var(--%NS%gw-action);font-size:var(--%NS%gw-taille-petit);font-weight:700;letter-spacing:.06em;text-transform:uppercase}.groupe-mobile[_ngcontent-%COMP%]:last-child{padding-bottom:var(--%NS%gw-espace-4)}.carte-droit[_ngcontent-%COMP%]{margin-bottom:var(--%NS%gw-espace-3);padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-3) var(--%NS%gw-espace-4) var(--%NS%gw-espace-4);border:1px solid var(--%NS%gw-bordure);border-radius:var(--%NS%gw-rayon)}.carte-entete[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-2)}.carte-textes[_ngcontent-%COMP%]{flex:1;min-width:0}.carte-aide[_ngcontent-%COMP%]{margin:var(--%NS%gw-espace-2) 0;color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit)}.puces[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%gw-espace-2)}.puce[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 var(--%NS%gw-espace-3);border:1px solid var(--%NS%gw-contour-champ);border-radius:var(--%NS%gw-rayon-pilule);background:var(--%NS%gw-surface);color:var(--%NS%gw-texte);font:inherit;font-size:var(--%NS%gw-taille-petit);font-weight:600;cursor:pointer}.puce[aria-disabled=true][_ngcontent-%COMP%]{cursor:not-allowed}.puce[_ngcontent-%COMP%]:focus-visible{outline:3px solid var(--%NS%gw-action);outline-offset:2px}.puce-oui[_ngcontent-%COMP%]{border-color:var(--%NS%gw-cacao);background:var(--%NS%gw-cacao);color:var(--%NS%gw-blanc)}@media(prefers-reduced-motion:reduce){.case[_ngcontent-%COMP%]{transition:none}}`]})};function ai(a,t){if(a&1&&(_a(0,`p`,3),hC(1),Bd()),a&2){let e=US();ai$1(),Vb(e.erreur())}}function ri(a,t){a&1&&hC(0,` C'est le profil que reçoivent les personnes qui s'inscrivent dans l'application. Pour changer, cochez cette case sur un autre profil. `)}function oi(a,t){if(a&1&&hC(0),a&2){let e=US();zd(` Les personnes qui s'inscrivent dans l'application reçoivent aujourd'hui « `,e.inscriptionActuelle.nom,` ». En cochant, ce profil le remplace. `)}}function li(a,t){a&1&&hC(0,` Les personnes qui s'inscrivent dans l'application recevront ce profil. `)}function si(a,t){a&1&&_b(0,`mat-progress-spinner`,13)}var Oe=class a{profilService=m(a$1);fenetre=m(A);donnees=m(qt$1);formulaire=m(po).nonNullable.group({nom:[this.donnees.profil?.nom??``,[It$1.required,It$1.maxLength(60)]],description:[this.donnees.profil?.description??``,It$1.maxLength(255)],inscription:[this.donnees.profil?.inscription??!1]});inscriptionActuelle=this.donnees.profils.find(t=>t.inscription&&t.id!==this.donnees.profil?.id)??null;inscriptionVerrouillee=!!this.donnees.profil?.inscription;constructor(){this.inscriptionVerrouillee&&this.formulaire.controls.inscription.disable()}enCours=jt$1(!1);erreur=jt$1(``);enregistrer(){if(this.formulaire.invalid){this.formulaire.markAllAsTouched();return}this.enCours.set(!0),this.erreur.set(``);let t=this.formulaire.getRawValue(),e={nom:t.nom.trim(),description:t.description.trim()||void 0,inscription:t.inscription},i=this.donnees.profil;(i?this.profilService.modifier(i.id,e):this.profilService.creer(e)).subscribe({next:c=>this.fenetre.close(c),error:c=>{this.enCours.set(!1),this.erreur.set(o(c,`Impossible d'enregistrer le profil.`))}})}static ɵfac=function(e){return new(e||a)};static ɵcmp=Fe({type:a,selectors:[[`app-profil-dialog`]],decls:32,vars:7,consts:[[`mat-dialog-title`,``],[`novalidate`,``,1,`formulaire`,3,`ngSubmit`,`formGroup`],[1,`intro`],[`role`,`alert`,1,`erreur`],[1,`champ`],[`matInput`,``,`formControlName`,`nom`,`maxlength`,`60`,`cdkFocusInitial`,``],[`matInput`,``,`formControlName`,`description`,`rows`,`3`,`maxlength`,`255`],[1,`inscription`],[`formControlName`,`inscription`],[1,`explication`],[`align`,`end`],[`matButton`,`outlined`,`type`,`button`,`mat-dialog-close`,``],[`matButton`,`filled`,`type`,`submit`,3,`disabled`],[`mode`,`indeterminate`,`diameter`,`18`,`aria-hidden`,`true`]],template:function(e,i){e&1&&(_a(0,`h2`,0),hC(1),Bd(),_a(2,`form`,1),Cb(`ngSubmit`,function(){return i.enregistrer()}),_a(3,`mat-dialog-content`)(4,`p`,2),hC(5,` Un profil regroupe des droits. Chaque utilisateur a un seul profil, et peut faire exactement ce que ses droits permettent. Exemples : Administrateur, Consultant, Modérateur vidéos, Chef cuisinier. `),Bd(),mi$1(6,ai,2,1,`p`,3),_a(7,`mat-form-field`,4)(8,`mat-label`),hC(9,`Nom du profil`),Bd(),_a(10,`input`,5),bw(),Bd(),_a(11,`mat-error`),hC(12,`Le nom est obligatoire.`),Bd()(),_a(13,`mat-form-field`,4)(14,`mat-label`),hC(15,`Description`),Bd(),_a(16,`textarea`,6),bw(),Bd(),_a(17,`mat-hint`),hC(18,`Facultatif · à quoi sert ce profil`),Bd()(),_a(19,`div`,7)(20,`mat-checkbox`,8),bw(),hC(21,` Profil des inscriptions `),Bd(),_a(22,`p`,9),mi$1(23,ri,1,0)(24,oi,1,1)(25,li,1,0),Bd()()(),_a(26,`mat-dialog-actions`,10)(27,`button`,11),hC(28,`Annuler`),Bd(),_a(29,`button`,12),mi$1(30,si,1,0,`mat-progress-spinner`,13),hC(31),Bd()()()),e&2&&(ai$1(),Vb(i.donnees.profil?`Modifier le profil`:`Nouveau profil`),ai$1(),Eb(`formGroup`,i.formulaire),ai$1(4),hi$1(i.erreur()?6:-1),ai$1(4),vw(),ai$1(6),vw(),ai$1(4),vw(),ai$1(3),hi$1(i.inscriptionVerrouillee?23:i.inscriptionActuelle?24:25),ai$1(6),Eb(`disabled`,i.enCours()),ai$1(),hi$1(i.enCours()?30:-1),ai$1(),zd(` `,i.donnees.profil?`Enregistrer`:`Créer le profil`,` `))},dependencies:[go,ho,Wn,lo,co,Ji,fr,Dr,Pe,Re$1,Be,Ne$1,y4,vt,de,Ne,se,ut,K$1,_e],styles:[`.formulaire[_ngcontent-%COMP%]{display:contents}.intro[_ngcontent-%COMP%]{margin-bottom:var(--%NS%gw-espace-5);color:var(--%NS%gw-texte-doux)}.erreur[_ngcontent-%COMP%]{margin-bottom:var(--%NS%gw-espace-4);padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-4);border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-danger-fond);color:var(--%NS%gw-danger)}.champ[_ngcontent-%COMP%]{width:100%}.explication[_ngcontent-%COMP%]{margin-bottom:var(--%NS%gw-espace-3);color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit)}.inscription[_ngcontent-%COMP%]{margin-top:var(--%NS%gw-espace-2)}.inscription[_ngcontent-%COMP%]   .explication[_ngcontent-%COMP%]{margin:0 0 0 32px}`]})};var Ae=(a,t)=>t.id;var ci=(a,t)=>t.cle;function di(a,t){if(a&1){let e=LS();_a(0,`button`,10),Cb(`click`,function(){sm(e);let n=US();return am(n.nouveauProfil())}),_b(1,`ng-icon`,11),hC(2,` Nouveau profil `),Bd()}}function mi(a,t){if(a&1){let e=LS();_a(0,`button`,10),Cb(`click`,function(){sm(e);let n=US();return am(n.nouveauDroit())}),hC(1,`Nouveau droit`),Bd()}}function gi(a,t){a&1&&(_a(0,`div`,7),_b(1,`div`,12)(2,`div`,13),Bd())}function pi(a,t){if(a&1){let e=LS();_a(0,`div`,8)(1,`app-empty-state`,14)(2,`button`,10),Cb(`click`,function(){sm(e);let n=US();return am(n.charger())}),hC(3,`Réessayer`),Bd()()()}}function ui(a,t){if(a&1){let e=LS();_a(0,`div`,8)(1,`app-empty-state`,16)(2,`button`,10),Cb(`click`,function(){sm(e);let n=US(2);return am(n.nouveauProfil())}),hC(3,`Créer un profil`),Bd()()()}}function hi(a,t){if(a&1&&(_a(0,`mat-option`,21),hC(1),Bd()),a&2){let e=t.$implicit;Eb(`value`,e.id),ai$1(),Vb(e.nom)}}function _i(a,t){if(a&1){let e=LS();_a(0,`mat-form-field`,17)(1,`mat-label`),hC(2,`Profil`),Bd(),_a(3,`mat-select`,20),Cb(`selectionChange`,function(n){sm(e);let c=US(3);return am(c.choisirProfil(n.value))}),MS(4,hi,2,2,`mat-option`,21,Ae),Bd()()}if(a&2){let e=US(3);ai$1(3),Eb(`value`,e.profilSelectionneId()),ai$1(),AS(e.profils())}}function fi(a,t){a&1&&(_a(0,`span`,27),hC(1,`Désactivé`),Bd())}function bi(a,t){if(a&1){let e=LS();_a(0,`li`)(1,`button`,22),Cb(`click`,function(){let n=sm(e).$implicit,c=US(4);return am(c.choisirProfil(n.id))}),_a(2,`span`,23),_b(3,`ng-icon`,24),Bd(),_a(4,`span`,25)(5,`span`,26),hC(6),mi$1(7,fi,2,0,`span`,27),Bd(),_a(8,`span`,28),hC(9),Bd()()()()}if(a&2){let e=t.$implicit,i=US(4);ai$1(),_n(`profil-actif`,e.id===i.profilSelectionneId())(`profil-inactif`,!e.actif),Fa(`aria-current`,e.id===i.profilSelectionneId()?`true`:null),ai$1(2),Eb(`name`,i.iconeProfil(e)),ai$1(3),zd(` `,e.nom,` `),ai$1(),hi$1(e.actif?-1:7),ai$1(2),$b(` `,e.nbDroits,` droit`,e.nbDroits>1?`s`:``,` · `,e.nbUtilisateurs,` compte`,e.nbUtilisateurs>1?`s`:``,` `)}}function vi(a,t){if(a&1&&(_a(0,`nav`,18)(1,`ul`),MS(2,bi,10,12,`li`,null,Ae),Bd()()),a&2){let e=US(3);ai$1(2),AS(e.profils())}}function wi(a,t){a&1&&(_a(0,`span`,27),hC(1,`Désactivé`),Bd())}function yi(a,t){a&1&&(_a(0,`span`,34),hC(1,`Système`),Bd())}function Si(a,t){a&1&&(_a(0,`span`,35),hC(1,`Inscriptions`),Bd())}function xi(a,t){a&1&&(_a(0,`li`),_b(1,`ng-icon`,46),hC(2,` Garde toujours l'accès au dashboard et la gestion des profils`),Bd())}function Ci(a,t){if(a&1){let e=LS();_a(0,`button`,42),Cb(`click`,function(){sm(e);let n=US(),c=US(3);return am(c.changerActivationProfil(n))}),_b(1,`ng-icon`,47),_a(2,`span`),hC(3),Bd()(),_a(4,`button`,48),Cb(`click`,function(){sm(e);let n=US(),c=US(3);return am(c.supprimerProfil(n))}),_b(5,`ng-icon`,49),_a(6,`span`),hC(7,`Supprimer le profil…`),Bd()()}if(a&2){let e=US();ai$1(),Eb(`name`,e.actif?`lucideBan`:`lucideCircleCheck`),ai$1(2),Vb(e.actif?`Désactiver le profil…`:`Réactiver le profil`)}}function Ni(a,t){if(a&1){let e=LS();_a(0,`div`,44),_b(1,`ng-icon`,50),_a(2,`div`)(3,`p`,51),hC(4,`Profil désactivé`),Bd(),_a(5,`p`),hC(6,`Il n'est plus proposé pour les nouveaux comptes, et ses comptes n'ont plus ses droits.`),Bd()(),_a(7,`button`,10),Cb(`click`,function(){sm(e);let n=US(),c=US(3);return am(c.changerActivationProfil(n))}),hC(8,`Réactiver`),Bd()()}}function ki(a,t){if(a&1){let e=LS();_a(0,`app-empty-state`,45)(1,`button`,52),Cb(`click`,function(){sm(e);let n=US(4);return am(n.changerOnglet(`droits`))}),hC(2,` Ouvrir le catalogue des droits `),Bd()()}}function Pi(a,t){a&1&&(_a(0,`span`,78),hC(1,` Désactivé `),Bd())}function Mi(a,t){if(a&1){let e=LS();_a(0,`li`,73)(1,`mat-slide-toggle`,74),Cb(`change`,function(n){let c=sm(e).$implicit,w=US(6);return am(w.basculerDroit(c.id,n.checked))}),Bd(),_a(2,`div`,75)(3,`span`,76),hC(4),Bd(),_a(5,`span`,77),hC(6),Bd()(),mi$1(7,Pi,2,0,`span`,78),Bd()}if(a&2){let e=t.$implicit,i=US(3),n=US(3);_n(`droit-donne`,n.droitsCoches().has(e.id))(`droit-inactif`,!e.actif),ai$1(),Eb(`checked`,n.droitsCoches().has(e.id))(`disabled`,n.chargementDroitsProfil()||n.verrouille(i,e))(`matTooltip`,n.verrouille(i,e)?`Indispensable : le profil système le garde toujours`:``),Db(`aria-label`,n.libelleDroit(e)),ai$1(3),Vb(n.libelleDroit(e)),ai$1(2),Vb(e.action),ai$1(),hi$1(e.actif?-1:7)}}function Di(a,t){if(a&1){let e=LS();qb(0),_a(1,`section`,58)(2,`header`,65)(3,`span`,66),_b(4,`ng-icon`,67),Bd(),_a(5,`h3`,68),hC(6),Bd(),_a(7,`span`,69),hC(8),Bd(),_a(9,`button`,70),Cb(`click`,function(){let n=sm(e).$implicit,c=IC(0),w=US(5);return am(w.basculerGroupe(n,c<n.droits.length))}),hC(10),Bd()(),_a(11,`ul`,71),MS(12,Mi,8,11,`li`,72,Ae),Bd()()}if(a&2){let e=t.$implicit,i=US(5),n=_C(i.nbCochesGroupe(e));ai$1(),Fa(`aria-labelledby`,`groupe-`+e.cle),ai$1(3),Eb(`name`,e.icone),ai$1(),Eb(`id`,`groupe-`+e.cle),ai$1(),Vb(e.libelle),ai$1(2),Hb(``,n,`/`,e.droits.length),ai$1(),Eb(`disabled`,i.chargementDroitsProfil()),ai$1(),zd(` `,n<e.droits.length?`Tout donner`:`Tout retirer`,` `),ai$1(2),AS(e.droits)}}function Ei(a,t){if(a&1&&(_a(0,`p`,59),hC(1),Bd()),a&2){let e=US(5);ai$1(),zd(`Aucun droit ne correspond à « `,e.rechercheDroit(),` ».`)}}function Oi(a,t){a&1&&(hC(0,` · `),_a(1,`span`,79),hC(2,`modifications non enregistrées`),Bd())}function Ii(a,t){if(a&1){let e=LS();_a(0,`div`,53)(1,`mat-form-field`,54)(2,`mat-label`),hC(3,`Filtrer les droits`),Bd(),_b(4,`ng-icon`,55),_a(5,`input`,56),bw(),Cb(`ngModelChange`,function(n){sm(e);let c=US(4);return am(c.rechercheDroit.set(n))}),Bd()()(),_a(6,`div`,57),MS(7,Di,14,9,`section`,58,ci,!1,Ei,2,1,`p`,59),Bd(),_a(10,`footer`,60)(11,`p`,61)(12,`strong`,37),hC(13),Bd(),hC(14),mi$1(15,Oi,3,0),Bd(),_a(16,`div`,62)(17,`button`,63),Cb(`click`,function(){sm(e);let n=US(4);return am(n.annulerModifications())}),hC(18,` Annuler `),Bd(),_a(19,`button`,64),Cb(`click`,function(){sm(e);let n=US(4);return am(n.enregistrerDroits())}),hC(20),Bd()()()}if(a&2){let e=US(4);ai$1(5),Eb(`ngModel`,e.rechercheDroit()),vw(),ai$1(),_n(`groupes-chargement`,e.chargementDroitsProfil()),Fa(`aria-busy`,e.chargementDroitsProfil()),ai$1(),AS(e.groupesDroits()),ai$1(3),_n(`barre-modifiee`,e.modifie()),ai$1(3),Vb(e.droitsCoches().size),ai$1(),zd(` droit(s) sur `,e.droits().length,` `),ai$1(),hi$1(e.modifie()?15:-1),ai$1(2),Eb(`disabled`,!e.modifie()||e.enregistrement()),ai$1(2),Eb(`disabled`,!e.modifie()||e.enregistrement()),ai$1(),zd(` `,e.enregistrement()?`Enregistrement…`:`Enregistrer les droits`,` `)}}function Ti(a,t){if(a&1){let e=LS();_a(0,`section`,19)(1,`header`,29)(2,`span`,30),_b(3,`ng-icon`,31),Bd(),_a(4,`div`,32)(5,`h2`,33),hC(6),mi$1(7,wi,2,0,`span`,27),mi$1(8,yi,2,0,`span`,34),mi$1(9,Si,2,0,`span`,35),Bd(),_a(10,`p`),hC(11),Bd(),_a(12,`ul`,36)(13,`li`,37),_b(14,`ng-icon`,38),hC(15),Bd(),mi$1(16,xi,3,0,`li`),Bd()(),_a(17,`button`,39),_b(18,`ng-icon`,40),Bd(),_a(19,`mat-menu`,41,0)(21,`button`,42),Cb(`click`,function(){let n=sm(e),c=US(3);return am(c.modifierProfil(n))}),_b(22,`ng-icon`,43),_a(23,`span`),hC(24,`Modifier le profil`),Bd()(),mi$1(25,Ci,8,2),Bd()(),mi$1(26,Ni,9,0,`div`,44),mi$1(27,ki,3,0,`app-empty-state`,45)(28,Ii,21,13),Bd()}if(a&2){let e=t,i=ZS(20),n=US(3);ai$1(3),Eb(`name`,n.iconeProfil(e)),ai$1(3),zd(` `,e.nom,` `),ai$1(),hi$1(e.actif?-1:7),ai$1(),hi$1(e.systeme?8:-1),ai$1(),hi$1(e.inscription?9:-1),ai$1(2),Vb(e.description??`Aucune description.`),ai$1(4),Hb(` `,e.nbUtilisateurs,` compte`,e.nbUtilisateurs>1?`s`:``),ai$1(),hi$1(e.systeme?16:-1),ai$1(),Eb(`matMenuTriggerFor`,i),Fa(`aria-label`,`Actions pour le profil `+e.nom),ai$1(8),hi$1(!e.systeme&&!e.inscription?25:-1),ai$1(),hi$1(e.actif?-1:26),ai$1(),hi$1(n.droits().length===0?27:28)}}function zi(a,t){if(a&1&&(_a(0,`div`,15),mi$1(1,_i,6,1,`mat-form-field`,17)(2,vi,4,0,`nav`,18),mi$1(3,Ti,29,14,`section`,19),Bd()),a&2){let e,i=US(2);ai$1(),hi$1(i.ecran.mobile()?1:2),ai$1(2),hi$1((e=i.profilSelectionne())?3:-1,e)}}function Li(a,t){if(a&1&&mi$1(0,ui,4,0,`div`,8)(1,zi,4,2,`div`,15),a&2){let e=US();hi$1(e.profils().length===0?0:1)}}function Ai(a,t){if(a&1){let e=LS();_a(0,`app-empty-state`,81)(1,`button`,10),Cb(`click`,function(){sm(e);let n=US(2);return am(n.nouveauDroit())}),hC(2,`Créer un droit`),Bd()()}}function Vi(a,t){if(a&1){let e=LS();_a(0,`app-matrice-droits`,83),Cb(`profilModifie`,function(n){sm(e);let c=US(2);return am(c.apresMatrice(n))})(`modifierDroit`,function(n){sm(e);let c=US(2);return am(c.modifierDroit(n))})(`supprimerDroit`,function(n){sm(e);let c=US(2);return am(c.supprimerDroit(n))})(`basculerActivation`,function(n){sm(e);let c=US(2);return am(c.changerActivationDroit(n))}),Bd()}if(a&2){let e=US(2);Eb(`profils`,e.profils())(`droits`,e.droits())}}function Fi(a,t){if(a&1&&(_a(0,`section`,9)(1,`h2`,80),hC(2,`Catalogue des droits`),Bd(),mi$1(3,Ai,3,0,`app-empty-state`,81)(4,Vi,1,2,`app-matrice-droits`,82),Bd()),a&2){let e=US();ai$1(3),hi$1(e.droits().length===0?3:4)}}var Tt=class a$3{profilService=m(a$1);dialog=m(Mt);confirmation=m(Z);notification=m(Ri);router=m(le);route=m(V);ecran=m(b$1);onglet=In();ongletActif=ry(()=>this.onglet()===`droits`?`droits`:`profils`);libelleDroit=c;profils=jt$1([]);droits=jt$1([]);chargement=jt$1(!0);erreur=jt$1(!1);profilSelectionneId=jt$1(null);profilSelectionne=ry(()=>this.profils().find(t=>t.id===this.profilSelectionneId())??null);chargementDroitsProfil=jt$1(!1);droitsEnregistres=jt$1(new Set);droitsCoches=jt$1(new Set);enregistrement=jt$1(!1);modifie=ry(()=>{let t=this.droitsEnregistres(),e=this.droitsCoches();return t.size!==e.size||[...e].some(i=>!t.has(i))});rechercheDroit=jt$1(``);droitsFiltres=ry(()=>{let t=this.rechercheDroit().trim().toLowerCase();return t?this.droits().filter(e=>e.action.toLowerCase().includes(t)||(e.description??``).toLowerCase().includes(t)):this.droits()});groupesDroits=ry(()=>a(this.droitsFiltres()));nbCochesGroupe(t){let e=this.droitsCoches();return t.droits.filter(i=>e.has(i.id)).length}ngOnInit(){this.charger()}charger(){this.chargement.set(!0),this.erreur.set(!1),bD({profils:this.profilService.getAll(),droits:this.profilService.getDroits()}).subscribe({next:({profils:t,droits:e})=>{this.profils.set([...t].sort((n,c)=>n.nom.localeCompare(c.nom,`fr`))),this.droits.set([...e].sort((n,c)=>n.action.localeCompare(c.action))),this.chargement.set(!1);let i=this.profilSelectionne()??this.profils()[0];i&&this.ouvrirProfil(i.id)},error:()=>{this.erreur.set(!0),this.chargement.set(!1)}})}changerOnglet(t){this.router.navigate([],{relativeTo:this.route,queryParams:{onglet:t===`profils`?null:t},replaceUrl:!0})}async choisirProfil(t){t!==this.profilSelectionneId()&&(this.modifie()&&!await this.confirmation.demander({titre:`Abandonner les modifications ?`,message:`Les droits coch\xE9s pour \xAB ${this.profilSelectionne()?.nom} \xBB n'ont pas \xE9t\xE9 enregistr\xE9s.`,texteConfirmer:`Abandonner`,texteAnnuler:`Rester sur ce profil`,danger:!0})||this.ouvrirProfil(t))}ouvrirProfil(t){this.profilSelectionneId.set(t),this.chargementDroitsProfil.set(!0),this.profilService.getDroitsDuProfil(t).subscribe({next:e=>{let i=new Set(e.map(n=>n.droitId));this.droitsEnregistres.set(i),this.droitsCoches.set(new Set(i)),this.chargementDroitsProfil.set(!1)},error:()=>{this.droitsEnregistres.set(new Set),this.droitsCoches.set(new Set),this.chargementDroitsProfil.set(!1)}})}basculerDroit(t,e){this.droitsCoches.update(i=>{let n=new Set(i);return e?n.add(t):n.delete(t),n})}iconeProfil(t){return t.systeme?`lucideShieldCheck`:t.inscription?`lucideUserPlus`:`lucideKeyRound`}indispensable(t){return d.includes(t.action)}verrouille(t,e){return t.systeme&&d.includes(e.action)}basculerGroupe(t,e){let i=this.profilSelectionne();this.droitsCoches.update(n=>{let c=new Set(n);for(let w of t.droits)i&&!e&&this.verrouille(i,w)||(e?c.add(w.id):c.delete(w.id));return c})}annulerModifications(){this.droitsCoches.set(new Set(this.droitsEnregistres()))}enregistrerDroits(){let t=this.profilSelectionne();t&&(this.enregistrement.set(!0),this.profilService.modifierDroitsDuProfil(t.id,[...this.droitsCoches()]).subscribe({next:e=>{let i=new Set(e.map(n=>n.droitId));this.droitsEnregistres.set(i),this.droitsCoches.set(new Set(i)),this.profils.update(n=>n.map(c=>c.id===t.id?m$1(l({},c),{nbDroits:i.size}):c)),this.enregistrement.set(!1),this.notification.succes(`Les droits de \xAB ${t.nom} \xBB sont enregistr\xE9s.`)},error:()=>this.enregistrement.set(!1)}))}rafraichirProfils(){this.profilService.getAll().subscribe({next:t=>this.profils.set([...t].sort((e,i)=>e.nom.localeCompare(i.nom,`fr`)))})}async nouveauProfil(){let t=await this.ouvrirDialogueProfil({profils:this.profils()});t&&(this.rafraichirProfils(),this.notification.succes(`Le profil \xAB ${t.nom} \xBB est cr\xE9\xE9. Cochez maintenant ses droits.`),this.ouvrirProfil(t.id))}async modifierProfil(t){await this.ouvrirDialogueProfil({profil:t,profils:this.profils()})&&(this.rafraichirProfils(),this.notification.succes(`Le profil est modifié.`))}async changerActivationProfil(t){t.actif&&!await this.confirmation.demander({titre:`D\xE9sactiver le profil \xAB ${t.nom} \xBB ?`,message:`Il ne sera plus propos\xE9 pour les nouveaux comptes, et ses ${t.nbUtilisateurs} compte(s) n'auront plus ses droits (ils gardent le profil : il suffira de le r\xE9activer).`,texteConfirmer:`Désactiver`,danger:!0})||this.profilService.changerActivation(t.id,!t.actif).subscribe({next:e=>{this.rafraichirProfils(),this.notification.succes(e.actif?`Le profil \xAB ${e.nom} \xBB est r\xE9activ\xE9.`:`Le profil \xAB ${e.nom} \xBB est d\xE9sactiv\xE9.`)}})}apresMatrice({profilId:t,nbDroits:e}){this.profils.update(i=>i.map(n=>n.id===t?m$1(l({},n),{nbDroits:e}):n)),this.profilSelectionneId()===t&&this.ouvrirProfil(t)}changerActivationDroit(t){this.profilService.changerActivationDroit(t.id,!t.actif).subscribe({next:e=>{this.droits.update(i=>i.map(n=>n.id===e.id?e:n)),this.notification.succes(e.actif?`Le droit ${e.action} est r\xE9activ\xE9.`:`Le droit ${e.action} est d\xE9sactiv\xE9 : il n'est plus donn\xE9.`)}})}async supprimerProfil(t){await this.confirmation.demander({titre:`Supprimer le profil \xAB ${t.nom} \xBB ?`,message:`Les membres qui ont ce profil perdront les droits associés.`,texteConfirmer:`Supprimer le profil`,danger:!0})&&this.profilService.supprimer(t.id).subscribe({next:()=>{let i=this.profils().filter(n=>n.id!==t.id);this.profils.set(i),this.droitsEnregistres.set(new Set),this.droitsCoches.set(new Set),this.profilSelectionneId.set(null),i[0]&&this.ouvrirProfil(i[0].id),this.notification.succes(`Le profil \xAB ${t.nom} \xBB est supprim\xE9.`)}})}async nouveauDroit(){let t=await this.ouvrirDialogueDroit({});t&&(this.droits.update(e=>[...e,t].sort((i,n)=>i.action.localeCompare(n.action))),this.notification.succes(`Le droit ${t.action} est cr\xE9\xE9.`))}async modifierDroit(t){let e=await this.ouvrirDialogueDroit({droit:t});e&&(this.droits.update(i=>i.map(n=>n.id===e.id?e:n)),this.notification.succes(`Le droit est modifié.`))}async supprimerDroit(t){await this.confirmation.demander({titre:`Supprimer le droit ${t.action} ?`,message:`Il sera retiré de tous les profils qui le possèdent.`,texteConfirmer:`Supprimer le droit`,danger:!0})&&this.profilService.supprimerDroit(t.id).subscribe({next:()=>{this.droits.update(i=>i.filter(n=>n.id!==t.id)),this.basculerDroit(t.id,!1),this.droitsEnregistres.update(i=>new Set([...i].filter(n=>n!==t.id))),this.notification.succes(`Le droit ${t.action} est supprim\xE9.`)}})}ouvrirDialogueProfil(t){let e=this.dialog.open(Oe,{data:t,width:`600px`,maxWidth:`calc(100vw - 2rem)`});return lD(e.afterClosed())}ouvrirDialogueDroit(t){let e=this.dialog.open(De,{data:t,width:`520px`,maxWidth:`calc(100vw - 2rem)`});return lD(e.afterClosed())}static ɵfac=function(e){return new(e||a$3)};static ɵcmp=Fe({type:a$3,selectors:[[`app-profils-liste`]],inputs:{onglet:[1,`onglet`]},decls:16,vars:5,consts:[[`menuProfil`,`matMenu`],[`surtitre`,`Paramètres`,`titre`,`Profils et droits`,`description`,`Chaque utilisateur a un seul profil, et chaque profil a ses droits. Un droit ou un profil peut être désactivé sans être supprimé.`],[`matButton`,`filled`,`type`,`button`],[`name`,`onglet`,`aria-label`,`Choisir la vue`,`hideSingleSelectionIndicator`,``,1,`onglets`,`gw-sections`,3,`change`,`value`],[`value`,`profils`],[1,`onglet-compteur`,`gw-chiffres`],[`value`,`droits`],[`aria-busy`,`true`,`aria-label`,`Chargement des profils`,1,`disposition`],[1,`gw-carte`],[`aria-labelledby`,`titre-catalogue`,1,`gw-carte`,`catalogue`],[`matButton`,`filled`,`type`,`button`,3,`click`],[`name`,`lucideShieldCheck`,`size`,`1.125rem`,`aria-hidden`,`true`],[1,`gw-squelette`,`sq-liste`],[1,`gw-squelette`,`sq-detail`],[`titre`,`Impossible de charger les profils`,`message`,`Vérifiez que le serveur est lancé, puis réessayez.`,`icone`,`lucideCircleAlert`,`ton`,`erreur`],[1,`disposition`],[`titre`,`Aucun profil pour le moment`,`message`,`Créez un profil, par exemple « Modérateur recettes », puis choisissez ses droits.`,`icone`,`lucideShieldCheck`],[`subscriptSizing`,`dynamic`,1,`selecteur-mobile`],[`aria-label`,`Profils`,1,`liste-profils`,`gw-carte`],[`aria-labelledby`,`titre-profil`,1,`detail`,`gw-carte`],[3,`selectionChange`,`value`],[3,`value`],[`type`,`button`,1,`profil`,3,`click`],[`aria-hidden`,`true`,1,`profil-icone`],[`size`,`1.125rem`,3,`name`],[1,`profil-textes`],[1,`profil-nom`],[1,`gw-etiquette`,`gw-etiquette-neutre`],[1,`profil-compteurs`,`gw-chiffres`],[1,`detail-entete`],[`aria-hidden`,`true`,1,`detail-icone`],[`size`,`1.5rem`,3,`name`],[1,`detail-textes`],[`id`,`titre-profil`],[`matTooltip`,`Profil des administrateurs : il a toujours tous les droits du catalogue`,1,`gw-etiquette`],[`matTooltip`,`Donné aux personnes qui s'inscrivent dans l'application`,1,`gw-etiquette`],[1,`detail-faits`],[1,`gw-chiffres`],[`name`,`lucideUsers`,`size`,`0.875rem`,`aria-hidden`,`true`],[`matIconButton`,``,`type`,`button`,`matTooltip`,`Modifier, désactiver ou supprimer`,3,`matMenuTriggerFor`],[`name`,`lucideEllipsis`,`size`,`1.25rem`,`aria-hidden`,`true`],[`xPosition`,`before`],[`mat-menu-item`,``,`type`,`button`,3,`click`],[`name`,`lucidePencil`,`size`,`1.125rem`,`aria-hidden`,`true`],[`role`,`status`,1,`a-completer`],[`titre`,`Aucun droit dans le catalogue`,`message`,`Créez d'abord les droits (par exemple RECETTE_VALIDER), puis revenez les attribuer.`,`icone`,`lucideShieldCheck`],[`name`,`lucideShieldCheck`,`size`,`0.875rem`,`aria-hidden`,`true`],[`size`,`1.125rem`,`aria-hidden`,`true`,3,`name`],[`mat-menu-item`,``,`type`,`button`,1,`item-danger`,3,`click`],[`name`,`lucideTrash2`,`size`,`1.125rem`,`aria-hidden`,`true`],[`name`,`lucideBan`,`size`,`1.25rem`,`aria-hidden`,`true`],[1,`a-completer-titre`],[`matButton`,`outlined`,`type`,`button`,3,`click`],[1,`outils-droits`],[`subscriptSizing`,`dynamic`,1,`recherche-droits`],[`matPrefix`,``,`name`,`lucideSearch`,`size`,`1.125rem`,`aria-hidden`,`true`,1,`icone-champ`],[`matInput`,``,`type`,`search`,3,`ngModelChange`,`ngModel`],[1,`groupes`],[1,`groupe`],[1,`aucun`],[1,`barre-enregistrement`],[`aria-live`,`polite`],[1,`barre-actions`],[`matButton`,``,`type`,`button`,3,`click`,`disabled`],[`matButton`,`filled`,`type`,`button`,3,`click`,`disabled`],[1,`groupe-entete`],[`aria-hidden`,`true`,1,`groupe-icone`],[`size`,`1rem`,3,`name`],[1,`groupe-titre`,3,`id`],[1,`groupe-compte`,`gw-chiffres`],[`matButton`,``,`type`,`button`,1,`groupe-tout`,3,`click`,`disabled`],[1,`groupe-droits`],[1,`droit`,3,`droit-donne`,`droit-inactif`],[1,`droit`],[`hideIcon`,``,3,`change`,`checked`,`disabled`,`matTooltip`,`aria-label`],[1,`droit-textes`],[1,`droit-libelle`],[1,`droit-code`],[`matTooltip`,`Désactivé dans le catalogue : il n'est donné à personne`,1,`gw-etiquette`,`gw-etiquette-neutre`],[1,`non-enregistre`],[`id`,`titre-catalogue`,1,`sr-only`],[`titre`,`Aucun droit défini`,`message`,`Un droit autorise une action précise, par exemple valider les recettes.`,`icone`,`lucideShieldCheck`],[3,`profils`,`droits`],[3,`profilModifie`,`modifierDroit`,`supprimerDroit`,`basculerActivation`,`profils`,`droits`]],template:function(e,i){e&1&&(_a(0,`app-page-header`,1),mi$1(1,di,3,0,`button`,2)(2,mi,2,0,`button`,2),Bd(),_a(3,`mat-button-toggle-group`,3),Cb(`change`,function(c){return i.changerOnglet(c.value)}),_a(4,`mat-button-toggle`,4),hC(5,` Profils `),_a(6,`span`,5),hC(7),Bd()(),_a(8,`mat-button-toggle`,6),hC(9,` Catalogue des droits `),_a(10,`span`,5),hC(11),Bd()()(),mi$1(12,gi,3,0,`div`,7)(13,pi,4,0,`div`,8)(14,Li,2,1)(15,Fi,5,1,`section`,9)),e&2&&(ai$1(),hi$1(i.ongletActif()===`profils`?1:2),ai$1(2),Eb(`value`,i.ongletActif()),ai$1(4),Vb(i.profils().length),ai$1(4),Vb(i.droits().length),ai$1(),hi$1(i.chargement()?12:i.erreur()?13:i.ongletActif()===`profils`?14:15))},dependencies:[Ee,fo,Wn,lo,mr,y4,_x,rt,it$1,Me,vt,de,ht,Ne,At$1,yt,P,G,Dt,at,N4,x,C],styles:[`.onglet-compteur[_ngcontent-%COMP%]{margin-left:var(--%NS%gw-espace-2);padding:0 .4375rem;border-radius:var(--%NS%gw-rayon-pilule);background:var(--%NS%gw-fond);color:var(--%NS%gw-cacao);font-size:var(--%NS%gw-taille-petit);font-weight:600}.mat-button-toggle-checked[_ngcontent-%COMP%]   .onglet-compteur[_ngcontent-%COMP%]{background:var(--%NS%gw-terre-cuite-pale);color:var(--%NS%gw-action)}.disposition[_ngcontent-%COMP%]{display:grid;grid-template-columns:300px minmax(0,1fr);align-items:start;gap:var(--%NS%gw-espace-4)}@media(max-width:767.98px){.disposition[_ngcontent-%COMP%]{grid-template-columns:1fr}}.sq-liste[_ngcontent-%COMP%], .sq-detail[_ngcontent-%COMP%]{border-radius:var(--%NS%gw-rayon-lg)}.sq-liste[_ngcontent-%COMP%]{height:320px}.sq-detail[_ngcontent-%COMP%]{height:480px}.selecteur-mobile[_ngcontent-%COMP%]{width:100%}.liste-profils[_ngcontent-%COMP%]{position:sticky;top:calc(var(--%NS%gw-hauteur-topbar) + var(--%NS%gw-espace-4));padding:var(--%NS%gw-espace-2)}.liste-profils[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.profil[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:var(--%NS%gw-espace-3);width:100%;min-height:48px;padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-4);border:0;border-radius:var(--%NS%gw-rayon);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;transition:background-color var(--%NS%gw-duree) var(--%NS%gw-courbe)}.profil[_ngcontent-%COMP%]:hover{background:var(--%NS%gw-surface-2)}.profil-actif[_ngcontent-%COMP%]{background:var(--%NS%gw-karite-pale)}.profil-actif[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:10px;bottom:10px;width:3px;border-radius:0 3px 3px 0;background:var(--%NS%gw-terre-cuite)}.profil-actif[_ngcontent-%COMP%]:hover{background:var(--%NS%gw-karite-pale)}.profil-actif[_ngcontent-%COMP%]   .profil-nom[_ngcontent-%COMP%]{color:var(--%NS%gw-karite)}.profil-nom[_ngcontent-%COMP%]{color:var(--%NS%gw-cacao);font-weight:600}.profil-icone[_ngcontent-%COMP%]{display:inline-flex;flex-shrink:0;align-items:center;justify-content:center;width:36px;height:36px;border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-karite-pale);color:var(--%NS%gw-karite)}.profil-actif[_ngcontent-%COMP%]   .profil-icone[_ngcontent-%COMP%]{background:var(--%NS%gw-action);color:var(--%NS%gw-blanc)}.profil-textes[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.profil-compteurs[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit)}.profil-inactif[_ngcontent-%COMP%]   .profil-nom[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux)}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.detail-entete[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:var(--%NS%gw-espace-4);padding:var(--%NS%gw-espace-6) var(--%NS%gw-espace-6) var(--%NS%gw-espace-4)}.detail-entete[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:var(--%NS%gw-taille-titre-section);font-weight:700}.detail-entete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:var(--%NS%gw-espace-1);color:var(--%NS%gw-texte-doux)}@media(max-width:767.98px){.detail-entete[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-5) var(--%NS%gw-espace-4) var(--%NS%gw-espace-3)}.detail-entete[_ngcontent-%COMP%]   .detail-icone[_ngcontent-%COMP%]{display:none}}.outils-droits[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--%NS%gw-espace-3);padding:0 var(--%NS%gw-espace-6) var(--%NS%gw-espace-3)}@media(max-width:767.98px){.outils-droits[_ngcontent-%COMP%]{padding:0 var(--%NS%gw-espace-4) var(--%NS%gw-espace-3)}}.recherche-droits[_ngcontent-%COMP%]{flex:1 1 260px}.icone-champ[_ngcontent-%COMP%]{margin:0 var(--%NS%gw-espace-2) 0 var(--%NS%gw-espace-3);color:var(--%NS%gw-texte-doux)}.groupes[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:var(--%NS%gw-espace-3);padding:0 var(--%NS%gw-espace-6) var(--%NS%gw-espace-6);transition:opacity var(--%NS%gw-duree) var(--%NS%gw-courbe)}@media(max-width:767.98px){.groupes[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);padding:0 var(--%NS%gw-espace-4) var(--%NS%gw-espace-5)}}.groupes-chargement[_ngcontent-%COMP%]{opacity:.5}.groupe[_ngcontent-%COMP%]{overflow:hidden;border:1px solid var(--%NS%gw-bordure);border-radius:var(--%NS%gw-rayon-lg)}.groupe-entete[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-2);padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-2) var(--%NS%gw-espace-2) var(--%NS%gw-espace-3);background:var(--%NS%gw-surface-2)}.groupe-icone[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:var(--%NS%gw-karite-pale);color:var(--%NS%gw-karite)}.groupe-titre[_ngcontent-%COMP%]{flex:1;color:var(--%NS%gw-cacao);font-size:.9375rem;font-weight:700}.groupe-compte[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit);font-weight:600}.groupe-tout[_ngcontent-%COMP%]{--%NS%mat-button-text-container-height: 32px;font-size:var(--%NS%gw-taille-petit)}.groupe-droits[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.droit[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-3);padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-3);border-top:1px solid var(--%NS%gw-bordure);transition:background-color var(--%NS%gw-duree) var(--%NS%gw-courbe)}.droit-donne[_ngcontent-%COMP%]{background:var(--%NS%gw-terre-cuite-pale)}.droit-inactif[_ngcontent-%COMP%]   .droit-textes[_ngcontent-%COMP%]{opacity:.6}.droit-textes[_ngcontent-%COMP%]{flex:1;min-width:0}.droit-libelle[_ngcontent-%COMP%]{display:block;color:var(--%NS%gw-cacao);font-weight:500;line-height:1.3}.droit[_ngcontent-%COMP%]   .droit-code[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);font-size:.6875rem;font-weight:500}.droit-code[_ngcontent-%COMP%]{display:block;color:var(--%NS%gw-cacao);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:var(--%NS%gw-taille-label);font-weight:600;overflow-wrap:anywhere}.aucun[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux)}.barre-enregistrement[_ngcontent-%COMP%]{position:sticky;bottom:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--%NS%gw-espace-3);padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-6);border-top:1px solid var(--%NS%gw-bordure);background:var(--%NS%gw-surface-2);transition:background-color var(--%NS%gw-duree) var(--%NS%gw-courbe)}@media(max-width:767.98px){.barre-enregistrement[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-4)}}.barre-modifiee[_ngcontent-%COMP%]{background:var(--%NS%gw-terre-cuite-pale)}.non-enregistre[_ngcontent-%COMP%]{color:var(--%NS%gw-karite);font-weight:600}.barre-actions[_ngcontent-%COMP%]{display:flex;gap:var(--%NS%gw-espace-2)}.item-danger[_ngcontent-%COMP%]{color:var(--%NS%gw-danger)}.catalogue[_ngcontent-%COMP%]{overflow:hidden}.detail-icone[_ngcontent-%COMP%]{display:inline-flex;flex-shrink:0;align-items:center;justify-content:center;width:52px;height:52px;border-radius:var(--%NS%gw-rayon-lg);background:var(--%NS%gw-terre-cuite-pale);color:var(--%NS%gw-action)}.detail-textes[_ngcontent-%COMP%]{flex:1;min-width:0}.detail-faits[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%gw-espace-2);margin:var(--%NS%gw-espace-3) 0 0;padding:0;list-style:none}.detail-faits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:2px var(--%NS%gw-espace-3);border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-fond);color:var(--%NS%gw-cacao);font-size:var(--%NS%gw-taille-petit);font-weight:500}.a-completer[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-3);margin:0 var(--%NS%gw-espace-6) var(--%NS%gw-espace-4);padding:var(--%NS%gw-espace-4);border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-danger-fond);color:var(--%NS%gw-danger)}.a-completer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;color:var(--%NS%gw-cacao);font-size:var(--%NS%gw-taille-petit)}@media(max-width:767.98px){.a-completer[_ngcontent-%COMP%]{flex-wrap:wrap;margin-inline:var(--%NS%gw-espace-4)}}.a-completer-titre[_ngcontent-%COMP%]{font-size:var(--%NS%gw-taille-texte);font-weight:700}`]})};export{Tt as ProfilsListe};