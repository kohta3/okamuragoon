import '../App.css';
import profileImage from '../profile.jpg';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// セクション群
const TopSection = () => (
  <section id="top" className="section top">
    <img src={profileImage} className="profile-image" alt="プロフィール写真" />
    <h1>Okamura Kohta</h1>
    <p>福岡生まれ・福岡在住 / Full-Stack Engineer (Web, App)</p>
    <div className="cta">
      <a href="#works" className="button primary">Works</a>
      <a href="#contact" className="button secondary">Contact</a>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section about">
    <h2>About Me</h2>
    <p>福岡生まれ・福岡在住。SE(フロントエンド/バックエンド/アプリ)としてフリーランスで活動中。</p>
    <ol className="timeline">
      <li>
        <div className="time">2019/04 ~ 2020/07</div>
        <div className="content">
          <div className="title">機械系エンジニア</div>
          <div className="desc">大学卒業後、飛行機の開発関連の業務に従事。</div>
        </div>
      </li>
      <li>
        <div className="time">2020/08 ~ 2022/09</div>
        <div className="content">
          <div className="title">半導体基板設計エンジニア</div>
          <div className="desc">半導体の基板設計関連の業務を担当。</div>
        </div>
      </li>
      <li>
        <div className="time">2022/10 ~ 2023/05</div>
        <div className="content">
          <div className="title">ソフトウェアエンジニア (Java/JavaScript)</div>
          <div className="desc">SEとしてJava/JavaScriptを用いた開発に従事。</div>
        </div>
      </li>
      <li>
        <div className="time">2023/06 ~ 2024/02</div>
        <div className="content">
          <div className="title">自社システム/EC/スマホアプリ開発</div>
          <div className="desc">フィットネス業界のプロダクト開発に携わる。</div>
        </div>
      </li>
      <li>
        <div className="time">2024/03 ~ 現在</div>
        <div className="content">
          <div className="title">フリーランスSE</div>
          <div className="desc">アプリ開発/システム開発を中心に活動。</div>
        </div>
      </li>
    </ol>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="section skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {[
        { name: 'React', years: 3, desc: 'SPA構築、Hooks/状態管理、コンポーネント設計' },
        { name: 'Next.js', years: 1.5, desc: 'SSR/SSG、App Router、SEO対応' },
        { name: 'Java / Spring Boot', years: 1, desc: 'REST API設計、認証、業務ロジック' },
        { name: 'PHP / Laravel', years: 4, desc: 'Eloquent/認証、REST、Blade/SPA連携' },
        { name: 'Dart / Flutter', years: 2, desc: 'iOS/Androidのクロスプラットフォーム開発' },
        { name: 'DB', years: 4, desc: 'MySQL/PostgreSQL、スキーマ設計、パフォーマンス基本' },
        { name: 'UI/Design', years: 4, desc: 'HTML/CSS/SCSS/Bootstrap。Figmaは基本操作' },
      ].map((s) => (
        <div key={s.name} className="skill-card">
          <div className="skill-head">
            <span className="skill-name">{s.name}</span>
            <span className="skill-years">{s.years}年</span>
          </div>
          <div className="skill-desc">{s.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

const WorksSection = () => (
  <section id="works" className="section works">
    <h2>Works</h2>
    <div className="works-grid">
      {[
        { title: 'ホームページ', tech: 'React', scope: '要件定義 ~ デプロイ' },
        { title: '業務管理システム', tech: 'Spring Boot', scope: '機能追加 ~ 単体・結合テスト' },
        { title: 'フィットネス系ECサイト', tech: 'ECforce / Laravel', scope: '要件定義 ~ 運用' },
        { title: '求人マッチングサイト', tech: 'Laravel', scope: '機能の修正・追加 ~ 運用' },
        { title: 'コーポレートサイト', tech: 'Next.js', scope: '要件定義 ~ 運用' },
        { title: 'フィットネス系業務システム', tech: 'Laravel', scope: '技術選定 ~ 運用' },
        { title: 'ネームプレート販売管理システム', tech: 'Laravel / React', scope: '基本設計 ~ 運用' },
        { title: '漢方販売システム', tech: 'Laravel / React', scope: '機能の修正・追加 ~ 単体・結合テスト' },
        { title: '駐車場貸借アプリ', tech: 'Flutter', scope: '基本設計 ~ リリース' },
        { title: '福利厚生アプリ', tech: 'Flutter', scope: '開発 ~ 単体・結合テスト' },
        { title: '福利厚生システム', tech: 'Laravel / React', scope: '技術選定 ~ 運用' },
      ].map((w) => (
        <div key={w.title + w.tech} className="work-card">
          <div className="work-title">{w.title}</div>
          <div className="work-meta">
            <span className="badge tech">{w.tech}</span>
            <span className="badge scope">{w.scope}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section contact">
    <h2>Contact</h2>
    <div className="contact-links">
      <a className="contact-link" href="https://www.instagram.com/kohta.39/" target="_blank" rel="noreferrer">
        <FaInstagram aria-hidden />
        <span>Instagram</span>
      </a>
      <a className="contact-link" href="https://x.com/home?lang=ja" target="_blank" rel="noreferrer">
        <FaXTwitter aria-hidden />
        <span>X</span>
      </a>
    </div>
  </section>
);

const Header = () => (
  <header className="header">
    <nav className="nav">
      <a href="#top" className="logo">OKAMURA</a>
      <div className="links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
        <a href="#personal">Personal</a>
        <a href="#contact" className="nav-cta">Contact</a>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Okamura. All rights reserved.</p>
  </footer>
);

const PersonalSection = () => (
  <section id="personal" className="section personal">
    <h2>Personal</h2>
    <div className="personal-grid">
      {[
        { title: 'Preblo', logo: `${process.env.PUBLIC_URL}/logo/preblo.png`, desc: 'Laravelで作った旅行先の投稿サイト（現在はクローズ）' },
        { title: 'ふらっとりっぷ', logo: `${process.env.PUBLIC_URL}/logo/furatrip.png`, desc: 'Flutterの観光地投稿共有アプリ（配信終了）' },
        { title: 'inkly', logo: `${process.env.PUBLIC_URL}/logo/inkly_logo.png`, desc: 'Laravel × Reactのブログプラットフォーム', link: 'https://inkly.jp/' },
        { title: 'おうちログ', logo: `${process.env.PUBLIC_URL}/logo/outilog.png`, desc: '家計簿・スケジュール・買い物リストを家族で共有するアプリ', link: 'https://apps.apple.com/us/app/%E3%81%8A%E3%81%86%E3%81%A1%E3%83%AD%E3%82%B0/id6752274163' },
        { title: 'フォトログ', logo: `${process.env.PUBLIC_URL}/logo/photolog.png`, desc: 'シンプルで高速な画像・動画表示ツール（作成途中）' },
      ].map((p) => (
        <div key={p.title} className="personal-card">
          <div className="personal-logo-wrap">
            <img src={p.logo} alt={`${p.title} ロゴ`} className="personal-logo" />
          </div>
          <div className="personal-title">{p.title}</div>
          <div className="personal-desc">{p.desc}</div>
          {p.link && (
            <div className="personal-actions">
              <a href={p.link} target="_blank" rel="noreferrer" className="button primary">見る</a>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <PersonalSection />
      <ContactSection />
      <Footer />
    </div>
  );
}


