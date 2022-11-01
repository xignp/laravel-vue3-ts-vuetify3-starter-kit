<script setup lang="ts">
import { useCounterStore } from '../store/counter'
const store = useCounterStore()
const incrementCount = () => {
  store.increment()
}
const decrementCount = () => {
  store.decrement()
}
</script>

<template>
  <v-container class="d-flex fill-height align-center justify-center my-16">
    <div class="d-flex flex-column align-center">
      <h2>DEMO: Counter App using Pinia</h2>
      <div class="d-flex align-center mt-10">
        <v-btn @click="incrementCount()" color="success">Increment</v-btn>
        <p class="text-h2 mx-10">{{ store.count }}</p>
        <v-btn @click="decrementCount()" color="error">Decrement</v-btn>
      </div>
    </div>
  </v-container>
</template>
