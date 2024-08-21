const acceptedProps = ['disabled', 'variant'];

export const resolveClassName = (...str: Array<string | undefined>) => str.filter(Boolean).join('--');

export const handleClassNames = (baseClass: string, props: Record<string, any>) => {
    const classNames = [props.classNames, baseClass].filter(Boolean);

    Object.keys(props).forEach(key => {
        const value = props[key];

        acceptedProps.forEach(accepted => {
            if (accepted === key) {
                if (typeof value === 'boolean')
                    value === true && classNames.push(resolveClassName(baseClass, key));
                else classNames.push(resolveClassName(baseClass, value));
            }
        });
    });

    return classNames.join(' ');
};
