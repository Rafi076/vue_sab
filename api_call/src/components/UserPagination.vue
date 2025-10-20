<template>
  <div class="pagination">
    <button @click="$emit('prev')" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="$emit('next')" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  name: 'UserPagination',  // ✅ multi-word component name
  props: {
    currentPage: Number,
    totalPages: Number
  }
}
</script>

<style>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pagination button {
  padding: 5px 10px;
  border-radius: 8px;
  background-color: antiquewhite;
}
</style>
