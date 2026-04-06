import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PageMeta from "../components/PageMeta";
import { productGroups, productSubcategories } from "../content/siteContent";
import drillingPhoto from "../assets/photos/drilling.jpg";
import fracturingPhoto from "../assets/photos/fracturing.jpg";
import waterTreatmentPhoto from "../assets/photos/water-treatment.jpg";
import gatheringPhoto from "../assets/photos/gathering.jpg";
import surfactantPhoto from "../assets/photos/surfactant.jpg";

const totalProducts = productGroups.reduce((sum, item) => sum + item.products.length, 0);

const productGroupPhotos = {
  "01": drillingPhoto,
  "02": fracturingPhoto,
  "03": waterTreatmentPhoto,
  "04": gatheringPhoto,
  "05": surfactantPhoto,
};

export default function Products() {
  return (
    <main className="sub-page">
      <PageMeta
        title="产品中心 | 羿麦新材料"
        description="查看羿麦新材料的钻完井化学品、酸化压裂化学品、采油水处理化学品、集输化学品与表面活性剂产品方向。"
      />
      <section className="sub-hero sub-hero-products">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">产品中心</p>
            <h1 className="products-hero-title">
              五大产品体系覆盖
              <br />
              核心油田化学品应用环节
            </h1>
            <p>从钻完井、增产改造到水处理与集输管理，以更专业的工艺语言组织产品方向和应用说明。</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="product-overview-strip">
              <div className="product-overview-stat product-overview-stat-inline">
                <strong>{productGroups.length}</strong>
                <span>大产品体系</span>
              </div>
              <div className="product-overview-stat product-overview-stat-inline">
                <strong>{totalProducts}</strong>
                <span>个核心展示方向</span>
              </div>
            </div>
          </Reveal>
          <div className="product-matrix">
            {productGroups.map((item, index) => (
              <div key={item.title}>
                {index > 0 ? (
                  <div className="product-matrix-divider" aria-hidden="true">
                    <i />
                  </div>
                ) : null}
                <Reveal delay={index * 60}>
                  <article className="product-matrix-row search-target" id={`product-${item.index}`}>
                    <div className="product-matrix-category">
                      <div className="product-category-panel">
                        <span className="product-category-index">类别 {item.index}</span>
                        <div className="product-category-chip">{item.title}</div>
                        <p className="product-category-summary">{item.shortText}</p>
                        <p className="product-category-detail">{item.text}</p>
                        <ul className="product-category-highlights">
                          {item.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="product-matrix-cards">
                      {item.products.map((product, productIndex) => (
                        <article
                          className={`product-item-card${product.featured ? " product-item-card-featured" : ""}`}
                          key={`${item.index}-${product.title}`}
                        >
                          <div className="product-item-placeholder">
                            <img
                              src={productGroupPhotos[item.index]}
                              alt={`${item.title}应用场景`}
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="product-item-content">
                            <div className="product-item-meta">
                              <span className="product-item-badge">{product.label}</span>
                              <span className="product-item-order">{`${item.index}-${String(productIndex + 1).padStart(2, "0")}`}</span>
                            </div>
                            <h3>{product.title}</h3>
                            <p>{product.summary}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tone">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="常见子类"
              title="常见产品子类方向"
              description="用于建立访客对产品深度的第一印象，后续可继续拆成单独详情页。"
              align="center"
            />
          </Reveal>
          <div className="client-strip">
            {productSubcategories.map((item, index) => (
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
                <p className="eyebrow">咨询</p>
                <h2>需要进一步了解产品方向或合作方式</h2>
                <p>可根据具体工况、应用流程和采购需求进一步沟通。</p>
              </div>
              <Link className="button button-primary" to="/contact">
                提交咨询需求
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
