<script lang="ts">
    import md5 from "md5"

    let input = "";
</script>

<h1>md5 hasher</h1>

<input bind:value={input}>

<p>{md5(input)}</p>