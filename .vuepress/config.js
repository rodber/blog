const { reverse, sortBy } = require('lodash')

module.exports = {
    title: 'Rodolfo Berrios',
    base: '/',
    description: 'Rodolfo blogging since 2012.',
    theme: require.resolve('../../'),
    head: [
        ['link', {
            rel: 'icon',
            href: `/rodo.png`
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
            href: '/rodo.png'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/rodo.png',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/rodo.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }],
        ['meta', { 
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        }]
    ],
    themeConfig: {
        logo: '/rodo.png',
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
                    link: 'https://github.com/rodber',
                },
                {
                    type: 'mail',
                    link: 'mailto:inbox@rodolfoberrios.com',
                },
                {
                    type: 'web',
                    link: 'https://rodolfoberrios.com',
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
            sort: (entries) => reverse(sortBy(entries, 'date')),
        },
        smoothScroll: true
    },
}
