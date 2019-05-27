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
          class="pt-4 display-1 font-weight-light orange--text txt"
          style="position: relative;"
        >
        Commercial Attribute Management
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.main-card {
  margin-top: 76px;
}
.child-class {
  margin-left: 405px;
  margin-top: 25px;
}
.arrow-pos-left {
    margin-left: 673px;
    margin-top: 25px;
}
.arrow-pos-right {
  margin-left: 532px;
}
</style>
