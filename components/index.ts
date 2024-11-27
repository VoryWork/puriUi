import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import Collapse from "./Collapse";
import ConfirmDialog from "./ConfirmDialog";
import Container from "./Container";
import createRipple from "./CreateRipple";
import DatePicker from "./DatePicker";
import Dialog from "./Dialog";
import ItemIndicator from "./ItemIndicator";
import ListItem from "./ListItem";
import MainView from "./MainView";
import NavBar from "./NavBar";
import Progress from "./Progress";
import TextField from "./TextField";
import Titlebar from "./Titlebar";
import "./global.css";
import type { App } from "vue";

// 所有组件列表
const components = [
  Badge,
  Button,
  Card,
  Collapse,
  ConfirmDialog,
  Container,
  DatePicker,
  Dialog,
  ItemIndicator,
  ListItem,
  MainView,
  NavBar,
  Progress,
  TextField,
  Titlebar,
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
export * from "./interface";
export {createRipple}
export {
  Badge,
  Button,
  Card,
  Collapse,
  ConfirmDialog,
  Container,
  DatePicker,
  Dialog,
  ItemIndicator,
  ListItem,
  MainView,
  NavBar,
  Progress,
  TextField,
  Titlebar,
};

export default install;
