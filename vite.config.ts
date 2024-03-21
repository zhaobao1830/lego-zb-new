import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vitCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 构建压缩文件
    vitCompression({
      // 记录压缩文件及其压缩率,默认为true
      verbose: true,
      // 是否禁用压缩
      disable: false,
      // 压缩后是否删除原文件
      deleteOriginFile: false,
      // 需要使用压缩前的最小文件大小
      threshold: 10240,
      // 压缩算法
      algorithm: 'gzip',
      // 压缩后的文件格式
      ext: 'gz'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    // 导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
