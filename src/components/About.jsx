import React from 'react'
import './About.css'
const About = () => {



var countAnimation = (function () {
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
  };
  
  var startCount = function () {  
  
  };

  return {
    startCount: startCount
  };

})();


  return (
    <div id='about'>
        

        <section class="contents-page">
  <div class="container-fluids">
    
  <section class="hero">
    <div class="containers">
      <div class="rows">
        <h1 class="text-uppercase">Hello, there!!</h1>
        <span class="texts">
          <p>We were born out of a painful experience of processing a large set of data. So we created a kick-ass product to help data scientists and such people to annotate a large amount of data at one go, and by using advanced data science to help intelligently select the best deal.
          </p>
          <p>
            We hope your experience is better than ours was.
          </p>
        </span>
      </div>
    </div>
  </section>
  
  <section class="mission">
    <div class="containers">
      <div class="rows">
        <h2 class="text-uppercase">Our Mission</h2>
        <span class="texts">
          <p>4 out of eight people still preparing data for their models offline and waste a lost of their time. We want to bring you online to help you spend less time, get more, and feel more confident doing so. We&rsquo;re on your team. We&rsquo;ve hand selected vendors with stellar reputations and services to search with a click.</p>
          <p>It&rsquo;s personal. Our recently engaged founder struggled with the same issues you&rsquo;re having today - spending a lot of money on something he knew little about on sites he&rsquo;d never heard of.</p>
          <p>We&rsquo;re also using data science and machine learning with IBM Watson to help you make the smartest decision. This <a href="http://blog.rarecarat.com/post/watson-score-how-we-re-using-data-science-and-machine-learning" target="_blank">blog post</a> explains more.</p>
          <p>In research and development, we&rsquo;re testing artificial intelligence bots that ask questions in English, instead of &ldquo;doing&rdquo; to help guide beginners in finding the right way.</p>
          <p>If you have suggestions for features to process data better, we&rsquo;re all ears.</p>
        </span>
      </div>
    </div>
  </section>
    
  <section class="stats">
    <div class="containers">
      <div class="rows" id="stats-row">
        <div class="">
          <span class="stats-value" data-start="0" data-end="8">10</span>
          <span class="stats-label">Days</span>
        </div>
        <div class="">
          <span class="stats-value" data-start="0" data-end="14463">150+</span>
          <span class="stats-label">Clients</span>
        </div>
        <div class="">
          <span class="stats-value" data-start="0" data-end="24209">24209</span>
          <span class="stats-label">Searches</span>
        </div>
      </div>
    </div>
  </section>
  
</div>
</section>


<br></br>




    </div>
  )
}

export default About