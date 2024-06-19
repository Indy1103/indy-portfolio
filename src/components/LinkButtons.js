import Github from "../assests/github.png";
import Linkedln from "../assests/linkedln.png";
import Mail from "../assests/mail.png";

function LinkButtons() {
  return (
    <div
      className="justify-center bg-custom-slate flex gap-20 min-h-40 items-center max-w-3xl mx-auto"
    >
      <div>
        <img
          src={Github}
          alt="Description 1"
          className="h-20 w-20 object-contain"
        />
      </div>
      <div>
        <img
          src={Linkedln}
          alt="Description 1"
          className="h-20 w-20 object-contain"
        />
      </div>
      <div>
        <img
          src={Mail}
          alt="Description 1"
          className="h-20 w-20 object-contain"
        />
      </div>
    </div>
  );
}

export default LinkButtons;
