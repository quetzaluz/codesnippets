from threading import Lock

class Foo:
    def __init__(self):
        self.lock_first = Lock()
        self.lock_second = Lock()
        self.lock_first.acquire()
        self.lock_second.acquire()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        printFirst()
        self.lock_first.release()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        self.lock_first.acquire()
        printSecond()
        self.lock_second.release()

    def third(self, printThird: 'Callable[[], None]') -> None:
        self.lock_second.acquire()
        printThird()
