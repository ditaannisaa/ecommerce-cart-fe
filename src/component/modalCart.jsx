import { 
    Button, 
    GridItem, 
    Icon, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    Text, 
    useDisclosure 
} from '@chakra-ui/react'
import React from 'react'
import { IoMdCart } from "react-icons/io";
import { CartCard } from './cartCard';
import { useSelector } from 'react-redux';

export const ModalCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem colStart={4} colEnd={'25px'} h='10'>
                        <Button bg='green.100' onClick={onOpen}>
                            <Icon as={IoMdCart} fontSize={'30px'}/>
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose} size={'4xl'} >
                            <ModalOverlay />
                            <ModalContent >
                                <ModalHeader borderBottom={'1px'}>Keranjang</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody justifyItems={'center'} >
                                    <CartCard/>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='green' mr={3} onClick={onClose}>
                                    Beli
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
    </GridItem>
  )
}
