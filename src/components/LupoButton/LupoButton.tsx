import { LupoButtonProps } from '@/@types';
import { handleClassNames } from './utils';

import './styles.css';

export default function LupoButton(props: LupoButtonProps) {
    return (
        <button className={handleClassNames(props)} disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
