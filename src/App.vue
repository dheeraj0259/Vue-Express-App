<template>
  <v-app>
    <div v-if="this.$store.state.isLoaded === false" class="text-xs-center align-center">
      <v-progress-circular indeterminate color="amber"></v-progress-circular>
    </div>
    <v-container grid-list-md>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  mounted() {
    this.$store.dispatch("isLoaded", true);
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 15rem;
}
</style>
