<template>
  <div>
    <el-alert v-if="error" :title="error" type="error" show-icon closable style="margin-bottom:10px;"></el-alert>

    <el-table :data="paginationData" v-loading="loading" stripe border style="width: 100%;">
      <el-table-column prop="Number" label="#" width="70" />
      <el-table-column prop="workshopName" label="Workshop" width="100" />
      <el-table-column prop="startDate" label="Start Date" width="120" />
      <el-table-column prop="endDate" label="End Date" width="120" />
      <el-table-column prop="EmpID" label="Emp ID" width="100" />
      <el-table-column prop="EmpName" label="Emp Name" width="150" />
      <el-table-column prop="OrderNumber" label="Order" width="120" />
      <el-table-column prop="ReportDate" label="ReportDate" width="120" />
      <el-table-column prop="SubmitTime(BDTime)" label="SubmitTime(BDTime)" width="120" />
      <el-table-column prop="TicketProcess" label="TicketProcess" width="120" />
      <el-table-column prop="MaterialName" label="Material" />
      <el-table-column prop="TicketNo" label="Ticket" width="120" />
      <el-table-column prop="TicketGenrationTime" label="Ticket Time" width="180" />
    </el-table>
    <el-pagination
  background
  layout="prev, pager, next"
  :current-page="currentPage"
  :page-size="pageSize"
  :total="data.length"
  @current-change="handlePageChange">
</el-pagination>
  </div>
</template>



<script>
export default {
  name: 'WorkshopTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    loading: Boolean,
    error: String
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 7
    }
  },
  computed: {
    paginationData() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.data.slice(start, end)
    }
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page
    }
  }
}
</script>

