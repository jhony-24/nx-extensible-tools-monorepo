<script lang="ts">
  import { createEventDispatcher } from "svelte"
  const dispatcher = createEventDispatcher();

  export let options;

  const onSelected = (payload) => {
    dispatcher("optionSelected",payload);
  }

</script>
<aside class="sidebar">
  <ul class="sidebar__menu">
    {#each options as {text,link}}
      <li class="sidebar__item">
        <div on:click={()=>onSelected({text,link})} class="sidebar__item__link" role="button" tabindex="0">{{text}}</div>
      </li>
    {/each}
  </ul>
</aside>

<style>
.sidebar {
  padding:20px;
}
.sidebar__menu {
  list-style: none;
  padding: 0;
}
.sidebar__item {
  padding:10px 0;
}
.sidebar__item__link {
  cursor: pointer;
}
</style>
