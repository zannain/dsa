from abc import ABC, abstractmethod
from enum import Enum, auto


class Card(ABC):
    @property
    def card_value(self):
        raise NotImplementedError()

    def __lt__(self, other):
        return self.card_value < other.card_value


class Suit(Enum):
    CLUBS = auto()
    DIAMONDS = auto()
    HEARTS = auto()
    SPADES = auto()


class PlayingCard(Card):
    SUITS = {
        "Clubs": Suit.CLUBS,
        "Diamonds": Suit.DIAMONDS,
        "Hearts": Suit.HEARTS,
        "Spades": Suit.SPADES,
    }
    SUIT_NAMES = {e: n for n, e in SUITS.items()}

    VALUES = {"A": 1, **{str(i): i for i in range(2, 11)}, "J": 11, "Q": 12, "K": 13}
    VALUE_NAMES = {e: n for n, e in VALUES.items()}

    def __init__(self, suit, value):
        super().__init__()
        self._suit = self.SUITS[suit]
        self._value = self.VALUES[value]

    @property
    def card_value(self):
        return self._value

    def __str__(self):
        suit = self.SUIT_NAMES[self._suit]
        value = self.VALUE_NAMES[self._value]
        return f"{value} of {suit}"


class JokerColor(Enum):
    RED = (auto(),)
    BLACK = auto()


class JokerCard(Card):
    COLORS = {"Red": JokerColor.RED, "Black": JokerColor.BLACK}
    COLOR_NAMES = {e: n for n, e in COLORS.items()}

    def __init__(self, color):
        self._color = self.COLORS[color]

    @property
    def card_value(self):
        return 14

    def __str__(self):
        return f"{self.COLOR_NAMES[self._color]} Joker"


class Hand:
    def __init__(self, cards):
        self.cards = list(cards)

    def __str__(self):
        ", ".join(str(card) for card in self.cards)

    def __lt__(self, other):
        for card_a, card_b in zip(
            sorted(self.cards, reverse=True), sorted(other.cards, reverse=True)
        ):
            if card_a < card_b:
                return True
            elif card_b < carb_a:
                return False
        return False


class Game:
    def __init__(self):
        self.cards = []
        self.hands = []

    def add_card(self, suit: str, value: str) -> None:
        self.cards.append(PlayingCard(suit, value))

    def card_string(self, card: int) -> str:
        return str(self.cards[card])

    def card_beats(self, card_a: int, card_b: int) -> bool:
        return self.cards[card_a] > self.cards[card_b]

    def add_joker(self, color):
        self.cards.append(JokerCard(color))

    def add_hand(self, card_indices):
        self.hands.append(Hand([self.cards[i] for i in card_indices]))

    def hand_string(self, hand):
        return str(self.hands[hand])

    def hand_beats(self, hand_a, hand_b):
        return self.hands[hand_a] > self.hands[hand_b]


game = Game()
suit = "Joker"
value = "Red"
game.add_joker(value) if suit == "Joker" else game.add_card(suit, value)
print(game.card_string(0))
suit = "Diamonds"
value = "2"
game.add_card(suit, value)
print(game.card_string(1))
print("true" if game.card_beats(0, 1) else "false")
