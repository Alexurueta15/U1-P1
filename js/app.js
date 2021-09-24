console.log("Hello from app.js")
//check if the app be into git pages
const swDirector = 
    window.location.href.includes("localhost") ? "/sw.js" : "/myDirectory/sw.js";

console.log(window.location.href);

if (navigator.serviceWorker) {
    console.log("Service worker available");
    navigator.serviceWorker.register("/sw.js")
}else{
    console.log("Service worker not available");
}