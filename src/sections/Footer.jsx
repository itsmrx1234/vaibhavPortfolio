import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 hover:text-white cursor-pointer transition">
            Terms & Conditions
          </p>
        </div>

        {/* Social Icons */}
        <div className="socials flex gap-6">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon w-8 h-8"
            >
              <img
                src={socialImg.imgPath}
                alt="social icon"
                className="w-full h-full hover:scale-110 transition-transform cursor-pointer"
              />
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-gray-400">
            © {new Date().getFullYear()} Vaibhav Jha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
