import { NEEDED_PROGRESS, TickFunction } from './schema'

export const alchemistExperiments: TickFunction = (state) => {
    const { preparedExperiments, knowledge } = state.resources
    if (preparedExperiments == 0) return state
    const { progress, progressPerTick } = state.lab
    let currProgress = progress
    let unusedProgress = progressPerTick
    let experiments = 0
    let currPreparedExperiments = preparedExperiments
    while (currPreparedExperiments > 0) {
        if (currProgress + unusedProgress < NEEDED_PROGRESS) {
            currProgress += unusedProgress
            break
        }
        unusedProgress -= NEEDED_PROGRESS - currProgress
        currProgress = 0
        experiments++
        currPreparedExperiments--
    }
    return {
        ...state,
        lab: {
            ...state.lab,
            progress: currProgress,
        },
        resources: {
            ...state.resources,
            preparedExperiments: currPreparedExperiments,
            knowledge: knowledge + experiments,
        },
        stats: {
            ...state.stats,
            totalGainedKnowledge: state.stats.totalGainedKnowledge + experiments,
            totalConductedExperiments: state.stats.totalConductedExperiments + experiments,
        },
    }
}
