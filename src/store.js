import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  movies: [],
  tvseries: [],
  start: false,
  adult: false,
});
