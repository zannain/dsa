/* eslint-disable no-restricted-syntax */
import {get4Neighbors} from "./matrix.js";

/*
  Time Complexity: O(V + E)
    V: number of vertices
    E: number of edges which can range from O(1) to O(V^2)

   When to use BFS:
    1. Shortest distance between vertices
    2. Graph of unknown size
*/
function bfs(root) {
  const queue = [root];
  const visited = new Set([root]);
  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of get4Neighbors(node)) {
      if (visited.has(neighbor)) continue;
      // Do stuff with the node if required
      // ...
      queue.push(neighbor);
      visited.add(neighbor);
    }
  }
}

// Tracking levels / finding distance

function levelsBFS(root) {
  const queue = [root];
  const visited = new Set([root]);
  let level = 0;
  while (queue.length > 0) {
    const n = queue.length; // get # of nodes in the current level
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      for (const neighbor of get_neighbors(node)) {
        if (visited.has(neighbor)) continue;
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
    // increment level after we have processed all nodes of the level
    level++;
  }
}

/*
Given an (unweighted) connected graph, return the length of the shortest path between two nodes A and B, in terms of the number of edges.

Assume there always exists a path between nodes A and B.

Input:

graph = [[1, 2], [0, 2, 3], [0, 1], [1]]
A = 0
B = 3
*/

export function shortestPath(graph, a, b) {
  function getNeighbors(node) {
    return graph[node];
  }
  const queue = [a];
  const visited = new Set(queue);
  let level = 0;
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      if (node === b) {
        return level;
      }
      for (const neighbor of getNeighbors(node)) {
        if (visited.has(neighbor)) continue;
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
    level += 1;
  }
}

// Flood Fill

function floodFill(r, c, replacement, image) {
  const numRows = image.length;
  const numCols = image[0].length;
  function getNeighbors(node, color) {
    const row = node[0];
    const column = node[1];
    const deltaRow = [-1, 0, 1, 0];
    const deltaColumn = [0, 1, 0, -1];
    const neighbors = [];
    for (let i = 0; i < deltaRow.length; i++) {
      const neighborRow = row + deltaRow[i];
      const neighborCol = column + deltaColumn[i];

      if (
        neighborRow >= 0 &&
        neighborRow < numRows &&
        neighborCol >= 0 &&
        neighborCol < numCols
      ) {
        if (image[neighborRow][neighborCol] === color) {
          neighbors.push([neighborRow, neighborCol]);
        }
      }
    }
    return neighbors;
  }

  function bfs(coord) {
    const queue = [coord];
    const visited = Array.from({ length: numRows }, (v, i) =>
      Array(numCols).fill(false),
    );
    const r = coord[0];
    const c = coord[1];
    const color = image[r][c];
    image[r][c] = replacement;
    while (queue.length > 0) {
      const node = queue.shift();
      for (const [row, col] of getNeighbors(node, color)) {
        if (visited[row][col]) {
          continue;
        }

        image[row][col] = replacement;
        queue.push([row, col]);
        visited[row][col] = true;
      }
    }
  }

  bfs([r, c]);
  return image;
}

function getKnightShortestPath(x, y) {
  function bfs(start) {
    const visited = new Set();
    let steps = 0;
    const queue = [start];
    while (queue.length > 0) {
      const n = queue.length;
      for (let i = 0; i < n; i++) {
        const node = queue.shift();
        if (node[0] == y && node[1] == x) return steps;
        for (const neighbor of get_neighbors(node)) {
          const neighbor_str = neighbor.join(",");
          if (visited.has(neighbor_str)) continue;
          queue.push(neighbor);
          visited.add(neighbor_str);
        }
      }
      steps++;
    }
    return steps;
  }

  function get_neighbors(coord) {
    const res = [];
    const [row, col] = coord;
    const delta_row = [-2, -2, -1, 1, 2, 2, 1, -1];
    const delta_col = [-1, 1, 2, 2, 1, -1, -2, -2];
    for (let i = 0; i < delta_row.length; i++) {
      const r = row + delta_row[i];
      const c = col + delta_col[i];
      res.push([r, c]);
    }
    return res;
  }

  return bfs([0, 0]);
}

/*
You are given an m by n grid of integers representing a map of a dungeon. In this map:

-1 represents a wall or an obstacle of some kind.
0 represents a gate out of the dungeon.
INF represents empty space.
For this question, let INF be 2^31 - 1 == 2147483647, which is the max value of the integer type in many programming languages.

Venturing into the dungeon is very dangerous, so you would like to know how close you are at each point in the dungeon to the closest exit. Given the map of the dungeon, return the same map, but for each empty space, that space is replaced by the number of steps it takes to reach the closest exit. If a space cannot reach the exit, that space remains INF.

Note that each step, you can move horizontally or vertically, but you cannot move pass a wall or an obstacle.


*/
const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const INF = 2147483647;

function mapGateDistances(dungeonMap) {
  const m = dungeonMap.length;
  const n = dungeonMap[0].length;
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dungeonMap[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const [cRow, cCol] = queue.shift();
    for (const [deltaRow, deltaCol] of DIRECTIONS) {
      const nRow = cRow + deltaRow;
      const nCell = cCol + deltaCol;

      if (nCell >= 0 && nCell < n && nRow >= 0 && nRow < m) {
        if (dungeonMap[nRow][nCell] === INF) {
          dungeonMap[nRow][nCell] = dungeonMap[cRow][cCol] + 1;
          queue.push([nRow, nCell]);
        }
      }
    }
  }
  return dungeonMap;
}

/*
You are faced with a 4-wheel lock where each wheel contains the numbers '0' through '9'. Turning a wheel can either increase or decrease its number by one, wrapping around from '9' to '0' or vice versa. A single move involves rotating any one of the wheels by one slot.

The lock starts with the combination '0000'. However, there are specific combinations termed as "deadends". If the lock lands on any of these deadend combinations, the wheels jam, making it impossible to proceed.

Your task is to determine the least number of moves needed to reach a given target combination from the starting point without hitting any deadend. If reaching the target is impossible due to deadends, return -1.

Input
target_combo: a string representing the four digit combination to open the lock.
trapped_combos: a list of strings representing the trapped combinations.
Output
An integer representing the number of steps it takes to open the lock, or -1 if you can't open it without triggering the trap.

Examples
Example 1:
Input:

target_combo = "0202"
trapped_combos = ["0201","0101","0102","1212","2002"]
Output: 6
*/
const nextDigit = new Map();
for (let i = 0; i < 10; i++) {
    let val = (i + 1) % 10;
    nextDigit.set(i.toString(), val.toString());
}
const prevDigit = new Map();
for (let [key, val] of nextDigit.entries()) {
    prevDigit.set(val, key);
}

function numSteps(targetCombo, trappedCombos) {
    if (targetCombo === "0000") return 0;
    const trappedComboSet = new Set([...trappedCombos]);
    const steps = new Map();
    steps.set("0000", 0);
    const bfsQueue = [];
    bfsQueue.push("0000");
    while (bfsQueue.length > 0) {
        let top = bfsQueue.shift();
        for (let i = 0; i < 4; i++) {
            let newCombo = top.slice(0, i) + nextDigit.get(top.charAt(i)) + top.slice(i + 1);
            if (!trappedComboSet.has(newCombo) && !steps.has(newCombo)) {
                bfsQueue.push(newCombo);
                steps.set(newCombo, steps.get(top) + 1);
                if (newCombo === targetCombo) return steps.get(newCombo);
            }
            newCombo = top.slice(0, i) + prevDigit.get(top.charAt(i)) + top.slice(i + 1);

            if (!trappedComboSet.has(newCombo) && !steps.has(newCombo)) {
                bfsQueue.push(newCombo);
                steps.set(newCombo, steps.get(top) + 1);
                if (newCombo === targetCombo) return steps.get(newCombo);
            }
        }
    }
    return -1;
}

// Word Ladder

const alphabet = "abcdefghijklmnopqrstuvwxyz";
function getNeighbor(word, unvisitedWords) {
     const unvisitedNeighbor = [];
    for (let i = 0; i < word.length; i++) {
        for (const letter of alphabet) {
             const newWord = word.slice(0,i) + letter + word.slice(i + 1);
            if (unvisitedWords.has(newWord)) {
                 unvisitedNeighbor.push(newWord);
                unvisitedWords.delete(newWord);
            }
        }

    }
    return unvisitedNeighbor;
}
function wordLadder(begin, end, wordList) {
    const unvisitedWords = new Set(wordList);
    const queue = [begin];
    unvisitedWords.delete(begin);
    let distance = 0;

    while (queue.length > 0) {
        const n = queue.length;
        distance++
        for (let i = 0; i < n; i++) {
            let word = queue.shift();
            for (const neighbor of getNeighbor(word, unvisitedWords)) {
                if (neighbor === end) { return distance; }
                queue.push(neighbor);
            }

        }

    }
    return -1;
}

const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const target = 123450;  // The serialized value of [[1, 2, 3], [4, 5, 0]]

function serialize(position) {
    let total = 0;
    for (let line of position) {
        for (let entry of line) {
            total *= 10;
            total += entry;
        }
    }
    return total;
}

function deserialize(state) {
    const result = [];
    result.push([]);
    result.push([]);
    for (let i = 1; i >= 0; i--) {
        for (let j = 2; j >= 0; j--) {
            const exponent = i * 3 + j;
            const digit = Math.floor(state / Math.round(Math.pow(10, exponent))) % 10;
            result[1 - i].push(digit);
        }
    }
    return result;
}

function numSteps(initPos) {
    const initState = serialize(initPos);
    if (initState == target) return 0;
    const movesMap = new Map();
    const movesQueue = [];
    movesMap.set(initState, 0);
    movesQueue.push(initState);
    while (movesQueue.length > 0) {
        const topState = movesQueue.shift();
        let row = 0, col = 0;
        const topPosition = deserialize(topState);
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                if (topPosition[i][j] == 0) {
                    row = i;
                    col = j;
                }
            }
        }
        for (let [deltaRow, deltaCol] of directions) {
            const newRow = row + deltaRow;
            const newCol = col + deltaCol;
            if (newRow >= 0 && newRow < 2 && newCol >= 0 && newCol < 3) {
                const newPosition = deserialize(topState);
                newPosition[row][col] = topPosition[newRow][newCol];
                newPosition[newRow][newCol] = topPosition[row][col];
                const newState = serialize(newPosition);
                if (!movesMap.has(newState)) {
                    movesMap.set(newState, movesMap.get(topState) + 1);
                    movesQueue.push(newState);
                    if (newState == target) {
                        return movesMap.get(newState);
                    }
                }
            }
        }
    }
    return -1;
}