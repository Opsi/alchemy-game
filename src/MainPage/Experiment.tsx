import React from 'react'

export const Experiment: React.FC = () => {
    return (
        <div className="p-4 h-full rounded-md border-4 text-cyan-200 border-cyan-200">
            <div className="text-4xl text-center mb-5">Laboratory</div>
            <div className="flex items-center space-x-4">
                <button
                    className="
                        border-2 text-md rounded-sm px-3 py-2 border-cyan-200 w-36 
                        enabled:hover:bg-white enabled:hover:text-black enabled:hover:border-black"
                >
                    {true ? 'Experimenting...' : 'Experiment'}
                </button>
                <div className="">Knowledge: 0</div>
            </div>
        </div>
    )
}
