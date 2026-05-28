export default function Home() {
  return (
    <>
      {/* Animated mesh gradient background */}
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />

      <div className="page-wrapper">
        <main className="profile-card">

          {/* ── Avatar ─────────────────────────────────────────── */}
          <div className="animate-1" style={{ position: "relative" }}>
            <div className="avatar-glow" />
            <div className="avatar-ring">
              <div className="avatar-inner">YS</div>
            </div>
          </div>

          {/* ── Name & Role ─────────────────────────────────────── */}
          <div className="animate-2" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <h1 className="profile-name">윤창식</h1>
            <p className="profile-role">Developer &amp; Technical Educator</p>
          </div>

          {/* ── Bio ─────────────────────────────────────────────── */}
          <p className="profile-bio animate-3">
            안녕하세요. AI-Native 개발 워크플로우와 기술 교육에 열정을 가진 개발자 윤창식입니다.
            기술의 복잡함을 걷어내고 누구나 이해할 수 있는 언어로 지식을 전달하는 것을 즐깁니다.
          </p>

          {/* ── Feature Cards ───────────────────────────────────── */}
          <div className="cards-grid animate-4">
            <div className="feature-card">
              <span className="card-icon">📖</span>
              <h3 className="card-title">기술 번역</h3>
              <p className="card-desc">
                &lt;자바스크립트+리액트 디자인 패턴&gt; 역자로서 최신 개발 패러다임을 국내에 소개하고 있습니다.
              </p>
            </div>
            <div className="feature-card">
              <span className="card-icon">🎓</span>
              <h3 className="card-title">기술 교육</h3>
              <p className="card-desc">
                팀스파르타(내배캠) 리액트 트랙 튜터 등 100회 이상의 라이브 강의로 수많은 개발자 성장을 도왔습니다.
              </p>
            </div>
            <div className="feature-card">
              <span className="card-icon">🤖</span>
              <h3 className="card-title">AI-Native</h3>
              <p className="card-desc">
                AI 에이전트와 MCP 기반의 개발 환경 통합을 통해 생산성의 극한을 탐구합니다.
              </p>
            </div>
            <div className="feature-card">
              <span className="card-icon">⚡</span>
              <h3 className="card-title">기술 스택</h3>
              <p className="card-desc">
                TypeScript, Next.js, React를 주력으로 현대적인 웹 생태계를 구축합니다.
              </p>
            </div>
          </div>

          {/* ── Divider ─────────────────────────────────────────── */}
          <div className="divider animate-4" />

          {/* ── Links ───────────────────────────────────────────── */}
          <div className="links-row animate-5">
            <a
              id="link-github"
              href="https://github.com/caesiumy"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>
            <a
              id="link-linkedin"
              href="https://linkedin.com/in/chang-sik-yoon"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              id="link-blog"
              href="https://caesiumy.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Blog
            </a>
          </div>

        </main>
      </div>
    </>
  );
}
