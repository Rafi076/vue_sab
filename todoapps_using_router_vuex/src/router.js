import Vue from 'vue'
import VueRouter from 'vue-router'
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: AddTodo },
  { path: '/list', component: TodoList }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router



