import React from 'react';
import { useMotionValue, motion, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const CountMotion = ({value, speed}:{value:number, speed:number}) => {

const count = useMotionValue(0);
const rounded = useTransform(count, latest => Math.round(latest));

useEffect(() => {
  const controls = animate(count, value, { duration: speed })

  return () => controls.stop()
}, [count, value, speed]);


  return (
    <motion.div>{rounded}</motion.div>
  )
}

export default CountMotion;