<script setup>
import BaseImage from '../element/BaseImage.vue';
import Paragraph from '../element/Paragraph.vue';
// import authorImage from '/assets/card/author.jpg'
</script>

<template>
    <div class="testimonial">
        <div class="flex align-center gap-1">
            <BaseImage image="/assets/card/author.jpg" />
            <div>
                <h5 class="text-dark">Adam Josheph</h5>
                <Paragraph>
                    Selling Agent
                </Paragraph>
            </div>
        </div>
        <div class="flex">
            <Paragraph>
                <i class="fa-solid fa-quote-left fa-2x"></i> Precious ipsum dolor sit amet
                consectetur adipisicing elit, sed dos
                mod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad min
                veniam, quis nostrud Precious ips
                um dolor sit amet, consecte
            </Paragraph>
        </div>

    </div>
</template>
<style scoped>
.testimonials .testimonial {
    padding: 1.5rem 1rem;
    background-color: var(--secondary-color);
    border-radius: 5px;
    box-shadow: var(--testimonials-card-shadow);
}
.testimonial h5 {
    margin: 0;
    padding: 0;
}
.testimonial img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
}
</style>