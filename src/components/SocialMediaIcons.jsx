import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";


const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/titan99/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={LinkedIn} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/TitanEkanayake"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src= {Github}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com/Titanekanayake9?mibextid=nW3QTL"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={facebook} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://instagram.com/titannn.e?utm_source=qr&igshid=MThlNWY1MzQwNA=="
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={instagram} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;