"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// accessible to any
app.use((0, cors_1.default)());
// Body Parser middleware to handle raw JSON files
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});
// routes
app.use('/api/users', require('./routes/users/app'));
// when invalid routes are entered
app.use((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(404).send(`Route is no where to be found.`);
}));
exports.default = app;
