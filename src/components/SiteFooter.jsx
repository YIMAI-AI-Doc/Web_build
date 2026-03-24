import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import FooterSocials from "./FooterSocials";
import { brand, virtualContact } from "../content/siteContent";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="shell shell-wide footer-main-inner">
          <div className="footer-brand">
            <BrandLogo inverse />
            <strong className="footer-legal">{brand.legalName}</strong>
            <p>{brand.tagline}，服务钻完井、增产改造、采油水处理与集输等关键工艺环节。</p>
            <FooterSocials />
          </div>
          <div className="footer-stack footer-stack-products">
            <div className="footer-panel">
              <p className="footer-kicker">产品方向</p>
              <p>钻完井化学品 / 酸化压裂化学品 / 采油水处理化学品 / 集输化学品 / 表面活性剂</p>
            </div>
            <div className="footer-panel">
              <p className="footer-kicker">联系演示</p>
              <p>服务热线：{virtualContact.hotline}</p>
              <p>商务邮箱：{virtualContact.email}</p>
              <p>服务时间：{virtualContact.serviceTime}</p>
              <p>示例地址：{virtualContact.address}</p>
            </div>
          </div>
          <div className="footer-stack footer-stack-services">
            <div className="footer-panel">
              <p className="footer-kicker">应用与服务</p>
              <p>钻完井 / 酸化压裂 / 采油水处理</p>
              <p>样品评价 / 技术沟通 / 持续供货</p>
            </div>
            <div className="footer-panel">
              <p className="footer-kicker">快捷入口</p>
              <p>
                <Link to="/products">产品中心</Link> / <Link to="/contact">合作咨询</Link>
              </p>
              <p>二维码与联系方式当前为演示占位内容。</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-meta">
        <div className="shell shell-wide footer-meta-inner">
          <p className="footer-meta-copy">© 2026 {brand.englishName}. All rights reserved.</p>
          <p className="footer-meta-record">
            {virtualContact.icp} / {virtualContact.police}
          </p>
          <p className="footer-meta-note">演示站点资料与二维码均为占位内容，后续可替换为正式企业信息。</p>
        </div>
      </div>
    </footer>
  );
}
