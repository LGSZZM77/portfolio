'use client';

export default function Header() {
  const buttons = [
    { label: '홈', id: 'home' },
    { label: '스택', id: 'stack' },
    { label: '프로젝트', id: 'project' },
    { label: '연락하기', id: 'call' },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 w-full h-15 flex items-center justify-center">
      <div className="w-8/10 h-10 border-2 border-green-700 flex items-center justify-center gap-6 text-lg">
        {buttons.map((button) => (
          <button
            className="hover:text-red-400 cursor-pointer transition-colors delay-150 ease-in-out"
            key={button.id}
            onClick={() => handleScroll(button.id)}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
