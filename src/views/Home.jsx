import Man from './../assets/man.svg';
import Heart from './../assets/heart.svg';

import { Linkedin, Github, MapPin, Mail } from 'lucide-react';

const Home = () => {

  const skills = [
    'Application system analysis and design',
    'Develop applications using C# .NET, Java, Python, JavaScript',
    'Design and build mobile applications using React Native',
    'Write multi-threaded program to process data from the queue system',
    'Work with caching and queue systems (Redis, RabbitMQ)',
    'Database design and optimization (MSSQL, Postgres...)',
    'AWS, Windows Server, Linux, Docker', 'Git, Scrum Agile, Documentation'
  ];

  const experience = [
    {
      title: 'SASKATCHEWAN POLYTECHNIC STUDENT',
      company: 'SASKATCHEWAN POLYTECHNIC',
      link: 'https://saskpolytech.ca/',
      period: '2024 - 2025',
      description:
        <>
          In the student's showcase event, I developed a Python-driven smart recycling system with inductive and capacitive sensors to distinguish metals from plastics, integrated AWS IoT for data exchange, deployed a React frontend on S3/CloudFront and a Node.js backend on EC2, and automated CI/CD with GitHub Actions.
          In a campus hackathon event, I analyzed mobility challenges, crafted UX prototypes in Figma, collaborated on ideation and prototyping, and pitched our solution. As a full-stack developer on my capstone, I built a game information and booking site using React and Node.js, managed Git workflows, and supported Scrum-based sprint planning.
        </>,
      tech: ['NODEJS', 'REACTJS', 'MONGODB', 'AWS', 'EC2', 'S3', 'CLOUD FRONT', 'PYTHON', 'DEPLOYMENT', 'CI/CD', 'AGILE', 'SCRUM'],
    },
    {
      title: 'SOFTWARE ENGINEER',
      company: 'FUJITSU',
      link: 'https://www.fujitsu.com/global/',
      period: '2022 - 2023',
      description: 'I researched and developed core features for the ITP-WebService vehicle-tracking platform using Java, C# .NET Framework, WPF, and Vue, and designed a WPF application to streamline system setup and configuration. I also troubleshot operational issues, maintained MariaDB and MSSQL databases, and created internal documentation to guide deployment, configuration, and feature usage.',
      tech: ['C#', '.NET MVC', '.NET', 'JAVASCRIPT', 'MARIADB', 'SQL SERVER', 'JAVA', 'WPF'],
    },
    {
      title: 'SOFTWARE ENGINEER',
      company: 'VIETTEL IDC',
      link: 'https://www.viettelidc.com.vn/',
      period: '2021 - 2022',
      description: 'I researched and implemented high-availability and load-balancing solutions for our sales website, gathering requirements and designing, building, and testing new C# .NET and Knockout.js services while maintaining and troubleshooting existing software and web systems. I also developed and maintained the company’s iOS and Android mobile app using React Native and authored detailed documentation of system architecture and workflows to support onboarding and long-term maintenance.',
      tech: ['C#', '.NET', 'JAVASCRIPT', 'KNOCKOUTJS', 'REACT NATIVE', 'IOS', 'ANDROID', 'SQL SERVER', 'HIGH-AVAILABILITY', 'LOAD-BALANCING', 'DOCUMENTATION'],
    },
    {
      title: 'FULL-STACK DEVELOPER',
      company: 'GAPIT',
      link: 'https://gapit.com.vn/en/home/',
      period: '2019 - 2021',
      description: 'I research, develop, test, and maintain customer-driven web applications using C#, .NET, React, and JavaScript, optimize performance with multi-threaded architectures, and automate deployments via GitHub CI/CD pipelines to Windows Server. I also design, build, and support robust database systems such as MSSQL, PostgreSQL, and Oracle to ensure reliability and scalability.',
      tech: ['C#', '.NET', 'JAVASCRIPT', 'REACTJS', 'SQL SERVER', 'POSTGRESQL', 'ORACLE', 'GITHUB CI/CD', 'WINDOWS SERVER'],
    },
    {
      title: 'WEB DEVELOPER INTERN',
      company: 'IIT TECHCOM',
      link: 'https://iit.edu.vn/',
      period: '2018 - 209',
      description: 'I built a basic website using HTML, CSS, JavaScript, C#.NET, and SQL Server under guided instruction. I then helped create a tour-booking website and develop online booking systems and hotel management software.',
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'C#', 'ASP.NET MVC', 'SQL SERVER'],
    },
  ];

  return (
    <>
      <section id="home" className="hero-section flex flex-col items-center justify-center text-center border-b-4 border-dotted border-black dark:border-white mb-8 pb-8 mt-15">
        <h1 className="text-6xl font-bold uppercase tracking-wider mb-6">
          Hi. I'm Giang
        </h1>
        <img src={Man} alt="Profile" className="w-20 h-20 rounded-full mb-8" />
        <h2 className="text-2xl uppercase mb-8 font-semibold tracking-wide">
          Software Engineering | Full-Stack Developer
        </h2>
        <hr className="w-24 h-1 bg-black dark:bg-white mb-8" />
        <p className="text-lg uppercase tracking-wide mb-12 max-w-3xl mx-auto leading-relaxed">
          WELCOME TO MY PORTFOLIO! I'M A FULL-STACK DEVELOPER WITH A PASSION FOR CREATING INNOVATIVE AND SCALABLE WEB APPLICATIONS. EXPLORE MY WORK AND CONNECT WITH ME!
        </p>
        <div className='social-link flex gap-4 mb-12'>
          <a href="https://github.com/nguyen2568" target='_blank' className="bg-white dark:bg-gray-900 text-black dark:text-white px-8 py-4 border-4 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center font-bold uppercase tracking-wider">
            <Github className="mr-2" size={20} />
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/giangnt0321/" target='_blank' className="bg-white dark:bg-gray-900 text-black dark:text-white px-8 py-4 border-4 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center font-bold uppercase tracking-wider">
            <Linkedin className="mr-2" size={20} />
            LINKEDIN
          </a>
        </div>
        <div className="flex justify-center space-x-8 text-sm uppercase tracking-wide">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            SASKATCHEWAN, CANADA
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-1" />
            truonggiang.nguyen2196@gmail.com
          </div>
        </div>
      </section>
      <section id="about" className='about-me border-b-4 border-dotted border-black dark:border-white mb-8 pb-8'>
        <h2 className="text-5xl font-bold text-center uppercase tracking-wider mb-8">
          ABOUT ME
        </h2>
        <div className='wrap-info mb-8'>
          <h3 className="text-3xl font-bold uppercase tracking-wide mb-4 py-2 inline-block">
            MY BACKGROUND
          </h3>
          <div className="space-y-6 text-base leading-relaxed">
            <p className="border-l-4 border-black dark:border-white pl-4">
              My name is Truong Giang Nguyen, and I am a software engineer with a strong knowledge to build web, mobile, and desktop applications. I also have knowledge in Cloud Server, Deployment, and CI/CD practices, which allows me to create scalable and efficient applications.
            </p>
            <p className="border-l-4 border-black dark:border-white pl-4">
              I hold a Bachelor's degree in Information Technology and two Post-Graduate Certificates in Software Development and Cyber Security. During my studies, I actively participated in hackathons, student showcases, and innovation challenges, where I not only gained hands-on experience but also shared my ideas with the community and honed my problem-solving skills
            </p>
            <p className="border-l-4 border-black dark:border-white pl-4">
              When I am not coding, I enjoy exploring new technologies, reading tech blogs. I believe in continuous learning and strive to stay updated with the latest trends in the tech industry.
            </p>
          </div>
        </div>
        <div className='wrap-info'>
          <h3 className="text-3xl font-bold uppercase tracking-wide mb-4 py-2 inline-block">
            EDUCATION
          </h3>
          <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-gray-800 mb-4">
            <h5 className="font-bold text-black dark:text-white">POST-GRADUATE CERTIFICATE OF SOFTWARE DEVELOPER | 2024-2025</h5>
            <p className="text-sm text-black dark:text-gray-300">Saskatchewan Polytechnic • Saskatoon, Saskatchewan, Canada</p>
          </div>
          <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-gray-800 mb-4">
            <h5 className="font-bold text-black dark:text-white">POST-GRADUATE CERTIFICATE OF CYBER SECURITY | 2023-2024</h5>
            <p className="text-sm text-black dark:text-gray-300">Cambrian College • Sudbury, Ontario, Canada</p>
          </div>
          <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-gray-800 mb-4">
            <h5 className="font-bold text-black dark:text-white">BACHELOR OF INFORMATION TECHNOLOGY | 2014-2018</h5>
            <p className="text-sm text-black dark:text-gray-300">University of Economics - Technology for Industries • Hanoi, Vietnam </p>
          </div>
        </div>
        <div className='wrap-info'>
          <h3 className="text-3xl font-bold uppercase tracking-wide mb-4 py-2 inline-block">
            TECHNICAL SKILLS
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="">
                {skill}
              </li>
            ))}

          </ul>
        </div>
      </section>
      <section id="experience" className='about-me border-b-4 border-dotted border-black dark:border-white mb-8 pb-8'>
        <h2 className="text-5xl font-bold text-center uppercase tracking-wider mb-8">
          EXPERIENCE
        </h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="border-4 border-black dark:border-white bg-white dark:bg-gray-800 p-6 group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wide text-black dark:text-white">{job.title}</h3>
                  <h4 className="text-lg font-bold"><a href={job.link} target='_blank' className='underline text-black dark:text-white'>{job.company}</a></h4>
                </div>
                <div className="border-2 border-black dark:border-white px-3 py-1 bg-white dark:bg-gray-900 text-black dark:text-white">
                  <span className="text-sm font-bold">{job.period}</span>
                </div>
              </div>
              <p className="leading-relaxed mb-4 text-black dark:text-gray-300">{job.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border-2 border-black dark:border-white px-2 py-1 text-sm font-bold bg-white dark:bg-gray-900 text-black dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className='about-me border-b-4 border-dotted border-black dark:border-white mb-8 pb-8'>
        <h2 className="text-5xl font-bold text-center uppercase tracking-wider mb-8">
          CONTACT
        </h2>
        <div className='wrap-info mb-8'>
          <h3 className="text-3xl font-bold uppercase tracking-wide mb-4 py-2 inline-block">
            INFORMATION
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-black dark:border-white pl-4 space-y-2">
              <h4 className="font-bold uppercase">EMAIL</h4>
              <p>
                <a href="mailto:truonggiang.nguyen2196@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">truonggiang.nguyen2196@gmail.com</a>
              </p>
            </div>
            <div className="border-l-4 border-black dark:border-white pl-4 space-y-2">
              <h4 className="font-bold uppercase">PHONE</h4>
              <p>
                <a href="tel:+17059217314" className="text-blue-600 dark:text-blue-400 hover:underline">+1 (705) 921-7314</a>
              </p>
            </div>
            <div className="border-l-4 border-black dark:border-white pl-4 space-y-2">
              <h4 className="font-bold uppercase">LOCATION</h4>
              <p>Saskatoon, Saskatchewan, CANADA</p>
            </div>
            <div className="border-l-4 border-black dark:border-white pl-4 space-y-2">
              <h4 className="font-bold uppercase">AVAILABILITY</h4>
              <p>OPEN TO NEW OPPORTUNITIES</p>
            </div>
            <div className='flex gap-4 mt-6 flex-wrap'>
              <a href="mailto:truonggiang.nguyen2196@gmail.com" className="bg-white dark:bg-gray-900 text-black dark:text-white px-8 py-4 border-4 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center font-bold uppercase tracking-wider">
                <Mail className="mr-2" size={20} />
                Email
              </a>
              <a href="https://github.com/nguyen2568" target='_blank' className="bg-white dark:bg-gray-900 text-black dark:text-white px-8 py-4 border-4 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center font-bold uppercase tracking-wider">
                <Github className="mr-2" size={20} />
                GITHUB
              </a>
              <a href="https://www.linkedin.com/in/giangnt0321/" target='_blank' className="bg-white dark:bg-gray-900 text-black dark:text-white px-8 py-4 border-4 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center font-bold uppercase tracking-wider">
                <Linkedin className="mr-2" size={20} />
                LINKEDIN
              </a>
            </div>


          </div>
        </div>
      </section>
      <footer className="text-center py-6">
        {/* say thank you */}
        <img src={Heart} alt="Heart" className="w-12 h-12 mx-auto mb-4 dark:invert transition-all duration-300" />
        <h2 className="text-3xl font-bold mb-4">
          Thank You for Visiting!
        </h2>
        <p className="text-lg font-semibold">
          I hope you enjoyed exploring my portfolio. If you have any questions or would like to connect, feel free to reach out!
        </p>
        
      </footer>
    </>
  );
}

export default Home;  