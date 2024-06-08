// self.addEventListener('push', function (event) {
//   const data = event.data.json()
//   const title = data.title
//   const options = {
//     body: data.body,
//     icon: data.icon || '/icon.png', // specify a default icon if needed
//     badge: data.badge || '/badge.png', // specify a default badge if needed
//   }

//   event.waitUntil(self.registration.showNotification(title, options))
// })

// self.addEventListener('notificationclick', function (event) {
//   event.notification.close()
//   event.waitUntil(
//     clients.openWindow('/') // open the root of your web app, or specify a specific URL
//   )
// })

self.addEventListener('push', event => {
  const data = event.data.json()
  const title = data.title
  const body = data.body
  const icon = data.icon
  const url = data.data.url

  const notificationOptions = {
    body: body,
    tag: 'unique-tag', // Use a unique tag to prevent duplicate notifications
    icon: icon,
    data: {
      url: url, // Replace with the desired URL for redirecting user to the desired page
    },
  }

  self.registration.showNotification(title, notificationOptions)
})
