import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import iconWechatOfficial from "../assets/微信公众号.svg";
import iconWecom from "../assets/企业微信.svg";
import iconZhihu from "../assets/知乎.svg";
import { virtualContact } from "../content/siteContent";
import { siteSearchIndex, suggestedSearches } from "../content/searchIndex";

const navItems = [
  { to: "/", label: "首页" },
  { to: "/products", label: "产品中心" },
  { to: "/about", label: "关于我们" },
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
  const [consultOpen, setConsultOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const searchDrawerRef = useRef(null);
  const consultDrawerRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchResults = getSearchResults(searchQuery);

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
    setConsultOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const handlePointerDown = (event) => {
      if (!searchDrawerRef.current?.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!consultOpen) {
      return;
    }

    const handlePointerDown = (event) => {
      if (!consultDrawerRef.current?.contains(event.target)) {
        setConsultOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [consultOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setConsultOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openSearch = () => {
    setConsultOpen(false);
    setSearchOpen(true);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchResults.length) {
      navigate(searchResults[0].path);
      setSearchQuery("");
    }
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
          <button
            type="button"
            className="nav-cta"
            aria-expanded={consultOpen}
            aria-controls="site-consult-drawer"
            onClick={() => {
              setSearchOpen(false);
              setConsultOpen((value) => !value);
            }}
          >
            商务咨询
          </button>
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
      <button
        className={`consult-overlay${consultOpen ? " is-open" : ""}`}
        type="button"
        aria-label="关闭商务咨询联系方式"
        onClick={() => setConsultOpen(false)}
      />
      <aside
        ref={searchDrawerRef}
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
        </div>
      </aside>
      <aside
        ref={consultDrawerRef}
        className={`site-consult-drawer${consultOpen ? " is-open" : ""}`}
        id="site-consult-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-title"
      >
        <div className="consult-panel">
          <div className="consult-head">
            <div className="consult-title-wrap">
              <span>Business Contact</span>
              <h2 id="consult-title">商务咨询联系方式</h2>
            </div>
            <button
              className="consult-close"
              type="button"
              aria-label="关闭商务咨询弹窗"
              onClick={() => setConsultOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="consult-body">
            <div className="consult-list">
              <div className="consult-item">
                <span>服务热线</span>
                <strong>{virtualContact.hotline}</strong>
              </div>
              <div className="consult-item">
                <span>商务手机</span>
                <strong>{virtualContact.mobile}</strong>
              </div>
              <div className="consult-item">
                <span>联系邮箱</span>
                <strong>{virtualContact.email}</strong>
              </div>
              <div className="consult-item">
                <span>服务时间</span>
                <strong>{virtualContact.serviceTime}</strong>
              </div>
              <div className="consult-item consult-item-wide">
                <span>联系地址</span>
                <strong>{virtualContact.address}</strong>
              </div>
            </div>
            <div className="consult-side">
              <p className="consult-side-title">平台联系入口</p>
              <div className="consult-socials">
                <div className="consult-social">
                  <img src={iconWechatOfficial} alt="" aria-hidden="true" />
                  <span>微信公众号</span>
                </div>
                <div className="consult-social">
                  <img src={iconWecom} alt="" aria-hidden="true" />
                  <span>企业微信</span>
                </div>
                <div className="consult-social">
                  <img src={iconZhihu} alt="" aria-hidden="true" />
                  <span>知乎</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
