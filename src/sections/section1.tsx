import { Children, FC, ReactNode, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTrail, a } from "@react-spring/web";
import "./section1.css";

const Trail: FC<{ open: boolean; children: ReactNode }> = ({
  open,
  children,
}) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 200, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={"trailsText"} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const TypoHead: FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    variant="h1"
    component="span"
    textTransform="uppercase"
    fontWeight={700}
    lineHeight={0.8}
    sx={{ color: "white", textAlign: "left" }}
  >
    {children}
  </Typography>
);

interface SectionOneProps {}

export const SectionOne: FC<SectionOneProps> = () => {
  const [open, set] = useState(true);
  return (
    <Box className="container section">
      <Box width={719} onClick={() => set((state) => !state)} my="40vh">
        <Trail open={open}>
          <TypoHead>animation</TypoHead>
          <TypoHead>presentation</TypoHead>
        </Trail>
      </Box>
    </Box>
  );
};
