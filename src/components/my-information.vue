<template>
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
        <q-item-label>Gerohaan Delfín Torrealba Martínez</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section>
      <q-card-section
        class="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
      >
        Datos personales
      </q-card-section>

      <q-separator vertical />

      <q-card-section
        class="col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"
      >
        <q-list bordered padding class="rounded-borders" style="">
          <q-item v-ripple>
            <q-item-section avatar> Cédula: </q-item-section>

            <q-item-section>
              <q-item-label caption>19.188.435</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple>
            <q-item-section avatar> Nacionalidad: </q-item-section>

            <q-item-section>
              <q-item-label caption>Venezolana</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple>
            <q-item-section avatar> Fecha de nacimiento: </q-item-section>

            <q-item-section>
              <q-item-label caption>29 de agosto de 1989</q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple>
            <q-item-section avatar> Correo: </q-item-section>

            <q-item-section>
              <q-item-label caption>gero.delfin@gmail.com </q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple>
            <q-item-section avatar> Teléfono celular: </q-item-section>

            <q-item-section>
              <q-item-label caption> +58 414-351-0401 </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card-section>
    <q-card-section>
      <q-card-section
        class="col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
      >
        Estudios
      </q-card-section>

      <q-separator vertical />

      <q-card-section
        class="col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9"
      >
        <q-list bordered padding class="rounded-borders" style="">
          <q-item v-ripple>
            <q-item-section avatar>
              Bachiller Ciencias:
              <p class="text-caption q-ma-md">
                Diversificado: U.E.N “San juan de Guanaguanare”.
              </p>
            </q-item-section>
          </q-item>
          <q-item v-ripple>
            <q-item-section avatar>
              Ingeniería de Sistemas:
              <p class="text-caption q-ma-md">
                Superior: Universidad Nacional Experimental Politécnica de la
                Fuerza armada Nacional.
              </p>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
