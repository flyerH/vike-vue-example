import type { Config } from 'vike/types';
import vikeVue from 'vike-vue/config';
import vikeVueQuery from 'vike-vue-query/config';

// Default configs (can be overridden by pages)
export default {
  // <title>
  title: 'My Vike + Vue + TanStack Query App',

  extends: [vikeVue, vikeVueQuery],
} satisfies Config;
