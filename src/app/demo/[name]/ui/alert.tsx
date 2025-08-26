import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal, Info, CheckCircle, AlertTriangle } from "lucide-react";

export const alert = {
  name: "alert",
  components: {
    Default: (
      <Alert>
        <Terminal className="size-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    ),
    Destructive: (
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    ),
    Info: (
      <Alert variant="info">
        <Info className="size-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an informational message with important details.
        </AlertDescription>
      </Alert>
    ),
    Success: (
      <Alert variant="success">
        <CheckCircle className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
    ),
    Warning: (
      <Alert variant="warning">
        <AlertTriangle className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review your input before proceeding.
        </AlertDescription>
      </Alert>
    ),
  },
};
