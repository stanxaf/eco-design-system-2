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

const iconVariants = cva("text-current", {
  variants: {
    size: {
      xs: "w-[12px] h-[12px]", // 12px
      sm: "w-[16px] h-[16px]", // 16px
      md: "w-[24px] h-[24px]", // 24px
      lg: "w-[32px] h-[32px]", // 32px
    },
    style: {
      solid: "",
      regular: "",
    },
  },
  defaultVariants: {
    size: "lg",
    style: "solid",
  },
});

export interface IconsProps extends VariantProps<typeof iconVariants> {
  className?: string;
  icon?: string;
}

// Icon mapping for easy selection
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

  // Regular icons
  homeRegular: faHomeRegular,
  userRegular: faUserRegular,
  bellRegular: faBellRegular,
  creditCardRegular: faCreditCardRegular,
  folderRegular: faFolderRegular,
  commentRegular: faCommentRegular,
  clockRegular: faClockRegular,
} as const;

/**
 * FontAwesome Icons Component
 *
 * This component demonstrates FontAwesome icons working correctly in SSR environment.
 * It showcases various FontAwesome icons with configurable sizes and styles (solid/regular).
 *
 * For v0 compatibility, this component includes a comprehensive set of commonly used icons
 * and provides easy icon selection through the icon prop.
 */
export function Icons({
  size = "lg",
  style = "solid",
  className,
  icon = "home"
}: IconsProps) {
  // Select icon based on icon prop and style
  const iconKey = style === "regular" && iconMap[`${icon}Regular` as keyof typeof iconMap]
    ? `${icon}Regular` as keyof typeof iconMap
    : icon as keyof typeof iconMap;

  const currentIcon = iconMap[iconKey] || faHome;

  return (
    <div className="flex items-center justify-center p-8">
      <FontAwesomeIcon
        icon={currentIcon}
        className={cn(iconVariants({ size, style }), className)}
        aria-label={icon}
      />
    </div>
  );
}
