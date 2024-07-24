import React from 'react';

export interface LupoSearchbarProps extends React.PropsWithChildren {
    disabled?: boolean;
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
