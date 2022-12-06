import Image from "next/image"

function UnderConstruction() {
    return (
        <div className="w-full h-[500px] bg-brandpurple flex justify-center items-center">
            <div className="flex flex-col md:flex-row md:items-center items-center">
                <div className="w-24 h-24 relative">
                <Image src={`/ArtLogo2.png`} layout="fill"/>
                </div>
                <h2 className="text-brandyellow mt-10 md:mt-0 text-xl md:ml-10 md:pl-5 md:border-l border-brandyellow">This Page is Under Construction</h2>
            </div>
        </div>
    );
}

export default UnderConstruction;