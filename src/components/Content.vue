<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: "ContentName",
  props: {
    msg: String,
  },
};
</script>