// vite.config.ts
import { defineConfig } from "file:///F:/Repo/puriUi/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import vue from "file:///F:/Repo/puriUi/node_modules/@vitejs/plugin-vue/dist/index.mjs";

// tailwind.config.ts
var tailwind_config_default = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./components/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
      xxl: "2560px"
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px 0, 0, 0, 0.3)",
        "sm-up": "0 -1px 2px 0, 0, 0, 0.05)",
        "up": "0 -1px 3px 0, 0, 0, 0.1)",
        "md-up": "0 -4px 6px -1px 0, 0, 0, 0.1), 0 -2px 4px -2px 0, 0, 0, 0.1)",
        "lg-up": "0 -10px 15px -3px 0, 0, 0, 0.1), 0 -4px 6px -4px 0, 0, 0, 0.1)",
        "xl-up": "0 -20px 25px -5px 0, 0, 0, 0.1), 0 -8px 10px -6px 0, 0, 0, 0.1)",
        "2xl-up": "0 25px 50px -12px 0, 0, 0, 0.25)"
      },
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          950: "var(--color-primary-950)"
        },
        paper: {
          50: "#F5F6FA",
          100: "#EEF0F6",
          200: "#DADEEC",
          300: "#C9D0E3",
          400: "#B0BBD5",
          500: "#B5BED9",
          600: "#A3AED0",
          700: "#707eae",
          800: "#2D396B",
          900: "#1B2559"
        },
        "cornflower-blue": {
          DEFAULT: "#6366F1",
          50: "#FFFFFF",
          100: "#F9F9FE",
          200: "#D3D4FB",
          300: "#AEAFF8",
          400: "#888AF4",
          500: "#6366F1",
          600: "#2B30EC",
          700: "#1218C8",
          800: "#0D1290",
          900: "#080B57",
          950: "#05083B"
        },
        "gold": {
          DEFAULT: "#BD8556",
          50: "#F1E5DA",
          100: "#EBDACC",
          200: "#E0C5AE",
          300: "#D4B091",
          400: "#C99A73",
          500: "#BD8556",
          600: "#9A663C",
          700: "#6E482B",
          800: "#422B1A",
          900: "#160E09",
          950: "#000000"
        },
        bronze: {
          DEFAULT: "#C17053",
          50: "#F1E0DA",
          100: "#ECD4CB",
          200: "#E1BBAD",
          300: "#D6A28F",
          400: "#CC8971",
          500: "#C17053",
          600: "#9D5339",
          700: "#703B29",
          800: "#432318",
          900: "#160C08",
          950: "#000000"
        }
      },
      fontFamily: {
        sans: [
          "HarmonyOS Sans SC",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "PingFang SC",
          "Roboto",
          "Microsoft YaHei",
          "sans-serif"
        ],
        serif: ["Merriweather", "serif"]
      }
    }
  },
  plugins: []
};

