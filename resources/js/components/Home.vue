<template>
  <section id="home" class="hero">
    <div class="overlay">
      <h1 data-aos="fade-up" data-aos-offset="200">Karyakreasi</h1>

      <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="200">
        Furniture custom kayu dengan desain elegan dan kualitas premium
      </p>

      <a href="/catalog" class="btn" data-aos="fade-up" data-aos-delay="400" data-aos-offset="200">
        Lihat Katalog
      </a>
    </div>
  </section>
</template>

<style>
.hero {
  height: 100vh;
  background: url('/images/furniture.jpg') center/cover no-repeat;
  position: relative;
  align-items: center;
  justify-content: center;
  position: relative;

  /* display: flex;  */
}

.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: fit-content;
  width: fit-content;
  padding: 40px;
  text-align: center;
  color: white;
  border-radius: 12px;
  display: inline-block;
}

h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  background: #d6a679;
  padding: 12px 24px;
  border-radius: 8px;
  color: black;
  text-decoration: none;
}
</style>