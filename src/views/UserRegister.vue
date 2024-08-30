<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Registrar</h2>
      <form @submit.prevent="handleRegister">
        <div class="textbox">
          <input type="text" v-model="fullName" placeholder="Nome Completo" required />
        </div>
        <div class="textbox">
          <input type="email" v-model="email" placeholder="Email" required />
        </div>
        <div class="textbox">
          <input type="date" v-model="birthdate" required />
        </div>
        <div class="textbox">
          <input type="text" v-model="college" placeholder="Faculdade" required />
        </div>
        <div class="textbox">
          <input type="text" v-model="course" placeholder="O que está cursando" required />
        </div>
        <div class="textbox">
          <input type="password" v-model="password" placeholder="Senha" required />
        </div>
        <button type="submit" class="btn btn-register">Registrar</button>
        <router-link to="/" class="btn btn-back">Voltar</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { addUser, findUserByEmail } from '../database.js';

export default {
  name: 'RegisterPage',
  data() {
    return {
      fullName: '',
      email: '',
      birthdate: '',
      college: '',
      course: '',
      password: '',
    };
  },
  methods: {
    handleRegister() {
      if (findUserByEmail(this.email)) {
        alert('Email já cadastrado!');
        return;
      }
      const newUser = {
        email: this.email,
        nome: this.fullName,
        date: this.birthdate,
        college: this.college,
        course: this.course,
        password: this.password,
      };
      addUser(newUser);
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Tema claro padrão */
}

.register-box {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
}

.register-box h2 {
  margin-bottom: 1rem;
}

.textbox {
  width: 100%; /* Garante que o textbox ocupe toda a largura disponível */
  margin-bottom: 1rem;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
}

.textbox input {
  width: 100%; /* Faz com que o campo de entrada ocupe toda a largura do textbox */
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 3px; /* Corrige o valor do border-radius */
}

.btn {
  width: 100%;
  padding: 0.8rem;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-register {
  background-color: #007bff;
  margin-bottom: 1rem; /* Espaçamento entre botões */
}

.btn-register:hover {
  background-color: #0056b3;
}

.btn-back {
  background-color: #6c757d;
}

.btn-back:hover {
  background-color: #5a6268;
}
</style>
