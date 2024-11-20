import type { App } from 'vue'
import listItem from './listItem.vue'

// 使用install方法，在app.use挂载
listItem.install = (app: App): void => {
  app.component(<string>listItem.__name, listItem)
}

export default listItem