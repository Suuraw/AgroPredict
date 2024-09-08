import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"
import Page4 from "./page4"
import Page5 from "./page5"
import Page6 from "./page6"
export default function Component() {
  return (
    <div className="relative mb-16 mt-4 flex flex-col overflow-hidden rounded-lg bg-background">
      <Tabs defaultValue="1" className="w-full">
        <TabsList className="fixed inset-x-0 bottom- z-20 h-auto border-t py-4">
          <TabsTrigger value="1">Verify Location</TabsTrigger>
          <TabsTrigger value="2">DashBoard</TabsTrigger>
          <TabsTrigger value="3">Fertilizer Recommanendation</TabsTrigger>
          <TabsTrigger value="4">Disease Detection</TabsTrigger>
          <TabsTrigger value="5">Crop Price Detection</TabsTrigger>
          <TabsTrigger value="6">Crop Health Analysis</TabsTrigger>
          {/* <TabsTrigger value="6">DashBoard</TabsTrigger> */}
        </TabsList>
        <TabsContent value="1"><Page5 /></TabsContent>
        <TabsContent value="2"><Page6 /></TabsContent>
        <TabsContent value="3"><Page3 /></TabsContent>
        <TabsContent value="4"><Page4 /></TabsContent>
        <TabsContent value="5"><Page1 /></TabsContent>
        <TabsContent value="6"><Page2 /></TabsContent>
        {/* <TabsContent value="6"><Page6/></TabsContent> */}
      </Tabs>
    </div>
  );
}