<template>
  <div class="main-card">
    <v-hover>
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-card-text
          class="pt-4 font-weight-light grey--text title"
          style="position: relative;"
        >
            Application Name:
        </v-card-text>
          <v-card-text
          class="pt-4 display-1 font-weight-light orange--text text-xs-center"
          style="position: relative;"
        >
        Vue Express Tutorial
          </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style>
.main-card {
  margin-top: 76px;
}
</style>
