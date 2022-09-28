<template>
      <v-app>
  <div>
    <!-- <h1>{{ displaySize }}</h1> -->
    <v-container fluid>
      <v-row justify="center">
        <v-col class="ma-0 pa-0" cols="auto">
          <div>
          <!-- Main             -->
          <v-card max-width="800px" flat>
            <FrontPageVue></FrontPageVue>
          </v-card>

          <!-- Gallery -->
          <v-card max-width="800px" flat>
            <Gallery></Gallery>
          </v-card>

          <!-- Map -->
          <v-card max-width="800px" >
            <KakaoMapVue></KakaoMapVue>
          </v-card>

          <v-card max-width="800px" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            adipisci porro quam dicta at incidunt ipsum, tenetur repellat maxime
            eaque fugiat alias in, nesciunt mollitia harum vero autem sint
            eligendi eveniet eos velit dolores! Eaque quis vel eum accusantium
            obcaecati explicabo maiores excepturi quod incidunt corporis.
          </v-card>

        </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</v-app>
</template>
<script>
import FrontPageVue from "./components/FrontPage.vue";
import Gallery from "./components/GallEry.vue";
import KakaoMapVue from "./components/KakaoMap.vue";

import { useDisplay } from "vuetify";

export default {
  name: "App",
  components: {
    FrontPageVue,
    Gallery,
    KakaoMapVue,
  },
  computed: {
    displaySize() {
      return this.$vuetify.display.mobile;
    },
    test() {
      return useDisplay();
      // width
      // return mobile
    },
    aaa() {
      return this.$vuetify.display.xs;
    },
  },
  data: () => ({
    mobile: false,
    image01:
      "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043964.jpg?w=2000",
  }),
};
</script>
<style>
</style>