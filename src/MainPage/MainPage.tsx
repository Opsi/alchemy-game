import { Experiment } from './Experiment'
import { Gather } from './Gather'
import { Log } from './Log'

export const MainPage: React.FC = () => {
    return (
        <div className="grid grid-cols-2 p-2 w-1/2 min-w-fit mx-auto gap-8">
            <div className="row-span-2">
                <Log />
            </div>
            <Gather />
            <Experiment />
        </div>
    )
}
