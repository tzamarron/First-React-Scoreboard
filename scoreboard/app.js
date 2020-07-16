//  <h1 id="main-title" title="This is a title.">My First React Element!</h1>
// const title = React.createElement(
//     'h1', // ELement
//     { id: 'main-title', title: 'This is a title.'}, // Attributes
//     'My First React Element!' // Content
// );
// const title = 'My First React Element';
const players = [
    {
        name: "Guil",
        score: 50,
        id: 1
    },
    {
        name: "Treasure",
        score: 85,
        id: 2
    },
    {
        name: "Ashley",
        score: 95,
        id: 3
    },
    {
        name: "James",
        score: 80,
        id: 4
    }
]

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <span className="stats">Player : {props.totalPlayers}</span>
    </header>
);

const Player = (props) => (
    <div className="player">
        <span className="player-name">
            {props.name}
        </span>

        <Counter />
    </div>
);

class Counter extends React.Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    // }

    state = {
        score: 0
    };

    // using arrow function to bind the state
    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        })
    }

    // using bind to bind the state
    incrementScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={ this.incrementScore.bind(this) } > + </button>
            </div>
        );
    }
}

const App = (props) => (
    <div className="scoreboard">
        <Header
            title="Scoreboard"
            totalPlayers={props.initialPlayers.length}
        />

        {/* Players List */}
        {props.initialPlayers.map(player =>
            <Player
                name={player.name}
                key={player.id.toString()}
            />
        )}
    </div>
);
ReactDOM.render(
    <App initialPlayers={players} />, // What to show
    document.getElementById('root') // Where to show
);