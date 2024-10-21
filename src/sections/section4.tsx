import { FC } from "react";
import { Box } from "@mui/material";

interface SectionFourProps {}

export const SectionFour: FC<SectionFourProps> = () => {
  return (
    <Box className="section">
      <img
        style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
        src={`/0t_karsin1gl_1920x1200.jpg`}
      />
    </Box>
  );
};
