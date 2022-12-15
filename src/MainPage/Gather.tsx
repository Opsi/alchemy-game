import React from 'react'
import { switchActivity, useStore } from '../store/store'

export const Gather = () => {
    const { activity, ingredients } = useStore((state) => ({
        activity: state.activity,
        ingredients: state.resources.ingredients,
    }))

    const isGathering = activity === 'gathering'
    const onClick = React.useCallback(() => switchActivity(isGathering ? 'idle' : 'gathering'), [isGathering])

    return (
        <div className="p-4 max-w-fit rounded-md border-4 text-lime-200 border-lime-200">
            <div className="text-4xl text-center mb-5">Forest</div>
            <div className="flex items-center space-x-4">
                <button
                    className="
                        border-2 text-xl rounded-sm px-3 py-2 border-lime-200 w-36 
                        enabled:hover:bg-white enabled:hover:text-black enabled:hover:border-black"
                    onClick={onClick}
                >
                    {isGathering ? 'Gathering...' : 'Gather'}
                </button>
                <div className="">Ingredients: {ingredients}</div>
            </div>
        </div>
    )
}
