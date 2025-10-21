import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    TOGGLE_TODO(state, index) {
      state.todos[index].completed = !state.todos[index].completed
    },
    DELETE_TODO(state, index) {
      state.todos.splice(index, 1)
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    toggleTodo({ commit }, index) {
      commit('TOGGLE_TODO', index)
    },
    deleteTodo({ commit }, index) {
      commit('DELETE_TODO', index)
    }
  },
  getters: {
    totalTodos: state => state.todos.length,
    completedTodos: state => state.todos.filter(t => t.completed).length,
    pendingTodos: state => state.todos.filter(t => !t.completed).length
  }
})
