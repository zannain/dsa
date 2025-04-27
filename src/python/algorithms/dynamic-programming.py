# Given two strings s1 and s2, find the length of the longest common subsequence between the two strings.

# Brute Force

# Time: O(2^(n + m)), Space: O(n + m)
def dfs(s1, s2):
  return dfsHelper(s1, s2, 0, 0)

def dfsHelper(s1, s2, i1, i2):
  if i1 == len(s1) or i2 == len(s2):
    return 0

  if s1[i1] == s2[i2]:
    return 1 + dfsHelper(s1, s2, i1 + 1, i2 + 1)
  else:
    return max(dfsHelper(s1, s2, i1 + 1, i2), dfsHelper(s1, s2, i1, i2 + 1))


# Memoization

# Time: O(n * m), Space: O(n + m)
def memoization(s1, s2):
  N, M = len(s1), len(s2)
  cache = [[-1] * M for _ in range(N)]
  return memoHelper(s1, s2, 0, 0, cache)

def memoHelper(s1, s2, i1, i2, cache):
  if i1 == len(s1) or i2 == len(s2):
    return 0
  if cache[i1][i2] != -1:
    return cache[i1][i2]

  if s1[i1] == s2[i2]:
    cache[i1][i2] = 1 + memoHelper(s1, s2, i1 + 1, i2 + 1, cache)
  else:
    cache[i1][i2] = max(memoHelper(s1, s2, i1 + 1, i2, cache), memoHelper(s1, s2, i1, i2 + 1, cache))

  return cache[i1][i2]


# Time: O(n * m), Space: O(n + m)
def dp(s1, s2):
  N, M = len(s1), len(s2)
  dp = [[0] * (M + 1) for _ in range(N + 1)]

  for i in range(N):
    for j in range(M):
      if s1[i] == s2[j]:
        dp[i + 1][j + 1] = 1 + dp[i][j]
      else:
        dp[i + 1][j + 1] = max(dp[i + 1][j], dp[i][j+1])
  return dp[N][M]

# Time: O(n * m), Space: O(m)
def optimizedDp(s1, s2):
    N, M = len(s1), len(s2)
    dp = [0] * (M + 1)

    for i in range(N):
        curRow = [0] * (M + 1)
        for j in range(M):
            if s1[i] == s2[j]:
                curRow[j+1] = 1 + dp[j]
            else:
                curRow[j+1] = max(dp[j + 1], curRow[j])
        dp = curRow
    return dp[M]



def longestCommonSubsequence(text1: str, text2: str) -> int:
        # If text1 doesn't reference the shortest string, swap them.
        if len(text2) < len(text1):
            text1, text2 = text2, text1
        N, M = len(text1), len(text2)
        # The previous column starts with all 0's and like before is 1
        # more than the length of the first word.
        previous = [0] * (N + 1)

        # Iterate up each column, starting from the last one.
        for col in reversed(range(M)):
            # Create a new array to represent the current column.
            current = [0] * (N + 1)
            for row in reversed(range(N)):
                if text2[col] == text1[row]:
                    current[row] = 1 + previous[row + 1]
                else:
                    current[row] = max(previous[row], current[row + 1])
            # The current column becomes the previous one.
            previous = current

        # The original problem's answer is in previous[0]. Return it.
        return previous[0]



# 0/1 Knapsack

# Q: Given a list of N items, and a backpack with a limited capacity, return the maximum total profit that can be contained in the backpack. The i-th item's profit is profit[i] and its weight is weight[i]. Assume you can only add each item to the bag at most once.

# Brute Force
# Time O(2^n)
# Space O(n)
# Where n is the number of items
def dfs(profit, weight, capacity):
  return dfsHelper(0, profit, weight, capacity)


def dfsHelper(i, profit, weight, capacity):
  if i == len(profit):
    return 0

  maxProfit = dfsHelper(i + 1, profit, weight, capacity)

  newCap = capacity - weight[i]
  if newCap >= 0:
    p = profit[i] + dfsHelper(i + 1, profit, weight, newCap)
    maxProfit = max(maxProfit, p)
  return maxProfit


# Memoization Solution
# Time: O(n * m), Space: O(n * m)
# Where n is the number of items & m is the capacity.
def memoization(profit, weight, capacity):
    # A 2d array, with N rows and M + 1 columns, init with -1's
    N, M = len(profit), capacity
    cache = [[-1] * (M + 1) for _ in range(N)]
    return memoHelper(0, profit, weight, capacity, cache)

def memoHelper(i, profit, weight, capacity, cache):
    if i == len(profit):
        return 0
    if cache[i][capacity] != -1:
        return cache[i][capacity]

    # Skip item i
    cache[i][capacity] = memoHelper(i + 1, profit, weight, capacity, cache)

    # Include item i
    newCap = capacity - weight[i]
    if newCap >= 0:
        p = profit[i] + memoHelper(i + 1, profit, weight, newCap, cache)
        # Compute the max
        cache[i][capacity] = max(cache[i][capacity], p)

    return cache[i][capacity]



profit = [4,4,7,1]
weight = [5,2,3,1]
capacity = 8

result = dfs(profit, weight, capacity)
print(result)
