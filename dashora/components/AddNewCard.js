import React from 'react';
import CustomDialog from './CustomDialogs';
import { Box, Image, Text, Button, Dialog, Heading} from "@chakra-ui/react";
import { Plus, FilePlus, FolderPlus, SquarePlus } from "lucide-react";
import AddCalendar from './OverlayCards/AddCalendar';
import AddSample from './OverlayCards/AddSample';
import "./CSS/standardCard.css";
import "./CSS/clickable.css";
import DragHandle from './DragHandle';
import AddBiliBili from './OverlayCards/AddBiliBili';
import AddSearchBar from './OverlayCards/AddSearchBar';


const AddNewCard = ( {title, content, cards, setCards} ) => {
    return (
        // AddNewCard.tsx
        <CustomDialog
        trigger={
            <Box className="standardCard clickable">
            <DragHandle hoverColor="#FFAAAA" />
            <SquarePlus className='standardCardImage' color='lightgray' />
            <Heading as="h2" fontSize="2xl" color="lightgray" textAlign="center">
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
        {(onClose) => (
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4} p={4}>
            <AddCalendar cards={cards} setCards={setCards} onClose={onClose} />
            <AddBiliBili cards={cards} setCards={setCards} onClose={onClose} />
            <AddSample cards={cards} setCards={setCards} onClose={onClose} />
            <AddSearchBar cards={cards} setCards={setCards} onClose={onClose} />
            </Box>
        )}
        </CustomDialog>

    );
}

export default AddNewCard; // Export the AddNewCard component