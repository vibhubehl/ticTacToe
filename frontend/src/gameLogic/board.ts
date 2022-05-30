import {boardType, ROW_VALUE, COLUMN_VALUE, GameStatus, PanelType} from "../DTO/boardType";

export function convertBoardToString(board: any) {
    var boardString: string = "";
    for (var i = 0; i < ROW_VALUE * COLUMN_VALUE; i++) {
        boardString = boardString + board[i];
    }
    return boardString;
}

export function getIndexValue(row: number, column: number) {
    return row * ROW_VALUE + column;
}

export function getGameStatus(board: any): GameStatus {
    var boardString: string = "";

    var crossString: string = "";
    var zeroString: string = "";

    // check for combination in row
    for (var i = 0; i < ROW_VALUE ; i++) {
        var crossStatus: Boolean = true;
        var zeroStatus: Boolean = true;

        for (var j = 0; j < COLUMN_VALUE; j++) {
            if(board[getIndexValue(i, j)] !== PanelType.cross) {
                crossStatus = false;
            }
            if(board[getIndexValue(i, j)] !== PanelType.zero) {
                zeroStatus = false;
            }
        }
        if(crossStatus) {
            return GameStatus.crossWon;
        }
        if(zeroStatus) {
            return GameStatus.zeroWon;
        }
    }

    // check for columns
    for (var j = 0; j < COLUMN_VALUE; j++) {
        var crossStatus: Boolean = true;
        var zeroStatus: Boolean = true;

        for (var i = 0; i < ROW_VALUE ; i++) {
            if(board[getIndexValue(i, j)] !== PanelType.cross) {
                crossStatus = false;
            }
            if(board[getIndexValue(i, j)] !== PanelType.zero) {
                zeroStatus = false;
            }
        }
        if(crossStatus) {
            return GameStatus.crossWon;
        }
        if(zeroStatus) {
            return GameStatus.zeroWon;
        }
    }

    var crossStatus: Boolean = true;
    var zeroStatus: Boolean = true;
    
    // check first diagnol
    for (var i = 0; i < ROW_VALUE; i++) {
        
        if(board[getIndexValue(i, i)] !== PanelType.cross) {
            crossStatus = false;
        }
        if(board[getIndexValue(i, i)] !== PanelType.zero) {
            zeroStatus = false;
        }
    }

    if(crossStatus) {
        return GameStatus.crossWon;
    }
    if(zeroStatus) {
        return GameStatus.zeroWon;
    }


    var crossStatus: Boolean = true;
    var zeroStatus: Boolean = true;
    
    // check second diagnol
    for (var i = 0, j = ROW_VALUE - 1; i < ROW_VALUE; i++, j--) {
        
        if(board[getIndexValue(i, j)] !== PanelType.cross) {
            crossStatus = false;
        }
        if(board[getIndexValue(i, j)] !== PanelType.zero) {
            zeroStatus = false;
        }
    }

    if(crossStatus) {
        return GameStatus.crossWon;
    }
    if(zeroStatus) {
        return GameStatus.zeroWon;
    }

    if (PanelType.empty in board){
        return GameStatus.inProgress;
    }

    return GameStatus.tie;
}