import { useState, useEffect } from "react";
import { format } from "date-fns";
import axios from "axios";
import { Spinner, Box, Text, VStack, Image, Grid, Flex, Icon } from "@chakra-ui/react";
import DragHandle from "./DragHandle";

import { SquarePlay, ThumbsUp, Clock10 } from "lucide-react";
import "./CSS/hoverAnimation.css";

interface Video {
    aid: number;
    title: string;
    pic: string;
    desc: string;
    duration: number;
    stat: {
        view: number;
        like: number;
    };
}

function formatDuration(seconds: number): string {
    const duration = new Date(seconds * 1000);
    return format(duration, "mm:ss");
}

export default function BilibiliCard() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get("api/bilibili")
        .then(response => {
            setVideos(response.data.data.list)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <Box className="standardCard"><Spinner size={"xl"}/></Box>
        );
    }

    return (
        <Box className="standardCard" gridTemplateRows="auto 1fr" fontFamily={"Source Han Sans CN"}>
            <DragHandle color = {"#FFFAFA"} hoverColor="#E75480" />
            <Box display={"flex"} flexDirection={"row"} gap={2} alignItems={"center"} padding={4} bg={"#FB7299"} >
                <Image marginLeft={4} src="https://www.svgrepo.com/show/345504/bilibili.svg" alt="Bilibili Logo" color="pink" className="w-8 h-8" />
                <Text fontSize="xl" marginLeft={2} fontWeight="bold" color={"#FFFAFA"}>Trending Videos</Text>
            </Box>
            
            <Box overflowY={"auto"} height={"100%"} width={"100%"}>
                <VStack gap={1} align={"stretch"}>
                    {videos.map((video) => (
                        <Box
                            key={video.aid}
                            className="videoCard clickable hover-animation"
                            margin={2}
                            padding={4}
                            borderRadius={4}
                            boxShadow="sm"
                            bg={"#FAFAFA"}
                            borderWidth={1}
                            borderColor={"#E2E8F0"}
                            _hover={{ boxShadow: "md", cursor: "pointer" }} // Add hover effect
                            onClick={() => window.open(`https://www.bilibili.com/video/av${video.aid}`, "_blank")} // Open link in a new tab
                        >
                            <Grid templateColumns={{ base: "1fr", md: "30% 1fr" }} gap={4}>
                                <Flex alignItems={"center"} justifyContent={"center"}>
                                    <Image loading="lazy" src={`/api/getVideoImg?url=${encodeURIComponent(video.pic)}`} alt={video.title} maxH={"100%"} borderRadius="sm"/>
                                </Flex>
                                <Box>
                                    <Flex flexDirection={"column"} justifyContent={"space-between"} height={"100%"} maxW={"100%"}>
                                        <Text fontSize="lg" fontWeight="semibold" lineClamp="1">{video.title}</Text>
                                        <Box>
                                            <Text fontSize="sm" lineClamp="2">{video.desc}</Text>

                                            <Flex justifyContent={"space-between"} marginTop={2}>
                                                <Flex gap={4}>
                                                    <Flex alignItems={"center"}>
                                                        <Icon as={SquarePlay} boxSize={4.5} color={"#FB7299"} />
                                                        <Text fontSize="sm" marginLeft={1}>{video.stat.view}</Text>
                                                    </Flex>
                                                    <Flex alignItems={"center"}>
                                                        <Icon as={ThumbsUp} boxSize={4.5} color={"#FB7299"} />
                                                        <Text fontSize="sm" marginLeft={1}>{video.stat.like}</Text>
                                                    </Flex>
                                                </Flex>
                                                
                                                <Flex alignItems={"center"}>
                                                    <Icon as={Clock10} boxSize={4.5} color={"#FB7299"} />
                                                    <Text fontSize="sm" marginLeft={1}>{formatDuration(video.duration)}</Text>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                    
                                </Box>
                            </Grid>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
}