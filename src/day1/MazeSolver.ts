// Directions: X,Y from Left, Right, Down, Up
const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // We can't be outside the maze!
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze[0].length
    ) {
        return false;
    }

    // if its a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // have we reached the end?
    if (curr.x === end.x && curr.y === end.y) {
        console.log(end, "its the end");
        path.push(end);
        return true;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    // pre-recurse
    seen[curr.y][curr.x] = true;
    path.push(curr);

    console.log(path, "after push");

    // recurse
    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            ) === true
        ) {
            return true;
        }
    }

    // post-recurse
    // not valid path, please pop that out
    path.pop();

    console.log(path, "after pop");

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}
