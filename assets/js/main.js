// Loader animation 

function animationLoading(){
    

gsap.from(".textline1 h1",{
    y:180,
    stagger:0.25,
    duration:0.6,
    delay:0.5

})

const counter = document.querySelector(".lineprt2 h5")
var increase = 0;
const timerclr = document.querySelector(".timerclr")
 
const main  = document.getElementById('main')
setInterval(function(){
    if(increase <= 100){
        counter.innerHTML = increase++
        timerclr.style.width = increase+'%'
         timerclr.style.height = increase+'%'
         main.style.display = increase+'hidden'
          
    } 

},20)
 
var time = gsap.timeline()
time.to("#page-loader",{
    opacity:0,
    duration:0.4,
    delay:3.5
}) 

time.from("#page1, #page2 ,#page4, #page3 ,#page5 ,footer",{
    delay:0.2,
    y:1600,
    stagger:1,
    duration:0.2,
    ease:Power4,
    opacity:0,
})
 
time.to("#page-loader",{
    display:"none",
});


 

}
     animationLoading(); 
 
//// Loader animation End 


// Dynamic menu start
function menu(){

const menu = ["Home", "New-Tech","Tech-Hiring","Ai"];
const navbar = document.querySelector('.navbar2');

menu.forEach(item => {
  const item2 = document.createElement('a');
  item2.textContent = item;
  item2.href = `#${item.toLowerCase()}`;
  navbar.appendChild(item2);
});
}
  menu()
// Dynamic menu end  


// Logo text 
gsap.to("#page4 h1",{
  transform:"translateX(-150%)",
  scrollTrigger:{
      trigger:"#page4",
      scroller:"body",
       start:"top 0",
       end:"top -100%",
       scrub:3,
       pin:true
  }
})

// end 

// Cursor Start
function cursor(){
  const cursor = document.getElementById('cursor');
  document.addEventListener("mousemove",(event)=>{
     gsap.to('#cursor',{
      left:event.x,
      top:event.y
     })
  });
}
  cursor()
 
//Cursor End



