import{An as b,Ar as mc,Cn as _b,Dn as ai,Fi as zv,G as GS,L as Et,Ln as by,N as Eb,Pi as zd,Qt as TC,Sn as _a,Tn as _n,U as GG,Ut as Re,V as Fe,an as Ud,dn as WS,g as Av,hr as it,jr as mi,k as Dn,kr as m,mi as vn,mn as Yt,ni as to,or as hC,p as Af,rr as gn,t as $,tn as US,ur as hi,v as Bd,vt as Mb,x as Cb,yr as jt,z as Fa,zn as ce}from"./chunk-D3sqZ3gc.js";import{t as m$1}from"./chunk-CmPPawFK.js";var W=new b(`MAT_OPTION_PARENT_COMPONENT`);var X=new b(`MatOptgroup`);var vt=(()=>{class n{label;disabled=!1;_labelId=m(Af).getId(`mat-optgroup-label-`);_inert;constructor(){let t=m(W,{optional:!0});this._inert=t?.inertGroups??!1}static ɵfac=function(o){return new(o||n)};static ɵcmp=(function(){let t=[`*`,[[`mat-option`],[`ng-container`]]];return Fe({type:n,selectors:[[`mat-optgroup`]],hostAttrs:[1,`mat-mdc-optgroup`],hostVars:3,hostBindings:function(r,i){r&2&&Fa(`role`,i._inert?null:`group`)(`aria-disabled`,i._inert?null:i.disabled.toString())(`aria-labelledby`,i._inert?null:i._labelId)},inputs:{label:`label`,disabled:[2,`disabled`,`disabled`,it]},exportAs:[`matOptgroup`],features:[TC([{provide:X,useExisting:n}])],ngContentSelectors:[`*`,`mat-option, ng-container`],decls:5,vars:4,consts:[[`role`,`presentation`,1,`mat-mdc-optgroup-label`,3,`id`],[1,`mdc-list-item__primary-text`]],template:function(r,i){r&1&&(to(t),vn(0,`span`,0)(1,`span`,1),hC(2),Et(3),Dn()(),Et(4,1)),r&2&&(_n(`mdc-list-item--disabled`,i.disabled),Ud(`id`,i._labelId),ai(2),zd(``,i.label,` `))},styles:[`.mat-mdc-optgroup {
  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));
  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2})})()}return n})();var E=class{source;isUserInput;constructor(c,t=!1){this.source=c,this.isUserInput=t}};var yt=(()=>{class n{_element=m(ce);_changeDetectorRef=m(by);_parent=m(W,{optional:!0});group=m(X,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(Af).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=jt(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Re;_text;_stateChanges=new $;constructor(){let t=m(Yt);t.load(zv),t.load(mc),this._signalDisableRipple=!!this._parent&&gn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,o){let m=this._getHostElement();typeof m.focus==`function`&&m.focus(o)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Av(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new E(this,t))}static ɵfac=function(o){return new(o||n)};static ɵcmp=(function(){let t=[`text`],o=[[[`mat-icon`]],`*`],m=[`mat-icon`,`*`];function r(a,l){if(a&1&&_b(0,`mat-pseudo-checkbox`,1),a&2){let e=US();Eb(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function i(a,l){if(a&1&&_b(0,`mat-pseudo-checkbox`,3),a&2){let e=US();Eb(`disabled`,e.disabled)}}function Z(a,l){if(a&1&&(_a(0,`span`,4),hC(1),Bd()),a&2){let e=US();ai(),zd(`(`,e.group.label,`)`)}}return Fe({type:n,selectors:[[`mat-option`]],viewQuery:function(l,e){if(l&1&&Mb(t,7),l&2){let u;GS(u=WS())&&(e._text=u.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(l,e){l&1&&Cb(`click`,function(){return e._selectViaInteraction()})(`keydown`,function(tt){return e._handleKeydown(tt)}),l&2&&(Ud(`id`,e.id),Fa(`aria-selected`,e.selected)(`aria-disabled`,e.disabled.toString()),_n(`mdc-list-item--selected`,e.selected)(`mat-mdc-option-multiple`,e.multiple)(`mat-mdc-option-active`,e.active)(`mdc-list-item--disabled`,e.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,it]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:m,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(l,e){l&1&&(to(o),mi(0,r,1,2,`mat-pseudo-checkbox`,1),Et(1),_a(2,`span`,2,0),Et(4,1),Bd(),mi(5,i,1,1,`mat-pseudo-checkbox`,3),mi(6,Z,2,1,`span`,4),_b(7,`div`,5)),l&2&&(hi(e.multiple?0:-1),ai(5),hi(!e.multiple&&e.selected&&!e.hideSingleSelectionIndicator?5:-1),ai(),hi(e.group&&e.group._inert?6:-1),ai(),Eb(`matRippleTrigger`,e._getHostElement())(`matRippleDisabled`,e.disabled||e.disableRipple))},dependencies:[m$1,GG],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();function xt(n,c,t){if(t.length){let o=c.toArray(),m=t.toArray(),r=0;for(let i=0;i<n+1;i++)o[i].group&&o[i].group===m[r]&&r++;return r}return 0}function _t(n,c,t,o){return n<t?n:n+c>t+o?Math.max(0,n-o+c):t}export{vt as a,_t as i,W as n,xt as o,X as r,yt as s,E as t};