def solution(x, y):
    x = int(x,10)
    y = int(y,10)
    generations = 0
    while(x > 1 or y > 1):
        if(x%2== 0 and y % 2 == 0) or x < 1 or y < 1:
            return "impossible"
        if(x > y):
            print(x)
            generations += x/y
            x %= y
        else:
            generations += y/x
            y %= x
        if(y == 0 or x == 0):
            generations -= 1
    print(str(generations))
    return str(generations)



            
## Test cases
solution("4","7")
solution("2","1")
solution("2", "4")