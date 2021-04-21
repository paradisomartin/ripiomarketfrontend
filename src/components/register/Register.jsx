import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Stack,
    Button,
    SimpleGrid,
    Text,
    Divider
  } from "@chakra-ui/react";

import {Link} from 'react-router-dom';


export default function Register(){
    return(
        <SimpleGrid mt='50px' align='center' columns={3} spacing={1}>
            <Box></Box>
                <Stack shadow='md' borderWidth={1} p={6} m={6}>
                    <Text fontSize='4xl' color='purple.500' pb={6}>Crea tu cuenta</Text>
                    <Divider py='15px' />
                    <FormControl pt='15px' id="first-name" isRequired>
                        <FormLabel>Tu nombre</FormLabel>
                        <Input placeholder="Tu nombre aquí" />
                    </FormControl>
                    <Divider py={4} />
                    <FormControl pt='10px' id="last-name" isRequired>
                        <FormLabel>Tu apellido</FormLabel>
                        <Input placeholder="Tu apellido aquí" />
                    </FormControl>
                    <Divider py={4} />
                    <FormControl pt='10px' id="email" isRequired>
                        <FormLabel>Tu correo electronico</FormLabel>
                        <Input placeholder="Tu email aquí" />
                    </FormControl>
                    <Divider py={4} />
                    <FormControl pt='10px' pb={4} id="password" isRequired>
                        <FormLabel>Crea tu contraseña</FormLabel>
                        <Input type='password' placeholder="Tu contraseña aquí" />
                    </FormControl>
                    <Link to='/login'>
                        <Button type='submit'>Registrarse</Button>
                    </Link>
                </Stack>
            <Box></Box>
        </SimpleGrid>
    )
}