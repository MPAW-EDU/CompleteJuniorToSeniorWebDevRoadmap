import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Store from './store';

const Robots = ({robots}) => {
    return (
        <div>
            <h1>Robots</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <div>
                <ul>
                {/* {
                    robots.map(robot => {
                        return (
                            <li key={robot.id}>
                                <Link href={`/robot/${robot.id}`}>
                                    <a>{robot.name}</a>
                                </Link>
                            </li>
                        )
                    })
                } */}
                </ul>
            </div>
        </div>
    )
};

Robots.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    Store = data
}

export default Robots;