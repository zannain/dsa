/*
Time complexity
For each node there are a maximum of 2 children. The height of the tree is n. The number of nodes is 2^n-1 or O(2^n), (see the "perfect binary tree" section of Everything about trees for a quick review). It takes O(n) to join the n characters at each leaf node. So the overall time complexity is O(2^n*n).

Space complexity
We store 2^n strings in total, each with a length of n so this gives us O(2^n*n) space. In addition, our recursion depth is O(n). Adding the two together, we still get a space complexity of O(2^n*n).
*/
function dfs(n, res, startIndex, path) {
  if (startIndex == n) {
    res.push(path.join(""));
    return;
  }
  ["a", "b"].forEach((letter) => {
    path.push(letter);
    dfs(n, res, startIndex + 1, path);
    path.pop();
  });
}

function letterCombination(n) {
  var res = [];
  dfs(n, res, 0, []);
  return res;
}

const result = letterCombination(4);

console.log(result);

/* eslint-disable no-restricted-syntax */
/*
############
COMBINATORIAL SEARCH
############


Template

        function dfs(start_index, path):
        if is_leaf(start_index):
            report(path)
            return
        for edge in get_edges(start_index):
            path.add(edge)
            dfs(start_index + 1, path)
            path.pop()

*/
export default function dfs(root, path, res) {
  // exit condition, reached leaf node, append paths to results
  if (root.children.length === 0) {
    path.push(root.val);
    const currentPath = path.join("->");
    res.push(currentPath);
    path.pop();
    return;
  }
  // dfs on each non-null child
  for (const child of root.children) {
    if (child) {
      path.push(root.val);
      dfs(child, path, res);
      path.pop();
    }
  }
}

export function ternaryTreePaths(root) {
  const res = [];
  if (root) dfs(root, [], res);
  return res;
}

export function letterCombination(n) {
  function letterDFS(m, res, startIndex, path) {
    if (startIndex === m) {
      res.push(path.join(""));
      return res;
    }
    ["a", "b"].forEach((letter) => {
      path.push(letter);
      letterDFS(m, res, startIndex + 1, path);
      path.pop();
    });
    return res;
  }
  const result = [];
  letterDFS(n, result, 0, []);
  return result;
}

const KEYBOARD = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

export function letterCombinationsOfPhoneNumber(digits) {
  function numberCombinationDFS(startIndex, path, res, numbers) {
    if (startIndex === numbers.length) {
      res.push(path.join(""));
      return;
    }
    const nextNumber = numbers.charAt(path.length);
    for (const letter of KEYBOARD[nextNumber]) {
      path.push(letter);
      numberCombinationDFS(startIndex + 1, path, res, numbers);
      path.pop();
    }
  }
  const res = [];
  numberCombinationDFS(0, [], res, digits);
  return res;
}

/*
############
PRUNING
############

Template

        function dfs(start_index, path):
        if is_leaf(start_index):
        report(path)
        return
        for edge in get_edges(start_index):
        # prune if needed
        if not is_valid(edge):
            continue
        path.add(edge)
        # increment start_index
        dfs(start_index + len(edge), path)
        path.pop()
*/

export function partition(s) {
  function isPalindrome(currentPath, newChar) {
    const newWord = currentPath.push(newChar).join("");
    const reversed = newWord.reverse().join("");
    return newWord === reversed;
  }

  function prune(str, res, path, startingIndex) {
    if (startingIndex === str.length) {
      res.push(path.join(""));
      return;
    }
    str.split("").forEach((char) => {
      if (isPalindrome(path, char)) {
        path.push(char);
        dfs(str, res, startingIndex + 1, path);
        path.pop();
      }
    });
  }

  const res = [];
  prune(s, res, [], 0);
  return res;
}

/*
############
ADDITIONAL STATES
############

Template

        function dfs(startIndex, path, res, [...additional states]) {
            if (isLeaf(path)) {
                res.push(new Array(path));
                return;
            }
            for (const edge of getEdges(startIndex, [...additional states])) {
                path.push(choice);
                if (...additional states) update(...additional states)
                dfs(startIndex + edge.length, path, res, [...addtional states]);
                path.pop();
                // revert(...additional states) if necessary, e.g. permutations
            }
        }
*/

export function generateParentheses(n) {
  function parenDFS(startIndex, path, openCount, closeCount, res) {
    if (startIndex === 2 * n) {
      // make a deep copy since otherwise we'd be append the same list over and over
      res.push(path.join(""));
      return;
    }
    if (openCount < n) {
      path.push("(");
      parenDFS(startIndex + 1, path, openCount + 1, closeCount, res);
      path.pop();
    }
    if (closeCount < openCount) {
      path.push(")");
      parenDFS(startIndex + 1, path, openCount, closeCount + 1, res);
      path.pop();
    }
  }

  const res = [];
  parenDFS(0, [], 0, 0, res);
  return res;
}

export function permutations(letters) {
  function permutationDFS(startIndex, path, res, str, used) {
    if (startIndex === str.length) {
      res.push(path.join(""));
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (used[i]) {
        continue;
      }

      used[i] = true;
      path.push(str[i]);
      permutationDFS(startIndex + 1, path, res, str, used);
      used[i] = false;
      path.pop();
    }
  }
  const res = [];
  permutationDFS(0, [], res, letters, new Array(letters.length).fill(false));
  return res;
}

export function combinationSum(candidates, target) {
  function combinationSumDFS(nums, start, remaining, path) {
    if (remaining == 0) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      const num = nums[i];
      if (remaining - num < 0) continue;
      path.push(num);
      combinationSumDFS(nums, i, remaining - num, path);
      path.pop();
    }
  }
  candidates.sort();
  const res = [];
  combinationSumDFS(candidates, 0, target, []);
  return res;
}

export function subsets(nums) {
  const res = [];
  function subsetDFS(i, cur) {
    if (i == nums.length) {
      res.push([...cur]);
      return;
    }
    cur.push(nums[i]);
    subsetDFS(i + 1, cur);
    cur.pop();

    subsetDFS(i + 1, cur);
  }
  subsetDFS(0, []);
  return res;
}
