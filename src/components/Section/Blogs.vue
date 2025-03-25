<script setup>
import Title from '../element/Title.vue';
import BlogCard from '../widgets/BlogCard.vue';

</script>

<template>
     <section class="container py-2 medium-py-3 larger-py-5">
        <!-- section header  -->
        <div class="text-center">
            <Title>>Leatest Blogs</Title>
        </div>
        <!-- card container  -->
        <div class="medium-2 large-3 gap-2">
            <!-- individual card  -->
             <BlogCard/>
             <BlogCard/>
             <BlogCard/>
        </div>
    </section>
</template>