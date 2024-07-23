import { LupoButtonProps } from '@/@types';

export const handleClassNames = ({ variant, disabled }: LupoButtonProps) => {
    const isVariant = `LupoButton${variant ? ` LupoButton--${variant}` : ''}`;
    const isDisabled = disabled ? ` disabled` : '';

    return isVariant + isDisabled;
};
