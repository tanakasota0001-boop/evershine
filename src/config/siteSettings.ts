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
import heroCar from "../images/hero_car.png";
import shopExterior from "../images/shop-exterior.png";
import aboutImg from "../images/about-detailing.png";

// サービス画像
import bodyCoatingImg from "../images/service-body-coating.png";
import ppfImg from "../images/service-ppf.png";
import windowFilmImg from "../images/service-window-film.png";

// ギャラリー画像
import gallery01 from "../images/gallery-01.png";
import gallery02 from "../images/gallery-02.png";
import gallery03 from "../images/gallery-03.png";
import gallery04 from "../images/gallery-04.png";

export const siteSettings = {
  // =========================================================================
  // 全体共通設定 (SEO、会社情報、連絡先など)
  // =========================================================================
  general: {
    /** サイトタイトル (ブラウザのタブや検索結果に表示されます) */
    siteTitle: "EVERSHINE（エバーシャイン）| 長野県塩尻市のカーコーティング・ガラスコーティング専門店",

    /** サイトの説明文 (SEO / 検索結果スニペットに表示されます) */
    siteDescription: "長野県塩尻市のカーコーティング・ガラスコーティング専門店EVERSHINE（エバーシャイン）。創業50年以上・累計15,000台超の実績と純水洗車で、スーパーカーから輸入車・国産車まで愛車に重厚な艶と保護を提供します。塩尻市・松本市・安曇野市対応。",

    /** 本番サイトURL (Canonical / OGP / 構造化データ用) */
    siteUrl: "https://evershine-coating.jp",

    /** OGP画像URL */
    ogImage: "/og-image.png",

    /** 電話番号 (ハイフンあり、表示用) */
    phoneNumber: "0263-53-2276",

    /** 電話番号 (国際形式 / 構造化データ用) */
    phoneNumberIntl: "+81-263-53-2276",

    /** 電話番号 (ハイフンなし、リンク用) */
    phoneNumberRaw: "tel:0263532276",

    /** 住所 */
    address: "長野県塩尻市広丘堅石2146-161",

    /** 郵便番号 */
    zipCode: "〒399-0705",

    /** 市区町村 */
    addressLocality: "塩尻市",

    /** 都道府県 */
    addressRegion: "長野県",

    /** 番地等 */
    streetAddress: "広丘堅石2146-161",

    /** 営業時間 */
    hours: "8:00 〜 18:00",

    /** 定休日 */
    holiday: "日曜・祝日定休",

    /** 会社名 */
    companyName: "株式会社エバーシャイン",

    /** 屋号・ブランド名 */
    brandName: "EVERSHINE",

    /** 創業年 */
    foundingYear: "1974",

    /** 位置情報 (GeoローカルSEO / 構造化データ用) */
    geo: {
      latitude: 36.1408,
      longitude: 137.9547,
      region: "JP-20",
      placename: "塩尻市",
    },

    /** 対象サービスエリア (ローカルSEO用) */
    serviceAreas: ["塩尻市", "松本市", "安曇野市", "岡谷市", "諏訪市", "長野県"],

    /** メインキーワード一覧 (SEO用) */
    keywords: [
      "カーコーティング",
      "ガラスコーティング",
      "セラミックコーティング",
      "プロテクションフィルム",
      "PPF",
      "ウィンドウフィルム",
      "純水洗車",
      "塩尻市",
      "松本市",
      "長野県",
      "車 コーティング 専門店",
      "輸入車 コーティング",
      "エバーシャイン",
      "EVERSHINE"
    ],
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
        // { label: "Gallery", labelJa: "ギャラリー", href: "#gallery" }, // 復元時はコメント解除
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
      /** プレ見出し (キャッチコピー上の英語ラベル) */
      preLabel: "The Art of Automotive Protection",
      /** キャッチコピー 1行目 */
      line1: "貴方の愛車に",
      /** キャッチコピー 2行目 */
      line2: "重厚な艶と深い輝きを",
      /** サブ見出し */
      subtitle: "塩尻市のカーコーティング専門店",
      /** 縦書きのサイドテキスト */
      sideLabel: "Glass Coating Specialist",
      /** 実績ミニバッジ */
      stats: [
        { number: "50+", unit: "Years", label: "Years of Experience" },
        { number: "15,000+", unit: "Cars", label: "Vehicles Detailed" },
      ],
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
      paddingBottom: "pb-12 md:pb-44 lg:pb-52",
      /** 最大幅 (Tailwindクラス。コンテンツの広がり具合を調整) */
      maxWidth: "max-w-5xl",
      /** 1行目の文字サイズ (Tailwindクラス) */
      titleLine1Size: "text-[clamp(2.2rem,6vw,5.5rem)]",
      /** 2行目の文字サイズ (Tailwindクラス) */
      titleLine2Size: "text-[clamp(2.2rem,6vw,5.5rem)]",
      /** サブ見出しの文字サイズ (Tailwindクラス) */
      subtitleSize: "text-base md:text-lg lg:text-xl",
      /** メイン文字色 (Tailwindクラス) */
      titleColor: "text-off-white",
      /** 強調文字の色 (Tailwindクラス) */
      highlightColor: "text-gold-light",
      /** サブ見出しの文字色 (Tailwindクラス) */
      subtitleColor: "text-gold",
      /** 背景画像にかけるグラデーションオーバーレイの色 (Tailwindクラス) */
      gradientOverlayLeft: "from-dark/65 via-dark/35 to-transparent",
      gradientOverlayBottom: "from-dark/70 via-transparent to-transparent",
      /** 背景画像の明るさ・トーン調整 (Tailwindクラス) */
      imageFilter: "brightness-125 contrast-105 saturate-[0.80]",
      /** シルバー調の輝き・金属感オーバーレイ (Tailwindクラス) */
      silverOverlay: "from-slate-200/25 via-slate-400/10 to-transparent",
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
      heading: "創業50年以上の\n確かな経験と実績",
      /** 画像 */
      image: aboutImg,
      /** 画像の代替テキスト */
      imageAlt: "EVERSHINE プロフェッショナルカーコーティング施工スタジオ",
      /** 本文テキスト（段落ごとに配列にします） */
      paragraphs: [
        "EVERSHINEは1974年の創業以来、50年以上にわたり、ガラスコーティング・セラミックコーティングの専門店として、数多くの車両へ施工を重ねてまいりました。",
        "輸入車メーカーを中心に培ってきた豊富な取引実績と確かな技術力により、スーパーカーをはじめ輸入車・国産車を問わず、あらゆる車種の特性に応じた最適な施工をご提供いたします。",
        "塗装の本質を見極め、一台一台丁寧に仕上げること。\nそれが創業以来変わらない、私たちの誇りとこだわりです。"
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
      headingLine1: "熟練の技術とこだわりで、",
      /** メイン見出しの2行目 */
      headingLine2: "愛車を美しく守る。",
      /** 見出し下の説明文 */
      description: "美しい仕上がりは、丁寧な下地処理で決まります。\n当社のこだわりは、この下地の仕上げです。\n\nEVERSHINE加工は傷んで艶のなくなった塗装面でも、\nプロフェッショナル仕上げにより蘇生することができます。\n必要以上に磨かない、削らない。\nこうした技術は創業50年以上の確かな経験と実績の積み重ねによるものです。",
      /** 各サービスカードの情報リスト */
      items: [
        {
          id: "body-coating",
          title: "Body Coating",
          titleJp: "ボディーコーティング",
          description: "ガラスコーティングやセラミックプロテクションなど、\n深い艶と強固な保護被膜で愛車を長期間美しく守ります。",
          image: bodyCoatingImg,
        },
        {
          id: "protection-film",
          title: "Protection Film",
          titleJp: "プロテクションフィルム",
          description: "高透明な特殊フィルムが、飛び石や擦り傷などの外的ダメージを遮断。\n塗装面を物理的に守り、愛車の美しさと価値を保ちます。",
          image: ppfImg,
        },
        {
          id: "window-film",
          title: "Window Film",
          titleJp: "ウィンドウフィルム",
          description: "高い遮熱性能とUVカットで、車内空間を快適かつ上質に。\n紫外線による内装の劣化を防ぎ、プライバシーとクリアな視界を両立します。",
          image: windowFilmImg,
        },
      ],
      /** 施工メニュー下部の問い合わせ案内 */
      contactPrompt: {
        heading: "施工内容の詳細・料金について",
        description: "お車の車種・サイズや現在の塗装状態により、最適な施工プランおよび料金が異なります。\nお見積もりやご相談は無料ですので、まずはお気軽にお問い合わせください。",
        buttonLabel: "お問い合わせ",
        subLabel: "お電話にて承ります",
      },
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-24 md:py-36 lg:py-44",
      /** グリッド列数（3列表示） (Tailwindクラス) */
      gridCols: "grid-cols-1 md:grid-cols-3",
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
          number: "50+",
          unit: "Years of Craftsmanship",
          title: "施工実績",
          description: "1974年の創業以来、\n50年以上にわたり蓄積した技術と経験。\n確かな品質をお約束します。",
        },
        {
          number: "15,000+",
          unit: "Vehicles Detailed",
          title: "施工台数",
          description: "国産車から輸入車まで、\n累計15,000台以上の施工実績。\nあらゆる車種に対応いたします。",
        },
        {
          number: "100%",
          unit: "Pure Water System",
          title: "純水洗車の徹底",
          description: "水シミやウォータースポットを防ぐため、\n不純物を極限まで除去した「純水」を使用。\n透明感あふれる最高の仕上がりを実現します。",
        },
      ]
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-28 md:py-40 lg:py-48",
      /** グリッド列数（3項目に合わせた3列表示） (Tailwindクラス) */
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
          description: "お電話にて\nお気軽にご連絡ください。",
          /** 表示するアイコンのSVGコード。コーディングが苦手な場合は、形を変えずにそのままにするか、一般的なSVGタグを貼り付けます */
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="w-6 h-6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
        },
        {
          number: "02",
          title: "ご相談",
          description: "お車の状態を確認し、\n最適なプランをご提案いたします。",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="w-6 h-6"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
        },
        {
          number: "03",
          title: "お預かり",
          description: "施工日にお車をお預かりいたします。\n代車のご用意も可能です。",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        },
        {
          number: "04",
          title: "施工",
          description: "熟練の技術者が一台一台\n丁寧に施工します。",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="w-6 h-6"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
        },
        {
          number: "05",
          title: "ご納車",
          description: "仕上がりをご確認いただき、\nメンテナンス方法をご説明します。",
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="w-6 h-6"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
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
          answer: "新車の場合は3〜5日程度、お車の状態や下地処理の程度によっては5日〜1週間程度のお預かりとなります。塗装の状態を見極め、丁寧に下地処理と硬化を行うため日数をいただいております。",
        },
        {
          question: "施工後のメンテナンスは必要ですか？",
          answer: "普段のお手入れは基本的に水洗いのみで問題ございません。洗車機をご利用される場合は、コーティング車専用の水洗いコースを推奨しております。",
        },
        {
          question: "新車でもコーティングは必要ですか？",
          answer: "はい、新車時の施工を強くおすすめいたします。新車時にコーティングを施すことで、美しいボディ状態を長く維持でき、日頃の洗車やお手入れも格段に容易になります。",
        },
        {
          question: "輸入車にも対応していますか？",
          answer: "はい、もちろん対応可能です。当店の施工実績の8割以上が輸入車であり、各メーカー・車種特有の塗装特性を熟知した専門技術者が丁寧に仕上げます。",
        },
        {
          question: "代車の用意はありますか？",
          answer: "はい、施工期間中の代車をご用意できます。台数に限りがございますので、ご利用をご希望の際はお早めにご相談・ご予約ください。",
        },
        {
          question: "支払い方法は何がありますか？",
          answer: "お支払い方法は現金のみとなります。クレジットカードや各種ローン等はご利用いただけませんので、あらかじめご了承ください。",
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
