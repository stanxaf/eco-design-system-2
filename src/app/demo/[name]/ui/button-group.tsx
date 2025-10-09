import { CopyIcon, MinusIcon, PlusIcon, ScissorsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const buttonGroup = {
  name: "button-group",
  components: {
    Default: (
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
        <Button variant="outline">Snooze</Button>
      </ButtonGroup>
    ),

    WithIcons: (
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <ScissorsIcon />
        </Button>
        <Button variant="outline" size="icon">
          <CopyIcon />
        </Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    ),

    Vertical: (
      <ButtonGroup orientation="vertical" className="h-fit">
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MinusIcon />
        </Button>
      </ButtonGroup>
    ),
  },
};

