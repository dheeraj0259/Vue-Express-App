<template>
  <v-app>
    <!-- Loading bar -->
    <div v-if="this.$store.state.isLoaded === false" class="text-xs-center align-center">
      <v-progress-circular indeterminate color="amber"></v-progress-circular>
    </div>
    <!--Route redirect components -->
    <v-container grid-list-md v-scroll="onScroll">
      <router-view/>
    </v-container>
    <!-- Scroll- Up button -->
    <v-btn
      v-show="scrollOffset > 280"
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
  data: () => ({
    scrollOffset: 0
  }),
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
  },
  methods: {
    onScroll(e) {
      this.scrollOffset = e.path[1].pageYOffset;
    }
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
