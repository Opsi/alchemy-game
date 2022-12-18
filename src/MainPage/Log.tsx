import { logTheme } from '../components/colors'
import { ThemeBox } from '../components/ThemeBox'

export const Log: React.FC = () => {
    return (
        <ThemeBox theme={logTheme}>
            <div className="text-4xl text-left mb-5">Log</div>
            <div className="flex items-center space-x-4"></div>
        </ThemeBox>
    )
}
