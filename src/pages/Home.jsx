import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PageMeta from "../components/PageMeta";
import {
  applicationSupport,
  applicationFields,
  brand,
  clientTypes,
  companyIntro,
  homeCapabilities,
  productGroups,
  serviceFlow,
} from "../content/siteContent";
import drillingImage from "../assets/photos/drilling.jpg";
import fracturingImage from "../assets/photos/fracturing.jpg";
import waterImage from "../assets/photos/water-treatment.jpg";
import gatheringImage from "../assets/photos/gathering.jpg";
import surfactantImage from "../assets/photos/surfactant.jpg";

const productImages = [drillingImage, fracturingImage, waterImage, gatheringImage, surfactantImage];
const productGalleryItems = productGroups.map((item, index) => ({ ...item, image: productImages[index] }));

export default function Home() {
  const [primaryProduct, ...secondaryProducts] = productGalleryItems;
  const rightRailProducts = [secondaryProducts[0], secondaryProducts[3]];
  const bottomProducts = [secondaryProducts[1], secondaryProducts[2]];

  return (
    <main>
      <PageMeta
        title="羿麦新材料 | 油田化学品与应用支持"
        description="天津羿麦新材料科技有限公司聚焦钻完井、酸化压裂、采油水处理、集输与表面活性剂方向，提供更稳定的油田化学品与应用支持。"
      />
      <section className="hero search-target" id="home-hero">
        <div className="hero-wash" />
        <div className="hero-flow hero-flow-a" />
        <div className="hero-flow hero-flow-b" />
        <div className="shell hero-shell">
          <Reveal className="hero-copy">
            <div className="hero-brandline">
              <span>{brand.tagline}</span>
            </div>
            <h1>
              面向油气开
              <br />
              发关键工艺
              <br />
              的化学品与
              <br />
              应用支持体系
            </h1>
            <p className="hero-lead">{companyIntro.heroLead}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/products">
                查看产品中心
              </Link>
              <Link className="button button-secondary" to="/contact">
                获取合作咨询
              </Link>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={120}>
            <div className="hero-composition">
              <img className="hero-photo" src={drillingImage} alt="工业场景展示" />
              <div className="hero-photo-wash" />
              <div className="hero-card">
                <strong>Oilfield Chemistry</strong>
                <p>研发、评价、应用与交付协同推进</p>
              </div>
              <div className="hero-rail">
                <div className="hero-note note-top">矿物基底</div>
                <div className="hero-note note-right">工艺界面</div>
                <div className="hero-note note-bottom">工况适配</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section search-target" id="product-matrix">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Product Matrix"
              title="围绕油气开发流程组织五大产品体系"
              description="用图像、标题和少量关键信息建立第一层认知，后续再进入更详细的产品分类与应用说明。"
            />
          </Reveal>
          <div className="product-gallery">
            <div className="product-gallery-left">
              <Reveal className="gallery-item gallery-item-1 product-gallery-main">
                <article className="gallery-card">
                  <img src={primaryProduct.image} alt={primaryProduct.title} />
                  <div className="gallery-overlay">
                    <span>{primaryProduct.index}</span>
                    <h3>{primaryProduct.title}</h3>
                    <p>{primaryProduct.shortText}</p>
                  </div>
                </article>
              </Reveal>

              <div className="product-gallery-bottom">
                {bottomProducts.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={(index + 3) * 60}
                    className={`gallery-item gallery-item-${Number(item.index)}`}
                  >
                    <article className="gallery-card">
                      <img src={item.image} alt={item.title} />
                      <div className="gallery-overlay">
                        <span>{item.index}</span>
                        <h3>{item.title}</h3>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="product-gallery-rail">
              {rightRailProducts.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={(index + 1) * 60}
                  className={`gallery-item gallery-item-${Number(item.index)}`}
                >
                  <article className="gallery-card">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-overlay">
                      <span>{item.index}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tone search-target" id="application-support">
        <div className="shell split-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Application Support"
              title={applicationSupport.title}
              description={applicationSupport.description}
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="support-copy">
              <p>{applicationSupport.text}</p>
              <ul className="support-list">
                {applicationSupport.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section search-target" id="service-flow">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Application Fields"
              title="主要服务场景"
              description="聚焦油气开发流程中对体系稳定性、配伍性和持续运行要求更高的关键环节。"
            />
          </Reveal>
          <div className="simple-grid">
            {applicationFields.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className={`simple-cell simple-cell-illustrated field-${item.theme}`}>
                  <span>{item.index}</span>
                  <strong>{item.title}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tone">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Capability"
              title={
                <>
                  让配方、质量和交付节奏
                  <br />
                  协同运转
                </>
              }
              description="以更适合工业企业的秩序感来建立可信度。"
              align="center"
            />
          </Reveal>
          <div className="capability-grid">
            {homeCapabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="capability-cell">
                  <span>{item.index}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Service Flow"
              title="从需求沟通到持续支持的服务流程"
              description="在产品性能之外，站点同步展示服务方法，让官网更像一家具备工程协同能力的材料企业。"
            />
          </Reveal>
          <div className="flow-list">
            {serviceFlow.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="flow-row">
                  <span>{item.step}</span>
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

      <section className="section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Client Types"
              title="合作客户类型"
              description="保持克制表达，不虚构具体客户名称，但建立明确的业务对象范围。"
              align="center"
            />
          </Reveal>
          <div className="client-strip">
            {clientTypes.map((item, index) => (
              <Reveal key={item} delay={index * 60}>
                <div className="client-pill">{item}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="shell">
          <Reveal>
            <div className="cta-strip">
              <div>
                <p className="eyebrow">Contact</p>
                <h2>需要更适合工况的油田化学品方案？</h2>
                <p>欢迎围绕应用场景、产品选型和合作方式与我们沟通。</p>
              </div>
              <Link className="button button-primary" to="/contact">
                立即联系
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
