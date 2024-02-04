import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { RegisterSteps } from "../../contanst";

export default function Register() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Card className="max-w-[400px] bg-lightY ">
      <CardHeader className="flex gap-3 justify-center">
        <div className="flex flex-col">
          <h2 className="text-xl">How to Register</h2>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="text-lg p-6 md:p-12">
        <p>
          We've got the GNDEC ATHLETIX app just for you. It's an easy way to
          sign up and be part of the Athletic Meet 2024.
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-end">
        <Button onPress={onOpen} color="primary" className="bg-yellow">
          Register now !
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="m-2 bg-dark"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-white">
                  Steps to Register
                </ModalHeader>
                <ModalBody>
                  <ol className="text-white">
                    {RegisterSteps.StepsToRegister.map((steps) => {
                      return (
                        <li className="mt-1 pt-1 text-sm" key={steps.key}>
                          {steps.key}. {steps.content}
                        </li>
                      );
                    })}
                  </ol>
                </ModalBody>
                <ModalFooter>
                  <Button className="bg-brown" onPress={onClose}>
                    OK!, I understand
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardFooter>
    </Card>
  );
}
