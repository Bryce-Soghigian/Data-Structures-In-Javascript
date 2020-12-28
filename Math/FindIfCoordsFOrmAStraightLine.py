class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        
        if len(coordinates) <= 2:
            return True
        
        ydiff, xdiff =  ( coordinates[0][1] - coordinates[1][1] ) , ( coordinates[0][0] - coordinates[1][0] )
        
        for i in range(1,len(coordinates)):
            ydiff_n = coordinates[i-1][1] - coordinates[i][1]
            xdiff_n = coordinates[i-1][0] - coordinates[i][0]
            
            if ydiff * xdiff_n != xdiff * ydiff_n:
                return False
               
        return True