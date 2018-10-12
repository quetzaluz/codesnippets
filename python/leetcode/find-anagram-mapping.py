def anagram_mapping(self, A, B):
    """
    :type A: List[int]
    :type B: List[int]
    :rtype: List[int]
    """
    idx_map = {}
    for i in range(len(B)):
        if B[i] in idx_map:
            idx_map[B[i]].append(i)
        else:
            idx_map[B[i]] = [i]
    for i in range(len(A)):
        A[i] = idx_map[A[i]].pop()
    return A
