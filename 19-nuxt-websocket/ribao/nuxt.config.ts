// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      title: "日报",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover",
        },
        { name: "description", content: "日报nuxt版本" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { children: 'console.log("123")' },
      ],
      style: [
        // <style type="text/css">:root { color: red }</style>
        { children: ":root { font-size: calc(100vw / 750) }", type: "text/css" },
      ],
    },
  },

  experimental: {
    externalVue: true,
  },
});
