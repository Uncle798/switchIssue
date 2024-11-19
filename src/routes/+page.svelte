<script lang="ts">
   import { Switch } from '@skeletonlabs/skeleton-svelte';

   // You can optionally bind the checked state.
   let state = $state(true);
</script>

<div class="flex gap-10 p-10">
   <Switch name="example" bind:checked={state} onCheckedChange={console.log} />
   <Switch name="example" bind:checked={state} onCheckedChange={console.log} />
</div>