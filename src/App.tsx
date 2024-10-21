import "./App.css";
import { Box } from "@mui/material";
import { SectionOne } from "./sections/section1";
import { SectionThree } from "./sections/section3";
import { SectionFour } from "./sections/section4";

function App() {
  const iFrameStyle = {
    width: "80vw",
    height: "80vh",
    overflow: "hidden",
    border: 0,
    borderRadius: "4px",
  };

  return (
    <>
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <Box className="section">
        <iframe
          src="https://codesandbox.io/embed/zfy9p?view=preview&module=%2Fsrc%2FApp.tsx"
          style={iFrameStyle}
          title="Draggable List"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
      <Box className="section">
        <iframe
          src="https://codesandbox.io/embed/jnqk2?view=preview&module=%2Fsrc%2FExample.tsx"
          style={iFrameStyle}
          title="Framer Motion: Path drawing, drag and useTransform"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
      <Box className="section">
        <iframe
          src="https://codesandbox.io/embed/nlzui?view=preview"
          style={iFrameStyle}
          title="Tree List"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
      <Box className="section">
        <iframe
          src="https://codesandbox.io/embed/v1i1t?view=preview"
          style={iFrameStyle}
          title="Notification Hub"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
      <Box className="section">
        <iframe
          style={iFrameStyle}
          title="Scroll-triggered animations"
          src="https://codesandbox.io/embed/framer-motion-5-3-scroll-triggered-animations-2hbg5?fontsize=14&amp;hidenavigation=1&amp;theme=dark&amp;view=preview&amp;codemirror=1&amp;hidedevtools=1"
          data-lf-form-tracking-inspected-ywvko4xbvj18z6bj="true"
          data-lf-yt-playback-inspected-ywvko4xbvj18z6bj="true"
          data-lf-vimeo-playback-inspected-ywvko4xbvj18z6bj="true"
          data-gtm-yt-inspected-13="true"
        />
      </Box>
      <Box className="section">
        <iframe
          src="https://codesandbox.io/embed/i9gwuc?view=preview&module=%2Fsrc%2FApp.tsx"
          style={iFrameStyle}
          title="Framer Motion: Parallax"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>

      <Box className="section">
        <iframe
          style={iFrameStyle}
          src="https://codesandbox.io/embed/8c5y3?view=preview&module=%2Fsrc%2Findex.tsx"
          title="Framer Motion: Gesture animations"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>

      <Box className="section">
        <iframe
          style={iFrameStyle}
          src="https://codesandbox.io/embed/h1rrv?view=preview&module=%2Fsrc%2FApp.tsx"
          title="Vertical Parallax"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
      <Box className="section">
        <iframe
          style={iFrameStyle}
          src="https://codesandbox.io/embed/qx958?view=preview"
          title="Framer Motion: Accordion"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
      <Box className="section">
        <iframe
          style={iFrameStyle}
          src="https://codesandbox.io/embed/ecgc2?view=preview&module=%2Fsrc%2Futils%2Fuse-scroll-constraints.ts"
          title="App Store UI using React and Framer Motion"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
    </>
  );
}

export default App;
