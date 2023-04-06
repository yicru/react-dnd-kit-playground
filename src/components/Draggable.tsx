import { useDraggable } from "@dnd-kit/core";
import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Draggable = ({ children }: Props) => {
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
      {...listeners}
      {...attributes}
    >
      {children}
    </Button>
  );
};
