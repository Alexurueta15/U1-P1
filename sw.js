console.log("hello from sw uwu.js");

const contextSW =
    location.href.includes("localhost") ? "/" : "/" + location.href.split('/', 4)[3] + "/";

self.addEventListener('install', (event) => {
    console.log("Service worker installed");
});

self.addEventListener('activate', (event) => {
    console.log("sw: activated and managing the app");
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url)

    if (event.request.url.includes('save')) {
        let newResponse = new Response("not today.");
        event.respondWith(newResponse);
    }

    if (event.request.url.includes('.jpg')) {
        console.log(event.request.url);
        console.log("img requested");
        let newResponse = fetch(contextSW + 'images/steins gate.jpg');
        event.respondWith(newResponse);
    }

    if (event.request.url.includes('page.css')) {
        let newResponse = new Response(`body, h1, div{
        background-color:black !important;
        color: red;
    }`, {
            headers: {
                'Content-type': 'text/css'
            }
        });
        event.respondWith(newResponse);
    }
});
