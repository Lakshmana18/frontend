import React, { useState } from "react";
import {
  Box,
  Avatar,
  Button,
  Input,
  VStack,
  Text,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { EditIcon, CloseIcon } from "@chakra-ui/icons";

export const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [photo, setPhoto] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="6" boxShadow="lg" borderRadius="md" textAlign="center">
      <VStack spacing="4">
        <Box position="relative">
          <Avatar
            size="xl"
            src={photo}
            name={name}
            borderWidth={photo ? "2px" : "none"}
            borderColor="gray.300"
          />
          <IconButton
            aria-label="Edit photo"
            icon={<EditIcon />}
            position="absolute"
            bottom="0"
            right="0"
            size="sm"
            onClick={onOpen}
          />
          {photo && (
            <IconButton
              aria-label="Remove photo"
              icon={<CloseIcon />}
              position="absolute"
              top="0"
              right="0"
              size="sm"
              onClick={handleRemovePhoto}
            />
          )}
        </Box>
        <Text fontSize="2xl" fontWeight="bold">{name}</Text>
        <Text fontSize="md">{email}</Text>
        <Text fontSize="md">{mobile}</Text>
      </VStack>

      {/* Edit Photo Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Choose a new photo</FormLabel>
              <Input type="file" accept="image/*" onChange={handlePhotoChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProfilePage;
