<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    select-all
    item-key="name"
    class="elevation-4"
  >
    <template v-slot:items="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>
          <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
        </td>
        <td v-for="header in headers" :key="header.name">{{ props.item[header.value] }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { tableItems } from "../constants/tableData";
export default {
  name: "table",
  data: () => ({
    selected: [],
    headers: [
      { text: "Dessert (100g serving)", value: "name" },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" }
    ],
    desserts: tableItems
  })
};
</script>