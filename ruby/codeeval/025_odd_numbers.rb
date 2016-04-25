# def odds
#     (1..100).each do |i|
#         puts i if i % 2 == 1
#     end
# end
# odds

def odds
    last = []
    (1..50).each do |i|
        if i % 2 == 1
          puts i
          last.unshift 100 - i
        end
    end
    puts last.join("\n")
end
odds