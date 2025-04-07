// CustomDialog.tsx
import {
  Dialog,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";

type CustomDialogProps = {
  trigger: ReactNode;
  title?: string;
  children: ReactNode | ((onClose: () => void) => ReactNode); // can be function
  footer?: ReactNode;
};

export default function CustomDialog({
  trigger,
  title = "Dialog Title",
  children,
  footer,
}: CustomDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <span onClick={() => setIsOpen(true)}>{trigger}</span>

      <Dialog.Root
        open={isOpen}
        onOpenChange={({ open }: { open: boolean }) => setIsOpen(open)}
        size="cover"
        placement="center"
        motionPreset="slide-in-bottom"
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                {typeof children === "function" ? children(handleClose) : children}
              </Dialog.Body>

              {footer && <Dialog.Footer>{footer}</Dialog.Footer>}

              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
