export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/burakkoroglu/15min',
    available: true,
  },
  profile: {
    name: 'Burak Köroğlu',
    job: 'Full-stack Software(.Net/Vue.js)',
    email: 'koroglu.burak@outlook.com',
    phone: '+90 (535) 576 31 43',
    picture: 'https://avatars.githubusercontent.com/u/81712677',
  },
  socials: {
    github: 'https://github.com/burakkoroglu',
    twitter: 'https://x.com/kor_ooglu',
    linkedin: 'https://www.linkedin.com/in/korogluburak/',
    instagram: 'https://www.instagram.com/kor.ooglu',
    spotify: 'https://open.spotify.com/user/313mcgexideg3mufolhtb7maew3m?si=d4920eba6ca44fc2',
  },
  seo: {
    title: 'Burak Köroğlu Full-stack Software Engineer',
    description: 'Burak Köroğlu Full-stack Software Engineer',
    url: 'https://burakkoroglu.com',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})