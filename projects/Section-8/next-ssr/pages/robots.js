import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = ({robots}) => {
    return (
        <div>
            <h1>Robots</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <div>
                <ul>
                {
                    robots.map(robot => {
                        return (
                            <li key={robot.id}>
                                {robot.name}
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
};

Robots.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        robots: data
    }
}

export default Robots;