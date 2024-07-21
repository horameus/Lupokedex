import './styles.css';

interface LupoButtonProps extends React.PropsWithChildren {
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
}

export default function LupoButton(props: LupoButtonProps) {
    const handleClassNames = ({ variant, disabled }: LupoButtonProps) => {
        const isVariant = `LupoButton${variant ? ` LupoButton--${variant}` : ''}`;
        const isDisabled = disabled ? ` disabled` : '';

        return isVariant + isDisabled;
    };

    return (
        <button className={handleClassNames(props)} disabled={props.disabled}>
            {props.children}
        </button>
    );
}
