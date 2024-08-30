import React from 'react'

export default function TabContentWrapper({ children }) {
    return (
        <div className="px-base py-xl bg-secondary rounded-md">
            <div className="grid gap-block md:grid-cols-2">
                {children}
            </div>
        </div>
    )
}
