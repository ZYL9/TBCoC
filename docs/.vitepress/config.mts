import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    title: "卡勒拜斯破碎的盟约",
    head: [["link", { rel: "icon", href: "favicon.ico" }]],
    description: "The Broken Covenant of Calebais",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: "/logo.png",
      nav: [
        { text: "Home", link: "/" },
        { text: "Docs", link: "/00-简介/00-简介.md" },
        { text: "About", link: "/0.关于.md" },
      ],

      socialLinks: [{ icon: "github", link: "https://github.com/ZYL9/TBCoC" }],
      outline: {
        level: [1, 3],
      },
      search: {
        provider: "local",
      },
      editLink: {
        pattern: "https://github.com/ZYL9/TBCoC/edit/main/docs/:path",
        text: "Edit this page on GitHub",
      },
      sidebar,
    },
    pwa: {
      includeAssets: ["favicon.ico"],
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{css,js,html,jpg,svg,png,ico,txt,woff2}"],
      },
      manifest: {
        name: "卡勒拜斯破碎的盟约",
        short_name: "卡勒拜斯破碎的盟约",
        description: "The Broken Covenant of Calebais",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo192.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "logo512.webp",
            sizes: "512x512",
            type: "image/webp",
          },
        ],
      },
    },
  })
);
