import { Logo } from "@/app/ui/layout/logo/Logo"
import { Modal } from "../../components/modal/Modal"


export const Header = () => {
    return (
        <header className="w-full flex justify-between items-center py-2.5 px-3 bg-green-primary">
            <Logo />
            <Modal />
        </header>
    )
}