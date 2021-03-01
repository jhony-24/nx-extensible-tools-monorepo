<script>
import SidebarOptions from './views/SidebarOptions.svelte';
import PreviewContentOptions from './views/PreviewContentOptions.svelte';
import { onMount } from 'svelte';

let politicsData = {links:[],content:{}};
let currentOption = {
  text : "Privacity",
  link : "/privacity"
};
let links = politicsData.links;
$: currentContent = politicsData.content[currentOption.link] || "";

const optionSelected = (payload) => {
  currentOption = payload;
}

onMount(async () => {
  const request = await fetch("/politics.data.json");
  const data = await request.json();
  politicsData = data;
});

</script>

<main>
  <SidebarOptions options="{{links}}" on:optionSelected={optionSelected} />
  <PreviewContentOptions content="{{currentContent}}" />
</main>

<style>
  :global(*) {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  :global(html,body) {
    width:100%;
    height:100%;
    display: flex;
  }
	main {
    display: flex;
    width:100%;
    height:100%;
    background: blue;
	}
</style>
