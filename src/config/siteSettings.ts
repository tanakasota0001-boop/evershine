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
import hero3 from "../images/hero3.png";
import shopExterior from "../images/shop-exterior.png";
import ownerImg from "../images/owner.png";
import aboutImg from "../images/about-detailing.webp";

// サービス画像
import bodyCoatingImg from "../images/service-body-coating.webp";
import ppfImg from "../images/service-ppf.webp";
import windowFilmImg from "../images/service-window-film.webp";
import wrappingFilmImg from "../images/service-wrapping-film.png";
import interiorCoatingImg from "../images/service-interior-coating.png";
import headlightProtectionImg from "../images/service-headlight-protection.png";
import glassCoatingImg from "../images/service-glass-coating.png";
import topWaterRepellentImg from "../images/service-top-water-repellent.png";
import wheelCoatingImg from "../images/service-wheel-coating.png";

// 下地処理・加工図
import craftsmanshipImg from "../images/Craftsmanship.png";
import evershineProcessImg from "../images/evershine_process.png";

// ギャラリー画像
import gallery01 from "../images/gallery-01.webp";
import gallery02 from "../images/gallery-02.webp";
import gallery03 from "../images/gallery-03.webp";
import gallery04 from "../images/gallery-04.webp";

// 四季ケア画像
import seasonSpringImg from "../images/season-spring-clean.jpg";
import seasonSummerImg from "../images/season-summer.jpg";
import seasonAutumnImg from "../images/season-autumn.jpg";
import seasonWinterImg from "../images/season-winter.jpg";

