# Mazerunner visualisation
Bot with the ability to see only cells to its right, left, top and bottom. It traverses the maze with the goal to reach a certain destination cell (indicated with red).

## [Demo link](http://mazerunner.surge.sh/)

## Color coding:
### Objects:
- Blue - bot
- Black - wall
- Red - goal
### Bot memory
- Yellow - unvisited
- Green - visited
- Orange - visited dead end

## Algorithm:
1. Bot visits the closest unvisited cell.
2. For each unvisited cell that bot stores a backtracking path to that cell (for each bot step — append the step in opposite direction to all paths).
3. Simplify backtracking paths by removing redundant steps.

### Removing path redundancy:
Bot directions are encoded like this:
- 0 - up
- 1 - right
- 2 - down
- 3 - left

Opposite steps right next to each other can be deleted, since going right and left would bring the bot to the starting cell.

Another case of redundancy is when bot moves in direction X then Y then opposite of X. E.g.: 012. Which can be visualized like this:

```
 ←
↓
 →
```
This case can be simplified to a single move Y. So, for the case illustrated above the result would look like this:

```
 ↓
```