import {
    Box, SimpleGrid, Text, Stack, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Divider
} from '@chakra-ui/react';
import {Search2Icon, PlusSquareIcon, ArrowRightIcon} from '@chakra-ui/icons';

import {Link} from 'react-router-dom';

import { useState } from 'react';

export default function Wallet(){
    const [currency, setCurrency] = useState('ARS');

    return(
        <SimpleGrid mt='60px' align='center' columns={4} spacing={1}>
            <Box></Box>
            <Box shadow='md' borderWidth='1px'>
                <Stack spacing='35px'>
                    <Text paddingTop='40px' fontSize='3xl' color='purple.500'><Text color='black'><b>@Usuario</b></Text> Mi Billetera </Text>
                    <Divider/>
                    <Text> Escoge una divisa para ver el balance </Text>
                    <Box>
                        <Menu>
                            <MenuButton leftIcon={<Search2Icon/>} p={3} w='38%' as={Button}>
                                Mis Divisas
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={ ()=>{ setCurrency('USD')} } > USD </MenuItem>
                                <MenuItem onClick={()=>{ setCurrency('ARS')} } > ARS </MenuItem>
                                <MenuItem onClick={()=>{ setCurrency('BTC')} } > BTC </MenuItem>
                                <MenuItem onClick={()=>{ setCurrency('ETH')} } > ETH </MenuItem>
                            </MenuList>
                        </Menu>
                        <Box py='20px'>
                            <Text fontSize='2xl'>
                                Tu balance de {currency} es de:
                            </Text> 
                            <Box py='35px'>
                                @Balance
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Box px='100px' shadow='md' borderWidth='1px'>
                <Box>
                    <Text fontSize='2xl' py='30px'>
                        Quieres depositar o retirar tu dinero?
                    </Text>
                    <Text>
                        <Link to='transact'>
                            <Button leftIcon={<PlusSquareIcon/>} color='white' bgColor='purple.400'>
                                Ingresar y retirar dinero
                            </Button>
                        </Link>
                    </Text>
                </Box>
                <Box py='30px'>
                    <Divider/>
                    <Text fontSize='2xl' py='30px'>
                        Quieres transferirle a alguien?
                    </Text>
                    <Text>
                        <Link to='transfer'>
                            <Button rightIcon={<ArrowRightIcon/>} color='white' bgColor='purple.400'>
                                Ir a Transferencias
                            </Button>
                        </Link>
                    </Text>
                </Box>
            </Box>
            <Box></Box>
        </SimpleGrid>
    );
}