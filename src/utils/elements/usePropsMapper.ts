import React, { PropsWithChildren } from 'react';
import { handleAttributesConversion } from './elementHandler';

export default function usePropsMapper<T extends (Partial<unknown> & React.Attributes) & PropsWithChildren>(
    { children: childFromProps, ...props }: T,
    children?: React.ReactNode | undefined,
) {
    return React.useMemo(
        () =>
            React.Children.map(children ?? childFromProps, c =>
                React.isValidElement(c) ? React.cloneElement(c, { ...handleAttributesConversion(props) }) : c,
            ),
        [props, children, childFromProps],
    );
}
