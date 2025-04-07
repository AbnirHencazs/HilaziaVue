import { useHead } from '@unhead/vue'

interface MetaOptions {
  title: string
  description?: string
  image?: string
  url?: string
  keywords?: string
  author?: string
  themeColor?: string
}

export function useMeta(options: MetaOptions) {
  const {
    title,
    description = 'Hilazia - Arte que se siente, que se viste y que se prueba',
    image = 'https://hilazia.online/images/HilaziaHero.webp',
    url = 'https://hilazia.online',
    keywords = 'hilazia, ropa, moda, arte, diseño, tienda online',
    author = 'Brian Sanchez',
    themeColor = '#70908B',
  } = options

  useHead({
    title: `${title} | Hilazia`,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
      {
        name: 'author',
        content: author,
      },
      {
        name: 'theme-color',
        content: themeColor,
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: url,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: image,
      },
      // Twitter
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: url,
      },
      {
        property: 'twitter:title',
        content: title,
      },
      {
        property: 'twitter:description',
        content: description,
      },
      {
        property: 'twitter:image',
        content: image,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: url,
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
    ],
  })
}
