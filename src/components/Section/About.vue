<script setup>
import BaseImage from '../element/BaseImage.vue';
import Paragraph from '../element/Paragraph.vue';
import Title from '../element/Title.vue';
import imagePath from '/assets/card/feey-ZQbpzgoWYrA-unsplash.jpg'
import image1 from '/assets/card/feey-gTMnUAkPvlQ-unsplash.jpg'
import image2 from '/assets/card/xinyi-zhang-ohTfLJNdbuA-unsplash.jpg'
import image3 from '/assets/card/stephanie-harvey-T0inbt7nRME-unsplash.jpg'
</script>

<template>
    <section class="container about py-2 medium-py-3 larger-py-5">
        <div class="content large-2 gap-3 align-center justify-center">
            <!-- img container  -->
            <div class="left-image">
                <BaseImage :image="imagePath"/>
            </div>
            <!-- content container  -->
            <div>
                <Title>
                    Who We Are & Our Mission
                </Title>
                <Paragraph>
                    At GreenRoots, we are passionate about creating a greener, healthier planet. Our mission is to
                    empower individuals and communities to take action against climate change by planting trees and
                    promoting sustainable living. Together, we can make a lasting impact on the Earth.
                </Paragraph>
                <Paragraph>
                    Since our founding, we've planted thousands of trees worldwide,and educated communities on the
                    importance of sustainability. We believe that every tree planted is a step toward a brighter future
                    for our planet and future generations. Join us in making a difference—one tree at a time.
                </Paragraph>
                <div class="all-3 gap-1">
                    <div class="image">
                        <BaseImage :image="image1"/>
                    </div>
                    <div class="image">
                        <BaseImage :image="image2"/>
                    </div>
                    <div class="image">
                        <BaseImage :image="image3"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about .left-image {
    height: 100vh;
    width: 100%;
    display: block;
}
.about .image {
    width: 100%;
    height: 100%;
}
.about .image img {
    height: 100%;
    width: 100%;
    display: block;
}
</style>