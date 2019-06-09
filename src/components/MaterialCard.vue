<template>
  <v-card
    :style="styles"
  >
    <v-card
      v-if="!$slots.offset"
      :color="color"
      :class="`elevation-${elevation}`"
      class="v-card--material__header tableTitle"
      dark
    >
      <slot
        v-if="!title && !text"
        name="header"
      />
      <span v-else>
        <h2
          class="headline font-weight-medium mb-2"
          v-text="title"
        />
        <h3
          class="category font-weight-light"
          v-text="text"
        />
        <slot name="tab" style="float: right"></slot>
      </span>
    </v-card>

    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props:        {
        color: {
            type:    String,
            default: "secondary",
        },
        elevation: {
            type:    [Number, String],
            default: 8,
        },
        offset: {
            type:    [Number, String],
            default: 24,
        },
        title: {
            type:    String,
            default: undefined,
        },
        text: {
            type:    String,
            default: undefined,
        },
    },

    computed: {
        hasOffset () {
            return this.$slots.header ||
                    this.$slots.offset ||
                    this.title ||
                    this.text;
        },
        styles () {
            if (!this.hasOffset) return null;

            return {
                marginBottom: `${this.offset}px`,
                marginTop:    `${this.offset * 2}px`,
            };
        },
    },
};
</script>

<style lang="scss">
  .tableTitle {
    padding: 15px;
    margin: 0px auto;
    max-width: calc(100% - 32px);
    position: relative;
    top: -20px!important;
    margin-bottom: -20px!important;
    animation: labelIn 1s ease-in-out forwards;
    opacity: 0;
  }
  @keyframes labelIn{
    from{
      transform: translateY(30px);
      opacity: 0;
    }
    to{
      transform: translateY(0);
      opacity: 1;
    }
  }
    .v-card--material {
        &__header {
            &.v-card {
                border-radius: 4px;
            }
        }
    }
</style>
