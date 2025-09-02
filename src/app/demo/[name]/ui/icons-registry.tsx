import { Icons } from "@/components/icons";

export const iconsRegistry = {
  name: "icons-registry",
  type: "ui",
  description: "FontAwesome icons registry following Grok's approach - centralized icon mapping for easy replacement of Lucide icons with FontAwesome equivalents",
  components: {
    default: <Icons.home />,
    
    // Navigation icons
    "chevron-right": <Icons.chevronRight />,
    "chevron-left": <Icons.chevronLeft />,
    "chevron-down": <Icons.chevronDown />,
    "chevron-up": <Icons.chevronUp />,
    "arrow-right": <Icons.arrowRight />,
    "arrow-left": <Icons.arrowLeft />,
    "arrow-up": <Icons.arrowUp />,
    "arrow-down": <Icons.arrowDown />,
    
    // Action icons
    "check": <Icons.check />,
    "x": <Icons.x />,
    "plus": <Icons.plus />,
    "edit": <Icons.edit />,
    "trash": <Icons.trash />,
    "save": <Icons.save />,
    "download": <Icons.download />,
    "upload": <Icons.upload />,
    "copy": <Icons.copy />,
    "external-link": <Icons.externalLink />,
    "share": <Icons.share />,
    
    // UI icons
    "user": <Icons.user />,
    "calendar": <Icons.calendar />,
    "home": <Icons.home />,
    "folder": <Icons.folder />,
    "database": <Icons.database />,
    "table": <Icons.table />,
    "comment": <Icons.comment />,
    "bell": <Icons.bell />,
    "credit-card": <Icons.creditCard />,
    "clock": <Icons.clock />,
    "ellipsis": <Icons.ellipsis />,
    "cog": <Icons.cog />,
    "search": <Icons.search />,
    "info": <Icons.info />,
    "warning": <Icons.warning />,
    "exclamation-triangle": <Icons.exclamationTriangle />,
    "chart-line": <Icons.chartLine />,
    "loader": <Icons.loader />,
    "eye": <Icons.eye />,
    "eye-slash": <Icons.eyeSlash />,
    "heart": <Icons.heart />,
    "star": <Icons.star />,
    "bookmark": <Icons.bookmark />,
    "right-from-bracket": <Icons.rightFromBracket />,
    
    // Styled examples
    "colored-primary": <Icons.home className="text-primary" />,
    "colored-success": <Icons.check className="text-green-500" />,
    "colored-warning": <Icons.warning className="text-yellow-500" />,
    "colored-error": <Icons.x className="text-red-500" />,
    "colored-info": <Icons.info className="text-blue-500" />,
    "large": <Icons.home className="h-8 w-8" />,
    "small": <Icons.home className="h-3 w-3" />,
  },
};
