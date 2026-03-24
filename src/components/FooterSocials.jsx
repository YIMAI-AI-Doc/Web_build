import { useEffect, useRef, useState } from "react";
import iconWechatOfficial from "../assets/微信公众号.svg";
import iconWecom from "../assets/企业微信.svg";
import iconZhihu from "../assets/知乎.svg";
import qrWechat from "../assets/qr-wechat.svg";
import qrWecom from "../assets/qr-wecom.svg";

const socialItems = [
  {
    id: "wechat",
    label: "微信公众号",
    qr: qrWechat,
    type: "qr",
    icon: (
      <img
        src={iconWechatOfficial}
        alt=""
        aria-hidden="true"
        className="social-button-image social-button-image-wechat"
      />
    ),
  },
  {
    id: "wecom",
    label: "企业微信",
    qr: qrWecom,
    type: "qr",
    icon: (
      <img
        src={iconWecom}
        alt=""
        aria-hidden="true"
        className="social-button-image social-button-image-wecom"
      />
    ),
  },
  {
    id: "zhihu",
    label: "知乎",
    href: "https://www.zhihu.com/",
    type: "link",
    icon: (
      <img
        src={iconZhihu}
        alt=""
        aria-hidden="true"
        className="social-button-image social-button-image-zhihu"
      />
    ),
  },
];

export default function FooterSocials() {
  const [activeQr, setActiveQr] = useState(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) {
        setActiveQr(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className="footer-socials" ref={wrapRef}>
      {socialItems.map((item) => {
        if (item.type === "link") {
          return (
            <a
              key={item.id}
              className="social-button"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
            </a>
          );
        }

        const isOpen = activeQr === item.id;

        return (
          <div
            key={item.id}
            className={`social-item${isOpen ? " is-open" : ""}`}
            onMouseEnter={() => setActiveQr(item.id)}
            onMouseLeave={() => setActiveQr((current) => (current === item.id ? null : current))}
          >
            <button
              type="button"
              className="social-button"
              aria-label={item.label}
              aria-expanded={isOpen}
              onClick={() => setActiveQr((current) => (current === item.id ? null : item.id))}
            >
              {item.icon}
            </button>
            <div className={`qr-popover${isOpen ? " is-visible" : ""}`}>
              <img src={item.qr} alt={`${item.label}二维码`} />
              <span>{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
