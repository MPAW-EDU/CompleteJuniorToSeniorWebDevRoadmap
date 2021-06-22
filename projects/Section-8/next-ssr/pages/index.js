import Link from 'next/link';
import Image from '../components/image';
const Index = () => {
    return (
        <div style={{fontSize: '20px'}}>
            <h1>SSR ZOMBIE HUNTER</h1>
            <Link href={'/about'}>
                <button>About</button>
            </Link>
            <Link href='robots'>
                <button>Robots</button>
            </Link>
             <Image />
        </div>
    )

};

export default Index;
