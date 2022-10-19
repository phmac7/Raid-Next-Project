import * as NextImage from "next/image";
import "@/styles/variables.css";
import "@/styles/globals.scss";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  backgrounds: {
    default: "dark",
    values: [
      { name: "dark", value: "#202024" },
      { name: "light", value: "#f0f0f0" },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: "defaults",
  },
};
