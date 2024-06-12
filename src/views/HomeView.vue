<template>
  <div>
    <EarnedRunAverage />
    <BattingAverage />
  </div>
</template>

<script>
import EarnedRunAverage from '../components/EarnedRunAverage.vue';
import BattingAverage from '../components/BattingAverage.vue';


export default {
  components: {
    EarnedRunAverage,
    BattingAverage,
    
  }

}
</script>

<style scoped>

</style>