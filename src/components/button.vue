<template>
  <div
    class="button"
    :class="[type, zero, {'active': active} ]"
    @click="$emit('action', {symbol, type})"
  >
    <span>{{symbol}}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    number: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    zero() {
      return this.number && this.symbol === "0" ? "zero" : "";
    }
  }
};
</script>

<style scoped>
.button {
  border-radius: 50px;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button.zero {
  grid-column-end: span 2;
}

.button.zero span {
  left: 28px;
}

.button.operation {
  background-color: #fe9400;
  color: white;
  font-size: 35px;
}

.button.operation.active {
  background-color: white;
  color: #fe9400;
}

.button.number {
  background-color: #333333;
  color: white;
  font-size: 35px;
}

.button.modification {
  background-color: #a5a5a5;
  color: black;
  font-size: 30px;
}

span {
  position: absolute;
}
</style>