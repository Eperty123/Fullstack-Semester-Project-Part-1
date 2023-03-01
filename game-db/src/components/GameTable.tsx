import Game from '../classes/Games';

const GameTable = ({games}:{games:Game[]}) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Developer</th>
                    <th>Publisher</th>
                    <th>Release date</th>
                    <th>Platform</th>       
                </tr>
                </thead>
        {games.map((game) => {
            return (
                <tbody key={game.id}>
                <tr>
                    <td>{game.id}</td>
                    <td>{game.name}</td>
                    <td>{game.price}€</td>
                    <td>{game.developer}</td>
                    <td>{game.publisher}</td>
                    <td>{game.release_date}</td>
                    <td>{game.platform}</td>
                </tr>
                </tbody>    
            );
        })}
        </table>
    </div>
    )
}

export default GameTable