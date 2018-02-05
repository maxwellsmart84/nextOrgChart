import EmployeeNode from './EmployeeNode';
import OrgChart from 'react-orgchart';


const Tree = ({ tree }) => (
  <div>
    <div id='orgChart'>
      <OrgChart tree={tree} NodeComponent={ EmployeeNode }/>
    </div>
  </div>
)

export default Tree;