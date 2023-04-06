import { ReactNode, useState } from "react";
import { UniqueIdentifier } from "@dnd-kit/core/dist/types/other";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { Box, Button, Center, ChakraProps, HStack } from "@chakra-ui/react";

const CONTAINERS = ["A", "B", "C"];

export const BasicTab = () => {
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

type DraggableProps = {
  children?: ReactNode;
} & ChakraProps;

const Draggable = ({ children, ...chakraProps }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  return (
    <Button
      transform={
        transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined
      }
      ref={setNodeRef}
      {...chakraProps}
      {...listeners}
      {...attributes}
    >
      {children}
    </Button>
  );
};

type DroppableProps = {
  id: string;
  children?: ReactNode;
};

const Droppable = ({ id, children }: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <Box ref={setNodeRef} color={isOver ? "green" : undefined}>
      {children}
    </Box>
  );
};
