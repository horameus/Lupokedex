import React from 'react';

export interface LupoSearchbarProps extends React.PropsWithChildren {
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
}
