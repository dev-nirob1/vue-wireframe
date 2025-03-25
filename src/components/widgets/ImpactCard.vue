<script setup>
import Paragraph from '../element/Paragraph.vue';

</script>

<template>
    <div class="impact-item">
        <i class="fas fa-tree"></i>
        <h4>50,000+</h4>
        <Paragraph>
            Trees Planted
        </Paragraph>
    </div>
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
}
</style>