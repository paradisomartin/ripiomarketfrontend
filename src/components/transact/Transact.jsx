import {Box, Text, SimpleGrid,
        FormControl, FormLabel, NumberInput,
        NumberInputField, NumberInputStepper,
        NumberDecrementStepper, Divider, Menu,
        NumberIncrementStepper, MenuButton,
        Button, MenuList, MenuItem,
        } from '@chakra-ui/react';

import {ChevronRightIcon, AddIcon, UpDownIcon, SearchIcon} from '@chakra-ui/icons';

import { useState } from 'react';

export default function Transact(){
    const [option, setOption] = useState('Operar');
    const [currency, setCurrency] = useState('Divisa');
    
    return(
        <SimpleGrid mt='60px' align='center' columns={3} spacing={1}>
            <Box></Box>
            <Box shadow='md' borderWidth='1px' p='20px'>
                <Text paddingTop='20px' fontSize='3xl' color='purple.500'> Depositos y Retiros </Text>
                <Box p={4}>
                    <Divider paddingTop='25px' />
                    <Text py='25px'>Con que divisa quieres operar?</Text>
                    <Menu py='20px'>
                        <MenuButton rightIcon={<SearchIcon />} p={3} w='38%' as={Button}>
                            {currency}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={ ()=>{ setCurrency('USD')} } > USD </MenuItem>
                            <MenuItem onClick={()=>{ setCurrency('ARS')} } > ARS </MenuItem>
                            <MenuItem onClick={()=>{ setCurrency('BTC')} } > BTC </MenuItem>
                            <MenuItem onClick={()=>{ setCurrency('ETH')} } > ETH </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Divider paddingTop='15px'/>
                    <Text fontSize='2xl' py='30px'>
                    Escoge tu operación:
                </Text>
                <Menu>
                    <MenuButton rightIcon={<UpDownIcon />} p={3} w='38%' as={Button}>
                        {option}
                    </MenuButton>
                        <MenuList>
                            <MenuItem onClick={ ()=>{ setOption('Depositar')} } > Depósito de dinero </MenuItem>
                            <MenuItem onClick={()=>{ setOption('Retirar')} } > Retiro de dinero </MenuItem>
                        </MenuList>
                </Menu>
                <Divider paddingTop='35px'/>
                <FormControl paddingTop='35px' id="amount">
                    <FormLabel> Cantidad de {currency} a {option}: </FormLabel>
                        <NumberInput>
                            <NumberInputField />
                                <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                                </NumberInputStepper>
                        </NumberInput>
                </FormControl>
                </Box>

                <Box p='6'>
                    <Button fontSize='2xl' colorScheme='whatsapp'>
                        {
                            option === 'Retirar' ? <ChevronRightIcon />
                                                : <AddIcon w='5' marginRight='3' />
                        }
                        {option} {currency}
                    </Button>
                </Box>
            </Box>
            <Box></Box>
        </SimpleGrid>
        
    )
}