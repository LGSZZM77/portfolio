export type StackItem = {
  stack: string;
  img: string;
};

const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const STACK_DATA = {
  frontend: {
    label: '프론트엔드',
    items: [
      {
        stack: 'javascript',
        img: `${ICON_BASE}/javascript/javascript-original.svg`,
      },
      {
        stack: 'typescriptts',
        img: `${ICON_BASE}/typescript/typescript-original.svg`,
      },
      { stack: 'react', img: `${ICON_BASE}/react/react-original.svg` },
      { stack: 'nextjs', img: `${ICON_BASE}/nextjs/nextjs-original.svg` },
    ] as StackItem[],
  },
  library: {
    label: '라이브러리',
    items: [
      { stack: 'zustand', img: `${ICON_BASE}/zustand/zustand-original.svg` },
      {
        stack: 'tailwindcss',
        img: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg`,
      },
      {
        stack: 'gsap',
        img: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg',
      },
    ] as StackItem[],
  },
  environment: {
    label: '환경 및 배포',
    items: [
      { stack: 'webpack', img: `${ICON_BASE}/webpack/webpack-original.svg` },
      { stack: 'vitejs', img: `${ICON_BASE}/vitejs/vitejs-original.svg` },
      { stack: 'vercel', img: `${ICON_BASE}/vercel/vercel-original.svg` },
      { stack: 'netlify', img: `${ICON_BASE}/netlify/netlify-original.svg` },
      { stack: 'supabase', img: `${ICON_BASE}/supabase/supabase-original.svg` },
      { stack: 'github', img: `${ICON_BASE}/github/github-original.svg` },
    ] as StackItem[],
  },
  tools: {
    label: '개발 도구',
    items: [
      { stack: 'vscode', img: `${ICON_BASE}/vscode/vscode-original.svg` },
      { stack: 'notion', img: `${ICON_BASE}/notion/notion-original.svg` },
      { stack: 'figma', img: `${ICON_BASE}/figma/figma-original.svg` },
    ] as StackItem[],
  },
};
