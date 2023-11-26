<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{ invalid: usernameValidity === 'invalid' }">

    <label for="user-name" :class="{ invalid: usernameValidity === 'invalid' }">Your Name</label>
    <input id="user-name" name="user-name" v-model.trim="username" ref="appusername" type="text" @blur="inputValidity" />
    <p v-if="usernameValidity === 'invalid'">Please Enter a Valid Username!</p>
  </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="how">
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tut" v-model="how"/>
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="how"/>
        <label for="interest-nothing">Nothing</label>
      </div>
      <div>
        <label for="confirm">Confirm</label>
        <input type="checkbox" name="" id="" v-model="confirm">
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>
<script>
  export default {
  data(){
    return {
      username: '',
      how: [],
      confirm: false,
      usernameValidity: 'Pending'
    }
  },
  methods: {
    onSubmit($event){
      $event.preventDefault();
      console.log('Submitted!', this.username);
      console.log('Submitted!', this.$refs.appusername.value);
      console.log('Submitted!', this.how);
      this.confirm = true;
      console.log('Submitted!', this.confirm);
      this.confirm = false;
      

    },
    inputValidity(){
        if(this.username === ''){
           this.usernameValidity = 'invalid';
        }else{
          this.usernameValidity = 'valid';
        }
        //  this.usernameValidity = 'valid';
      }
    },
    
    
    watch(){
      
     
  },
  computed: {
    
    usernameLength(){
      return this.username.length;
    }
  }
}
</script>
<style scoped>
body {
  font-family: Arial, sans-serif;
}

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-control {
  margin-bottom: 20px;
}
.form-control.invalid input {
  border-color: red;
}
.form-control.invalid p {
  color: red;
}
.form-control.invalid label {
  color: red;
}
label {
  display: block;
  margin-bottom: 8px;
}

input,
select {
  width: 100%;
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

</style>