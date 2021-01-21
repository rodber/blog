module.exports = {
    title: 'Rodolfo Berrios',
    base: '/',
    description: 'Rodolfo, meando afuera del tiesto desde 2012.',
    theme: require.resolve('../../'),
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.png`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#964B00'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.png'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/logo.png',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/logo.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    themeConfig: {
        pwa: true,
        authors: [
            {
                name: 'Rodolfo',
                avatar: '/avatars/rodolfo.jpg',
                link: 'https://rodolfoberrios.com/',
                linktext: 'Stalk me',
            },
            {
                name: 'Sape',
                avatar: '/avatars/sape.jpg',
                link: 'https://rodolfoberrios.com/',
                linktext: 'EL RODO SAPEE!',
            },
            {
                name: 'OMA',
                avatar: '/avatars/oma.jpg',
                link: 'https://rodolfoberrios.com/',
                linktext: 'One Man Army',
            }
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/rodolfoberrios',
                },
                {
                    type: 'mail',
                    link: 'mailto:inbox@rodolfoberrios.com',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/godlike',
                },
            ],
            copyright: [
                // {
                //   text: '',
                //   link: '',
                // },
            ],
        },
        sitemap: {
            hostname: 'https://rodolfo.is/'
        },
        // comment: {
        //   service: 'disqus',
        //   shortname: 'demowebsite',
        // },
        // newsletter: {
        //   endpoint: '/'
        // },
        feed: {
            canonical_base: 'https://rodolfo.is/',
        },
        smoothScroll: true
    },
}
