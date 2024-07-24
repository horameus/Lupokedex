import React from 'react';

export interface LupoSearchbarProps extends React.PropsWithChildren {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
