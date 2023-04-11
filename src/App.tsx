import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BasicTab } from "./tabs/BasicTab";
import { DraggableTab } from "./tabs/DraggableTab";

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Basic</Tab>
        <Tab>Draggable</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <BasicTab />
        </TabPanel>
        <TabPanel>
          <DraggableTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default App;
