import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
  alias: [
      { find: '@', replacement: '/src' },
      { find: '@types', replacement: '/src/types'},
      { find: '@interface', replacement: '/src/types/interface'},
      { find: '@enums', replacement: '/src/types/enums'},


      { find: '@utils', replacement: '/src/utils'},
      { find: '@hooks', replacement: '/src/hooks'},
      

      { find: '@components', replacement: '/src/components'},
      { find: '@containers', replacement: '/src/components/containers'},
      { find: '@ui', replacement: '/src/components/UI'},
      { find: '@sections', replacement: '/src/components/sections'},

      { find: '@images', replacement: '/src/assets/images'},
      { find: '@layout', replacement: '/src/layout'},
      { find: '@pages', replacement: '/src/pages'},
      { find: '@router', replacement: '/src/router'},
      { find: '@services', replacement: '/src/services'},
      { find: '@context', replacement: '/src/context'},
    ]
  }
})
