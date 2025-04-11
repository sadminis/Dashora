import { useState } from "react";
import { Box, Button, Flex, Input, Text, Grid, Menu, InputGroup, NativeSelect, Image } from "@chakra-ui/react";
import { IframeHTMLAttributes } from "react";
import { Search, SearchIcon } from "lucide-react";

import "./CSS/standardCard.css";
import "./CSS/clickable.css";
import GoogleLogo from '@/components/GoogleLogo';
import DragHandle from "./DragHandle";
import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchEngine, setSearchEngine] = useState("Google");

    const handleSearch = () => {
        const query = encodeURIComponent(searchTerm);
        let url = "";

        switch (searchEngine) {
            case "Google":
                url = `https://www.google.com/search?q=${query}`;
                break;
            case "Bing":
                url = `https://www.bing.com/search?q=${query}`;
                break;
            case "Baidu":
                url = `https://www.baidu.com/s?wd=${query}`;
                break;
            default:
                url = `https://www.google.com/search?q=${query}`;
        }

        window.open(url, "_blank");
    };

    const getSearchEngineLogo = () => {
        switch (searchEngine) {
            case "Google":
                return <GoogleLogo />;
            case "Bing":
                return <Image src="/bing.svg" alt="Bing Logo" />
            case "Baidu":
                return <Image src="/baidu.svg" alt="Baidu Logo" />
            default:
                return <GoogleLogo />;
        }
    };

    const DomainSelect = () => (
        <NativeSelect.Root size="xs" variant="plain" width="auto" me="-1">
          <NativeSelect.Field defaultValue=".com" fontSize="sm" value={searchEngine} onChange={(e) => setSearchEngine(e.target.value)}> 
            <option value="Google">Google</option>
            <option value="Baidu">Baidu</option>
            <option value="Bing">Bing</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      )

    return (
        <Box className="standardCard" gridTemplateRows="2fr 1fr" width={"100%"} minWidth="100%" gridTemplateColumns="minmax(0, 1fr)">
            <DragHandle />
            <Flex minWidth="0" width="100%" maxW={"300px"} mt={10} marginX={"auto"} alignItems={"center"} justifyContent="center">
                {getSearchEngineLogo()}
            </Flex>
            <Flex alignItems={"center"} justifyContent="center" width={"100%"} maxW={"80%"} marginX={"auto"} marginBottom={10}>
                <InputGroup startElement={<LuSearch />} endElement={<DomainSelect />} width={"100%"}>
                    <Input size={"lg"} css={{ "--focus-color": "lightgray" }} shadow={"sm"} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} rounded={"lg"} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                </InputGroup>
            </Flex>
        </Box>
    );
}
