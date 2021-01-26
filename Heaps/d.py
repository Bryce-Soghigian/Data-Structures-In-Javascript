import heapq
from collections import defaultdict
def shortestPath(graph,src,dest):
    h = []
    heapq.heappush(h,(0,src))

graph = defaultdict(list)
v,e = map(int,input.split())
for i in range(e):
    u,v,w = map(str,input.split())
    graph[u].append(v,int(w))
src,dest = map(str,input().split())
shortestPath(graph,src,dest)