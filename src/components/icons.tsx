"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import regular icons where available
import {
  faUser,
  faHome,
  faFolder,
  faComment,
  faBell,
  faCreditCard,
  faClock,
  faEnvelope,
  faSquare,
  faBookmark,
  faQuestionCircle,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

// Import solid icons for those not available in regular
import {
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faChevronUp,
  faCheck,
  faXmark,
  faCalendar,
  faDatabase,
  faTable,
  faEllipsis,
  faRightFromBracket,
  faCog,
  faSearch,
  faPlus,
  faEdit,
  faTrash,
  faSave,
  faDownload,
  faUpload,
  faInfo,
  faWarning,
  faExclamationTriangle,
  faChartLine,
  faSpinner,
  faEye,
  faEyeSlash,
  faHeart,
  faStar,
  faShare,
  faCopy,
  faExternalLink,
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faTh,
  faRocket,
  faBolt,
  faList,
  faCode,
  faTools,
  faPalette,
  faCubes,
  faMobile,
  faBars,
  faBook,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

// Export individual icons as React components for easy use
export const Icons = {
  chevronRight: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faChevronRight} className={cn("h-4 w-4", className)} />
  ),
  chevronLeft: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faChevronLeft} className={cn("h-4 w-4", className)} />
  ),
  chevronDown: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faChevronDown} className={cn("h-4 w-4", className)} />
  ),
  chevronUp: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faChevronUp} className={cn("h-4 w-4", className)} />
  ),
  check: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faCheck} className={cn("h-4 w-4", className)} />
  ),
  x: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faXmark} className={cn("h-4 w-4", className)} />
  ),
  user: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faUser} className={cn("h-4 w-4", className)} />
  ),
  calendar: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faCalendar} className={cn("h-4 w-4", className)} />
  ),
  home: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faHome} className={cn("h-4 w-4", className)} />
  ),
  folder: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faFolder} className={cn("h-4 w-4", className)} />
  ),
  database: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faDatabase} className={cn("h-4 w-4", className)} />
  ),
  table: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faTable} className={cn("h-4 w-4", className)} />
  ),
  comment: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faComment} className={cn("h-4 w-4", className)} />
  ),
  bell: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faBell} className={cn("h-4 w-4", className)} />
  ),
  creditCard: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faCreditCard} className={cn("h-4 w-4", className)} />
  ),
  clock: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faClock} className={cn("h-4 w-4", className)} />
  ),
  envelope: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faEnvelope} className={cn("h-4 w-4", className)} />
  ),
  grid: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faTh} className={cn("h-4 w-4", className)} />
  ),
  ellipsis: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faEllipsis} className={cn("h-4 w-4", className)} />
  ),
  rightFromBracket: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faRightFromBracket} className={cn("h-4 w-4", className)} />
  ),
  cog: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faCog} className={cn("h-4 w-4", className)} />
  ),
  search: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faSearch} className={cn("h-4 w-4", className)} />
  ),
  plus: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faPlus} className={cn("h-4 w-4", className)} />
  ),
  edit: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faEdit} className={cn("h-4 w-4", className)} />
  ),
  trash: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faTrash} className={cn("h-4 w-4", className)} />
  ),
  save: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faSave} className={cn("h-4 w-4", className)} />
  ),
  download: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faDownload} className={cn("h-4 w-4", className)} />
  ),
  upload: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faUpload} className={cn("h-4 w-4", className)} />
  ),
  info: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faInfo} className={cn("h-4 w-4", className)} />
  ),
  warning: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faWarning} className={cn("h-4 w-4", className)} />
  ),
  exclamationTriangle: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faExclamationTriangle} className={cn("h-4 w-4", className)} />
  ),
  chartLine: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faChartLine} className={cn("h-4 w-4", className)} />
  ),
  loader: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faSpinner} className={cn("h-4 w-4 animate-spin", className)} />
  ),
  eye: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faEye} className={cn("h-4 w-4", className)} />
  ),
  eyeSlash: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faEyeSlash} className={cn("h-4 w-4", className)} />
  ),
  heart: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faHeart} className={cn("h-4 w-4", className)} />
  ),
  star: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faStar} className={cn("h-4 w-4", className)} />
  ),
  bookmark: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faBookmark} className={cn("h-4 w-4", className)} />
  ),
  share: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faShare} className={cn("h-4 w-4", className)} />
  ),
  copy: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faCopy} className={cn("h-4 w-4", className)} />
  ),
  externalLink: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faExternalLink} className={cn("h-4 w-4", className)} />
  ),
  arrowRight: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faArrowRight} className={cn("h-4 w-4", className)} />
  ),
  arrowLeft: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faArrowLeft} className={cn("h-4 w-4", className)} />
  ),
  arrowUp: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faArrowUp} className={cn("h-4 w-4", className)} />
  ),
  arrowDown: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faArrowDown} className={cn("h-4 w-4", className)} />
  ),
  square: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faSquare} className={cn("h-4 w-4", className)} />
  ),
  rocket: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faRocket} className={cn("h-4 w-4", className)} />
  ),
  book: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faBook} className={cn("h-4 w-4", className)} />
  ),
  bookOpen: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faBookOpen} className={cn("h-4 w-4", className)} />
  ),
  zap: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faBolt} className={cn("h-4 w-4", className)} />
  ),
  list: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faList} className={cn("h-4 w-4", className)} />
  ),
  code: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faCode} className={cn("h-4 w-4", className)} />
  ),
  tools: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faTools} className={cn("h-4 w-4", className)} />
  ),
  palette: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faPalette} className={cn("h-4 w-4", className)} />
  ),
  component: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faCubes} className={cn("h-4 w-4", className)} />
  ),
  mobile: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faMobile} className={cn("h-4 w-4", className)} />
  ),
  sidebar: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faBars} className={cn("h-4 w-4", className)} />
  ),
  helpCircle: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faQuestionCircle} className={cn("h-4 w-4", className)} />
  ),
  messageCircle: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faMessage} className={cn("h-4 w-4", className)} />
  ),
  github: ({ className }: { className?: string }) => (
    <FontAwesomeIcon icon={faCode} className={cn("h-4 w-4", className)} />
  ),
};
