import{$r as ry,A as Do,An as b,C as Cv,Cn as _b,Dn as ai,En as _x,Et as Nv,G as GS,Gr as q,I as Er,Ii as l,Ir as oe,Jn as eo,L as Et$1,Li as m$1,Ln as by,Mt as Pa,N as Eb,On as am,Or as ls,Pi as zd,Pr as nr,Pt as Pe,Q as Hr,Qt as TC,Si as xb,Sn as _a,Ti as y4,Tn as _n,Tt as NS,Ut as Re,V as Fe,Vt as RD,W as GN,Wn as dc,Xt as Sx,Y as Hb,_t as MS,a as $c,ai as ud,bi as xD,br as k,ci as uo,cn as Vb,d as AS,dn as WS,ei as sm,er as gU,g as Av,gn as ZS,gt as MG,ht as MD,jr as mi,jt as PC,kr as m,kt as Oh,lt as LS,ni as to,nt as In,o as $t$1,or as hC,qn as en,st as L,t as $,tn as US,ur as hi,ut as La,v as Bd,vt as Mb,wn as _e,x as Cb,xr as kC,xt as N4,yi as xC,yr as jt$1,z as Fa,zn as ce}from"./chunk-D3sqZ3gc.js";import{f as Mr,s as Ie}from"./chunk-EzVJzvVV.js";import"./chunk-DilUS_UY.js";import{f as at,n as Nt$1,o as pr,r as To,t as A}from"./main-FX6IMLZ2.js";import{t as a}from"./chunk-BnayUQ4G.js";import"./chunk-GklgKXRN.js";import"./chunk-V32-ISO2.js";import"./chunk-x4wQNbaA.js";import{n as G,r as P,t as Dt$1}from"./chunk-VG-poO2c.js";import{r as U}from"./chunk-D2Qu9Utn.js";import{t as m$2}from"./chunk-CEcfFvj2.js";import"./chunk-D2KceXXY.js";import{t as Z}from"./chunk-C3U8Hg07.js";import{t as m$3}from"./chunk-n7pUXYCR.js";import{t as w}from"./chunk-CJp_9wcO.js";import{t as f}from"./chunk-BYtyYf_y.js";import{n as d,r as u}from"./chunk-BkpUT3YO.js";import{t as b$1}from"./chunk-Cb3FyUtU.js";import{t as p}from"./chunk-CXy6rLZk.js";var ft=new b(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var Ne=new b(`MAT_DRAWER_CONTAINER`);var K=(()=>{class t extends Mr{_platform=m(_e);_changeDetectorRef=m(by);_element=m(ce);_ngZone=m(L);_isInert=!1;_container=m(Se);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(RD(50),en(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let n=this._element.nativeElement;this._isInert=e,e?n.setAttribute(`inert`,`true`):n.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!==`over`&&e.opened||n!=null&&n.mode!==`over`&&n.opened}static ɵfac=(()=>{let e;return function(r){return(e||(e=Oh(t)))(r||t)}})();static ɵcmp=(function(){return Fe({type:t,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(r,l){r&2&&(Pa(`margin-left`,l._container._contentMargins.left,`px`)(`margin-right`,l._container._contentMargins.right,`px`),_n(`mat-drawer-content-hidden`,l._shouldBeHidden()))},features:[TC([{provide:Mr,useExisting:t}]),eo],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,l){r&1&&(to(),Et$1(0))},encapsulation:2})})()}return t})();var ye=(()=>{class t{_elementRef=m(ce);_focusTrapFactory=m(Nv);_focusMonitor=m(dc);_platform=m(_e);_ngZone=m(L);_renderer=m($t$1);_interactivityChecker=m(Cv);_doc=m(k);_isAnimating=!1;_container=m(Ne,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=MG(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=MG(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(MG(e))}_opened=jt$1(!1);_openedVia=null;_animationStarted=new $;_animationEnd=new $;openedChange=new Re(!0);_openedStream=this.openedChange.pipe(Pe(e=>e),oe(()=>{}));openedStart=this._animationStarted.pipe(Pe(()=>this.opened),$c(void 0));_closedStream=this.openedChange.pipe(Pe(e=>!e),oe(()=>{}));closedStart=this._animationStarted.pipe(Pe(()=>!this.opened),$c(void 0));_destroyed=new $;onPositionChanged=new Re;_content;_modeChanged=new $;_injector=m(q);_changeDetectorRef=m(by);constructor(){this.openedChange.pipe(Do(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,`keydown`,r=>{r.keyCode===27&&!this.disableClose&&!Av(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(n,`transitionend`,this._handleTransitionEvent),e.listen(n,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,n){let r=this._elementRef.nativeElement.querySelector(e);r&&(this._interactivityChecker.isFocusable(r)||(r.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let l=()=>{p(),u(),r.removeAttribute(`tabindex`)},p=this._renderer.listen(r,`blur`,l),u=this._renderer.listen(r,`mousedown`,l)})),r.focus(n))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:ud(()=>{let n=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(n)&&typeof e.focus==`function`&&e.focus(n)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),r}_setOpen(e,n,r){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&n&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(l=>{this.openedChange.pipe(en(1)).subscribe(p=>l(p?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,r=n.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),r.insertBefore(this._anchor,n)),r.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`content`];return Fe({type:t,selectors:[[`mat-drawer`]],viewQuery:function(l,p){if(l&1&&Mb(e,5),l&2){let u;GS(u=WS())&&(p._content=u.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(l,p){l&2&&(Fa(`align`,null)(`tabIndex`,p.mode!==`side`?`-1`:null),Pa(`visibility`,!p._container&&!p.opened?`hidden`:null),_n(`mat-drawer-end`,p.position===`end`)(`mat-drawer-over`,p.mode===`over`)(`mat-drawer-push`,p.mode===`push`)(`mat-drawer-side`,p.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(l,p){l&1&&(to(),_a(0,`div`,1,0),Et$1(2),Bd())},dependencies:[Mr],encapsulation:2})})()}return t})();var Se=(()=>{class t{_dir=m(Sx,{optional:!0});_element=m(ce);_ngZone=m(L);_changeDetectorRef=m(by);_animationDisabled=uo();_transitionsEnabled=!1;_allDrawers;_drawers=new nr;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=MG(e)}_autosize=m(ft);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:MG(e)}_backdropOverride=null;backdropClick=new Re;_start=null;_end=null;_left=null;_right=null;_destroyed=new $;_doCheckSubject=new $;_contentMargins={left:null,right:null};_contentMarginChanges=new $;get scrollable(){return this._userContent||this._content}_injector=m(q);constructor(){let e=m(_e),n=m(Ie);this._dir?.change.pipe(Do(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(Do(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ls(this._allDrawers),Do(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ls(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Er(10),Do(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let r=this._left._getWidth();e+=r,n-=r}}if(this._right&&this._right.opened){if(this._right.mode==`side`)n+=this._right._getWidth();else if(this._right.mode==`push`){let r=this._right._getWidth();n+=r,e-=r}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Do(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(Do(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Do(this._drawers.changes)).subscribe(()=>{ud({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Do(MD(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,r=`mat-drawer-container-has-open`;e?n.add(r):n.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],n=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function r(p,u){if(p&1){let h=LS();_a(0,`div`,1),Cb(`click`,function(){sm(h);let C=US();return am(C._onBackdropClicked())}),Bd()}if(p&2){let h=US();_n(`mat-drawer-shown`,h._isShowingBackdrop())}}function l(p,u){p&1&&(_a(0,`mat-drawer-content`),Et$1(1,2),Bd())}return Fe({type:t,selectors:[[`mat-drawer-container`]],contentQueries:function(u,h,O){if(u&1&&xb(O,K,5)(O,ye,5),u&2){let C;GS(C=WS())&&(h._content=C.first),GS(C=WS())&&(h._allDrawers=C)}},viewQuery:function(u,h){if(u&1&&Mb(K,5),u&2){let O;GS(O=WS())&&(h._userContent=O.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(u,h){u&2&&_n(`mat-drawer-container-explicit-backdrop`,h._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[TC([{provide:Ne,useExisting:t}])],ngContentSelectors:n,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(u,h){u&1&&(to(e),mi(0,r,1,2,`div`,0),Et$1(1),Et$1(2,1),mi(3,l,2,0,`mat-drawer-content`)),u&2&&(hi(h.hasBackdrop?0:-1),ai(3),hi(h._content?-1:3))},dependencies:[K],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return t})();var le=(()=>{class t extends K{static ɵfac=(()=>{let e;return function(r){return(e||(e=Oh(t)))(r||t)}})();static ɵcmp=(function(){return Fe({type:t,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[TC([{provide:Mr,useExisting:t},{provide:K,useExisting:t}]),eo],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,l){r&1&&(to(),Et$1(0))},encapsulation:2})})()}return t})();var ke=(()=>{class t extends ye{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=MG(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=GN(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=GN(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(r){return(e||(e=Oh(t)))(r||t)}})();static ɵcmp=(function(){return Fe({type:t,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(r,l){r&2&&(Fa(`tabIndex`,l.mode!==`side`?`-1`:null)(`align`,null),Pa(`top`,l.fixedInViewport?l.fixedTopGap:null,`px`)(`bottom`,l.fixedInViewport?l.fixedBottomGap:null,`px`),_n(`mat-drawer-end`,l.position===`end`)(`mat-drawer-over`,l.mode===`over`)(`mat-drawer-push`,l.mode===`push`)(`mat-drawer-side`,l.mode===`side`)(`mat-sidenav-fixed`,l.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[TC([{provide:ye,useExisting:t}]),eo],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(r,l){r&1&&(to(),_a(0,`div`,1,0),Et$1(2),Bd())},dependencies:[Mr],encapsulation:2})})()}return t})();var mt=(()=>{class t extends Se{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(r){return(e||(e=Oh(t)))(r||t)}})();static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],n=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function r(p,u){if(p&1){let h=LS();_a(0,`div`,1),Cb(`click`,function(){sm(h);let C=US();return am(C._onBackdropClicked())}),Bd()}if(p&2){let h=US();_n(`mat-drawer-shown`,h._isShowingBackdrop())}}function l(p,u){p&1&&(_a(0,`mat-sidenav-content`),Et$1(1,2),Bd())}return Fe({type:t,selectors:[[`mat-sidenav-container`]],contentQueries:function(u,h,O){if(u&1&&xb(O,le,5)(O,ke,5),u&2){let C;GS(C=WS())&&(h._content=C.first),GS(C=WS())&&(h._allDrawers=C)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(u,h){u&2&&_n(`mat-drawer-container-explicit-backdrop`,h._backdropOverride)},exportAs:[`matSidenavContainer`],features:[TC([{provide:Ne,useExisting:t},{provide:Se,useExisting:t}]),eo],ngContentSelectors:n,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(u,h){u&1&&(to(e),mi(0,r,1,2,`div`,0),Et$1(1),Et$1(2,1),mi(3,l,2,0,`mat-sidenav-content`)),u&2&&(hi(h.hasBackdrop?0:-1),ai(3),hi(h._content?-1:3))},dependencies:[le],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return t})();var vt=t=>({id:t});var bt=(t,i)=>i.id;var _t=(t,i)=>i.libelle;function wt(t,i){if(t&1){let e=LS();_a(0,`button`,18),Cb(`click`,function(){sm(e);let r=US();return am(r.ouvrirMenu.emit())}),_b(1,`ng-icon`,19),Bd()}if(t&2){let e=US();Fa(`aria-expanded`,e.menuOuvert())}}function xt(t,i){if(t&1&&(_a(0,`a`,21),hC(1),Bd(),_b(2,`ng-icon`,22)),t&2){let e=US().$implicit;Eb(`routerLink`,e.lien),ai(),Vb(e.libelle)}}function Ct(t,i){if(t&1&&(_a(0,`span`,20),hC(1),Bd()),t&2){let e=US().$implicit;ai(),Vb(e.libelle)}}function yt(t,i){if(t&1&&(_a(0,`li`),mi(1,xt,3,2)(2,Ct,2,1,`span`,20),Bd()),t&2){let e=i.$implicit,n=i.$index,r=i.$count;_n(`masque-mobile`,n!==r-1),ai(),hi(e.lien?1:2)}}function St(t,i){if(t&1&&(_a(0,`span`,24),hC(1),Bd()),t&2){let e=US(2);ai(),Vb(e.notifications.nombreNonLues()>99?`99+`:e.notifications.nombreNonLues())}}function Mt(t,i){if(t&1&&(_a(0,`a`,7),_b(1,`ng-icon`,23),mi(2,St,2,1,`span`,24),Bd()),t&2){let e=US();Fa(`aria-label`,e.notifications.nombreNonLues()>0?e.notifications.nombreNonLues()+` notifications non lues`:`Notifications`),ai(2),hi(e.notifications.nombreNonLues()>0?2:-1)}}function Nt(t,i){if(t&1&&(_a(0,`span`,24),hC(1),Bd()),t&2){let e=US(2);ai(),Vb(e.notifications.nombreNonLues()>99?`99+`:e.notifications.nombreNonLues())}}function kt(t,i){if(t&1){let e=LS();_a(0,`button`,25),Cb(`menuOpened`,function(){sm(e);let r=US();return am(r.chargerDernieres())}),_b(1,`ng-icon`,23),mi(2,Nt,2,1,`span`,24),Bd()}if(t&2){let e=US(),n=ZS(10);Eb(`matMenuTriggerFor`,n),Fa(`aria-label`,e.notifications.nombreNonLues()>0?e.notifications.nombreNonLues()+` notifications non lues`:`Notifications`),ai(2),hi(e.notifications.nombreNonLues()>0?2:-1)}}function Ot(t,i){if(t&1&&hC(0),t&2){let e=US();Hb(` `,e.notifications.nombreNonLues(),` non lue`,e.notifications.nombreNonLues()>1?`s`:``,` `)}}function Pt(t,i){t&1&&hC(0,` Vous êtes à jour `)}function Et(t,i){if(t&1&&(_a(0,`a`,28),_b(1,`ng-icon`,29),hC(2),_a(3,`span`,30),hC(4),Bd()()),t&2){let e=i.$implicit;Eb(`routerLink`,e.lien)(`queryParams`,e.parametres),ai(),Eb(`name`,e.icone),ai(),zd(` `,e.libelle,` `),ai(2),Vb(e.nombre)}}function Dt(t,i){if(t&1&&(_a(0,`div`,13)(1,`p`,26),hC(2,`À valider`),Bd(),_a(3,`div`,27),MS(4,Et,5,5,`a`,28,_t),Bd()()),t&2){let e=US();ai(4),AS(e.elementsAValider())}}function Tt(t,i){t&1&&_b(0,`span`,37)}function At(t,i){if(t&1&&(_a(0,`a`,31)(1,`span`,32),_b(2,`ng-icon`,33),Bd(),_a(3,`span`,34)(4,`span`,35),hC(5),Bd(),_a(6,`span`,36),hC(7),kC(8,`depuis`),Bd()(),mi(9,Tt,1,0,`span`,37),Bd()),t&2){let e=i.$implicit,n=US();_n(`notif-non-lue`,!e.lue),Eb(`queryParams`,xC(11,vt,e.id)),ai(),La(`notif-icone ton-`+n.infos[e.type].ton),ai(),Eb(`name`,n.infos[e.type].icone),ai(3),Vb(e.titre),ai(2),Vb(PC(8,9,e.dateCreation)),ai(2),hi(e.lue?-1:9)}}function It(t,i){t&1&&(_a(0,`div`,15),_b(1,`ng-icon`,38),_a(2,`p`),hC(3,`Aucune notification pour le moment.`),Bd()())}function Ft(t,i){if(t&1&&(_a(0,`span`,46)(1,`span`,47),hC(2),Bd(),_a(3,`span`,48),hC(4),Bd()(),_b(5,`ng-icon`,49)),t&2){let e=US();ai(2),Hb(``,e.prenom,` `,e.nom),ai(2),Vb(e.profilNom??`Administrateur`)}}function Vt(t,i){if(t&1){let e=LS();_a(0,`button`,39),_b(1,`app-avatar`,40),mi(2,Ft,6,3),Bd(),_a(3,`mat-menu`,41,1)(5,`div`,10)(6,`p`,11),hC(7),Bd(),_a(8,`p`,12),hC(9),Bd()(),_b(10,`mat-divider`),_a(11,`a`,42),_b(12,`ng-icon`,43),_a(13,`span`),hC(14,`Mon profil`),Bd()(),_a(15,`button`,44),Cb(`click`,function(){sm(e);let r=US();return am(r.deconnecter())}),_b(16,`ng-icon`,45),_a(17,`span`),hC(18,`Se déconnecter`),Bd()()()}if(t&2){let e=i,n=ZS(4),r=US();Eb(`matMenuTriggerFor`,n),ai(),Eb(`prenom`,e.prenom)(`nom`,e.nom)(`photo`,e.photoProfil),ai(),hi(r.mobile()?-1:2),ai(5),Hb(``,e.prenom,` `,e.nom),ai(2),Vb(e.email??e.telephone)}}var zt=6e4;var me=class t{session=m(A);filAriane=m(m$2);aValider=m(m$3);notifications=m(u);confirmation=m(Z);infos=d;dernieres=jt$1([]);mobile=In(!1);menuOuvert=In(!1);ouvrirMenu=gU();constructor(){xD(zt).pipe(ls(0),U()).subscribe(()=>this.notifications.rafraichirNombre())}chargerDernieres(){this.notifications.rechercher({taille:5}).subscribe({next:i=>this.dernieres.set(i.contenu),error:()=>this.dernieres.set([])})}elementsAValider=ry(()=>{let i=this.aValider.compteurs();return i?[{libelle:`Recettes`,nombre:i.recettes,lien:`/recettes`,parametres:{statut:`EN_ATTENTE_VALIDATION`},icone:`lucideBookOpen`},{libelle:`Vidéos`,nombre:i.videos,lien:`/videos`,parametres:{},icone:`lucideClapperboard`},{libelle:`Défis`,nombre:i.defis,lien:`/defis`,parametres:{},icone:`lucideTrophy`},{libelle:`Chefs cuisiniers`,nombre:i.chefs,lien:`/utilisateurs`,parametres:{},icone:`lucideChefHat`},{libelle:`Producteurs`,nombre:i.producteurs,lien:`/utilisateurs`,parametres:{},icone:`lucideStore`}].filter(n=>n.nombre>0):[]});async deconnecter(){await this.confirmation.demander({titre:`Se déconnecter ?`,message:`Vous devrez saisir à nouveau vos identifiants pour revenir.`,texteConfirmer:`Se déconnecter`})&&this.session.deconnecter()}static ɵfac=function(e){return new(e||t)};static ɵcmp=Fe({type:t,selectors:[[`app-header`]],inputs:{mobile:[1,`mobile`],menuOuvert:[1,`menuOuvert`]},outputs:{ouvrirMenu:`ouvrirMenu`},decls:28,vars:6,consts:[[`menuNotifications`,`matMenu`],[`menuCompte`,`matMenu`],[1,`topbar`],[`matIconButton`,``,`type`,`button`,`aria-label`,`Ouvrir le menu`,`aria-controls`,`menu-principal`,1,`bouton-menu`],[`aria-label`,`Fil d'Ariane`,1,`fil-ariane`],[3,`masque-mobile`],[1,`actions`],[`matIconButton`,``,`routerLink`,`/notifications`,1,`bouton-cloche`],[`matIconButton`,``,`type`,`button`,1,`bouton-cloche`,3,`matMenuTriggerFor`],[`xPosition`,`before`,1,`gw-menu-notifications`],[`role`,`presentation`,1,`menu-entete`],[1,`menu-titre`],[1,`menu-sous-titre`],[`role`,`presentation`,1,`a-valider`],[`mat-menu-item`,``,`routerLink`,`/notifications`,1,`notif`,3,`notif-non-lue`,`queryParams`],[`role`,`presentation`,1,`menu-vide`],[`mat-menu-item`,``,`routerLink`,`/notifications`,1,`voir-tout`],[`name`,`lucideArrowRight`,`size`,`1rem`,`aria-hidden`,`true`],[`matIconButton`,``,`type`,`button`,`aria-label`,`Ouvrir le menu`,`aria-controls`,`menu-principal`,1,`bouton-menu`,3,`click`],[`name`,`lucideMenu`,`size`,`1.375rem`,`aria-hidden`,`true`],[`aria-current`,`page`],[3,`routerLink`],[`name`,`lucideChevronRight`,`size`,`0.875rem`,`aria-hidden`,`true`,1,`chevron`],[`name`,`lucideBell`,`size`,`1.25rem`,`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`pastille`,`gw-chiffres`],[`matIconButton`,``,`type`,`button`,1,`bouton-cloche`,3,`menuOpened`,`matMenuTriggerFor`],[1,`a-valider-titre`],[1,`a-valider-liste`],[1,`a-valider-puce`,3,`routerLink`,`queryParams`],[`size`,`0.875rem`,`aria-hidden`,`true`,3,`name`],[1,`gw-chiffres`],[`mat-menu-item`,``,`routerLink`,`/notifications`,1,`notif`,3,`queryParams`],[`aria-hidden`,`true`],[`size`,`1rem`,3,`name`],[1,`notif-textes`],[1,`notif-titre`],[1,`notif-date`],[`aria-label`,`Non lue`,1,`notif-point`],[`name`,`lucideCircleCheck`,`size`,`1.5rem`,`aria-hidden`,`true`],[`matButton`,``,`type`,`button`,`aria-label`,`Mon compte`,1,`bouton-compte`,3,`matMenuTriggerFor`],[`taille`,`sm`,1,`avatar-compte`,3,`prenom`,`nom`,`photo`],[`xPosition`,`before`],[`mat-menu-item`,``,`routerLink`,`/mon-profil`],[`name`,`lucideUserPen`,`size`,`1.125rem`,`aria-hidden`,`true`],[`mat-menu-item`,``,`type`,`button`,3,`click`],[`name`,`lucideLogOut`,`size`,`1.125rem`,`aria-hidden`,`true`],[1,`identite`],[1,`nom`],[1,`role`],[`name`,`lucideChevronDown`,`size`,`1rem`,`aria-hidden`,`true`]],template:function(e,n){if(e&1&&(_a(0,`header`,2),mi(1,wt,2,1,`button`,3),_a(2,`nav`,4)(3,`ol`),MS(4,yt,3,3,`li`,5,NS),Bd()(),_a(6,`div`,6),mi(7,Mt,3,2,`a`,7)(8,kt,3,3,`button`,8),_a(9,`mat-menu`,9,0)(11,`div`,10)(12,`p`,11),hC(13,`Notifications`),Bd(),_a(14,`p`,12),mi(15,Ot,1,2)(16,Pt,1,0),Bd()(),mi(17,Dt,6,0,`div`,13),_b(18,`mat-divider`),MS(19,At,10,13,`a`,14,bt,!1,It,4,0,`div`,15),_b(22,`mat-divider`),_a(23,`a`,16)(24,`span`),hC(25,`Voir toutes les notifications`),Bd(),_b(26,`ng-icon`,17),Bd()(),mi(27,Vt,19,8),Bd()()),e&2){let r;ai(),hi(n.mobile()?1:-1),ai(3),AS(n.filAriane.elements()),ai(3),hi(n.mobile()?7:8),ai(8),hi(n.notifications.nombreNonLues()>0?15:16),ai(2),hi(n.elementsAValider().length>0?17:-1),ai(2),AS(n.dernieres()),ai(8),hi((r=n.session.utilisateur())?27:-1,r)}},dependencies:[Nt$1,y4,_x,P,G,Dt$1,p,N4,w,f],styles:[`.topbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:var(--%NS%gw-espace-4);min-height:var(--%NS%gw-hauteur-topbar);padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-8);background:#ffffffeb;-webkit-backdrop-filter:saturate(1.2) blur(8px);backdrop-filter:saturate(1.2) blur(8px);border-bottom:1px solid var(--%NS%gw-bordure)}@media(min-width:768px)and (max-width:1199.98px){.topbar[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-6)}}@media(max-width:767.98px){.topbar[_ngcontent-%COMP%]{gap:var(--%NS%gw-espace-2);padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-3)}}.fil-ariane[_ngcontent-%COMP%]{flex:1;min-width:0}.fil-ariane[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-2);margin:0;padding:0;list-style:none}.fil-ariane[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-2);min-width:0}.fil-ariane[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);font-weight:500;text-decoration:none;white-space:nowrap}.fil-ariane[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--%NS%gw-action);text-decoration:underline}.fil-ariane[_ngcontent-%COMP%]   [aria-current=page][_ngcontent-%COMP%]{overflow:hidden;color:var(--%NS%gw-cacao);font-weight:600;text-overflow:ellipsis;white-space:nowrap}.fil-ariane[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-discret)}@media(max-width:767.98px){.fil-ariane[_ngcontent-%COMP%]   .masque-mobile[_ngcontent-%COMP%]{display:none}}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-2)}.bouton-cloche[_ngcontent-%COMP%]{position:relative;color:var(--%NS%gw-cacao)}.pastille[_ngcontent-%COMP%]{position:absolute;top:4px;right:2px;min-width:1.125rem;height:1.125rem;padding:0 4px;border:2px solid var(--%NS%gw-surface);border-radius:var(--%NS%gw-rayon-pilule);background:var(--%NS%gw-action);color:var(--%NS%gw-blanc);font-size:.625rem;font-weight:700;line-height:.875rem}.bouton-compte[_ngcontent-%COMP%]{--%NS%mat-button-text-label-text-color: var(--%NS%gw-cacao);height:48px;padding:0 var(--%NS%gw-espace-2);text-align:left}.avatar-compte[_ngcontent-%COMP%]{flex-shrink:0}.identite[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.25}.nom[_ngcontent-%COMP%]{font-weight:600}.role[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit);font-weight:400}.menu-entete[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-4)}.menu-titre[_ngcontent-%COMP%]{color:var(--%NS%gw-cacao);font-weight:600}.menu-sous-titre[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit)}.menu-libelle[_ngcontent-%COMP%]{flex:1}.menu-nombre[_ngcontent-%COMP%]{margin-left:var(--%NS%gw-espace-6);padding:0 var(--%NS%gw-espace-2);border-radius:var(--%NS%gw-rayon-pilule);background:var(--%NS%gw-terre-cuite-pale);color:var(--%NS%gw-karite);font-size:var(--%NS%gw-taille-petit);font-weight:700}.menu-vide[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-3);max-width:280px;padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-4) var(--%NS%gw-espace-4);color:var(--%NS%gw-succes)}.menu-vide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux)}.a-valider[_ngcontent-%COMP%]{padding:0 var(--%NS%gw-espace-4) var(--%NS%gw-espace-3)}.a-valider-titre[_ngcontent-%COMP%]{margin-bottom:var(--%NS%gw-espace-2);color:var(--%NS%gw-texte-doux);font-size:.75rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.a-valider-liste[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%gw-espace-2)}.a-valider-puce[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:var(--%NS%gw-rayon-pilule);background:var(--%NS%gw-terre-cuite-pale);color:var(--%NS%gw-karite);font-size:var(--%NS%gw-taille-petit);font-weight:600;text-decoration:none}.a-valider-puce[_ngcontent-%COMP%]:hover{background:var(--%NS%gw-terre-cuite);color:var(--%NS%gw-cacao-profond)}.a-valider-puce[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%gw-action);outline-offset:2px}.notif[_ngcontent-%COMP%]{height:auto;min-height:60px;padding-top:var(--%NS%gw-espace-2);padding-bottom:var(--%NS%gw-espace-2)}.notif-icone[_ngcontent-%COMP%]{display:inline-flex;flex-shrink:0;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%}.ton-terre[_ngcontent-%COMP%]{background:var(--%NS%gw-terre-cuite-pale);color:var(--%NS%gw-action)}.ton-karite[_ngcontent-%COMP%]{background:var(--%NS%gw-karite-pale);color:var(--%NS%gw-karite)}.ton-cacao[_ngcontent-%COMP%]{background:var(--%NS%gw-cacao);color:var(--%NS%gw-terre-cuite)}.ton-vert[_ngcontent-%COMP%]{background:var(--%NS%gw-succes-fond);color:var(--%NS%gw-succes)}.notif-textes[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;min-width:0;line-height:1.3}.notif-titre[_ngcontent-%COMP%]{display:-webkit-box;overflow:hidden;color:var(--%NS%gw-cacao);font-size:var(--%NS%gw-taille-petit);white-space:normal;-webkit-box-orient:vertical;-webkit-line-clamp:2}.notif-non-lue[_ngcontent-%COMP%]   .notif-titre[_ngcontent-%COMP%]{font-weight:700}.notif-date[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);font-size:.75rem}.notif-point[_ngcontent-%COMP%]{flex-shrink:0;width:8px;height:8px;border-radius:50%;background:var(--%NS%gw-terre-cuite)}.voir-tout[_ngcontent-%COMP%]{color:var(--%NS%gw-action);font-weight:600}`]})};var Bt=t=>({exact:t});var Rt=(t,i)=>i.titre;var Lt=(t,i)=>i.lien;function jt(t,i){t&1&&(_a(0,`span`,4)(1,`span`,9),hC(2,`Gwaso`),Bd(),_a(3,`span`,10),hC(4,`Administration`),Bd()())}function Ht(t,i){if(t&1){let e=LS();_a(0,`button`,11),Cb(`click`,function(){sm(e);let r=US();return am(r.fermer.emit())}),_b(1,`ng-icon`,12),Bd()}}function Gt(t,i){t&1&&_b(0,`hr`,13)}function Wt(t,i){if(t&1&&(_a(0,`p`,14),hC(1),Bd()),t&2){let e=US().$implicit;ai(),Vb(e.titre)}}function qt(t,i){if(t&1&&(_a(0,`span`,19)(1,`span`,20),hC(2),Bd(),_a(3,`span`,21),hC(4),Bd()()),t&2){let e=US().$implicit,n=US(2);_n(`compteur-point`,n.compact()),ai(2),Vb(n.compact()?``:n.nombre(e)),ai(2),zd(`, `,n.nombre(e),` à valider`)}}function Qt(t,i){if(t&1){let e=LS();_a(0,`li`)(1,`a`,15),Cb(`click`,function(){sm(e);let r=US(2);return am(r.fermer.emit())}),_b(2,`ng-icon`,16),_a(3,`span`,17),hC(4),Bd(),mi(5,qt,5,4,`span`,18),Bd()()}if(t&2){let e=i.$implicit,n=US(2);ai(),Eb(`routerLink`,e.lien)(`routerLinkActiveOptions`,xC(9,Bt,e.lien===`/`))(`matTooltip`,e.libelle+(n.nombre(e)?` · `+n.nombre(e)+` à valider`:``))(`matTooltipDisabled`,!n.compact()),ai(),Eb(`name`,e.icone),ai(),_n(`sr-only`,n.compact()),ai(),Vb(e.libelle),ai(),hi(n.nombre(e)>0?5:-1)}}function Ut(t,i){if(t&1&&(mi(0,Gt,1,0,`hr`,13)(1,Wt,2,1,`p`,14),_a(2,`ul`),MS(3,Qt,6,11,`li`,null,Lt),Bd()),t&2){let e=i.$implicit,n=US();hi(n.compact()?0:1),ai(3),AS(e.liens)}}function $t(t,i){if(t&1&&(_a(0,`span`,24)(1,`span`,25),hC(2),Bd(),_a(3,`span`,26),hC(4,`Mon profil`),Bd()(),_b(5,`ng-icon`,27)),t&2){let e=US();ai(2),Hb(``,e.prenom,` `,e.nom)}}function Zt(t,i){if(t&1){let e=LS();_a(0,`div`,7)(1,`a`,22),Cb(`click`,function(){sm(e);let r=US();return am(r.fermer.emit())}),_b(2,`app-avatar`,23),mi(3,$t,6,2),Bd()()}if(t&2){let e=i,n=US();ai(),Eb(`matTooltip`,n.compact()?`Mon profil`:``),Fa(`aria-label`,n.compact()?`Mon profil`:null),ai(),Eb(`prenom`,e.prenom)(`nom`,e.nom)(`photo`,e.photoProfil),ai(),hi(n.compact()?-1:3)}}function Jt(t,i){t&1&&(_a(0,`span`),hC(1,`Réduire le menu`),Bd())}function Kt(t,i){if(t&1){let e=LS();_a(0,`div`,8)(1,`button`,28),Cb(`click`,function(){sm(e);let r=US();return am(r.basculerCompact.emit())}),_b(2,`ng-icon`,29),mi(3,Jt,2,0,`span`),Bd()()}if(t&2){let e=US();ai(),Eb(`matTooltip`,e.compact()?`Agrandir le menu`:``),Fa(`aria-label`,e.compact()?`Agrandir le menu`:`Réduire le menu`)(`aria-expanded`,!e.compact()),ai(),Eb(`name`,e.compact()?`lucidePanelLeftOpen`:`lucidePanelLeftClose`),ai(),hi(e.compact()?-1:3)}}var pe=class t{aValider=m(m$3);session=m(A);compact=In(!1);mobile=In(!1);peutReduire=In(!1);fermer=gU();basculerCompact=gU();toutesLesSections=[{titre:`Pilotage`,liens:[{libelle:`Tableau de bord`,lien:`/`,icone:`lucideLayoutDashboard`}]},{titre:`Modération`,liens:[{libelle:`Recettes`,lien:`/recettes`,icone:`lucideBookOpen`,droit:`RECETTE_VALIDER`,compteur:`recettes`},{libelle:`Vidéos`,lien:`/videos`,icone:`lucideClapperboard`,droit:`VIDEO_MODERER`,compteur:`videos`},{libelle:`Défis`,lien:`/defis`,icone:`lucideTrophy`,droit:`DEFI_VALIDER`,compteur:`defis`}]},{titre:`Communauté`,liens:[{libelle:`Utilisateurs`,lien:`/utilisateurs`,icone:`lucideUsers`,droit:`UTILISATEUR_GERER`},{libelle:`Annuaire`,lien:`/annuaire`,icone:`lucideStore`}]},{titre:`Producteur`,liens:[{libelle:`Mon Catalogue`,lien:`/espace-producteur`,icone:`lucideShoppingBasket`,droit:`PRODUIT_GERER`}]},{titre:`Catalogue`,liens:[{libelle:`Catégories`,lien:`/categories`,icone:`lucideLayoutGrid`,droit:`CATALOGUE_GERER`},{libelle:`Ingrédients`,lien:`/ingredients`,icone:`lucideCarrot`,droit:`CATALOGUE_GERER`},{libelle:`Ustensiles`,lien:`/ustensiles`,icone:`lucideCookingPot`,droit:`CATALOGUE_GERER`}]},{titre:`Paramètres`,liens:[{libelle:`Profils et droits`,lien:`/profils`,icone:`lucideShieldCheck`,droit:`PROFIL_GERER`}]}];sections=ry(()=>(this.session.utilisateur(),this.toutesLesSections.map(i=>m$1(l({},i),{liens:i.liens.filter(e=>!e.droit||this.session.aLeDroit(e.droit))})).filter(i=>i.liens.length>0)));nombre(i){let e=this.aValider.compteurs();return i.compteur&&e?e[i.compteur]:0}static ɵfac=function(e){return new(e||t)};static ɵcmp=Fe({type:t,selectors:[[`app-sidebar`]],inputs:{compact:[1,`compact`],mobile:[1,`mobile`],peutReduire:[1,`peutReduire`]},outputs:{fermer:`fermer`,basculerCompact:`basculerCompact`},decls:11,vars:6,consts:[[1,`sidebar`],[1,`marque`],[`routerLink`,`/`,`aria-label`,`Gwaso Admin, tableau de bord`,1,`logo`,3,`click`],[`src`,`images/embleme-gwaso-clair.png`,`alt`,``,`width`,`44`,`height`,`44`,1,`embleme`],[1,`nom-marque`],[`matIconButton`,``,`type`,`button`,`aria-label`,`Fermer le menu`,1,`bouton-fermer`],[`aria-label`,`Menu principal`,1,`navigation`],[1,`compte-zone`],[1,`pied`],[1,`nom`],[1,`sous-nom`],[`matIconButton`,``,`type`,`button`,`aria-label`,`Fermer le menu`,1,`bouton-fermer`,3,`click`],[`name`,`lucideX`,`size`,`1.25rem`,`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`separateur`],[1,`titre-section`],[`routerLinkActive`,`actif`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`lien`,3,`click`,`routerLink`,`routerLinkActiveOptions`,`matTooltip`,`matTooltipDisabled`],[`size`,`1.25rem`,`aria-hidden`,`true`,1,`icone`,3,`name`],[1,`libelle`],[1,`compteur`,`gw-chiffres`,3,`compteur-point`],[1,`compteur`,`gw-chiffres`],[`aria-hidden`,`true`],[1,`sr-only`],[`routerLink`,`/mon-profil`,`routerLinkActive`,`actif`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`compte`,3,`click`,`matTooltip`],[`taille`,`sm`,3,`prenom`,`nom`,`photo`],[1,`compte-textes`],[1,`compte-nom`],[1,`compte-lien`],[`name`,`lucideChevronRight`,`size`,`1rem`,`aria-hidden`,`true`,1,`compte-fleche`],[`type`,`button`,`matTooltipPosition`,`right`,1,`bouton-reduire`,3,`click`,`matTooltip`],[`size`,`1.25rem`,`aria-hidden`,`true`,3,`name`]],template:function(e,n){if(e&1&&(_a(0,`div`,0)(1,`div`,1)(2,`a`,2),Cb(`click`,function(){return n.fermer.emit()}),_b(3,`img`,3),mi(4,jt,5,0,`span`,4),Bd(),mi(5,Ht,2,0,`button`,5),Bd(),_a(6,`nav`,6),MS(7,Ut,5,1,null,null,Rt),Bd(),mi(9,Zt,4,6,`div`,7),mi(10,Kt,4,5,`div`,8),Bd()),e&2){let r;_n(`compact`,n.compact()),ai(4),hi(n.compact()?-1:4),ai(),hi(n.mobile()?5:-1),ai(2),AS(n.sections()),ai(2),hi((r=n.session.utilisateur())?9:-1,r),ai(),hi(n.peutReduire()?10:-1)}},dependencies:[Nt$1,To,_x,at,N4,w],styles:[`.sidebar[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;height:100%;color:var(--%NS%gw-sidebar-texte);background:var(--%NS%gw-sidebar-fond);overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scrollbar-color:rgba(255,255,255,.25) transparent;scrollbar-width:thin}.sidebar[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus-visible{outline-color:var(--%NS%gw-terre-cuite)}.marque[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;min-height:var(--%NS%gw-hauteur-topbar);padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-4) var(--%NS%gw-espace-3) var(--%NS%gw-espace-5)}.logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-3);color:inherit;text-decoration:none;border-radius:var(--%NS%gw-rayon)}.embleme[_ngcontent-%COMP%]{width:44px;height:44px;object-fit:contain}.nom-marque[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.15}.nom[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;letter-spacing:.01em}.sous-nom[_ngcontent-%COMP%]{font-size:var(--%NS%gw-taille-petit);color:var(--%NS%gw-sidebar-texte-doux)}.bouton-fermer[_ngcontent-%COMP%]{color:inherit}.navigation[_ngcontent-%COMP%]{position:relative;z-index:1;flex:1 0 auto;padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-3) var(--%NS%gw-espace-6)}.titre-section[_ngcontent-%COMP%]{margin:var(--%NS%gw-espace-5) 0 var(--%NS%gw-espace-2);padding:0 var(--%NS%gw-espace-3);font-size:.6875rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--%NS%gw-sidebar-texte-doux)}.separateur[_ngcontent-%COMP%]{margin:var(--%NS%gw-espace-3) var(--%NS%gw-espace-3);border:0;border-top:1px solid rgba(255,255,255,.1)}ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.lien[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:var(--%NS%gw-espace-3);min-height:44px;padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-3);border-radius:var(--%NS%gw-rayon);color:var(--%NS%gw-sidebar-texte);font-weight:500;text-decoration:none;transition:background-color var(--%NS%gw-duree) var(--%NS%gw-courbe),color var(--%NS%gw-duree) var(--%NS%gw-courbe)}.lien[_ngcontent-%COMP%]   .icone[_ngcontent-%COMP%]{color:var(--%NS%gw-sidebar-texte-doux);transition:color var(--%NS%gw-duree) var(--%NS%gw-courbe)}.lien[_ngcontent-%COMP%]:hover{background:var(--%NS%gw-sidebar-survol)}.lien[_ngcontent-%COMP%]:hover   .icone[_ngcontent-%COMP%]{color:var(--%NS%gw-sidebar-texte)}.lien.actif[_ngcontent-%COMP%]{background:var(--%NS%gw-sidebar-actif);color:var(--%NS%gw-blanc);font-weight:600}.lien.actif[_ngcontent-%COMP%]   .icone[_ngcontent-%COMP%]{color:var(--%NS%gw-terre-cuite)}.lien.actif[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-12px;top:8px;bottom:8px;width:4px;border-radius:0 4px 4px 0;background:var(--%NS%gw-terre-cuite)}.libelle[_ngcontent-%COMP%]{flex:1;white-space:nowrap}.compteur[_ngcontent-%COMP%]{min-width:1.5rem;padding:0 var(--%NS%gw-espace-2);border-radius:var(--%NS%gw-rayon-pilule);background:var(--%NS%gw-terre-cuite);color:var(--%NS%gw-cacao-profond);font-size:var(--%NS%gw-taille-petit);font-weight:700;line-height:1.5rem;text-align:center}.compteur-point[_ngcontent-%COMP%]{position:absolute;top:8px;right:14px;min-width:0;width:10px;height:10px;padding:0;border:2px solid var(--%NS%gw-sidebar-fond)}.compact[_ngcontent-%COMP%]   .marque[_ngcontent-%COMP%]{justify-content:center;padding:var(--%NS%gw-espace-3) 0}.compact[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-3)}.compact[_ngcontent-%COMP%]   .lien[_ngcontent-%COMP%]{justify-content:center;padding:var(--%NS%gw-espace-2)}.pied[_ngcontent-%COMP%]{position:relative;z-index:1;padding:var(--%NS%gw-espace-3);border-top:1px solid rgba(255,255,255,.08)}.bouton-reduire[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:var(--%NS%gw-espace-3);width:100%;min-height:44px;padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-3);border:0;border-radius:var(--%NS%gw-rayon);background:transparent;color:var(--%NS%gw-sidebar-texte-doux);font:inherit;font-weight:500;cursor:pointer;transition:background-color var(--%NS%gw-duree) var(--%NS%gw-courbe),color var(--%NS%gw-duree) var(--%NS%gw-courbe)}.bouton-reduire[_ngcontent-%COMP%]:hover{background:var(--%NS%gw-sidebar-survol);color:var(--%NS%gw-sidebar-texte)}.sidebar[_ngcontent-%COMP%]:not(.compact)   .bouton-reduire[_ngcontent-%COMP%]{justify-content:flex-start}.compte-zone[_ngcontent-%COMP%]{position:relative;z-index:1;padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-3) 0;border-top:1px solid rgba(255,255,255,.08)}.compte[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-3);min-height:52px;padding:var(--%NS%gw-espace-2);border-radius:var(--%NS%gw-rayon);color:var(--%NS%gw-sidebar-texte);text-decoration:none;transition:background-color var(--%NS%gw-duree) var(--%NS%gw-courbe)}.compte[_ngcontent-%COMP%]:hover, .compte.actif[_ngcontent-%COMP%]{background:var(--%NS%gw-sidebar-survol)}.compte[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%gw-terre-cuite);outline-offset:2px}.sidebar.compact[_ngcontent-%COMP%]   .compte[_ngcontent-%COMP%]{justify-content:center}.compte[_ngcontent-%COMP%]   app-avatar[_ngcontent-%COMP%]{border-radius:50%;box-shadow:0 0 0 2px #ffffff38}.compte-textes[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;min-width:0}.compte-nom[_ngcontent-%COMP%]{overflow:hidden;font-weight:600;text-overflow:ellipsis;white-space:nowrap}.compte-lien[_ngcontent-%COMP%]{color:var(--%NS%gw-sidebar-texte-doux);font-size:var(--%NS%gw-taille-petit)}.compte-fleche[_ngcontent-%COMP%]{flex-shrink:0;color:var(--%NS%gw-sidebar-texte-doux)}.marque[_ngcontent-%COMP%], .compte-zone[_ngcontent-%COMP%], .pied[_ngcontent-%COMP%]{flex-shrink:0}@media(max-height:640px){.marque[_ngcontent-%COMP%]{min-height:56px;padding-block:var(--%NS%gw-espace-2)}.titre-section[_ngcontent-%COMP%]{margin:var(--%NS%gw-espace-3) 0 var(--%NS%gw-espace-1)}.lien[_ngcontent-%COMP%]{min-height:40px}}`]})};var ut=`gw_menu_compact`;var gt=class t{ecran=m(b$1);aValider=m(m$3);session=m(A);authService=m(a);prefereCompact=jt$1(this.lirePreference());menuMobileOuvert=jt$1(!1);compact=ry(()=>this.ecran.tablette()||this.ecran.bureau()&&this.prefereCompact());constructor(){Hr(()=>{this.ecran.mobile()||this.menuMobileOuvert.set(!1)})}ngOnInit(){this.aValider.rafraichir(),this.authService.moi().subscribe({next:i=>{this.session.mettreAJourUtilisateur(i),this.session.peutOuvrirLeDashboard()||this.session.deconnecter()},error:()=>{}})}basculerCompact(){let i=!this.prefereCompact();this.prefereCompact.set(i);try{localStorage.setItem(ut,String(i))}catch{}}ouvrirMenuMobile(){this.menuMobileOuvert.set(!0)}fermerMenuMobile(){this.menuMobileOuvert.set(!1)}lirePreference(){try{return localStorage.getItem(ut)===`true`}catch{return!1}}static ɵfac=function(e){return new(e||t)};static ɵcmp=Fe({type:t,selectors:[[`app-admin-layout`]],decls:9,vars:11,consts:[[`href`,`#contenu`,1,`lien-evitement`],[`autosize`,``,1,`conteneur`],[`id`,`menu-principal`,1,`menu`,3,`closed`,`mode`,`opened`,`disableClose`,`fixedInViewport`],[3,`fermer`,`basculerCompact`,`compact`,`mobile`,`peutReduire`],[1,`zone-principale`],[3,`ouvrirMenu`,`mobile`,`menuOuvert`],[`id`,`contenu`,`tabindex`,`-1`,1,`contenu`]],template:function(e,n){e&1&&(_a(0,`a`,0),hC(1,`Aller au contenu`),Bd(),_a(2,`mat-sidenav-container`,1)(3,`mat-sidenav`,2),Cb(`closed`,function(){return n.fermerMenuMobile()}),_a(4,`app-sidebar`,3),Cb(`fermer`,function(){return n.fermerMenuMobile()})(`basculerCompact`,function(){return n.basculerCompact()}),Bd()(),_a(5,`mat-sidenav-content`,4)(6,`app-header`,5),Cb(`ouvrirMenu`,function(){return n.ouvrirMenuMobile()}),Bd(),_a(7,`main`,6),_b(8,`router-outlet`),Bd()()()),e&2&&(ai(3),_n(`menu-compact`,n.compact()),Eb(`mode`,n.ecran.mobile()?`over`:`side`)(`opened`,!n.ecran.mobile()||n.menuMobileOuvert())(`disableClose`,!n.ecran.mobile())(`fixedInViewport`,n.ecran.mobile()),ai(),Eb(`compact`,n.compact())(`mobile`,n.ecran.mobile())(`peutReduire`,n.ecran.bureau()),ai(2),Eb(`mobile`,n.ecran.mobile())(`menuOuvert`,n.menuMobileOuvert()))},dependencies:[pr,mt,ke,le,pe,me],styles:[`.conteneur[_ngcontent-%COMP%]{height:100vh;height:100dvh;background:var(--%NS%gw-fond)}.menu[_ngcontent-%COMP%]{width:var(--%NS%gw-largeur-sidebar);border:0;background:var(--%NS%gw-sidebar-fond);transition:width var(--%NS%gw-duree-lente) var(--%NS%gw-courbe)}.menu-compact[_ngcontent-%COMP%]{width:var(--%NS%gw-largeur-sidebar-compacte)}.zone-principale[_ngcontent-%COMP%]{display:flex;flex-direction:column}.contenu[_ngcontent-%COMP%]{flex:1;width:100%;max-width:var(--%NS%gw-largeur-contenu);margin:0 auto;padding:var(--%NS%gw-espace-8) var(--%NS%gw-espace-8) var(--%NS%gw-espace-12)}.contenu[_ngcontent-%COMP%]:focus{outline:none}@media(min-width:768px)and (max-width:1199.98px){.contenu[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-6)}}@media(max-width:767.98px){.contenu[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-5) var(--%NS%gw-espace-4) var(--%NS%gw-espace-10)}}@media(max-width:767.98px){.menu[_ngcontent-%COMP%]{width:min(var(--%NS%gw-largeur-sidebar),86vw)}}.lien-evitement[_ngcontent-%COMP%]{position:fixed;left:var(--%NS%gw-espace-4);top:-100px;z-index:2000;padding:var(--%NS%gw-espace-2) var(--%NS%gw-espace-4);border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-action);color:var(--%NS%gw-blanc);font-weight:600}.lien-evitement[_ngcontent-%COMP%]:focus{top:var(--%NS%gw-espace-4)}`]})};export{gt as AdminLayout};