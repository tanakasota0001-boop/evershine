// =========================================================================
// EVERSHINE ポートフォリオサイト 設定ファイル (siteSettings.ts)
// =========================================================================
// このファイルは、WEBサイトのテキスト、画像、配置（レイアウト）、文字サイズ、色などを
// コーディングの知識が少なくても、直感的に調整できるようにするためのものです。
// 
// 【画像を変更する場合】
// 1. 新しい画像を `src/images/` フォルダに保存します。
// 2. このファイルの上部でインポートし、該当するセクションの画像部分に指定します。
// =========================================================================

// --- 1. 画像アセットのインポート ---
import heroCar from "../images/hero-car.png";
import shopExterior from "../images/shop-exterior.png";
import aboutImg from "../images/about-detailing.png";

// サービス画像
import glassCoatingImg from "../images/service-glass-coating.png";
import ceramicImg from "../images/service-ceramic.png";
import ppfImg from "../images/service-ppf.png";
import privacyImg from "../images/service-privacy.png";

// ギャラリー画像
import gallery01 from "../images/gallery-01.png";
import gallery02 from "../images/gallery-02.png";
import gallery03 from "../images/gallery-03.png";
import gallery04 from "../images/gallery-04.png";
import gallery05 from "../images/gallery-05.png";
import gallery06 from "../images/gallery-06.png";

