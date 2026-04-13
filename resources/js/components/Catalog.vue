<template>
  <section id="catalog">
    <h2 data-aos="fade-up">Katalog</h2>

    <!-- GRID PRODUK -->
    <div class="grid">
      <div class="card" v-for="product in paginatedProducts" :key="product.id" data-aos="zoom-in">
        <img :src="product.image" alt="" />
        <h4>{{ product.name }}</h4>
        <p>{{ product.category }}</p>
      </div>
    </div>

    <!-- PAGINATION -->
    <div class="pagination">
      <button v-for="page in totalPages" :key="page" @click="currentPage = page"
        :class="{ active: currentPage === page }">
        {{ page }}
      </button>
    </div>

    <!-- LINK KE HALAMAN KATALOG FULL -->
    <div class="see-more">
      <a href="/catalog">Lihat Katalog Lengkap →</a>
    </div>

    <!-- STEP PEMESANAN -->
    <div class="order-steps">
      <h2 data-aos="fade-up">Cara Pemesanan</h2>

      <div class="steps">
        <div class="step" data-aos="fade-up" v-for="(step, index) in steps" :key="index">
          <div class="number">{{ index + 1 }}</div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
    <!-- <div class="cta-whatsapp" data-aos="fade-up">
      <h3>Siap Pesan Furniture Impian Anda?</h3>
      <a :href="whatsappLink" target="_blank" class="wa-btn">
        Hubungi Kami via WhatsApp
      </a>
    </div> -->

    <div class="location-section" data-aos="fade-up">
      <div class="location-wrapper">

        <!-- KIRI: TEKS -->
        <div class="location-text">
          <h2>Temui Kami di</h2>
          <p>Bogor, Jawa Barat</p>

          <a href="https://maps.google.com/?q=Bogor" target="_blank" class="map-btn">
            Lihat di Google Maps →
          </a>
        </div>

        <!-- KANAN: MAP -->
        <div class="map-container">
          <iframe src="https://www.google.com/maps?q=Bogor&output=embed" loading="lazy" allowfullscreen></iframe>
        </div>

      </div>
    </div>

    <div class="closing-section" data-aos="fade-up">
      <div class="closing-content">
        <h2>Wujudkan Furniture Impian Anda Bersama Kami</h2>

        <p>
          Setiap detail furniture yang kami buat dirancang khusus untuk memenuhi
          kebutuhan dan selera Anda. Dengan material kayu berkualitas tinggi dan
          pengerjaan profesional, kami memastikan setiap produk tidak hanya indah,
          tetapi juga tahan lama.
        </p>

        <p>
          Jangan ragu untuk mulai konsultasi sekarang dan dapatkan solusi furniture
          terbaik untuk hunian Anda.
        </p>

        <a :href="whatsappLink" target="_blank" class="closing-btn">
          Pesan Sekarang via WhatsApp
        </a>
      </div>
    </div>
  </section>

</template>

<script setup>
import { ref, computed } from 'vue'

const phoneNumber = "628123456789" // ganti dengan nomor kamu

const message = encodeURIComponent(
  "Halo, saya tertarik dengan furniture Karyakreasi. Bisa konsultasi?"
)

