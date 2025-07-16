/* eslint-disable prefer-const */
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

const ButtonCTA: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    let baseStyle =
        'px-[28px] py-[16px] rounded-full w-fit text-[16px] focus:outline-none transition-transform duration-500 ease-in-out';

    let variantStyle = '';

    if (variant === 'primary') {
        variantStyle = 'bg-gr3010 text-p900 hover:bg-gr4020';
    } else if (variant === 'secondary') {
        variantStyle = 'bg-gr4020 text-gray-800 hover:bg-gr5030';
    } else if (variant === 'ghost') {
        variantStyle = 'bg-transparent text-p50 hover:text-p900 hover:bg-gr4020 border border-gr3020';
    }

    return (
        <button
            className={`${baseStyle} ${variantStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonCTA;
