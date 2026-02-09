export function articlesData() {
  return {
    articles: [],
    showAll: false,
    limit:4,

    async loadArticles() {
      try {
        const res = await fetch('articles.json');
        const data = await res.json();
        this.articles = data.publishedArticles.articles;
      } catch (e) {
        console.error(e);
      }
    },

    toggleShow() {
      this.showAll = !this.showAll;
    },

    get visibleArticles() {
      return this.showAll ? this.articles : this.articles.slice(0, 3);
    }
  }
}
export function parallaxSlider() {
  return {
    images: [
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    ],
    active: 0,
    offsetY: 0,
    parallaxEnabled: true,
    sliderInterval: null,

    init() {
      // Disable parallax on touch devices / small screens
      this.parallaxEnabled = window.matchMedia('(min-width: 768px)').matches;

      // Auto slide
      this.sliderInterval = setInterval(() => {
        this.active = (this.active + 1) % this.images.length;
      }, 5000);
    },

    handleScroll() {
      if (!this.parallaxEnabled) return;
      this.offsetY = window.scrollY * 0.25;
    }
  };
}
export function imageSlider() {
  return {
    images: [
      '/IMG-20250220-WA0012.jpg',
      '/IMG-20251217-WA0033.jpg',
      '/Messenger_creation_22E4E3E0-A746-4807-9BB3-1BD50EB70D12.jpeg',
      '/Messenger_creation_2828B5A2-5E32-4A08-8D8E-2D0DC2482B48.jpeg'
    ],
    active: 0,

    next() {
      this.active = (this.active + 1) % this.images.length;
    },

    prev() {
      this.active = (this.active - 1 + this.images.length) % this.images.length;
    },

    goTo(index) {
      this.active = index;
    }
  }
}

export function counterSection() {
  return {
    started: false,
    counters: [
      { label: 'Published articles', target: 7, current: 0 },
      { label: 'Conference proceedings', target: 8, current: 0 },
      { label: 'Funded projects', target: 5, current: 0 },
      { label: 'Citations', target: 53, current: 0 },
    ],

    observe() {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !this.started) {
          this.started = true
          this.start()
          observer.disconnect()
        }
      }, { threshold: 0.3 })

      observer.observe(this.$refs.counterSection)
    },

    start() {
      this.counters.forEach(counter => {
        const duration = 1200
        const startTime = performance.now()

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1)
          counter.current = Math.floor(progress * counter.target)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            counter.current = counter.target
          }
        }

        requestAnimationFrame(animate)
      })
    }
  }
}

export function socialsLoader() {
  return {
    socials: [],

    async loadSocials() {
      const res = await fetch('/socials.json')
      const data = await res.json()

      // Load SVGs from local files
      this.socials = await Promise.all(
        data.socials.map(async (item) => {
          const svgRes = await fetch(item.icon)
          const svg = await svgRes.text()
          return { ...item, svg }
        })
      )
    }
  }
}

window.scrollHandler = function () {
  return {
    lastScroll: 0,

    onScroll() {
      const current = window.scrollY

      if (current > this.lastScroll) {
        // scrolling down
      } else {
        // scrolling up
      }

      this.lastScroll = current
    }
  }
}