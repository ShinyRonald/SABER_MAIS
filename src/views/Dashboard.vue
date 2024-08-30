<template>
  <div class="dashboard-container">
    <!-- Cabeçalho (Header) -->
    <header class="dashboard-header">
      <div class="logo">Saber+</div>
      <nav class="main-nav"></nav>
      <div class="user-info">
        <!-- Widget de Notificação -->
        <div class="notification-widget">
          <button class="btn-notification" @click="toggleNotifications">Notificação</button>
          <div class="notification-dropdown" v-if="showNotifications">
            <p v-if="flashcards.length === 0">Nenhuma notificação</p>
            <div v-for="(flashcard, index) in flashcards" :key="index">
              <p>{{ flashcard.enunciado }}</p>
              <button @click="startFlashcard(flashcard)">Responder</button>
            </div>
          </div>
        </div>
        <router-link to="/perfil" class="profile-link">Perfil</router-link>
        <button @click="handleLogout" class="btn-logout">Sair</button>
      </div>
    </header>

    <!-- Área Principal (Main Content) -->
    <main class="dashboard-main">
      <!-- Painel de Atividades -->
      <section class="activity-panel">
        <h2>Suas Atividades</h2>
        <p>Simulados Realizados: 0</p>
        <p>Questões Respondidas: 0</p>
        <p>Respostas Acertadas: 0</p>
        <p>Respostas Erradas: 0</p>
        <p>Flashcards Realizados: 0</p>
      </section>

      <!-- Seção de Funcionalidades -->
      <section class="features">
        <div class="feature-box">
          <h3>Simulado</h3>
          <button class="btn-start-simulado" @click="startSimulado">Iniciar Novo Simulado</button>
        </div>
      </section>
    </main>

    <!-- Sobreposição do Simulado -->
    <div v-if="showSimulado" class="overlay"></div>

    <!-- Pop-up do Simulado -->
    <div v-if="showSimulado" class="simulado-popup">
      <div class="simulado-content">
        <h2>Simulado</h2>
        <div v-if="currentQuestion" class="question-box">
          <p v-if="currentQuestion.enunciadoum" class="question-text">{{ currentQuestion.enunciadoum }}</p>
          <p v-if="currentQuestion.enunciadodois">{{ currentQuestion.enunciadodois }}</p>
          <p v-if="currentQuestion.enunciadotres">{{ currentQuestion.enunciadotres }}</p>
          <p v-if="currentQuestion.enunciadoquatro">{{ currentQuestion.enunciadoquatro }}</p>
          <p v-if="currentQuestion.enunciadocinco">{{ currentQuestion.enunciadocinco }}</p>
          <p v-if="currentQuestion.enunciadoseis">{{ currentQuestion.enunciadoseis }}</p>
          <p v-if="currentQuestion.enunciadosete">{{ currentQuestion.enunciadosete }}</p>
          <p v-if="currentQuestion.enunciadooito">{{ currentQuestion.enunciadooito }}</p>
          <p v-if="currentQuestion.enunciadonove">{{ currentQuestion.enunciadonove }}</p>
          <div class="options">
            <button v-for="option in currentQuestion.alternativas" :key="option" @click="submitAnswer(option)" class="option-button">
              {{ option }}
            </button>
          </div>
        </div>
        <button @click="desistirSimulado" class="btn btn-cancel">Desistir</button>
      </div>
    </div>

    <!-- Pop-up de Resumo do Simulado -->
    <div v-if="showSummary" class="summary-popup">
      <div class="summary-content">
        <h2>Resumo do Simulado</h2>
        <p>Questões Feitas: {{ totalQuestions }}</p>
        <p>Questões Acertadas: {{ correctAnswers }}</p>
        <p>Questões Erradas: {{ wrongAnswers }}</p>
        <button @click="closeSummary" class="btn btn-close">Fechar</button>
      </div>
    </div>

    <!-- Pop-up do Flashcard -->
    <div v-if="showFlashcard" class="flashcard-popup">
      <div class="flashcard-content">
        <p class="flashcard-text">{{ currentFlashcard.enunciado }}</p>
        <button @click="closeFlashcard" class="btn btn-close">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
import questoesSimulado from '../questaosimulado.js';

