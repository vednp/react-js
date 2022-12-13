import React from "react";

const List = ({ person }) => {
  console.log(person);
  return (
    <div>
      {person.map((person) => {
        const { id, name, age, image } = person;
        
        return (
          <section key={id} className="person">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>Age: {age}</p>
              
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default List;
