<script setup lang="ts">
import Paragraph from '../element/Paragraph.vue';

</script>

<template>
    <section class="bg-light">
        <div class="container py-2 medium-py-3 large-py-5">
            <h3 class="text-center">Our Impact</h3>
            <div class="medium-2 large-4 gap-1 medium-gap-2 justify-center">
                <div class="impact-item">
                    <i class="fas fa-tree"></i>
                    <h4>50,000+</h4>
                    <Paragraph>
                        Trees Planted
                    </Paragraph>
                </div>
                <div class="impact-item">
                    <i class="fas fa-users"></i>
                    <h4>200+</h4>
                    <Paragraph>
                        Communities Helped
                    </Paragraph>
                </div>
                <div class="impact-item">
                    <i class="fas fa-leaf"></i>
                    <h4>100,000+ kg</h4>
                    <Paragraph>
                        CO₂ Reduced
                    </Paragraph>
                </div>
                <div class="impact-item">
                    <i class="fas fa-hands-helping"></i>
                    <h4>5,000+</h4>
                    <Paragraph>
                        Volunteers Engaged
                    </Paragraph>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.impact-item {
    text-align: center;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.impact-item h4 {
    margin: 1rem 0;
}
.impact-item i {
    font-size: 2.5rem;
    color: var(--primary-color);
}</style>