import { useState, useEffect } from 'react';

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
};

function getBreakpoint(width) {
    if (width >= breakpoints['2xl']) return '2xl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'xs';
}

function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState(() => getBreakpoint(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            const newBreakpoint = getBreakpoint(window.innerWidth);
            setBreakpoint(newBreakpoint);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return breakpoint;
}

export default useBreakpoint;
