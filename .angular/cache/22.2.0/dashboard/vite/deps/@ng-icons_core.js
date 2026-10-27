import { Cr as inject, Ti as runInInjectionContext, U as InjectionToken, W as Injector, bn as effect, c as computed, fa as ɵɵinject, la as ɵɵdefineInjector, rt as PLATFORM_ID } from "./_resource-chunk-D6TUTzVd.js";
import { Ai as setClassMetadata, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Jo as ɵɵprojectionDef, Jt as Component, Nn as NgModule, O as booleanAttribute, Os as ɵɵstyleProp, Sn as Input, Ua as ɵɵdefineComponent, Wn as Renderer2, X as input, bn as Inject, ca as ɵɵclassMap, f as HostAttributeToken, fn as ElementRef, no as ɵɵdomProperty, qo as ɵɵprojection, rt as numberAttribute } from "./core-ClpmeKgD.js";
import { Dn as isObservable } from "./esm5-DYNb5pjm.js";
import { d as isPlatformServer } from "./common-BOmMVHpK.js";
//#region node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs
var NgGlyphConfigToken = new InjectionToken("Ng Glyph Config");
var defaultConfig = {
	size: "1em",
	opticalSize: 20,
	weight: 400,
	grade: 0,
	fill: false
};
/**
* Provide the configuration for the glyph
* @param config The configuration to use
*/
function provideNgGlyphsConfig(config) {
	return {
		provide: NgGlyphConfigToken,
		useValue: {
			...defaultConfig,
			...config
		}
	};
}
/**
* Inject the configuration for the glyphs
* @returns The configuration to use
* @internal
*/
function injectNgGlyphsConfig() {
	return inject(NgGlyphConfigToken, { optional: true }) ?? defaultConfig;
}
var NgGlyphsToken = new InjectionToken("NgGlyphsToken");
function provideNgGlyphs(...glyphsets) {
	if (!glyphsets.length) throw new Error("Please provide at least one glyphset.");
	return [{
		provide: NgGlyphsToken,
		useValue: {
			defaultGlyphset: glyphsets[0].name,
			glyphsets
		}
	}];
}
function injectNgGlyphs() {
	const glyphs = inject(NgGlyphsToken, { optional: true });
	if (!glyphs) throw new Error("Please provide the glyphs using the provideNgGlyphs() function.");
	return glyphs;
}
function coerceCssPixelValue(value) {
	return value == null ? "" : /^\d+$/.test(value) ? `${value}px` : value;
}
var NgGlyph = class NgGlyph {
	constructor() {
		/**
		* Access the available glyphsets
		*/
		this.glyphsets = injectNgGlyphs();
		/**
		* Access the default configuration
		*/
		this.config = injectNgGlyphsConfig();
		/**
		* Define the name of the glyph to display
		*/
		this.name = input.required(...ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []);
		/**
		* Define the glyphset to use
		*/
		this.glyphset = input(this.glyphsets.defaultGlyphset, ...ngDevMode ? [{ debugName: "glyphset" }] : /* istanbul ignore next */ []);
		/**
		* Define the optical size of the glyph
		*/
		this.opticalSize = input(this.config.opticalSize, {
			...ngDevMode ? { debugName: "opticalSize" } : /* istanbul ignore next */ {},
			transform: numberAttribute
		});
		/**
		* Define the weight of the glyph
		*/
		this.weight = input(this.config.weight, {
			...ngDevMode ? { debugName: "weight" } : /* istanbul ignore next */ {},
			transform: numberAttribute
		});
		/**
		* Define the grade of the glyph
		*/
		this.grade = input(this.config.grade, {
			...ngDevMode ? { debugName: "grade" } : /* istanbul ignore next */ {},
			transform: numberAttribute
		});
		/**
		* Define the fill of the glyph
		*/
		this.fill = input(this.config.fill, {
			...ngDevMode ? { debugName: "fill" } : /* istanbul ignore next */ {},
			transform: booleanAttribute
		});
		/**
		* Define the size of the glyph
		*/
		this.size = input(this.config.size, {
			...ngDevMode ? { debugName: "size" } : /* istanbul ignore next */ {},
			transform: coerceCssPixelValue
		});
		/**
		* Define the color of the glyph
		*/
		this.color = input(this.config.color, ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
		/**
		* Derive the glyphset class from the glyphset name
		*/
		this.glyphsetClass = computed(() => {
			const glyphset = this.glyphsets.glyphsets.find((glyphset) => glyphset.name === this.glyphset());
			if (!glyphset) throw new Error(`The glyphset "${this.glyphset()}" does not exist. Please provide a valid glyphset.`);
			return glyphset.baseClass;
		}, ...ngDevMode ? [{ debugName: "glyphsetClass" }] : /* istanbul ignore next */ []);
		/**
		* Define the font variation settings of the glyph
		*/
		this.fontVariationSettings = computed(() => {
			return `'FILL' ${this.fill() ? 1 : 0}, 'wght' ${this.weight()}, 'GRAD' ${this.grade()}, 'opsz' ${this.opticalSize()}`;
		}, ...ngDevMode ? [{ debugName: "fontVariationSettings" }] : /* istanbul ignore next */ []);
	}
	static {
		this.ɵfac = function NgGlyph_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || NgGlyph)();
		};
	}
	static {
		this.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({
			type: NgGlyph,
			selectors: [["ng-glyph"]],
			hostVars: 9,
			hostBindings: function NgGlyph_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵdomProperty("textContent", ctx.name());
					ɵɵclassMap(ctx.glyphsetClass());
					ɵɵstyleProp("--%NS%ng-glyph__size", ctx.size())("color", ctx.color())("font-variation-settings", ctx.fontVariationSettings());
				}
			},
			inputs: {
				name: [1, "name"],
				glyphset: [1, "glyphset"],
				opticalSize: [1, "opticalSize"],
				weight: [1, "weight"],
				grade: [1, "grade"],
				fill: [1, "fill"],
				size: [1, "size"],
				color: [1, "color"]
			},
			decls: 0,
			vars: 0,
			template: function NgGlyph_Template(rf, ctx) {},
			styles: ["[_nghost-%COMP%]{display:inline-block;width:var(--%NS%ng-glyph__size);height:var(--%NS%ng-glyph__size);font-size:var(--%NS%ng-glyph__size);overflow:hidden}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgGlyph, [{
		type: Component,
		args: [{
			selector: "ng-glyph",
			standalone: true,
			template: ``,
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				"[class]": "glyphsetClass()",
				"[textContent]": "name()",
				"[style.--ng-glyph__size]": "size()",
				"[style.color]": "color()",
				"[style.font-variation-settings]": "fontVariationSettings()"
			},
			styles: [":host{display:inline-block;width:var(--ng-glyph__size);height:var(--ng-glyph__size);font-size:var(--ng-glyph__size);overflow:hidden}\n"]
		}]
	}], null, {
		name: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: true
			}]
		}],
		glyphset: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "glyphset",
				required: false
			}]
		}],
		opticalSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "opticalSize",
				required: false
			}]
		}],
		weight: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "weight",
				required: false
			}]
		}],
		grade: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "grade",
				required: false
			}]
		}],
		fill: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fill",
				required: false
			}]
		}],
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}],
		color: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "color",
				required: false
			}]
		}]
	});
})();
/**
* Helper function to create an object that represents a feature.
*/
function createFeature(kind, providers) {
	return {
		ɵkind: kind,
		ɵproviders: providers
	};
}
var NgIconPreProcessorToken = new InjectionToken("Ng Icon Pre Processor");
var NgIconPostProcessorToken = new InjectionToken("Ng Icon Post Processor");
function injectNgIconPreProcessor() {
	return inject(NgIconPreProcessorToken, { optional: true }) ?? ((icon) => icon);
}
function injectNgIconPostProcessor() {
	return inject(NgIconPostProcessorToken, { optional: true }) ?? (() => {});
}
function preprocessIcon(icon) {
	return icon.replace(/style\s*=/g, "data-style=");
}
function postprocessIcon(element) {
	const elements = [...element.hasAttribute("data-style") ? [element] : [], ...Array.from(element.querySelectorAll("[data-style]"))];
	for (const element of elements) {
		element.getAttribute("data-style")?.split(";").forEach((style) => {
			const [property, value] = style.split(":");
			element.style[property.trim()] = value.trim();
		});
		element.removeAttribute("data-style");
	}
}
/**
* Process icons in a way that is compliant with the content security policy
*/
function withContentSecurityPolicy() {
	return createFeature(0, [{
		provide: NgIconPreProcessorToken,
		useValue: preprocessIcon
	}, {
		provide: NgIconPostProcessorToken,
		useValue: postprocessIcon
	}]);
}
var LoggerToken = new InjectionToken("Ng Icon Logger");
/**
* The default logger implementation that logs to the console
*/
var DefaultLogger = class {
	log(message) {
		console.log(message);
	}
	warn(message) {
		console.warn(message);
	}
	error(message) {
		console.error(message);
	}
};
/**
* A logger implementation that throws an error on warnings and errors
*/
var ExceptionLogger = class {
	log(message) {
		console.log(message);
	}
	warn(message) {
		throw new Error(message);
	}
	error(message) {
		throw new Error(message);
	}
};
function injectLogger() {
	return inject(LoggerToken, { optional: true }) ?? new DefaultLogger();
}
/**
* Throw exceptions on warnings and errors
*/
function withExceptionLogger() {
	return createFeature(1, [{
		provide: LoggerToken,
		useClass: ExceptionLogger
	}]);
}
var NgIconConfigToken = new InjectionToken("Ng Icon Config");
/**
* Provide the configuration for the icons
* @param config The configuration to use
*/
function provideNgIconsConfig(config, ...features) {
	return [{
		provide: NgIconConfigToken,
		useValue: config
	}, features.map((feature) => feature.ɵproviders)];
}
/**
* Inject the configuration for the icons
* @returns The configuration to use
* @internal
*/
function injectNgIconConfig() {
	return inject(NgIconConfigToken, { optional: true }) ?? {};
}
var NgIconLoaderToken = new InjectionToken("Ng Icon Loader Token");
/**
* Helper function to create an object that represents a Loader feature.
*/
function loaderFeature(kind, providers) {
	return {
		kind,
		providers
	};
}
var NgIconCacheToken = new InjectionToken("Ng Icon Cache Token");
/**
* Add caching to the loader. This will prevent the loader from being called multiple times for the same icon name.
*/
function withCaching() {
	return loaderFeature(0, [{
		provide: NgIconCacheToken,
		useValue: /* @__PURE__ */ new Map()
	}]);
}
/**
* Provide a function that will return the SVG content for a given icon name.
* @param loader The function that will return the SVG content for a given icon name.
* @param features The list of features to apply to the loader.
* @returns The SVG content for a given icon name.
*/
function provideNgIconLoader(loader, ...features) {
	return [{
		provide: NgIconLoaderToken,
		useValue: loader
	}, features.map((feature) => feature.providers)];
}
/**
* Inject the function that will return the SVG content for a given icon name.
*/
function injectNgIconLoader() {
	return inject(NgIconLoaderToken, { optional: true });
}
/**
* Inject the cache that will store the SVG content for a given icon name.
*/
function injectNgIconLoaderCache() {
	return inject(NgIconCacheToken, { optional: true });
}
/**
* Define the icons to use
* @param icons The icons to provide
*/
function provideIcons(icons) {
	return [{
		provide: NgIconsToken,
		useFactory: (parentIcons = inject(NgIconsToken, {
			optional: true,
			skipSelf: true
		})) => ({
			...parentIcons?.reduce((acc, icons) => ({
				...acc,
				...icons
			}), {}),
			...icons
		}),
		multi: true
	}];
}
var NgIconsToken = new InjectionToken("Icons Token");
/**
* Inject the icons to use
* @returns The icons to use
* @internal
*/
function injectNgIcons() {
	return inject(NgIconsToken, { optional: true }) ?? [];
}
/**
* A loader may return a promise, an observable or a string. This function will coerce the result into a promise.
* @returns
*/
function coerceLoaderResult(result) {
	if (typeof result === "string") return Promise.resolve(result);
	if (isObservable(result)) return result.toPromise();
	return result;
}
/**
* Hyphenated to lowerCamelCase
*/
function toPropertyName(str) {
	return str.replace(/([^a-zA-Z0-9])+(.)?/g, (_, __, chr) => chr ? chr.toUpperCase() : "").replace(/[^a-zA-Z\d]/g, "").replace(/^([A-Z])/, (m) => m.toLowerCase());
}
var policy;
/**
* Wrap an html string in a TrustedHTML value when Trusted Types are available,
* so it can be assigned to innerHTML under `require-trusted-types-for 'script'`.
*/
function trustedHTMLFromString(html) {
	if (policy === void 0) {
		const { trustedTypes } = globalThis;
		try {
			policy = trustedTypes?.createPolicy("ng-icons", { createHTML: (s) => s }) ?? null;
		} catch {
			policy = null;
		}
	}
	return policy?.createHTML(html) ?? html;
}
var uniqueId = 0;
var NgIcon = class NgIcon {
	constructor() {
		/** Access the global icon config */
		this.config = injectNgIconConfig();
		/** Access the icons */
		this.icons = injectNgIcons();
		/** Access the icon loader if defined */
		this.loader = injectNgIconLoader();
		/** Access the icon cache if defined */
		this.cache = injectNgIconLoaderCache();
		/** Access the pre-processor */
		this.preProcessor = injectNgIconPreProcessor();
		/** Access the post-processor */
		this.postProcessor = injectNgIconPostProcessor();
		/** Access the injector */
		this.injector = inject(Injector);
		/** Access the renderer */
		this.renderer = inject(Renderer2);
		/** Determine the platform we are rendering on */
		this.platform = inject(PLATFORM_ID);
		/** Access the element ref */
		this.elementRef = inject(ElementRef);
		/** A unique id for this instance */
		this.uniqueId = uniqueId++;
		/** Access the logger */
		this.logger = injectLogger();
		/** Define the name of the icon to display */
		this.name = input(...ngDevMode ? [void 0, { debugName: "name" }] : /* istanbul ignore next */ []);
		/** Define the svg of the icon to display */
		this.svg = input(...ngDevMode ? [void 0, { debugName: "svg" }] : /* istanbul ignore next */ []);
		/** Define the size of the icon */
		this.size = input(this.config.size, {
			...ngDevMode ? { debugName: "size" } : /* istanbul ignore next */ {},
			transform: coerceCssPixelValue
		});
		/** Define the stroke-width of the icon */
		this.strokeWidth = input(this.config.strokeWidth, ...ngDevMode ? [{ debugName: "strokeWidth" }] : /* istanbul ignore next */ []);
		/** Define the color of the icon */
		this.color = input(this.config.color, ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
		effect(() => this.updateIcon());
		if (!inject(new HostAttributeToken("aria-hidden"), { optional: true })) this.elementRef.nativeElement.setAttribute("aria-hidden", "true");
	}
	ngOnDestroy() {
		this.svgElement = void 0;
	}
	async updateIcon() {
		const name = this.name();
		const svg = this.svg();
		if (svg !== void 0) {
			this.setSvg(svg);
			return;
		}
		if (name === void 0) return;
		const propertyName = toPropertyName(name);
		for (const icons of [...this.icons].reverse()) if (icons[propertyName]) {
			this.setSvg(icons[propertyName]);
			return;
		}
		if (this.loader) {
			const result = await this.requestIconFromLoader(name);
			if (result !== null) {
				this.setSvg(result);
				return;
			}
		}
		this.logger.warn(`No icon named ${name} was found. You may need to import it using the withIcons function.`);
	}
	setSvg(svg) {
		if (isPlatformServer(this.platform)) {
			this.elementRef.nativeElement.innerHTML = svg;
			this.elementRef.nativeElement.setAttribute("data-ng-icon-ssr", "");
			return;
		}
		if (this.elementRef.nativeElement.hasAttribute("data-ng-icon-ssr")) {
			this.elementRef.nativeElement.removeAttribute("data-ng-icon-ssr");
			this.svgElement = this.elementRef.nativeElement.querySelector("svg") ?? void 0;
			if (this.elementRef.nativeElement.innerHTML === svg) return;
		}
		if (this.svgElement) this.renderer.removeChild(this.elementRef.nativeElement, this.svgElement);
		if (svg === "") return;
		const template = this.renderer.createElement("template");
		svg = this.replaceIds(svg);
		this.renderer.setProperty(template, "innerHTML", trustedHTMLFromString(this.preProcessor(svg)));
		this.svgElement = template.content.firstElementChild;
		this.postProcessor(this.svgElement);
		this.renderer.appendChild(this.elementRef.nativeElement, this.svgElement);
	}
	replaceIds(svg) {
		if (!svg.includes("ID_PLACEHOLDER_")) return svg;
		const regex = /ID_PLACEHOLDER_(\d+)/g;
		const idMap = /* @__PURE__ */ new Map();
		const matches = new Set(svg.match(regex));
		if (matches === null) return svg;
		for (const match of matches) {
			const id = match.replace("ID_PLACEHOLDER_", "");
			const placeholder = `ng-icon-${this.uniqueId}-${idMap.size}`;
			idMap.set(id, placeholder);
			svg = svg.replace(new RegExp(match, "g"), placeholder);
		}
		return svg;
	}
	/**
	* Request the icon from the loader.
	* @param name The name of the icon to load.
	* @returns The SVG content for a given icon name.
	*/
	requestIconFromLoader(name) {
		return new Promise((resolve) => {
			runInInjectionContext(this.injector, async () => {
				if (this.cache) {
					const cachedResult = this.cache.get(name);
					if (typeof cachedResult === "string") {
						resolve(cachedResult);
						return;
					}
					if (cachedResult instanceof Promise) {
						resolve(await cachedResult);
						return;
					}
				}
				const promise = coerceLoaderResult(this.loader(name));
				this.cache?.set(name, promise);
				const result = await promise;
				this.cache?.set(name, result);
				resolve(result);
			});
		});
	}
	static {
		this.ɵfac = function NgIcon_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || NgIcon)();
		};
	}
	static {
		this.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({
			type: NgIcon,
			selectors: [["ng-icon"]],
			hostAttrs: ["role", "img"],
			hostVars: 6,
			hostBindings: function NgIcon_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵstyleProp("--%NS%ng-icon__stroke-width", ctx.strokeWidth())("--%NS%ng-icon__size", ctx.size())("--%NS%ng-icon__color", ctx.color());
			},
			inputs: {
				name: [1, "name"],
				svg: [1, "svg"],
				size: [1, "size"],
				strokeWidth: [1, "strokeWidth"],
				color: [1, "color"]
			},
			decls: 0,
			vars: 0,
			template: function NgIcon_Template(rf, ctx) {},
			styles: ["[_nghost-%COMP%]{display:inline-block;width:var(--%NS%ng-icon__size, 1em);height:var(--%NS%ng-icon__size, 1em);line-height:initial;vertical-align:initial;overflow:hidden}[_nghost-%COMP%]     svg{width:inherit;height:inherit;vertical-align:inherit}@layer ng-icon{[_nghost-%COMP%]{color:var(--%NS%ng-icon__color, currentColor)}}"]
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIcon, [{
		type: Component,
		args: [{
			selector: "ng-icon",
			template: "",
			standalone: true,
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				role: "img",
				"[style.--ng-icon__stroke-width]": "strokeWidth()",
				"[style.--ng-icon__size]": "size()",
				"[style.--ng-icon__color]": "color()"
			},
			styles: [":host{display:inline-block;width:var(--ng-icon__size, 1em);height:var(--ng-icon__size, 1em);line-height:initial;vertical-align:initial;overflow:hidden}:host ::ng-deep svg{width:inherit;height:inherit;vertical-align:inherit}@layer ng-icon{:host{color:var(--ng-icon__color, currentColor)}}\n"]
		}]
	}], () => [], {
		name: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: false
			}]
		}],
		svg: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "svg",
				required: false
			}]
		}],
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}],
		strokeWidth: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "strokeWidth",
				required: false
			}]
		}],
		color: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "color",
				required: false
			}]
		}]
	});
})();
var NgIconsModule = class NgIconsModule {
	constructor(icons) {
		if (Object.keys(icons).length === 0) throw new Error("No icons have been provided. Ensure to include some icons by importing them using NgIconsModule.withIcons({ ... }).");
	}
	/**
	* Define the icons that will be included in the application. This allows unused icons to
	* be tree-shaken away to reduce bundle size
	* @param icons The object containing the required icons
	*/
	static withIcons(icons) {
		return {
			ngModule: NgIconsModule,
			providers: provideIcons(icons)
		};
	}
	static {
		this.ɵfac = function NgIconsModule_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || NgIconsModule)(ɵɵinject(NgIconsToken));
		};
	}
	static {
		this.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
			type: NgIconsModule,
			imports: [NgIcon],
			exports: [NgIcon]
		});
	}
	static {
		this.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIconsModule, [{
		type: NgModule,
		args: [{
			imports: [NgIcon],
			exports: [NgIcon]
		}]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [NgIconsToken]
		}]
	}], null);
})();
var NG_ICON_DIRECTIVES = [NgIcon];
var NgIconStack = class NgIconStack {
	constructor() {
		/** The size of the child icons */
		this.size = input.required(...ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []);
	}
	static {
		this.ɵfac = function NgIconStack_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || NgIconStack)();
		};
	}
	static {
		this.ɵcmp = (function() {
			return /*@__PURE__*/ ɵɵdefineComponent({
				type: NgIconStack,
				selectors: [["ng-icon-stack"]],
				hostVars: 2,
				hostBindings: function NgIconStack_HostBindings(rf, ctx) {
					if (rf & 2) ɵɵstyleProp("--%NS%ng-icon__size", ctx.size());
				},
				inputs: { size: [1, "size"] },
				ngContentSelectors: ["*"],
				decls: 1,
				vars: 0,
				template: function NgIconStack_Template(rf, ctx) {
					if (rf & 1) {
						ɵɵprojectionDef();
						ɵɵprojection(0);
					}
				},
				styles: ["[_nghost-%COMP%]{display:inline-flex;justify-content:center;align-items:center;position:relative;width:var(--%NS%ng-icon__size);height:var(--%NS%ng-icon__size)}[_nghost-%COMP%]     ng-icon{position:absolute}"]
			});
		})();
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIconStack, [{
		type: Component,
		args: [{
			selector: "ng-icon-stack",
			standalone: true,
			template: "<ng-content />",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "[style.--ng-icon__size]": "size()" },
			styles: [":host{display:inline-flex;justify-content:center;align-items:center;position:relative;width:var(--ng-icon__size);height:var(--ng-icon__size)}:host ::ng-deep ng-icon{position:absolute}\n"]
		}]
	}], null, { size: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "size",
			required: true
		}]
	}] });
})();
//#endregion
export { NG_ICON_DIRECTIVES, NgGlyph, NgGlyphConfigToken, NgIcon, NgIcon as NgIconComponent, NgIconCacheToken, NgIconConfigToken, NgIconLoaderToken, NgIconStack, NgIconsModule, NgIconsToken, injectNgGlyphsConfig, injectNgIconConfig, injectNgIconLoader, injectNgIconLoaderCache, injectNgIcons, provideIcons, provideNgGlyphs, provideNgGlyphsConfig, provideNgIconLoader, provideNgIconsConfig, withCaching, withContentSecurityPolicy, withExceptionLogger };
