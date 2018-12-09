<template lang="pug">
.navigation
  .links
    a.link(v-for="route in routes" :href="route.href" @click="onLinkClick")
      span.title(v-if="route.title" v-html="route.title")
      img.icon(v-if="route.img" :src="route.img")
</template>

<script>

import Vue from 'vue'
import Component from 'vue-class-component'
import { Observer } from 'mobx-vue'
import store from '@/state/site'
import routes from '@/router/routes'

@Observer
@Component()
class Navigation extends Vue {
  routes = routes.filter(route => route.navName != null).map(route => ({ title: route.navName, href: route.path }))

  store = store

  created() {}

  mounted() {
    // console.log('before:', JSON.stringify(this.store.backgroundColor))
    this.store.changeBackgroundColor('#000')
    console.log('after:', JSON.stringify(this.store.backgroundColor))
  }

  // events
  onLinkClick(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const isExternal = this.isExternalLink(href)
    if (!isExternal) {
      this.$router.push(href)
    } else {
      window.open(href, true)
    }
  }

  // helpers
  isExternalLink(link) {
    return link && (/https?:.*/gi.exec(link) != null)
  }
}
export default Navigation

</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';
.navigation{
}
</style>
