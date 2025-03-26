import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Shadecdn() {
  return (
    <div className="p-4">
      <Tabs defaultValue="overview">
        {/* Tab List */}
        <TabsList className="flex space-x-2 bg-gray-200 p-2 rounded-lg">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="overview">
          <p>Ini adalah tab Overview.</p>
        </TabsContent>
        <TabsContent value="features">
          <p>Ini adalah tab Features.</p>
        </TabsContent>
        <TabsContent value="contact">
          <p>Ini adalah tab Contact.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
