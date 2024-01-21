import React from "react";
import { Card, CardFooter, Image, CardHeader, CardBody, Button } from "@nextui-org/react";
import { FiGithub, FiLinkedin,FiGlobe} from "react-icons/fi";
import Sangam from '../../assets/Sangam.png'
import './DevTeam.css'

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
  // Add more team members as needed
];

const DevTeam: React.FC = () => {
  return (
    <div className=" flex flex-wrap justify-center gap-4">
      {teamMembers.map((member, index) => (
        <div key={index} className=" max-content ">
          <Card
            isFooterBlurred
            isPressable
            isHoverable
            radius="lg"
            className=" border-none relative"
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h2 className="text-tiny uppercase font-bold">{member.name}</h2>
            </CardHeader>
            <CardBody>
              <Image
                alt={`Team Member ${index + 1}`}
                className="object-cover"
                height={300}
                src={member.personImage.Sangam} // Use the personImage property
                width={300}
              />
            </CardBody>
            <CardFooter className="flex flex-col items-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10">
              <h3 className="text-tiny text-white/80 mb-1 font-bold">
                {member.description}
              </h3>
              <div className="flex space-x-2">
                <Button
                  as="a"
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  <FiGithub size={16} />
                </Button>

                <Button
                  as="a"
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  <FiGlobe size={16} />
                </Button>
                <Button
                  as="a"
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  <FiLinkedin size={16} />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DevTeam;
