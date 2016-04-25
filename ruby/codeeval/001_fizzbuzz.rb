def fizzbuzz(line)
    v_X, v_Y, v_N = line.chomp.split(" ").map{ |i| i.to_i }
    return if v_X.nil? || !(1..20).include?(v_X)
    return if v_Y.nil? || !(1..20).include?(v_Y)
    return if v_N.nil? || !(21..100).include?(v_N)
    results = []
    (1..v_N).each do |n|
        if n % v_X == 0 and n % v_Y == 0
          results.push("FB")
        elsif n % v_X == 0
          results.push("F")
        elsif n % v_Y == 0
          results.push("B")
        else
          results.push(n)
        end
    end
    puts results.join(" ")
    0
end

File.open(ARGV[0]).each_line do |line|
  fizzbuzz(line)
end