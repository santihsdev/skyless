<script>
	import FacebookIcon from "../../icons/FacebookIcon.svelte";
	import InstagramIcon from "../../icons/InstagramIcon.svelte";
	import PhoneIcon from "../../icons/PhoneIcon.svelte";
	import TwitterIcon from "../../icons/TwitterIcon.svelte";
	import WhatsappIcon from "../../icons/WhatsappIcon.svelte";
    import MessageIcon from "../../icons/MessageIcon.svelte";
	import MapIcon from "../../icons/MapIcon.svelte";
	import MedicalCheckLogo from "$lib/images/MedicalCheckLogo.png"; 
</script>

<footer class="footer z-50 w-auto bg-base-300 text-base-content">
    <div class="mx-auto w-full max-w-screen-xl p-6 py-6 lg:py-8">
        <div class="grid grid-cols-3 gap-72 sm:gap-x-72 sm:grid-cols-3">
            <div class="p-5">
                <img src={MedicalCheckLogo} width="200px">
            </div>
            <div>
                <div class="pb-3">
                    <span class="footer-title">Contact us</span>
                </div>
                <div class="sm:flex pb-2">
                    <div class="pr-3"><WhatsappIcon/></div>
                    <p>(+591) 77889944</p>
                </div>
                <div class="sm:flex pb-2">
                    <div class="pr-3"><PhoneIcon/></div>
                    <p>4-4535668</p>
                </div>
                <div class="sm:flex pb-2">
                    <div class="pr-3"><MessageIcon/></div>
                    <p>medical.check@mc.bo</p>
                </div>
                <div class="sm:flex">
                    <div class="pr-3"><MapIcon/></div>
                    <p>Av. America</p>
                </div>
            </div>
            <div>
                <div class="pb-3">
                    <span class="footer-title">Social</span>
                </div>
                <div class="sm:flex">
                    <div class="grid grid-flow-col gap-4">
                        <a> <InstagramIcon/> </a>
                        <a> <FacebookIcon/> </a>
                        <a> <TwitterIcon/> </a>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-white sm:mx-auto dark:border-gray-700 lg:my-2" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Skyless™</a>. All Rights Reserved.
            </span>
        </div>
    </div>
</footer>
