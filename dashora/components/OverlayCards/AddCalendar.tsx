import OverlayCard from "./OverlayCard";
import { FilePlus } from "lucide-react";


export default function AddCalendar() {
    return (
        <OverlayCard svg={
            <FilePlus size={250} color='lightgray' />
        }
        cardTitle={"Calendar"} />
    );
}