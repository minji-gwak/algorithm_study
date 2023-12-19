const findItinerary = (tickets) => {
  const graph = new Map();
  route = [];

  tickets.sort().forEach(([departure, arrival]) => {
    if (!graph[departure]) {
      graph[departure] = [];
    }
    graph[departure].push(arrival);
  });

  const dfs = (start = 'JFK') => {
    while (start in graph && !!graph[start].length) {
      dfs(graph[start].shift());
    }
    route.push(start);
  };
  dfs();
  return route.reverse();
};
