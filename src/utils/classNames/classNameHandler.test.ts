import { expect, test } from 'vitest';
import { handleClassNames, resolveClassName } from './classNameHandler';

const baseClassName = 'Jambon';

test('classNameHandler_WithAllowedBooleanProps_ReturnsClassNames', () => {
    const result = handleClassNames(baseClassName, { disabled: true });
    expect(result).toBe(`${baseClassName} ${baseClassName}--disabled`);
});

test('classNameHandler_WithAllowedStringProps_ReturnsClassNames', () => {
    const result = handleClassNames(baseClassName, { disabled: true, variant: 'primary' });
    expect(result).toBe(`${baseClassName} ${baseClassName}--disabled ${baseClassName}--primary`);
});

test('classNameHandler_WithClassNamesProps_ReturnsMergedClassNames', () => {
    const result = handleClassNames(baseClassName, { disabled: true, classNames: 'domino table--primary' });
    expect(result).toBe(`domino table--primary ${baseClassName} ${baseClassName}--disabled`);
});

test('classNameHandler_WithDisallowedProps_ReturnsEmptyString', () => {
    const result = handleClassNames(baseClassName, { disallowedProp: true });
    expect(result).toBe(baseClassName);
});

test('classNameHandler_WithFalsyBoolean_ReturnEmptyString', () => {
    const result = handleClassNames(baseClassName, { disabled: false });
    expect(result).toBe(baseClassName);
});

test('resolveClassName_ReturnsBuildedClassName', () => {
    const result = resolveClassName('Mdr', 'lol', 'xptdr');
    expect(result).toBe('Mdr--lol--xptdr');
});
