<script>
import { user } from 'helpers/webdesq/stores.js';
import { onMount } from 'svelte';

// props
export let title;
export let api;

export const settings = {
    title: {
        type: 'string',
        label: 'title'
    }
}

// state
let loaded;
let text;


async function fetchData() {
    const data = await api.post('/hello');
    return data.greeting;
}

onMount(async() => {
    text = await fetchData();
    loaded = true;
});
</script>

{#if !loaded}
    <p>Hello, {$user.name.first}</p>
{:else}
    {#if text}
        <p>{text}, {$user.name.first}</p>
    {:else}
        <p>No text</p>
    {/if}
{/if}

<style>
    p {
        font-size: 1.2em;
        display: flex;
        justify-content: center;
    }
</style>