<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex xs6>
        <v-sheet
          class="d-flex"
          color="#9e9e9eb8"
          height="150"
          width="300"
        >
          <sheet-footer>
            {{ cardOneName }}
          </sheet-footer>
        </v-sheet>
      </v-flex>
      <v-flex xs6>
        <v-sheet
          class="d-flex"
          color="#9e9e9eb8"
          height="150"
          width="300"
        >
          <sheet-footer>
            {{ cardTwoName }}
          </sheet-footer>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    SheetFooter: {
      functional: true,

      render (h, { children }) {
        return h('v-sheet', {
          staticClass: 'mt-auto align-center justify-center d-flex',
          props: {
            color: 'rgba(0, 0, 0, .36)',
            dark: true,
            height: 50
          }
        }, children)
      }
    }
  },
  props: {
    cardOneName: {
      type: String,
      required: true
    },
    cardTwoName: {
      type: String,
      required: true
    }
  }
}
</script>
