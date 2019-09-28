<template>
  <div>
    <MaterialCard
      color="blue"
      title="Dessert and Nutrition"
      :text="`Total no of desserts: ${dashboardTableItems.length}`"
    >
      <Table
        :headers="tableHeaders"
        :table-items="dashboardTableItems"
        header-color="blue"
        @saveSelected="saveSelected"
      />
    </MaterialCard>
    <!-- Action Buttons -->
    <v-layout column>
      <v-flex xs12>
        <v-layout
          align-end
          justify-center
          row
        >
          <v-fab-transition>
            <v-btn
              v-show="selectedTableItems.length > 0"
              dark
              absolute
              class="edit-button-fixed"
              fab
              color="primary"
              @click="toggleEditDialog"
            >
              <v-badge color="deep-purple lighten-4">
                <template v-slot:badge>
                  <span style="color: black;">{{ selectedTableItems.length }}</span>
                </template>
                <v-icon>edit</v-icon>
              </v-badge>
            </v-btn>
          </v-fab-transition>
          <v-fab-transition>
            <v-btn
              v-show="selectedTableItems.length > 0"
              dark
              absolute
              class="delete-button-fixed"
              fab
              color="deep-orange accent-4"
              @click="deleteItem"
            >
              <v-badge color="orange lighten-3">
                <template v-slot:badge>
                  <span style="color: black;">{{ selectedTableItems.length }}</span>
                </template>
                <v-icon>delete</v-icon>
              </v-badge>
            </v-btn>
          </v-fab-transition>
          <v-fab-transition>
            <v-btn
              v-show="selectedTableItems.length > 0"
              dark
              absolute
              class="clone-button-fixed"
              fab
              color="primary"
              @click="toggleCloneDialog"
            >
              <v-badge color="deep-purple lighten-4">
                <template v-slot:badge>
                  <span style="color: black;">{{ selectedTableItems.length }}</span>
                </template>
                <v-icon>file_copy</v-icon>
              </v-badge>
            </v-btn>
          </v-fab-transition>
        </v-layout>
      </v-flex>
    </v-layout>
    <EditDialog
      :dialog="editDialog"
      :selected-items="editDialogItems"
      @toggleEditDialog="toggleEditDialog"
      @closeEditDialog="closeEditDialog"
      @saveSelectedItem="saveSelectedItem"
    />
    <CloneDialog
      :dialog="cloneDialog"
      @closeCloneDialog="closeCloneDialog"
    />
  </div>
</template>

<script>
import Table        from "../components/Table";
import MaterialCard from "../components/MaterialCard";
import EditDialog   from "../components/EditDialog";
import CloneDialog  from "../components/CloneDialog";

import store        from "../store";
export default {
    name:       "Dashboard",
    components: { Table, MaterialCard, EditDialog, CloneDialog },
    data:       () => ({
        tableHeaders: [
            {
                text:  "Dessert (100g serving)",
                value: "name",
                icon:  "fas fa-ice-cream",
            },
            { text: "Calories", value: "calories", icon: "fas fa-pizza-slice" },
            { text: "Fat (g)", value: "fat", icon: "fas fa-hamburger" },
            { text: "Carbs (g)", value: "carbs", icon: "fas fa-carrot" },
            { text: "Protein (g)", value: "protein", icon: "fas fa-egg" },
            { text: "Iron (%)", value: "iron", icon: "fas fa-bread-slice" },
        ],
        dashboardTableItems: store.state.tableItems,
        selectedTableItems:  [],
        editDialogItems:     [],
        editDialog:          false,
        cloneDialog:         false,
    }),
    beforeCreate () {
        this.$store.dispatch("getTableItems");
    },
    methods: {
        saveSelected (selectedValue) {
            this.selectedTableItems = selectedValue;
        },
        deleteItem () {
            const selectedNames = this.selectedTableItems.map(item => item.name);
            this.dashboardTableItems = this.dashboardTableItems.filter(
                item => !selectedNames.includes(item.name)
            );
        },
        toggleEditDialog () {
            this.editDialogItems = this.selectedTableItems;
            this.editDialog = !this.editDialog;
        },
        toggleCloneDialog () {
            this.cloneDialog = !this.cloneDialog;
        },
        closeEditDialog (newSelectedItems) {
            if (newSelectedItems.length > 0) {
                this.editDialogItems = newSelectedItems;
            } else {
                this.editDialog = !this.editDialog;
            }
        },
        closeCloneDialog () {
            this.cloneDialog = !this.cloneDialog;
        },
        saveSelectedItem (updatedItem, newSelectedItems) {
            const selectedIndex = this.selectedTableItems.findIndex(
                item => item.name === updatedItem.name
            );
            this.selectedTableItems[selectedIndex] = updatedItem;
            if (newSelectedItems.length > 0) {
                this.editDialogItems = newSelectedItems;
            } else {
                this.editDialog = !this.editDialog;
            }
        },
    },
};
</script>

<style scoped>
.edit-button-fixed {
  position: fixed;
  bottom: 15px;
}
.delete-button-fixed {
  position: fixed;
  bottom: 15px;
  margin-left: 100px;
}
.clone-button-fixed {
  position: fixed;
  bottom: 15px;
  margin-left: 200px;
}
</style>
