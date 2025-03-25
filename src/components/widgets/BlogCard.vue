<script setup>
import BaseImage from '../element/BaseImage.vue';
import Paragraph from '../element/Paragraph.vue';
import blogImage from '/assets/card/feey-ZQbpzgoWYrA-unsplash.jpg'
</script>

<template>
    <div class="blog-card">
        <div class="relative card-image">
            <BaseImage :image="blogImage" />
        </div>
        <div>
            <h5>5 Simple Ways to Live a Greener Life</h5>
            <Paragraph>
                Discover easy, everyday changes you can make to reduce your carbon footprint and live
                sustainably...
            </Paragraph>
            <hr>
            <div class="flex justify-between align-center my-1">
                <div class="flex">
                    <i class="fa-solid fa-calendar-days"></i> <span class="text-light">June 24, 2021</span>
                </div>
                <div>
                    <a href="#">READ MORE</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.blog-card {
    padding: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    font-family: var(--nunito-font);
    box-shadow: var(--blog-card-shadow);
}

.blog-card h5 {
    margin: 20px 0;
}

.blog-card h5,
a {
    transition: all .3s ease-in-out;
    text-decoration: none;
}

.blog-card:hover img {
    transform: scale(1.1);
}

.blog-card:hover h5,
.blog-card:hover a {
    color: var(--primary-color);
}

.blog-card:hover a {
    text-decoration: underline;
}
</style>