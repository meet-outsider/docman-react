declare module '*.svg' {
  const content: any;
  export default content;
}

interface ImportMeta {
  readonly env: {
    readonly VITE_BACKEND_API: string;
  };
}
