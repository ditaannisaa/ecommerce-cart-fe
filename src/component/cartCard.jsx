import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../store/slice/cartSlice';

export const CartCard = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state.cart);

    console.log(cartItems, 'cartItems')

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

  return (
    <Box>
        {cartItems.length == 0 ? (
            <Text fontSize={'20px'} fontWeight={600} textAlign={'center'} height={'325px'} py={40}>No Item</Text>
        ) : (
            cartItems?.map(item => (
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    w={'840px'}
                    h={'100px'}
                    alignItems={'center'}
                    bgColor={'green.100'}
                    marginBottom={'5px'}
                    >
                    <Image
                        maxW={{ base: '30px', sm: '65px' }}
                        h={{ base: '30px', sm: '65px' }}
                        src={item.images[0]}
                        alt='Caffe Latte'
                        m={'15px'}
                    />
    
                    <Stack w={{base: '100px', sm: '760px'}}>
                        <CardBody>
                        <Text fontSize={'17px'} fontWeight={600}>{item.title}</Text>
                        <Text fontSize={'17px'} fontWeight={600}>{item.category}</Text>
                        <Text fontSize={'21px'} fontWeight={600}>
                            {item?.price}
                        </Text>
                        </CardBody>
    
                    </Stack>
                    <Stack alignItems={'center'} w={{base: '100px', sm: '200px'}} h={'100px'}>
                        <CardFooter justifyContent={'center'} alignItems={'center'}  w={'full'} h={'50'}>
                            <Text fontSize={'17px'} fontWeight={600}>
                                Qty: {item.quantity}
                            </Text>    
                        </CardFooter>
                        <Button fontSize={'16px'} marginBottom={2} onClick={() => handleRemoveItem(item.id)}>
                                Hapus Barang
                        </Button>
                    </Stack>
                </Card>
    
            ))
        )}
        {/* {cartItems?.map(item => (
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                w={'840px'}
                h={'100px'}
                alignItems={'center'}
                bgColor={'green.100'}
                marginBottom={'5px'}
                >
                <Image
                    maxW={{ base: '30px', sm: '65px' }}
                    h={{ base: '30px', sm: '65px' }}
                    src={item.images[0]}
                    alt='Caffe Latte'
                    m={'15px'}
                />

                <Stack w={{base: '100px', sm: '760px'}}>
                    <CardBody>
                    <Text fontSize={'17px'} fontWeight={600}>{item.title}</Text>
                    <Text fontSize={'17px'} fontWeight={600}>{item.category}</Text>
                    <Text fontSize={'21px'} fontWeight={600}>
                        {item?.price}
                    </Text>
                    </CardBody>

                </Stack>
                <Stack alignItems={'center'} w={{base: '100px', sm: '200px'}} h={'100px'}>
                    <CardFooter justifyContent={'center'} alignItems={'center'}  w={'full'} h={'50'}>
                        <Text fontSize={'17px'} fontWeight={600}>
                            Qty: {item.quantity}
                        </Text>    
                    </CardFooter>
                    <Button fontSize={'16px'} marginBottom={2} onClick={() => handleRemoveItem(item.id)}>
                            Remove Item
                    </Button>
                </Stack>
            </Card>

        ))} */}
    </Box>
  )
}
