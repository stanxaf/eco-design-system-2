import { Map } from "@/components/ui/map";

export const map = {
  name: "map",
  components: {
    Default: (
      <Map
        accessToken="pk.eyJ1Ijoic3RhbnhhZiIsImEiOiJjbWcwODl2N2UwYTN1MmpzOW1oYXRzbXRxIn0.QsDOJWYQe4_jQFc11bVBlQ"
        height="400px"
        showControls={false}
      />
    ),
  },
};
