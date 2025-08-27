import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import Link from "next/link";

export const badge = {
  name: "badge",
  components: {
    Default: <Badge variant="default">Default</Badge>,
    Info: <Badge variant="info">Info</Badge>,
    Success: <Badge variant="success">Success</Badge>,
    Warning: <Badge variant="warning">Warning</Badge>,
    Destructive: <Badge variant="destructive">Destructive</Badge>,

    DefaultLink: (
      <Badge variant="default" asChild>
        <Link href="#" className="flex items-center gap-1">
          Default
          <X className="size-3" />
        </Link>
      </Badge>
    ),
  },
};
