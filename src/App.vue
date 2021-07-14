<template>
  <div id="app">
    <display :number="display" />
    <keyboard
      v-on:action="performAction"
      :activeNumber="display !== '0'"
      :currentOperation="operation"
    />
  </div>
</template>

<script>
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {
      display: "0",
      onHold: null,
      operation: null,
      newNumber: false
    };
  },
  // computed: mapState(["display", "onHold", "operation", "newNumber"]),
  methods: {
    toDisplay(numberString, shouldClean = true) {
      if (shouldClean) {
        this.display = Number(numberString).toString();
      } else {
        this.display = numberString;
      }
    },
    showError(msg = "Error") {
      this.display = msg;
    },
    performAction(action) {
      let editedDisplay = this.display;
      if (this.newNumber) {
        editedDisplay = 0;
        this.newNumber = !this.newNumber;
      }

      if (action.type === "number") {
        editedDisplay += action.symbol;
        if (action.symbol === ".") {
          if (editedDisplay.slice(0, -1).includes(".")) {
            editedDisplay = editedDisplay.slice(0, -1);
          }
          this.toDisplay(editedDisplay, false);
          return;
        }
      } else if (action.type === "operation") {
        if (action.symbol === "=") {
          if (this.operation === "/" && this.display === "0") {
            return this.showError();
          }
          editedDisplay = performOperation(
            this.onHold,
            this.operation,
            Number(this.display)
          );
        } else {
          if (this.onHold === null) {
            this.onHold = Number(this.display);
          } else {
            this.onHold = performOperation(
              this.onHold,
              this.operation,
              Number(this.display)
            );
            editedDisplay = this.onHold;
          }
          this.operation = action.symbol;
        }
        this.newNumber = true;
      } else if (action.type === "modification") {
        if (action.symbol === "AC") {
          this.onHold = null;
          this.operation = null;
          this.newNumber = false;
          editedDisplay = 0;
        } else if (action.symbol === "C") {
          editedDisplay = 0;
        } else if (action.symbol === "+/-") {
          editedDisplay = -Number(this.display);
        } else if (action.symbol === "%") {
          editedDisplay = Number(this.display) / 100;
        }
      }

      this.toDisplay(editedDisplay);
    }
  },
  components: {
    Display,
    Keyboard
  }
};

const performOperation = (left, operation, right) => {
  switch (operation) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "x":
      return left * right;
    case "/":
      return left / right;
  }
};
</script>

<style>
@font-face {
  font-family: "San Francisco";
  font-weight: 200;
  src: url("https://sf.abarba.me/SF-UI-Display-Light.otf");
}

html,
body {
  margin: 0px;
  height: 100%;
}
body {
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: "San Francisco", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  height: 667px;
  width: 345px;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  border-radius: 5px;
}

/* @media screen and (max-width: 375px) {
  body,
  html,
  #app {
    height: 100%;
    width: 100%;
  }
} */
</style>
