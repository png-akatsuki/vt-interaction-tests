<template>
  <div class="profile-card-wrapper">
      <div class="card">
        <div class="profile-container">
          <img
            :src="userData.avatar"
          />
        </div>
        <div class="profile-info">
          <h1>{{userData.name}}</h1>
          <p class="job-title">{{ userData.title }}</p>
          <p class="desc">
            {{  userData.description }}
          </p>
        </div>
        <div class="profile-social">
          <a href="https://www.linkedin.com/in/gautam-jha/">LinkedIn</a>
          <a href="https://github.com/gautam-jha">GitHub</a>
        </div>
        <div class="card-bottom"></div>
      </div>
  </div>
</template>
<script setup lang="ts">
import { defineCustomElement } from "@brightly/brightlycomponents/dist/components/br-card";
defineCustomElement();

const userData = {
    "name": "Tanea Joshi",
    "avatar": "https://i.ytimg.com/vi/VdddZIcyykM/maxresdefault.jpg",
    "title": "Sr. Software Engineer",
    "description": "I am a proficient web developer with 4+ years of experience."
}
</script>
<style scoped>
.profile-card-wrapper {
    /* display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
  border-radius: 16px;
  overflow: hidden;
  cursor: default;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  transform: 0.3s all ease-in-out; */
/* 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
}
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
  border-radius: 16px;
  overflow: hidden;
  cursor: default;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  transform: 0.3s all ease-in-out;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 3px solid white;
}

.card .profile-container {
  background-color: #9dbdff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  transition: 0.3s all ease-in-out;
}

.card .profile-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px 16px;
}

.card .profile-info h1 {
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.7);
}
.card .profile-info h1, .card .profile-info p {
    margin: 0;
}
.card .profile-info .job-title {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

.card .profile-info .desc {
  color: rgba(0, 0, 0, 0.9);
  font-size: 0.9rem;
  max-width: 300px;
  margin-top: 8px;
}

.card .profile-social {
  display: flex;
  gap: 8px;
}

.card .profile-social a {
  color: #7695ff;
  text-decoration: none;
  font-size: 0.9rem;
}

.card .profile-social a:hover {
  text-decoration: underline;
}

.card-bottom {
  width: 100%;
  background-color: #ff9874;
  height: 5px;
  transition: 0.3s all ease-in-out;
}

.card:hover .card-bottom {
  background-color: #ff6b6b;
}

.card:hover .profile-container {
  background-color: #7695ff;
}

.profile-social a:not(:first-child) {
    list-style: inside;
    display: list-item;
}
</style>
