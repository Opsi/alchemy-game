export interface TotalState {
  ticks: number
  skills: number
  potionRecipes: number
  brewedPotions: number
  drankPotions: number
  soldPotions: number
  gold: number
  caughtRats: number
  tamedRats: number
  trainedRatGatherers: number
  trainedRatQuacks: number
  trainedRatAlchemists: number
  trainedRatBreeder: number
  trainedRatTrainer: number
}

export interface MilestoneState {
  total: TotalState
  learnedSellPotions: boolean
  learnedAutoSearch: boolean
  boughtLiveRatTrap: boolean
  learnedTameRats: boolean
  learnedTrainRatGatherer: boolean
  learnedTrainRatQuack: boolean
  learnedTrainRatBreeder: boolean
  learnedTrainRatAlchemist: boolean
  learnedTrainRatTrainer: boolean
}

export const initialMilestoneState: MilestoneState = {
  learnedSellPotions: false,
  learnedAutoSearch: false,
  boughtLiveRatTrap: false,
  learnedTameRats: false,
  learnedTrainRatGatherer: false,
  learnedTrainRatQuack: false,
  learnedTrainRatBreeder: false,
  learnedTrainRatAlchemist: false,
  learnedTrainRatTrainer: false,
  total: {
    ticks: 0,
    skills: 0,
    potionRecipes: 0,
    brewedPotions: 0,
    drankPotions: 0,
    soldPotions: 0,
    gold: 0,
    caughtRats: 0,
    tamedRats: 0,
    trainedRatGatherers: 0,
    trainedRatQuacks: 0,
    trainedRatAlchemists: 0,
    trainedRatBreeder: 0,
    trainedRatTrainer: 0
  }
}
