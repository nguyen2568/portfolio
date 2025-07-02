import Heart from '../assets/heart.svg';

const Footer = () => {
  return (
    <footer className="text-center py-6">
      <img src={Heart} alt="Heart" className="w-12 h-12 mx-auto mb-4 dark:invert transition-all duration-300" />
      <h2 className="text-3xl font-bold mb-4">
        Thank You for Visiting!
      </h2>
      <p className="text-lg font-semibold">
        I hope you enjoyed exploring my portfolio. If you have any questions or would like to connect, feel free to reach out!
      </p>
    </footer>
  );
};

export default Footer;
