let startCardCount = 4;
let remainingCardCount = 0;
let cardSet;
let cardPair = [];

document.getElementById('logo').innerText = getRandomEmoji()[1];

function genCardSet(num) {
    removeAllChildren(cardSet);
    if (!num || num <= 0 || num % 2 !== 0) {
        return;
    } // even, non-zero, non-negative number of cards to proceed
    let emojis = [];
    for (let i = 1; i <= num; i++) {
        let emoji = getRandomEmoji();
        emojis.push(emoji);
        i++;
        emojis.push(emoji);
    };
    return genCards(shuffleArray(emojis));
};

function removeCardSet() {
    removeAllChildren(cardSet);
}

function genCards(emojis) {
    let cards = document.getElementById('cards');
    emojis.forEach(elem => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-emojiID', elem[0]);

        let cardText = document.createElement('p');
        cardText.innerText = elem[1];
        cardText.style.visibility = 'hidden';

        card.addEventListener('click', e => {
            handleCardClick(e.currentTarget);
        });

        card.append(cardText);
        cards.append(card);
    });
    return cards;
};

function handleCardClick(card) {
    if (card.querySelector('p').style.visibility === 'visible') {
        return;
    }; // do nothing if clicking a card that is already visible
    card.querySelector('p').style.visibility = 'visible';
    handleCardPair(card);
}

function handleCardPair(card) {
    cardPair.push(card);
    if (cardPair.length === 2) {
        if (cardPair[0].getAttribute('data-emojiid') === cardPair[1].getAttribute('data-emojiid')) {
            cardPair.forEach(elem => {
                elem.classList.add('matched');
            }
            )
        } else {
            cardPair.forEach(elem => {
                elem.classList.add('unmatched');
            });
            setTimeout(
                cardPair => {
                    cardPair.forEach(elem => {
                        elem.querySelector('p').style.visibility = 'hidden';
                        elem.classList.remove('unmatched');
                    })
                }, 1000, cardPair
            )
        }
        cardPair = [];
    }
    remainingCardCount = startCardCount - cardSet.getElementsByClassName('matched').length;
    if (remainingCardCount === 0) {
        // game over - all cards matched!
        hideDivTimerControl();
        showModalSuccess();
    }
}