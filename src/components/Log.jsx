export default function Log({ turns }) {
    return (
        <ol>
            {turns.map((turn, index) => (
                <li key={index}>
                    Player {turn.player} clicked row {turn.square.row}, col {turn.square.col}
                </li>
            ))}
        </ol>
    );
}
