import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import devtools from 'solid-devtools/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid(), devtools({ autoname: true, locator: { componentLocation: true, jsxLocation: true, targetIDE: 'vscode' } })],
})