export const siteSettings = {
  // =========================================================================
  // 全体共通設定 (SEO、会社情報、連絡先など)
  // =========================================================================
  general: {
    /** サイトタイトル (ブラウザのタブに表示されます) */
    siteTitle: "EVERSHINE — カーコーティング専門店",

    /** サイトの説明文 (SEO / 検索結果に表示されます) */
    siteDescription: "長野県塩尻市のガラスコーティング/セラミックコーティング専門店EVERSHINE。30年以上の実績で、大切な愛車に最高の輝きを。ポルシェ・アウディ等の輸入車にも対応。",

    /** 電話番号 (ハイフンあり、表示用) */
    phoneNumber: "0263-53-2276",

    /** 電話番号 (ハイフンなし、リンク用) */
    phoneNumberRaw: "tel:0263532276",

    /** 住所 */
    address: "長野県塩尻市広丘堅石2146-161",

    /** 郵便番号 */
    zipCode: "〒399-0705",

    /** 営業時間 */
    hours: "8:00 〜 18:00",

    /** 定休日 */
    holiday: "日曜定休",

    /** 会社名 */
    companyName: "EVERSHINE",

    /** 設立年 */
    estYear: "Est. 1990",
  },

  // =========================================================================
  // ヘッダーセクションの設定 (Header)
  // =========================================================================
  header: {
    content: {
      /** ロゴテキスト */
      logoText: {
        first: "Ever",
        second: "shine"
      },
      /** ナビゲーションメニューのリンク */
      navLinks: [
        { label: "Services", labelJa: "施工メニュー", href: "#services" },
        { label: "About", labelJa: "私たちについて", href: "#about" },
        { label: "Gallery", labelJa: "ギャラリー", href: "#gallery" },
        { label: "Access", labelJa: "店舗情報", href: "#access" },
      ],
      /** お問い合わせボタンのテキスト */
      contactLabel: "Contact",
      contactLabelJa: "お問い合わせ",
    },
    style: {
      /** ヘッダー全体の背景スクロール時の色 (Tailwindクラス) */
      scrolledBg: "rgba(10, 10, 10, 0.85)",
      /** ナビゲーション文字サイズ (Tailwindクラス) */
      fontSize: "text-xs",
    }
  },

  // =========================================================================
  // ヒーローセクションの設定 (Hero - トップ画像・キャッチコピー)
  // =========================================================================
  hero: {
    content: {
      /** キャッチコピー 1行目 */
      line1: "大切な愛車に、",
      /** キャッチコピー 2行目 */
      line2: "最高の輝きを。",
      /** 2行目のうち、強調したい文字（斜体にする箇所など） */
      highlightText: "輝き",
      /** サブ見出し */
      subtitle: "塩尻市のガラスコーティング/セラミックコーティング専門店",
      /** 縦書きのサイドテキスト */
      sideLabel: "Glass Coating Specialist",
      /** メイン背景画像 */
      image: heroCar,
      /** 画像の代替テキスト */
      imageAlt: "ガラスコーティングが施された高級車のボディ",
      /** スクロールインジケーターの文字 */
      scrollText: "Scroll",
    },
    style: {
      /** コンテンツの配置 (text-left: 左寄せ, text-center: 中央寄せ, text-right: 右寄せ) */
      textAlign: "text-left",
      /** 下部の余白調整 (Tailwindクラス) */
      paddingBottom: "pb-12 md:pb-28 lg:pb-32",
      /** 最大幅 (Tailwindクラス。コンテンツの広がり具合を調整) */
      maxWidth: "max-w-5xl",
      /** 1行目の文字サイズ (Tailwindクラス) */
      titleLine1Size: "text-[clamp(2.2rem,6vw,5.5rem)]",
      /** 2行目の文字サイズ (Tailwindクラス) */
      titleLine2Size: "text-[clamp(2.5rem,7vw,6.5rem)]",
      /** サブ見出しの文字サイズ (Tailwindクラス) */
      subtitleSize: "text-sm lg:text-base",
      /** メイン文字色 (Tailwindクラス) */
      titleColor: "text-off-white",
      /** 強調文字の色 (Tailwindクラス) */
      highlightColor: "text-off-white/95",
      /** サブ見出しの文字色 (Tailwindクラス) */
      subtitleColor: "text-off-white/45",
      /** 背景画像にかけるグラデーションオーバーレイの色 (Tailwindクラス) */
      gradientOverlayLeft: "from-dark/90 via-dark/60 to-dark/30",
      gradientOverlayBottom: "from-dark via-transparent to-dark/40",
    }
  },

  // =========================================================================
  // アバウトセクションの設定 (About - 私たちについて)
  // =========================================================================
  about: {
    content: {
      /** 背景の大きな西暦テキスト */
      backgroundYear: "1990",
      /** セクションラベル（英語） */
      sectionLabel: "About Us",
      /** セクションラベル（日本語） */
      sectionLabelJa: "私たちについて",
      /** メイン見出し（改行は \n を入れます） */
      heading: "永く選ばれ続ける\n施工品質",
      /** 画像 */
      image: aboutImg,
      /** 画像の代替テキスト */
      imageAlt: "EVERSHINE プロフェッショナルカーコーティング施工スタジオ",
      /** 本文テキスト（段落ごとに配列にします） */
      paragraphs: [
        "EVERSHINEは30年以上にわたり、ガラスコーティング・セラミックコーティングを中心に、数多くの車両へ施工を行ってきました。",
        "ポルシェやアウディをはじめとしたメーカーとの取引実績もあり、\n輸入車・国産車を問わず、幅広い車種に対応しています。",
        "一台一台丁寧に仕上げること。\nそれが私たちの変わらないこだわりです。"
      ],
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-28 md:py-40 lg:py-52",
      /** メイン見出しの文字サイズ (Tailwindクラス) */
      headingSize: "text-[clamp(1.6rem,3.5vw,3rem)]",
      /** 通常本文の文字色 (Tailwindクラス) */
      textColor: "text-off-white/75",
      /** 強調（最後の段落など）の文字色 (Tailwindクラス) */
      highlightTextColor: "text-off-white/85",
      /** 背景西暦の文字サイズと色 (Tailwindクラス) */
      bgYearStyle: "text-[clamp(8rem,22vw,20rem)] font-light text-off-white/[0.02]",
      /** レイアウトのグリッド比率 (Tailwindクラス) */
      gridCols: "grid-cols-1 lg:grid-cols-12",
      /** 左カラム（見出し側）の幅指定 (Tailwindクラス) */
      leftColSpan: "lg:col-span-5",
      /** 右カラム（本文側）の幅指定 (Tailwindクラス) */
      rightColSpan: "lg:col-span-7",
    }
  },

  // =========================================================================
  // サービスセクションの設定 (Services - 施工内容)
  // =========================================================================
  services: {
    content: {
      /** セクションラベル（英語） */
      sectionLabel: "Our Services",
      /** セクションラベル（日本語） */
      sectionLabelJa: "施工メニュー",
      /** メイン見出しの1行目 */
      headingLine1: "最高品質の施工で、",
      /** メイン見出しの2行目 */
      headingLine2: "愛車を美しく守る。",
      /** 各サービスカードの情報リスト */
      items: [
        {
          id: "glass-coating",
          title: "Glass Coating",
          titleJp: "ガラスコーティング",
          description: "無機質ガラス被膜が、深い艶と強固な保護層を形成。\n紫外線・酸性雨から愛車を守ります。",
          image: glassCoatingImg,
        },
        {
          id: "ceramic-coating",
          title: "Ceramic Coating",
          titleJp: "セラミックコーティング",
          description: "最高硬度のセラミック被膜が、\n圧倒的な耐久性と美しい光沢を長期間維持します。",
          image: ceramicImg,
        },
        {
          id: "protection-film",
          title: "Protection Film",
          titleJp: "プロテクションフィルム",
          description: "透明フィルムが飛び石・擦り傷から塗装を\n物理的にガード。自己修復機能付き。",
          image: ppfImg,
        },
        {
          id: "privacy-glass",
          title: "Privacy Glass",
          titleJp: "プライバシーガラス",
          description: "プロ仕様のウィンドウフィルムで、\nプライバシー保護と紫外線カットを両立します。",
          image: privacyImg,
        },
      ]
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-24 md:py-36 lg:py-44",
      /** グリッド列数（標準は2列表示） (Tailwindクラス) */
      gridCols: "grid-cols-1 md:grid-cols-2",
      /** メイン見出しのサイズ (Tailwindクラス) */
      headingSize: "text-[clamp(1.8rem,4vw,3.5rem)]",
      /** カード内の英語タイトルの文字サイズ (Tailwindクラス) */
      cardTitleSize: "text-xl md:text-2xl lg:text-3xl",
    }
  },

  // =========================================================================
  // ギャラリーセクションの設定 (Gallery - 施工実績)
  // =========================================================================
  gallery: {
    content: {
      /** セクションラベル（英語） */
      sectionLabel: "Gallery",
      /** セクションラベル（日本語） */
      sectionLabelJa: "ギャラリー",
      /** ギャラリー画像リスト */
      images: [
        {
          src: gallery01,
          alt: "ガラスコーティング施工後のポルシェ",
          /** グリッド内での配置（幅・高さ） (Tailwindクラス。lg:col-span-2 などで大きさを調整できます) */
          span: "lg:col-span-2 lg:row-span-2"
        },
        {
          src: gallery02,
          alt: "セラミックコーティングのディテール",
          span: "lg:col-span-1"
        },
        {
          src: gallery03,
          alt: "施工後のメルセデスAMG",
          span: "lg:col-span-1"
        },
      ]
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-24 md:py-36 lg:py-44",
      /** グリッドレイアウト（標準はPC時3列） (Tailwindクラス) */
      gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      /** グリッドの行の高さ設定 (Tailwindクラス) */
      rowHeight: "auto-rows-[280px] md:auto-rows-[320px]",
    }
  },

  // =========================================================================
  // Why Choose Us セクションの設定 (WhyUs - 選ばれる理由)
  // =========================================================================
  whyUs: {
    content: {
      /** セクションラベル（英語） */
      sectionLabel: "Why Choose Us",
      /** セクションラベル（日本語） */
      sectionLabelJa: "選ばれる理由",
      /** 強みの情報リスト */
      strengths: [
        {
          number: "30+",
          unit: "Years",
          title: "施工実績",
          description: "1990年の創業以来、\n30年以上にわたり蓄積した技術と経験。\n確かな品質をお約束します。",
        },
        {
          number: "3,000",
          unit: "Cars",
          title: "施工台数",
          description: "国産車から輸入車まで、\n累計3,000台以上の施工実績。\nあらゆる車種に対応いたします。",
        },
        {
          number: "100%",
          unit: "Quality",
          title: "品質保証",
          description: "一台一台手作業で丁寧に仕上げ。\n施工後のアフターケアまで\n責任を持って対応いたします。",
        },
      ]
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-28 md:py-40 lg:py-48",
      /** グリッド列数（標準は3列） (Tailwindクラス) */
      gridCols: "grid-cols-1 md:grid-cols-3",
      /** 数字部分の大きさ調整 (Tailwindクラス) */
      numberSize: "text-[clamp(3rem,6vw,5rem)]",
    }
  },

  // =========================================================================
  // 施工の流れセクションの設定 (Flow - 施工プロセス)
  // =========================================================================
  flow: {
    content: {
      /** セクションラベル（英語） */
      sectionLabel: "Process",
      /** セクションラベル（日本語） */
      sectionLabelJa: "施工の流れ",
      /** ステップの情報リスト (SVGアイコンも含みます) */
      steps: [
        {
          number: "01",
          title: "お問い合わせ",
          description: "お電話またはメールにて\nお気軽にご連絡ください。",
          /** 表示するアイコンのSVGコード。コーディングが苦手な場合は、形を変えずにそのままにするか、一般的なSVGタグを貼り付けます */
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="w-7 h-7"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
        },
        {
          number: "02",
          title: "ご相談",
          description: "お車の状態を確認し、\n最適なプランをご提案いたします。",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="w-7 h-7"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
        },
        {
          number: "03",
          title: "お預かり",
          description: "施工日にお車をお預かりいたします。代車のご用意も可能です。",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        },
        {
          number: "04",
          title: "施工",
          description: "熟練の技術者が一台一台丁寧にコーティングを施します。",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="w-7 h-7"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
        },
        {
          number: "05",
          title: "ご納車",
          description: "仕上がりをご確認いただき、\n メンテナンス方法をご説明します。",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="w-7 h-7"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
        },
      ]
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-28 md:py-40 lg:py-48",
      /** ステップ数に合わせたグリッド列数 (Tailwindクラス) */
      gridCols: "grid-cols-1 md:grid-cols-5",
    }
  },

  // =========================================================================
  // よくあるご質問セクションの設定 (FAQ)
  // =========================================================================
  faq: {
    content: {
      /** セクションラベル（英語） */
      sectionLabel: "FAQ",
      /** セクションラベル（日本語） */
      sectionLabelJa: "よくあるご質問",
      /** Q&Aペアのリスト */
      items: [
        {
          question: "コーティングの施工期間はどれくらいですか？",
          answer: "お車の状態やコーティングの種類によりますが、通常2〜5日間のお預かりとなります。\nセラミックコーティングの場合は、硬化時間を含め5〜7日間をいただく場合がございます。",
        },
        {
          question: "施工後のメンテナンスは必要ですか？",
          answer: "定期的な洗車と、年に1〜2回のメンテナンスをお勧めしています。\nメンテナンスサービスもご用意しておりますので、お気軽にご相談ください。コーティングの効果を長期間維持するために重要です。",
        },
        {
          question: "新車でもコーティングは必要ですか？",
          answer: "はい、新車の状態が最もコーティングに適しています。\n納車直後に施工することで、塗装面を最高の状態で保護できます。新車割引もご用意しておりますので、ぜひご検討ください。",
        },
        {
          question: "輸入車にも対応していますか？",
          answer: "はい、ポルシェ・アウディ・BMWなど各メーカーとの取引実績がございます。\n輸入車特有の塗装特性を理解した上で、最適な施工方法をご提案いたします。",
        },
        {
          question: "代車の用意はありますか？",
          answer: "はい、施工期間中の代車をご用意しております。ご予約時にお申し付けください。\n台数に限りがございますので、早めのご予約をお勧めいたします。",
        },
        {
          question: "支払い方法は何がありますか？（クレジットカードやローンは使えますか？）",
          answer: "各種クレジットカード（Visa, Mastercard, JCB, American Express等）のほか、電子マネー、QRコード決済に対応しております。また、高額な施工プランでもご安心いただけるよう、提携オートローンによる分割払いもご利用いただけます。お気軽にご相談ください。",
        },
      ]
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-28 md:py-40 lg:py-48",
      /** コンテンツ幅の制限 (Tailwindクラス) */
      maxWidth: "max-w-4xl",
    }
  },

  // =========================================================================
  // アクセスセクションの設定 (Access - 店舗情報と地図)
  // =========================================================================
  access: {
    content: {
      /** セクションラベル（英語） */
      sectionLabel: "Access",
      /** セクションラベル（日本語） */
      sectionLabelJa: "店舗情報",
      /** Googleマップの埋め込み用URL (iframeのsrc属性の部分です) */
      googleMapsUrl: "https://maps.app.goo.gl/EYMv7pefjSoiW3ko9",
      /** 地図のタイトルタグ（アクセシビリティ用） */
      mapTitle: "EVERSHINEの所在地",
      /** 店舗写真 */
      shopImage: shopExterior,

    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-28 md:py-40 lg:py-48",
      /** グリッド列数（左右カラム表示） (Tailwindクラス) */
      gridCols: "grid-cols-1 lg:grid-cols-2",
      /** 写真や地図のアスペクト比設定 (Tailwindクラス) */
      mapAspect: "aspect-[4/3]",
      shopPhotoAspect: "aspect-[16/9]",
    }
  },

  // =========================================================================
  // フッターセクションの設定 (Footer - お問い合わせ誘導とコピーライト)
  // =========================================================================
  footer: {
    content: {
      /** フッター上部の仕切り飾りマーク */
      ornamentSymbol: "✦",
      /** お問い合わせのキャッチコピー */
      ctaHeading: "まずはお気軽にご相談ください",
      /** お問い合わせの説明文 */
      ctaDescription: "お電話でのお問い合わせを承っております",
      /** 電話番号エリアの英語ラベル */
      telLabel: "Tel",
      /** コピーライトテキスト */
      copyright: "EVERSHINE. All rights reserved.",
    },
    style: {
      /** お問い合わせエリアの上下余白 (Tailwindクラス) */
      ctaPaddingY: "py-24 md:py-36 lg:py-44",
      /** コピーライトエリアの上下余白 (Tailwindクラス) */
      barPaddingY: "py-8 md:py-10",
      /** お問い合わせ見出し文字サイズ (Tailwindクラス) */
      ctaHeadingSize: "text-[clamp(1.5rem,3vw,2.5rem)]",
    }
  }
};
