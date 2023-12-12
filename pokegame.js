import React from 'react';
import Pokedex from './pokedex';

class Pokegame extends React.Component {
    constructor(props) {
        super(props);

    //initial list of 8 pokemon passed as props
    this.pokemonList = props.pokemonList;

    //randomly assign Pokemon into two hands
    const hand1 = this.getRandomHand();
    const hand2 = this.getRandomHand();

    // calculate total experience for each hand
    const totalExp1 = this.calculateTotalEperience(hand1);
    const totalExp2 = this.calculateTotalEperience(hand2);

    // state to hold the two hands and total experience
    this.state = {
        hand1: { cards: hand1, totalExperience: totalExp1 },
        hand2: { cards: hand2, totalExperience: totalExp2 },
    };
}

getRandomHand() {
    //randomly select 4 pokemon cards from the list
    const shuffledList = this.shuffleArray(this.pokemonList);
    return shuffledList.slice(0, 4);
}

shuffleArray(array) {
    // function to shuffle an array (Fisher-Yates algorithm)
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

calculateTotalEperience(hand) {
    // calculate total experience for a hand
    return hand.reduce((total, card) => total + card.base_experience, 0);
}

render() {
    return(
        <div>
            // render two Pokedex components, one for each hand
            <Pokedex pokemon={this.state.hand1.cards} totalExperience = {this.state.hand1.totalExperience} />
            <Pokedex pokemon = {this.state.hand2.cards} totalExperience = {this.state.hand2.totalExperience} />
        </div>
    );
}  
}

export default Pokegame; 