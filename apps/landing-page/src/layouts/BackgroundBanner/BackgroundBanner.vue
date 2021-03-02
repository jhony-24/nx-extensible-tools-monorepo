<template>
  <div class="background">
    <div>
      <slot name="header"></slot>
    </div>
    <img class="background__image" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" />
    <h1 class="background__title">Made possible by Hosts.</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.background {
  padding:20px 0;
  background-color: var(--header-background-color);
  position: relative;
  &__image {
    width: 95%;
    object-fit: cover;
    height: 330px;
    margin: auto;
  }
  &__title {
    color: var(--text-base-contrast-color);
    font-weight:normal;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
