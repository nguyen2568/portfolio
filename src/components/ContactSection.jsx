import { Linkedin, Github, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className='contact-section border-b-4 border-dotted border-black dark:border-white mb-8 pb-8'>
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
              <a href="mailto:truonggiang.nguyen2196@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                truonggiang.nguyen2196@gmail.com
              </a>
            </p>
          </div>
          
          <div className="border-l-4 border-black dark:border-white pl-4 space-y-2">
            <h4 className="font-bold uppercase">PHONE</h4>
            <p>
              <a href="tel:+17059217314" className="text-blue-600 dark:text-blue-400 hover:underline">
                +1 (705) 921-7314
              </a>
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
  );
};

export default ContactSection;
