 
<template>
  <section>
    <h2 >View Submissions</h2>
   
 <b-field label="Which Issue">
            <b-select placeholder="" v-model="whichIssueWanted">
               
       
                    <option value="Three">Three</option>
                    <option value="Four">Four</option>
                    <option value="Five">Five</option>
                    <option value="Six">Six</option>
                    <option value="Seven">Seven</option>
                    <option value="Eight">Eight</option>
                    <option value="Nine">Nine</option>
             
               
            </b-select>
        </b-field>
 
    <hr>
    <b-table :data="subData" :striped="true" :mobile-cards="true" detailed paginated per-page="30">
      <template slot-scope="props">
       
        <b-table-column field="author" label="Author">{{props.row.name}}</b-table-column>

        <b-table-column field="title" label="Title">{{ props.row.title }}</b-table-column>
        <b-table-column field="notes" label="Genre">{{ props.row.genre }}</b-table-column>
        <b-table-column field="reviewers" label="Reviewers">
          <ul class="reviewers-list">
             <li class="reviewers-initials" :class="{getLit: props.row.Brad} "  @click="ratingsModal = true">BC</li> 
            <li class="reviewers-initials" :class="{getLit: props.row.Ashley}">AK</li>
            <li class="reviewers-initials" :class="{getLit: props.row.Michael}">MD</li>
          </ul>
        </b-table-column>
        <!-- <b-table-column field="url" label="URL">
          <a :href="props.row.url" target="_blank">
            <span class="mdi mdi-link"></span>
          </a>
        </b-table-column>-->

        <!-- <b-table-column field="email" label="Email">{{ props.row.email }}</b-table-column> -->
        <b-table-column field="editButton" label=" ">
          <button class="button is-light" @click.stop="rateSubmission(props.row.key, whichIssueWanted)">Rate</button>
          <!-- <button @click="alerrrt(props.row.key)">Edit</button> -->
        </b-table-column>
      </template>
      <template slot="detail" slot-scope="props">
        <ul>
          <li>
            <a :href="props.row.url">Link to the piece</a>
          </li>
          <li>General Notes: {{ props.row.notes }}</li>
<li>For Issue: {{props.row.issue}}</li>
          <li>Author Email: {{props.row.email}}</li>
          <li>Submission's Genre: {{props.row.genre}}</li>
          <li>Author's Primary Genre: {{props.row.primary_genre}}</li>
          <li>Author Letter/Bio: {{props.row.author_letter}}</li>

          <button class="button is-outlined" @click="editSubmission(props.row.key, props.row.issue)">
            <span class="mdi mdi-square-edit-outline"></span>Edit Submission Details
          </button>
          <button class="button is-outlined" @click="finalDecision(props.row.key, props.row.issue)">
            <span class="mdi mdi-square-edit-outline"></span>Make Final Decision
          </button>
        </ul>
      </template>
    </b-table>
        <b-modal :active.sync="ratingsModal" :width="640" scroll="keep"> <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="/static/img/placeholder-1280x960.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="/static/img/placeholder-1280x960.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a>#css</a> <a>#responsive</a>
                        <br>
                        <small>11:09 PM - 1 Jan 2016</small>
                    </div>
                </div>
            </div></b-modal>
  </section>

</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  data() {
    return {
   whichIssueWanted:"Three",
      data: [],
      subData: [],
      // ref: firebase.firestore().collection(this.theIssue),
      ratingsModal: false,
   
     
    };
  },
  watch:{
    whichIssueWanted: function(){
      this.getTheSubmissions()
    }
  },
  created() {
       this.getTheSubmissions()
  },
  methods: {
    getTheSubmissions(){
     firebase.firestore().collection(`issue_${this.whichIssueWanted}`).onSnapshot(querySnapshot => {
      this.subData = [];
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        this.subData.push({
          key: doc.id,
          name: doc.data().author,
          url: doc.data().file,
          title: doc.data().title,
          email: doc.data().email,
          notes: doc.data().notes,
          issue: doc.data().issue,
          author_letter: doc.data().author_letter,
          genre: doc.data().genre,
          primary_genre: doc.data().primary_genre,
          ratings: doc.data().ratings,
          Michael: doc.data().Michael,
          Ashley: doc.data().Ashley,
          Brad: doc.data().Brad
        });
  
      });
    });
    },
    editSubmission(id, issue) {
      router.push({
        name: "editSubmission",
        params: { id: id },
        query: {issue: issue}

      });
    },
    finalDecision(id, issue) {
      console.log(issue, id)
      router.push({
        name: "finalDecision",
        params: { id: id },
        query: {issue: issue}
      });
    },
    rateSubmission(id, issue) {
      router.push({
        name: "rateSubmission",
        params: { id: id },
        query: {issue: issue}
      });
    }
  }
};
</script>
 
<style scoped>
button {
  margin: 0 0.25rem;
}
.reviewers-initials{
  border: 1px solid #333;
  border-radius: 50%;
  padding: 3px;
  margin-right:3px;
  font-size: 12px;
}
.reviewers-list li {
  display: inline;
}
.getLit{
  background-color: antiquewhite;
}
</style>
