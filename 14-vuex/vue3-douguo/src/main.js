import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')



import 'vant/lib/index.css';
import { Button } from 'vant';
app.use(Button);

import { Swipe, SwipeItem } from 'vant';
app.use(Swipe);
app.use(SwipeItem);

import { Image as VanImage } from 'vant';
app.use(VanImage);

import { List } from 'vant';
app.use(List);