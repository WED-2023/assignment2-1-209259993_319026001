<template>
    <div class="about">
      <h1>About Us</h1>
      <p>Welcome to our website! We are highly motivated 3rd year students at the department of Software and Information Systems Engineering at Ben Gurion University.
        This website is our full-stack project for Internet Programming Environments course.
      </p>
      <h2>About the Website</h2>
      <p>Our recipe website offers a personalized cooking experience where users can sign up, 
        browse a variety of recipes, and mark their favorites. With step-by-step instructions, 
        users can easily prepare meals and track their progress as they cook. 
        Whether you're exploring new dishes or returning to your saved favorites, 
        the platform makes meal preparation simple and enjoyable for everyone.</p>
      <h2>About the Project</h2>
      <p>The projects consists of 3 parts: Frontend, API Document and Backend. In the frontend part
        we implemented the client side of the website using Vue.js, according to instructions in spec document.
        The backend part is a server implemented with Node.js and Express.js, using MySQL database for storage.
        We wrote API Documentation using Swagger. The server also integrates with external API (spoonacular) in order
        to fetch relevant recipes information.
      </p>
      <h2>Contact Us</h2>
      <ul>
  <li>
    Lior Aftabi:
    <a href="https://github.com/LiorAft">GitHub</a>, 
    <a href="https://www.linkedin.com/in/lioraftabi/">LinkedIn</a>
    </li>
    <li>
        Noa Yeshayahu:
        <a href="https://github.com/noa-ye">GitHub</a>, 
        <a href="https://www.linkedin.com/in/noayeshayahu/">LinkedIn</a>
    </li>
    </ul>
    </div>
  </template>
  
  <style>
  .about {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1, h2 {
    color: #333;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  