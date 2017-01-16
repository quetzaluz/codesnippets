def ve?(inp)
    return !!(inp =~ /^[A-Z0-9_\-+\.!$&*-=\^`|~#%'+\/?_{}]+@{1}[A-Z0-9_\-\.]+$/i) || !!(inp =~ /^"{1}[A-Z0-9_\-+\.!$&*-=\^`|~#%'+\/?_{}]+@{1}[A-Z0-9_\-\.]+"{1}@{1}[A-Z0-9_\-\.]+$/i)
end
File.open(ARGV[0]).each_line do |line|
    puts(ve?(line))
end
