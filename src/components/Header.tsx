import magnifyLogo from "../assets/magnifyingGlassLeaf.png"

const Header = () => {
    return (
        <div className= 'flex top-0 sticky h-16 min-w-screen justify-start items-center border-b-[1px] bg-gradient-to-r from-green-600 to-lime-500'>
            <div className="flex items-center ml-2 ">
                <img src={magnifyLogo} className="h-16" />
                <div className="text-md font-medium">
                    Agricultural Plant Disease Identifier
                </div>
            </div>
        </div>
    )
}

export default Header