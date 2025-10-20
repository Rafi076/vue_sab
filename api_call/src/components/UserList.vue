<template>
  <div class="user-list">
  <h3>Information</h3>

  <div v-if="loading">Data loading....</div>

  <div v-else-if="error">
    Error: {{ error }}
    <button @click="fetchApi">Retry</button>
  </div>

  <div v-else>

    <table>
      <thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>
      User Name
      <div class="search-bar">
        <input v-model="searchQuery" placeholder="Search by username" />
      </div>
    </th>
    <th>Email</th>
    <th>Address</th>
    <th>Phone
      <div class="search-bar">
      <input v-model="searchPhone" placeholder="Search by phone" />
    </div>
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
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>

    
  </div>
</div>

</template>


<script>
export default{
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
      );
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;
      return this.filteredUsers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.usersPerPage);
    }
},

  mounted(){
    this.fetchApi()
  },
  methods: {
  fetchApi() {
    this.loading = true;
    this.error = null;
    this.$axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        this.error = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  },
  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}


}
</script>

<style>
.user-list {
  max-width: 85%;           /* allows it to resize with the screen */
  /*width: auto;              /* remove fixed width restriction */
  margin: 20px auto;        /* center the box horizontally */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  text-align: center;
  background-color: #f8f9fa;
  overflow-x: auto;          /* enables horizontal scrolling if needed */
}


table{
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td{
  border: 1px solid #ccc;
  padding: 10px;
}
button{
  margin-top: 10px;
  padding: auto;
}
.search-bar {
  max-width: 10%;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 50;
}

.search-bar input {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
}
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.pagination button {
  padding: 5px 10px;
  color: black;
  background-color: antiquewhite;
  border-radius: 10px;
}

</style>