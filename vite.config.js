import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       // Resolve SVG imports as React components using @svgr/webpack
//       output: {
//         manualChunks(id) {
//           if (id.endsWith(".svg")) {
//             return "svg";
//           }
//         },
//       },
//     },
//   },
// });
