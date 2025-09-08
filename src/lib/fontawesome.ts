/**
 * FontAwesome Configuration for v0 Compatibility
 *
 * This file configures FontAwesome icons for use in v0.dev and other external tools.
 * It ensures that all required icons are properly imported and available.
 */

import { library } from '@fortawesome/fontawesome-svg-core';

// Import all the icons used in the project
import {
  // Regular icons
  faHome,
  faUser,
  faCreditCard,
  faBell,
  faClock,
  faFolder,
  faComment,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import {
  // Solid icons
  faDatabase,
  faTable,
  faExclamationTriangle,
  faChartLine,
  faEllipsis,
  faRightFromBracket,
  faChevronLeft,
  faChevronRight,
  faCog,
  faSearch,
  faPlus,
  faEdit,
  faTrash,
  faSave,
  faDownload,
  faUpload,
  faCheck,
  faTimes,
  faInfo,
  faWarning,
  faTh,
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
  // Regular icons
  faHome,
  faUser,
  faCreditCard,
  faBell,
  faClock,
  faFolder,
  faComment,
  faEnvelope,

  // Solid icons (for icons not available in regular)
  faDatabase,
  faTable,
  faExclamationTriangle,
  faChartLine,
  faEllipsis,
  faRightFromBracket,
  faChevronLeft,
  faChevronRight,
  faCog,
  faSearch,
  faPlus,
  faEdit,
  faTrash,
  faSave,
  faDownload,
  faUpload,
  faCheck,
  faTimes,
  faInfo,
  faWarning,
  faTh,
);

// Export icon names for easy reference in v0
export const iconNames = {
  // Regular icons
  home: 'faHome',
  user: 'faUser',
  creditCard: 'faCreditCard',
  bell: 'faBell',
  clock: 'faClock',
  folder: 'faFolder',
  comment: 'faComment',
  envelope: 'faEnvelope',

  // Solid icons (for icons not available in regular)
  database: 'faDatabase',
  table: 'faTable',
  exclamationTriangle: 'faExclamationTriangle',
  chartLine: 'faChartLine',
  ellipsis: 'faEllipsis',
  rightFromBracket: 'faRightFromBracket',
  chevronLeft: 'faChevronLeft',
  chevronRight: 'faChevronRight',
  cog: 'faCog',
  search: 'faSearch',
  plus: 'faPlus',
  edit: 'faEdit',
  trash: 'faTrash',
  save: 'faSave',
  download: 'faDownload',
  upload: 'faUpload',
  check: 'faCheck',
  times: 'faTimes',
  info: 'faInfo',
  warning: 'faWarning',
  grid: 'faTh',
} as const;

export type IconName = keyof typeof iconNames;
