import React, {useState} from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Ticker = ({className, ...rest}) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp {...rest} start={viewPortEntered ? null : 0}>
            {({countUpRef}) => {
                return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                        }}
                        delayedCall
                    >
                        <h1 className={className}
                            style={{fontFamily: 'Roboto Mono', fontWeight: "500", fontSize: "100px", color: "rgb(55 44 27)"}} ref={countUpRef}/>
                    </VisibilitySensor>
                );
            }}
        </CountUp>
    );
};

export default Ticker;