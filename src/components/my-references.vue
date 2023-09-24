<template>
  <div class="">
    <q-card
      style=""
      :class="$q.dark.isActive ? '' : 'text-black'"
      class="animated fadeIn"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLsTb_E8xCin64PZ2cdFfFFd-ndFt9_5TX6SbLIfqjSCA=s288-c-no"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Referencias y/o trabajos realizados</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            :control-color="$q.dark.isActive ? '' : 'primary'"
            padding
            arrows
            autoplay
            infinite
            height="300px"
            class="shadow-1 rounded-borders"
          >
            <q-carousel-slide name="onexfy" class="column no-wrap flex-center">
              <q-icon
                name="img:https://yt3.googleusercontent.com/IrJEe5ZmiBHKOWzuCt55wDdiXSdYrHIa6j9SXE9cbP20gcAR-jJa9doS_Jgrc_-mqO7x7fq1=s900-c-k-c0x00ffffff-no-rj"
                size="100px"
              />
              <div class="q-mt-md text-center">
                <q-item
                  v-ripple
                  clickable
                  href="https://onexfy.com/"
                  target="_back"
                >
                  <q-item-section avatar> Onexfy CRM </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="laticom" class="column no-wrap flex-center">
              <q-icon
                name="img:https://laticom.com.ve/wp-content/uploads/2021/06/cropped-Laticom-Emblema-3-1.png"
                size="100px"
              />
              <div class="q-mt-md text-center">
                <q-item
                  v-ripple
                  clickable
                  href="https://laticom.com.ve/"
                  target="_back"
                >
                  <q-item-section avatar> LATICOM </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="ingeniados"
              class="column no-wrap flex-center"
            >
              <q-icon
                name="img:data:image/jpeg;base64,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"
                size="100px"
              />
              <div class="q-mt-md text-center">
                <q-item
                  v-ripple
                  clickable
                  href="https://ingeniados.com/"
                  target="_back"
                >
                  <q-item-section avatar> Ingeniados </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="aff" class="column no-wrap flex-center">
              <q-icon
                name="img:http://aff.com.sv/wp-content/uploads/2020/11/AFFlargo-1.svg"
                size="150px"
              />
              <div class="q-mt-md text-center">
                <q-item
                  v-ripple
                  clickable
                  href="http://aff.com.sv/"
                  target="_back"
                >
                  <q-item-section avatar> Aff </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="itermi" class="column no-wrap flex-center">
              <q-icon
                name="img:https://itermi.webdrafts.cloud/wp-content/uploads/2023/09/LOGO-ITERMI.png"
                size="150px"
              />
              <div class="q-mt-md text-center">
                <q-item
                  v-ripple
                  clickable
                  href="https://itermi.webdrafts.cloud/"
                  target="_back"
                >
                  <q-item-section avatar> Itermi </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const slide = ref('onexfy');
</script>
