var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from 'aurelia-dependency-injection';
import { ObserverLocator } from 'aurelia-binding';
import { swatches } from '../colors/swatches';
import { GlobalStyleEngine } from '../styles/global-style-engine';
var DesignProcessor = /** @class */ (function () {
    function DesignProcessor(observerLocator, globalStyleEngine) {
        this.observerLocator = observerLocator;
        this.globalStyleEngine = globalStyleEngine;
    }
    DesignProcessor.prototype.setSwatchVariables = function () {
        var swatchClasses = '';
        for (var swatch in swatches) {
            if (swatches.hasOwnProperty(swatch)) {
                if (typeof swatches[swatch] === 'string') {
                    swatchClasses += "  --ux-swatch--" + kebabCase(swatch) + ": " + swatches[swatch] + ";\r\n";
                    continue;
                }
                for (var key in swatches[swatch]) {
                    if (swatches[swatch].hasOwnProperty(key)) {
                        swatchClasses += "  --ux-swatch--" + kebabCase(swatch) + "-" + kebabCase(key) + ": " + swatches[swatch][key] + ";\r\n";
                    }
                }
            }
        }
        this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux swatches", swatchClasses, ':root');
    };
    DesignProcessor.prototype.setDesignVariables = function (design) {
        this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux design styles", this.buildInnerHTML(design), ':root');
    };
    DesignProcessor.prototype.setDesignWatches = function (design) {
        var _this = this;
        for (var key in design) {
            if (design.hasOwnProperty(key)) {
                this.observerLocator.getObserver(design, key)
                    .subscribe(function () {
                    _this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux design styles", _this.buildInnerHTML(design), ':root');
                });
            }
        }
    };
    DesignProcessor.prototype.buildInnerHTML = function (design) {
        var designInnerHtml = '';
        for (var key in design) {
            if (design.hasOwnProperty(key) && typeof design[key] === 'string' && design[key] !== '') {
                designInnerHtml += "  --aurelia-ux--design-" + kebabCase(key) + ": " + design[key] + ";\r\n";
            }
        }
        return designInnerHtml;
    };
    DesignProcessor = __decorate([
        inject(ObserverLocator, GlobalStyleEngine)
    ], DesignProcessor);
    return DesignProcessor;
}());
export { DesignProcessor };
function kebabCase(value) {
    value = value.charAt(0).toLowerCase() + value.slice(1);
    return value.replace(/([A-Z])/g, function (match) { return "-" + match[0].toLowerCase(); });
}
//# sourceMappingURL=design-processor.js.map