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
          <q-item-label>Habilidades y herramientas utilizadas</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-item-section>
            <q-item-label>Herramientas dominadas</q-item-label>
          </q-item-section>
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
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-icon name="img:icons/adobe-dreamweaver.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section avatar> ADOBE DREAMWEAVER </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-icon name="img:icons/photoshop.svg" size="100px" />
              <div class="q-mt-md text-center">ADOBE PHOTOSHOP (BASICO)</div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-icon name="img:icons/visual-studio-code.svg" size="100px" />
              <div class="q-mt-md text-center">VISUAL STUDIO CODE</div>
            </q-carousel-slide>
            <q-carousel-slide name="post" class="column no-wrap flex-center">
              <q-icon name="img:icons/postman.svg" size="100px" />
              <div class="q-mt-md text-center">POSTMAN</div>
            </q-carousel-slide>
            <q-carousel-slide name="insom" class="column no-wrap flex-center">
              <q-icon name="img:icons/insomnia.svg" size="100px" />
              <div class="q-mt-md text-center">INSOMNIA</div>
            </q-carousel-slide>
            <q-carousel-slide name="cant" class="column no-wrap flex-center">
              <q-icon name="img:icons/camtasia-studio.svg" size="100px" />
              <div class="q-mt-md text-center">CAMTASIA STUDIO</div>
            </q-carousel-slide>
            <q-carousel-slide name="fille" class="column no-wrap flex-center">
              <q-icon name="img:icons/FileZilla.svg" size="100px" />
              <div class="q-mt-md text-center">FILEZILLA</div>
            </q-carousel-slide>
            <q-carousel-slide name="figma" class="column no-wrap flex-center">
              <q-icon name="img:icons/figma.svg" size="100px" />
              <div class="q-mt-md text-center">FIGMA</div>
            </q-carousel-slide>
            <q-carousel-slide name="trello" class="column no-wrap flex-center">
              <q-icon name="img:icons/trello.svg" size="100px" />
              <div class="q-mt-md text-center">TRELLO</div>
            </q-carousel-slide>
            <q-carousel-slide name="git" class="column no-wrap flex-center">
              <q-icon name="img:icons/git.svg" size="100px" />
              <div class="q-mt-md text-center">GIT</div>
            </q-carousel-slide>
          </q-carousel>
          <q-item-section>
            <q-item-label>Programación/Desarrollo</q-item-label>
          </q-item-section>
          <q-carousel
            v-model="slide2"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            :control-color="$q.dark.isActive ? '' : 'primary'"
            navigation-icon="radio_button_unchecked"
            padding
            autoplay
            arrows
            infinite
            height="300px"
            class="shadow-1 rounded-borders"
          >
            <q-carousel-slide name="html" class="column no-wrap flex-center">
              <q-icon name="img:icons/html.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> HTML </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="css" class="column no-wrap flex-center">
              <q-icon name="img:icons/css.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> CSS </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="javascript"
              class="column no-wrap flex-center"
            >
              <q-icon name="img:icons/js.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> JAVASCRIPT </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="wordpress"
              class="column no-wrap flex-center"
            >
              <q-icon name="img:icons/wordpress.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> WORDPRESS </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="vue" class="column no-wrap flex-center">
              <q-icon name="img:icons/vue.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> VUE </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="quasar" class="column no-wrap flex-center">
              <q-icon name="img:icons/quasar.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> QUASAR FRAMEWORK </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="vuetify" class="column no-wrap flex-center">
              <q-icon name="img:icons/vuetify.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> VUETIFY </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="nodejs" class="column no-wrap flex-center">
              <q-icon name="img:icons/nodejs.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> NODE JS </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="expressjs"
              class="column no-wrap flex-center"
            >
              <q-icon name="img:icons/express.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> EXPRESS JS </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="sequelize"
              class="column no-wrap flex-center"
            >
              <q-icon name="img:icons/sequelize.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> SEQUELIZE </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="mysql" class="column no-wrap flex-center">
              <q-icon name="img:icons/mysql.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> MYSQL </q-item-section>
                </q-item>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              name="postgresql"
              class="column no-wrap flex-center"
            >
              <q-icon name="img:icons/pgsql.svg" size="100px" />
              <div class="q-mt-md text-center">
                <q-item v-ripple>
                  <q-item-section> POSTGRESQL </q-item-section>
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

const slide = ref('style');
const slide2 = ref('html');
</script>
