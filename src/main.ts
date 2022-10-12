import "./styles/bootstrap.scss";
import "./styles/global.scss";
import "./styles/app.scss";
import App from "./App.svelte";

const app = new App({
    target: document.getElementById("app"),
});

export default app;