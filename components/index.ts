import Card from "./Card";
import collapse from "./Collapse";
import container from "./Container";
import DatePicker from "./DatePicker";
import Dialog from "./Dialog";
import ItemIndicator from "./ItemIndicator";
import listItem from "./ListItem";
import mainView from "./MainView";
import navBar from "./NavBar";
import textField from "./TextField";
import titlebar from "./Titlebar";
import "./global.css";
import type { App } from "vue";

// 所有组件列表
const components = [
  Card,
  DatePicker,
  Dialog,
  ItemIndicator,
  listItem,
  titlebar,
  collapse,
  navBar,
  mainView,
  container,
  textField,
];

// 定义 install 方法
const install = function (app: App) {
  // 遍历注册所有组件
  /*
    component.__name ts报错
    Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
    Type 'undefined' is not assignable to type 'string'.ts(2345)
    解决方式一：使用// @ts-ignore
    解决方式二：使用类型断言 尖括号语法(<string>component.__name) 或 as语法(component.__name as string)
  */
  components.forEach((component) => app.component(`Puri${component.__name as string}`, component));
};
export * from './interface';
export {
  Card,
  DatePicker,
  Dialog,
  ItemIndicator,
  listItem,
  titlebar,
  collapse,
  navBar,
  mainView,
  container,
  textField,
};

export default install;
