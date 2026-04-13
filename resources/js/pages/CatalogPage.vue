<template>
    <Navbar @navigate="goTo" />

    <CatalogPage v-if="currentPage === 'home'" />
    <section class="catalog-page">

        <div class="catalog-header">
            <h2>Katalog Produk</h2>
            <p>Temukan berbagai pilihan furniture sesuai gaya hunian Anda</p>
        </div>

        <!-- ===================== -->
        <!-- VIEW: KATEGORI -->
        <!-- ===================== -->
        <div v-if="!selectedCategory" class="category-grid">
            <div class="category-card" v-for="cat in categories" :key="cat.name" @click="selectCategory(cat.name)"
                :style="{ backgroundImage: `url(${cat.image})` }" data-aos="zoom-in">
                <div class="overlay">
                    <h3>{{ cat.name }}</h3>
                </div>
            </div>
        </div>

        <!-- ===================== -->
        <!-- VIEW: PRODUK -->
        <!-- ===================== -->
        <div v-else>
            <button class="back-btn" @click="selectedCategory = null">
                ← Kembali
            </button>

            <h3>{{ selectedCategory }}</h3>

            <div class="product-grid">
                <div class="card" v-for="product in filteredProducts" :key="product.id">
                    <img :src="product.image" />
                    <p class="category">{{ product.category }}</p>
                    <h4>{{ product.name }}</h4>
                    <p class="price">{{ product.price }}</p>
                </div>
            </div>
        </div>

    </section>
    <!-- FOOTER -->
    <Footer />
</template>

<script setup>
import { ref, computed } from 'vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

const currentPage = ref('catalog')
const selectedCategory = ref(null)

const categories = [
    { name: "Minimalis", image: "/images/c1.jpg" },
    { name: "Skandinavian", image: "/images/c2.jpg" },
    { name: "Industrial", image: "/images/c3.jpg" },
    { name: "Bohemian", image: "/images/c4.jpg" },
    { name: "Modern Kontemporer", image: "/images/c5.jpg" },
    { name: "Japandi Modern", image: "/images/c6.jpg" }
]

const products = [
    { id: 1, name: "Meja Minimalis", category: "Minimalis", price: "Rp 1jt - 2jt", image: "/images/p1.jpg" },
    { id: 2, name: "Kursi Scandinavian", category: "Skandinavian", price: "Rp 800rb - 1.5jt", image: "/images/p2.jpg" },
    { id: 3, name: "Rak Industrial", category: "Industrial", price: "Rp 1jt - 3jt", image: "/images/p3.jpg" },
    { id: 4, name: "Sofa Bohemian", category: "Bohemian", price: "Rp 2jt - 4jt", image: "/images/p4.jpg" },
    { id: 5, name: "Meja Modern", category: "Modern Kontemporer", price: "Rp 2jt - 5jt", image: "/images/p5.jpg" },
    { id: 6, name: "Tempat Tidur Japandi", category: "Japandi Modern", price: "Rp 3jt - 6jt", image: "/images/p6.jpg" },
]

const selectCategory = (name) => {
    selectedCategory.value = name
}

const filteredProducts = computed(() => {
    return products.filter(p => p.category === selectedCategory.value)
})
</script>

<style>

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
.catalog-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    padding-bottom: 80px;
    /* jarak kiri kanan */
}


.catalog-header {
    text-align: center;
    margin-bottom: 60px;
    /* jarak ke grid */
    margin: 60px 0 60px;
    
}

.catalog-header h2 {
    font-size: 36px;
    color: #3e2c23;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.catalog-header p {
    color: #777;
    line-height: 1.6;
    /* jarak antar baris */
}

.catalog-header h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #d6a679;
    margin: 10px auto 0;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3 kolom */
    gap: 20px;
    margin-top: 40px;
}

.category-card {
    height: 220px;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: 0.3s;
}

/* overlay gelap */
.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}

/* teks */
.overlay h3 {
    color: white;
    font-size: 20px;
    text-align: center;
}

/* hover effect */
.category-card:hover {
    transform: scale(1.03);
}

.category-card:hover .overlay {
    background: rgba(0, 0, 0, 0.6);
}

/* BACK BUTTON */
.back-btn {
    margin-bottom: 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
}

/* PRODUCT */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 🔥 4 kolom */
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s;
  padding-bottom: 10px;
}

/* gambar jadi persegi panjang */
.card img {
  width: 100%;
  height: 160px; /* 🔥 lebih pendek → jadi landscape */
  object-fit: cover;
  transition: 0.3s;
}

/* isi teks */
.card h4 {
  margin: 10px;
}

.price {
  margin: 0 10px 10px;
  color: #5a3e2b;
  font-weight: bold;
}

/* hover */
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
.card:hover img {
  transform: scale(1.05);
}

.category {
  font-size: 12px;
  color: gray;
  margin: 0 10px;
}
</style>