import "../src/stories/assets/css/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "ui/styles/index.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
