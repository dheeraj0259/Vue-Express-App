<template>
  <v-card
    class="mb-5"
    color="grey lighten-1"
  >
    <v-card-title>
      <span class="headline">User Profile</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex
            xs12
            sm6
            md4
          >
            <v-text-field
              label="Legal first name*"
              required
            />
          </v-flex>
          <v-flex
            xs12
            sm6
            md4
          >
            <v-text-field
              label="Legal middle name"
              hint="example of helper text only on focus"
            />
          </v-flex>
          <v-flex
            xs12
            sm6
            md4
          >
            <v-text-field
              label="Legal last name*"
              hint="example of persistent helper text"
              persistent-hint
              required
            />
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Email*"
              required
            />
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Password*"
              type="password"
              required
            />
          </v-flex>
          <v-flex
            xs12
            sm6
          >
            <v-select
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age*"
              required
            />
          </v-flex>
          <v-flex
            xs12
            sm6
          >
            <v-autocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
              multiple
            />
          </v-flex>
        </v-layout>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
  </v-card>
</template>

<script>
export default { name: "CloneStep2" };
</script>
