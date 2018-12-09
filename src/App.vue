<template lang="pug">
#app
  Navigation
  router-view.router
</template>

<script>
import '@/styles/index.scss'
import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
}
</style>
