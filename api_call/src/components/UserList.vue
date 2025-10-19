<template>
  <div class="user-list">
    <h2>Users</h2>

    <!-- Loading -->
    <div v-if="loading">⏳ Loading...</div>

    <!-- Error -->
    <div v-else-if="error">
      ❌ Error: {{ error }}
      <button @click="fetchUsers">Retry</button>
    </div>

    <!-- Data Table -->
    <table v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.loading = true
      this.error = null
      this.$axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          this.users = res.data
        })
        .catch(err => {
          this.error = err.message || 'Something went wrong'
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
.user-list {
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
