<template>
  <div class="profile-card-wrapper">
    <!-- Main Profile Card -->
    <div class="card">
      <div class="profile-container">
        <img :src="userData.avatar" />
      </div>
      <div class="profile-info">
        <h1>{{ userData.name }}</h1>
        <p class="job-title">{{ userData.title }}</p>
        <p class="desc">{{ userData.description }}</p>
        <button @click="showMore = !showMore" class="see-more-btn">
          {{ showMore ? "See Less" : "See More" }}
        </button>
        <div v-if="showMore" class="additional-details">
          <p><strong>Email:</strong> tanea.joshi@si-eam.com</p>
          <p><strong>Phone:</strong> +91 989798046868</p>
          <p><strong>Some more data:</strong> This is quite interesting</p>
        </div>
      </div>
      <div class="profile-social">
        <a href="https://www.linkedin.com/in/gautam-jha/">LinkedIn</a>
        <a href="https://github.com/gautam-jha">GitHub</a>
      </div>
      <div class="card-bottom"></div>
    </div>

    <!-- Sidebar Column -->
    <transition name="slide-fade">
      <div v-if="showMore" class="details-column">
        <h2 class="heading">Details</h2>
        <p>
          <strong>Experience:</strong> 4+ years of software development
          experience.
        </p>
        <p>
          <strong>Skills:</strong> Vue.js, Angular, JavaScript, TypeScript,
          Node, CSS, HTML.
        </p>

        <!-- New Recent Activity Section -->
        <div class="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Updated profile information - 2 hours ago</li>
            <li>Completed project for ABC Corp - 3 days ago</li>
            <li>Attended VueConf 2023 - 1 week ago</li>
          </ul>
        </div>

        <!-- New Links Section -->
        <div class="links-section">
          <h3>Quick Links</h3>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
          <a href="#">Resume</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMore = ref(false);

const userData = {
  name: "Tanea Joshi",
  avatar:
    "/profile.jpg",
  title: "Sr. Software Engineer",
  description: "I am a software engineer with 4+ years of experience.",
};
</script>

<style scoped>
/* Global Styles */
.profile-card-wrapper {
  display: flex;
  gap: 40px;
  align-items: stretch;
  min-height: 420px;
  padding: 20px;
  width: 100%;
}

/* Animation Styles */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.additional-details {
  margin-top: 1rem;
}

.additional-details p {
  margin-bottom: 0.6rem;
}

/* Sidebar (Details Column) */
.details-column {
  flex-grow: 1;
  background: #48ff9bab;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  overflow: auto;
  width: 30%;
}

.heading {
  margin: 0;
}

.details-column h2,
h3 {
  color: #002743;
  margin-bottom: 10px;
}

.details-column p,
li,
a {
  color: #004d60;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.stats-section {
  margin-top: 20px;
}

.recent-activity {
  margin-top: 20px;
}

.links-section a {
  display: block;
  color: #00796b;
  text-decoration: none;
  margin-top: 5px;
}

.links-section a:hover {
  text-decoration: underline;
}

/* Card Styles */
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  border-radius: 16px;
  overflow: hidden;
  cursor: default;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: white;
}

.card img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 3px solid white;
}

.profile-info {
  text-align: center;
  color: #002743;
}

.profile-info h1 {
  margin: 0;
  line-height: 1;
  font-size: 24px;
}

.profile-info .desc {
  font-size: 0.9rem;
  color: #004d60;
}

.profile-social {
  display: flex;
  gap: 12px;
}

.profile-social a {
  color: #00796b;
  text-decoration: none;
  font-size: 0.9rem;
}

.profile-social a:hover {
  text-decoration: underline;
}

.see-more-btn {
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #00796b;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.see-more-btn:hover {
  background-color: #005f4f;
}

/* Card Hover Effect */
.card-bottom {
  width: 100%;
  background-color: #ff9874;
  height: 5px;
  transition: 0.3s all ease-in-out;
}

.card:hover .card-bottom {
  background-color: #ff6b6b;
}

/* Media */
@media (max-width: 1599px) {

  .card img {
    width: 130px;
    height: 130px;
  }
}

@media (max-width: 700px) {
  .app {
    overflow: auto;
  }
  .card {
    width: 100%;
  }
  .details-column {
    width: 100%;
  }
  .content {
    align-items: baseline;
    overflow: scroll;
  }
  .profile-card-wrapper {
    flex-direction: column;
  }
}
</style>
