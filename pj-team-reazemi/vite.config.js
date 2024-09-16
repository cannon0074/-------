import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 他のデバイスからアクセス可能にする
    port: 3000, // 使用したいポート番号
  },
});
