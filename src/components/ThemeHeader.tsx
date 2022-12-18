interface Props {
    text: string
}

export const ThemeBoxHeader: React.FC<Props> = ({ text }) => <div className="text-4xl text-left pb-10">{text}</div>
