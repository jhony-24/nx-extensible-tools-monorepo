<template>
  <div class="card">
    <img class="card__image" :src="image" />
    <div class="card__text">{{text}}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props :[ "image","text"]
})
</script>

<style lang="scss" scoped>
.card {
  width:100%;
  &__image {
    width: 100%;
    height:300px;
    object-fit: cover;
    border-radius: 10px;
  }
  &__text {
    font-weight: bold;
    font-size: 1em;
    margin-top: 5px;
  }
}
</style>
