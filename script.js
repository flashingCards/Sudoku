
var numSelected = null;
var tileSelected = null;

// numbers of error
var errors = 0;

// already made empty matrix 
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

// solution of the matrix
var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame() {

    // digits 1 to 9
    for (let i = 1; i <= 9; i++) {
        // <div id="1" class="number"> 1 </div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;

        number.addEventListener("click", selectNumber);

        number.classList.add("number");

        document.getElementById("digits").appendChild(number);
    }

    // doing same for the board
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            
            // this removes the - from the made matrix
            if (board[r][c] != '-') {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            
            tile.addEventListener("click", selectTile);

            // adds a new class to the starting numbers to be different
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

// a functon to select the number form the numbers we want to put on the board
function selectNumber() {

    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    
    numSelected = this;
    numSelected.classList.add("number-selected");
}

// select the tile we want to put the number on
function selectTile() {
    
    if (numSelected) {

        if (this.innerText != "") {
            return;
        }
        this.innerText = numSelected.id;
    }
}