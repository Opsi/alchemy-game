import React from 'react'
import { MainPage } from './MainPage/MainPage'
import { tick } from './store/store'

export const App: React.FC = () => {
    React.useEffect(() => {
        const interval = setInterval(tick, 100)
        return () => clearInterval(interval)
    })
    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-slate-800 to-gray-700">
            <MainPage />
        </div>
    )
}
