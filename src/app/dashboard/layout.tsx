import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen max-h-screen relative p-2 flex">
        <AppSidebar />
        <Card className="grow overflow-auto p-6">
          <ScrollArea className="h-full w-full">{children}</ScrollArea>
        </Card>
      </div>
    </SidebarProvider>
  );
}
