import { FaIcon } from "@/components/ui/fa-icon";

export const faIcon = {
  name: "fa-icon",
  type: "ui",
  description: "FontAwesome icon component optimized for v0 compatibility with comprehensive icon library and easy-to-use interface",
  components: {
    default: <FaIcon name="home" size="lg" />,

    // Size variants
    "xs": <FaIcon name="home" size="xs" />,
    "sm": <FaIcon name="home" size="sm" />,
    "md": <FaIcon name="home" size="md" />,
    "lg": <FaIcon name="home" size="lg" />,
    "xl": <FaIcon name="home" size="xl" />,

    // Common icons
    "user": <FaIcon name="user" size="lg" />,
    "cog": <FaIcon name="cog" size="lg" />,
    "search": <FaIcon name="search" size="lg" />,
    "plus": <FaIcon name="plus" size="lg" />,
    "edit": <FaIcon name="edit" size="lg" />,
    "trash": <FaIcon name="trash" size="lg" />,
    "save": <FaIcon name="save" size="lg" />,
    "download": <FaIcon name="download" size="lg" />,
    "upload": <FaIcon name="upload" size="lg" />,
    "check": <FaIcon name="check" size="lg" />,
    "times": <FaIcon name="times" size="lg" />,
    "info": <FaIcon name="info" size="lg" />,
    "warning": <FaIcon name="warning" size="lg" />,
    "database": <FaIcon name="database" size="lg" />,
    "table": <FaIcon name="table" size="lg" />,
    "chartLine": <FaIcon name="chartLine" size="lg" />,
    "bell": <FaIcon name="bell" size="lg" />,
    "creditCard": <FaIcon name="creditCard" size="lg" />,
    "folder": <FaIcon name="folder" size="lg" />,
    "comment": <FaIcon name="comment" size="lg" />,
    "clock": <FaIcon name="clock" size="lg" />,
    "ellipsis": <FaIcon name="ellipsis" size="lg" />,
    "rightFromBracket": <FaIcon name="rightFromBracket" size="lg" />,
    "chevronLeft": <FaIcon name="chevronLeft" size="lg" />,
    "chevronRight": <FaIcon name="chevronRight" size="lg" />,
    "exclamationTriangle": <FaIcon name="exclamationTriangle" size="lg" />,

    // Regular style icons
    "home-regular": <FaIcon name="homeRegular" size="lg" />,
    "user-regular": <FaIcon name="userRegular" size="lg" />,
    "bell-regular": <FaIcon name="bellRegular" size="lg" />,
    "creditCard-regular": <FaIcon name="creditCardRegular" size="lg" />,
    "folder-regular": <FaIcon name="folderRegular" size="lg" />,
    "comment-regular": <FaIcon name="commentRegular" size="lg" />,
    "clock-regular": <FaIcon name="clockRegular" size="lg" />,

    // Styled examples
    "colored-primary": <FaIcon name="home" size="lg" className="text-primary" />,
    "colored-success": <FaIcon name="check" size="lg" className="text-green-500" />,
    "colored-warning": <FaIcon name="warning" size="lg" className="text-yellow-500" />,
    "colored-info": <FaIcon name="info" size="lg" className="text-blue-500" />,
  },
};
