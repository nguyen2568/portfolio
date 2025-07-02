const AboutSection = () => {
  const skills = [
    'Application system analysis and design',
    'Develop applications using C# .NET, Java, Python, JavaScript, TS',
    'Design and build mobile applications using React Native',
    'Write multi-threaded program to process data from the queue system',
    'Work with caching and queue systems (Redis, RabbitMQ)',
    'Database design and optimization (MSSQL, Postgres...)',
    'AWS, Windows Server, Linux, Docker', 
    'Git, Scrum Agile, Documentation'
  ];

  return (
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

      <div className='wrap-info mb-8'>
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
  );
};

export default AboutSection;
