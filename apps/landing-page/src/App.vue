<template>
  <header-main-navigator></header-main-navigator>
  <background-banner>
    <template v-slot:header>
      <search-tabs-location-engine></search-tabs-location-engine>
    </template>
  </background-banner>
  <section-details title="Explore nearby">
  </section-details>
  <section-details title="Live anywhere">
  </section-details>
</template>

<script>
import { defineComponent } from 'vue';
import SectionDetails from './components/SectionDetails.vue';
import BackgroundBanner from './layouts/BackgroundBanner/BackgroundBanner.vue';
import HeaderMainNavigator from "./layouts/HeaderMainNavigation/HeaderMainNavigator";
import SearchTabsLocationEngine from './layouts/SearchTabsLocationEngine/SearchTabsLocationEngine.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderMainNavigator,
    BackgroundBanner,
    SearchTabsLocationEngine,
    SectionDetails
  },
});
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
html,body {
  margin:0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
