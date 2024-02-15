import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const CartCard = () => {
  return (
    <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={'840px'}
        h={'100px'}
        alignItems={'center'}
        >
        <Image
            maxW={{ base: '30px', sm: '65px' }}
            h={{ base: '30px', sm: '65px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
            m={'15px'}
        />

        <Stack w={{base: '100px', sm: '760px'}}>
            <CardBody>
            <Text fontSize={'17px'} fontWeight={600}>Item 1</Text>
            <Text fontSize={'17px'} fontWeight={600}>Kategori A</Text>
            <Text fontSize={'21px'} fontWeight={600}>
                10.000,00
            </Text>
            </CardBody>

        </Stack>
        <Stack alignItems={'center'} w={{base: '100px', sm: '200px'}} h={'100px'}>
            <CardFooter justifyContent={'center'} alignItems={'center'}  w={'full'} h={'50'}>
                <Text fontSize={'17px'} fontWeight={600}>
                    Qty: 1
                </Text>    
            </CardFooter>
            <Button fontSize={'16px'} colorScheme='red' marginBottom={2}>
                    Remove Item
            </Button>
        </Stack>
    </Card>
  )
}
