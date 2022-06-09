// each element of arr will contain a obj {val, des:[]}
function findPathIfExists(n, edges, source, destination) {
  const arr = [];
  for (let i = 0; i < edges.length; i++) {
    if (arr[edges[i][0]]) {
      arr[edges[i][0]].des.push(edges[i][1]);
    } else arr[edges[i][0]] = { val: edges[i][0], des: [edges[i][1]] };
    if (arr[edges[i][1]]) {
      arr[edges[i][1]].des.push(edges[i][0]);
    } else arr[edges[i][1]] = { val: edges[i][1], des: [edges[i][0]] };
  }
}

console.log(
  findPathIfExists(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
