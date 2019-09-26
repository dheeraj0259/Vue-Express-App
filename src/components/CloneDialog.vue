<template>
  <v-dialog v-model="dialog" persistent width="1000">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1">Assign Product to Brands</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2">Fill the Information</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="3">Acknowledgement</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <CloneStep1 />

          <v-flex style="display: flex; justify-content: flex-end">
            <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
            <v-btn flat @click="closeDialog">Cancel</v-btn>
          </v-flex>
        </v-stepper-content>

        <v-stepper-content step="2">
          <CloneStep2 />

          <v-flex style="display: flex; justify-content: flex-end">
            <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
            <v-btn flat @click="closeDialog">Cancel</v-btn>
          </v-flex>
        </v-stepper-content>

        <v-stepper-content step="3">
          <CloneStep3 />

          <v-flex style="display: flex; justify-content: flex-end">
            <v-btn color="red" dark @click="closeDialog">close</v-btn>
          </v-flex>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>
<script>
import CloneStep1 from "../components/CloneStep1";
import CloneStep2 from "../components/CloneStep2";
import CloneStep3 from "../components/CloneStep3";
export default {
  name: "CloneDialog",
  components: { CloneStep1, CloneStep2, CloneStep3 },
  props: { dialog: Boolean },
  data: () => ({
    e1: 0,
  }),
  methods: {
    closeDialog: function() {
      this.$emit("closeCloneDialog");
    }
  }
};
</script>