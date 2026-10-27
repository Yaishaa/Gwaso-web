import { la as ɵɵdefineInjector } from "./_resource-chunk-D6TUTzVd.js";
import { Ai as setClassMetadata, Ga as ɵɵdefineNgModule, Nn as NgModule } from "./core-ClpmeKgD.js";
import { n as A11yModule } from "./a11y-CCmC2dry.js";
import { r as CdkScrollableModule } from "./scrolling-CRMMgAp1.js";
import { s as OverlayModule } from "./overlay-CrsCUWc4.js";
import "./platform-DfiZ_b6a.js";
import { t as BidiModule } from "./bidi-KTQDAnSR.js";
import { a as TOOLTIP_PANEL_CLASS, i as SCROLL_THROTTLE_MS, n as MAT_TOOLTIP_SCROLL_STRATEGY, o as TooltipComponent, r as MatTooltip, s as getMatTooltipInvalidPositionError, t as MAT_TOOLTIP_DEFAULT_OPTIONS } from "./_tooltip-chunk-BN-LhCHd.js";
//#region node_modules/@angular/material/fesm2022/tooltip.mjs
var MatTooltipModule = class MatTooltipModule {
	static ɵfac = function MatTooltipModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatTooltipModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: MatTooltipModule,
		imports: [
			A11yModule,
			OverlayModule,
			MatTooltip,
			TooltipComponent
		],
		exports: [
			MatTooltip,
			TooltipComponent,
			BidiModule,
			CdkScrollableModule
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		A11yModule,
		OverlayModule,
		BidiModule,
		CdkScrollableModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
		type: NgModule,
		args: [{
			imports: [
				A11yModule,
				OverlayModule,
				MatTooltip,
				TooltipComponent
			],
			exports: [
				MatTooltip,
				TooltipComponent,
				BidiModule,
				CdkScrollableModule
			]
		}]
	}], null, null);
})();
//#endregion
export { MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_SCROLL_STRATEGY, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError };
