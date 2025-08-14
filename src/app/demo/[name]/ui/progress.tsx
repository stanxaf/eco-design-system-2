import { Progress } from "@/components/ui/progress";

export const progress = {
  name: "progress",
  components: {
    Default: (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>25%</span>
          </div>
          <Progress value={25} className="w-full" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Loading</span>
            <span>75%</span>
          </div>
          <Progress value={75} className="w-full" />
        </div>
      </div>
    ),
  },
};
