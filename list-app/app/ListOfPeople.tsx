export default function ListOfPeople() {
    const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
    ];

    const jsx = [<li>A</li>, <li>B</li>,<li>C</li>];
    const people2=[];
    const people3 = people.map((person) => <li>{person}</li>);
    for(let person of people){
        people2.push(<li>{person}</li>);
    }
    return (
        <div>
            {people}
            {people2}
            {jsx}
        </div>
    );
}