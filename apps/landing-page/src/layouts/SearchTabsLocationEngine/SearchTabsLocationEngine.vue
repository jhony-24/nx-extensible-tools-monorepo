<template>
  <div class="engine">
    <div class="tabs">
      <div class="tabs__navigation">
        <div class="navigationtab__item">
          <div class="wrapper">
           <div class="navigationtab__item--title">Location</div>
           <span class="navigationtab__item--subtitle">Where are you doing</span>
          </div>
        </div>
        <div class="navigationtab__item">
          <div class="wrapper">
           <div class="navigationtab__item--title">Check In</div>
           <span class="navigationtab__item--subtitle">Add dates</span>
          </div>
        </div>
        <div class="navigationtab__item">
          <div class="wrapper">
           <div class="navigationtab__item--title">Check out</div>
           <span class="navigationtab__item--subtitle">Add dates</span>
          </div>
        </div>
        <div class="navigationtab__item">
          <div class="wrapper">
           <div class="navigationtab__item--title">Guests</div>
           <span class="navigationtab__item--subtitle">Add suggests</span>
          </div>
          <button class="button-search-engine">&telrec;</button>
        </div>
      </div>
      <div class="tabs__preview">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({

})
</script>

<style lang="scss" scoped>
.engine {
  position: absolute;
  width: 100%;
  margin-top: -30px;
}
.tabs {
  width:60%;
  margin:auto;
  &__navigation {
    background-color: var(--search-tabs-engine-background-color);
    border-radius: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-shadow: 0  20px 30px rgba(0,0,0,.1);
  }
  &__preview {
    color: inherit;
  }
}
.navigationtab {
  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 25px;
    &:not(:first-child) {
      border-left: 1px solid silver;
    }
    .wrapper {
      text-align: left;
    }
    &--title {
      color:var(--text-base-color);
      font-weight: bold;
      font-size:.8rem;
      margin-bottom: 5px;
    }
    &--subtitle {
      color:var(--text-base-neutral-color);
      font-size:.9rem;
    }
  }
}

.button-search-engine {
  width:50px;
  height:50px;
  border-radius: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  color: var(--text-base-contrast-color);
  background-color: var(--primary-color);
  border:none;
  outline: none;
  font-size:1.6em;
  flex: none;
}
</style>
