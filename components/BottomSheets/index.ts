import type { App } from 'vue'
import BottomSheets from './BottomSheets.vue'

// 使用install方法，在app.use挂载
BottomSheets.install = (app: App): void => {
  app.component(<string>BottomSheets.__name, BottomSheets)
}

export default BottomSheets