import * as simpleIcons from 'simple-icons'

// Map of icon names to their simple-icons or custom SVG data
const iconMap = {
  laravel: simpleIcons.siLaravel,
  php: simpleIcons.siPhp,
  aws: simpleIcons.siAmazonwebservices,
  javascript: simpleIcons.siJavascript,
  mysql: simpleIcons.siMysql,
  postgresql: simpleIcons.siPostgresql,
}

// Custom icons (outline variants)
const customIcons = {
  livewire: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
  database: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>`,
  api: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>`,
  code: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
  check: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
  clipboard: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>`,
}

// Function to get icon HTML string
export function getIcon(iconName, className = 'w-5 h-5') {
  const icon = iconMap[iconName]
  const customIcon = customIcons[iconName]

  if (icon) {
    // Simple-icons format - filled icons
    return `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor" role="img"><path d="${icon.path}"/></svg>`
  } else if (customIcon) {
    // Custom outline icons
    return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor">${customIcon}</svg>`
  }

  return ''
}

// Make globally available for Alpine
window.getIcon = getIcon
