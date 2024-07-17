import './styles.css';

interface LupoButtonProps extends React.PropsWithChildren {
    variant?: 'primary' | 'secondary';
}

export default function LupoButton(props: LupoButtonProps) {
    const handleClassNames = ({ variant }: LupoButtonProps) => {
        return `LupoButton${variant ? ` LupoButton--${variant}` : ''}`;
    };

    return <button className={handleClassNames(props)}>{props.children}</button>;
}
