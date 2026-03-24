import logo from "../assets/logo-yimai-fluid.svg";
import { brand } from "../content/siteContent";

export default function BrandLogo({ compact = false, inverse = false }) {
  return (
    <div className={`brand${compact ? " brand-compact" : ""}${inverse ? " brand-inverse" : ""}`}>
      <img className="brand-mark" src={logo} alt={`${brand.shortName} logo`} />
      <div className="brand-copy">
        <strong className="brand-cn">{brand.shortName}</strong>
        <span className="brand-en" aria-label={brand.englishName}>
          <b className="brand-en-word">YIMAI</b>
          <i className="brand-en-gap" aria-hidden="true" />
          <b className="brand-en-word">NEW</b>
          <i className="brand-en-gap" aria-hidden="true" />
          <b className="brand-en-word">MATERIALS</b>
        </span>
      </div>
    </div>
  );
}
