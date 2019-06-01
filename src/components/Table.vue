<template>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="tableItems"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="elevation-4"
    >
      <template v-slot:headers="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.stop="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="[pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'font-weight-bold' : 'font-weight-light', 'subheading text--darken-3 ' + headerColor + '--text']"
            @click="changeSort(header.value)"
          >
            <v-icon small :color="headerColor"> {{ header.icon }}</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>

      <template v-slot:items="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
          </td>
          <td
            class="body-1 font-weight-light text-xs-center"
            v-for="header in headers"
            :key="header.name"
          >
          <span v-if="Array.isArray(props.item[header.value])">
            <span v-for="(item, index) in props.item[header.value]" :key="index">
            <v-chip color="#0f9fff" text-color="white" label>
                  {{item}}
            </v-chip>
            </span>
          </span>
          <span v-else>
          {{ props.item[header.value] }}
          </span>
          </td>
        </tr>
      </template>
    </v-data-table>
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
    selected: [],
    pagination: {
    }
  }),
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.desserts.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    }
  }
};
</script>