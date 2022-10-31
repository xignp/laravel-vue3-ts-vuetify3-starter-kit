<script setup lang="ts">
import { ref } from 'vue'
const isShowDrawer = ref<boolean>(false)
</script>

<template>
  <v-navigation-drawer v-model="isShowDrawer" disable-resize-watcher>
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <v-list-item-title class="title">Menu</v-list-item-title>
        <v-btn @click="isShowDrawer = false" variant="text" icon="mdi-close"></v-btn>
      </div>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item prepend-icon="mdi-home" to="/">
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list nav>
        <v-list-item prepend-icon="mdi-cube-outline" to="/services">
          <v-list-item-title>SERVICES</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list nav>
        <v-list-item prepend-icon="mdi-office-building-outline" to="/company">
          <v-list-item-title>COMPANY</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list nav>
        <v-list-item prepend-icon="mdi-newspaper-variant-outline" to="/news">
          <v-list-item-title>NEWS</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>

  <v-app-bar color="primary" absolute>
    <v-app-bar-nav-icon @click="isShowDrawer = !isShowDrawer" class="d-md-none"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <h1>
        <router-link to="/">SampleTitle</router-link>
      </h1>
    </v-toolbar-title>
    <v-spacer class="d-none d-md-block"></v-spacer>
    <v-toolbar-items class="d-none d-md-block">
      <v-btn to="/home" variant="text">HOME</v-btn>
      <v-btn to="/services" variant="text">SERVICES</v-btn>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" append-icon="mdi-menu-down">ABOUT US</v-btn>
        </template>
        <v-list>
          <v-list-item to="/company">
            <v-list-item-title>OUR COMPANY</v-list-item-title>
          </v-list-item>
          <v-list-item to="/news">
            <v-list-item-title>NEWS</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>
