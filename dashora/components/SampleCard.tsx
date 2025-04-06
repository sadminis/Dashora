import { Box, Text, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FileWarning } from "lucide-react";
import "./CSS/standardCard.css";
import "./CSS/clickable.css";

type SampleCardProps = {
    svg?: ReactNode,
    img?: string,
    title: string,
    onClick?: () => void,
    content?: string,
};


export default function SampleCard({ svg, img, title, onClick, content }: SampleCardProps) {
    return (
        <Box className="standardCard clickable" onClick={onClick}>
            {svg || <FileWarning className="standardCardImage" color='lightgray' />}
            {img && <img src={img} alt={title} className="w-full h-auto" />}
            <Heading as="h2" size={["xl", "2xl", "3xl"]} textAlign={"center"} className="text-center" color={"#4A5568"} mt={4} mb={10}>
                {title}
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center">{content}</Text>

        </Box>
    )
}