<template>
  <div class="row q-pa-md items-center justify-evenly">
    <div
      style="padding-top: 5%; padding-bottom: 15%"
      class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      v-if="useVarGT.tab === 'main-tab'"
    >
      <main-tab></main-tab>
    </div>
    <div
      style="padding-top: 2%; padding-bottom: 0%"
      class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      v-if="useVarGT.tab === 'my-information'"
    >
      <my-information></my-information>
    </div>
    <div
      style="padding-top: 2%; padding-bottom: 0%"
      class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      v-if="useVarGT.tab === 'my-experience'"
    >
      <my-experience></my-experience>
    </div>
    <div
      style="padding-top: 2%; padding-bottom: 0%"
      class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      v-if="useVarGT.tab === 'my-skills'"
    >
      <my-skills></my-skills>
    </div>
    <div
      style="padding-top: 15%; padding-bottom: 0%"
      class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      v-if="useVarGT.tab === 'my-references'"
    >
      <my-references></my-references>
    </div>
    <div
      style="padding-top: 5%; padding-bottom: 15%"
      class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
      v-if="useVarGT.tab === ''"
    >
      <main-tab></main-tab>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef, Ref } from 'vue';
import mainTab from 'components/main-tab.vue';
import myInformation from 'components/my-information.vue';
import myExperience from 'components/my-experience.vue';
import mySkills from 'components/my-skills.vue';
import myReferences from 'components/my-references.vue';
import { useVarGTStore } from 'src/stores/varGT';
const useVarGT = useVarGTStore();
</script>
