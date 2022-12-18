import { logTheme } from '../components/colors'
import { ThemeBox } from '../components/ThemeBox'
import { ThemeBoxHeader } from '../components/ThemeHeader'

export const Log: React.FC = () => {
    return (
        <ThemeBox theme={logTheme}>
            <ThemeBoxHeader text="Log" />
            <div className="flex items-center space-x-4"></div>
        </ThemeBox>
    )
}
