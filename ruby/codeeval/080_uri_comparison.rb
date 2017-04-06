require 'uri'
T = 'True'
F = 'False'
def uc(line)
    s1, s2 = line.strip().split(';')
    return URI.decode(s1).downcase.gsub(':80/', '/') == URI.decode(s2).downcase.gsub(':80/', '/') ? T : F
end

File.open(ARGV[0]).each_line do |line|
    puts(uc(line))
end
