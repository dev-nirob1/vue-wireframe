<script setup lang="ts">
import Paragraph from '../element/Paragraph.vue';
import ImpactCard from '../widgets/ImpactCard.vue';

</script>

<template>
    <section class="bg-light">
        <div class="container py-2 medium-py-3 large-py-5">
            <h3 class="text-center">Our Impact</h3>
            <div class="medium-2 large-4 gap-1 medium-gap-2 justify-center">
                <ImpactCard/>
                <ImpactCard/>
                <ImpactCard/>
                <ImpactCard/>
            </div>
        </div>
    </section>
</template>

<style scoped></style>