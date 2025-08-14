import { AspectRatio } from "@/components/ui/aspect-ratio";

export const aspectRatio = {
  name: "aspect-ratio",
  components: {
    Default: (
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    ),
  },
};
