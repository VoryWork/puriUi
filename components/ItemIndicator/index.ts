import type { App } from 'vue'
import ItemIndicator from './ItemIndicator.vue'

// 使用install方法，在app.use挂载
ItemIndicator.install = (app: App): void => {
  app.component(<string>ItemIndicator.__name, ItemIndicator)
}

export default ItemIndicator