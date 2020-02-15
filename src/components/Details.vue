<template>
  <div>
    <v-container>
      <v-row v-if="alert === true" @click="clearAlert">
        <v-col cols="12" xs="12" sm="8" md="6" class="mx-auto">
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
            <v-container>
              <v-row>
                <v-col xs="12" sm="12" md="12">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left black--text">First Name:</th>
                          <th class="text-left detail-right">{{ details.firstName }}</th>
                        </tr>
                        <tr>
                          <th class="text-left black--text">LastName:</th>
                          <th class="text-left detail-right">{{ details.lastName }}</th>
                        </tr>
                        <tr>
                          <th class="text-left black--text">Company Name:</th>
                          <th class="text-left detail-right">{{ details.companyName }}</th>
                        </tr>
                        <tr>
                          <th class="text-left black--text">Email:</th>
                          <th class="text-left detail-right">{{ details.email }}</th>
                        </tr>
                        <tr>
                          <th class="text-left black--text">Phone Number:</th>
                          <th class="text-left detail-right">{{ details.phoneNumber }}</th>
                        </tr>
                        <tr>
                          <th class="text-left black--text">ID Number:</th>
                          <th class="text-left detail-right">{{ details.identificationNumber }}</th>
                        </tr>
                        <tr>
                          <th class="text-left black--text">Town:</th>
                          <th class="text-left detail-right">{{ details.town }}</th>
                        </tr>
                        <tr>
                          <th class="text-left black--text">KRA Pin:</th>
                          <th class="text-left detail-right">{{ details.kraPin }}</th>
                        </tr>
                        <tr>
                          <th class="text-left black--text">Company Revenue:</th>
                          <th class="text-left detail-right">KSH {{ details.companyRevenue }}</th>
                        </tr>
                      </thead>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-container>
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
  methods: {
    clearAlert() {
      this.$store.dispatch("clearAlert");
    }
  },
  mounted() {
    setTimeout(this.clearAlert, 5000);
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
div {
  background-color: cornsilk;
  font-family: "Josefin Sans", sans-serif;
}
.black--text {
  font-size: 1rem;
}
</style>
