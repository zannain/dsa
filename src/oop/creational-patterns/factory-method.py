from enum import Enum
from abc import ABC, abstractmethod


class BurgerType(Enum):
    CHEESEBURGER = 1
    DELUXE_CHEESEBURGER = 2
    VEGANBURGER = 3


class SimpleBurgerFactory:
    def create_burger(self, burger_type: BurgerType):
        if burger_type == BurgerType.CHEESEBURGER:
            return "CheeseBurger"
        elif burger_type == BurgerType.DELUXE_CHEESEBURGER:
            return "DeluxeCheeseBurger"
        elif burger_type == BurgerType.VEGANBURGER:
            return "VeganBurger"
        else:
            return None


simpleBurgerFactory = SimpleBurgerFactory()

burger = simpleBurgerFactory.create_burger(BurgerType.CHEESEBURGER)
# print(burger)


# The Factory Method should defer the creation of objects to subclasses
# The SimpleBurgerFactory would need to be modified if a new burger type was added violating open/closed principle


class Burgers(Enum):
    CHEESE = "CHEESE"
    DELUXECHEESE = "DELUXECHEESE"
    VEGAN = "VEGAN"
    DELUXEVEGAN = "DELUXEVEGAN"


class BurgerStore(ABC):
    @abstractmethod
    def create_burger(self, item: Burgers):
        pass

    def order_burger(self, type: Burgers):
        burger = self.create_burger(type)
        print(f"----Creating a {burger.get_name()}----")
        return burger



class CheeseBurgerFactory(BurgerStore):

    def create_burger(self, item: Burgers):
        if item == Burgers.CHEESE:
            return CheeseBurger()
        elif item == Burgers.DELUXECHEESE:
            return DeluxeCheeseBurger()
        else:
            return None

class VeganBurgerFactory(BurgerStore):

    def create_burger(self, item: Burgers):
        if item == Burgers.DELUXEVEGAN:
            return DeluxeVeganBurger()
        elif item == Burgers.VEGAN:
            return VeganBurger()
        else:
            return None


class Burger(ABC):
    def __init__(self):
        self.name = ''
        self.bread = ''
        self.sauce = ''
        self.toppings = []


    @abstractmethod
    def prepare(self):
        pass

    def get_name(self):
        return self.name


class CheeseBurger(Burger):
    def __init__(self):
        super().__init__()
        self.name = Burgers.CHEESE

    def prepare(self):
        print(f"----Preparing {self.get_name()}----")


class VeganBurger(Burger):
    def __init__(self):
        super().__init__()
        self.name = Burgers.VEGAN

    def prepare(self):
        print(f"----Preparing {self.get_name()}----")


class DeluxeVeganBurger(Burger):
    def __init__(self):
        super().__init__()
        self.name = Burgers.DELUXEVEGAN

    def prepare(self):
        print(f"----Preparing {self.get_name()}----")


class DeluxeCheeseBurger(Burger):
    def __init__(self):
        super().__init__()
        self.name = Burgers.DELUXECHEESE

    def prepare(self):
        print(f"----Preparing {self.get_name()}----")


cheeseBurgerStore = CheeseBurgerFactory()
veganBurgerStore = VeganBurgerFactory()

burger = cheeseBurgerStore.order_burger(Burgers.CHEESE)
veganBurger = veganBurgerStore.order_burger(Burgers.DELUXEVEGAN)


