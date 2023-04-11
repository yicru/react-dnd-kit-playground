import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BasicTab } from "./tabs/BasicTab";
import { DraggableTab } from "./tabs/DraggableTab";
import { RestrictToWindowEdgeTab } from "./tabs/RestrictToWindowEdgeTab";

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Basic</Tab>
        <Tab>Draggable</Tab>
        <Tab>RestrictToWindowEdge</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <BasicTab />
        </TabPanel>
        <TabPanel>
          <DraggableTab />
        </TabPanel>
        <TabPanel>
          <RestrictToWindowEdgeTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default App;
