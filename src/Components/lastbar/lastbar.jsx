import './lastbar.css'
import img4 from '../photo/Ellipse 131.png'
import { MdExpandMore, MdOutlineKeyboardBackspace, MdOutlineExitToApp } from 'react-icons/md'
import { AccountBalanceWalletOutlined } from '@mui/icons-material'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
export default function lastbar() {
  return (
      <div className="lastbar">
          <div className="lastbarwrapper">
              <div className="lastbarmenu">
                  <div className="titlewrap">
                      <div className="avalwrap">
                      <img src={img4} className='img'  />
                          <div className="aval">
                          Avalanche

                          </div>
                          <MdExpandMore className='more'/>

                      </div>
                      <div className="walwrap">
                          <AccountBalanceWalletOutlined className='w1'/>
                          <div className="wal">
                          0xf6...1353
                          </div>
                          <MdExpandMore className='more1'/>
                      </div>
                  </div>
                  <div className="clwrap">
                      <MdOutlineKeyboardBackspace className='ar1'/>
                      <div className="clink">
                      Custom link
                      </div>
                      <div className="http">
                      https://testnet.xyz.xyz/trade?ref=

                      </div>
                      <div className="enterwrap">
                          <div className="enter">
                              ENTER
                          </div>
                      </div>
                      <div className="two">
                      <div className="linkwrapper1">
                      <BsBoxArrowInUpRight className='lishare1'/> 
                          <div className="link1">
                            Custom link
                         </div>
                      </div>
                      <div className="canclewrap">
                          <div className="cancle">
                              Cancel
                          </div>
                          <MdOutlineExitToApp className='exit'/>
                      </div>
                      </div> 
                      

                  </div>
              </div>
          </div>
    </div>
     
  )
}
