from threading import Lock

class ZeroEvenOdd:
    def __init__(self, n):
        self.n = n
        self.ct = 0
        self.zero_lock = Lock()
        self.odd_lock = Lock()
        self.even_lock = Lock()
        self.odd_lock.acquire()
        self.even_lock.acquire()
        
        
    # printNumber(x) outputs "x", where x is an integer.
    def zero(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range(self.n):
            self.zero_lock.acquire()
            printNumber(0)
            self.ct += 1
            if self.ct % 2 == 0:
                self.even_lock.release()
            else:
                self.odd_lock.release()
        
        
    def even(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range((self.n)//2):
            self.even_lock.acquire()
            printNumber(self.ct)
            self.zero_lock.release()
        
        
    def odd(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range((self.n+1)//2):
            self.odd_lock.acquire()
            printNumber(self.ct)
            self.zero_lock.release()
