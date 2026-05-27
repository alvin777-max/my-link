export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white font-sans dark:bg-zinc-950 p-6">
      <main className="max-w-2xl w-full flex flex-col items-center gap-12 text-center">
        {/* Profile Header */}
        <section className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <span className="text-4xl font-bold text-zinc-400">YS</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              윤창식
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
              Developer & Technical Educator
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-6">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            안녕하세요. AI-Native 개발 워크플로우와 기술 교육에 열정을 가진 개발자 윤창식입니다. 
            기술의 복잡함을 걷어내고 누구나 이해할 수 있는 언어로 지식을 전달하는 것을 즐깁니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">기술 번역</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                &lt;자바스크립트+리액트 디자인 패턴&gt; 역자로서 최신 개발 패러다임을 국내에 소개하고 있습니다.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">기술 교육</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                팀스파르타(내배캠) 리액트 트랙 튜터 등 100회 이상의 라이브 강의를 통해 수많은 개발자들의 성장을 도왔습니다.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">AI-Native</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                AI 에이전트와 MCP 기반의 개발 환경 통합을 통해 생산성의 극한을 탐구합니다.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">기술 스택</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                TypeScript, Next.js, React를 주력으로 현대적인 웹 생태계를 구축합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/caesiumy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-medium transition-transform hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/chang-sik-yoon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href="https://caesiumy.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            Blog
          </a>
        </section>
      </main>
    </div>
  );
}
