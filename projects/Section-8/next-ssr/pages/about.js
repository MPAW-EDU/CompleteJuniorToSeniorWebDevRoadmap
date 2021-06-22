import Link from 'next/link';
import Image from '../components/image';

const About = () => {
    return (
         <div style={{fontSize: '20px', color: 'blue'}}>
            <h1>About</h1>
            <Link href={'/'}>
                 <button>Home</button>
             </Link>
             <p>I once was the greatest of all zombie hunters.</p>
             <Image />
        </div>
    )
}

export default About;