import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllJobsCatagory from '../AllJobsCatagory/AllJobsCatagory';
const CategoryJob = () => {
    return (
       <div className=' mt-10 '>
        <h2 className='text-center text-5xl	font-bold mb-1 '>Job Category List</h2>
        <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
         <div className='flex justify-center mt-3 '>
             <Tabs>
        <TabList>
        <Tab>All Jobs</Tab>
          <Tab>On Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part Time</Tab>
        </TabList>

        <TabPanel>
          <AllJobsCatagory></AllJobsCatagory>
        </TabPanel>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
        </div>
       </div>
    );
};

export default CategoryJob;