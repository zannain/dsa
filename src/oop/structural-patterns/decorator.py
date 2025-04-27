from abc import ABC, abstractmethod


class Notifier(ABC):
    def send(self, message):
        pass


class BaseNotifier(Notifier):
    def send(self, message):
        print(f"Base: {message}")


class BaseDecorator(ABC):
    _wrapper: Notifier

    def __init__(self, wrapper):
        self._wrapper = wrapper

    def send(self, message):
        self._wrapper.send(message)

    @property
    def wrapper(self):
        return self._wrapper


class WhatsAppDecorator(BaseDecorator):

    def send(self, message):
        self.wrapper.send(message)
        print(f"WhatsApp: {message}")


class SlackDecorator(BaseDecorator):
    def send(self, message):
        self.wrapper.send(message)
        print(f"Slack: {message}")


base_notifier = BaseNotifier()

whatsapp_notifier = WhatsAppDecorator(base_notifier)

slack_notifier = SlackDecorator(whatsapp_notifier)
slack_notifier.send("Hello")
