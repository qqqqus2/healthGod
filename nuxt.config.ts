// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt", "dayjs-nuxt"],
    ssr: false,
    dayjs: {
        defaultTimezone: "Asia/Seoul",
        defaultLocale: [
            "ko",
            {
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "1초",
                    m: "1분",
                    mm: "%d분",
                    h: "1시간",
                    hh: "%d시간",
                    d: "1일",
                    dd: "%d일",
                    M: "1개월",
                    MM: "%d개월",
                    y: "1년",
                    yy: "%d년",
                },
            },
        ],
        locales: ["ko", "en"],
        plugins: ["relativeTime", "utc", "timezone"],
    },
    app: {
        head: {
            titleTemplate: "건강의 신",
        },
        baseURL: process.env.NUXT_BASE_URL,
    },
    runtimeConfig: {
        public: {
            env: process.env.NUXT_NODE_ENV,
            apiURL: process.env.NUXT_API_URL,
            authApiURL: process.env.NUXT_API_URL,
            chatApiURL: process.env.NUXT_CHAT_API_URL,
            chatSocketURL: process.env.NUXT_CHAT_SOCKET_URL,
            appName: process.env.NUXT_SITE_KR_NAME,
            apiTest: process.env.TEST_API_URL,
        },
    },
    nitro: {
        plugins: ["~/server/plugins/nitro-logging"],
    },
    css: [
        // "@lemonhc/fo-ui/styles/health/style.css",
        // "@lemonhc/fo-ui/styles/health/component.css",

        //  "~/assets/scss/component/component.scss", // 컴포넌트 스타일 (@import 방식)
        "@lemonhc/fo-ui/fonts/fonts.css",
        "@lemonhc/fo-ui/fonts/remixicon.css",
        "swiper/swiper-bundle.min.css",
        "skeleton-elements/css",
        "~/assets/scss/common/style.scss",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: `@import "~/assets/scss/common/_vars-safe.scss";`,
                },
            },
        },
    },

    devtools: { enabled: false }, // 퍼블용 false로 설정
    devServer: {
        host: "localhost",
        port: 3000,
    },
});
