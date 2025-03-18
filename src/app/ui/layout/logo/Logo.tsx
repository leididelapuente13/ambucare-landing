import Image from "next/image"
import logo from '../../../../../public/next.svg'

export const Logo = () => {
    return (
        <Image src={logo} width={80} height={80} alt="Sios ambucare logo" />
    )
}