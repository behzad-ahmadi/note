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
        const registration = await navigator.serviceWorker.register('./sw.js')
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

const showNotificationWithServiceWorker = async (
  title: string,
  options: NotificationOptions,
  registration: ServiceWorkerRegistration
) => {
  if (Notification.permission === 'granted') {
    if (registration.active) {
      registration.active.postMessage({ title, options })
    } else {
      registration.showNotification(title, options)
    }
  } else if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      registration.showNotification(title, options)
    }
  }
}

export const showNotification = (
  title: string,
  options: NotificationOptions
) => {
  if (typeof window == 'undefined') return

  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification')
    return
  }

  if (Notification.permission === 'granted') {
    new Notification(title, options)
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, options)
      }
    })
  }
}
