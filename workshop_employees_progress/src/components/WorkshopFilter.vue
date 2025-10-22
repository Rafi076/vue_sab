<template>
  <div>
    <el-row :gutter="12" style="margin-bottom:12px;">
      <el-col :span="6">
        <label>Start Date</label>
        <el-date-picker v-model="filters.startDate" type="date" placeholder="Start Date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width:100%"/>
      </el-col>

      <el-col :span="6">
        <label>End Date</label>
        <el-date-picker v-model="filters.endDate" type="date" placeholder="End Date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width:100%"/>
      </el-col>

      <el-col :span="6">
        <label>Workshop</label>
        <el-select v-model="filters.workshop" placeholder="Select Workshop" clearable filterable style="width:100%">
          <el-option v-for="w in workshops" :key="w" :label="w" :value="w" />
        </el-select>
      </el-col>

      <el-col :span="6">
        <label>Emp ID</label>
        <el-input v-model="filters.empId" placeholder="Enter Emp ID" />
      </el-col>
    </el-row>

    <div style="margin-bottom:20px;">
      <el-button type="primary" @click="search">Search</el-button>
      <el-button  @click="reset">Reset</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkshopFilter',
  props: ['workshops'],
  data() {
    return {
      filters: {
        startDate: null,
        endDate: null,
        workshop: null,
        empId: ''
      }
    }
  },
  methods: {
    search() {
      this.$emit('search', this.filters)
    },
    reset() {
      this.filters = { 
        startDate: null, 
        endDate: null, 
        workshop: null, 
        empId: '' 
    }
      this.$emit('reset')
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}
</style>
