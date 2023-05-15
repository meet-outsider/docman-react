import {join} from 'path';
import {defineConfig, loadEnv} from 'vite';

export default ({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: './',
    plugins: [
    ],
    server: {
      port: Number(env.VITE_PORT),
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/flowable-rest': {
          target: env.VITE_FLOWABLE_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/flowable-rest/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
      },
    },
  });
};
