import heapq
from collections import defaultdict
def shortestPath(graph,src,dest):
    h = []
    ## Kep a record of vertices with cost and update 
    heapq.heappush(h,(0,src))

graph = defaultdict(list)
v,e = map(int,input.split())
for i in range(e):
    u,v,w = map(str,input.split())
    graph[u].append(v,int(w))
src,dest = map(str,input().split())
shortestPath(graph,src,dest)