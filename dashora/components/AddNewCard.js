import './Card.css';
import React from 'react';
import CustomDialog from './CustomDialogs';
import { Box, Image, Text, Button, Dialog} from "@chakra-ui/react";
import { Plus, FilePlus, FolderPlus, SquarePlus } from "lucide-react";


const AddNewCard = ( {title, content, cards, setCards} ) => {
    function handleClick() {
        // Logic to add a new card
        const newCard = { title: "New Card", content: "This is a new card." };
    
        // Create a copy of the cards array
        const updatedCards = [...cards];
    
        // Insert the new card at the second-to-last position
        updatedCards.splice(updatedCards.length - 1, 0, newCard);
    
        // Update the state with the modified array
        setCards(updatedCards);
    }

    return (
        <CustomDialog trigger={
            <Box
                    cursor="pointer"
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                >
                    <Box p="6" bg={'gray.100'} minH={"50vh"} Box display="flex" justifyContent="center" alignItems="center" flexDir={"column"}>
                        <SquarePlus size={250} color='lightgray' />
                        <Text fontSize="xl" fontWeight="bold" mt="8" textAlign="center" color="lightgray"> 
                            {title}
                        </Text>
                    </Box>
                </Box>
            }
            title="Add New Card"
            footer={
                <>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </Dialog.ActionTrigger>
                  <Dialog.ActionTrigger asChild>
                    <Button>Save</Button>
                  </Dialog.ActionTrigger>
                </>
            }
        >
            // TODO: Add sample card
            <Text>Click to add a new card</Text>
        </CustomDialog>
    );
}

export default AddNewCard; // Export the AddNewCard component