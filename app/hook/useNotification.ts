'use client'
import { useEffect } from 'react'

export default function useNotification() {
  useEffect(() => {
    registerServiceWorker()
  }, [])

  return { showNotification }
}

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      await requestNotificationPermission()
      console.log('Service Worker registered with scope:', registration.scope)
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    }
  }
}

const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    try {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        console.log('Notification permission granted.')
        return true
      } else {
        console.log('Notification permission denied.')
        return false
      }
    } catch (error) {
      console.error('Notification permission request failed:', error)
    }
  }
}

export interface INotification {
  title: string
  options?: { body: string; icon: string; data?: { url: string } }
}

const showNotification = async ({ title, options }: INotification) => {
  const allowed = await requestNotificationPermission()

  if (!allowed) return

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, options)
    })
  }
}
