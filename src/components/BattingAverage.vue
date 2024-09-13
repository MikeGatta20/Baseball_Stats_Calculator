<template>
    <div class="scrollable-container-2">
    <div class="batting-average-container">
     <h2>Batting Average Calculator :</h2>
     <h2> TESTING</h2>
    </div>

    
    <form @submit.prevent="calculateBattingAverage">
            <section class="batting">
              <div id='box1'>
                <label for="battingAverage">Enter Total Number of Hits:</label>
                <input type="number" id="battingAverage" name="battingAverage" min="0" max="10000" v-model="battingAverage">
              </div> 
            </section>
    </form>
    </div>

</template>

<script>


export default {

}
</script>

<style>

.batting-average-container { 
    text-align: left;
    margin-top: 5px;
}

.scrollable-container-2 {
  overflow: auto; /* Ensure scrolling if content overflows */
}

</style>
