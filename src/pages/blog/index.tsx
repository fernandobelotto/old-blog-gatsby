import { Box, Button, Flex, Heading, HStack, Link, ScaleFade, SimpleGrid, SlideFade, Tag, Text, useToast, VStack } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'
import dayjs from 'dayjs'

export default function BlogPage(): ReactElement {

    const data = [
        {
            title: 'Entendendo a Redux Toolkit', description: 'Neste biografia eu te explico como usar a redux toolkit nos seus apps react', id: '1234', data: dayjs().format('DD/MM/YY'),
            tags: ['react', 'javascript', 'typescript']
        },
        {
            title: 'title', description: 'description bla blabl bla blaa', id: '1234', data: dayjs().format('DD/MM/YY'),
            tags: ['react', 'javascript', 'typescript']
        },
        {
            title: 'title', description: 'description bla blabl bla blaa', id: '1234', data: dayjs().format('DD/MM/YY'),
            tags: ['react', 'javascript', 'typescript']
        }
    ]

    const toast = useToast()
    return (
        <>
            <Layout pageTitle='Blog' subTitle='Articles about software development'>
                <SimpleGrid columns={2} spacing={5} minChildWidth={'300px'}>
                    {data.map((blog) => {
                        return (

                            <Box p='5' cursor={'pointer'} textDecor={'none'} borderRadius='2xl' shadow={'sm'} border={'1px solid'} borderColor='gray.200'
                                onClick={() => toast()}
                                transition="all 0.25s"
                                transition-timing-function="spring(1 100 10 10)"
                                _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
                            >
                                <VStack spacing={2} align='stretch'>
                                    <Flex alignItems={'stretch'} flexDir={'column'} height='100%' justifyContent={'space-between'}>
                                        <Box mb='3'>
                                            <Heading fontSize={'xl'} mb='2'>{blog.title}</Heading>
                                            <Text color='gray.400'>{blog.description}</Text>
                                        </Box>
                                        <Flex justifyContent={'space-between'}>
                                            <HStack spacing={2}>
                                                {blog.tags.map((tag) => (
                                                    <Tag size={'sm'} key={tag} variant='solid' colorScheme='red'>
                                                        {tag}
                                                    </Tag>
                                                ))}
                                            </HStack>
                                            <Text>{blog.data}</Text>
                                        </Flex>
                                    </Flex>
                                </VStack>
                            </Box>
                        )
                    })}
                </SimpleGrid>

            </Layout>
        </>
    )
}
