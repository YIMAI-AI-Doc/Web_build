import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PageMeta from "../components/PageMeta";
import {
  applicationFields,
  brand,
  capabilityPillars,
  clientTypes,
  companyIntro,
  productSubcategories,
} from "../content/siteContent";
import logoPrimary from "../assets/logo-yimai-fluid.svg";
import logoMono from "../assets/logo-yimai-mono.svg";
import logoIcon from "../assets/logo-yimai-icon.svg";

export default function About() {
  return (
    <main className="sub-page">
      <PageMeta
        title="关于我们 | 羿麦新材料"
        description="了解羿麦新材料的研发能力、应用支持、质量控制与供应保障体系。"
      />
      <section className="sub-hero">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">About YIMAI</p>
            <h1>以新材料与化学品能力服务油气开发现场</h1>
            <p>{companyIntro.heroLead}</p>
          </Reveal>
        </div>
      </section>

      <section className="section search-target" id="about-positioning">
        <div className="shell about-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Positioning"
              title={companyIntro.positioningTitle}
              description={companyIntro.positioningText}
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="about-panel">
              <span>Business Focus</span>
              <strong>{brand.tagline}</strong>
              <p>{companyIntro.panelText}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section search-target" id="capability-structure">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Capability Structure"
              title="四项能力支撑长期合作"
              description="围绕研发、评价、应用和供应保障建立更完整的化学品服务能力。"
            />
          </Reveal>
          <div className="pillar-list">
            {capabilityPillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="pillar-row">
                  <span>{item.index}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tone search-target" id="brand-kit">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Brand Kit"
              title="本轮品牌资产已补齐三种使用形态"
              description="主 logo 用于官网与宣传页，单色版适用于深底和印刷，小图标版可用于 favicon、头像和小尺寸入口。"
            />
          </Reveal>
          <div className="brand-kit-grid">
            <Reveal>
              <article className="brand-asset">
                <img src={logoPrimary} alt="主 logo" />
                <h3>主 Logo</h3>
                <p>抽象流体主版，适合官网浅底与品牌展示场景。</p>
              </article>
            </Reveal>
            <Reveal delay={60}>
              <article className="brand-asset">
                <img src={logoMono} alt="单色 logo" />
                <h3>单色版</h3>
                <p>适合深底、印刷简化和需要更高识别稳定性的场景。</p>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="brand-asset">
                <img src={logoIcon} alt="图标版 logo" />
                <h3>小图标版</h3>
                <p>适合网站小图标、社媒头像和移动端品牌入口。</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell about-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Application and Clients"
              title="服务场景与合作对象更加明确"
              description="通过清晰的业务边界，让访客快速理解你们不是泛化工企业，而是面向特定工艺环节的专业材料供应与服务方。"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="about-meta">
              <div>
                <span>应用领域</span>
                <ul className="meta-list">
                  {applicationFields.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span>客户类型</span>
                <ul className="meta-list">
                  {clientTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span>常见子类</span>
                <ul className="meta-list">
                  {productSubcategories.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
