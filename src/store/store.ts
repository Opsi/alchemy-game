import create from 'zustand'
import { alchemistExperiments } from './lab'
import { AlchemistActivity, NEEDED_PROGRESS, StoreState, TickFunction } from './schema'

export const ingredientsForNextExperiment = (state: StoreState) => 5 + state.stats.totalPreparedExperiments

export const useStore = create<StoreState>(() => ({
    activity: 'idle',
    stats: {
        totalFoundIngredients: 0,
        totalConsumedIngredients: 0,
        totalPreparedExperiments: 0,
        totalConductedExperiments: 0,
        totalGainedKnowledge: 0,
    },
    forest: {
        progress: 0,
        progressPerTick: 2,
        findMin: 1,
        findRange: 2,
    },
    lab: {
        progress: 0,
        progressPerTick: 2,
    },
    resources: {
        ingredients: 0,
        preparedExperiments: 0,
        knowledge: 0,
    },
}))

const alchemistGathers: TickFunction = (state) => {
    const { progress, progressPerTick, findMin, findRange } = state.forest
    let newProgress = progress + progressPerTick
    const findings = Math.floor(newProgress / NEEDED_PROGRESS)
    newProgress = newProgress - findings * NEEDED_PROGRESS

    let foundIngredients = 0
    for (let i = 0; i < findings; i++) {
        foundIngredients += findMin + Math.floor(Math.random() * findRange)
    }
    return {
        ...state,
        forest: {
            ...state.forest,
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
        case 'experimenting':
            return alchemistExperiments(state)
    }
}

export const prepareExperiment = () => {
    const state = useStore.getState()
    const cost = ingredientsForNextExperiment(state)
    const ingredients = state.resources.ingredients
    if (cost > ingredients) return
    useStore.setState({
        resources: {
            ...state.resources,
            ingredients: state.resources.ingredients - cost,
            preparedExperiments: state.resources.preparedExperiments + 1,
        },
        stats: {
            ...state.stats,
            totalConsumedIngredients: state.stats.totalConsumedIngredients + cost,
            totalPreparedExperiments: state.stats.totalPreparedExperiments + 1,
        },
    })
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
