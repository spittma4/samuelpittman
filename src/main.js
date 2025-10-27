import Alpine from 'alpinejs'
import './icons.js'
import './data.js'
import { Header } from './components/Header.js'
import { About } from './components/About.js'
import { Projects } from './components/Projects.js'
import { Work } from './components/Work.js'
import { Education } from './components/Education.js'
import { DarkModeToggle } from './components/DarkModeToggle.js'

// Make Alpine available globally
window.Alpine = Alpine

// Make components globally available for Alpine
window.Header = Header
window.About = About
window.Projects = Projects
window.Work = Work
window.Education = Education
window.DarkModeToggle = DarkModeToggle

// Start Alpine
Alpine.start()
