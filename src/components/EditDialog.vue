<template>
  <v-dialog
    v-model="dialog"
    persistent
  >
    <v-layout
      row
      justify-center
    >
      <v-flex
        v-for="(item, index) in selectedItems"
        :key="index"
      >
        <v-card class="item">
          <v-card-title>
            <span class="headline text-capitalize">
              <v-icon color="primary">edit</v-icon>
              Edit {{ item.name }}
            </span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout
                column
                wrap
              >
                <v-flex
                  xs12
                  sm6
                  md4
                >
                  <v-text-field
                    v-model="item.name"
                    label="Dessert"
                    required
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4
                >
                  <v-text-field
                    v-model="item.calories"
                    label="Calories"
                  />
                </v-flex>
                <v-flex
                  xs12
                  sm6
                  md4
                >
                  <v-text-field
                    v-model="item.iron"
                    label="Iron"
                    required
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="red darken-1"
              small
              fab
              @click="closeDialog(item.name)"
            >
              <v-icon color="white">
                close
              </v-icon>
            </v-btn>
            <v-btn
              color="green darken-1"
              small
              fab
              @click="saveItem(item.name)"
            >
              <v-icon color="white">
                save
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-dialog>
</template>

<script>
export default {
    name:    "EditDialog",
    props:   { dialog: Boolean, selectedItems: Array },
    methods: {
        toggle: function () {
            this.$emit("toggleEditDialog");
        },
        closeDialog: function (name) {
            this.$emit(
                "closeEditDialog",
                this.selectedItems.filter(item => item.name !== name)
            );
        },
        saveItem (name) {
            this.$emit(
                "saveSelectedItem",
                this.selectedItems.find(item => item.name === name),
                this.selectedItems.filter(item => item.name !== name)
            );
        },
    },
};
</script>

<style>
.item {
  margin-right: 10px;
  background-color: #d1dce4 !important;
}
</style>
