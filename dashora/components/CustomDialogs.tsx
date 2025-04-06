import {
    Dialog,
    Portal,
    Button,
    CloseButton,
  } from "@chakra-ui/react";
  import { ReactNode } from "react";
  
  type CustomDialogProps = {
    trigger: ReactNode;          // Your clickable Box or any element
    title?: string;              // Optional dialog title
    children: ReactNode;         // Dialog body content
    footer?: ReactNode;          // Optional footer buttons
  };
  
  export default function CustomDialog({
    trigger,
    title = "Dialog Title",
    children,
    footer,
  }: CustomDialogProps) {
    return (
      <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
  
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>{children}</Dialog.Body>
              {footer && <Dialog.Footer>{footer}</Dialog.Footer>}
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  }