import { createApp } from "vue";
import App from "./App.vue";

// import bootstrap js
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

// * import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faChildReaching } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faStar,
  faChildReaching,
  faArrowRotateLeft,
  faMagnifyingGlass,
  faChevronLeft,
  faChevronRight
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
