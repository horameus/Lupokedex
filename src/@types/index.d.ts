export interface LupoButtonProps extends React.PropsWithChildren {
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
