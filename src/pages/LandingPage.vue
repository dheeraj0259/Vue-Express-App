<template>
  <div class="main-card">
    <v-hover>
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-card-text
          class="pt-4"
          style="position: relative;"
        >
          <div class="font-weight-light grey--text title mb-2">
            Application Name:
          </div>
          <h3 class="display-1 font-weight-light orange--text mb-2">
            Commercial Attribute Management
          </h3>
        </v-card-text>
      </v-card>
    </v-hover>
    <i class="fas fa-arrow-down arrow-pos-left" />
    <i class="fas fa-arrow-down arrow-pos-right" />
    <div class="child-class">
      <ManageAttribute
        card-one-name="Manage Attributes"
        card-two-name="View Candidates"
      />
      <ManageAttribute
        card-one-name="Add Candidates"
        card-two-name="View Candidates1"
      />
    </div>
  </div>
</template>

<script>
import ManageAttribute from '../components/ManageAttribute.vue'
export default {
  name: 'LandingPage',
  components: {
    ManageAttribute
  }
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
