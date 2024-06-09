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
          icon: '/vercel.svg', // Ensure this image exists in the public folder
        }
        registration.showNotification(title, options)
      })
    }
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
      </div>
    </div>
  )
}

export default Home
