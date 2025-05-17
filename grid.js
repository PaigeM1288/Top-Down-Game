class Grid{
    #cells;
    #cellSize;

    constructor(cellSize){
        this.#cellSize = cellSize;
        this.#createEmptyGrid();
    }

    #createEmptyGrid(){
        const numRows = Math.ceil(height/this.#cellSize);
        const numCols = Math.ceil(width/this.#cellSize);
        this.#cells = [];
        for(let row = 0; row<numRows; row++){
            this.#cells[row] = [];
        }
    }
}