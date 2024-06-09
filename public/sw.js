self.addEventListener('push', event => {
  const data = event.data.json()

  const title = data.title
  const body = data.body
  const icon = data.icon
  const url = data.data.url

  const notificationOptions = {
    title: title,
    body: body,
    tag: 'note-app', // Use a unique tag to prevent duplicate notifications
    icon: icon,
    data: {
      url: url,
    },
  }
  self.registration.showNotification(title, notificationOptions)
})

self.addEventListener('notificationclick', event => {
  event.notification.close()

  // Open the URL specified in the notification data
  event.waitUntil(clients.openWindow(event.notification.data.url))
})
