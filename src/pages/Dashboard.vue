<template>
  <MaterialCard
    color="blue"
    title="Dessert and Nutrition"
    :text="`Total no of desserts: ${dashboardTableItems.length}`"
  >
    <Table :headers="tableHeaders" :tableItems="dashboardTableItems" headerColor="blue"/>
  </MaterialCard>
</template>

<script>
import Table from "../components/Table";
import MaterialCard from "../components/MaterialCard";

import store from "../store";
export default {
  name: "Dashboard",
  components: { Table, MaterialCard },
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
