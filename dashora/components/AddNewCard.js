import React from 'react';
import CustomDialog from './CustomDialogs';
import { Box, Image, Text, Button, Dialog, Heading} from "@chakra-ui/react";
import { Plus, FilePlus, FolderPlus, SquarePlus } from "lucide-react";
import AddCalendar from './OverlayCards/AddCalendar';
import AddSample from './OverlayCards/AddSample';
import "./CSS/standardCard.css";
import "./CSS/clickable.css";


const AddNewCard = ( {title, content, cards, setCards} ) => {
    return (
        <CustomDialog 
            trigger={
                <Box className="standardCard clickable">
                    <SquarePlus className='standardCardImage' color='lightgray' />
                        <Heading as={"h2"} fontSize={"2xl"} color={"lightgray"} textAlign={"center"}>
                            {title}
                        </Heading>
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
            
            <Box display={"grid"} gridTemplateColumns={"repeat(4, 1fr)"} gap={4} p={4}>
                <AddCalendar cards={cards} setCards={setCards}/>
                <AddSample cards={cards} setCards={setCards}/>
            </Box>
        </CustomDialog>
    );
}

export default AddNewCard; // Export the AddNewCard component