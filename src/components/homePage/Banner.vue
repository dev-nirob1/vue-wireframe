<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue';
import BaseImage from '../common/BaseImage.vue';
import Paragraph from '../common/paragraph.vue';
import Title from '../common/Title.vue';
import imagePath from '../../assets/4.jpg';
</script>

<template>
    <section class="medium-2">
        <div>
            <Title>
                Saving our planet together</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore aliquam eum totam minus. Officia
                libero sequi numquam amet voluptates.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aut architecto amet beatae eos iusto facilis quaerat nihil odio error!
            </Paragraph>
            <BaseButton>
                Learn More
            </BaseButton>
        </div>
        <div>
            <BaseImage :image="imagePath" />
        </div>
    </section>
</template>
<style scoped></style>