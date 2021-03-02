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
  &__image {
    width: 200px;
    height:200px;
    object-fit: cover;
    border-radius: 10px;
  }
  &__text {
    font-weight: bold;
    font-size: .9em;
    margin-top: 5px;
  }
}
</style>
