import Github from "../assests/github.png";
import Linkedln from "../assests/linkedln.png";
import Mail from "../assests/mail.png";

function LinkButtons() {
  return (
    <div
      className="justify-center bg-custom-slate flex gap-20 min-h-40 items-center max-w-3xl mx-auto"
    >
      <div>
        <a href="https://github.com/Indy1103" target="_blank" rel="noopener noreferrer">
          <img
            src={Github}
            alt="GitHub"
            className="h-20 w-20 object-contain"
          />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/indy03" target="_blank" rel="noopener noreferrer">
          <img
            src={Linkedln}
            alt="LinkedIn"
            className="h-20 w-20 object-contain"
          />
        </a>
      </div>
      <div>
        <a href="mailto:induwara.b03@gmail.com">
          <img
            src={Mail}
            alt="Email"
            className="h-20 w-20 object-contain"
          />
        </a>
      </div>
    </div>
  );
}

export default LinkButtons;
