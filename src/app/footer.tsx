
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="mt-6 p-12 pb-32 lg:pb-12 transition-colors bg-light-background-secondary dark:bg-dark-background-secondary text-light-text dark:text-dark-text">
            <span className=''>
                 hi
            </span>
            <span className='flex gap-4 lg:float-right'>
                <a href="https://github.com/naviumproject">

                    <FontAwesomeIcon icon={faGithub} />
                </a>                
                <a href="https://github.com/naviumproject/website">

                    <FontAwesomeIcon icon={faTwitter} />
                </a>                
            </span>

        </footer>
    )
}