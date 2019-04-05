<template>
  <div>
    
    <h2>Rate this muhfucka!</h2>
    <hr>
    <p>
      <a :href="submission.file " target="_blank">{{submission.title}}</a>, by {{submission.author}}
    </p>
    
    <p>Author Letter: {{submission.author_letter}}</p>
    <p>Genre: {{submission.genre}}</p>
    <p>Author's Primary Genre: {{submission.primary_genre}}</p>
    <p>General Notes: {{submission.notes}}</p>

    <br>
  
    <section>
      <b-field style="display:block">
        <label for="radioButton" class="label">Who are you?</label>
  
        <div class="flexme">
          <b-radio-button v-model="radioButton" native-value="Ashley" type="is-info">
            <span>Ashley</span>
          </b-radio-button>
  
          <b-radio-button v-model="radioButton" native-value="Brad" type="is-info">
            <span>Brad</span>
          </b-radio-button>
  
          <b-radio-button v-model="radioButton" native-value="Michael" type="is-info">
            <span>Michael</span>
          </b-radio-button>
        </div>
      </b-field>
      <!-- <p class="content">
                <b>Selection:</b>
                {{ radioButton }}
      </p>-->
      <div class="field">
        <label class="label">Numerical Rating: 0-10</label>
        <div class="control">
          <input
            class="input littleInput"
            type="number"
            min="0"
            max="10"
            v-model="rating.numRating"
          >
        </div>
        <p>0 = "I'll cut you bitches if we publish this."</p>
        <p>10 = "I'll cut you bitches if we don't publish this."</p>
      </div>
       <div class="field">
      <label class="label">Comments / Reasons for your rating</label>
      <div class="control">
        <textarea class="textarea" name id cols="70" rows="10" v-model="rating.notesRating"></textarea>
      </div>
    </div>
    </section>
  
   
  
    <button class="button" @click="sendRating">Submit</button>
  </div>

</template>


<script>
import firebase from "../Firebase";
import router from "../router";
export default {
  name: "rateSubmission",
  data() {
    return {
      key: this.$route.params.id,
      submission: {},
      radioButton: "",
      rating: { numRating: "", notesRating: "" }
    };
  },
  created() {
    const ref = firebase
      .firestore()
      .collection("issue_Two")
      .doc(this.$route.params.id);

    let theSubmission = ref.get().then(doc => {
      if (doc.exists) {
        this.submission = doc.data();
        console.log(doc.data());
      } else {
        alert("No such document!");
      }
    });
  },

  methods: {
    sendRating(evt) {
      evt.preventDefault();
      // TODO: need to create an upper level "ratings" and then below that byName etc
      this.submission["ratings"][this.radioButton] = this.rating;
      // this.submission["ratings"][this.radioButton] = this.rating;
      const updateRef = firebase
        .firestore()
        .collection(`issue_${this.submission.issue}`)
        .doc(this.$route.params.id)
        .set(this.submission, { merge: true });
    },
    goHome() {
      router.push("/view-submissions");
    },
    processRating() {
      let newName = `ratingBy${this.radioButton}`;
      newName = this.rating;
      this.submission[`ratingBy${this.radioButton}`] = this.rating;
      console.log(this.submission);
      return newName;
    }
  }
};
</script>
<style scoped>
button {
  margin: 1rem 0.5rem;
}
.littleInput {
  width: 85px;
}
.flexme {
  display: flex;
}
</style>
