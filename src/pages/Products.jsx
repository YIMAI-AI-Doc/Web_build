import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PageMeta from "../components/PageMeta";
import { productGroups, productSubcategories } from "../content/siteContent";
import drillingImage from "../assets/photos/drilling.jpg";
import fracturingImage from "../assets/photos/fracturing.jpg";
import waterImage from "../assets/photos/water-treatment.jpg";
import gatheringImage from "../assets/photos/gathering.jpg";
import surfactantImage from "../assets/photos/surfactant.jpg";

const productImages = [drillingImage, fracturingImage, waterImage, gatheringImage, surfactantImage];

export default function Products() {
  return (
    <main className="sub-page">
      <PageMeta
        title="产品中心 | 羿麦新材料"
        description="查看羿麦新材料的钻完井化学品、酸化压裂化学品、采油水处理化学品、集输化学品与表面活性剂产品方向。"
      />
      <section className="sub-hero">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Products</p>
            <h1>五大产品体系覆盖核心油田化学品应用环节</h1>
            <p>从钻完井、增产改造到水处理与集输管理，以更专业的工艺语言组织产品方向和应用说明。</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="product-list">
            {productGroups.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="product-block search-target" id={`product-${item.index}`}>
                  <div className="product-media">
                    <img src={productImages[index]} alt={item.title} />
                  </div>
                  <div className="product-head">
                    <span>{item.index}</span>
                    <h2>{item.title}</h2>
                  </div>
                  <p>{item.text}</p>
                  <ul className="tag-list">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tone">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Typical Categories"
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
                <p className="eyebrow">Inquiry</p>
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
