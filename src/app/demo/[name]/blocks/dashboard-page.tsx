import { Panel } from "@/components/panel";

export default function DashboardPage() {
  return (
    <Panel 
      title="Dashboard Panel"
      size="12"
      height="screen"
      footer="Status: Ready"
    >
      <h2>Dashboard with Panel</h2>
      <p>This dashboard now includes a panel component to test if panels work in v0.</p>
      <p>If this works, we know the issue is specific to panel-single configuration.</p>
    </Panel>
  );
}
