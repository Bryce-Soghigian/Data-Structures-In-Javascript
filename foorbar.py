def solution(s):
    # So this is a pretty easy problem to solve
    # we just loop through the string
    # We start of the left. For every > we meet we want 
    # to look at all of our characters to the right of our string and every 
    # < we find on the right we increment our count
    numOfSalutes = 0
    for i in range(len(s)):
        char = s[i]
        if char == ">":
            for j in range(i,len(s)):
                if s[j] == "<":
                    numOfSalutes += 2
    return numOfSalutes
        
print(solution(">-----<"))
        
solution("<<>><")