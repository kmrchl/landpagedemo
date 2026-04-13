<template>
  <section class="vision-section">
    <div class="content">
      <h2 data-aos="fade-up">Visi & Misi</h2>

      <div class="grid">
        <div class="box" data-aos="fade-right">
          <h3>Visi</h3>
          <p>
            Menjadi brand furniture custom kayu terdepan yang mengutamakan kualitas,
            estetika, dan kepuasan pelanggan.
          </p>
        </div>

        <div class="box" data-aos="fade-left">
          <h3>Misi</h3>
          <ul>
            <li>Menggunakan material kayu berkualitas tinggi</li>
            <li>Menghadirkan desain yang elegan dan fungsional</li>
            <li>Memberikan pelayanan terbaik kepada pelanggan</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
.vision-section {
  /* width: 100%; */
  background: #3e2c23;
  color: white;
  padding: 100px 10%;
}

.content {
  margin: auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
}

.box {
  background: rgba(255,255,255,0.05);
  padding: 30px;
  border-radius: 12px;
  transition: 0.3s;
}

.box:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.1);
}

h3 {
  margin-bottom: 10px;
}
</style>
