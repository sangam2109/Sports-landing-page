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
import "./DevTeam.css";

// Sample data for team members
const teamMembers = [
  {
    name: "Vansh Kumar",
    description: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/johndoe/",
    github: "https://github.com/johndoe",
    portfolio: "https://www.portfolio.com/johndoe/",
    personImage: { Sangam }, // Adjust image path accordingly
  },
  {
    name: "Rajveer Singh",
    description: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/janesmith/",
    github: "https://github.com/janesmith",
    portfolio: "https://www.portfolio.com/janesmith/",
    personImage: { Sangam }, // Adjust image path accordingly
  },
  {
    name: "Sangam Arora",
    description: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/janesmith/",
    github: "https://github.com/janesmith",
    portfolio: "https://www.portfolio.com/janesmith/",
    personImage: { Sangam }, // Adjust image path accordingly
  },
  {
    name: "Inderpreet Singh",
    description: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/janesmith/",
    github: "https://github.com/janesmith",
    portfolio: "https://www.portfolio.com/janesmith/",
    personImage: { Sangam }, // Adjust image path accordingly
  },
  // Add more team members as needed
];

const DevTeam: React.FC = () => {
  return (
    <div className="">
      <div className="text-3xl flex justify-center mt-8 font-bold">Contributers</div>
      <div className=" flex flex-wrap justify-center gap-4">
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
                  src={member.personImage.Sangam} // Use the personImage property
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
                    className="text-tiny text-white bg-black/80"
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
                    className="text-tiny text-white bg-black/80"
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
                    className="text-tiny text-white bg-black/80"
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
  );
};

export default DevTeam;
