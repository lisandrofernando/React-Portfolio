import './Layout.scss';
import SideBar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ()=>{
    return (
        <div className='App'>
        <SideBar/>
        <div className='page'>
        <i className='tags top-tags'>&lt;fernando&gt;</i>
       <Outlet  />
       <i className='tags bottom-tags'>
       &lt;lisandro&gt;
       <br/>
       <i className='bottom-tag-html'>&lt;fernando&gt;</i>
       </i>
        </div>
        </div>
    )
}

export default Layout;