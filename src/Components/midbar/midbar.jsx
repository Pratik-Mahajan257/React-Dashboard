import './midbar.css'
import { AccountBalanceWalletOutlined, Close, AutoAwesomeMotionRounded, Circle } from '@mui/icons-material'
import { FaBitcoin} from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { BsBoxArrowInUpRight } from 'react-icons/bs'


import img2 from '../photo/11.png'
import img3 from '../photo/Ellipse 131.png'
export default function midbar() {
  return (
      <div className='midbar'>
          <div className='midbarwrapper'>
              <div className="midbarmenu">
                  <div className="midbartitle">
                      Section 
                      <div className="under">
                          .
                      </div>
                      <div className="midsideWrapper">
                      <div className="midside">
                              <AccountBalanceWalletOutlined className='wallet' /> 
                              <div className="xyz">
                                  0.2 $XYZ
                              </div>
                           
                          
                          </div>
                          
                          
                      </div>
                      <div className="sideWrapper">
                              <div className="side">
                              Tier 1
                              </div>
                             
                          </div>
                  </div>
                  <div className="adwrapper">
                      <div className="ad">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          <img src={img2} className='logo'  />
                      </div>
                      <div className="tutwrapper">
                          <div className="tut">
                              Tutorial
                          </div>
                      </div>
                      <div className="closewrapper">
                          
                              <Close className="close"/>
                          
                      </div>
                  </div>
                  <div className="rewardswrapper">
                      <div className="rewards">
                          Your rewards
                          
                      </div>
                      <div className="money">
                          $ 0.26231428
                          </div>
                      <div className="wrap1">
                          <div className="b1">
                              $40 AVAX
                          </div>
                      </div>
                      <div className="wrap2">
                          <div className="b2">
                              $10 BNB
                          </div>
                      </div>
                      <div className="wrap3">
                          <div className="b3">
                              $210 BTC
                          </div>
                      </div>
                      <div className="linkwrapper">
                      <BsBoxArrowInUpRight className='lishare'/> 
                          <div className="link">
                            Custom link
                         </div>
                      </div>

                  </div>
                  <div className="referalwrapper">
                      <div className="cirap">
                          <div className="cir1">
                          <Circle className='circle' />
                          </div>
                          <div className="cirwrap">
                          12.5% of fee
                          </div>
                          
                        
                      </div>
                      
                      
                      <div className="r1">
                          Your Referral Link for xyz
                      </div>
                      <div className="rwrap">
                      <AutoAwesomeMotionRounded className="r3"/>
                          <div className="r2" >
                         
                          https://unityexchange.design 
                          
                              
                          </div>
                          
                         
                         

                      </div>
                  </div>
                  <div className="referalwrapper1">
                      <div className="cirap">
                          <div className="cir1">
                          <Circle className='circle' />
                          </div>
                          <div className="cirwrap">
                          12.5% of fee
                          </div>
                          
                        
                      </div>
                      
                      
                      <div className="r1">
                          Your Referral Link for xyz
                      </div>
                      <div className="rwrap">
                      <AutoAwesomeMotionRounded className="r3"/>
                          <div className="r2" >
                         
                          https://unityexchange.design 
                          
                              
                          </div>
                          
                         
                         

                      </div>
                     </div>
                     <div className="midbartitle1">
                      First Tab 
                      <div className="under1">
                          .
                      </div>
                     
                  </div>
                  <div className="t1">
                          Second Tab
                  </div>
                  <div className="lastbarwrap">
                      <div className="l1">
                          ASSET 
                      </div>
                      <div className="l2">
                          AMOUNT 
                      </div>
                      <div className="l3">
                          USER ACCOUNT
                      </div>
                      <div className="l4">
                          REFERRAL EARNING
                      </div>
                  </div>
                  <div className="tablewrap">
                      <div className="twrap">

                      </div>
                  </div>
                  <div className="bitwrap">
                      <div className="coinwrap">
                          <ul className="bitt">
                              <li className="bitcoin">
                                  <FaBitcoin className='Fa' />  &nbsp;
                                  <div className="bi">
                                  Bitcoin
                                  </div>
                                
                              </li>
                          </ul>
                      
                          <div className="put">Put</div>
                          <div className="avwrap">
                          <img src={img3} className='av'  />
                              <div className="avax">
                              AVAX
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="bnbwrap">
                      <div className="bnb">
                      0.0000 BNB
                      </div>
                    
                      <div className="expired">
                          Expired
                      </div>
                  </div>
                  <div className="usera">
                  0xFbE..0f58A7D
                  </div>
                  <div className="earnwrap">
                      <div className="e1">
                      0.000.BNB
                      </div>
                      <FiExternalLink className='v1'/>
                      <div className="view">
                      View on BSC Scan
                      </div>
                  </div>
              </div>

          </div>
      
    </div>
  )
}
