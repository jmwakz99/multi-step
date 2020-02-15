<template>
  <div>
    <v-container>
      <v-row v-if="alert === true" @click="clearAlert">
        <v-col xs="12" sm="8" md="6" class="mx-auto">
          <Alert />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="8" md="6" class="mx-auto">
          <v-card color="white" height="600">
            <div>
              <v-card-title>
                <h1 class="mx-auto" style="text-decoration: underline">DETAILS</h1>
              </v-card-title>
            </div>

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left black--text">First Name:</th>
                    <th class="text-left">{{ details.firstName }}</th>
                  </tr>
                  <tr>
                    <th class="text-left black--text">LastName:</th>
                    <th class="text-left">{{ details.lastName }}</th>
                  </tr>
                  <tr>
                    <th class="text-left black--text">Company Name:</th>
                    <th class="text-left">{{ details.companyName }}</th>
                  </tr>
                  <tr>
                    <th class="text-left black--text">Email:</th>
                    <th class="text-left">{{ details.email }}</th>
                  </tr>
                  <tr>
                    <th class="text-left black--text">Phone Number:</th>
                    <th class="text-left">{{ details.phoneNumber }}</th>
                  </tr>
                  <tr>
                    <th class="text-left black--text">ID Number:</th>
                    <th class="text-left">{{ details.identificationNumber }}</th>
                  </tr>
                  <tr>
                    <th class="text-left black--text">Town:</th>
                    <th class="text-left">{{ details.town }}</th>
                  </tr>
                  <tr>
                    <th class="text-left black--text">KRA Pin:</th>
                    <th class="text-left">{{ details.kraPin }}</th>
                  </tr>
                  <tr>
                    <th class="text-left black--text">Company Revenue:</th>
                    <th class="text-left">KSH {{ details.companyRevenue }}</th>
                  </tr>
                </thead>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  computed: {
    details() {
      return this.$store.getters.details;
    },
    alert() {
      return this.$store.getters.alert;
    }
  },
  mounted() {
    setTimeout(this.clearAlert, 5000);
  },
  methods: {
    clearAlert() {
      this.$store.dispatch("clearAlert");
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
div {
  background-color: cornsilk;
  font-family: "Josefin Sans", sans-serif;
}
</style>
