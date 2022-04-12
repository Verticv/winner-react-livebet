import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./App.css";

import BetPage from "pages/BetPage";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <BetPage />
        </DndProvider>
    );
}

export default App;
