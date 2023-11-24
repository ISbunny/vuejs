<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        <img src="https://vuejs.org/images/logo.png" alt="Vue logo">
        <HelloWorld msg="Welcome to Learn Vue" />
        <MyName />
    </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
import MyName from "../components/MyName.vue";


export default {
    components: {
        HelloWorld,
        MyName
    }
}

</script>
<style>
    .home {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    img {
        width: 200px;
        height: 200px;
    }
</style>