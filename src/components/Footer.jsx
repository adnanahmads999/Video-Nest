import { Box, Button, HStack, Heading, Input, Stack, VStack, Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend, AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']}>

                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get Updates
                    </Heading>

                    <HStack borderBottom={'2px solid white'} py={'2'}>
                        <Input placeholder='Enter Email here..' border={'none'}
                        borderRadius={'none'} outline={'none'} focusBorderColor={'none'}/>
                        <Button p={'0'} colorScheme={'purple'} variant={'ghost'} 
                        borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={'20'}/>
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={'full'} borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}>
                    <Heading textAlign={'center'} textTransform={'uppercase'}>
                        Video Nest
                    </Heading>
                    <Text py={'1'}>All rights Reserved</Text>
                </VStack>

                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                    <Button variant={'link'} colorScheme='linkedin'>
                        <a href="https://www.linkedin.com/in/adnanahmads999/" target='blank' ><AiFillLinkedin size={'21'}/></a>
                        
                    </Button>
                    <Button variant={'link'} color={'#bb7eba'}>
                        <a href="https://www.instagram.com/adnanahmads999/" target='blank' ><AiFillInstagram size={'21'}/></a>
                        
                    </Button>
                    <Button variant={'link'} >
                        <a href="https://www.github.com/adnanahmads999/" target='blank'><AiFillGithub size={'21'}/></a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer