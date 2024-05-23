import React from "react"
import { createRoot } from "react-dom/client"

<p>{"Now I can render any React component on any DOM node I want using ReactDOM.render"}</p>

const app = document.getElementById("root");
const root = createRoot(app);

