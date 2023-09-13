// Attaching event listeners for after Instalaltion and Activation of Service Workers

self.addEventListener("install", function(oEvent) {
    console.log("Service Worker is installed");
});

self.addEventListener("activate", function(oEvent) {
    console.log("Service Worker is activated");
});


// Attaching event listener for intercepting requests

self.addEventListener("fetch", function(oEvent) {
    console.log("💻 > 🤖 > 🌐 Listening from Service Worker: [" + oEvent.request.method + "] >>> " + oEvent.request.url);
});