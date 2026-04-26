export type StackItem = {
  stack: string;
  img: string;
  description: string;
  tags: string[];
};

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const STACK_DATA = {
  frontend: {
    label: "프론트엔드",
    items: [
      {
        stack: "html5",
        img: `${ICON_BASE}/html5/html5-original.svg`,
        description:
          "시맨틱 마크업을 준수하여 구조를 설계하고, SEO 및 웹 접근성을 고려한 최적의 뼈대를 구축합니다.",
        tags: ["웹표준", "시맨틱", "접근성"],
      },
      {
        stack: "css3",
        img: `${ICON_BASE}/css3/css3-original.svg`,
        description:
          "Flexbox와 Grid 레이아웃을 능숙하게 활용하여 다양한 기기에 대응하는 반응형 웹을 구현하고, 사용자 중심의 정교한 UI를 스타일링합니다.",
        tags: ["반응형", "Layout", "UI/UX"],
      },
      {
        stack: "javascript",
        img: `${ICON_BASE}/javascript/javascript-original.svg`,
        description:
          "ES6+ 문법과 비동기 처리에 능숙하며, DOM 조작 및 이벤트 제어를 통해 동적인 웹 인터랙션을 자유롭게 구현합니다.",
        tags: ["ES6+", "비동기", "DOM"],
      },
      {
        stack: "typescript",
        img: `${ICON_BASE}/typescript/typescript-original.svg`,
        description:
          "엄격한 타입 정의를 통해 코드의 안정성을 높이고, 런타임 에러를 사전에 방지하여 유지보수가 용이한 코드를 작성합니다.",
        tags: ["정적타입", "인터페이스", "안정성"],
      },
      {
        stack: "react",
        img: `${ICON_BASE}/react/react-original.svg`,
        description:
          "컴포넌트 기반의 설계와 Hook을 활용한 상태 관리로 재사용성이 높은 UI를 구축하며 가상 DOM 기반의 최적화를 수행합니다.",
        tags: ["컴포넌트", "Hooks", "재사용성"],
      },
      {
        stack: "nextjs",
        img: `${ICON_BASE}/nextjs/nextjs-original.svg`,
        description:
          "SSR과 SSG를 적절히 활용하여 초기 렌더링 속도와 SEO를 개선하고, 직관적인 라우팅 시스템으로 사용자 경험을 높입니다.",
        tags: ["SSR/SSG", "SEO", "라우팅"],
      },
    ] as StackItem[],
  },
  library: {
    label: "라이브러리",
    items: [
      {
        stack: "zustand",
        img: `${ICON_BASE}/zustand/zustand-original.svg`,
      },
      {
        stack: "tailwindcss",
        img: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg`,
      },
      {
        stack: "gsap",
        img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
      },
      {
        stack: "threejs",
        img: `${ICON_BASE}/threejs/threejs-original.svg`,
      },
    ] as StackItem[],
  },
  environment: {
    label: "환경 및 배포",
    items: [
      {
        stack: "webpack",
        img: `${ICON_BASE}/webpack/webpack-original.svg`,
      },
      {
        stack: "vitejs",
        img: `${ICON_BASE}/vitejs/vitejs-original.svg`,
      },
      {
        stack: "vercel",
        img: `${ICON_BASE}/vercel/vercel-original.svg`,
      },
      {
        stack: "netlify",
        img: `${ICON_BASE}/netlify/netlify-original.svg`,
      },
      {
        stack: "supabase",
        img: `${ICON_BASE}/supabase/supabase-original.svg`,
      },
      {
        stack: "github",
        img: `${ICON_BASE}/github/github-original.svg`,
      },
    ] as StackItem[],
  },
  tools: {
    label: "개발 도구",
    items: [
      {
        stack: "vscode",
        img: `${ICON_BASE}/vscode/vscode-original.svg`,
      },
      {
        stack: "notion",
        img: `${ICON_BASE}/notion/notion-original.svg`,
      },
      {
        stack: "figma",
        img: `${ICON_BASE}/figma/figma-original.svg`,
      },
    ] as StackItem[],
  },
};
