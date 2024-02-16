import React from "react";
import {
  Card,
  CardFooter,
  Image,
  CardHeader,
  CardBody,
  Button,
} from "@nextui-org/react";
import { FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi";
import Sangam from "../../assets/Sangam.png";
import Vansh from "../../assets/vansh.avif";
import Rajveer from "../../assets/rajveer.png";
import inderpreet from "../../assets/inderpreet.jpg";
import Saksham from "../../assets/Saksham.jpg"
import Tashneet from "../../assets/tashneet.jpg"
import "./DevTeam.css";

// Sample data for team members
const teamMembers = [
  {
    name: "Rajveer Singh",
    description: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/rajveer-singh-sidhu-534a25232",
    github: "https://github.com/rajveer810214",
    portfolio: "https://rajveersidhu.vercel.app",
    personImage: Rajveer, // Adjust image path accordingly
  },

  {
    name: "Vansh Kumar",
    description: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/vansh1190",
    github: "https://github.com/vansh1190",
    portfolio: "https://vansh1190.vercel.app",
    personImage: Vansh, // Adjust image path accordingly
  },
  {
    name: "Sangam Arora",
    description: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/sangam-arora-5078b6223/",
    github: "https://github.com/sangam2109",
    portfolio: "https://sangamportfolio.vercel.app",
    personImage: Sangam, // Adjust image path accordingly
  },
  {
    name: "Inderpreet Singh",
    description: "UI/UX Developer",
    linkedin: "https://www.linkedin.com/in/inderpreet-singh13/",
    github: "https://github.com/Inder-singh001",
    portfolio: "https://www.instagram.com/_.inderpreet_singh._/",
    personImage: inderpreet, // Adjust image path accordingly
  },

  {
    name: "Saksham Kohli",
    description: "Researcher",
    linkedin: "https://www.linkedin.com/in/sakshamk007",
    github: "https://github.com/sakshamk007",
    portfolio: "https://twitter.com/Sakshamk007",
    personImage: Saksham, // Adjust image path accordingly
  },
  {
    name: "Tashneet Kaur",
    description: "Content Creator",
    linkedin: "https://www.linkedin.com/in/tashneetkaur343/",
    github: "https://github.com/Tashneet-30",
    portfolio: "https://www.youtube.com/@tashneetkaur30",
    personImage: Tashneet, // Adjust image path accordingly
  },
  // Add more team members as needed
];

const DevTeam: React.FC = () => {
  return (
    <section id="DevTeam" className="">
      <div>
        <div className="text-3xl flex justify-center mt-8 font-bold">
          Dev Team
        </div>
        <div className=" flex flex-wrap justify-center gap-2">
          {teamMembers.map((member, index) => (
            <div key={index} className=" max-content m-4 ">
              <Card
                isFooterBlurred
                isPressable
                radius="lg"
                className=" border-none relative "
              >
                <CardBody className="items-center">
                  <Image
                    alt={`Team Member ${index + 1}`}
                    className="object-cover"
                    height={150}
                    src={member.personImage} // Use the personImage property
                    width={200}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-1 flex-col items-center">
                  <h2 className="text-lg uppercase font-bold">{member.name}</h2>
                </CardHeader>
                <CardFooter className="pb-0 flex-col items-center">
                  <h3 className="text-sm ">{member.description}</h3>
                  <div className="flex mt-2  items-center space-x-2">
                    <Button
                      as="a"
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny text-white bg-dark"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      <FiGithub size={14} />
                    </Button>

                    <Button
                      as="a"
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny text-white bg-dark"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      <FiGlobe size={14} />
                    </Button>
                    <Button
                      as="a"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny text-white bg-dark"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      <FiLinkedin size={14} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevTeam;
