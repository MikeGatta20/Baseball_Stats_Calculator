<template>
 <div class = "scrollable-container">
  <section>
    <header>Welcome to the Baseball Stats Calculator!</header>
    <img class="field" src="../img/baseball-istockphoto.jpg"/>

    <div class="baseball-stats-calculator">
      <main>
        <div class="content-wrapper">
          <div class="text-wrap">
            <h2>ERA Calculator:</h2>
          </div>
          <form @submit.prevent="calculateERA">
            <section class="runs">
              <div id='box1'>
                <label for="earnedRuns">Enter Total Earned Runs:</label>
                <input type="number" id="earnedRuns" name="earnedRuns" min="0" max="1000" v-model="earnedRuns">
              </div> 
            </section>

            <section class="innings">
              <div id="box2">
                <label for="inningsPitched">Enter Total Number of Innings Pitched:</label>
                <input type="number" id="inningsPitched" name="inningsPitched" min="0" step="0.1" v-model.number="inningsPitched">
              </div>
            </section>

            <section class="regulation">
              <div id="box3">
                <label for="regulationInnings">Enter Total Number of Innings in Regulation Game (i.e. High School = 7 | College & Pro = 9):</label>
                <input type="number" id="regulationInnings" name="regulationInnings" min="0" max="9" v-model="regulationInnings">
              </div>
            </section>
            
            <section>
              <div id="calculation">
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
      earnedRuns: "",
      inningsPitched: "",
      regulationInnings: "",
      eraResult: ""
    };
  },

  methods: {
   
  calculateERA() {
   
    const earnedRuns = parseFloat(this.earnedRuns);
    let inningsPitched = parseFloat(this.inningsPitched);
    const regulationInnings = parseFloat(this.regulationInnings);

   
    if (isNaN(earnedRuns) || isNaN(inningsPitched) || isNaN(regulationInnings)) {
      this.eraResult = "Invalid input";
      return;
    }

   
    const inningsArray = inningsPitched.toString().split('.');
    if (inningsArray.length > 1) {
   
      const wholeInnings = parseInt(inningsArray[0], 10);
      const fractionalPart = parseInt(inningsArray[1], 10);

   
      if (fractionalPart === 1) {
        inningsPitched = wholeInnings + 1 / 3;
      } else if (fractionalPart === 2) {
        inningsPitched = wholeInnings + 2 / 3;
      } else {
        inningsPitched = wholeInnings; 
      }
    }

    
    if (inningsPitched > 0) {
      this.eraResult = (earnedRuns / inningsPitched) * regulationInnings;
      this.eraResult = this.eraResult.toFixed(2); 
    } else {
      this.eraResult = "Invalid innings";
    }
  },
  clearFields() {
    this.earnedRuns = "";
    this.inningsPitched ="";
    this.regulationInnings = "";
    this.eraResult = "";
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
   border-radius: 5px;
 }

 img {
  display: block;
  margin: 0 auto; 
  padding: 20px;
  height: 400px;
 } 
 .scrollable-container {
  max-height: 90vh; /* Ensure container doesn't exceed viewport height */
  overflow-y: auto; /* Enable scrolling */
  padding: 30px; /* Add padding to prevent content touching edges */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
.field {
  border-radius: 50px;
}

</style>