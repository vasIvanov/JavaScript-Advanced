let result = (function () {
    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuits = ['\u2660', '\u2665', '\u2666', '\u2663'];
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }
        set face(face) {
            if(!validFaces.includes(face)) {
                throw new Error(`Invalid face`);
            } else {
                this._face = face;
            }
        }

        get suit() {
            return this._suit;
        }
        set suit(suit) {
            if(!validSuits.includes(suit)) {
                throw new Error(`Invalid suit`);
            } else {
                this._suit = suit;
            }
        }
    }

    let Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    }


    return {
        Suits:Suits,
        Card:Card
    };
})();

let Suits = result.Suits;
let Card = result.Card;

let card = new Card("2",Suits.DIAMONDS);
card.face = "J";
console.log(card);
