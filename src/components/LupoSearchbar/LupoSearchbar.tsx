import { useClassNames } from '@/utils/classNames';
import { SearchIcon } from './SearchIcon';
import { LupoSearchbarProps } from './types';

import './styles.css';

export default function LupoSearchBar({ ...props }: LupoSearchbarProps) {
    const classNames = useClassNames('LupoSearchbar', { props });

    return (
        <div className={classNames}>
            <SearchIcon></SearchIcon>
            <input
                disabled={props.disabled}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}>
                {props.children}
            </input>
        </div>
    );
}
