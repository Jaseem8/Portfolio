import React, { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion, useTransform } from "framer-motion";

/**
 * A versatile counter that can find a number within a string and animate it.
 * Uses motion.span for high performance without triggering React re-renders.
 */
const Counter = ({ value, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract the first number (integer or float)
  const stringValue = value.toString();
  const match = stringValue.match(/(\d+(\.\d+)?)/);
  const numericValue = match ? parseFloat(match[0]) : 0;
  
  // Split string into [before, after] the number
  const parts = match ? stringValue.split(match[0]) : [stringValue, ""];

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });

  useEffect(() => {
    if (isInView && match) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, match, motionValue]);

  // Handle precision and formatting inside a transform to avoid React re-renders
  const decimalPlaces = match && match[0].includes('.') ? match[0].split('.')[1].length : 0;
  
  // Create a transformed motion value for the display
  const roundedValue = useTransform(springValue, (latest) => {
    return latest.toFixed(decimalPlaces);
  });

  return (
    <span ref={ref}>
      {parts[0]}
      {match && (
        <motion.span style={{ color: color || 'inherit', fontWeight: 'inherit' }}>
          {roundedValue}
        </motion.span>
      )}
      {parts[1]}
    </span>
  );
};

export default Counter;