const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`

const currentPage = ref(1)
const perPage = 4

// DATA DUMMY PRODUK
const products = [
  { id: 1, name: "Meja Kayu Jati", category: "Japanese Modern", image: "/images/p1.jpg" },
  { id: 2, name: "Kursi Minimalis", category: "Classic Modern", image: "/images/p2.jpg" },
  { id: 3, name: "Lemari Kayu", category: "American Classic", image: "/images/p3.jpg" },
  { id: 4, name: "Meja Makan", category: "Japanese Modern", image: "/images/p4.jpg" },
  { id: 5, name: "Rak Buku", category: "Classic Modern", image: "/images/p5.jpg" },
  { id: 6, name: "Tempat Tidur", category: "American Classic", image: "/images/p6.jpg" },
  { id: 7, name: "Sofa Kayu", category: "Classic Modern", image: "/images/p7.jpg" },
  { id: 8, name: "Meja Kerja", category: "Japanese Modern", image: "/images/p8.jpg" },
]

// HITUNG TOTAL HALAMAN
const totalPages = computed(() => Math.ceil(products.length / perPage))

// FILTER PER HALAMAN
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return products.slice(start, start + perPage)
})

const steps = [
  {
    title: "Hubungi WhatsApp",
    desc: "Konsultasikan kebutuhan furniture Anda dengan tim kami."
  },
  {
    title: "Isi Form Pemesanan",
    desc: "Lengkapi detail pesanan sesuai keinginan Anda."
  },
  {
    title: "Pembayaran DP",
    desc: "Lakukan pembayaran DP sebagai tanda jadi produksi."
  },
  {
    title: "Instalasi di Lokasi",
    desc: "Tim kami akan mengirim dan memasang furniture di tempat Anda."
  },
  {
    title: "Pelunasan",
    desc: "Pembayaran sisa dilakukan setelah instalasi selesai."
  }
]
</script>

<style>

.closing-section {
  margin-top: 80px;
  padding: 80px 20px;
  background: #3e2c23;
  color: white;
  text-align: center;
}

.closing-content {
  max-width: 800px;
  margin: auto;
}

.closing-section h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.closing-section p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: #ddd;
}

.closing-btn {
  display: inline-block;
  margin-top: 20px;
  background: #d6a679;
  color: black;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.closing-btn:hover {
  background: #e6b98c;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .location-wrapper {
    display: flex;
    align-items: stretch;
    /* bikin tinggi sama */
    min-height: 350px;
  }

  .map-container {
    width: 100%;
    height: 300px;
  }

  .location-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* center vertical */
    align-items: center;
    /* center horizontal */
    text-align: center;
  }
}

.location-section {
  margin-top: 80px;
}

.location-wrapper {
  display: flex;
  align-items: center;
  gap: 40px;
}

/* KIRI */
.location-text {
  flex: 1;
}

.location-text h2 {
  font-size: 32px;
  color: #3e2c23;
}

.location-text p {
  margin: 10px 0 20px;
  color: #666;
}

/* BUTTON */
.map-btn {
  text-decoration: none;
  color: #5a3e2b;
  font-weight: bold;
  border-bottom: 2px solid #5a3e2b;
  padding-bottom: 4px;
  transition: 0.3s;
}

.map-btn:hover {
  color: #d6a679;
  border-color: #d6a679;
}

/* KANAN */
.map-container {
  flex: 1;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.cta-whatsapp {
  margin-top: 60px;
  text-align: center;
  padding: 40px 20px;
  background: #f8f5f2;
  border-radius: 12px;
}

.cta-whatsapp h3 {
  margin-bottom: 20px;
  color: #3e2c23;
}

.wa-btn {
  display: inline-block;
  background: #25D366;
  color: white;
  padding: 14px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.wa-btn:hover {
  background: #1ebe5d;
  transform: scale(1.05);
}

.order-steps {
  margin-top: 80px;
  text-align: center;
}

.steps {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.step {
  flex: 1;
  min-width: 180px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  transition: 0.3s;
  position: relative;
}

.step:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.number {
  width: 40px;
  height: 40px;
  background: #5a3e2b;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card h4 {
  margin: 10px;
}

.card p {
  margin: 0 10px 10px;
  color: gray;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* PAGINATION */
.pagination {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.pagination button {
  padding: 8px 12px;
  border: none;
  background: #ddd;
  cursor: pointer;
  border-radius: 6px;
}

.pagination button.active {
  background: #5a3e2b;
  color: white;
}

/* SEE MORE */
.see-more {
  text-align: center;
  margin-top: 20px;
}

.see-more a {
  text-decoration: none;
  color: #5a3e2b;
  font-weight: bold;
}
</style>