import { IViewer, Point } from "./types";

export class Square {

    private _point: Point = {
        x: 0,
        y: 0
    }
    private _color: string = ""

    // 属性：显示者

    private _viewer?: IViewer

    public get viewer() {
        return this._viewer
    }
    public set viewer(v) {
        this._viewer = v
    }
    public get point() {
        return this._point
    }
    public set point(value) {
        this._point = value
        if (this._viewer) {
            this._viewer.show()
        }
    }
    public get color() {
        return this._color
    }
    public set color(value) {
        this._color = value
    }
}