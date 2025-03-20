import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface PollButtonProps {
    text: string;
    href: string;
    type: "primary" | "secondary";
}

export const PollButton = ({ text, href, type }: PollButtonProps) => {
    return (
        <Button type="button" className={clsx("text-white px-7 py-7 rounded-4xl transition delay-150 duration-300 ease-in-out hover:scale-105", {
            "bg-green-primary hover:bg-green-shade-secondary shadow-lg": type === "primary",
            "bg-green-shade-primary hover:bg-green-shade-primary": type === "secondary"
        })}>
            <a href={href} target="_blank">{text}</a>
        </Button>
    )
}