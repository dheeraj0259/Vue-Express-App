<template>
<div class="main-card">
  <v-hover>
    <v-card
     class="mx-auto" 
     color="grey lighten-4" 
     max-width="600"
     >
      <v-card-text class="pt-4" style="position: relative;">
        <div class="font-weight-light grey--text title mb-2">Application Name:</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">Commercial Attribute Management</h3>
      </v-card-text>
    </v-card>
  </v-hover>
</div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.main-card {
  margin-top: 20px;
}
</style>
