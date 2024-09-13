<template>
  <div id="home">
    <div id="left-pane">
      <EarnedRunAverage />
    </div>
    <div id="right-pane">
      <BattingAverage />
    </div>
  </div>
</template>

<script>
import EarnedRunAverage from '../components/EarnedRunAverage.vue';
import BattingAverage from '../components/BattingAverage.vue';

export default {
  components: {
    EarnedRunAverage,
    BattingAverage
  }
}
</script>

<style scoped>
#home {
  display: flex;
}

#left-pane {
  flex: 1;
}

#right-pane {
  flex: 1;
}
</style>