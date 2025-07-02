const ExperienceSection = () => {
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
      tech: ['NODEJS', 'REACTJS', 'MONGODB', 'AWS', 'EC2', 'S3', 'CLOUD FRONT', 'PYTHON', 'DEPLOYMENT', 'CI/CD', 'AGILE', 'SCRUM', 'CMS'],
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
      description: `I researched and implemented high-availability and load-balancing solutions for our sales website, gathering requirements and designing, building, and testing new C# .NET and Knockout.js services while maintaining and troubleshooting existing software and web systems. I also developed and maintained the company's iOS and Android mobile app using React Native and authored detailed documentation of system architecture and workflows to support onboarding and long-term maintenance.`,
      tech: ['C#', '.NET', 'JAVASCRIPT', 'KNOCKOUTJS', 'REACT NATIVE', 'IOS', 'ANDROID', 'SQL SERVER', 'HIGH-AVAILABILITY', 'LOAD-BALANCING', 'DOCUMENTATION'],
    },
    {
      title: 'FULL-STACK DEVELOPER',
      company: 'GAPIT',
      link: 'https://gapit.com.vn/en/home/',
      period: '2019 - 2021',
      description: 'I research, develop, test, and maintain customer-driven web applications using C#, .NET, React, and JavaScript, optimize performance with multi-threaded architectures, and automate deployments via GitHub CI/CD pipelines to Windows Server. I also design, build, and support robust database systems such as MSSQL, PostgreSQL, and Oracle to ensure reliability and scalability.',
      tech: ['C#', '.NET', 'JAVASCRIPT', 'REACTJS', 'SQL SERVER', 'POSTGRESQL', 'ORACLE', 'CI/CD', 'WINDOWS SERVER'],
    },
    {
      title: 'WEB DEVELOPER INTERN',
      company: 'IIT TECHCOM',
      link: 'https://iit.edu.vn/',
      period: '2018 - 2019',
      description: 'I built a basic website using HTML, CSS, JavaScript, C#.NET, and SQL Server under guided instruction. I then helped create a tour-booking website and develop online booking systems and hotel management software.',
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'C#', 'ASP.NET MVC', 'SQL SERVER'],
    },
  ];

  return (
    <section id="experience" className='experience-section border-b-4 border-dotted border-black dark:border-white mb-8 pb-8'>
      <h2 className="text-5xl font-bold text-center uppercase tracking-wider mb-8">
        EXPERIENCE
      </h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="border-4 border-black dark:border-white bg-white dark:bg-gray-800 p-6 group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-black dark:text-white">{job.title}</h3>
                <h4 className="text-lg font-bold">
                  <a href={job.link} target='_blank' className='underline text-black dark:text-white'>
                    {job.company}
                  </a>
                </h4>
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
  );
};

export default ExperienceSection;
