import {popularUniversities} from '../data/popularUniversities.js';
import { popularMajors } from '../data/popularMajors.js';
import { popularScholarships } from '../data/popularScholarships.js';

export const universityCards = (universities) => {
  return universities.map(uni =>`
    <div class="card">
      <div class="card-image">
        <img class="card-cover" src="${uni.cover_image}" alt="${uni.name} Campus">
        <img class="card-logo" src="${uni.logo}" alt="${uni.name} Logo">
      </div>
      <div class="card-content">
        <h3>${uni.name}</h3>
        <p><strong>Location:</strong> ${uni.location}</p>
        <p><strong>Established:</strong> ${uni.established}</p>
        <p><strong>Ranking:</strong> ${'⭐'.repeat(uni.ranking)}</p>
        <a href="${uni.website}" target="_blank">Visit Website</a>
      </div>
    </div>
  `).join('');
}

const majorCards = (majors) => {
  return majors.map(major =>`
    <div class="card">
      <div class="card-image">
        <img class="card-cover" src="${major.cover_image}" alt="${major.name}">
      </div>
      <div class="card-content">
        <h3>${major.name}</h3>
        <p>${major.description}</p>
        <p><strong>Popular Courses:</strong> ${major.popular_courses.join(', ')}</p>
        <a href="#/" target="_blank">Visit Website</a>
      </div>
    </div>
  `).join('');
}

const scholarshipCards = (scholarships) => {
  return scholarships.map(scholarship =>`
    <div class="card">
      <div class="card-image">
        <img class="card-cover" src="${scholarship.cover_image}" alt="${scholarship.name}">
      </div>
      <div class="card-content">
        <h3>${scholarship.name}</h3>
        <p><strong>Provider:</strong> ${scholarship.provider}</p>
        <p><strong>Amount:</strong> ${scholarship.amount}</p>
        <p><strong>Deadline:</strong> ${scholarship.deadline}</p>
        <a href="#/" target="_blank">Visit Website</a>
      </div>
    </div>
  `).join('');
}

export default function Home(){
  const popularUniversitiesCards = popularUniversities.length ? universityCards(popularUniversities) : '<p>No popular universities available.</p>';
  const popularMajorsCards = popularMajors.length ? majorCards(popularMajors) : '<p>No popular majors available.</p>';
  const popularScholarshipsCards = popularScholarships.length ? scholarshipCards(popularScholarships) : '<p>No popular scholarships available.</p>';
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="home-image-container">
      <img src='./images/pic/universities/cover/Students-Life.jpg'></img>
    </div>
    <div class="home-content">
      <div class="home-title text-center">
        <h1>Discover Your Future with UniSites</h1>
        <p>Explore universities, majors, scholarships, and connect with peers.</p>  
      </div>
      <div class="home-search-bar">
        <input type="text" placeholder="Search for universities, majors, scholarships...">
        <button>Search</button>
      </div>
      <div class="home-popular-universities">
        <div class="title-with-hr">
          <h2>Popular Universities</h2>
          <hr>
          <a href="#/universities"><button>View All</button></a>
        </div>
        <div class="university-cards card-container">
          ${popularUniversitiesCards}
        </div>
      </div>
      <div class="home-popular-majors">
        <div class="title-with-hr">
          <h2>Popular Majors</h2>
          <hr>
          <a href="#/majors"><button>View All</button></a>
        </div>
        <div class="major-cards card-container">
          ${popularMajorsCards}
        </div>
      </div>
      <div class="home-popular-scholarships">
        <div class="title-with-hr">
          <h2>Popular Scholarships</h2>
          <hr>
          <a href="#/scholarships"><button>View All</button></a>
        </div>
          <div class="major-cards card-container">
          ${popularScholarshipsCards}
          </div>
      </div>
      <div class="home-community text-center">
        <div class="title-with-hr">
          <hr>
          <h2>Join Our Community</h2>
          <hr>
        </div>
        <p>Connect with students and alumni in our forum.</p>
        <a href="#/forum"><button>Visit Forum</button></a>
      </div>
    </div>
  `;
  return el;
}