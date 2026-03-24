import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { virtualContact } from "../content/siteContent";
import { siteSearchIndex, suggestedSearches } from "../content/searchIndex";

const navItems = [
  { to: "/", label: "首页" },
  { to: "/about", label: "关于我们" },
  { to: "/products", label: "产品中心" },
  { to: "/contact", label: "联系我们" },
];

const SEARCH_LIMIT = 6;

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16l4.25 4.25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function normalizeSearchValue(value) {
  return value.trim().toLowerCase();
}

function getSearchResults(query) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return suggestedSearches;
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  return siteSearchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const excerpt = entry.excerpt.toLowerCase();
      const page = entry.page.toLowerCase();
      const keywords = entry.keywords.join(" ").toLowerCase();
      const haystack = `${title} ${excerpt} ${page} ${keywords}`;

      if (!tokens.every((token) => haystack.includes(token))) {
        return null;
      }

      const score = tokens.reduce((total, token) => {
        let next = total;

        if (title.includes(token)) next += 6;
        if (keywords.includes(token)) next += 4;
        if (excerpt.includes(token)) next += 3;
        if (page.includes(token)) next += 2;

        return next;
      }, 0);

      return { ...entry, score };
    })
    .filter(Boolean)
    .sort((left, right) => right.score - left.score)
    .slice(0, SEARCH_LIMIT);
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const searchResults = getSearchResults(searchQuery);
  const hasQuery = Boolean(normalizeSearchValue(searchQuery));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!searchOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    searchInputRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openSearch = () => {
    setSearchOpen(true);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchResults.length) {
      navigate(searchResults[0].path);
      setSearchQuery("");
    }
  };

  const handleResultSelect = (path) => {
    navigate(path);
    setSearchQuery("");
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-utility">
        <div className="shell shell-wide header-utility-inner">
          <div className="header-utility-copy header-utility-primary">
            <span className="utility-hotline">
              <i className="utility-hotline-pulse" aria-hidden="true" />
              <span className="utility-hotline-text">
                <b>服务热线</b>
                <strong>{virtualContact.hotline}</strong>
              </span>
            </span>
            <span className="utility-item">{virtualContact.email}</span>
            <span className="utility-item">{virtualContact.serviceTime}</span>
          </div>
          <div className="header-utility-copy header-utility-meta">
            <button
              className="header-search-button"
              type="button"
              aria-label="打开站内搜索"
              aria-expanded={searchOpen}
              aria-controls="site-search-drawer"
              onClick={openSearch}
            >
              <SearchIcon />
              <span>搜索</span>
            </button>
          </div>
        </div>
      </div>
      <div className="shell shell-wide nav-shell">
        <Link to="/" className="brand-link" aria-label="羿麦新材料首页">
          <BrandLogo compact />
        </Link>
        <nav className={`site-nav${open ? " is-open" : ""}`} id="site-nav" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="header-search-button header-search-mobile"
            type="button"
            aria-label="打开站内搜索"
            aria-expanded={searchOpen}
            aria-controls="site-search-drawer"
            onClick={openSearch}
          >
            <SearchIcon />
          </button>
          <Link to="/contact" className="nav-cta">
            商务咨询
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <button
        className={`search-overlay${searchOpen ? " is-open" : ""}`}
        type="button"
        aria-label="关闭搜索"
        onClick={() => setSearchOpen(false)}
      />
      <aside
        className={`site-search-drawer${searchOpen ? " is-open" : ""}`}
        id="site-search-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-search-title"
      >
        <div className="site-search-topbar" aria-hidden="true">
          <div className="site-search-pattern">
            <span />
            <span />
            <span />
          </div>
          <SearchIcon />
        </div>
        <div className="site-search-panel">
          <div className="site-search-heading-row">
            <div className="site-search-heading-copy">
              <span>Site Search</span>
              <h2 id="site-search-title">请输入关键词搜索相关内容</h2>
            </div>
            <button
              className="site-search-close"
              type="button"
              aria-label="关闭搜索框"
              onClick={() => setSearchOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <form className="site-search-form" onSubmit={handleSearchSubmit}>
            <label className="site-search-field">
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                placeholder="请输入关键词搜索"
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </label>
            <button className="site-search-submit" type="submit" aria-label="执行搜索">
              <SearchIcon />
            </button>
          </form>
          <div className="site-search-body">
            <p className="site-search-status">
              {hasQuery
                ? searchResults.length
                  ? `找到 ${searchResults.length} 条相关内容，可点击结果跳转。`
                  : "未找到相关内容，请尝试其他关键词。"
                : "可搜索产品方向、服务流程、应用支持、Logo、联系方式等关键词。"}
            </p>
            <div className="site-search-results">
              {searchResults.length ? (
                searchResults.map((result) => (
                  <button
                    key={result.id}
                    className="site-search-result"
                    type="button"
                    onClick={() => handleResultSelect(result.path)}
                  >
                    <span className="site-search-result-page">{result.page}</span>
                    <strong>{result.title}</strong>
                    <p>{result.excerpt}</p>
                  </button>
                ))
              ) : (
                <div className="site-search-empty">
                  没有匹配到相关内容，建议尝试“产品中心”“服务热线”“应用支持”等关键词。
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
