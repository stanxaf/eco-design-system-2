import MapLayoutPage from "./map-layout-page";
import ShellLayout from "./shell-layout";

export const mapLayout = {
  name: "map-layout",
  components: {
    "map-layout": (
      <ShellLayout>
        <MapLayoutPage />
      </ShellLayout>
    ),
  },
};
