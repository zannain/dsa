# Time: O(k * C(n, k))
def combination(n, k):
    def backtrack(i, path):
        if len(path) == k:
            res.append(path.copy())
            return
        if i > n:
            return
        for j in range(i, n + 1):
            path.append(j)
            backtrack(j + 1, path)
            path.pop()

    res = []
    backtrack(1, [])
    return res


def combination_sum(candidates, target):
    res = []

    def dfs(i, comb, total):
        if total == target:
            res.append(comb.copy())
            return
        if total > target or i >= len(candidates):
            return

        comb.append(candidates[i])
        dfs(i, comb, total + candidates[i])

        comb.pop()
        dfs(i + 1, comb, total)

    dfs(0, [], 0)
    return res


def combination_sum_iii(k, n):
    res = []

    def backtrack(sum, comb, start):
        if sum == n and len(comb) == k:
            res.append(comb.copy())
            return
        if sum > n:
            return
        for i in range(start, 10):
            sum += i
            comb.append(i)
            backtrack(sum, comb, i + 1)
            comb.pop()
            sum -= 1

    backtrack(0, [], 1)
    return res
