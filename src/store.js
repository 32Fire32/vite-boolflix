import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  movies: [],
  tvseries: [],
  flags: [
    "de.png",
    "en.png",
    "esp.png",
    "fr.png",
    "it.png",
    "ja.png",
    "ru.png",
    "us.png",
  ],
});
