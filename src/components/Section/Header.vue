<template>
<header class="px-1">
        <nav class="container flex justify-between align-center">
            <figure>
                <img src="./assets/logo-header.png" alt="logo">
            </figure>
            <div class="hamburger">
                <span class="material-symbols-outlined">
                    menu
                </span>
            </div>
            <!-- nav items  -->
            <ul class="nav">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li class="header-dropdown">
                    <a href="#">Project</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Link - 1</a></li>
                        <li><a href="#">Link - 2</a></li>
                        <li><a href="#">Link - 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Gallary</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
.scroll-down header {
    transform: translate3d(0, -100%, 0);
}
header {
    background-color: var(--primary-color);
    font-family: var(--popins-font);
    box-shadow: var(--header-shadow);
    padding: var(--header-padding);
    position: sticky;
    top: 0;
    transition: all .3s ease-in-out;
    z-index: 999;
}
header nav {
    color: var(--secondary-color);
    padding: 1rem 0;
}
header nav ul li:not(:last-child) {
    margin-right: 1rem;
}
header nav ul li a {
    text-decoration: none;
    padding: 1rem .8rem;
    font-size: 1.125rem;
    font-weight: 500;
}
header nav ul li a:hover {
    /* color: var(--primary-color); */
    transition: all .3s ease-in-out;
}
.header-dropdown {
    position: relative;
}
.header-dropdown .dropdown-menu {
    border-top: 2px solid var(--secondary-color);
    position: absolute;
    top: 40px;
    background-color: var(--primary-color);
    width: 200px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    z-index: 999;
    list-style: none;
}
.header-dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.dropdown-menu a {
    display: block;
    padding: .5rem 1rem;
}
.nav {
    list-style: none;
    display: none;
}
.hamburger {
    display: block;
}
@media (min-width: 992px) {
    .nav {
        display: flex;
    }
    .hamburger {
        display: none;
    }
}
</style>