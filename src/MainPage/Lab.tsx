import React from 'react'
import { labTheme } from '../components/colors'
import { ThemeBox } from '../components/ThemeBox'

export const Lab: React.FC = () => {
    return (
        <ThemeBox theme={labTheme}>
            <div className="text-4xl text-left mb-5">Laboratory</div>
            <div className="flex space-x-2">
                <div className="grid grid-cols-1 gap-2">
                    <button
                        className="
                        border-2 text-md rounded-sm px-3 py-2 border-cyan-200 w-36 
                        enabled:hover:bg-white enabled:hover:text-black enabled:hover:border-black"
                    >
                        Prepare
                    </button>
                    <button
                        className="
                        border-2 text-md rounded-sm px-3 py-2 border-cyan-200 w-36 
                        enabled:hover:bg-white enabled:hover:text-black enabled:hover:border-black"
                    >
                        {true ? 'Experimenting...' : 'Experiment'}
                    </button>
                </div>
                <div className="border-2 border-cyan-200 p-2">
                    <table className="text-sm text-left table-auto uppercase">
                        <tbody>
                            <tr>
                                <tr className="py-2 px-5">Prepared:</tr>
                                <tr className="py-2 px-5">0</tr>
                            </tr>
                            <tr>
                                <tr className="py-2 px-5">Knowledge:</tr>
                                <tr className="py-2 px-5">0</tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ThemeBox>
    )
}
