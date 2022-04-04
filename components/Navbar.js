import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={25} height={25} />
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/people"><a>People Listing</a></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;