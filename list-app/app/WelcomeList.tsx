export default function WelcomeList() {
    const people = [
        'Creola Katherine Johnson',
        'Mario José Molina-Pasquel Henríquez',
        'Mohammad Abdus Salam',
        'Percy Lavon Julian',
        'Subrahmanyan Chandrasekhar'
    ];

    const people2 = people.map((person) => (
        <div>
            <p>Hello, {person}</p>
            <p>Welcome to Platform Computing!</p>
        </div>
    ));

    return (
        <div>
            {people2}
        </div>
    );
}