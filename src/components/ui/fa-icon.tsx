import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
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
  faDatabase,
  faTable,
  faChartLine,
  faBell,
  faCreditCard,
  faFolder,
  faComment,
  faClock,
  faEllipsis,
  faRightFromBracket,
  faChevronLeft,
  faChevronRight,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHome as faHomeRegular,
  faUser as faUserRegular,
  faBell as faBellRegular,
  faCreditCard as faCreditCardRegular,
  faFolder as faFolderRegular,
  faComment as faCommentRegular,
  faClock as faClockRegular,
} from "@fortawesome/free-regular-svg-icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const faIconVariants = cva("text-current", {
  variants: {
    size: {
      xs: "w-[12px] h-[12px]",
      sm: "w-[16px] h-[16px]",
      md: "w-[20px] h-[20px]",
      lg: "w-[24px] h-[24px]",
      xl: "w-[32px] h-[32px]",
    },
    style: {
      solid: "",
      regular: "",
    },
  },
  defaultVariants: {
    size: "md",
    style: "solid",
  },
});

// Comprehensive icon mapping for v0 compatibility
const iconMap = {
  // Solid icons
  home: faHome,
  user: faUser,
  cog: faCog,
  search: faSearch,
  plus: faPlus,
  edit: faEdit,
  trash: faTrash,
  save: faSave,
  download: faDownload,
  upload: faUpload,
  check: faCheck,
  times: faTimes,
  info: faInfo,
  warning: faWarning,
  database: faDatabase,
  table: faTable,
  chartLine: faChartLine,
  bell: faBell,
  creditCard: faCreditCard,
  folder: faFolder,
  comment: faComment,
  clock: faClock,
  ellipsis: faEllipsis,
  rightFromBracket: faRightFromBracket,
  chevronLeft: faChevronLeft,
  chevronRight: faChevronRight,
  exclamationTriangle: faExclamationTriangle,

  // Regular icons
  homeRegular: faHomeRegular,
  userRegular: faUserRegular,
  bellRegular: faBellRegular,
  creditCardRegular: faCreditCardRegular,
  folderRegular: faFolderRegular,
  commentRegular: faCommentRegular,
  clockRegular: faClockRegular,
} as const;

export type FaIconName = keyof typeof iconMap;

export interface FaIconProps extends VariantProps<typeof faIconVariants> {
  name: FaIconName;
  className?: string;
  "aria-label"?: string;
}

/**
 * FontAwesome Icon Component for v0 Compatibility
 *
 * This component provides a simple interface for using FontAwesome icons in v0.dev
 * and other external tools. It includes a comprehensive set of commonly used icons
 * and handles both solid and regular styles automatically.
 *
 * @example
 * <FaIcon name="home" size="lg" />
 * <FaIcon name="user" style="regular" />
 * <FaIcon name="search" size="sm" className="text-blue-500" />
 */
export function FaIcon({
  name,
  size = "md",
  style = "solid",
  className,
  "aria-label": ariaLabel,
  ...props
}: FaIconProps) {
  const icon = iconMap[name];

  if (!icon) {
    console.warn(`FontAwesome icon "${name}" not found. Using fallback icon.`);
    return (
      <FontAwesomeIcon
        icon={faHome}
        className={cn(faIconVariants({ size, style }), className)}
        aria-label={ariaLabel || "Icon"}
        {...props}
      />
    );
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      className={cn(faIconVariants({ size, style }), className)}
      aria-label={ariaLabel || name}
      {...props}
    />
  );
}

// Export icon names for easy reference
export const faIconNames = Object.keys(iconMap) as FaIconName[];

// Helper function to get available icons
export function getAvailableIcons(): FaIconName[] {
  return faIconNames;
}
