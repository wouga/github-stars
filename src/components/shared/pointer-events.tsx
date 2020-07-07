import React from 'react';

export const PointerEvents: React.FC<{ disabled: boolean }> = ({ disabled, children }) => {
    if (disabled) {
        return <div style={{ pointerEvents: 'none' }}>{children}</div>;
    }

    return <>{children}</>;
};
