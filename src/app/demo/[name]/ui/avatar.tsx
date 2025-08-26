import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const avatar = {
  name: "avatar",
  components: {
    Default: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-xs">CN</span>
        </AvatarFallback>
      </Avatar>
    ),
    Small: (
      <Avatar size="sm">
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-xs">SM</span>
        </AvatarFallback>
      </Avatar>
    ),
    Large: (
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-xs">LG</span>
        </AvatarFallback>
      </Avatar>
    ),
  },
};
