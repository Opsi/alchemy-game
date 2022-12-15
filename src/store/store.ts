import create from 'zustand'

export type AlchemistActivity = 'idle' | 'gathering'

const NEEDED_PROGRESS = 100

interface State {
    activity: AlchemistActivity
    stats: {
        totalFoundIngredients: number
        totalConsumedIngredients: number
    }
    gather: {
        progress: number
        progressPerTick: number
        findMin: number
        findRange: number
    }
    resources: {
        ingredients: number
    }
}

export const useStore = create<State>(() => ({
    activity: 'idle',
    stats: {
        totalFoundIngredients: 0,
        totalConsumedIngredients: 0,
    },
    gather: {
        progress: 0,
        progressPerTick: 2,
        findMin: 0,
        findRange: 2,
    },
    resources: {
        ingredients: 0,
    },
}))

type TickFunction = (state: State) => State

const alchemistGathers: TickFunction = (state) => {
    const { progress, progressPerTick, findMin, findRange } = state.gather
    let newProgress = progress + progressPerTick
    const findings = Math.floor(newProgress / NEEDED_PROGRESS)
    newProgress = newProgress - findings * NEEDED_PROGRESS

    let foundIngredients = 0
    for (let i = 0; i < findings; i++) {
        foundIngredients += findMin + Math.floor(Math.random() * findRange)
    }
    return {
        ...state,
        gather: {
            ...state.gather,
            progress: newProgress,
        },
        stats: {
            ...state.stats,
            totalFoundIngredients: state.stats.totalFoundIngredients + foundIngredients,
        },
        resources: {
            ...state.resources,
            ingredients: state.resources.ingredients + foundIngredients,
        },
    }
}

const alchemistActivity: TickFunction = (state) => {
    switch (state.activity) {
        case 'idle':
            return state
        case 'gathering':
            return alchemistGathers(state)
    }
}

export const switchActivity = (newActivity: AlchemistActivity) => {
    console.log('Activity:', newActivity)
    useStore.setState({
        activity: newActivity,
    })
}

export const tick = () => {
    console.log('tick')
    let state = useStore.getState()
    state = alchemistActivity(state)
    useStore.setState(state)
}
