<template>
<div class="input-style">
  <input type="text" v-model="searchUser" @keyup.enter="search">
</div>
<div class="container" v-if="user">
  <div class="flex">
    <div class="image-styles">
      <a target="blank" :href="user.link">
    <img :src="user.profile_image" alt="">
  </a>
</div>
<div class="user-profile">
     <div class="d-flex">
      <div class="user-data">
        <p class="color-white m-b font-size-45 font-weight-bold ">
          {{ user.display_name }}
        </p>
        <p class="color-white font-weight-bold font-size-20 width-fill">
           {{ user.location }}
           </p>
      </div>
        <div class="reputation font-size-45 color-orange">
          <p>Reputations <br>
              {{ user.reputation }}
            </p>
        </div>
     </div>
  <div v-if="badge" class="badges">
    <div class="bronze-badge">
      <img src="@/assets/bronze.c0f16393.png" alt="">
      <p class="color-white">Bronze Badge</p>
      <h1 class="color-white">
       {{ badge.bronze }}
       </h1>
    </div>
 <div class="silver-badge">
  <img src="@/assets/silver.ebd2f2d2.png" alt="">
  <p class="color-white">Silver Badge</p>
  <h1 class="color-white">
     {{ badge.silver }}
     </h1>
 </div>
<div class="gold-badge">
  <img src="@/assets/golden.da76b4b8.png" alt="">
  <p class="color-white">Golden Badge</p>
  <h1 class="color-white">
     {{ badge.gold }}
     </h1>
</div>
  </div>
    </div>
</div>
</div>
</template>

<script>
import api from '@/api/api';

export default {
  name: 'HelloWorld',
  props: {
    users: {
      required:true,
    },
  },
  data() {
    return {
      searchUser:'',
      user:[],
      badge:[]
    }
  },
  methods: {
   async search() {
    try {
        const response = await api.getUserData(this.searchUser);
        this.user = response.data.items[0];
        this.badge = response.data.items[0].badge_counts;
      } catch (error) {
        console.error(error);
      }
      this.searchUser = '';
}
},
}
</script>

<style scoped>
.input-style {
  text-align: center;
  margin-top:30px;
}
input {
  width:350px;
  border:5px solid black;
  padding:5px 16px;
}
.container {
  border-radius: 20px;
  background-color:rgba(39, 39, 42);
  width:81%;
  margin:0 auto;
  margin-top:30px;
  min-height:580px;
}
.flex {
  display:flex;
  justify-content: space-between;
}
.image-styles img{
   height: 250px;
    width: 250px;
    border-radius: 50%;
  position: relative;
  left:30%;
  border: 3px solid black;
}
.image-styles {
  width:40%;
  margin-top:100px;
}
.user-profile {
  width:60%;
}
.color-white {
  color:white;
}
.d-flex {
  display:flex;
  justify-content: space-between;
  margin-top:50px;
}
.user-data {
  width:50%;
}
.font-size-45 {
  font-size:45px;
}
.reputation {
  width:50%;
}
.m-b {
   margin-bottom:1rem;
}
.font-weight-bold {
  font-weight: bold;
}
.font-size-20 {
  font-size: 20px;
}
.color-orange {
  color:orange;
}
.badges {
  display:flex;
  margin-top:150px;
  justify-content: space-between;
}
.badges img {
  width:6rem;
  margin-bottom:1rem;
  margin-top:30px;
}
.bronze-badge {
  border:1px solid orange;
  background-color:black;
  width:180px;
  height:250px;
  text-align:center;
  border-radius:2rem;
} 
.silver-badge {
  border:1px solid rgba(113,113,122);
  background-color:black;
  width:180px;
  height:250px;
  text-align: center;
  border-radius:2rem;
}
.gold-badge {
  border:1px solid rgba(248,255,41);
  background-color:black;
  width:180px;
  height:250px;
  text-align: center;
  border-radius:2rem;
}
@media screen and (max-width: 1025px) {
  .flex {
    display:grid;
    position:relative;
    bottom:50px;
    justify-content:center;
    width:100%;
  }
  .user-profile {
    width:100%;
  }
  .image-styles {
    width:100%;
  }
}
@media screen and (max-width:678px) {
  .badges {
    width:400px;
    display:grid;
    justify-content:center;
    text-align: center;
    margin:0 auto;
  }
  .d-flex {
    display:grid;
    text-align:center;
    justify-content:center;
  }
  .width-fill {
    width:200px;
  }
}
@media only screen and (max-width:420px) {
  .d-flex {
    width:250px;
    margin:0 auto;
  }
  .badges {
    width:250px;
  }
  .image-styles {
    width:250px;
  }
  .image-styles img {
   transform:translateX(-50px);
   width:200px;
   height:200px;
  }
  input  {
    width:250px;
  }
}
</style>
