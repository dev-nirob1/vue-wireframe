<script setup>
import Title from '../element/Title.vue';
import FeaturedCard from '../widgets/FeaturedCard.vue';

</script>

<template>
  <section class="container features py-2 medium-py-3 larger-py-5">
        <div class="text-center">
            <Title>What We Offer</Title>
        </div>
        <!-- card container  -->
        <div class="medium-2 large-3 gap-2">
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
        </div>
    </section>
</template>
<style scoped>
.features h5 {
    margin: 10px 0;
}

</style>