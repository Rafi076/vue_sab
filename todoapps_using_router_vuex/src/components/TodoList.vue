<template>
  <div class="todo-list">
    <h2>Task List</h2>
    <hr />

    <el-table :data="todos" border style="width: 100%">
  <el-table-column prop="text" label="Task" width="300"></el-table-column>
  <el-table-column prop="day" label="Complete By (Day)" width="150"></el-table-column>
  <el-table-column label="Actions">
    <template slot-scope="scope">
      <!-- Show Done button when not completed -->
      <el-button v-if="!scope.row.completed" type="success" size="mini" @click="toggle(scope.$index)">Done</el-button>

      <!-- Show UnDone button when completed -->
      <el-button v-else type="warning" size="mini" @click="toggle(scope.$index)">In Progress</el-button>

      <!-- Delete button -->
      <el-button type="danger" size="mini" @click="remove(scope.$index)">Delete </el-button>
    </template>
  </el-table-column>
</el-table>


    <hr />

    <h3>Summary</h3>
    <p>Total: {{ total }}</p>
    <p>Completed: {{ completed }}</p>
    <p>Pending: {{ pending }}</p>

    <el-button type="primary" @click="$router.push('/')">Add More</el-button>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos
    },
    total() {
      return this.$store.getters.totalTodos
    },
    completed() {
      return this.$store.getters.completedTodos
    },
    pending() {
      return this.$store.getters.pendingTodos
    }
  },
  methods: {
    toggle(index) {
      this.$store.dispatch('toggleTodo', index)
    },
    remove(index) {
      this.$store.dispatch('deleteTodo', index)
    }
  }
}
</script>

<style>
.todo-list {
  margin-top: 40px;
  max-width: 60%;
  margin: 5% auto;
  text-align: center;
  background: white;
  border-radius: 50%;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: aliceblue;
}
</style>
