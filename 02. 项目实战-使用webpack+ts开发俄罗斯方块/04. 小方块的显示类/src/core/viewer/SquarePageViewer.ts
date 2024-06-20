import { Square } from "../Square";
import $ from "jquery"
import { IViewer } from "../types";
import PageConfig from "./PageConfig";



export class SquarePageViewer implements IViewer {

    constructor(private square: Square, private container: JQuery<HTMLElement>) {
    }

    private dom?: JQuery<HTMLElement>
    private isRemove: boolean = false
    show(): void {
        if (this.isRemove) {
            return
        }
        if (!this.dom) {
            this.dom = $('<div>').css({
                position: "absolute",
                width: PageConfig.SquareSize.width,
                height: PageConfig.SquareSize.height,
                border: "1px solid #ccc",
                boxSizing: "border-box"
            }).appendTo(this.container)
        } else {
            this.dom.css({
                left: this.square.point.x * PageConfig.SquareSize.width,
                top: this.square.point.y * PageConfig.SquareSize.height,
                background: this.square.color
            })
            console.log('节点存在')
        }
    }
    remove(): void {
        if (this.dom && !this.remove) {
            this.dom.remove()
            this.isRemove = true
        }
    }

}