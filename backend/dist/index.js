"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getNextMove_1 = __importDefault(require("./getNextMove"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.listen(PORT, () => {
    console.log("here!!");
    (0, getNextMove_1.default)("----------", "X");
    // console.log(`Server listening on ${PORT}`, getNextMove("----------", "O"));
});