export const siteSettings = {
  // =========================================================================
  // 全体共通設定 (SEO、会社情報、連絡先など)
  // =========================================================================
  general: {
    /** サイトタイトル (ブラウザのタブや検索結果に表示されます) */
    siteTitle: "EVERSHINE（エバーシャイン）| 長野県塩尻市のカーコーティング・ガラスコーティング専門店",

    /** サイトの説明文 (SEO / 検索結果スニペットに表示されます) */
    siteDescription: "長野県塩尻市のカーコーティング・ガラスコーティング専門店EVERSHINE（エバーシャイン）。創業50年以上・累計20,000台超の実績と純水洗車で、スーパーカーから輸入車・国産車まで愛車に重厚な艶と保護を提供します。塩尻市・松本市・安曇野市対応。",

    /** 本番サイトURL (Canonical / OGP / 構造化データ用) */
    siteUrl: "https://evershine-coating.jp",

    /** OGP画像URL */
    ogImage: "/og-image.webp",

    /** 電話番号 (ハイフンあり、表示用) */
    phoneNumber: "0263-53-2276",

    /** 電話番号 (国際形式 / 構造化データ用) */
    phoneNumberIntl: "+81-263-53-2276",

    /** 電話番号 (ハイフンなし、リンク用) */
    phoneNumberRaw: "tel:0263532276",

    /** 住所 */
    address: "長野県塩尻市広丘堅石2146-161",

    /** 道順案内・アクセス */
    directions: "国道19号「緑ヶ丘南」交差点を南へ約200m、案内看板を目印に左折",

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
    foundingYear: "1972",

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
        { label: "About", labelJa: "私たちについて", href: "#about" },
        { label: "Craftsmanship", labelJa: "こだわり", href: "#craftsmanship" },
        { label: "Services", labelJa: "施工メニュー", href: "#services" },
        { label: "Why Us", labelJa: "選ばれる理由", href: "#why-us" },
        { label: "Flow", labelJa: "施工の流れ", href: "#flow" },
        { label: "Seasonal Care", labelJa: "四季のケア", href: "#season-care" },
        { label: "FAQ", labelJa: "よくあるご質問", href: "#faq" },
        { label: "Access", labelJa: "店舗情報", href: "#access" },
      ],
      /** お問い合わせボタンのテキスト */
      contactLabel: "Contact",
      contactLabelJa: "お問い合わせ",
    },
    style: {
      /** ヘッダー全体の背景スクロール時の色 (Tailwindクラス) */
      scrolledBg: "rgba(255, 255, 255, 0.95)",
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
        { number: "20,000+", unit: "Cars", label: "Vehicles Detailed" },
      ],
      /** メイン背景画像 */
      image: hero3,
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
      /** プレ見出しの文字サイズ (Tailwindクラス) */
      preLabelSize: "text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.2em] md:tracking-[0.25em]",
      /** プレ見出しの文字色 (Tailwindクラス) */
      preLabelColor: "text-gold-light",
      /** 1行目の文字サイズ (Tailwindクラス) */
      titleLine1Size: "text-[clamp(2.2rem,6vw,5.5rem)]",
      /** 2行目の文字サイズ (Tailwindクラス) */
      titleLine2Size: "text-[clamp(2.2rem,6vw,5.5rem)]",
      /** サブ見出しの文字サイズ (Tailwindクラス) */
      subtitleSize: "text-lg sm:text-xl md:text-2xl lg:text-[1.7rem]",
      /** メイン文字色 (Tailwindクラス) */
      titleColor: "text-white",
      /** 強調文字の色 (Tailwindクラス) */
      highlightColor: "text-gold-light",
      /** サブ見出しの文字色 (Tailwindクラス) */
      subtitleColor: "text-gold-light",
      /** 背景画像にかけるグラデーションオーバーレイの色 (Tailwindクラス) */
      gradientOverlayLeft: "from-black/45 via-black/15 to-transparent",
      gradientOverlayBottom: "from-black/30 via-transparent to-transparent",
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
      backgroundYear: "1972",
      /** セクションラベル（英語） */
      sectionLabel: "About Us",
      /** セクションラベル（日本語） */
      sectionLabelJa: "私たちについて",
      /** メイン見出し（改行は \n を入れます） */
      heading: "創業50年以上の\n確かな経験と実績",
      /** 画像 */
      image: ownerImg,
      /** 画像の代替テキスト */
      imageAlt: "EVERSHINE 代表取締役 森村 秀樹",
      /** 代表肩書き */
      ownerRole: "代表取締役",
      /** 代表氏名 */
      ownerName: "森村 秀樹",
      /** 本文テキスト（段落ごとに配列にします） */
      paragraphs: [
        "EVERSHINEは1972年の創業以来、50年以上にわたり、ガラスコーティング・セラミックコーティングの専門店として、数多くの車両へ施工を重ねてまいりました。",
        "輸入車メーカーを中心に培ってきた豊富な取引実績と確かな技術力により、スーパーカーをはじめ輸入車・国産車を問わず、あらゆる車種の特性に応じた最適な施工をご提供いたします。",
        "塗装の本質を見極め、一台一台丁寧に仕上げること。\nそれが創業以来変わらない、私たちの誇りとこだわりです。"
      ],
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-16 md:py-24 lg:py-32",
      /** メイン見出しの文字サイズ (Tailwindクラス) */
      headingSize: "text-[clamp(1.9rem,4vw,3.5rem)]",
      /** 本文段落の文字サイズ (Tailwindクラス) */
      paragraphSize: "text-base md:text-lg lg:text-[1.15rem] leading-[2.3] tracking-[0.04em]",
      /** 通常本文の文字色 (Tailwindクラス) */
      textColor: "text-slate-700 font-normal",
      /** 強調（最後の段落など）の文字色 (Tailwindクラス) */
      highlightTextColor: "text-slate-700 font-normal",
      /** 背景西暦の文字サイズと色 (Tailwindクラス) */
      bgYearStyle: "text-[clamp(8rem,22vw,20rem)] font-light text-slate-900/[0.03]",
      /** レイアウトのグリッド比率 (Tailwindクラス) */
      gridCols: "grid-cols-1 lg:grid-cols-12",
      /** 左カラム（テキスト側）の幅指定 (Tailwindクラス) */
      leftColSpan: "lg:col-span-7",
      /** 右カラム（写真側）の幅指定 (Tailwindクラス) */
      rightColSpan: "lg:col-span-5",
    }
  },

  // =========================================================================
  // 下地処理セクションの設定 (Craftsmanship - EVERSHINE加工へのこだわり)
  // =========================================================================
  craftsmanship: {
    content: {
      /** セクションラベル（英語） */
      sectionLabel: "Craftsmanship",
      /** セクションラベル（日本語） */
      sectionLabelJa: "こだわり",
      /** メイン見出しの1行目 */
      headingLine1: "塗装を削らず艶を蘇生させる",
      /** メイン見出しの2行目 */
      headingLine2: "半世紀の経験が生んだ",
      /** メイン見出しの3行目 */
      headingLine3: "EVERSHINE加工",
      /** リード文 */
      leadText: "美しい仕上がりは、丁寧な下地処理で決まります。\n当社のこだわりは、この下地の仕上げです。\n\nEVERSHINE加工は傷んで艶のなくなった塗装面でも、\nプロフェッショナル仕上げにより蘇生することができます。\n必要以上に磨かない、削らない。\nこうした技術は創業50年以上の確かな経験と実績の積み重ねによるものです。",
      /** 右側に配置するイメージ画像 */
      heroImage: craftsmanshipImg,
      /** 特徴エリアの見出し設定 */
      featuresTag: "Features",
      featuresTitle: "EVERSHINE加工 6つの特徴",
      /** EVERSHINE加工の特徴・こだわり */
      features: [
        {
          number: "01",
          title: "最新の塗面蘇生法「EVERSHINE加工」",
          titleEn: "Surface Restoration",
          description: "経年劣化や微細な酸化により艶を失った塗装面を削ることなく、独自の下地処理技術で塗装本来の深みある輝きを劇的に蘇生させます。",
        },
        {
          number: "02",
          title: "一度の施工で輝きは半永久的",
          titleEn: "Semi-Permanent Shine",
          description: "一度EVERSHINE加工を施せば、その重厚な深みと輝きは半永久的。プロの緻密な仕上げが強固な保護被膜となり、愛車の極上の艶を末永く保ち続けます。",
        },
        {
          number: "03",
          title: "抜群の水はじきと水洗いだけの簡単ケア",
          titleEn: "Hydrophobic & Easy Care",
          description: "圧倒的な撥水性能により汚れの固着を強力に防止。施工後のお手入れは普段の水洗いだけでサッと汚れが落ち、いつでも洗いたてのような美しさを維持できます。",
        },
        {
          number: "04",
          title: "ボディと同時に樹脂パーツも美しく復元",
          titleEn: "Body & Plastic Restoration",
          description: "塗装ボディはもちろん、経年劣化で白ボケしやすいバンパー等の未塗装樹脂パーツも同時にピカピカに仕上げ、お車全体を新車のように引き締めます。",
        },
        {
          number: "05",
          title: "新車を超える深みと圧倒的な光沢",
          titleEn: "Beyond Brand-New",
          description: "新車の塗装特有のユズ肌（微細な凹凸）やくすみを下地から丁寧に整えることで、ディーラー納車時を遥かに超える息をのむような深みと光沢を引き出します。",
        },
        {
          number: "06",
          title: "中古車の価値・査定評価額が向上",
          titleEn: "Value Enhancement",
          description: "くすんだ中古車に施工することで新車同様の輝きを取り戻し、外装の美観が飛躍的にアップ。必然的に下取りや売却時の査定評価額・資産価値の向上へ繋がります。",
        },
      ],
      /** EVERSHINE加工の仕組み図解 */
      processDiagram: {
        tag: "Restoration Mechanism",
        title: "EVERSHINE加工による塗面蘇生の仕組み",
        image: evershineProcessImg,
        imageAlt: "異物で侵された塗装面とEVERSHINE加工された塗装面の比較図",
        description: "微細な凹凸や酸化により艶を失った塗装面を無理に削ることなく、特殊下地処理とプロ仕上げで平滑に整え、塗装本来の深みある輝きを蘇生・保護します。",
      },
      /** 補足バナーメッセージ */
      bottomMessage: "",
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-16 md:py-24 lg:py-32",
      /** メイン見出しのサイズ (Tailwindクラス) */
      headingSize: "text-[clamp(1.35rem,3.4vw,3.2rem)]",
    }
  },

  // =========================================================================
  // 四季のカーケアセクションの設定 (SeasonCare - 四季固有のトラブルと対策)
  // =========================================================================
  seasonCare: {
    content: {
      /** セクションラベル（英語） */
      sectionLabel: "Seasonal Care",
      /** セクションラベル（日本語） */
      sectionLabelJa: "四季の塗装トラブルと対策",
      /** 導入リード文 */
      leadText: "美しい愛車を長く保つためには、日本の四季特有の環境変化を知ることが不可欠です。\n季節ごとに愛車を脅かす付着物やダメージの原因、そしてEVERSHINEならではの解決策をご紹介します。",
      /** 四季ごとの情報 */
      seasons: [
        {
          id: "spring",
          nameJa: "春",
          nameEn: "Spring",
          period: "3月 〜 5月",
          lead: "春先の車の塗装面には、飛散する花粉や黄砂、そして桜の花びらや樹液など、特有の付着物が重なり合ってダメージを与えやすくなります。",
          issues: [
            {
              title: "花粉（ペクチン）",
              desc: "雨や夜露などの水分を含むとタンパク質「ペクチン」が溶け出し、乾燥時にクリア層を引っ張って変形・侵食させ、頑固な花粉ジミや凹凸の原因になります。放置すると通常の洗車では落ちなくなります。",
            },
            {
              title: "黄砂",
              desc: "大陸から飛来する微細な鉱物粒子。硬い粒子がボディに乗った状態で乾拭きや不用意な洗車をすると、塗装表面に無数の細かな擦り傷が付きます。",
            },
            {
              title: "桜の花びら・樹液",
              desc: "雨や湿気でボディに張り付いた花びらや、気温上昇に伴い分泌される樹液は、塗装面に強力に固着するとシミや塗装剥がれの原因になります。",
            },
          ],
          evershineSolution: {
            title: "EVERSHINEの特別解決策",
            desc: "一度クリア層に侵食してしまった花粉ジミや焼き付いた樹液は、いくら洗車しても、ただ磨いても除去できません。当社の特別な技術で除去作業を行ったあと、表面を滑らかに研磨することで元通りの輝きが蘇ります。",
          },
          prevention: {
            title: "日頃のお手入れ対策",
            desc: "【対策】雨上がり後に放置せず、たっぷりの水（純水）で花粉や黄砂を優しく洗い流すこまめな洗車をお勧めします。頑固な花粉ジミができてしまった場合は、無理に擦らずプロにご相談ください。",
          },
          image: seasonSpringImg,
          imageAlt: "春の塗装ケア・桜の花びらや花粉対策",
        },
        {
          id: "summer",
          nameJa: "夏",
          nameEn: "Summer",
          period: "6月 〜 8月",
          lead: "夏場の車の塗装面には、高温や強い日差し、虫の活動などによって、さまざまな汚れや物質が付着しやすくなります。",
          issues: [
            {
              title: "虫の死骸",
              desc: "夜間の走行などでフロントバンパーやボンネットに付着しやすく、強酸性成分が塗装を急速に傷めます。",
            },
            {
              title: "鳥のフン",
              desc: "木の下などに駐車すると付着しやすく、炎天下の熱で強烈な酸が塗装を素早く侵食します。",
            },
            {
              title: "樹液",
              desc: "春から夏にかけて木の成長や気温上昇に伴い分泌され、軟化してボディに強力に付着します。",
            },
            {
              title: "花粉・黄砂（残り）や砂埃",
              desc: "高温と混ざることで固着しやすくなり、雨粒と混ざってシミの原因になります。",
            },
            {
              title: "イオンデポジット（水アカ・輪ジミ）",
              desc: "洗車後の水滴や雨水が夏の強い日差しで急激に蒸発し、含まれるミネラル分が塗装面に焼き付きます。",
            },
          ],
          evershineSolution: {
            title: "EVERSHINEの特別解決策",
            desc: "エバーシャイン加工は、いくら洗車してもただ磨いてもこの付着してしまった花粉や頑固な固着物は取れません。当社の特別な技術で除去作業を行ったあと、表面を滑らかに研磨することで元通りの輝きが蘇ります。",
          },
          prevention: {
            title: "日頃のお手入れ対策",
            desc: "塗装への焼き付きを防ぐため、定期的に洗車をすることをお勧めします。",
          },
          image: seasonSummerImg,
          imageAlt: "夏の塗装ケア・虫の死骸やイオンデポジット対策",
        },
        {
          id: "autumn",
          nameJa: "秋",
          nameEn: "Autumn",
          period: "9月 〜 11月",
          lead: "秋の車の塗装面に付着しやすい主なものには、落ち葉、樹液、黄砂やPM2.5、朝露と混ざった汚れなどがあります。",
          issues: [
            {
              title: "落ち葉",
              desc: "風で舞い散った落ち葉がボディに積もると、水分やタンニン、樹液が染み出し、塗装の黄ばみやシミの原因になります。",
            },
            {
              title: "樹液",
              desc: "紅葉の時期や落葉の過程で、木の下などに駐車していると粘着質な樹液がボディに付着し、放置すると塗装を傷めます。",
            },
            {
              title: "黄砂・PM2.5",
              desc: "春のイメージが強いですが秋にも飛来することがあり、朝露や雨と混ざることで固着しやすくなります。",
            },
            {
              title: "花粉・粉塵",
              desc: "秋口にも一部の植物の花粉や舞い上がった粉塵が降り積もり、日差しを浴びることでシミになりやすくなります。",
            },
          ],
          evershineSolution: {
            title: "EVERSHINEの特別解決策",
            desc: "落ち葉から染み出したタンニン色素や、朝露と混ざって固着した汚れは、いくら洗車しても、ただ磨いても除去できません。当社の特別な技術で塗装を傷めずに不純物を除去し、表面を滑らかに研磨することで元通りの輝きが蘇ります。",
          },
          prevention: {
            title: "日頃のお手入れ対策",
            desc: "【対策】定期的に洗車をすることをお勧めします。最も適している天気は、日差しが弱い曇りの日。なるべく風が弱い日に行うと砂埃によるキズもつきにくくなります。",
          },
          image: seasonAutumnImg,
          imageAlt: "秋の塗装ケア・落ち葉や樹液、秋雨と黄砂対策",
        },
        {
          id: "winter",
          nameJa: "冬",
          nameEn: "Winter",
          period: "12月 〜 2月",
          lead: "冬の車の塗装面に付着しやすい主なものには、融雪剤や凍結防止剤、泥汚れ、氷や雪に含まれる不純物、そして鉄粉などがあります。",
          issues: [
            {
              title: "融雪剤・凍結防止剤（塩カル）",
              desc: "塩化ナトリウムや塩化カルシウムなどが含まれ、走行風で巻き上がって付着します。放置すると金属を腐食させ、サビや塗装劣化の原因になります。",
            },
            {
              title: "泥汚れ・砂ぼこり",
              desc: "雪解け水や融雪剤を含んだ泥がボディにはね上がり、乾くことで塗装面に強く固着してしまいます。",
            },
            {
              title: "氷・雪の不純物（イオンデポジット）",
              desc: "積もった雪に含まれる大気中の汚れや融雪剤の塩分が、雪解け水とともに乾いて固着すると、白い輪ジミ（イオンデポジット）になります。",
            },
            {
              title: "硬い氷や雪・雪下ろしキズ",
              desc: "凍結した雪や氷を無理にヘラなどで削ったり、雪下ろしや除雪の際の摩擦により、塗装表面に無数の細かい線キズがついてしまいます。",
            },
            {
              title: "鉄粉の突き刺さり",
              desc: "冬場もブレーキ痕や工業地帯などから飛来し、湿気とともに塗装面に突き刺さってザラつきやサビの原因を作ります。",
            },
          ],
          evershineSolution: {
            title: "EVERSHINEの特別解決策",
            desc: "固着した融雪剤や焼き付いたイオンデポジット、突き刺さった鉄粉は、いくら洗車しても、ただ擦っても取れません。当社の特別な技術で不純物を安全に分解除去し、表面を滑らかに研磨することで元通りの輝きが蘇ります。",
          },
          prevention: {
            title: "日頃のお手入れ対策",
            desc: "【対策】早めの洗車が最も重要です。雪が降った後や雪解け後は、汚れや塩分を落とすために速やかに洗車をしましょう。雪下ろしの際はボディを無理に擦らないようご注意ください。",
          },
          image: seasonWinterImg,
          imageAlt: "冬の塗装ケア・融雪剤や雪・凍結キズ対策",
        },
      ],
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-16 md:py-24 lg:py-32",
    },
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
      /** 見出し下の説明文 */
      description: "愛車への想いや美しさへのこだわりを形に。\nオーナー様の理想を具現化する、各種プロフェッショナルメニューをご用意しております。",
      /** 各サービスカードの情報リスト */
      items: [
        {
          id: "body-coating",
          number: "01",
          title: "Body Coating",
          titleJp: "ボディーコーティング",
          description: "ガラスコーティングやセラミックプロテクションなど、\n深い艶と強固な保護被膜で愛車を長期間美しく守ります。",
          image: bodyCoatingImg,
          hasModal: true,
          modalButtonLabel: "詳しく見る＞",
        },
        {
          id: "protection-film",
          number: "02",
          title: "Protection Film",
          titleJp: "プロテクションフィルム",
          description: "透明な特殊保護フィルムが塗装面を物理的にガード。\n高速道路を頻繁に使われる方には、飛石防止フィルムがおすすめです。",
          image: ppfImg,
        },
        {
          id: "window-film",
          number: "03",
          title: "Window Film",
          titleJp: "ウィンドウフィルム",
          description: "通常スモーク（透過率3%〜45%）からIRカット遮熱まで対応。\n高速道路を頻繁に使われる方には、飛石防止フィルムもおすすめです。",
          image: windowFilmImg,
          externalLink: "https://www.ikcs.co.jp/carfilm/cs/carfilm/sylphide/",
          externalLinkLabel: "サンプルを見る＞",
        },
        {
          id: "wrapping-film",
          number: "04",
          title: "Wrapping Film",
          titleJp: "ラッピングフィルム",
          description: "塗装を傷めずに愛車を自在にドレスアップ。ルーフ等へのカーボン調も人気です。\n剥がすことで元の状態に戻せるため、気軽なイメージチェンジが楽しめます。",
          image: wrappingFilmImg,
          externalLink: "https://graphics.averydennison.com/ap-en/home/graphics-products/vehicle-wrapping-films/swf900-supreme-wrapping-film/range.html",
          externalLinkLabel: "サンプルを見る＞",
        },
        {
          id: "interior-coating",
          number: "05",
          title: "Interior Coating",
          titleJp: "インテリアコーティング",
          description: "レザーシートや内装トリムを保護し、擦れや汚れ、紫外線による色褪せを防止。\n新車時の上質な風合いと清潔感を長くキープします。",
          image: interiorCoatingImg,
        },
        {
          id: "headlight-protection",
          number: "06",
          title: "Headlight Protection",
          titleJp: "ヘッドライトプロテクション",
          description: "紫外線による黄ばみ・白濁や飛び石キズからヘッドライトを強力ガード。\nクリアな透明感と高い光量を保ち、美しさを際立たせます。",
          image: headlightProtectionImg,
        },
        {
          id: "window-water-repellent",
          number: "07",
          title: "Window Water Repellent",
          titleJp: "窓ガラス撥水加工",
          description: "雨天時の視界をクリアに確保し、夜間や悪天候時の安全運転をサポート。\n油膜やウロコ汚れの付着を防止し、快適なドライブを実現します。",
          image: glassCoatingImg,
        },
        {
          id: "soft-top-coating",
          number: "08",
          title: "Soft Top Water Repellent",
          titleJp: "幌撥水加工",
          description: "オープンカーのファブリック製・布製幌を強力に撥水保護。\n雨水や紫外線、排気ガスによる劣化・色褪せやカビの発生を防ぎます。",
          image: topWaterRepellentImg,
        },
        {
          id: "wheel-coating",
          number: "09",
          title: "Wheel Coating",
          titleJp: "アルミホイールコーティング",
          description: "ブレーキダストや泥汚れの焼き付きを強力にガード。\n強固な保護被膜により、普段の水洗いだけで簡単に汚れが落ちるようになります。",
          image: wheelCoatingImg,
        },
      ],
      /** ボディーコーティングの詳細ポップアップモーダルの内容 */
      bodyCoatingModal: {
        title: "ボディーコーティングの種類と\nEVERSHINEの施工品質",
        intro: "お車の保管環境やボディーカラー、お客様のご要望に合わせたコーティングをご提案いたします。EVERSHINEではコーティングの性能をしっかりと引き出すため、下地処理から細部の施工まで丁寧に行います。",
        typesSection: {
          sectionTitle: "コーティングの種類と特徴",
          items: [
            {
              name: "ガラスコーティング",
              badge: "定番・高透明度",
              description: "高密度のガラス被膜により、透明感ある深い艶と優れた防汚性を発揮。塗装を紫外線や日々の汚れから長期間しっかりと保護します。",
              recommendation: "普段のお手入れを楽にしたい方、自然で深みのある上品な輝きを長く維持したい方におすすめです。",
            },
            {
              name: "セラミックコーティング",
              badge: "高硬度・強靭被膜",
              description: "厚みのある強固な被膜を形成するセラミック皮膜。耐薬品性・耐スクラッチ性に優れ、重厚で濡れたような艶と高い保護性能を発揮します。",
              recommendation: "輸入車やスーパーカー、洗車傷を抑えたい方、高い耐久性や重厚な光沢を重視される方におすすめです。",
            },
            {
              name: "親水コーティング",
              badge: "雨染み抑制・自己洗浄",
              description: "水滴が塗装面に馴染んで膜状に流れ落ちる特性を持ちます。水滴が残りにくいため、雨染み（イオンデポジット）の発生リスクを大幅に抑えます。",
              recommendation: "屋外駐車（青空駐車）の方、黒や濃色車にお乗りの方、雨染みや水垢の付着を抑えたい方におすすめです。",
            },
          ],
        },
        qualitySection: {
          sectionTitle: "妥協なき施工へのこだわり",
          intro: "コーティングの仕上がりは下地処理と細部への丁寧さが大きく影響します。EVERSHINEならではのこだわりを持って施工いたします。",
          points: [
            {
              number: "01",
              title: "徹底した養生処理（マスキング保護）",
              description: "ゴムモールや未塗装樹脂、エンブレム、パネルのエッジ部など、コンパウンド（研磨剤）の付着や研磨時の摩擦熱から守るべき箇所を専用テープでミリ単位でマスキング。大切なお車への負担を軽減し、安全に配慮して施工します。",
            },
            {
              number: "02",
              title: "塗装を守り艶を引き出す精密研磨（磨き技術）",
              description: "コーティングの美しさは「磨き（下地処理）」が大きな鍵を握ります。塗装の膜厚を削りすぎないよう配慮し、微細な洗車傷やクスミをポリッシング技術で平滑に整え、塗装本来の深みある光沢を引き出します。",
            },
            {
              number: "03",
              title: "未塗装樹脂パーツのコーティング・黒艶復元",
              description: "経年劣化で白ボケしやすいフロントバンパー、ワイパーカウルトップ、フェンダーアーチなどの未塗装樹脂パーツも同時にコーティング施工可能。しっとりとした深みある黒艶を復元し、紫外線による劣化を防ぎます。",
            },
            {
              number: "04",
              title: "ドア裏・ステップ・開口部まで隅々コーティング",
              description: "外側のボディパネルだけでなく、ドアの内側、ヒンジ周り、トランクやボンネットのフチ、サイドステップなど、普段見えにくいドア裏まで丁寧に施工。お車全体の防汚性と美観を高めます。",
            },
          ],
        },
      },
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
      paddingY: "py-16 md:py-24 lg:py-32",
      /** グリッド列数（3列表示） (Tailwindクラス) */
      gridCols: "grid-cols-1 md:grid-cols-3",
      /** メイン見出しのサイズ (Tailwindクラス) */
      headingSize: "text-[clamp(1.9rem,4vw,3.5rem)]",
      /** カード内の日本語タイトルの文字サイズ (Tailwindクラス) */
      cardTitleSize: "text-lg sm:text-xl md:text-[clamp(0.82rem,1.25vw,1.35rem)]",
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
          description: "1972年の創業以来、\n50年以上にわたり蓄積した技術と経験。\n確かな品質をお約束します。",
        },
        {
          number: "20,000+",
          unit: "Vehicles Detailed",
          title: "施工台数",
          description: "国産車から輸入車まで、\n累計20,000台以上の施工実績。\nあらゆる車種に対応いたします。",
        },
        {
          number: "100%",
          unit: "Pure Water System",
          title: "”純水”にこだわる",
          description: "当社は「純水」のみを使用。\n水シミを防ぎ、透明感ある上質な仕上がりを実現します。",
          hasModal: true,
          modalButtonLabel: "詳しく見る＞",
        },
      ],
      /** 純水の詳細ポップアップモーダルの内容（純水器の特徴と豆知識） */
      pureWaterModal: {
        title: "純水器の特徴と豆知識",
        intro: "洗車の仕上がりや車の塗装への優しさを重視するなら、ミネラル分を含まない純水の方が圧倒的に良いです。",
        comparison: {
          sectionTitle: "純水と水道水の違い",
          pureTitle: "純水",
          pureDesc: "カルシウムやマグネシウムなどの不純物が取り除かれた水です。乾いてもミネラルが残らないため、白いウロコ状の水シミ (イオンデポジット)ができにくいのが特徴です。",
          tapTitle: "水道水",
          tapDesc: "カルシウムやマグネシウム、塩素などのミネラルが含まれています。水分が蒸発するとミネラルだけがボディや窓に残り、頑固な水シミや汚れの原因になります。",
          summary: "車への優しさや仕上がりをとるなら純水、手軽さやコストを抑えるなら水道水(ただし素早い拭き上げが必須)となります。",
        },
        benefitsTitle: "自宅で純水洗車をするメリット",
        benefitsIntro: "自宅での純水洗車は、水道水を家庭用の洗車用純水器に通してミネラル分を取り除くことで、洗車後の水シミ(イオンデポジット)の発生を防ぎ、拭き上げの手間を大幅になくすことができます。",
        points: [
          {
            number: "01",
            title: "水シミができない",
            description: "ミネラルやカルシウムがほぼゼロ (TDS値0ppm)のため、水分が自然乾燥しても白いウロコ状の跡が残りません。",
          },
          {
            number: "02",
            title: "炎天下でも洗車可能",
            description: "乾くのを気にせず作業できるため、時間を急がず自分のペースで洗車できます。",
          },
          {
            number: "03",
            title: "拭き上げの労力軽減",
            description: "ざっと水を流してそのまま放置、あるいは簡単な拭き取りだけで仕上げられます。",
          },
        ],
      },
    },
    style: {
      /** セクション全体の上下余白 (Tailwindクラス) */
      paddingY: "py-16 md:py-24 lg:py-32",
      /** グリッド列数（3項目に合わせた3列表示） (Tailwindクラス) */
      gridCols: "grid-cols-1 md:grid-cols-3",
      /** 数字部分の大きさ調整 (Tailwindクラス) */
      numberSize: "text-[clamp(3.5rem,6vw,5.5rem)]",
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
      paddingY: "py-16 md:py-24 lg:py-32",
      /** コンテンツ最大幅 (Tailwindクラス) */
      maxWidth: "max-w-[92rem]",
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
      paddingY: "py-16 md:py-24 lg:py-32",
      /** コンテンツ幅の制限 (Tailwindクラス) */
      maxWidth: "max-w-5xl",
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
      paddingY: "py-16 md:py-24 lg:py-28",
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
      /** セクション英語ラベル */
      sectionLabel: "Contact Us",
      /** お問い合わせのキャッチコピー */
      ctaHeading: "まずはお気軽にご相談ください",
      /** お問い合わせの説明文 */
      ctaDescription: "お電話でのお問い合わせを承っております",
      /** 電話番号エリアの英語ラベル */
      telLabel: "Tel",
      /** コピーライトテキスト */
      copyright: "EVERSHINE. All rights reserved.",
      /** 制作会社クレジット表記 */
      creditLabel: "Produced by HaveASite.",
      /** 制作会社リンクURL */
      creditUrl: "https://haveasite.com/",
    },
    style: {
      /** お問い合わせエリアの上下余白 (Tailwindクラス) */
      ctaPaddingY: "py-12 sm:py-14 md:py-16 lg:py-20",
      /** コピーライトエリアの上下余白 (Tailwindクラス) */
      barPaddingY: "py-8 md:py-10",
      /** お問い合わせ見出し文字サイズ (Tailwindクラス) */
      ctaHeadingSize: "text-[clamp(1.8rem,3.8vw,3rem)]",
    }
  }
};
