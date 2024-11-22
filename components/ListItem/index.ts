import type { App } from 'vue'
import ListItem from './listItem.vue'

// 使用install方法，在app.use挂载
ListItem.install = (app: App): void => {
  app.component(<string>ListItem.__name, ListItem)
}

export default ListItem