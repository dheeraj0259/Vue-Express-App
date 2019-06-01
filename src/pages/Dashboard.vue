<template>

<Table
  :headers="tableHeaders"
  :tableItems ="dashboardTableItems"
  headerColor="blue"
 />
 
</template>

<script>
import Table from "../components/Table"
import store from "../store"
export default {
  name: "dashboard",
  components: {Table},
  data: () => ({
      tableHeaders: [
      { text: "Dessert (100g serving)", value: "name" },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" }
    ],
      dashboardTableItems: store.state.tableItems
  }),
  beforeCreate(){
      this.$store.dispatch("getTableItems");
  }
};
</script>
