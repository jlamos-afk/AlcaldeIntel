<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title>Register</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
              <v-text-field v-model="confirm" label="Confirm Password" type="password" :rules="[matchRule]" required></v-text-field>
              <v-btn type="submit" color="primary" class="mt-4" block>Register</v-btn>
            </v-form>
            <v-btn variant="text" class="mt-2" @click="goLogin">Login</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const router = useRouter()
const auth = useAuthStore()

const matchRule = v => v === password.value || 'Passwords must match'

const submit = async () => {
  await auth.register({ name: name.value, email: email.value, password: password.value })
  router.push({ name: 'login' })
}

const goLogin = () => router.push({ name: 'login' })
</script>
