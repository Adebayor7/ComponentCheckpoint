import React from "react";

function Card({ Fullname, Address, About }) {
  return (
    <div className="upper-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Iure in ducimus, tenetur facere repellendus ipsa beatae minus est <br />{" "}
        laudantium nobis tempora suscipit sunt tempore reprehenderit nulla
        necessitatibus! <br /> Eius sed provident iusto dicta corrupti itaque,{" "}
        <br /> ducimus quo illo cupiditate, quaerat blanditiis, quod accusamus
        doloremque <br />
        Neque unde nostrum dignissimos ad quam ratione.
      </p>
      <button>Visit Profile</button>
    </div>
  );
}

export default Card;
