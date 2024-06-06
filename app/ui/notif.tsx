'use client'

import { useEffect } from 'react'

export default function Notif() {
  useEffect(() => {
    const handleShowNotification = () => {
      const title = 'Hello!'
      const options = {
        body: 'This is a notification from your Next.js app.',
      }
      showNotification(title, options)
    }
    handleShowNotification()
  }, [])

  return <></>
}

export const showNotification = (title: string, options: any) => {
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
