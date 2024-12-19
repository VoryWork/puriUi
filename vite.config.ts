import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import tailwindConfig from "./tailwind.config";
import minimist from "minimist";
import terser from "@rollup/plugin-terser";
import dts from "vite-plugin-dts";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import postColorConverter from "postcss-color-converter";
// 获取构建选项 build:browser 时，传入的变量: -f iife
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "./dist/es",
      include: ["components/**/*.d.ts", "components/**/*.vue", "components/**/*.ts"],
    }),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "./dist/cjs",
      include: ["components/**/*.d.ts", "components/**/*.vue", "components/**/*.ts"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "#": fileURLToPath(new URL("./types", import.meta.url)),
      "components": fileURLToPath(new URL("./components", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss(tailwindConfig),postColorConverter({outputColorFormat: 'rgb'})],
    },
  },
  build: {
    sourcemap: true, // 构建时开启 source map
    cssCodeSplit: true, // 开启 css code split
    emptyOutDir: true, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。若 outDir 在根目录之外则会抛出一个警告避免意外删除掉重要的文件。
    lib: {
      // 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
      // __dirname 的值是 vite.config.ts 文件所在目录
      entry: resolve(__dirname, "components", "index.ts"), // entry 是必需的，因为库不能使用HTML作为入口。
      name: "PuriUi", // 暴露的全局变量
      fileName: "index", // 输出的包文件名，默认是 package.json 的 name 选项
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
        "bootstrap-icons",
      ],
      // 当创建 iife 或 umd 格式的 bundle 时，你需要通过 output.globals 选项提供全局变量名，以替换掉外部引入。
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          name: "PuriUi",
          dir: "./dist",
        },
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "components",
          name: "PuriUi",
          dir: "./dist/es",
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
            "bootstrap-icons": "bootstrap-icons",
          },
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
            qrcode: "qrcode",
          },
        },
      ],
    },
  },
});
