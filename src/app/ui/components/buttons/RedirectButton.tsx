
interface RedirectButtonProps {
    text: string;
    href: string;
    className?: string;
}

export const RedirectButton = ({ text, href, className }: RedirectButtonProps) => {
    return (
        <button className={className}>
            <a href={href} target="_blank">{text}</a>
        </button>
    )
}