export default {
  name: 'UserDashboard',
  data() {
    return {
      flashcards: [],
      showNotifications: false,
      inactivityTimeout: 15 * 60 * 1000, // 15 minutos de inatividade
      timeoutId: null,
      showSimulado: false,
      showSummary: false,
      showFlashcard: false,
      currentQuestionIndex: 0,
      currentQuestion: null,
      currentFlashcard: null,
      userAnswers: [],
      totalQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    };
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('user'); // Limpa a sessão do usuário
      this.$router.push('/login');
    },
    resetInactivityTimer() {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.handleLogout();
      }, this.inactivityTimeout);
    },
    startSimulado() {
      this.showSimulado = true;
      this.showSummary = false;
      this.currentQuestionIndex = 0;
      this.userAnswers = [];
      this.totalQuestions = 0;
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
      this.loadNextQuestion();
    },
    loadNextQuestion() {
      if (this.currentQuestionIndex < questoesSimulado.length) {
        this.currentQuestion = questoesSimulado[this.currentQuestionIndex];
        this.totalQuestions++;
      } else {
        this.endSimulado();
      }
    },
    submitAnswer(answer) {
      this.userAnswers.push({
        question: this.currentQuestion.enunciado,
        answer: answer,
        correct: answer === this.currentQuestion.respostaCorreta,
      });
      if (answer === this.currentQuestion.respostaCorreta) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
      this.currentQuestionIndex++;
      this.loadNextQuestion();
    },
    endSimulado() {
      this.showSimulado = false;
      this.showSummary = true;
      console.log('Respostas:', this.userAnswers);
    },
    desistirSimulado() {
      if (confirm('Tem certeza de que deseja desistir do simulado?')) {
        this.endSimulado();
      }
    },
    closeSummary() {
      this.showSummary = false;
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    startFlashcard(flashcard) {
      this.currentFlashcard = flashcard;
      this.showFlashcard = true;
    },
    closeFlashcard() {
      this.showFlashcard = false;
    }
  },
  created() {
    this.resetInactivityTimer();
    document.addEventListener('mousemove', this.resetInactivityTimer);
    document.addEventListener('keydown', this.resetInactivityTimer);
  },
  beforeUnmount() {
    clearTimeout(this.timeoutId);
    document.removeEventListener('mousemove', this.resetInactivityTimer);
    document.removeEventListener('keydown', this.resetInactivityTimer);
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
  color: #333;
}

/* Cabeçalho */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #007bff;
  color: #fff;
}

.logo {
  font-size: 1.5rem;
}

.main-nav a {
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
}

.user-info {
  display: flex;
  align-items: center;
}

.notification-widget {
  position: relative;
  margin-right: 1rem;
}

.btn-notification {
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-notification:hover {
  background-color: #218838;
}

.notification-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  z-index: 10;
}

.notification-dropdown p {
  margin: 0;
}

.profile-link, .btn-logout {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.profile-link:hover, .btn-logout:hover {
  background-color: #c82333;
}

/* Área Principal */
.dashboard-main {
  display: flex;
  padding: 2rem;
}

.activity-panel {
  flex: 1;
  margin-right: 2rem;
}

.activity-panel h2 {
  margin-bottom: 1rem;
}

.activity-panel p {
  margin-bottom: 0.5rem;
}

.features {
  flex: 2;
  display: inline-block;
  justify-content: space-between;
}

.feature-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 45%;
}

.feature-box h3 {
  margin-bottom: 1.5rem;
}

.feature-box button {
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-start-simulado {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-start-simulado:hover {
  background-color: #0056b3;
}

/* Pop-ups */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.simulado-popup, .summary-popup, .flashcard-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 101;
  width: 80%;
  max-width: 600px;
}

.question-box {
  margin-bottom: 1rem;
}

.options, .flashcard-options {
  display: flex;
  flex-direction: column;
}

.option-button, .flashcard-option-button {
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.option-button:hover, .flashcard-option-button:hover {
  background-color: #0056b3;
}

.btn {
  padding: 0.5rem;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #c82333;
}

.btn-next {
  background-color: #28a745;
}

.btn-next:hover {
  background-color: #218838;
}

.btn-cancel {
  background-color: #6c757d;
}

.btn-cancel:hover {
  background-color: #5a6268;
}

.summary-content p {
  margin: 0.5rem 0;
}
</style>
