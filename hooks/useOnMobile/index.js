import { useEffect, useState } from "react";

const useOnMobile = function(query = '(max-width: 768px)') {
    const [isBreakpoint, setIsBreakpoint] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mq = window.matchMedia(query);
        const updateState = (e) => {
            setIsBreakpoint(e.matches);
        }

        mq.addEventListener('change', updateState);
        return () => mq.removeEventListener('change', updateState);
    });

    return isBreakpoint;
}

export default useOnMobile;