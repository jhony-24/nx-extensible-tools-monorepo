<template>
  <img :src="logo" width="120" />
</template>

<script>
import { defineComponent } from "vue";
import  constants from "../constants"
export default defineComponent({
  setup() {
    const logo = constants.airbnb_logo;
    return {
      logo
    }
  }
})
</script>
