<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="black"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Id"
                    v-model="id"
                    name="id"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="black" dark @click="login(id, password)">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    login (id, password) {
      this.$store.dispatch('LOGIN', { id, password })
        .then(() => this.redirect())
    },
    redirect () {
      const { search } = window.location
      if (search === '') {
        this.$router.push('/')
      } else {
        const tokens = search.replace(/^\?/, '').split('&')
        console.log('tokens : ' + tokens)
        const { returnPath } = tokens.reduce((qs, tkn) => {
          console.log(qs, tkn)
          const pair = tkn.split('=')
          qs[pair[0]] = decodeURIComponent(pair[1])
          return qs
        })
        // 리다이렉트 처리
        console.log('returnPath : ' + returnPath)
        this.$router.push('mypage')
      }
    }
  }
}
</script>
