import { PropsWithChildren } from 'react'
import { Theme } from './colors'

interface Props {
    theme: Theme
}

export const ThemeBox: React.FC<PropsWithChildren<Props>> = ({ theme, children }) => (
    <div
        className={`
            pt-6 px-4 pb-4 h-full rounded-md border-4
            ${theme.border} ${theme.text}
            bg-gradient-to-b ${theme.background}
        `}
    >
        {children}
    </div>
)
