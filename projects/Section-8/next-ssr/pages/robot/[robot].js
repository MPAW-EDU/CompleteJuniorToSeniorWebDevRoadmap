
const Robot = (props) => {
    return (
        <div>
            <img alt="profile" src={`https://www.robohash.org/${props.id}?set=set2&size=200x200`} />
            <div>
                <h2>{props.username}</h2>
                <p>{props.name}</p>
                <p>{props.email}</p> 
            </div>
        </div>
    )
}

export default Robot;