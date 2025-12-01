declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Temporary module declaration for lenis (smooth scroll library)
declare module 'lenis';