// vite.config.ts
import minimist from "file:///F:/Repo/puriUi/node_modules/minimist/index.js";
import terser from "file:///F:/Repo/puriUi/node_modules/@rollup/plugin-terser/dist/es/index.js";
import dts from "file:///F:/Repo/puriUi/node_modules/vite-plugin-dts/dist/index.mjs";
import autoprefixer from "file:///F:/Repo/puriUi/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwindcss from "file:///F:/Repo/puriUi/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_dirname = "F:\\Repo\\puriUi";
var __vite_injected_original_import_meta_url = "file:///F:/Repo/puriUi/vite.config.ts";
var { f } = minimist(process.argv.slice(2));
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "./dist/es",
      include: ["components/**/*.d.ts", "components/**/*.vue", "components/**/*.ts"]
    }),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "./dist/cjs",
      include: ["components/**/*.d.ts", "components/**/*.vue", "components/**/*.ts"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "#": fileURLToPath(new URL("./types", __vite_injected_original_import_meta_url)),
      "components": fileURLToPath(new URL("./components", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss(tailwind_config_default)]
    }
  },
  build: {
    sourcemap: true,
    // 构建时开启 source map
    cssCodeSplit: true,
    // 开启 css code split
    emptyOutDir: true,
    // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。若 outDir 在根目录之外则会抛出一个警告避免意外删除掉重要的文件。
    lib: {
      // 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
      // __dirname 的值是 vite.config.ts 文件所在目录
      entry: resolve(__vite_injected_original_dirname, "components", "index.ts"),
      // entry 是必需的，因为库不能使用HTML作为入口。
      name: "PuriUi",
      // 暴露的全局变量
      fileName: "index"
      // 输出的包文件名，默认是 package.json 的 name 选项
    },
    rollupOptions: {
      // 自定义底层的Rollup打包配置
      plugins: [terser()],
      // https://rollupjs.org/configuration-options/
      // 确保外部化处理那些你不想打包进库的依赖（作为外部依赖）
      external: [
        "vue",
        "@vuepic/vue-datepicker",
        "@vueuse/integrations/useQRCode",
        "@vueuse/core",
        "qrcode",
        "bootstrap-icons"
      ],
      // 当创建 iife 或 umd 格式的 bundle 时，你需要通过 output.globals 选项提供全局变量名，以替换掉外部引入。
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          name: "PuriUi",
          dir: "./dist"
        },
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "components",
          name: "PuriUi",
          dir: "./dist/es"
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          exports: "named",
          name: "PuriUi",
          preserveModules: true,
          inlineDynamicImports: false,
          preserveModulesRoot: "components",
          dir: "./dist/cjs",
          globals: {
            vue: "Vue",
            // 'vue-router': 'VueRouter', // 引入vue-router全局变量，否则router.push将无法使用
            "@vuepic/vue-datepicker": "VueDatePicker",
            "@vueuse/integrations/useQRCode": "UseQRCode",
            "@vueuse/core": "Core",
            qrcode: "qrcode",
            "bootstrap-icons": "bootstrap-icons"
          }
        },
        {
          format: "umd",
          entryFileNames: "[name].js",
          exports: "named",
          name: "PuriUi",
          dir: "./dist/umd",
          globals: {
            vue: "Vue",
            // 'vue-router': 'VueRouter', // 引入vue-router全局变量，否则router.push将无法使用
            "@vuepic/vue-datepicker": "VueDatePicker",
            "@vueuse/integrations/useQRCode": "UseQRCode",
            "@vueuse/core": "Core",
            qrcode: "qrcode"
          }
        }
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcUmVwb1xcXFxwdXJpVWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFJlcG9cXFxccHVyaVVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9SZXBvL3B1cmlVaS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgdGFpbHdpbmRDb25maWcgZnJvbSBcIi4vdGFpbHdpbmQuY29uZmlnXCI7XG5pbXBvcnQgbWluaW1pc3QgZnJvbSBcIm1pbmltaXN0XCI7XG5pbXBvcnQgdGVyc2VyIGZyb20gXCJAcm9sbHVwL3BsdWdpbi10ZXJzZXJcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG4vLyBcdTgzQjdcdTUzRDZcdTY3ODRcdTVFRkFcdTkwMDlcdTk4NzkgYnVpbGQ6YnJvd3NlciBcdTY1RjZcdUZGMENcdTRGMjBcdTUxNjVcdTc2ODRcdTUzRDhcdTkxQ0Y6IC1mIGlpZmVcbmNvbnN0IHsgZiB9ID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICB0c2NvbmZpZ1BhdGg6IFwiLi90c2NvbmZpZy5hcHAuanNvblwiLFxuICAgICAgb3V0RGlyOiBcIi4vZGlzdC9lc1wiLFxuICAgICAgaW5jbHVkZTogW1wiY29tcG9uZW50cy8qKi8qLmQudHNcIiwgXCJjb21wb25lbnRzLyoqLyoudnVlXCIsIFwiY29tcG9uZW50cy8qKi8qLnRzXCJdLFxuICAgIH0pLFxuICAgIGR0cyh7XG4gICAgICB0c2NvbmZpZ1BhdGg6IFwiLi90c2NvbmZpZy5hcHAuanNvblwiLFxuICAgICAgb3V0RGlyOiBcIi4vZGlzdC9janNcIixcbiAgICAgIGluY2x1ZGU6IFtcImNvbXBvbmVudHMvKiovKi5kLnRzXCIsIFwiY29tcG9uZW50cy8qKi8qLnZ1ZVwiLCBcImNvbXBvbmVudHMvKiovKi50c1wiXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBcIiNcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi90eXBlc1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgIFwiY29tcG9uZW50c1wiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL2NvbXBvbmVudHNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW2F1dG9wcmVmaXhlciwgdGFpbHdpbmRjc3ModGFpbHdpbmRDb25maWcpXSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSwgLy8gXHU2Nzg0XHU1RUZBXHU2NUY2XHU1RjAwXHU1NDJGIHNvdXJjZSBtYXBcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsIC8vIFx1NUYwMFx1NTQyRiBjc3MgY29kZSBzcGxpdFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLCAvLyBcdTlFRDhcdThCQTRcdTYwQzVcdTUxQjVcdTRFMEJcdUZGMENcdTgyRTUgb3V0RGlyIFx1NTcyOCByb290IFx1NzZFRVx1NUY1NVx1NEUwQlx1RkYwQ1x1NTIxOSBWaXRlIFx1NEYxQVx1NTcyOFx1Njc4NFx1NUVGQVx1NjVGNlx1NkUwNVx1N0E3QVx1OEJFNVx1NzZFRVx1NUY1NVx1MzAwMlx1ODJFNSBvdXREaXIgXHU1NzI4XHU2ODM5XHU3NkVFXHU1RjU1XHU0RTRCXHU1OTE2XHU1MjE5XHU0RjFBXHU2MjlCXHU1MUZBXHU0RTAwXHU0RTJBXHU4QjY2XHU1NDRBXHU5MDdGXHU1MTREXHU2MTBGXHU1OTE2XHU1MjIwXHU5NjY0XHU2Mzg5XHU5MUNEXHU4OTgxXHU3Njg0XHU2NTg3XHU0RUY2XHUzMDAyXG4gICAgbGliOiB7XG4gICAgICAvLyBcdTY3ODRcdTVFRkFcdTRFM0FcdTVFOTNcdTMwMDJcdTU5ODJcdTY3OUNcdTYzMDdcdTVCOUFcdTRFODYgYnVpbGQubGliXHVGRjBDYnVpbGQuY3NzQ29kZVNwbGl0IFx1NEYxQVx1OUVEOFx1OEJBNFx1NEUzQSBmYWxzZVx1MzAwMlxuICAgICAgLy8gX19kaXJuYW1lIFx1NzY4NFx1NTAzQ1x1NjYyRiB2aXRlLmNvbmZpZy50cyBcdTY1ODdcdTRFRjZcdTYyNDBcdTU3MjhcdTc2RUVcdTVGNTVcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJjb21wb25lbnRzXCIsIFwiaW5kZXgudHNcIiksIC8vIGVudHJ5IFx1NjYyRlx1NUZDNVx1OTcwMFx1NzY4NFx1RkYwQ1x1NTZFMFx1NEUzQVx1NUU5M1x1NEUwRFx1ODBGRFx1NEY3Rlx1NzUyOEhUTUxcdTRGNUNcdTRFM0FcdTUxNjVcdTUzRTNcdTMwMDJcbiAgICAgIG5hbWU6IFwiUHVyaVVpXCIsIC8vIFx1NjZCNFx1OTczMlx1NzY4NFx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIiwgLy8gXHU4RjkzXHU1MUZBXHU3Njg0XHU1MzA1XHU2NTg3XHU0RUY2XHU1NDBEXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGIHBhY2thZ2UuanNvbiBcdTc2ODQgbmFtZSBcdTkwMDlcdTk4NzlcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NUU5NVx1NUM0Mlx1NzY4NFJvbGx1cFx1NjI1M1x1NTMwNVx1OTE0RFx1N0Y2RVxuICAgICAgcGx1Z2luczogW3RlcnNlcigpXSxcbiAgICAgIC8vIGh0dHBzOi8vcm9sbHVwanMub3JnL2NvbmZpZ3VyYXRpb24tb3B0aW9ucy9cbiAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1Nlx1RkYwOFx1NEY1Q1x1NEUzQVx1NTkxNlx1OTBFOFx1NEY5RFx1OEQ1Nlx1RkYwOVxuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgXCJAdnVlcGljL3Z1ZS1kYXRlcGlja2VyXCIsXG4gICAgICAgIFwiQHZ1ZXVzZS9pbnRlZ3JhdGlvbnMvdXNlUVJDb2RlXCIsXG4gICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCIsXG4gICAgICAgIFwicXJjb2RlXCIsXG4gICAgICAgIFwiYm9vdHN0cmFwLWljb25zXCIsXG4gICAgICBdLFxuICAgICAgLy8gXHU1RjUzXHU1MjFCXHU1RUZBIGlpZmUgXHU2MjE2IHVtZCBcdTY4M0NcdTVGMEZcdTc2ODQgYnVuZGxlIFx1NjVGNlx1RkYwQ1x1NEY2MFx1OTcwMFx1ODk4MVx1OTAxQVx1OEZDNyBvdXRwdXQuZ2xvYmFscyBcdTkwMDlcdTk4NzlcdTYzRDBcdTRGOUJcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcdTU0MERcdUZGMENcdTRFRTVcdTY2RkZcdTYzNjJcdTYzODlcdTU5MTZcdTkwRThcdTVGMTVcdTUxNjVcdTMwMDJcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7XG4gICAgICAgICAgZm9ybWF0OiBcImVzXCIsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICAgICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgICAgIG5hbWU6IFwiUHVyaVVpXCIsXG4gICAgICAgICAgZGlyOiBcIi4vZGlzdFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZm9ybWF0OiBcImVzXCIsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICAgICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiBcImNvbXBvbmVudHNcIixcbiAgICAgICAgICBuYW1lOiBcIlB1cmlVaVwiLFxuICAgICAgICAgIGRpcjogXCIuL2Rpc3QvZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogXCJjanNcIixcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAgICAgbmFtZTogXCJQdXJpVWlcIixcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgaW5saW5lRHluYW1pY0ltcG9ydHM6IGZhbHNlLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6IFwiY29tcG9uZW50c1wiLFxuICAgICAgICAgIGRpcjogXCIuL2Rpc3QvY2pzXCIsXG4gICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICAgICAgLy8gJ3Z1ZS1yb3V0ZXInOiAnVnVlUm91dGVyJywgLy8gXHU1RjE1XHU1MTY1dnVlLXJvdXRlclx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlx1RkYwQ1x1NTQyNlx1NTIxOXJvdXRlci5wdXNoXHU1QzA2XHU2NUUwXHU2Q0Q1XHU0RjdGXHU3NTI4XG4gICAgICAgICAgICBcIkB2dWVwaWMvdnVlLWRhdGVwaWNrZXJcIjogXCJWdWVEYXRlUGlja2VyXCIsXG4gICAgICAgICAgICBcIkB2dWV1c2UvaW50ZWdyYXRpb25zL3VzZVFSQ29kZVwiOiBcIlVzZVFSQ29kZVwiLFxuICAgICAgICAgICAgXCJAdnVldXNlL2NvcmVcIjogXCJDb3JlXCIsXG4gICAgICAgICAgICBxcmNvZGU6IFwicXJjb2RlXCIsXG4gICAgICAgICAgICBcImJvb3RzdHJhcC1pY29uc1wiOiBcImJvb3RzdHJhcC1pY29uc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6IFwidW1kXCIsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICAgICAgZXhwb3J0czogXCJuYW1lZFwiLFxuICAgICAgICAgIG5hbWU6IFwiUHVyaVVpXCIsXG4gICAgICAgICAgZGlyOiBcIi4vZGlzdC91bWRcIixcbiAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICB2dWU6IFwiVnVlXCIsXG4gICAgICAgICAgICAvLyAndnVlLXJvdXRlcic6ICdWdWVSb3V0ZXInLCAvLyBcdTVGMTVcdTUxNjV2dWUtcm91dGVyXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHVGRjBDXHU1NDI2XHU1MjE5cm91dGVyLnB1c2hcdTVDMDZcdTY1RTBcdTZDRDVcdTRGN0ZcdTc1MjhcbiAgICAgICAgICAgIFwiQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlclwiOiBcIlZ1ZURhdGVQaWNrZXJcIixcbiAgICAgICAgICAgIFwiQHZ1ZXVzZS9pbnRlZ3JhdGlvbnMvdXNlUVJDb2RlXCI6IFwiVXNlUVJDb2RlXCIsXG4gICAgICAgICAgICBcIkB2dWV1c2UvY29yZVwiOiBcIkNvcmVcIixcbiAgICAgICAgICAgIHFyY29kZTogXCJxcmNvZGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXFJlcG9cXFxccHVyaVVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxSZXBvXFxcXHB1cmlVaVxcXFx0YWlsd2luZC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L1JlcG8vcHVyaVVpL3RhaWx3aW5kLmNvbmZpZy50c1wiOy8qKiBAdHlwZSB7aW1wb3J0KCd0YWlsd2luZGNzcycpLkNvbmZpZ30gKi9cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcInRhaWx3aW5kY3NzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb250ZW50OiBbXCIuL2luZGV4Lmh0bWxcIiwgXCIuL3NyYy8qKi8qLnt2dWUsanMsdHMsanN4LHRzeH1cIiwgXCIuL2NvbXBvbmVudHMvKiovKi57dnVlLGpzLHRzLGpzeCx0c3h9XCJdLFxyXG4gIGRhcmtNb2RlOiBcImNsYXNzXCIsXHJcbiAgdGhlbWU6IHtcclxuICAgIHNjcmVlbnM6IHtcclxuICAgICAgc206IFwiNjAwcHhcIixcclxuICAgICAgbWQ6IFwiOTYwcHhcIixcclxuICAgICAgbGc6IFwiMTI4MHB4XCIsXHJcbiAgICAgIHhsOiBcIjE5MjBweFwiLFxyXG4gICAgICB4eGw6IFwiMjU2MHB4XCIsXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5kOiB7XHJcbiAgICAgIGJveFNoYWRvdzoge1xyXG4gICAgICAgIFwiM3hsXCI6IFwiMCAzNXB4IDYwcHggLTE1cHggMCwgMCwgMCwgMC4zKVwiLFxyXG4gICAgICAgIFwic20tdXBcIjogXCIwIC0xcHggMnB4IDAsIDAsIDAsIDAuMDUpXCIsXHJcbiAgICAgICAgXCJ1cFwiOiBcIjAgLTFweCAzcHggMCwgMCwgMCwgMC4xKVwiLFxyXG4gICAgICAgIFwibWQtdXBcIjogXCIwIC00cHggNnB4IC0xcHggMCwgMCwgMCwgMC4xKSwgMCAtMnB4IDRweCAtMnB4IDAsIDAsIDAsIDAuMSlcIixcclxuICAgICAgICBcImxnLXVwXCI6IFwiMCAtMTBweCAxNXB4IC0zcHggMCwgMCwgMCwgMC4xKSwgMCAtNHB4IDZweCAtNHB4IDAsIDAsIDAsIDAuMSlcIixcclxuICAgICAgICBcInhsLXVwXCI6IFwiMCAtMjBweCAyNXB4IC01cHggMCwgMCwgMCwgMC4xKSwgMCAtOHB4IDEwcHggLTZweCAwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICAgICAgXCIyeGwtdXBcIjogXCIwIDI1cHggNTBweCAtMTJweCAwLCAwLCAwLCAwLjI1KVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcnM6IHtcclxuICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICA1MDogXCJ2YXIoLS1jb2xvci1wcmltYXJ5LTUwKVwiLFxyXG4gICAgICAgICAgMTAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktMTAwKVwiLFxyXG4gICAgICAgICAgMjAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktMjAwKVwiLFxyXG4gICAgICAgICAgMzAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktMzAwKVwiLFxyXG4gICAgICAgICAgNDAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktNDAwKVwiLFxyXG4gICAgICAgICAgNTAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktNTAwKVwiLFxyXG4gICAgICAgICAgNjAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktNjAwKVwiLFxyXG4gICAgICAgICAgNzAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktNzAwKVwiLFxyXG4gICAgICAgICAgODAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktODAwKVwiLFxyXG4gICAgICAgICAgOTAwOiBcInZhcigtLWNvbG9yLXByaW1hcnktOTAwKVwiLFxyXG4gICAgICAgICAgOTUwOiBcInZhcigtLWNvbG9yLXByaW1hcnktOTUwKVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgIDUwOiBcIiNGNUY2RkFcIixcclxuICAgICAgICAgIDEwMDogXCIjRUVGMEY2XCIsXHJcbiAgICAgICAgICAyMDA6IFwiI0RBREVFQ1wiLFxyXG4gICAgICAgICAgMzAwOiBcIiNDOUQwRTNcIixcclxuICAgICAgICAgIDQwMDogXCIjQjBCQkQ1XCIsXHJcbiAgICAgICAgICA1MDA6IFwiI0I1QkVEOVwiLFxyXG4gICAgICAgICAgNjAwOiBcIiNBM0FFRDBcIixcclxuICAgICAgICAgIDcwMDogXCIjNzA3ZWFlXCIsXHJcbiAgICAgICAgICA4MDA6IFwiIzJEMzk2QlwiLFxyXG4gICAgICAgICAgOTAwOiBcIiMxQjI1NTlcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29ybmZsb3dlci1ibHVlXCI6IHtcclxuICAgICAgICAgIERFRkFVTFQ6IFwiIzYzNjZGMVwiLFxyXG4gICAgICAgICAgNTA6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgMTAwOiBcIiNGOUY5RkVcIixcclxuICAgICAgICAgIDIwMDogXCIjRDNENEZCXCIsXHJcbiAgICAgICAgICAzMDA6IFwiI0FFQUZGOFwiLFxyXG4gICAgICAgICAgNDAwOiBcIiM4ODhBRjRcIixcclxuICAgICAgICAgIDUwMDogXCIjNjM2NkYxXCIsXHJcbiAgICAgICAgICA2MDA6IFwiIzJCMzBFQ1wiLFxyXG4gICAgICAgICAgNzAwOiBcIiMxMjE4QzhcIixcclxuICAgICAgICAgIDgwMDogXCIjMEQxMjkwXCIsXHJcbiAgICAgICAgICA5MDA6IFwiIzA4MEI1N1wiLFxyXG4gICAgICAgICAgOTUwOiBcIiMwNTA4M0JcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ29sZFwiOiB7XHJcbiAgICAgICAgICBERUZBVUxUOiBcIiNCRDg1NTZcIixcclxuICAgICAgICAgIDUwOiBcIiNGMUU1REFcIixcclxuICAgICAgICAgIDEwMDogXCIjRUJEQUNDXCIsXHJcbiAgICAgICAgICAyMDA6IFwiI0UwQzVBRVwiLFxyXG4gICAgICAgICAgMzAwOiBcIiNENEIwOTFcIixcclxuICAgICAgICAgIDQwMDogXCIjQzk5QTczXCIsXHJcbiAgICAgICAgICA1MDA6IFwiI0JEODU1NlwiLFxyXG4gICAgICAgICAgNjAwOiBcIiM5QTY2M0NcIixcclxuICAgICAgICAgIDcwMDogXCIjNkU0ODJCXCIsXHJcbiAgICAgICAgICA4MDA6IFwiIzQyMkIxQVwiLFxyXG4gICAgICAgICAgOTAwOiBcIiMxNjBFMDlcIixcclxuICAgICAgICAgIDk1MDogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBicm9uemU6IHtcclxuICAgICAgICAgIERFRkFVTFQ6IFwiI0MxNzA1M1wiLFxyXG4gICAgICAgICAgNTA6IFwiI0YxRTBEQVwiLFxyXG4gICAgICAgICAgMTAwOiBcIiNFQ0Q0Q0JcIixcclxuICAgICAgICAgIDIwMDogXCIjRTFCQkFEXCIsXHJcbiAgICAgICAgICAzMDA6IFwiI0Q2QTI4RlwiLFxyXG4gICAgICAgICAgNDAwOiBcIiNDQzg5NzFcIixcclxuICAgICAgICAgIDUwMDogXCIjQzE3MDUzXCIsXHJcbiAgICAgICAgICA2MDA6IFwiIzlENTMzOVwiLFxyXG4gICAgICAgICAgNzAwOiBcIiM3MDNCMjlcIixcclxuICAgICAgICAgIDgwMDogXCIjNDMyMzE4XCIsXHJcbiAgICAgICAgICA5MDA6IFwiIzE2MEMwOFwiLFxyXG4gICAgICAgICAgOTUwOiBcIiMwMDAwMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBmb250RmFtaWx5OiB7XHJcbiAgICAgICAgc2FuczogW1xyXG4gICAgICAgICAgXCJIYXJtb255T1MgU2FucyBTQ1wiLFxyXG4gICAgICAgICAgXCItYXBwbGUtc3lzdGVtXCIsXHJcbiAgICAgICAgICBcIkJsaW5rTWFjU3lzdGVtRm9udFwiLFxyXG4gICAgICAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxyXG4gICAgICAgICAgXCJIZWx2ZXRpY2FcIixcclxuICAgICAgICAgIFwiQXJpYWxcIixcclxuICAgICAgICAgIFwiUGluZ0ZhbmcgU0NcIixcclxuICAgICAgICAgIFwiUm9ib3RvXCIsXHJcbiAgICAgICAgICBcIk1pY3Jvc29mdCBZYUhlaVwiLFxyXG4gICAgICAgICAgXCJzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXJpZjogW1wiTWVycml3ZWF0aGVyXCIsIFwic2VyaWZcIl0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW10sXHJcbn0gc2F0aXNmaWVzIENvbmZpZztcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrTyxTQUFTLG9CQUFvQjtBQUMvUCxTQUFTLGVBQWUsV0FBVztBQUNuQyxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTOzs7QUNEaEIsSUFBTywwQkFBUTtBQUFBLEVBQ2IsU0FBUyxDQUFDLGdCQUFnQixrQ0FBa0MsdUNBQXVDO0FBQUEsRUFDbkcsVUFBVTtBQUFBLEVBQ1YsT0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFdBQVc7QUFBQSxRQUNULE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxJQUFJO0FBQUEsVUFDSixLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0EsT0FBTztBQUFBLFVBQ0wsSUFBSTtBQUFBLFVBQ0osS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBLG1CQUFtQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxVQUNULElBQUk7QUFBQSxVQUNKLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxJQUFJO0FBQUEsVUFDSixLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsSUFBSTtBQUFBLFVBQ0osS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FB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
