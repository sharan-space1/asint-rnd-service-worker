/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

/**
 * Service Worker registration & life cycle management
 */
if ("serviceWorker" in navigator) {

    // Registering Service Worker
    navigator.serviceWorker.register("/sw.js", {
        scope: "/",
    }).then(function (oRegistration) {
        this.asintServiceWorker = oRegistration.installing || oRegistration.waiting || oRegistration.active;
        console.log("Service Worker has registered");
    }).catch(function(oError) {
        console.log("Service Worker registration failed: ", oError);
    });

    // Checking for Service Worker registration
    if (navigator.serviceWorker.controller) {
        console.log("Has Service Worker registered");
    }

    // Attaching event listener for Service Worker controller change
    addEventListener("controllerchange", function (oEvent) {
        console.log("New version of Service Worker installed and activated");
    });

} else {

    console.log("Sorry, Service workers are not supported. Please try different browsers");

}

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/asint/rnd/sw/module1/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.asint.rnd.sw.module1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);