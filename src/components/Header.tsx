import magnifyLogo from "../assets/magnifyingGlassLeaf.jpg"

const Header = () => {
    return (
        <div className="flex sticky h-16 min-w-screen justify-end items-center border-b">
            <div className="flex absolute left-3 items-center">
                <img src={magnifyLogo} className="h-14" />
                <div className="ml-2">
                    Plant Disease Identifier
                </div>
            </div>
            <div className="hidden items-center mr-10 sm:flex">
                Maps
            </div>
        </div>
    )
}

export default Header