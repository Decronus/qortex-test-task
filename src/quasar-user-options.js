import "quasar/dist/quasar.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import { Notify } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
    plugins: {
        Notify,
    },
    config: {
        notify: {
            position: "top-right",
            timeout: 2500,
            color: "positive",
            textColor: "white",
            actions: [{ icon: "close", color: "white" }],
        },
    },
};
