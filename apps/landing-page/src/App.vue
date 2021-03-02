<template>
  <header-main-navigator></header-main-navigator>
  <background-banner>
    <template v-slot:header>
      <search-tabs-location-engine></search-tabs-location-engine>
    </template>
  </background-banner>
  <section-details title="Explore nearby">
    <div class="wrapper--nearby">
      <micro-card-place
        v-for="(item, key) in cardsNearby"
        :key="key"
        :image="item.image"
        :title="item.text"
        :detail="item.detail"
      ></micro-card-place>
    </div>
  </section-details>
  <section-details title="Live anywhere">
    <div class="wrapper--anywhere">
      <card-place
        v-for="(item, key) in cardsAnywhere"
        :key="key"
        :image="item.image"
        :text="item.text"
      ></card-place>
    </div>
  </section-details>
</template>

<script>
import { defineComponent } from 'vue';
import CardPlace from './components/CardPlace.vue';
import MicroCardPlace from './components/MicroCardPlace.vue';
import SectionDetails from './components/SectionDetails.vue';
import BackgroundBanner from './layouts/BackgroundBanner/BackgroundBanner.vue';
import HeaderMainNavigator from './layouts/HeaderMainNavigation/HeaderMainNavigator.vue';
import SearchTabsLocationEngine from './layouts/SearchTabsLocationEngine/SearchTabsLocationEngine.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderMainNavigator,
    BackgroundBanner,
    SearchTabsLocationEngine,
    SectionDetails,
    CardPlace,
    MicroCardPlace
  },
  setup() {
    const cardsAnywhere = [
      {
        image:
          'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg',
        text: 'Entire homes',
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817__340.jpg',
        text: 'Unique stays',
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070__340.jpg',
        text: 'Beautiful spaces',
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg',
        text: 'Pets allowed',
      },
    ];

    let cardsNearby = cardsAnywhere.map(item => ({
      ...item,
      detail : "4 hours drive"
    }));
    cardsNearby = [ ...cardsNearby, ...cardsNearby ]
    return {
      cardsAnywhere,
      cardsNearby
    };
  },
});
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
html,
body {
  margin: 0;
}

@mixin grid($name,$gap : 10px) {
    &--#{$name} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: $gap;
      @content;
    };
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  @include grid("nearby",25px);
  @include grid("anywhere");
}
</style>
