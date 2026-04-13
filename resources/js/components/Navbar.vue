<template>
    <nav class="nav">
        <div class="menu-icon" @click="toggleMenu">
            ☰
        </div>

        <div class="dropdown" v-if="isOpen">
            <a href="/">Home</a>
            <a href="/catalog">Katalog</a>
        </div>
    </nav>

</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

onMounted(() => {
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) {
            isOpen.value = false
        }
    })
})

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const closeMenu = () => {
    isOpen.value = false
}
</script>

<style>
.nav {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.menu-icon {
    font-size: 28px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    transition: 0.3s;
}

.menu-icon:hover {
    background: black;
}

.dropdown {
    margin-top: 10px;
    background: white;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    animation: fadeIn 0.3s ease;
}

.dropdown a {
    text-decoration: none;
    color: #333;
    padding: 8px;
    border-radius: 6px;
}

.dropdown a:hover {
    background: #f0f0f0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>