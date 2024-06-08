'use client'

import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log(
            'Service Worker registered with scope:',
            registration.scope
          )
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error)
        })
    }
  }, [])

  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission()
        .then(permission => {
          if (permission === 'granted') {
            console.log('Notification permission granted.')
          } else {
            console.log('Notification permission denied.')
          }
        })
        .catch(error => {
          console.error('Notification permission request failed:', error)
        })
    }
  }

  const showNotification = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        const title = 'Hello, Next.js!'
        const options = {
          body: 'This is a notification with an image.',
          icon: '/image.png', // Ensure this image exists in the public folder
        }
        registration.showNotification(title, options)
      })
    }
  }

  const subscribeToPush = () => {
    navigator.serviceWorker.ready.then(registration => {
      registration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array('YOUR_PUBLIC_VAPID_KEY'),
        })
        .then(subscription => {
          console.log('User is subscribed:', subscription)
          // Send subscription to your server to save it
        })
        .catch(error => {
          console.error('Failed to subscribe the user: ', error)
        })
    })
  }

  const urlBase64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/')
    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  return (
    <div>
      <div className='flex flex-col gap-4'>
        <h1>Hello, Next.js!</h1>
        <button className='btn' onClick={requestNotificationPermission}>
          Request Notification Permission
        </button>
        <button className='btn' onClick={showNotification}>
          Show Notification
        </button>
        <button className='btn' onClick={subscribeToPush}>
          Subscribe to Push
        </button>
      </div>
    </div>
  )
}

export default Home
