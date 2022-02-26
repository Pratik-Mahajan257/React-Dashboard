import './Sidebar.css'
import img1 from '../photo/photo.png'
import { GridView, InsertChartOutlined, CandlestickChartOutlined, ShowChartSharp, LeaderboardOutlined, Share, ArticleOutlined, KeyboardBackspaceOutlined, Language, DarkMode, Lens } from '@mui/icons-material'
import { AiOutlinePieChart } from 'react-icons/ai'
import { RiDatabase2Line, RiExchangeDollarFill } from 'react-icons/ri'
export default function Sidebar () {
    return (
      
      <div className='sidebar'>
        <div className="sidebarWrapper">
                <div className="sidebarmenu">
                
                    <h3 className="sidebarTitle">
                     <img src={img1} className='photo'  /> &nbsp; 
                        Name &emsp; <KeyboardBackspaceOutlined className='back'/></h3>
          <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <GridView className='sidebarIcon'/>
                     &emsp;  Home
                      </li>
            <li className="sidebarListItem">
                      <InsertChartOutlined className='sidebarIcon'/>
                      &emsp; Section 1
                      </li>
                  <li className="sidebarListItem">
                      <CandlestickChartOutlined className='sidebarIcon'  />
                      &emsp; Section 2
                      </li>
                  <li className="sidebarListItem">
                      <ShowChartSharp className='sidebarIcon' />
                      &emsp; Section 3
                      </li>
                  <li className="sidebarListItem">
                      <RiExchangeDollarFill className='sidebarIcon1' />
                      &emsp; Section 4
                      </li>
                  <li className="sidebarListItem">
                      <RiDatabase2Line className='sidebarIcon1' />
                      &emsp;  Section 5
                      </li>
                  <li className="sidebarListItem">
                      <AiOutlinePieChart className='sidebarIcon1' />
                      &emsp;  Section 6
                      </li>
                  <li className="sidebarListItem">
                      <LeaderboardOutlined className='sidebarIcon' />
                      &emsp;  Section 7
                      </li>
                  <li className="sidebarListItem active">
                      <Share className='sidebarIcon active' />
                      Section 8
                      </li>
                  <li className="sidebarListItem">
                      <ArticleOutlined className='sidebarIcon '/>
                      &emsp; Document
                        </li>
                       
                    </ul>
                    <div className="adjust">
                    <div className='sidebarbtm'>
                    <img src={img1} className='photo1' />
                        <div className='btm1'>
                        &nbsp;  $0.90
                        </div>
                        
                    </div>
                    <div className='sidebarbtmm'>
                        <div className='btm'>
                        &emsp; Buy $XYZ
                        </div>
                 
                    </div>
                    <div className='vec'>
                        <Language className='last' />
                        <div className='bar'>
                        <DarkMode className='moon'/> <Lens className='cir'/> 
                        </div>
                    </div>
                    </div>
                    
        </div>
      </div>
      </div>
      

  )
}
