<script setup>
import Paragraph from '../element/Paragraph.vue';
import Title from '../element/Title.vue';
import PricingCard from '../widgets/PricingCard.vue';

</script>

<template>
    <section class="container pricing py-2 medium-py-3 large-py-5">
        <div class="medium-2 align-center medium-gap-2">
            <div>
                <Title>
                    PRICING TABLE <br> CONTENT LIST
                </Title>
                <div>
                    <Paragraph>
                        Our pricing plans are designed to make it easy for everyone to contribute to a greener planet.
                        Whether you're an individual or an organization, we have a plan that fits your needs and budget.
                    </Paragraph>
                    <Paragraph>
                        By choosing one of our plans, you're not just planting trees—you're supporting reforestation
                        efforts, restoring ecosystems, and helping combat climate change. Every tree planted makes a
                        difference, and together, we can create a sustainable future for generations to come.
                    </Paragraph>
                </div>
            </div>
            <div class="all-2 gap-1">
               <PricingCard/>
               <PricingCard/>
               <PricingCard/>
               <PricingCard/>
            </div>

        </div>
    </section>
</template>