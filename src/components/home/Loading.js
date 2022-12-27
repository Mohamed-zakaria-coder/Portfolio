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
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
      >
        <TbLetterM className="m-icon-loading" />
      </motion.div>
    </div>
  );
}
