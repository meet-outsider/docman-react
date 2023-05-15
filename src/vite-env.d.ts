declare module '*.svg' {
  const content: any;
  export default content;
}

interface ImportMeta {
  readonly env: {
    readonly VITE_BACKEND_API: string;
    readonly VITE_FLOWABLE_API: string;
    readonly VITE_FLOWABLE_USERNAME: string;
    readonly VITE_FLOWABLE_PASSWORD: string;
  };
}
