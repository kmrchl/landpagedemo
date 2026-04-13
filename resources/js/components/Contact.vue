<template>
  <section id="contact">
    <h2 data-aos="fade-up">Contact</h2>

    <form data-aos="fade-up" data-aos-delay="200">
      <input type="text" placeholder="Nama" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Pesan"></textarea>
      <button>Kirim</button>
    </form>
  </section>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
}

input, textarea {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  background: #5a3e2b;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>