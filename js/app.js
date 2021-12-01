console.log("Hello from app.js")
//check if the app be into git pages
const contextSW =
    window.location.href.includes("localhost") ? "/sw.js" : "/" + window.location.href.split('/', 4)[3] + "/sw.js";

console.log(window.location.href);

if (navigator.serviceWorker) {
    console.log("Service worker available");
    navigator.serviceWorker.register(contextSW)
} else {
    console.log("Service worker not available");
}
