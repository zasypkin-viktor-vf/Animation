import { FC } from "react";
import { Typography } from "@mui/material";
import { Variants, motion } from "framer-motion";

import "./section2.css";

const cardVariants: Variants = {
  offscreen: {
    x: -1000,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 5.8,
    },
  },
};

export const SectionTwo: FC = () => {
  return (
    <>
      <motion.div
        className="card"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
      >
        <motion.div variants={cardVariants}>
          <Typography variant="h2" sx={{ fontWeight: "900" }}>
            React packages
          </Typography>
          <Typography variant="h6">&nbsp;</Typography>
          <Typography variant="h3">
            <a href="https://www.react-spring.dev/">React Spring</a>
          </Typography>
          <Typography variant="h3">2 645 497 bytes (2,9 MB on disk)</Typography>
          <Typography variant="h6">&nbsp;</Typography>
          <Typography variant="h3">
            <a href="https://www.framer.com/motion/">Framer Motion</a>
          </Typography>
          <Typography variant="h3">3 018 321 bytes (4,2 MB on disk)</Typography>
        </motion.div>
      </motion.div>
    </>
  );
};
