import { defineConfig } from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";
import  {glob}  from  'glob';

function globHtmlFiles(pattern) {
  const files = glob.sync(pattern);
  const entries = {};
  files.forEach(file => {
    const name = file.replace(/^src\/(.*?)\.html$/i, '$1');
    entries[name] = file;
  });
  return entries;
}

export default defineConfig({
  plugins: [
    ViteEjsPlugin((viteConfig) => {
      // 設定傳入 ejs 的變數
      return {
        root: viteConfig,
        domain: "example.com",
        title: "My vue project!"
      }
    }),
  ],
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
        input: {
          // 使用 glob 模式來匹配多個 HTML 檔案
          ...globHtmlFiles('src/**/*.html'),
        },
    },
  },
  base: "./",
  root: "src"
});
