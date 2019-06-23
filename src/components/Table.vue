<template>
  <!-- Card Tabs -->
  <v-tabs v-model="active" color="white" slider-color="blue">
    <v-tab
      v-for="n in 3"
      :key="n"
      ripple
    >{{ n === 1 ? 'Common' : n === 2 ? 'Deployed' : 'Submitted' }}</v-tab>
    <v-tab-item v-for="n in 3" :key="n">
      <v-card flat>
        <v-card-text>
          <!-- Table -->
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="tableItems"
            :pagination.sync="pagination"
            :rows-per-page-items="[ 30, 5, 10, 20]"
            select-all
            item-key="name"
          >
            <!-- Header -->
            <template v-slot:headers="props">
              <tr>
                <th>
                  <v-checkbox
                    :input-value="props.all"
                    :indeterminate="props.indeterminate"
                    primary
                    hide-details
                    @click.stop="toggleAll"
                  />
                </th>
                <th
                  v-for="header in props.headers"
                  :key="header.text"
                  :class="[pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'font-weight-bold' : 'font-weight-light', 'subheading text--darken-3 ' + headerColor + '--text']"
                  @click="changeSort(header.value)"
                >
                  <v-icon small :color="headerColor">{{ header.icon }}</v-icon>
                  {{ header.text }}
                </th>
              </tr>
            </template>

            <!-- Rows -->
            <template v-slot:items="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                  <v-checkbox :input-value="props.selected" primary hide-details/>
                </td>
                <td
                  v-for="header in headers"
                  :key="header.name"
                  class="body-1 font-weight-light text-xs-center"
                >
                  <span v-if="Array.isArray(props.item[header.value])">
                    <span v-for="(item, index) in props.item[header.value]" :key="index">
                      <v-chip color="#0f9fff" text-color="white" label>{{ item }}</v-chip>
                    </span>
                  </span>
                  <span v-else>{{ props.item[header.value] }}</span>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { networkInterfaces } from "os";
export default {
  name: "Table",
  props: {
    headers: { type: Array },
    tableItems: { type: Array },
    headerColor: { type: String }
  },
  data: () => ({
    dialog: false,
    active: null,
    selected: [],
    pagination: {}
  }),
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.tableItems.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
  },
  watch: {
    selected: function(newValue) {
      this.$emit("saveSelected", newValue);
    }
  }
};
</script>
