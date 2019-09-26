<template>
  <v-card class="mb-5" color="grey lighten-1" height="200px">
    <v-card-title primary-title><h3>Please choose your brands:</h3></v-card-title>
    <v-flex xs3 d-flex style="margin-left: 18px;">
    <v-select :items="items" label="Select brands" solo></v-select>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  name: "CloneStep1",
  data: () => ({
    items: ["DEKALB", "CHANNEL", "REGIONAL BRANDS", "CORN STATES"]
  })
};
</script>