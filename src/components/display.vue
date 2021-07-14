<template>
  <div id="display">{{formattedNumber}}</div>
</template>

<script>
function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export default {
  props: {
    number: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedNumber() {
      return numberWithCommas(this.number);
    }
  }
};
</script>

<style>
#display {
  color: white;
  flex: 1;
  font-weight: lighter;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 90px;
}
</style>
