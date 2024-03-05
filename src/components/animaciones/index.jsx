"use client";
import { motion } from "framer-motion";

function Animation(props) {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className={props.style}
      >
        {props.children}
      </motion.div>
    </div>
  );
}

export default Animation;
