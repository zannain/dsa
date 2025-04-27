from enum import Enum
from abc import ABC, abstractmethod

class Appetizer(Enum):
    SALAD = 1
    SOUP = 2
    BRUSCHETA = 3
    VEGGIE_STICKS = 4
    CHICKEN_WINGS = 5

class Main(Enum):
    GRILLED_CHICKEN = 1
    PASTA = 2
    FISH = 3
    PIZZA = 4
    CHICKEN_TIKKA_MASALA = 5

class Dessert(Enum):
    FRUIT_SALAD = 1
    ICE_CREAM = 2
    CHOCOLATE_CAKE = 3
    VEGAN_PUDDING = 4
    CHEESECAKE = 5

class Drink(Enum):
    COKE_ZERO = 1
    SHAKE = 2
    WATER = 3
    PAKOLA = 4

class Meal:
    def __init__(self):
        self.cost = 0.0
        self._appetizer = ""
        self._drink = ""
        self._dessert = ""
        self._main = ""
        self.takeout = False

    @property
    def appetizer(self):
       return self._appetizer

    @property
    def main(self):
        return self._main

    @property
    def drink(self):
        return self._drink

    @property
    def dessert(self):
        return self._dessert

    @appetizer.setter
    def appetizer(self, appetizer):
        self._appetizer = appetizer

    @main.setter
    def main(self, main):
        self._main = main

    @drink.setter
    def drink(self, drink):
        self._drink = drink

    @dessert.setter
    def dessert(self, dessert):
        self._dessert = dessert


class Builder(ABC):
    @abstractmethod
    def add_appetizer(self, appetizer):
        pass


    @abstractmethod
    def add_main(self, main):
        pass

    @abstractmethod
    def add_drink(self, drink):
        pass

    @abstractmethod
    def add_dessert(self, dessert):
        pass

class MealBuilder(Builder):
    def __init__(self):
        self.meal = Meal()

    def add_appetizer(self, appetizer):
        self.meal.appetizer = appetizer
        return self

    def add_main(self, main):
        self.meal.main = main
        return self

    def add_drink(self, drink):
        self.meal.drink = drink
        return self

    def add_dessert(self, dessert):
        self.meal.dessert = dessert
        return self

    def build(self):
        return self.meal

class Director:
    def construct_vegan_meal(self, builder):
        builder.add_appetizer(Appetizer.SALAD)
        builder.add_main(Main.FISH)
        builder.add_drink(Drink.WATER)
        builder.add_dessert(Dessert.CHEESECAKE)

    def construct_kids_meal(self, builder):
        builder.add_appetizer(Appetizer.VEGGIE_STICKS)
        builder.add_main(Main.CHICKEN_TIKKA_MASALA)
        builder.add_drink(Drink.COKE_ZERO)
        builder.add_dessert(Dessert.CHOCOLATE_CAKE)

    def construct_low_carb_meal(self, builder):
        builder.add_appetizer(Appetizer.SALAD)
        builder.add_main(Main.GRILLED_CHICKEN)
        builder.add_drink(Drink.PAKOLA)
        builder.add_dessert(Dessert.FRUIT_SALAD)


director = Director()
builder = MealBuilder()

director.construct_low_carb_meal(builder)
low_carb_meal = builder.build()

print(low_carb_meal)
print(low_carb_meal.drink)
