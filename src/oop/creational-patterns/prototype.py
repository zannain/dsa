from abc import ABC, abstractmethod
from copy import deepcopy

class DocumentPrototype(ABC):
    @abstractmethod
    def clone(self):
        pass

    @abstractmethod
    def display(self):
        pass


class Document(DocumentPrototype):

    def __init__(self, content, images, formatting, annotations) -> None:
        self.content = content
        self.images = deepcopy(images)
        self.formatting = formatting
        self.annotations = deepcopy(annotations)

    def clone(self):
        return Document(self.content, self.images, self.formatting, self.annotations)

    def display(self):
        print("Content", self.content)
        print("Images", self.images)
        print("Formatting", self.formatting)
        print("Annotations", self.annotations)

    def add_image(self, image):
        self.images.append(image)

    def add_annotations(self, annotation):
        self.annotations.append(annotation)


images = ["Image1.png"]
annotations = ["Annotation1"]

original_doc = Document(
    "Hello, World!",
    images,
    "Basic",
    annotations
)

copied_doc = original_doc.clone()

copied_doc.add_image("Image2.png")
copied_doc.add_annotations("Annotation2")


print("Original")
print(original_doc.display())
print("Copied")
print(copied_doc.display())