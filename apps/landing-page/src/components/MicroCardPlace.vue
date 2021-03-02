<template>
  <div class="card">
    <img :src="image" alt="" class="card__image"/>
    <div class="detail-wrapper">
      <div class="card__title">{{title}}</div>
      <div class="card__detail">{{detail}}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props : [ "image", "title", "detail" ]
})
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    align-items: center;
    &__image {
      border-radius: 5px;
      width:70px;
      height:70px;
      object-fit: cover;
    }
    .detail-wrapper {
      margin-left: 10px;
    }
    &__title {
      margin-bottom: 6px;
      font-weight: bold;
      font-size:.9rem;
      color: var(--text-base-color);
    }
    &__detail {
      font-size:.9rem;
      color: var(--text-base-color);
    }
  }
</style>
