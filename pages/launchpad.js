import Image from 'next/image'

function Launchpad() {
    return (
        <div>
            <Image src='/ArtLogo.png' width={1440} height={300}/>
            {/* <h2 className=''>Coming Soon</h2> */}
        </div>
    );
}

export default Launchpad;