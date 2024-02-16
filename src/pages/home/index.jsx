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
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slice/cartSlice';

const Home = () => {
    const [searchItem, setSearchItem] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();

    const { data: products} = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const { data } = await axios.get('https://dummyjson.com/products');
          return data.products;
        },
      });

    //   console.log(products)

    const formatCurrency = (price) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(price);
    };

    const formattedPrice = products?.map(product => ({
        ...product,
        price: formatCurrency(product.price)
      }));

    // console.log(formattedPrice)

    const handleSearch = () => {
        const filteredItems = formattedPrice?.filter(item => {
            if (typeof item?.title === 'string') {
              return item.title.toLowerCase().includes(searchItem.toLowerCase());
            } 
          });
        setSearchResults(filteredItems);
      };

      const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

  return (
        <Grid templateColumns='repeat(1, 1fr)' w={'100%'}>
            <GridItem w='100%' h='100' bg='green.100' py={'36px'} px={'25px'}>
                <Grid templateColumns='repeat(2, 1fr)'>
                    <GridItem colSpan={2} h='10'>
                        <Text fontWeight={600} fontSize={'23px'}>E-Commerce</Text>
                    </GridItem>
                    <ModalCart/>
                </Grid>
            </GridItem>
            <GridItem w='100%' h='10' px='25px' py='25px'>
                <Text alignSelf={'center'} fontWeight={500} paddingBottom={'10px'} borderBottom={'1px'}  fontSize={'17px'}>Produk</Text>
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
                    bgColor='green.300' my={'5px'} w={'224px'} fontWeight={400}
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
                            searchResults?.map((item, index) => (
                                <GridItem >
                                    <Card maxW='237px'h={'350px'} key={item.id} id={item.id} bg='green.100'>
                                        <Image
                                        src={item.images[0]}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={'237px'}
                                        h={'200px'}
                                        objectFit={'contain'}
                                        bgColor={'white'}
                                        />
                                        <Grid gridTemplateColumns={'120px 40px'} p={'10px'}>
                                            <GridItem>
                                                <Stack >
                                                <Text fontSize='16px' fontWeight={400}>{item.title}</Text>
                                                <Text fontSize='16px' fontWeight={400}>
                                                    {item.category}
                                                </Text>
                                                <Text fontSize={'20px'} fontWeight={600}>{item.price}</Text>
                                                </Stack>
                                            </GridItem>
                                            <GridItem>
                                                <Button onClick={() => handleAddToCart(item)} bg='green.100'>
                                                    <Icon as={HiOutlineShoppingBag} fontSize={'29px'} />
                                                </Button>
                                            </GridItem>
                                        </Grid>
                                    </Card>
                                </GridItem>
                            )
                        )) : (
                            formattedPrice?.map((item, index) => (
                                <GridItem >
                                    <Card maxW='237px'h={'350px'} key={item.id} id={item.id} bg='green.100'>
                                        <Image
                                        src={item.images[0]}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={'237px'}
                                        h={'200px'}
                                        objectFit={'contain'}
                                        bgColor={'white'}
                                        />
                                        <Grid gridTemplateColumns={'120px 40px'} p={'10px'}>
                                            <GridItem>
                                                <Stack >
                                                <Text fontSize='16px' fontWeight={400}>{item.title}</Text>
                                                <Text fontSize='16px' fontWeight={400}>
                                                    {item.category}
                                                </Text>
                                                <Text fontSize={'20px'} fontWeight={600}>{item?.price}</Text>
                                                </Stack>
                                            </GridItem>
                                            <GridItem>
                                                <Button onClick={() => handleAddToCart(item)} bg='green.100'>
                                                    <Icon as={HiOutlineShoppingBag} fontSize={'29px'}/>
                                                </Button>
                                            </GridItem>
                                        </Grid>
                                    </Card>
                                </GridItem>
                            ))
                        )}
                    </Grid>
                </GridItem>
            </Grid>
        </Grid>
  )
}

export default Home