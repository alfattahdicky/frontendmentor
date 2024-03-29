const { defineConfig } = require('vite');
const { resolve } = require('path');

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist', 
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.js'),
        index: resolve(__dirname, 'src/index.html')  
      }
    }
  }
})