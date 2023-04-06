import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  id: string;
  children?: ReactNode;
};

export const Droppable = ({ id, children }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <Box ref={setNodeRef} color={isOver ? "green" : undefined}>
      {children}
    </Box>
  );
};
