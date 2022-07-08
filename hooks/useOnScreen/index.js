import { useEffect, useState } from "react";

const useOnScreen = function(ref) {
    const [isOnScreen, setIsOnScreen] = useState(false);
    const observer = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting));

    useEffect(() => {
        observer.observe(ref.current);
        return () => observer.disconnect();
    });

    return isOnScreen;
}

export default useOnScreen;