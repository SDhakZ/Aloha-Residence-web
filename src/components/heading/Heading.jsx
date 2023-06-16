import React from "react";
import PageHeadingCSS from "./heading.module.css";
import { useSpring, animated, easings } from "react-spring";
const Heading = (props) => {
  const style = useSpring({
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 800, easing: easings.easeOutBack },
  });
  return (
    <animated.div style={style}>
      <h1
        style={props.invert ? { color: "#fafafa" } : null}
        className={PageHeadingCSS["page-heading"]}
      >
        {props.headingName}
      </h1>
    </animated.div>
  );
};

export default Heading;
