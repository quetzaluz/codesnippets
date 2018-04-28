class Solution:
    seen = []
    def findEntryIndex(self, domain):
        """
            Lookup helper function for main routine below.
            Camelcase naming scheme due to leetcode prompts
        """
        for i in range(len(self.seen)):
            entry = self.seen[i]
            if entry[1] == domain:
                return i
        return -1


    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
        self.seen = []
        for e in cpdomains:
            spl = e.split(' ')
            val = int(spl[0])
            dom = spl[1]
            while True:
                print(dom)
                exists_index = self.findEntryIndex(dom)
                if exists_index != -1:
                    self.seen[exists_index] = [self.seen[exists_index][0] + val, dom]
                else:
                    self.seen.append([val, dom])
                try:
                    dom = dom[dom.index('.') + 1:]
                except:
                    break
        self.seen = sorted(self.seen, key=lambda x: x[0], reverse=True)
        return [str(x[0]) + ' ' + x[1] for x in self.seen]
