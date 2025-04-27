from abc import ABC, abstractmethod
from json import loads


class JSONComponent(ABC):
    @abstractmethod
    def parse(self):
        pass


class JSONLeaf(JSONComponent):
    def __init__(self, k, v):
        self.key = k
        self.value = v

    def parse(self):
        print(f"JSON Leaf: {self.key} {self.value}")


class JSONObject(JSONComponent):
    def __init__(self):
        self.children = []

    def add(self, child):
        self.children.append(child)

    def remove(self, child):
        self.children.remove(child)

    def parse(self):
        result = []
        for child in self.children:
            result.append(child.parse())
        return "/n".join(result)


def parse_json(json_string):
    # Parse JSON string
    data = loads(json_string)

    # Create root JSON Object
    root = JSONObject()

    # Create nodes based on JSON structure
    for key, value in data.items():
        if isinstance(value, dict):
            obj = JSONObject()
            for k, v in value.items():
                leaf = JSONLeaf(k, v)
                obj.add(leaf)
            root.add(obj)
        else:
            leaf = JSONLeaf(key, value)
            root.add(leaf)

    return root


sample_json = (
    '{"name": "John Doe", "age": 30, "address": {"city": "New York", "zip": 10001}}'
)

json_structure = parse_json(sample_json)

print(json_structure.parse())
