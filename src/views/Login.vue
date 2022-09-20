<template>
  <center>
      <v-card tonal width="800" class="ma-10 pa-10" elevation="10">
        <v-card-title>
          <h1 style="font-weight: bold; margin-bottom: 20px;">Sign In</h1>
        </v-card-title>
        <div v-if="error" class="alert alert-danger">{{error}}</div>
        <form action="#" @submit.prevent="Login">
          <div class="textfields">
            <v-text-field prepend-icon="mdi-email" color="purple" class="mb-5" id="email" type="email" label="Email" v-model="email">
            </v-text-field>
            <v-text-field prepend-icon="mdi-lock" color="purple" id="password" type="password" label="Password" v-model="password">
            </v-text-field>
          </div>
          <v-btn id="loginBtn" elevation="5" height="60" block type="submit">
            <strong>Login</strong>
          </v-btn>

          <h3><strong>New user?</strong><router-link to="/register" id="link-register"><strong> Create an account</strong></router-link></h3>
        </form>
      </v-card>
  </center>
</template>
  
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: "LoginComponent",
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const Login = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/dashboard')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { Login, email, password, error }
  }
};
</script>
<style>
#loginBtn {
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: #a0a0ee;
  color: white;
  font-size: 20px;
}

#loginBtn:hover {
  background-color: #4e1e7c;
  color: white;
}

.textfields {
  margin-top: 40px;
  margin-bottom: 20px;
}

#link-register {
  color: #4e1e7c;
  background-color: transparent;
}

#link-register:hover {
  color: #cc66ee;
}
</style>