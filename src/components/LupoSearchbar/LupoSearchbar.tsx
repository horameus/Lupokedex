import { useClassNames } from '@/utils/classNames';
import { LupoSearchbarProps } from './types';

import './styles.css';

export default function LupoButton({ ...props }: LupoSearchbarProps) {
    const classNames = useClassNames('LupoSearchbar', { props });

    return (
        <input className={classNames} disabled={props.disabled} onChange={props.onChange} value={props.value}>
            {props.children}
        </input>
    );
}
