<template>
    <div>
        <div>
            <button class="btn btn-primary my-2"> dfdfgfdg</button>
        </div>
        <button class="btn btn-secondary">{{ msg }}</button>
    </div>
</template>
<script>
export default {
    name: "MyButtons",
    props: {
        msg: String,
    }
};
</script>