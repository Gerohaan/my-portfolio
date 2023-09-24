<template>
  <q-card class="animated fadeIn" flat bordered>
    <q-card-section>
      <q-card-section
        class="col col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 flex flex-center"
      >
        <q-avatar size="200px">
          <q-img
            class="rounded-borders"
            src="https://lh3.googleusercontent.com/a/ACg8ocLsTb_E8xCin64PZ2cdFfFFd-ndFt9_5TX6SbLIfqjSCA=s288-c-no"
          />
        </q-avatar>
      </q-card-section>
      <q-card-section
        class="col col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 q-pt-xs"
      >
        <div
          :class="$q.dark.isActive ? '' : 'text-black'"
          class="text-overline"
        >
          Desarrollador Front End
        </div>
        <div
          :class="$q.dark.isActive ? '' : 'text-black'"
          class="text-h5 q-mt-sm q-mb-xs"
        >
          Gerohaan Torrealba
        </div>
        <div
          :class="$q.dark.isActive ? '' : 'text-black'"
          class="text-caption text-grey"
        >
          Ingeniero de sistemas con más de 5 años de experiencia en el area de
          desarrollo web, apasionado por la tecnología y la innovación.
          <br />
          Totalmente convencido de que la tecnología bien aplicada en el mundo
          podrá brindar oportunidades a todos por igual en el futuro.
        </div>
        <br />
        <div class="text-caption text-grey">
          "Una máquina puede hacer el trabajo de cincuenta hombres ordinarios.
          <br />
          Ninguna máquina puede hacer el trabajo de un hombre extraordinario"
          (Elbert Hubbard)
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn
        class="col"
        flat
        rounded
        icon="img:icons/whatsapp.svg"
        href="https://api.whatsapp.com/send?phone=584143510401&"
        target="_bank"
      />
      <q-btn
        class="col"
        flat
        rounded
        icon="img:icons/linkedin.svg"
        href="https://www.linkedin.com/in/gerohaan-torrealba-466242162"
        target="_bank"
      />
      <q-btn
        class="col"
        flat
        rounded
        icon="img:icons/facebook.svg"
        href="https://www.facebook.com/profile.php?id=100014148514114"
        target="_bank"
      />
      <q-btn
        class="col"
        flat
        rounded
        :icon="
          $q.dark.isActive
            ? 'img:icons/github-white.svg'
            : 'img:icons/github.svg'
        "
        href="https://github.com/gerohaan"
        target="_bank"
      />
      <q-btn
        class="col"
        padding="none"
        flat
        rounded
        icon="img:icons/gmail.svg"
        href="mailto:gero.delfin@gmail.com"
        target="_bank"
      />
      <q-space></q-space>
      <q-btn
        class="col"
        href="https://drive.google.com/file/d/1LAEho9fveNJbxyTVIz3xbOPHZPA6CCG_/view?usp=sharing"
        target="_bank"
        flat
        rounded
        no-caps
        color="primary"
      >
        Mi CV
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
