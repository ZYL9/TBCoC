const sidebar = require('./sidebar');
module.exports = {
    title: "卡勒拜斯破碎的盟约",
    description: "The Broken Covenant of Calebais",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/logo.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "Docs", link: "/00-简介/00-简介.md" },
            { text: "About", link: "/0.关于.md" }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/ZYL9/TBCoC" },
        ],
        outline: {
            level: [1, 3],
        },
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/ZYL9/TBCoC/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        sidebar
    }
};