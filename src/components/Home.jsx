import {Image, Box, Heading, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions= {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    p:"4",
    size:"3xl"
}

const Home = () => {
  return (
    <Box>
        <MyCarousel/>

        <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
            
            <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} 
            borderBottom={'2px solid'} m={'auto'}>Services</Heading>

            <Stack h={'full'} p={'4'} alignItems={'center'}
            direction={['column','row']}>

                <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>

                <Text letterSpacing={'widest'} lineHeight={'170%'} p={['4','16']} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas, pariatur dolor quos cupiditate blanditiis vero quidem necessitatibus ad, reprehenderit excepturi debitis earum quasi in veniam eaque praesentium dignissimos, dicta similique expedita. Odit neque deleniti beatae laboriosam quasi! Quo blanditiis, optio nam quas inventore nesciunt sit beatae, laborum laboriosam qui debitis ad accusantium eveniet et nobis quidem eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt repellendus, ut itaque nihil fugiat incidunt. Amet libero, adipisci similique neque, in asperiores voluptate vitae deleniti ipsa aut praesentium eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit repellat quasi porro asperiores perspiciatis, dolore alias voluptatum debitis architecto blanditiis?
                </Text>

            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel= ()=>(
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} 
    showArrows={false} showThumbs={false}>

        <Box w={'full'} h={'100vh'} >
            <Image src={img1}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'} >
            <Image src={img2}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Future is Simulation
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'} >
            <Image src={img3}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'} >
            <Image src={img4}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Dive into New World
            </Heading>
        </Box>

    </Carousel>
)

export default Home