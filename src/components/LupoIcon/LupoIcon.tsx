import { useClassNames } from '@/utils/classNames';
import usePropsMapper from '@/utils/elements/usePropsMapper';
import './styles.css';
import { LupoIconProps } from './types';

export const BaseIcon = (props: LupoIconProps) => {
    const className = useClassNames('LupoIcon', props);
    return usePropsMapper({ ...props, className });
};
