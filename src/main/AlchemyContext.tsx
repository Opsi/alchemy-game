import { createContext } from "react";
import { AlchemistActivity } from "./types";

export interface AlchemyContext {
    activity: AlchemistActivity
    gather: {
        neededProgress: number
        foundMin: number
        foundMax: number
    },
    experiment: {
        neededProgress: number
        ingredientsPerExperiment: number
        knowledgePerExperiment: number

    }
}

const initialAlchemyContext: AlchemyContext = {
    activity: 'none',
    gather: {
        neededProgress: 30,
        foundMin: 0,
        foundMax: 4,
    },
    experiment: {
        neededProgress: 100,
        ingredientsPerExperiment: 5,
        knowledgePerExperiment: 3,
    }
}

export const AlchemyContext = createContext(initialAlchemyContext);
