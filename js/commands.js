// Define our command responses
const commands = {
    help: `
Available commands:
- help: Show this message (Again...)
- about: About me
- resume: My resume
- socials: Show my socials
- languages: My Languages
- projects: My projects
- education: My Academic Background
- email: My email
- clear: Clear the Terminal 
- history: Show the command history`,

    about: /*html*/`
Hi! I am David Iyera ,
A motivated and self-taught software developer with a passion for
continuous learning and improvement. Seeking a challenging role in
a high-paced environment where I can contribute my skills in both
front-end and back-end development to create impactful digital
solutions.

My fields of intetest are:
    - full-stack Engineering (Saas, Saap, etc)
    - AI & Machine Learning (Fine tuning large language models)
    - Health tech (Medical imaging viewers, Pacs, etc)
    - Blockchain (Stellar network)

Currently working on exciting projects.
(These are all commands, try it to find out more)
    - TODO: list them all

I would love to work with anyone who wants to build a 
SaaS project for their business or even small 
website to digitalize their work.

I primarily use Python, Php, and Nextjs when building my projects.
You can learn more about the projects that I have built using 
the <span class="highlight">'projects'</span> command.
You can browse around my website to find out more about me.
*Try using the <span class="highlight">'socials'</span> command.

Contact me at <a href="mailto:iyeradavid@gmail.com">iyeradavid@gmail.com</a>`,

    resume: /*html*/`
<a href="assets/my_cv_v1.4.pdf">My Resume</a>`,

    socials: /*html*/`
Follow me on:
GitHub: <a href="https://github.com/IYERADavid">check it out</a>
Linkedin: <a href="https://www.linkedin.com/in/david-iyera-b04b3a293/">check it out</a>`,

    languages: `
My Languages:
    - HTML, CSS
    - JavaScript
    - Python
    - PHP
    - Node js
    - Next js
    - Ruby`,

    projects: /*html*/`
My Projects:
        Not yet ready`,

    email: /*html*/`
My Email: <a href="mailto:sparrows.au@gmail.com">sparrows.au@gmail.com</a>`,
    education: /*html*/`
My Education:

    - Bachelors of science in Software Engineering
        <span class="highlight">Adventist University of Central Africa</span> <br/>
        <span> 2024 - current </span>

    - High school Diploma in math, physics and computer science
        <span class="highlight">Kayonza modern secondary school</span> <br/>
        <span> 2020 - 2023 </span>
    `,

    sudo: `
You're not an admin sry`,

    welcome: /*html*/`<span class="header">Welcome! to my interactive web terminal portfolio.<br />For a list of available commands, type <span class="highlight">'help'</span>.</span>`

};

export default commands; // Export the commands object