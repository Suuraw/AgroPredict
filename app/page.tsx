import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";

export default function Component() {
  return (
    <>
      <div className="relative w-screen flex flex-col overflow-hidden rounded-lg bg-background">
        <Tabs defaultValue="1" className="w-full">
          {/* Tabs List */}
          <TabsList className="sticky top-0 z-20 bg-background border-b flex gap-4 p-8">
            <TabsTrigger value="1" className="tab-trigger">
              Verify Location
            </TabsTrigger>
            <TabsTrigger value="2" className="tab-trigger">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="3" className="tab-trigger">
              Fertilizer Recommendation
            </TabsTrigger>
            <TabsTrigger value="4" className="tab-trigger">
              Disease Detection
            </TabsTrigger>
            <TabsTrigger value="5" className="tab-trigger">
              Crop Price Detection
            </TabsTrigger>
            <TabsTrigger value="6" className="tab-trigger">
              Crop Health Analysis
            </TabsTrigger>
          </TabsList>
          {/* Tabs Content */}
          <TabsContent value="1" className="p-4">
            <Page5 />
          </TabsContent>
          <TabsContent value="2" className="p-4">
            <Page6 />
          </TabsContent>
          <TabsContent value="3" className="p-4">
            <Page3 />
          </TabsContent>
          <TabsContent value="4" className="p-4">
            <Page4 />
          </TabsContent>
          <TabsContent value="5" className="p-4">
            <Page1 />
          </TabsContent>
          <TabsContent value="6" className="p-4">
            <Page2 />
          </TabsContent>
        </Tabs>
      </div>
      <div className="relative flex flex-col justify-center items-center text-center bg-green-400 text-black ">
        <h1>About us</h1>
        <p>
          This website helps farmers by predicting crop prices, detecting
          diseases, and analyzing soil fertility. Our aim is to empower farmers
          with the tools and information they need to make informed decisions
          and maximize their yield.
        </p>
      </div>
    </>
  );
}
