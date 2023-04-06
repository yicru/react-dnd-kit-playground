import { Box, Center, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";
import { UniqueIdentifier } from "@dnd-kit/core/dist/types/other";

const CONTAINERS = ["A", "B", "C"];

const App = () => {
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    setParent(event.over?.id ?? null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null && <Draggable>Drag me</Draggable>}

      <HStack>
        {CONTAINERS.map((id) => (
          <Droppable key={id} id={id}>
            <Center boxSize={"200px"} bg={"gray.50"}>
              {parent === id ? <Draggable>Drag me</Draggable> : "Drop here"}
            </Center>
          </Droppable>
        ))}
      </HStack>
    </DndContext>
  );
};

export default App;
