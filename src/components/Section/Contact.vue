<script setup>
import BaseButton from '../element/BaseButton.vue';
import InputField from '../element/InputField.vue';
import Paragraph from '../element/Paragraph.vue';
import Textarea from '../element/BaseTextArea.vue';
import Title from '../element/Title.vue';
import Form from '../widgets/Form.vue';
</script>

<template>
    <section class="container contact py-2 medium-py-3 larger-py-5">
        <div class="text-center">
            <Title>
                Let's Start a Conversation
            </Title>
        </div>
        <div class="medium-2 gap-2 align-center">
            <Form>
                <div>
                    <label for="name">Name*</label>
                    <InputField />
                </div>
                <div>
                    <label for="name">Email*</label>
                    <InputField />
                </div>
                <div>
                    <label for="message">Message</label>
                    <Textarea />
                </div>

                <div>
                    <BaseButton>
                        Send Message
                    </BaseButton>
                </div>
            </Form>

            <div class="contact-info">
                <h6><i class="fas fa-map-marker-alt"></i> Our Location</h6>
                <Paragraph>
                    123 Green Street, EcoCity, Earth
                </Paragraph>

                <h6><i class="fas fa-phone"></i> Call Us</h6>
                <Paragraph>
                    +123 456 7890
                </Paragraph>
                <p></p>

                <h6><i class="fas fa-envelope"></i> Email</h6>
                <Paragraph>
                    contact@greenroots.com
                </Paragraph>

                <h6><i class="fas fa-clock"></i> Working Hours</h6>
                <Paragraph>
                    Mon - Fri: 9:00 AM - 6:00 PM
                </Paragraph>
                <div class="social-links">
                    <h6 class="mb-1">Follow Us</h6>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.social-links a {
    display: inline-block;
    margin-right: 10px;
    font-size: 1.5rem;
    color: #27ae60;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #2ecc71;
}
</style>