# Posts Retrieval App

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://gepardoj.github.io/get-posts-vue/)  
*A Vue 3 application demonstrating modern frontend techniques*

A demo application built with:
- [Vue 3](https://v3.vuejs.org/) (Composition API)  
- [Pinia](https://pinia.vuejs.org/) (State management)  
- [Vue Query (@tanstack/vue-query v5+)](https://tanstack.com/query/latest/docs/vue/overview) (Data fetching/caching)  
- [axios](https://axios-http.com/) (HTTP client)  
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/) (CSS framework, jQuery-free)  
- [Sass](https://sass-lang.com/) (CSS preprocessor)  

## Features  
- Efficient client-side caching with Vue Query  
- Centralized state via Pinia stores  
- Mobile-first responsive design  
- Sass-powered styling with variables and mixins
- Lightweight bundle (no jQuery/Popper.js, picked up not neccessary Bootstrap styles)

## Development  

### Prerequisites  
- [Node.js](https://nodejs.org/) (v18+)  
- [pnpm](https://pnpm.io/) (v10.x)  

### Installation & Running  
1. Install **pnpm** globally:  
   ```sh
   npm install -g pnpm@latest-10

2. Install dependencies:
    ```sh
    pnpm i

3. Start the dev server:
    ```sh
    pnpm run dev