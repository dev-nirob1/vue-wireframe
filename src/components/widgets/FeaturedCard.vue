<script setup>
import BaseButton from '../element/BaseButton.vue';
import BaseImage from '../element/BaseImage.vue';
import cardImage from '/assets/card/stephanie-harvey-T0inbt7nRME-unsplash.jpg'
</script>

<template>
    <div class="featured-card">
        <div class="relative card-image">
            <BaseImage :image="cardImage" />
        </div>
        <div class="p-1">
            <h5>5 Simple Ways to Live a Greener Life</h5>
            <div class="flex align-center justify-between">
                <div class="price">
                    <span>$8</span> <del>($10)</del>
                </div>
                <BaseButton>
                    Buy Now
                </BaseButton>
            </div>
        </div>
    </div>
</template>
<style scoped>
.featured-card {
    box-shadow: var(--blog-card-shadow);
    border-radius: 1rem;
}

.featured-card:hover img {
    transform: scale(1.1);
}

.featured-card .price del {
    color: var(--primary-color)
}
</style>