import React from 'react'
import { forestTheme } from '../components/colors'
import { ThemeBox } from '../components/ThemeBox'
import { ThemeBoxHeader } from '../components/ThemeHeader'
import { switchActivity, useStore } from '../store/store'

export const Forest = () => {
    const { activity, ingredients } = useStore((state) => ({
        activity: state.activity,
        ingredients: state.resources.ingredients,
    }))

    const isGathering = activity === 'gathering'
    const onClick = React.useCallback(() => switchActivity(isGathering ? 'idle' : 'gathering'), [isGathering])

    return (
        <ThemeBox theme={forestTheme}>
            <ThemeBoxHeader text="Forest" />
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
        </ThemeBox>
    )
}
