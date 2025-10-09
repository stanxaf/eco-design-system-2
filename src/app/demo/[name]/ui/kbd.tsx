import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const kbd = {
  name: "kbd",
  components: {
    Default: (
      <div className="flex flex-col items-center gap-4">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⌃</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>B</Kbd>
        </KbdGroup>
      </div>
    ),

    Group: (
      <p className="text-muted-foreground text-sm">
        Use{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </p>
    ),

    InButton: (
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="outline" size="sm" className="pr-2">
          Accept <Kbd>⏎</Kbd>
        </Button>
        <Button variant="outline" size="sm" className="pr-2">
          Cancel <Kbd>Esc</Kbd>
        </Button>
      </div>
    ),
  },
};

