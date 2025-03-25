<template>
 <footer>
        <div class="small-2 medium-2 larger-5 pt-2 gap-1 px-1">
            <!-- contact info -->
            <div>
                <img class="mb-1" src="./assets/footer-logo.png" alt="logo">
                <p class="mb-1">Every tree planted makes a difference.</p>
                <div class="flex align-center gap-1">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Brooklyn, New York, United States</span>
                </div>
                <div class="flex align-center gap-1">
                    <i class="fa-solid fa-phone-volume"></i>
                    <span>+0123-456789</span>
                </div>
                <div class="flex align-center gap-1">
                    <i class="fa-solid fa-envelope"></i>
                    <span>example@example.com</span>
                </div>
            </div>
            <!-- contact info ends  -->

            <!-- company with links -->
            <div class="mb-2">
                <h5 class="text-white">Company</h5>
                <ul class="footer-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">All Products</a></li>
                    <li><a href="#">Location Maps</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div class="mb-2">
                <h5 class="text-white">Services</h5>
                <ul class="footer-links">
                    <li><a href="#">Order tracking</a></li>
                    <li><a href="#">Wish List</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">My account</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Promotional Offers</a></li>
                </ul>
            </div>
            <div class="mb-2">
                <h5 class="text-white">Customer care</h5>
                <ul class="footer-links">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">My account</a></li>
                    <li><a href="#">Wish List</a></li>
                    <li><a href="#">Order Tracking</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div class="mb-2">
                <div class="footer-newsletter mb-1">
                    <h5 class="text-white">NewsLetter</h5>
                    <p class="my-1">Subscribe to our weekly Newsletter and receive updates via email.</p>
                    <div class="flex items-center">
                        <input type="text" placeholder="Email">
                        <!-- <button class="footer-btn">Send</button> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>All Rights Reserved @ Company 2025</p>
            <ul>
                <li>
                    <a href="#">Terms & Conditions</a>
                </li>
                <li>
                    <a href="#">Claim</a>
                </li>
                <li>
                    <a href="#">Privacy & Policy</a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<style scoped>

footer {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}
.footer-links li:not(:last-child) {
    margin-bottom: 1rem;
}
footer ul {
    list-style: none;
    padding: 0;
}
.footer-links li a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}
.footer-links li:hover a {
    text-decoration: underline;
}
.footer-newsletter input {
    padding: 1rem;
    margin-right: 10px;
    background-color: var(--secondary-color);
    outline: none;
    border: none;
    border: 1px solid var(--border-color);
}
.footer-btn {
    padding: 1rem 2rem;
    outline: none;
    border-color: var(--primary-color);
    color: var(--primary-color);
    background-color: var(--secondary-color);
}
.footer-bottom {
    background-color: #2b7a6b;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
    justify-content: space-between;
}
.footer-bottom ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
}

@media (min-width: 992px) {
    .footer-bottom {
        flex-direction: row;
    }
}
</style>