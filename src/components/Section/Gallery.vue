<script setup>
import Title from '../element/Title.vue';
import image1 from '/assets/card/stephanie-harvey-T0inbt7nRME-unsplash.jpg'
import image2 from '/assets/card/andrew-reshetov-f8tr3-MJzhc-unsplash.jpg'
import image3 from '/assets/card/xinyi-zhang-ohTfLJNdbuA-unsplash.jpg'
import image4 from '/assets/card/polina-silivanova-ywRYbp-6p8c-unsplash.jpg'
import image5 from '/assets/card/feey-gTMnUAkPvlQ-unsplash.jpg'
import image6 from '/assets/card/feey-tSWTSzwSz6M-unsplash.jpg'
import BaseImage from '../element/BaseImage.vue';
</script>

<template>
    <section class="container py-2 medium-py-3 larger-py-5">
        <div class="text-center">
            <Title>Gallery</Title>
        </div>
        <div class="gallery-images">
            <div class="grid-item row-span-2">
                <BaseImage :image="image1" />
            </div>
            <div class="grid-item">
                <BaseImage :image="image2" />
            </div>
            <div class="grid-item">
                <BaseImage :image="image3" />
            </div>
            <div class="grid-item row-span-2">
                <BaseImage :image="image4" />
            </div>
            <div class="grid-item">
                <BaseImage :image="image5" />
            </div>
            <div class="grid-item">
                <BaseImage :image="image6" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.gallery-images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    grid-auto-rows: 200px;
}

.grid-item {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.5s ease-in-out;
}

.grid-item img:hover {
    transform: scale(1.1);
}

.row-span-2 {
    grid-row: span 2;
}

@media (min-width: 768px) {
    .gallery-images {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 992px) {
    .gallery-images {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>