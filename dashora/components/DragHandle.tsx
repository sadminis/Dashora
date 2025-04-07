import { Flex, Icon } from "@chakra-ui/react";
import { GripVertical } from "lucide-react";


export default function DragHandle() {
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
            _hover={{ cursor: "grabbing", bg: "gray.100" }} // Hover effect for dragging
            onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
        >
            <Icon as={GripVertical} boxSize={6} color="gray.400" />
        </Flex>
    );
}