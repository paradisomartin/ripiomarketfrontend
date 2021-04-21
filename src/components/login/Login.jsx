import {Link} from 'react-router-dom';
import {Button, SimpleGrid, Divider, Text, Box, Stack, FormControl, Input, FormLabel} from '@chakra-ui/react';
import {ArrowForwardIcon, ChevronRightIcon} from '@chakra-ui/icons';

export default function Login(){
     
    return(
        <SimpleGrid mt='100px' align='center' columns={3} spacing={1}>
            <Box></Box>
            <Stack bgColor='white' p='5' m='3' spacing='40px' shadow="md" borderWidth="1px">
                <Box>
                    <Text fontSize='4xl' color='purple.500'>Ingresar al sitio</Text>
                </Box>
                <Divider />
                <Box>
                    <FormControl id="email" isRequired>
                        <FormLabel>Usuario</FormLabel>
                        <Input type="email" placeholder='Ingrese su usuario' />
                    </FormControl>
                    <FormControl paddingTop={8} id="password" isRequired>
                        <FormLabel>Contraseña</FormLabel>
                        <Input type="password" placeholder='Ingrese su contraseña' />
                    </FormControl>
                </Box>
                <Box>
                    <Link to='/wallet'>
                        <Button rightIcon={<ArrowForwardIcon />} color='white' bgColor='purple.400'>
                            Acceder
                        </Button>
                    </Link>
                </Box>
                <Divider />
                <Box>
                    <Text pb={3}> 
                        No tienes cuenta?
                    </Text>
                <Link to='/register'> 
                    <Button rightIcon={<ChevronRightIcon />}>
                        Registrate!
                    </Button>
                </Link>
                </Box>

            </Stack>
            <Box></Box>
        </SimpleGrid>
    )
}