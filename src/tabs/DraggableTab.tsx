import React, { useState } from "react";
import { DndContext, DragEndEvent, useDraggable } from "@dnd-kit/core";
import type { Coordinates } from "@dnd-kit/utilities";
import { Box, Button } from "@chakra-ui/react";
import { CSS } from "@dnd-kit/utilities";

export const DraggableTab = () => {
  const [{ x, y }, setCoordinates] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  const handleOnDragEnd = (event: DragEndEvent) => {
    setCoordinates(({ x, y }) => {
      return {
        x: x + event.delta.x,
        y: y + event.delta.y,
      };
    });
  };

  return (
    <DndContext onDragEnd={handleOnDragEnd}>
      <DraggableItem top={y} left={x} />
    </DndContext>
  );
};

type DraggableItemProps = {
  top: number;
  left: number;
};

const DraggableItem = ({ top, left }: DraggableItemProps) => {
  const { isDragging, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  return (
    <Box position={"relative"} top={top} left={left}>
      <Button
        cursor={isDragging ? "grabbing" : undefined}
        transform={CSS.Translate.toString(transform)}
        transition={"box-shadow 300ms ease"}
        boxShadow={isDragging ? "lg" : "none"}
        ref={setNodeRef}
        {...listeners}
      >
        Drag me
      </Button>
    </Box>
  );
};
