'use client'

import { useEffect } from 'react'

export default function Notif() {
  useEffect(() => {
    const handleShowNotification = async () => {
      if (typeof window === 'undefined' || !('Notification' in window)) {
        alert('This browser does not support desktop notifications')
        return
      }

      const title = 'Hello!'
      const options: NotificationOptions = {
        body: 'This is a notification from your Next.js app.',
      }

      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration()
        if (registration) {
          showNotificationWithServiceWorker(title, options, registration)
        } else {
          showNotification(title, options)
        }
      } else {
        showNotification(title, options)
      }
    }

    handleShowNotification()
  }, [])

  return <></>
}

const showNotificationWithServiceWorker = (
  title: string,
  options: NotificationOptions,
  registration: ServiceWorkerRegistration
) => {
  // Check if notification permissions have already been granted
  if (Notification.permission === 'granted') {
    registration.showNotification(title, options)
  }
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        registration.showNotification(title, options)
      }
    })
  }
}

export const showNotification = (
  title: string,
  options: NotificationOptions
) => {
  // Check if the browser supports notifications
  if (typeof window == 'undefined') return

  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification')
    return
  }

  // Check if notification permissions have already been granted
  if (Notification.permission === 'granted') {
    new Notification(title, options)
  }
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, options)
      }
    })
  }
}
