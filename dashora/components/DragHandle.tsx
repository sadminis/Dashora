import { Flex, Icon } from "@chakra-ui/react";
import { GripVertical } from "lucide-react";

interface DragHandleProps {
    color?: string;
    hoverColor?: string;
}

export default function DragHandle( {color = "gray.400", hoverColor = "gray.100" }: DragHandleProps) {
    return (
        <Flex
            className="drag-handle"
            cursor="grab"
            align="center"
            justify="center"
            position="absolute"
            top="8px"
            right="8px"
            zIndex={1}
            p={2} // Add padding for easier grab
            borderRadius="full"
            _hover={{ cursor: "grabbing", bg: `${hoverColor}80` }} // Hover effect for dragging
            onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
        >
            <Icon as={GripVertical} boxSize={6} color={color} />
        </Flex>
    );
}