import {
  applicationSupport,
  capabilityPillars,
  companyIntro,
  productGroups,
  serviceFlow,
  virtualContact,
} from "./siteContent";

export const siteSearchIndex = [
  {
    id: "home-hero",
    title: "面向油气开发关键工艺的化学品与应用支持体系",
    page: "首页",
    path: "/#home-hero",
    excerpt: companyIntro.heroLead,
    keywords: ["首页", "油田化学品", "应用支持", "研发", "评价", "交付"],
  },
  {
    id: "product-matrix",
    title: "围绕油气开发流程组织五大产品体系",
    page: "首页",
    path: "/#product-matrix",
    excerpt: "快速了解钻完井、酸化压裂、采油水处理、集输和表面活性剂五大产品方向。",
    keywords: ["产品体系", "五大产品", "产品中心", "钻完井", "酸化压裂", "水处理", "集输"],
  },
  {
    id: "application-support",
    title: applicationSupport.title,
    page: "首页",
    path: "/#application-support",
    excerpt: applicationSupport.text,
    keywords: ["应用支持", "工艺链条", "技术服务", "应用评价", "选型建议"],
  },
  {
    id: "service-flow",
    title: "从需求沟通到持续支持的服务流程",
    page: "首页",
    path: "/#service-flow",
    excerpt: serviceFlow.map((item) => `${item.title} ${item.text}`).join(" "),
    keywords: ["服务流程", "需求沟通", "样品评价", "方案确认", "持续支持"],
  },
  {
    id: "about-positioning",
    title: companyIntro.positioningTitle,
    page: "关于我们",
    path: "/about#about-positioning",
    excerpt: companyIntro.positioningText,
    keywords: ["关于我们", "公司定位", "研发能力", "应用支持", "供应保障"],
  },
  {
    id: "capability-structure",
    title: "四项能力支撑长期合作",
    page: "关于我们",
    path: "/about#capability-structure",
    excerpt: capabilityPillars.map((item) => `${item.title} ${item.text}`).join(" "),
    keywords: ["能力结构", "研发", "实验评价", "质量控制", "技术沟通", "供应保障"],
  },
  {
    id: "brand-kit",
    title: "品牌资产与 Logo 使用形态",
    page: "关于我们",
    path: "/about#brand-kit",
    excerpt: "主 Logo、单色版与小图标版适用于官网展示、深底印刷和小尺寸入口。",
    keywords: ["logo", "品牌资产", "主 logo", "单色版", "图标版"],
  },
  ...productGroups.map((item) => ({
    id: `product-${item.index}`,
    title: item.title,
    page: "产品中心",
    path: `/products#product-${item.index}`,
    excerpt: item.text,
    keywords: [item.shortText, ...item.tags, item.title],
  })),
  {
    id: "contact-info",
    title: "联系信息与服务热线",
    page: "联系我们",
    path: "/contact#contact-info",
    excerpt: `服务热线 ${virtualContact.hotline}，商务手机 ${virtualContact.mobile}，联系邮箱 ${virtualContact.email}。`,
    keywords: ["联系方式", "服务热线", "商务手机", "邮箱", "地址"],
  },
  {
    id: "contact-form",
    title: "提交咨询表单",
    page: "联系我们",
    path: "/contact#contact-form-section",
    excerpt: "填写联系人、联系电话、需求方向与需求说明，提交合作咨询内容。",
    keywords: ["咨询表单", "合作咨询", "提交咨询", "需求方向", "联系表单"],
  },
];

export const suggestedSearches = [
  "product-matrix",
  "application-support",
  "product-01",
  "contact-form",
]
  .map((id) => siteSearchIndex.find((item) => item.id === id))
  .filter(Boolean);
