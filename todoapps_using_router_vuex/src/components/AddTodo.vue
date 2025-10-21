<template>
  <div class="add-todo">
    <h2>Add a Todo</h2>

    <el-input v-model="task" placeholder="Enter task" clearable style="width: 95%; margin-bottom: 15px;"></el-input>
  
    <el-select 
        v-model="selectedDay" placeholder="Select day" clearable style="width: 95%; margin-bottom: 15px;">
        <el-option v-for="day in days" :key="day" :label="day" :value="day"></el-option>
    </el-select>

    <el-button type="primary" @click="addNewTodo">Add</el-button>
    <el-button type="info" @click="$router.push('/list')">View ToDo List</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      selectedDay: '',
      days: ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }
  },
  methods: {
    addNewTodo() {
      if (this.task.trim() && this.selectedDay) {
        this.$store.dispatch('addTodo', {
          text: this.task,
          day: this.selectedDay,
          completed: false
        })
        this.task = ''
        this.selectedDay = ''
      } else {
        this.$message.error('Please enter task and select a day!')
      }
    }
  }
}
</script>

<style>
.add-todo {
  margin-top: 40px;
  max-width: 50%;
  margin: 5% auto;
  text-align: center;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: aliceblue;
}
el-input{
    width: 20%;
}
</style>
