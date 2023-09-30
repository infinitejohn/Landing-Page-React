import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import { Card, Wrap, Button, Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem, HStack, WrapItem, CardBody, Link, Text, Image, Stack, Heading} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon, ChevronDownIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'


function Products() {
  return (
    <>
<Flex minWidth='max-content' alignItems='center' gap='2' >
  <Box p='2'>
    <Heading size='md'>The Xth Leaders</Heading>
  </Box>
  <Spacer />
  <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Previous Leaders</MenuButton>
  <MenuList>
    <MenuItem as='a' href='#'>Wth Leadership</MenuItem>
    <MenuItem as='a' href='#'>Vth Leadership</MenuItem>
  </MenuList>
</Menu>
</Flex>
<Wrap spacing='30px' align='center' justify='center'>
      <WrapItem>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={require('./president.jpg')}
      alt='Green'
      borderRadius='full'
    />
    <Stack mt='6' spacing='0'>
      <Heading size='md'>President</Heading>
      <Text>
        SANYA, Joshua Oluwasegun
      </Text>
      <HStack>
      <Link href='tel: +2349029356946'><PhoneIcon /></Link>
      <Link href='mailto: sanyajoshua2020@gmail.com'><EmailIcon /></Link>
      </HStack>
    </Stack>
  </CardBody>
</Card>
</WrapItem>
<WrapItem>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://api.multiavatar.com/ayomide.png'
      alt='Green'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='0'>
      <Heading size='md'>Welfare Secretary</Heading>
      <Text>
        OGBON-NAIYE, Emmanuel Ayomide
      </Text>
      <HStack>
      <Link href='tel: +2349046745896'><PhoneIcon /></Link>
      <Link href='mailto: emmanuelayomipe.ea@gmail.com'><EmailIcon /></Link>
      </HStack>
    </Stack>
  </CardBody>
</Card>
</WrapItem>
<WrapItem>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://api.multiavatar.com/peculiar.png'
      alt='Green'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='0'>
      <Heading size='md'>Assistant General Secretary</Heading>
      <Text>
        OLATAYO, Peculiar Oluwafolahan
      </Text>
      <HStack>
      <Link href='tel: +2349084840881'><PhoneIcon /></Link>
      <Link href='mailto: olufolahan622@gmail.com'><EmailIcon /></Link>
      </HStack>
    </Stack>
  </CardBody>
</Card>
</WrapItem>
<WrapItem>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={require('../../images/finsec.jpg')}
      alt='Green'
      borderRadius='full'
    />
    <Stack mt='6' spacing='0'>
      <Heading size='md'>Financial Secretary</Heading>
      <Text>
        ASAJU, Gracious Oluwanipinmi
      </Text>
      <HStack>
      <Link href='tel: +2348131313846'><PhoneIcon /></Link>
      <Link href='mailto: asajugracie@gmail.com'><EmailIcon /></Link>
      </HStack>
    </Stack>
  </CardBody>
</Card>
</WrapItem>
<WrapItem>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={require('../../images/pro.jpg')}
      alt='Green'
      borderRadius='full'
    />
    <Stack mt='6' spacing='0'>
      <Heading size='md'>Public Relations Officer</Heading>
      <Text>
        OKELOLA, Deborah Ifeoluwa
      </Text>
      <HStack>
      <Link href='tel: +2348110000873'><PhoneIcon /></Link>
      <Link href='mailto: debbyoke73@gmail.com'><EmailIcon /></Link>
      </HStack>
    </Stack>
  </CardBody>
</Card>
</WrapItem>
<WrapItem>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://api.multiavatar.com/sheu.png'
      alt='Green'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='0'>
      <Heading size='md'>Technical Director</Heading>
      <Text>
        SHEU, Ibrahim Atilola
      </Text>
      <HStack>
      <Link href='tel: +2349011767735'><PhoneIcon /></Link>
      <Link href='mailto: atilolasheuibrahim@gmail.com'><EmailIcon /></Link>
      </HStack>
    </Stack>
  </CardBody>
</Card>
</WrapItem>
<WrapItem>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://api.multiavatar.com/alice.png'
      alt='Green'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='0'>
      <Heading size='md'>General Secretary</Heading>
      <Text>
        ANEJO, Alice Oyifie
      </Text>
      <HStack>
      <Link href='tel: +2347013169025'><PhoneIcon /></Link>
      <Link href='mailto: anejoalice01@gmail.com'><EmailIcon /></Link>
      </HStack>
    </Stack>
  </CardBody>
</Card>
</WrapItem>
</Wrap>  
    </>
  );
}

export default Products;