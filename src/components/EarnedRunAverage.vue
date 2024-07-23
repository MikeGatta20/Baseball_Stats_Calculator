<template>
 <div class = "scrollable-container">
  <section>
    <header>Welcome to the Baseball Stats Calculator!</header>
    <img src="../img/baseball-istockphoto.jpg"/>

    <div class="baseball-stats-calculator">
      <main>
        <div class="content-wrapper">
          <div class="text-wrap">
            <h2>ERA Calculator:</h2>
          </div>
          <form @submit.prevent="calculateERA">
            <section class="container">
              <div id='box1'>
                <label for="earnedRuns">Enter Total Earned Runs:</label>
                <input type="number" id="earnedRuns" name="earnedRuns" min="0" max="1000" v-model="earnedRuns">
              </div> 
            </section>

            <section class="container">
              <div id="box2">
                <label for="inningsPitched">Enter Total Number of Innings Pitched:</label>
                <input type="number" id="inningsPitched" name="inningsPitched" min="0" max="1000" v-model="inningsPitched">
              </div>
            </section>

            <section class="container">
              <div id="box3">
                <label for="regulationInnings">Enter Total Number of Innings in Regulation Game (i.e. High School = 7 | College & Pro = 9):</label>
                <input type="number" id="regulationInnings" name="regulationInnings" min="0" max="9" v-model="regulationInnings">
              </div>
            </section>
            
            <section>
              <div id="box4">
                <label for="result">ERA Result:</label>
                <input type="number" id="result" readonly v-model="eraResult">
              </div>
            </section>
            
            <button type="submit">Calculate ERA</button>
            <button @click="clearFields">Clear Fields</button>
          </form>
        </div>
      </main>
    </div>
  </section>
</div>
</template>

<script>
import ERACalculations from './ERACalculations.vue'


export default {
  components: { ERACalculations },

  data() {
    return {
      earnedRuns: 0,
      inningsPitched: 0,
      regulationInnings: 0,
      eraResult: 0
    };
  },

  methods: {
    calculateERA() {
      this.eraResult = (this.earnedRuns / this.inningsPitched) * this.regulationInnings;

      this.eraResult = this.eraResult.toFixed(2); 
  },
  clearFields() {
    this.earnedRuns = 0;
    this.inningsPitched = 0;
    this.regulationInnings = 0;
    this.eraResult = 0;
  }
}
};
</script>

<style>
header {
    text-align: center;
    color: rgba(0, 0, 0, 0.747);
    font-size: x-large;
}
body{
       
   width: 100%;
   height: auto;
   overflow: hidden;
   background-color: rgb(197, 193, 193);
   font-family: Arial, Helvetica, sans-serif;
}
header {
   text-align: center;
   color: rgba(0, 0, 0, 0.747);
   font-size: x-large;
   font-weight: bold;
  padding: 20px;
}


h1 {
font-size: larger;
}


label {
   display: block;
   margin: 10px;
   
}

input[type=number] {
   background-color: #25a12b;
   color: white;
 }

 img {
  display: block;
  margin: 0 auto; 
  padding: 20px;
  height: 400px;
 } 
 .container {
  display: flex;

 }

.scrollable-container {
  max-height: 90vh;
  overflow-y: auto;
}
</style>