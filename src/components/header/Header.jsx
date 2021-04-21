import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text
} from '@chakra-ui/react';

import {HamburgerIcon} from '@chakra-ui/icons';

import {Link} from 'react-router-dom';

export default function Header (){
  const { isOpen, onOpen, onClose } = useDisclosure()


  return(
    <Box display='flex' p={3} bgColor='purple.500'>
      <Menu>
        <MenuButton leftIcon={  <HamburgerIcon w={5} h={5} />} as={Button} variant='outline' color='white'>
          RipioMarket
        </MenuButton>
        <MenuList>
          <Link to='/login'> <MenuItem> Ingresar </MenuItem> </Link>
          <MenuDivider />
            <Link to='/wallet'> <MenuItem> Mi Billetera </MenuItem> </Link>
            <Link to='/transfer'> <MenuItem> Transferencias </MenuItem>  </Link>
            <Link to='/transact'> <MenuItem> Depositos y Retiros </MenuItem> </Link>
          <MenuDivider />
            <MenuItem>
              <MenuItem onClick={onOpen}> <Text>Salir</Text> </MenuItem>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Cerrar sesión</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Esta seguro que desea cerrar la sesión?
                    </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                      No, quedarme en el sitio
                    </Button>
                    <Button colorScheme="blue" onClick={onClose} > Si, Cerrar sesión </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </MenuItem>
        </MenuList>
      </Menu>
    </Box>
   
  );
};