// post js 
function blogpost(){
  
const blogPosts = [
  {
    image: "https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=iGn_5pyybG0KxpqvfstC5mY7CCFYKH_BEiiEExHYRwI=",
    title: "Software development trends and predictions for 2025",
     href: "blog1.html",
     description:"As the world races towards 2025, Developer examines what lies ahead for software development"
     
  },
  {
    image: "https://media.istockphoto.com/id/2162237654/photo/photo-of-lovely-attractive-successful-woman-software-developer-armchair-comfortable-workspace.webp?a=1&b=1&s=612x612&w=0&k=20&c=FOQuqfT4DlmvSbH7hpftqoSJ1FlKRSgZS5kODJoSsmE=",
    title: "Cybersecurity leaders’ growing sense of helplessness",
    href: "blog2.html",
    description:"New research conducted by Green Raven Limited, a specialist cybersecurity consultancy and reseller"
  },
  {
    image: "https://media.istockphoto.com/id/1347879996/photo/shot-of-a-young-woman-using-a-laptop-while-working-in-a-server-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=NVwMN-lWsVpZ_X00wNd0fsnNUH5DqcorzeiiM6YPF_s=",
    title: "Gathering requirement for development projects 2025",
    href: "blog3.html",
    description:"Gathering requirements for a software development plan is the cornerstone of a successful project "
  },
  {
    image: "https://media.istockphoto.com/id/1164357236/photo/developing-programmer-reading-computer-codes-development-website-design-and-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSJ8cTPt-Cq3zqhmUq18-KlvA5lrO3w1BGLojqnRTx4=",
    title: "Emerging threats in cloud-native application security.",
    href: "blog4.html",
    description:"Cloud-native technologies let organisations build and run scalable"
  },

  
];

    const page2 = document.getElementById('page2');         
    const blogPostContainer = document.createElement('div');
    blogPostContainer.className = 'blogpost';

    blogPosts.forEach(post =>{
    const blogArea =  document.createElement('div');
    blogArea.className = 'blogarea';

      const blogImage = document.createElement('div');
      blogImage.className = 'blog-image';
      blogImage.innerHTML = `<img src="${post.image}" alt="">`;

      const textArea = document.createElement('div');
      textArea.className = 'text-area';
      textArea.innerHTML = `
          <div class="posttitle"><h1>${post.title}</h1></div>
          <div class="postpara">${post.description}</div>
          <button class="readmore"><a href="${post.href}">readmore</a></button>
      `;

      blogArea.appendChild(blogImage);
      blogArea.appendChild(textArea);
      blogPostContainer.appendChild(blogArea);
    });

     page2.appendChild(blogPostContainer);
   

    // Sidebar Section
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `<h1>Most-Recent</h1>`;

    blogPosts.forEach(post => {
        const recentPost = document.createElement('div');
        recentPost.className = 'recent-post';

        const rpImage = document.createElement('div');
        rpImage.className = 'rpimage';
        rpImage.innerHTML = `<img src="${post.image}" alt="">`;

        const rpText = document.createElement('div');
        rpText.className = 'rptext';
        rpText.innerHTML = `<h3>${post.title}</h3>`;

        recentPost.appendChild(rpImage);
        recentPost.appendChild(rpText);
        sidebar.appendChild(recentPost);
    });
   
    page2.appendChild(sidebar);
  }
   blogpost()

  // post end js 


  // Page 3

  function heroarticle(){

  
  const articles = [
    {
      image: "https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=iGn_5pyybG0KxpqvfstC5mY7CCFYKH_BEiiEExHYRwI=",
      title: "Software development trends and predictions for 2025",
       href: "blog1.html",
      comments: 1,
    },
    {
      image: "https://media.istockphoto.com/id/2162237654/photo/photo-of-lovely-attractive-successful-woman-software-developer-armchair-comfortable-workspace.webp?a=1&b=1&s=612x612&w=0&k=20&c=FOQuqfT4DlmvSbH7hpftqoSJ1FlKRSgZS5kODJoSsmE=",
      title: "Cybersecurity leaders’ growing sense of helplessness",
      href: "blog2.html",
      comments: 1,
    },
    {
      image: "https://media.istockphoto.com/id/1347879996/photo/shot-of-a-young-woman-using-a-laptop-while-working-in-a-server-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=NVwMN-lWsVpZ_X00wNd0fsnNUH5DqcorzeiiM6YPF_s=",
      title: "Gathering requirements for a development project in 2025",
      href: "blog3.html",
      comments: 1,
    },
    {
      image: "https://media.istockphoto.com/id/1164357236/photo/developing-programmer-reading-computer-codes-development-website-design-and-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSJ8cTPt-Cq3zqhmUq18-KlvA5lrO3w1BGLojqnRTx4=",
      title: "Emerging threats in cloud-native application security: Trends to watch",
      href: "blog4.html",
      comments: 1,
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXJzfGVufDB8fDB8fHww",
      title: "2024 Developer Ecosystem: Shedding AI fears, improving DevEx",
      href: "blog5.html",
      comments: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXJzfGVufDB8fDB8fHww",
      title: "Operation Digital Eye: Chinese hackers exploit Visual Studio Code",
      href: "blog6.html",
      comments: 2,
    },
    {
      image: "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXJzfGVufDB8fDB8fHww",
      title: "Developer fought back after losing 30,000 users to malware accusations",
      href: "blog7.html",
      comments: 3,
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZXJzfGVufDB8fDB8fHww",
      title: `"Linux Foundation releases ‘Census III’ open source report"`,
      href: "blog8.html",
      comments: 4,
    },
     
  ];

  const page3PostContainer = document.querySelector(".page3-post");
  page3PostContainer.innerHTML = articles
  .map(
    (article) => `
        <div class="posts">
            <img src="${article.image}" alt="Story Image">
            <div class="story-content">
                <h3>${article.title}</h3>
                <button class="readmore2"><a href="${article.href}">readmore</a></button>
                <div class="response">
                    <span class="comments-icon">💬 ${article.comments}</span>
                </div>
            </div>
        </div>
    `
  )
  
  .join("");
}
  heroarticle()


function important(){

 
const imparticles = [
  { title: "Stack Overflow Users Are Revolting Against an OpenAI Deal", 
    description: "On Monday, Stack Overflow and </br> OpenAI announced a new API partnership that will integrate Stack Overflow's technical content with OpenAI's ChatGPT AI assistant.  </br> The deal has sparked controversy among Stack Overflow's user community, with many expressing anger and protest over the use of their contributed content to support and train AI models. I hate this. I'm just going to delete/deface my answers one by one, wrote one user on sister site Stack Exchange.  </br>  I don't care if this is against your silly policies, </br> because as this announcement shows, your policies can change at a whim without prior consultation of your stakeholders.  </br>  You dont care about your users, I dont care about you.”  </br> Stack Overflow is a popular question-and-answer site for software developers that allows users to ask and answer technical questions related to coding.  </br> The site has a large community of developers who contribute knowledge and expertise  </br> </br>to help others solve programming problems.</br>  "},
  
  
];

const contentContainer = document.getElementById("cont-image");
imparticles.map(article=>{

  const tittleDiv = document.createElement("div");
  const  paragraph = document.createElement("div");

  tittleDiv.className = "imp-article";
  tittleDiv.innerHTML = `<h1>${article.title}</h1>`
  paragraph.className = "para";
  paragraph.innerHTML = `<p>${article.description}</p>`


  contentContainer.appendChild(tittleDiv);
  contentContainer.appendChild(paragraph);

})
}
  important()

// footer 

function footer(){

 
const footerLinks = [
  { text: "Contact Us", href: "contact.html" },
  { text: "About Us", href: "about.html" },
  { text: "Disclaimer", href: "disclamer.html" },
  { text: "Privacy Policy", href: "privacy.html" }
];

 
const footerList = document.querySelector("#footer-list");
 
footerLinks.forEach(link => {
  const anchor = document.createElement("a");  
  anchor.textContent = link.text;  
  anchor.href = link.href;  
  footerList.appendChild(anchor);  
});
}
  footer()


 
// footer 
