export interface Project {
  slug: string
  title: string
  category: string
  year: string
  description: string
  services: string[]
  image: string
}

export interface ExplorationCard extends Project {
  rotation: number
  parallaxFrom: number
  parallaxTo: number
  startOffset: number
  endOffset: number
  column: 1 | 2
}

export const explorationCards: ExplorationCard[] = [
  {
    slug: 'plateful',
    title: 'Plateful',
    category: 'HoReCa Analytics · Current MVP',
    year: 'In testing',
    description:
      'Analytics platform for HoReCa businesses that transforms POS data into predictive insights, enabling accurate sales forecasting, reduced waste, and improved operational efficiency.',
    services: ['Forecasting', 'Business Management', 'Data Visualization', 'MVP'],
    image: '/plateful/dashboard.png',
    rotation: -2,
    parallaxFrom: 560,
    parallaxTo: -200,
    startOffset: 160,
    endOffset: 80,
    column: 1,
  },
  {
    slug: 'amiabil',
    title: 'Amiabil.md',
    category: 'GovTech Platform',
    year: '2025',
    description:
      'Government-backed digital platform for resolving minor car accidents without police involvement by turning a confusing paper-based procedure into a fast, guided, digital insurance workflow.',
    services: ['Product Design', 'UX/UI', 'GovTech', 'Insurance Workflow'],
    image: 'https://img.youtube.com/vi/RQE6iS958zM/maxresdefault.jpg',
    rotation: -3,
    parallaxFrom: 360,
    parallaxTo: -120,
    startOffset: 0,
    endOffset: 0,
    column: 1,
  },
  {
    slug: 'agrodata',
    title: 'AgroData',
    category: 'AgriTech Platform',
    year: '2024',
    description:
      'Data-driven agricultural platform that helps farmers collect, manage, and share farm data while unlocking rewards and financial opportunities.',
    services: ['Branding', 'Product Design', 'Web Platform'],
    image:
      'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=900&q=80',
    rotation: 2,
    parallaxFrom: 460,
    parallaxTo: -160,
    startOffset: 80,
    endOffset: 40,
    column: 1,
  },
  {
    slug: 'logo-folio',
    title: 'Logo Folio',
    category: 'Branding',
    year: '2023',
    description: 'A curated collection of logos and visual identity marks created by DUTS.',
    services: ['Logo Design', 'Visual Identity', 'Art Direction'],
    image:
      'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=900&q=80',
    rotation: 3,
    parallaxFrom: 420,
    parallaxTo: -140,
    startOffset: 40,
    endOffset: 20,
    column: 2,
  },
  {
    slug: 'brand-identity',
    title: 'Brand Identity System',
    category: 'Branding',
    year: '2023',
    description:
      'Brand identity work including logos, typography, colors, visual systems, and marketing assets.',
    services: ['Brand Strategy', 'Design System', 'Marketing'],
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80',
    rotation: -1,
    parallaxFrom: 520,
    parallaxTo: -190,
    startOffset: 120,
    endOffset: 60,
    column: 2,
  },
  {
    slug: 'saas-demo',
    title: 'SaaS Product Demo',
    category: 'Product Design',
    year: '2025',
    description:
      'SaaS application concept and client project demo focused on UX, interface design, and scalable product structure.',
    services: ['UX/UI', 'Prototyping', 'Frontend'],
    image:
      'https://images.unsplash.com/photo-1618588507085-c79565432917?w=900&q=80',
    rotation: 1,
    parallaxFrom: 620,
    parallaxTo: -230,
    startOffset: 200,
    endOffset: 100,
    column: 2,
  },
]

export const projects: Project[] = explorationCards.map(
  ({ rotation, parallaxFrom, parallaxTo, startOffset, endOffset, column, ...p }) =>
    p,
)

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug)
}
