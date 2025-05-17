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

    addToGrid(obstacle){
        const rightEdge = obstacle.getX() + obstacle.getWidth();
        const bottomEdge = obstacle.getY() + obstacle.getHeight();
        for(let x = obstacle.getX(); x < rightEdge; x += this.#cellSize){
            const col = this.#getIndex(x);
            for(let y = obstacle.getY(); y < bottomEdge; y += this.#cells){
                const row = this.#getIndex(y);
                this.#cells[row][col] = obstacle
            }
        }
    }

    /**
     * convert the x or y coordinate into array index
     * @param {number} coord x or y coordinate
     * @returns {number} the index of the row or col with the coordinate
     */
    #getIndex(coord){
        return Math.floor(coord/this.#cellSize);
    }

    isOccupied(x, y){
        //if coordinate is out of bounds, returns true
        if(x < 0 || x >= width || y < 0 || y >= height){
            return true;
        }
        //returns content of the cell
        const row = this.#getIndex(y);
        const col = this.#getIndex(x);
        if(this.#cells[row][col] instanceof Treasure || this.#cells[row][col] instanceof Cutter){
            return false;
        } else if(this.#cells[row][col] instanceof StationaryObject){
            return true;
        }
    }
}