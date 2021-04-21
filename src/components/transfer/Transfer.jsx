import {
    Box, SimpleGrid, Text, Stack, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Divider,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react';
import {Search2Icon, UpDownIcon, ArrowRightIcon } from '@chakra-ui/icons';

import { useEffect, useState } from 'react';

import axios from 'axios';

export default function Transfer(){

    const [transferCurrency, setTransferCurrency] = useState('ARS');
    const [userList, setUserList] = useState([]);
    const len = userList.length;

    useEffect(()=>{
        async function RetrieveUserList(){
            const aux = await axios.get('http://127.0.0.1:8000/api/users/');
            setUserList(aux.data);
        }
        RetrieveUserList();
    }, [len]);


    return(
        <Box>
            <SimpleGrid mt='60px' align='center' columns={4} spacing={1}>
            <Box></Box>
            <Box shadow='md' borderWidth='1px'>
                <Stack spacing='35px'>
                    <Text paddingTop='40px' fontSize='3xl' color='purple.500'>Transferencias</Text>
                    <Divider/>
                    <Text> Escoge una divisa para transferirle </Text>
                    <Box>
                        <Menu>
                            <MenuButton leftIcon={<Search2Icon/>} p={3} w='38%' as={Button}>
                                Mis Divisas
                            </MenuButton>
                            <Divider paddingTop='30px' />
                            <MenuList>
                                <MenuItem onClick={()=>{ setTransferCurrency('USD')} } > USD </MenuItem>
                                <MenuItem onClick={()=>{ setTransferCurrency('ARS')} } > ARS </MenuItem>
                                <MenuItem onClick={()=>{ setTransferCurrency('BTC')} } > BTC </MenuItem>
                                <MenuItem onClick={()=>{ setTransferCurrency('ETH')} } > ETH </MenuItem>
                            </MenuList>
                        </Menu>
                        <Box py='20px'>
                            <Text fontSize='2xl'>
                                Tu balance de {transferCurrency} es de:
                            </Text> 
                            <Box py='35px'>
                                Balance
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Box px='100px' shadow='md' borderWidth='1px'>
                <Box>
                    <Text fontSize='2xl' py='30px'>
                        Cuanto deseas transferir?
                    </Text>
                    <FormControl id="amount">
                        <FormLabel> Cantidad de {transferCurrency} a transferir: </FormLabel>
                            <NumberInput>
                                <NumberInputField />
                                    <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                    </NumberInputStepper>
                            </NumberInput>
                    </FormControl>
                </Box>
                <Box py='30px'>
                    <Divider/>
                    <Text fontSize='2xl' py='30px'>
                        A quien deseas transferirle?
                    </Text>
                    <Menu>
                        <MenuButton rightIcon={<UpDownIcon />} bgColor='purple.400' color='white' p={3} as={Button}>
                            Lista de Usuarios
                        </MenuButton>
                        <MenuList>
                            
                            {
                                len === 0 
                                ? 'Loading'
                                : userList.map((i) => <MenuItem> {i.username} </MenuItem>)
                            }   
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            <Box></Box>
        </SimpleGrid>
        <Box py='40px' align='center'>
                <Button leftIcon={<ArrowRightIcon />} rightIcon={<ArrowRightIcon />} fontSize='2xl' p={7} colorScheme='whatsapp' shadow='md'>
                    Realizar Transferencia
                </Button>
        </Box>
    </Box>
    )
}