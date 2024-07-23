import React from 'react';
import { handleClassNames } from './classNameHandler';

export default function useClassNames(baseClass: string, props: Record<string, any>) {
    return React.useMemo(() => handleClassNames(baseClass, props), [baseClass, props]);
}
