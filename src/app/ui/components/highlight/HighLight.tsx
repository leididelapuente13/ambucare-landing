import React, { ReactNode } from 'react';

export const HighLight = ({ children }: { children: ReactNode }) => {
    return (
        <span className="text-green-secondary font-bold">
            {children}
        </span>
    );
};
