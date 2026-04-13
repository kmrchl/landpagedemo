<template>
  <div>
    <Navbar @navigate="goTo" />

    <CatalogPage v-if="currentPage === 'catalog'" />
    <Home v-else />
    <VisionMission /> <!-- TAMBAH DI SINI -->
    <Catalog />
    <!-- <Contact /> -->
    <Footer />
  </div>


</template>

<script setup>
import { ref } from 'vue'
import HomePage from './HomePage.vue'
import CatalogPage from './pages/CatalogPage.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import VisionMission from './components/VissionMission.vue'
import Catalog from './components/Catalog.vue'
// import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const currentPage = ref('home')

const goTo = (page) => {
  currentPage.value = page
}
</script>