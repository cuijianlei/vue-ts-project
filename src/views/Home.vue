<template>
  <div class="home">
    <count-to @on-click="handleClick" ref="counter" :end="10000"></count-to>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CountTo from '@/components/CountTo';

@Component({
  name: 'HomePage',
  components: {
    CountTo,
  },
})
export default class Home extends Vue {
  protected mounted() {
    setInterval(() => {
      (this.$refs.counter as CountTo).update(Math.random() * 10000); // 这样每2秒钟这里会更新一次，更新的值是随机的
    }, 2000);
  }

  public handleClick(event) {
    console.log(event);
  }
}
</script>
