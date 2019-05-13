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
    <div class="child-class">
      <ManageAttribute
        card-one-name="Manage Attributes"
        card-two-name="View Candidates"
      />
      <i class="fas fa-arrow-up fa-rotate-315 top-left-arrow" />
       <div class="dot">
         <span class="circle-content">Purpose of the application</span>
       </div>
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
  margin-top: 50px;
}
.dot {
  height: 225px;
  width: 225px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-left: 445px
}
.circle-content {
  position: relative;
  top: 100px;
  left: 29px;
}
.top-left-arrow {
  position: relative;
  left: 420px;
}
.fa-rotate-315 {
    -webkit-transform: rotate(315deg);
    -moz-transform: rotate(315deg);
    -ms-transform: rotate(315deg);
    -o-transform: rotate(315deg);
    transform: rotate(315deg);
}
</style>
