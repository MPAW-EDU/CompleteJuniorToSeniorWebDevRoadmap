import Link from 'next/link';
const Index = () => {
    return (
        <div>
             <h1>SSR ZOMBIE HUNTER</h1>
             <Link href={'/about'}>
                 About
             </Link>
        </div>
    )

};

export default Index;
