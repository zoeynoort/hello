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
let data;


async function fetchData() {
    const data = await api.post('/hello');
    return data;
}

onMount(async() => {
    data = await fetchData();
    loaded = true;
});
</script>

{#if loaded}
    <div class="container">
        <p>{data.greeting}, {$user.name.first}</p>
        <span>{data.language}</span>
    </div>
{/if}


<style>
    p {
        font-size: 1.2em;
        display: flex;
        justify-content: center;
    }
</style>