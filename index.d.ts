declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "postcss-color-converter" {
  const classes: any;
  export default classes;
}
/// <reference types="vite/client" />
