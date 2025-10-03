import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const simpleCard = {
  name: "simple-card",
  components: {
    "simple-card": (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Simple Card</CardTitle>
          <CardDescription>
            This is a basic card component with no complex dependencies.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Perfect for testing v0 integration without any import issues.
          </p>
        </CardContent>
      </Card>
    ),
  },
};
