<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
        <div style="'{position:sticky; top:0px};'">
          Please input your name and contact information if you would liek to attend the party.
        </div>
          <div class="mt-8">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                density="compact"
                v-model="name"
                :rules="nameRules"
                label="Name"
              ></v-text-field>

              <v-text-field
                density="compact"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
              ></v-text-field>

              <v-text-field
                density="compact"
                v-model="phone"
                label="Phone"
              ></v-text-field>

            </v-form>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false;">Summit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <div>
    <v-img :src="require('@/assets/image/wedding.png')">
      <div class="item">
        <div class="items">
          <v-img :src="require('@/assets/image/wh_top.png')" />
        </div>
        <div class="d-flex align-end justify-end items">
          <div class="button-box">
            <div class="title_font">Wellcome to my wedding</div>
            <div>July 26th, 1977</div>
            <v-btn rounded="pill" variant="outlined" @click="dialog = true">
              Attendance
            </v-btn>
          </div>
        </div>
        <div class="items">
          <div>{{ name }} {{ email }} {{ phone }}</div>

        </div>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phone:'',

    };
  },
  methods:{
    validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
  }
};
</script>

<style>


.title_font{
    font-family: "Dancing Script", sans-serif;
    font-size : 2rem;
}


</style>