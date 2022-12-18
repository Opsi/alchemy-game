export type AlchemistActivity = 'idle' | 'gathering' | 'experimenting'

export const NEEDED_PROGRESS = 100

export type TickFunction = (state: StoreState) => StoreState

export interface StoreState {
    activity: AlchemistActivity
    stats: {
        totalFoundIngredients: number
        totalConsumedIngredients: number
        totalPreparedExperiments: number
        totalConductedExperiments: number
        totalGainedKnowledge: number
    }
    forest: {
        progress: number
        progressPerTick: number
        findMin: number
        findRange: number
    }
    lab: {
        progress: number
        progressPerTick: number
    }
    resources: {
        ingredients: number
        preparedExperiments: number
        knowledge: number
    }
}
