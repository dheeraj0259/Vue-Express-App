<template>
<Table
:tableItems ="dashboardTableItems"
 />
</template>

<script>
import Table from "../components/Table"
import store from "../store"
export default {
  name: "dashboard",
  components: {Table},
  data: () => ({
      dashboardTableItems: store.state.tableItems
  }),
  beforeCreate(){
      this.$store.dispatch("getTableItems");
  }
};
</script>
