<script lang="ts">
let { label = "Stat", separator = ":", stat = 50 } = $props();
</script>

<p>{label}{separator} {stat}</p>
