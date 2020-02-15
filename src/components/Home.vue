<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mx-auto" md="6">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1">Personal Details</v-stepper-step>

            <v-stepper-content step="1">
              <v-card color="lighten-1">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" xs="12" class="py-0">
                      <v-text-field
                        v-model="fullInformation.firstName"
                        :counter="10"
                        :rules="nameRules"
                        label="First Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" xs="12" class="py-0">
                      <v-text-field
                        v-model="fullInformation.lastName"
                        :counter="10"
                        :rules="nameRules"
                        label="Last Name"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" class="py-0">
                      <v-text-field
                        v-model="fullInformation.phoneNumber"
                        :counter="10"
                        return-masked-value
                        :rules="phoneRules"
                        label="Phone Number"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" class="py-4">
                      <v-text-field
                        v-model="fullInformation.email"
                        :rules="emailRules"
                        label="Email"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <v-btn class="mt-2" color="primary" @click="e6 = 2">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">Legal Identification Details</v-stepper-step>

            <v-stepper-content step="2">
              <v-card color="lighten-1">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" class="py-0">
                      <v-text-field
                        v-model="fullInformation.identificationNumber"
                        :rules="identificationRules"
                        label="ID Number"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" class="py-0">
                      <v-text-field
                        v-model="fullInformation.kraPin"
                        :rules="kraRules"
                        label="KRA Pin"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <v-btn class="mt-3" text @click="e6 = 1">Previous</v-btn>
              <v-btn class="mt-3" color="primary" @click="e6 = 3">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Company Details</v-stepper-step>

            <v-stepper-content step="3">
              <v-card color="lighten-1" class="mb-12">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" xs="12" class="py-0">
                      <v-text-field
                        v-model="fullInformation.companyName"
                        :counter="10"
                        :rules="companyNameRules"
                        label="Company Name"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" xs="12" class="py-0">
                      <v-autocomplete
                        ref="town"
                        v-model="fullInformation.town"
                        :rules="[
                          () =>
                            !!fullInformation.town || 'This field is required'
                        ]"
                        :items="towns"
                        label="Company Location/Town"
                        placeholder="Select..."
                        required
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" xs="12" class="py-0">
                      <v-text-field
                        v-model="fullInformation.companyRevenue"
                        :rules="[
                          () =>
                            !!fullInformation.companyRevenue ||
                            'This field is required'
                        ]"
                        label="Company Revenue"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <v-btn text @click="e6 = 2">Previous</v-btn>
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4 white--text"
                @click="validate"
              >Submit</v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    e6: 1,
    lazy: false,
    valid: true,
    fullInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: null,
      identificationNumber: null,
      kraPin: "",
      companyName: "",
      town: "",
      companyRevenue: ""
    },

    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    phoneRules: [
      v => !!v || "Your Phone Number is required",

      v =>
        (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v) &&
          v.length <= 10) ||
        "Your Phone number must be valid"
    ],
    identificationRules: [
      v => !!v || "Your Identification Number is required",
      v =>
        (v && v.length === 8) ||
        "Your Identification Number must be 8 characters"
    ],
    kraRules: [
      v => !!v || "Your KRA PIN is required",
      v => (v && v.length === 11) || "KRA PIN must be eleven characters"
    ],
    companyNameRules: [
      v => !!v || "Company Name is required",
      v => (v && v.length <= 10) || "Company Name must be 10 characters"
    ]
  }),
  computed: {
    towns() {
      return this.$store.getters.towns;
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
      console.log(this.fullInformation);
      this.$store.dispatch("details", this.fullInformation);
      this.$router.push("/details");
    }
  }
};
</script>
<style scoped></style>
