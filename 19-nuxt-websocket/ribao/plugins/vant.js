import { defineNuxtPlugin } from "#app";
import {
  Row,
  Col,
  Icon,
  Image as VanImage,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  List,
} from "vant";

// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
import "vant/lib/index.css";
import "normalize.css/normalize.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(Row)
    .use(Col)
    .use(VanImage)
    .use(Icon)
    .use(Cell)
    .use(CellGroup)
    .use(Swipe)
    .use(SwipeItem)
    .use(List);
});
