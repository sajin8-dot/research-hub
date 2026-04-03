import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    backgrounds: {
      default: 'bg',
      values: [
        { name: 'bg', value: '#F7F4F0' },
        { name: 'bg-warm', value: '#EFEBE5' },
        { name: 'surface', value: '#ECEAE5' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#2C2A27' },
      ],
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;