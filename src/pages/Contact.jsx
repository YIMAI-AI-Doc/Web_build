import { useState } from "react";
import Reveal from "../components/Reveal";
import PageMeta from "../components/PageMeta";
import { brand, virtualContact } from "../content/siteContent";

const initialState = {
  name: "",
  phone: "",
  topic: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [feedback, setFeedback] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.topic || !form.message) {
      setFeedback("请先完整填写咨询信息。");
      return;
    }

    setFeedback("前端演示已记录您的咨询内容，后续可接入企业邮箱、CRM 或表单服务。");
    setForm(initialState);
  };

  return (
    <main className="sub-page">
      <PageMeta
        title="联系我们 | 羿麦新材料"
        description="联系羿麦新材料，获取产品咨询、技术交流、样品评估与合作洽谈支持。"
      />
      <section className="sub-hero">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="contact-hero-title">欢迎围绕产品、应用与合作方式与我们联系</h1>
            <p>{virtualContact.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-grid">
          <Reveal>
            <div className="contact-card search-target" id="contact-info">
              <h2>联系信息</h2>
              <div className="contact-row">
                <span>公司名称</span>
                <strong>{brand.legalName}</strong>
              </div>
              <div className="contact-row">
                <span>服务说明</span>
                <strong>支持产品咨询、技术交流、样品评估与合作洽谈</strong>
              </div>
              <div className="contact-row">
                <span>服务热线</span>
                <strong>{virtualContact.hotline}</strong>
              </div>
              <div className="contact-row">
                <span>商务手机</span>
                <strong>{virtualContact.mobile}</strong>
              </div>
              <div className="contact-row">
                <span>联系邮箱</span>
                <strong>{virtualContact.email}</strong>
              </div>
              <div className="contact-row">
                <span>示例地址</span>
                <strong>{virtualContact.address}</strong>
              </div>
              <p className="contact-note">{virtualContact.note}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="contact-form search-target" id="contact-form-section" onSubmit={submitForm}>
              <h2>提交咨询</h2>
              <label>
                <span>联系人</span>
                <input name="name" value={form.name} onChange={updateField} placeholder="请输入您的姓名" />
              </label>
              <label>
                <span>联系电话</span>
                <input name="phone" value={form.phone} onChange={updateField} placeholder="请输入联系电话" />
              </label>
              <label>
                <span>需求方向</span>
                <select name="topic" value={form.topic} onChange={updateField}>
                  <option value="">请选择咨询方向</option>
                  <option value="drilling">钻完井化学品</option>
                  <option value="fracturing">酸化压裂化学品</option>
                  <option value="water">采油水处理化学品</option>
                  <option value="transport">集输化学品</option>
                  <option value="surfactant">表面活性剂</option>
                </select>
              </label>
              <label>
                <span>需求说明</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={updateField}
                  placeholder="请输入项目背景、应用场景或合作需求"
                />
              </label>
              <button className="button button-primary" type="submit">
                发送咨询
              </button>
              <p className="form-feedback" aria-live="polite">
                {feedback}
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
