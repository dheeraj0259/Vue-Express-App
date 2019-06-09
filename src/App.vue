<template>
  <v-app>
    <div v-if="this.$store.state.isLoaded === false" class="text-xs-center align-center">
      <v-progress-circular indeterminate color="amber"></v-progress-circular>
    </div>
    <v-container grid-list-md>
      <router-view/>
    </v-container>
    <v-btn
      dark
      absolute
      class="mx-5 scroll-up"
      fab
      @click="$vuetify.goTo(target, options)"
      color="primary"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  computed: {
    target() {
      const value = 0;
      return value;
    },
    options() {
      return {
        duration: 195,
        offset: 0,
        easing: "easeInOutCubic"
      };
    }
  },
  mounted() {
    this.$store.dispatch("isLoaded", true);
  }
};
</script>

<style scoped>
.scroll-up {
    position: fixed;
    bottom: 15px;
    right: 0px; 
}
.v-progress-circular {
  margin: 15rem;
}
</style>
