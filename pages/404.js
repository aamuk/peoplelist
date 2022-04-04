import Link from 'next/link';
import Image from 'next/image';
import muppet from '/public/sam.png';

const NotFound = () => {

    return (
        <div className="not-found">
            <Image
                src={muppet}
                alt="muppet"
                width="350px"
                height="300px"
            />
            <h1>LOL U MUPPET</h1>
            <h2>Page not found.</h2>
            <p>Go back to <Link href="/"><a>home page</a></Link></p>
        </div>
    );
}
 
export default NotFound;