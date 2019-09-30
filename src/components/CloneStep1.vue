<template>
  <v-card
    class="mb-5"
    color="grey lighten-1"
    height="200px"
  >
    <v-card-title primary-title>
      <h3>Please choose your brands:</h3>
    </v-card-title>
    <v-container grid-list-md>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs3
          d-flex
          style="margin-left: 18px;"
        >
          <v-select
            :items="items"
            label="Select brands"
            solo
          />
        </v-flex>
        <v-flex
          v-for="(textValue, index) in textValues"
          :key="index"
          xs3
        >
          <v-text-field
            label="Minor Component"
            :value="textValues[index].value"
            :append-icon="getAppendIcon(index)"
            @input="handleTextInput($event, index)"
            @click:append="handleClickOnAppend(index)"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
    name: "CloneStep1",
    data: () => ({
        items:      ["DEKALB", "CHANNEL", "REGIONAL BRANDS", "CORN STATES"],
        textValues: [{ value: "5%: " }],
    }),
    methods: {
        handleClickOnAppend: function (index) {
            switch (this.getAppendIcon(index)) {
                case "add":
                    this.textValues.push({ value: "%: " });
                    break;
                case "delete":
                    this.textValues = this.textValues.filter((item, itemIndex) => itemIndex !== index);
                    break;
                default:
                    this.textValues.push({ value: "%: " });
            }
        },
        handleTextInput: function (value, index) {
            this.textValues[index].value = value;
        },
        getAppendIcon: function (index) {
            return index + 1 === this.textValues.length ? "add" : "delete";
        },
    },
};
</script>
