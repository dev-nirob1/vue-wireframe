<script setup>
import About from '@/components/Section/About.vue';
import Banner from '@/components/Section/Banner.vue';
import Blogs from '@/components/Section/Blogs.vue';
import Contact from '@/components/Section/Contact.vue';
import Featured from '@/components/Section/Featured.vue';
import Footer from '@/components/Section/Footer.vue';
import Gallery from '@/components/Section/Gallery.vue';
import Header from '@/components/Section/Header.vue';
import Impact from '@/components/Section/Impact.vue';
import Newsletter from '@/components/Section/Newsletter.vue';
import Pricing from '@/components/Section/Pricing.vue';
import Testimonials from '@/components/Section/Testimonials.vue';

</script>

<template>
    <main>
        <Header/>
        <Banner />
        <About />
        <Impact />
        <Featured />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Blogs />
        <Newsletter />
        <Contact />
        <Footer/>
    </main>
</template>
