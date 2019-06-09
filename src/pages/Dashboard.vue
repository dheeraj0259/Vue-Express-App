<template>
  <div>
    <Table :headers="tableHeaders" :tableItems="dashboardTableItems" headerColor="blue"/>
  </div>
</template>

<script>
import Table from "../components/Table";
import store from "../store";
export default {
  name: "dashboard",
  components: { Table },
  data: () => ({
    tableHeaders: [
      {
        text: "Dessert (100g serving)",
        value: "name",
        icon: "fas fa-ice-cream"
      },
      { text: "Calories", value: "calories", icon: "fas fa-pizza-slice" },
      { text: "Fat (g)", value: "fat", icon: "fas fa-hamburger" },
      { text: "Carbs (g)", value: "carbs", icon: "fas fa-carrot" },
      { text: "Protein (g)", value: "protein", icon: "fas fa-egg" },
      { text: "Iron (%)", value: "iron", icon: "fas fa-bread-slice" }
    ],
    dashboardTableItems: store.state.tableItems
  }),
  beforeCreate() {
    this.$store.dispatch("getTableItems");
  }
};
</script>
