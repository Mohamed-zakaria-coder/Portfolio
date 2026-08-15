import React from "react";
import { TbLetterM } from "react-icons/tb";
import { motion } from "framer-motion";
import "../../styles/home/loading.css";
export default function Loading() {
  return (
    <div className="loading-parent">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <TbLetterM className="m-icon-loading" />
      </motion.div>
    </div>
  );
}
