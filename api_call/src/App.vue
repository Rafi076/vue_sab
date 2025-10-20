


<template>
 <div id="app">
   <h1>Users Data</h1>
   <UserList/>
 </div>
</template>

<script>
import UserList from './components/UserList.vue';
export default{
  name: 'App',
  components:{
    UserList
  }
}
</script>
