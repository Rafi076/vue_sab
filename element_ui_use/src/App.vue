<template>
  <div class="container">
    <h2>Element UI Demo</h2>

    <!-- ✅ Button -->
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="danger">Danger</el-button>
   
    <br /><br />

    <!-- ✅ Select Dropdown -->
    <el-select v-model="selected" placeholder="Select fruit">
      <el-option label="Apple" value="apple"></el-option>
      <el-option label="Banana" value="banana"></el-option>
      <el-option label="Mango" value="mango"></el-option>
    </el-select>

    <p>Selected: {{ selected }}</p>

    <br /><br />

    <!-- ✅ Table -->
    <el-table :data="tableData" border>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="age" label="Age"></el-table-column>
      <el-table-column prop="city" label="City"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      tableData: [
        { name: 'Rafi', age: 25, city: 'Dhaka' },
        { name: 'Amin', age: 28, city: 'Chittagong' },
        { name: 'Hasan', age: 30, city: 'Khulna' }
      ]
    }
  }
}
</script>

<style>
.container {
  width: 700px;
  margin: 40px auto;
  text-align: center;
}
</style>
