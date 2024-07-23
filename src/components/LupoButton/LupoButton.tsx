import { useClassNames } from '@/utils/classNames';
import { LupoButtonProps } from './types';

import './styles.css';

export default function LupoButton({ variant = 'primary', ...props }: LupoButtonProps) {
    const classNames = useClassNames('LupoButton', { variant, ...props });

    return (
        <button className={classNames} disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
