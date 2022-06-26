import React from 'react';
import chip from '../assets/chip.svg';
import signal from '../assets/signal.svg';
import logo from '../assets/logo.svg';
import './style.css'

export function NewCard(){
return(
    <div className='Card2'>
       	<section class="credit-Card2">
		<div class="Card2">
			<div class="face front absolute">
				<img src={chip} alt="Chip" id="chip" class="absolute"></img>
				<img src={signal} alt="Signal" id="signal" class="absolute"></img>
				<img src={logo} alt="Logo" id="logo" class="absolute"></img>
				<p id="owner" class="absolute">Palloma Adolfi</p>
			</div>
			<div class="face back absolute">
				<div id="graybar" class="absolute"></div>
				<div id="Card2-info" class="absolute">
					<p id="Card2-number">1234 5678 9999 0000</p>
					<div class="flex">
						<p class="flex informations">
							<span class="label">MEMBER SINCE</span>
							<span>06/01</span>
						</p>
						<p class="flex informations">
							<span class="label">VALID THRU</span>
							<span>06/22</span>
						</p>
						<p class="flex informations">
							<span class="label">SECURITY CODE</span>
							<span>@lloma93</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
)
}