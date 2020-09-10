import React from 'react'

export default function Loading() {
    return (
        <div>
            <>
            <div className="flex items-center justify-center h-screen w-screen fixed bg-indigo-600 opacity-75 z-50">
                <svg className="bg-white animate-spin h-5 w-5 lg:h-10 lg:w-10 mr-3" viewBox="0 0 24 24"></svg>
            </div>
            </>
        </div>
    )
}
