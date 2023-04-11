import React, { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  Modifier,
  useDraggable,
} from "@dnd-kit/core";
import type { Coordinates } from "@dnd-kit/utilities";
import { Box, Button } from "@chakra-ui/react";
import { CSS } from "@dnd-kit/utilities";

export const RestrictToWindowEdgeTab = () => {
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

  const modifier: Modifier = ({ transform, draggingNodeRect, windowRect }) => {
    if (!draggingNodeRect || !windowRect) {
      return transform;
    }

    const value = {
      ...transform,
    };

    if (draggingNodeRect.top + transform.y <= windowRect.top) {
      value.y = windowRect.top - draggingNodeRect.top;
    } else if (
      draggingNodeRect.bottom + transform.y >=
      windowRect.top + windowRect.height
    ) {
      value.y = windowRect.top + windowRect.height - draggingNodeRect.bottom;
    }

    if (draggingNodeRect.left + transform.x <= windowRect.left) {
      value.x = windowRect.left - draggingNodeRect.left;
    } else if (
      draggingNodeRect.right + transform.x >=
      windowRect.left + windowRect.width
    ) {
      value.x = windowRect.left + windowRect.width - draggingNodeRect.right;
    }

    return value;
  };

  return (
    <DndContext onDragEnd={handleOnDragEnd} modifiers={[modifier]}>
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
