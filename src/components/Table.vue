<template>
  <v-card class="theme--dark orange elevation-10">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="tableItems"
      select-all
      item-key="name"
      class="elevation-4"
    >
      <template v-slot:headerCell="props">
        <span
          :class="'subheading font-weight-light text--darken-3 ' + headerColor + '--text'"
          v-text="props.header.text"
        />
      </template>

      <template v-slot:items="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
          </td>
          <td
            class="body-1 font-weight-light"
            v-for="header in headers"
            :key="header.name"
          >{{ props.item[header.value] }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { tableItems } from "../constants/tableData";
export default {
  name: "Table",
  props: {
    headers: {
      type: Array
    },
    tableItems: {
      type: Array
    },
    headerColor: {
      type: String
    }
  },
  data: () => ({
    selected: []
  })
};
</script>