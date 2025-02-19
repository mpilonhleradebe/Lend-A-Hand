import React from "react";
import PopularSkill from "./PopularSkill";

const Popular = () => {
  const skills = [
    {
      skill: "Plumbing",
      minutes: "5",
      image: "https://www.globalgiving.org/pfil/640/ph_640_7490.jpg",
    },
    {
      skill: "Electrical Work",
      minutes: "5",
      image:
        "https://dwu32cgxelq1c.cloudfront.net/local_newspapers/sites/22/2020/04/Pic-Bedfordview.jpg",
    },
    {
      skill: "Carpentry",
      minutes: "10",
      image:
        "https://static.wixstatic.com/media/58a465_a00b33cc261e4a11ba6a98b0cb80b5d1~mv2.jpg",
    },
    {
      skill: "Gardening",
      minutes: "5",
      image:
        "https://i0.wp.com/www.dailymaverick.co.za/wp-content/uploads/2021/11/MC-Cabbage-Free.jpg?fit=720%2C371&quality=89&ssl=1",
    },
    {
      skill: "Hairdressing",
      minutes: "10",
      image:
        "https://images.fresha.com/lead-images/placeholders/hair-salon-102.jpg?class=venue-gallery-large&dpr=2",
    },
    {
      skill: "Sewing and Tailoring",
      minutes: "5",
      image:
        "https://thesewingcafe.co.za/wp-content/uploads/2023/10/CMT-Cape-Town-1.webp",
    },
    {
      skill: "Cooking",
      minutes: "10",
      image:
        "https://grantourismotravels.com/wp-content/uploads/2010/11/Cape-Malay-Cooking-Course-Bo-Kaap-Cape-Town-South-Africa-Copyright-2022-Terence-Carter-Grantourismo-T.jpg",
    },
    {
      skill: "Childcare",
      minutes: "15",
      image:
        "https://www.shutterstock.com/image-photo/happy-african-american-mother-daughter-600nw-2341111443.jpg",
    },
  ];

  return (
    <div className="popular-div">
      <div className="popular-title">
        <h1>Popular Skills:</h1>
      </div>
      <div className="popular-grid">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="each-skill">
              <PopularSkill
                skill={skill.skill}
                minutes={skill.minutes}
                image={skill.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
