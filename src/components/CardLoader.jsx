import Card from "./Card"

export default function CardLoader() {
    const cards = ['1', '2', '3', '4']
    return(
        <main id="cards">
            {cards.map(name => <Card key={cards[name]} name={name}/>)}
        </main>
    )
}