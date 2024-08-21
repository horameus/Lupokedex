import { useClassNames } from '@/utils/classNames';
import { LupoSearchbarProps } from './types';

import { LupoIcon } from '../LupoIcon';
import './styles.css';

export default function LupoSearchBar(props: LupoSearchbarProps) {
    const classNames = useClassNames('LupoSearchbar', props);

    return (
        <div className={classNames}>
            <LupoIcon.SearchIcon />
            <input {...props} type="text" />
        </div>
    );
}
