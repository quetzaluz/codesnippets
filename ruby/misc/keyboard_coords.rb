# We'll assume the virtual keyboard has a width of 6:
#
#      0  1  2  3  4  5
#
#  0   A  B  C  D  E  F
#  1   G  H  I  J  K  L
#  2   M  N  O  P  Q  R
#  3   S  T  U  V  W  X
#  4   Y  Z


# And passing the word "ANYPERK", the method should return:
#
#     ["ENTER",
#      "RIGHT", "DOWN", "DOWN", "ENTER",
#      "LEFT", "DOWN", "DOWN", "ENTER",
#      "RIGHT", "RIGHT", "RIGHT", "UP", "UP", "ENTER",
#      "RIGHT", "UP", "UP", "ENTER",
#      "RIGHT", "DOWN", "DOWN", "ENTER"
#      "LEFT", "UP", "ENTER"]

# 3 inputs: word, width, start_at = 'A'



LETTERS = 'A'..'Z'
E = "ENTER"
L = "LEFT"
R = "RIGHT"
U = "UP"
D = "DOWN"

def find_word(word, width, start_at = 'A')
  keyboard = build_k(width)
  word_letters = word.split('')
  c = keyboard[start_at]
  output = []
  word_letters.each do |l|
    next_c = keyboard[l]
    x = next_c[0] - c[0]
    y = next_c[1] - c[1]
    if x > 0
      output += [R] * x
    elsif x < 0
      output += [L] * (-1 * x)  
    end
    
    if y > 0
      output += [D] * y
    elsif y < 0
      output += [U] * (-1 * y)
    end    
    output << E
    c = next_c
  end
  output
end

def build_k(width)
  res = {}
  
  x = 0
  y = 0
  LETTERS.each do |l|
    res[l] = [x, y]
    x += 1
    if x == width
      x = 0
      y += 1
    end
  end
  res
end

# puts build_k(6).inspect
puts find_word('ANYPERK', 6).inspect
