import { Card } from "@/components/ui/card";
import { Sidebar } from "../components";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen max-h-screen relative p-3 flex gap-3">
      <Sidebar />
      <Card className="grow overflow-auto">
        <ScrollArea className="h-full w-full">{children}</ScrollArea>
      </Card>
    </div>
  );
}
