<template>
  <header>
    <div class="header__logo">
    </div>
    <ul class="navigation">
      <li class="navigation__item">Places to day</li>
      <li class="navigation__item">Experiences</li>
      <li class="navigation__item">Online experiences</li>
    </ul>
    <div class="header__options">
      <a class="navigation__item--small">Become a host</a>
      <a class="navigation__button--sign-in">
        SIGN IN
      </a>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({

})
</script>

<style lang="scss" scoped>
header {
  padding:0;
  margin:0;
  background:var(--header-background-color);
  color:var(--text-base-contrast-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:20px 10%;
  position: relative;
}
.navigation {
  display: flex;
  list-style: none;
  &__item {
    margin:0 20px;
  }
  &__item--small {
    font-weight: bold;
    font-size: .9rem;
  }
  &__button--sign-in{
    background-color:var(--card-light-color);
    margin-left: 20px;
    color:var(--text-base-color);
    border-radius: 20px;
    padding: 12px;
    font-size:.9em;
    font-weight: bold;
  }
}
</style>
