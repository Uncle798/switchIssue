import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin'
import * as themes from '@skeletonlabs/skeleton/themes'
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
    contentPath(import.meta.url, 'svelte'),
  ],

  theme: {
    extend: {}
  },

  plugins: [typography, forms, aspectRatio,
    skeleton({
      themes: [
        themes.mint
      ]
    })
  ]
} satisfies Config;
