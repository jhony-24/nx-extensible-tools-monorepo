<template>
  <div class="section__details">
    <div class="detail__title" v-if="title">{{title}}</div>
    <div class="detail__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props  :[ "title" ],
})
</script>

<style lang="scss" scoped>
.section__details {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding:40px 0;
  text-align: left;
}
.detail {
  &__title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.8em;
    color:var(--text-base-color);
  }
}
</style>
