<template>
  <div id="app" style="max-width:1800px;margin:30px auto;">
    <el-card shadow="hover">
      <h2 style="margin-bottom:16px;">WorkShop Employee Evaluation</h2>

      <workshop-filter :workshops="workshops" @search="applyFilters" @reset="resetFilters"/>

      <workshop-table ref="workshopTable" :data="filtered" :loading="loading" :error="error"/>
    </el-card>
  </div>
</template>

<script>
import { getWorkshops } from './api/workshopApi'
import WorkshopFilter from './components/WorkshopFilter.vue'
import WorkshopTable from './components/WorkshopTable.vue'

export default {
  name: 'App',
  components: { WorkshopFilter, WorkshopTable },
  data() {
    return {
      allData: [],
      filtered: [],
      workshops: [],
      loading: false,
      error: null
    }
  },
  methods: {
    async fetchData() {
      this.loading = true
      this.error = null
      try {
        const res = await getWorkshops()
        this.allData = res
        this.filtered = res
        this.workshops = [...new Set(res.map(r => r.workshopName || r.WorkShop))].sort()  
        // here in api 2 column have same property (WorkShop & workshopName)
      } catch (err) {
        console.error(err)
        this.error = 'Failed to fetch workshops. Check server connection.'
      } finally {
        this.loading = false
      }
    },


    applyFilters(filters) {
      const { startDate, endDate, workshop, empId } = filters
      this.filtered = this.allData.filter(item => {
        const startOK = !startDate || item.startDate >= startDate
        const endOK = !endDate || item.endDate <= endDate
        const workshopOK = !workshop || (item.workshopName || item.WorkShop) === workshop
        const empOK = !empId || item.EmpID.toLowerCase().includes(empId.toLowerCase())
        return startOK && endOK && workshopOK && empOK
      })
      if (this.$refs.workshopTable) {
        this.$refs.workshopTable.currentPage = 1
      }
    },
    resetFilters() {
      this.filtered = this.allData
      if (this.$refs.workshopTable) {
        this.$refs.workshopTable.currentPage = 1
      }
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
