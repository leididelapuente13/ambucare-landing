import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface PollButtonProps {
    text: string;
    href: string;
    type: "primary" | "secondary";
}

export const PollButton = ({ text, href, type }: PollButtonProps) => {
    return (
        <Button className={clsx("text-white px-7 py-7 rounded-4xl transition delay-150 duration-300 ease-in-out hover:scale-105", {
            "bg-[#0F4C69] hover:bg-[#296c8b] shadow-lg": type === "primary",
            "bg-[#296c8b] hover:bg-[#0F4C69]": type === "secondary"
        })}>
            <a href={href} target="_blank">{text}</a>
        </Button>
    )
}