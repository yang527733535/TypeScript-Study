import { Square } from "./core/Square";
import { IViewer } from "./core/types";


// 用这个类来实现 
class SquareConsoleViewer implements IViewer {

    constructor(private square: Square) {

    }

    show(): void {
        console.log(this.square.point, this.square.color)
    }
    remove(): void {
    }
}

const sq = new Square()
sq.viewer = new SquareConsoleViewer(sq)
sq.viewer.show()
sq.point = {
    x: 1,
    y: 2
}

sq.point = {
    x: 3,
    y: 4
}

