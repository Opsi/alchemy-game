import React from 'react'
import { labTheme } from '../components/colors'
import { ThemeBox } from '../components/ThemeBox'
import { ThemeBoxHeader } from '../components/ThemeHeader'
import { ingredientsForNextExperiment, prepareExperiment, switchActivity, useStore } from '../store/store'

export const Lab: React.FC = () => {
    const { progress, prepared, knowledge, cost, ingredients } = useStore((state) => ({
        ingredients: state.resources.ingredients,
        progress: state.lab.progress,
        prepared: state.resources.preparedExperiments,
        knowledge: state.resources.knowledge,
        cost: ingredientsForNextExperiment(state),
    }))
    const cantPrepare = cost > ingredients
    return (
        <ThemeBox theme={labTheme}>
            <ThemeBoxHeader text="Laboratory" />
            <div className="flex space-x-2">
                <div className="grid grid-cols-1 gap-2">
                    <button
                        disabled={cantPrepare}
                        className="
                        border-2 text-md rounded-sm px-3 py-2 border-cyan-200 w-36 
                        enabled:hover:bg-white enabled:hover:text-black enabled:hover:border-black
                        disabled:text-cyan-600 disabled:border-cyan-600"
                        onClick={prepareExperiment}
                    >
                        Prepare
                    </button>
                    <button
                        className="
                        border-2 text-md rounded-sm px-3 py-2 border-cyan-200 w-36 
                        enabled:hover:bg-white enabled:hover:text-black enabled:hover:border-black"
                        onClick={() => switchActivity('experimenting')}
                    >
                        {true ? 'Experimenting...' : 'Experiment'}
                    </button>
                </div>
                <div className="border-2 border-cyan-200 p-2">
                    <table className="text-sm text-left table-auto uppercase">
                        <tbody>
                            <tr>
                                <td className="py-2 px-5">Ingredients for Experiment:</td>
                                <td className="py-2 px-5">{cost}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-5">Prepared:</td>
                                <td className="py-2 px-5">{prepared}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-5">Knowledge:</td>
                                <td className="py-2 px-5">{knowledge}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ThemeBox>
    )
}
