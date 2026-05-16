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
    image: '/agrodata/general-presentation.jpg',
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
    image: '/logo-folio/logo-01.jpg',
    rotation: 3,
    parallaxFrom: 420,
    parallaxTo: -140,
    startOffset: 40,
    endOffset: 20,
    column: 2,
  },
  {
    slug: 'brand-identity',
    title: 'ACUM Re-branding',
    category: 'Branding',
    year: '2023',
    description:
      'A bold, minimal identity system for ACUM Community built with fluid shapes, directional arrows, and a strong red palette.',
    services: ['Brand Strategy', 'Design System', 'Marketing'],
    image: '/ACUM/Artboard 1.png',
    rotation: -1,
    parallaxFrom: 520,
    parallaxTo: -190,
    startOffset: 120,
    endOffset: 60,
    column: 2,
  },
  {
    slug: 'saas-demo',
    title: 'Ferma Maxian Rebranding',
    category: 'Branding',
    year: '2023',
    description:
      'A meat-focused grocery brand built on tradition, quality, and authenticity. The identity combines vintage-inspired typography with detailed hand-drawn illustrations.',
    services: ['Brand Strategy', 'Packaging Design', 'Visual Identity'],
    image: '/Maxian/1.jpg',
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
