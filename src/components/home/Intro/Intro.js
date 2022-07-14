import React from "react";
import { useSpring, animated } from 'react-spring'

function Intro() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 600,
      })
    

    return (
        <animated.div style={{ props, backgroundColor: "#fff" }} className="border-none d-flex justify-content-center py-5">
                <div className="w-50 text-center">
                    <h2>An Experience That Lasts a Lifetime.</h2>
                    <p>Since 1835, The Sudarshana Maha Vidyalaya has been devoted to producing gentlemen capable of spearheading change and
                        advancement. Its multicultural environment fosters the free exchange of ideas and the celebration of
                        diverse identities. Possessing a rich history of tradition but never limited by it, the College has
                        always maintained adaptation as the key to excellence.</p>
                </div>
        </animated.div>
    )
}

export default Intro;