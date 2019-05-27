<template>
  <v-app>
    <v-container grid-list-md>
    <router-view/>
    <div class="text-xs-center align-center">
      <v-progress-circular indeterminate color="amber"></v-progress-circular>
    </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "app",
  beforeMount: function () {
console.log("first")
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 15rem;
}
</style>
