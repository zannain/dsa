from abc import ABC, abstractmethod

class JSONLogger(ABC):
    @abstractmethod
    def log(self, message):
        pass


class XMLLogger:
    def log(self, XML_message):
        print(XML_message)

class LoggerAdapter(JSONLogger):
    def __init__(self, XMLLogger: XMLLogger):
        self.XML_logger = XMLLogger

    def log(self, message):
        self.XML_logger.log(message)


logger = LoggerAdapter(XMLLogger())
logger.log("<message>hello</message>")

