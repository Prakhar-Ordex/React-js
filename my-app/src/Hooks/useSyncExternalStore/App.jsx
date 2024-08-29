import React, { useSyncExternalStore } from 'react'

const App = () => {
    const widht = useSyncExternalStore((lisnter) => {
        window.addEventListener('resize', lisnter)
        return () => {
            window.removeEventListener('resize',lisnter)
        }
    }, () => {
        return window.innerWidth
    })
    return (
    <div>
            <h4>useSyncExternalStore hooks</h4>
            
            <p>window size : {widht}</p>
    </div>
  )
}

export default App