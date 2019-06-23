<template>
  <v-dialog v-model="dialog" persistent style="max-width: 400px">
    <v-layout row justify-center>
      <v-flex xs6 class="item" v-for="(n,index) in selectedItems" :key="index">
        <v-scale-transition>
          <v-card class="rounded-card">
            <v-card-title>
              <span class="headline">
                <v-icon>edit</v-icon>Edit Items
              </span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Legal first name*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Legal middle name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email*" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="blue darken-1" flat @click="closeDialog(n.name)">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="toggle">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-scale-transition>
      </v-flex>
    </v-layout>
  </v-dialog>
</template>

<script>
export default {
  name: "EditDialog",
  props: { dialog: Boolean, selectedItems: Array },
  methods: {
    toggle: function() {
      this.$emit("toggleEditDialog");
    },
    closeDialog: function(name) {
      this.$emit(
        "closeEditDialog",
        this.selectedItems.filter(item => item.name !== name)
      );
    }
  }
};
</script>

<style>
.item {
  margin-right: 10px;
}
.rounded-card {
  border-radius: 50px;
}
</style>