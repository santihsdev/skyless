<script>
	import FacebookIcon from "../../icons/FacebookIcon.svelte";
	import InstagramIcon from "../../icons/InstagramIcon.svelte";
	import PhoneIcon from "../../icons/PhoneIcon.svelte";
	import TwitterIcon from "../../icons/TwitterIcon.svelte";
	import WhatsappIcon from "../../icons/WhatsappIcon.svelte";
    import MessageIcon from "../../icons/MessageIcon.svelte";
	import MapIcon from "../../icons/MapIcon.svelte";

</script>
<footer class="footer p-10 bg-base-300 text-base-content">
	<div>
        <img src="./src/lib/images/MedicalCheckLogo.png" width="200px">
	</div>
	<div>
		<span class="footer-title">Contact us</span>
        <div class="sm:flex">
            <WhatsappIcon/>
            <p>(+591) 77889944</p>
        </div>
        <div class="sm:flex">
            <PhoneIcon/>
            <p>4-4535668</p>
        </div>
        <div class="sm:flex">
            <MessageIcon/>
            <p>medical.check@mc.bo</p>
        </div>
        <div class="sm:flex">
            <MapIcon/>
            <p>Av. America</p>
        </div>
	</div>
	<div>
		<span class="footer-title">Social</span>
        <div class="sm:flex">
            <div class="grid grid-flow-col gap-4">
                <a>
                    <InstagramIcon/>
                </a>
                <a>
                    <FacebookIcon/>
                </a>
                <a>
                    <TwitterIcon/>
                </a>
            </div>
        </div>
        
	</div>
</footer>
