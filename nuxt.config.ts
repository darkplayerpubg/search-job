export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  devtools: { enabled: false },

  css: ["@/assets/styles/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/utils";',
        },
      },
    },
  },

  imports: {
    dirs: [],
  },

  plugins: [],

  modules: ["nuxt-swiper"],

  app: {
    head: {
      charset: "utf-8",
      title: "Bland people limited",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:site_name",
          content: "Bland people limited",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/review5.jpg",
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "/review5.jpg",
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "Bland people limited",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content:
            "Визовые консультанты, эксперты по туризму и юристы по международному праву 'Bland people limited' всегда окажут квалифицированную помощь и поддержку по вопросам оформления любых типов виз во все стран ы мира, а также в получении временного и постоянного вида на жительство в Европе.",
        },
        {
          hid: "title",
          property: "title",
          content: "Bland people limited",
        },
        {
          hid: "description",
          property: "description",
          content:
            "Визовые консультанты, эксперты по туризму и юристы по международному праву 'Bland people limited' всегда окажут квалифицированную помощь и поддержку по вопросам оформления любых типов виз во все стран ы мира, а также в получении временного и постоянного вида на жительство в Европе.",
        },
        {
          name: "keywords",
          content:
            "visa, Bland people limited, people, bland, работа, виза, заработок, деньги, доллары",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  runtimeConfig: {
    public: {},
  },
});
