const { reverse, sortBy } = require('lodash')

module.exports = {
    title: 'Rodolfo Berrios',
    base: '/',
    description: 'Rodolfo blogging since 2012.',
    theme: require.resolve('../../'),
    head: [
        ['link', {
            rel: 'icon',
            href: `/rodber.png`
        }],
        ['meta', {
            name: 'theme-color',
            content: '#2c3e50'
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
            href: '/rodber.png'
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
        logo: '/avatars/rodber.png',
        pwa: false,
        nav: [
            { text: 'Tags', link: '/tag/' },
            { text: 'About', link: '/about/' },
        ],
        authors: [
            {
                name: 'Rodolfo',
                avatar: '/avatars/rodolfo.jpg',
                link: 'https://rodolfoberrios.com/',
                linktext: 'Card',
            },
            {
                name: 'rodber',
                avatar: '/avatars/rodber.png',
                link: 'https://github.com/rodber',
                linktext: 'GitHub',
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
                link: 'https://chevereto.com/',
                linktext: 'Chevereto.com',
            }
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/rodber',
                },
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/rodber/',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/godlike',
                },
                {
                    type: 'mail',
                    link: 'mailto:inbox@rodolfoberrios.com',
                },
                {
                    type: 'globe',
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
            hostname: 'https://rodolfoberrios.com/'
        },
        feed: {
            canonical_base: 'https://rodolfoberrios.com/',
            sort: (entries) => reverse(sortBy(entries, 'date')),
        },
        globalPagination: {
            lengthPerPage: 9,
        },
        smoothScroll: false
    },
}
