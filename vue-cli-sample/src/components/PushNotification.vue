<template lang="pug">
  button.btn(@click='push') push
</template>

<script>
export default {
  name: 'PushNotification',
  data () {
    return {
      permission: ''
    }
  },
  methods: {
    push: () => {
      const title = 'title'
      const options = {
        body: 'hello',
        // icon: 'assets/logo.png',
        data: {
          hoge: 'hoge'
        }
      }
      const notification = new Notification(title, options)
      notification.addEventListener(
        'click',
        event => {
          console.log('clicked')
        },
        false
      )
    }
  },
  mounted () {
    Notification.requestPermission().then(permission => {
      switch (permission) {
        case 'granted':
          this.permission = permission
          break
        case 'denied':
          this.permission = false
          break
        case 'default':
          this.permission = permission
          break
        default:
          this.permission = ''
          break
      }
    })
  }
}
</script>

<style lang="stylus">
</style>