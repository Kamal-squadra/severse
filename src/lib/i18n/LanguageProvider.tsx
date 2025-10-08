"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type SupportedLanguage = "en" | "zh";

type Translations = Record<string, Record<SupportedLanguage, string>>;

const translations: Translations = {
  // Header
  "nav.home": { en: "Home", zh: "首页" },
  "nav.platform": { en: "Platform", zh: "平台" },
  "nav.contact": { en: "Contact Us", zh: "联系我们" },
  "nav.bookDemo": { en: "Book a Demo", zh: "预约演示" },
  "nav.language.en": { en: "EN", zh: "英" },
  "nav.language.zh": { en: "中文", zh: "中" },

  // Hero
  "hero.title.1": { en: "Elevate Maritime", zh: "提升海事" },
  "hero.title.2": { en: "Learning", zh: "学习" },
  "hero.subtitle": {
    en: "Seaverse is built for modern fleets—track training, ensure compliance, and empower every seafarer with personalized lessons, analytics, and support.",
    zh: "Seaverse 为现代船队打造——跟踪培训、确保合规，并通过个性化课程、分析和支持赋能每一位海员。",
  },
  "hero.form.emailPlaceholder": { en: "Work email", zh: "工作邮箱" },
  "hero.form.cta": { en: "Start for free", zh: "免费开始" },
  "hero.rating.value": { en: "4.9", zh: "4.9" },
  "hero.rating.reviews": { en: "(390+ reviews)", zh: "（390+ 评价）" },
  "hero.card.courses": { en: "Courses", zh: "课程" },
  "hero.card.completed": { en: "completed", zh: "已完成" },
  "hero.card.thisMonth": { en: "this month", zh: "本月" },
  "hero.card.liveActivity": { en: "Live Activity", zh: "实时活动" },
  "hero.card.certificateIssued": { en: "Certificate Issued", zh: "证书已签发" },
  "hero.card.newCourse": { en: "New Course", zh: "新课程" },
  "hero.card.progressUpdate": { en: "Progress Update", zh: "进度更新" },
  "hero.badge.support": { en: "24/7 Support", zh: "24/7 支持" },
  "hero.badge.uptime": { en: "99.9% Uptime", zh: "99.9% 正常运行" },

  // Features
  "features.heading": { en: "Why Choose", zh: "为什么选择" },
  "features.heading.brand": { en: "Seaverse?", zh: "Seaverse？" },
  "features.sub": {
    en: "A learning platform designed exclusively for maritime professionals to enhance skills, ensure compliance, and accelerate career growth.",
    zh: "专为海事专业人士打造的学习平台，提升技能、确保合规并加速职业发展。",
  },
  "features.card.compliance.title": { en: "100% Compliance", zh: "100% 合规" },
  "features.card.compliance.desc": {
    en: "Aligned with STCW, IMO, and ISM Codes to keep your fleet audit-ready.",
    zh: "与 STCW、IMO 和 ISM 规范保持一致，随时应对审核。",
  },
  "features.card.multilingual.title": { en: "Multilingual Access", zh: "多语言访问" },
  "features.card.multilingual.desc": {
    en: "Content available in English, Mandarin, Tagalog, Bahasa, and more.",
    zh: "内容提供英语、中文、他加禄语、印尼语等多种语言。",
  },
  "features.card.offline.title": { en: "Offline Learning", zh: "离线学习" },
  "features.card.offline.desc": {
    en: "Seamless training access optimized for limited or no connectivity aboard.",
    zh: "针对船上有限或无网络连接优化的无缝培训访问。",
  },
  "features.card.mentorship.title": { en: "Expert Mentorship", zh: "专家指导" },
  "features.card.mentorship.desc": {
    en: "Personalized guidance from master mariners and chief engineers.",
    zh: "来自资深船长与轮机长的个性化指导。",
  },
  "features.card.anytime.title": { en: "Anytime, Anywhere", zh: "随时随地" },
  "features.card.anytime.desc": {
    en: "Access lessons via web, tablet, or mobile—onsite or at sea.",
    zh: "通过网页、平板或手机访问课程——无论在岸上还是海上。",
  },
  "features.card.certifications.title": { en: "Certifications", zh: "认证证书" },
  "features.card.certifications.desc": {
    en: "Recognized industry certificates on course completion.",
    zh: "完成课程即可获得行业认可证书。",
  },

  // Footer
  "footer.about.title": { en: "SEAVERSE", zh: "SEAVERSE" },
  "footer.about.desc": {
    en: "Empowering maritime professionals with innovative learning, compliance tracking, and analytics.",
    zh: "以创新学习、合规跟踪与分析赋能海事专业人士。",
  },
  "footer.links.title": { en: "Useful Links", zh: "实用链接" },
  "footer.links.features": { en: "Features", zh: "功能" },
  "footer.links.pricing": { en: "Pricing", zh: "定价" },
  "footer.links.docs": { en: "Documentation", zh: "文档" },
  "footer.links.support": { en: "Support", zh: "支持" },
  "footer.links.blog": { en: "Blog", zh: "博客" },
  "footer.contact.title": { en: "Contact Us", zh: "联系我们" },
  "footer.newsletter.title": { en: "Stay Updated", zh: "获取最新资讯" },
  "footer.newsletter.desc": {
    en: "Subscribe to our newsletter to get the latest updates.",
    zh: "订阅我们的新闻邮件以获取最新动态。",
  },
  "footer.newsletter.placeholder": { en: "Your email", zh: "你的邮箱" },
  "footer.newsletter.cta": { en: "Subscribe", zh: "订阅" },
  "footer.copyright": {
    en: "Seaverse Maritime Learning Platform. All rights reserved.",
    zh: "Seaverse 海事学习平台。保留所有权利。",
  },

  // About
  "about.title": { en: "About Our Platform", zh: "关于我们的平台" },
  "about.subtitle": {
    en: "Seaverse is a comprehensive business solution platform designed to streamline operations, enhance productivity, and drive growth for modern enterprises.",
    zh: "Seaverse 是一体化业务解决方案平台，旨在简化运营、提升效率并助力现代企业增长。",
  },
  "about.card.fast.title": { en: "Fast & Efficient", zh: "快速高效" },
  "about.card.fast.desc": { en: "Our platform is built for speed and efficiency, helping you accomplish more in less time.", zh: "平台以速度与效率为先，助你以更少时间完成更多工作。" },
  "about.card.secure.title": { en: "Secure & Reliable", zh: "安全可靠" },
  "about.card.secure.desc": { en: "Enterprise-grade security and reliability ensure your data is always protected and accessible.", zh: "企业级安全与可靠性，确保你的数据始终受保护且可访问。" },
  "about.card.scalable.title": { en: "Scalable Solution", zh: "可扩展方案" },
  "about.card.scalable.desc": { en: "Grow with confidence knowing our platform scales with your business needs and requirements.", zh: "平台可随业务需求扩展，助你从容成长。" },
  "about.cta.title": { en: "Ready to Get Started?", zh: "准备开始了吗？" },
  "about.cta.subtitle": { en: "Join thousands of businesses already using Seaverse to transform their operations.", zh: "加入成千上万使用 Seaverse 改变运营的企业行列。" },
  "about.cta.button": { en: "Start Your Free Trial", zh: "开始免费试用" },

  // Contact
  "contact.title": { en: "Get in Touch", zh: "联系我们" },
  "contact.subtitle": { en: "Ready to transform your business with our platform? Contact us today and let's discuss how we can help you achieve your goals.", zh: "准备借助我们的平台变革你的业务吗？立即联系，让我们探讨如何助你达成目标。" },
  "contact.info.title": { en: "Contact Information", zh: "联系信息" },
  "contact.info.email": { en: "Email", zh: "邮箱" },
  "contact.info.phone": { en: "Phone", zh: "电话" },
  "contact.info.address": { en: "Address", zh: "地址" },
  "contact.form.name.label": { en: "Full Name *", zh: "姓名 *" },
  "contact.form.name.placeholder": { en: "Enter your full name", zh: "请输入你的姓名" },
  "contact.form.email.label": { en: "Email Address *", zh: "邮箱地址 *" },
  "contact.form.email.placeholder": { en: "Enter your email address", zh: "请输入你的邮箱地址" },
  "contact.form.company.label": { en: "Company", zh: "公司" },
  "contact.form.company.placeholder": { en: "Enter your company name", zh: "请输入你的公司名称" },
  "contact.form.message.label": { en: "Message *", zh: "留言 *" },
  "contact.form.message.placeholder": { en: "Tell us about your project or how we can help you", zh: "介绍你的项目或需要我们如何帮助" },
  "contact.form.submit": { en: "Send Message", zh: "发送留言" },
};

type I18nContextValue = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as SupportedLanguage | null) : null;
    if (saved === "en" || saved === "zh") {
      setLanguageState(saved);
      return;
    }
    if (typeof navigator !== "undefined") {
      const navLang = navigator.language?.toLowerCase() || "en";
      setLanguageState(navLang.startsWith("zh") ? "zh" : "en");
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, []);

  const t = useCallback((key: string) => {
    const record = translations[key];
    if (!record) return key;
    return record[language] ?? record.en ?? key;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}


