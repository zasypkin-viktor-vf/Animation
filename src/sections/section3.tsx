import { FC, useRef } from "react";
import { Box, Link, Typography } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { SectionTwo } from "./section2";

interface SectionThreeProps {}

export const SectionThree: FC<SectionThreeProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [3000, 0], {});

  return (
    <>
      <Box className="section" ref={ref}>
        <SectionTwo />
      </Box>
      <Box
        className="section"
        sx={{
          justifyContent: "start",
        }}
      >
        <motion.div style={{ x }}>
          <Box sx={{ position: "absolute", zIndex: 10, p: 3 }}>
            <Typography variant="h2" sx={{ fontWeight: "900" }}>
              Vanilla JS
            </Typography>
            <Typography variant="h6">&nbsp;</Typography>
            <Typography variant="h3">
              <a href="https://motion.dev/">motion.dev</a>
            </Typography>
            <Typography variant="h3">
              <a href="https://animejs.com/">animejs.com</a>
            </Typography>
            <Typography variant="h3">
              <a href="https://gsap.com/">gsap.com</a>
            </Typography>
            <Typography>&nbsp;</Typography>
            <Typography>
              <a href="https://wpshout.com/best-javascript-animation-libraries/#gref">
                more
              </a>
            </Typography>
          </Box>
          <img
            style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
            src={`/0t_yinilo4gl_1680x1050.jpg`}
          />
        </motion.div>
      </Box>
    </>
  );
};
