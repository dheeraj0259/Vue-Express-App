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
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { tableItems } from "../constants/tableData"
export default {
  name: "table",
  data: () => ({
    pagination: {
      sortBy: "name"
    },
    selected: [],
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "left",
        value: "name"
      },
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