import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BasicTab } from "./tabs/BasicTab";

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Basic</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <BasicTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default App;
