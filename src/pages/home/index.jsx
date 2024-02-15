import { 
    Box, 
    GridItem, 
    Grid, 
    Text, 
    Input, 
    Button, 
    Card, 
    Image, 
    Stack,
    Icon, 
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { ModalCart } from '../../component/modalCart';
import axios from 'axios';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const [searchItem, setSearchItem] = useState('')
    const [searchResults, setSearchResults] = useState([]);

    const { data: products, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const { data } = await axios.get('https://dummyjson.com/products');
          return data.products;
        },
      });

    const handleSearch = () => {
        const filteredItems = products?.filter(item => {
            if (typeof item?.title === 'string') {
              return item.title.toLowerCase().includes(searchItem.toLowerCase());
            } 
          });
        setSearchResults(filteredItems);
      };

  return (
        <Grid templateColumns='repeat(1, 1fr)' w={'100%'}>
            <GridItem w='100%' h='100' bg='blue.100' py={'36px'} px={'25px'}>
                <Grid templateColumns='repeat(2, 1fr)'>
                    <GridItem colSpan={2} h='10'>
                        <Text fontWeight={600} fontSize={23}>E-Commerce</Text>
                    </GridItem>
                    <ModalCart/>
                </Grid>
            </GridItem>
            <GridItem w='100%' h='10' px='25px' py='25px'>
                <Text alignSelf={'center'} fontWeight={500} paddingBottom={'10px'} borderBottom={'1px'}>Produk</Text>
            </GridItem>
            <Grid gridTemplateColumns={'1fr 3fr'} py={'36px'}>
                <GridItem px={'25px'} >
                    <Text my={'5px'} fontWeight={400} fontSize={'17px'}>Pencarian</Text>
                    <Input 
                        placeholder='Cari produk' my={'5px'} w={'224px'}
                        value={searchItem }
                        onChange={e => setSearchItem(e.target.value)}
                    />
                    <Button 
                    colorScheme='blue' my={'5px'} w={'224px'} fontWeight={400}
                    onClick={handleSearch}
                    >
                        Terapkan
                    </Button>
                </GridItem>
                <GridItem px={'25px'} >
                    <Grid 
                        templateColumns={{
                            base: 'repeat(1, 200px)',
                            md: 'repeat(2, 200px)',
                            lg: 'repeat(4, 200px)'
                        }} 
                        gap={6} mx={'10px'}>
                        {searchResults.length > 0 ? (
                            searchResults?.map(product => (
                                <GridItem key={product.id}>
                                    <Card maxW='237px'h={'350px'}>
                                        <Image
                                        src={product.images[0]}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={'237px'}
                                        h={'200px'}
                                        objectFit={'cover'}
                                        />
                                        <Grid gridTemplateColumns={'120px 40px'} p={'10px'}>
                                            <GridItem>
                                                <Stack >
                                                <Text fontSize='16px' fontWeight={400}>{product.title}</Text>
                                                <Text fontSize='16px' fontWeight={400}>
                                                    {product.category}
                                                </Text>
                                                <Text fontSize={'20px'} fontWeight={600}>10.000,00</Text>
                                                </Stack>
                                            </GridItem>
                                            <GridItem>
                                                <Button bg='blue.100'>
                                                    <Icon as={HiOutlineShoppingBag} fontSize={'29px'}/>
                                                </Button>
                                            </GridItem>
                                        </Grid>
                                    </Card>
                                </GridItem>
                            )
                        )) : (
                            products?.map(product => (
                                <GridItem key={product.id}>
                                    <Card maxW='237px'h={'350px'}>
                                        <Image
                                        src={product.images[0]}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={'237px'}
                                        h={'200px'}
                                        objectFit={'cover'}
                                        />
                                        <Grid gridTemplateColumns={'120px 40px'} p={'10px'}>
                                            <GridItem>
                                                <Stack >
                                                <Text fontSize='16px' fontWeight={400}>{product.title}</Text>
                                                <Text fontSize='16px' fontWeight={400}>
                                                    {product.category}
                                                </Text>
                                                <Text fontSize={'20px'} fontWeight={600}>10.000,00</Text>
                                                </Stack>
                                            </GridItem>
                                            <GridItem>
                                                <Button bg='blue.100'>
                                                    <Icon as={HiOutlineShoppingBag} fontSize={'29px'}/>
                                                </Button>
                                            </GridItem>
                                        </Grid>
                                    </Card>
                                </GridItem>
                            ))
                        )}
                        {/* {searchResults?.map(product => (
                            <GridItem >
                                <Card maxW='237px'h={'350px'}>
                                    <Image
                                    src={product.images[0]}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    width={'237px'}
                                    h={'200px'}
                                    objectFit={'cover'}
                                    />
                                    <Grid gridTemplateColumns={'120px 40px'} p={'10px'}>
                                        <GridItem>
                                            <Stack >
                                            <Text fontSize='16px' fontWeight={400}>{product.title}</Text>
                                            <Text fontSize='16px' fontWeight={400}>
                                                {product.category}
                                            </Text>
                                            <Text fontSize={'20px'} fontWeight={600}>10.000,00</Text>
                                            </Stack>
                                        </GridItem>
                                        <GridItem>
                                            <Button bg='blue.100'>
                                                <Icon as={HiOutlineShoppingBag} fontSize={'29px'}/>
                                            </Button>
                                        </GridItem>
                                    </Grid>
                                </Card>
                            </GridItem>
                        ))} */}

                    </Grid>
                </GridItem>
            </Grid>
        </Grid>
  )
}

export default Home