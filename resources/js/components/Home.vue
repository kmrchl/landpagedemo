<template>
  <section id="home" class="hero">
    <div class="overlay">
      <h1  data-aos-offset="200">Karyakreasi</h1>

      <p data-aos-delay="200" data-aos-offset="200">
        Furniture custom kayu dengan desain elegan dan kualitas premium
      </p>
      <router-link to="/catalog"> Lihat Katalog</router-link>
    </div>
  </section>
</template>

<style>
.hero {
  height: 100vh;
  background: url('/images/furniture.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: transparent !important;
  padding: 40px;
  text-align: center;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
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

.hero a {
  color: white;
  text-decoration: none;
}

.hero a:hover{
  color: #352208;
}
</style>