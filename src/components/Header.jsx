export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="journal-header">
      <h1>> vivek vijayan</h1>
      <nav className="nav-buttons">
        <button
          className={`nav-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          timeline
        </button>
        <button
          className={`nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          portfolio
        </button>
        <a href="https://github.com/vivekvjyn/cv/releases/download/latest/Vivek-Vijayan-CV.pdf" target="_blank" rel="noopener noreferrer" className="nav-btn resume-btn">resume</a>
      </nav>
    </header>
  );
}
