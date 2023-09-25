import * as React from 'react';
import {Image, List, Box, Divider, ListIcon, ListItem, Heading} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function Services() {
  return (
    <>
    <Box borderWidth='5px' borderRadius='lg' overflow='hidden'>
<Heading as='h3' size='lg'>
Nigerian Institution of Mechanical Engineers (NIMechE), Unilorin NSF Chapter. 
  </Heading>

<Heading as='h4' size='md'>
The objectives of the association shall be:
  </Heading> 
<Divider />
<List spacing={3} itemIcon={CheckIcon}>
  <ListItem>
    To represent, promote and protect the general interest and welfare of the students in all matters. 
  </ListItem>
  <ListItem>
    To form academic link between the students and the Department of Mechanical Engineering in 
particular and the university in general.
  </ListItem>
  <ListItem>
    To discuss matters affecting the academic and social welfare of the members of the association. 
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    To associate the students of Mechanical engineering with other engineering bodies within and 
outside the country and in pursuance of this objective, it shall be necessary that all members shall 
be members of the NIGERIAN INSTITUTION OF MECHANICAL ENGINEERS.
  </ListItem>
  <ListItem>
    To help in shaping the course of technological development in Nigeria by encouraging and carrying 
out industrial projects, offering useful and constructive suggestions to the government and the 
bodies responsible for the making of the nation’s technological policies. 
  </ListItem>
  <ListItem>
    To create forum for discussing technological advancement namely through organizing symposia, 
quizzes, lecture etc. 
  </ListItem>
  <ListItem>
    To promote a cordial relationship among all members of the Department of Mechanical Engineering, University of Ilorin.  
  </ListItem>
</List> 

<Heading as='h4' size='md'>
Organizational Structure: The association shall comprise of three (3) arms namely: 
  </Heading>

<List spacing={3} itemIcon={CheckIcon}>
  <ListItem>
    The Central Executive Council (C.E.C.)
  </ListItem>
  <ListItem>
    The Students’ Representative Council (S.R.C)
  </ListItem>
  <ListItem>
    The Congress
  </ListItem>
</List>
</Box>
    </>
  );
}

export default Services;