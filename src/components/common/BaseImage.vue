<script setup>
const props = defineProps({
  image: {
    type: [String, Object],
    required: true
  }
})
</script>
<template>
    <img :src="image" alt="">
</template>

<style scoped>
img{
  display: block;
  width: 100%;
}
</style>