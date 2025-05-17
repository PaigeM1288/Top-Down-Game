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
            this.#cells[row] = []; //add empty row
            for(let col = 0; col < numCols; col++){
                //set each cell in the row to null
                this.#cells[row][col] = null
            }
        }
    }

    /**
     * Adding blocks that will eventually become leaves in a jungle maze
     * @param {StationaryObject} obstacle
     */
}