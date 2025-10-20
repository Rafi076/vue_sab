<template>
  <div class="user-list">
    <h3>Information</h3>

    <div v-if="loading">Data loading....</div>

    <div v-else-if="error">
      Error: {{ error }}
      <button @click="fetchApi">Retry</button>
    </div>

    <div v-else>
      <!--  Table -->
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name
              <input type="text" placeholder="Search user" v-model="searchQuery">
            </th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone
              <input placeholder="search phone" v-model="searchPhone">
            </th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address.city }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.website }}</td>
            <td>{{ user.company.name }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <UserPagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @next="nextPage"
        @prev="prevPage"
      />
    </div>
  </div>
</template>

<script>
import UserPagination from './UserPagination.vue'

export default {
  name: 'UserList',
  components: { UserPagination },
  data() {
    return {
      users: [],
      loading: true,
      error: null,
      searchQuery: '',
      searchPhone: '',
      currentPage: 1,
      usersPerPage: 4
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        user.phone.toLowerCase().includes(this.searchPhone.toLowerCase())
      )
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage
      const end = start + this.usersPerPage
      return this.filteredUsers.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.usersPerPage)
    }
  },
  mounted() {
    this.fetchApi()
  },
  methods: {
    fetchApi() {
      this.loading = true
      this.error = null
      this.$axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          this.error = error.message
        })
        .finally(() => {
          this.loading = false
        })
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    }
  }
}
</script>

<style>
.user-list {
  max-width: 85%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  text-align: center;
  background-color: #f8f9fa;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
}

.search-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
