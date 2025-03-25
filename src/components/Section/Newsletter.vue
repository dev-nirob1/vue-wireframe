<script setup lang="ts">
import BaseButton from '../element/BaseButton.vue';
import InputField from '../element/InputField.vue';
import Paragraph from '../element/Paragraph.vue';
import Title from '../element/Title.vue';

</script>

<template>
    <section class="newsletter">
        <div class="newsletter-content">
            <div class="container height-full medium-2 medium-gap-2 align-center">
                <div>
                    <div>
                        <Title>
                            Subscribe Our NewsLetter
                        </Title>
                    </div>
                    <Paragraph>
                        Join the GreenRoots community and stay updated on the latest tree-planting initiatives,
                        eco-friendly tips, and exclusive offers. Together, we can grow a greener future!
                    </Paragraph>
                </div>
                <div class="flex">
                    <InputField />
                    <BaseButton>
                        Subscribe
                    </BaseButton>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.newsletter {
    height: 50vh;
    background: url('./assets/banner/newsletter.jpg') no-repeat center center / cover;
    background-attachment: fixed;
}

.newsletter .newsletter-content {
    width: 100%;
    height: 100%;
    color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
}
</style>