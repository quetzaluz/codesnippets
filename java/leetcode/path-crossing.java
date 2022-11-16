class Solution {
    Set<Pair<Integer, Integer>> seenCoords = new HashSet();
    Pair<Integer, Integer> thisCoord = new Pair(0, 0);
    public boolean isPathCrossing(String path) {
        seenCoords.add(thisCoord);
        for (int i = 0; i < path.length(); i++) {
            boolean hasCrossed = travel(path.charAt(i));
            if (hasCrossed) {
                return true;
            }
        }
        return false;
    }
    
    // Helper function which returns true if we try to visit
    // a path we already have visited, else false.
    private boolean travel(Character direction) {
        Pair<Integer, Integer> newCoord;
        if (direction == 'N') {
            newCoord = new Pair<>(thisCoord.getKey(), thisCoord.getValue() - 1);
        } else if (direction == 'E') {
            newCoord = new Pair<>(thisCoord.getKey() + 1, thisCoord.getValue());
        } else if (direction == 'S') {
            newCoord = new Pair<>(thisCoord.getKey(), thisCoord.getValue() + 1);
        } else { // direction == 'W'
            newCoord = new Pair<>(thisCoord.getKey() - 1, thisCoord.getValue());
        }
        if (seenCoords.contains(newCoord)) {
            return true;
        }
        thisCoord = newCoord;
        seenCoords.add(newCoord);
        return false;
    }
}
