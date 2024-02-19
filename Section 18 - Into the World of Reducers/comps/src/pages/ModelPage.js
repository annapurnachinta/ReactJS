import Modal from '../components/Model'
import Button from '../components/Button'
import {useState} from 'react'

function ModalPage() {
    const [showModal, setShowModal] = useState(false)
    const handleCLink = () =>{
        setShowModal(true)
    }

    const handleCLose = () => {
        setShowModal(false)
    }

    const actionBar = <div><Button primary onClick={handleCLose}>Accept</Button></div>

    const modal = <Modal onClosed={handleCLose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (<div>
                <Button onClick={handleCLink} primary>Open Modal </Button>
        {showModal && modal}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus diam, tempus ut sagittis vel, aliquam faucibus orci. Curabitur et rutrum elit, in congue odio. Aenean vitae ligula bibendum, ullamcorper nisl at, aliquet felis. Duis a nunc dui. Vivamus at libero commodo, semper augue nec, accumsan lacus. Sed eu elit nec mi rhoncus vehicula in vitae nibh. Curabitur at tellus vel felis facilisis pretium ut at tortor. Cras ullamcorper nulla id tortor viverra sodales nec a lacus. Nunc fermentum turpis quis ultrices cursus. Integer nec leo vitae dui mollis pretium. Ut cursus, metus in posuere rhoncus, lacus justo tincidunt lorem, vitae faucibus tellus lorem a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus diam, tempus ut sagittis vel, aliquam faucibus orci. Curabitur et rutrum elit, in congue odio. Aenean vitae ligula bibendum, ullamcorper nisl at, aliquet felis. Duis a nunc dui. Vivamus at libero commodo, semper augue nec, accumsan lacus. Sed eu elit nec mi rhoncus vehicula in vitae nibh. Curabitur at tellus vel felis facilisis pretium ut at tortor. Cras ullamcorper nulla id tortor viverra sodales nec a lacus. Nunc fermentum turpis quis ultrices cursus. Integer nec leo vitae dui mollis pretium. Ut cursus, metus in posuere rhoncus, lacus justo tincidunt lorem, vitae faucibus tellus lorem a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus diam, tempus ut sagittis vel, aliquam faucibus orci. Curabitur et rutrum elit, in congue odio. Aenean vitae ligula bibendum, ullamcorper nisl at, aliquet felis. Duis a nunc dui. Vivamus at libero commodo, semper augue nec, accumsan lacus. Sed eu elit nec mi rhoncus vehicula in vitae nibh. Curabitur at tellus vel felis facilisis pretium ut at tortor. Cras ullamcorper nulla id tortor viverra sodales nec a lacus. Nunc fermentum turpis quis ultrices cursus. Integer nec leo vitae dui mollis pretium. Ut cursus, metus in posuere rhoncus, lacus justo tincidunt lorem, vitae faucibus tellus lorem a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus diam, tempus ut sagittis vel, aliquam faucibus orci. Curabitur et rutrum elit, in congue odio. Aenean vitae ligula bibendum, ullamcorper nisl at, aliquet felis. Duis a nunc dui. Vivamus at libero commodo, semper augue nec, accumsan lacus. Sed eu elit nec mi rhoncus vehicula in vitae nibh. Curabitur at tellus vel felis facilisis pretium ut at tortor. Cras ullamcorper nulla id tortor viverra sodales nec a lacus. Nunc fermentum turpis quis ultrices cursus. Integer nec leo vitae dui mollis pretium. Ut cursus, metus in posuere rhoncus, lacus justo tincidunt lorem, vitae faucibus tellus lorem a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus diam, tempus ut sagittis vel, aliquam faucibus orci. Curabitur et rutrum elit, in congue odio. Aenean vitae ligula bibendum, ullamcorper nisl at, aliquet felis. Duis a nunc dui. Vivamus at libero commodo, semper augue nec, accumsan lacus. Sed eu elit nec mi rhoncus vehicula in vitae nibh. Curabitur at tellus vel felis facilisis pretium ut at tortor. Cras ullamcorper nulla id tortor viverra sodales nec a lacus. Nunc fermentum turpis quis ultrices cursus. Integer nec leo vitae dui mollis pretium. Ut cursus, metus in posuere rhoncus, lacus justo tincidunt lorem, vitae faucibus tellus lorem a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus diam, tempus ut sagittis vel, aliquam faucibus orci. Curabitur et rutrum elit, in congue odio. Aenean vitae ligula bibendum, ullamcorper nisl at, aliquet felis. Duis a nunc dui. Vivamus at libero commodo, semper augue nec, accumsan lacus. Sed eu elit nec mi rhoncus vehicula in vitae nibh. Curabitur at tellus vel felis facilisis pretium ut at tortor. Cras ullamcorper nulla id tortor viverra sodales nec a lacus. Nunc fermentum turpis quis ultrices cursus. Integer nec leo vitae dui mollis pretium. Ut cursus, metus in posuere rhoncus, lacus justo tincidunt lorem, vitae faucibus tellus lorem a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus diam, tempus ut sagittis vel, aliquam faucibus orci. Curabitur et rutrum elit, in congue odio. Aenean vitae ligula bibendum, ullamcorper nisl at, aliquet felis. Duis a nunc dui. Vivamus at libero commodo, semper augue nec, accumsan lacus. Sed eu elit nec mi rhoncus vehicula in vitae nibh. Curabitur at tellus vel felis facilisis pretium ut at tortor. Cras ullamcorper nulla id tortor viverra sodales nec a lacus. Nunc fermentum turpis quis ultrices cursus. Integer nec leo vitae dui mollis pretium. Ut cursus, metus in posuere rhoncus, lacus justo tincidunt lorem, vitae faucibus tellus lorem a ante.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus diam, tempus ut sagittis vel, aliquam faucibus orci. Curabitur et rutrum elit, in congue odio. Aenean vitae ligula bibendum, ullamcorper nisl at, aliquet felis. Duis a nunc dui. Vivamus at libero commodo, semper augue nec, accumsan lacus. Sed eu elit nec mi rhoncus vehicula in vitae nibh. Curabitur at tellus vel felis facilisis pretium ut at tortor. Cras ullamcorper nulla id tortor viverra sodales nec a lacus. Nunc fermentum turpis quis ultrices cursus. Integer nec leo vitae dui mollis pretium. Ut cursus, metus in posuere rhoncus, lacus justo tincidunt lorem, vitae faucibus tellus lorem a ante.</p>
        
        <Button onClick={handleCLink} primary>Open Modal </Button>
        {showModal && modal}
         </div>)
}

export default ModalPage