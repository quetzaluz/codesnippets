class Fibonacci
  def initialize(in_memory = {"N0" => 0, "N1" => 1 })
    @in_memory = in_memory
  end

  def calculate(input)
    num = input.to_i
    return puts @in_memory["N#{num}"] unless @in_memory["N#{num}"].nil?
    sum = 0
    if num >= 2
      (2..num).each do |i|
        @in_memory["N#{i}"] = @in_memory["N#{i- 1}"] + @in_memory["N#{i - 2}"]
      end
    end
    puts @in_memory["N#{num}"]
    0
  end
end

f = Fibonacci.new

File.open(ARGV[0]).each_line do |line|
f.calculate(line)
end
