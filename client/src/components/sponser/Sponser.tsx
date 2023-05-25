import styles from "./sponser.module.css"
import {DiJqueryLogo} from "react-icons/di"
import {IoLogoApple, IoLogoChrome, IoLogoDropbox, IoLogoGithub, IoLogoGoogle, IoLogoLinkedin, IoLogoPinterest, IoLogoPlaystation, IoLogoSass, IoLogoSkype, IoLogoWindows} from "react-icons/io"

export default function Sponser(){
    return<>
    <div className={styles.body}>
    <div className={styles.marquee}>
        <div className={styles.marquee__group}>
        <div><DiJqueryLogo size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoApple size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoChrome size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoGithub size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoLinkedin size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoSkype size={40} className="text-[#3AB4F2]"/></div>
        </div>
      
        <div aria-hidden="true" className={styles.marquee__group}>
        <div ><IoLogoSass size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoWindows size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoDropbox size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoPinterest size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoPlaystation size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoGoogle size={40} className="text-[#3AB4F2]"/></div>

        </div>
      </div>
      </div>
      <div className={styles.body2}>
    <div className={styles.marquee2}>
        <div className={styles.marquee__group2}>
        <div><DiJqueryLogo size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoApple size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoChrome size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoGithub size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoLinkedin size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoSkype size={40} className="text-[#3AB4F2]"/></div>
        </div>
      
        <div aria-hidden="true" className={styles.marquee__group2}>
        <div ><IoLogoSass size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoWindows size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoDropbox size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoPinterest size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoPlaystation size={40} className="text-[#3AB4F2]"/></div>
        <div><IoLogoGoogle size={40} className="text-[#3AB4F2]"/></div>

        </div>
      </div>
      </div>
    </>
} 