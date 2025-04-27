export function leastConsecutiveCardsToMatch(cards: number[]) {
    let windowStart = 0;
    let cardFrequency = new Map();
    let cardsPickedUp = cards.length + 1;

    for (let windowEnd = 0; windowEnd < cards.length; windowEnd++) {
        let currentCard = cards[windowEnd];
        cardFrequency.set(currentCard, cardFrequency.has(currentCard) ? cardFrequency.get(currentCard) + 1 : 1);

        while (cardFrequency.get(currentCard) == 2) {
            cardsPickedUp = Math.min(cardsPickedUp, windowEnd - windowStart + 1);
            cardFrequency.set(cards[windowStart], cardFrequency.get(cards[windowStart]) - 1)
            windowStart++;
        }
    }
    return cardsPickedUp !== cards.length + 1 ? cardsPickedUp : -1 ;
}