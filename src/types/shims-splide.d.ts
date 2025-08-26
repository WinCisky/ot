declare module '@splidejs/vue-splide' {
  import type { DefineComponent } from 'vue';
  export interface Options {
    type?: string;
    rewind?: boolean;
    arrows?: boolean;
    pagination?: boolean;
    gap?: number | string;
    perPage?: number;
    breakpoints?: Record<string, Partial<Options>>;
    autoScroll?: { speed?: number };
    [key: string]: any;
  }
  export const Splide: DefineComponent<any, any, any>;
  export const SplideSlide: DefineComponent<any, any, any>;
  const plugin: any;
  export default plugin;
}
