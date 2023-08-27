import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Button from "./components/UI/Button.vue";
import Modal from "./components/UI/Modal.vue";
import { Input } from "postcss";

const app = createApp(App)

app.component(Button.name, Button)
  .component(Input.name, Input).component(Modal.name, Modal)


app.mount('#app')
