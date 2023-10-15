import { PenTool, Code, Wind } from 'react-feather'

const headerNavLinks = [
  { href: '/', icon: <Wind className="m-4 inline text-gray-600" />, title: 'Getting Started' },
  { href: '/blog', title: 'API', icon: <PenTool className="m-4 inline text-gray-600" /> },

  { href: '/projects', icon: <Code className="m-4 inline text-gray-600" />, title: 'Guides' },
]

export default headerNavLinks
