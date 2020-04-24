'use strict'

const util = require('./util')

util()



const CACHE_STATIC_NAME = 'static-v29';
const CACHE_DYNAMIC_NAME = 'dynamic-v7';
const INDEXDB_DYNAMIC_NAME = "linkup-db";
const STATIC_FILES = [
    '/',
    // '/index.html',
];


self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing Service Worker ...');
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(function (cache) {
                console.log('[Service Worker] Precaching App Shell');
                cache.addAll(STATIC_FILES);
            }))

});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ....', event);

    event.waitUntil(
        caches.keys()
            .then(function (keyList) {
                return Promise.all(keyList.map(function (key) {
                    if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                        console.log('[Service Worker] Removing old cache.', key);
                        return caches.delete(key);
                    }
                }));
            })
    );
    return self.clients.claim();
});




// notification manage
self.addEventListener('notificationclick', e => {
    let notification = e.notification;
    let action = e.action;

    if (action === 'open') {
        let url = location.origin;
        clients.openWindow(url);
        notification.close();
    } else {
        console.log("Notification _Rejected!");

        notification.close();
    }
})

self.addEventListener('notificationclose', e => {
    let notification = e.notification;
    let action = e.action;

    console.log("notification is closed", notification);
})



// process all the request 
self.addEventListener('fetch', function (event) {

    if (event.request.method === "POST") {
        console.log("post request");

        event.respondWith(
            fetch(event.request)
                .then(res => {
                    return res;
                })
                .catch(err => {
                    return err;
                    console.log("err to process post due to network/ stored in indexdb -- for feature try");
                }));


    } else {

        // recording all the req in cache
        event.respondWith(
            fetch(event.request)
                .then(function (res) {
                    return caches.open(CACHE_DYNAMIC_NAME)
                        .then(function (cache) {
                            cache.put(event.request.url, res.clone());
                            return res;   // update the cache and return the network res;
                        })
                })
                .catch(function (err) {
                    console.log("offline req")
                    return caches.match(event.request)
                        .then(res => {
                            console.log("i got the res in cache", res)
                            if (res) {
                                return res;
                            } else {
                                console.log("there is no resp for this req in cache!")
                                return JSON.stringify({ message: "you are offline" })
                            }

                        })
                })
        );

    }
});


//  read the notification from the server 

self.addEventListener('push', function (e) {
    console.log("someone push the notification !!");

    console.log("server notification data", e.data);

    // generate the notification from server data 
    let payload = e.data ? JSON.parse(e.data.text()) : {
        title: "default Title for noitification",
        body: "default -server push notification body",
      //  icon: "/images/icons/icon-96x96.png",
    };

    var options = {
        body: payload.body,
      //  icon: "/images/icons/icon-96x96.png",
       // badge: "/images/icons/icon-96x96.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'open', title: 'Explore this new world',
             //      icon: "/images/icons/icon-96x96.png",
            },
            {
                action: 'close', title: 'Close',
            //icon: "/images/icons/icon-96x96.png",
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification(payload.title, options)
    );

});



self.addEventListener('sync', function (event) {
    if (event.tag == 'sync-post') {
        console.log("we have data to post online!!!");

        let data = {
            project: "OfflinePost",
            task: "_OfflinePost_task",
            date: "01 Apr 2020",
            description: "post is onffline",
            hours: "08:00",
            userid: "001",
            status: "pending"
        }
        fetch('https://pwa-serv-notify.herokuapp.com/api/pwa/timesheets/add', {
            method: 'post',
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log("posteted back to online")
        });


    }
});

