import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import "../CSS/standardCard.css";
import "../CSS/clickable.css";

type OverlayCardProps = {
    svg?: ReactNode,
    img?: string,
    cardTitle: string,
    onClick?: () => void,
};

export default function OverlayCard({ svg, img, cardTitle, onClick }: OverlayCardProps) {
    const overlayCard = <Box className="standardCard clickable" onClick={onClick}>
                            {svg}
                            {img && <img src={img} alt={cardTitle} className="w-full h-auto" />}
                            <Heading as="h2" size={["xl", "2xl", "3xl"]} textAlign={"center"} className="text-center" color={"#4A5568"} mt={4} mb={10}>
                                {cardTitle}
                            </Heading>
                        </Box>;


    return (
        overlayCard
    );
}