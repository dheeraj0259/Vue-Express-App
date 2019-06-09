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
          <!--Edit Modal -->
          <v-dialog v-model="dialog" max-width="500px">
            <template v-if="n === 2" v-slot:activator="{ on }">
              <span style="float: right">
                <v-btn color="primary" dark class="mb-2" v-on="on">Add New Product</v-btn>
              </span>
            </template>
            <v-card>
              <v-card-title>
                <span
                  class="headline"
                >{{ editedIndex === -1 ? 'Add New Product' : editedIndex === -2 ? 'Copy Product' :'Edit Product' }}</span>
              </v-card-title>

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex v-for="(value, name) in editedItem" :key="name" xs12 sm6 md4>
                      <v-text-field v-model="editedItem[name]" :label="itemLabel[name]"/>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer/>
                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
                <th
                  v-if="n === 2"
                  :class="['subheading text--darken-3 ' + headerColor + '--text font-weight-bold']"
                >+ -</th>
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
                <td v-if="n === 2" class="justify-center layout px-0">
                  <v-icon
                    color="green"
                    class="mr-2"
                    small
                    @click="copyItem(props.item)"
                  >add_to_queue</v-icon>
                  <v-icon color="blue" small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                  <v-icon color="red" small @click="deleteItem(props.item)">delete</v-icon>
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
    pagination: {},
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    itemLabel: {
      name: "Dessert name",
      calories: "Calories",
      fat: "Fat (g)",
      carbs: "Carbs (g)",
      protein: "Protein (g)"
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
    },
    editItem(item) {
      this.editedIndex = this.tableItems.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    copyItem(item) {
      this.editedIndex = -2;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.tableItems.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.tableItems.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableItems[this.editedIndex], this.editedItem);
      } else {
        this.tableItems.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
