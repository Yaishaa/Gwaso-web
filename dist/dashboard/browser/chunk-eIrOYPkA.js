import{$ as IC,$r as ry,An as b,B as Fc,Cn as _b,Dn as ai,F as En,I as Er,In as bw,Ir as oe,Jr as qb,Ln as by,Lr as og,Mt as Pa,N as Eb,O as De,On as am,Or as ls,Pi as zd,Q as Hr,Rn as cD,Sn as _a,St as NC,Ti as y4,Tn as _n,Tr as lD,Ur as po,Ut as Re,V as Fe,Zr as ro,_t as MS,cn as Vb,d as AS,dr as hx,dt as Lc,ei as sm,gi as vw,gn as ZS,jr as mi,jt as PC,k as Dn,kr as m,lt as LS,mi as vn,nt as In,o as $t,or as hC,r as $a,st as L,ti as ss,tn as US,ui as us,ur as hi,ut as La,v as Bd,vn as _C,vr as jd,x as Cb,xr as kC,xt as N4,yi as xC,yr as jt,z as Fa,zn as ce}from"./chunk-D3sqZ3gc.js";import{D as co,H as po$1,I as lo,J as xe,N as go,P as ho,_ as Ri,a as Dr,j as fr,l as It$1,u as Ji,v as Sr,y as Wn}from"./chunk-EzVJzvVV.js";import"./chunk-DGzgG88p.js";import{s as yt$1}from"./chunk-CJGzXzJM.js";import{c as ht$1,d as ut$1,f as vt$1,s as de,u as se}from"./chunk-DilUS_UY.js";import{a as le,n as Nt$1}from"./main-P2W37I33.js";import{t as Ne}from"./chunk-GklgKXRN.js";import{n as rt,t as it}from"./chunk-Cn6qpDcR.js";import{r as U,t as F}from"./chunk-D2Qu9Utn.js";import{t as o}from"./chunk-BICRZYee.js";import{t as x}from"./chunk-D_SrxRoO.js";import{t as C}from"./chunk-D5OizD5y.js";import{t as n}from"./chunk-V32-ISO2.js";import"./chunk-D2KceXXY.js";import{t as m$1}from"./chunk-56IYJR6m.js";import{t as m$2}from"./chunk-BZyeJVeC.js";import{t as u}from"./chunk-D43G7KHS.js";import{i as h,n as b$1,t as R}from"./chunk-AqnVqeY3.js";import{n as _t$1,t as Ve}from"./chunk-D_OBtN-X.js";var ut=new b(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var ot=(()=>{class n{_elementRef=m(ce);_ngZone=m(L);_changeDetectorRef=m(by);_renderer=m($t);_cleanupTransitionEnd;constructor(){let e=hx(),i=m(ut,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=at(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=at(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Re;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){function e(i,o){i&1&&En(0,`div`,2)}return Fe({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(o,m){o&2&&(Fa(`aria-valuenow`,m._isIndeterminate()?null:m.value)(`mode`,m.mode),La(`mat-`+m.color),_n(`_mat-animation-noopable`,m._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!m._isNoopAnimation)(`mdc-linear-progress--indeterminate`,m._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,$a],bufferValue:[2,`bufferValue`,`bufferValue`,$a],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(o,m){o&1&&(vn(0,`div`,0),En(1,`div`,1),mi(2,e,1,0,`div`,2),Dn(),vn(3,`div`,3),En(4,`span`,4),Dn(),vn(5,`div`,5),En(6,`span`,4),Dn()),o&2&&(ai(),Pa(`flex-basis`,m._getBufferBarFlexBasis()),ai(),hi(m.mode===`buffer`?2:-1),ai(),Pa(`transform`,m._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return n})();function at(n,t=0,e=100){return Math.max(t,Math.min(e,n))}var pt=n=>[`/videos`,n];var gt=()=>[`/videos`];var ft=(n,t)=>t.id;function _t(n,t){n&1&&_b(0,`div`,4)}function bt(n,t){n&1&&(_a(0,`div`,5)(1,`app-empty-state`,6)(2,`a`,7),hC(3,`Voir toutes les vidéos`),Bd()()())}function vt(n,t){if(n&1&&(_a(0,`span`,38),hC(1),Bd()),n&2){let e=US(3);ai(),Vb(e.duree())}}function ht(n,t){if(n&1&&(_a(0,`span`,38),hC(1),Bd()),n&2){let e=US(3);ai(),Vb(e.taille())}}function yt(n,t){n&1&&_b(0,`img`,42),n&2&&Eb(`src`,t,og)}function xt(n,t){n&1&&_b(0,`ng-icon`,43)}function Ct(n,t){n&1&&(_a(0,`span`,46),hC(1,`prise automatiquement`),Bd())}function St(n,t){if(n&1){let e=LS();_a(0,`button`,39),Cb(`click`,function(){sm(e);let o=US(3);return am(o.retirerMiniature())}),hC(1,`Retirer`),Bd()}if(n&2){let e=US(3);Eb(`disabled`,e.enCours())}}function wt(n,t){if(n&1){let e=LS();_a(0,`div`,33)(1,`video`,34,2),Cb(`loadedmetadata`,function(){sm(e);let o=ZS(2),m=US(2);return am(m.lireDuree(o))}),Bd()(),_a(3,`div`,35),_b(4,`ng-icon`,36),_a(5,`span`,37),hC(6),Bd(),mi(7,vt,2,1,`span`,38),mi(8,ht,2,1,`span`,38),_a(9,`button`,39),Cb(`click`,function(){sm(e),US();let o=ZS(9);return am(o.click())}),hC(10,`Remplacer`),Bd()(),_a(11,`section`,40)(12,`div`,41),mi(13,yt,1,1,`img`,42),kC(14,`fichier`),jd(15,xt,1,0,`ng-icon`,43),Bd(),_a(16,`div`,44)(17,`h2`,45),hC(18,` Miniature `),mi(19,Ct,2,0,`span`,46),Bd(),_a(20,`p`),hC(21,` L'image affichée avant la lecture. Pour la changer : mettez la vidéo sur la plus belle image et capturez-la, ou choisissez une photo. `),Bd(),_a(22,`div`,47)(23,`button`,48),Cb(`click`,function(){sm(e);let o=ZS(2),m=US(2);return am(m.capturer(o))}),_b(24,`ng-icon`,49),hC(25,` Capturer cette image `),Bd(),_a(26,`button`,39),Cb(`click`,function(){sm(e),US();let o=ZS(11);return am(o.click())}),hC(27,`Choisir une photo`),Bd(),mi(28,St,2,1,`button`,50),Bd()()()}if(n&2){let e;US();let i=IC(3),o=US();ai(),Eb(`src`,i,og),ai(5),Vb(o.fichier()?.name??`Vidéo enregistrée`),ai(),hi(o.duree()?7:-1),ai(),hi(o.taille()?8:-1),ai(),Eb(`disabled`,o.enCours()),ai(4),hi((e=o.apercuMiniature()??PC(14,10,o.video()?.miniatureUrl))?13:15,e),ai(6),hi(o.miniatureAuto()?19:-1),ai(4),Eb(`disabled`,o.enCours()),ai(3),Eb(`disabled`,o.enCours()),ai(2),hi(o.apercuMiniature()?28:-1)}}function Et(n,t){if(n&1){let e=LS();_a(0,`button`,51),Cb(`click`,function(){sm(e),US();let o=ZS(9);return am(o.click())})(`dragover`,function(o){sm(e);let m=US(2);return o.preventDefault(),am(m.survol.set(!0))})(`dragleave`,function(){sm(e);let o=US(2);return am(o.survol.set(!1))})(`drop`,function(o){sm(e);let m=US(2);return am(m.deposer(o))}),_a(1,`span`,52),_b(2,`ng-icon`,53),Bd(),_a(3,`span`,54),hC(4,`Glissez votre vidéo ici`),Bd(),_a(5,`span`,55),hC(6,`ou cliquez pour la choisir`),Bd(),_a(7,`span`,56),hC(8),Bd()()}if(n&2){let e=US(2);_n(`depot-survol`,e.survol()),ai(8),zd(`MP4, WebM, MOV ou MKV · `,e.tailleMax,` Mo maximum · format vertical conseillé`)}}function Mt(n,t){if(n&1&&(_a(0,`p`,12),hC(1),Bd()),n&2){let e=US(2);ai(),Vb(e.erreurFichier())}}function Nt(n,t){if(n&1&&(_a(0,`p`,15),hC(1),Bd()),n&2){let e=US(2);ai(),Vb(e.erreur())}}function Pt(n,t){if(n&1&&(_a(0,`mat-option`,60),hC(1),Bd()),n&2){let e=t.$implicit;Eb(`value`,e),ai(),Vb(e.nom)}}function Vt(n,t){n&1&&(_a(0,`mat-option`,61),hC(1,`Aucune recette publiée ne correspond`),Bd())}function kt(n,t){if(n&1&&(_a(0,`mat-form-field`,29)(1,`mat-label`),hC(2,`Recette montrée`),Bd(),_b(3,`ng-icon`,57),_a(4,`input`,58),bw(),Bd(),_a(5,`mat-autocomplete`,59,3),MS(7,Pt,2,2,`mat-option`,60,ft,!1,Vt,2,0,`mat-option`,61),Bd(),_a(10,`mat-hint`),hC(11,`La vidéo apparaîtra aussi sur la fiche de la recette`),Bd()()),n&2){let e=ZS(6),i=US(2);ai(4),Eb(`formControl`,i.champRecette)(`matAutocomplete`,e),vw(),ai(),Eb(`displayWith`,i.nomRecette),ai(2),AS(i.suggestionsRecettes())}}function Tt(n,t){if(n&1&&(_a(0,`span`,38),hC(1),Bd()),n&2){let e=US(3);ai(),zd(``,e.progression(),` %`)}}function Ot(n,t){if(n&1&&_b(0,`mat-progress-bar`,63),n&2){let e=US(3);Eb(`value`,e.progression())}}function Ft(n,t){n&1&&_b(0,`mat-progress-bar`,64)}function zt(n,t){if(n&1&&(_a(0,`ol`,62)(1,`li`),hC(2,`Informations`),Bd(),_a(3,`li`),hC(4,` Envoi de la vidéo `),mi(5,Tt,2,1,`span`,38),Bd(),_a(6,`li`),hC(7,`Miniature`),Bd(),_a(8,`li`),hC(9,`Mise en ligne`),Bd()(),mi(10,Ot,1,1,`mat-progress-bar`,63)(11,Ft,1,0,`mat-progress-bar`,64),_a(12,`p`,65),hC(13,`Gardez cette page ouverte pendant l'envoi.`),Bd()),n&2){let e=US(2);ai(),_n(`faite`,e.etape()!==`infos`)(`active`,e.etape()===`infos`),ai(2),_n(`faite`,e.etape()===`miniature`||e.etape()===`publication`)(`active`,e.etape()===`fichier`),ai(2),hi(e.etape()===`fichier`?5:-1),ai(),_n(`faite`,e.etape()===`publication`)(`active`,e.etape()===`miniature`),ai(2),_n(`active`,e.etape()===`publication`),ai(2),hi(e.etape()===`fichier`?10:11)}}function Rt(n,t){n&1&&hC(0,` Cette vidéo est en ligne : vos changements seront visibles tout de suite. `)}function It(n,t){n&1&&hC(0,` Publiée par l'administration, la vidéo est en ligne immédiatement. Vous pouvez aussi la garder en brouillon. `)}function Bt(n,t){if(n&1){let e=LS();_a(0,`button`,70),Cb(`click`,function(){sm(e);let o=US(3);return am(o.enregistrer(!1))}),hC(1,`Enregistrer en brouillon`),Bd()}}function At(n,t){if(n&1&&(_a(0,`p`,65),mi(1,Rt,1,0)(2,It,1,0),Bd(),_a(3,`div`,66)(4,`button`,67),_b(5,`ng-icon`,32),hC(6),Bd(),mi(7,Bt,2,0,`button`,68),_a(8,`a`,69),hC(9,`Annuler`),Bd()()),n&2){let e=US(2);ai(),hi(e.video()?.statut===`PUBLIEE`?1:2),ai(5),zd(` `,e.video()?.statut===`PUBLIEE`?`Enregistrer`:`Publier maintenant`,` `),ai(),hi(e.video()?.statut!==`PUBLIEE`?7:-1),ai(),Eb(`routerLink`,e.video()?xC(4,pt,e.video().id):NC(6,gt))}}function Xt(n,t){if(n&1){let e=LS();_b(0,`app-page-header`,8),_a(1,`div`,9)(2,`div`,10),qb(3),kC(4,`fichier`),mi(5,wt,29,12)(6,Et,9,3,`button`,11),mi(7,Mt,2,1,`p`,12),_a(8,`input`,13,0),Cb(`change`,function(o){sm(e);let m=US();return am(m.choisirFichier(o))}),Bd(),_a(10,`input`,13,1),Cb(`change`,function(o){sm(e);let m=US();return am(m.choisirMiniature(o))}),Bd()(),_a(12,`form`,14),Cb(`ngSubmit`,function(){sm(e);let o=US();return am(o.enregistrer(!0))}),mi(13,Nt,2,1,`p`,15),_a(14,`section`,16)(15,`h2`,17),hC(16,`Informations`),Bd(),_a(17,`mat-form-field`,18)(18,`mat-label`),hC(19,`Titre`),Bd(),_a(20,`input`,19),bw(),Bd(),_a(21,`mat-error`),hC(22,`Le titre est obligatoire.`),Bd()(),_a(23,`mat-form-field`,18)(24,`mat-label`),hC(25,`Description`),Bd(),_a(26,`textarea`,20),bw(),Bd(),_a(27,`mat-hint`),hC(28,`Facultatif · ce que l'on apprend dans la vidéo`),Bd(),_a(29,`mat-hint`,21),hC(30),Bd()(),_a(31,`p`,22),hC(32,`De quoi parle la vidéo ?`),Bd(),_a(33,`mat-button-toggle-group`,23),bw(),_a(34,`mat-button-toggle`,24),_b(35,`ng-icon`,25),hC(36,` Recette`),Bd(),_a(37,`mat-button-toggle`,26),hC(38,`Astuce`),Bd(),_a(39,`mat-button-toggle`,27),hC(40,`Technique`),Bd(),_a(41,`mat-button-toggle`,28),hC(42,`Général`),Bd()(),mi(43,kt,12,4,`mat-form-field`,29),Bd(),_a(44,`section`,30)(45,`h2`,31),_b(46,`ng-icon`,32),hC(47,` Publication `),Bd(),mi(48,zt,14,16)(49,At,10,7),Bd()()()}if(n&2){let e=US();Eb(`titre`,e.estNouvelle()?`Publier une vidéo`:`Modifier la vidéo`)(`description`,e.estNouvelle()?`Une vidéo publiée par l’administration est en ligne tout de suite, sans validation.`:`Les changements sont visibles dès l’enregistrement.`),ai(3);let i=_C(e.apercu()??PC(4,11,e.video()?.videoUrl));ai(2),hi(i?5:6),ai(2),hi(e.erreurFichier()?7:-1),ai(),Eb(`accept`,e.formatsVideo),ai(2),Eb(`accept`,e.formatsImage),ai(2),Eb(`formGroup`,e.formulaire),ai(),hi(e.erreur()?13:-1),ai(7),vw(),ai(6),vw(),ai(4),zd(``,e.longueurDescription(),` / 3000`),ai(3),vw(),ai(10),hi(e.sujet()===`RECETTE`?43:-1),ai(5),hi(e.enCours()?48:49)}}var st=[`video/mp4`,`video/webm`,`video/quicktime`,`video/x-matroska`];var lt=[`image/jpeg`,`image/png`,`image/webp`];var $=200;var ct=class n$1{videoService=m(R);recetteService=m(u);notification=m(Ri);aValider=m(m$1);filAriane=m(m$2);router=m(le);id=In();tailleMax=$;formatsVideo=st.join(`,`);formatsImage=lt.join(`,`);video=jt(null);estNouvelle=ry(()=>!this.id());chargement=jt(!1);introuvable=jt(!1);formulaire=m(po$1).nonNullable.group({titre:[``,[It$1.required,It$1.maxLength(150)]],description:[``,It$1.maxLength(3e3)],sujet:[`GENERAL`]});sujet=F(this.formulaire.controls.sujet.valueChanges.pipe(ls(this.formulaire.controls.sujet.value)),{requireSync:!0});longueurDescription=F(this.formulaire.controls.description.valueChanges.pipe(oe(t=>t.length)),{initialValue:0});champRecette=new xe(``,{nonNullable:!0});suggestionsRecettes=F(this.champRecette.valueChanges.pipe(ls(``),oe(t=>typeof t==`string`?t.trim():null),Er(250),ss(),Lc(t=>t===null?po([]):this.recetteService.rechercher({statut:`PUBLIEE`,recherche:t||void 0,taille:8}).pipe(oe(e=>e.contenu.map(i=>({id:i.id,nom:i.nom}))),Fc(()=>po([])))),U()),{initialValue:[]});nomRecette=t=>typeof t==`string`?t:t?.nom??``;fichier=jt(null);apercu=jt(null);dureeSecondes=jt(null);survol=jt(!1);erreurFichier=jt(``);duree=ry(()=>b$1(this.dureeSecondes()));taille=ry(()=>h(this.fichier()?.size??null));miniature=jt(null);apercuMiniature=jt(null);miniatureAuto=jt(!1);enCours=jt(!1);etape=jt(null);progression=jt(0);erreur=jt(``);constructor(){Hr(()=>{let t=this.id();t&&ro(()=>this.charger(t))}),m(De).onDestroy(()=>{this.liberer(this.apercu()),this.liberer(this.apercuMiniature())})}charger(t){this.chargement.set(!0),this.videoService.getDetail(t).subscribe({next:({video:e})=>{this.video.set(e),this.dureeSecondes.set(e.dureeSecondes),this.formulaire.reset({titre:e.titre,description:e.description??``,sujet:e.recetteId?`RECETTE`:e.type}),e.recetteId&&this.champRecette.setValue({id:e.recetteId,nom:e.recetteNom??``}),this.filAriane.definirPageCourante(`Modifier \xAB ${e.titre} \xBB`),this.chargement.set(!1)},error:e=>{this.introuvable.set(e.status===404),this.chargement.set(!1)}})}choisirFichier(t){let e=t.target,i=e.files?.[0];e.value=``,i&&this.prendreFichier(i)}deposer(t){t.preventDefault(),this.survol.set(!1);let e=t.dataTransfer?.files?.[0];e&&this.prendreFichier(e)}prendreFichier(t){if(!st.includes(t.type)){this.erreurFichier.set(`Format non accepté. Choisissez une vidéo MP4, WebM, MOV ou MKV.`);return}if(t.size>$*1024*1024){this.erreurFichier.set(`Vid\xE9o trop lourde (${Math.round(t.size/1024/1024)} Mo). Maximum : ${$} Mo.`);return}if(this.erreurFichier.set(``),this.liberer(this.apercu()),this.fichier.set(t),this.apercu.set(URL.createObjectURL(t)),this.dureeSecondes.set(null),!this.formulaire.controls.titre.value){let e=t.name.replace(/\.[^.]+$/,``).replace(/[-_]+/g,` `).trim();this.formulaire.controls.titre.setValue(e.charAt(0).toUpperCase()+e.slice(1))}}lireDuree(t){Number.isFinite(t.duration)&&this.dureeSecondes.set(Math.round(t.duration)),this.fichier()&&!this.miniature()&&!this.video()?.miniatureUrl&&this.genererMiniature(t)}genererMiniature(t){let e=Math.min(1,(t.duration||0)/2);t.addEventListener(`seeked`,()=>{this.dessiner(t,i=>{this.prendreMiniature(i),this.miniatureAuto.set(!0)}),t.currentTime=0},{once:!0}),t.currentTime=e}choisirMiniature(t){let e=t.target,i=e.files?.[0];if(e.value=``,!!i){if(!lt.includes(i.type)||i.size>5242880){this.notification.avertissement(`Image JPG, PNG ou WebP de 5 Mo maximum.`);return}this.prendreMiniature(i),this.miniatureAuto.set(!1)}}capturer(t){if(!t.videoWidth){this.notification.avertissement(`Lancez ou avancez la vidéo, puis réessayez.`);return}this.dessiner(t,i=>{this.prendreMiniature(i),this.miniatureAuto.set(!1),this.notification.info(`Cette image servira de miniature.`)})||this.notification.avertissement(`Impossible de capturer cette vidéo. Choisissez plutôt une photo.`)}dessiner(t,e){if(!t.videoWidth)return!1;let i=document.createElement(`canvas`);i.width=t.videoWidth,i.height=t.videoHeight;try{return i.getContext(`2d`)?.drawImage(t,0,0),i.toBlob(o=>o&&e(new File([o],`miniature.jpg`,{type:`image/jpeg`})),`image/jpeg`,.88),!0}catch{return!1}}retirerMiniature(){this.miniatureAuto.set(!1),this.liberer(this.apercuMiniature()),this.miniature.set(null),this.apercuMiniature.set(null)}prendreMiniature(t){this.liberer(this.apercuMiniature()),this.miniature.set(t),this.apercuMiniature.set(URL.createObjectURL(t))}async enregistrer(t){let e=this.video();if(this.formulaire.invalid){this.formulaire.markAllAsTouched(),this.erreur.set(`Donnez un titre à la vidéo.`);return}if(!e&&!this.fichier()){this.erreur.set(`Choisissez le fichier vidéo.`);return}let i=this.formulaire.getRawValue(),o$1=this.champRecette.value;if(i.sujet===`RECETTE`&&typeof o$1!=`object`){this.erreur.set(`Choisissez la recette dans la liste proposée.`);return}let m={titre:i.titre.trim(),description:i.description.trim()||null,recetteId:i.sujet===`RECETTE`?o$1.id:null,type:i.sujet===`RECETTE`?null:i.sujet,dureeSecondes:this.dureeSecondes()};this.enCours.set(!0),this.erreur.set(``);let d=e;try{this.etape.set(`infos`),d=await lD(e?this.videoService.modifier(e.id,m):this.videoService.creer(m)),this.video.set(d);let E=this.fichier();if(E){this.etape.set(`fichier`),this.progression.set(0);let mt=d.id;await cD(this.videoService.envoyerFichier(mt,E).pipe(us(A=>{A.etape===`progression`?this.progression.set(A.pourcentage):d=A.video}))),this.fichier.set(null)}let W=this.miniature();W&&d&&(this.etape.set(`miniature`),d=await lD(this.videoService.envoyerMiniature(d.id,W)),this.retirerMiniature()),t&&d&&(d.statut===`BROUILLON`||d.statut===`REJETEE`)&&(this.etape.set(`publication`),d=await lD(this.videoService.publier(d.id))),this.aValider.rafraichir(),this.notification.succes(d?.statut===`PUBLIEE`?`\xAB ${d.titre} \xBB est en ligne.`:`\xAB ${d?.titre} \xBB est enregistr\xE9e en brouillon.`),this.router.navigate([`/videos`,d.id])}catch(E){this.enCours.set(!1),this.etape.set(null),d&&!e?(this.router.navigate([`/videos`,d.id,`modifier`],{replaceUrl:!0}),this.erreur.set(o(E,`Le fichier n'a pas pu être envoyé.`)+` La vidéo est gardée en brouillon : vous pouvez réessayer.`)):this.erreur.set(o(E,`La vidéo n'a pas pu être enregistrée.`))}}liberer(t){t&&URL.revokeObjectURL(t)}static ɵfac=function(e){return new(e||n$1)};static ɵcmp=Fe({type:n$1,selectors:[[`app-video-formulaire`]],inputs:{id:[1,`id`]},decls:3,vars:1,consts:[[`champVideo`,``],[`champImage`,``],[`lecteur`,``],[`listeRecettes`,`matAutocomplete`],[`aria-busy`,`true`,`aria-label`,`Chargement de la vidéo`,1,`gw-squelette`,`sq-bloc`],[1,`gw-carte`],[`titre`,`Vidéo introuvable`,`message`,`Elle a peut-être été supprimée.`,`icone`,`lucideFileQuestion`],[`matButton`,`filled`,`routerLink`,`/videos`],[`surtitre`,`Vidéos`,3,`titre`,`description`],[1,`disposition`],[1,`colonne-media`],[`type`,`button`,1,`depot`,3,`depot-survol`],[`role`,`alert`,1,`erreur-fichier`],[`type`,`file`,`tabindex`,`-1`,1,`sr-only`,3,`change`,`accept`],[`novalidate`,``,1,`colonne-infos`,3,`ngSubmit`,`formGroup`],[`role`,`alert`,1,`erreur`],[`aria-labelledby`,`titre-infos`,1,`gw-carte`,`bloc`],[`id`,`titre-infos`,1,`bloc-titre`],[1,`large`],[`matInput`,``,`formControlName`,`titre`,`maxlength`,`150`,`placeholder`,`Ex. Bien piler le mil`],[`matInput`,``,`formControlName`,`description`,`rows`,`4`,`maxlength`,`3000`],[`align`,`end`,1,`gw-chiffres`],[`id`,`libelle-sujet`,1,`libelle-sujet`],[`formControlName`,`sujet`,`aria-labelledby`,`libelle-sujet`,`hideSingleSelectionIndicator`,``,1,`sujets`],[`value`,`RECETTE`],[`name`,`lucideBookOpen`,`size`,`1rem`,`aria-hidden`,`true`],[`value`,`ASTUCE`],[`value`,`TECHNIQUE`],[`value`,`GENERAL`],[1,`large`,`champ-recette`],[`aria-labelledby`,`titre-publication`,1,`gw-carte`,`publication`],[`id`,`titre-publication`,1,`bloc-titre`],[`name`,`lucideSend`,`size`,`1.125rem`,`aria-hidden`,`true`],[1,`scene`],[`controls`,``,`playsinline`,``,`preload`,`metadata`,`aria-label`,`Aperçu de la vidéo`,3,`loadedmetadata`,`src`],[1,`fichier-infos`],[`name`,`lucideFilm`,`size`,`1rem`,`aria-hidden`,`true`],[1,`fichier-nom`],[1,`gw-chiffres`],[`matButton`,``,`type`,`button`,3,`click`,`disabled`],[`aria-labelledby`,`titre-miniature`,1,`gw-carte`,`miniature`],[1,`miniature-apercu`],[`alt`,`Miniature choisie`,3,`src`],[`name`,`lucideImage`,`size`,`1.5rem`,`aria-hidden`,`true`],[1,`miniature-textes`],[`id`,`titre-miniature`],[1,`facultatif`],[1,`miniature-actions`],[`matButton`,`outlined`,`type`,`button`,3,`click`,`disabled`],[`name`,`lucideImagePlus`,`size`,`1rem`,`aria-hidden`,`true`],[`matButton`,``,`type`,`button`,3,`disabled`],[`type`,`button`,1,`depot`,3,`click`,`dragover`,`dragleave`,`drop`],[`aria-hidden`,`true`,1,`depot-icone`],[`name`,`lucideUpload`,`size`,`2rem`],[1,`depot-titre`],[1,`depot-texte`],[1,`depot-formats`],[`matPrefix`,``,`name`,`lucideSearch`,`size`,`1.125rem`,`aria-hidden`,`true`,1,`icone-champ`],[`matInput`,``,`placeholder`,`Tapez pour chercher une recette publiée`,3,`formControl`,`matAutocomplete`],[3,`displayWith`],[3,`value`],[`disabled`,``],[`aria-live`,`polite`,1,`etapes`],[`mode`,`determinate`,`aria-label`,`Envoi de la vidéo`,3,`value`],[`mode`,`indeterminate`,`aria-label`,`Enregistrement`],[1,`aide`],[1,`boutons`],[`matButton`,`filled`,`type`,`submit`,1,`bouton-principal`],[`matButton`,`outlined`,`type`,`button`],[`matButton`,``,3,`routerLink`],[`matButton`,`outlined`,`type`,`button`,3,`click`]],template:function(e,i){e&1&&mi(0,_t,1,0,`div`,4)(1,bt,4,0,`div`,5)(2,Xt,50,14),e&2&&hi(i.chargement()?0:i.introuvable()?1:2)},dependencies:[go,ho,Wn,lo,co,Ji,Sr,fr,Dr,Nt$1,y4,rt,it,vt$1,de,se,ut$1,ht$1,Ne,_t$1,Ve,yt$1,ot,N4,x,C,n],styles:[`.disposition[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(280px,380px) minmax(0,1fr);gap:var(--%NS%gw-espace-6);align-items:start}@media(max-width:1199.98px){.disposition[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);gap:var(--%NS%gw-espace-5)}}.colonne-media[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%gw-espace-3);min-width:0}@media(min-width:1200px){.colonne-media[_ngcontent-%COMP%]{position:sticky;top:var(--%NS%gw-espace-5)}}.depot[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--%NS%gw-espace-2);width:100%;aspect-ratio:9/16;max-height:70dvh;padding:var(--%NS%gw-espace-6);border:2px dashed rgba(255,255,255,.25);border-radius:var(--%NS%gw-rayon-lg);background:var(--%NS%gw-cacao);color:var(--%NS%gw-sidebar-texte);font:inherit;text-align:center;cursor:pointer;transition:border-color var(--%NS%gw-duree) var(--%NS%gw-courbe),transform var(--%NS%gw-duree) var(--%NS%gw-courbe)}.depot[_ngcontent-%COMP%]:hover, .depot[_ngcontent-%COMP%]:focus-visible{border-color:var(--%NS%gw-terre-cuite);outline:none}.depot[_ngcontent-%COMP%]:hover   .depot-icone[_ngcontent-%COMP%], .depot[_ngcontent-%COMP%]:focus-visible   .depot-icone[_ngcontent-%COMP%]{transform:translateY(-4px)}@media(max-width:1199.98px){.depot[_ngcontent-%COMP%]{aspect-ratio:auto;min-height:260px}}.depot-survol[_ngcontent-%COMP%]{border-color:var(--%NS%gw-terre-cuite);border-style:solid;transform:scale(1.01)}.depot-icone[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:72px;height:72px;margin-bottom:var(--%NS%gw-espace-2);border-radius:50%;background:var(--%NS%gw-terre-cuite);color:var(--%NS%gw-cacao-profond);transition:transform var(--%NS%gw-duree-lente) var(--%NS%gw-courbe)}.depot-titre[_ngcontent-%COMP%]{color:var(--%NS%gw-blanc);font-size:1.125rem;font-weight:700}.depot-texte[_ngcontent-%COMP%]{color:var(--%NS%gw-sidebar-texte-doux)}.depot-formats[_ngcontent-%COMP%]{margin-top:var(--%NS%gw-espace-3);color:var(--%NS%gw-sidebar-texte-doux);font-size:var(--%NS%gw-taille-petit)}.scene[_ngcontent-%COMP%]{overflow:hidden;aspect-ratio:9/16;max-height:70dvh;border-radius:var(--%NS%gw-rayon-lg);background:#000;box-shadow:var(--%NS%gw-ombre-2)}.scene[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:contain}@media(max-width:1199.98px){.scene[_ngcontent-%COMP%]{margin-inline:auto}}.fichier-infos[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:var(--%NS%gw-espace-1) var(--%NS%gw-espace-3);color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit)}.fichier-infos[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%]{color:var(--%NS%gw-karite)}.fichier-infos[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:auto}.fichier-nom[_ngcontent-%COMP%]{overflow:hidden;max-width:160px;color:var(--%NS%gw-cacao);font-weight:600;text-overflow:ellipsis;white-space:nowrap}.erreur-fichier[_ngcontent-%COMP%]{color:var(--%NS%gw-danger);font-size:var(--%NS%gw-taille-petit);font-weight:500}.miniature[_ngcontent-%COMP%]{display:flex;gap:var(--%NS%gw-espace-4);padding:var(--%NS%gw-espace-4)}.miniature-apercu[_ngcontent-%COMP%]{display:flex;flex-shrink:0;align-items:center;justify-content:center;overflow:hidden;width:72px;aspect-ratio:9/16;border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-fond);color:var(--%NS%gw-texte-discret)}.miniature-apercu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.miniature-textes[_ngcontent-%COMP%]{min-width:0}.miniature-textes[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--%NS%gw-cacao);font-size:var(--%NS%gw-taille-texte);font-weight:600}.miniature-textes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2px;color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit)}.miniature-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%gw-espace-1);margin-top:var(--%NS%gw-espace-2)}.facultatif[_ngcontent-%COMP%]{color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit);font-weight:400}.colonne-infos[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%gw-espace-4);min-width:0}.bloc[_ngcontent-%COMP%], .publication[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-5) var(--%NS%gw-espace-6)}@media(max-width:767.98px){.bloc[_ngcontent-%COMP%], .publication[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-4)}}.bloc-titre[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%gw-espace-2);margin-bottom:var(--%NS%gw-espace-4);color:var(--%NS%gw-cacao);font-size:var(--%NS%gw-taille-titre-section);font-weight:600}.bloc-titre[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%]{color:var(--%NS%gw-action)}.large[_ngcontent-%COMP%]{width:100%}.libelle-sujet[_ngcontent-%COMP%]{margin:var(--%NS%gw-espace-3) 0 var(--%NS%gw-espace-2);color:var(--%NS%gw-cacao);font-size:var(--%NS%gw-taille-label);font-weight:600}.sujets[_ngcontent-%COMP%]{--%NS%mat-button-toggle-selected-state-background-color: var(--%NS%gw-cacao);--%NS%mat-button-toggle-selected-state-text-color: var(--%NS%gw-blanc);--%NS%mat-button-toggle-height: 42px;display:flex;flex-wrap:wrap;border-color:var(--%NS%gw-bordure)}.sujets[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{flex:1}.champ-recette[_ngcontent-%COMP%]{margin-top:var(--%NS%gw-espace-4)}.icone-champ[_ngcontent-%COMP%]{margin:0 var(--%NS%gw-espace-2) 0 var(--%NS%gw-espace-3);color:var(--%NS%gw-texte-doux)}.erreur[_ngcontent-%COMP%]{padding:var(--%NS%gw-espace-3) var(--%NS%gw-espace-4);border-radius:var(--%NS%gw-rayon);background:var(--%NS%gw-danger-fond);color:var(--%NS%gw-danger)}.aide[_ngcontent-%COMP%]{margin-top:var(--%NS%gw-espace-2);color:var(--%NS%gw-texte-doux);font-size:var(--%NS%gw-taille-petit)}.boutons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%gw-espace-2);margin-top:var(--%NS%gw-espace-4)}@media(max-width:767.98px){.boutons[_ngcontent-%COMP%]{flex-direction:column}}.bouton-principal[_ngcontent-%COMP%]{min-width:200px}.etapes[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--%NS%gw-espace-2) var(--%NS%gw-espace-4);margin:0 0 var(--%NS%gw-espace-3);padding:0;color:var(--%NS%gw-texte-discret);font-size:var(--%NS%gw-taille-petit);list-style:none}.etapes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px}.etapes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";width:10px;height:10px;border:2px solid currentcolor;border-radius:50%}.etapes[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--%NS%gw-action);font-weight:600}.etapes[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]:before{background:currentcolor;animation:_ngcontent-%COMP%_gw-pulse 1s ease-in-out infinite alternate}.etapes[_ngcontent-%COMP%]   .faite[_ngcontent-%COMP%]{color:var(--%NS%gw-succes, #1e7a3c)}.etapes[_ngcontent-%COMP%]   .faite[_ngcontent-%COMP%]:before{background:currentcolor}@keyframes _ngcontent-%COMP%_gw-pulse{to{opacity:.4}}.sq-bloc[_ngcontent-%COMP%]{height:480px;border-radius:var(--%NS%gw-rayon-lg)}`]})};export{ct as VideoFormulaire};