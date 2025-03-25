<script setup>
import Title from '../element/Title.vue';
import TestimonialsCard from '../widgets/TestimonialsCard.vue';

</script>

<template>
     <section class="testimonials pb-2 medium-pb-3 larger-pb-5 bg-light">
        <div class="container">
            <div class="text-center">
                <Title>
                    Clients Feedback
                </Title>
            </div>
            <!-- testimonials container  -->
            <div class="medium-2 large-3 gap-2">
                <!-- cards  -->
                <TestimonialsCard/>
                <TestimonialsCard/>
                <TestimonialsCard/>
            </div>
        </div>
    </section>
</template>