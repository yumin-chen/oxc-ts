import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    dts: true,
    exports: true,
    format: "esm",
    entry: ["./src/main.ts"],
    outDir: "dist",
  },
});
