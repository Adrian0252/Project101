<template>
  <center>
    <v-card tonal width="800" class="ma-10 pa-10" elevation="10">
      <v-card-title>
        <h1 style="font-weight: bold; margin-bottom: 40px;">Register</h1>
      </v-card-title>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
      <form action="#" @submit.prevent="Register">
        <v-text-field prepend-icon="mdi-account" color="purple" class="mb-5" label="Name" id="name" type="name"
          name="name" required autofocus v-model="name">
        </v-text-field>
        <v-text-field prepend-icon="mdi-email" color="purple" class="mb-5" label="Email" id="email" type="email"
          name="email" required autofocus v-model="email">
        </v-text-field>
        <v-text-field prepend-icon="mdi-lock" color="purple" class="mb-5" label="Password" id="password"
          type="password" name="password" required v-model="password">
        </v-text-field>
        <v-btn id="registerBtn" elevation="5" height="60" block type="submit">
          <strong>Register</strong>
        </v-btn>
        <h3><strong>Already have an account?</strong><router-link to="/" id="link-signin"><strong> Sign in</strong></router-link>
        </h3>

      </form>
    </v-card>
  </center>
</template>


<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: "RegisterComponent",
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const Register = async () => {
      try {
        await store.dispatch('register', {
          email: email.value,
          password: password.value,
          name: name.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { Register, name, email, password, error }
  }
};
</script>

<style>
#registerBtn {
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: #a0a0ee;
  color: white;
  font-size: 20px;
}

#registerBtn:hover {
  background-color: #4e1e7c;
  color: white;
}

#link-signin {
  color: #4e1e7c;
  background-color: transparent;
}

#link-signin:hover {
  color: #cc66ee;
}
</style>