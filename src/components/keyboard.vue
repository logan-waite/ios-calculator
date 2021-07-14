<template>
  <div id="keyboard">
    <i-button
      type="modification"
      :symbol="activeNumber ? 'C' : 'AC'"
      @action="$emit('action', $event)"
    />
    <i-button
      v-for="(button, index) in buttons"
      :key="index"
      :type="button.type"
      :symbol="button.symbol"
      :number="button.number"
      @action="$emit('action', $event)"
      :active="currentOperation === button.symbol && !activeNumber"
    />
  </div>
</template>

<script>
import IButton from "./button";

export default {
  components: {
    IButton
  },
  data() {
    return {
      buttons
    };
  },
  props: {
    activeNumber: {
      type: Boolean,
      default: false
    },
    currentOperation: {
      type: String,
      default: null
    }
  }
};

const buttons = [
  // {
  //   type: "modification",
  //   symbol: "AC",
  //   number: false
  // },
  {
    type: "modification",
    symbol: "+/-",
    number: false
  },
  {
    type: "modification",
    symbol: "%",
    number: false
  },
  {
    type: "operation",
    symbol: "/",
    number: false
  },
  {
    type: "number",
    symbol: "7",
    number: true
  },
  {
    type: "number",
    symbol: "8",
    number: true
  },
  {
    type: "number",
    symbol: "9",
    number: true
  },
  {
    type: "operation",
    symbol: "x",
    number: false
  },
  {
    type: "number",
    symbol: "4",
    number: true
  },
  {
    type: "number",
    symbol: "5",
    number: true
  },
  {
    type: "number",
    symbol: "6",
    number: true
  },
  {
    type: "operation",
    symbol: "-",
    number: false
  },
  {
    type: "number",
    symbol: "1",
    number: true
  },
  {
    type: "number",
    symbol: "2",
    number: true
  },
  {
    type: "number",
    symbol: "3",
    number: true
  },
  {
    type: "operation",
    symbol: "+",
    number: false
  },
  {
    type: "number",
    symbol: "0",
    number: true
  },
  {
    type: "number",
    symbol: ".",
    number: true
  },
  {
    type: "operation",
    symbol: "=",
    number: false
  }
];
</script>

<style>
#keyboard {
  flex: 2.5;
  max-width: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: auto auto auto auto;
  grid-gap: 15px 15px;
  padding: 29px 0px;
}
</style>
