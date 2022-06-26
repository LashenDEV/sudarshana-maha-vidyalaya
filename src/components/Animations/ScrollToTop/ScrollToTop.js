import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function ScrollToTop({history}) {
    const routePath = useLocation();
    console.log(routePath);
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    return null;
}

export default ScrollToTop;