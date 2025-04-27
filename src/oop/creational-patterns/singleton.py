import threading


class Singleton:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls):
        if cls._instance is None:
            with cls._lock:
                if not cls._instance:
                    cls._instance = super().__new__(cls)
                    cls._instance._init_singleton_service()
                    print("Creating Singleton instance")
        return cls._instance

    def _init_singleton_service(self):
        self.mode = "Grayscale"
        print("setting mode to grayscale")

    @classmethod
    def get_instance(cls):
        return cls()


worker1 = Singleton()
