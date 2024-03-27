import { describe, it, expect } from 'vitest'
import NavigationMenu, { type NavigationMenuProps } from '../../src/runtime/components/NavigationMenu.vue'
import ComponentRender from '../component-render'

const links = [{
  label: 'Profile',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: 100
}, {
  label: 'Modal',
  icon: 'i-heroicons-home',
  to: '/modal'
}, {
  label: 'NavigationMenu',
  icon: 'i-heroicons-chart-bar',
  to: '/navigation-menu'
}, {
  label: 'Popover',
  icon: 'i-heroicons-command-line',
  to: '/popover'
}]

describe('NavigationMenu', () => {
  it.each([
    ['basic case', { props: { links } }],
    ['with vertical orientation', { props: { links, orientation: 'vertical' as const } }],
    ['with class', { props: { links, class: 'w-48' } }],
    ['with ui', { props: { links, ui: { icon: 'w-4 h-4' } } }]
  ])('renders %s correctly', async (nameOrHtml: string, options: { props?: NavigationMenuProps<typeof links[number]>, slots?: any }) => {
    const html = await ComponentRender(nameOrHtml, options, NavigationMenu)
    expect(html).toMatchSnapshot()
  })
})