<template>
  <div>
    x : <input type="text" v-model="x" /> <br />
    y : <input type="text" v-model="y" />
    <slot name="type1" :cx="x" :cy="y"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return { x: 4, y: 5 };
  }
};
</script>
