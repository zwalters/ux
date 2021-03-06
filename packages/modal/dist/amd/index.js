define(["require", "exports", "./resources/ok-modal-attribute", "./resources/dismiss-modal-attribute", "./resources/attach-focus-attribute", "./ux-modal-configuration", "aurelia-framework", "./ux-modal-theme", "./ux-modal", "./ux-modal-service", "./ux-modal-configuration"], function (require, exports, ok_modal_attribute_1, dismiss_modal_attribute_1, attach_focus_attribute_1, ux_modal_configuration_1, aurelia_framework_1, ux_modal_theme_1, ux_modal_1, ux_modal_service_1, ux_modal_configuration_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfig, callback) {
        frameworkConfig.globalResources([
            attach_focus_attribute_1.AttachFocusAttribute,
            dismiss_modal_attribute_1.DismissModalAttribute,
            ok_modal_attribute_1.OkModalAttribute,
            aurelia_framework_1.PLATFORM.moduleName('./ux-modal'),
        ]);
        if (typeof callback === 'function') {
            var config = frameworkConfig.container.get(ux_modal_configuration_1.UxDefaultModalConfiguration);
            callback(config);
        }
    }
    exports.configure = configure;
    exports.UxModalTheme = ux_modal_theme_1.UxModalTheme;
    exports.UxModal = ux_modal_1.UxModal;
    __export(ux_modal_service_1);
    __export(ux_modal_configuration_2);
});
