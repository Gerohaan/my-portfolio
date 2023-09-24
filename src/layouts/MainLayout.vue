<template>
  <q-layout class="app-font" view="lHh Lpr lFf">
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <q-header>
      <q-toolbar :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'">
        <q-btn
          @click="mainTabChange()"
          class="btn-animation"
          flat
          no-caps
          label="Gerohaan Torrealba"
        />
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs v-model="actionsTab" shrink>
          <q-btn
            @click="$q.dark.isActive = !$q.dark.isActive"
            flat
            round
            :icon="
              $q.dark.isActive ? 'img:icons/sun.svg' : 'img:icons/moon.svg'
            "
          ></q-btn>
          <q-tab no-caps name="my-information" label="Mi información" />
          <q-tab no-caps name="my-experience" label="Experiencia" />
          <q-tab no-caps name="my-skills" label="Habilidades" />
          <q-tab no-caps name="my-references" label="Algunas referencias" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useVarGTStore } from 'src/stores/varGT';
const useVarGT = useVarGTStore();
const $q = useQuasar();
const actionsTab = ref('');
const leftDrawerOpen = ref(false);
watch(actionsTab, async (newValue, oldValue) => {
  useVarGT.changeTab(newValue);
});
const mainTabChange = () => {
  useVarGT.changeTab('main-tab');
  actionsTab.value = '';
};
onMounted(() => {
  $q.dark.set(true);
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Indie+Flower&family=Kalam:wght@700&display=swap');

.app-font {
  font-family: 'Courgette', cursive;
  font-family: 'Indie Flower', cursive;
  font-family: 'Kalam', cursive;
  font-size: 100%;
}
.btn-animation {
  animation: pulsate 2s ease-in-out infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Exo:400,700');

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: 'Exo', sans-serif;
}

.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}

.context h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
