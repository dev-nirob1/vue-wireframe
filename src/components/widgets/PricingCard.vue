<script setup>
import ListItem from '../element/ListItem.vue';
</script>

<template>
    <div class="price-card bg-primary">
        <h4 class="text-white">$0</h4>
        <h6 class="text-white">Free</h6>
        <ul>
            <!-- pass data as props -->
            <ListItem />
            <ListItem />
            <ListItem />
        </ul>
        <a href="#" class="btn btn-secondary width-full">Choose Plan</a>
    </div>
</template>
<style scoped>
.price-card h4,
.price-card h6 {
    text-align: center;
    margin: 0;
    padding: 5px 0;
}

.price-card {
    background-color: var(--primary-color);
    padding: 1rem .5rem;
    border-radius: .5rem;
    color: var(--secondary-color);
}
</style>