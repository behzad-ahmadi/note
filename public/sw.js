self.addEventListener('push', function (event) {
  const data = event.data.json()
  const title = data.title
  const options = {
    body: data.body,
    icon: data.icon || '/icon.png', // specify a default icon if needed
    badge: data.badge || '/badge.png', // specify a default badge if needed
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  event.waitUntil(
    clients.openWindow('/') // open the root of your web app, or specify a specific URL
  )
})
